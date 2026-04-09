"use client";

import { useEffect, useRef } from "react";

interface ColorSwatchGridProps {
  children: React.ReactNode;
}

export default function ColorSwatchGrid({ children }: ColorSwatchGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!gridRef.current) return;

      const items = gridRef.current.children;
      if (!items.length) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          Array.from(items),
          { opacity: 0, y: 24, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
            },
          }
        );
      }, gridRef);
    }

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <div ref={gridRef} className="flex">
      {children}
    </div>
  );
}
