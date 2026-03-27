"use client";

import { useEffect, useRef } from "react";

const brandItems = [
  {
    title: "Colors",
    description: "Palette, tints, and usage.",
    href: "/colors",
  },
  {
    title: "Typography",
    description: "Tiempos, Proxima Nova, scale.",
    href: "/typography",
  },
  {
    title: "Logos",
    description: "Suite, lockups, clear space.",
    href: "/logos",
  },
  {
    title: "Voice & Tone",
    description: "How we write and speak.",
    href: "/voice",
  },
  {
    title: "Photography",
    description: "Style, treatments, composition.",
    href: "#",
  },
  {
    title: "Templates",
    description: "Layouts, copy blocks, docs.",
    href: "/templates",
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
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
          }
        );

        const cards = sectionRef.current!.querySelectorAll<HTMLElement>(".brand-card");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 36 },
            {
              opacity: 1, y: 0,
              duration: 0.85, ease: "power3.out",
              delay: i * 0.06,
              scrollTrigger: { trigger: sectionRef.current, start: "top 68%" },
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
        <div className="brand-grid-header mb-14 sm:mb-18">
          <h2
            className="font-serif text-navy leading-[1.08] tracking-[-0.025em]"
            style={{ fontSize: "clamp(30px, 4.2vw, 52px)" }}
          >
            Brand Components
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.04]">
          {brandItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="brand-card group bg-cream p-8 sm:p-10 no-underline transition-colors duration-500 hover:bg-white"
            >
              <h3
                className="font-serif text-navy tracking-[-0.02em] leading-[1.1] group-hover:text-royal transition-colors duration-500"
                style={{ fontSize: "1.3rem" }}
              >
                {item.title}
              </h3>
              <p className="font-sans text-[0.76rem] text-text-secondary leading-[1.6] mt-2.5">
                {item.description}
              </p>
              <div className="mt-6 overflow-hidden">
                <svg
                  width="18" height="18" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="text-text-tertiary/30 group-hover:text-royal transition-all duration-500 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
