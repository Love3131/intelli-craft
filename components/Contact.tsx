"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  useEffect(() => {
  const updateProductSubject = () => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");

    if (product) {
      setForm((currentForm) => ({
        ...currentForm,
        subject: `${product} Enquiry`,
      }));
    }
  };

  updateProductSubject();

  window.addEventListener("popstate", updateProductSubject);

  return () => {
    window.removeEventListener("popstate", updateProductSubject);
  };
}, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Unable to send message.");
    }

    setSuccess(
      "Thank you! Your message has been sent successfully. We'll get back to you soon."
    );

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    setSuccess(
      "Sorry, we couldn't send your message. Please email us directly at Erudigm@gmail.com."
    );
  } finally {
    setLoading(false);
  }
 };

  return (
    <section id="contact" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Have an idea? We'd love to hear about it.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 mt-20">

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                  <Mail />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    erudigm@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                  <Phone />
                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +91 9045023131
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                  <MapPin />
                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Location
                  </h3>

                  <p className="text-gray-600">
                    India
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border p-8 shadow-xl space-y-5 bg-white"
          >

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
            />

            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-700 transition flex justify-center items-center gap-2 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}

              <Send size={18} />

            </button>

            {success && (
              <div className="rounded-xl bg-green-100 border border-green-300 p-4 text-green-700">
                {success}
              </div>
            )}

          </motion.form>

        </div>

      </div>

    </section>
  );
}