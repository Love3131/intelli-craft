import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";

const prompts = [
  {
    category: "Email & Communication",
    title: "Professional Email Rewriter",
    description:
      "Turn rough notes or an informal message into a polished professional email.",
    prompt: `Act as a professional business communicator.

Rewrite the message below as a clear and professional business email.

Requirements:
- Preserve all important facts.
- Keep the tone polite and diplomatic.
- Make the requested action clear.
- Remove unnecessary repetition.
- Do not invent information.
- Keep the email concise unless additional detail is necessary.

Message:
[paste your message]`,
  },
  {
    category: "Email & Communication",
    title: "Executive Email Summary",
    description:
      "Convert detailed information into a concise message for senior leadership.",
    prompt: `Act as an executive business communicator.

Convert the information below into a concise email for senior leadership.

Structure:
1. Key message
2. Important business impact
3. Risk or issue, if applicable
4. Decision or action required
5. Next step

Keep the tone professional and decision-oriented.
Do not invent missing information.

Information:
[paste information]`,
  },
  {
    category: "Meetings",
    title: "Meeting Minutes Generator",
    description:
      "Convert unstructured meeting notes into clear minutes and action items.",
    prompt: `Act as an executive assistant.

Convert the meeting notes below into professional meeting minutes.

Return:

Meeting Summary:
[brief summary]

Key Discussion Points:
- ...

Decisions:
- ...

Action Items:
| Action | Owner | Deadline |

Open Questions:
- ...

Do not invent owners, deadlines or decisions that were not provided.

Meeting notes:
[paste notes]`,
  },
  {
    category: "Meetings",
    title: "Meeting Preparation",
    description:
      "Prepare a focused agenda and discussion plan before an important meeting.",
    prompt: `Act as an experienced meeting facilitator.

Using the context below, prepare a focused meeting plan.

Include:
1. Meeting objective
2. Required participants
3. Proposed agenda
4. Key questions to discuss
5. Decisions that may be required
6. Information participants should prepare
7. Desired outcome

Keep the meeting focused and practical.

Context:
[paste context]`,
  },
  {
    category: "Reporting",
    title: "Executive Status Report",
    description:
      "Transform operational notes into a concise leadership-ready update.",
    prompt: `Act as a senior business reporting specialist.

Convert the information below into an executive status report.

Use:

Overall Status:
[Green / Amber / Red only if supported by the information]

Key Achievements:
- ...

Performance Changes:
- ...

Risks / Issues:
- ...

Decisions Required:
- ...

Next Steps:
- ...

Keep the report concise and suitable for senior management.
Separate facts from assumptions.
Do not invent missing information.

Information:
[paste information]`,
  },
  {
    category: "Reporting",
    title: "Executive Summary",
    description:
      "Turn a long report or analysis into the points leadership actually needs.",
    prompt: `Act as an executive reporting analyst.

Create an executive summary of the content below.

Focus on:
- the most important findings,
- meaningful changes,
- business impact,
- major risks,
- decisions required,
- recommended next actions.

Avoid repeating minor details.
Clearly identify anything that is uncertain or requires verification.

Content:
[paste report or analysis]`,
  },
  {
    category: "Project Management",
    title: "Project Status Update",
    description:
      "Convert project notes into a consistent weekly status update.",
    prompt: `Act as an experienced project manager.

Convert the project notes below into a weekly status update.

Include:

Overall Status:
Summary:
Completed:
In Progress:
Upcoming:
Risks / Blockers:
Dependencies:
Decisions Required:
Next Actions:

Keep the language concise and professional.
Do not invent missing information.

Project notes:
[paste notes]`,
  },
  {
    category: "Project Management",
    title: "Project Risk Review",
    description:
      "Identify and organize project risks before they become bigger problems.",
    prompt: `Act as a project risk manager.

Review the project information below and identify potential risks.

Return a table with:

Risk
Evidence / Trigger
Potential Impact
Likelihood
Recommended Mitigation
Owner (only if provided)
Information Needed

Separate confirmed risks from possible risks.
Do not invent facts.

Project information:
[paste information]`,
  },
  {
    category: "Business Analysis",
    title: "Requirements Analyzer",
    description:
      "Turn rough business information into structured requirements and questions.",
    prompt: `Act as a senior business analyst.

Review the business information below.

Identify:

1. Business Objective
2. Current Problem
3. Stakeholders
4. Functional Requirements
5. Non-Functional Requirements
6. Business Rules
7. Assumptions
8. Dependencies
9. Risks
10. Open Questions

Clearly separate confirmed requirements from assumptions.
Do not invent missing requirements.

Business information:
[paste information]`,
  },
  {
    category: "Business Analysis",
    title: "Process Improvement Review",
    description:
      "Analyze an existing process and identify practical improvement opportunities.",
    prompt: `Act as a business process improvement specialist.

Analyze the current process below.

Return:

1. Process Objective
2. Current Steps
3. Bottlenecks
4. Repetitive Manual Work
5. Error Risks
6. Unnecessary Steps
7. Automation Opportunities
8. Improvement Recommendations
9. Expected Benefits
10. Information Required Before Implementation

Prioritize practical improvements rather than redesigning the entire process without evidence.

Current process:
[paste process]`,
  },
  {
    category: "Data Analysis",
    title: "Business Data Analyzer",
    description:
      "Turn a business question into a structured analysis plan and useful insights.",
    prompt: `Act as a senior data analyst.

Review the business question and data information below.

Return:

1. Business Question
2. Relevant KPIs
3. Required Calculations
4. Important Comparisons
5. Trends to Investigate
6. Potential Data Quality Issues
7. Recommended Visualizations
8. Findings supported by the data
9. Assumptions / Limitations
10. Recommended Next Actions

Do not claim causation without supporting evidence.

Context / data:
[paste information]`,
  },
  {
    category: "Data Analysis",
    title: "KPI Designer",
    description:
      "Identify useful KPIs instead of creating metrics simply because data exists.",
    prompt: `Act as a business performance analyst.

Using the business objective below, recommend the most useful KPIs.

For each KPI provide:

KPI Name
Business Purpose
Calculation
Data Required
Interpretation
Suggested Target Approach
Recommended Visualization
Potential Misinterpretation Risk

Prioritize KPIs that support actual business decisions.

Business objective:
[paste objective]`,
  },
  {
    category: "Decision Making",
    title: "Option Comparison",
    description:
      "Compare business options using explicit criteria, trade-offs and risks.",
    prompt: `Act as a business decision analyst.

Compare the options below.

Use this structure:

Decision:
Evaluation Criteria:
Option 1:
Option 2:
Additional Options (if provided):

For each option evaluate:
- Benefits
- Costs / Effort
- Risks
- Dependencies
- Trade-offs
- Missing information

Then provide:
Recommended Option
Reason for Recommendation
What Should Be Verified Before Acting

Do not invent missing facts.

Decision and options:
[paste information]`,
  },
  {
    category: "Productivity",
    title: "Task Prioritizer",
    description:
      "Turn a long task list into a practical order of execution.",
    prompt: `Act as a productivity and operations planner.

Review the task list below and help prioritize the work.

Evaluate each task using:
- urgency,
- business impact,
- dependencies,
- effort,
- deadline,
- risk of delay.

Return:

Do First
Schedule Next
Delegate / Coordinate
Can Wait
Needs Clarification

Explain only the important prioritization decisions.

Task list:
[paste tasks]`,
  },
  {
    category: "Productivity",
    title: "Workflow Automation Finder",
    description:
      "Identify repetitive work that may be worth automating.",
    prompt: `Act as a business automation specialist.

Review the workflow below and identify realistic automation opportunities.

For each opportunity provide:

Current Manual Step
Frequency
Pain Point
Automation Opportunity
Potential Tool / Approach
Expected Benefit
Implementation Complexity
Risks / Controls
Human Review Required

Prioritize repetitive, rule-based work with clear business value.

Do not recommend automation merely because it is technically possible.

Workflow:
[paste workflow]`,
  },
];

