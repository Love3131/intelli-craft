import { createClient } from "@/lib/supabase/server";
import FreeDownloadsClient from "@/components/FreeDownloadsClient";

function formatFileSize(bytes: number | null) {
  if (!bytes) {
    return "—";
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(0)} KB`;
  }

  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default async function FreeDownloadsPage() {
  const supabase = await createClient();

  const { data: resources, error } = await supabase
    .from("resources")
    .select(`
      id,
      title,
      slug,
      short_description,
      resource_categories (
        name
      ),
      resource_versions!inner (
        id,
        file_type,
        file_size,
        status
      )
    `)
    .eq("status", "published")
    .eq("resource_versions.status", "current")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Unable to load free downloads:", error);
  }

  const publishedResources = resources ?? [];

  const downloads = await Promise.all(
    publishedResources.map(async (resource) => {
      const version = resource.resource_versions?.[0];

      let downloadCount = 0;

      if (version?.id) {
        const { count } = await supabase
          .from("download_events")
          .select("*", {
            count: "exact",
            head: true,
          })
          .eq("version_id", version.id);

        downloadCount = count ?? 0;
      }

      const category =
        resource.resource_categories?.[0]?.name ??
        "Business Resource";

      const extension =
        version?.file_type?.toUpperCase() ?? "FILE";

      return {
        id: resource.id,
        title: resource.title,
        slug: resource.slug,
        type: `${category} • ${extension}`,
        size: formatFileSize(version?.file_size ?? null),
        downloads: downloadCount,
        description: resource.short_description,
        icon: "↓",
      };
    })
  );

  return <FreeDownloadsClient downloads={downloads} />;
}