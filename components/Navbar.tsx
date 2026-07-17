export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <h1 className="text-3xl font-extrabold text-blue-600">
          IntelliCraft
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Services
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Store
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Tutorials
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Contact
          </a>

        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}