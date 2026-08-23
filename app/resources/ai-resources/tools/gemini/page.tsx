import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";

const workflows = [
  {
    title: "Research Across Web & Workspace",
    category: "Deep Research",
    description:
      "Structure research around current web information and your own relevant Workspace sources when available.",
    prompt: `Act as a senior research analyst.

Research the question below using current, reliable sources.

When available and appropriate, consider relevant information from the Workspace sources I provide.

Return:

1. Executive Summary
2. Key Findings
3. Evidence Supporting Each Finding
4. Relevant Internal Context
5. Areas Where Sources Agree
6. Areas Where Sources Conflict
7. Important Uncertainty
8. Business Implications
9. Recommended Next Actions

Requirements:
- Cite external factual claims.
- Clearly separate external evidence from internal context.
- Do not invent information missing from the sources.
- Highlight anything that requires verification.

Research question:
[paste question]`,
  },
  {
    title: "Analyze a Spreadsheet",
    category: "Sheets & Data",
    description:
      "Turn spreadsheet data into a structured business analysis rather than a generic summary.",
    prompt: `Act as a senior data analyst.

Review the spreadsheet provided.

First identify:
1. Available sheets
2. Important columns
3. Likely data grain
4. Missing values
5. Duplicate risk
6. Obvious data-quality concerns

Then analyze:
- important KPIs,
- trends,
- period-over-period changes,
- unusual values,
- major contributors,
- relevant segment differences.

Return:

Executive Summary
Key Findings
Supporting Metrics
Data Quality Concerns
Recommended Charts
Recommended Next Actions

Clearly separate observations from assumptions.`,
  },
  {
    title: "Turn Notes Into a Google Doc",
    category: "Workspace",
    description:
      "Structure rough information into content ready for a professional document.",
    prompt: `Act as a professional business writer.

Convert the information below into a structured business document.

Use:

Title
Executive Summary
Background
Key Findings
Risks / Issues
Recommendations
Next Steps

Requirements:
- Preserve important facts.
- Keep the writing concise and professional.
- Do not invent evidence.
- Flag unclear information.
- Use headings and bullets where they improve readability.

Information:
[paste information]

Prepare the output so it can be exported or transferred into a Google Doc.`,
  },
  {
    title: "Gmail Thread → Action Summary",
    category: "Workspace",
    description:
      "Extract decisions, commitments and follow-ups from a long email conversation.",
    prompt: `Act as an executive assistant.

Review the email thread or email content provided.

Return:

Conversation Summary:
[brief summary]

Decisions:
- ...

Requests:
- ...

Action Items:
| Action | Owner | Deadline |

Open Questions:
- ...

Follow-Up Required:
- ...

Rules:
- Do not invent owners or deadlines.
- Distinguish requests from confirmed decisions.
- Highlight conflicting information.

Email content:
[paste thread if not provided directly]`,
  },
  {
    title: "Analyze Images or Screenshots",
    category: "Multimodal",
    description:
      "Use visual input as evidence while avoiding unsupported assumptions.",
    prompt: `Act as a visual business analyst.

Review the provided image, screenshot or visual.

Return:

1. What is directly visible
2. Important text or numbers
3. Key patterns or differences
4. Potential issue or opportunity
5. What cannot be concluded from the image alone
6. Additional information needed
7. Recommended next action

Do not infer facts that are not supported by the visual.`,
  },
  {
    title: "Review Code or Repository Context",
    category: "Development",
    description:
      "Use Gemini for code understanding while protecting existing application behavior.",
    prompt: `Act as a senior software engineer.

Review the code or repository context provided.

Before suggesting changes:

1. Explain the relevant architecture.
2. Identify the files related to the requirement.
3. Trace important dependencies.
4. Identify existing behavior that must be preserved.
5. State missing information.

Then:

6. Explain the exact problem.
7. Recommend the smallest safe change.
8. Provide the required code.
9. Explain how to test it.
10. Identify remaining risks.

Do not redesign unrelated parts of the application.

Requirement:
[paste requirement]`,
  },
];

const strengths = [
  {
    title: "Google Workspace",
    text: "Gemini can fit naturally into Google-centered workflows involving Gmail, Drive, Docs, Sheets and other Workspace surfaces where available.",
  },
  {
    title: "Deep Research",
    text: "Research workflows can use Google Search and, when connected and available, selected sources such as Gmail and Drive.",
  },
  {
    title: "Files & Data",
    text: "Analyze supported documents, spreadsheets, images, video, code and other uploaded content.",
  },
  {
    title: "Multimodal Work",
    text: "Combine text with visual and other supported input when the task cannot be understood from text alone.",
  },
  {
    title: "Coding",
    text: "Gemini's ecosystem includes developer-focused coding assistance in addition to general Gemini Apps.",
  },
  {
    title: "Output Creation",
    text: "Gemini Apps can generate supported files and export results into useful document and spreadsheet formats.",
  },
];

