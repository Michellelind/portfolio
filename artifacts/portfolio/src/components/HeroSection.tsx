import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";

const rolesPhrases = [
  { pre: "An ", bold: "Engineer", mid: " by ", boldEnd: "training" },
  { pre: "An ", bold: "Outsider", mid: " by ", boldEnd: "instinct" },
  { pre: "A ", bold: "Detective", mid: " by ", boldEnd: "nature" },
  { pre: "A ", bold: "Builder", mid: " by ", boldEnd: "habit" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const url = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";
    if (Hls.isSupported()) {
      const hls = new Hls({ startPosition: -1 });
      hls.loadSource(url);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % rolesPhrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.1 }
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1, ease: "power3.out" },
        "-=0.8"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const phrase = rolesPhrases[roleIndex];

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      {/* PRODUCT & STRATEGY — below navbar */}
      <div className="absolute top-20 md:top-24 left-0 right-0 flex justify-center z-10 pointer-events-none">
        <p className="text-xs text-muted uppercase tracking-[0.3em]">
          PRODUCT &amp; STRATEGY
        </p>
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center px-4 mt-16">

        {/* Text above name — where eyebrow was */}
        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-8 leading-relaxed">
          Most people walk into a system and learn how it works.<br />
          I walk in and ask why.
        </p>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Michelle Karnadjaja
        </h1>

        {/* Full sentence cycling — whole phrase animates */}
        <div className="blur-in mb-6 flex items-center justify-center flex-wrap gap-x-2 gap-y-1 text-lg md:text-xl">
          <span
            key={roleIndex}
            className="animate-role-fade-in inline-flex items-center gap-x-2 flex-wrap justify-center"
          >
            <span className="text-muted">{phrase.pre}</span>
            <span className="font-display italic text-text-primary text-2xl md:text-3xl">{phrase.bold}</span>
            <span className="text-muted">{phrase.mid}</span>
            <span className="font-display italic text-text-primary text-2xl md:text-3xl">{phrase.boldEnd}</span>
          </span>
        </div>

        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12">
          I ask why more than most people are comfortable with — that's where the interesting problems live.
        </p>

        <div className="blur-in flex flex-wrap items-center justify-center gap-4">
          <button className="relative group rounded-full">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-text-primary text-bg rounded-full px-7 py-3.5 text-sm hover:bg-bg hover:text-text-primary transition duration-300 group-hover:scale-105">
              See Works
            </div>
          </button>

          <button className="relative group rounded-full">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative border-2 border-stroke bg-bg text-text-primary rounded-full px-7 py-3.5 text-sm group-hover:border-transparent transition duration-300 group-hover:scale-105">
              Reach out...
            </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[50%] bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
