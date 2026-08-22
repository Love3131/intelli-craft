import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";

const rolePrompts = [
  {
    title: "Business Analyst",
    category: "Business Analysis",
    prompt:
      "Act as a senior business analyst. Review the business problem and information below. Identify the objective, stakeholders, current-state issues, business requirements, assumptions, risks and open questions. Do not invent missing information. Return the result as a structured analysis with recommended next steps. Context: [paste context]",
  },
  {
    title: "Project Manager",
    category: "Project Management",
    prompt:
      "Act as an experienced project manager. Review the project information below. Identify current status, completed work, upcoming milestones, dependencies, risks, blockers, decisions required and next actions. Keep the output concise and suitable for a project status review. Project information: [paste information]",
  },
  {
    title: "Data Analyst",
    category: "Analytics",
    prompt:
      "Act as a senior data analyst. Review the business question and dataset information below. Identify the most relevant KPIs, calculations, trends, comparisons and potential data-quality concerns. Recommend an analysis approach and suitable visualizations. Clearly separate observations from assumptions. Context: [paste context]",
  },
  {
    title: "Executive Communicator",
    category: "Communication",
    prompt:
      "Act as an executive business communicator. Rewrite the information below for senior leadership. Keep it concise, diplomatic and decision-oriented. Highlight the key message, business impact, risks and any action or decision required. Preserve important facts and do not invent information. Content: [paste content]",
  },
  {
    title: "Excel Expert",
    category: "Excel",
    prompt:
      "Act as an advanced Excel specialist. Review the requirement and worksheet structure below. Recommend the simplest reliable Excel solution. Provide formulas or steps where appropriate, explain the logic clearly, consider edge cases and avoid unnecessary complexity. Requirement: [paste requirement]",
  },
  {
    title: "Software Engineer",
    category: "Development",
    prompt:
      "Act as a senior software engineer. Review the requirement and existing code below before suggesting changes. Preserve existing working behavior. Identify the exact problem, explain the smallest safe solution, provide only the necessary code changes and explain how to test them. Do not assume missing architecture. Requirement/code: [paste here]",
  },
];

const roleFormula = [
  {
    number: "01",
    title: "Expertise",
    description:
      "Choose expertise that is genuinely relevant to the task.",
    example: "Senior data analyst",
  },
  {
    number: "02",
    title: "Objective",
    description:
      "Tell the role what job it needs to perform.",
    example: "Analyze monthly operational performance",
  },
  {
    number: "03",
    title: "Audience",
    description:
      "Explain who will use or read the result.",
    example: "Senior leadership",
  },
  {
    number: "04",
    title: "Boundaries",
    description:
      "Define important rules and what the AI should avoid.",
    example: "Do not invent missing information",
  },
];

const weakRolePrompt =
  "Act as an expert and analyze this report.";

const strongRolePrompt = `Act as a senior operations analyst.

Review the monthly performance information below for an executive audience.

Identify:
- the three most important performance changes,
- likely business impact,
- risks that require attention,
- information that cannot be concluded from the available data,
- recommended next actions.

Keep the response concise and separate facts from assumptions.

Performance information:
[paste information]`;

