import Link from "next/link";

const pipeline = [
  {
    number: "01",
    title: "Knowledge",
    text: "Start with documents, policies, manuals, databases, websites or other trusted information sources.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Content may be cleaned, split into useful chunks and enriched with metadata before indexing.",
  },
  {
    number: "03",
    title: "Index",
    text: "Create a searchable representation using vector, keyword, hybrid or other retrieval approaches.",
  },
  {
    number: "04",
    title: "Ask",
    text: "A user submits a question that requires information from the knowledge source.",
  },
  {
    number: "05",
    title: "Retrieve",
    text: "The system searches for information that appears relevant to the question.",
  },
  {
    number: "06",
    title: "Rerank",
    text: "More advanced systems may score or rerank retrieved candidates before choosing the strongest context.",
  },
  {
    number: "07",
    title: "Augment",
    text: "Selected evidence is added to the model's context together with the user's question and instructions.",
  },
  {
    number: "08",
    title: "Generate",
    text: "The language model creates an answer using the retrieved evidence and the instructions it receives.",
  },
];

const businessExamples = [
  {
    title: "HR Policy Assistant",
    question: "What is our parental leave policy?",
    knowledge: "Approved HR policies and employee handbook",
    value:
      "Retrieve the relevant policy sections before answering instead of relying on generic model knowledge.",
  },
  {
    title: "Operations Knowledge Assistant",
    question: "What is the escalation process for this issue?",
    knowledge: "SOPs, process documents and escalation matrices",
    value:
      "Help employees find the correct operational procedure from approved documentation.",
  },
  {
    title: "Contract Assistant",
    question: "What does this contract say about termination?",
    knowledge: "Authorized contract documents",
    value:
      "Retrieve relevant clauses and provide a structured summary for review.",
  },
  {
    title: "Customer Support Assistant",
    question: "How should we troubleshoot this product issue?",
    knowledge: "Product manuals, knowledge articles and resolved cases",
    value:
      "Ground support responses in product-specific information rather than generic troubleshooting.",
  },
  {
    title: "Project Knowledge Assistant",
    question: "What decisions were made about the reporting logic?",
    knowledge: "Project documents, specifications and approved decision records",
    value:
      "Surface relevant project history without forcing people to manually search many documents.",
  },
  {
    title: "Research Knowledge Base",
    question: "What have we already learned about this market?",
    knowledge: "Research reports, notes and approved source material",
    value:
      "Reuse accumulated organizational knowledge while keeping the original evidence accessible.",
  },
];

const failureModes = [
  {
    title: "Wrong Retrieval",
    text: "The correct information exists, but the retrieval system selects irrelevant or weaker content.",
  },
  {
    title: "Missing Knowledge",
    text: "The source collection simply does not contain the information required to answer the question.",
  },
  {
    title: "Poor Chunking",
    text: "Important context is split badly, making individual retrieved passages incomplete or misleading.",
  },
  {
    title: "Stale Content",
    text: "The system retrieves an old policy, outdated specification or superseded document.",
  },
  {
    title: "Access Leakage",
    text: "Retrieval ignores user permissions and exposes information the requester should not be able to access.",
  },
  {
    title: "Generation Error",
    text: "Relevant evidence is retrieved, but the model still interprets, combines or states it incorrectly.",
  },
];

const evaluationChecks = [
  "Did retrieval find the evidence a knowledgeable human would expect?",
  "Are the highest-ranked results actually relevant to the question?",
  "Does the answer accurately reflect the retrieved evidence?",
  "Can important claims be traced back to source material?",
  "Does the system abstain when the required information is missing?",
  "Are document freshness and versioning handled correctly?",
  "Are user permissions enforced before retrieval?",
  "Does the system work across realistic questions—not just demonstration examples?",
];

