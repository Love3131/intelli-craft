import Link from "next/link";

export default function ExcelAutomationKit() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-green-600 font-semibold">
          Excel Automation Kit
        </span>

        <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight">
          Automate Excel &
          <span className="block text-green-600">
            Save Hundreds of Hours
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-gray-600 leading-8">
          Professional Excel dashboards, Google Sheets automation,
          Apps Script solutions and reporting templates for businesses.
        </p>

        <div className="mt-10 flex gap-5">

          <Link
            href="/#contact"
            className="rounded-xl bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700 transition"
          >
            Request Demo
          </Link>

          <Link
            href="/"
            className="rounded-xl border px-8 py-4 font-semibold hover:bg-gray-100 transition"
          >
            Back Home
          </Link>

        </div>

      </section>

      {/* Preview */}

      <section className="max-w-7xl mx-auto px-8">

        <div className="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-12 text-white">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h2 className="text-4xl font-bold">
                Automate Repetitive Work
              </h2>

              <p className="mt-6 text-lg opacity-90">
                Reduce manual effort using ready-made templates,
                dashboards and automation scripts.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 text-gray-900 shadow-2xl">

              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-xl border p-5">
                  📊 Dashboards
                </div>

                <div className="rounded-xl border p-5">
                  ⚡ Automation
                </div>

                <div className="rounded-xl border p-5">
                  📈 Reports
                </div>

                <div className="rounded-xl border p-5">
                  ☁️ Google Sheets
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-4xl font-bold text-center">
          What's Included
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {[
            "Excel Dashboards",
            "Apps Script",
            "Google Sheets",
            "Automation Templates",
            "HR Reports",
            "Business Analytics",
          ].map((feature) => (

            <div
              key={feature}
              className="rounded-2xl border bg-white p-8 shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold">
                {feature}
              </h3>
            </div>

          ))}

        </div>

      </section>

    </main>
  );
}