"use client";

import { useEffect, useRef } from "react";

// Off-screen starting positions per grid cell (3x3):
// Corner cells fly from corners, edge cells from edges, center stays
const cellOffsets = [
  { x: -120, y: -120 }, { x: 0, y: -140 }, { x: 120, y: -120 },
  { x: -140, y: 0 },    { x: 0, y: 0 },     { x: 140, y: 0 },
  { x: -120, y: 120 },  { x: 0, y: 140 },   { x: 120, y: 120 },
];

interface ScrollRevealGridProps {
  images: { src: string; pos?: string }[];
  cols?: number;
  rows?: number;
  colWidths?: number[];
  rowHeights?: number[];
  gap?: number;
  aspectRatio?: string;
  bgColor?: string;
  pinDuration?: number;
  insetStart?: number;
  insetRadius?: number;
  skewX?: number;
  scaleStart?: number;
  enableFade?: boolean;
  enableInset?: boolean;
  enablePin?: boolean;
  heading?: string;
  subheading?: string;
}

export default function ScrollRevealGrid({
  images,
  cols = 3,
  rows = 3,
  colWidths = [1, 3, 1],
  rowHeights = [1, 2, 1],
  gap = 6,
  aspectRatio = "16/9",
  bgColor = "#0f1c2e",
  pinDuration = 200,
  insetStart = 40,
  insetRadius = 16,
  skewX = 5,
  scaleStart = 0.6,
  enableFade = true,
  enableInset = true,
  enablePin = true,
  heading,
  subheading,
}: ScrollRevealGridProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function initGSAP() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!heroRef.current) return;

      const hero = heroRef.current;
      const inner = hero.querySelector<HTMLElement>(".srg-inner");
      const grid = hero.querySelector<HTMLElement>(".srg-grid");
      const cells = hero.querySelectorAll<HTMLElement>(".srg-cell");

      if (!inner || !grid || !cells.length) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            ...(enablePin
              ? { pin: true, end: `+=${pinDuration}%` }
              : { start: "top 80%", end: "bottom 20%" }),
            scrub: 1,
          },
        });

        // Layer 1: Container inset → full-bleed
        if (enableInset) {
          tl.to(
            inner,
            {
              margin: 0,
              width: "100%",
              borderRadius: "0px",
              duration: 0.4,
              ease: "none",
            },
            0
          );
        }

        // Layer 1b: Gap closes
        tl.to(grid, { gap: "0px", duration: 0.4, ease: "none" }, 0);

        // Layer 2: Grid skew + fade
        if (enableFade || skewX > 0) {
          tl.to(
            grid,
            {
              ...(enableFade ? { opacity: 1 } : {}),
              ...(skewX > 0 ? { skewX: 0 } : {}),
              duration: 0.4,
              ease: "none",
            },
            0.1
          );
        }

        // Layer 3: Each cell flies in from off-screen position and scales up
        cells.forEach((cell, i) => {
          tl.to(
            cell,
            {
              xPercent: 0,
              yPercent: 0,
              scale: 1,
              duration: 0.4,
              ease: "none",
            },
            0.1 + i * 0.03
          );
        });
      }, hero);
    }

    initGSAP();

    return () => {
      ctx?.revert();
    };
  }, [enablePin, pinDuration, enableInset, enableFade, skewX, scaleStart]);

  const colTemplate = colWidths.map((w) => `${w}fr`).join(" ");
  const rowTemplate = rowHeights.map((h) => `${h}fr`).join(" ");
  const totalCells = cols * rows;

  return (
    <div
      className="scroll-reveal-grid-hero"
      ref={heroRef}
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
    >
      <div
        className="srg-inner"
        style={{
          position: "relative",
          width: enableInset ? `calc(100% - ${insetStart * 2}px)` : "100%",
          aspectRatio,
          background: bgColor,
          borderRadius: enableInset ? `${insetRadius}px` : "0px",
          overflow: "hidden",
          margin: enableInset ? `${insetStart}px` : "0",
        }}
      >
        <div
          className="srg-grid"
          style={{
            display: "grid",
            gridTemplateColumns: colTemplate,
            gridTemplateRows: rowTemplate,
            gap: `${gap}px`,
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: enableFade ? 0 : 1,
            transform: skewX > 0 ? `skewX(${skewX}deg)` : "none",
          }}
        >
          {Array.from({ length: totalCells }, (_, i) => {
            const img = images[i];
            const offset = cellOffsets[i] || { x: 0, y: 0 };
            return (
              <div
                key={i}
                className="srg-cell"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: img?.pos || "center",
                  backgroundImage: img?.src
                    ? `url(${img.src})`
                    : undefined,
                  backgroundColor: img?.src
                    ? undefined
                    : "rgba(255,255,255,0.04)",
                  transform: `translate(${offset.x}%, ${offset.y}%) scale(${scaleStart})`,
                }}
              />
            );
          })}
        </div>

        {/* Text overlay */}
        {(heading || subheading) && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            {heading && (
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(28px, 5vw, 72px)",
                  color: "#fff",
                  textShadow: "0 2px 30px rgba(0,0,0,0.6)",
                  textAlign: "center",
                  lineHeight: 1.1,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                {heading}
              </h1>
            )}
            {subheading && (
              <p
                className="font-mono"
                style={{
                  fontSize: "clamp(10px, 1.2vw, 16px)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.7)",
                  textShadow: "0 1px 10px rgba(0,0,0,0.5)",
                  textAlign: "center",
                  marginTop: "8px",
                }}
              >
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%), linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.3) 100%)",
          }}
        />
      </div>
    </div>
  );
}
