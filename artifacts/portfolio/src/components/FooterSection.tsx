import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function FooterSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <footer className="pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden relative bg-bg">
      {/* Background video */}
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
        {/* CTA block */}
        <div className="text-center px-4 mb-20">
          {/* "Let's talk." heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-text-primary mb-6 leading-none">
            Let's talk.
          </h2>

          {/* Subtitle */}
          <p className="text-muted text-sm md:text-base mb-10">
            Open to PM and strategy roles, any industry, any scale.
          </p>

          {/* Two buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/michelle-lind-karnadjaja-34b266173/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-full"
              data-testid="btn-linkedin"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-bg border border-stroke group-hover:border-transparent text-text-primary rounded-full px-8 py-4 text-base transition duration-300">
                LinkedIn
              </div>
            </a>

            <a
              href="mailto:mlk268@cornell.edu"
              className="relative group rounded-full"
              data-testid="btn-get-in-touch"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-text-primary text-bg rounded-full px-8 py-4 text-base group-hover:bg-bg group-hover:text-text-primary transition duration-300">
                Get In Touch
              </div>
            </a>
          </div>
        </div>

        {/* Footer bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-stroke/50 pt-8 text-xs text-muted">
          <div>© 2026 Michelle Karnadjaja</div>

          <div className="text-muted tracking-wide">
            Product &amp; Strategy Portfolio
          </div>

        </div>
      </div>
    </footer>
  );
}
