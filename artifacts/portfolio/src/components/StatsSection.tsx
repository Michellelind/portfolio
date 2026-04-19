import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 20, suffix: "+", label: "Years Experience" },
  { num: 95, suffix: "+", label: "Projects Done" },
  { num: 200, suffix: "%", label: "Satisfied Clients" }
];

function AnimatedNumber({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        setDisplayValue(Math.floor(easeProgress * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-stroke">
        {stats.map((stat, i) => (
          <div key={i} className="text-center pt-12 md:pt-0 first:pt-0">
            <div className="text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary">
              <AnimatedNumber value={stat.num} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-muted uppercase tracking-[0.2em] mt-4">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}