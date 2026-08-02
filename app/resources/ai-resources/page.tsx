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
  "Prompt Engineering Basics",
  "Chain of Thought Prompting",
  "Few Shot Prompting",
  "Role Based Prompting",
  "Business Prompt Library",
  "SQL Prompt Collection",
];

export default function AIResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white">

        <div className="max-w-7xl mx-auto px-8 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 font-semibold">
            AI Resources
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold">
            Learn AI.
            <br />
            Build Faster.
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            Explore AI tools, prompt engineering guides, productivity
            workflows and resources curated by EruDigm.
          </p>

        </div>

      </section>

      {/* AI Tools */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center">
          Popular AI Tools
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {aiTools.map((tool) => (

            <div
              key={tool.id}
              className="rounded-3xl bg-white shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition"
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

              <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
                Explore
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Prompt Engineering */}

      <section className="max-w-7xl mx-auto px-8 pb-20">

        <div className="rounded-3xl bg-white shadow-xl p-12">

          <h2 className="text-4xl font-bold text-center">
            Prompt Engineering Guides
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {promptGuides.map((guide) => (

              <div
                key={guide}
                className="rounded-2xl border p-6 hover:bg-blue-50 transition"
              >

                <h3 className="text-xl font-semibold">
                  {guide}
                </h3>

                <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition">
                  Read Guide
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Comparison */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <div className="rounded-3xl bg-white shadow-xl p-12">

          <h2 className="text-4xl font-bold text-center mb-12">
            AI Model Comparison
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>

                <tr className="bg-blue-600 text-white">

                  <th className="p-4 text-left">Model</th>
                  <th className="p-4 text-left">Best For</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="p-4">ChatGPT</td>
                  <td className="p-4">Coding & Productivity</td>
                  <td className="p-4 text-green-600 font-semibold">Recommended</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">Claude</td>
                  <td className="p-4">Writing & Documents</td>
                  <td className="p-4 text-green-600 font-semibold">Recommended</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">Gemini</td>
                  <td className="p-4">Google Workspace</td>
                  <td className="p-4 text-green-600 font-semibold">Recommended</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">Perplexity</td>
                  <td className="p-4">Research</td>
                  <td className="p-4 text-green-600 font-semibold">Recommended</td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="text-center mt-12">

            <Link
              href="/resources"
              className="rounded-xl bg-slate-900 px-8 py-4 text-white hover:bg-black transition"
            >
              ← Back to Resources
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}