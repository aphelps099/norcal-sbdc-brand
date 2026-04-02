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
        gsap.fromTo(
          ".display-text",
          { x: "4%" },
          {
            x: "-4%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          ".display-text",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden">
      <div className="py-28 sm:py-44">
        <h2
          className="display-text font-sans text-navy leading-[0.85] tracking-[-0.045em] whitespace-nowrap px-8"
          style={{ fontSize: "clamp(72px, 15vw, 240px)", fontWeight: 400 }}
        >
          MySBDC
        </h2>
      </div>

      <div className="px-3 sm:px-5 pb-3 sm:pb-5">
        <div className="relative overflow-hidden" style={{ height: "clamp(220px, 32vw, 480px)" }}>
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
