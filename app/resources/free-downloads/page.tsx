import Link from "next/link";

export default function FreeDownloadsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="max-w-7xl mx-auto px-8 py-24">

        <span className="rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
          Free Downloads
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          Free Templates
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl">
          Download free Excel templates, dashboards, SQL cheat sheets and productivity resources.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {[
            "Excel KPI Dashboard",
            "SQL Cheat Sheet",
            "Project Tracker",
            "AI Prompt Sample",
            "Business Dashboard",
            "Power BI Template"
          ].map((item) => (

            <div
              key={item}
              className="rounded-3xl bg-white p-8 shadow hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold">{item}</h2>

              <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-white">
                Download
              </button>

            </div>

          ))}

        </div>

        <Link
          href="/resources"
          className="inline-block mt-16 rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          ← Back to Resources
        </Link>

      </section>

    </main>
  );
}