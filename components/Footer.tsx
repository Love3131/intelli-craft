import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company */}

        <div>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-xl font-bold">
              I
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                IntelliCraft
              </h2>

              <p className="text-gray-400 text-sm">
                Build. Learn. Grow.
              </p>

            </div>

          </div>

          <p className="mt-6 text-gray-400 leading-7">
            We build AI solutions, business websites, dashboards,
            automation and digital products for modern businesses.
          </p>

        </div>

        {/* Services */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-white cursor-pointer">
              AI Applications
            </li>

            <li className="hover:text-white cursor-pointer">
              Website Development
            </li>

            <li className="hover:text-white cursor-pointer">
              Analytics Dashboards
            </li>

            <li className="hover:text-white cursor-pointer">
              Process Automation
            </li>

          </ul>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-white cursor-pointer">
              Home
            </li>

            <li className="hover:text-white cursor-pointer">
              Services
            </li>

            <li className="hover:text-white cursor-pointer">
              Products
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Contact
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-3 text-gray-400">

              <Mail className="w-5 h-5 text-blue-500" />

              <span>
                contact@intellicraft.in
              </span>

            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>
            © 2026 IntelliCraft. All rights reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Built with Next.js & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}