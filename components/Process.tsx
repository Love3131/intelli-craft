"use client";

import { motion } from "framer-motion";
import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "We understand your business goals, users and project requirements.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    desc: "We create modern UI/UX with a clear roadmap before development.",
  },
  {
    icon: Code2,
    title: "Develop",
    desc: "We build fast, scalable websites, AI tools and automation solutions.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "We deploy, optimize and support your product for long-term success.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Our Process
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            How We Build Amazing Products
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            A simple and transparent workflow that ensures every project is
            delivered with quality and speed.
          </p>

        </div>

        <div className="relative mt-20">

          <div className="hidden lg:block absolute left-0 right-0 top-10 h-1 bg-blue-100"></div>

          <div className="grid lg:grid-cols-4 gap-10">

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="relative bg-white rounded-3xl p-8 shadow-lg border hover:shadow-2xl transition"
              >

                <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl">

                  <step.icon size={36} />

                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">

                  {index + 1}

                </div>

                <h3 className="mt-8 text-2xl font-bold text-center">

                  {step.title}

                </h3>

                <p className="mt-4 text-center text-gray-600 leading-7">

                  {step.desc}

                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}