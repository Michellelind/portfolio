import { motion } from "framer-motion";
import photo from "@assets/photo_edited.png";
import wdLogo from "@assets/wd_logo_1776628426397.jpeg";
import simaLogo from "@assets/sima_logo_1776628985132.png";
import atlasproLogo from "@assets/atlaspro_logo_1776629175950.jpeg";
import servicenowLogo from "@assets/servicenow_1776629347654.jpeg";

const companies = [
  { name: "Cornell SC Johnson", logo: null, initial: "C" },
  { name: "ServiceNow", logo: servicenowLogo, initial: null },
  { name: "Western Digital", logo: wdLogo, initial: null },
  { name: "SIMA Agustus", logo: simaLogo, initial: null },
  { name: "AtlasPro AI", logo: atlasproLogo, initial: null },
];

const credentials = [
  "MBA CANDIDATE · CORNELL SC JOHNSON",
  "STEM · 2025–2027",
  "PRODUCT & STRATEGY",
];

export default function JournalSection() {
  return (
    <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
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
            <div className="rounded-3xl overflow-hidden border border-stroke shadow-2xl shadow-black/40">
              <img
                src={photo}
                alt="Michelle Karnadjaja"
                className="w-full h-full object-cover object-top"
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

            {/* Company logos strip */}
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 mb-8 w-fit">
              {companies.map((co) =>
                co.logo ? (
                  <img
                    key={co.name}
                    src={co.logo}
                    alt={co.name}
                    title={co.name}
                    className="w-7 h-7 rounded-md object-cover"
                  />
                ) : (
                  <div
                    key={co.name}
                    title={co.name}
                    className="w-7 h-7 rounded-md bg-white/10 border border-white/10 flex items-center justify-center text-[11px] font-display italic text-white/70"
                  >
                    {co.initial}
                  </div>
                )
              )}
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

            {/* Closing quote */}
            <div className="border-l-2 border-white/20 pl-5 bg-white/5 backdrop-blur-sm rounded-r-2xl py-4 pr-4">
              <p className="font-display italic text-lg md:text-xl text-text-primary leading-relaxed">
                I come in from the outside.<br />
                That's not a gap in my resume —<br />
                it's the whole point.
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
