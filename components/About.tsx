"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "3",
    title: "Digital Products",
  },
  {
    number: "12",
    title: "EruDigm Insights",
  },
  {
    number: "12",
    title: "AI Guides",
  },
  {
    number: "Live",
    title: "Digital Platform",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-widest font-semibold text-blue-600">
              About EruDigm
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight">
              Building Smarter
              <span className="block text-blue-600">
                Digital Solutions
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              EruDigm helps businesses transform ideas into modern digital
              products. We specialize in AI-powered applications, business
              automation, websites, dashboards and analytics solutions that
              improve productivity and accelerate growth.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you're a startup, small business or enterprise,
              our goal is to build scalable technology solutions that
              solve real business problems.
            </p>

            <div className="mt-10">

              <a
                href="#contact"
                className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
           >
                Start a Conversation
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="grid grid-cols-2 gap-6">

              {stats.map((item) => (

                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition text-center"
                >

                  <h3 className="text-5xl font-extrabold text-blue-600">
                    {item.number}
                  </h3>

                  <p className="mt-4 text-lg font-semibold text-gray-700">
                    {item.title}
                  </p>

                </div>

              ))}

            </div>

            <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl">

              <h3 className="text-3xl font-bold">
                Our Mission
              </h3>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                To simplify business through technology by creating
                practical AI solutions, automation systems and
                digital products that save time and increase efficiency.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}