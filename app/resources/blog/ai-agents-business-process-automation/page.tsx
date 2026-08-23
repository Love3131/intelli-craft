import Link from "next/link";

const processes = [
  {
    number: "01",
    title: "Performance Reporting",
    area: "Reporting & Analytics",
    description:
      "Turn recurring operational reporting into a controlled pipeline that collects data, validates it, identifies changes and prepares stakeholder communication.",
    flow:
      "Fetch data → validate → calculate KPIs → detect anomalies → investigate → update dashboard → prepare summary",
    deterministic:
      "Data extraction, validation rules, KPI calculations and dashboard refresh.",
    ai:
      "Explain unusual movements, identify likely drivers and draft the executive narrative.",
    human:
      "Review material exceptions and approve high-impact conclusions before distribution.",
  },
  {
    number: "02",
    title: "Overdue Follow-Up Management",
    area: "Communication",
    description:
      "Track commitments and automatically prepare appropriate follow-ups when expected responses or actions are overdue.",
    flow:
      "Track deadline → detect overdue item → inspect context → determine follow-up → draft/send → continue monitoring",
    deterministic:
      "Deadline tracking, overdue detection and reminder cadence.",
    ai:
      "Understand the conversation context and prepare an appropriate follow-up.",
    human:
      "Approve sensitive escalations or messages to high-impact recipients where required.",
  },
  {
    number: "03",
    title: "Document Intake & Processing",
    area: "Operations",
    description:
      "Process incoming forms, invoices, reports, applications or other business documents with exception handling.",
    flow:
      "Receive → classify → extract → validate → update system → route exception",
    deterministic:
      "Required-field checks, format validation, routing rules and system updates.",
    ai:
      "Classify unstructured documents, extract information and interpret ambiguous content.",
    human:
      "Resolve low-confidence extraction, policy exceptions or high-risk documents.",
  },
  {
    number: "04",
    title: "Research & Competitive Intelligence",
    area: "Strategy",
    description:
      "Continuously research markets, competitors, technologies or regulatory developments and convert evidence into decision-ready briefs.",
    flow:
      "Define question → search → evaluate sources → compare evidence → synthesize → brief stakeholders",
    deterministic:
      "Scheduled execution, source lists, formatting and distribution.",
    ai:
      "Choose useful research paths, synthesize evidence and identify conflicting information.",
    human:
      "Validate strategic conclusions and make the actual business decision.",
  },
  {
    number: "05",
    title: "Customer Support Triage",
    area: "Customer Operations",
    description:
      "Understand incoming requests, retrieve relevant customer and knowledge context, and route or resolve appropriate cases.",
    flow:
      "Receive request → classify → retrieve context → recommend/act → verify → escalate",
    deterministic:
      "Identity checks, routing rules, service-level tracking and restricted actions.",
    ai:
      "Understand intent, retrieve relevant knowledge and formulate context-specific responses.",
    human:
      "Handle sensitive, unusual, disputed or high-value cases.",
  },
  {
    number: "06",
    title: "Invoice & Finance Operations",
    area: "Finance",
    description:
      "Assist with invoice processing, reconciliation and exception investigation while keeping financial controls deterministic.",
    flow:
      "Receive invoice → extract → match → validate → investigate exception → approve → post",
    deterministic:
      "Tolerance rules, duplicate detection, matching logic, approval thresholds and posting controls.",
    ai:
      "Interpret unstructured invoices and investigate exceptions using supporting context.",
    human:
      "Approve payments, policy exceptions and material financial decisions.",
  },
  {
    number: "07",
    title: "Employee Onboarding",
    area: "People Operations",
    description:
      "Coordinate onboarding tasks across HR, IT, managers and new employees without losing visibility of incomplete steps.",
    flow:
      "New hire confirmed → create checklist → coordinate systems → answer questions → monitor completion → escalate gaps",
    deterministic:
      "Account creation triggers, checklists, deadlines and mandatory compliance steps.",
    ai:
      "Answer contextual onboarding questions and identify missing or inconsistent information.",
    human:
      "Handle employment decisions, exceptions and sensitive employee matters.",
  },
  {
    number: "08",
    title: "Quality Monitoring",
    area: "Quality & Compliance",
    description:
      "Monitor operational outputs for unusual patterns, summarize recurring issues and prioritize cases requiring investigation.",
    flow:
      "Collect quality data → apply rules → detect pattern → investigate → summarize → assign corrective action",
    deterministic:
      "Quality thresholds, sampling rules and required compliance checks.",
    ai:
      "Cluster recurring issues, summarize patterns and investigate likely drivers.",
    human:
      "Confirm root cause and approve corrective or disciplinary actions.",
  },
  {
    number: "09",
    title: "Project Status Coordination",
    area: "Project Management",
    description:
      "Collect updates from multiple sources, identify blockers and prepare an accurate project status without manual chasing.",
    flow:
      "Collect updates → compare plan → identify blockers → request missing context → summarize → escalate",
    deterministic:
      "Milestones, deadlines, status rules and notification schedules.",
    ai:
      "Interpret unstructured updates, identify risks and determine what additional context is needed.",
    human:
      "Make priority, scope, budget and resource decisions.",
  },
  {
    number: "10",
    title: "Knowledge Management",
    area: "Knowledge Operations",
    description:
      "Help teams find trusted information while identifying gaps, outdated content and repeated unanswered questions.",
    flow:
      "Receive question → retrieve knowledge → answer with evidence → identify gap → route update → improve knowledge base",
    deterministic:
      "Access controls, document version rules and publication workflows.",
    ai:
      "Retrieve, synthesize and explain relevant knowledge while identifying missing documentation.",
    human:
      "Approve authoritative policies, procedures and sensitive knowledge changes.",
  },
];

