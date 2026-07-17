export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description:
        "Modern, fast and responsive websites tailored for your business.",
    },
    {
      icon: "🤖",
      title: "AI Applications",
      description:
        "Custom AI tools, chatbots and intelligent business solutions.",
    },
    {
      icon: "📦",
      title: "Digital Products",
      description:
        "Templates, dashboards, prompt packs and productivity resources.",
    },
    {
      icon: "🎓",
      title: "Learning Hub",
      description:
        "SQL, Excel, AI, Power BI and Project Management tutorials.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            What We Do
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Helping individuals and businesses grow using technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
            >

              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}