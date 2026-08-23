import Link from "next/link";

const comparison = [
  {
    dimension: "Primary purpose",
    ml: "Predict, classify or estimate",
    genai: "Create, transform or understand content",
    agentic: "Pursue an objective through actions",
  },
  {
    dimension: "Typical question",
    ml: "What is likely to happen?",
    genai: "What should I create or explain?",
    agentic: "What needs to happen next?",
  },
  {
    dimension: "Typical output",
    ml: "Score, class, forecast or prediction",
    genai: "Text, image, code, audio or other generated content",
    agentic: "Actions, decisions and completed multi-step work",
  },
  {
    dimension: "Autonomy",
    ml: "Low",
    genai: "Usually user-directed",
    agentic: "Potentially higher and goal-directed",
  },
  {
    dimension: "Tool use",
    ml: "Not inherently required",
    genai: "May use tools",
    agentic: "Often central to execution",
  },
  {
    dimension: "Planning",
    ml: "Not the core function",
    genai: "Can help create a plan",
    agentic: "Can use planning as part of execution",
  },
  {
    dimension: "Business examples",
    ml: "Churn, fraud, demand, risk",
    genai: "Writing, summarization, coding, analysis",
    agentic: "Research, operations, support, workflow execution",
  },
];

const mlExamples = [
  ["Customer Churn", "Which customers are most likely to leave?"],
  ["Demand Forecasting", "How much demand should we expect next month?"],
  ["Fraud Detection", "Which transactions appear suspicious?"],
  ["Quality Prediction", "Which cases have the highest defect risk?"],
];

const genExamples = [
  ["Executive Summary", "Turn analysis into a concise leadership narrative."],
  ["Document Analysis", "Summarize and explain long documents."],
  ["Code Generation", "Create or transform software code."],
  ["Content Creation", "Generate text, images, audio or other content."],
];

const agentExamples = [
  ["Research Agent", "Search, compare sources, investigate and produce a brief."],
  ["Reporting Agent", "Retrieve data, investigate anomalies and prepare a review."],
  ["Support Agent", "Understand a request, retrieve context and take permitted actions."],
  ["Coding Agent", "Inspect code, implement changes, test and iterate."],
];

const decisionQuestions = [
  {
    question: "Do you primarily need a prediction or score?",
    answer: "Start by evaluating Machine Learning.",
  },
  {
    question: "Do you need to create, summarize, explain or transform content?",
    answer: "Generative AI may be the natural fit.",
  },
  {
    question: "Does the system need to pursue a goal across several steps?",
    answer: "Evaluate an agentic architecture.",
  },
  {
    question: "Are the steps already completely known?",
    answer:
      "A deterministic workflow may be better than adding agentic autonomy.",
  },
  {
    question: "Do you need both prediction and action?",
    answer:
      "Combine ML with an application, workflow or agent that can use the prediction.",
  },
  {
    question: "Do you need content generation inside a larger process?",
    answer:
      "Generative AI can become one capability inside an agentic system.",
  },
];

