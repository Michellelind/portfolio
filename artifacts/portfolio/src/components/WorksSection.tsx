import { motion } from "framer-motion";

const works = [
  {
    title: "Automotive Motion",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
    gradient: "bg-gradient-to-br from-blue-900/40 to-slate-900",
  },
  {
    title: "Urban Architecture",
    span: "md:col-span-5",
    aspect: "aspect-[3/4]",
    gradient: "bg-gradient-to-tr from-amber-900/40 to-stone-900",
  },
  {
    title: "Human Perspective",
    span: "md:col-span-5",
    aspect: "aspect-[3/4]",
    gradient: "bg-gradient-to-bl from-zinc-800 to-gray-900",
  },
  {
    title: "Brand Identity",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
    gradient: "bg-gradient-to-tl from-emerald-900/30 to-teal-950",
  }
];

export default function WorksSection() {
  return (
    <section className="py-12 md:py-16 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="mb-12 md:mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-sm text-muted max-w-md">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>
          
          <button className="hidden md:inline-flex relative group rounded-full">
            <span className="absolute inset-[-1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative border border-stroke bg-bg text-text-primary rounded-full px-6 py-2.5 text-sm group-hover:border-transparent transition duration-300">
              View all work →
            </div>
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {works.map((work, i) => (
          <div 
            key={i} 
            className={`relative group overflow-hidden bg-surface border border-stroke rounded-3xl cursor-pointer ${work.span} ${work.aspect}`}
          >
            <div className={`absolute inset-0 ${work.gradient}`} />
            
            <div 
              className="absolute inset-0 opacity-20 mix-blend-multiply"
              style={{
                backgroundImage: 'radial-gradient(circle at center, black 1px, transparent 1px)',
                backgroundSize: '4px 4px'
              }}
            />
            
            <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 flex flex-col justify-end p-8">
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                <div className="relative rounded-full p-[1px] bg-gradient-to-r from-[#89AACC] to-[#4E85BF]">
                  <div className="bg-white rounded-full px-5 py-2 text-black whitespace-nowrap">
                    <span className="text-sm font-medium">View — </span>
                    <span className="font-display italic text-base">{work.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}