export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="border rounded-xl p-6">
            <h3 className="font-bold">Rahul Sharma</h3>
            <p className="text-gray-600 mt-2">
              Excellent website and AI solutions.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold">Priya Mehta</h3>
            <p className="text-gray-600 mt-2">
              Professional service and quick delivery.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold">Amit Verma</h3>
            <p className="text-gray-600 mt-2">
              Highly recommended.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}