import { NextResponse } from "next/server";
import { google } from "googleapis";

import { createClient } from "@/lib/supabase/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) {
  try {
    const { slug } = await params;

    const supabase = await createClient();

    /*
     * 1. Find the published resource
     */
    const { data: resource, error: resourceError } = await supabase
      .from("resources")
      .select("id, title, status")
      .eq("slug", slug)
      .eq("status", "published")
      .single();

    if (resourceError || !resource) {
      return NextResponse.json(
        { error: "Resource not found." },
        { status: 404 }
      );
    }

    /*
     * 2. Find its current version
     */
    const { data: version, error: versionError } = await supabase
      .from("resource_versions")
      .select(
        "id, version, file_name, file_type, drive_file_id, status"
      )
      .eq("resource_id", resource.id)
      .eq("status", "current")
      .single();

    if (
      versionError ||
      !version ||
      !version.drive_file_id
    ) {
      return NextResponse.json(
        { error: "No downloadable version is available." },
        { status: 404 }
      );
    }

    /*
     * 3. Google configuration
     */
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return NextResponse.json(
        { error: "Download service is not configured." },
        { status: 500 }
      );
    }

    /*
     * 4. Authenticate to Google Drive
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

    /*
     * 5. Retrieve the file from Drive
     */
    const driveResponse = await drive.files.get(
      {
        fileId: version.drive_file_id,
        alt: "media",
      },
      {
        responseType: "arraybuffer",
      }
    );

    const fileBuffer = Buffer.from(
      driveResponse.data as ArrayBuffer
    );

    /*
     * 6. Record download event
     */
    const userAgent = request.headers.get("user-agent");
    const referrer = request.headers.get("referer");

    const { error: eventError } = await supabase.rpc(
      "record_download_event",
       {
        p_resource_id: resource.id,
        p_version_id: version.id,
        p_referrer: referrer,
        p_user_agent: userAgent,
      }
    );

    if (eventError) {
      console.error(
        "Unable to record download event:",
        eventError
      );
    }

    /*
     * 7. Return actual file to visitor
     */
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type":
          driveResponse.headers["content-type"] ||
          "application/octet-stream",

        "Content-Disposition":
          `attachment; filename="${version.file_name.replace(/"/g, "")}"`,

        "Cache-Control":
          "private, no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Public resource download failed:", error);

    return NextResponse.json(
      { error: "Unable to download this resource." },
      { status: 500 }
    );
  }
}