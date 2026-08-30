"use client";

import { useState } from "react";
import Link from "next/link";
import DownloadModal from "@/components/DownloadModal";

type DownloadResource = {
  id: string;
  title: string;
  slug: string;
  type: string;
  size: string;
  downloads: number;
  description: string;
  icon: string;
};

export default function FreeDownloadsClient({
  downloads,
}: {
  downloads: DownloadResource[];
}) {
  const [open, setOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const openModal = (title: string, slug: string) => {
    setSelectedTitle(title);
    setSelectedFile(`/api/downloads/${slug}`);
    setOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-8 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 font-semibold">
            Free Downloads
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold">
            Free Business Resources
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            Download premium Excel templates, dashboards, AI resources and
            productivity tools.
          </p>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">

        {downloads.length === 0 ? (
          <div className="rounded-3xl bg-white p-14 text-center shadow-sm">
            <h2 className="text-2xl font-bold">
              New resources are coming soon
            </h2>

            <p className="mt-4 text-gray-600">
              We're preparing practical business resources for you.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {downloads.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white shadow-xl hover:shadow-2xl transition hover:-translate-y-2 overflow-hidden"
              >

                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-40 flex items-center justify-center text-6xl">
                  {item.icon}
                </div>

                <div className="p-8">

                  <span className="text-sm text-blue-600 font-semibold uppercase">
                    {item.type}
                  </span>

                  <h2 className="mt-3 text-2xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-gray-600 leading-7">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-2 text-gray-500 text-sm">
                    <div>File size: {item.size}</div>

                    <div>
                      {item.downloads.toLocaleString()}{" "}
                      {item.downloads === 1 ? "Download" : "Downloads"}
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      openModal(item.title, item.slug)
                    }
                    className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Download Free
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </section>

      <section className="max-w-5xl mx-auto px-8 pb-24">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center text-white">

          <h2 className="text-4xl font-bold">
            Want Premium Templates?
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            Get access to premium dashboards, automation tools,
            AI applications and exclusive business templates.
          </p>

          <Link
            href="/#contact"
            className="inline-block mt-10 rounded-xl bg-white px-8 py-4 font-bold text-blue-600 hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>

        </div>

      </section>

      <DownloadModal
        open={open}
        onClose={() => setOpen(false)}
        title={selectedTitle}
        file={selectedFile}
      />

    </main>
  );
}