export default function RAGExplainedArticle() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">

        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <Link
            href="/resources/blog"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            ← Back to EruDigm Insights
          </Link>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div>

              <div className="flex flex-wrap gap-3">

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  AI Infrastructure
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  RAG
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  11 min read
                </span>

              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                RAG Explained
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Give AI the Right Knowledge
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                Retrieval-Augmented Generation helps AI applications retrieve
                relevant external information before generating an answer.
                Understand the architecture behind grounded AI systems—and why
                retrieval quality matters as much as generation quality.
              </p>

              <a
                href="#pipeline"
                className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                Explore the RAG Pipeline ↓
              </a>

            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Without vs With Retrieval
              </p>

              <div className="mt-7">

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold text-gray-500">
                    WITHOUT RAG
                  </p>

                  <p className="mt-2 font-bold">
                    Question → Model → Answer
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    The model may not have your current or private business
                    knowledge.
                  </p>
                </div>

                <div className="py-4 text-center text-2xl text-blue-600">
                  ↓
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-lg">

                  <p className="text-xs font-bold text-blue-100">
                    WITH RAG
                  </p>

                  <p className="mt-2 font-bold">
                    Question → Retrieve Evidence → Model → Grounded Answer
                  </p>

                  <p className="mt-2 text-sm text-blue-50">
                    Relevant external knowledge becomes part of the context
                    used to generate the response.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* DEFINITION */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          The Core Idea
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Retrieve first. Generate second.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">

          <p>
            Large language models are trained on broad datasets, but they do
            not automatically know your latest company policies, project
            decisions, private documents or continuously changing business
            information.
          </p>

          <p>
            RAG changes the workflow. Before the model generates its final
            response, a retrieval system searches an external knowledge source
            for information relevant to the user's question. Selected evidence
            is then added to the model's context.
          </p>

          <p>
            This allows the application to combine the language and reasoning
            capabilities of a model with information that lives outside the
            model itself.
          </p>

        </div>

      </section>

      {/* WHAT RAG IS NOT */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Important Distinction
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            RAG is not the same thing as a vector database.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Vector search is one popular retrieval technique, but retrieval can
            use several approaches. A production RAG system may combine
            semantic search with traditional keyword search, metadata filters,
            access controls and reranking.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              ["Keyword Search", "Match important words or terms."],
              ["Vector Search", "Find semantically similar content."],
              ["Metadata Filters", "Restrict by source, date, type or permission."],
              ["Hybrid Retrieval", "Combine multiple retrieval signals."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PIPELINE */}
      <section
        id="pipeline"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            RAG Architecture
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            From business knowledge to grounded answer
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            A practical RAG pipeline has two broad stages: prepare knowledge so
            it can be retrieved, then retrieve the right evidence when a user
            asks a question.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {pipeline.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <span className="text-sm font-bold text-blue-600">
                {item.number}
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* VISUAL FLOW */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Simplified Flow
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              What happens when someone asks a question?
            </h2>

          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">

            <div className="grid lg:grid-cols-5">

              {[
                ["1", "Question", "What does our policy say?"],
                ["2", "Retrieve", "Search approved knowledge"],
                ["3", "Select", "Choose relevant evidence"],
                ["4", "Generate", "Question + evidence → LLM"],
                ["5", "Answer", "Respond using retrieved context"],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="border-b border-gray-100 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                    {number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {text}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* EMBEDDINGS */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Embeddings
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Represent meaning numerically
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Embedding models convert text or other supported content into
              numerical vectors. Content with related meaning can appear closer
              in the resulting vector space, enabling semantic retrieval even
              when the wording is not identical.
            </p>

            <div className="mt-7 rounded-2xl bg-slate-50 p-5">

              <p className="font-semibold text-gray-700">
                “employee resignation policy”
              </p>

              <p className="my-3 text-center text-blue-600">
                ↓ semantic similarity ↓
              </p>

              <p className="font-semibold text-gray-700">
                “procedure when a staff member leaves the organization”
              </p>

            </div>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Chunking
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Decide what unit gets retrieved
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Long documents are often divided into smaller retrievable units.
              If chunks are too small, important context can disappear. If
              chunks are too large, retrieval may return excessive irrelevant
              information.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-3">

              {[
                ["Too Small", "Context lost"],
                ["Balanced", "Useful context"],
                ["Too Large", "Noise added"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl bg-slate-50 p-4 text-center"
                >
                  <p className="text-sm font-bold text-blue-600">
                    {title}
                  </p>

                  <p className="mt-2 text-xs text-gray-600">
                    {text}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* BUSINESS EXAMPLES */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Business Applications
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Where RAG becomes useful
            </h2>

          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">

            {businessExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <div className="mt-5 rounded-2xl bg-blue-50 p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Question
                  </p>

                  <p className="mt-2 font-semibold text-gray-800">
                    {item.question}
                  </p>

                </div>

                <div className="mt-4 rounded-2xl bg-slate-50 p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Knowledge Source
                  </p>

                  <p className="mt-2 font-semibold text-gray-800">
                    {item.knowledge}
                  </p>

                </div>

                <p className="mt-5 leading-7 text-gray-600">
                  {item.value}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* HALLUCINATION */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-xl lg:p-12">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Important Reality
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            RAG can improve grounding. It does not eliminate hallucinations.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Retrieval gives the model better evidence, but several things can
            still go wrong. The system may retrieve the wrong passage, miss the
            right one, use outdated content or generate a conclusion that the
            evidence does not support.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
            Reliable RAG therefore requires evaluation of both sides of the
            system:
            <strong className="text-slate-900"> retrieval quality </strong>
            and
            <strong className="text-slate-900"> answer quality.</strong>
          </p>

        </div>

      </section>

      {/* FAILURE MODES */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Failure Modes
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Why a RAG system can still give the wrong answer
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {failureModes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PERMISSIONS */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          <div>

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Enterprise RAG
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              The right answer must also be the answer the user is allowed to see.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              A company knowledge system may contain HR records, contracts,
              financial information, client data and confidential project
              documents. Retrieval must respect access controls rather than
              treating every indexed document as globally visible.
            </p>

          </div>

          <div className="rounded-3xl border border-red-100 bg-red-50 p-8">

            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Security Failure
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Correct retrieval + wrong permission = serious problem.
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Retrieval authorization should be part of the architecture, not
              an afterthought added once the search quality looks good.
            </p>

          </div>

        </div>

      </section>

      {/* EVALUATION */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Evaluate the System
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            A convincing demo is not a production evaluation.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {evaluationChecks.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <p className="pt-1 text-gray-700">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MCP + RAG */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          How the Pieces Fit Together
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          MCP and RAG solve different problems.
        </h2>

        <div className="mt-10 grid gap-7 lg:grid-cols-2">

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">

            <span className="text-sm font-bold text-blue-600">
              MCP
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              How can the AI application connect to capabilities?
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              MCP provides a standardized protocol for connecting compatible
              AI applications to tools, resources and other external
              capabilities.
            </p>

          </div>

          <div className="rounded-3xl border border-cyan-100 bg-white p-8 shadow-lg">

            <span className="text-sm font-bold text-cyan-700">
              RAG
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              How can the application retrieve useful knowledge before answering?
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              RAG focuses on finding relevant external information and placing
              that evidence into the generation context.
            </p>

          </div>

        </div>

        <div className="mt-7 rounded-3xl bg-slate-950 p-8 text-center text-white">

          <p className="text-lg font-bold">
            Agentic AI can use tools → MCP can expose capabilities → RAG can
            retrieve knowledge → the model can use that context to act or answer.
          </p>

        </div>

      </section>

      {/* FINAL */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Key Takeaway
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Better AI answers often start with better retrieval.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            RAG does not magically make a model truthful. It gives the
            application a mechanism to find relevant external evidence before
            generation. The quality of the final answer therefore depends on
            the knowledge source, indexing strategy, retrieval system,
            permissions, context selection and model behavior.
          </p>

        </div>

      </section>

      {/* NEXT */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Next In EruDigm Insights
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            AI assistants can use knowledge. Agents can go further and decide
            what to do next.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Next we'll compare AI Assistants, AI Workflows and AI Agents so the
            differences become clear in practical business terms.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/resources/blog/what-is-mcp"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              ← MCP Explained
            </Link>

            <Link
              href="/resources/blog"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              EruDigm Insights
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}