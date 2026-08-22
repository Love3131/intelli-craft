"use client";

import { useState } from "react";

type Props = {
  text: string;
};

export default function CopyPromptButton({ text }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy prompt:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-95"
    >
      {copied ? "Copied ✓" : "Copy Prompt"}
    </button>
  );
}