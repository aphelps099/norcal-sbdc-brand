/**
 * Inline SVG social brand marks — Instagram, LinkedIn, Facebook, X.
 *
 * Why inline: Simple Icons dropped LinkedIn in v14 over trademark concerns,
 * Material Symbols doesn't carry brand logos, and loading Font Awesome just
 * for four marks is overkill. Inline paths guarantee consistent rendering
 * and inherit color via `currentColor` so they can sit on any hero bg.
 *
 * Usage:
 *   <IconInstagram size={14} />
 *   <SocialBrandRow size={13} gap={6} />  // IG · LI · FB · X row
 */

interface IconProps {
  size?: number;
  className?: string;
  title?: string;
}

const svgBase = (size: number, className?: string, title?: string) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": title ? undefined : true,
  role: title ? "img" : undefined,
  className,
});

export function IconInstagram({ size = 14, className, title }: IconProps) {
  return (
    <svg {...svgBase(size, className, title)}>
      {title ? <title>{title}</title> : null}
      <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608C4.519 2.568 5.786 2.294 7.152 2.232 8.417 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.014 7.052.072 5.206.157 3.66.576 2.44 1.797 1.22 3.017.8 4.563.715 6.409.657 7.689.643 8.093.643 11.358s.014 3.668.072 4.948c.085 1.846.505 3.392 1.726 4.612 1.22 1.22 2.766 1.64 4.612 1.725 1.28.058 1.683.072 4.947.072 3.265 0 3.668-.014 4.948-.072 1.846-.085 3.392-.505 4.612-1.725 1.22-1.22 1.64-2.766 1.725-4.612.058-1.28.072-1.683.072-4.948 0-3.265-.014-3.668-.072-4.948-.085-1.846-.505-3.392-1.725-4.612C20.34.576 18.794.157 16.948.072 15.668.014 15.265 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function IconLinkedIn({ size = 14, className, title }: IconProps) {
  return (
    <svg {...svgBase(size, className, title)}>
      {title ? <title>{title}</title> : null}
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function IconFacebook({ size = 14, className, title }: IconProps) {
  return (
    <svg {...svgBase(size, className, title)}>
      {title ? <title>{title}</title> : null}
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function IconX({ size = 14, className, title }: IconProps) {
  return (
    <svg {...svgBase(size, className, title)}>
      {title ? <title>{title}</title> : null}
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/**
 * Horizontal row of IG / LI / FB / X — used wherever the copy references
 * "Social Posts · IG / LI / FB / X".
 */
export function SocialBrandRow({
  size = 13,
  gap = 8,
  className,
}: {
  size?: number;
  gap?: number;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap }}
      aria-label="Instagram, LinkedIn, Facebook, and X"
    >
      <IconInstagram size={size} />
      <IconLinkedIn size={size} />
      <IconFacebook size={size} />
      <IconX size={size} />
    </span>
  );
}
