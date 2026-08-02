"use client";

import Link from "next/link";
import { useState } from "react";
import DownloadModal from "@/components/DownloadModal";

const downloads = [
  {
    id: 1,
    title: "Executive Dashboard",
    type: "Excel Template",
    size: "2.4 MB",
    downloads: "1,245",
    rating: "★★★★★",
    icon: "📊",
    description:
      "Executive KPI dashboard with slicers, charts and monthly reporting.",
    file: "/downloads/executive-dashboard.xlsx",
  },
  {
    id: 2,
    title: "Sales Dashboard",
    type: "Excel Template",
    size: "1.8 MB",
    downloads: "845",
    rating: "★★★★★",
    icon: "📈",
    description:
      "Track sales performance using interactive Excel dashboards.",
    file: "/downloads/sales-dashboard.xlsx",
  },
  {
    id: 3,
    title: "Project Tracker",
    type: "Excel Template",
    size: "1.2 MB",
    downloads: "632",
    rating: "★★★★☆",
    icon: "📋",
    description:
      "Complete project tracker with milestones, status and deadlines.",
    file: "/downloads/project-tracker.xlsx",
  },
  {
    id: 4,
    title: "Leave Tracker",
    type: "Excel Template",
    size: "850 KB",
    downloads: "492",
    rating: "★★★★☆",
    icon: "📅",
    description:
      "Employee leave management template for HR teams.",
    file: "/downloads/leave-tracker.xlsx",
  },
  {
    id: 5,
    title: "AI Prompt Pack",
    type: "PDF",
    size: "3.1 MB",
    downloads: "2,430",
    rating: "★★★★★",
    icon: "🤖",
    description:
      "100+ ChatGPT prompts for productivity, business and marketing.",
    file: "/downloads/ai-prompts.pdf",
  },
  {
    id: 6,
    title: "KPI Dashboard",
    type: "Excel Template",
    size: "2.7 MB",
    downloads: "965",
    rating: "★★★★★",
    icon: "📑",
    description:
      "Business KPI dashboard for executives and managers.",
    file: "/downloads/kpi-dashboard.xlsx",
  },
];

export default function FreeDownloadsPage() {
  const [open, setOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const openModal = (title: string, file: string) => {
    setSelectedTitle(title);
    setSelectedFile(file);
    setOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">

        <div className="max-w-7xl mx-auto px-8 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 font-semibold">
            Free Downloads
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold">
            Free Business Resources
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            Download premium Excel templates, dashboards,
            AI prompt packs and productivity resources.
          </p>

        </div>

      </section>

      {/* Downloads */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {downloads.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl bg-white shadow-xl hover:shadow-2xl transition hover:-translate-y-2 overflow-hidden"
            >

              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-40 flex items-center justify-center text-7xl">
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

                  <div>⭐ {item.rating}</div>

                  <div>📦 {item.size}</div>

                  <div>⬇ {item.downloads} Downloads</div>

                </div>

                <button
                  onClick={() => openModal(item.title, item.file)}
                  className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Download Free
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

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