import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}