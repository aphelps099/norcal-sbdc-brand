"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["People", "Funded", "Connected"];

export default function HeroEditorial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentWord, setCurrentWord] = useState(0);
  const [animReady, setAnimReady] = useState(false);

  // Orchestrate entrance
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 2.2 });

        // Logo fades in
        tl.fromTo(".hero-mark", { opacity: 0 }, {
          opacity: 1, duration: 1, ease: "power2.out",
        });

        // Logo fades out
        tl.to(".hero-mark", {
          opacity: 0, duration: 0.6, ease: "power2.in",
        }, "+=0.6");

        // "Brand" appears as logo leaves
        tl.fromTo(".hero-brand", { opacity: 0, y: 16 }, {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
        }, "-=0.3");

        // Rule draws in
        tl.fromTo(".hero-rule", { scaleX: 0 }, {
          scaleX: 1, duration: 0.7, ease: "power2.inOut",
        }, "-=0.5");

        // Subline appears
        tl.fromTo(".hero-subline", { opacity: 0 }, {
          opacity: 1, duration: 0.7, ease: "power2.out",
          onComplete: () => setAnimReady(true),
        }, "-=0.3");

        // Scroll fade
        gsap.to(".hero-inner", {
          opacity: 0,
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "60% top",
            scrub: 1,
          },
        });
      }, sectionRef.current);

      return () => ctx.revert();
    }

    init();
    return () => clearInterval(timer);
  }, []);

  // Word cycling — only after entrance completes
  useEffect(() => {
    if (!animReady) return;

    let gsapRef: typeof import("gsap")["gsap"] | null = null;
    let timer: ReturnType<typeof setInterval> | undefined;

    async function startCycling() {
      const { gsap } = await import("gsap");
      gsapRef = gsap;

      timer = setInterval(() => {
        const el = document.querySelector(".hero-rotating-word");
        if (!el || !gsapRef) return;

        gsapRef.to(el, {
          opacity: 0,
          y: -14,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setCurrentWord((prev) => (prev + 1) % WORDS.length);
            gsapRef!.fromTo(el,
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }
            );
          },
        });
      }, 2600);
    }

    startCycling();
    return () => { if (timer) clearInterval(timer); };
  }, [animReady]);

  return (
    <section ref={sectionRef} className="relative w-full bg-black overflow-hidden">
      <div className="relative h-screen min-h-[700px]">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://www.norcalsbdc.org/wp-content/uploads/2025/05/emerge-24-footage2.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="hero-inner relative z-10 h-full flex flex-col items-center justify-center px-8">
          {/* Logo — appears then disappears */}
          <img
            src="/logo-white.png"
            alt="NorCal SBDC"
            className="hero-mark absolute w-[180px] sm:w-[220px]"
            style={{ opacity: 0 }}
          />

          {/* "Brand" — appears after logo fades */}
          <h1
            className="hero-brand font-serif text-white text-center leading-[0.92] tracking-[-0.05em]"
            style={{
              fontSize: "clamp(64px, 12vw, 180px)",
              fontWeight: 400,
              opacity: 0,
            }}
          >
            Brand
          </h1>

          {/* Rule */}
          <div
            className="hero-rule w-16 h-px bg-white/20 mt-8 sm:mt-10 mb-8 sm:mb-10"
            style={{ transformOrigin: "center", transform: "scaleX(0)" }}
          />

          {/* Cycling subline */}
          <div
            className="hero-subline flex items-center gap-4 sm:gap-5"
            style={{ opacity: 0 }}
          >
            <span
              className="hero-rotating-word font-sans text-white/70 uppercase text-center tracking-[0.2em] font-800"
              style={{ fontSize: "clamp(11px, 1.2vw, 15px)", minWidth: "130px" }}
            >
              {WORDS[currentWord]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
