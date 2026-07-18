"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 86) return 86;
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-8 py-12 lg:py-16 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}

        <div>

          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            🚀 AI Solutions • Websites • Digital Products
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">

            Build Your

            <br />

            <span className="text-blue-600">
              Digital Future
            </span>

            <br />

            With IntelliCraft

          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

            We build premium websites, AI-powered applications,
            business automation, analytics dashboards and digital
            products that help businesses grow faster.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-xl bg-blue-600 px-7 py-3 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition">

              Start Your Project

            </button>

            <button className="rounded-xl border border-gray-300 px-7 py-3 font-semibold hover:bg-white hover:shadow-md transition">

              View Services

            </button>

          </div>

          <div className="mt-14 flex gap-12">

            <div>

              <h3 className="text-3xl font-bold text-blue-600">
                10+
              </h3>

              <p className="text-gray-600">
                Projects
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-blue-600">
                100%
              </h3>

              <p className="text-gray-600">
                Client Focus
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-blue-600">
                24/7
              </h3>

              <p className="text-gray-600">
                Support
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl hover:shadow-blue-200 transition-all duration-500">

            <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl"></div>

            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl"></div>

            <div className="relative flex items-center justify-between mb-8">

              <div>

                <p className="text-sm text-gray-500">
                  IntelliCraft Dashboard
                </p>

                <h2 className="text-3xl font-bold mt-1">
                  Live Project
                </h2>

              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white animate-pulse shadow-lg">

                🤖

              </div>

            </div>

            <div className="relative rounded-2xl border p-6">

              <div className="flex justify-between mb-3">

                <span className="font-semibold">

                  AI Automation

                </span>

                <span className="font-bold text-green-600">

                  {progress}%

                </span>

              </div>

              <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

                <div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />

              </div>

            </div>

            <div className="grid grid-cols-2 gap-5 mt-6">
                          <div className="rounded-2xl border p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                <p className="text-sm text-gray-500">
                  Websites
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  24
                </h3>

              </div>

              <div className="rounded-2xl border p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                <p className="text-sm text-gray-500">
                  AI Apps
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  12
                </h3>

              </div>

              <div className="rounded-2xl border p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                <p className="text-sm text-gray-500">
                  Automation
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  126
                </h3>

              </div>

              <div className="rounded-2xl border p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                <p className="text-sm text-gray-500">
                  Status
                </p>

                <h3 className="mt-2 text-2xl font-bold text-green-600">
                  Active
                </h3>

              </div>

            </div>

            {/* Bottom Status */}

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm opacity-90">
                    Current Project
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    IntelliCraft Website
                  </h3>

                </div>

                <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">

                  In Progress

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}