export default function MLvsGenAIvsAgenticAIArticle() {
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
                  Machine Learning
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  AI Comparison
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  10 min read
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                Machine Learning vs
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Generative AI vs Agentic AI
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                Predict. Create. Act. These AI capabilities solve different
                problems—and the strongest business systems can combine all
                three.
              </p>

              <a
                href="#comparison"
                className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                Compare the Three ↓
              </a>
            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Three Different Questions
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold text-gray-500">
                    MACHINE LEARNING
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    What is likely to happen?
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Predict · Score · Classify
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-xs font-bold text-blue-600">
                    GENERATIVE AI
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    What can I create or explain?
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Generate · Summarize · Transform
                  </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-lg">
                  <p className="text-xs font-bold text-blue-100">
                    AGENTIC AI
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    What should happen next?
                  </p>
                  <p className="mt-2 text-sm text-blue-50">
                    Plan · Use Tools · Act · Adapt
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
          First Principle
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Agentic AI did not make Machine Learning obsolete.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">
          <p>
            AI is an umbrella containing many different techniques and system
            architectures. Machine learning models, generative models and AI
            agents are not interchangeable terms.
          </p>

          <p>
            Machine learning is especially useful when a business needs to
            learn patterns from data and produce predictions, classifications
            or scores.
          </p>

          <p>
            Generative AI adds the ability to create and transform rich
            content. Agentic AI goes another step at the system level by using
            models, context, tools and orchestration to pursue objectives
            through multi-step actions.
          </p>
        </div>
      </section>

      {/* THREE CARDS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Understand the Roles
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Predict → Create → Act
            </h2>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">

            {/* ML */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                PREDICT
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                Machine Learning
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Learn patterns from data and apply those patterns to new
                examples.
              </p>

              <div className="mt-7 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-bold">Input</p>
                <p className="mt-1 text-sm text-gray-600">
                  Historical or current data
                </p>

                <p className="mt-4 text-sm font-bold">Output</p>
                <p className="mt-1 text-sm text-gray-600">
                  Prediction · Score · Class
                </p>
              </div>
            </div>

            {/* GEN AI */}
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                CREATE
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                Generative AI
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Generate new content or transform existing information using
                learned patterns.
              </p>

              <div className="mt-7 rounded-2xl bg-blue-50 p-5">
                <p className="text-sm font-bold">Input</p>
                <p className="mt-1 text-sm text-gray-600">
                  Prompt · Context · Files
                </p>

                <p className="mt-4 text-sm font-bold">Output</p>
                <p className="mt-1 text-sm text-gray-600">
                  Text · Code · Image · Audio · More
                </p>
              </div>
            </div>

            {/* AGENTIC */}
            <div className="rounded-3xl border border-cyan-200 bg-white p-8 shadow-xl">
              <span className="text-sm font-bold uppercase tracking-widest text-cyan-700">
                ACT
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                Agentic AI
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Use AI models within systems that can reason, plan, use tools
                and take actions toward a goal.
              </p>

              <div className="mt-7 rounded-2xl bg-cyan-50 p-5">
                <p className="text-sm font-bold">Input</p>
                <p className="mt-1 text-sm text-gray-600">
                  Goal · Context · Environment
                </p>

                <p className="mt-4 text-sm font-bold">Output</p>
                <p className="mt-1 text-sm text-gray-600">
                  Decisions · Actions · Completed Work
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section
        id="comparison"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Side-by-Side
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            The practical differences
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-xl">
          <table className="w-full min-w-[950px] border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <th className="p-5 text-left">Dimension</th>
                <th className="p-5 text-left">Machine Learning</th>
                <th className="p-5 text-left">Generative AI</th>
                <th className="p-5 text-left">Agentic AI</th>
              </tr>
            </thead>

            <tbody>
              {comparison.map((row) => (
                <tr
                  key={row.dimension}
                  className="border-b last:border-b-0"
                >
                  <td className="p-5 font-bold">{row.dimension}</td>
                  <td className="p-5 text-gray-600">{row.ml}</td>
                  <td className="p-5 text-gray-600">{row.genai}</td>
                  <td className="p-5 font-medium text-gray-800">
                    {row.agentic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ML */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Machine Learning
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Learn from historical patterns
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Traditional machine learning is extremely valuable when the desired
            output is a prediction, classification, recommendation or score
            derived from data.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mlExamples.map(([title, question]) => (
              <div
                key={title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEN AI */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Generative AI
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Create and transform information
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          Generative models learn patterns in large datasets and can produce
          new content such as text, images, code and audio. They can also
          summarize, classify and transform information through natural
          language interaction.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {genExamples.map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-blue-100 bg-blue-50 p-6"
            >
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AGENTIC */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Agentic AI
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Turn intelligence into multi-step execution
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Agentic systems combine a model with orchestration, context,
            memory, grounding and tools so the system can pursue an objective
            rather than simply return one generated response.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {agentExamples.map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK TOGETHER */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Better Together
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            One business system can use all three
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Consider a company trying to reduce customer churn.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

          <div className="grid lg:grid-cols-3">

            <div className="border-b border-gray-100 p-8 lg:border-b-0 lg:border-r">
              <span className="text-sm font-bold text-gray-500">
                01 — MACHINE LEARNING
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Predict churn risk
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                A predictive model identifies customers with an unusually high
                probability of leaving.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-4 font-semibold">
                Customer A → 82% churn risk
              </div>
            </div>

            <div className="border-b border-gray-100 p-8 lg:border-b-0 lg:border-r">
              <span className="text-sm font-bold text-blue-600">
                02 — GENERATIVE AI
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Explain the context
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Generative AI summarizes recent interactions and explains the
                information relevant to the risk.
              </p>

              <div className="mt-6 rounded-xl bg-blue-50 p-4 font-semibold">
                “Recent complaints + declining usage...”
              </div>
            </div>

            <div className="p-8">
              <span className="text-sm font-bold text-cyan-700">
                03 — AGENTIC AI
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Coordinate the response
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                An agent retrieves account context, checks allowed retention
                options and coordinates an approved next action.
              </p>

              <div className="mt-6 rounded-xl bg-cyan-50 p-4 font-semibold">
                Investigate → recommend → route action
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* NOT LINEAR EVOLUTION */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl lg:p-12">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Important
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              This is not ML → GenAI → Agents where the old technology
              disappears.
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
              Agentic systems can use generative models for reasoning and
              language, predictive ML models for specialized decisions,
              deterministic code for calculations and external tools for
              execution.
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
              Architecture should be driven by the business problem, not by
              which AI term is newest.
            </p>
          </div>
        </div>
      </section>

      {/* DECISION FRAMEWORK */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Decision Framework
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Which approach should you use?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {decisionQuestions.map((item, index) => (
            <div
              key={item.question}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <div>
                  <h3 className="text-xl font-bold">{item.question}</h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIMPLE FLOW */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Quick Guide
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Start with the outcome
          </h2>

          <div className="mt-12 space-y-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="font-bold">
                Need a prediction, classification or score?
              </p>
              <p className="mt-2 text-blue-600 font-bold">
                → Machine Learning
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="font-bold">
                Need content, explanation, summarization or transformation?
              </p>
              <p className="mt-2 text-blue-600 font-bold">
                → Generative AI
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="font-bold">
                Need a system to pursue an objective through several dynamic
                steps?
              </p>
              <p className="mt-2 text-blue-600 font-bold">
                → Evaluate Agentic AI
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <p className="font-bold">
                Need several of these capabilities?
              </p>
              <p className="mt-2 font-bold text-cyan-300">
                → Design a system that combines them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Key Takeaway
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Prediction, generation and action are different capabilities.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Machine Learning helps businesses predict. Generative AI helps people
          create and understand. Agentic AI connects intelligence to goals,
          tools and actions. The most capable enterprise systems will often use
          these technologies together rather than choosing only one.
        </p>
      </section>

      {/* NEXT */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Next In EruDigm Insights
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            If AI can increasingly perform complete workflows, what happens to
            human jobs?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Next we'll examine whether AI agents are more likely to replace
            entire jobs—or redesign the tasks, responsibilities and skills
            inside them.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/blog/ai-agents-tools-memory-context"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              ← Tools, Memory & Context
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