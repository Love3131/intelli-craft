"use client";

import { useState } from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    category: "SQL",
    title: "10 SQL Queries Every Data Analyst Must Know",
    description:
      "Master the most commonly asked SQL queries used in interviews and real business reporting.",
    date: "August 2026",
    readTime: "6 min read",
    image: "💾",
  },
  {
    id: 2,
    category: "Artificial Intelligence",
    title: "Getting Started with Prompt Engineering",
    description:
      "Learn how to write better prompts for ChatGPT, Claude and Gemini to improve your productivity.",
    date: "August 2026",
    readTime: "8 min read",
    image: "🤖",
  },
  {
    id: 3,
    category: "Excel",
    title: "5 Excel Dashboards Every Manager Should Build",
    description:
      "Create executive dashboards using Pivot Tables, Charts and Power Query.",
    date: "Coming Soon",
    readTime: "7 min read",
    image: "📊",
  },
  {
    id: 4,
    category: "Power BI",
    title: "Build Interactive KPI Dashboards",
    description:
      "Step-by-step guide to building executive dashboards in Power BI.",
    date: "Coming Soon",
    readTime: "10 min read",
    image: "📈",
  },
  {
    id: 5,
    category: "Python",
    title: "Python for Data Analytics",
    description:
      "Learn the Python libraries every analyst should know including Pandas and NumPy.",
    date: "Coming Soon",
    readTime: "9 min read",
    image: "🐍",
  },
  {
    id: 6,
    category: "Career",
    title: "How to Become a Data Analyst in 2026",
    description:
      "A practical roadmap covering SQL, Excel, Power BI, Python and AI skills.",
    date: "Coming Soon",
    readTime: "12 min read",
    image: "🚀",
  },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "SQL",
    "Artificial Intelligence",
    "Excel",
    "Power BI",
    "Python",
    "Career",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-8 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 font-semibold">
            EruDigm Blog
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold">
            Learn. Build. Grow.
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            Practical tutorials on SQL, AI, Excel, Power BI,
            Python, Automation and Business Analytics.
          </p>

        </div>
      </section>

      {/* Search */}

      <section className="max-w-7xl mx-auto px-8 pt-12">

        <div className="max-w-xl mx-auto">

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-6 py-4 shadow-sm focus:border-blue-600 focus:outline-none"
          />

        </div>

      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-8 py-10">

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "border bg-white hover:bg-blue-600 hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </section>

      {/* Featured Article */}

      <section className="max-w-7xl mx-auto px-8 pb-16">

        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 to-cyan-500 text-white shadow-2xl">

          <div className="grid lg:grid-cols-2">

            <div className="p-12 flex flex-col justify-center">

              <span className="inline-block w-fit rounded-full bg-white/20 px-4 py-2 font-semibold">
                ⭐ Featured Article
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight">
                Complete SQL Roadmap
                <br />
                for Data Analysts
              </h2>

              <p className="mt-6 text-blue-100 text-lg leading-8">
                Learn SQL from beginner to advanced including Joins,
                CTEs, Window Functions, Stored Procedures,
                Optimization and Interview Questions.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <button className="rounded-xl bg-white px-7 py-4 font-bold text-blue-700 hover:bg-gray-100 transition">
                  Read Complete Guide
                </button>

                <button className="rounded-xl border border-white px-7 py-4 font-semibold hover:bg-white hover:text-blue-700 transition">
                  Download PDF
                </button>

              </div>

            </div>

            <div className="flex items-center justify-center text-[170px]">
              💾
            </div>

          </div>

        </div>

      </section>

      {/* Blog Cards */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredPosts.map((post) => (

            <div
              key={post.id}
              className="rounded-3xl bg-white shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition"
            >

              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-7xl">
                {post.image}
              </div>

              <div className="p-8">

                <span className="text-sm font-semibold text-blue-600 uppercase">
                  {post.category}
                </span>

                <h2 className="mt-4 text-2xl font-bold">
                  {post.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {post.description}
                </p>

                <div className="mt-6 flex justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <Link
                   href={`/resources/blog/${post.title
                     .toLowerCase()
                     .replace(/[^a-z0-9]+/g, "-")
                     .replace(/(^-|-$)/g, "")}`}
                   className="mt-8 block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700 transition"
                 >
                   Read Article
                </Link>

              </div>

            </div>

          ))}

        </div>

        {filteredPosts.length === 0 && (

          <div className="py-20 text-center">

            <h2 className="text-3xl font-bold">
              No articles found
            </h2>

            <p className="mt-4 text-gray-600">
              Try another search or category.
            </p>

          </div>

        )}

        <div className="mt-20 text-center">

          <Link
            href="/resources"
            className="rounded-xl bg-slate-900 px-8 py-4 text-white hover:bg-black transition"
          >
            ← Back to Resources
          </Link>

        </div>

      </section>

    </main>
  );
}