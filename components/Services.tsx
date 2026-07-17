import {
  Bot,
  Globe,
  BarChart3,
  Zap,
  GraduationCap,
  ShoppingBag,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "AI Applications",
      description:
        "Custom AI tools, chatbots, automation and intelligent business workflows.",
      icon: Bot,
    },
    {
      title: "Website Development",
      description:
        "Fast, responsive and SEO optimized business websites built with modern technologies.",
      icon: Globe,
    },
    {
      title: "Analytics Dashboards",
      description:
        "Interactive dashboards using Looker Studio, Power BI, Google Sheets and Excel.",
      icon: BarChart3,
    },
    {
      title: "Process Automation",
      description:
        "Automate repetitive work using Apps Script, APIs and AI integrations.",
      icon: Zap,
    },
    {
      title: "Tutorials & Courses",
      description:
        "Learn AI, SQL, Excel, Prompt Engineering and business analytics through practical content.",
      icon: GraduationCap,
    },
    {
      title: "Digital Products",
      description:
        "Ready-to-use templates, prompts, dashboards and productivity tools for professionals.",
      icon: ShoppingBag,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Everything You Need To Grow Digitally
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            From AI automation to business dashboards, we build modern
            digital solutions that save time and increase productivity.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">

                <service.icon className="w-8 h-8 text-blue-600" />

              </div>

              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}