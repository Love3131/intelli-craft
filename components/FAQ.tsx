"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does EruDigm provide?",
    answer:
      "We build AI applications, business websites, dashboards, automation solutions, Excel templates and digital products tailored to business needs.",
  },
  {
    question: "Do you develop custom AI solutions?",
    answer:
      "Yes. We can build AI-powered chatbots, automation workflows, data analysis tools and business applications based on your requirements.",
  },
  {
    question: "Can you build business dashboards?",
    answer:
      "Absolutely. We develop dashboards using Excel, Power BI, Looker Studio and custom web technologies.",
  },
  {
    question: "Do you offer website development?",
    answer:
      "Yes. We build modern, responsive and SEO-friendly business websites using the latest technologies like Next.js and React.",
  },
  {
    question: "How can I contact EruDigm?",
    answer:
      "Simply fill out the contact form on our website and we'll get back to you to discuss your project.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center">

          <span className="uppercase tracking-widest font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Got Questions?
          </h2>

          <p className="mt-6 text-xl text-gray-600">
            Everything you need to know before working with EruDigm.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-2xl bg-white shadow-lg overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="font-bold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}