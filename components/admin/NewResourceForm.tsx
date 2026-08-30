"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Category = {
  id: string;
  name: string;
};

export default function NewResourceForm({
  categories,
}: {
  categories: Category[];
}) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateSlug = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setSlug(generateSlug(value));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError("Your session has expired. Please sign in again.");
      setLoading(false);
      return;
    }

    const { error: insertError } = await supabase
      .from("resources")
      .insert({
        category_id: categoryId,
        title,
        slug,
        short_description: shortDescription,
        long_description: longDescription || null,
        status: "draft",
        is_featured: isFeatured,
        created_by: user.id,
      });

    if (insertError) {
      console.error("Unable to create resource:", insertError);

      if (insertError.code === "23505") {
        setError(
          "A resource with this slug already exists. Please use a different slug."
        );
      } else {
        setError("Unable to create the resource. Please try again.");
      }

      setLoading(false);
      return;
    }

    router.push("/admin/downloads");
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 max-w-4xl rounded-3xl border border-blue-100 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <div className="md:col-span-2">
          <label className="text-sm font-bold text-gray-700">
            Resource Title *
          </label>

          <input
            type="text"
            value={title}
            onChange={(event) => handleTitleChange(event.target.value)}
            required
            placeholder="Executive Dashboard Template"
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-gray-700">
            Slug *
          </label>

          <input
            type="text"
            value={slug}
            onChange={(event) => setSlug(generateSlug(event.target.value))}
            required
            placeholder="executive-dashboard-template"
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-gray-700">
            Category *
          </label>

          <select
            value={categoryId}
            onChange={(event) => setCategoryId(event.target.value)}
            required
            className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select category</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-bold text-gray-700">
            Short Description *
          </label>

          <textarea
            rows={3}
            value={shortDescription}
            onChange={(event) => setShortDescription(event.target.value)}
            required
            placeholder="A concise description shown on the public downloads page."
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-bold text-gray-700">
            Detailed Description
          </label>

          <textarea
            rows={6}
            value={longDescription}
            onChange={(event) => setLongDescription(event.target.value)}
            placeholder="Describe what the resource contains and how it can be used."
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

      </div>

      <label className="mt-6 flex items-center gap-3">
        <input
          type="checkbox"
          checked={isFeatured}
          onChange={(event) => setIsFeatured(event.target.checked)}
          className="h-4 w-4"
        />

        <span className="text-sm font-semibold text-gray-700">
          Feature this resource
        </span>
      </label>

      <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-5">
        <p className="font-bold text-amber-900">
          Resource will be created as Draft
        </p>

        <p className="mt-2 text-sm leading-6 text-amber-800">
          Creating this record will not make anything public. A downloadable
          version must be added and published separately.
        </p>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      <div className="mt-8 flex flex-wrap justify-end gap-4">

        <Link
          href="/admin/downloads"
          className="rounded-xl border border-gray-200 px-6 py-3 font-bold text-gray-700 transition hover:bg-gray-50"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Draft Resource"}
        </button>

      </div>

    </form>
  );
}