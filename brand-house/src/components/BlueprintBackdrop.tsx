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
  // Bigger, simpler grid — single tier, generous cells.
  const MAJOR = 128; // px

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
      {/* Single grid — 128px cells, quiet navy lines. One tier only. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(${NAVY}, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(${NAVY}, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: `${MAJOR}px ${MAJOR}px`,
        }}
      />

      {/* Plus-sign ticks at each grid intersection — technical drawing marker */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
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
            <line x1="-5" y1="0" x2="5" y2="0" stroke={`rgba(${NAVY}, 0.22)`} strokeWidth="1" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke={`rgba(${NAVY}, 0.22)`} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-tick)" />
      </svg>

      {/* Stronger vignette — deeper corners pull focus hard to center.
          Transparent 35% → navy 0.28 at edges (vs old 50% → 0.08). */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(15,28,46,0.28) 100%)",
        }}
      />
    </div>
  );
}
