import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";

const workflows = [
  {
    title: "Analyze a Spreadsheet",
    category: "Data Analysis",
    description:
      "Turn a spreadsheet into a structured business analysis instead of asking for generic observations.",
    prompt: `Act as a senior data analyst.

Review the uploaded spreadsheet.

Before analyzing:
1. Identify the available sheets and important columns.
2. Check for obvious missing values, duplicates or data-quality issues.
3. Confirm the likely grain of the data.

Then analyze:
- important KPIs,
- meaningful trends,
- period-over-period changes,
- unusual values or outliers,
- segments contributing most to performance,
- potential risks.

Return:
1. Executive Summary
2. Key Findings
3. Supporting Metrics
4. Data Quality Concerns
5. Recommended Visualizations
6. Recommended Next Actions

Clearly separate observations from assumptions.`,
  },
  {
    title: "Review a Business Document",
    category: "Documents",
    description:
      "Use ChatGPT to extract decisions, risks and actions from a long report or document.",
    prompt: `Act as a senior business analyst.

Review the uploaded document.

Return:

Executive Summary:
[5-7 most important points]

Key Decisions:
- ...

Risks / Issues:
- ...

Action Items:
| Action | Owner | Deadline |

Important Numbers:
- ...

Open Questions:
- ...

Do not invent owners, deadlines or facts that are not present in the document.

Where something is ambiguous, label it clearly as requiring confirmation.`,
  },
  {
    title: "Executive Update",
    category: "Communication",
    description:
      "Convert operational detail into a concise update for senior leadership.",
    prompt: `Act as an executive business communicator.

Using the information below, prepare a concise update for senior leadership.

Structure:

Overall Status:
Key Achievements:
Performance Changes:
Risks / Issues:
Decisions Required:
Next Steps:

Requirements:
- Keep the language concise.
- Preserve important facts.
- Highlight business impact.
- Avoid unnecessary technical detail.
- Do not invent missing information.

Information:
[paste information]`,
  },
  {
    title: "Research a Business Question",
    category: "Research",
    description:
      "Structure a research task around evidence, uncertainty and decision usefulness.",
    prompt: `Act as a research analyst.

Research the question below using reliable and current sources when web research is available.

Return:

1. Research Question
2. Key Findings
3. Evidence Supporting Each Finding
4. Areas Where Sources Agree
5. Areas Where Sources Disagree
6. Important Uncertainty
7. Business Implications
8. Recommended Next Actions

Provide citations for factual claims when sources are used.
Clearly separate established facts from interpretation.

Research question:
[paste question]`,
  },
  {
    title: "Code Review",
    category: "Development",
    description:
      "Ask for the smallest safe code change rather than an unnecessary rewrite.",
    prompt: `Act as a senior software engineer.

Review the requirement and existing code below.

Rules:
- Preserve existing working behavior.
- Do not redesign unrelated parts of the system.
- Do not assume missing architecture.
- Identify the exact problem first.
- Recommend the smallest safe change.
- Provide complete replacement code only for files that actually need modification.
- Explain how to test the change.

Return:

Problem:
Root Cause:
Required Change:
Updated Code:
Testing Steps:
Risks / Edge Cases:

Requirement/code:
[paste here]`,
  },
  {
    title: "Project Workspace Setup",
    category: "Productivity",
    description:
      "Create reusable working instructions for a long-running project.",
    prompt: `Help me establish a reusable AI working process for this project.

Project:
[paste project]

Objective:
[paste objective]

Create:

1. Project Context Summary
2. Important Terminology
3. Current Priorities
4. Working Rules
5. Decisions Already Made
6. Things That Must Not Be Changed Without Approval
7. Preferred Output Format
8. Verification Checklist
9. Suggested Repeatable Workflows

Do not invent missing project facts.

Where information is missing, identify it as an open question.`,
  },
];

const strengths = [
  {
    title: "General Business Work",
    text: "Writing, analysis, planning, summarization and structured problem-solving in one workspace.",
  },
  {
    title: "Files & Documents",
    text: "Work with common documents, presentations, PDFs and other uploaded files.",
  },
  {
    title: "Data Analysis",
    text: "Analyze spreadsheets and structured data, calculate metrics and create visualizations.",
  },
  {
    title: "Research",
    text: "Use web-enabled research workflows when current external information is required.",
  },
  {
    title: "Coding",
    text: "Draft, explain, debug and review code while preserving the surrounding requirements.",
  },
  {
    title: "Long-Running Work",
    text: "Projects can keep related chats, files and instructions organized around one objective.",
  },
];

