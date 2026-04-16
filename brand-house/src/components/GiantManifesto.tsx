"use client";

import { useEffect, useRef } from "react";

export default function GiantManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
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
        gsap.fromTo(".m-eyebrow", { opacity: 0 }, {
          opacity: 0.8, duration: 0.9, ease: "power2.out", delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });

        gsap.fromTo(".m-body", { opacity: 0, y: 14 }, {
          opacity: 0.96, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });

        gsap.fromTo(".m-closer", { opacity: 0, y: 14 }, {
          opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.6,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0f1c2e] text-white relative overflow-hidden" style={{ padding: "176px 0 184px" }}>
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>")`,
          backgroundSize: "220px 220px",
          opacity: 0.22,
        }}
      />
      {/* Soft radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse 85% 90% at 25% 35%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)",
        }}
      />

      <div className="max-w-[1080px] mx-auto px-8 sm:px-12 relative z-[2]">
        {/* Eyebrow — Proxima Nova Extra Wide, caps label */}
        <p
          className="m-eyebrow text-[11px] uppercase tracking-[0.24em] text-white/80 mb-11 inline-flex items-center gap-3.5"
          data-reveal
          style={{ opacity: 0, fontFamily: "var(--font-wide)", fontWeight: 700 }}
        >
          <span className="w-7 h-px bg-white/70" />
          Our Manifesto
        </p>

        {/* Body — Proxima Sera Light (editorial voice, manifesto prose) */}
        <p
          className="m-body leading-[1.55] tracking-[-0.004em] text-white/95 mb-20 md:mb-22"
          data-reveal
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(22px, 2.4vw, 28px)",
            fontWeight: 300,
            maxWidth: "60ch",
            opacity: 0,
            transform: "translateY(14px)",
          }}
        >
          We believe small business owners deserve more than <span className="text-fog">generic advice</span>. We believe the best guidance happens <span className="text-fog">across a table</span> &mdash; not across a screen. We believe the right people, the right capital, and the right connections can <span className="text-fog">change what&rsquo;s possible</span> for a business.
        </p>

        {/* Closer */}
        <div className="m-closer" data-reveal style={{ opacity: 0, transform: "translateY(14px)" }}>
          <p
            className="text-[11px] uppercase tracking-[0.24em] text-white/70 mb-3.5 inline-flex items-center gap-3.5"
            style={{ fontFamily: "var(--font-wide)", fontWeight: 700 }}
          >
            <span className="w-7 h-px bg-white/70" />
            Our Promise
          </p>
          <p
            className="text-white tracking-[-0.018em]"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 4.4vw, 56px)",
              fontWeight: 400,
              lineHeight: 1.02,
            }}
          >
            Your business, <span className="italic">better.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
