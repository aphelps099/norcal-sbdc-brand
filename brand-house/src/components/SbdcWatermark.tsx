import { STAR_PATH } from "@/lib/brand-tokens";

interface SbdcWatermarkProps {
  className?: string;
  /** Opacity of the watermark (0-1). Default 0.04. */
  opacity?: number;
}

/**
 * Official SBDC star — used as a background watermark in dark sections.
 * Uses the same star path as the nav menu.
 */
export default function SbdcWatermark({
  className = "",
  opacity = 0.04,
}: SbdcWatermarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 2100 2000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d={STAR_PATH}
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        opacity={opacity}
      />
    </svg>
  );
}
