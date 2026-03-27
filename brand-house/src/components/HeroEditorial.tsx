"use client";

import { useEffect, useRef } from "react";

export default function HeroEditorial() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        // Parallax the hero image
        gsap.to(".hero-img", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Fade in text
        gsap.fromTo(
          ".hero-title",
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );
        gsap.fromTo(
          ".hero-sub",
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black overflow-hidden">
      {/* Dark image hero — full viewport height */}
      <div className="relative h-screen min-h-[600px] max-h-[1000px]">
        {/* Background image with overlay */}
        <div className="hero-img absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <h1
            className="hero-title font-serif text-white text-center leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
          >
            Mesmerize
          </h1>
          <p
            className="hero-sub font-mono text-white/40 text-center uppercase mt-6"
            style={{
              fontSize: "clamp(9px, 0.9vw, 12px)",
              letterSpacing: "0.3em",
            }}
          >
            With immersive animations
          </p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-[5]" />
      </div>
    </section>
  );
}
