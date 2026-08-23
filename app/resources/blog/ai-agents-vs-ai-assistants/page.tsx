import Link from "next/link";

const comparison = [
  {
    capability: "Primary role",
    assistant: "Helps a person complete a task",
    workflow: "Executes a predefined process",
    agent: "Works toward an objective",
  },
  {
    capability: "Next step",
    assistant: "Usually directed by the user",
    workflow: "Defined by workflow logic",
    agent: "Can dynamically determine it",
  },
  {
    capability: "Tool use",
    assistant: "May use tools when requested",
    workflow: "Uses tools at defined steps",
    agent: "Can choose tools based on the situation",
  },
  {
    capability: "Planning",
    assistant: "Usually limited or user-directed",
    workflow: "Plan is largely predefined",
    agent: "Can create and revise a plan",
  },
  {
    capability: "Adaptation",
    assistant: "Responds to the next user instruction",
    workflow: "Handles predefined branches",
    agent: "Can adapt based on observations",
  },
  {
    capability: "Predictability",
    assistant: "Relatively high interaction control",
    workflow: "Usually highest",
    agent: "Lower because behavior is more dynamic",
  },
  {
    capability: "Human involvement",
    assistant: "Frequent",
    workflow: "At defined checkpoints",
    agent: "Can vary by autonomy and risk",
  },
  {
    capability: "Best fit",
    assistant: "Knowledge and productivity tasks",
    workflow: "Repeatable known processes",
    agent: "Open-ended multi-step tasks",
  },
];

const examples = [
  {
    task: "Write an executive email",
    choice: "AI Assistant",
    reason:
      "The task is bounded and a person can review the draft before sending it.",
  },
  {
    task: "Process every invoice using the same rules",
    choice: "Workflow",
    reason:
      "The steps and business rules are predictable and should remain controlled.",
  },
  {
    task: "Investigate why a KPI dropped",
    choice: "AI Agent",
    reason:
      "The system may need to decide which data, tools and investigative steps are relevant.",
  },
  {
    task: "Summarize an uploaded contract",
    choice: "AI Assistant",
    reason:
      "The user primarily needs analysis of supplied information rather than autonomous execution.",
  },
  {
    task: "Validate weekly data and update a dashboard",
    choice: "Workflow + AI",
    reason:
      "Most steps can be deterministic while AI handles interpretation or summary generation.",
  },
  {
    task: "Research competitors and adapt the investigation as evidence appears",
    choice: "AI Agent",
    reason:
      "The useful next research step may depend on what previous searches reveal.",
  },
];

const agentSignals = [
  "The objective is clear, but the exact sequence of steps is not.",
  "The correct next action depends on information discovered during execution.",
  "The task requires several tools or systems.",
  "Exceptions occur frequently enough that rigid workflow branches become difficult.",
  "The system must observe results and decide whether to continue or change approach.",
  "The value of flexible reasoning outweighs the additional cost and complexity.",
];

const workflowSignals = [
  "The process steps are already known.",
  "Business rules are stable and explicit.",
  "Predictability is more important than flexibility.",
  "The same inputs should reliably produce the same process.",
  "Exceptions are limited and can be handled with normal rules.",
  "A conventional automation can solve the problem safely and cheaply.",
];

