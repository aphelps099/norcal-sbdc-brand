"use client";

import { useEffect, useRef } from "react";

const pills = [
  { title: "Colors", href: "/colors", cat: "visual" },
  { title: "Typography", href: "/typography", cat: "visual" },
  { title: "Logos", href: "/logos", cat: "visual" },
  { title: "Voice & Tone", href: "/voice", cat: "strategy" },
  { title: "Photography", href: "/photography", cat: "strategy" },
  { title: "Content", href: "/content", cat: "strategy" },
  { title: "Success Stories", href: "/stories", cat: "strategy" },
  { title: "Templates", href: "/templates", cat: "tools" },
  { title: "Events", href: "/events", cat: "tools" },
  { title: "Generate", href: "/generate", cat: "tools" },
  { title: "Calendar", href: "/calendar", cat: "tools" },
  { title: "Glossary", href: "/glossary", cat: "tools" },
];

const catColors: Record<string, { border: string; bg: string; shadow: string }> = {
  visual:   { border: "#004290", bg: "#004290", shadow: "rgba(0,66,144,0.45)" },
  strategy: { border: "#A73B44", bg: "#A73B44", shadow: "rgba(167,59,68,0.45)" },
  tools:    { border: "#5684BA", bg: "#5684BA", shadow: "rgba(86,132,186,0.5)" },
};

const legend = [
  { label: "Visual Identity", color: "#004290" },
  { label: "Strategy & Voice", color: "#A73B44" },
  { label: "Tools & Resources", color: "#5684BA" },
];

export default function BrandGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          ".brand-grid-header",
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );

        const pillEls = sectionRef.current!.querySelectorAll<HTMLElement>(".brand-pill");
        pillEls.forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 16, scale: 0.96 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.7, ease: "power3.out",
              delay: i * 0.06,
              scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
            }
          );
        });
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream" id="chapters">
      <div className="max-w-[1080px] mx-auto px-8 sm:px-12" style={{ paddingTop: 90, paddingBottom: 180 }}>
        {/* Header with legend */}
        <div className="brand-grid-header border-t border-navy pt-3.5 flex items-baseline justify-between flex-wrap gap-5">
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.14em] text-navy/55 mb-1.5"
              style={{ fontFamily: "var(--font-wide)", fontWeight: 700 }}
            >
              {pills.length} Chapters
            </p>
            <h2
              className="font-sans text-navy tracking-[-0.01em]"
              style={{ fontSize: 28, fontWeight: 500 }}
            >
              Brand Components
            </h2>
          </div>
          <div className="flex gap-6 items-center flex-wrap">
            {legend.map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <div className="w-[18px] h-[3px] rounded-sm" style={{ backgroundColor: l.color }} />
                <span
                  className="text-[10px] uppercase tracking-[0.1em] text-navy/85"
                  style={{ fontFamily: "var(--font-wide)", fontWeight: 700 }}
                >
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pill cloud */}
        <div className="flex flex-wrap gap-3.5" style={{ marginTop: 90 }}>
          {pills.map((pill) => {
            const cat = catColors[pill.cat];
            return (
              <a
                key={pill.href}
                href={pill.href}
                className="brand-pill inline-flex items-center no-underline whitespace-nowrap leading-none"
                style={{
                  padding: "26px 44px",
                  borderRadius: 999,
                  border: `2px solid ${cat.border}`,
                  fontSize: 26,
                  fontFamily: "var(--sans)",
                  fontWeight: 500,
                  letterSpacing: "-0.008em",
                  color: "#0f1c2e",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = cat.bg;
                  el.style.borderColor = cat.bg;
                  el.style.color = "#ffffff";
                  el.style.transform = "translateY(-3px) scale(1.04)";
                  el.style.boxShadow = `0 12px 28px -12px ${cat.shadow}`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "transparent";
                  el.style.borderColor = cat.border;
                  el.style.color = "#0f1c2e";
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "none";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(0.97)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.04)";
                }}
              >
                {pill.title}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
