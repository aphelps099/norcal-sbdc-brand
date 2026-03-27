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
        gsap.fromTo(
          ".mosaic-label",
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );

        const tiles = sectionRef.current!.querySelectorAll<HTMLElement>(".mosaic-tile");
        tiles.forEach((tile, i) => {
          gsap.fromTo(
            tile,
            { opacity: 0, y: 50, scale: 0.97 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 1,
              ease: "power3.out",
              delay: i * 0.1,
              scrollTrigger: { trigger: tile, start: "top 88%" },
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
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 pt-32 pb-16">
        <div className="mosaic-label">
          <p
            className="font-sans text-text-tertiary uppercase font-600"
            style={{ fontSize: "0.62rem", letterSpacing: "0.18em" }}
          >
            Visual Identity
          </p>
          <h2
            className="font-serif text-navy mt-4 leading-[1.08] tracking-[-0.025em]"
            style={{ fontSize: "clamp(30px, 4.2vw, 56px)" }}
          >
            Photography that<br />tells our story.
          </h2>
        </div>
      </div>

      <div className="px-3 sm:px-5 pb-3 sm:pb-5">
        <div
          className="grid gap-1.5 sm:gap-2.5"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "clamp(180px, 24vw, 340px)",
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
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                style={{ objectPosition: img.pos }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
