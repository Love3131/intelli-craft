import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";

const workflows = [
  {
    title: "Understand Unfamiliar Code",
    category: "Code Understanding",
    description:
      "Build context around existing code before asking Copilot to change it.",
    prompt: `Review the selected code and surrounding project context.

Before making any changes, explain:

1. What this code does
2. Inputs and outputs
3. Important dependencies
4. Data flow
5. Functions or components that depend on it
6. Existing assumptions
7. Potential edge cases
8. Areas that require clarification

Do not modify the code yet.

Explain the behavior in clear technical language.`,
  },
  {
    title: "Implement a Feature Safely",
    category: "Agent Mode",
    description:
      "Give Copilot a clear implementation objective while protecting existing behavior.",
    prompt: `Implement the requirement below in the existing codebase.

Requirement:
[paste requirement]

Before editing:

1. Inspect the relevant files.
2. Identify the existing architecture.
3. Identify behavior that must be preserved.
4. Explain the smallest safe implementation plan.

Implementation rules:
- Do not redesign unrelated components.
- Do not introduce dependencies unless necessary.
- Follow existing project conventions.
- Handle relevant edge cases.
- Update or add tests where appropriate.

After implementation:

1. List files changed.
2. Explain the changes.
3. Run relevant validation/tests.
4. Report any failures.
5. Identify remaining risks.`,
  },
  {
    title: "Debug an Error",
    category: "Debugging",
    description:
      "Investigate the root cause before accepting a speculative fix.",
    prompt: `Debug the problem below.

Error:
[paste exact error]

Expected behavior:
[paste expected behavior]

Actual behavior:
[paste actual behavior]

Use this process:

1. Identify where the failure originates.
2. Trace relevant dependencies.
3. List the most likely causes.
4. Use available evidence to narrow them down.
5. Identify the root cause.
6. Recommend the smallest safe fix.
7. Implement the fix only after identifying the cause.
8. Run relevant tests.
9. Explain how the fix was validated.

Do not rewrite unrelated code.`,
  },
  {
    title: "Generate Useful Tests",
    category: "Testing",
    description:
      "Ask for tests based on behavior and edge cases rather than raw coverage numbers.",
    prompt: `Review the selected code and create meaningful tests.

First identify:

1. Intended behavior
2. Important inputs
3. Expected outputs
4. Boundary conditions
5. Failure cases
6. Regression risks

Then create tests covering:

- normal behavior,
- edge cases,
- invalid input,
- important failure paths,
- previously identified bug scenarios.

Follow the existing testing framework and project conventions.

Do not modify production behavior merely to make tests pass.`,
  },
  {
    title: "Refactor Without Changing Behavior",
    category: "Refactoring",
    description:
      "Improve maintainability while explicitly preserving functionality.",
    prompt: `Review the selected code for maintainability improvements.

Goal:
Improve readability and maintainability without changing external behavior.

Before editing:

1. Explain what the code currently does.
2. Identify genuine maintainability problems.
3. Identify behavior that must remain unchanged.
4. Propose the smallest useful refactor.

Rules:
- Do not add unnecessary abstractions.
- Do not change public interfaces unless required.
- Preserve business logic.
- Follow existing project conventions.

After refactoring:
- explain each change,
- run relevant tests,
- identify any behavior that could not be verified.`,
  },
  {
    title: "Review Changes Before Merge",
    category: "Code Review",
    description:
      "Use Copilot as another reviewer while keeping human approval responsible for the merge.",
    prompt: `Review the current changes as if they were a pull request.

Focus on:

1. Correctness
2. Regression risk
3. Security concerns
4. Error handling
5. Edge cases
6. Performance concerns
7. Readability
8. Test coverage
9. Unnecessary complexity
10. Compatibility with existing project conventions

For each issue provide:

Severity:
File / Area:
Problem:
Why It Matters:
Suggested Fix:

Do not invent issues merely to produce feedback.

End with:
- Critical Issues
- Recommended Improvements
- Validation Still Required`,
  },
];

const strengths = [
  {
    title: "IDE Assistance",
    text: "Work directly where code is written, with completions, chat, edits and repository context.",
  },
  {
    title: "Agent Mode",
    text: "Delegate multi-step development tasks that may require edits, terminal commands and iteration.",
  },
  {
    title: "Cloud Agent",
    text: "Delegate repository work on GitHub and review the resulting branch or pull request.",
  },
  {
    title: "Code Review",
    text: "Request AI-assisted review of pull requests or code changes and inspect suggested improvements.",
  },
  {
    title: "Repository Context",
    text: "Ground development assistance in the actual repository, instructions and relevant project information.",
  },
  {
    title: "GitHub Workflow",
    text: "Keep AI-assisted implementation closer to issues, branches, pull requests and reviews.",
  },
];

