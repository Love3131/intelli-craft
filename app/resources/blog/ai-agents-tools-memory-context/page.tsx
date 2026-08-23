import Link from "next/link";

const buildingBlocks = [
  {
    number: "01",
    title: "Context",
    label: "UNDERSTAND",
    description:
      "The information available to the model for the current step: instructions, conversation, retrieved knowledge, files, tool results and task state.",
  },
  {
    number: "02",
    title: "Memory",
    label: "REMEMBER",
    description:
      "Information intentionally preserved beyond the immediate interaction so future steps or sessions can continue with useful state.",
  },
  {
    number: "03",
    title: "Tools",
    label: "ACT",
    description:
      "External capabilities that let the agent retrieve information, calculate, search, update systems, execute code or perform other actions.",
  },
  {
    number: "04",
    title: "Reasoning",
    label: "DECIDE",
    description:
      "The model uses the objective and available evidence to determine which useful step or tool should come next.",
  },
];

const contextTypes = [
  {
    title: "System Instructions",
    text: "Rules, role definitions, constraints and expected behavior for the agent.",
  },
  {
    title: "User Request",
    text: "The current objective, requirements and information explicitly supplied by the user.",
  },
  {
    title: "Conversation State",
    text: "Relevant information from the current interaction or task history.",
  },
  {
    title: "Retrieved Knowledge",
    text: "Information brought into context from documents, search, RAG or connected systems.",
  },
  {
    title: "Tool Results",
    text: "Fresh evidence returned by databases, APIs, applications, code execution or other tools.",
  },
  {
    title: "Task State",
    text: "What has already happened, what remains incomplete and what the agent should do next.",
  },
];

const memoryTypes = [
  {
    title: "Working Memory",
    text: "Temporary information needed while the current task is being completed.",
    example: "Current plan, intermediate findings and recent tool results.",
  },
  {
    title: "Task Memory",
    text: "State that allows a longer-running task to resume rather than restart.",
    example: "Completed steps, unresolved issues and next required action.",
  },
  {
    title: "User Memory",
    text: "Useful preferences or stable information retained for future interactions when appropriate.",
    example: "Preferred output format or recurring workflow preference.",
  },
  {
    title: "Organizational Knowledge",
    text: "Persistent business information stored outside the model and retrieved when relevant.",
    example: "Policies, SOPs, product documentation and project knowledge.",
  },
];

const tools = [
  {
    title: "Search",
    examples: "Web search · enterprise search · document retrieval",
  },
  {
    title: "Data",
    examples: "SQL · spreadsheets · analytics platforms · databases",
  },
  {
    title: "Communication",
    examples: "Email · messaging · notifications",
  },
  {
    title: "Productivity",
    examples: "Calendar · tasks · documents · project systems",
  },
  {
    title: "Code",
    examples: "Terminal · code execution · repository tools",
  },
  {
    title: "Business Systems",
    examples: "CRM · ERP · HRIS · ticketing · internal applications",
  },
];

const exampleSteps = [
  {
    step: "1",
    title: "Goal",
    detail: "Prepare this week's performance review.",
  },
  {
    step: "2",
    title: "Context",
    detail: "Read reporting instructions, KPI definitions and current task state.",
  },
  {
    step: "3",
    title: "Tool",
    detail: "Retrieve the current and previous period data.",
  },
  {
    step: "4",
    title: "Reason",
    detail: "Identify unusual changes requiring investigation.",
  },
  {
    step: "5",
    title: "Tool",
    detail: "Query supporting data for the largest anomaly.",
  },
  {
    step: "6",
    title: "Memory",
    detail: "Record findings and unresolved questions for the task.",
  },
  {
    step: "7",
    title: "Output",
    detail: "Prepare the review and escalate anything requiring human judgment.",
  },
];

