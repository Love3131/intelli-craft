"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

export default function PublishVersionButton({
  resourceId,
  versionId,
  version,
}: {
  resourceId: string;
  versionId: string;
  version: string;
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePublish = async () => {
    const confirmed = window.confirm(
      `Publish version ${version}?\n\nThis version will become the current public version. Any existing current version will be archived automatically.`
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);
    setError("");

    const supabase = createClient();

    const { error: publishError } = await supabase.rpc(
      "publish_resource_version",
      {
        p_resource_id: resourceId,
        p_version_id: versionId,
      }
    );

    if (publishError) {
      console.error("Unable to publish version:", publishError);
      setError("Unable to publish this version.");
      setLoading(false);
      return;
    }

    router.refresh();
    setLoading(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handlePublish}
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <CheckCircle size={16} />

        {loading ? "Publishing..." : "Publish"}
      </button>

      {error && (
        <p className="mt-2 text-xs font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}