"use client";

import { useEffect, useRef } from "react";

interface ClientSlide {
  src: string;
  name: string;
  industry: string;
  location?: string;
}

const CLIENTS: ClientSlide[] = [
  {
    src: "/photos/seal-rock-dental.jpg",
    name: "Seal Rock Dental",
    industry: "Healthcare",
    location: "San Francisco",
  },
  {
    src: "/photos/marin-auto.jpg",
    name: "Marin Auto Works",
    industry: "Automotive",
    location: "San Rafael",
  },
  {
    src: "/photos/circosphere.jpg",
    name: "Circosphere",
    industry: "Entertainment",
    location: "Northern California",
  },
  {
    src: "/photos/rejoule.jpg",
    name: "ReJoule",
    industry: "Clean Technology",
    location: "Signal Hill",
  },
  {
    src: "/photos/rep-it-out.jpg",
    name: "Rep It Out",
    industry: "Sports Training",
    location: "Sacramento",
  },
];

/**
 * Full-viewport parallax photo gallery — client spotlights.
 * Each slide is 100vh with a parallax background, navy gradient overlay,
 * business name + industry + location label.
 */
export default function ClientGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;
      const slides = containerRef.current.querySelectorAll(".gallery-slide");

      slides.forEach((slide) => {
        const img = slide.querySelector(".gallery-img") as HTMLElement;
        if (!img) return;

        // Parallax: image moves slower than scroll
        gsap.fromTo(
          img,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        // Fade in text content
        const textEl = slide.querySelector(".gallery-text");
        if (textEl) {
          gsap.fromTo(
            textEl,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: slide,
                start: "top 60%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }
    init();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Section intro */}
      <div className="bg-[#0f1c2e] py-16 md:py-20 px-8 md:px-12">
        <div className="max-w-[780px] mx-auto">
          <span className="font-sans text-[10px] font-800 uppercase tracking-[0.2em] text-white/20 block mb-4">
            Client Spotlight
          </span>
          <h2
            className="text-white/80 tracking-[-0.02em] mb-4"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(24px, 3.5vw, 42px)",
            }}
          >
            The service is the person
          </h2>
          <p className="font-serif text-sm md:text-base text-white/30 leading-relaxed max-w-lg">
            In 300+ client success stories, nobody says &ldquo;the SBDC helped
            me.&rdquo; They say &ldquo;Maria helped me.&rdquo; These are some
            of the people behind the numbers.
          </p>
        </div>
      </div>

      {/* Parallax slides */}
      {CLIENTS.map((client, i) => (
        <div
          key={client.name}
          className="gallery-slide relative h-[85vh] md:h-screen overflow-hidden"
        >
          {/* Parallax image — 130% height for travel room */}
          <div
            className="gallery-img absolute inset-x-0 -top-[15%] h-[130%] bg-cover bg-center"
            style={{ backgroundImage: `url(${client.src})` }}
          />

          {/* Dark gradient overlay — heavier at bottom for text */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,28,46,0.15) 0%, rgba(15,28,46,0.35) 40%, rgba(15,28,46,0.75) 100%)",
            }}
          />

          {/* Text content — bottom left */}
          <div className="gallery-text absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-20 pb-12 md:pb-16 z-10">
            <div className="max-w-[600px]">
              <span className="font-sans text-[10px] font-800 uppercase tracking-[0.2em] text-white/30 block mb-3">
                {client.industry}
                {client.location && (
                  <>
                    <span className="mx-2 text-white/15">&middot;</span>
                    {client.location}
                  </>
                )}
              </span>
              <h3
                className="text-white/90 tracking-[-0.02em]"
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 56px)",
                  lineHeight: 1.1,
                }}
              >
                {client.name}
              </h3>
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-12 md:bottom-16 right-8 md:right-16 lg:right-20">
              <span
                className="font-sans text-white/15 tabular-nums"
                style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 500 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
