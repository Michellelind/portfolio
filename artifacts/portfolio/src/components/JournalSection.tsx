import { motion } from "framer-motion";

const entries = [
  {
    title: "The Future of Motion Design",
    time: "4 min read",
    date: "Mar 12, 2026",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Typography as a Design System",
    time: "6 min read",
    date: "Feb 28, 2026",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Building with Constraints",
    time: "3 min read",
    date: "Feb 14, 2026",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "The Art of Simplicity",
    time: "5 min read",
    date: "Jan 30, 2026",
    color: "from-rose-500/20 to-red-500/20"
  }
];

export default function JournalSection() {
  return (
    <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="mb-12 md:mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">About</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary">
          Recent <span className="font-display italic">thoughts</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4">
        {entries.map((entry, i) => (
          <motion.button 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-[40px] flex items-center gap-4 md:gap-6 p-3 md:p-4 bg-surface/30 hover:bg-surface border border-stroke transition-all w-full text-left"
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${entry.color} shrink-0`} />
            
            <div className="flex-1 min-w-0 pr-4">
              <h3 className="text-sm md:text-base font-medium text-text-primary truncate">
                {entry.title}
              </h3>
              <p className="text-xs text-muted mt-1">
                {entry.time}
              </p>
            </div>
            
            <div className="text-xs text-muted ml-auto pr-4 hidden sm:block whitespace-nowrap">
              {entry.date}
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}