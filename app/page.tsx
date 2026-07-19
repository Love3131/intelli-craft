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
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <ScrollProgress />
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