const readiness = [
  {
    title: "Clear Objective",
    text: "The business outcome can be defined clearly enough to know whether the automation succeeded.",
  },
  {
    title: "Accessible Systems",
    text: "Required data, applications and tools can be accessed securely through supported integrations.",
  },
  {
    title: "Known Controls",
    text: "Business rules, permissions and approval boundaries are understood.",
  },
  {
    title: "Measurable Baseline",
    text: "Current time, cost, quality or service performance can be measured before automation.",
  },
  {
    title: "Exception Strategy",
    text: "The system knows what to do when confidence is low or the normal process fails.",
  },
  {
    title: "Accountability",
    text: "A person or team remains responsible for the business process after automation.",
  },
];

const metrics = [
  "Cycle time",
  "Manual hours removed",
  "Exception rate",
  "Error / rework rate",
  "Cost per transaction",
  "SLA performance",
  "Human escalation rate",
  "Quality / accuracy",
];

export default function AIAgentsBusinessAutomationArticle() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/resources/blog"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            ← Back to EruDigm Insights
          </Link>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  Automation
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Business Guide
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  13 min read
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                10 Business Processes
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  AI Agents Can Automate
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                The strongest AI automation does not replace every rule with a
                model. It combines deterministic software, AI judgment and
                human control to automate complete business outcomes.
              </p>

              <a
                href="#processes"
                className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                Explore the 10 Processes ↓
              </a>
            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Better Automation Architecture
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold text-gray-500">
                    DETERMINISTIC
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    Rules · Calculations · Validation
                  </p>
                </div>

                <div className="text-center text-xl text-blue-600">+</div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-xs font-bold text-blue-600">
                    AI
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    Interpret · Investigate · Adapt
                  </p>
                </div>

                <div className="text-center text-xl text-blue-600">+</div>

                <div className="rounded-2xl bg-slate-950 p-5 text-white">
                  <p className="text-xs font-bold text-cyan-300">
                    HUMAN CONTROL
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    Approve · Escalate · Decide
                  </p>
                </div>

                <div className="text-center text-xl text-blue-600">↓</div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-center font-bold text-white shadow-lg">
                  Reliable Business Outcome
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Beyond Task Automation
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          The opportunity is not “Where can we add AI?” It is “Where can we
          remove unnecessary work?”
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">
          <p>
            Traditional automation works extremely well when every step can be
            defined in advance. It struggles when a process contains
            unstructured information, frequent exceptions or decisions that
            depend on context.
          </p>

          <p>
            AI can fill some of those gaps. It can interpret documents,
            understand language, investigate anomalies, synthesize information
            and decide which tool or next step may be useful.
          </p>

          <p>
            That does not mean the entire process should become agentic.
            Calculations, financial controls, permissions and stable business
            rules are often better implemented deterministically. The goal is
            to combine each technology where it is strongest.
          </p>
        </div>
      </section>

      {/* THREE LAYERS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Automation Architecture
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Three layers of intelligent automation
            </h2>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <span className="text-sm font-bold text-gray-500">
                01 — SOFTWARE
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Automate what is known
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Use code, workflow engines and rules for calculations,
                validation, routing, permissions and predictable actions.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold text-blue-600">
                02 — AI
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Handle ambiguity
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Use models where language understanding, classification,
                interpretation, investigation or flexible reasoning adds value.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-200 bg-white p-8 shadow-xl">
              <span className="text-sm font-bold text-cyan-700">
                03 — PEOPLE
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Own consequential decisions
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Keep people responsible for material exceptions, approvals,
                policy decisions and situations where judgment has significant
                consequences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 PROCESSES */}
      <section
        id="processes"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            10 Practical Opportunities
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Business processes where intelligent automation can matter
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Each example separates predictable automation, AI judgment and
            human responsibility.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {processes.map((process) => (
            <article
              key={process.number}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:border-blue-200 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 lg:p-10">
                  <span className="text-sm font-bold text-blue-600">
                    {process.number}
                  </span>

                  <p className="mt-4 text-sm font-bold uppercase tracking-widest text-blue-600">
                    {process.area}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    {process.title}
                  </h3>

                  <p className="mt-5 leading-7 text-gray-600">
                    {process.description}
                  </p>
                </div>

                <div className="p-8 lg:p-10">
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    Example Workflow
                  </p>

                  <div className="mt-4 rounded-2xl bg-slate-950 p-5 text-sm font-semibold leading-7 text-cyan-200">
                    {process.flow}
                  </div>

                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-slate-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Automate
                      </p>

                      <p className="mt-3 text-sm leading-6 text-gray-700">
                        {process.deterministic}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-blue-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        AI
                      </p>

                      <p className="mt-3 text-sm leading-6 text-gray-700">
                        {process.ai}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-cyan-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                        Human
                      </p>

                      <p className="mt-3 text-sm leading-6 text-gray-700">
                        {process.human}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REPORTING DEEP DIVE */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Example Architecture
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What an intelligent weekly reporting process could look like
          </h2>

          <div className="mt-12 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">
            <div className="grid lg:grid-cols-7">
              {[
                ["1", "Fetch", "Automation"],
                ["2", "Validate", "Rules"],
                ["3", "Calculate", "Code"],
                ["4", "Investigate", "AI Agent"],
                ["5", "Refresh", "Automation"],
                ["6", "Summarize", "AI"],
                ["7", "Approve/Send", "Control"],
              ].map(([number, title, owner]) => (
                <div
                  key={number}
                  className="border-b border-gray-100 p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                    {number}
                  </span>

                  <h3 className="mt-4 font-bold">{title}</h3>

                  <p className="mt-2 text-xs font-semibold text-blue-600">
                    {owner}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-gray-600">
            Notice that the agent does not calculate the KPI merely because AI
            is available. Deterministic calculations remain deterministic. AI
            is introduced where investigation and interpretation benefit from
            flexible reasoning.
          </p>
        </div>
      </section>

      {/* AGENT OR WORKFLOW */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Architecture Choice
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Not every automation needs an agent
        </h2>

        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Use Deterministic Automation
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              When the correct process is already known
            </h3>

            <div className="mt-6 space-y-3 text-gray-700">
              <p>• Apply formulas and calculations.</p>
              <p>• Validate required fields.</p>
              <p>• Move data between systems.</p>
              <p>• Apply known business rules.</p>
              <p>• Trigger scheduled notifications.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-8">
            <span className="text-sm font-bold uppercase tracking-widest text-cyan-700">
              Consider an Agent
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              When the next step depends on context
            </h3>

            <div className="mt-6 space-y-3 text-gray-700">
              <p>• Investigate an unexpected anomaly.</p>
              <p>• Interpret unstructured information.</p>
              <p>• Decide which tool or source to inspect.</p>
              <p>• Adapt when the normal process fails.</p>
              <p>• Coordinate a multi-step open-ended task.</p>
            </div>
          </div>
        </div>
      </section>

      {/* READINESS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Automation Readiness
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Before automating a business process, check the foundation
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {readiness.map((item) => (
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

      {/* MEASURE */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Measure the Outcome
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          An impressive agent demo is not a business case
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          Measure the process before and after automation. The objective is not
          to maximize the number of AI steps. It is to improve business
          performance.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric}
              className="rounded-2xl border border-gray-200 bg-slate-50 p-5 text-center font-bold"
            >
              {metric}
            </div>
          ))}
        </div>
      </section>

      {/* HUMAN CONTROL */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl lg:p-12">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Human-in-the-Loop
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Approval should be based on consequence, not novelty
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
              A low-risk internal classification may not need approval every
              time. A payment, employment decision, contractual commitment or
              external message with material consequences may deserve explicit
              human authorization.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [
                  "Low Risk",
                  "Automate with monitoring",
                  "Classification, formatting, internal summaries",
                ],
                [
                  "Medium Risk",
                  "Automate + exception review",
                  "Operational updates, customer recommendations",
                ],
                [
                  "High Risk",
                  "Require authorization",
                  "Payments, legal commitments, employment decisions",
                ],
              ].map(([risk, control, examples]) => (
                <div
                  key={risk}
                  className="rounded-2xl bg-slate-50 p-6"
                >
                  <p className="text-sm font-bold text-blue-600">
                    {risk}
                  </p>

                  <h3 className="mt-3 text-xl font-bold">{control}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {examples}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* START SMALL */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Where to Start
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Start with one painful process—not an “AI transformation” program
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Choose a process that consumes meaningful manual effort, has a clear
          outcome, uses accessible systems and contains enough repeatability to
          measure improvement. Automate the stable parts first. Add AI only
          where it solves ambiguity that traditional automation cannot handle
          effectively.
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-5">
          {[
            ["1", "Map"],
            ["2", "Measure"],
            ["3", "Automate"],
            ["4", "Add AI"],
            ["5", "Evaluate"],
          ].map(([number, title]) => (
            <div
              key={number}
              className="rounded-2xl border border-gray-200 bg-slate-50 p-5"
            >
              <span className="text-sm font-bold text-blue-600">
                {number}
              </span>

              <p className="mt-2 font-bold">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Next In EruDigm Insights
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Agents can automate work—but how do they use tools, remember state
            and understand the right context?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Next we'll break down three building blocks behind useful agentic
            systems: Tools, Memory and Context.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/blog/ai-agents-vs-ai-assistants"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              ← Agents vs Assistants
            </Link>

            <Link
              href="/resources/blog"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              EruDigm Insights
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}