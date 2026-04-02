"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroEditorial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      gsap.context(() => {
        gsap.fromTo(".hero-brand", { opacity: 0 }, {
          opacity: 1, duration: 0.12, ease: "none", delay: 3,
        });

        gsap.fromTo(".hero-underline", { scaleX: 0 }, {
          scaleX: 1, duration: 0.6, ease: "power2.out", delay: 3.15,
        });

        gsap.to(".hero-inner", {
          opacity: 0,
          y: -80,
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

    init();
  }, []);

  function handleBrandClick() {
    setClicked(true);
    const next = sectionRef.current?.nextElementSibling as HTMLElement | null;
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setClicked(false), 1200);
  }

  const underlineColor = clicked ? "#1D5AA7" : hovered ? "#1D5AA7" : "white";

  return (
    <section ref={sectionRef} className="relative w-full bg-black overflow-hidden">
      <div className="relative h-screen min-h-[700px]">
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
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="hero-inner relative z-10 h-full flex items-center justify-center px-8">
          <button
            onClick={handleBrandClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="inline-block text-center cursor-pointer bg-transparent border-none outline-none"
          >
            <h1
              className="hero-brand text-white leading-[0.92] tracking-[-0.04em]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(64px, 12vw, 180px)",
                fontWeight: 700,
                opacity: 0,
              }}
            >
              Brand
            </h1>
            <div
              className="hero-underline h-[3px] transition-colors duration-400"
              style={{
                marginTop: "-2px",
                transformOrigin: "left center",
                transform: "scaleX(0)",
                backgroundColor: underlineColor,
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
