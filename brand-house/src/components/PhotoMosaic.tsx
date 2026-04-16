"use client";

import { useEffect, useRef, useState } from "react";

const ROTATE_WORDS = ["Better.", "People.", "Funded.", "Connected."];

function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATE_WORDS.length);
        setAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-between flex-wrap gap-8">
      <h2
        className="mosaic-heading font-sans text-navy leading-[0.95] tracking-[-0.025em]"
        style={{ fontSize: "clamp(48px, 7vw, 84px)", fontWeight: 500 }}
      >
        Your Business<br />
        <span
          className="text-[#004290] inline-block italic"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            letterSpacing: "-0.015em",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(12px)" : "translateY(0)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          {ROTATE_WORDS[index]}
        </span>
      </h2>
      <p
        className="text-[10px] uppercase tracking-[0.14em] text-navy/55 pb-3 text-right leading-relaxed hidden sm:block"
        style={{ fontFamily: "var(--font-wide)", fontWeight: 700 }}
      >
        The people<br />we work with
      </p>
    </div>
  );
}

const tiles = [
  { src: "https://www.norcalsbdc.org/wp-content/uploads/2025/12/Circosphere-Image-1.jpg", alt: "Circosphere", name: "Circosphere", kicker: "Client", cls: "tile-hero", pos: "center" },
  { src: "https://www.norcalsbdc.org/wp-content/uploads/2024/07/churn-2-edited.jpg", alt: "Churn Creamery", name: "Churn Creamery", kicker: "Client", cls: "tile-a", pos: "center 20%" },
  { src: "https://www.norcalsbdc.org/wp-content/uploads/2021/01/In-the-lab.jpg", alt: "New Age Meats", name: "New Age Meats", kicker: "Client", cls: "tile-b", pos: "center 40%" },
  { src: "https://www.norcalsbdc.org/wp-content/uploads/2024/02/freeline-edited.jpg", alt: "Freeline Surf", name: "Freeline Surf", kicker: "Client", cls: "tile-c", pos: "42% 38%", scale: 1.35 },
  { src: "https://www.norcalsbdc.org/wp-content/uploads/2020/07/Dick-Taylor-Adam-Dick-and-Dustin-Taylor.jpg", alt: "Dick Taylor Chocolates", name: "Dick Taylor Chocolates", kicker: "Client", cls: "tile-d", pos: "center" },
  { src: "https://www.norcalsbdc.org/wp-content/uploads/2025/12/rej-ceo.jpg", alt: "Rejoule", name: "Rejoule", kicker: "Client", cls: "tile-e", pos: "center 30%" },
  { src: "https://www.norcalsbdc.org/wp-content/uploads/2021/01/File_000-5-800x800-1.jpg", alt: "Flores Micheladas", name: "Flores Micheladas", kicker: "Client", cls: "tile-f", pos: "center" },
  { src: "https://www.norcalsbdc.org/wp-content/uploads/2021/02/beauty-driver.jpg", alt: "NorCal small business owner", name: "And thousands more.", kicker: "300+ Clients Across 36 Counties", cls: "tile-wide", pos: "center 40%" },
];

export default function PhotoMosaic() {
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
          ".mosaic-heading",
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );

        const tileEls = sectionRef.current!.querySelectorAll<HTMLElement>(".mosaic-tile");
        tileEls.forEach((tile, i) => {
          gsap.fromTo(
            tile,
            { opacity: 0, y: 40, scale: 0.98 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 1, ease: "power3.out",
              delay: i * 0.08,
              scrollTrigger: { trigger: tile, start: "top 90%" },
            }
          );
        });
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream">
      <div className="max-w-[1080px] mx-auto px-8 sm:px-12 pt-20 sm:pt-24 pb-10 sm:pb-12">
        <RotatingHeadline />
      </div>

      <div className="max-w-[1080px] mx-auto px-8 sm:px-12 pb-20 sm:pb-24">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(3, 220px)",
          }}
        >
          {tiles.map((tile) => {
            const isHero = tile.cls === "tile-hero";
            const isWide = tile.cls === "tile-wide";

            const gridStyles: Record<string, string> = {
              "tile-hero": "1 / 7",
              "tile-a": "7 / 10",
              "tile-b": "10 / 13",
              "tile-c": "7 / 10",
              "tile-d": "10 / 13",
              "tile-e": "1 / 4",
              "tile-f": "4 / 7",
              "tile-wide": "7 / 13",
            };

            const rowStyles: Record<string, string> = {
              "tile-hero": "1 / 3",
              "tile-a": "1 / 2",
              "tile-b": "1 / 2",
              "tile-c": "2 / 3",
              "tile-d": "2 / 3",
              "tile-e": "3 / 4",
              "tile-f": "3 / 4",
              "tile-wide": "3 / 4",
            };

            return (
              <div
                key={tile.cls}
                className="mosaic-tile relative overflow-hidden bg-navy group cursor-pointer"
                style={{
                  gridColumn: gridStyles[tile.cls],
                  gridRow: rowStyles[tile.cls],
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tile.src}
                  alt={tile.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:saturate-[0.85] group-hover:brightness-[0.72]"
                  style={{
                    objectPosition: tile.pos,
                    ...(tile.scale ? { transform: `scale(${tile.scale})`, transformOrigin: tile.pos } : {}),
                  }}
                />

                {/* Gradient scrim */}
                <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-[rgba(15,28,46,0.75)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none z-[1]" />

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white z-[2] pointer-events-none translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <p
                    className="text-[10px] uppercase tracking-[0.14em] text-white/75 mb-1.5"
                    style={{ fontFamily: "var(--font-wide)", fontWeight: 700 }}
                  >
                    {tile.kicker}
                  </p>
                  <p className="font-sans tracking-[-0.01em] leading-tight" style={{ fontSize: isHero ? 34 : isWide ? 26 : 22, fontWeight: 500 }}>{tile.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
