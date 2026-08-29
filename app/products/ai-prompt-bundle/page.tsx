import Link from "next/link";

const categories = [
  {
    icon: "💼",
    title: "Business & Strategy",
    examples: [
      "Business analysis",
      "Decision support",
      "Process improvement",
      "Strategic planning",
    ],
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    examples: [
      "Dataset analysis",
      "SQL assistance",
      "Excel workflows",
      "Executive insights",
    ],
  },
  {
    icon: "✍️",
    title: "Writing & Communication",
    examples: [
      "Professional emails",
      "Reports",
      "Executive summaries",
      "Business documents",
    ],
  },
  {
    icon: "🔎",
    title: "Research",
    examples: [
      "Structured research",
      "Source comparison",
      "Market analysis",
      "Evidence synthesis",
    ],
  },
  {
    icon: "⚙️",
    title: "Productivity & Automation",
    examples: [
      "Workflow design",
      "Task automation",
      "Process documentation",
      "AI-assisted operations",
    ],
  },
  {
    icon: "💻",
    title: "Technology & Coding",
    examples: [
      "Code generation",
      "Debugging",
      "Technical explanation",
      "Solution architecture",
    ],
  },
];

const framework = [
  {
    number: "01",
    title: "Role",
    text: "Tell the AI which perspective or expertise it should apply.",
  },
  {
    number: "02",
    title: "Context",
    text: "Provide the business situation, data, audience and constraints.",
  },
  {
    number: "03",
    title: "Task",
    text: "Define exactly what the AI should analyze, create or solve.",
  },
  {
    number: "04",
    title: "Method",
    text: "Specify the reasoning structure, checks or workflow to follow.",
  },
  {
    number: "05",
    title: "Output",
    text: "Define the format, level of detail and final deliverable.",
  },
];

const workflows = [
  {
    title: "Analyze a Spreadsheet",
    text: "Inspect structure and data quality first, then calculate KPIs, identify trends, investigate outliers and produce an executive summary.",
  },
  {
    title: "Prepare an Executive Report",
    text: "Convert operational data and observations into concise findings, risks, decisions and recommended actions.",
  },
  {
    title: "Improve a Business Process",
    text: "Map the current workflow, identify manual effort and bottlenecks, then propose automation and AI opportunities.",
  },
  {
    title: "Research a Business Topic",
    text: "Define the research question, compare evidence, separate facts from assumptions and summarize implications.",
  },
  {
    title: "Solve a Coding Problem",
    text: "Understand the existing code and constraints before proposing targeted changes, tests and implementation steps.",
  },
  {
    title: "Write Professional Communication",
    text: "Generate communication based on audience, purpose, tone, required action and relevant business context.",
  },
];

const included = [
  "Structured prompt templates",
  "Reusable prompt frameworks",
  "Business analysis workflows",
  "Data and spreadsheet prompts",
  "Research prompt patterns",
  "Professional writing prompts",
  "Coding and technical prompts",
  "Prompt customization guidance",
  "Multi-model usage guidance",
  "Practical examples",
];

const audience = [
  {
    title: "Business Professionals",
    text: "Use AI for analysis, communication, planning and recurring business work.",
  },
  {
    title: "Data Analysts",
    text: "Structure data analysis, SQL, spreadsheet investigation and insight generation.",
  },
  {
    title: "Managers",
    text: "Turn information into executive summaries, decisions, risks and actions.",
  },
  {
    title: "Developers",
    text: "Improve coding, debugging, documentation and technical problem-solving workflows.",
  },
];

const faqs = [
  {
    question: "Is this just a list of copy-and-paste prompts?",
    answer:
      "No. The goal is to provide reusable prompt structures and task-oriented workflows that can be adapted to real business situations rather than a random list of one-line prompts.",
  },
  {
    question: "Which AI tools can I use?",
    answer:
      "The prompts are intended to be adaptable across leading general-purpose AI assistants such as ChatGPT, Claude and Gemini. Results can vary by model, context and task.",
  },
  {
    question: "Do I need prompt-engineering experience?",
    answer:
      "No. The collection is designed to show how to structure context, instructions, constraints and outputs so users can learn while applying the prompts.",
  },
  {
    question: "Will every prompt produce the same result?",
    answer:
      "No. AI outputs vary based on the model, supplied context and source material. Important outputs should always be reviewed and validated.",
  },
];

