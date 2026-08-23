import Link from "next/link";

const concepts = [
  {
    number: "01",
    title: "Content",
    text: "Start with text, images, products, documents or other information you want to search.",
  },
  {
    number: "02",
    title: "Embedding",
    text: "An embedding model converts the content into a numerical representation called a vector.",
  },
  {
    number: "03",
    title: "Index",
    text: "The vectors are stored or indexed in a system designed to retrieve similar vectors efficiently.",
  },
  {
    number: "04",
    title: "Query",
    text: "The user's question is converted into a vector using a compatible embedding model.",
  },
  {
    number: "05",
    title: "Similarity Search",
    text: "The system finds vectors that are mathematically close to the query vector.",
  },
  {
    number: "06",
    title: "Retrieve",
    text: "The corresponding original content is returned for search, recommendations or RAG.",
  },
];

const useCases = [
  {
    title: "RAG",
    description:
      "Retrieve passages that are semantically related to a user's question before an AI model generates an answer.",
  },
  {
    title: "Semantic Search",
    description:
      "Find relevant information even when the query and document use different wording.",
  },
  {
    title: "Recommendations",
    description:
      "Find products, documents or other items that are similar in meaning or characteristics.",
  },
  {
    title: "Image Search",
    description:
      "Represent images as vectors and retrieve visually or conceptually similar content.",
  },
  {
    title: "Duplicate Detection",
    description:
      "Identify content that is very similar even when it is not an exact text match.",
  },
  {
    title: "Knowledge Discovery",
    description:
      "Explore related documents or concepts across a large information collection.",
  },
];

const mistakes = [
  {
    title: "Ignoring Metadata",
    text: "Semantic similarity alone may retrieve the wrong date, department, customer or document version.",
  },
  {
    title: "Poor Embeddings",
    text: "Retrieval quality depends heavily on whether the embedding model represents the domain and content appropriately.",
  },
  {
    title: "Bad Chunking",
    text: "If indexed chunks lose important context, even excellent vector search may retrieve incomplete evidence.",
  },
  {
    title: "No Permission Filtering",
    text: "A semantically relevant document should still be excluded when the user is not authorized to access it.",
  },
  {
    title: "Vector Search Only",
    text: "Exact identifiers, codes and names may be better handled with keyword or structured search.",
  },
  {
    title: "No Evaluation",
    text: "A search demo that looks convincing is not evidence that retrieval works across real user questions.",
  },
];

