import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Achievements from "@/components/sections/Achievements";
import Sponsors from "@/components/sections/Sponsors";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Events />
        <Gallery />
        <Achievements />
        <Sponsors />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
