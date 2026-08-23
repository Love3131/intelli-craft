"use client";

import { useState } from "react";
import Link from "next/link";

type Insight = {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  icon: string;
  href: string | null;
  available: boolean;
  featured?: boolean;
};

const insights: Insight[] = [
  {
    id: 1,
    category: "Agentic AI",
    title: "Agentic AI: From Chatbots to Autonomous Digital Workers",
    description:
      "Understand how AI systems can move beyond answering questions to planning, using tools, taking actions and working toward goals.",
    date: "August 2026",
    readTime: "12 min read",
    icon: "🤖",
    href: "/resources/blog/agentic-ai-autonomous-digital-workers",
    available: true,
    featured: true,
  },
  {
  id: 2,
  category: "AI Infrastructure",
  title: "What Is MCP? Why Model Context Protocol Matters",
  description:
    "Understand how MCP helps AI applications connect to tools, data and external systems through a common protocol.",
  date: "August 2026",
  readTime: "10 min read",
  icon: "🔌",
  href: "/resources/blog/what-is-mcp",
  available: true,
  },
  {
  id: 3,
  category: "AI Infrastructure",
  title: "RAG Explained: How AI Uses Your Own Business Knowledge",
  description:
    "Learn how retrieval-augmented generation connects AI models to documents, knowledge bases and trusted business information.",
  date: "August 2026",
  readTime: "11 min read",
  icon: "🧠",
  href: "/resources/blog/rag-explained",
  available: true,
  },
  {
  id: 4,
  category: "Agentic AI",
  title: "AI Agents vs AI Assistants: What's Actually Different?",
  description:
    "Compare assistants, deterministic AI workflows and agents that can dynamically choose tools and next steps.",
  date: "August 2026",
  readTime: "9 min read",
  icon: "⚡",
  href: "/resources/blog/ai-agents-vs-ai-assistants",
  available: true,
  },
  {
  id: 5,
  category: "Robotics",
  title: "Physical AI: When Artificial Intelligence Gets a Body",
  description:
    "Explore how AI, robotics, embodied reasoning and vision-language-action models are bringing intelligence into the physical world.",
  date: "August 2026",
  readTime: "12 min read",
  icon: "🦾",
  href: "/resources/blog/physical-ai",
  available: true,
  },
  {
  id: 6,
  category: "Agentic AI",
  title: "How Multi-Agent AI Systems Work",
  description:
    "Learn how specialized AI agents can coordinate, delegate work and collaborate on complex objectives.",
  date: "August 2026",
  readTime: "11 min read",
  icon: "🕸️",
  href: "/resources/blog/multi-agent-ai-systems",
  available: true,
},
  {
  id: 7,
  category: "Automation",
  title: "10 Business Processes AI Agents Can Automate",
  description:
    "Explore practical AI automation opportunities across reporting, operations, research, finance, support and knowledge work.",
  date: "August 2026",
  readTime: "13 min read",
  icon: "⚙️",
  href: "/resources/blog/ai-agents-business-process-automation",
  available: true,
  },
  {
  id: 8,
  category: "AI Infrastructure",
  title: "How AI Agents Use Tools, Memory and Context",
  description:
    "Understand how agents combine current context, persistent memory and external tools to complete useful multi-step work.",
  date: "August 2026",
  readTime: "10 min read",
  icon: "🧩",
  href: "/resources/blog/ai-agents-tools-memory-context",
  available: true,
  },
  {
  id: 9,
  category: "Machine Learning",
  title: "Machine Learning vs Generative AI vs Agentic AI",
  description:
    "Understand how predictive machine learning, generative AI and agentic systems differ—and how they can work together.",
  date: "August 2026",
  readTime: "10 min read",
  icon: "📊",
  href: "/resources/blog/ml-vs-generative-ai-vs-agentic-ai",
  available: true,
  },
  {
  id: 10,
  category: "Future of Work",
  title: "Will AI Agents Replace Jobs—or Redesign Them?",
  description:
    "Explore how AI may automate individual tasks, augment people, redesign roles and create new responsibilities around intelligent systems.",
  date: "August 2026",
  readTime: "12 min read",
  icon: "🌐",
  href: "/resources/blog/ai-agents-future-of-work",
  available: true,
  },
  {
  id: 11,
  category: "AI Infrastructure",
  title: "Vector Databases Explained Without the Jargon",
  description:
    "Learn how embeddings, semantic similarity and vector search help AI applications retrieve information by meaning.",
  date: "August 2026",
  readTime: "9 min read",
  icon: "🗄️",
  href: "/resources/blog/vector-databases-explained",
  available: true,
  },
  {
  id: 12,
  category: "Future of Work",
  title: "The Skills That Matter in an Agentic AI World",
  description:
    "Build the combination of AI literacy, data thinking, workflow design, judgment and domain expertise needed for AI-enabled work.",
  date: "August 2026",
  readTime: "11 min read",
  icon: "🚀",
  href: "/resources/blog/skills-agentic-ai-world",
  available: true,
  },
];

