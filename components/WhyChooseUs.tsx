export default function WhyChooseUs() {
  const reasons = [
    {
      number: "9+",
      title: "Years of Experience",
      description: "Professional experience in Project Management and Business Analysis.",
    },
    {
      number: "100%",
      title: "Custom Solutions",
      description: "Every website, app and AI solution is built according to client needs.",
    },
    {
      number: "24/7",
      title: "Support",
      description: "We don't disappear after delivery. We support our clients.",
    },
    {
      number: "AI",
      title: "Powered",
      description: "We leverage Artificial Intelligence to deliver faster and smarter solutions.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Why Choose IntelliCraft?
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            We combine business knowledge with modern technology to create solutions that deliver real value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="text-center border rounded-2xl p-8 hover:shadow-xl transition"
            >
              <h3 className="text-5xl font-bold text-blue-600">
                {item.number}
              </h3>

              <h4 className="mt-5 text-2xl font-semibold">
                {item.title}
              </h4>

              <p className="mt-4 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}