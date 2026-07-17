export default function FeaturedProducts() {
  return (
    <section id="products"className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Featured Products
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Ready To Use Digital Assets
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Save hundreds of hours with professionally designed templates,
            dashboards and AI resources.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition">

            <div className="h-44 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-6xl">
              📊
            </div>

            <div className="p-8">

              <h3 className="text-2xl font-bold">
                Executive Dashboard
              </h3>

              <p className="text-gray-600 mt-4">
                Interactive dashboard for KPI reporting, SLA tracking and business performance.
              </p>

              <div className="mt-6 flex justify-between items-center">

                <span className="text-2xl font-bold text-blue-600">
                  ₹999
                </span>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  View
                </button>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition">

            <div className="h-44 bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white text-6xl">
              🤖
            </div>

            <div className="p-8">

              <h3 className="text-2xl font-bold">
                AI Prompt Bundle
              </h3>

              <p className="text-gray-600 mt-4">
                500+ ready-to-use prompts for business, marketing and productivity.
              </p>

              <div className="mt-6 flex justify-between items-center">

                <span className="text-2xl font-bold text-blue-600">
                  ₹499
                </span>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  View
                </button>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition">

            <div className="h-44 bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center text-white text-6xl">
              📁
            </div>

            <div className="p-8">

              <h3 className="text-2xl font-bold">
                Excel Automation Kit
              </h3>

              <p className="text-gray-600 mt-4">
                Ready-made Excel templates and Apps Script automation solutions.
              </p>

              <div className="mt-6 flex justify-between items-center">

                <span className="text-2xl font-bold text-blue-600">
                  ₹799
                </span>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  View
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}