export default function RoleBasedPromptingPage() {
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
              Role Based
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Prompting
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Learn how to give AI the right professional perspective without
              relying on vague instructions such as “act as an expert.”
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Practical Roles",
                "Workplace Examples",
                "Copy-Ready Prompts",
                "10 Min Guide",
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
              href="#learn"
              className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Start Learning ↓
            </a>
          </div>

          {/* ROLE BUILDER */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    EruDigm Role Builder
                  </p>

                  <h2 className="mt-1 text-3xl font-bold">
                    Define the Perspective
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg">
                  AI
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  ["Expertise", "Senior Business Analyst"],
                  ["Objective", "Analyze requirements"],
                  ["Audience", "Project stakeholders"],
                  ["Boundary", "No assumptions"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-gray-100 bg-slate-50 px-5 py-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      {label}
                    </p>

                    <p className="mt-1 font-semibold text-gray-700">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-lg">
                <p className="text-sm text-blue-100">Result</p>
                <p className="mt-1 font-semibold">
                  A role with a clear job — not just a title.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNDERSTAND */}
      <section
        id="learn"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 py-20 lg:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Understand The Technique
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              A role is useful when it changes how the task should be
              approached.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
              <p>
                Role based prompting gives AI a relevant professional
                perspective before assigning the task.
              </p>

              <p>
                The role can help establish appropriate terminology,
                priorities, questions and output style.
              </p>

              <p>
                But simply saying “act as an expert” is usually too vague.
                Effective role prompts combine expertise with a clear
                objective, audience and boundaries.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Important
            </span>

            <p className="mt-5 text-3xl font-bold leading-tight">
              A role provides perspective. It does not guarantee expertise.
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              Important facts, calculations and professional decisions should
              still be reviewed and verified.
            </p>
          </div>
        </div>
      </section>

      {/* WEAK VS STRONG */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              See The Difference
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Giving AI a title is not enough.
            </h2>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-sm">
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase text-red-600">
                Weak
              </span>

              <p className="mt-6 text-2xl font-bold">
                “{weakRolePrompt}”
              </p>

              <p className="mt-5 leading-7 text-gray-600">
                “Expert” is undefined, the objective is vague and the expected
                output is unknown.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">
              <div className="flex items-start justify-between gap-5">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase text-blue-600">
                  Stronger
                </span>

                <CopyPromptButton text={strongRolePrompt} />
              </div>

              <div className="mt-6 whitespace-pre-line rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-gray-700">
                {strongRolePrompt}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROLE FORMULA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            EruDigm Framework
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Build useful roles with four elements.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roleFormula.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-blue-600">
                {item.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>

              <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm font-semibold text-blue-800">
                {item.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROLE LIBRARY */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Copy & Use
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Six professional roles for real work.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Copy a starting prompt and replace the context with your own
              requirement.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {rolePrompts.map((item) => (
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
        </div>
      </section>

      {/* WHEN NOT TO USE */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl lg:p-12">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Use Roles Intentionally
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Not every prompt needs a persona.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            If your task is already simple and specific, adding “act as an
            expert” may add little value. Use a role when the professional
            perspective meaningfully changes how the task should be analyzed,
            communicated or structured.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6">
              <p className="font-bold text-green-800">
                Role can help
              </p>

              <ul className="mt-4 space-y-3 text-gray-700">
                <li>• Business analysis</li>
                <li>• Executive communication</li>
                <li>• Code review</li>
                <li>• Project risk assessment</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="font-bold text-gray-800">
                Role may be unnecessary
              </p>

              <ul className="mt-4 space-y-3 text-gray-700">
                <li>• Simple rewriting</li>
                <li>• Basic calculations</li>
                <li>• Straightforward formatting</li>
                <li>• Simple extraction tasks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                Practice
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Upgrade a vague role.
              </h2>

              <p className="mt-5 leading-7 text-blue-50">
                Turn “Act as a business expert” into a role with a meaningful
                perspective and a clear job.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-slate-900 shadow-lg">
              <p className="font-bold text-blue-600">
                Your Challenge
              </p>

              <ol className="mt-5 space-y-4 text-gray-600">
                <li>1. Choose the relevant expertise.</li>
                <li>2. Define the exact objective.</li>
                <li>3. Identify the audience.</li>
                <li>4. Add important boundaries.</li>
                <li>5. Specify the required output.</li>
              </ol>
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
            Give AI a relevant perspective — and a clear job.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Strong role prompts combine appropriate expertise with a specific
            objective, audience, context and boundaries. The role should help
            clarify the task rather than simply make the prompt sound more
            impressive.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/ai-resources"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Explore AI Resources
            </Link>

            <Link
              href="/resources/ai-resources/guides/few-shot-prompting"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              Few Shot Prompting
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}