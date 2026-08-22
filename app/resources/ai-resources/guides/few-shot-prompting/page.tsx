import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";

const sentimentPrompt = `Classify each customer comment as Positive, Neutral, or Negative.

Examples:

Comment: "The dashboard is easy to use and saves me a lot of time."
Classification: Positive

Comment: "The report was delivered yesterday."
Classification: Neutral

Comment: "The application keeps crashing when I upload a file."
Classification: Negative

Now classify this comment:

Comment: [paste customer comment]

Classification:`;

const emailPrompt = `Rewrite short workplace messages into professional business emails.

Example 1:
Input: need this report today send asap
Output: Hi Team, could you please share the report by the end of today? Please let me know if there are any blockers. Thank you.

Example 2:
Input: numbers don't match please check
Output: Hi Team, I noticed that the numbers do not appear to match the latest report. Could you please review them and confirm the correct figures? Thank you.

Now rewrite:

Input: [paste your message]

Output:`;

const projectPrompt = `Convert project notes into concise status updates.

Example:

Notes:
- Dashboard development complete
- Client testing starts Monday
- API access still pending
- John following up with IT

Status Update:
Completed: Dashboard development.
Next Step: Client testing begins Monday.
Risk: API access is still pending.
Owner: John is following up with IT.

Now convert these notes:

Notes:
[paste notes]

Status Update:`;

const extractionPrompt = `Extract structured information from the text using the pattern shown below.

Example:

Text:
The dashboard redesign is due on 18 September. Priya owns the task and the current status is In Progress.

Output:
Task: Dashboard redesign
Owner: Priya
Deadline: 18 September
Status: In Progress

Now extract the same fields from:

Text:
[paste text]

Output:`;

const fewShotRules = [
  {
    number: "01",
    title: "Show the pattern",
    description:
      "Give AI examples that demonstrate exactly what a good answer should look like.",
  },
  {
    number: "02",
    title: "Keep examples relevant",
    description:
      "Use examples that resemble the real task rather than unrelated demonstrations.",
  },
  {
    number: "03",
    title: "Stay consistent",
    description:
      "Use the same labels, structure, tone and formatting across your examples.",
  },
  {
    number: "04",
    title: "Include variety",
    description:
      "When useful, show different realistic cases so AI learns the broader pattern.",
  },
];

const situations = [
  {
    title: "Classification",
    description:
      "Teach AI how you categorize tickets, feedback, risks, issues or requests.",
    example: "Positive / Neutral / Negative",
  },
  {
    title: "Formatting",
    description:
      "Demonstrate the exact structure you want for reports, summaries or records.",
    example: "Notes → Structured Status Update",
  },
  {
    title: "Writing Style",
    description:
      "Show examples of the tone and communication style you want AI to reproduce.",
    example: "Rough Message → Professional Email",
  },
  {
    title: "Data Extraction",
    description:
      "Teach AI which information to identify and how to return it consistently.",
    example: "Text → Task / Owner / Deadline / Status",
  },
];

