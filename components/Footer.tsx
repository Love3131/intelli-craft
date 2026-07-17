export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            IntelliCraft
          </h2>

          <p className="mt-4 text-gray-400">
            Build. Learn. Grow.
            <br />
            AI Solutions, Digital Products and Professional Services.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Website Development</li>
            <li>AI Applications</li>
            <li>Content Writing</li>
            <li>Business Consulting</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>

          <ul className="space-y-2 text-gray-400">
            <li>SQL Tutorials</li>
            <li>Excel Templates</li>
            <li>Prompt Packs</li>
            <li>AI Tools</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-gray-400">
            contact@intellicraft.in
          </p>

          <p className="text-gray-400 mt-2">
            India
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        © 2026 IntelliCraft. All Rights Reserved.
      </div>
    </footer>
  );
}