import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";

const decisionPrompt = `Act as a business decision analyst.

Evaluate the decision below using a structured approach.

1. Restate the decision to be made.
2. Identify the key facts provided.
3. Identify important assumptions or missing information.
4. Compare the available options using clear criteria.
5. Highlight major risks and trade-offs.
6. Recommend the strongest option based on the available information.
7. Provide a concise explanation of the recommendation.
8. List anything that should be verified before acting.

Do not invent missing facts.

Decision:
[paste decision and context]`;

const troubleshootingPrompt = `Act as a troubleshooting analyst.

Review the problem below using a structured diagnostic process.

Return:

1. Problem Definition
2. Known Facts
3. Possible Causes
4. Evidence for or against each cause
5. Information still needed
6. Most likely cause based on available evidence
7. Recommended next diagnostic step
8. Proposed solution only if the evidence supports it

Clearly separate facts from assumptions.

Problem:
[paste problem]`;

const dataPrompt = `Act as a senior data analyst.

Review the business question and data below.

Use this structure:

1. Business Question
2. Relevant Metrics
3. Observed Patterns
4. Comparisons
5. Possible Explanations
6. Assumptions / Data Limitations
7. Validation Checks
8. Key Conclusion
9. Recommended Next Action

Do not treat correlation as causation.
Do not invent explanations that are not supported by the data.

Context/Data:
[paste information]`;

const planningPrompt = `Act as an experienced project planner.

Review the objective below and create a structured execution plan.

Include:

1. Objective
2. Success Criteria
3. Major Workstreams
4. Dependencies
5. Key Risks
6. Assumptions
7. Milestones
8. Recommended Sequence
9. Immediate Next Actions

Flag anything that must be confirmed before execution.

Objective:
[paste objective]`;

const verificationPrompt = `Review the proposed answer or recommendation below before it is finalized.

Perform a verification check for:

- unsupported assumptions,
- missing information,
- contradictions,
- calculation or logic errors,
- overlooked risks,
- unclear conclusions,
- claims that require verification.

Return:

1. What appears well supported
2. What is uncertain
3. What should be verified
4. Any corrections required
5. Final concise recommendation

Content to review:
[paste content]`;

const framework = [
  {
    number: "01",
    title: "Define",
    description:
      "Start with the exact problem, question or decision instead of a broad request.",
  },
  {
    number: "02",
    title: "Separate",
    description:
      "Distinguish known facts from assumptions, unknowns and interpretations.",
  },
  {
    number: "03",
    title: "Evaluate",
    description:
      "Compare options, causes or explanations using relevant criteria and evidence.",
  },
  {
    number: "04",
    title: "Verify",
    description:
      "Check important conclusions, calculations, assumptions and missing information.",
  },
  {
    number: "05",
    title: "Conclude",
    description:
      "Ask for a concise conclusion and recommended action based on the available evidence.",
  },
];

const useCases = [
  {
    title: "Business Decisions",
    description:
      "Compare options, trade-offs, risks and missing information before making a recommendation.",
  },
  {
    title: "Troubleshooting",
    description:
      "Separate symptoms from possible causes and identify the next useful diagnostic step.",
  },
  {
    title: "Data Analysis",
    description:
      "Structure observations, explanations, limitations and validation checks.",
  },
  {
    title: "Project Planning",
    description:
      "Break an objective into workstreams, dependencies, risks, milestones and actions.",
  },
];

