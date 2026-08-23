import Link from "next/link";

const architecture = [
  {
    number: "01",
    title: "Goal",
    text: "The agent needs a clear objective: what outcome should actually be achieved?",
  },
  {
    number: "02",
    title: "Context",
    text: "Relevant instructions, files, business knowledge and current state help define the environment.",
  },
  {
    number: "03",
    title: "Plan",
    text: "The system determines useful next steps rather than relying only on one fixed response.",
  },
  {
    number: "04",
    title: "Tools",
    text: "Tools let the agent retrieve information or interact with external systems.",
  },
  {
    number: "05",
    title: "Act",
    text: "The agent performs an action: search, calculate, edit a file, call an API or update a system.",
  },
  {
    number: "06",
    title: "Observe",
    text: "It examines what happened and uses the result as new evidence.",
  },
  {
    number: "07",
    title: "Adapt",
    text: "If the result is incomplete or incorrect, the agent changes its approach.",
  },
  {
    number: "08",
    title: "Complete",
    text: "The loop ends when the objective is achieved, blocked or requires human judgment.",
  },
];

const useCases = [
  {
    title: "Reporting Agent",
    example:
      "Collect weekly data → validate it → calculate KPIs → update a report → prepare an executive summary → notify stakeholders.",
  },
  {
    title: "Research Agent",
    example:
      "Research a market → compare sources → identify conflicting evidence → build a structured brief → flag what requires verification.",
  },
  {
    title: "Customer Support Agent",
    example:
      "Understand a request → retrieve account context → search knowledge → recommend or execute an allowed action → escalate when needed.",
  },
  {
    title: "Software Engineering Agent",
    example:
      "Inspect a repository → trace the issue → modify relevant files → run tests → examine failures → iterate → prepare changes for review.",
  },
  {
    title: "Operations Agent",
    example:
      "Monitor incoming work → classify requests → update systems → coordinate follow-ups → surface exceptions to people.",
  },
  {
    title: "Knowledge Agent",
    example:
      "Search internal sources → synthesize the answer → cite evidence → identify missing documentation → create a follow-up task.",
  },
];

const guardrails = [
  "Define which tools and systems the agent may access.",
  "Require approval before consequential external actions.",
  "Use least-privilege permissions instead of broad access.",
  "Log important actions and state changes.",
  "Validate critical outputs against source systems.",
  "Set stopping conditions for long-running or looping tasks.",
  "Protect agents against untrusted instructions and prompt injection.",
  "Keep humans accountable for high-impact decisions.",
];

