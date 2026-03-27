"use client";

import { useEffect, useRef } from "react";

export default function DisplayType() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        // Parallax the large type
        gsap.fromTo(
          ".display-text",
          { x: "5%" },
          {
            x: "-5%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        // Scale reveal
        gsap.fromTo(
          ".display-text",
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden">
      <div className="py-24 sm:py-40">
        <h2
          className="display-text font-serif text-navy leading-[0.85] tracking-[-0.04em] whitespace-nowrap px-6"
          style={{
            fontSize: "clamp(64px, 14vw, 220px)",
            fontWeight: 400,
          }}
        >
          MySBDC
        </h2>
      </div>

      {/* Wide landscape photo strip */}
      <div className="px-4 sm:px-6 pb-4">
        <div className="relative overflow-hidden" style={{ height: "clamp(200px, 30vw, 450px)" }}>
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80&fit=crop&auto=format"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
      </div>
    </section>
  );
}
