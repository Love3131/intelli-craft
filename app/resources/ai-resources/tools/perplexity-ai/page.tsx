import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";

const workflows = [
  {
    title: "Research a Business Question",
    category: "Research",
    description:
      "Turn a broad business question into structured, source-backed research.",
    prompt: `Act as a senior research analyst.

Research the business question below using current and credible sources.

Return:

1. Executive Summary
2. Key Findings
3. Evidence Supporting Each Finding
4. Important Data / Statistics
5. Areas Where Sources Agree
6. Areas Where Sources Disagree
7. Important Uncertainty
8. Business Implications
9. Recommended Next Actions

Requirements:
- Cite factual claims.
- Prioritize primary and authoritative sources where possible.
- Clearly separate facts from interpretation.
- Identify information that could not be verified.
- Do not hide conflicting evidence.

Research question:
[paste question]`,
  },
  {
    title: "Competitor Research",
    category: "Competitive Intelligence",
    description:
      "Build a source-backed comparison instead of relying on generic competitor summaries.",
    prompt: `Act as a competitive intelligence analyst.

Research the companies below using current sources.

Companies:
[paste companies]

Compare:

1. Core offering
2. Target customers
3. Positioning
4. Key products / services
5. Pricing information where publicly available
6. Recent strategic developments
7. Strengths
8. Potential weaknesses
9. Differentiators
10. Important market signals

Return a comparison table followed by:

Key Insights
Competitive Opportunities
Risks
Information That Could Not Be Verified

Cite every important factual claim.
Prefer company websites, filings, reputable reporting and other authoritative sources.`,
  },
  {
    title: "Market Research",
    category: "Market Intelligence",
    description:
      "Research market size, growth, trends, competitors and uncertainty using multiple sources.",
    prompt: `Act as a market research analyst.

Research the following market:

[paste market]

Analyze:

1. Market definition
2. Current market size
3. Expected growth
4. Major growth drivers
5. Important barriers
6. Key competitors
7. Customer segments
8. Technology trends
9. Geographic trends
10. Risks / uncertainty

For market-size or forecast numbers:
- show the source,
- show the year,
- identify the geography,
- identify the measurement definition,
- compare multiple estimates when available.

Do not combine incompatible market estimates as if they measure the same thing.

End with:
Business Implications
Opportunities
Risks
What Should Be Researched Next`,
  },
  {
    title: "Fact & Claim Verification",
    category: "Verification",
    description:
      "Check whether an important claim is actually supported by reliable evidence.",
    prompt: `Act as a fact-checking research analyst.

Verify the claim below.

Claim:
[paste claim]

Use this structure:

1. Claim being evaluated
2. Verdict:
   - Supported
   - Partially Supported
   - Not Supported
   - Insufficient Evidence
3. Strongest supporting evidence
4. Strongest contradicting evidence
5. Source quality assessment
6. Important context
7. What remains uncertain
8. Final conclusion

Requirements:
- Prefer primary sources where available.
- Do not treat repeated reporting of the same original claim as independent evidence.
- Check publication dates.
- Distinguish facts from estimates and opinions.
- Provide citations.`,
  },
  {
    title: "Compare Conflicting Sources",
    category: "Source Analysis",
    description:
      "Understand why different sources reach different conclusions.",
    prompt: `Act as a research methodology analyst.

Investigate the conflicting claims or sources below.

Topic:
[paste topic]

Compare:

1. What each source claims
2. Evidence used
3. Publication date
4. Methodology
5. Definitions used
6. Geographic scope
7. Time period
8. Sample / dataset where relevant
9. Potential limitations
10. Reasons the conclusions may differ

Then provide:

Areas of Agreement
Areas of Disagreement
Which Evidence Appears Strongest
What Cannot Yet Be Concluded
Recommended Additional Research

Do not force a single conclusion when the evidence remains genuinely uncertain.`,
  },
  {
    title: "Research → Executive Brief",
    category: "Decision Support",
    description:
      "Turn research into a concise decision-oriented brief for leadership.",
    prompt: `Act as a senior research and strategy analyst.

Research the topic below and convert the findings into an executive decision brief.

Topic:
[paste topic]

Return:

Executive Summary
Why This Matters
Key Evidence
Important Numbers
Opportunities
Risks
Competing Perspectives
Uncertainty
Recommended Action
What Leadership Should Monitor Next

Requirements:
- Keep the final brief concise.
- Cite important factual claims.
- Separate evidence from recommendation.
- Highlight anything that could materially change the recommendation.`,
  },
];

const strengths = [
  {
    title: "Source-Backed Search",
    text: "Answers are accompanied by citations and links that let you inspect the underlying sources.",
  },
  {
    title: "Current Web Research",
    text: "Useful when the question depends on recent or changing information rather than only static knowledge.",
  },
  {
    title: "Research Mode",
    text: "Conduct deeper multi-step research across many sources and synthesize the findings into a report.",
  },
  {
    title: "Source Comparison",
    text: "Use multiple sources to investigate disagreements, definitions, methodologies and uncertainty.",
  },
  {
    title: "Projects",
    text: "Keep research conversations, files, instructions, tools and accumulated context together for ongoing work.",
  },
  {
    title: "Research Assets",
    text: "Turn research into documents, spreadsheets, presentations and other supported outputs.",
  },
];

