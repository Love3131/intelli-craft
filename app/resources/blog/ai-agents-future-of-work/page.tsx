import Link from "next/link";

const impactTypes = [
  {
    number: "01",
    title: "Automate",
    label: "AI DOES THE TASK",
    description:
      "Technology performs an activity that previously required human execution.",
    example:
      "Automatically reconcile structured transactions that meet predefined rules.",
  },
  {
    number: "02",
    title: "Augment",
    label: "AI HELPS THE PERSON",
    description:
      "AI accelerates or improves a task while a person remains actively involved.",
    example:
      "An analyst uses AI to investigate data and prepare a first draft of the findings.",
  },
  {
    number: "03",
    title: "Transform",
    label: "THE TASK CHANGES",
    description:
      "The original activity is redesigned because AI can handle part of the execution.",
    example:
      "A manager moves from manually producing reports to reviewing exceptions and deciding actions.",
  },
  {
    number: "04",
    title: "Create",
    label: "NEW WORK EMERGES",
    description:
      "New responsibilities appear around AI design, evaluation, governance and integration.",
    example:
      "Teams need people who design agent workflows, evaluate outputs and define approval boundaries.",
  },
];

const roles = [
  {
    role: "Data Analyst",
    automate: [
      "Routine data preparation",
      "Recurring report generation",
      "Basic descriptive summaries",
    ],
    augment: [
      "Exploratory analysis",
      "SQL/code generation",
      "Anomaly investigation",
    ],
    human: [
      "Metric definition",
      "Business interpretation",
      "Decision recommendations",
    ],
  },
  {
    role: "Software Engineer",
    automate: [
      "Boilerplate generation",
      "Routine code transformations",
      "Basic test generation",
    ],
    augment: [
      "Debugging",
      "Repository understanding",
      "Feature implementation",
    ],
    human: [
      "Architecture",
      "Trade-off decisions",
      "Security and production accountability",
    ],
  },
  {
    role: "Customer Support",
    automate: [
      "Request classification",
      "Knowledge retrieval",
      "Standard responses",
    ],
    augment: [
      "Complex case research",
      "Response drafting",
      "Conversation summarization",
    ],
    human: [
      "Sensitive cases",
      "Disputes",
      "Relationship judgment",
    ],
  },
  {
    role: "Operations Manager",
    automate: [
      "Status collection",
      "Routine monitoring",
      "Standard reminders",
    ],
    augment: [
      "Exception analysis",
      "Performance diagnosis",
      "Scenario preparation",
    ],
    human: [
      "Prioritization",
      "People leadership",
      "Operational accountability",
    ],
  },
  {
    role: "HR Professional",
    automate: [
      "Document routing",
      "FAQ responses",
      "Onboarding coordination",
    ],
    augment: [
      "Policy research",
      "Job-description drafting",
      "Workforce analysis",
    ],
    human: [
      "Employee relations",
      "Sensitive decisions",
      "Organizational judgment",
    ],
  },
  {
    role: "Finance Professional",
    automate: [
      "Invoice extraction",
      "Basic reconciliation",
      "Recurring reporting",
    ],
    augment: [
      "Variance investigation",
      "Scenario analysis",
      "Narrative reporting",
    ],
    human: [
      "Financial judgment",
      "Approval authority",
      "Risk ownership",
    ],
  },
  {
    role: "Marketing Professional",
    automate: [
      "Content variants",
      "Basic research collection",
      "Campaign reporting",
    ],
    augment: [
      "Audience research",
      "Creative ideation",
      "Performance analysis",
    ],
    human: [
      "Brand judgment",
      "Positioning",
      "Customer understanding",
    ],
  },
  {
    role: "Project Manager",
    automate: [
      "Status collection",
      "Meeting summaries",
      "Deadline reminders",
    ],
    augment: [
      "Risk identification",
      "Dependency analysis",
      "Stakeholder updates",
    ],
    human: [
      "Trade-off decisions",
      "Conflict resolution",
      "Leadership and accountability",
    ],
  },
];

const humanAdvantages = [
  {
    title: "Problem Framing",
    text: "Determining which problem actually matters and what a successful outcome should mean.",
  },
  {
    title: "Judgment",
    text: "Making decisions when evidence is incomplete, competing objectives exist or consequences matter.",
  },
  {
    title: "Accountability",
    text: "Taking responsibility for decisions affecting customers, employees, finances or society.",
  },
  {
    title: "Relationships",
    text: "Building trust, negotiating, motivating people and understanding interpersonal context.",
  },
  {
    title: "Domain Context",
    text: "Understanding organizational history, politics, exceptions and practical realities that may not exist in the data.",
  },
  {
    title: "Ethics & Values",
    text: "Deciding what should be done—not merely what can technically be done.",
  },
];

