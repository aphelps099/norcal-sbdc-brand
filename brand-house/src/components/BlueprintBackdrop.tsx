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
  // Medium-blue grid lines — royal-ish, kept very transparent so the
  // feeling stays airy. Fog pool at the top fading to a slightly warmer
  // pale blue at the bottom.
  const BLUE = "29, 90, 167"; // --royal #1D5AA7 in rgb
  const MAJOR = 128; // px

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex,
        // Airy, light-blue wash — almost white at top, soft pool at the bottom.
        // Inspired by the content page gradient but lifted several stops.
        background:
          "linear-gradient(180deg, #f4f8fc 0%, #e4eef7 40%, #cfe0ee 100%)",
      }}
    >
      {/* Grid — 128px cells, medium-blue lines, very transparent. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(${BLUE}, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(${BLUE}, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: `${MAJOR}px ${MAJOR}px`,
        }}
      />

      {/* Plus-sign ticks at each grid intersection — also medium blue. */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
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
            <line x1="-5" y1="0" x2="5" y2="0" stroke={`rgba(${BLUE}, 0.30)`} strokeWidth="1" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke={`rgba(${BLUE}, 0.30)`} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-tick)" />
      </svg>

      {/* Broad center spotlight — creamy-white pool of light behind the tool
         so text and form elements sit on a bright, calm surface. Anchored
         slightly below viewport center so it warms the content area (the
         generator) rather than the hero. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 62%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.45) 30%, rgba(255,255,255,0.18) 55%, rgba(255,255,255,0) 75%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Edge vignette — deeper blue cornering that frames the bright center.
         Two stacked radials: a gentle wide falloff + a punchier corner darken. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 80% at 50% 50%, transparent 45%, rgba(29,90,167,0.22) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 60%, rgba(15,28,46,0.14) 100%)",
        }}
      />
    </div>
  );
}
