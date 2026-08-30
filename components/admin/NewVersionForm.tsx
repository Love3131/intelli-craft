"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FileUp } from "lucide-react";

export default function NewVersionForm({
  resourceId,
  resourceTitle,
}: {
  resourceId: string;
  resourceTitle: string;
}) {
  const router = useRouter();

  const [version, setVersion] = useState("");
  const [releaseNotes, setReleaseNotes] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!file) {
      setError("Please select a file.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();

      formData.append("resourceId", resourceId);
      formData.append("version", version);
      formData.append("releaseNotes", releaseNotes);
      formData.append("file", file);

      const response = await fetch(
        "/api/admin/resources/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to upload the resource."
        );
      }

      router.push(`/admin/downloads/${resourceId}`);
      router.refresh();
    } catch (uploadError) {
      console.error(
        "Resource version upload failed:",
        uploadError
      );

      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Unable to upload the resource."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 max-w-4xl rounded-3xl border border-blue-100 bg-white p-8 shadow-sm"
    >

      <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="text-sm font-semibold text-blue-700">
          Resource
        </p>

        <p className="mt-1 text-lg font-bold text-slate-900">
          {resourceTitle}
        </p>
      </div>

      <div className="grid gap-6">

        <div>
          <label className="text-sm font-bold text-gray-700">
            Version *
          </label>

          <input
            type="text"
            value={version}
            onChange={(event) =>
              setVersion(event.target.value)
            }
            required
            placeholder="1.1"
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />

          <p className="mt-2 text-xs text-gray-500">
            Examples: 1.0, 1.1, 2.0
          </p>
        </div>

        <div>
          <label className="text-sm font-bold text-gray-700">
            File *
          </label>

          <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 px-6 py-10 text-center transition hover:border-blue-400 hover:bg-blue-50">

            <FileUp
              size={32}
              className="text-blue-600"
            />

            <span className="mt-4 font-bold text-slate-900">
              {file ? file.name : "Choose a file"}
            </span>

            <span className="mt-2 text-sm text-gray-500">
              XLSX, XLSM, PDF, ZIP or CSV • Maximum 20 MB
            </span>

            <input
              type="file"
              accept=".xlsx,.xlsm,.pdf,.zip,.csv"
              onChange={(event) =>
                setFile(event.target.files?.[0] ?? null)
              }
              required
              className="hidden"
            />

          </label>

          {file && (
            <div className="mt-3 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-800">
              Selected: <strong>{file.name}</strong>{" "}
              ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </div>
          )}
        </div>

        <div>
          <label className="text-sm font-bold text-gray-700">
            Release Notes
          </label>

          <textarea
            rows={5}
            value={releaseNotes}
            onChange={(event) =>
              setReleaseNotes(event.target.value)
            }
            placeholder="Describe what's new or changed in this version."
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

      </div>

      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="font-bold text-blue-900">
          Draft upload
        </p>

        <p className="mt-2 text-sm leading-6 text-blue-800">
          The file will be uploaded to EruDigm's managed Google
          Drive storage and saved as a Draft version. Visitors
          cannot download it until an Owner or Admin publishes it.
        </p>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      <div className="mt-8 flex flex-wrap justify-end gap-4">

        <Link
          href={`/admin/downloads/${resourceId}`}
          className="rounded-xl border border-gray-200 px-6 py-3 font-bold text-gray-700 transition hover:bg-gray-50"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Uploading..."
            : "Upload Draft Version"}
        </button>

      </div>

    </form>
  );
}