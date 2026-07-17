import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-5xl mx-auto text-center px-8">
        <h2 className="text-5xl font-bold">
          Ready to Build Something Amazing?
        </h2>

        <p className="mt-6 text-xl text-blue-100">
          Let's build your website, AI application or digital product together.
        </p>

        <div className="mt-10">
          <Button
            className="bg-white text-blue-600 hover:bg-gray-100"
            size="lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}