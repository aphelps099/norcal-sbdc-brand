"use client";

import type { NavConfig } from "@/lib/section-types";

interface Props {
  config: NavConfig;
}

export default function SiteNav({ config }: Props) {
  const { brandText, menuItems, glassBg } = config;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(16px, 4vw, 40px)",
        height: "56px",
        fontFamily: "var(--sans, system-ui, sans-serif)",
        fontSize: "0.7rem",
        fontWeight: 600,
        letterSpacing: "0.06em",
        color: "#fff",
        background: glassBg ? "rgba(15,28,46,0.6)" : "rgba(15,28,46,0.95)",
        backdropFilter: glassBg ? "blur(16px) saturate(1.4)" : "none",
        WebkitBackdropFilter: glassBg ? "blur(16px) saturate(1.4)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <span style={{ fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em" }}>
        {brandText}
      </span>
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
