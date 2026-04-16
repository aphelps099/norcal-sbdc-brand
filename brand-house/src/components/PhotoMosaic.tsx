"use client";

import { useEffect, useRef, useState } from "react";

const ROTATE_WORDS = ["Better.", "People.", "Funded.", "Connected."];

function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATE_WORDS.length);
        setAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className="mosaic-heading font-sans text-navy leading-[0.95] tracking-[-0.04em]"
      style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
    >
      Your Business<br />
      <span
        className="text-royal inline-block"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(12px)" : "translateY(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {ROTATE_WORDS[index]}
      </span>
    </h2>
  );
}

/**
 * Hero mosaic — 5 tiles in a 3-column CSS grid.
 * Real NorCal SBDC clients and advisors only. No stock photography.
 *
 * Layout:
 *   [ Michelle (tall) ]  [ Angel Cha-Cha Sweets (wide) ]
 *   [ Michelle (tall) ]  [ Marin Auto / Lab scene      ]
 *   [ Boutique owner (wide, bottom) ]  [ Rancher       ]
 */
const images = [
  {
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/03/Michelle-8-1-2.jpeg",
    alt: "Michelle Nayfack — After-School Snack Attack",
    caption: "After-School Snack Attack",
    pos: "center 20%",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/11/Angel-Cha-Cha-Sweets-1-970x1200.jpeg",
    alt: "Angel — Cha-Cha Sweets",
    caption: "Cha-Cha Sweets",
    pos: "center 25%",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/07/thumbnail_Nivedita-in-lab-with-Takehiro-1200x675.jpg",
    alt: "Nivedita & Takehiro — Kamet Automation Inc.",
    caption: "Kamet Automation Inc.",
    pos: "center 40%",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMZYn9VzciIvhfESsX47KnHcOhLkJZIY3fGkqi5DJ8Y7cSi8NbG37M7EG0ETqHDFvhdTPBvMqXjn31oO1nIbxh5wA3TqwCt3hD0iIaHY2cVkdqsA3SqsVk6oKKiJuJ0LJVRW8xgPy-TRsIf333Wo6nr=w1350-h900-s-no-gm",
    alt: "Business owner in front of her boutique retail shop",
    caption: "NorCal SBDC Client",
    pos: "center 30%",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMYzkhqGE_G40QFOoQ9ID8cwo_d8HbRjaDEQoMdqXh-ewCVBnu12KKYyeMWJHxUSlaBErDw3xmsSSdQPq-oBB0bXEyoQqlbbKOfXgGxVo_oD4g7QG34fD7Cme_gW5sIC5flUEMxMSrgHMARFOPnMuSn=w1353-h900-s-no-gm",
    alt: "Rancher with border collie and cattle herd",
    caption: "NorCal SBDC Client",
    pos: "center 40%",
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
          ".mosaic-heading",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );

        const tiles = sectionRef.current!.querySelectorAll<HTMLElement>(".mosaic-tile");
        tiles.forEach((tile, i) => {
          gsap.fromTo(
            tile,
            { opacity: 0, y: 40, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              delay: i * 0.08,
              scrollTrigger: { trigger: tile, start: "top 90%" },
            }
          );
        });
      }, sectionRef.current);
    }

    init();
    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white relative">
      {/* Rotating headline */}
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 pt-32 sm:pt-40 pb-0">
        <RotatingHeadline />
      </div>

      {/* Mosaic photo grid */}
      <div className="px-3 sm:px-5 pt-8 sm:pt-10 pb-3 sm:pb-5">
        <div
          className="grid gap-1.5 sm:gap-2"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "clamp(200px, 25vw, 360px)",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`mosaic-tile relative overflow-hidden group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                style={{ objectPosition: img.pos }}
              />
              {/* Caption — slides up on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,28,46,0.72)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-end p-4 sm:p-5">
                <span className="font-label text-[11px] uppercase tracking-[0.12em] text-white/90 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
