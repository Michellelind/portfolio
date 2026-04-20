import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";
import photo from "@assets/photo_edited.png";
import wdLogo from "@assets/wd_logo_1776628426397.jpeg";
import simaLogo from "@assets/sima_logo_1776628985132.png";
import atlasproLogo from "@assets/atlaspro_logo_1776629175950.jpeg";
import servicenowLogo from "@assets/servicenow_1776629347654.jpeg";
import cornellLogo from "@assets/cornell_logo.png";

const companies = [
  { name: "Cornell SC Johnson", logo: cornellLogo },
  { name: "ServiceNow", logo: servicenowLogo },
  { name: "Western Digital", logo: wdLogo },
  { name: "SIMA Agustus", logo: simaLogo },
  { name: "AtlasPro AI", logo: atlasproLogo },
];

const credentials = [
  "MBA CANDIDATE · CORNELL SC JOHNSON",
  "STEM · 2025–2027",
  "PRODUCT & STRATEGY",
];

export default function JournalSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const url = "https://stream.mux.com/02Frj8cyjRV22NvmJKka2RREL02CJjXcErioTkZz3VIjE.m3u8";
    if (Hls.isSupported()) {
      const hls = new Hls({ startPosition: -1 });
      hls.loadSource(url);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">

      {/* Background video — prism centered */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto scale-[1.5]"
        />
        <div className="absolute inset-0 bg-black/65" />
        {/* Fade edges to blend with surrounding sections */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">About</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">

            {/* Photo */}
            <div className="md:col-span-4">
              <div className="[mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
                <img
                  src={photo}
                  alt="Michelle Karnadjaja"
                  className="w-3/4 md:w-full h-full object-contain mx-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-8 flex flex-col justify-center">

              {/* Name */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary leading-[0.95] mb-6">
                Michelle<br />Karnadjaja
              </h2>

              {/* Credential pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="text-[10px] md:text-xs text-white/60 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 tracking-widest uppercase"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* Company logos */}
              <div className="flex items-center gap-3 mb-8">
                {companies.map((co) => (
                  <img
                    key={co.name}
                    src={co.logo}
                    alt={co.name}
                    title={co.name}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                ))}
              </div>

              {/* Bio */}
              <div className="space-y-4 text-sm md:text-base text-muted leading-relaxed mb-8">
                <p>
                  I'm Michelle Karnadjaja, an engineer turned product and strategy thinker, currently doing my MBA at Cornell SC Johnson.
                </p>
                <p>
                  I've worked in firmware validation at Western Digital, built operations from scratch at a 65-year-old AV company in Jakarta, and defined product direction for an early-stage AI startup in San Francisco. Different industries, different scales, the same instinct running through all of it.
                </p>
                <p>
                  I walk into every system asking why it works that way. Not to challenge it — just because I actually want to know. That question has a way of leading somewhere interesting.
                </p>
              </div>

              {/* Closing statement */}
              <p className="font-sans font-bold text-lg md:text-xl text-text-primary leading-relaxed">
                I come in from the outside.<br />
                That's not a gap in my resume —<br />
                it's the whole point.
              </p>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
