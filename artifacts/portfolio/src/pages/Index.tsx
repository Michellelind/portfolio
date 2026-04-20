import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import JournalSection from "@/components/JournalSection";
import StatsSection from "@/components/StatsSection";
import FooterSection from "@/components/FooterSection";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-bg text-text-primary overflow-x-hidden selection:bg-accent selection:text-black">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        <Navbar />
        <div id="hero" className="scroll-mt-20"><HeroSection /></div>
        <StatsSection />
        <div id="work" className="scroll-mt-20"><WorksSection /></div>
        <div id="about" className="scroll-mt-20"><JournalSection /></div>
        <div id="contact"><FooterSection /></div>
      </div>
    </main>
  );
}