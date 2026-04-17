"use client";

import { useRef, useEffect, useState } from "react";

interface NextSectionLinkProps {
  title: string;
  href: string;
}

/**
 * Footer "Next Chapter" link.
 *
 *  · Background:  #192d4c (shared with SiteFooter for a seamless dark band)
 *  · Label:       proxima-sera · thin (300) · italic · oversized display scale
 *  · Hover:       text white → fog (#85A3C8) + slight scale-up
 *                 (no sliding color sweep)
 *  · Arrow:       giant Material Symbols "line_end_arrow_notch" replacing
 *                 the old chevron SVG
 */
export default function NextSectionLink({ title, href }: NextSectionLinkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!containerRef.current) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
          },
        });

        tl.fromTo(
          ".next-eyebrow",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );

        tl.fromTo(
          ".next-title",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.35"
        );

        tl.fromTo(
          ".next-arrow",
          { opacity: 0, x: -12 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
          "-=0.55"
        );
      }, containerRef);
    }

    init();
    return () => ctx?.revert();
  }, []);

  const FOG = "#85A3C8";
  const WHITE = "#ffffff";
  // Default: Fog @ 80% opacity
  // Hover:   text -> full white;  arrow -> white but stays at 80% opacity
  const defaultColor = FOG;
  const defaultOpacity = 0.8;

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[#192d4c]">
      <a
        href={href}
        className="block no-underline relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            <div className="border-t border-white/[0.06]" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 py-14 md:py-20 lg:py-24">
          {/* Eyebrow */}
          <p
            className="next-eyebrow font-label text-[10px] uppercase tracking-[0.22em] mb-5 md:mb-6"
            style={{
              color: hovered ? WHITE : FOG,
              opacity: hovered ? 0.9 : 0.8,
              transition: "color 0.45s ease, opacity 0.45s ease",
            }}
          >
            Next
          </p>

          {/* Section title — proxima-sera, thin, italic, oversized */}
          <div className="next-title">
            <h2
              style={{
                fontFamily: "proxima-sera, var(--serif)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(56px, 10vw, 132px)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: hovered ? WHITE : defaultColor,
                opacity: hovered ? 1 : defaultOpacity,
                transform: hovered ? "scale(1.035)" : "scale(1)",
                transformOrigin: "left center",
                transition:
                  "color 0.45s ease, opacity 0.45s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "inline-block",
              }}
            >
              {title}
            </h2>
          </div>

          {/* Giant material-symbol arrow (line_end_arrow_notch)
              Default — Fog @ 80%.  Hover — turns white but stays @ 80%. */}
          <span
            aria-hidden="true"
            className="material-symbols-outlined next-arrow absolute right-4 md:right-8 top-1/2"
            style={{
              fontSize: "clamp(160px, 22vw, 320px)",
              lineHeight: 1,
              fontVariationSettings:
                "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48",
              color: hovered ? WHITE : defaultColor,
              opacity: 0.8,
              transform: hovered
                ? "translateY(-50%) translateX(10px)"
                : "translateY(-50%)",
              transition:
                "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), color 0.45s ease",
            }}
          >
            line_end_arrow_notch
          </span>
        </div>
      </a>
    </div>
  );
}
