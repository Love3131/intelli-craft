import Link from "next/link";

const roles = [
  {
    title: "Orchestrator",
    label: "COORDINATE",
    text: "Understands the overall objective, delegates appropriate work and combines results.",
  },
  {
    title: "Researcher",
    label: "DISCOVER",
    text: "Finds relevant information, evidence and source material for the task.",
  },
  {
    title: "Analyst",
    label: "ANALYZE",
    text: "Examines evidence, identifies patterns and develops structured conclusions.",
  },
  {
    title: "Specialist",
    label: "EXECUTE",
    text: "Handles domain-specific work such as coding, finance, legal analysis or data processing.",
  },
  {
    title: "Reviewer",
    label: "CHALLENGE",
    text: "Checks assumptions, errors, missing evidence and quality before completion.",
  },
  {
    title: "Synthesizer",
    label: "COMBINE",
    text: "Converts outputs from several agents into one coherent final result.",
  },
];

const patterns = [
  {
    title: "Sequential",
    flow: "Agent A → Agent B → Agent C",
    description:
      "Each agent receives the result of the previous stage. Useful when work naturally moves through specialized steps.",
  },
  {
    title: "Parallel",
    flow: "Agent A ↘   Agent B → Combine   Agent C ↗",
    description:
      "Several agents work independently on different parts of the problem before their results are combined.",
  },
  {
    title: "Orchestrator + Specialists",
    flow: "Coordinator → Specialists → Coordinator",
    description:
      "A central agent decides which specialist should handle each part of the objective and synthesizes their results.",
  },
  {
    title: "Reviewer Pattern",
    flow: "Creator → Reviewer → Revision",
    description:
      "One agent produces work while another challenges or evaluates it before the result is accepted.",
  },
];

const examples = [
  {
    title: "Research Team",
    objective: "Prepare a market-entry brief",
    agents: [
      "Researcher → gathers current evidence",
      "Market Analyst → evaluates market signals",
      "Competitor Analyst → compares competitors",
      "Fact Checker → verifies important claims",
      "Writer → produces the executive brief",
    ],
  },
  {
    title: "Software Team",
    objective: "Implement a feature safely",
    agents: [
      "Planner → understands architecture and requirement",
      "Developer → implements the change",
      "Tester → runs and designs tests",
      "Reviewer → checks regression and security risk",
      "Coordinator → prepares final implementation summary",
    ],
  },
  {
    title: "Analytics Team",
    objective: "Investigate a performance decline",
    agents: [
      "Data Agent → retrieves required datasets",
      "Analyst → calculates KPIs and trends",
      "Diagnostic Agent → investigates drivers",
      "Reviewer → checks calculations and assumptions",
      "Executive Writer → prepares decision summary",
    ],
  },
  {
    title: "Operations Team",
    objective: "Resolve an operational exception",
    agents: [
      "Triage Agent → classifies the issue",
      "Knowledge Agent → retrieves relevant procedures",
      "Action Agent → performs permitted system actions",
      "Validation Agent → checks the result",
      "Coordinator → escalates unresolved exceptions",
    ],
  },
];

const risks = [
  {
    title: "Coordination Failure",
    text: "Agents may misunderstand responsibilities, pass incomplete information or duplicate work.",
  },
  {
    title: "Context Loss",
    text: "Important information can disappear when work is transferred between agents.",
  },
  {
    title: "Error Amplification",
    text: "One agent's incorrect assumption may become trusted input for several downstream agents.",
  },
  {
    title: "Higher Cost",
    text: "Multiple model calls, tools and review loops can consume substantially more resources than one well-designed agent.",
  },
  {
    title: "Higher Latency",
    text: "Sequential delegation and review may make a system slower even when individual agents work quickly.",
  },
  {
    title: "Harder Debugging",
    text: "When many agents contribute to an outcome, identifying where a bad decision originated becomes more difficult.",
  },
];

const designQuestions = [
  "Does the task genuinely contain separable specialist responsibilities?",
  "Would one capable agent with good tools solve the problem more simply?",
  "What information should each agent receive?",
  "Which information should remain isolated?",
  "Who owns the overall objective?",
  "How will conflicting agent outputs be resolved?",
  "What evidence must survive between stages?",
  "Where should a human approve, review or intervene?",
];