export default function VectorDatabasesArticle() {
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

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

            <div>
              <div className="flex flex-wrap gap-3">

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  AI Infrastructure
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Vector Search
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  9 min read
                </span>

              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                Vector Databases
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Without the Jargon
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                How can AI find information that means the same thing even when
                the words are different? The answer starts with embeddings,
                vectors and semantic search.
              </p>

              <a
                href="#how-it-works"
                className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                See How It Works ↓
              </a>
            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Search by Meaning
              </p>

              <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">
                <p className="text-xs font-bold text-cyan-300">
                  USER SEARCH
                </p>

                <p className="mt-2 text-xl font-bold">
                  “employee resignation procedure”
                </p>
              </div>

              <div className="py-4 text-center text-xl text-blue-600">↓</div>

              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <p className="text-xs font-bold text-blue-600">
                  SEMANTIC SEARCH
                </p>

                <p className="mt-2 font-bold">
                  Search for similar meaning
                </p>
              </div>

              <div className="py-4 text-center text-xl text-blue-600">↓</div>

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-lg">
                <p className="text-xs font-bold text-blue-100">
                  RELEVANT RESULT
                </p>

                <p className="mt-2 text-xl font-bold">
                  “Steps to follow when a staff member leaves the organization”
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SIMPLE EXPLANATION */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Start Simple
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Traditional search looks for words. Semantic search can look for
          meaning.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">

          <p>
            Imagine an employee searches a company knowledge base for
            “resignation procedure.” The relevant document may never use those
            exact words. It might instead describe “the process to follow when
            an employee leaves the company.”
          </p>

          <p>
            Exact keyword search can miss that relationship. Semantic search
            attempts to represent the meaning of both the query and the
            document numerically so similar concepts can be retrieved even when
            their wording differs.
          </p>

          <p>
            Embeddings and vector search are technologies commonly used to make
            that possible.
          </p>

        </div>
      </section>

      {/* EMBEDDINGS */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Embedding
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Turn meaning into numbers
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                An embedding model converts content into a numerical vector.
                The vector is designed to capture useful characteristics of the
                input so semantically related content can appear closer in the
                resulting representation space.
              </p>

              <div className="mt-7 rounded-2xl bg-slate-50 p-5 text-center">

                <p className="font-semibold">
                  “annual leave policy”
                </p>

                <p className="my-3 text-blue-600">↓ embedding model ↓</p>

                <p className="font-mono text-sm text-gray-600">
                  [0.18, -0.42, 0.73, ...]
                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">

              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Similarity
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Compare vectors instead of only words
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Once queries and documents have vector representations, the
                system can compare them mathematically and retrieve items whose
                vectors are relatively close.
              </p>

              <div className="mt-7 space-y-3">

                <div className="rounded-xl bg-green-50 p-4">
                  <p className="font-semibold">
                    Vacation entitlement rules
                  </p>
                  <p className="mt-1 text-sm text-green-700">
                    High semantic relevance
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold">
                    Office parking instructions
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Low semantic relevance
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PIPELINE */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Content → Embedding → Index → Search → Retrieve
          </h2>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {concepts.map((item) => (
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

      {/* WHAT IS VECTOR DB */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            So What Is a Vector Database?
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            A system optimized for storing, indexing and retrieving vector
            representations.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            A vector database or vector-capable search system lets applications
            find vectors that are similar to a query vector. It normally also
            stores or references the original content and useful metadata.
          </p>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">

            <div className="grid gap-4 md:grid-cols-3">

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-bold text-blue-600">
                  VECTOR
                </p>

                <p className="mt-3 text-sm text-gray-600">
                  Numerical representation used for similarity search.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-bold text-blue-600">
                  ORIGINAL CONTENT
                </p>

                <p className="mt-3 text-sm text-gray-600">
                  Text, image, document chunk or other source information.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-bold text-blue-600">
                  METADATA
                </p>

                <p className="mt-3 text-sm text-gray-600">
                  Date, source, category, permissions and other filters.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* METADATA */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Semantic Similarity Is Not Enough
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Metadata helps answer “similar—but appropriate for whom and when?”
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          Suppose two policies discuss parental leave. One belongs to India and
          one belongs to the United States. They may be semantically similar,
          but geography matters enormously.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {[
            ["Country", "India"],
            ["Department", "HR"],
            ["Status", "Current"],
            ["Access", "Employee"],
          ].map(([field, value]) => (
            <div
              key={field}
              className="rounded-2xl border border-gray-200 bg-slate-50 p-6"
            >
              <p className="text-sm font-bold text-blue-600">{field}</p>
              <p className="mt-2 text-xl font-bold">{value}</p>
            </div>
          ))}

        </div>

        <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-center text-white">
          <p className="font-bold">
            Semantic relevance + metadata + permissions = much safer retrieval
          </p>
        </div>

      </section>

      {/* HYBRID SEARCH */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Hybrid Search
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Sometimes meaning and exact words both matter
            </h2>

          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">

            <div className="rounded-3xl border border-gray-200 bg-white p-8">

              <span className="text-sm font-bold text-gray-500">
                KEYWORD
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Exact signals
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Excellent for IDs, product codes, exact names, technical terms
                and phrases.
              </p>

            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">

              <span className="text-sm font-bold text-blue-600">
                VECTOR
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Semantic signals
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Useful when conceptually related information may use different
                wording.
              </p>

            </div>

            <div className="rounded-3xl border border-cyan-200 bg-white p-8 shadow-xl">

              <span className="text-sm font-bold text-cyan-700">
                HYBRID
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Combine signals
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Use lexical and semantic retrieval together and optionally
                rerank the candidate results.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ANN */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Why Special Indexes Exist
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Searching every vector one by one does not scale well.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          When an index contains millions or billions of vectors, comparing a
          query against every stored vector can become expensive. Vector search
          systems therefore commonly use approximate nearest-neighbor
          techniques that trade a small amount of exactness for dramatically
          faster retrieval.
        </p>

        <div className="mt-10 grid gap-7 lg:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-8">

            <span className="text-sm font-bold text-gray-500">
              EXACT SEARCH
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Compare everything
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Can provide exact nearest results but may become expensive at
              large scale.
            </p>

          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">

            <span className="text-sm font-bold text-blue-600">
              APPROXIMATE SEARCH
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Search intelligently
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Use specialized indexes to find highly similar candidates much
              more efficiently.
            </p>

          </div>

        </div>

      </section>

      {/* RAG */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Vector Search + RAG
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Where vector search often enters an AI application
          </h2>

          <div className="mt-12 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">

            <div className="grid lg:grid-cols-5">

              {[
                ["1", "Question", "User asks something"],
                ["2", "Embed", "Convert query to vector"],
                ["3", "Retrieve", "Find similar knowledge"],
                ["4", "Augment", "Add evidence to context"],
                ["5", "Generate", "LLM prepares answer"],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="border-b border-gray-100 p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                    {number}
                  </span>

                  <h3 className="mt-4 font-bold">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {text}
                  </p>
                </div>
              ))}

            </div>

          </div>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-gray-600">
            Vector retrieval is one common RAG technique—not the definition of
            RAG itself. A RAG system can use keyword search, structured
            retrieval, hybrid search or other methods depending on the data and
            problem.
          </p>

        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Beyond RAG
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Where vector search can be useful
          </h2>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            >

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* DON'T NEED */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-lg lg:p-12">

            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              You May Not Need One
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Don't add a vector database just because the application uses AI.
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
              If your application primarily needs exact database queries,
              structured filters, keyword search or a small amount of context
              that already fits naturally into the workflow, a dedicated
              vector system may add unnecessary complexity.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {[
                [
                  "Exact lookup",
                  "Employee ID 102864 → use structured lookup.",
                ],
                [
                  "SQL analytics",
                  "Revenue by month → query the data model.",
                ],
                [
                  "Small fixed context",
                  "A short policy can be supplied directly when appropriate.",
                ],
                [
                  "Exact code search",
                  "Known function or error string may benefit from lexical search.",
                ],
              ].map(([title, example]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-slate-50 p-6"
                >
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-gray-600">{example}</p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* MISTAKES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Common Mistakes
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Vector search is only one part of retrieval quality
          </h2>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {mistakes.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            >

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* SIMPLE ARCHITECTURE */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Remember This
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            The vector is not the document
          </h2>

          <div className="mt-12 rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">

            <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">

              <div className="rounded-2xl bg-slate-50 p-6 text-center">
                <p className="text-sm font-bold text-blue-600">
                  ORIGINAL CONTENT
                </p>

                <p className="mt-3 font-semibold">
                  Employee leave policy
                </p>
              </div>

              <div className="text-center text-2xl text-blue-600">→</div>

              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <p className="text-sm font-bold text-blue-600">
                  EMBEDDING
                </p>

                <p className="mt-3 font-mono text-sm">
                  [0.18, -0.42, ...]
                </p>
              </div>

              <div className="text-center text-2xl text-blue-600">→</div>

              <div className="rounded-2xl bg-slate-950 p-6 text-center text-white">
                <p className="text-sm font-bold text-cyan-300">
                  VECTOR INDEX
                </p>

                <p className="mt-3 font-semibold">
                  Find related vectors quickly
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">

        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Key Takeaway
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Vector search helps machines retrieve by similarity—not by magic.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Embeddings turn content into numerical representations. Vector search
          uses those representations to retrieve semantically related
          information. Useful systems combine that capability with good
          chunking, metadata, permissions, hybrid retrieval and evaluation.
        </p>

      </section>

      {/* NEXT */}
      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Final EruDigm Insight
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Technology is changing quickly. Which human skills become more
            valuable?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Next we'll finish this collection with the skills that matter in an
            Agentic AI world—from AI literacy and data thinking to judgment,
            automation design and domain expertise.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/resources/blog/rag-explained"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              ← RAG Explained
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