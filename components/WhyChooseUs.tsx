export default function WhyChooseUs() {
  const features = [
    {
      title: "Business First",
      description:
        "We focus on solving business problems, not just writing code.",
      icon: "🎯",
    },
    {
      title: "Modern Technology",
      description:
        "AI, automation and modern web technologies for scalable solutions.",
      icon: "⚡",
    },
    {
      title: "Reliable Delivery",
      description:
        "Clear communication, timely delivery and long-term support.",
      icon: "🤝",
    },
    {
      title: "Data Driven",
      description:
        "Dashboards and analytics that help businesses make better decisions.",
      icon: "📊",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Why EruDigm
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Why Clients Choose Us
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technology, business understanding and AI to build
            practical digital solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}