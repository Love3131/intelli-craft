"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    review:
      "EruDigm transformed our business with a modern website and automation. Highly recommended.",
  },
  {
    name: "David Miller",
    role: "Startup Founder",
    review:
      "Professional team, fast delivery and outstanding quality. The AI solution exceeded expectations.",
  },
  {
    name: "Emily Brown",
    role: "Marketing Manager",
    review:
      "Our analytics dashboard saves hours every week. Great communication throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Testimonials
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Trusted By Growing Businesses
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We build digital solutions that create real business impact.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-3xl bg-white border p-8 shadow-lg hover:shadow-2xl transition"
            >

              <div className="flex gap-1 mb-6">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}