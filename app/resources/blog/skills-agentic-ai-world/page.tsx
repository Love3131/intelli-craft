import Link from "next/link";

const skillLayers = [
  {
    number: "01",
    title: "AI Literacy",
    label: "UNDERSTAND AI",
    text: "Understand what modern models, agents, RAG, MCP and AI tools can do—and where their limitations begin.",
    examples: "LLMs · Agents · RAG · MCP · Multimodal AI",
  },
  {
    number: "02",
    title: "Data Literacy",
    label: "QUESTION THE EVIDENCE",
    text: "Understand metrics, data quality, analysis and evidence well enough to challenge AI-generated conclusions.",
    examples: "KPIs · SQL · Data quality · Statistics · Visualization",
  },
  {
    number: "03",
    title: "Workflow Design",
    label: "REDESIGN WORK",
    text: "Break a process into tasks and decide what should be deterministic, AI-assisted, agentic or human-led.",
    examples: "Process mapping · Automation · Exceptions · Human approval",
  },
  {
    number: "04",
    title: "Integration Thinking",
    label: "CONNECT SYSTEMS",
    text: "Understand how AI reaches data, applications and tools through APIs, connectors, MCP and automation platforms.",
    examples: "APIs · MCP · Webhooks · Databases · Business systems",
  },
  {
    number: "05",
    title: "Evaluation",
    label: "TEST AI",
    text: "Measure whether an AI system is accurate, useful, reliable and safe across realistic cases—not just impressive demos.",
    examples: "Test cases · Evals · Ground truth · Monitoring · Regression",
  },
  {
    number: "06",
    title: "Domain Expertise",
    label: "KNOW THE BUSINESS",
    text: "Understand the real process, customer, industry and constraints well enough to know whether the AI output makes sense.",
    examples: "Business rules · Customers · Operations · Industry knowledge",
  },
  {
    number: "07",
    title: "Critical Judgment",
    label: "DECIDE",
    text: "Challenge assumptions, recognize uncertainty and make decisions when evidence or AI recommendations are incomplete.",
    examples: "Reasoning · Verification · Trade-offs · Decision-making",
  },
  {
    number: "08",
    title: "Communication",
    label: "CREATE ACTION",
    text: "Turn analysis and AI output into clear decisions, recommendations and communication that people can use.",
    examples: "Storytelling · Executive communication · Collaboration",
  },
  {
    number: "09",
    title: "AI Governance",
    label: "USE AI RESPONSIBLY",
    text: "Understand privacy, security, permissions, human oversight and accountability around AI-enabled workflows.",
    examples: "Security · Privacy · Permissions · Human-in-the-loop",
  },
  {
    number: "10",
    title: "Continuous Learning",
    label: "KEEP ADAPTING",
    text: "Build durable concepts instead of tying your career to one AI product whose interface may change next month.",
    examples: "Experimentation · Research · Learning · Adaptability",
  },
];

const roadmap = [
  {
    stage: "01",
    title: "Foundation",
    subtitle: "Understand",
    items: [
      "AI and machine-learning fundamentals",
      "How LLMs and generative AI work conceptually",
      "Data and analytical thinking",
      "AI limitations and hallucinations",
    ],
  },
  {
    stage: "02",
    title: "AI Power User",
    subtitle: "Apply",
    items: [
      "Structured prompting",
      "File and data analysis",
      "Research workflows",
      "AI-assisted writing and problem solving",
    ],
  },
  {
    stage: "03",
    title: "Automation Builder",
    subtitle: "Connect",
    items: [
      "Process mapping",
      "APIs and integrations",
      "Workflow automation",
      "Data validation and exception handling",
    ],
  },
  {
    stage: "04",
    title: "Agentic Systems",
    subtitle: "Orchestrate",
    items: [
      "Tool use",
      "RAG and knowledge retrieval",
      "MCP concepts",
      "Memory and context",
      "Agent evaluation and guardrails",
    ],
  },
  {
    stage: "05",
    title: "AI-Enabled Leader",
    subtitle: "Redesign",
    items: [
      "Workflow and job redesign",
      "AI governance",
      "Business-case measurement",
      "Change leadership",
      "Human + AI operating models",
    ],
  },
];

