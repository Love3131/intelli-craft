"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_new.png"
            alt="IntelliCraft"
            width={220}
            height={55}
            priority
            className="h-auto w-[180px] transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            ["Home", "#home"],
            ["Services", "#services"],
            ["Products", "#products"],
            ["About", "#about"],
            ["Blog", "#"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative text-sm font-medium text-gray-700 transition-all duration-300 hover:text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40">
          Get Started
        </button>
      </div>
    </nav>
  );
}