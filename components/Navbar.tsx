"use client";

import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "#home", external: false },
  { label: "Services", href: "#services", external: false },
  { label: "Products", href: "#products", external: false },
  { label: "Resources", href: "/resources", external: true },
  { label: "Contact", href: "#contact", external: false },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_new.png"
            alt="EruDigm"
            width={220}
            height={55}
            priority
            className="h-auto w-[170px] lg:w-[190px] transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) =>
            item.external ? (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Get Started
        </a>

      </div>
    </nav>
  );
}