"use client";

import { useEffect, useRef } from "react";
import type { HeroConfig } from "@/lib/section-types";

/*
  Matches the EXACT output of Scroll Reveal Grid Builder.html
  - background-image on cells (not <img> tags)
  - GSAP ScrollTrigger with pin, inset reveal, fade, skew, scale
  - All ease: 'none', cell stagger at 0.15 + i * 0.03
  - Vignette overlay with configurable gradients
*/

interface Props {
  config: HeroConfig;
}

export default function ScrollRevealGrid({ config }: Props) {
  const {
    cells, cols, rows, colWidths, rowHeightMode, rowHeights,
    gap, aspectRatio, bgColor, containerRadius,
    showText, heading, subhead, headingSize, subSize, textColor,
    enableVignette, vignetteStrength, vignetteSpread, edgeDarken, overlayColor,
    enablePin, pinDuration, enableInset, insetStart, insetRadius,
    skewX, enableFade, scaleStart,
  } = config;

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
      const cellEls = hero.querySelectorAll<HTMLElement>(".srg-cell");
      if (!inner || !grid || !cellEls.length) return;

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

        if (enableInset) {
          tl.to(inner, {
            margin: 0,
            width: "100%",
            borderRadius: `${containerRadius}px`,
            duration: 0.4,
            ease: "none",
          }, 0);
        }

        tl.to(grid, { gap: "0px", duration: 0.4, ease: "none" }, 0);

        if (enableFade || skewX > 0) {
          tl.to(grid, {
            ...(enableFade ? { opacity: 1 } : {}),
            ...(skewX > 0 ? { skewX: 0 } : {}),
            duration: 0.4,
            ease: "none",
          }, 0.1);
        }

        if (scaleStart < 1) {
          cellEls.forEach((cell, i) => {
            tl.to(cell, {
              scale: 1,
              duration: 0.3,
              ease: "none",
            }, 0.15 + i * 0.03);
          });
        }
      }, hero);
    }

    initGSAP();
    return () => { ctx?.revert(); };
  }, [enablePin, pinDuration, enableInset, enableFade, skewX, scaleStart, containerRadius]);

  const totalSlots = cols * rows;
  const colTemplate = colWidths.slice(0, cols).map(w => `${w}fr`).join(" ");
  const rowTemplate = rowHeightMode === "custom"
    ? rowHeights.slice(0, rows).map(h => `${h}fr`).join(" ")
    : `repeat(${rows}, 1fr)`;

  // Vignette gradient
  let vignetteGradient = "";
  if (enableVignette) {
    const r = parseInt(overlayColor.slice(1, 3), 16);
    const g = parseInt(overlayColor.slice(3, 5), 16);
    const b = parseInt(overlayColor.slice(5, 7), 16);
    const str = vignetteStrength / 100;
    const spr = vignetteSpread;
    const edg = edgeDarken / 100;
    const grads = [`radial-gradient(ellipse at center, rgba(${r},${g},${b},0) ${spr}%, rgba(${r},${g},${b},${str}) 100%)`];
    if (edg > 0) {
      grads.push(`linear-gradient(to bottom, rgba(${r},${g},${b},${(edg * 0.6).toFixed(2)}) 0%, rgba(${r},${g},${b},0) 25%, rgba(${r},${g},${b},0) 75%, rgba(${r},${g},${b},${(edg * 0.6).toFixed(2)}) 100%)`);
    }
    vignetteGradient = grads.join(", ");
  }

  const cellBgFallback = bgColor === "#000000" ? "#111" : "#ddd";

  return (
    <div className="scroll-reveal-grid-hero" id="srgHero" ref={heroRef}>
      <div
        className="srg-inner"
        style={{
          position: "relative",
          width: enableInset ? `calc(100% - ${insetStart * 2}px)` : "100%",
          aspectRatio,
          background: bgColor,
          borderRadius: enableInset ? `${insetRadius}px` : `${containerRadius}px`,
          overflow: "hidden",
          margin: enableInset ? `${insetStart}px` : "0",
        }}
      >
        {/* Grid */}
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
          {Array.from({ length: totalSlots }, (_, i) => {
            const cell = cells[i];
            const hasSrc = cell?.src && !cell.src.startsWith("data:");
            const zoom = cell?.zoom || 1;
            const bgSize = zoom > 1 ? `${zoom * 100}%` : "cover";
            return (
              <div
                key={i}
                className="srg-cell"
                style={{
                  backgroundImage: hasSrc ? `url('${cell.src}')` : undefined,
                  backgroundPosition: hasSrc ? `${cell.posX} ${cell.posY}` : "center",
                  backgroundSize: bgSize,
                  backgroundColor: cellBgFallback,
                  transform: scaleStart < 1 ? `scale(${scaleStart})` : undefined,
                }}
              />
            );
          })}
        </div>

        {/* Vignette */}
        {enableVignette && (
          <div
            className="srg-vignette"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
              background: vignetteGradient,
            }}
          />
        )}

        {/* Text overlay */}
        {showText && (
          <div
            className="srg-overlay"
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
            <div
              className="srg-heading"
              style={{
                fontFamily: "var(--sans, 'Proxima Nova', system-ui, sans-serif)",
                fontSize: `clamp(28px, 5vw, ${headingSize}px)`,
                color: textColor,
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                textAlign: "center",
                lineHeight: 1.1,
              }}
            >
              {heading}
            </div>
            <div
              className="srg-sub"
              style={{
                fontFamily: "var(--mono, system-ui, sans-serif)",
                fontSize: `clamp(10px, 1.2vw, ${subSize}px)`,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: textColor,
                opacity: 0.85,
                textShadow: "0 1px 10px rgba(0,0,0,0.5)",
                textAlign: "center",
                marginTop: "4px",
              }}
            >
              {subhead}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
