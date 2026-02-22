import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardGallery from "@/components/CardGallery";
import JourneySection from "@/components/JourneySection";
import TechSection from "@/components/TechSection";
import DemoSection from "@/components/DemoSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="beasts"><CardGallery /></div>
      <div id="journey"><JourneySection /></div>
      <div id="techno"><TechSection /></div>
      <div id="demo"><DemoSection /></div>
      <div id="team"><TeamSection /></div>
      <Footer />
    </main>
  );
}
