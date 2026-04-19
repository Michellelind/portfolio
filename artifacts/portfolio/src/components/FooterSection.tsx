import { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";

export default function FooterSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

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
    if (!marqueeRef.current) return;
    
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 40,
      repeat: -1
    });
  }, []);

  return (
    <footer className="pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden relative bg-bg">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="w-full overflow-hidden flex whitespace-nowrap mb-24 pointer-events-none">
          <div ref={marqueeRef} className="flex gap-4 text-stroke uppercase text-4xl md:text-6xl font-display italic">
            {[...Array(10)].map((_, i) => (
              <span key={i}>BUILDING THE FUTURE • </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center px-4 mb-24">
          <p className="text-muted mb-6">Ready to build something?</p>
          <a 
            href="mailto:hello@michaelsmith.com"
            className="inline-block relative group rounded-full"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-bg border border-stroke group-hover:border-transparent text-text-primary rounded-full px-8 py-4 text-lg md:text-xl font-display italic transition duration-300">
              hello@michaelsmith.com ↗
            </div>
          </a>
        </div>

        {/* Footer Bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-stroke/50 pt-8 text-xs text-muted">
          <div>© 2026 Michael Smith</div>
          
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map((social) => (
              <a key={social} href="#" className="hover:text-text-primary transition-colors">
                {social}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-surface/50 border border-stroke/50 rounded-full px-3 py-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Available for projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}