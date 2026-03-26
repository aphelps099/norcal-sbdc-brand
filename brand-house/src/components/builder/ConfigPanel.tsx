"use client";

import type { SectionConfig } from "@/lib/section-types";
import HeroConfig from "./HeroConfig";
import ManifestoConfig from "./ManifestoConfig";
import ChapterConfig from "./ChapterConfig";
import NavConfig from "./NavConfig";
import FooterConfig from "./FooterConfig";
import CustomConfig from "./CustomConfig";

interface Props {
  section: SectionConfig;
  onUpdate: (config: Record<string, unknown>) => void;
}

export default function ConfigPanel({ section, onUpdate }: Props) {
  const header = (
    <div style={{
      padding: "16px 20px",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }}>
      <span style={{
        fontSize: "0.6rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "#1D5AA7",
        fontFamily: "var(--mono, monospace)",
      }}>
        {section.type}
      </span>
      <span style={{ fontSize: "0.55rem", color: "#bbb", fontFamily: "var(--mono, monospace)" }}>
        {section.id}
      </span>
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
      panel = <div style={{ padding: "20px", color: "#999", fontSize: "0.8rem" }}>No config panel for this section type.</div>;
  }

  return (
    <div>
      {header}
      <div style={{ padding: "16px 20px" }}>
        {panel}
      </div>
    </div>
  );
}
