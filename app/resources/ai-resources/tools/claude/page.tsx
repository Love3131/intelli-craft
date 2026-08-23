import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";

const workflows = [
  {
    title: "Understand an Existing Codebase",
    category: "Claude Code",
    description:
      "Build an architectural understanding before asking AI to start changing files.",
    prompt: `Act as a senior software engineer joining an existing project.

Before changing any code, inspect the project structure and explain:

1. Application architecture
2. Main entry points
3. Important components/modules
4. Data flow
5. External dependencies
6. Configuration files
7. Existing tests
8. Areas most relevant to the requested change
9. Potential risks
10. Files that should not be changed unnecessarily

Do not modify anything yet.

Requirement:
[paste requirement]`,
  },
  {
    title: "Make the Smallest Safe Code Change",
    category: "Claude Code",
    description:
      "Use Claude for implementation while explicitly protecting existing working behavior.",
    prompt: `Act as a senior software engineer working in an existing production codebase.

Requirement:
[paste requirement]

Rules:
- Inspect the relevant existing files first.
- Preserve current working behavior.
- Do not redesign unrelated architecture.
- Do not create new dependencies unless necessary.
- Identify the root cause before editing.
- Make the smallest safe change.
- Run relevant tests or validation after the change.
- Report exactly which files were modified.
- Flag anything that could not be verified.

Return:
1. Root Cause
2. Implementation Plan
3. Files Changed
4. Validation Performed
5. Remaining Risks`,
  },
  {
    title: "Analyze a Long Document",
    category: "Documents",
    description:
      "Extract decisions, evidence, risks and open questions instead of receiving only a generic summary.",
    prompt: `Act as a senior business analyst.

Review the uploaded document carefully.

Return:

Executive Summary:
[most important points]

Key Findings:
- ...

Important Evidence:
- ...

Decisions:
- ...

Risks / Issues:
- ...

Action Items:
| Action | Owner | Deadline |

Contradictions / Ambiguities:
- ...

Open Questions:
- ...

Do not invent facts, owners or deadlines.
Clearly distinguish what the document states from your interpretation.`,
  },
  {
    title: "Compare Multiple Documents",
    category: "Analysis",
    description:
      "Identify agreements, differences and contradictions across several documents.",
    prompt: `Act as a document comparison analyst.

Compare the uploaded documents.

Create:

1. Purpose of Each Document
2. Areas of Agreement
3. Important Differences
4. Contradictions
5. Missing Information
6. Changes Between Versions, if applicable
7. Business Impact of Important Differences
8. Items Requiring Confirmation

For every important conclusion, identify which document supports it.

Do not treat an interpretation as a documented fact.`,
  },
  {
    title: "Business Requirements Review",
    category: "Business Analysis",
    description:
      "Turn unstructured project information into requirements, assumptions and open questions.",
    prompt: `Act as a senior business analyst.

Review the project information below.

Return:

Business Objective:
Current Problem:
Stakeholders:
Functional Requirements:
Non-Functional Requirements:
Business Rules:
Dependencies:
Risks:
Assumptions:
Open Questions:
Acceptance Criteria:

Clearly distinguish:
- Confirmed requirement
- Assumption
- Recommendation
- Missing information

Do not invent requirements.

Project information:
[paste information]`,
  },
  {
    title: "Improve a Business Report",
    category: "Writing",
    description:
      "Improve structure and clarity while preserving the original facts and meaning.",
    prompt: `Act as a senior business report editor.

Review the report below.

Improve:
- structure,
- clarity,
- executive readability,
- logical flow,
- conciseness,
- headings,
- recommendations.

Rules:
- Preserve all important facts.
- Do not invent evidence.
- Do not change numbers.
- Flag unclear claims rather than silently correcting them.
- Keep the tone professional.

Return:
1. Improved Report
2. Major Changes Made
3. Claims That Need Verification

Report:
[paste report]`,
  },
];

const strengths = [
  {
    title: "Agentic Coding",
    text: "Claude Code can work at project level: navigating codebases, editing files, using development tools and running tests.",
  },
  {
    title: "Document Work",
    text: "Upload documents and other supported files for summarization, extraction, comparison and deeper analysis.",
  },
  {
    title: "Projects",
    text: "Organize related conversations, files, project knowledge and instructions around ongoing work.",
  },
  {
    title: "Artifacts",
    text: "Create and iterate on substantial standalone content such as documents, code, visualizations and interactive tools.",
  },
  {
    title: "Research",
    text: "Use web research and connected sources when current external information is needed.",
  },
  {
    title: "Analysis",
    text: "Work through complex documents, data, decisions and structured business problems.",
  },
];

