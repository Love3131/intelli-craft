export default function FeaturedProducts() {
  const products = [
    {
      title: "SQL Masterclass",
      price: "₹99",
    },
    {
      title: "Excel Dashboard",
      price: "₹799",
    },
    {
      title: "AI Prompt Pack",
      price: "₹299",
    },
    {
      title: "PM Template Kit",
      price: "₹499",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-xl border p-6"
            >
              <h3 className="text-xl font-bold">
                {product.title}
              </h3>

              <p className="mt-3 text-blue-600 font-semibold">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}