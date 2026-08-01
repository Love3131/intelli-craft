import Link from "next/link";

export default function ExecutiveDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-blue-600 font-semibold">
          Executive Dashboard
        </span>

        <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight">
          Make Better Business Decisions
          <span className="block text-blue-600">
            With Interactive Dashboards
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-gray-600 leading-8">
          Executive Dashboard helps organizations monitor KPIs,
          SLA performance, attrition, productivity and operational
          metrics through beautiful interactive dashboards.
        </p>

        <div className="mt-10 flex gap-5">

          <Link
            href="/#contact"
            className="rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
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

      {/* Dashboard Preview */}

      <section className="max-w-7xl mx-auto px-8">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-white">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h2 className="text-4xl font-bold">
                Executive Reporting
              </h2>

              <p className="mt-6 text-lg opacity-90">
                Monitor business performance using interactive
                visualizations and executive-level insights.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 text-gray-900 shadow-2xl">

              <div className="flex justify-between">

                <span>Overall KPI</span>

                <span className="font-bold text-green-600">
                  94%
                </span>

              </div>

              <div className="mt-5 h-3 rounded-full bg-gray-200">

                <div className="h-3 w-[94%] rounded-full bg-blue-600"></div>

              </div>

              <div className="grid grid-cols-2 gap-5 mt-8">

                <div className="rounded-xl border p-5">
                  <p className="text-gray-500">Projects</p>
                  <h3 className="text-3xl font-bold">48</h3>
                </div>

                <div className="rounded-xl border p-5">
                  <p className="text-gray-500">SLA</p>
                  <h3 className="text-3xl font-bold">99%</h3>
                </div>

                <div className="rounded-xl border p-5">
                  <p className="text-gray-500">Attrition</p>
                  <h3 className="text-3xl font-bold">8%</h3>
                </div>

                <div className="rounded-xl border p-5">
                  <p className="text-gray-500">Status</p>
                  <h3 className="text-3xl font-bold text-green-600">
                    Healthy
                  </h3>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-4xl font-bold text-center">
          Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {[
            "Executive KPIs",
            "Interactive Charts",
            "SLA Tracking",
            "Attrition Dashboard",
            "Power BI / Looker Studio",
            "Excel Reporting",
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