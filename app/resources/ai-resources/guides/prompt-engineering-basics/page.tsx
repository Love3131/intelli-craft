import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";
const universalPrompt = `ROLE: Act as [role or expertise].

TASK: Your task is to [specific objective].

CONTEXT: [Provide the relevant background, audience, data or situation.]

CONSTRAINTS: [Define tone, length, rules, exclusions or requirements.]

OUTPUT: Return the result as [table / bullets / report / email / steps].

QUALITY CHECK: Before finalizing, verify that the response follows all requirements. Do not invent information that was not provided.`;

const framework = [
  {
    number: "01",
    title: "Role",
    description: "Define the expertise or perspective you want AI to use.",
    example: "Act as a senior business analyst...",
  },
  {
    number: "02",
    title: "Task",
    description: "State exactly what you want the AI to accomplish.",
    example: "Analyze the following project update...",
  },
  {
    number: "03",
    title: "Context",
    description: "Provide the background information needed to do the job well.",
    example: "The audience is senior management and the project is delayed...",
  },
  {
    number: "04",
    title: "Constraints",
    description: "Set requirements such as tone, length, rules or exclusions.",
    example: "Keep it under 150 words and avoid technical jargon...",
  },
  {
    number: "05",
    title: "Output",
    description: "Tell AI exactly how you want the result presented.",
    example: "Return a table with Risk, Impact, Owner and Action...",
  },
];

const useCases = [
  {
    title: "Professional Email",
    category: "Communication",
    prompt:
      "Act as a professional business communicator. Rewrite the email below for senior management. Keep the tone diplomatic, concise and action-oriented. Preserve all important facts and end with a clear requested action. Email: [paste email]",
  },
  {
    title: "Excel & Data Analysis",
    category: "Analytics",
    prompt:
      "Act as a senior data analyst. Review the dataset structure and business question below. Identify the most useful KPIs, calculations and trends. Explain any formulas required and recommend the clearest visualizations. Context: [paste context]",
  },
  {
    title: "Project Status Update",
    category: "Project Management",
    prompt:
      "Act as an experienced project manager. Convert the notes below into an executive status update. Organize the response into Overall Status, Completed, In Progress, Risks, Decisions Required and Next Steps. Notes: [paste notes]",
  },
  {
    title: "Research Analysis",
    category: "Research",
    prompt:
      "Act as a research analyst. Analyze the topic below objectively. Separate established facts, assumptions and open questions. Identify the most important conclusions and anything that requires verification. Topic: [paste topic]",
  },
  {
    title: "Code Review",
    category: "Development",
    prompt:
      "Act as a senior software engineer. Review the requirement and existing code before proposing changes. Preserve working behavior. Identify the exact problem, recommend the smallest safe change, provide updated code and explain how to test it. Code: [paste code]",
  },
  {
    title: "Meeting Minutes",
    category: "Productivity",
    prompt:
      "Act as an executive assistant. Convert the meeting notes below into concise minutes. Include Key Discussion Points, Decisions, Action Items, Owners and Deadlines. Do not invent missing information. Notes: [paste notes]",
  },
];

const mistakes = [
  {
    title: "Being too vague",
    weak: "Make this better.",
    better:
      "Explain what better means: shorter, clearer, more professional, more persuasive or more detailed.",
  },
  {
    title: "Missing context",
    weak: "Create a project report.",
    better:
      "Provide the project, audience, reporting period, objective and relevant project information.",
  },
  {
    title: "No output format",
    weak: "Analyze this data.",
    better:
      "Specify whether you need findings, a table, executive summary, recommendations or step-by-step analysis.",
  },
  {
    title: "Doing too much at once",
    weak: "Analyze this, create a strategy, email, dashboard and presentation.",
    better:
      "Break complex work into stages and validate important outputs before continuing.",
  },
];

const learningSteps = [
  ["01", "Understand"],
  ["02", "Framework"],
  ["03", "Examples"],
  ["04", "Template"],
  ["05", "Practice"],
];

