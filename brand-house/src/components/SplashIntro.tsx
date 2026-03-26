"use client";

import { useEffect, useRef, useState } from "react";

export default function SplashIntro() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDismissed(true);
      return;
    }

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function playIntro() {
      const { gsap } = await import("gsap");

      if (!overlayRef.current) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => setDismissed(true),
        });

        // Phase 1: Logo fades in + rises
        tl.to(".intro-logo", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }, 0.4);

        // Phase 1b: Rule extends
        tl.to(".intro-rule", {
          opacity: 1,
          scaleX: 1,
          duration: 0.5,
          ease: "power2.out",
        }, 0.7);

        // Phase 1c: Subtitle rises in
        tl.to(".intro-sub", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        }, 0.85);

        // Phase 2: Hold, then snap/fade out entire overlay
        tl.to(overlayRef.current, {
          opacity: 0,
          scale: 0.97,
          duration: 0.5,
          ease: "power2.in",
          delay: 1.0,
        });
      }, overlayRef.current);
    }

    playIntro();

    return () => {
      ctx?.revert();
    };
  }, []);

  if (dismissed) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "var(--navy)" }}
    >
      {/* Logo text */}
      <div
        className="intro-logo font-mono text-sm tracking-[0.3em] uppercase text-cream/80"
        style={{ opacity: 0, transform: "translateY(20px)" }}
      >
        NorCal SBDC
      </div>

      {/* Horizontal rule */}
      <div
        className="intro-rule w-16 h-px bg-cream/20 my-6"
        style={{ opacity: 0, transform: "scaleX(0)" }}
      />

      {/* Subtitle */}
      <div
        className="intro-sub font-mono text-xs tracking-[0.2em] uppercase text-cream/40"
        style={{ opacity: 0, transform: "translateY(12px)" }}
      >
        Brand House
      </div>
    </div>
  );
}
