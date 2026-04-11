"use client";

import { useEffect, useRef } from "react";
import { GALLERY_ITEMS, type GalleryItem, type OverlayColor } from "@/lib/gallery-data";

// Brand color overlays — resting at 30% opacity, rising to 55% on hover
const OVERLAY_COLORS: Record<OverlayColor, string> = {
  navy:  "rgba(15, 28, 46,",   // #0f1c2e
  royal: "rgba(29, 90, 167,",  // #1D5AA7
  coral: "rgba(196, 84, 58,",  // #c4543a
  pool:  "rgba(143, 197, 217,", // #8FC5D9
};

function overlayStyle(color: OverlayColor | undefined, hover: boolean): string {
  if (!color) return "transparent";
  const base = OVERLAY_COLORS[color];
  return `${base} ${hover ? "0.55" : "0.30"})`;
}

// ─── Individual tile ──────────────────────────────────────────────────────────

function Tile({ item }: { item: GalleryItem }) {
  const color = item.overlay ?? "navy";
  const baseStyle = `${OVERLAY_COLORS[color]} 0.28)`;
  const hoverStyle = `${OVERLAY_COLORS[color]} 0.55)`;

  if (item.type === "video") {
    return (
      <div
        className="gallery-tile relative overflow-hidden"
        style={{
          gridColumn: item.fullWidth ? "1 / -1" : undefined,
          gridRow: item.fullWidth ? "span 2" : undefined,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: item.objectPosition ?? "center" }}
        >
          <source src={item.src} type="video/mp4" />
        </video>
        {/* Permanent dark scrim so video doesn't blow out */}
        <div className="absolute inset-0 bg-[rgba(15,28,46,0.35)] pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className="gallery-tile group relative overflow-hidden cursor-pointer"
      style={{ opacity: 0, transform: "translateY(32px)" }}
    >
      {/* Photo */}
      <img
        src={item.src}
        alt={item.alt ?? ""}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        style={{ objectPosition: item.objectPosition ?? "center" }}
      />

      {/* Brand color overlay — always visible at low opacity, deepens on hover */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `linear-gradient(to top, ${hoverStyle} 0%, ${baseStyle} 60%, transparent 100%)`,
        }}
      />
      {/* Hover state boost — separate layer so we can transition opacity */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `${OVERLAY_COLORS[color]} 0.28)`,
          mixBlendMode: "multiply",
        }}
      />

      {/* Caption */}
      {item.caption && (
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 sm:px-5 sm:py-4">
          <span className="font-label text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-white/90 leading-none">
            {item.caption}
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function MasonryGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      containerRef.current
        ?.querySelectorAll<HTMLElement>(".gallery-tile")
        .forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      return;
    }

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!containerRef.current) return;

      ctx = gsap.context(() => {
        ScrollTrigger.batch(".gallery-tile", {
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: 0.05,
              duration: 0.75,
              ease: "power3.out",
            });
          },
          start: "top 93%",
        });
      }, containerRef.current);
    }

    init();
    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0f1c2e]">
      {/*
        CSS Grid — 3 equal columns, fixed row height.
        Gap is 2px so tiles feel tight like the calendar card grid.
        Videos and fullWidth items span all 3 columns.
      */}
      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "clamp(220px, 28vw, 400px)",
        }}
      >
        {GALLERY_ITEMS.map((item) => {
          // Parse span classes to inline grid styles for reliability
          const spanMatch = item.span?.match(/col-span-(\d)/);
          const rowMatch  = item.span?.match(/row-span-(\d)/);
          const colSpan   = spanMatch ? parseInt(spanMatch[1]) : 1;
          const rowSpan   = rowMatch  ? parseInt(rowMatch[1])  : 1;

          return (
            <div
              key={item.id}
              style={{
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`,
              }}
            >
              <Tile item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
