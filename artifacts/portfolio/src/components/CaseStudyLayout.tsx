import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";

interface Meta { label: string; value: string; }

interface Props {
  eyebrow: string;
  title: ReactNode;
  meta: Meta[];
  image: string;
  imageAlt: string;
  imageContain?: boolean;
  navItems?: string[];
  children: ReactNode;
}

function slugify(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function SideNav({ items }: { items: string[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = items.map(slugify);
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [items]);

  return (
    <nav className="space-y-4">
      {items.map((label) => {
        const id = slugify(label);
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className={`flex items-start gap-3 text-left transition-colors group w-full ${
              isActive ? "text-text-primary" : "text-muted hover:text-text-primary"
            }`}
          >
            <span
              className={`mt-[7px] w-4 h-px shrink-0 transition-all duration-300 ${
                isActive ? "bg-accent w-6" : "bg-stroke group-hover:bg-muted"
              }`}
            />
            <span className="text-[10px] uppercase tracking-[0.18em] leading-relaxed">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export function CaseSection({ title, id, children }: { title: string; id?: string; children: ReactNode }) {
  return (
    <div id={id ?? slugify(title)} className="mt-12 first:mt-0 scroll-mt-28">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-6 h-px bg-stroke" />
        <span className="text-xs text-muted uppercase tracking-[0.25em]">{title}</span>
      </div>
      {children}
    </div>
  );
}

export function CaseOutcomes({ title, id, children }: { title: string; id?: string; children: ReactNode }) {
  return (
    <div id={id ?? slugify(title)} className="bg-surface border border-stroke rounded-2xl p-6 md:p-8 my-10 scroll-mt-28">
      <span className="text-xs text-muted uppercase tracking-[0.2em] block mb-5">{title}</span>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function CaseOutcomeItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 text-sm text-muted leading-relaxed">
      <span className="text-text-primary shrink-0">—</span>
      <span>{children}</span>
    </div>
  );
}

export function CaseClosing({ children }: { children: ReactNode }) {
  return (
    <p className="font-display italic text-xl md:text-2xl text-text-primary leading-relaxed mt-10">
      {children}
    </p>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-sm md:text-base text-muted leading-relaxed mb-4">{children}</p>;
}

export default function CaseStudyLayout({ eyebrow, title, meta, image, imageAlt, imageContain, navItems, children }: Props) {
  const [, navigate] = useLocation();

  function goBack() {
    navigate("/");
    setTimeout(() => {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      {/* Hero */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-28 md:pt-36 pb-12 border-b border-stroke">
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 text-xs text-muted uppercase tracking-[0.12em] hover:text-text-primary transition-colors mb-10 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
          Back to work
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left: text */}
          <div className="md:col-span-7">
            <p className="text-xs text-muted uppercase tracking-[0.2em] mb-4">{eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary leading-tight mb-6">
              {title}
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {meta.map((m) => (
                <div key={m.label} className="text-xs text-muted uppercase tracking-[0.08em]">
                  {m.label}:{" "}
                  <span className="text-text-primary normal-case tracking-normal">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-stroke bg-surface">
              <img
                src={image}
                alt={imageAlt}
                className={`w-full aspect-[4/3] ${imageContain ? "object-contain p-4" : "object-cover"}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex gap-16">
          {/* Sticky sidebar nav */}
          {navItems && navItems.length > 0 && (
            <aside className="hidden xl:block w-44 shrink-0">
              <div className="sticky top-28">
                <SideNav items={navItems} />
              </div>
            </aside>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0 max-w-[720px] pb-64">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
