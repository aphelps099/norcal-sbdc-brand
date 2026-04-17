"use client";

import { useEffect, useRef } from "react";

/**
 * Helper: split a React-ish string into word spans for GSAP stagger.
 * Preserves inline emphasis spans passed as segments.
 */
type Segment = { text: string; accent?: boolean };

const bodySegments: Segment[] = [
  { text: "We believe small business owners deserve more than " },
  { text: "generic advice", accent: true },
  { text: ". We believe the best guidance happens " },
  { text: "across a table", accent: true },
  { text: " \u2014 not across a screen. We believe the right people, the right capital, and the right connections can " },
  { text: "change what\u2019s possible", accent: true },
  { text: " for a business." },
];

function renderBody() {
  // Split every segment into words; each word wrapped in a span so GSAP can
  // stagger their reveal. Accent segments get navy + slightly heavier weight.
  const out: React.ReactNode[] = [];
  let wordIdx = 0;
  bodySegments.forEach((seg, segIdx) => {
    // Split but keep leading/trailing whitespace preserved between words.
    const parts = seg.text.split(/(\s+)/);
    parts.forEach((p, pIdx) => {
      if (/^\s+$/.test(p)) {
        out.push(<span key={`s-${segIdx}-${pIdx}`}>{p}</span>);
      } else if (p.length === 0) {
        // skip empty
      } else {
        out.push(
          <span
            key={`w-${segIdx}-${pIdx}`}
            className="m-word"
            data-word-idx={wordIdx++}
            style={{
              display: "inline-block",
              opacity: 0,
              transform: "translateY(22px)",
              willChange: "opacity, transform",
              color: seg.accent ? "#0f1c2e" : undefined,
              fontWeight: seg.accent ? 500 : undefined,
              fontStyle: seg.accent ? "italic" : undefined,
            }}
          >
            {p}
          </span>
        );
      }
    });
  });
  return out;
}

export default function GiantManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-reveal], .m-word").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
      return;
    }

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        // Eyebrow — fine fade
        gsap.fromTo(".m-eyebrow", { opacity: 0, y: 8 }, {
          opacity: 0.85, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        });

        // Canopy reveal — words cascade in, softly overlapping.
        // Small y translate + opacity for calm, editorial motion (not bouncy).
        gsap.to(".m-word", {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: { each: 0.028, from: "start" },
          delay: 0.25,
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
        });

        // Our Promise — eyebrow + closer
        gsap.fromTo(".m-promise-eyebrow", { opacity: 0, y: 8 }, {
          opacity: 0.75, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".m-closer", start: "top 82%" },
        });
        gsap.fromTo(".m-promise-line .m-word-big", { opacity: 0, y: 28 }, {
          opacity: 1, y: 0, duration: 1.1, ease: "power3.out",
          stagger: 0.08, delay: 0.15,
          scrollTrigger: { trigger: ".m-closer", start: "top 82%" },
        });
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#5684BA",
        color: "#0f1c2e",
        padding: "176px 0 184px",
      }}
    >
      {/* Grain texture overlay — navy-tinted for steel bg */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.06  0 0 0 0 0.11  0 0 0 0 0.18  0 0 0 0.45 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>")`,
          backgroundSize: "220px 220px",
          opacity: 0.22,
        }}
      />
      {/* Soft highlight from upper-left for depth */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 85% 90% at 25% 35%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)",
        }}
      />
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(15,28,46,0.10) 100%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto px-8 sm:px-12 relative z-[2]">
        {/* Eyebrow */}
        <p
          className="m-eyebrow uppercase mb-12 inline-flex items-center gap-3.5"
          style={{
            opacity: 0,
            fontFamily: "var(--font-wide)",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.24em",
            color: "rgba(15,28,46,0.85)",
          }}
        >
          <span className="w-7 h-px" style={{ backgroundColor: "rgba(15,28,46,0.6)" }} />
          Our Manifesto
        </p>

        {/* Body — bigger, navy on steel, word-by-word reveal */}
        <p
          className="m-body"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(26px, 3.1vw, 38px)",
            fontWeight: 300,
            lineHeight: 1.45,
            letterSpacing: "-0.006em",
            maxWidth: "62ch",
            color: "#0f1c2e",
            marginBottom: "clamp(96px, 10vw, 128px)",
          }}
        >
          {renderBody()}
        </p>

        {/* Our Promise */}
        <div className="m-closer">
          <p
            className="m-promise-eyebrow uppercase mb-4 inline-flex items-center gap-3.5"
            style={{
              opacity: 0,
              fontFamily: "var(--font-wide)",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.24em",
              color: "rgba(15,28,46,0.75)",
            }}
          >
            <span className="w-7 h-px" style={{ backgroundColor: "rgba(15,28,46,0.55)" }} />
            Our Promise
          </p>
          <p
            className="m-promise-line"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(40px, 4.8vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "#0f1c2e",
            }}
          >
            <span
              className="m-word-big"
              style={{ display: "inline-block", opacity: 0, transform: "translateY(28px)" }}
            >
              Your
            </span>{" "}
            <span
              className="m-word-big"
              style={{ display: "inline-block", opacity: 0, transform: "translateY(28px)" }}
            >
              business,
            </span>{" "}
            <span
              className="m-word-big italic"
              style={{ display: "inline-block", opacity: 0, transform: "translateY(28px)" }}
            >
              better.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
