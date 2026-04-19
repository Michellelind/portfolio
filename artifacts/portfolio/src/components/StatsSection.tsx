import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { prefix: "$", num: 450, suffix: "K", label: "ANNUAL SAVINGS" },
  { prefix: "", num: 80, suffix: "%", label: "ENGAGEMENT LIFT" },
  { prefix: "", num: 27915, suffix: "", label: "SIGNALS SYNTHESIZED", comma: true },
  { prefix: "", num: 3, suffix: "", label: "INDUSTRIES. ONE INSTINCT." }
];

function AnimatedNumber({
  value,
  prefix,
  suffix,
  comma,
}: {
  value: number;
  prefix: string;
  suffix: string;
  comma?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * value);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  const formatted = comma
    ? displayValue.toLocaleString("en-US")
    : String(displayValue);

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-stroke">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center px-4 border-l border-stroke first:border-l-0 md:first:border-l-0"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary">
              <AnimatedNumber
                value={stat.num}
                prefix={stat.prefix}
                suffix={stat.suffix}
                comma={stat.comma}
              />
            </div>
            <div className="text-[10px] md:text-xs text-muted uppercase tracking-[0.2em] mt-3 leading-relaxed">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
