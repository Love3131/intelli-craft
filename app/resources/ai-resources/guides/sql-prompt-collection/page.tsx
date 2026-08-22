import Link from "next/link";
import CopyPromptButton from "@/components/CopyPromptButton";

const sqlPrompts = [
  {
    category: "Build SQL",
    level: "Core",
    title: "Business Question → SQL",
    description:
      "Turn a business requirement into a query without asking AI to guess your schema.",
    prompt: `Act as a senior SQL analyst.

I need to answer the business question below using SQL.

Before writing the query:

1. Restate the business question.
2. Identify the tables and fields that appear necessary.
3. Identify any missing schema information.
4. State assumptions explicitly.
5. Explain the calculation logic.

Then write the SQL query.

Requirements:
- Use readable aliases.
- Format the SQL clearly.
- Add comments only where useful.
- Do not invent tables or columns.
- If required schema information is missing, tell me before assuming it.
- Explain how I should validate the result.

SQL dialect:
[PostgreSQL / MySQL / SQL Server / BigQuery / Snowflake / Other]

Business question:
[paste question]

Available schema:
[paste tables and columns]`,
  },
  {
    category: "Build SQL",
    level: "Core",
    title: "Business Requirement → Query Plan",
    description:
      "Plan the SQL logic before generating a large or complicated query.",
    prompt: `Act as a senior analytics engineer.

Do not write SQL immediately.

First convert the business requirement below into a query plan.

Return:

1. Business objective
2. Required output fields
3. Required source tables
4. Join relationships
5. Filters
6. Calculated fields
7. Aggregations
8. Required grouping level
9. Edge cases
10. Missing information
11. Validation checks

After the plan, provide the SQL only if enough information is available.

Do not invent schema details.

Requirement:
[paste requirement]

Schema:
[paste schema]

SQL dialect:
[enter dialect]`,
  },
  {
    category: "Debug SQL",
    level: "Essential",
    title: "SQL Error Debugger",
    description:
      "Diagnose a broken query without unnecessarily rewriting everything.",
    prompt: `Act as a senior SQL developer.

Debug the SQL query below.

Preserve the existing business logic unless it is part of the problem.

Return:

1. Exact error or likely issue
2. Why it happens
3. Smallest required correction
4. Corrected SQL
5. Any additional risks you noticed
6. How to test the corrected query

Do not redesign the entire query unless necessary.

SQL dialect:
[enter dialect]

Error message:
[paste exact error]

Query:
[paste SQL]`,
  },
  {
    category: "Debug SQL",
    level: "Essential",
    title: "Wrong Results Investigator",
    description:
      "Use when SQL runs successfully but the numbers do not look right.",
    prompt: `Act as a senior data analyst and SQL reviewer.

The SQL query below runs without an error, but I suspect the result is incorrect.

Investigate possible causes such as:

- incorrect join type,
- one-to-many duplication,
- incorrect aggregation,
- wrong grain,
- missing filters,
- NULL handling,
- duplicate records,
- date filtering,
- CASE logic,
- denominator errors.

Return:

1. Most likely risks
2. Where each risk appears in the query
3. Checks I should run
4. Corrected SQL only where justified
5. A reconciliation approach to validate the final result

Do not assume that a query is correct simply because it executes.

Expected result/business logic:
[paste expectation]

Query:
[paste SQL]`,
  },
  {
    category: "Understand SQL",
    level: "Learning",
    title: "Explain Any SQL Query",
    description:
      "Understand unfamiliar SQL in business language instead of only getting syntax definitions.",
    prompt: `Act as a SQL instructor and data analyst.

Explain the SQL query below to someone who understands basic SQL but did not write this query.

Explain:

1. Overall purpose
2. Source tables
3. Join logic
4. Filters
5. Calculations
6. Aggregations
7. CTEs or subqueries
8. Window functions
9. Final output grain
10. Potential risks or assumptions

Then explain the query in plain business language.

Finally, suggest one small practice exercise based on the query.

Query:
[paste SQL]`,
  },
  {
    category: "Understand SQL",
    level: "Learning",
    title: "SQL Concept Tutor",
    description:
      "Learn a SQL concept through explanation, examples and practice rather than memorization.",
    prompt: `Act as a practical SQL instructor.

Teach me the following SQL concept:

[enter concept]

Use this structure:

1. Simple explanation
2. When it is useful
3. Basic syntax
4. Simple example
5. Real business example
6. Common mistake
7. Interview-style question
8. Practice exercise
9. Solution with explanation

Assume my current SQL level is:
[Beginner / Intermediate / Advanced]

Use:
[SQL dialect]`,
  },
  {
    category: "Optimize SQL",
    level: "Advanced",
    title: "Query Performance Reviewer",
    description:
      "Review a slow query while preserving the business result it is supposed to produce.",
    prompt: `Act as a senior SQL performance engineer.

Review the query below for potential performance improvements.

Do not change the intended business result.

Evaluate:

- unnecessary scans,
- inefficient joins,
- repeated calculations,
- unnecessary DISTINCT,
- expensive subqueries,
- filter placement,
- CTE usage,
- aggregation strategy,
- index or partition opportunities where relevant,
- unnecessary selected columns.

Return:

1. Performance concerns
2. Why each may matter
3. Recommended changes ranked by likely impact
4. Optimized SQL
5. Any trade-offs
6. How to confirm that the optimized query returns the same result

SQL dialect/platform:
[enter platform]

Query:
[paste SQL]`,
  },
  {
    category: "Validate SQL",
    level: "Critical",
    title: "SQL Quality Reviewer",
    description:
      "Perform a structured quality check before using query results in a report or dashboard.",
    prompt: `Act as a senior analytics reviewer.

Review the SQL below before its output is used for business reporting.

Check:

1. Query grain
2. Join cardinality
3. Duplicate risk
4. NULL handling
5. Date logic
6. Filters
7. Aggregations
8. CASE expressions
9. Numerator and denominator logic
10. Potential divide-by-zero issues
11. Hard-coded values
12. Business-rule assumptions

Return a table with:

Check | Status | Risk | Recommended Validation

Then provide:

Critical Issues
Recommended Test Queries
Overall Confidence
Information Still Needed

Do not certify the query as correct if the available information is insufficient.

Business definition:
[paste business definition]

Query:
[paste SQL]`,
  },
  {
    category: "Validate SQL",
    level: "Critical",
    title: "Source vs Output Reconciliation",
    description:
      "Create validation checks when a query feeds a dashboard, report or transformed dataset.",
    prompt: `Act as a data quality analyst.

Design a reconciliation plan for the SQL transformation below.

I need to confirm that the destination correctly represents the source.

Recommend checks for:

- row counts,
- distinct business keys,
- totals,
- NULL values,
- duplicate keys,
- excluded records,
- date coverage,
- category coverage,
- joins,
- calculated fields.

Return:

1. Reconciliation checklist
2. SQL test query for each important check
3. Expected interpretation
4. Failure condition
5. Recommended investigation if the check fails

Source information:
[paste source]

Destination/output:
[paste destination]

Transformation SQL:
[paste SQL]`,
  },
  {
    category: "Analytics SQL",
    level: "Practical",
    title: "KPI SQL Builder",
    description:
      "Translate a KPI definition into SQL while protecting the business logic.",
    prompt: `Act as a senior analytics engineer.

Help me implement the KPI below in SQL.

First document:

KPI Name
Business Definition
Numerator
Denominator
Grain
Date Logic
Required Filters
Exclusions
NULL Handling
Edge Cases
Required Tables
Missing Information

Then write the SQL.

After the query, provide validation checks using a small example or reconciliation logic.

Do not invent a KPI definition that was not provided.

KPI:
[paste KPI definition]

Schema:
[paste schema]

SQL dialect:
[enter dialect]`,
  },
  {
    category: "Analytics SQL",
    level: "Practical",
    title: "Window Function Builder",
    description:
      "Build ranking, running-total, comparison or period-over-period SQL using window functions.",
    prompt: `Act as an advanced SQL analyst.

I need to solve the analytical requirement below using SQL window functions where appropriate.

First determine whether a window function is actually the right solution.

If yes, explain:

1. Required partition
2. Required ordering
3. Appropriate window function
4. Expected grain
5. Important edge cases

Then provide:
- SQL query
- explanation
- sample expected output
- validation check

Requirement:
[paste requirement]

Schema:
[paste schema]

SQL dialect:
[enter dialect]`,
  },
  {
    category: "Analytics SQL",
    level: "Practical",
    title: "Period-over-Period Analysis",
    description:
      "Generate SQL for month-over-month, year-over-year or previous-period comparisons.",
    prompt: `Act as a senior analytics engineer.

Create SQL for the period comparison below.

Requirement:
[paste business requirement]

Comparison:
[Month over Month / Year over Year / Previous Period / Custom]

Metric:
[enter metric]

Before writing SQL, confirm:

- date grain,
- metric grain,
- comparison period,
- handling of missing periods,
- handling of zero previous values.

Return:

1. Calculation logic
2. SQL
3. Validation checks
4. Important edge cases
5. Recommended output fields

Schema:
[paste schema]

SQL dialect:
[enter dialect]`,
  },
  {
    category: "Interview & Practice",
    level: "Practice",
    title: "SQL Interview Coach",
    description:
      "Practice SQL through one question at a time with feedback instead of immediately seeing the answer.",
    prompt: `Act as a SQL interview coach.

My level is:
[Beginner / Intermediate / Advanced]

Target role:
[Data Analyst / Business Analyst / Analytics Engineer / Other]

SQL dialect:
[enter dialect]

Give me ONE SQL interview problem at a time.

For each problem:

1. Provide a small schema.
2. Explain the business requirement.
3. Wait for my answer.
4. Review my query.
5. Identify correctness issues.
6. Suggest improvements.
7. Explain the ideal approach.
8. Give the final solution only after I attempt it.
9. Increase difficulty gradually.

Start with the first question.`,
  },
  {
    category: "Interview & Practice",
    level: "Practice",
    title: "SQL Practice Generator",
    description:
      "Create realistic practice problems around the SQL concepts you want to improve.",
    prompt: `Act as a SQL learning coach.

Create 5 realistic SQL practice problems for:

Topics:
[paste topics]

Difficulty:
[Beginner / Intermediate / Advanced]

For each problem provide:

1. Business scenario
2. Table schema
3. Sample records
4. Requirement
5. Expected output structure

Do NOT provide the solution immediately.

After I submit my answer, review it for:
- correctness,
- efficiency,
- readability,
- edge cases.

Then provide the recommended solution and explanation.

SQL dialect:
[enter dialect]`,
  },
];

