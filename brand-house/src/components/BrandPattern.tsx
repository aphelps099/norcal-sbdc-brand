/**
 * SVG Pattern Library — reusable brand patterns for hero panels and section accents.
 * Hard-edged, flat, no gradients. Navy + Pool + Cream palette only.
 */

interface PatternProps {
  className?: string;
}

/** Diagonal stripes — Navy on Pool. US Chamber-inspired. */
export function PatternStripes({ className = "" }: PatternProps) {
  return (
    <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="stripes" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
          <rect width="8" height="20" fill="rgba(15,28,46,0.12)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#8FC5D9" />
      <rect width="100%" height="100%" fill="url(#stripes)" />
    </svg>
  );
}

/** Dot grid — subtle texture on Cream. */
export function PatternDots({ className = "" }: PatternProps) {
  return (
    <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" patternUnits="userSpaceOnUse" width="28" height="28">
          <circle cx="14" cy="14" r="1.5" fill="rgba(15,28,46,0.06)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#f5f4f0" />
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

/** Concentric arcs — quarter circles radiating from bottom-left. */
export function PatternArcs({ className = "" }: PatternProps) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMinYMax slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#1D5AA7" />
      {[80, 140, 200, 260, 320, 380].map((r) => (
        <circle key={r} cx="0" cy="400" r={r} fill="none" stroke="rgba(143,197,217,0.12)" strokeWidth="1" />
      ))}
    </svg>
  );
}

/** Oversized letterform — specimen display. */
export function PatternSpecimen({ letter = "Aa", className = "" }: PatternProps & { letter?: string }) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#0f1c2e" />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="central"
        fill="rgba(143,197,217,0.06)"
        fontFamily="var(--sans)"
        fontWeight="300"
        fontSize="280"
        letterSpacing="-0.04em"
      >
        {letter}
      </text>
    </svg>
  );
}

/** 5-point diagonal gradient with film grain overlay — for Colors section. */
export function PatternPalette({ className = "" }: PatternProps) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* 5-point diagonal gradient: Navy → Royal → Pool → Berry → Evergreen */}
        <linearGradient id="palette-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f1c2e" />
          <stop offset="28%" stopColor="#1D5AA7" />
          <stop offset="50%" stopColor="#8FC5D9" />
          <stop offset="74%" stopColor="#A73B44" />
          <stop offset="100%" stopColor="#00685E" />
        </linearGradient>
        {/* Fine film grain — subtle texture that preserves color saturation */}
        <filter id="grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
      </defs>
      <rect width="600" height="600" fill="url(#palette-grad)" filter="url(#grain)" />
    </svg>
  );
}

/** Oversized quotation mark — for Voice/Stories sections. */
export function PatternQuote({ className = "" }: PatternProps) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#0f1c2e" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill="rgba(143,197,217,0.07)"
        fontFamily="var(--sans)"
        fontWeight="300"
        fontSize="400"
      >
        &ldquo;
      </text>
    </svg>
  );
}

/** Grid / wireframe pattern — for Templates section. */
export function PatternGrid({ className = "" }: PatternProps) {
  return (
    <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" patternUnits="userSpaceOnUse" width="48" height="48">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(143,197,217,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#0f1c2e" />
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

/** Calendar / radial lines — for Calendar section. */
export function PatternRadial({ className = "" }: PatternProps) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#1D5AA7" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x2 = 200 + Math.cos(angle) * 180;
        const y2 = 200 + Math.sin(angle) * 180;
        return (
          <line key={i} x1="200" y1="200" x2={x2} y2={y2} stroke="rgba(245,244,240,0.06)" strokeWidth="1" />
        );
      })}
      <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(245,244,240,0.06)" strokeWidth="1" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(245,244,240,0.04)" strokeWidth="1" />
    </svg>
  );
}

/** Stacked horizontal index lines — for Glossary section. */
export function PatternIndex({ className = "" }: PatternProps) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#0f1c2e" />
      {Array.from({ length: 16 }).map((_, i) => (
        <rect
          key={i}
          x="60"
          y={30 + i * 22}
          width={120 + (i % 3) * 60}
          height="1"
          fill="rgba(143,197,217,0.06)"
        />
      ))}
      {["A", "C", "F", "K", "S"].map((letter, i) => (
        <text
          key={letter}
          x="40"
          y={42 + i * 66}
          textAnchor="end"
          fill="rgba(143,197,217,0.04)"
          fontFamily="var(--sans)"
          fontWeight="300"
          fontSize="18"
        >
          {letter}
        </text>
      ))}
    </svg>
  );
}

/** Social icons pattern — for Content section. */
export function PatternSocial({ className = "" }: PatternProps) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#8FC5D9" />
      {/* Abstract @ symbols as pattern */}
      {[
        { x: 80, y: 100 }, { x: 200, y: 80 }, { x: 320, y: 120 },
        { x: 120, y: 220 }, { x: 260, y: 200 }, { x: 340, y: 280 },
        { x: 80, y: 320 }, { x: 200, y: 340 },
      ].map((pos, i) => (
        <circle key={i} cx={pos.x} cy={pos.y} r={16 + (i % 3) * 6} fill="none" stroke="rgba(15,28,46,0.06)" strokeWidth="1" />
      ))}
    </svg>
  );
}

/** Camera/lens aperture — for Photography section. */
export function PatternLens({ className = "" }: PatternProps) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#0f1c2e" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(143,197,217,0.07)" strokeWidth="1" />
      <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(143,197,217,0.05)" strokeWidth="1" />
      <circle cx="200" cy="200" r="40" fill="none" stroke="rgba(143,197,217,0.04)" strokeWidth="1" />
      {/* Aperture blades */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x1 = 200 + Math.cos(angle) * 45;
        const y1 = 200 + Math.sin(angle) * 45;
        const x2 = 200 + Math.cos(angle) * 115;
        const y2 = 200 + Math.sin(angle) * 115;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(143,197,217,0.05)" strokeWidth="1" />;
      })}
    </svg>
  );
}

/** Map/region — for Logos/regional branding. */
export function PatternRegion({ className = "" }: PatternProps) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#0f1c2e" />
      {/* Abstract NorCal region outline — simplified geometric */}
      <path
        d="M 100 80 L 160 60 L 240 80 L 300 120 L 320 200 L 300 280 L 240 320 L 160 340 L 100 300 L 80 200 Z"
        fill="none"
        stroke="rgba(143,197,217,0.06)"
        strokeWidth="1"
      />
      <path
        d="M 120 100 L 170 85 L 230 100 L 280 135 L 295 200 L 280 265 L 230 300 L 170 315 L 120 280 L 105 200 Z"
        fill="none"
        stroke="rgba(143,197,217,0.04)"
        strokeWidth="1"
      />
    </svg>
  );
}
