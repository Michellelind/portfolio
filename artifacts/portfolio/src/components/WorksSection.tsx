import { motion } from "framer-motion";
import wdLogo from "@assets/wd_logo_1776628426397.jpeg";
import wdProduct from "@assets/wd_product_1776628871620.png";
import simaLogo from "@assets/sima_logo_1776628985132.png";
import simaProduct from "@assets/sima_product_1776628985132.jpg";
import atlasproLogo from "@assets/atlaspro_logo_1776629175950.jpeg";
import atlasproArtifact from "@assets/atlaspro_artifact_1776629175950.png";
import servicenowLogo from "@assets/servicenow_1776629347654.jpeg";
import cornellProduct from "@assets/cornell_product_1776629347654.png";

interface CaseCard {
  logo: string;
  logoAlt: string;
  company: string;
  title: string;
  description: string;
  tags: string[];
  cta: string;
  image: string;
  imageAlt: string;
  span: string;
  aspect: string;
}

const cards: CaseCard[] = [
  {
    logo: wdLogo,
    logoAlt: "Western Digital logo",
    company: "Western Digital · Milpitas, CA · 2022 – 2024",
    title: "From Personal Frustration to Team Infrastructure",
    description:
      "65 engineers had built their entire working rhythm around a broken workflow. Nobody had named it as a problem yet. I did.",
    tags: ["$450K saved", "30% cycle reduction", "Still running after I left"],
    cta: "Read the Full Story.",
    image: wdProduct,
    imageAlt: "WD Black P10 Game Drive",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    logo: simaLogo,
    logoAlt: "Sima Agustus logo",
    company: "Sima Agustus · Jakarta, Indonesia · 2024 – 2025",
    title: "The Problem Wasn't the Competition",
    description:
      "Sales were declining. Everyone assumed it was pricing. I mapped the customer journey and found the front door was leaking interested customers before price ever became a factor.",
    tags: ["80% Inbound Lift", "100% Leads Routed", "Void Closed"],
    cta: "Read the Full Story.",
    image: simaProduct,
    imageAlt: "Sima Agustus concert",
    span: "md:col-span-5",
    aspect: "aspect-[3/4]",
  },
  {
    logo: atlasproLogo,
    logoAlt: "AtlasPro AI logo",
    company: "AtlasPro AI · San Francisco, CA · 2026 – Present",
    title: "Finding What's Worth Building",
    description:
      "The brief was as open as it gets. Propose what to build next. It needs product-market fit. No scope, no playbook. I designed the entire research methodology from scratch.",
    tags: ["27,915 signals", "80+ clusters mapped", "Features in progress"],
    cta: "Read the Full Story.",
    image: atlasproArtifact,
    imageAlt: "AtlasPro signal cluster map",
    span: "md:col-span-5",
    aspect: "aspect-[3/4]",
  },
  {
    logo: servicenowLogo,
    logoAlt: "ServiceNow logo",
    company: "ServiceNow · Cornell MBA · 2026 – Present",
    title: "The Problem Wasn't the Product",
    description:
      "Slower-than-expected adoption led the market to assume a product problem. Public data across 7,252 records showed a complete absence from the conversations that mattered.",
    tags: ["Research Spotlight"],
    cta: "See the Research.",
    image: cornellProduct,
    imageAlt: "ServiceNow research chart",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
];

function CaseCard({ card }: { card: CaseCard }) {
  return (
    <div
      className={`relative group overflow-hidden bg-surface border border-stroke rounded-3xl cursor-pointer ${card.span} ${card.aspect}`}
      data-testid={`card-project-${card.company.split(" ")[0].toLowerCase()}`}
    >
      {/* Background image */}
      <img
        src={card.image}
        alt={card.imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark gradient overlay — heavier at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/25" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6 md:p-7">

        {/* Top row: logo + company | CTA button */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={card.logo}
              alt={card.logoAlt}
              className="w-7 h-7 rounded-md object-cover shrink-0"
            />
            <span className="text-[10px] md:text-xs text-white/60 leading-tight truncate">
              {card.company}
            </span>
          </div>

          {/* CTA pill — always visible, top right */}
          <a
            href="#"
            className="shrink-0 relative rounded-full p-[1px] bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-80 hover:opacity-100 transition-opacity"
            data-testid={`btn-cta-${card.company.split(" ")[0].toLowerCase()}`}
          >
            <div className="bg-black/80 backdrop-blur-sm rounded-full px-3 py-1.5 text-white whitespace-nowrap">
              <span className="font-display italic text-xs md:text-sm">{card.cta}</span>
            </div>
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom: title, description, tags */}
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-display italic text-white leading-tight mb-2">
            {card.title}
          </h3>
          <p className="text-xs md:text-sm text-white/60 leading-relaxed mb-4 line-clamp-3">
            {card.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] md:text-[11px] text-white/70 border border-white/20 rounded-full px-2.5 py-1 bg-white/5 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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
              A selection of projects I've worked on.
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
        {cards.map((card) => (
          <CaseCard key={card.company} card={card} />
        ))}
      </div>
    </section>
  );
}
