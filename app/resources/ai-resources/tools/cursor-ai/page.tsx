import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";

const workflows = [
  {
    title: "Understand an Existing Repository",
    category: "Codebase",
    description:
      "Build a map of the existing system before asking Cursor to make changes.",
    prompt: `Review this codebase before making any changes.

I need you to understand the existing architecture first.

Return:

1. Project structure
2. Main application entry points
3. Important components/modules
4. Data flow
5. Important dependencies
6. Configuration files
7. Existing tests
8. Files relevant to my requirement
9. Existing behavior that must be preserved
10. Missing information or questions

Do not modify any files yet.

Requirement:
[paste requirement]`,
  },
  {
    title: "Implement a Feature Across Files",
    category: "Agent Workflow",
    description:
      "Implement a feature while explicitly protecting existing architecture and behavior.",
    prompt: `Implement the requirement below in this existing codebase.

Requirement:
[paste requirement]

Before editing:

1. Inspect the relevant files.
2. Trace dependencies.
3. Identify current behavior.
4. Identify behavior that must remain unchanged.
5. Propose the smallest safe implementation plan.

Rules:
- Follow existing architecture and conventions.
- Do not rewrite unrelated files.
- Do not introduce dependencies unless necessary.
- Preserve existing functionality.
- Handle relevant edge cases.
- Update tests where appropriate.

After implementation:

1. List every file changed.
2. Explain why each file changed.
3. Run relevant validation/tests.
4. Report failures or warnings.
5. Identify anything that still requires manual verification.`,
  },
  {
    title: "Debug a Codebase Issue",
    category: "Debugging",
    description:
      "Trace the problem through the repository before applying a fix.",
    prompt: `Investigate the bug below in this codebase.

Problem:
[paste problem]

Expected behavior:
[paste expected behavior]

Actual behavior:
[paste actual behavior]

Error/logs:
[paste error if available]

Use this process:

1. Locate the relevant execution path.
2. Trace dependencies.
3. Identify possible causes.
4. Use available evidence to eliminate unlikely causes.
5. Identify the root cause.
6. Explain the smallest safe fix.
7. Implement only the required change.
8. Run relevant tests.
9. Explain how the fix was validated.

Do not rewrite unrelated code.`,
  },
  {
    title: "Refactor Safely",
    category: "Refactoring",
    description:
      "Improve code quality without turning a focused task into a large rewrite.",
    prompt: `Review the selected code for maintainability improvements.

Objective:
Improve the code without changing its external behavior.

Before editing:

1. Explain what the current code does.
2. Identify genuine maintainability problems.
3. Identify public interfaces and behavior that must remain unchanged.
4. Propose a focused refactor.

Rules:
- Avoid unnecessary abstractions.
- Avoid unrelated formatting changes.
- Preserve business logic.
- Follow existing project conventions.
- Do not add dependencies unless justified.

After refactoring:

1. Summarize changes.
2. Run relevant tests.
3. Compare behavior before and after.
4. Flag anything that could not be verified.`,
  },
  {
    title: "Review an AI-Generated Diff",
    category: "Quality Control",
    description:
      "Review changes produced by an AI coding workflow before accepting them.",
    prompt: `Review the current code changes before I accept them.

Evaluate:

1. Does the implementation match the requirement?
2. Were unrelated files changed?
3. Is existing behavior preserved?
4. Are there regression risks?
5. Are there security concerns?
6. Are edge cases handled?
7. Is error handling sufficient?
8. Are tests meaningful?
9. Is unnecessary complexity introduced?
10. Are there simpler alternatives?

Return:

Critical Issues
Recommended Improvements
Files Requiring Manual Review
Tests Still Needed
Overall Recommendation

Do not approve the changes merely because they compile.`,
  },
  {
    title: "Create Project Rules",
    category: "Project Context",
    description:
      "Turn important repository conventions into reusable instructions for future AI work.",
    prompt: `Help me define concise AI coding rules for this project.

Review the project information and conventions provided.

Create rules covering:

1. Architecture that must be preserved
2. File/folder conventions
3. Coding style
4. Dependency policy
5. Testing requirements
6. Error handling
7. Security requirements
8. Components that should not be changed without approval
9. Preferred implementation approach
10. Required validation before completion

Keep the rules practical and specific to this project.

Do not invent architecture that is not visible in the project.

Project information:
[paste information if needed]`,
  },
];

const strengths = [
  {
    title: "Codebase Context",
    text: "Work with repository context instead of treating every coding request as an isolated snippet.",
  },
  {
    title: "Multi-File Changes",
    text: "Handle development tasks that require coordinated edits across several relevant files.",
  },
  {
    title: "Agentic Development",
    text: "Use AI-assisted workflows for implementation, debugging and iterative development tasks.",
  },
  {
    title: "Refactoring",
    text: "Analyze existing code and make focused structural improvements while preserving behavior.",
  },
  {
    title: "Project Instructions",
    text: "Use persistent project conventions and rules to guide repeated AI-assisted development.",
  },
  {
    title: "Developer Workflow",
    text: "Keep AI assistance close to the editor, codebase and day-to-day development process.",
  },
];

