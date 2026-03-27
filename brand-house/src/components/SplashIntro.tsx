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

        // Logo fades in
        tl.to(".splash-logo", {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }, 0.2);

        // Brief hold, then fade everything out
        tl.to(".splash-logo", {
          opacity: 0,
          scale: 1.04,
          duration: 0.5,
          ease: "power2.in",
        }, 1.6);

        tl.to(overlayRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        }, 1.8);
      }, overlayRef.current);
    }

    playIntro();
    return () => { ctx?.revert(); };
  }, []);

  if (dismissed) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep"
    >
      <img
        src="/logo-white.png"
        alt="NorCal SBDC"
        className="splash-logo w-[220px] sm:w-[280px]"
        style={{ opacity: 0, transform: "scale(0.96)" }}
      />
    </div>
  );
}
