import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProducts />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}