const careerPaths = [
  {
    role: "Business Professional",
    priority: "AI + Domain + Workflow",
    skills: [
      "AI literacy",
      "Prompting and research",
      "Process mapping",
      "Automation thinking",
      "Business judgment",
      "Communication",
    ],
  },
  {
    role: "Data Analyst",
    priority: "Data + AI + Decisions",
    skills: [
      "SQL and data modeling",
      "Statistics and KPI design",
      "Python where useful",
      "AI-assisted analysis",
      "Data validation",
      "Business interpretation",
    ],
  },
  {
    role: "Developer",
    priority: "Software + AI Systems",
    skills: [
      "Software engineering",
      "APIs and integrations",
      "LLM application architecture",
      "RAG and retrieval",
      "Agent tooling",
      "Testing and security",
    ],
  },
  {
    role: "Manager / Leader",
    priority: "Strategy + Redesign + Governance",
    skills: [
      "AI capability awareness",
      "Process redesign",
      "Business-case evaluation",
      "Risk and governance",
      "Workforce development",
      "Change leadership",
    ],
  },
];

const durableSkills = [
  ["Problem Framing", "Define the right problem before choosing technology."],
  ["Learning Ability", "Acquire new tools without rebuilding your identity around them."],
  ["Judgment", "Know when evidence is sufficient and when more investigation is required."],
  ["Systems Thinking", "Understand how people, process, data and technology interact."],
  ["Domain Expertise", "Know enough about the work to recognize when AI is wrong."],
  ["Communication", "Turn technical capability into understandable business action."],
];

const antiPatterns = [
  {
    title: "Chasing Every Tool",
    text: "Learning 50 AI product interfaces creates activity, but not necessarily durable capability.",
  },
  {
    title: "Prompting Without Domain Knowledge",
    text: "A polished AI response is difficult to evaluate when you do not understand the underlying subject.",
  },
  {
    title: "Coding Everything",
    text: "Technical implementation matters, but many AI problems are actually process, data or governance problems.",
  },
  {
    title: "Ignoring Fundamentals",
    text: "SQL, statistics, software engineering, business knowledge and communication remain valuable because AI builds on them.",
  },
  {
    title: "Trusting AI Automatically",
    text: "Using AI effectively includes knowing how to verify it, not merely knowing how to ask it questions.",
  },
  {
    title: "Learning Without Building",
    text: "Understanding improves much faster when concepts are applied to real workflows and measurable problems.",
  },
];

