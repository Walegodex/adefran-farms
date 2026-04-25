import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Values from "@/components/Values";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full overflow-x-hidden bg-background text-foreground flex flex-col font-sans selection:bg-farm-primary selection:text-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Values />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