export default function AgenticAIArticle() {
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

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            <div>

              <div className="flex flex-wrap gap-3">

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  Agentic AI
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Flagship Insight
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  12 min read
                </span>

              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                From Chatbots to
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Autonomous Digital Workers
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                Agentic AI changes the interaction model from
                <strong className="text-slate-900"> “answer my question” </strong>
                to
                <strong className="text-slate-900"> “help accomplish this goal.”</strong>
                Understand the architecture, opportunities and controls behind
                AI systems that can plan, use tools and take actions.
              </p>

              <a
                href="#architecture"
                className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                Explore the Architecture ↓
              </a>

            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Evolution of AI Work
              </p>

              <div className="mt-7 space-y-4">

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-bold text-gray-500">
                    CHATBOT
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Question → Answer
                  </p>
                </div>

                <div className="text-center text-2xl text-blue-600">↓</div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-sm font-bold text-blue-600">
                    AI ASSISTANT
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Task → Help → Human Acts
                  </p>
                </div>

                <div className="text-center text-2xl text-blue-600">↓</div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-lg">
                  <p className="text-sm font-bold text-blue-100">
                    AI AGENT
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Goal → Plan → Tools → Actions → Feedback
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          The Shift
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Traditional generative AI produces content. Agents can participate
          in workflows.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">

          <p>
            A traditional chatbot normally waits for a prompt, generates a
            response and waits again. The human remains responsible for moving
            information between systems and deciding every next action.
          </p>

          <p>
            An agentic system can operate differently. Given an objective and
            access to appropriate tools, it can determine intermediate steps,
            retrieve information, perform actions, observe what happened and
            adjust its approach.
          </p>

          <p>
            That does not mean every AI application should become autonomous.
            Many predictable business processes are better implemented as
            controlled workflows. The value of an agent appears when the task
            requires flexible decisions about what to do next.
          </p>

        </div>

      </section>

      {/* ASSISTANT VS AGENT */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Understand the Difference
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Assistant vs Workflow vs Agent
            </h2>

          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

              <span className="text-sm font-bold text-gray-500">
                AI ASSISTANT
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Helps a person do the work
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Drafts, analyzes, summarizes or recommends. The human usually
                decides and executes the next step.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-gray-700">
                “Summarize this report and draft an email.”
              </div>

            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">

              <span className="text-sm font-bold text-blue-600">
                AI WORKFLOW
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Follows an orchestrated process
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Models and tools operate inside a path largely defined by the
                application or automation logic.
              </p>

              <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
                Receive file → classify → summarize → send for approval.
              </div>

            </div>

            <div className="rounded-3xl border border-cyan-200 bg-white p-8 shadow-xl">

              <span className="text-sm font-bold text-cyan-700">
                AI AGENT
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Determines how to pursue the goal
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                The model dynamically chooses steps and tools, observes results
                and adapts until it completes the task or needs human input.
              </p>

              <div className="mt-6 rounded-xl bg-cyan-50 p-4 text-sm text-cyan-900">
                “Investigate why this KPI dropped and prepare the next action.”
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ARCHITECTURE */}
      <section
        id="architecture"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Agent Architecture
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What actually makes an AI system agentic?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            An agent is not just a smarter prompt. It is a loop connecting a
            model to context, tools, actions and feedback.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {architecture.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <span className="text-sm font-bold text-blue-600">
                {item.number}
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* LOOP */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              The Agent Loop
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Plan → Act → Observe → Adapt
            </h2>

          </div>

          <div className="mt-12 rounded-3xl border border-blue-100 bg-white p-8 shadow-xl lg:p-12">

            <div className="grid gap-5 md:grid-cols-4">

              {[
                ["PLAN", "What should happen next?"],
                ["ACT", "Use a tool or perform a task."],
                ["OBSERVE", "What actually happened?"],
                ["ADAPT", "Continue, change approach or ask for help."],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="relative rounded-2xl bg-slate-50 p-6"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {index + 1}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {text}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-center text-white">

              <p className="font-bold">
                The loop continues until the goal is complete, blocked,
                stopped or escalated to a person.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TOOLS */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Tools Turn Intelligence Into Action
        </span>

        <h2 className="mt-4 max-w-4xl text-4xl font-bold">
          Without tools, an agent can think about work. With tools, it can
          interact with the environment.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <span className="text-sm font-bold text-blue-600">
              DATA TOOLS
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Retrieve context
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Search the web, query databases, read documents, retrieve CRM
              records or search company knowledge.
            </p>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <span className="text-sm font-bold text-blue-600">
              ACTION TOOLS
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Change something
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Send messages, update records, create files, execute code or
              interact with applications.
            </p>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <span className="text-sm font-bold text-blue-600">
              OTHER AGENTS
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Delegate specialized work
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              A coordinating agent can delegate research, analysis, writing or
              other specialized tasks to separate agents.
            </p>

          </div>

        </div>

      </section>

      {/* MEMORY */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Context
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                What does the agent need right now?
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Current instructions, retrieved knowledge, files, conversation
                state and tool results help the model understand the immediate
                task.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Memory
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                What should survive beyond this step?
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Useful agent systems may persist relevant user preferences,
                task state, learned facts or action history so future work can
                continue with appropriate context.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* BUSINESS USE CASES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Business Applications
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What could digital workers actually do?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            The strongest use cases combine a clear objective, accessible
            systems, repeatable business value and well-defined controls.
          </p>

        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">

          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
            >

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <div className="mt-5 rounded-2xl bg-slate-50 p-6 leading-7 text-gray-700">
                {item.example}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* WHEN NOT TO USE AGENTS */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            More Autonomous Is Not Always Better
          </span>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold">
            Sometimes a normal automation or workflow is the better system.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Agentic systems can add flexibility, but that flexibility may also
            increase latency, cost and unpredictability. If every step of a
            process is already known, a deterministic workflow can be easier
            to test, govern and maintain.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            <div className="rounded-3xl border border-green-100 bg-white p-8">

              <span className="font-bold text-green-700">
                Consider an agent when
              </span>

              <ul className="mt-5 space-y-3 text-gray-700">
                <li>• the correct next step depends on what happens;</li>
                <li>• the task requires several tools or information sources;</li>
                <li>• exceptions are common;</li>
                <li>• flexible judgment adds meaningful value.</li>
              </ul>

            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8">

              <span className="font-bold text-gray-700">
                Prefer a workflow when
              </span>

              <ul className="mt-5 space-y-3 text-gray-700">
                <li>• the process is stable and deterministic;</li>
                <li>• every step can be defined in advance;</li>
                <li>• strict predictability is more important than flexibility;</li>
                <li>• normal automation solves the problem reliably.</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* GOVERNANCE */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Trust & Governance
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Autonomy without boundaries is not a production strategy.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          The more actions an agent can take, the more important permissions,
          observability, evaluation and human control become.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {guardrails.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-slate-50 p-6"
            >

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </span>

              <p className="pt-1 text-gray-700">
                {item}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* FUTURE */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            What Comes Next
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            The next interface may be a goal, not an application.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Today's software asks people to open applications, navigate menus,
            move information and coordinate processes manually. Agentic systems
            point toward a different interaction model: describe the desired
            outcome, give a system controlled access to the required tools and
            supervise the work at meaningful checkpoints.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            The organizations that benefit most will probably not be those that
            simply add the word “agent” to every automation. They will be the
            ones that understand which decisions should remain deterministic,
            which tasks benefit from AI judgment and where people must remain
            firmly in control.
          </p>

        </div>

      </section>

      {/* NEXT ARTICLE */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Next In EruDigm Insights
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            If agents need tools, how do we connect them?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Next we'll explore MCP — Model Context Protocol — and why
            standardized connections between AI systems, tools and context
            matter.
          </p>

          <div className="mt-10">

            <Link
              href="/resources/blog"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Back to EruDigm Insights
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}