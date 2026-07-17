export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">

      <div className="max-w-7xl mx-auto px-8 py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            🚀 AI Solutions • Websites • Digital Products
          </span>

          <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight">
            Build Your
            <span className="text-blue-600"> Digital Future</span>
            <br />
            With IntelliCraft
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
            We build modern websites, AI-powered applications,
            business automation, dashboards and digital products
            that help businesses grow faster.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl hover:bg-blue-700 transition">
              Start Your Project
            </button>

            <button className="rounded-xl border border-gray-300 px-8 py-4 hover:bg-gray-100 transition">
              View Services
            </button>

          </div>

          <div className="mt-14 flex gap-10">

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                10+
              </h3>
              <p className="text-gray-600">
                Solutions Built
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

        {/* Right */}

        <div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  IntelliCraft Dashboard
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Project Overview
                </h2>

              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
                🤖
              </div>

            </div>

            <div className="space-y-5">

              <div className="rounded-2xl border p-5 hover:shadow-lg transition">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-500">
                      AI Assistant
                    </p>

                    <h3 className="font-bold">
                      Online
                    </h3>

                  </div>

                  <span className="font-semibold text-green-600">
                    Active
                  </span>

                </div>

                <div className="mt-4 h-2 rounded-full bg-gray-200">

                  <div className="h-2 w-5/6 rounded-full bg-blue-600"></div>

                </div>

              </div>

              <div className="rounded-2xl border p-5 hover:shadow-lg transition">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-500">
                      Website Performance
                    </p>

                    <h3 className="font-bold">
                      98%
                    </h3>

                  </div>

                  <span className="font-semibold text-blue-600">
                    Excellent
                  </span>

                </div>

              </div>

              <div className="rounded-2xl border p-5 hover:shadow-lg transition">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-500">
                      Automation Tasks
                    </p>

                    <h3 className="font-bold">
                      126 Completed
                    </h3>

                  </div>

                  <span className="text-2xl text-green-600">
                    ✓
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}