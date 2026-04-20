import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  { text: "Most people walk into a system", bold: null },
  { text: "and learn how it works.", bold: null },
  { text: "I walk in and ask why.", bold: "why" },
];

// Phrase 1+2: 2700ms each, Phrase 3: 3700ms (+1 extra second)
const TIMINGS = [0, 2700, 5400];
const TOTAL_DURATION = 5400 + 3700; // 9100ms

function PhraseText({ text, bold }: { text: string; bold: string | null }) {
  if (!bold) return <>{text}</>;
  const parts = text.split(bold);
  return (
    <>
      {parts[0]}
      <span className="font-bold not-italic">{bold}</span>
      {parts[1]}
    </>
  );
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min((progress / TOTAL_DURATION) * 100, 100);
      setCount(Math.floor(percentage));

      if (progress < TOTAL_DURATION) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => onComplete(), 400);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [onComplete]);

  useEffect(() => {
    const timeouts = TIMINGS.map((delay, i) =>
      setTimeout(() => setPhraseIndex(i), delay)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-12"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      <div className="flex-1 flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={phraseIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display italic text-text-primary/80 text-center max-w-3xl leading-tight"
          >
            <PhraseText text={phrases[phraseIndex].text} bold={phrases[phraseIndex].bold} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-right">
          <span className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
            {String(count).padStart(3, "0")}
          </span>
        </div>
        <div className="h-[3px] bg-stroke/50 w-full overflow-hidden">
          <div
            className="h-full accent-gradient transition-all duration-75"
            style={{ width: `${count}%`, boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
