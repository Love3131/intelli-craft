"use client";

import { motion } from "framer-motion";
import { Brain, Bot, BarChart3, Rocket } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Knowledge Driven",
    description:
      "We combine business knowledge with modern technology to build practical digital solutions.",
  },
  {
    icon: Bot,
    title: "AI First",
    description:
      "From intelligent automation to AI-powered applications, we help businesses work smarter.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Interactive dashboards and reporting solutions that transform data into decisions.",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    description:
      "Everything we build is designed to improve productivity, efficiency and business growth.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            About EruDigm
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Knowledge. Innovation. Growth.
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 leading-8">
            EruDigm helps businesses embrace digital transformation through
            AI, analytics, automation and modern web solutions. We create
            intelligent products that reduce manual work and enable faster,
            smarter decision-making.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-8 shadow-md hover:shadow-2xl transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}