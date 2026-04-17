"use client";

/**
 * BlueprintBackdrop
 * ─────────────────
 * Fixed, full-viewport technical-blueprint pattern for the /generate page.
 * Feels like a kit / building tool: a subtle 64px navy grid, with finer
 * 8px subgrid, plus a vignette. Designed to sit BEHIND the GrainBackdrop
 * so the grain roughens up the precise geometry.
 *
 * Kept intentionally quiet — enough to feel like draft paper, not enough
 * to compete with the content above it.
 */
export default function BlueprintBackdrop({
  zIndex = 0,
}: {
  zIndex?: number;
}) {
  const NAVY = "15, 28, 46";
  const MAJOR = 64; // px
  const MINOR = 8; // px

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex,
        // Cream base so the whole page feels like blueprint paper
        backgroundColor: "#f5f4f0",
      }}
    >
      {/* Minor grid — 8px, very faint */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(${NAVY}, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(${NAVY}, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: `${MINOR}px ${MINOR}px`,
        }}
      />

      {/* Major grid — 64px, slightly stronger */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(${NAVY}, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(${NAVY}, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: `${MAJOR}px ${MAJOR}px`,
        }}
      />

      {/* Tick marks at major intersections — small plus signs for that
          "technical drawing" feel. Rendered via radial mask on intersections. */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.55 }}
        aria-hidden
      >
        <defs>
          <pattern
            id="blueprint-tick"
            x="0"
            y="0"
            width={MAJOR}
            height={MAJOR}
            patternUnits="userSpaceOnUse"
          >
            {/* Plus-sign tick at top-left of each major cell */}
            <line
              x1="-4"
              y1="0"
              x2="4"
              y2="0"
              stroke={`rgba(${NAVY}, 0.22)`}
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="-4"
              x2="0"
              y2="4"
              stroke={`rgba(${NAVY}, 0.22)`}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-tick)" />
      </svg>

      {/* Subtle diagonal engineering hatch in the far corners for texture */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(${NAVY}, 0.04) 0%, transparent 40%),
            radial-gradient(circle at 85% 80%, rgba(${NAVY}, 0.04) 0%, transparent 40%)
          `,
        }}
      />

      {/* Soft vignette to focus toward center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(15,28,46,0.08) 100%)",
        }}
      />
    </div>
  );
}
