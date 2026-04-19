import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const explorations = [
  { color: "from-blue-600 to-indigo-900", rotate: -2, yPercent: 0 },
  { color: "from-emerald-500 to-teal-800", rotate: 3, yPercent: -20 },
  { color: "from-rose-500 to-pink-800", rotate: 1, yPercent: -40 },
  { color: "from-amber-500 to-orange-800", rotate: -3, yPercent: 10 },
  { color: "from-purple-500 to-violet-800", rotate: 2, yPercent: -30 },
  { color: "from-slate-500 to-gray-800", rotate: -1, yPercent: 20 },
];

export default function ExplorationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the background content
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinRef.current,
        pinSpacing: false,
        start: "top top",
        end: "+=200%"
      });

      // Parallax for items
      const cards = gsap.utils.toArray<HTMLElement>('.explore-card');
      
      cards.forEach((card, i) => {
        const itemData = explorations[i];
        gsap.to(card, {
          yPercent: itemData.yPercent * -1.5,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-[300vh] relative">
      <div ref={pinRef} className="h-screen w-full flex items-center justify-center sticky top-0 z-10 overflow-hidden bg-bg">
        <div className="text-center px-4 max-w-2xl">
          <div className="text-xs text-muted uppercase tracking-[0.3em] mb-6">Explorations</div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary mb-6">
            Visual <span className="font-display italic">playground</span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-md mx-auto">
            A collection of ideas, concepts, and experiments that don't fit anywhere else.
          </p>
          <button className="relative group rounded-full inline-block">
            <span className="absolute inset-[-1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative border border-stroke bg-bg text-text-primary rounded-full px-8 py-3 text-sm group-hover:border-transparent transition duration-300">
              Follow on Dribbble ↗
            </div>
          </button>
        </div>
      </div>

      <div ref={galleryRef} className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none py-[50vh]">
        <div className="grid grid-cols-2 gap-12 md:gap-40 max-w-[1400px] mx-auto px-4 md:px-20 lg:px-40">
          {explorations.map((exp, i) => (
            <div 
              key={i}
              className={`explore-card pointer-events-auto cursor-pointer aspect-square w-full max-w-[320px] bg-surface rounded-2xl overflow-hidden shadow-2xl shadow-black/50 mx-auto ${i % 2 !== 0 ? 'mt-40 md:mt-80' : ''}`}
              style={{ transform: `rotate(${exp.rotate}deg)` }}
              onClick={() => setSelected(i)}
            >
              <div className={`w-full h-full bg-gradient-to-br ${exp.color} opacity-80 hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-bg/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 p-4 text-text-primary hover:text-white bg-surface rounded-full">
              <X size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`w-full max-w-4xl aspect-video rounded-3xl bg-gradient-to-br ${explorations[selected].color} shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}