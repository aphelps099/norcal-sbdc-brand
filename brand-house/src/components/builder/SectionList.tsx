"use client";

import type { SectionConfig } from "@/lib/section-types";

const TYPE_LABELS: Record<string, string> = {
  nav: "Navigation",
  splash: "Splash Intro",
  hero: "Hero Grid",
  manifesto: "Manifesto",
  chapter: "Chapter Grid",
  custom: "Custom HTML",
  footer: "Footer",
};

const TYPE_ICONS: Record<string, string> = {
  nav: "☰",
  splash: "◉",
  hero: "▦",
  manifesto: "¶",
  chapter: "⊞",
  custom: "⟨/⟩",
  footer: "▬",
};

interface Props {
  sections: SectionConfig[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onMove: (fromIndex: number, toIndex: number) => void;
  onRemove: (id: string) => void;
}

export default function SectionList({ sections, selectedId, onSelect, onMove, onRemove }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {sections.map((section, idx) => (
        <div
          key={section.id}
          onClick={() => onSelect(section.id)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            background: section.id === selectedId ? "rgba(29,90,167,0.08)" : "transparent",
            border: section.id === selectedId ? "1px solid rgba(29,90,167,0.2)" : "1px solid transparent",
            transition: "all 0.15s ease",
          }}
        >
          {/* Drag arrows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <button
              onClick={(e) => { e.stopPropagation(); if (idx > 0) onMove(idx, idx - 1); }}
              disabled={idx === 0}
              style={arrowBtn}
              title="Move up"
            >
              ▲
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); if (idx < sections.length - 1) onMove(idx, idx + 1); }}
              disabled={idx === sections.length - 1}
              style={arrowBtn}
              title="Move down"
            >
              ▼
            </button>
          </div>

          {/* Icon + label */}
          <span style={{ fontSize: "0.9rem", width: "20px", textAlign: "center", opacity: 0.5 }}>
            {TYPE_ICONS[section.type] || "■"}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              color: section.id === selectedId ? "#1D5AA7" : "#333",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}>
              {TYPE_LABELS[section.type] || section.type}
            </div>
            <div style={{
              fontSize: "0.55rem",
              color: "#999",
              fontFamily: "var(--mono, monospace)",
            }}>
              {section.type}
            </div>
          </div>

          {/* Remove */}
          <button
            onClick={(e) => { e.stopPropagation(); onRemove(section.id); }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.7rem",
              color: "#ccc",
              padding: "2px 4px",
              borderRadius: "3px",
              transition: "color 0.15s",
            }}
            title="Remove section"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

const arrowBtn: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "0.45rem",
  color: "#bbb",
  padding: "0",
  lineHeight: 1,
};
