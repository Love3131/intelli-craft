"use client";

import Link from "next/link";

const products = [
  {
    title: "Executive Dashboard",
    description:
      "Interactive KPI dashboard for business reporting, SLA tracking, attrition analysis and executive decision-making.",
    icon: "📊",
    price: "Coming Soon",
    gradient: "from-blue-600 to-cyan-500",
    href: "/products/executive-dashboard",
  },
  {
    title: "AI Prompt Bundle",
    description:
      "500+ high-quality prompts for ChatGPT, Claude and Gemini covering business, marketing, SQL, Excel and productivity.",
    icon: "🤖",
    price: "Coming Soon",
    gradient: "from-purple-600 to-pink-500",
    href: "/products/ai-prompt-bundle",
  },
  {
    title: "Excel Automation Kit",
    description:
      "Ready-to-use Excel templates, dashboards and Google Apps Script automations to save hours of manual work.",
    icon: "📁",
    price: "Coming Soon",
    gradient: "from-green-600 to-emerald-500",
    href: "/products/excel-automation-kit",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Featured Products
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Ready-To-Use Digital Products
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Premium digital products built to help professionals and businesses
            save time, automate work and improve productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`h-44 bg-gradient-to-r ${product.gradient} flex items-center justify-center text-white text-6xl`}
              >
                {product.icon}
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {product.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {product.description}
                </p>

                <div className="mt-6 flex justify-between items-center">

                  <span className="text-lg font-semibold text-blue-600">
                    {product.price}
                  </span>

                  <Link
                    href={product.href}
                    className="rounded-lg bg-blue-600 px-5 py-2 text-white font-medium hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}