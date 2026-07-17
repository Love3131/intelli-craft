export default function CallToAction() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500">

      <div className="max-w-5xl mx-auto px-8 text-center text-white">

        <span className="uppercase tracking-widest font-semibold">
          Let's Work Together
        </span>

        <h2 className="mt-6 text-5xl font-bold leading-tight">
          Ready To Build Your Next Digital Solution?
        </h2>

        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-8">
          Whether you need a business website, AI automation,
          dashboards or custom software, we're here to help turn
          your ideas into reality.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
            Book Free Consultation
          </button>

          <button className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition">
            View Our Services
          </button>

        </div>

      </div>

    </section>
  );
}