"use client";

import { useEffect, useRef } from "react";

const brandItems = [
  {
    title: "Colors",
    description: "Primary palette, tints, gradients, and usage guidelines.",
    href: "/colors",
    accent: "#1D5AA7",
  },
  {
    title: "Typography",
    description: "Tiempos, Proxima Nova, type scale, and pairing rules.",
    href: "/typography",
    accent: "#0f1c2e",
  },
  {
    title: "Logos",
    description: "Logo suite, lockups, clear space, and usage dos/don\u2019ts.",
    href: "/logos",
    accent: "#c4543a",
  },
  {
    title: "Voice & Tone",
    description: "How we write, speak, and communicate as a brand.",
    href: "/voice",
    accent: "#1D5AA7",
  },
  {
    title: "Photography",
    description: "Image style, treatments, duotone, and composition guidelines.",
    href: "#",
    accent: "#0f1c2e",
  },
  {
    title: "Templates",
    description: "Ready-to-use layouts, copy blocks, and document templates.",
    href: "/templates",
    accent: "#c4543a",
  },
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
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          }
        );

        const cards = sectionRef.current!.querySelectorAll<HTMLElement>(".brand-card");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 44 },
            {
              opacity: 1, y: 0,
              duration: 0.9, ease: "power3.out",
              delay: i * 0.07,
              scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
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
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 py-28 sm:py-36">
        {/* Header */}
        <div className="brand-grid-header mb-16 sm:mb-20">
          <p
            className="font-sans text-text-tertiary uppercase font-600"
            style={{ fontSize: "0.6rem", letterSpacing: "0.22em" }}
          >
            Brand Components
          </p>
          <h2
            className="font-serif text-navy mt-4 leading-[1.08] tracking-[-0.025em]"
            style={{ fontSize: "clamp(30px, 4.2vw, 52px)" }}
          >
            Everything you need,<br />
            in one place.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {brandItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="brand-card group relative bg-white p-8 sm:p-9 no-underline transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.06)] hover:-translate-y-[3px]"
              style={{ border: "1px solid rgba(0,0,0,0.04)" }}
            >
              {/* Number */}
              <span
                className="font-sans text-text-tertiary/40 font-800"
                style={{ fontSize: "0.62rem" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="font-serif text-navy mt-4 tracking-[-0.02em] leading-[1.1]" style={{ fontSize: "1.35rem" }}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[0.78rem] text-text-secondary leading-[1.6] mt-2.5">
                {item.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-text-tertiary group-hover:text-navy transition-colors duration-500">
                <span
                  className="font-sans uppercase font-600"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.1em" }}
                >
                  Explore
                </span>
                <svg
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: item.accent }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
