import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Testimonials from "@/components/sections/Testimonials";
import Trust from "@/components/sections/Trust";
import Process from "@/components/sections/Process";
import Solutions from "@/components/sections/Solutions";

export default function Home() {
  return (
    <main className="bg-[#06111f]">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Solutions />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Trust />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}