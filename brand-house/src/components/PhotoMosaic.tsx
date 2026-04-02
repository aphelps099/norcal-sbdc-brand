"use client";

import { useEffect, useRef } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&fit=crop&auto=format",
    pos: "center 40%",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&fit=crop&auto=format",
    pos: "center",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fit=crop&auto=format",
    pos: "center",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&fit=crop&auto=format",
    pos: "center",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop&auto=format",
    pos: "center",
    span: "col-span-1 row-span-1",
  },
];

const pillars = [
  { label: "People", stat: "42K+" },
  { label: "Connection", stat: "11" },
  { label: "Capital", stat: "$2.8B" },
  { label: "Growth", stat: "44yr" },
];

export default function PhotoMosaic() {
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
          ".mosaic-heading",
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );

        gsap.fromTo(
          ".mosaic-pillars",
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.15,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );

        const tiles = sectionRef.current!.querySelectorAll<HTMLElement>(".mosaic-tile");
        tiles.forEach((tile, i) => {
          gsap.fromTo(
            tile,
            { opacity: 0, y: 40, scale: 0.98 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 1,
              ease: "power3.out",
              delay: i * 0.08,
              scrollTrigger: { trigger: tile, start: "top 90%" },
            }
          );
        });

        // Pillar stats stagger
        const stats = sectionRef.current!.querySelectorAll<HTMLElement>(".pillar-stat");
        stats.forEach((stat, i) => {
          gsap.fromTo(
            stat,
            { opacity: 0, y: 20 },
            {
              opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
              delay: 0.3 + i * 0.1,
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
    <section ref={sectionRef} className="bg-white relative">
      {/* Content area with extra bottom padding for overlap */}
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 pt-32 sm:pt-40 pb-0">
        {/* Heading + pillars row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          <div className="flex-1">
            <h2
              className="mosaic-heading font-sans text-navy leading-[0.95] tracking-[-0.04em]"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              Your Business<br />
              <span className="text-royal">Better.</span>
            </h2>
          </div>

          {/* Pillar stats — horizontal bar */}
          <div className="mosaic-pillars flex gap-6 sm:gap-10 pb-2 lg:pb-3">
            {pillars.map((p, i) => (
              <div key={i} className="pillar-stat flex flex-col items-start" style={{ opacity: 0 }}>
                <span
                  className="font-mono text-navy leading-none tracking-tight"
                  style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}
                >
                  {p.stat}
                </span>
                <span
                  className="text-navy/30 uppercase mt-1"
                  style={{ fontFamily: "var(--sans-label)", fontSize: "0.55rem", letterSpacing: "0.14em" }}
                >
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Accent bar under heading — bleeds into mosaic */}
        <div className="h-[3px] bg-coral w-16 mt-8 mb-0" />
      </div>

      {/* Photo grid — tighter to heading for overlap energy */}
      <div className="px-3 sm:px-5 pt-8 sm:pt-10 pb-3 sm:pb-5">
        <div
          className="grid gap-1.5 sm:gap-2"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "clamp(200px, 25vw, 360px)",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`mosaic-tile relative overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
                style={{ objectPosition: img.pos }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
