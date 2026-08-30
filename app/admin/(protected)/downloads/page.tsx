import Link from "next/link";
import { Download, Plus } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDownloadsPage() {
  const supabase = await createClient();

  const { data: resources, error } = await supabase
    .from("resources")
    .select(`
      id,
      title,
      slug,
      status,
      is_featured,
      created_at,
      resource_categories (
        name
      ),
      resource_versions (
        version,
        status
      )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Unable to load resources:", error);
  }

  const resourceList = resources ?? [];

  return (
    <section>

      <div className="flex flex-wrap items-start justify-between gap-6">

        <div>
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
            Resource Management
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Downloads
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Manage downloadable EruDigm resources, versions and publishing
            status from one place.
          </p>
        </div>

        <Link
          href="/admin/downloads/new"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Resource
        </Link>

      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">

        {resourceList.length === 0 ? (

          <div className="px-8 py-20 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Download size={28} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              No downloadable resources yet
            </h3>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
              Add your first EruDigm resource. Later, new versions will be
              managed under the same resource instead of creating duplicate
              download entries.
            </p>

            <Link
              href="/admin/downloads/new"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              <Plus size={18} />
              Add First Resource
            </Link>

          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="border-b border-gray-100 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-bold text-gray-600">
                    Resource
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-600">
                    Category
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-600">
                    Current Version
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-600">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {resourceList.map((resource) => {
                  const currentVersion = resource.resource_versions?.find(
                    (version) => version.status === "current"
                  );

                  const category =
                     resource.resource_categories?.[0]?.name ?? "—";

                  return (
                    <tr
                      key={resource.id}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="px-6 py-5">
                        <Link
                          href={`/admin/downloads/${resource.id}`}
                          className="font-bold text-slate-900 transition hover:text-blue-600"
                        >
                          {resource.title}
                        </Link>

                        <p className="mt-1 text-sm text-gray-500">
                          {resource.slug}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-gray-600">
                        {category || "—"}
                      </td>

                      <td className="px-6 py-5 font-semibold">
                        {currentVersion?.version || "—"}
                      </td>

                      <td className="px-6 py-5">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold capitalize text-blue-700">
                          {resource.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>

          </div>

        )}

      </div>

    </section>
  );
}