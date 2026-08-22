"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  file: string;
};

export default function DownloadModal({
  open,
  onClose,
  title,
  file,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxNjHREAF1l20U0eF4nNbrYrbS6RxYLqK3MqIkYqgOwojkkd2SPFuTYyIOGp2RuI4Mz/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          resource: title,
          type: "Free",
        }),
      }
    );
  } catch (error) {
    console.error("Lead capture failed:", error);
  }

  // Download selected file
  const link = document.createElement("a");
  link.href = file;
  link.download = file.split("/").pop() || "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  alert("Thank you! Your download has started.");

  setForm({
    name: "",
    email: "",
  });

  onClose();
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl animate-in fade-in zoom-in-95 duration-300">

        <h2 className="text-3xl font-bold">
          Download Resource
        </h2>

        <p className="mt-3 text-gray-600">
          Fill in your details to download
          <span className="font-semibold text-blue-600"> {title}</span>.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <input
            type="text"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            required
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700 transition"
          >
            Download Now
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl border border-gray-300 py-4 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

        </form>

      </div>

    </div>
  );
}