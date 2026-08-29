"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            🚀 AI Solutions • Websites • Digital Products
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Build Your
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Digital Future
            </span>
            <br />
            With EruDigm
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            We build premium websites, AI-powered applications,
            business automation, analytics dashboards and digital
            products that help businesses grow faster.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Start Your Project
            </a>

            <a
              href="#services"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              View Services
            </a>
          </div>

          {/* Platform Highlights */}
          <div className="mt-12 flex flex-wrap gap-10">
            {[
              ["12", "Insights"],
              ["12+", "AI Guides"],
              ["Live", "Platform"],
            ].map(([value, label]) => (
              <div key={label}>
                <h3 className="text-3xl font-bold text-blue-600">
                  {value}
                </h3>

                <p className="text-gray-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl hover:shadow-blue-200 transition-all duration-500">

            <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Dashboard Header */}
            <div className="relative flex items-center justify-between mb-8">
              <div>
                <p className="text-sm text-gray-500">
                  EruDigm Dashboard
                </p>

                <h2 className="text-3xl font-bold mt-1">
                  Platform Overview
                </h2>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white shadow-lg">
                🤖
              </div>
            </div>

            {/* Launch Status */}
            <div className="rounded-2xl border p-6">
              <div className="flex justify-between mb-3">
                <span className="font-semibold">
                  Platform Launch
                </span>

                <span className="font-bold text-green-600">
                  100%
                </span>
              </div>

              <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-3 w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
              </div>
            </div>

            {/* Platform Metrics */}
            <div className="grid grid-cols-2 gap-5 mt-6">
              {[
                ["12", "Insights"],
                ["6", "AI Tool Guides"],
                ["6", "Prompt Guides"],
                ["Live", "Platform Status"],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border p-5 shadow-sm"
                >
                  <p className="text-sm text-gray-500">
                    {label}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-blue-600">
                    {value}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Platform Status */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm opacity-90">
                    Current Platform
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    EruDigm Website
                  </h3>

                  <p className="mt-1 text-sm text-blue-100">
                    Website & Resource Hub
                  </p>
                </div>

                <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                  Live
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}