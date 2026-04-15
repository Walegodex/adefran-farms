import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-farm-primary selection:text-white">
      <Header />
      <Hero />
      <About />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}
