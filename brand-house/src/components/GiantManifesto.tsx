"use client";

import { useEffect, useRef } from "react";

const lines = [
  { text: "We believe small business owners deserve more than generic advice.", delay: 0.35 },
  { text: "We believe the best guidance happens across a table \u2014 not across a screen.", delay: 0.75 },
  { jsx: true, delay: 1.15 },
  { text: "This is what we show up for. Every day. Across Northern California.", delay: 1.75, break: true },
  { ybb: true, delay: 2.45, break: true },
];

export default function GiantManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      sectionRef.current?.querySelectorAll<HTMLElement>(".m-line").forEach((el) => {
        el.style.opacity = "0.94";
        el.style.transform = "translateY(0)";
      });
      const kicker = sectionRef.current?.querySelector<HTMLElement>(".m-kicker");
      const meta = sectionRef.current?.querySelector<HTMLElement>(".m-meta");
      if (kicker) kicker.style.opacity = "0.9";
      if (meta) meta.style.opacity = "0.7";
      return;
    }

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(".m-kicker", { opacity: 0 }, {
          opacity: 0.9, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });
        gsap.fromTo(".m-meta", { opacity: 0 }, {
          opacity: 0.7, duration: 0.8, delay: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });

        const lineEls = sectionRef.current!.querySelectorAll<HTMLElement>(".m-line");
        lineEls.forEach((el, i) => {
          const d = parseFloat(el.dataset.delay || "0");
          gsap.fromTo(el,
            { opacity: 0, y: 14 },
            {
              opacity: 0.94, y: 0, duration: 1,
              ease: "power3.out", delay: d,
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
    <section ref={sectionRef} className="bg-[#0f1c2e] text-cream relative overflow-hidden" style={{ padding: "128px 0 136px" }}>
      {/* Giant quotation mark */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: -100,
          left: -60,
          fontSize: 640,
          fontFamily: "var(--sans)",
          fontWeight: 500,
          color: "#3a7ad4",
          opacity: 0.07,
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="max-w-[1080px] mx-auto px-8 sm:px-12 relative">
        {/* Section header */}
        <div className="border-t border-cream/25 pt-3.5 mb-16 flex items-baseline justify-between flex-wrap gap-5">
          <p className="m-kicker font-label text-[10px] uppercase tracking-[0.14em] text-fog" style={{ opacity: 0 }}>Our Manifesto</p>
          <p className="m-meta font-label text-[10px] uppercase tracking-[0.14em] text-fog" style={{ opacity: 0 }}>NorCal SBDC &middot; Est. 1989</p>
        </div>

        {/* Manifesto text */}
        <p
          className="font-sans"
          style={{
            fontSize: "clamp(28px, 3.8vw, 48px)",
            fontWeight: 500,
            letterSpacing: "-0.018em",
            lineHeight: 1.22,
            color: "#f5f4f0",
            maxWidth: "36ch",
          }}
        >
          <span className="m-line block" data-delay="0.35" style={{ opacity: 0, transform: "translateY(14px)" }}>
            We believe small business owners deserve more than generic advice.
          </span>
          <span className="m-line block" data-delay="0.75" style={{ opacity: 0, transform: "translateY(14px)" }}>
            We believe the best guidance happens across a table &mdash; not across a screen.
          </span>
          <span className="m-line block" data-delay="1.15" style={{ opacity: 0, transform: "translateY(14px)" }}>
            We believe the right <span style={{ color: "#7BA7DB" }}>people</span>, the right <span style={{ color: "#7BA7DB" }}>capital</span>, and the right <span style={{ color: "#7BA7DB" }}>connections</span> can change what&rsquo;s possible for a business.
          </span>
          <span className="m-line block" data-delay="1.75" style={{ opacity: 0, transform: "translateY(14px)", marginTop: "0.8em" }}>
            This is what we show up for. Every day. Across Northern California.
          </span>
          <span className="m-line block" data-delay="2.45" style={{ opacity: 0, transform: "translateY(14px)", marginTop: "0.9em" }}>
            <span
              style={{
                background: "linear-gradient(90deg, #7BA7DB 0%, #9DBDE2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your business, better.
            </span>
          </span>
        </p>
      </div>
    </section>
  );
}
