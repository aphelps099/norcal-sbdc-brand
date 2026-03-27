"use client";

import { useEffect, useRef } from "react";

const footerImages = [
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&fit=crop&auto=format",
    pos: "center",
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80&fit=crop&auto=format",
    pos: "center",
  },
  {
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80&fit=crop&auto=format",
    pos: "center",
  },
];

export default function PhotoFooter() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        const tiles = sectionRef.current!.querySelectorAll<HTMLElement>(".footer-tile");
        tiles.forEach((tile, i) => {
          gsap.fromTo(
            tile,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0,
              duration: 0.8, ease: "power3.out",
              delay: i * 0.1,
              scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            }
          );
        });
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-4 sm:px-6 pb-4 sm:pb-6">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {footerImages.map((img, i) => (
          <div
            key={i}
            className="footer-tile relative overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src={img.src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              style={{ objectPosition: img.pos }}
            />
            {/* Subtle dark overlay on bottom third */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
