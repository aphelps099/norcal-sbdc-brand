"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * ThinkingCluster
 * A small cluster of "+" marks that hovers gently and morphs.
 *
 * Inspired by Claude's chat "thinking" micro-animation: subtle hover,
 * scale breathing, and one element that rotates / shape-shifts between
 * plus → asterisk → 4-point sparkle. Designed to live in the hero
 * column next to "Generate".
 *
 * Restraint > spectacle: low contrast, slow easing, never distracts.
 */
export default function ThinkingCluster({
  size = 220,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Whole cluster: gentle vertical hover (4s sine in/out)
      gsap.to(".tc-cluster", {
        y: -6,
        duration: 4.0,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Cluster: micro horizontal sway (different period for organic feel)
      gsap.to(".tc-cluster", {
        x: 3,
        duration: 5.7,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Hero asterisk: continuous slow spin + gentle breathing scale
      gsap.to(".tc-hero", {
        rotation: 360,
        duration: 14,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
      gsap.to(".tc-hero", {
        scale: 1.06,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "50% 50%",
      });

      // Small plus #1: independent bob + pulse
      gsap.to(".tc-p1", {
        y: -4,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.4,
      });
      gsap.to(".tc-p1", {
        opacity: 0.55,
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Small plus #2: opposite bob + slow rotation
      gsap.to(".tc-p2", {
        y: 5,
        duration: 3.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.8,
      });
      gsap.to(".tc-p2", {
        rotation: -45,
        duration: 9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "50% 50%",
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* soft halo gradient behind hero plus */}
          <radialGradient id="tc-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1D5AA7" stopOpacity="0.10" />
            <stop offset="60%" stopColor="#5684BA" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#5684BA" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Cluster-wide opacity softens everything in one place */}
        <g className="tc-cluster" style={{ transformOrigin: "100px 100px", opacity: 0.7 }}>
          {/* soft halo behind hero */}
          <circle cx="100" cy="100" r="60" fill="url(#tc-halo)" opacity="0.6" />

          {/* Hero asterisk — 12-spoke radial fan in white, slow spin */}
          <g className="tc-hero" style={{ transformOrigin: "100px 100px" }}>
            <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.85">
              {/* 6 lines × 2 arms each = 12 spokes. Rotations every 30°. */}
              <line x1="100" y1="50" x2="100" y2="150" />
              <line x1="100" y1="50" x2="100" y2="150" transform="rotate(30 100 100)" />
              <line x1="100" y1="50" x2="100" y2="150" transform="rotate(60 100 100)" />
              <line x1="100" y1="50" x2="100" y2="150" transform="rotate(90 100 100)" />
              <line x1="100" y1="50" x2="100" y2="150" transform="rotate(120 100 100)" />
              <line x1="100" y1="50" x2="100" y2="150" transform="rotate(150 100 100)" />
            </g>
          </g>

          {/* Small plus 1 — top-right */}
          <g
            className="tc-p1"
            style={{ transformOrigin: "152px 56px", opacity: 0.6 }}
          >
            <path
              d="M152 44 L152 68 M140 56 L164 56"
              stroke="#5684BA"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>

          {/* Small plus 2 — bottom-left, slow rotation toward -45° */}
          <g
            className="tc-p2"
            style={{ transformOrigin: "52px 148px", opacity: 0.5 }}
          >
            <path
              d="M52 138 L52 158 M42 148 L62 148"
              stroke="#A73B44"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          {/* Tiny static plus — bottom-right, breathes via cluster only */}
          <path
            d="M156 144 L156 158 M149 151 L163 151"
            stroke="#5684BA"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.4"
          />
        </g>
      </svg>
    </div>
  );
}