export default function PromptEngineeringBasicsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

          <div>
            <Link
              href="/resources/ai-resources"
              className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              ← Back to AI Resources
            </Link>

            <div className="mt-8">
              <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                EruDigm Practical AI Guide
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Prompt Engineering
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                That Actually Works.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Learn a practical framework for turning vague instructions into
              clear, useful AI outputs for real professional work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Beginner Friendly",
                "Practical Examples",
                "Copy-Ready Prompts",
                "10–12 Min Guide",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="#framework"
              className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Start Learning ↓
            </a>
          </div>

          {/* PROMPT BUILDER CARD */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    EruDigm Prompt Builder
                  </p>
                  <h2 className="mt-1 text-3xl font-bold">
                    Prompt Blueprint
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg">
                  AI
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {["Role", "Task", "Context", "Constraints", "Output"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl border border-gray-100 bg-slate-50 px-5 py-4"
                    >
                      <span className="font-semibold text-gray-700">
                        {item}
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                        ✓
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="mt-7 rounded-2xl border border-gray-100 p-5">
                <div className="flex justify-between">
                  <span className="font-semibold">Prompt Quality</span>
                  <span className="font-bold text-blue-600">90%</span>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-lg">
                <p className="text-sm text-blue-100">Result</p>
                <p className="mt-1 font-semibold">
                  Clearer instructions. Better AI output.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-7 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-5">
            {learningSteps.map(([number, title]) => (
              <div
                key={number}
                className="flex items-center gap-3 sm:justify-center"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                  {number}
                </span>
                <span className="font-semibold text-gray-700">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNDERSTAND */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              01 · Understand
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              AI cannot read your mind.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
              <p>
                When you give AI a vague instruction, it has to guess your
                objective, audience, context, priorities and preferred output.
              </p>

              <p>
                Prompt engineering reduces that guesswork by giving AI the
                information and boundaries it needs to perform the task well.
              </p>

              <p>
                You do not need secret commands or complicated terminology.
                You need clear thinking and a repeatable structure.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Core Principle
            </span>

            <p className="mt-5 text-3xl font-bold leading-tight">
              Better instructions create better starting points.
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              Prompting is not about magic words. It is about clearly defining
              the job you want AI to perform.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              See The Difference
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              One task. Three very different prompts.
            </h2>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-sm">
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase text-red-600">
                Weak
              </span>

              <p className="mt-6 text-xl font-bold">
                “Write a project update.”
              </p>

              <p className="mt-5 leading-7 text-gray-600">
                AI has to guess the audience, project status, required detail,
                tone and format.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase text-amber-700">
                Better
              </span>

              <p className="mt-6 text-xl font-bold">
                “Write a concise weekly project update for senior management
                using these notes.”
              </p>

              <p className="mt-5 leading-7 text-gray-600">
                The task and audience are clearer, but the structure is still
                open to interpretation.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl ring-1 ring-blue-100">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase text-blue-600">
                Professional
              </span>

              <p className="mt-6 text-lg font-bold leading-8">
                “Act as a project manager. Using the notes below, prepare a
                weekly update for senior management. Keep it under 200 words.
                Use Status, Achievements, Risks and Next Steps. Highlight any
                leadership decision required.”
              </p>

              <p className="mt-5 leading-7 text-gray-600">
                Role, task, audience, constraints and output are clearly
                defined.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section
        id="framework"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            02 · EruDigm Framework
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Build stronger prompts with 5 ingredients.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            You will not need every element every time. For important tasks,
            however, this structure gives you a reliable starting point.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {framework.map((item) => (
            <div
              key={item.number}
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <span className="text-sm font-bold text-blue-600">
                {item.number}
              </span>

              <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>

              <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                {item.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UNIVERSAL TEMPLATE */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              04 · Ready-To-Use Template
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Your universal prompt blueprint
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Replace the bracketed sections with your own information and
              adapt the structure to the task.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-7 py-5">
              <div>
                <p className="font-bold">EruDigm Universal Prompt</p>
                <p className="mt-1 text-sm text-gray-500">
                  Professional prompt structure
                </p>
              </div>

              <CopyPromptButton text={universalPrompt} />
            </div>

            <div className="space-y-5 p-7 text-[15px] leading-7 text-gray-700">
              <div className="rounded-xl bg-slate-50 p-4">
                <strong className="text-blue-600">ROLE:</strong>{" "}
                Act as [role or expertise].
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <strong className="text-blue-600">TASK:</strong>{" "}
                Your task is to [specific objective].
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <strong className="text-blue-600">CONTEXT:</strong>{" "}
                [Relevant background, audience, data or situation.]
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <strong className="text-blue-600">CONSTRAINTS:</strong>{" "}
                [Tone, length, rules, exclusions or requirements.]
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <strong className="text-blue-600">OUTPUT:</strong>{" "}
                Return the result as [table / bullets / report / email / steps].
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <strong className="text-blue-600">QUALITY CHECK:</strong>{" "}
                Before finalizing, verify that the response follows all
                requirements. Do not invent information that was not provided.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            03 · Practical Examples
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Prompts you can use in real work.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Use these as starting points and replace the context with your
            actual information.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {useCases.map((item) => (
            <div
  key={item.title}
  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
>
  <div className="flex items-start justify-between gap-5">
    <div>
      <span className="text-sm font-bold text-blue-600">
        {item.category}
      </span>

      <h3 className="mt-2 text-2xl font-bold">
        {item.title}
      </h3>
    </div>

    <CopyPromptButton text={item.prompt} />
  </div>

  <div className="mt-6 rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-gray-700">
    {item.prompt}
  </div>
</div>
          ))}
        </div>
      </section>

      {/* MISTAKES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Prompt Smarter
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Four mistakes that weaken AI output.
            </h2>
          </div>

          <div className="mt-12 space-y-5">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm md:grid-cols-[0.7fr_1fr_1.5fr]"
              >
                <div className="font-bold">{item.title}</div>

                <div>
                  <span className="text-xs font-bold uppercase text-red-600">
                    Weak
                  </span>
                  <p className="mt-2 text-gray-600">{item.weak}</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase text-green-700">
                    Improve It
                  </span>
                  <p className="mt-2 text-gray-600">{item.better}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                05 · Practice
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Your 5-minute challenge
              </h2>

              <p className="mt-5 leading-7 text-blue-50">
                Improve a weak prompt using the framework you just learned.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-slate-900 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
                Rewrite this
              </p>

              <p className="mt-4 text-2xl font-bold">
                “Analyze my sales data and tell me what is happening.”
              </p>

              <p className="mt-5 leading-7 text-gray-600">
                Add a Role, Task, Context, Constraints and Output. Think about
                the reporting period, business objective, audience, metrics and
                expected format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Key Takeaway
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Good prompting is structured thinking.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Be clear about the task, provide useful context, define important
            constraints and tell AI what a successful output should look like.
            Then review the result instead of blindly accepting it.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/ai-resources"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Explore AI Resources
            </Link>

            <Link
              href="/resources"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              All Resources
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}