const codingFlow = [
  ["01", "Inspect", "Understand the repository before editing."],
  ["02", "Plan", "Identify the smallest safe implementation."],
  ["03", "Execute", "Make only the required changes."],
  ["04", "Test", "Run checks and inspect failures."],
  ["05", "Review", "Human reviews what actually ships."],
];

export default function ClaudeGuidePage() {
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
              Use Claude
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Beyond Writing.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Learn practical Claude workflows for codebases, long documents,
              business analysis, structured writing, research and ongoing
              project work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Claude Code",
                "Documents",
                "Analysis",
                "Projects",
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

          {/* PREVIEW */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">

              <div className="flex items-center justify-between border-b border-gray-100 p-7">
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    EruDigm Claude Workflow
                  </p>

                  <h2 className="mt-1 text-3xl font-bold">
                    Codebase Review
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white shadow-lg">
                  AI
                </div>
              </div>

              <div className="bg-slate-950 p-7 font-mono text-sm leading-7 text-slate-200">
                <p className="text-cyan-300">Project objective</p>
                <p>Fix the issue without changing existing behavior.</p>

                <p className="mt-5 text-cyan-300">Claude workflow</p>
                <p>→ inspect repository</p>
                <p>→ trace dependencies</p>
                <p>→ plan change</p>
                <p>→ edit files</p>
                <p>→ run tests</p>
                <p>→ review result</p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-7">
                {[
                  ["Code", "Project-level work"],
                  ["Docs", "Analyze & compare"],
                  ["Artifacts", "Build & iterate"],
                  ["Projects", "Maintain context"],
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

            </div>
          </div>

        </div>
      </section>

      {/* POSITIONING */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Where Claude Fits
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Strong document work and serious coding can live in the same
              toolkit.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Claude can support writing and document analysis, but treating it
              only as a writing assistant misses a major part of its current
              value. Claude Code is designed for agentic software work across
              an actual codebase, while Claude also supports research,
              analysis, projects and reusable artifacts.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Coding Principle
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Let the agent execute. Keep the human responsible for what ships.
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Repository access and automated execution make verification more
              important, not less important.
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
              Where Claude can fit into real professional work.
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

      {/* CODING FLOW */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            EruDigm Claude Code Workflow
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Inspect → Plan → Execute → Test → Review
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            A coding agent becomes much more useful when you protect existing
            behavior and define how the result will be validated.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {codingFlow.map(([number, title, text]) => (
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

      {/* WORKFLOWS */}
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
              Six practical Claude workflows.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Copy the workflow closest to your task and replace the context
              with your real information.
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

      {/* ARTIFACTS & PROJECTS */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="grid gap-7 lg:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Artifacts
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Work on the output as an object.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Artifacts provide a dedicated space for substantial,
              self-contained work such as documents, code, visualizations and
              interactive content that you may want to iterate on or reuse.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Projects
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Keep ongoing work organized.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Projects can keep related conversations, uploaded knowledge and
              project instructions together so repeated work starts with more
              relevant context.
            </p>
          </div>

        </div>
      </section>

      {/* CHOOSE TOOL */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Choose By Workflow
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Claude is strong, but it does not need to win every category.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {[
              [
                "Agentic codebase work",
                "Claude Code is specifically designed for project-level coding.",
              ],
              [
                "General cross-functional work",
                "Compare Claude and ChatGPT based on the workflow you prefer.",
              ],
              [
                "Google-centered work",
                "Gemini may fit naturally when Google integrations are central.",
              ],
              [
                "Research-first workflow",
                "Compare Claude research capabilities with Perplexity.",
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
            More autonomy requires better review.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Review code changes before they are committed or deployed.",
              "Run relevant tests after agentic code changes.",
              "Verify important facts and research claims.",
              "Check extracted information against source documents.",
              "Do not expose confidential files without authorization.",
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
            Give the agent context. Protect the system. Verify the result.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Claude becomes more useful when it understands the real project,
            has a clearly defined objective and knows what existing behavior
            must be preserved.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/resources/ai-resources/guides/prompt-engineering-basics"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Prompt Engineering Basics
            </Link>

            <Link
              href="/resources/ai-resources/tools/chatgpt"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              Compare ChatGPT Guide
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}