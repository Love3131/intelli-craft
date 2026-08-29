import Link from "next/link";

const solutionLayers = [
  {
    icon: "📊",
    title: "Templates",
    text: "Start with reusable dashboards, trackers, reporting structures and business templates instead of rebuilding from scratch.",
  },
  {
    icon: "⚙️",
    title: "Automation",
    text: "Reduce repetitive work using formulas, validation, scripts and workflow automation where they add real value.",
  },
  {
    icon: "📈",
    title: "Business Systems",
    text: "Turn spreadsheets into structured workflows for recurring reporting, tracking, controls and management visibility.",
  },
];

const categories = [
  {
    title: "Dashboards & Reporting",
    items: [
      "KPI dashboards",
      "Management reports",
      "Trend analysis",
      "Automated summaries",
    ],
  },
  {
    title: "Project & Operations",
    items: [
      "Project trackers",
      "Task monitoring",
      "SLA tracking",
      "Operational controls",
    ],
  },
  {
    title: "Workforce & HR",
    items: [
      "Workforce allocation",
      "Headcount reporting",
      "Performance tracking",
      "Employee reporting",
    ],
  },
  {
    title: "Data & Validation",
    items: [
      "Data-quality checks",
      "Duplicate detection",
      "Validation rules",
      "Reconciliation workflows",
    ],
  },
  {
    title: "Recurring Reporting",
    items: [
      "Data consolidation",
      "Scheduled reporting",
      "Helper calculations",
      "Report preparation",
    ],
  },
  {
    title: "Business Automation",
    items: [
      "Email workflows",
      "Apps Script automation",
      "File processing",
      "Trigger-based actions",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Capture",
    text: "Bring structured business data into a consistent spreadsheet workflow.",
  },
  {
    number: "02",
    title: "Validate",
    text: "Check required fields, duplicates, formats and business rules before processing.",
  },
  {
    number: "03",
    title: "Calculate",
    text: "Automate recurring formulas, classifications, KPIs and helper logic.",
  },
  {
    number: "04",
    title: "Report",
    text: "Refresh dashboards, summaries and management-ready reporting views.",
  },
  {
    number: "05",
    title: "Trigger",
    text: "Where appropriate, initiate emails, reminders or downstream workflow actions.",
  },
];

const useCases = [
  {
    title: "Weekly Reporting",
    text: "Consolidate recurring source data, calculate reporting fields, refresh outputs and reduce repetitive report preparation.",
  },
  {
    title: "Workforce Allocation",
    text: "Track employee allocation, capacity, over-allocation, missing updates and management sign-off.",
  },
  {
    title: "Project Tracking",
    text: "Create structured project views for ownership, deadlines, progress, dependencies and risks.",
  },
  {
    title: "Data Validation",
    text: "Automatically identify missing records, duplicates, incorrect formats and reconciliation differences.",
  },
  {
    title: "Management Dashboards",
    text: "Convert operational spreadsheet data into KPI views, trends and exception-focused reporting.",
  },
  {
    title: "Follow-up Automation",
    text: "Use workflow logic to support reminders, status requests and recurring communication.",
  },
];

const included = [
  "Reusable spreadsheet templates",
  "Dashboard structures",
  "Business trackers",
  "Validation patterns",
  "Reporting frameworks",
  "Automation examples",
  "Apps Script components",
  "Formula patterns",
  "Workflow documentation",
  "Customization guidance",
];

const audiences = [
  {
    title: "Operations Teams",
    text: "Reduce recurring manual reporting and improve visibility across operational workflows.",
  },
  {
    title: "Analysts",
    text: "Build more reliable data preparation, KPI calculation and reporting processes.",
  },
  {
    title: "Managers",
    text: "Standardize trackers and dashboards used for recurring performance reviews.",
  },
  {
    title: "Small Businesses",
    text: "Build practical business systems without immediately investing in large enterprise platforms.",
  },
];

const faqs = [
  {
    question: "Is this only for Microsoft Excel?",
    answer:
      "No. The kit is intended to cover practical spreadsheet workflows across Excel and Google Sheets, with automation approaches selected according to the platform and use case.",
  },
  {
    question: "Do I need coding knowledge?",
    answer:
      "Not for every template. Some resources will be designed for direct use, while more advanced automation may use Apps Script or other scripting approaches and include implementation guidance.",
  },
  {
    question: "Is this a replacement for Power BI or other BI platforms?",
    answer:
      "Not necessarily. Spreadsheet automation is useful for many operational workflows, while larger or more complex reporting environments may benefit from dedicated BI or data platforms.",
  },
  {
    question: "Can the templates be customized?",
    answer:
      "The objective is to provide reusable starting structures that can be adapted to different KPIs, workflows, teams and reporting requirements.",
  },
];

export default function ExcelAutomationKit() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-8 py-20 lg:py-28">

          <Link
            href="/#products"
            className="text-sm font-semibold text-green-700 transition hover:text-green-800"
          >
            ← Back to Products
          </Link>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                  📈 Excel Automation Kit
                </span>

                <span className="rounded-full border border-green-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Spreadsheet Automation
                </span>

                <span className="rounded-full border border-green-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Coming Soon
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                Build Smarter
                <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  Spreadsheet Workflows.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                Practical templates, dashboards, trackers and automation
                components for turning repetitive Excel and Google Sheets work
                into structured business workflows.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/?product=Excel%20Automation%20Kit#contact"
                  className="rounded-xl bg-green-600 px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-green-700"
                >
                  Register Interest
                </Link>

                <Link
                  href="/resources/free-downloads"
                  className="rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-lg"
                >
                  Explore Free Templates
                </Link>
              </div>
            </div>

            {/* WORKFLOW PREVIEW */}
            <div className="rounded-3xl border border-green-100 bg-white p-7 shadow-2xl">

              <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                From Manual Work
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  "Copy Data",
                  "Check Errors",
                  "Calculate KPIs",
                  "Prepare Report",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-slate-50 p-4 text-center font-semibold text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="py-5 text-center text-2xl text-green-600">
                ↓
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-green-100">
                  To a Reusable Workflow
                </p>

                <p className="mt-3 text-lg font-bold">
                  Validate → Calculate → Report → Trigger
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-6xl px-8 py-24">

        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green-700">
            The Spreadsheet Problem
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Spreadsheets are powerful. Repeating the same work every week isn't.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Many business processes still depend on copying data, checking
            records, updating formulas, preparing reports and sending the same
            follow-ups manually. The spreadsheet itself is often not the
            problem—the workflow around it is.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Manual copy-paste",
            "Formula errors",
            "Repeated validation",
            "Recurring reporting effort",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center font-semibold"
            >
              {item}
            </div>
          ))}
        </div>

      </section>

      {/* SOLUTION LAYERS */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              Three Layers
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              From template to automation to business system
            </h2>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {solutionLayers.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-8 py-24">

        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green-700">
            Toolkit Categories
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Built around recurring business workflows
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                {category.title}
              </h3>

              <div className="mt-5 space-y-3">
                {category.items.map((item) => (
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
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              Automation Flow
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Turn recurring spreadsheet steps into a repeatable process
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {workflow.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-green-700">
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
            <div className="grid gap-5 text-center md:grid-cols-5">
              {[
                "Source Data",
                "Validation",
                "Business Logic",
                "Dashboard",
                "Action",
              ].map((item) => (
                <div key={item}>
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-7xl px-8 py-24">

        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green-700">
            Practical Use Cases
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Where spreadsheet automation creates value
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* PLATFORM FLEXIBILITY */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-24">

        <div className="mx-auto max-w-6xl px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-green-700">
                Excel + Google Sheets
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Use the platform that fits the workflow.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Some workflows are best suited to Excel. Others benefit from
                Google Sheets collaboration, Apps Script and Google Workspace
                integration. The automation approach should follow the
                business requirement.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["Excel", "Formulas, dashboards, structured reporting"],
                ["Google Sheets", "Collaboration and cloud workflows"],
                ["Apps Script", "Triggers, automation and integrations"],
                ["AI Assistance", "Analysis, summaries and workflow support"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-bold text-green-700">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="mx-auto max-w-6xl px-8 py-24">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              What's Included
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Reusable building blocks for business workflows
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              The toolkit is being designed as a practical starting point for
              recurring spreadsheet processes rather than a collection of
              decorative templates.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {included.map((item) => (
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

      {/* AUDIENCE */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              Who It's For
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              For teams that still run important work through spreadsheets
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREE TEMPLATES */}
      <section className="mx-auto max-w-5xl px-8 py-24 text-center">

        <span className="text-sm font-bold uppercase tracking-widest text-green-700">
          Try Free Resources Today
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          The full automation kit is coming. Free templates are already available.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Explore EruDigm's free dashboard and spreadsheet resources while the
          complete Excel Automation Kit is being prepared.
        </p>

        <Link
          href="/resources/free-downloads"
          className="mt-9 inline-block rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
        >
          Explore Free Downloads
        </Link>

      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-24">

        <div className="mx-auto max-w-5xl px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
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
                className="rounded-2xl border border-green-100 bg-white p-7"
              >
                <h3 className="text-lg font-bold">{item.question}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-emerald-300">
            Coming Soon
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Stop rebuilding the same spreadsheet process every month.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Register your interest in the EruDigm Excel Automation Kit and tell
            us which spreadsheet workflow consumes the most time in your work.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/?product=Excel%20Automation%20Kit#contact"
              className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Register Interest
            </Link>

            <Link
              href="/resources/free-downloads"
              className="rounded-xl border border-slate-600 px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Explore Free Templates
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}