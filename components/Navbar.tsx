import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_new.png"
            alt=""
            width={220}
            height={55}
            priority     
           />
         </Link>  
        <div>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <a href="#home" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>

          <a href="#products" className="hover:text-blue-600 transition">
            Products
          </a>

          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Blog
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

        </div>

        {/* Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg">
          Get Started
        </button>

      </div>
    </nav>
  );
}