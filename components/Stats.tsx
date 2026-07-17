export default function Stats() {
  const stats = [
    { number: "9+", label: "Years Experience" },
    { number: "50+", label: "Projects Delivered" },
    { number: "100+", label: "Templates & Resources" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item) => (
            <div key={item.label}>
              <h2 className="text-4xl font-bold">{item.number}</h2>
              <p className="mt-2 text-blue-100">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}