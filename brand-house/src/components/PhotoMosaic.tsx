"use client";

import { useEffect, useRef } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&fit=crop&auto=format",
    pos: "center 40%",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&fit=crop&auto=format",
    pos: "center",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fit=crop&auto=format",
    pos: "center",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&fit=crop&auto=format",
    pos: "center",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop&auto=format",
    pos: "center",
    span: "col-span-1 row-span-1",
  },
];

export default function PhotoMosaic() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        const tiles = sectionRef.current!.querySelectorAll<HTMLElement>(".mosaic-tile");
        tiles.forEach((tile, i) => {
          gsap.fromTo(
            tile,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.9,
              ease: "power3.out",
              delay: i * 0.12,
              scrollTrigger: {
                trigger: tile,
                start: "top 85%",
              },
            }
          );
        });
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      {/* Top text band */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <p
          className="font-mono text-text-tertiary uppercase"
          style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}
        >
          Visual Identity
        </p>
        <h2
          className="font-serif text-navy mt-3 leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
        >
          Photography that<br />tells our story.
        </h2>
      </div>

      {/* Mosaic grid */}
      <div className="px-4 sm:px-6 pb-4">
        <div
          className="grid gap-2 sm:gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "clamp(180px, 22vw, 320px)",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`mosaic-tile relative overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                style={{ objectPosition: img.pos }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