const mistakes = [
  {
    title: "Too Much Context",
    text: "Giving the model everything can add noise, increase cost and make the important information harder to identify.",
  },
  {
    title: "Wrong Memory",
    text: "Persisting inaccurate, sensitive or temporary information can contaminate future work.",
  },
  {
    title: "Too Many Tools",
    text: "A large tool catalog can make selection harder and expand the security surface unnecessarily.",
  },
  {
    title: "Excessive Permissions",
    text: "An agent should not receive broad write access merely because the integration makes it technically possible.",
  },
  {
    title: "Stale Context",
    text: "Old project information or outdated policies can produce confident but incorrect decisions.",
  },
  {
    title: "Unverified Tool Results",
    text: "External systems can fail or return incomplete information. Tool output still needs appropriate validation.",
  },
];

const designRules = [
  "Give the agent the minimum context required for the current decision.",
  "Retrieve knowledge when needed instead of permanently stuffing everything into context.",
  "Persist only information that has future value.",
  "Separate temporary task state from durable memory.",
  "Give each tool a clear purpose and understandable interface.",
  "Use least-privilege access for every connected system.",
  "Require confirmation for consequential external actions.",
  "Log important tool calls and state changes.",
];

export default function AgentToolsMemoryContextArticle() {
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

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  AI Infrastructure
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Agent Architecture
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  10 min read
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                How AI Agents Use
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Tools, Memory & Context
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                Intelligence alone does not make an agent useful. It needs the
                right information, a way to preserve useful state and carefully
                controlled capabilities for interacting with the world.
              </p>

              <a
                href="#building-blocks"
                className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                Explore the Architecture ↓
              </a>
            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Anatomy of a Useful Agent
              </p>

              <div className="mt-7 rounded-2xl bg-slate-950 p-5 text-center text-white">
                <p className="text-xs font-bold text-cyan-300">GOAL</p>
                <p className="mt-2 font-bold">What should be accomplished?</p>
              </div>

              <div className="py-4 text-center text-xl text-blue-600">↓</div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Context", "What do I know?"],
                  ["Memory", "What should I remember?"],
                  ["Reasoning", "What should I do next?"],
                  ["Tools", "What can I actually do?"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-blue-50 p-5"
                  >
                    <p className="font-bold text-blue-600">{title}</p>
                    <p className="mt-2 text-sm text-gray-600">{text}</p>
                  </div>
                ))}
              </div>

              <div className="py-4 text-center text-xl text-blue-600">↓</div>

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-center font-bold text-white shadow-lg">
                Action → Observation → Updated Context
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Beyond the Model
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          The model is only one component of an agentic system.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">
          <p>
            A powerful language model can interpret instructions and reason
            about a problem, but useful work usually depends on information and
            capabilities outside the model.
          </p>

          <p>
            An agent may need current project information, company knowledge,
            data from another system, the result of an earlier action or a way
            to actually change something.
          </p>

          <p>
            Context, memory and tools provide those capabilities. The quality
            of an agent depends not only on the intelligence of the underlying
            model, but also on how carefully these surrounding systems are
            designed.
          </p>
        </div>
      </section>

      {/* BUILDING BLOCKS */}
      <section
        id="building-blocks"
        className="bg-slate-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Four Building Blocks
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Understand → Remember → Decide → Act
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {buildingBlocks.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-bold text-blue-600">
                  {item.number}
                </span>

                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-blue-600">
                  {item.label}
                </p>

                <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Context
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What does the agent need to know right now?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Context is the working information available to the model when it
            makes the current decision.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contextTypes.map((item) => (
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
      </section>

      {/* CONTEXT ENGINEERING */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-100 bg-white p-8">
              <span className="text-sm font-bold uppercase tracking-widest text-red-600">
                Weak Approach
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Give the model everything
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Huge amounts of unrelated history, documents and tool output
                can increase noise and make the relevant information harder to
                identify.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Better Approach
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Give the model the right context
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Retrieve and assemble information based on the current task,
                permissions and decision instead of treating every piece of
                available information as equally useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEMORY */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Memory
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What information should survive beyond the current step?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Memory is useful when information has future value. Persisting
            everything is not the objective.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {memoryTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.text}
              </p>

              <div className="mt-5 rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Example
                </p>

                <p className="mt-2 text-gray-700">{item.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEMORY VS RAG */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Common Confusion
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Memory and RAG are related—but they are not the same thing.
          </h2>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold text-blue-600">MEMORY</span>

              <h3 className="mt-4 text-2xl font-bold">
                Preserve useful state
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Memory helps the system retain information about previous
                interactions, task progress or useful stable preferences.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-100 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold text-cyan-700">RAG</span>

              <h3 className="mt-4 text-2xl font-bold">
                Retrieve relevant external knowledge
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                RAG searches an external knowledge source and brings relevant
                evidence into the current context when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Tools
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Tools turn model output into real capability
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Without tools, an agent can reason about work. With tools, it can
            retrieve current information or interact with external systems.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.examples}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOL LOOP */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Tool-Use Loop
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Decide → Call → Observe → Continue
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">
            <div className="grid lg:grid-cols-4">
              {[
                [
                  "1. Decide",
                  "The model determines that external information or an action is required.",
                ],
                [
                  "2. Call",
                  "The application invokes an appropriate tool with structured arguments.",
                ],
                [
                  "3. Observe",
                  "The tool returns data, status or another result.",
                ],
                [
                  "4. Continue",
                  "The result becomes new context for the next decision.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="border-b border-gray-100 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <h3 className="font-bold text-blue-600">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE EXAMPLE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Put It Together
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            A reporting agent using context, memory and tools
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-7">
          {exampleSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                {item.step}
              </span>

              <h3 className="mt-4 font-bold">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MCP */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Where MCP Fits
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                MCP can standardize how compatible AI applications connect to
                external capabilities.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Tools are a general agent concept. MCP is one protocol through
                which compatible applications can discover and communicate
                with tools, resources and other capabilities exposed by MCP
                servers.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">
              <div className="rounded-2xl bg-slate-950 p-5 text-center text-white">
                <p className="font-bold">AI Agent</p>
              </div>

              <div className="py-3 text-center text-xl text-blue-600">↓</div>

              <div className="rounded-2xl bg-blue-600 p-5 text-center font-bold text-white">
                MCP
              </div>

              <div className="py-3 text-center text-xl text-blue-600">↓</div>

              <div className="grid grid-cols-3 gap-3">
                {["Tools", "Resources", "Systems"].map((item) => (
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

      {/* SECURITY */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Permissions Matter
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          A tool is also a permission boundary.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          Giving an agent access to a tool means giving it some capability in
          the outside world. Reading a document, deleting a file, sending an
          email and approving a payment have very different consequences.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [
              "Read",
              "Retrieve information without changing the source system.",
            ],
            [
              "Write",
              "Create or modify information in an external system.",
            ],
            [
              "Consequential Action",
              "Trigger an action with financial, legal, customer or human impact.",
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

      {/* MISTAKES */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Common Design Mistakes
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              More context, memory and tools are not automatically better
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm"
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

      {/* DESIGN RULES */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Design Principles
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Build the agent around relevance and control
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {designRules.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-slate-50 p-6"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </span>

              <p className="pt-1 text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Key Takeaway
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            A useful agent needs the right knowledge, the right memory and the
            right capabilities—not unlimited access to everything.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Context helps the model understand the current decision. Memory
            preserves useful state. Tools connect reasoning to external
            information and actions. Designing those three layers carefully is
            just as important as choosing the underlying AI model.
          </p>
        </div>
      </section>

      {/* NEXT */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Next In EruDigm Insights
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Machine Learning, Generative AI and Agentic AI are often discussed
            together—but they solve very different problems.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Next we'll compare these three generations of AI capability and
            show where each belongs in a real business architecture.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/blog/what-is-mcp"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              ← MCP Explained
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