export default function AIPromptBundle() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-8 py-20 lg:py-28">

          <Link
            href="/#products"
            className="text-sm font-semibold text-purple-600 transition hover:text-purple-700"
          >
            ← Back to Products
          </Link>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700">
                  🤖 AI Prompt Bundle
                </span>

                <span className="rounded-full border border-purple-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Structured AI Workflows
                </span>

                <span className="rounded-full border border-purple-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Coming Soon
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                Don't Just Ask AI.
                <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Direct It Better.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                A practical collection of structured prompts and reusable AI
                workflows designed for business analysis, data, research,
                communication, productivity and technical work.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a 
                  href="/?product=AI%20Prompt%20Bundle#contact"
                  className="rounded-xl bg-purple-600 px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-purple-700"
                >
                  Register Interest
                </a>

                <Link
                  href="/resources/ai-resources"
                  className="rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-lg"
                >
                  Explore Free AI Resources
                </Link>
              </div>
            </div>

            {/* PROMPT PREVIEW */}
            <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-2xl">

              <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
                From Simple Prompt
              </p>

              <div className="mt-5 rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-gray-700">
                  “Analyze this spreadsheet.”
                </p>
              </div>

              <div className="py-4 text-center text-2xl text-purple-500">
                ↓
              </div>

              <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
                To Structured Workflow
              </p>

              <div className="mt-5 space-y-3">
                {[
                  ["Role", "Act as a senior data analyst"],
                  ["Inspect", "Understand sheets, columns and data quality"],
                  ["Analyze", "KPIs, trends, changes, segments and outliers"],
                  ["Validate", "Separate observations from assumptions"],
                  ["Return", "Executive summary, findings and next actions"],
                ].map(([label, text]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-purple-100 bg-purple-50/60 p-4"
                  >
                    <span className="font-bold text-purple-700">
                      {label}:
                    </span>{" "}
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-6xl px-8 py-24">

        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
            The Prompt Problem
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            The internet already has millions of prompts.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            The challenge is not finding more prompts. It is knowing how to
            provide the right context, define the task clearly, control the
            output and build a repeatable workflow that produces useful
            results.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Too generic",
            "Missing context",
            "Unclear output",
            "Difficult to reuse",
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

      {/* FRAMEWORK */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
              EruDigm Prompt Framework
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Build prompts around five useful layers
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Good prompting is less about clever wording and more about
              clearly defining the work the AI needs to perform.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {framework.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-purple-600">
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

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-8 py-24">

        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
            Prompt Categories
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Built around work people actually do
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{category.icon}</div>

              <h3 className="mt-5 text-2xl font-bold">
                {category.title}
              </h3>

              <div className="mt-5 space-y-3">
                {category.examples.map((item) => (
                  <p key={item} className="text-gray-600">
                    ✓ {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* WORKFLOWS */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
              Beyond One-Line Prompts
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Use AI as a workflow, not a magic command
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workflows.map((item) => (
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

      {/* MODEL FLEXIBILITY */}
      <section className="mx-auto max-w-6xl px-8 py-24">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
              Model Flexible
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Learn the structure, not one AI interface.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Prompt principles should remain useful even as models and
              interfaces change. The bundle is designed around reusable
              instructions, context and workflow patterns rather than
              dependence on one specific AI product.
            </p>
          </div>

          <div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-8">

            <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
              Designed For
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                "ChatGPT",
                "Claude",
                "Gemini",
                "Other capable LLMs",
              ].map((tool) => (
                <div
                  key={tool}
                  className="rounded-2xl bg-white p-5 text-center font-bold shadow-sm"
                >
                  {tool}
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-600">
              Individual outputs and capabilities vary by model, version and
              available features.
            </p>

          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24">

        <div className="mx-auto max-w-6xl px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
                What's Included
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                A working library—not a prompt dump
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                The collection is being designed to help users understand,
                customize and reuse prompt patterns across recurring tasks.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-purple-100 bg-white p-5 font-semibold text-gray-700"
                >
                  ✓ {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="mx-auto max-w-7xl px-8 py-24">

        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
            Who It's For
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Different roles. Different AI workflows.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

      </section>

      {/* FREE RESOURCES */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
            Try EruDigm AI Resources Now
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            The commercial bundle is coming. The learning library is already live.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Explore our free prompt-engineering guides, business prompt
            library, SQL prompt collection and practical AI tool guides while
            the full bundle is being prepared.
          </p>

          <Link
            href="/resources/ai-resources"
            className="mt-9 inline-block rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white transition hover:bg-purple-700"
          >
            Explore Free AI Resources
          </Link>

        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-8 py-24">

        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
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
              <p className="mt-3 leading-7 text-gray-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-pink-300">
            Coming Soon
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Build better AI habits before collecting more prompts.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Register your interest in the EruDigm AI Prompt Bundle and tell us
            which professional AI workflows would be most useful to you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="/?product=AI%20Prompt%20Bundle#contact"
              className="rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white transition hover:bg-purple-700"
            >
              Register Interest
            </a>

            <Link
              href="/resources/ai-resources"
              className="rounded-xl border border-slate-600 px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Explore AI Resources
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}