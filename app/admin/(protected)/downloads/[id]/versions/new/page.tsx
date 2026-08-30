import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import NewVersionForm from "@/components/admin/NewVersionForm";

export default async function NewVersionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: resource, error } = await supabase
    .from("resources")
    .select("id, title")
    .eq("id", id)
    .single();

  if (error || !resource) {
    notFound();
  }

  return (
    <section>
      <Link
        href={`/admin/downloads/${resource.id}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft size={17} />
        Back to Resource
      </Link>

      <div className="mt-8">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
          Version Management
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          Add New Version
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          {resource.title}
        </p>
      </div>

      <NewVersionForm
        resourceId={resource.id}
        resourceTitle={resource.title}
      />
    </section>
  );
}