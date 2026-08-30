import { NextResponse } from "next/server";
import { Readable } from "stream";
import { google } from "googleapis";

import { createClient } from "@/lib/supabase/server";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

const ALLOWED_EXTENSIONS = [
  "xlsx",
  "xlsm",
  "pdf",
  "zip",
  "csv",
];

export async function POST(request: Request) {
  try {
    /*
     * 1. Verify EruDigm Admin session
     */
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized." },
        { status: 401 }
      );
    }

    /*
     * 2. Verify role and account status
     */
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role, status")
      .eq("id", user.id)
      .single();

    if (
      profileError ||
      !profile ||
      profile.status !== "active" ||
      !["owner", "admin", "editor"].includes(profile.role)
    ) {
      return NextResponse.json(
        { error: "You do not have permission to upload resources." },
        { status: 403 }
      );
    }

    /*
     * 3. Read submitted form
     */
    const formData = await request.formData();

    const resourceId = formData.get("resourceId");
    const version = formData.get("version");
    const releaseNotes = formData.get("releaseNotes");
    const file = formData.get("file");

    if (
      typeof resourceId !== "string" ||
      typeof version !== "string" ||
      !(file instanceof File)
    ) {
      return NextResponse.json(
        { error: "Missing required upload information." },
        { status: 400 }
      );
    }

    /*
     * 4. Validate version
     */
    const cleanVersion = version.trim();

    if (!/^[0-9]+(\.[0-9]+){0,2}$/.test(cleanVersion)) {
      return NextResponse.json(
        {
          error:
            "Invalid version. Use a format such as 1.0, 1.1 or 2.0.",
        },
        { status: 400 }
      );
    }

    /*
     * 5. Validate file
     */
    if (file.size <= 0) {
      return NextResponse.json(
        { error: "The selected file is empty." },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File size must not exceed 20 MB." },
        { status: 400 }
      );
    }

    const extension =
      file.name.split(".").pop()?.toLowerCase() ?? "";

    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      return NextResponse.json(
        {
          error:
            "Unsupported file type. Use XLSX, XLSM, PDF, ZIP or CSV.",
        },
        { status: 400 }
      );
    }

    /*
     * 6. Confirm resource exists
     */
    const { data: resource, error: resourceError } = await supabase
       .from("resources")
       .select("id, title, category_id")
       .eq("id", resourceId)
       .single();

    if (resourceError || !resource) {
       return NextResponse.json(
        { error: "Resource not found." },
        { status: 404 }
       );
    }

    const { data: categoryRecord, error: categoryError } = await supabase
       .from("resource_categories")
       .select("name")
       .eq("id", resource.category_id)
       .single();

   if (categoryError || !categoryRecord) {
       return NextResponse.json(
       { error: "Resource category could not be determined." },
    { status: 500 }
    );
}

    /*
     * 7. Prevent duplicate version
     */
    const { data: existingVersion } = await supabase
      .from("resource_versions")
      .select("id")
      .eq("resource_id", resourceId)
      .eq("version", cleanVersion)
      .maybeSingle();

    if (existingVersion) {
      return NextResponse.json(
        {
          error: `Version ${cleanVersion} already exists for this resource.`,
        },
        { status: 409 }
      );
    }

    /*
     * 8. Check Google configuration
     */
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!clientId || !clientSecret || !refreshToken || !folderId) {
      return NextResponse.json(
        { error: "Google Drive is not configured." },
        { status: 500 }
      );
    }

    /*
     * 9. Authenticate to Google Drive
     */
    const oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret
    );

    oauth2Client.setCredentials({
      refresh_token: refreshToken,
    });

    const drive = google.drive({
      version: "v3",
      auth: oauth2Client,
    });

    const findOrCreateFolder = async (
      name: string,
      parentId: string
    ) => {
    const escapedName = name.replace(/'/g, "\\'");

    const existing = await drive.files.list({
     q: [
      `'${parentId}' in parents`,
      `name = '${escapedName}'`,
      `mimeType = 'application/vnd.google-apps.folder'`,
      `trashed = false`,
     ].join(" and "),
      fields: "files(id,name)",
      pageSize: 1,
    });

  const existingFolder = existing.data.files?.[0];

  if (existingFolder?.id) {
    return existingFolder.id;
  }

  const created = await drive.files.create({
    requestBody: {
      name,
      mimeType: "application/vnd.google-apps.folder",
      parents: [parentId],
    },
    fields: "id",
  });

  if (!created.data.id) {
    throw new Error(`Unable to create Drive folder: ${name}`);
  }

  return created.data.id;
};

/*
 * 10. Determine category and create Drive folder structure
 */
const category = categoryRecord.name;

const categoryFolderId = await findOrCreateFolder(
  category,
  folderId
);

const resourceFolderId = await findOrCreateFolder(
  resource.title,
  categoryFolderId
);

const versionFolderId = await findOrCreateFolder(
  `v${cleanVersion}`,
  resourceFolderId
);
    /*
     * 10. Upload physical file
     */
    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadResponse = await drive.files.create({
      requestBody: {
        name: file.name,
        parents: [versionFolderId],
      },
      media: {
        mimeType: file.type || "application/octet-stream",
        body: Readable.from(buffer),
      },
      fields: "id,name,size,mimeType",
    });

    const driveFileId = uploadResponse.data.id;

    if (!driveFileId) {
      throw new Error(
        "Google Drive upload completed without returning a file ID."
      );
    }

    /*
     * 11. Save version metadata to Supabase
     */
    const { error: versionError } = await supabase
      .from("resource_versions")
      .insert({
        resource_id: resourceId,
        version: cleanVersion,
        file_name: uploadResponse.data.name || file.name,
        file_type: extension,
        file_size: file.size,
        drive_file_id: driveFileId,
        release_notes:
          typeof releaseNotes === "string" && releaseNotes.trim()
            ? releaseNotes.trim()
            : null,
        status: "draft",
        uploaded_by: user.id,
      });

    if (versionError) {
      /*
       * Avoid leaving an orphaned Drive file when DB insertion fails.
       */
      try {
        await drive.files.delete({
          fileId: driveFileId,
        });
      } catch (cleanupError) {
        console.error(
          "Unable to clean up Drive file after database error:",
          cleanupError
        );
      }

      console.error(
        "Unable to save uploaded resource version:",
        versionError
      );

      return NextResponse.json(
        { error: "Unable to save the uploaded version." },
        { status: 500 }
      );
    }

    
    return NextResponse.json({
      success: true,
      resourceId,
      version: cleanVersion,
    });
  } catch (error) {
    console.error("Resource upload failed:", error);

    return NextResponse.json(
      { error: "Unable to upload the resource file." },
      { status: 500 }
    );
  }
}