"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["People", "Funded", "Connected", "Better"];

export default function HeroEditorial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const [currentWord, setCurrentWord] = useState(0);

  // Word rotation
  useEffect(() => {
    let gsapModule: typeof import("gsap")["gsap"] | null = null;
    let timer: ReturnType<typeof setInterval>;

    async function init() {
      const mod = await import("gsap");
      gsapModule = mod.gsap;

      // Initial entrance
      if (wordRef.current) {
        gsapModule.fromTo(
          wordRef.current,
          { opacity: 0, y: 50, rotateX: -50 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.9, ease: "power3.out", delay: 2.4 }
        );
      }

      timer = setInterval(() => {
        if (!wordRef.current || !gsapModule) return;

        const gsap = gsapModule;
        const el = wordRef.current;

        gsap.to(el, {
          opacity: 0,
          y: -40,
          rotateX: 50,
          duration: 0.45,
          ease: "power2.in",
          onComplete: () => {
            setCurrentWord((prev) => {
              const next = prev + 1;
              if (next >= WORDS.length) {
                clearInterval(timer);
                return WORDS.length - 1;
              }
              return next;
            });
            gsap.fromTo(
              el,
              { opacity: 0, y: 50, rotateX: -50 },
              { opacity: 1, y: 0, rotateX: 0, duration: 0.7, ease: "power3.out" }
            );
          },
        });
      }, 2400);
    }

    init();
    return () => clearInterval(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll fade
  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function initScroll() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-static",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 2 }
        );

        gsap.to(".hero-content", {
          opacity: 0,
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "60% top",
            scrub: 1,
          },
        });
      }, sectionRef.current);
    }

    initScroll();
    return () => { ctx?.revert(); };
  }, []);

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
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Content */}
        <div className="hero-content relative z-10 h-full flex flex-col items-center justify-center px-6">
          <div className="text-center" style={{ perspective: "800px" }}>
            <h1
              className="hero-static font-serif text-white leading-[1.02] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(44px, 8.5vw, 130px)",
                fontWeight: 400,
                opacity: 0,
              }}
            >
              Your Business
            </h1>

            <div
              className="overflow-hidden"
              style={{
                height: "clamp(54px, 10vw, 150px)",
                marginTop: "clamp(2px, 0.3vw, 6px)",
              }}
            >
              <span
                ref={wordRef}
                className="font-serif text-white/90 inline-block tracking-[-0.04em]"
                style={{
                  fontSize: "clamp(44px, 8.5vw, 130px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  opacity: 0,
                  transformOrigin: "center bottom",
                }}
              >
                {WORDS[currentWord]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