const categories = [
  "Email & Communication",
  "Meetings",
  "Reporting",
  "Project Management",
  "Business Analysis",
  "Data Analysis",
  "Decision Making",
  "Productivity",
];

export default function BusinessPromptLibraryPage() {
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
                EruDigm Prompt Library
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Business Prompt
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Library
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Copy-ready AI prompts for communication, meetings, reporting,
              project management, business analysis, data analysis and
              everyday professional work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                {prompts.length} Practical Prompts
              </span>

              <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                {categories.length} Categories
              </span>

              <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                Copy & Use
              </span>
            </div>

            <a
              href="#library"
              className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Browse Prompts ↓
            </a>
          </div>

          {/* LIBRARY PREVIEW */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <p className="text-sm font-semibold text-gray-500">
                EruDigm Prompt Library
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                Find. Copy. Adapt.
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="rounded-2xl border border-gray-100 bg-slate-50 p-4"
                  >
                    <p className="text-sm font-semibold text-gray-700">
                      {category}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-lg">
                <p className="text-sm text-blue-100">Built for work</p>
                <p className="mt-1 font-semibold">
                  Practical prompts instead of generic examples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              How To Use This Library
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Start with a useful template. Then make it yours.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              These prompts are starting points, not rigid scripts. Copy the
              prompt closest to your task, replace the bracketed information
              with your own context, and adjust the requirements when needed.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Better Results
            </p>

            <ol className="mt-6 space-y-4 text-gray-700">
              <li>1. Add your real business context.</li>
              <li>2. Remove requirements you do not need.</li>
              <li>3. Add important constraints.</li>
              <li>4. Review facts and calculations.</li>
              <li>5. Never paste confidential data without permission.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="border-y border-gray-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category
                  .toLowerCase()
                  .replace(/&/g, "and")
                  .replace(/\s+/g, "-")}`}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:text-blue-600 hover:shadow-sm"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section
        id="library"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >
        {categories.map((category) => {
          const categoryPrompts = prompts.filter(
            (prompt) => prompt.category === category
          );

          const categoryId = category
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/\s+/g, "-");

          return (
            <div
              key={category}
              id={categoryId}
              className="mb-20 scroll-mt-10 last:mb-0"
            >
              <div className="mb-8 flex flex-col gap-3 border-b border-gray-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    Business Prompts
                  </span>

                  <h2 className="mt-2 text-3xl font-bold">
                    {category}
                  </h2>
                </div>

                <span className="text-sm font-semibold text-gray-500">
                  {categoryPrompts.length} prompts
                </span>
              </div>

              <div className="grid gap-7 lg:grid-cols-2">
                {categoryPrompts.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-2xl font-bold">
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
            </div>
          );
        })}
      </section>

      {/* SAFETY / QUALITY */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl lg:p-12">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Use AI Responsibly
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              AI can accelerate work. It does not remove your responsibility
              to review it.
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                "Verify important facts, figures and calculations.",
                "Do not share confidential information without authorization.",
                "Review recommendations before acting on them.",
                "Treat unsupported explanations as hypotheses, not facts.",
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

      {/* FINAL */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Keep Learning
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Use the library. Adapt the prompts. Build your own.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            The strongest prompt library is the one that gradually reflects
            your own work, terminology, standards and recurring tasks.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/ai-resources"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Explore AI Resources
            </Link>

            <Link
              href="/resources/ai-resources/guides/prompt-engineering-basics"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              Prompt Engineering Basics
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}