export default function SkillsAgenticAIWorldArticle() {
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
                  Future of Work
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Career Roadmap
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  11 min read
                </span>

              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                The Skills That Matter
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  in an Agentic AI World
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                The future does not belong simply to people who know the most
                AI tools. It belongs to people who can combine AI capability
                with data, domain expertise, judgment and the ability to
                redesign how work gets done.
              </p>

              <a
                href="#skills"
                className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                Explore the Skills ↓
              </a>
            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                The New Skill Stack
              </p>

              <div className="mt-7 space-y-4">

                <div className="rounded-2xl bg-slate-950 p-5 text-white">
                  <p className="text-xs font-bold text-cyan-300">
                    HUMAN FOUNDATION
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    Domain · Judgment · Communication
                  </p>
                </div>

                <div className="text-center text-xl text-blue-600">+</div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-xs font-bold text-blue-600">
                    DIGITAL FOUNDATION
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    Data · Systems · Automation
                  </p>
                </div>

                <div className="text-center text-xl text-blue-600">+</div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-lg">
                  <p className="text-xs font-bold text-blue-100">
                    AI CAPABILITY
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    Models · Agents · RAG · MCP · Evaluation
                  </p>
                </div>

                <div className="text-center text-xl text-blue-600">↓</div>

                <div className="rounded-2xl bg-slate-50 p-5 text-center font-bold">
                  AI-Enabled Professional
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          The Career Question
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          What should you learn when AI itself keeps changing?
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">

          <p>
            New models, coding agents, research systems and automation tools
            appear constantly. Trying to master every product is therefore an
            impossible career strategy.
          </p>

          <p>
            A stronger approach is to separate durable capabilities from
            temporary interfaces. The interface may change, but organizations
            will continue to need people who can define problems, understand
            data, design workflows, evaluate results and make responsible
            decisions.
          </p>

          <p>
            AI literacy becomes another layer on top of those foundations—not
            a replacement for them.
          </p>

        </div>

      </section>

      {/* OLD VS NEW */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              A Better Career Model
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              From tool operator to system thinker
            </h2>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">

            <div className="rounded-3xl border border-gray-200 bg-white p-8">

              <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                Narrow Skill Model
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                “I know this software.”
              </h3>

              <div className="mt-7 space-y-3">

                {[
                  "I know Excel",
                  "I know Power BI",
                  "I know one AI tool",
                  "I know one automation platform",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-slate-50 p-4 text-gray-700"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">

              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Durable Skill Model
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                “I know how to solve this class of problem.”
              </h3>

              <div className="mt-7 space-y-3">

                {[
                  "I can analyze data and validate evidence",
                  "I can redesign a business process",
                  "I can connect AI to useful systems",
                  "I can evaluate whether the result is reliable",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-blue-50 p-4 font-medium text-gray-700"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SKILL LAYERS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            The Skill Stack
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Ten capabilities worth building
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            You do not need equal depth in every skill. Your role determines
            where specialization matters.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {skillLayers.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="flex items-start gap-5">

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                  {item.number}
                </span>

                <div>

                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.text}
                  </p>

                  <div className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-gray-600">
                    {item.examples}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* AI LITERACY */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            AI Literacy Is More Than Prompting
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Knowing how to ask AI a question is useful. Knowing what happens
            around the answer is more powerful.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              ["Models", "What are their strengths and limitations?"],
              ["Context", "What information is the model actually seeing?"],
              ["Tools", "What external capabilities can the system use?"],
              ["Evaluation", "How do we know the result is good enough?"],
              ["RAG", "Where does external knowledge come from?"],
              ["MCP", "How can AI connect to external capabilities?"],
              ["Agents", "Who determines the next step?"],
              ["Governance", "Who remains responsible for the outcome?"],
            ].map(([title, question]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-100 bg-white p-6"
              >
                <h3 className="font-bold text-blue-600">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {question}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* DATA */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">

          <div>

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Data Still Matters
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              AI makes data literacy more important—not less.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              AI can generate SQL, calculate metrics and create charts, but a
              professional still needs to recognize the wrong denominator,
              duplicated records, a misleading comparison or a conclusion that
              the data does not support.
            </p>

          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Questions You Should Still Ask
            </p>

            <div className="mt-6 space-y-4">

              {[
                "What is the grain of this dataset?",
                "How is this KPI defined?",
                "Are there duplicates or missing records?",
                "Is this comparison statistically/business meaningful?",
                "Does the evidence actually support the conclusion?",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-slate-50 p-4 text-gray-700"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* WORKFLOW DESIGN */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            A High-Value Skill
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Learn to decide where AI should—and should not—be used.
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

            <div className="grid lg:grid-cols-4">

              {[
                [
                  "Deterministic",
                  "Rules, calculations, validation",
                ],
                [
                  "Generative AI",
                  "Draft, summarize, explain",
                ],
                [
                  "Agentic AI",
                  "Investigate, adapt, coordinate",
                ],
                [
                  "Human",
                  "Judge, approve, lead",
                ],
              ].map(([owner, work]) => (
                <div
                  key={owner}
                  className="border-b border-gray-100 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <p className="text-sm font-bold text-blue-600">
                    {owner}
                  </p>

                  <p className="mt-3 font-semibold">
                    {work}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CAREER PATHS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Different Roles, Different Depth
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What should you prioritize?
          </h2>

        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">

          {careerPaths.map((path) => (
            <div
              key={path.role}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {path.priority}
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                {path.role}
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {path.skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl bg-slate-50 p-4 text-sm font-semibold text-gray-700"
                  >
                    {skill}
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ROADMAP */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Practical Learning Roadmap
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Foundation → Application → Automation → Agents → Leadership
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              You do not need to become an AI researcher. Build enough depth to
              solve increasingly valuable problems.
            </p>

          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-5">

            {roadmap.map((stage) => (
              <div
                key={stage.stage}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm"
              >

                <span className="text-sm font-bold text-blue-600">
                  {stage.stage}
                </span>

                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-blue-600">
                  {stage.subtitle}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {stage.title}
                </h3>

                <div className="mt-5 space-y-3">

                  {stage.items.map((item) => (
                    <p
                      key={item}
                      className="text-sm leading-6 text-gray-600"
                    >
                      • {item}
                    </p>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* DURABLE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Durable Advantages
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Skills that survive tool changes
          </h2>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {durableSkills.map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            >

              <h3 className="text-xl font-bold">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ANTI PATTERNS */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Career Traps
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              What not to optimize for
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {antiPatterns.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* BUILD SOMETHING */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 lg:p-12">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            The Fastest Learning Loop
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Learn → Build → Evaluate → Improve
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Pick a real problem from your work. Map the current process. Use AI
            to improve one part. Measure whether it actually helps. Then make
            the workflow more capable.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-4">

            {[
              ["01", "Learn", "Understand the concept"],
              ["02", "Build", "Apply it to real work"],
              ["03", "Evaluate", "Measure the result"],
              ["04", "Improve", "Fix what failed"],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-blue-600">
                  {number}
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FINAL */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Final Takeaway
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Don't compete with AI at producing the first draft.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Learn to define the right problem, provide the right context,
            connect the right systems, challenge the output and turn AI
            capability into measurable outcomes.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            The professionals who become most valuable will not simply use AI.
            They will know how to design better work because AI exists.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/resources/blog/ai-agents-future-of-work"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              ← Future of Work
            </Link>

            <Link
              href="/resources/blog"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Explore All EruDigm Insights
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}