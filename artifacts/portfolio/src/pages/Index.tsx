import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import JournalSection from "@/components/JournalSection";
import ExplorationsSection from "@/components/ExplorationsSection";
import StatsSection from "@/components/StatsSection";
import FooterSection from "@/components/FooterSection";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-bg text-text-primary overflow-x-hidden selection:bg-accent selection:text-black">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        <Navbar />
        <HeroSection />
        <WorksSection />
        <JournalSection />
        <ExplorationsSection />
        <StatsSection />
        <FooterSection />
      </div>
    </main>
  );
}