"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["People", "Funded", "Connected", "Better"];

export default function HeroEditorial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
          { opacity: 0, y: 40, rotateX: -40 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: "power3.out", delay: 2.4 }
        );
      }

      timer = setInterval(() => {
        if (!wordRef.current || !gsapModule || isAnimating) return;
        setIsAnimating(true);

        const gsap = gsapModule;
        const el = wordRef.current;

        // Animate out
        gsap.to(el, {
          opacity: 0,
          y: -30,
          rotateX: 40,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            setCurrentWord((prev) => {
              const next = prev + 1;
              // Stop on "Better" (last word)
              if (next >= WORDS.length) {
                clearInterval(timer);
                return WORDS.length - 1;
              }
              return next;
            });
            // Animate in
            gsap.fromTo(
              el,
              { opacity: 0, y: 40, rotateX: -40 },
              {
                opacity: 1, y: 0, rotateX: 0,
                duration: 0.6, ease: "power3.out",
                onComplete: () => setIsAnimating(false),
              }
            );
          },
        });
      }, 2200);
    }

    init();
    return () => clearInterval(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll parallax + fade
  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function initScroll() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        // Static text entrance
        gsap.fromTo(
          ".hero-static",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 2 }
        );

        // Scroll fade
        gsap.to(".hero-content", {
          opacity: 0,
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "50% top",
            scrub: 1,
          },
        });

        // Scroll indicator fade
        gsap.to(".scroll-hint", {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "5% top",
            end: "15% top",
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
          {/* Layered overlays for depth */}
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, transparent 0%, rgba(0,0,0,0.3) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="hero-content relative z-10 h-full flex flex-col items-center justify-center px-6">
          <div className="text-center" style={{ perspective: "600px" }}>
            {/* "Your Business" — static */}
            <h1
              className="hero-static font-serif text-white leading-[1.05] tracking-[-0.035em]"
              style={{
                fontSize: "clamp(44px, 8.5vw, 130px)",
                fontWeight: 400,
                opacity: 0,
              }}
            >
              Your Business
            </h1>

            {/* Rotating word */}
            <div
              className="overflow-hidden"
              style={{
                height: "clamp(52px, 10vw, 150px)",
                marginTop: "clamp(4px, 0.5vw, 8px)",
              }}
            >
              <span
                ref={wordRef}
                className="font-serif text-white/90 inline-block tracking-[-0.035em]"
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

        {/* Scroll indicator */}
        <div className="scroll-hint absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span
            className="font-sans text-white/30 uppercase tracking-[0.2em]"
            style={{ fontSize: "0.6rem", fontWeight: 600 }}
          >
            Scroll
          </span>
          <div className="w-px h-8 bg-white/20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-white/60"
              style={{
                height: "40%",
                animation: "scrollPulse 1.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Bottom gradient — blend into cream */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[5]"
          style={{
            height: "200px",
            background:
              "linear-gradient(to top, var(--cream) 0%, rgba(245,244,240,0.6) 40%, transparent 100%)",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes scrollPulse {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(250%); }
          100% { transform: translateY(250%); }
        }
      `}</style>
    </section>
  );
}