const categories = [
  "Build SQL",
  "Debug SQL",
  "Understand SQL",
  "Optimize SQL",
  "Validate SQL",
  "Analytics SQL",
  "Interview & Practice",
];

const workflow = [
  {
    number: "01",
    title: "Define",
    text: "Start with the business question and expected output.",
  },
  {
    number: "02",
    title: "Provide",
    text: "Give AI the real schema, SQL dialect and relevant business rules.",
  },
  {
    number: "03",
    title: "Generate",
    text: "Use AI to plan, explain or draft the query.",
  },
  {
    number: "04",
    title: "Validate",
    text: "Check grain, joins, totals, duplicates, NULLs and edge cases.",
  },
  {
    number: "05",
    title: "Trust",
    text: "Use the result only after the query and output have been verified.",
  },
];

export default function SQLPromptCollectionPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

          <div>
            <Link
              href="/resources/ai-resources"
              className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              ← Back to AI Resources
            </Link>

            <div className="mt-8">
              <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                EruDigm SQL + AI Workbench
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              SQL Prompt
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Collection
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Use AI more effectively across the complete SQL workflow —
              planning queries, writing SQL, debugging errors, validating
              results, optimizing performance and building your SQL skills.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                {sqlPrompts.length} SQL Prompts
              </span>

              <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                {categories.length} Workflows
              </span>

              <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                Copy Ready
              </span>

              <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                Validation Focused
              </span>
            </div>

            <a
              href="#sql-library"
              className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Open SQL Workbench ↓
            </a>
          </div>

          {/* SQL WORKBENCH PREVIEW */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">

              <div className="flex items-center justify-between border-b border-gray-100 px-7 py-5">
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    EruDigm SQL Workbench
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    Query Assistant
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                  SQL
                </div>
              </div>

              <div className="bg-slate-950 p-7 font-mono text-sm leading-7 text-slate-200">
                <p>
                  <span className="text-cyan-300">SELECT</span>{" "}
                  customer_id,
                </p>

                <p className="pl-8">
                  <span className="text-cyan-300">SUM</span>(revenue){" "}
                  <span className="text-cyan-300">AS</span> total_revenue
                </p>

                <p>
                  <span className="text-cyan-300">FROM</span> sales
                </p>

                <p>
                  <span className="text-cyan-300">WHERE</span> order_date
                  &gt;= ...
                </p>

                <p>
                  <span className="text-cyan-300">GROUP BY</span> customer_id;
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-7">
                {[
                  ["Build", "Business → SQL"],
                  ["Debug", "Find the issue"],
                  ["Validate", "Check results"],
                  ["Learn", "Understand why"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-gray-100 bg-slate-50 p-4"
                  >
                    <p className="font-bold text-blue-600">{title}</p>
                    <p className="mt-1 text-sm text-gray-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mx-7 mb-7 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white">
                <p className="text-sm text-blue-100">Golden Rule</p>
                <p className="mt-1 font-semibold">
                  Generated SQL is a draft until validated.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* GOLDEN RULE */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              SQL + AI
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              AI can help write SQL. It cannot understand your data model
              unless you explain it.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              A syntactically valid query can still return completely wrong
              business results. AI needs the real schema, business definition,
              expected grain and SQL dialect — and the final output still
              needs validation.
            </p>
          </div>

          <div className="rounded-3xl border border-red-100 bg-red-50 p-8">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Never Assume
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Query executed successfully ≠ query is correct.
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Wrong joins, duplicate rows, incorrect grain, bad denominators
              and date logic can produce believable but incorrect numbers.
            </p>
          </div>

        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              EruDigm SQL Workflow
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              From business question to trusted result.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {workflow.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="border-b border-gray-100 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

          <p className="mb-5 text-center text-sm font-bold uppercase tracking-widest text-gray-500">
            Jump To
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category
                  .toLowerCase()
                  .replace(/&/g, "and")
                  .replace(/\s+/g, "-")}`}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                {category}
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* SQL LIBRARY */}
      <section
        id="sql-library"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >

        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            SQL Prompt Library
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Choose the SQL job you need AI to help with.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Copy the prompt, provide your real schema and business context,
            then validate the result before using it.
          </p>
        </div>

        {categories.map((category) => {
          const categoryPrompts = sqlPrompts.filter(
            (item) => item.category === category
          );

          const categoryId = category
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/\s+/g, "-");

          return (
            <div
              key={category}
              id={categoryId}
              className="mb-20 scroll-mt-10 last:mb-0"
            >

              <div className="mb-8 flex flex-col gap-3 border-b border-gray-200 pb-5 sm:flex-row sm:items-end sm:justify-between">

                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    SQL Workbench
                  </span>

                  <h2 className="mt-2 text-3xl font-bold">
                    {category}
                  </h2>
                </div>

                <span className="text-sm font-semibold text-gray-500">
                  {categoryPrompts.length} prompts
                </span>

              </div>

              <div className="grid gap-7 lg:grid-cols-2">

                {categoryPrompts.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
                  >

                    <div className="flex items-start justify-between gap-5">

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-bold text-blue-600">
                            {item.category}
                          </span>

                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-gray-500">
                            {item.level}
                          </span>
                        </div>

                        <h3 className="mt-3 text-2xl font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-3 leading-7 text-gray-600">
                          {item.description}
                        </p>
                      </div>

                      <CopyPromptButton text={item.prompt} />

                    </div>

                    <div className="mt-6 max-h-80 overflow-y-auto whitespace-pre-line rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-gray-700">
                      {item.prompt}
                    </div>

                  </div>
                ))}

              </div>

            </div>
          );
        })}

      </section>

      {/* VALIDATION CHECKLIST */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl lg:p-12">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Before You Trust The Result
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              The 8-point SQL validation checklist.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Use this before a generated query feeds a dashboard, report,
              business decision or automated workflow.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {[
                "Confirm the output grain.",
                "Check join cardinality and duplicate risk.",
                "Reconcile row counts and important totals.",
                "Review NULL and missing-value behavior.",
                "Verify date boundaries and time periods.",
                "Test numerator and denominator logic.",
                "Check edge cases and zero values.",
                "Compare sample records back to the source.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <p className="pt-1 font-semibold text-gray-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* PRACTICE PATH */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl lg:p-14">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                Improve Your SQL
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Use AI as a coach, not an answer machine.
              </h2>

              <p className="mt-5 leading-7 text-blue-50">
                The fastest route to stronger SQL skills is still understanding
                why the query works.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-slate-900 shadow-lg">

              <ol className="space-y-5">

                {[
                  "Try the SQL problem yourself.",
                  "Ask AI to review your query.",
                  "Understand every correction.",
                  "Test the result against sample data.",
                  "Rewrite the query without copying.",
                ].map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="font-bold text-blue-600">
                      {index + 1}.
                    </span>

                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}

              </ol>

            </div>

          </div>

        </div>
      </section>

      {/* FINAL */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            EruDigm SQL + AI
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Generate faster. Understand the logic. Validate everything.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            AI can make SQL work faster, but reliable analytics still depends
            on understanding your data, business rules and query logic. Use AI
            to accelerate your thinking — not replace validation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/resources/ai-resources"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Explore AI Resources
            </Link>

            <Link
              href="/resources/ai-resources/guides/business-prompt-library"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              Business Prompt Library
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}