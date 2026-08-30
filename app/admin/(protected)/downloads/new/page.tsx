import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import NewResourceForm from "@/components/admin/NewResourceForm";

export default async function NewResourcePage() {
  const supabase = await createClient();

  const { data: categories, error } = await supabase
    .from("resource_categories")
    .select("id, name")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Unable to load resource categories:", error);
  }

  return (
    <section>
      <Link
        href="/admin/downloads"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft size={17} />
        Back to Downloads
      </Link>

      <div className="mt-8">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
          Resource Management
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          Add New Resource
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          Create the main resource record first. File versions will be managed
          separately so future updates remain connected to the same resource.
        </p>
      </div>

      <NewResourceForm categories={categories ?? []} />
    </section>
  );
}