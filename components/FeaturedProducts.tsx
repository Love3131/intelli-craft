"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    title: "Executive Dashboard",
    icon: "📊",
    description:
      "Interactive dashboards for executives with KPIs, charts and business insights.",
    features: [
      "Power BI & Excel",
      "Executive Reporting",
      "Interactive Visuals",
    ],
    status: "Premium",
    color: "from-blue-600 to-cyan-500",
    link: "/products/executive-dashboard",
  },
  {
    title: "AI Prompt Bundle",
    icon: "🤖",
    description:
      "Professionally crafted prompts for ChatGPT, Claude and Gemini to improve productivity.",
    features: [
      "500+ AI Prompts",
      "Business Templates",
      "Regular Updates",
    ],
    status: "Coming Soon",
    color: "from-purple-600 to-pink-500",
    link: "/products/ai-prompt-bundle",
  },
  {
    title: "Excel Automation Kit",
    icon: "📈",
    description:
      "Ready-to-use Excel dashboards, trackers and automation templates for professionals.",
    features: [
      "Dashboard Templates",
      "Project Trackers",
      "Automation Tools",
    ],
    status: "Coming Soon",
    color: "from-green-600 to-emerald-500",
    link: "/products/excel-automation-kit",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Our Products
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Digital Products Built For Growth
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Professional templates, AI solutions and business tools designed to
            save time and increase productivity.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {products.map((product, index) => (

            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition"
            >

              <div
                className={`bg-gradient-to-r ${product.color} h-52 flex items-center justify-center text-7xl`}
              >
                {product.icon}
              </div>

              <div className="p-8">

                <div className="flex items-center justify-between">

                  <h3 className="text-3xl font-bold">
                    {product.title}
                  </h3>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    {product.status}
                  </span>

                </div>

                <p className="mt-5 text-gray-600 leading-8">
                  {product.description}
                </p>

                <ul className="mt-8 space-y-3">

                  {product.features.map((feature) => (

                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      ✅ {feature}
                    </li>

                  ))}

                </ul>

                <div className="mt-10 flex gap-4">

                  <Link
                    href={product.link}
                    className="flex-1 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700 transition"
                  >
                    Learn More
                  </Link>

                  <Link
                    href="/#contact"
                    className="flex-1 rounded-xl border border-gray-300 py-3 text-center font-semibold hover:bg-gray-100 transition"
                  >
                    Get Started
                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}