const lifecycle = [
  ["01", "Context", "Understand the codebase and project rules."],
  ["02", "Plan", "Define the smallest safe change."],
  ["03", "Implement", "Modify only the relevant files."],
  ["04", "Validate", "Build, test and inspect failures."],
  ["05", "Review", "Check the final diff before accepting it."],
];

export default function CursorAIGuidePage() {
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
                EruDigm Developer Tool Guide
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Cursor AI
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Code With Context.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Learn practical AI-first development workflows for understanding
              repositories, implementing features, debugging, refactoring and
              reviewing codebase changes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Codebase Context",
                "Agentic Development",
                "Debugging",
                "Refactoring",
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
              Explore Developer Workflows ↓
            </a>
          </div>

          {/* EDITOR PREVIEW */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">

              <div className="flex items-center justify-between border-b border-gray-100 p-7">
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    EruDigm Cursor Workflow
                  </p>

                  <h2 className="mt-1 text-3xl font-bold">
                    Repository Task
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg">
                  CODE
                </div>
              </div>

              <div className="bg-slate-950 p-7 font-mono text-sm leading-7 text-slate-200">
                <p className="text-cyan-300">Requirement</p>
                <p>Fix the issue without changing main behavior.</p>

                <p className="mt-5 text-cyan-300">Workflow</p>
                <p>→ inspect repository</p>
                <p>→ locate relevant files</p>
                <p>→ trace dependencies</p>
                <p>→ make focused edits</p>
                <p>→ run validation</p>
                <p>→ review final diff</p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-7">
                {[
                  ["Context", "Know the codebase"],
                  ["Agent", "Execute tasks"],
                  ["Debug", "Trace failures"],
                  ["Review", "Inspect changes"],
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
              Where Cursor Fits
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              The codebase should be part of the conversation.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cursor is designed around AI-assisted software development inside
              an editor. Its value becomes clearer when a task depends on
              understanding multiple files, existing project conventions and
              the surrounding codebase rather than generating an isolated code
              snippet.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              EruDigm Principle
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              More context should lead to safer changes — not larger rewrites.
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Understanding the repository is valuable because it helps an
              agent preserve architecture and existing behavior.
            </p>
          </div>

        </div>
      </section>

      {/* STRENGTHS */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Development Strengths
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Where an AI-first editor can improve the workflow.
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
            EruDigm Cursor Workflow
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Context → Plan → Implement → Validate → Review
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Do not start with “change the code.” Start by establishing what the
            system already does and what must remain intact.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {lifecycle.map(([number, title, text]) => (
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

      {/* CONTEXT VS BLIND EDITING */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="grid gap-7 lg:grid-cols-2">

            <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-sm">
              <span className="text-sm font-bold uppercase tracking-widest text-red-600">
                Weak Workflow
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                “Rewrite this component and make it better.”
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                The agent has no definition of “better,” no protection for
                existing behavior and no clear boundary around the change.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Better Workflow
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Inspect first. Define the requirement. Protect the system.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Ask the agent to understand relevant files and dependencies,
                preserve existing behavior, make the smallest required change
                and validate it afterward.
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
            Six practical Cursor workflows.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Adapt these instructions to the actual repository and requirement
            rather than asking AI to make broad changes without context.
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

      {/* PROJECT RULES */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl lg:p-12">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Project Context
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Reusable rules are especially valuable in an existing system.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              A good AI coding workflow should know important project
              conventions: architecture, testing expectations, dependency
              policy and the parts of the system that should not be changed
              casually.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                "Preserve established architecture.",
                "Follow existing file and naming conventions.",
                "Avoid unnecessary dependencies.",
                "Do not modify unrelated working functionality.",
                "Run the expected build and tests.",
                "Report exactly what changed.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl bg-slate-50 p-5"
                >
                  <span className="font-bold text-blue-600">✓</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* TOOL CHOICE */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Choose By Workflow
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Cursor is one strong coding workflow — not the only one.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {[
            [
              "AI-first editor workflow",
              "Cursor is specifically designed around this experience.",
            ],
            [
              "GitHub-centered development",
              "Compare GitHub Copilot.",
            ],
            [
              "Terminal / agentic codebase work",
              "Compare Claude Code.",
            ],
            [
              "General AI plus coding",
              "Compare ChatGPT, Claude and Gemini.",
            ],
          ].map(([task, suggestion]) => (
            <div
              key={task}
              className="rounded-2xl border border-gray-200 bg-slate-50 p-6"
            >
              <p className="font-bold">{task}</p>
              <p className="mt-2 text-gray-600">{suggestion}</p>
            </div>
          ))}

        </div>
      </section>

      {/* FINAL */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Key Takeaway
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Give AI the codebase. Give it boundaries too.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Repository context becomes valuable when it helps the agent make
            smaller, safer and more informed changes — not when it encourages
            unnecessary rewrites.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/resources/ai-resources/tools/github-copilot"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              GitHub Copilot Guide
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