const workflow = [
  ["01", "Choose Sources", "Decide whether the task needs web, files or Workspace context."],
  ["02", "Give Context", "Explain the business objective and relevant background."],
  ["03", "Define Output", "Specify the document, analysis or decision you need."],
  ["04", "Generate", "Use Gemini to research, analyze or create the first result."],
  ["05", "Verify", "Check sources, numbers and conclusions before using it."],
];

export default function GeminiGuidePage() {
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
              Use Gemini
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Across Your Work.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Learn practical Gemini workflows for Google Workspace,
              research, files, spreadsheets, multimodal analysis and coding.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Google Workspace",
                "Deep Research",
                "Files & Data",
                "Multimodal",
                "Coding",
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

          {/* GOOGLE WORKFLOW PREVIEW */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    EruDigm Gemini Workflow
                  </p>

                  <h2 className="mt-1 text-3xl font-bold">
                    Connected Research
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg">
                  AI
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["Search", "Current web"],
                  ["Drive", "Your files"],
                  ["Gmail", "Relevant context"],
                  ["Files", "Upload & analyze"],
                  ["Sheets", "Data workflows"],
                  ["Docs", "Create outputs"],
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
                <p className="text-sm text-blue-100">Gemini advantage</p>
                <p className="mt-1 font-semibold">
                  Bring Google-centered context into the workflow.
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
              Where Gemini Fits
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Gemini becomes especially interesting when your work already
              lives in Google's ecosystem.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Gemini can combine general AI work with files, research and
              Google-centered workflows. Depending on your account and
              administrator settings, Workspace connections can make Gmail,
              Drive, Docs and Sheets useful sources or destinations for AI work.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Important
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Availability depends on account and Workspace configuration.
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Some Gemini and Workspace capabilities vary by plan, account
              type, region, rollout and administrator settings.
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
              Where Gemini can fit into professional workflows.
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
            EruDigm Gemini Workflow
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Source → Context → Output → Verification
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {workflow.map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-bold text-blue-600">
                {number}
              </span>

              <h3 className="mt-4 text-xl font-bold">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {text}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* DEEP RESEARCH */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Deep Research
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Research beyond one search result.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Gemini's Deep Research can build a research plan and synthesize
                information across many sources. Google Search is available as
                a source by default, and connected sources such as Gmail or
                Drive can be included where available.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Files
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Bring the evidence into the conversation.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Gemini Apps can work with supported documents, spreadsheets,
                images, videos, code and other files, making it useful when the
                task depends on source material rather than a standalone prompt.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WORKFLOWS */}
      <section
        id="workflows"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >

        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Copy & Use
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Six practical Gemini workflows.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Use the prompt closest to your task and provide the relevant files,
            Workspace context or business information.
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

      </section>

      {/* CHOOSE TOOL */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Choose By Workflow
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Gemini is strongest when its ecosystem fit actually matters.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {[
              [
                "Google Workspace-heavy work",
                "Gemini deserves serious consideration.",
              ],
              [
                "Agentic codebase development",
                "Compare Claude Code, Copilot and Cursor.",
              ],
              [
                "General cross-functional AI",
                "Compare Gemini with ChatGPT and Claude.",
              ],
              [
                "Research-first work",
                "Compare Gemini Deep Research with Perplexity.",
              ],
            ].map(([task, suggestion]) => (
              <div
                key={task}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <p className="font-bold">{task}</p>
                <p className="mt-2 text-gray-600">{suggestion}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* RESPONSIBLE USE */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 lg:p-12">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Before You Use The Output
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Connected context still needs human judgment.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Verify important facts and current research claims.",
              "Reconcile spreadsheet calculations and business metrics.",
              "Check that the correct Workspace sources were used.",
              "Review generated code before implementation.",
              "Respect organizational rules for sensitive information.",
              "Keep humans responsible for consequential decisions.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="font-bold text-blue-600">✓</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Continue Learning
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Use the ecosystem when it improves the workflow.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Gemini becomes especially useful when research, files and Google
            Workspace context belong in the same workflow.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/resources/ai-resources/guides/business-prompt-library"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Business Prompt Library
            </Link>

            <Link
              href="/resources/ai-resources/tools/claude"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              Claude Guide
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}