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

      {/* Newsletter */}

      <section className="max-w-5xl mx-auto px-8 py-24">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center text-white">

          <h2 className="text-4xl font-bold">
            Join the EruDigm Newsletter
          </h2>

          <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto leading-8">
            Get weekly SQL tips, AI tutorials,
            Excel tricks, dashboards, automation ideas
            and free templates directly in your inbox.
          </p>

          <form className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-96 rounded-xl px-5 py-4 text-gray-900 outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-600 hover:bg-gray-100 transition"
            >
              Subscribe
            </button>

          </form>

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