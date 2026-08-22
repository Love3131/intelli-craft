import Link from "next/link";

const aiTools = [
  {
    id: 1,
    icon: "🤖",
    title: "ChatGPT",
    description:
      "Create content, write code, analyze data and improve productivity.",
    category: "AI Assistant",
  },
  {
    id: 2,
    icon: "🧠",
    title: "Claude",
    description:
      "Excellent for long-form writing, documents and business analysis.",
    category: "AI Assistant",
  },
  {
    id: 3,
    icon: "✨",
    title: "Gemini",
    description:
      "Google's AI assistant integrated with Workspace and Search.",
    category: "AI Assistant",
  },
  {
    id: 4,
    icon: "💻",
    title: "GitHub Copilot",
    description:
      "AI pair programmer that helps developers write code faster.",
    category: "Developer Tool",
  },
  {
    id: 5,
    icon: "🚀",
    title: "Cursor AI",
    description:
      "Modern AI-powered code editor for professional developers.",
    category: "Developer Tool",
  },
  {
    id: 6,
    icon: "🔍",
    title: "Perplexity AI",
    description:
      "AI-powered search engine for accurate research and references.",
    category: "Research",
  },
];

const promptGuides = [
  {
    title: "Prompt Engineering Basics",
    description:
      "Learn a practical framework for creating clearer and more effective AI prompts.",
    href: "/resources/ai-resources/guides/prompt-engineering-basics",
    available: true,
  },
  {
  title: "Chain of Thought Prompting",
  description:
    "Learn techniques for handling structured and multi-step reasoning tasks.",
  href: "/resources/ai-resources/guides/chain-of-thought-prompting",
  available: true,
  },
  {
  title: "Few Shot Prompting",
  description:
    "Learn how examples can help guide AI toward the output you need.",
  href: "/resources/ai-resources/guides/few-shot-prompting",
  available: true,
  },
  {
  title: "Role Based Prompting",
  description:
    "Use roles and expertise to give AI clearer context for professional tasks.",
  href: "/resources/ai-resources/guides/role-based-prompting",
  available: true,
  },
  {
  title: "Business Prompt Library",
  description:
    "Practical prompts designed for common business and workplace activities.",
  href: "/resources/ai-resources/guides/business-prompt-library",
  available: true,
  },
  { 
  title: "SQL Prompt Collection",
  description:
    "Useful AI prompts for SQL learning, analysis, debugging and query development.",
  href: "/resources/ai-resources/guides/sql-prompt-collection",
  available: true,
  },
];

export default function AIResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-8 py-24 text-center">
          <span className="rounded-full bg-white/20 px-5 py-2 font-semibold">
            AI Resources
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold">
            Learn AI.
            <br />
            Build Faster.
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            Explore practical AI tools, prompt engineering guides,
            productivity workflows and resources curated by EruDigm.
          </p>
        </div>
      </section>

      {/* AI Tools */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            AI Toolkit
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Popular AI Tools
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
            Discover leading AI platforms and understand where each tool can
            provide the most value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {aiTools.map((tool) => (
            <div
              key={tool.id}
              className="rounded-3xl border border-gray-100 bg-white shadow-lg p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-6xl">
                {tool.icon}
              </div>

              <span className="mt-5 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                {tool.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                {tool.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {tool.description}
              </p>

              <div className="mt-8 w-full rounded-xl bg-slate-100 py-3 text-center text-sm font-semibold text-slate-500">
                Guide Coming Soon
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt Engineering Guides */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="rounded-3xl bg-white shadow-xl p-8 md:p-12">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Learn By Doing
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Prompt Engineering Guides
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
              Practical guides designed to help you get more useful and
              reliable results from AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {promptGuides.map((guide) => (
              <div
                key={guide.title}
                className={`rounded-2xl border p-6 transition ${
                  guide.available
                    ? "border-blue-100 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg"
                    : "border-gray-200 bg-slate-50"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">
                    {guide.title}
                  </h3>

                  {guide.available && (
                    <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      Available
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {guide.description}
                </p>

                {guide.href ? (
                  <Link
                    href={guide.href}
                    className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Read Guide →
                  </Link>
                ) : (
                  <span className="mt-6 inline-flex rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-500">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <div className="rounded-3xl bg-white shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Quick Comparison
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              AI Model Comparison
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                  <th className="p-4 text-left">Model</th>
                  <th className="p-4 text-left">Best For</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">ChatGPT</td>
                  <td className="p-4">Coding & Productivity</td>
                  <td className="p-4 text-green-600 font-semibold">
                    Recommended
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold">Claude</td>
                  <td className="p-4">Writing & Documents</td>
                  <td className="p-4 text-green-600 font-semibold">
                    Recommended
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold">Gemini</td>
                  <td className="p-4">Google Workspace</td>
                  <td className="p-4 text-green-600 font-semibold">
                    Recommended
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold">Perplexity</td>
                  <td className="p-4">Research</td>
                  <td className="p-4 text-green-600 font-semibold">
                    Recommended
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/resources"
              className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}