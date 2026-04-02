interface SbdcWatermarkProps {
  className?: string;
  /** Opacity of the watermark (0-1). Default 0.04. */
  opacity?: number;
}

/**
 * Oversized SBDC star/compass motif — used as a background watermark
 * in dark sections for institutional depth. Inspired by CA SBDC's
 * recurring star seal treatment.
 */
export default function SbdcWatermark({
  className = "",
  opacity = 0.04,
}: SbdcWatermarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" opacity={opacity} />
      <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="0.5" opacity={opacity * 0.7} />

      {/* 5-point star */}
      <path
        d="M200 30 L232 140 L350 140 L255 210 L282 330 L200 258 L118 330 L145 210 L50 140 L168 140 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity={opacity}
      />

      {/* Inner star detail lines */}
      <path
        d="M200 80 L218 150 L290 150 L232 195 L250 270 L200 230 L150 270 L168 195 L110 150 L182 150 Z"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity={opacity * 0.6}
      />

      {/* Compass cardinal lines */}
      <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" strokeWidth="0.5" opacity={opacity * 0.4} />
      <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="0.5" opacity={opacity * 0.4} />

      {/* Diagonal compass lines */}
      <line x1="55" y1="55" x2="345" y2="345" stroke="currentColor" strokeWidth="0.3" opacity={opacity * 0.3} />
      <line x1="345" y1="55" x2="55" y2="345" stroke="currentColor" strokeWidth="0.3" opacity={opacity * 0.3} />

      {/* Outer ring text track (decorative arcs) */}
      <path
        d="M 200 25 A 175 175 0 0 1 375 200"
        stroke="currentColor"
        strokeWidth="0.3"
        fill="none"
        opacity={opacity * 0.3}
        strokeDasharray="4 8"
      />
      <path
        d="M 375 200 A 175 175 0 0 1 200 375"
        stroke="currentColor"
        strokeWidth="0.3"
        fill="none"
        opacity={opacity * 0.3}
        strokeDasharray="4 8"
      />
    </svg>
  );
}
