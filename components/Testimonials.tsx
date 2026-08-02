"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Love Gaur",
    role: "Founder, EruDigm",
    image: "👨‍💻",
    review:
      "EruDigm was created to help businesses automate repetitive work, build modern websites, and leverage AI to solve real business problems.",
  },
  {
    name: "Early Access Client",
    role: "Business Owner",
    image: "🚀",
    review:
      "The consultation gave us a clear roadmap for using AI, dashboards and automation to improve our business processes.",
  },
  {
    name: "Beta User",
    role: "Data Professional",
    image: "📊",
    review:
      "I'm excited to use EruDigm's SQL resources, AI prompt library, Excel templates and analytics dashboards as they launch.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="uppercase tracking-widest font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Trusted By Early Supporters
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            EruDigm is currently onboarding its first clients and
            building premium AI solutions, business websites,
            dashboards and digital products.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl bg-white p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="text-6xl">
                {item.image}
              </div>

              <p className="mt-8 text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8 border-t pt-6">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-blue-600 font-medium mt-1">
                  {item.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}