"use client";

import { useEffect, useRef } from "react";

export default function HeroEditorial() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      gsap.context(() => {
        const tl = gsap.timeline({ delay: 2.2 });

        // Logo fades in
        tl.fromTo(".hero-mark", { opacity: 0 }, {
          opacity: 1, duration: 1, ease: "power2.out",
        });

        // Logo fades out + set display none so it's gone
        tl.to(".hero-mark", {
          opacity: 0, duration: 0.5, ease: "power2.in",
          onComplete: () => {
            const el = document.querySelector<HTMLElement>(".hero-mark");
            if (el) el.style.display = "none";
          },
        }, "+=0.5");

        // "Brand" snaps in
        tl.fromTo(".hero-brand", { opacity: 0 }, {
          opacity: 1, duration: 0.15, ease: "none",
        });

        // Scroll fade
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
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="hero-inner relative z-10 h-full flex items-center justify-center px-8">
          {/* Logo — fades in then gone */}
          <img
            src="/logo-white.png"
            alt="NorCal SBDC"
            className="hero-mark absolute w-[180px] sm:w-[220px]"
            style={{ opacity: 0 }}
          />

          {/* "Brand" — snaps in after logo disappears */}
          <h1
            className="hero-brand font-serif text-white text-center leading-[0.92] tracking-[-0.05em]"
            style={{
              fontSize: "clamp(64px, 12vw, 180px)",
              fontWeight: 400,
              opacity: 0,
            }}
          >
            Brand
          </h1>
        </div>
      </div>
    </section>
  );
}
