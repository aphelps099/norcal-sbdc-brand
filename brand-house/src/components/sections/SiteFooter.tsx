"use client";

import type { FooterConfig } from "@/lib/section-types";

interface Props {
  config: FooterConfig;
}

export default function SiteFooter({ config }: Props) {
  const { brandText, year, links, bgColor } = config;
  const isDark = bgColor.startsWith('#0') || bgColor.startsWith('#1');
  const textColor = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)';

  return (
    <footer
      style={{
        background: bgColor,
        borderTop: `1px solid ${borderColor}`,
        padding: "64px clamp(24px, 5vw, 64px)",
        fontFamily: "var(--sans, system-ui, sans-serif)",
      }}
    >
      <div style={{
        maxWidth: "1120px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{
            fontSize: "0.7rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: textColor,
          }}>
            {brandText}
          </span>
          <span style={{
            fontFamily: "var(--mono, monospace)",
            fontSize: "0.55rem",
            color: textColor,
            letterSpacing: "0.05em",
          }}>
            Brand House &middot; v{year}.1
          </span>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--mono, monospace)",
                fontSize: "0.55rem",
                color: textColor,
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              {link.label}
            </a>
          ))}
          <span style={{
            fontFamily: "var(--mono, monospace)",
            fontSize: "0.55rem",
            color: textColor,
            letterSpacing: "0.05em",
          }}>
            &copy; {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
