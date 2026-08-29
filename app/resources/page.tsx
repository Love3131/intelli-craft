import Link from "next/link";
import FAQ from "@/components/FAQ";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24 text-center">

        <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-blue-600 font-semibold">
          Resources
        </span>

        <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold">
          Learn.
          <span className="text-blue-600"> Build.</span>
          <span className="text-cyan-500"> Grow.</span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 leading-8">
          Free learning resources, business templates, AI guides,
          blogs and newsletters to help you become more productive.
        </p>

      </section>

      {/* Resource Cards */}

      <section className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Blog */}

          <div className="rounded-3xl bg-white p-8 shadow hover:shadow-2xl transition duration-300">

            <div className="text-5xl">📚</div>

            <h2 className="mt-5 text-2xl font-bold">
              Blog
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Tutorials on SQL, AI, Automation, Excel,
              Dashboards and Business Analytics.
            </p>

            <Link
              href="/resources/blog"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Explore Blogs →
            </Link>

          </div>

          {/* Free Downloads */}

          <div className="rounded-3xl bg-white p-8 shadow hover:shadow-2xl transition duration-300">

            <div className="text-5xl">📥</div>

            <h2 className="mt-5 text-2xl font-bold">
              Free Downloads
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Download free Excel templates,
              dashboards, AI prompts and business tools.
            </p>

            <Link
              href="/resources/free-downloads"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Browse Downloads →
            </Link>

          </div>

          {/* AI Resources */}

          <div className="rounded-3xl bg-white p-8 shadow hover:shadow-2xl transition duration-300">

            <div className="text-5xl">🚀</div>

            <h2 className="mt-5 text-2xl font-bold">
              AI Resources
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Prompt engineering guides,
              AI tools, productivity hacks and workflows.
            </p>

            <Link
              href="/resources/ai-resources"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              View AI Resources →
            </Link>

          </div>

        </div>

      </section>

      {/* Resource Discovery CTA */}

<section className="max-w-5xl mx-auto px-8 py-24">

  <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center text-white shadow-xl">

    <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
      Learn • Explore • Apply
    </span>

    <h2 className="mt-6 text-4xl font-bold">
      Stay Ahead with EruDigm
    </h2>

    <p className="mt-6 text-blue-100 text-lg max-w-3xl mx-auto leading-8">
      Explore practical AI guides, emerging technology insights,
      prompt-engineering resources and ready-to-use business tools
      designed to help you work smarter.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-4">

      <Link
        href="/resources/blog"
        className="rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-lg"
      >
        Explore Latest Insights
      </Link>

      <Link
        href="/resources/ai-resources"
        className="rounded-xl border border-white/70 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-blue-600"
      >
        Explore AI Resources
      </Link>

    </div>

    <p className="mt-7 text-sm text-blue-100">
      New resources and insights are added as the EruDigm knowledge library grows.
    </p>

  </div>

</section>
      {/* FAQ */}

      <FAQ />

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-8 py-24 text-center">

        <h2 className="text-4xl font-bold">
          Need Custom Solutions?
        </h2>

        <p className="mt-5 text-xl text-gray-600">
          We build websites, AI applications,
          dashboards, automation solutions,
          analytics platforms and custom software.
        </p>

        <Link
          href="/#contact"
          className="inline-block mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>

      </section>

    </main>
  );
}