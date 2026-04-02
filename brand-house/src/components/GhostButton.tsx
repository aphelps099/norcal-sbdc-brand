import Link from "next/link";

interface GhostButtonProps {
  label: string;
  href?: string;
  /** "light" = white border on dark bg, "dark" = navy border on light bg */
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Outlined ghost CTA — CA SBDC style.
 * 1px border, uppercase Proxima Nova 800, tracked, fill on hover.
 */
export default function GhostButton({
  label,
  href,
  variant = "light",
  className = "",
}: GhostButtonProps) {
  const base =
    "inline-block font-sans font-800 uppercase tracking-[0.14em] transition-all duration-300 px-7 py-3";
  const size = "text-[11px]";

  const colors =
    variant === "light"
      ? "border border-white/30 text-white/70 hover:bg-white hover:text-navy hover:border-white"
      : "border border-navy/20 text-navy/60 hover:bg-navy hover:text-white hover:border-navy";

  const classes = `${base} ${size} ${colors} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return <button className={classes}>{label}</button>;
}
