"use client";

import { useEffect, useRef } from "react";

const brandItems = [
  { title: "Colors", description: "Palette, tints, accessible pairings.", href: "/colors", icon: "palette", accent: "#1D5AA7" },
  { title: "Typography", description: "Proxima Nova + Roboto Mono type system.", href: "/typography", icon: "text_fields", accent: "#004290" },
  { title: "Logos", description: "Suite, lockups, clear space rules.", href: "/logos", icon: "branding_watermark", accent: "#0f1c2e" },
  { title: "Voice & Tone", description: "Personality and messaging framework.", href: "/voice", icon: "record_voice_over", accent: "#A73B44" },
  { title: "Photography", description: "Style, treatments, composition.", href: "/photography", icon: "photo_camera", accent: "#2B3035" },
  { title: "Templates", description: "Signatures, copy blocks, decks.", href: "/templates", icon: "dashboard", accent: "#0f1c2e" },
  { title: "Content", description: "Social media and newsletter guidelines.", href: "/content", icon: "article", accent: "#00685E" },
  { title: "Stories", description: "Client success stories.", href: "/stories", icon: "auto_stories", accent: "#A73B44" },
  { title: "Generate", description: "AI-powered on-brand content.", href: "/generate", icon: "auto_awesome", accent: "#1D5AA7" },
  { title: "Calendar", description: "Key dates and campaign themes.", href: "/calendar", icon: "calendar_month", accent: "#004290" },
  { title: "Glossary", description: "Terms and definitions.", href: "/glossary", icon: "menu_book", accent: "#2B3035" },
];

export default function BrandGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

        const cards = sectionRef.current!.querySelectorAll<HTMLElement>(".brand-card");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 24 },
            {
              opacity: 1, y: 0,
              duration: 0.7, ease: "power3.out",
              delay: i * 0.04,
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
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 py-20 sm:py-28">
        {/* Header */}
        <div className="brand-grid-header mb-12 sm:mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-navy/30 mb-3">
            {brandItems.length} Chapters
          </p>
          <h2
            className="font-sans text-navy leading-[1.08] tracking-[-0.03em]"
            style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 500 }}
          >
            Brand Components
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {brandItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="brand-card group relative overflow-hidden rounded-xl bg-white p-7 sm:p-8 no-underline transition-all duration-300 hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-0.5"
            >
              {/* Oversized icon — cropped bg accent */}
              <span
                className="material-symbols-outlined absolute -right-4 -bottom-4 pointer-events-none select-none text-navy/[0.04] group-hover:text-navy/[0.07] transition-colors duration-500"
                style={{
                  fontSize: "160px",
                  fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 48",
                }}
                aria-hidden="true"
              >
                {item.icon}
              </span>

              {/* Content */}
              <div className="relative z-10">
                {/* Accent dot */}
                <div
                  className="w-2 h-2 rounded-full mb-5 transition-transform duration-300 group-hover:scale-125"
                  style={{ backgroundColor: item.accent }}
                />

                <h3
                  className="font-sans text-navy tracking-[-0.02em] leading-[1.15] group-hover:text-royal transition-colors duration-300"
                  style={{ fontSize: "1.2rem", fontWeight: 500 }}
                >
                  {item.title}
                </h3>

                <p className="font-sans text-[13px] text-navy/45 leading-[1.5] mt-2">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
