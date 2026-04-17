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
  sections: SectionConfig[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onMove: (fromIndex: number, toIndex: number) => void;
  onRemove: (id: string) => void;
}

export default function SectionList({ sections, selectedId, onSelect, onMove, onRemove }: Props) {
  if (sections.length === 0) {
    return (
      <div style={{
        padding: "24px 12px",
        textAlign: "center",
        color: "#bbb",
        fontSize: "0.65rem",
      }}>
        No sections yet. Add one below.
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {sections.map((section, idx) => {
        const isSelected = section.id === selectedId;
        const color = TYPE_COLORS[section.type] || "#888";

        return (
          <div
            key={section.id}
            className="builder-section-item"
            onClick={() => onSelect(section.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 10px",
              borderRadius: "6px",
              cursor: "pointer",
              background: isSelected ? `${color}0C` : "transparent",
              border: isSelected ? `1px solid ${color}30` : "1px solid transparent",
            }}
          >
            {/* Index number */}
            <span style={{
              fontSize: "0.5rem",
              fontWeight: 700,
              color: isSelected ? color : "#ccc",
              fontFamily: "var(--mono, monospace)",
              minWidth: "14px",
              textAlign: "center",
            }}>
              {idx + 1}
            </span>

            {/* Color dot indicator */}
            <div style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: color,
              opacity: isSelected ? 1 : 0.4,
              flexShrink: 0,
            }} />

            {/* Label + type */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                color: isSelected ? color : "#444",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                {TYPE_LABELS[section.type] || section.type}
              </div>
            </div>

            {/* Move arrows */}
            <div style={{ display: "flex", gap: "1px", flexShrink: 0 }}>
              <button
                onClick={(e) => { e.stopPropagation(); if (idx > 0) onMove(idx, idx - 1); }}
                disabled={idx === 0}
                style={arrowBtn}
                title="Move up"
              >
                &#9650;
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); if (idx < sections.length - 1) onMove(idx, idx + 1); }}
                disabled={idx === sections.length - 1}
                style={arrowBtn}
                title="Move down"
              >
                &#9660;
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={(e) => { e.stopPropagation(); onRemove(section.id); }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.6rem",
                color: "#ddd",
                padding: "2px",
                lineHeight: 1,
                flexShrink: 0,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ddd")}
              title="Remove section"
            >
              &#10005;
            </button>
          </div>
        );
      })}
    </div>
  );
}

const arrowBtn: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "0.4rem",
  color: "#ccc",
  padding: "1px 2px",
  lineHeight: 1,
};