export default function FewShotPromptingPage() {
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
                EruDigm Practical AI Guide
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Few Shot
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Prompting
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Instead of only telling AI what you want, show it examples of
              what a good result looks like.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Practical Guide",
                "Real Examples",
                "Copy-Ready Prompts",
                "10 Min Guide",
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
              href="#learn"
              className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Start Learning ↓
            </a>
          </div>

          {/* VISUAL CARD */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <p className="text-sm font-semibold text-gray-500">
                EruDigm Learning Pattern
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                Show AI the Pattern
              </h2>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                  <span className="text-xs font-bold uppercase text-blue-600">
                    Example 1
                  </span>
                  <p className="mt-2 font-semibold">
                    Input → Expected Output
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                  <span className="text-xs font-bold uppercase text-blue-600">
                    Example 2
                  </span>
                  <p className="mt-2 font-semibold">
                    Input → Expected Output
                  </p>
                </div>

                <div className="flex justify-center text-2xl text-blue-600">
                  ↓
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-lg">
                  <span className="text-xs font-bold uppercase text-blue-100">
                    New Input
                  </span>
                  <p className="mt-2 font-semibold">
                    AI follows the demonstrated pattern
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLANATION */}
      <section
        id="learn"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 py-20 lg:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Understand The Technique
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Sometimes an example explains more than another paragraph of
              instructions.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
              <p>
                Few-shot prompting means giving an AI model a small number of
                examples before asking it to complete a similar task.
              </p>

              <p>
                Each example demonstrates the relationship between an input
                and the output you expect.
              </p>

              <p>
                This can be especially useful when you need consistent
                classification, formatting, extraction or writing style.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Simple Formula
            </p>

            <div className="mt-6 space-y-4 text-xl font-bold">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                Example Input
              </div>

              <div className="text-center text-blue-600">↓</div>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                Example Output
              </div>

              <div className="text-center text-blue-600">+</div>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                New Input
              </div>

              <div className="text-center text-blue-600">↓</div>

              <div className="rounded-xl bg-blue-600 p-4 text-white shadow-lg">
                New Output
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO USE */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              When It Helps
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Four situations where examples are powerful.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {situations.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm font-semibold text-blue-800">
                  {item.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            EruDigm Framework
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Four rules for better few-shot prompts.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {fewShotRules.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-blue-600">
                {item.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FULL EXAMPLE */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              See It In Action
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Customer feedback classification
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Instead of describing every possible sentiment rule, demonstrate
              the pattern with a few clear examples.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">
            <div className="flex flex-col gap-4 border-b border-gray-100 px-7 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold">
                  Few-Shot Classification Prompt
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Copy and adapt it to your own categories
                </p>
              </div>

              <CopyPromptButton text={sentimentPrompt} />
            </div>

            <div className="space-y-6 p-7">
              <div>
                <p className="text-xs font-bold uppercase text-gray-500">
                  Example 1
                </p>
                <div className="mt-2 rounded-xl bg-slate-50 p-4 leading-7 text-gray-700">
                  “The dashboard is easy to use and saves me a lot of time.”
                  <div className="mt-2 font-bold text-green-700">
                    → Positive
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-gray-500">
                  Example 2
                </p>
                <div className="mt-2 rounded-xl bg-slate-50 p-4 leading-7 text-gray-700">
                  “The report was delivered yesterday.”
                  <div className="mt-2 font-bold text-blue-600">
                    → Neutral
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-gray-500">
                  Example 3
                </p>
                <div className="mt-2 rounded-xl bg-slate-50 p-4 leading-7 text-gray-700">
                  “The application keeps crashing when I upload a file.”
                  <div className="mt-2 font-bold text-red-600">
                    → Negative
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs font-bold uppercase text-blue-600">
                  Your New Input
                </p>

                <p className="mt-2 font-semibold text-gray-700">
                  [Paste customer comment]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COPY READY LIBRARY */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Copy & Use
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Few-shot prompts for real work.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Copy these prompts, replace the sample information and adapt them
            to your own workflow.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-sm font-bold text-blue-600">
                  Communication
                </span>
                <h3 className="mt-2 text-2xl font-bold">
                  Professional Email Style
                </h3>
              </div>

              <CopyPromptButton text={emailPrompt} />
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-gray-700">
              Show AI examples of rough workplace messages and the polished
              business emails you expect it to produce.
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-sm font-bold text-blue-600">
                  Project Management
                </span>
                <h3 className="mt-2 text-2xl font-bold">
                  Project Status Format
                </h3>
              </div>

              <CopyPromptButton text={projectPrompt} />
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-gray-700">
              Demonstrate how raw project notes should be transformed into a
              consistent executive status update.
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-sm font-bold text-blue-600">
                  Data Extraction
                </span>
                <h3 className="mt-2 text-2xl font-bold">
                  Structured Information
                </h3>
              </div>

              <CopyPromptButton text={extractionPrompt} />
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-gray-700">
              Teach AI which fields to extract from unstructured business text
              and exactly how to return them.
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <span className="text-sm font-bold text-blue-600">
              Quick Tip
            </span>

            <h3 className="mt-2 text-2xl font-bold">
              Quality matters more than quantity.
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              A few clear, representative examples are often more useful than
              a large collection of inconsistent ones. Make sure your examples
              demonstrate the behavior you actually want AI to reproduce.
            </p>
          </div>

        </div>
      </section>

      {/* PRACTICE */}
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                Practice
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Build your own example set.
              </h2>

              <p className="mt-5 leading-7 text-blue-50">
                Pick a repetitive task you perform regularly and teach AI the
                pattern using two or three examples.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-slate-900 shadow-lg">
              <p className="font-bold text-blue-600">
                Your Challenge
              </p>

              <ol className="mt-5 space-y-4 text-gray-600">
                <li>1. Choose a repetitive task.</li>
                <li>2. Create two good input/output examples.</li>
                <li>3. Keep the formatting consistent.</li>
                <li>4. Add a new input.</li>
                <li>5. Review whether AI follows the pattern.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Key Takeaway
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Do not just describe the result. Show the pattern.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Few-shot prompting is useful when examples communicate your
            expectations more clearly than instructions alone. Use relevant,
            consistent examples and always review important AI outputs.
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