const categories = [
  "All",
  "Agentic AI",
  "AI Infrastructure",
  "Robotics",
  "Automation",
  "Machine Learning",
  "Future of Work",
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredInsight = insights.find((item) => item.featured);

  const filteredInsights = insights.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const searchTerm = search.toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">

        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            EruDigm Insights
          </span>

          <h1 className="mt-7 text-5xl font-extrabold tracking-tight lg:text-7xl">
            Understand
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}What&apos;s Next.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-gray-600">
            Practical insights on Agentic AI, AI infrastructure, robotics,
            automation, machine learning and the technologies changing how
            businesses and people work.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">

            {[
              "Agentic AI",
              "MCP",
              "RAG",
              "Robotics",
              "Automation",
              "Future of Work",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* FEATURED */}
      {featuredInsight && (
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 text-white shadow-2xl">

            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">

                <div className="flex flex-wrap gap-3">

                  <span className="w-fit rounded-full bg-white/20 px-4 py-2 text-sm font-bold">
                    ★ Featured Insight
                  </span>

                  <span className="w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                    {featuredInsight.category}
                  </span>

                </div>

                <h2 className="mt-7 text-4xl font-bold leading-tight lg:text-5xl">
                  From Chatbots to
                  <br />
                  Autonomous Digital Workers
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                  Traditional AI waits for instructions. Agentic systems can
                  plan, use tools, take actions and adapt while working toward
                  an objective. Understand the architecture behind the next
                  generation of AI systems.
                </p>

                <div className="mt-6 flex flex-wrap gap-5 text-sm text-blue-100">
                  <span>{featuredInsight.date}</span>
                  <span>{featuredInsight.readTime}</span>
                </div>

                <div className="mt-9">

                  <Link
                    href={featuredInsight.href!}
                    className="inline-flex rounded-xl bg-white px-7 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-gray-100"
                  >
                    Read Full Insight →
                  </Link>

                </div>

              </div>

              <div className="flex items-center justify-center p-10 lg:p-12">

                <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">

                  <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
                    The Agentic Shift
                  </p>

                  <div className="mt-6 space-y-4">

                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-xs font-bold text-blue-100">
                        CHATBOT
                      </p>
                      <p className="mt-2 font-bold">
                        Question → Answer
                      </p>
                    </div>

                    <div className="text-center text-xl">↓</div>

                    <div className="rounded-2xl bg-white/15 p-5">
                      <p className="text-xs font-bold text-blue-100">
                        AI ASSISTANT
                      </p>
                      <p className="mt-2 font-bold">
                        Task → Help → Human Acts
                      </p>
                    </div>

                    <div className="text-center text-xl">↓</div>

                    <div className="rounded-2xl bg-white p-5 text-blue-700 shadow-lg">
                      <p className="text-xs font-bold">
                        AI AGENT
                      </p>
                      <p className="mt-2 font-bold">
                        Goal → Plan → Tools → Actions
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* SEARCH */}
      <section className="mx-auto max-w-7xl px-6 pt-4 lg:px-8">

        <div className="mx-auto max-w-2xl">

          <div className="relative">

            <input
              type="text"
              placeholder="Search AI, MCP, RAG, robotics, automation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 bg-white px-6 py-4 pr-14 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="flex flex-wrap justify-center gap-3">

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </section>

      {/* INSIGHTS */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Explore
            </span>

            <h2 className="mt-2 text-3xl font-bold">
              Technology Insights
            </h2>

          </div>

          <p className="text-sm font-semibold text-gray-500">
            {filteredInsights.length} insights
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredInsights.map((item) => (

            <article
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >

              {/* CARD VISUAL */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">

                <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-300/20 blur-2xl" />
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-cyan-300/20 blur-2xl" />

                <span className="relative text-7xl transition duration-300 group-hover:scale-110">
                  {item.icon}
                </span>

                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold ${
                    item.available
                      ? "bg-green-100 text-green-700"
                      : "bg-white text-gray-500 shadow-sm"
                  }`}
                >
                  {item.available ? "Available" : "Coming Soon"}
                </span>

              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-7">

                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  {item.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-6 flex justify-between gap-4 text-sm text-gray-500">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>

                {item.available && item.href ? (

                  <Link
                    href={item.href}
                    className="mt-7 block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                  >
                    Read Insight →
                  </Link>

                ) : (

                  <div className="mt-7 w-full rounded-xl bg-slate-100 py-3 text-center text-sm font-semibold text-slate-500">
                    Insight Coming Soon
                  </div>

                )}

              </div>

            </article>

          ))}

        </div>

        {/* EMPTY STATE */}
        {filteredInsights.length === 0 && (

          <div className="py-20 text-center">

            <div className="text-5xl">🔎</div>

            <h2 className="mt-5 text-3xl font-bold">
              No insights found
            </h2>

            <p className="mt-4 text-gray-600">
              Try another search term or technology category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Reset Filters
            </button>

          </div>

        )}

        {/* WHAT'S NEXT */}
        <div className="mt-20 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 text-center md:p-12">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            What We&apos;re Exploring
          </span>

          <h2 className="mt-4 text-3xl font-bold">
            AI is moving quickly. EruDigm Insights will move with it.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Upcoming deep dives will explore MCP, RAG, multi-agent systems,
            physical AI, AI infrastructure, automation and the technologies
            shaping the next generation of digital work.
          </p>

        </div>

        {/* BACK */}
        <div className="mt-16 text-center">

          <Link
            href="/resources"
            className="inline-flex rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-black"
          >
            ← Back to Resources
          </Link>

        </div>

      </section>

    </main>
  );
}