const lifecycle = [
  ["01", "Understand", "Inspect existing code and requirements."],
  ["02", "Plan", "Define the smallest safe implementation."],
  ["03", "Build", "Implement within project conventions."],
  ["04", "Test", "Validate behavior and edge cases."],
  ["05", "Review", "Inspect the diff before merge."],
];

export default function GitHubCopilotGuidePage() {
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
              GitHub Copilot
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Beyond Autocomplete.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Use Copilot across the development lifecycle — understanding
              existing code, implementing features, debugging, testing,
              reviewing changes and working with repository-level agents.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "IDE Workflow",
                "Agent Mode",
                "Code Review",
                "Testing",
                "Repository Work",
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

          {/* DEV WORKFLOW PREVIEW */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">

              <div className="flex items-center justify-between border-b border-gray-100 p-7">
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    EruDigm Developer Workflow
                  </p>

                  <h2 className="mt-1 text-3xl font-bold">
                    Feature Implementation
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg">
                  CODE
                </div>
              </div>

              <div className="bg-slate-950 p-7 font-mono text-sm leading-7 text-slate-200">
                <p className="text-cyan-300">Task</p>
                <p>Add the feature without breaking existing behavior.</p>

                <p className="mt-5 text-cyan-300">Agent workflow</p>
                <p>→ inspect relevant files</p>
                <p>→ understand dependencies</p>
                <p>→ plan implementation</p>
                <p>→ edit code</p>
                <p>→ run tests</p>
                <p>→ review diff</p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-7">
                {[
                  ["IDE", "Stay in editor"],
                  ["Agent", "Multi-step work"],
                  ["Review", "Inspect changes"],
                  ["GitHub", "PR workflow"],
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
              Where Copilot Fits
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              The value is not just generating code. It is staying close to
              the development workflow.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              GitHub Copilot works across editors, GitHub and other developer
              surfaces. Depending on the workflow, you can use it for direct
              coding assistance, agentic implementation, repository tasks and
              code review.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Golden Rule
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Copilot output deserves the same review as human-written code.
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Agentic implementation can accelerate work, but the resulting
              diff, tests, security implications and business behavior still
              need review.
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
              Where Copilot fits across software delivery.
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

      {/* DEVELOPMENT LIFECYCLE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            EruDigm Development Flow
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Understand → Plan → Build → Test → Review
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            A good coding prompt protects the system before asking the agent to
            change it.
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

      {/* AGENT MODE */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="grid gap-7 lg:grid-cols-2">

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                IDE Agent Mode
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Delegate multi-step work inside the development environment.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Agent mode can determine relevant files, propose edits and
                terminal commands, and iterate when a task requires several
                steps or error handling.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Copilot Cloud Agent
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Delegate repository tasks and review the resulting pull request.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Repository tasks can be delegated to Copilot on GitHub. The
                resulting changes still belong in the normal review and merge
                process.
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
            Six practical Copilot workflows.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Use these as starting instructions and adapt them to the repository,
            task and development environment.
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

      {/* CODE REVIEW */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl lg:p-12">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Code Review
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              AI review is another signal — not approval to merge.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Copilot can review code and pull requests and suggest changes.
              GitHub's own guidance still expects people to review Copilot's
              output before merging it.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                "Check whether the implementation matches the requirement.",
                "Review security-sensitive changes manually.",
                "Inspect generated tests for meaningful behavior.",
                "Confirm no unrelated files were changed.",
                "Run the project's normal validation pipeline.",
                "Review the final diff before merge.",
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

      {/* CHOOSE TOOL */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Choose By Workflow
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Copilot is strongest when GitHub and the IDE are central to the job.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {[
            [
              "GitHub + IDE workflow",
              "Copilot is a natural option to evaluate.",
            ],
            [
              "AI-first code editor",
              "Compare Cursor.",
            ],
            [
              "Agentic terminal/codebase work",
              "Compare Claude Code.",
            ],
            [
              "General business + coding",
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
            Accelerate the workflow. Keep control of the merge.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Copilot becomes more useful when it has real repository context,
            a specific objective, clear constraints and a defined validation
            process.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/resources/ai-resources/guides/sql-prompt-collection"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              SQL Prompt Collection
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