const workflow = [
  ["01", "Give Context", "Explain the real situation and objective."],
  ["02", "Define Output", "Specify what a successful result looks like."],
  ["03", "Provide Sources", "Attach the files, data or information that matter."],
  ["04", "Iterate", "Review the first result and refine important gaps."],
  ["05", "Verify", "Check facts, calculations and decisions before acting."],
];

export default function ChatGPTGuidePage() {
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
                EruDigm Practical Tool Guide
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Use ChatGPT
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                For Real Work.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Go beyond basic questions. Learn practical workflows for
              documents, spreadsheets, research, communication, coding and
              long-running professional projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Business Work",
                "Data Analysis",
                "Research",
                "Coding",
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
              href="#workflows"
              className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Explore Workflows ↓
            </a>
          </div>

          {/* WORKSPACE PREVIEW */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    EruDigm Workflow View
                  </p>

                  <h2 className="mt-1 text-3xl font-bold">
                    One Tool. Many Jobs.
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white shadow-lg">
                  AI
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["Documents", "Summarize & extract"],
                  ["Data", "Analyze & visualize"],
                  ["Research", "Find & synthesize"],
                  ["Code", "Build & debug"],
                  ["Writing", "Draft & improve"],
                  ["Projects", "Keep context together"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-gray-100 bg-slate-50 p-4"
                  >
                    <p className="font-bold text-blue-600">{title}</p>
                    <p className="mt-1 text-sm text-gray-600">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-lg">
                <p className="text-sm text-blue-100">Better approach</p>
                <p className="mt-1 font-semibold">
                  Give context → provide sources → define output → verify
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* POSITIONING */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Where ChatGPT Fits
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Think of it as a flexible workbench, not just a chatbot.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              ChatGPT is particularly useful when your workflow moves between
              different types of work: reading a document, analyzing data,
              drafting communication, researching a question, reviewing code
              or continuing a project over multiple conversations.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Important
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Capability does not remove verification.
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Important facts, calculations, citations, code changes and
              business decisions should still be reviewed before they are used.
            </p>
          </div>

        </div>
      </section>

      {/* STRENGTHS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Practical Strengths
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Where ChatGPT can fit into professional workflows.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
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

      {/* WORKFLOW */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            EruDigm Workflow
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Five steps for better ChatGPT work.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {workflow.map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-bold text-blue-600">{number}</span>

              <h3 className="mt-4 text-xl font-bold">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">{text}</p>
            </div>
          ))}
        </div>

      </section>

      {/* PRACTICAL WORKFLOWS */}
      <section
        id="workflows"
        className="scroll-mt-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Copy & Use
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Six practical ChatGPT workflows.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Copy a prompt, provide your real context and adapt the
              requirements to your work.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {workflows.map((item) => (
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

                    <p className="mt-3 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>

                  <CopyPromptButton text={item.prompt} />

                </div>

                <div className="mt-6 whitespace-pre-line rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-gray-700">
                  {item.prompt}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHEN ANOTHER TOOL MAY FIT */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl lg:p-12">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Choose The Workflow, Not The Brand
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            ChatGPT does not need to be your tool for every task.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Different tools may fit better depending on your environment.
            Claude can be particularly useful for coding and document-heavy
            workflows, Gemini may fit naturally into Google-centered work,
            Perplexity is strongly research-oriented, while Copilot and Cursor
            focus heavily on software-development workflows.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              ["Heavy codebase work", "Compare Claude, Copilot and Cursor."],
              ["Google-centered workflow", "Compare Gemini."],
              ["Source-oriented web research", "Compare Perplexity."],
              ["General cross-functional work", "ChatGPT is a strong option."],
            ].map(([task, suggestion]) => (
              <div
                key={task}
                className="rounded-2xl bg-slate-50 p-6"
              >
                <p className="font-bold">{task}</p>
                <p className="mt-2 text-gray-600">{suggestion}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RESPONSIBLE USE */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Before You Use The Output
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Review what matters.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              "Verify important facts and current information.",
              "Reconcile calculations and business metrics.",
              "Review generated code before deploying it.",
              "Check citations and source quality when research matters.",
              "Do not share confidential information without authorization.",
              "Keep human accountability for important business decisions.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6"
              >
                <span className="font-bold text-blue-600">✓</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RELATED */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Continue Learning
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Better tools become more useful with better instructions.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Combine the right AI tool with clear context, strong prompts and
            careful verification.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/resources/ai-resources/guides/prompt-engineering-basics"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Prompt Engineering Basics
            </Link>

            <Link
              href="/resources/ai-resources/guides/business-prompt-library"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              Business Prompt Library
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}