"use client";

import { useId } from "react";

/**
 * GrainBackdrop
 * ─────────────
 * Fixed, full-viewport texture layer for chapter pages.
 * Three stacked fractal-noise SVG layers (fine / mid / coarse) + a subtle
 * radial vignette. Transparent background — this sits ABOVE each page's
 * existing bg(s) so it textures whatever is behind it.
 *
 * This is the /content page's grain treatment extracted for reuse. The
 * fog→steel gradient is NOT included here — that's /content-specific.
 *
 * All layers are pointer-events-none. zIndex defaults to 0 so content
 * wrapped in a relative/zIndex-1 container still sits above.
 *
 * Filter IDs are scoped per-instance via useId() so mounting multiple
 * instances (or this + /content's original backdrop) won't collide.
 */
export default function GrainBackdrop({
  zIndex = 0,
  intensity = 1,
}: {
  zIndex?: number;
  /** 0–1 multiplier on opacity of all grain layers. Default 1. */
  intensity?: number;
}) {
  const uid = useId().replace(/:/g, "");
  const fineId = `grain-fine-${uid}`;
  const midId = `grain-mid-${uid}`;
  const coarseId = `grain-coarse-${uid}`;

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex }}
    >
      {/* Layer 1 — fine grain, the "paper tooth". Soft-light blend. */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.22 * intensity, mixBlendMode: "soft-light" }}
      >
        <filter id={fineId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.6"
            numOctaves="3"
            stitchTiles="stitch"
            seed="4"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="1.2" intercept="-0.1" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter={`url(#${fineId})`} />
      </svg>

      {/* Layer 2 — medium grain for body. Overlay blend gives speckle. */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.12 * intensity, mixBlendMode: "overlay" }}
      >
        <filter id={midId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="2"
            stitchTiles="stitch"
            seed="9"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${midId})`} />
      </svg>

      {/* Layer 3 — coarse low-frequency unevenness. Multiply blend. */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.08 * intensity, mixBlendMode: "multiply" }}
      >
        <filter id={coarseId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.22"
            numOctaves="1"
            stitchTiles="stitch"
            seed="17"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${coarseId})`} />
      </svg>

      {/* Subtle vignette — corners darken slightly, adds depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(15,28,46,0.12) 100%)",
        }}
      />
    </div>
  );
}
