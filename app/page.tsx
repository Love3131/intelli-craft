import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProducts />
      <Process />
      <WhyChooseUs />       
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}