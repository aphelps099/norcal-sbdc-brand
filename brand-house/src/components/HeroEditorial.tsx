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
        // Fade in text
        gsap.fromTo(
          ".hero-title",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.3 }
        );
        gsap.fromTo(
          ".hero-sub",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 }
        );

        // Fade out on scroll
        gsap.to(".hero-content", {
          opacity: 0,
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "40% top",
            scrub: 1,
          },
        });
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black overflow-hidden">
      <div className="relative h-screen min-h-[600px]">
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
          >
            <source
              src="https://www.norcalsbdc.org/wp-content/uploads/2025/05/emerge-24-footage2.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Content */}
        <div className="hero-content relative z-10 h-full flex flex-col items-center justify-center px-6">
          <h1
            className="hero-title font-serif text-white text-center leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(48px, 8vw, 120px)", opacity: 0 }}
          >
            Mesmerize
          </h1>
          <p
            className="hero-sub font-mono text-white/40 text-center uppercase mt-6"
            style={{
              fontSize: "clamp(9px, 0.9vw, 12px)",
              letterSpacing: "0.3em",
              opacity: 0,
            }}
          >
            With immersive animations
          </p>
        </div>

        {/* Bottom gradient fade to white */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[5]"
          style={{ height: "160px", background: "linear-gradient(to top, #f5f4f0 0%, transparent 100%)" }}
        />
      </div>
    </section>
  );
}
