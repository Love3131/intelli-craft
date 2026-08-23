import Link from "next/link";

const primitives = [
  {
    title: "Tools",
    label: "TAKE ACTION",
    description:
      "Executable capabilities that allow an AI application to query systems, call APIs, perform calculations or change something.",
    examples: [
      "Search a CRM",
      "Create a ticket",
      "Query a database",
      "Send an approved action",
    ],
  },
  {
    title: "Resources",
    label: "GET CONTEXT",
    description:
      "Structured information that applications can make available as context, such as files, schemas or application-specific data.",
    examples: [
      "Project files",
      "Database schema",
      "Documentation",
      "Application data",
    ],
  },
  {
    title: "Prompts",
    label: "GUIDE INTERACTION",
    description:
      "Reusable prompt templates or instructions exposed by a server for users and applications.",
    examples: [
      "Review code",
      "Analyze report",
      "Generate summary",
      "Standard workflow prompt",
    ],
  },
];

const useCases = [
  {
    title: "Developer Assistant",
    flow:
      "AI application → MCP server → repository/files/tools → inspect code → propose or perform allowed development actions",
  },
  {
    title: "Business Knowledge Assistant",
    flow:
      "AI application → MCP server → business knowledge/resources → retrieve relevant context → answer with grounded information",
  },
  {
    title: "Operations Agent",
    flow:
      "Agent → MCP tools → operational systems → retrieve status → perform permitted action → inspect result",
  },
  {
    title: "Analytics Assistant",
    flow:
      "AI application → MCP server → database/schema/query tools → analyze data → return structured findings",
  },
  {
    title: "Project Assistant",
    flow:
      "AI application → MCP connections → project files/tasks/context → understand current state → support next actions",
  },
  {
    title: "Multi-System Agent",
    flow:
      "Agent → multiple MCP servers → specialized tools and resources → coordinate work across connected systems",
  },
];

const securityRules = [
  "Connect only to MCP servers you trust.",
  "Understand exactly which tools and resources a server exposes.",
  "Use least-privilege permissions for connected systems.",
  "Require confirmation for consequential actions where appropriate.",
  "Treat tool metadata and external content as potentially untrusted.",
  "Protect credentials and authorization tokens.",
  "Log and monitor important actions.",
  "Review security boundaries before connecting sensitive business systems.",
];