const researchFlow = [
  ["01", "Define", "Make the research question specific."],
  ["02", "Search", "Gather evidence from relevant sources."],
  ["03", "Compare", "Look for agreement, conflict and missing evidence."],
  ["04", "Verify", "Open and inspect important original sources."],
  ["05", "Synthesize", "Turn evidence into a useful conclusion or decision brief."],
];

export default function PerplexityAIGuidePage() {
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
                EruDigm Research Tool Guide
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Research With
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Perplexity AI.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Learn practical workflows for source-backed research, market
              intelligence, competitor analysis, fact verification and
              decision-ready research briefs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Web Research",
                "Source Verification",
                "Market Research",
                "Competitor Analysis",
                "Copy-Ready Prompts",
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
              href="#workflows"
              className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Start Researching ↓
            </a>
          </div>

          {/* RESEARCH PREVIEW */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    EruDigm Research Workflow
                  </p>

                  <h2 className="mt-1 text-3xl font-bold">
                    Evidence First
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg">
                  SRC
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  ["Question", "Define what you need to know"],
                  ["Sources", "Gather relevant evidence"],
                  ["Compare", "Check agreement & conflict"],
                  ["Verify", "Inspect original sources"],
                  ["Brief", "Synthesize for action"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-gray-100 bg-slate-50 px-5 py-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      {title}
                    </p>

                    <p className="mt-1 font-semibold text-gray-700">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-lg">
                <p className="text-sm text-blue-100">Research principle</p>
                <p className="mt-1 font-semibold">
                  Citation found ≠ claim automatically verified.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* POSITIONING */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Where Perplexity Fits
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Research is more useful when you can inspect where the answer
              came from.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Perplexity is built around searching for information, synthesizing
              findings and linking answers back to source material. That makes
              it particularly useful when current evidence and source
              transparency matter.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Important
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Open important citations.
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              A citation can point you toward evidence, but you still need to
              confirm that the original source actually supports the claim,
              uses the right definitions and is sufficiently current.
            </p>

          </div>

        </div>
      </section>

      {/* STRENGTHS */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Research Strengths
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Where Perplexity can improve knowledge work.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {strengths.map((item) => (
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

        </div>
      </section>

      {/* RESEARCH FLOW */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            EruDigm Research Flow
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Define → Search → Compare → Verify → Synthesize
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            The research process should not end when the AI produces an answer.
          </p>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-5">

          {researchFlow.map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-bold text-blue-600">
                {number}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {text}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* RESEARCH MODE */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="grid gap-7 lg:grid-cols-2">

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">

              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Research Mode
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Use deeper research when one search is not enough.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Perplexity's Research mode performs iterative searches, reads
                across many sources and synthesizes the material into a more
                comprehensive report.
              </p>

            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Projects
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Keep ongoing research together.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Projects provide a persistent workspace for research sessions,
                files, instructions, connected tools and accumulated context.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* WORKFLOWS */}
      <section
        id="workflows"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Copy & Use
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Six practical research workflows.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Copy the research prompt closest to your task, then inspect the
            important evidence before using the conclusion.
          </p>

        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">

          {workflows.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
            >

              <div className="flex items-start justify-between gap-5">

                <div>
                  <span className="text-sm font-bold text-blue-600">
                    {item.category}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
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

      </section>

      {/* SOURCE QUALITY */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl lg:p-12">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Source Quality
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Five questions to ask before trusting a citation.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {[
                "Does the source actually support the specific claim?",
                "Is it a primary source or repeating another source?",
                "Is the publication date appropriate for the question?",
                "Are definitions, geography and time period comparable?",
                "Does another credible source contradict the conclusion?",
                "Is the source authoritative for this particular subject?",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
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

        </div>
      </section>

      {/* RESEARCH TO ASSETS */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="grid gap-7 lg:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Research → Deliverable
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Research does not have to end as a chat response.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Perplexity supports creating research-backed documents,
              spreadsheets, presentations and other assets, allowing evidence
              gathering and deliverable creation to stay closer together.
            </p>

          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              EruDigm Principle
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Evidence first. Presentation second.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              A polished report or presentation is only as useful as the
              evidence and reasoning underneath it.
            </p>

          </div>

        </div>

      </section>

      {/* TOOL CHOICE */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Choose By Workflow
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Perplexity is especially useful when research is the job.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {[
              [
                "Source-oriented web research",
                "Perplexity is a strong option to evaluate.",
              ],
              [
                "Google Workspace-centered research",
                "Compare Gemini Deep Research.",
              ],
              [
                "General work + research",
                "Compare ChatGPT and Claude.",
              ],
              [
                "Software development",
                "Copilot, Cursor and Claude Code are more specialized.",
              ],
            ].map(([task, suggestion]) => (
              <div
                key={task}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <p className="font-bold">{task}</p>
                <p className="mt-2 text-gray-600">{suggestion}</p>
              </div>
            ))}

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
            Find the evidence. Then inspect the evidence.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Perplexity can dramatically reduce the time required to discover
            and synthesize information. Reliable research still requires you
            to inspect important sources, understand uncertainty and verify
            claims before making decisions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/resources/ai-resources/tools/gemini"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Gemini Guide
            </Link>

            <Link
              href="/resources/ai-resources/guides/business-prompt-library"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              Business Prompt Library
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}