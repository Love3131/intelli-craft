import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24 text-center">
      <p className="text-blue-600 font-semibold uppercase tracking-widest">
        AI • Websites • Apps • Digital Products
      </p>

      <h1 className="mt-4 text-6xl font-bold tracking-tight">
        Build Smarter with AI
      </h1>

      <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
        We help businesses and professionals build websites, AI applications,
        digital products, tutorials, and business solutions that drive growth.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
         Start Your Project
         </button>

         <button className="border px-6 py-3 rounded-lg ml-4">
          Explore Solutions
        </button>
      </div>
    </section>
  );
}