export default function AgentsVsAssistantsArticle() {
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
                  Comparison Guide
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  9 min read
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                AI Agents vs
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  AI Assistants
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                Not every AI system that uses a tool is an agent. Understand
                the practical difference between assistants, workflows and
                agents—and choose the simplest architecture that actually
                solves the problem.
              </p>

              <a
                href="#comparison"
                className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                Compare Them ↓
              </a>
            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Who Decides What Happens Next?
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold text-gray-500">
                    AI ASSISTANT
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    User directs the interaction
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Ask → respond → user decides next step
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-xs font-bold text-blue-600">
                    AI WORKFLOW
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    Process logic directs the path
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Trigger → defined steps → defined branches
                  </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-lg">
                  <p className="text-xs font-bold text-blue-100">
                    AI AGENT
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    Model can determine the next useful action
                  </p>
                  <p className="mt-2 text-sm text-blue-50">
                    Goal → plan → act → observe → adapt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CONFUSION */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Why The Terms Get Confused
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Tool use alone does not make a system agentic.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">
          <p>
            Modern AI assistants can search the web, analyze files, execute
            code and interact with external tools. That makes them far more
            capable than traditional chatbots, but capability and autonomy are
            not the same thing.
          </p>

          <p>
            The more useful distinction is how the system determines what to do
            next. In an assistant interaction, the person usually drives the
            sequence. In a workflow, application logic defines the sequence. In
            an agent, the model can dynamically choose actions based on the
            objective and what it observes.
          </p>

          <p>
            These categories are not perfectly rigid. Real systems often
            combine them. A production process might use deterministic
            automation for predictable steps, an AI assistant for drafting and
            an agent only for the part that genuinely requires flexible
            decision-making.
          </p>
        </div>
      </section>

      {/* EVOLUTION */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              The Spectrum
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              From conversation to coordinated autonomy
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {[
              ["01", "Chatbot", "Responds to conversational input."],
              ["02", "Assistant", "Helps users perform richer tasks."],
              ["03", "Workflow", "Combines AI and tools in defined paths."],
              ["04", "Agent", "Dynamically chooses steps toward a goal."],
              ["05", "Multi-Agent", "Several specialized agents coordinate."],
            ].map(([number, title, text]) => (
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

          <div className="mt-8 rounded-2xl bg-white p-6 text-center shadow-sm">
            <p className="font-semibold text-gray-700">
              More autonomy is not automatically more advanced for the
              business problem. The best architecture is the one that delivers
              the required outcome with appropriate reliability and control.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section
        id="comparison"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Side-by-Side
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Assistant vs Workflow vs Agent
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-xl">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <th className="p-5 text-left">Capability</th>
                <th className="p-5 text-left">AI Assistant</th>
                <th className="p-5 text-left">AI Workflow</th>
                <th className="p-5 text-left">AI Agent</th>
              </tr>
            </thead>

            <tbody>
              {comparison.map((row) => (
                <tr key={row.capability} className="border-b last:border-b-0">
                  <td className="p-5 font-bold">{row.capability}</td>
                  <td className="p-5 text-gray-600">{row.assistant}</td>
                  <td className="p-5 text-gray-600">{row.workflow}</td>
                  <td className="p-5 font-medium text-gray-800">
                    {row.agent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SAME TASK DIFFERENT SYSTEM */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Practical Example
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              One reporting problem. Three different architectures.
            </h2>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <span className="text-sm font-bold text-gray-500">
                ASSISTANT
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Human drives the process
              </h3>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 leading-7 text-gray-700">
                Human downloads report → uploads it → asks AI to analyze →
                reviews output → manually emails stakeholders.
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold text-blue-600">
                WORKFLOW
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Automation drives the process
              </h3>

              <div className="mt-6 rounded-2xl bg-blue-50 p-5 leading-7 text-gray-700">
                Schedule triggers → fetch report → calculate metrics → AI writes
                summary → defined approval → send email.
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-200 bg-white p-8 shadow-xl">
              <span className="text-sm font-bold text-cyan-700">
                AGENT
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Objective drives the process
              </h3>

              <div className="mt-6 rounded-2xl bg-cyan-50 p-5 leading-7 text-gray-700">
                “Prepare this week's performance review” → agent determines
                required data → investigates anomalies → chooses additional
                checks → prepares output → escalates exceptions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS EXAMPLES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Choose the Right Pattern
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Different tasks deserve different architectures
          </h2>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {examples.map((item) => (
            <div
              key={item.task}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                {item.choice}
              </p>

              <h3 className="mt-3 text-2xl font-bold">{item.task}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DO YOU NEED AN AGENT */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Architecture Decision
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Do you actually need an AI agent?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Before building an agent, ask whether flexible model-directed
              behavior is solving a real problem.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-100 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold uppercase tracking-widest text-cyan-700">
                Agent Signals
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                An agent may be justified when...
              </h3>

              <div className="mt-7 space-y-4">
                {agentSignals.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-xl bg-cyan-50 p-4"
                  >
                    <span className="font-bold text-cyan-700">✓</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Workflow Signals
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Normal automation may be better when...
              </h3>

              <div className="mt-7 space-y-4">
                {workflowSignals.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-xl bg-blue-50 p-4"
                  >
                    <span className="font-bold text-blue-600">✓</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HYBRID */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Production Reality
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          The strongest systems are often hybrid.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          You do not need to choose one architecture for an entire business
          process. Deterministic software can handle rules and calculations,
          assistants can support people, and agents can be introduced only
          where dynamic reasoning genuinely adds value.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <div className="grid lg:grid-cols-5">
            {[
              ["Trigger", "Deterministic"],
              ["Validate Data", "Deterministic"],
              ["Investigate Exception", "Agent"],
              ["Prepare Summary", "AI"],
              ["Approve / Execute", "Human + Control"],
            ].map(([task, owner]) => (
              <div
                key={task}
                className="border-b border-gray-100 p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <p className="text-sm font-bold text-blue-600">
                  {owner}
                </p>

                <p className="mt-3 font-semibold">{task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISK */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Autonomy Changes Risk
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            The more a system can decide and act, the stronger the controls
            should become.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Limit tools and permissions to what the task requires.",
              "Require approval before high-impact external actions.",
              "Log tool calls and important state changes.",
              "Define when the agent must stop or escalate.",
              "Evaluate behavior across realistic edge cases.",
              "Protect connected systems from untrusted instructions.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-6"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <p className="pt-1 text-gray-700">{item}</p>
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
          Don't ask “Can we build an agent?” Ask “Where does autonomy create
          value?”
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Assistants, workflows and agents are different architectural tools.
          An agent is valuable when the task genuinely benefits from dynamic
          decisions about what to do next. If the process is already known,
          conventional automation may remain simpler, cheaper and more
          reliable.
        </p>
      </section>

      {/* NEXT */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Next In EruDigm Insights
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What happens when one agent is not enough?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Next we'll explore Multi-Agent AI Systems—how specialized agents
            can divide responsibilities, coordinate work and collaborate on
            larger objectives.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/blog/agentic-ai-autonomous-digital-workers"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              ← Agentic AI
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