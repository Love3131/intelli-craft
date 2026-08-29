import Link from "next/link";

const outcomes = [
  {
    title: "One Executive View",
    text: "Bring financial, operational, customer and workforce KPIs into one management view instead of reviewing disconnected reports.",
  },
  {
    title: "Focus on Exceptions",
    text: "Surface misses, unusual movements and areas requiring management attention instead of forcing leaders to inspect every metric.",
  },
  {
    title: "Reduce Reporting Effort",
    text: "Design recurring reporting around reusable data flows, calculations and dashboard refreshes.",
  },
  {
    title: "Move From Data to Action",
    text: "Combine KPI reporting with trends, commentary and decision-focused insights.",
  },
];

const kpiGroups = [
  {
    title: "Financial Performance",
    items: [
      "Revenue vs target",
      "Margin / profitability",
      "Budget variance",
      "Forecast performance",
    ],
  },
  {
    title: "Operational Performance",
    items: [
      "Productivity",
      "SLA performance",
      "Quality",
      "Throughput / volume",
    ],
  },
  {
    title: "People & Workforce",
    items: [
      "Headcount",
      "Attrition",
      "Capacity / allocation",
      "Employee performance",
    ],
  },
  {
    title: "Customer & Growth",
    items: [
      "Client performance",
      "Retention",
      "Growth indicators",
      "Risk signals",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Connect",
    text: "Bring together relevant source data from spreadsheets, reporting systems or other business sources.",
  },
  {
    number: "02",
    title: "Standardize",
    text: "Define KPI logic, targets, business rules and consistent reporting structures.",
  },
  {
    number: "03",
    title: "Visualize",
    text: "Build management-ready views around trends, targets, exceptions and comparisons.",
  },
  {
    number: "04",
    title: "Interpret",
    text: "Add business commentary or AI-assisted summaries to explain important movements.",
  },
  {
    number: "05",
    title: "Act",
    text: "Turn reporting into decisions, ownership and follow-up actions.",
  },
];

const useCases = [
  {
    title: "Monthly Executive Review",
    text: "Replace multiple reporting packs with one leadership view covering the KPIs that matter.",
  },
  {
    title: "Operations Performance",
    text: "Monitor productivity, quality, SLA and delivery performance across teams or projects.",
  },
  {
    title: "Workforce Management",
    text: "Track headcount, allocation, attrition and capacity alongside operational demand.",
  },
  {
    title: "Client Performance",
    text: "Create client-level views for service performance, risks, trends and management actions.",
  },
  {
    title: "Financial Monitoring",
    text: "Compare actuals with budget or target and quickly identify material variances.",
  },
  {
    title: "Management Reporting Automation",
    text: "Reduce repetitive consolidation, calculation and presentation preparation.",
  },
];

const deliverables = [
  "Executive KPI architecture",
  "Dashboard design and build",
  "Target and variance logic",
  "Period-over-period comparisons",
  "Filters and drill-down views",
  "Automated or simplified refresh workflow",
  "Management-ready visual structure",
  "Optional AI-assisted executive summaries",
];

const faqs = [
  {
    question: "Is this a fixed dashboard template?",
    answer:
      "No. The dashboard can be adapted to the organization's KPIs, reporting structure, data availability and management requirements.",
  },
  {
    question: "Which tools can be used?",
    answer:
      "The implementation can be designed around tools such as Power BI, Looker Studio, Excel or Google Sheets depending on the use case and existing technology environment.",
  },
  {
    question: "Can existing reports be redesigned?",
    answer:
      "Yes. Existing spreadsheets, dashboards and recurring management reports can be reviewed and redesigned into a more focused executive reporting structure.",
  },
  {
    question: "Can AI generate management insights?",
    answer:
      "AI-assisted summaries can be incorporated where appropriate, but important business conclusions should remain grounded in validated metrics and reviewed before decision-making.",
  },
];

export default function ExecutiveDashboard() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-8 py-20 lg:py-28">

          <Link
            href="/#products"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Back to Products
          </Link>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  Executive Dashboard
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Decision Intelligence
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Customizable
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                Stop Reporting Data.
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Start Managing Performance.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                Turn fragmented operational, financial and workforce reporting
                into one executive view designed around KPIs, trends,
                exceptions and management decisions.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/?product=Executive%20Dashboard#contact"
                  className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
                >
                  Request a Demo
                </a>

                <a
                  href="#how-it-works"
                  className="rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-lg"
                >
                  See How It Works ↓
                </a>
              </div>
            </div>

            {/* EXECUTIVE VIEW */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-2xl">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Executive Performance
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">
                    Management Overview
                  </h2>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  Illustrative
                </span>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  ["Revenue", "vs Target"],
                  ["SLA", "Performance"],
                  ["Productivity", "vs Goal"],
                  ["Attrition", "Trend"],
                ].map(([metric, context]) => (
                  <div
                    key={metric}
                    className="rounded-2xl border bg-slate-50 p-5"
                  >
                    <p className="text-sm text-gray-500">{context}</p>
                    <h3 className="mt-2 text-xl font-bold">{metric}</h3>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                  Management Focus
                </p>
                <p className="mt-3 leading-7 text-slate-200">
                  Surface material variances, emerging risks and areas requiring
                  management attention.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-6xl px-8 py-24">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            The Reporting Problem
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            More reports do not automatically create better decisions.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Leadership reporting often becomes a collection of spreadsheets,
            charts and presentations produced by different teams. The result
            can be significant reporting effort without a clear view of what
            changed, why it matters and where action is required.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Disconnected reports",
            "Manual consolidation",
            "Different KPI definitions",
            "Too little focus on exceptions",
          ].map((problem) => (
            <div
              key={problem}
              className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center font-semibold text-gray-800"
            >
              {problem}
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Designed for Decisions
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Build the reporting layer management actually needs
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* KPI FRAMEWORK */}
      <section className="mx-auto max-w-7xl px-8 py-24">

        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            KPI Framework
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            One dashboard can connect multiple dimensions of performance
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            The final KPI structure should reflect your business rather than
            forcing every organization into the same template.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {kpiGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-7"
            >
              <h3 className="text-xl font-bold">{group.title}</h3>

              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <p key={item} className="text-gray-600">
                    ✓ {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="how-it-works"
        className="scroll-mt-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              How It Works
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              From source data to management action
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {workflow.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
            <div className="grid gap-4 text-center md:grid-cols-5">
              {[
                "Source Data",
                "KPI Logic",
                "Dashboard",
                "Insights",
                "Action",
              ].map((item, index) => (
                <div key={item}>
                  <p className="font-bold">{item}</p>
                  {index < 4 && (
                    <p className="mt-2 text-cyan-300 md:hidden">↓</p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* AI INSIGHTS */}
      <section className="mx-auto max-w-6xl px-8 py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              AI-Assisted Insights
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              A dashboard should help explain performance—not only display it.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Where appropriate, validated dashboard metrics can be combined
              with AI-assisted analysis to summarize important changes,
              identify unusual movements and prepare a first draft of
              management commentary.
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              AI does not replace metric validation or management judgment.
              It helps reduce the effort required to move from numbers to an
              initial interpretation.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Example Insight Structure
            </p>

            <div className="mt-6 space-y-4">
              {[
                ["What changed?", "Highlight material KPI movements."],
                ["Where?", "Identify the segment, client or location contributing most."],
                ["Why?", "Surface likely drivers supported by available data."],
                ["What next?", "Suggest areas for management investigation or action."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl bg-slate-50 p-5">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Use Cases
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Designed around real management workflows
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="mx-auto max-w-6xl px-8 py-24">
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              What You Get
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              More than a collection of charts
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              The objective is to create a reporting system aligned with how
              management reviews performance, not simply apply a visual theme
              to existing data.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-slate-50 p-5 font-semibold text-gray-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-8 text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Technology Flexible
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            The business requirement should drive the tool—not the other way around.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Depending on the existing environment and reporting need, the
            solution can be designed around Power BI, Looker Studio, Excel,
            Google Sheets or a combination of data and automation components.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "Power BI",
              "Looker Studio",
              "Excel",
              "Google Sheets",
              "Automation",
              "AI Insights",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-blue-100 bg-white px-5 py-3 font-semibold text-gray-700 shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-8 py-24">

        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Common questions
          </h2>
        </div>

        <div className="mt-12 space-y-5">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-gray-200 bg-white p-7"
            >
              <h3 className="text-lg font-bold">{item.question}</h3>
              <p className="mt-3 leading-7 text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-cyan-300">
            Build Around Your Business
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Turn recurring reporting into a management system.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Tell us what your leadership team needs to monitor, where the data
            currently lives and which reporting activities consume the most
            time.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/?product=Executive%20Dashboard#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Request Executive Dashboard Demo
            </a>

            <Link
              href="/resources/free-downloads"
              className="rounded-xl border border-slate-600 px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Explore Free Resources
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}