import Link from "next/link";

export default function AIResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="max-w-7xl mx-auto px-8 py-24">

        <span className="rounded-full bg-purple-100 px-4 py-2 text-purple-700 font-semibold">
          AI Resources
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          AI Learning Hub
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl">
          Learn Prompt Engineering, ChatGPT, Claude, Gemini, AI Automation and Agentic AI.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {[
            "Prompt Engineering",
            "ChatGPT Guide",
            "Claude Tips",
            "Gemini Tutorials",
            "AI Automation",
            "Agentic AI"
          ].map((item) => (

            <div
              key={item}
              className="rounded-3xl bg-white p-8 shadow hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold">{item}</h2>

              <p className="mt-4 text-gray-600">
                Coming soon...
              </p>
            </div>

          ))}

        </div>

        <Link
          href="/resources"
          className="inline-block mt-16 rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          ← Back to Resources
        </Link>

      </section>

    </main>
  );
}