"use client";

import { useEffect, useRef } from "react";

/* ───────────────────────────────────────────
   DATA — same items, now with group + chapter number
   ─────────────────────────────────────────── */

interface BrandItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  accent: string;
  chapter: number;
  featured?: boolean;
}

interface CategoryGroup {
  label: string;
  items: BrandItem[];
}

const groups: CategoryGroup[] = [
  {
    label: "Visual Identity",
    items: [
      { title: "Colors", description: "Palette, tints, accessible pairings.", href: "/colors", icon: "palette", accent: "#1D5AA7", chapter: 1, featured: true },
      { title: "Typography", description: "Proxima Nova + Roboto Mono type system.", href: "/typography", icon: "text_fields", accent: "#004290", chapter: 2 },
      { title: "Logos", description: "Suite, lockups, clear space rules.", href: "/logos", icon: "branding_watermark", accent: "#0f1c2e", chapter: 3 },
    ],
  },
  {
    label: "Strategy & Voice",
    items: [
      { title: "Voice & Tone", description: "Personality and messaging framework.", href: "/voice", icon: "record_voice_over", accent: "#A73B44", chapter: 4, featured: true },
      { title: "Photography", description: "Style, treatments, composition.", href: "/photography", icon: "photo_camera", accent: "#2B3035", chapter: 5 },
      { title: "Content", description: "Social media and newsletter guidelines.", href: "/content", icon: "article", accent: "#00685E", chapter: 6 },
      { title: "Stories", description: "Client success stories.", href: "/stories", icon: "auto_stories", accent: "#A73B44", chapter: 7 },
    ],
  },
  {
    label: "Tools & Resources",
    items: [
      { title: "Templates", description: "Signatures, copy blocks, decks.", href: "/templates", icon: "dashboard", accent: "#0f1c2e", chapter: 8 },
      { title: "Generate", description: "AI-powered on-brand content.", href: "/generate", icon: "auto_awesome", accent: "#1D5AA7", chapter: 9 },
      { title: "Calendar", description: "Key dates and campaign themes.", href: "/calendar", icon: "calendar_month", accent: "#004290", chapter: 10 },
      { title: "Glossary", description: "Terms and definitions.", href: "/glossary", icon: "menu_book", accent: "#2B3035", chapter: 11 },
    ],
  },
];

const totalChapters = groups.reduce((n, g) => n + g.items.length, 0);

/* ───────────────────────────────────────────
   COMPONENT
   ─────────────────────────────────────────── */

export default function BrandGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* GSAP scroll-triggered entrance animations */
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

        {/* ── Header ── */}
        <div className="brand-grid-header mb-10 sm:mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-navy/30 mb-3">
            {totalChapters} Chapters
          </p>
          <h2
            className="font-sans text-navy leading-[1.08] tracking-[-0.03em]"
            style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 500 }}
          >
            Brand Components
          </h2>
          {/* 1px rule below header */}
          <div className="mt-6 h-px bg-navy/[0.08]" />
        </div>

        {/* ── Category Groups ── */}
        <div className="flex flex-col gap-12 sm:gap-14">
          {groups.map((group) => (
            <div key={group.label}>
              {/* Category subheading */}
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-3">
                {group.label}
              </p>

              {/* Card grid — bento layout */}
              <GridForGroup group={group} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   GRID LAYOUT PER GROUP
   ─────────────────────────────────────────── */

function GridForGroup({ group }: { group: CategoryGroup }) {
  const hasFeatured = group.items.some((i) => i.featured);

  /*
   * Visual Identity (3 items, 1 featured):
   *   Desktop/Tablet: 3-col grid, featured spans 2
   *   Mobile: single column
   *
   * Strategy & Voice (4 items, 1 featured):
   *   Desktop: 3-col grid, featured spans 2 in first row, 3 standard in second row
   *   Tablet: 2-col grid, featured spans 2
   *   Mobile: single column
   *
   * Tools & Resources (4 items, no featured):
   *   Desktop: 4-col grid
   *   Tablet: 2-col grid
   *   Mobile: single column
   */

  if (!hasFeatured) {
    /* Tools & Resources — 4 equal columns */
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3px]">
        {group.items.map((item) => (
          <Card key={item.href} item={item} />
        ))}
      </div>
    );
  }

  /* Groups with a featured card */
  const featured = group.items.find((i) => i.featured)!;
  const standard = group.items.filter((i) => !i.featured);

  /*
   * The featured card (span 2) + the first standard card fill row 1.
   * Remaining standard items flow into subsequent 3-col rows.
   * If those remaining items don't fill the last row evenly,
   * the final item stretches to close the gap.
   */
  const remainingAfterRow1 = standard.length - 1; // first standard shares row with featured
  const leftover = remainingAfterRow1 > 0 ? remainingAfterRow1 % 3 : 0;
  const lastStretches = leftover !== 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px]">
      <Card item={featured} span2 />
      {standard.map((item, i) => (
        <Card
          key={item.href}
          item={item}
          span2={lastStretches && i === standard.length - 1}
        />
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────
   CARD
   ─────────────────────────────────────────── */

function Card({ item, span2 }: { item: BrandItem; span2?: boolean }) {
  const chapterNum = String(item.chapter).padStart(2, "0");

  return (
    <a
      href={item.href}
      className={[
        "brand-card group relative overflow-hidden bg-white no-underline",
        "rounded-sm",
        "p-6 sm:p-7",
        "transition-all duration-300",
        "hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-0.5",
        span2 ? "sm:col-span-2 lg:col-span-2" : "",
      ].join(" ")}
    >
      {/* Left-edge accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 group-hover:w-[5px]"
        style={{ backgroundColor: item.accent }}
      />

      {/* Oversized background icon */}
      <span
        className="material-symbols-outlined absolute -right-6 -bottom-6 pointer-events-none select-none text-navy/[0.06] group-hover:text-navy/[0.10] transition-colors duration-500"
        style={{
          fontSize: "220px",
          fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 48",
        }}
        aria-hidden="true"
      >
        {item.icon}
      </span>

      {/* Content */}
      <div className="relative z-10">
        {/* Chapter number */}
        <span className="block font-mono text-[10px] tracking-[0.08em] text-navy/20 mb-4">
          {chapterNum}
        </span>

        <h3
          className="font-sans text-navy tracking-[-0.02em] leading-[1.15] group-hover:text-royal transition-colors duration-300"
          style={{ fontSize: "1.2rem", fontWeight: 500 }}
        >
          {item.title}
        </h3>

        <p className="font-sans text-[13px] text-navy/45 leading-[1.5] mt-2">
          {item.description}
        </p>

        {/* Explore → CTA (fades in on hover) */}
        <span className="inline-block mt-4 font-mono text-[0.65rem] tracking-[0.1em] uppercase text-royal/0 group-hover:text-royal/60 transition-all duration-400">
          Explore
          <span className="inline-block ml-1 translate-x-0 group-hover:translate-x-1 transition-transform duration-400">
            &rarr;
          </span>
        </span>
      </div>
    </a>
  );
}
