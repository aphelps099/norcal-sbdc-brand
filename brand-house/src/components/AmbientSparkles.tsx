"use client";

import { useEffect, useId, useRef } from "react";
import gsap from "gsap";

type SparkleSeed = {
  /** Position as percentage of container (0–100) */
  left: number;
  top: number;
  /** Size in px */
  size: number;
  /** Delay in seconds */
  delay: number;
  /** Floating drift amplitude in px */
  drift: number;
  /** Twinkle period in seconds */
  twinkle: number;
  /** Tint: 'royal' | 'steel' | 'navy' */
  tint: "royal" | "steel" | "navy";
};

const SEEDS: SparkleSeed[] = [
  { left: 8, top: 18, size: 18, delay: 0.0, drift: 6, twinkle: 3.4, tint: "royal" },
  { left: 22, top: 62, size: 12, delay: 1.1, drift: 8, twinkle: 4.2, tint: "steel" },
  { left: 38, top: 12, size: 22, delay: 0.4, drift: 5, twinkle: 3.8, tint: "royal" },
  { left: 54, top: 78, size: 14, delay: 2.0, drift: 7, twinkle: 4.6, tint: "navy" },
  { left: 71, top: 26, size: 16, delay: 1.6, drift: 6, twinkle: 3.2, tint: "steel" },
  { left: 86, top: 58, size: 20, delay: 0.8, drift: 9, twinkle: 4.0, tint: "royal" },
  { left: 14, top: 82, size: 10, delay: 2.6, drift: 5, twinkle: 3.6, tint: "steel" },
  { left: 46, top: 42, size: 11, delay: 3.2, drift: 6, twinkle: 4.8, tint: "navy" },
  { left: 64, top: 8, size: 13, delay: 0.2, drift: 7, twinkle: 3.5, tint: "steel" },
  { left: 92, top: 88, size: 15, delay: 1.9, drift: 6, twinkle: 4.1, tint: "royal" },
  { left: 30, top: 32, size: 9, delay: 2.3, drift: 5, twinkle: 3.9, tint: "navy" },
  { left: 78, top: 46, size: 17, delay: 0.6, drift: 8, twinkle: 4.4, tint: "royal" },
];

const TINTS: Record<SparkleSeed["tint"], string> = {
  royal: "#1D5AA7",
  steel: "#5684BA",
  navy: "#0f1c2e",
};

/**
 * AmbientSparkles
 * Fixed full-screen layer of gentle drifting "AI sparkles".
 * Each star has its own twinkle + slow vertical bob, set up via GSAP.
 * Pointer events are disabled. Designed to sit above BlueprintBackdrop
 * but below content (use a low zIndex, e.g. 0).
 */
export default function AmbientSparkles({ zIndex = 0 }: { zIndex?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const idBase = useId().replace(/[:]/g, "");

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const stars = containerRef.current!.querySelectorAll<HTMLElement>(
        ".ambient-sparkle"
      );
      stars.forEach((el) => {
        const drift = Number(el.dataset.drift || 6);
        const twinkle = Number(el.dataset.twinkle || 3.5);
        const delay = Number(el.dataset.delay || 0);

        // initial state
        gsap.set(el, { opacity: 0, scale: 0.6, y: 0, rotation: 0 });

        // gentle vertical bob (looped, sine ease)
        gsap.to(el, {
          y: -drift,
          duration: twinkle * 1.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay,
        });

        // soft horizontal sway (different period for organic feel)
        gsap.to(el, {
          x: drift * 0.35,
          duration: twinkle * 1.7,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: delay + 0.3,
        });

        // twinkle: opacity + scale pulse
        gsap.to(el, {
          opacity: 0.65,
          scale: 1,
          duration: twinkle * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay,
        });

        // very slow rotation for the 4-point star feel
        gsap.to(el, {
          rotation: 12,
          duration: twinkle * 2.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: delay + 0.6,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{ zIndex }}
    >
      {SEEDS.map((s, i) => (
        <div
          key={i}
          className="ambient-sparkle absolute"
          data-drift={s.drift}
          data-twinkle={s.twinkle}
          data-delay={s.delay}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            transformOrigin: "center",
            willChange: "transform, opacity",
            filter: `drop-shadow(0 0 ${Math.round(s.size * 0.45)}px ${TINTS[s.tint]}55)`,
          }}
        >
          <Sparkle id={`${idBase}-${i}`} color={TINTS[s.tint]} />
        </div>
      ))}
    </div>
  );
}

/**
 * 4-point AI sparkle (concave diamond) with a soft inner gradient.
 * SVG path is a classic "sparkle"/star-of-life shape used by AI icon sets.
 */
function Sparkle({ id, color }: { id: string; color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`g-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="60%" stopColor={color} stopOpacity="0.7" />
          <stop offset="100%" stopColor={color} stopOpacity="0.4" />
        </radialGradient>
      </defs>
      {/* 4-point sparkle path: top, right, bottom, left points with concave curves */}
      <path
        d="M12 1.5 C12.6 6.4 13.6 9.4 18.5 10 C13.6 10.6 12.6 13.6 12 22.5 C11.4 13.6 10.4 10.6 5.5 10 C10.4 9.4 11.4 6.4 12 1.5 Z"
        fill={`url(#g-${id})`}
      />
    </svg>
  );
}
