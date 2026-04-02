"use client";

import { useEffect, useRef } from "react";

export default function GiantManifesto() {
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
          ".manifesto-eyebrow",
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
          }
        );

        gsap.fromTo(
          ".manifesto-accent",
          { scaleX: 0 },
          {
            scaleX: 1, duration: 0.6, ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
          }
        );

        const words = sectionRef.current!.querySelectorAll<HTMLElement>(".m-word");
        words.forEach((word) => {
          gsap.fromTo(
            word,
            { opacity: 0.08 },
            {
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: word,
                start: "top 85%",
                end: "top 55%",
                scrub: true,
              },
            }
          );
        });

        // Floating stat card animation
        gsap.fromTo(
          ".manifesto-stat",
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: ".manifesto-stat", start: "top 90%" },
          }
        );
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  const segments = [
    { text: "Our clients don\u2019t settle for generic advice. That\u2019s why they ", highlight: false },
    { text: "trust", highlight: true },
    { text: " SBDC. They get an advisor who ", highlight: false },
    { text: "understands", highlight: true },
    { text: " them, knows their market, their struggle, their ", highlight: false },
    { text: "ambitions", highlight: true },
    { text: " \u2014 and who knows what it takes to turn ambition into success.", highlight: false },
  ];

  // Build word array with highlight flags
  const words: { text: string; highlight: boolean }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").filter(Boolean).forEach((w) => {
      words.push({ text: w, highlight: seg.highlight });
    });
  });

  return (
    <section ref={sectionRef} className="bg-cream-warm relative overflow-hidden">
      {/* Asymmetric accent — thin vertical line on the left */}
      <div
        className="absolute left-[5%] top-0 w-[1px] h-full bg-navy/[0.04] hidden lg:block"
        aria-hidden="true"
      />

      <div className="max-w-[1000px] mx-auto px-8 sm:px-12 py-28 sm:py-36 relative">
        {/* Eyebrow with accent bar */}
        <div className="flex items-center gap-4 mb-10 sm:mb-14">
          <span
            className="manifesto-accent accent-bar"
            style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
          />
          <p
            className="manifesto-eyebrow text-navy/40 uppercase"
            style={{ fontFamily: "var(--sans-label)", fontSize: "0.7rem", letterSpacing: "0.18em" }}
          >
            Our Manifesto
          </p>
        </div>

        <h2 className="leading-[1.2] tracking-[-0.025em]" style={{ fontSize: "clamp(28px, 4.2vw, 54px)" }}>
          {words.map((word, i) => (
            <span key={i}>
              <span
                className={`m-word font-sans inline-block ${word.highlight ? "text-royal" : "text-navy"}`}
                style={{
                  opacity: 0.08,
                  textDecoration: word.highlight ? "underline" : "none",
                  textDecorationColor: "var(--royal)",
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "2px",
                }}
              >
                {word.text}
              </span>
              {" "}
            </span>
          ))}
        </h2>
      </div>

      {/* Floating stat card — overlaps into next section */}
      <div className="relative max-w-[1000px] mx-auto px-8 sm:px-12">
        <div
          className="manifesto-stat inline-flex items-baseline gap-4 bg-navy text-white px-8 py-5 sm:px-10 sm:py-6 relative z-10 -mb-10 sm:-mb-14"
          style={{ opacity: 0 }}
        >
          <span
            className="font-mono text-pool leading-none"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            $2.8B
          </span>
          <span
            className="text-white/40 uppercase"
            style={{ fontFamily: "var(--sans-label)", fontSize: "0.6rem", letterSpacing: "0.16em" }}
          >
            Capital Raised
          </span>
        </div>
      </div>
    </section>
  );
}
