import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();

  function goTo(id: string) {
    if (location === "/") {
      scrollTo(id);
    } else {
      navigate("/");
      setTimeout(() => scrollTo(id), 120);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div 
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/20 bg-surface px-2 py-2 transition-all duration-300 shadow-lg shadow-black/30`}
      >
        <Link href="/" className="w-9 h-9 rounded-full relative group cursor-pointer overflow-hidden flex items-center justify-center bg-bg shrink-0">
          <div className="absolute inset-0 rounded-full accent-gradient group-hover:rotate-180 transition-transform duration-500" />
          <div className="absolute inset-[2px] rounded-full bg-bg flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="font-display italic text-[13px] text-text-primary">MK</span>
          </div>
        </Link>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        <div className="flex items-center gap-1">
          <button onClick={() => goTo("hero")} className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary bg-stroke/50 transition">
            Home
          </button>
          <button onClick={() => goTo("work")} className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-muted hover:text-text-primary hover:bg-stroke/50 transition">
            Work
          </button>
          <button onClick={() => goTo("about")} className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-muted hover:text-text-primary hover:bg-stroke/50 transition">
            About
          </button>
        </div>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        <a href="mailto:mlk268@cornell.edu" className="relative group rounded-full shrink-0">
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-surface rounded-full py-1.5 px-4 text-xs sm:text-sm text-text-primary whitespace-nowrap">
            Contact
          </div>
        </a>
      </div>
    </div>
  );
}