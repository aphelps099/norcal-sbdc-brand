"use client";

import { useEffect, useRef, useState } from "react";

export default function SplashIntro() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
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

        tl.to(".intro-logo", {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        }, 0.5);

        tl.to(".intro-rule", {
          opacity: 1, scaleX: 1, duration: 0.6, ease: "power2.out",
        }, 0.8);

        tl.to(".intro-sub", {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
        }, 1.0);

        tl.to(overlayRef.current, {
          opacity: 0, duration: 0.6, ease: "power2.in", delay: 0.9,
        });
      }, overlayRef.current);
    }

    playIntro();
    return () => { ctx?.revert(); };
  }, []);

  if (dismissed) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
    >
      <div
        className="intro-logo font-serif text-lg tracking-[0.02em] text-navy"
        style={{ opacity: 0, transform: "translateY(16px)" }}
      >
        NorCal SBDC
      </div>

      <div
        className="intro-rule w-12 h-px bg-navy/15 my-5"
        style={{ opacity: 0, transform: "scaleX(0)" }}
      />

      <div
        className="intro-sub font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-secondary"
        style={{ opacity: 0, transform: "translateY(10px)" }}
      >
        Brand House
      </div>
    </div>
  );
}
