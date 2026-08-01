import Link from "next/link";

const features = [
  {
    title: "500+ Premium Prompts",
    description:
      "Professionally written prompts for business, productivity and content creation.",
  },
  {
    title: "Multiple AI Platforms",
    description:
      "Works with ChatGPT, Claude, Gemini, Microsoft Copilot and more.",
  },
  {
    title: "Regular Updates",
    description:
      "New prompts will be added regularly as AI technology evolves.",
  },
  {
    title: "Easy to Use",
    description:
      "Simply copy, paste and customize the prompts for your own work.",
  },
  {
    title: "Business Ready",
    description:
      "Designed for professionals, freelancers, analysts, marketers and founders.",
  },
  {
    title: "Lifetime Access",
    description:
      "Purchase once and receive all future updates for this bundle.",
  },
];

export default function AIPromptBundle() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          🤖 AI Prompt Bundle
        </span>

        <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight">
          Unlock the Full Power of
          <span className="block text-purple-600">
            AI Prompt Engineering
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-600">
          Save hours every week with professionally designed prompts for
          ChatGPT, Claude, Gemini and other AI tools.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="/#contact"
            className="rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white hover:bg-purple-700 transition"
          >
            Get Early Access
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100 transition"
          >
            Back Home
          </Link>

        </div>

      </section>

      {/* Preview Card */}

      <section className="max-w-7xl mx-auto px-8">

        <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 p-10 text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            What's Inside?
          </h2>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="rounded-2xl bg-white/10 p-6">
              💼 Business
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              📊 SQL & Excel
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              📢 Marketing
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              🚀 Productivity
            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Why You'll Love It
          </h2>

          <p className="mt-4 text-gray-600">
            Everything you need to boost productivity with AI.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="rounded-3xl bg-gray-900 p-12 text-center text-white">

          <h2 className="text-4xl font-bold">
            Coming Soon
          </h2>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            We're preparing one of the most practical AI prompt collections
            for professionals. Join the waiting list and be the first to know
            when it's launched.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-block rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white hover:bg-purple-700 transition"
          >
            Join the Waitlist
          </Link>

        </div>

      </section>

    </main>
  );
}