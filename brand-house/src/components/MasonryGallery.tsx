"use client";

import { useEffect, useRef } from "react";
import { GALLERY_ITEMS, type GalleryItem } from "@/lib/gallery-data";

/** Split gallery items into segments at fullWidth boundaries. */
function splitSegments(items: GalleryItem[]) {
  const segments: { masonry: GalleryItem[]; fullWidth?: GalleryItem }[] = [];
  let current: GalleryItem[] = [];

  for (const item of items) {
    if (item.fullWidth) {
      segments.push({ masonry: current, fullWidth: item });
      current = [];
    } else {
      current.push(item);
    }
  }
  if (current.length > 0) {
    segments.push({ masonry: current });
  }
  return segments;
}

function Tile({ item }: { item: GalleryItem }) {
  if (item.type === "video") {
    return (
      <div
        className="masonry-item break-inside-avoid mb-[3px] overflow-hidden"
        style={{ opacity: 0, transform: "translateY(40px)" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
          style={{
            aspectRatio: item.aspectRatio,
            objectFit: "cover",
            objectPosition: item.objectPosition ?? "center",
          }}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div
      className="masonry-item break-inside-avoid mb-[3px] overflow-hidden"
      style={{ opacity: 0, transform: "translateY(40px)" }}
    >
      <img
        src={item.src}
        alt={item.alt ?? ""}
        loading="lazy"
        className="w-full h-auto block object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
        style={{
          aspectRatio: item.aspectRatio,
          objectPosition: item.objectPosition ?? "center",
        }}
      />
    </div>
  );
}

function FullWidthTile({ item }: { item: GalleryItem }) {
  if (item.type === "video") {
    return (
      <div
        className="masonry-item mb-[3px] overflow-hidden"
        style={{ opacity: 0, transform: "translateY(40px)" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full block transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
          style={{
            aspectRatio: item.aspectRatio,
            objectFit: "cover",
            objectPosition: item.objectPosition ?? "center",
          }}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div
      className="masonry-item mb-[3px] overflow-hidden"
      style={{ opacity: 0, transform: "translateY(40px)" }}
    >
      <img
        src={item.src}
        alt={item.alt ?? ""}
        loading="lazy"
        className="w-full block object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
        style={{
          aspectRatio: item.aspectRatio,
          objectPosition: item.objectPosition ?? "center",
        }}
      />
    </div>
  );
}

export default function MasonryGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const segments = splitSegments(GALLERY_ITEMS);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      containerRef.current
        ?.querySelectorAll<HTMLElement>(".masonry-item")
        .forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      return;
    }

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!containerRef.current) return;

      ctx = gsap.context(() => {
        ScrollTrigger.batch(".masonry-item", {
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: 0.06,
              duration: 0.8,
              ease: "power3.out",
            });
          },
          start: "top 92%",
        });
      }, containerRef.current);
    }

    init();
    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0f1c2e] px-[3px] py-[3px]">
      {segments.map((seg, i) => (
        <div key={i}>
          {seg.masonry.length > 0 && (
            <div
              className="columns-2 sm:columns-3 lg:columns-4"
              style={{ columnGap: "3px" }}
            >
              {seg.masonry.map((item) => (
                <Tile key={item.id} item={item} />
              ))}
            </div>
          )}
          {seg.fullWidth && <FullWidthTile item={seg.fullWidth} />}
        </div>
      ))}
    </section>
  );
}
