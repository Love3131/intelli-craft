import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const articles: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    content: string[];
  }
> = {
  "10-sql-queries-every-data-analyst-must-know": {
    title: "10 SQL Queries Every Data Analyst Must Know",
    category: "SQL",
    date: "August 2026",
    readTime: "6 min read",
    content: [
      "SQL is one of the most important skills for every Data Analyst.",
      "You should master SELECT, WHERE, GROUP BY, HAVING, ORDER BY, JOIN, CASE WHEN, CTEs, Window Functions and Subqueries.",
      "Almost every company asks SQL questions during interviews because reporting and analytics rely heavily on SQL.",
      "Practice these queries regularly using real datasets."
    ],
  },

  "getting-started-with-prompt-engineering": {
    title: "Getting Started with Prompt Engineering",
    category: "Artificial Intelligence",
    date: "August 2026",
    readTime: "8 min read",
    content: [
      "Prompt Engineering is the ability to communicate effectively with AI.",
      "A good prompt clearly explains the task, provides context and defines the expected output.",
      "Better prompts produce significantly better AI responses.",
      "Experiment with different prompt structures to improve results."
    ],
  },

  "5-excel-dashboards-every-manager-should-build": {
    title: "5 Excel Dashboards Every Manager Should Build",
    category: "Excel",
    date: "Coming Soon",
    readTime: "7 min read",
    content: [
      "Executive dashboards simplify business reporting.",
      "Pivot Tables, Charts and Power Query make dashboards interactive.",
      "Start with KPI dashboards before moving to advanced analytics."
    ],
  },

  "build-interactive-kpi-dashboards": {
    title: "Build Interactive KPI Dashboards",
    category: "Power BI",
    date: "Coming Soon",
    readTime: "10 min read",
    content: [
      "Power BI enables interactive reporting.",
      "Use slicers, cards and drill-through pages for better insights."
    ],
  },

  "python-for-data-analytics": {
    title: "Python for Data Analytics",
    category: "Python",
    date: "Coming Soon",
    readTime: "9 min read",
    content: [
      "Python is widely used for analytics.",
      "Focus on Pandas, NumPy and Matplotlib before moving to Machine Learning."
    ],
  },

  "how-to-become-a-data-analyst-in-2026": {
    title: "How to Become a Data Analyst in 2026",
    category: "Career",
    date: "Coming Soon",
    readTime: "12 min read",
    content: [
      "Start with Excel.",
      "Learn SQL thoroughly.",
      "Then learn Power BI.",
      "Finally move to Python and AI."
    ],
  },
};

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;

  const article = articles[slug];

  if (!article) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">404</h1>

        <p className="mt-5 text-gray-600">
          Article not found.
        </p>

        <Link
          href="/resources/blog"
          className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 min-h-screen">

      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">

        <div className="max-w-5xl mx-auto px-8 py-24">

          <span className="rounded-full bg-white/20 px-4 py-2">
            {article.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            {article.title}
          </h1>

          <div className="mt-6 flex gap-8 text-blue-100">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>

        </div>

      </section>

      <section className="max-w-4xl mx-auto px-8 py-20">

        <article className="rounded-3xl bg-white p-12 shadow-xl">

          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className="mb-8 text-lg leading-9 text-gray-700"
            >
              {paragraph}
            </p>
          ))}

          <Link
            href="/resources/blog"
            className="inline-block mt-10 rounded-xl bg-blue-600 px-8 py-4 text-white hover:bg-blue-700 transition"
          >
            ← Back to Blog
          </Link>

        </article>

      </section>

    </main>
  );
}