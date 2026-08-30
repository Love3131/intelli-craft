import PublishVersionButton from "@/components/admin/PublishVersionButton";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Download,
  FileText,
  Plus,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";

export default async function ResourceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: resource, error } = await supabase
    .from("resources")
    .select(`
      id,
      title,
      slug,
      short_description,
      long_description,
      status,
      is_featured,
      created_at,
      resource_categories (
        name
      ),
      resource_versions (
        id,
        version,
        file_name,
        file_type,
        file_size,
        release_notes,
        status,
        published_at,
        created_at
      )
    `)
    .eq("id", id)
    .single();

  if (error || !resource) {
    notFound();
  }

  const category =
  resource.resource_categories?.[0]?.name ?? "Resource";

  const versions = [...(resource.resource_versions ?? [])].sort(
    (a, b) =>
      new Date(b.created_at).getTime() -
      new Date(a.created_at).getTime()
  );

  const currentVersion = versions.find(
    (version) => version.status === "current"
  );

  return (
    <section>

      <Link
        href="/admin/downloads"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft size={17} />
        Back to Downloads
      </Link>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-6">

        <div>
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
            {category || "Resource"}
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            {resource.title}
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            {resource.short_description}
          </p>
        </div>

        <Link
          href={`/admin/downloads/${resource.id}/versions/new`}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Version
        </Link>

      </div>

      {/* RESOURCE SUMMARY */}

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-gray-500">
            Resource Status
          </p>

          <p className="mt-3 text-xl font-bold capitalize">
            {resource.status}
          </p>
        </div>

        <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-gray-500">
            Current Version
          </p>

          <p className="mt-3 text-xl font-bold">
            {currentVersion?.version || "No published version"}
          </p>
        </div>

        <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-gray-500">
            Versions
          </p>

          <p className="mt-3 text-xl font-bold">
            {versions.length}
          </p>
        </div>

      </div>

      {/* VERSION HISTORY */}

      <div className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">

        <div className="border-b border-gray-100 px-7 py-6">
          <div className="flex items-center gap-3">
            <FileText size={20} className="text-blue-600" />

            <h3 className="text-xl font-bold">
              Version History
            </h3>
          </div>
        </div>

        {versions.length === 0 ? (

          <div className="px-8 py-16 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Download size={24} />
            </div>

            <h4 className="mt-5 text-xl font-bold">
              No versions uploaded
            </h4>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
              This resource exists as a draft, but it does not yet contain a
              downloadable file version.
            </p>

            <Link
              href={`/admin/downloads/${resource.id}/versions/new`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              <Plus size={18} />
              Add Version 1.0
            </Link>

          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="border-b border-gray-100 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-bold text-gray-600">
                    Version
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-600">
                    File
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-600">
                    Status
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-600">
                    Published
                  </th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {versions.map((version) => (
                  <tr
                    key={version.id}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <td className="px-6 py-5 font-bold">
                      v{version.version}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {version.file_name}
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold capitalize text-blue-700">
                        {version.status}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {version.published_at
                        ? new Date(version.published_at).toLocaleDateString()
                        : "—"}
                    </td>
                    <td className="px-6 py-5">
                      {version.status === "draft" ? (
                       <PublishVersionButton
                         resourceId={resource.id}
                         versionId={version.id}
                         version={version.version}
                       />
                      ) : version.status === "current" ? (
                    <span className="text-sm font-bold text-green-600">
                       Current
                    </span>
                     ) : (
                    <span className="text-sm text-gray-400">
                       Archived
                    </span>
                     )}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        )}

      </div>

    </section>
  );
}