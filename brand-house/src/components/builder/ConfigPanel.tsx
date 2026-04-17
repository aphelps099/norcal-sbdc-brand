"use client";

import type { SectionConfig } from "@/lib/section-types";
import HeroConfig from "./HeroConfig";
import ManifestoConfig from "./ManifestoConfig";
import ChapterConfig from "./ChapterConfig";
import NavConfig from "./NavConfig";
import FooterConfig from "./FooterConfig";
import CustomConfig from "./CustomConfig";

const TYPE_LABELS: Record<string, string> = {
  nav: "Navigation",
  splash: "Splash Intro",
  hero: "Hero Grid (SRG)",
  manifesto: "Manifesto",
  chapter: "Chapter Grid",
  custom: "Custom HTML",
  footer: "Footer",
};

const TYPE_COLORS: Record<string, string> = {
  nav: "#6366f1",
  splash: "#f59e0b",
  hero: "#1D5AA7",
  manifesto: "#A73B44",
  chapter: "#22c55e",
  custom: "#8b5cf6",
  footer: "#64748b",
};

interface Props {
  section: SectionConfig;
  onUpdate: (config: Record<string, unknown>) => void;
}

export default function ConfigPanel({ section, onUpdate }: Props) {
  const color = TYPE_COLORS[section.type] || "#888";

  const header = (
    <div style={{
      padding: "14px 20px",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      position: "sticky",
      top: 0,
      background: "#fff",
      zIndex: 5,
    }}>
      {/* Color indicator */}
      <div style={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: color,
        flexShrink: 0,
      }} />
      <div>
        <div style={{
          fontSize: "0.65rem",
          fontWeight: 700,
          color: "#222",
        }}>
          {TYPE_LABELS[section.type] || section.type}
        </div>
        <div style={{
          fontSize: "0.5rem",
          color: "#bbb",
          fontFamily: "var(--mono, monospace)",
          marginTop: "1px",
        }}>
          {section.id}
        </div>
      </div>
    </div>
  );

  let panel: React.ReactNode = null;

  switch (section.type) {
    case "hero":
      panel = <HeroConfig config={section.config} onUpdate={onUpdate} />;
      break;
    case "manifesto":
      panel = <ManifestoConfig config={section.config} onUpdate={onUpdate} />;
      break;
    case "chapter":
      panel = <ChapterConfig config={section.config} onUpdate={onUpdate} />;
      break;
    case "nav":
      panel = <NavConfig config={section.config} onUpdate={onUpdate} />;
      break;
    case "footer":
      panel = <FooterConfig config={section.config} onUpdate={onUpdate} />;
      break;
    case "custom":
      panel = <CustomConfig config={section.config} onUpdate={onUpdate} />;
      break;
    default:
      panel = (
        <div style={{ padding: "20px", color: "#999", fontSize: "0.75rem" }}>
          No config panel for this section type.
        </div>
      );
  }

  return (
    <div>
      {header}
      <div style={{ padding: "12px 20px 20px" }}>
        {panel}
      </div>
    </div>
  );
}
