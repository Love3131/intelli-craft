"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-slate-900 text-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">
              EruDigm
            </h2>

            <p className="mt-5 text-gray-400 leading-8">
              We build AI-powered software, websites,
              dashboards, automation solutions and digital
              products that help businesses grow faster.
            </p>

          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">

              <li>AI Applications</li>

              <li>Website Development</li>

              <li>Business Automation</li>

              <li>Analytics Dashboards</li>

              <li>Digital Products</li>

            </ul>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">

              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-white transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>

            </ul>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-gray-400">

              <div className="flex items-center gap-3">

                <Mail size={20} />

                <span>
                  erudigm@gmail.com
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Phone size={20} />

                <span>
                  +91 9045023131
                </span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin size={20} />

                <span>
                  India
                </span>

              </div>

            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition"
            >
              Start Project

              <ArrowUpRight size={18} />

            </a>

          </motion.div>

        </div>

        <div className="border-t border-slate-700 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center text-gray-500">

          <p>
            © 2026 EruDigm. All Rights Reserved.
          </p>

          <p className="mt-4 lg:mt-0">
            Building Intelligent Digital Experiences
          </p>

        </div>

      </div>

    </footer>
  );
}