const redesignSteps = [
  {
    number: "01",
    title: "Map the Job",
    text: "Break the role into responsibilities and recurring tasks instead of evaluating only the job title.",
  },
  {
    number: "02",
    title: "Classify the Work",
    text: "Identify which activities are predictable, judgment-heavy, interpersonal, physical or high consequence.",
  },
  {
    number: "03",
    title: "Choose the Pattern",
    text: "Decide whether each task should remain human-led, be augmented, automated or redesigned.",
  },
  {
    number: "04",
    title: "Redesign the Role",
    text: "Move human attention toward higher-value decisions, exceptions, relationships and improvement.",
  },
  {
    number: "05",
    title: "Build New Skills",
    text: "Train people for the responsibilities created by the redesigned workflow.",
  },
];

export default function AIAgentsFutureOfWorkArticle() {
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
                  AI & Jobs
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  12 min read
                </span>

              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                Will AI Agents
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Replace Jobs—or Redesign Them?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                The useful question is not whether an AI can replace a job
                title. It is which tasks can be automated, which can be
                augmented and which human responsibilities become more
                important as AI takes on more execution.
              </p>

              <a
                href="#task-level"
                className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                Explore the Future of Work ↓
              </a>
            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Don't Start With the Job Title
              </p>

              <div className="mt-7">

                <div className="rounded-2xl bg-slate-950 p-5 text-center text-white">
                  <p className="text-xs font-bold text-cyan-300">
                    JOB
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Operations Manager
                  </p>
                </div>

                <div className="py-4 text-center text-xl text-blue-600">
                  ↓
                </div>

                <div className="grid grid-cols-2 gap-4">

                  {[
                    ["Reporting", "Automate"],
                    ["Analysis", "Augment"],
                    ["Decisions", "Human-led"],
                    ["Leadership", "Human-led"],
                  ].map(([task, outcome]) => (
                    <div
                      key={task}
                      className="rounded-2xl bg-blue-50 p-5"
                    >
                      <p className="font-bold">{task}</p>
                      <p className="mt-2 text-sm font-semibold text-blue-600">
                        {outcome}
                      </p>
                    </div>
                  ))}

                </div>

                <div className="py-4 text-center text-xl text-blue-600">
                  ↓
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-center font-bold text-white shadow-lg">
                  Redesigned Role
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* EVIDENCE */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Start With Evidence
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Exposure to AI does not automatically mean elimination of the job.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">

          <p>
            Jobs are bundles of different tasks. Some activities may be highly
            automatable while other responsibilities in the same occupation
            depend on judgment, interpersonal interaction, accountability or
            physical work.
          </p>

          <p>
            This is why the impact of AI is better examined at the task level.
            A technology may automate part of a role, augment another part and
            create entirely new responsibilities around supervision,
            integration and decision-making.
          </p>

          <p>
            The eventual employment outcome also depends on economics,
            adoption, regulation, organizational design and whether increased
            productivity creates additional demand for the work.
          </p>

        </div>

      </section>

      {/* FOUR EFFECTS */}
      <section
        id="task-level"
        className="bg-slate-50 py-24"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Four Effects
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              AI can automate, augment, transform and create work
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {impactTypes.map((item) => (
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

                <h3 className="mt-2 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-gray-700">
                  {item.example}
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TASK NOT JOB */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-red-100 bg-red-50 p-8">

            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Weak Question
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              “Will AI replace accountants?”
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              The job title hides many different activities with very different
              levels of automation potential.
            </p>

          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 shadow-lg">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Better Questions
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Which accounting tasks change?
            </h2>

            <div className="mt-5 space-y-3 text-gray-700">

              <p>• Which activities can be fully automated?</p>
              <p>• Which become faster with AI assistance?</p>
              <p>• Which still require professional judgment?</p>
              <p>• What new responsibilities appear?</p>

            </div>

          </div>

        </div>

      </section>

      {/* ROLE EXAMPLES */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Eight Roles
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              How work could be redistributed
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              These examples illustrate task redesign rather than predicting
              that every organization will adopt AI in the same way.
            </p>

          </div>

          <div className="mt-14 space-y-7">

            {roles.map((item) => (
              <div
                key={item.role}
                className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm"
              >

                <div className="border-b border-gray-100 p-7">

                  <h3 className="text-3xl font-bold">
                    {item.role}
                  </h3>

                </div>

                <div className="grid md:grid-cols-3">

                  <div className="border-b border-gray-100 p-7 md:border-b-0 md:border-r">

                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
                      Automate
                    </p>

                    <div className="mt-5 space-y-3">

                      {item.automate.map((task) => (
                        <p key={task} className="text-gray-700">
                          • {task}
                        </p>
                      ))}

                    </div>

                  </div>

                  <div className="border-b border-gray-100 bg-blue-50/50 p-7 md:border-b-0 md:border-r">

                    <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                      Augment
                    </p>

                    <div className="mt-5 space-y-3">

                      {item.augment.map((task) => (
                        <p key={task} className="text-gray-700">
                          • {task}
                        </p>
                      ))}

                    </div>

                  </div>

                  <div className="p-7">

                    <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
                      Human-Led
                    </p>

                    <div className="mt-5 space-y-3">

                      {item.human.map((task) => (
                        <p key={task} className="text-gray-700">
                          • {task}
                        </p>
                      ))}

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MANAGER EXAMPLE */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Example
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          What happens to a manager when reporting becomes agentic?
        </h2>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Before
            </span>

            <div className="mt-6 space-y-4">

              {[
                "Collect updates manually",
                "Combine spreadsheets",
                "Calculate recurring metrics",
                "Build presentation",
                "Write status summary",
                "Chase missing information",
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
              Redesigned
            </span>

            <div className="mt-6 space-y-4">

              {[
                "Review exceptions",
                "Challenge AI-generated analysis",
                "Prioritize business risks",
                "Coach team members",
                "Make resource decisions",
                "Communicate decisions and accountability",
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

      </section>

      {/* HUMAN VALUE */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Human Work Changes Too
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              As execution becomes cheaper, judgment can become more important
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {humanAdvantages.map((item) => (
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

      {/* PRODUCTIVITY */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 lg:p-12">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Productivity Is Not the Same as Job Loss
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            If a task becomes faster, several different things can happen.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {[
              [
                "Same output, fewer hours",
                "The organization may reduce the amount of labour required for that activity.",
              ],
              [
                "More output, same team",
                "The organization may use the productivity gain to serve more customers or complete more work.",
              ],
              [
                "Higher-value work",
                "People may spend less time on execution and more time on analysis, relationships or improvement.",
              ],
              [
                "New demand",
                "Lower cost or better capability may create new products, services and work that previously did not exist.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >

                <h3 className="text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* NEW RESPONSIBILITIES */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              New Work Around AI
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Automation creates responsibilities around the automation
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "AI Workflow Design",
                "Decide where AI, automation and people belong in the process.",
              ],
              [
                "Evaluation",
                "Test whether AI outputs and agent behavior are actually reliable.",
              ],
              [
                "Governance",
                "Define permissions, accountability, policies and escalation boundaries.",
              ],
              [
                "AI Operations",
                "Monitor production agents, failures, costs and changing performance.",
              ],
              [
                "Knowledge Engineering",
                "Maintain the information AI systems retrieve and rely upon.",
              ],
              [
                "Human Review",
                "Validate consequential outputs and handle difficult exceptions.",
              ],
              [
                "Process Redesign",
                "Rebuild workflows around capabilities that did not previously exist.",
              ],
              [
                "AI Training",
                "Help employees use AI effectively and responsibly in their domain.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm"
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

        </div>

      </section>

      {/* REDESIGN FRAMEWORK */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Workforce Redesign
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Don't automate the job description. Redesign the work.
          </h2>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-5">

          {redesignSteps.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >

              <span className="text-sm font-bold text-blue-600">
                {item.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* RISKS */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            The Transition Is Not Automatically Positive
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Productivity gains and worker outcomes are different questions.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            AI can improve productivity while still creating difficult
            transitions for workers whose tasks are heavily automated.
            Organizations also need to consider job quality, surveillance,
            algorithmic management, bias, deskilling and whether employees have
            meaningful opportunities to adapt.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {[
              "Will employees receive training before their work changes?",
              "Are AI decisions transparent enough for workers to challenge?",
              "Does automation remove repetitive work or simply increase workload?",
              "Who benefits economically from productivity improvement?",
              "Are employees involved in redesigning the workflows they understand?",
              "Can people override or escalate inappropriate AI-supported decisions?",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6"
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

        </div>

      </section>

      {/* TAKEAWAY */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Key Takeaway
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          AI may automate tasks faster than it eliminates entire occupations.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Some jobs will decline, some will grow and many will change. The
          useful unit of analysis is the work inside the role: what AI can
          automate, where it can augment people, which responsibilities remain
          human-led and what entirely new work appears around AI-enabled
          systems.
        </p>

      </section>

      {/* NEXT */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Next In EruDigm Insights
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            RAG systems need to find information by meaning. That's where
            vector search enters the picture.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Next we'll explain vector databases, embeddings and semantic search
            without turning the article into a mathematics textbook.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/resources/blog/ml-vs-generative-ai-vs-agentic-ai"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              ← ML vs GenAI vs Agentic AI
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