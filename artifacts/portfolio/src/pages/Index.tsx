import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import JournalSection from "@/components/JournalSection";
import StatsSection from "@/components/StatsSection";
import FooterSection from "@/components/FooterSection";

const HERO_URL = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

let introPlayed = false;

export default function Index() {
  const [isLoading, setIsLoading] = useState(!introPlayed);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  // Initialize and play video only after loading screen is gone
  useEffect(() => {
    if (isLoading) return;
    const video = heroVideoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls({ startPosition: 0 });
      hls.loadSource(HERO_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HERO_URL;
      video.play().catch(() => {});
    }
  }, [isLoading]);

  function handleComplete() {
    introPlayed = true;
    setIsLoading(false);
  }

  return (
    <main className="min-h-screen bg-bg text-text-primary overflow-x-hidden selection:bg-accent selection:text-black">
      {isLoading && <LoadingScreen onComplete={handleComplete} />}

      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        <Navbar />
        <div id="hero" className="scroll-mt-20"><HeroSection videoRef={heroVideoRef} /></div>
        <StatsSection />
        <div id="work" className="scroll-mt-20"><WorksSection /></div>
        <div id="about" className="scroll-mt-20"><JournalSection /></div>
        <div id="contact"><FooterSection /></div>
      </div>
    </main>
  );
}