export default function MCPArticle() {
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
                  AI Infrastructure
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  MCP
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  10 min read
                </span>

              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                What Is MCP?
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Why It Matters for AI
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                AI becomes far more useful when it can securely access the
                right tools and context. Model Context Protocol provides a
                standardized way for AI applications and external capabilities
                to communicate.
              </p>

              <a
                href="#architecture"
                className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                Understand MCP ↓
              </a>

            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                The Connection Problem
              </p>

              <div className="mt-7">

                <div className="rounded-2xl bg-slate-950 p-6 text-white">
                  <p className="text-sm font-bold text-cyan-300">
                    AI APPLICATION
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    “I need tools and business context.”
                  </p>
                </div>

                <div className="py-4 text-center text-2xl text-blue-600">
                  ↓
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-lg">
                  <p className="text-sm font-bold text-blue-100">
                    MODEL CONTEXT PROTOCOL
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Standardized connection layer
                  </p>
                </div>

                <div className="py-4 text-center text-2xl text-blue-600">
                  ↓
                </div>

                <div className="grid grid-cols-3 gap-3">

                  {["Tools", "Resources", "Prompts"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-blue-50 p-4 text-center font-bold text-blue-700"
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY MCP */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          The Problem MCP Addresses
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Powerful AI models are still limited when they cannot reach the
          systems where work actually happens.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">

          <p>
            A language model may understand a request, but real business work
            often depends on information and capabilities outside the model:
            documents, repositories, databases, APIs, project systems and
            internal knowledge.
          </p>

          <p>
            Without a common integration approach, every AI application may
            need custom logic for every external system. As the number of AI
            applications and tools grows, those point-to-point integrations
            become harder to build and maintain.
          </p>

          <p>
            MCP provides a common protocol for exposing capabilities and
            context to compatible AI applications. That does not eliminate the
            underlying APIs or business systems. It provides a standardized
            interface through which AI applications can discover and use
            supported capabilities.
          </p>

        </div>

      </section>

      {/* BEFORE VS AFTER */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Integration Model
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              From custom connections to a common protocol
            </h2>

          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">

            <div className="rounded-3xl border border-red-100 bg-white p-8">

              <span className="text-sm font-bold uppercase tracking-widest text-red-600">
                Without a Standard
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Many custom integrations
              </h3>

              <div className="mt-7 space-y-3 text-gray-700">

                <div className="rounded-xl bg-slate-50 p-4">
                  AI App → custom connector → Database
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  AI App → different connector → Git
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  AI App → another connector → CRM
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  AI App → another connector → Files
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">

              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                With MCP
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                A shared protocol boundary
              </h3>

              <div className="mt-7 rounded-2xl bg-blue-50 p-5 text-center font-bold text-blue-700">
                AI Application
              </div>

              <div className="py-3 text-center text-xl text-blue-600">↓</div>

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-center font-bold text-white">
                MCP
              </div>

              <div className="py-3 text-center text-xl text-blue-600">↓</div>

              <div className="grid grid-cols-2 gap-3">

                {["Database", "Git", "CRM", "Files"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-slate-50 p-4 text-center font-semibold"
                  >
                    {item}
                  </div>
                ))}

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
            MCP Architecture
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Host → Client → Server → External System
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            The exact protocol continues to evolve, but these roles are useful
            for understanding how MCP-enabled applications connect to external
            capabilities.
          </p>

        </div>

        <div className="mt-14 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-xl lg:p-12">

          <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">

            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <span className="text-sm font-bold text-blue-600">
                HOST
              </span>

              <h3 className="mt-3 text-xl font-bold">
                AI Application
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                The user-facing application that coordinates the AI experience
                and security decisions.
              </p>

            </div>

            <div className="flex items-center justify-center text-2xl text-blue-600">
              →
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <span className="text-sm font-bold text-blue-600">
                CLIENT
              </span>

              <h3 className="mt-3 text-xl font-bold">
                MCP Connection
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                The protocol participant inside the host that communicates
                with an MCP server.
              </p>

            </div>

            <div className="flex items-center justify-center text-2xl text-blue-600">
              →
            </div>

            <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-lg">

              <span className="text-sm font-bold text-blue-100">
                SERVER
              </span>

              <h3 className="mt-3 text-xl font-bold">
                Exposes Capabilities
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-50">
                Provides tools, resources, prompts or other supported
                capabilities through MCP.
              </p>

            </div>

            <div className="flex items-center justify-center text-2xl text-blue-600">
              →
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <span className="text-sm font-bold text-blue-600">
                SYSTEM
              </span>

              <h3 className="mt-3 text-xl font-bold">
                Real Capability
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Database, repository, API, files, business application or
                another external capability.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PRIMITIVES */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              MCP Building Blocks
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Tools, Resources and Prompts
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              MCP servers can expose several kinds of capabilities. These three
              primitives are especially useful for understanding the protocol.
            </p>

          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">

            {primitives.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >

                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  {item.label}
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-7 space-y-3">

                  {item.examples.map((example) => (
                    <div
                      key={example}
                      className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-gray-700"
                    >
                      {example}
                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TOOL EXAMPLE */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Example
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          What happens when an AI uses an MCP tool?
        </h2>

        <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

          <div className="bg-slate-950 p-7 text-white">

            <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
              User Request
            </p>

            <p className="mt-3 text-xl font-bold">
              “Check the project tracker and tell me which tasks are overdue.”
            </p>

          </div>

          <div className="grid gap-0 lg:grid-cols-4">

            {[
              [
                "1. Discover",
                "The application identifies an available project-management tool.",
              ],
              [
                "2. Invoke",
                "The model requests the relevant tool with structured arguments.",
              ],
              [
                "3. Receive",
                "The server returns the tool result to the application.",
              ],
              [
                "4. Respond",
                "The model uses the result to prepare the answer or determine the next step.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-gray-100 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <h3 className="font-bold text-blue-600">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MCP VS API */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Common Question
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Is MCP replacing APIs?
          </h2>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

              <span className="text-sm font-bold text-gray-500">
                API
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Defines how software interacts with a service
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                APIs remain the underlying interface for many databases,
                services and business systems.
              </p>

            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">

              <span className="text-sm font-bold text-blue-600">
                MCP
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Standardizes how AI applications discover and use capabilities
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                An MCP server may itself call APIs behind the scenes. MCP adds
                a common AI-facing protocol rather than making every underlying
                service API unnecessary.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Practical Applications
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What can MCP-enabled systems connect?
          </h2>

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
                {item.flow}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* MCP + AGENTS */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>

              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                MCP + Agentic AI
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Agents need capabilities. MCP can help expose them.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                The previous EruDigm Insight explained how agents can plan,
                choose tools, act and observe results. MCP addresses a related
                integration problem: how compatible AI applications can
                discover and communicate with external capabilities through a
                common protocol.
              </p>

            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">

              <div className="rounded-2xl bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-600">
                  AGENT
                </p>
                <p className="mt-2 font-bold">
                  “I need information or an action.”
                </p>
              </div>

              <div className="py-3 text-center text-xl text-blue-600">
                ↓
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white">
                <p className="text-sm font-bold text-blue-100">
                  MCP
                </p>
                <p className="mt-2 font-bold">
                  Discover and communicate with supported capabilities
                </p>
              </div>

              <div className="py-3 text-center text-xl text-blue-600">
                ↓
              </div>

              <div className="grid grid-cols-3 gap-3">

                {["Data", "Tools", "Systems"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-slate-50 p-4 text-center text-sm font-bold"
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
          Security Matters
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          A standard connection does not make every connection safe.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          MCP can expose powerful capabilities. A tool may read sensitive data,
          write files or trigger actions in external systems. The security
          model therefore matters just as much as the integration model.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {securityRules.map((item, index) => (
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

      {/* WHY IT MATTERS */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Why MCP Matters
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            The future of AI depends on more than smarter models.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Useful AI systems need reliable ways to reach information and
            capabilities outside the model. Standardized protocols can reduce
            integration friction and make it easier for AI applications and
            external systems to evolve independently.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            MCP is important because it treats context and tools as part of the
            AI application architecture—not as one-off prompt engineering
            tricks.
          </p>

        </div>

      </section>

      {/* NEXT */}
      <section className="py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Next In EruDigm Insights
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            MCP connects AI to capabilities. But how does AI retrieve the
            right knowledge?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Next we'll explore RAG — Retrieval-Augmented Generation — and how
            AI applications can retrieve relevant business knowledge before
            generating an answer.
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