export default function ChainOfThoughtPromptingPage() {
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
              Chain of Thought
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Prompting
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Learn a practical approach to complex AI tasks using structured
              analysis, assumptions, verification and clear conclusions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Structured Analysis",
                "Decision Support",
                "Verification",
                "Copy-Ready Prompts",
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

          {/* VISUAL */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <p className="text-sm font-semibold text-gray-500">
                EruDigm Reasoning Flow
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                Think Structurally
              </h2>

              <div className="mt-8 space-y-3">
                {[
                  ["1", "Define the problem"],
                  ["2", "Separate facts & assumptions"],
                  ["3", "Evaluate options"],
                  ["4", "Verify important points"],
                  ["5", "Conclude & recommend"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="flex items-center gap-4 rounded-xl border border-gray-100 bg-slate-50 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                      {number}
                    </span>

                    <span className="font-semibold text-gray-700">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-lg">
                <p className="text-sm text-blue-100">Goal</p>
                <p className="mt-1 font-semibold">
                  Better decisions, not longer answers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* EXPLANATION */}
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
              Complex tasks benefit from structure.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
              <p>
                Some questions cannot be handled well with a single vague
                instruction. Decisions, troubleshooting, analysis and planning
                often involve several connected considerations.
              </p>

              <p>
                A useful approach is to ask AI to organize the task into
                explicit stages such as facts, assumptions, options, risks,
                validation checks and conclusions.
              </p>

              <p>
                The objective is not to produce the longest possible
                explanation. The objective is to make the final output easier
                to evaluate and use.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Practical Principle
            </span>

            <p className="mt-5 text-3xl font-bold leading-tight">
              Ask for useful checkpoints, not hidden internal reasoning.
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              Focus on assumptions, evidence, alternatives, verification and a
              concise explanation of the final recommendation.
            </p>
          </div>

        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Where It Helps
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Use structure when the task has multiple moving parts.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            EruDigm Framework
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Define → Separate → Evaluate → Verify → Conclude
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {framework.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
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
            </div>
          ))}
        </div>

      </section>

      {/* DECISION EXAMPLE */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Practical Example
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Structure a business decision.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Instead of asking AI “Which option is better?”, define how the
              decision should be evaluated.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">

            <div className="flex flex-col gap-4 border-b border-gray-100 px-7 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold">
                  Structured Decision Prompt
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Compare options without hiding uncertainty
                </p>
              </div>

              <CopyPromptButton text={decisionPrompt} />
            </div>

            <div className="p-7">
              <div className="whitespace-pre-line rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-gray-700">
                {decisionPrompt}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROMPT LIBRARY */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Copy & Use
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Structured prompts for real work.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Use these templates when the task needs more than a quick answer.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">

          {[
            {
              category: "Problem Solving",
              title: "Troubleshooting",
              prompt: troubleshootingPrompt,
            },
            {
              category: "Analytics",
              title: "Data Analysis",
              prompt: dataPrompt,
            },
            {
              category: "Planning",
              title: "Project Planning",
              prompt: planningPrompt,
            },
            {
              category: "Quality Control",
              title: "Verification Check",
              prompt: verificationPrompt,
            },
          ].map((item) => (
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

              <div className="mt-6 whitespace-pre-line rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-gray-700">
                {item.prompt}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* VERIFICATION */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <span className="text-sm font-bold uppercase tracking-widest text-red-600">
                Avoid
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                “Think harder and give me the answer.”
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                This does not tell AI what needs to be checked, what evidence
                matters or how uncertainty should be handled.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Better
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Define the checkpoints.
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Ask AI to identify facts, assumptions, missing information,
                alternatives, risks and verification needs before presenting a
                concise conclusion.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl lg:p-14">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                Practice
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Turn a vague question into a structured task.
              </h2>

              <p className="mt-5 leading-7 text-blue-50">
                Start with a real decision or problem from your work.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-slate-900 shadow-lg">
              <p className="font-bold text-blue-600">
                Instead of
              </p>

              <p className="mt-3 text-xl font-bold">
                “Why is productivity down?”
              </p>

              <p className="mt-6 font-bold text-blue-600">
                Ask AI to examine
              </p>

              <ul className="mt-4 space-y-3 text-gray-600">
                <li>• Known performance changes</li>
                <li>• Relevant comparisons</li>
                <li>• Possible explanations</li>
                <li>• Evidence supporting each explanation</li>
                <li>• Missing information</li>
                <li>• What should be verified next</li>
              </ul>
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
            Structure the problem before trusting the conclusion.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            For complex tasks, define useful checkpoints such as facts,
            assumptions, alternatives, risks and verification needs. This
            makes AI output easier to evaluate and more useful for real work.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/ai-resources"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Explore AI Resources
            </Link>

            <Link
              href="/resources/ai-resources/guides/role-based-prompting"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              Role Based Prompting
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}