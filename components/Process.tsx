export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your business, challenges and goals before writing a single line of code.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We create clean UI, workflows and architecture focused on user experience and business value.",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Using modern technologies, AI and automation, we build scalable digital solutions.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "We deploy, test and support your solution so it continues delivering value.",
    },
  ];

  return (
    <section id="process"className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Our Process
          </span>

          <h2 className="text-5xl font-bold mt-4">
            How We Work
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Every successful project follows a structured approach that keeps
            communication clear and delivery predictable.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 rounded-3xl border shadow-sm hover:shadow-xl transition hover:-translate-y-2"
            >
              <div className="text-6xl font-extrabold text-blue-100">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}