export default function MultiAgentAISystemsArticle() {
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

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  Agentic AI
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Multi-Agent Systems
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  11 min read
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                How Multi-Agent
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  AI Systems Work
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                Instead of asking one AI agent to do everything, a multi-agent
                system divides work across specialized agents that can
                collaborate, review one another and coordinate toward a larger
                objective.
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
                One Goal. Specialized Roles.
              </p>

              <div className="mt-7 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-center text-white shadow-lg">
                <p className="text-xs font-bold text-blue-100">
                  ORCHESTRATOR
                </p>
                <p className="mt-2 text-lg font-bold">
                  Understand → Delegate → Coordinate
                </p>
              </div>

              <div className="py-4 text-center text-2xl text-blue-600">
                ↓
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Researcher", "Find evidence"],
                  ["Analyst", "Interpret data"],
                  ["Specialist", "Execute task"],
                  ["Reviewer", "Check quality"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-slate-50 p-4"
                  >
                    <p className="font-bold text-blue-600">{title}</p>
                    <p className="mt-1 text-sm text-gray-600">{text}</p>
                  </div>
                ))}
              </div>

              <div className="py-4 text-center text-2xl text-blue-600">
                ↓
              </div>

              <div className="rounded-2xl bg-slate-950 p-5 text-center text-white">
                <p className="text-xs font-bold text-cyan-300">
                  SYNTHESIS
                </p>
                <p className="mt-2 font-bold">
                  Combine specialist outputs into one result
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE IDEA */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          The Core Idea
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Sometimes specialization is more useful than asking one agent to
          handle the entire problem.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">
          <p>
            A single agent can already perform multi-step work, call tools and
            adapt its approach. Multi-agent architecture introduces another
            level: separate agents can be assigned different responsibilities,
            context, tools or evaluation roles.
          </p>

          <p>
            For example, one agent might gather research, another analyze the
            evidence and a third challenge the conclusions. A coordinator can
            then combine their outputs into a final result.
          </p>

          <p>
            The benefit is specialization and separation of responsibilities.
            The cost is coordination complexity. A multi-agent system is useful
            only when dividing the work creates enough value to justify that
            additional complexity.
          </p>
        </div>
      </section>

      {/* SINGLE VS MULTI */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Architecture Choice
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              One agent vs multiple agents
            </h2>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                Single Agent
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                One agent owns the objective
              </h3>

              <div className="mt-7 rounded-2xl bg-slate-50 p-6 leading-7 text-gray-700">
                Goal → Plan → Research → Analyze → Write → Review → Complete
              </div>

              <p className="mt-6 leading-7 text-gray-600">
                Simpler architecture, fewer handoffs and easier debugging. A
                strong default when one agent can manage the task effectively.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Multi-Agent System
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                Specialized agents divide responsibility
              </h3>

              <div className="mt-7 rounded-2xl bg-blue-50 p-6 leading-7 text-gray-700">
                Goal → Coordinator → Researcher + Analyst + Specialist +
                Reviewer → Synthesis
              </div>

              <p className="mt-6 leading-7 text-gray-600">
                More useful when tasks genuinely benefit from specialization,
                parallel work, independent review or different tool access.
              </p>
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
            Multi-Agent Architecture
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Different agents can own different responsibilities
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            These roles are examples rather than mandatory components. A good
            system uses only the roles needed for the actual objective.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {role.label}
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {role.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {role.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ORCHESTRATOR */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Orchestration
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Someone—or something—needs to coordinate the team.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                In many multi-agent designs, an orchestrator interprets the
                objective, delegates work, tracks progress and determines how
                specialist outputs should be combined.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Orchestration itself can be model-driven, deterministic or a
                hybrid. High-risk routing decisions do not automatically need
                to be delegated to another AI model.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">
              <div className="rounded-2xl bg-blue-600 p-5 text-center text-white">
                <p className="text-sm font-bold text-blue-100">
                  OBJECTIVE
                </p>
                <p className="mt-2 text-xl font-bold">
                  Prepare an evidence-backed strategy brief
                </p>
              </div>

              <div className="py-4 text-center text-xl text-blue-600">↓</div>

              <div className="rounded-2xl bg-slate-950 p-5 text-center text-white">
                <p className="text-sm font-bold text-cyan-300">
                  ORCHESTRATOR
                </p>
                <p className="mt-2 font-bold">
                  Break objective into specialist tasks
                </p>
              </div>

              <div className="py-4 text-center text-xl text-blue-600">↓</div>

              <div className="grid grid-cols-3 gap-3">
                {["Research", "Analysis", "Review"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-blue-50 p-4 text-center text-sm font-bold text-blue-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATTERNS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Coordination Patterns
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Agents do not all need to communicate the same way
          </h2>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {patterns.map((pattern) => (
            <div
              key={pattern.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold">
                {pattern.title}
              </h3>

              <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-sm font-semibold text-cyan-300">
                {pattern.flow}
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                {pattern.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PARALLELISM */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Parallel Work
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Multiple agents can investigate different parts of a problem at the
            same time.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Parallelization can be valuable when tasks are sufficiently
            independent. A market research system might investigate customers,
            competitors and technology trends simultaneously before combining
            the results.
          </p>

          <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <div className="text-center">
              <div className="inline-block rounded-xl bg-blue-600 px-6 py-4 font-bold text-white">
                Research Objective
              </div>
            </div>

            <div className="py-5 text-center text-xl text-blue-600">↓</div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Agent A", "Customer research"],
                ["Agent B", "Competitor research"],
                ["Agent C", "Technology research"],
              ].map(([agent, task]) => (
                <div
                  key={agent}
                  className="rounded-2xl bg-slate-50 p-5 text-center"
                >
                  <p className="font-bold text-blue-600">{agent}</p>
                  <p className="mt-2 text-sm text-gray-600">{task}</p>
                </div>
              ))}
            </div>

            <div className="py-5 text-center text-xl text-blue-600">↓</div>

            <div className="text-center">
              <div className="inline-block rounded-xl bg-slate-950 px-6 py-4 font-bold text-white">
                Synthesize Evidence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Practical Teams
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What might a multi-agent team look like?
          </h2>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {examples.map((example) => (
            <div
              key={example.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {example.title}
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {example.objective}
              </h3>

              <div className="mt-6 space-y-3">
                {example.agents.map((agent) => (
                  <div
                    key={agent}
                    className="rounded-xl bg-slate-50 px-5 py-4 text-gray-700"
                  >
                    {agent}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEW */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Creator
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                One agent creates the work
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                The creator focuses on producing a strong result from the
                available context and requirements.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-100 bg-white p-8 shadow-xl">
              <span className="text-sm font-bold uppercase tracking-widest text-cyan-700">
                Reviewer
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Another agent challenges it
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                A separate reviewer can look for unsupported claims, missing
                requirements, errors or risks before the work is accepted.
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-3xl bg-slate-950 p-8 text-center text-white">
            <p className="text-lg font-bold">
              Independent review can improve quality—but two agents agreeing
              does not prove that both are correct.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Context Design
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Every agent does not need every piece of information.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          Multi-agent design creates an opportunity to control context. A
          specialist can receive only the information and tools required for
          its role, reducing unnecessary context and limiting access.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Shared Context",
              "Objective, important constraints and common definitions.",
            ],
            [
              "Role Context",
              "Information specifically required by the specialist.",
            ],
            [
              "Private Context",
              "Sensitive information restricted to authorized roles.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-gray-200 bg-slate-50 p-7"
            >
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RISKS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Complexity Has a Cost
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              More agents can create more failure points
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {risks.map((risk) => (
              <div
                key={risk.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold">{risk.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {risk.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DON'T NEED */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="rounded-3xl border border-red-100 bg-red-50 p-8 lg:p-12">
          <span className="text-sm font-bold uppercase tracking-widest text-red-600">
            Avoid Agent Inflation
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            A five-agent system is not automatically better than one good
            agent.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            If one agent can understand the task, use the required tools and
            produce a reliable result, splitting the job across multiple agents
            may only add latency, cost and debugging difficulty.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
            Add specialized agents when specialization, parallel work,
            independent review, permission separation or context isolation
            provides a concrete benefit.
          </p>
        </div>
      </section>

      {/* DESIGN QUESTIONS */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Before You Build
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Eight questions for multi-agent architecture
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {designQuestions.map((question, index) => (
              <div
                key={question}
                className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <p className="pt-1 text-gray-700">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Key Takeaway
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Build an AI team only when the work benefits from a team.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Multi-agent systems can divide complex objectives into specialized
          responsibilities, run work in parallel and introduce independent
          review. They also create coordination overhead, additional failure
          modes and higher operational complexity. Start simple and add agents
          only where specialization creates measurable value.
        </p>
      </section>

      {/* NEXT */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Next In EruDigm Insights
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Agents can coordinate—but what gives them the ability to remember,
            understand context and act?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Next we'll explore the three building blocks behind useful agentic
            systems: Tools, Memory and Context.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/blog/ai-agents-vs-ai-assistants"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              ← Agents vs Assistants
            </Link>

            <Link
              href="/resources/blog"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              EruDigm Insights
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}