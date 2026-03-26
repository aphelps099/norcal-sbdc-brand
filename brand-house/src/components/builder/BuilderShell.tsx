"use client";

import { useReducer, useCallback, useEffect, useState, useRef } from "react";
import { BuilderContext, builderReducer } from "@/lib/builder-store";
import type { BuilderState } from "@/lib/builder-store";
import type { PageConfig, SectionType } from "@/lib/section-types";
import { DEFAULT_PAGE_CONFIG } from "@/lib/default-config";
import SectionList from "./SectionList";
import ConfigPanel from "./ConfigPanel";
import SectionRenderer from "@/components/sections/SectionRenderer";

const STORAGE_KEY = "norcal-sbdc-builder-config";

type PreviewMode = "full" | "desktop" | "tablet" | "mobile";
const PREVIEW_WIDTHS: Record<PreviewMode, string> = {
  full: "100%",
  desktop: "1280px",
  tablet: "768px",
  mobile: "375px",
};

function loadConfig(): PageConfig {
  if (typeof window === "undefined") return DEFAULT_PAGE_CONFIG;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return DEFAULT_PAGE_CONFIG;
}

export default function BuilderShell() {
  const [state, dispatch] = useReducer(builderReducer, null, (): BuilderState => ({
    page: loadConfig(),
    selectedSectionId: null,
  }));

  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [previewMode, setPreviewMode] = useState<PreviewMode>("full");
  const [previewScale, setPreviewScale] = useState(1);
  const [saved, setSaved] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // Persist to localStorage on every state change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.page));
    } catch { /* ignore */ }
  }, [state.page]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Cmd/Ctrl+S → Save
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        handleSavePage();
      }
      // Cmd/Ctrl+[ → toggle left panel
      if ((e.metaKey || e.ctrlKey) && e.key === "[") {
        e.preventDefault();
        setLeftOpen(v => !v);
      }
      // Cmd/Ctrl+] → toggle right panel
      if ((e.metaKey || e.ctrlKey) && e.key === "]") {
        e.preventDefault();
        setRightOpen(v => !v);
      }
      // Escape → deselect section
      if (e.key === "Escape") {
        dispatch({ type: "SELECT_SECTION", payload: { id: null as unknown as string } });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const selectedSection = state.page.sections.find(s => s.id === state.selectedSectionId) || null;

  const handleAddSection = useCallback((sectionType: SectionType) => {
    dispatch({ type: "ADD_SECTION", payload: { sectionType } });
  }, []);

  const handleExportJSON = useCallback(() => {
    const blob = new Blob([JSON.stringify(state.page, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "page-config.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [state.page]);

  const handleImportJSON = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const config = JSON.parse(reader.result as string);
          dispatch({ type: "SET_PAGE", payload: config });
        } catch { alert("Invalid JSON file"); }
      };
      reader.readAsText(file);
    };
    input.click();
  }, []);

  const handleSavePage = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.page));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch { /* ignore */ }
  }, [state.page]);

  const handleReset = useCallback(() => {
    if (confirm("Reset to default config? This will overwrite your current work.")) {
      dispatch({ type: "SET_PAGE", payload: DEFAULT_PAGE_CONFIG });
    }
  }, []);

  const handleDuplicate = useCallback(() => {
    if (!selectedSection) return;
    dispatch({ type: "ADD_SECTION", payload: { sectionType: selectedSection.type } });
    // The newly added section will have a new id and default config —
    // but we can copy the config from the selected one via UPDATE after ADD
  }, [selectedSection]);

  // Grid template columns based on panel state
  const gridCols = [
    leftOpen ? "280px" : "0px",
    "1fr",
    rightOpen ? "320px" : "0px",
  ].join(" ");

  return (
    <BuilderContext value={{ state, dispatch }}>
      {/* Builder-scoped CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .builder-shell { font-family: var(--sans, system-ui, sans-serif); }
        .builder-shell * { box-sizing: border-box; }
        .builder-panel { transition: width 0.2s ease, opacity 0.2s ease; }
        .builder-toggle-btn {
          position: absolute; top: 50%; z-index: 20;
          width: 20px; height: 40px;
          background: #fff; border: 1px solid rgba(0,0,0,0.1);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 0.55rem; color: #999;
          transition: color 0.15s, background 0.15s;
        }
        .builder-toggle-btn:hover { color: #1D5AA7; background: #f0f4ff; }
        .preview-device-btn {
          padding: 4px 8px; font-size: 0.55rem; font-weight: 600;
          border: 1px solid rgba(0,0,0,0.1); border-radius: 4px;
          background: #fff; cursor: pointer; color: #888;
          text-transform: uppercase; letter-spacing: 0.06em;
          transition: all 0.15s;
        }
        .preview-device-btn:hover { border-color: rgba(29,90,167,0.3); color: #1D5AA7; }
        .preview-device-btn[data-active="true"] {
          background: #1D5AA7; color: #fff; border-color: #1D5AA7;
        }
        .builder-section-item { transition: all 0.15s ease; }
        .builder-section-item:hover { background: rgba(0,0,0,0.02) !important; }
        @media (max-width: 1024px) {
          .builder-shell { grid-template-columns: 0px 1fr 0px !important; }
          .builder-left-panel, .builder-right-panel { display: none !important; }
        }
      `}} />

      <div className="builder-shell" style={{
        display: "grid",
        gridTemplateColumns: gridCols,
        gridTemplateRows: "1fr",
        height: "100vh",
        overflow: "hidden",
        background: "#f0f0ee",
        position: "relative",
      }}>

        {/* ═══ Left sidebar — Section list ═══ */}
        <div className="builder-left-panel" style={{
          borderRight: leftOpen ? "1px solid rgba(0,0,0,0.08)" : "none",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          width: leftOpen ? "280px" : "0px",
          opacity: leftOpen ? 1 : 0,
          transition: "width 0.2s ease, opacity 0.15s ease",
        }}>
          {/* Header */}
          <div style={{
            padding: "14px 16px",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}>
            <div>
              <div style={{
                fontSize: "0.7rem", fontWeight: 800,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "#0f1c2e",
              }}>
                Page Builder
              </div>
              <div style={{
                fontSize: "0.55rem", color: "#aaa", marginTop: "2px",
                fontFamily: "var(--mono, monospace)",
              }}>
                {state.page.sections.length} section{state.page.sections.length !== 1 ? "s" : ""}
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <a href="/" style={{
                fontSize: "0.55rem", fontWeight: 600, color: "#1D5AA7",
                textDecoration: "none", textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}>
                View Site
              </a>
            </div>
          </div>

          {/* Section list */}
          <div style={{ flex: 1, overflow: "auto", padding: "8px" }}>
            <SectionList
              sections={state.page.sections}
              selectedId={state.selectedSectionId}
              onSelect={(id) => dispatch({ type: "SELECT_SECTION", payload: { id } })}
              onMove={(from, to) => dispatch({ type: "MOVE_SECTION", payload: { fromIndex: from, toIndex: to } })}
              onRemove={(id) => dispatch({ type: "REMOVE_SECTION", payload: { id } })}
            />
          </div>

          {/* Add section + actions */}
          <div style={{
            padding: "10px 12px",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            flexShrink: 0,
          }}>
            <AddSectionDropdown onAdd={handleAddSection} />

            {/* Primary actions row */}
            <div style={{ display: "flex", gap: "6px" }}>
              <button onClick={handleSavePage} style={{
                ...actionBtn,
                flex: 2,
                background: saved ? "#22c55e" : "#1D5AA7",
                color: "#fff",
                border: "none",
                transition: "background 0.3s",
              }}>
                {saved ? "Saved" : "Save"}
              </button>
              <a href="/" target="_blank" style={{
                ...actionBtn,
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                background: "#0f1c2e",
                color: "#fff",
                border: "none",
              }}>
                View
              </a>
            </div>

            {/* Secondary actions row */}
            <div style={{ display: "flex", gap: "4px" }}>
              <button onClick={handleExportJSON} style={secondaryBtn}>Export</button>
              <button onClick={handleImportJSON} style={secondaryBtn}>Import</button>
              <button onClick={handleReset} style={{ ...secondaryBtn, color: "#ef4444" }}>Reset</button>
            </div>

            {/* Keyboard shortcuts hint */}
            <div style={{
              fontSize: "0.5rem", color: "#bbb",
              fontFamily: "var(--mono, monospace)",
              textAlign: "center", padding: "2px 0",
            }}>
              {"\u2318"}S save &middot; {"\u2318"}[ left &middot; {"\u2318"}] right &middot; Esc deselect
            </div>
          </div>
        </div>

        {/* Toggle left panel button */}
        <button
          className="builder-toggle-btn"
          onClick={() => setLeftOpen(v => !v)}
          style={{
            left: leftOpen ? "269px" : "0px",
            borderRadius: "0 6px 6px 0",
            transform: "translateY(-50%)",
            transition: "left 0.2s ease",
          }}
          title={leftOpen ? "Collapse sections" : "Expand sections"}
        >
          {leftOpen ? "\u25C0" : "\u25B6"}
        </button>

        {/* ═══ Center — Preview ═══ */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minWidth: 0,
        }}>
          {/* Preview toolbar */}
          <div style={{
            padding: "6px 16px",
            background: "#fff",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            flexShrink: 0,
          }}>
            {(["full", "desktop", "tablet", "mobile"] as PreviewMode[]).map(mode => (
              <button
                key={mode}
                className="preview-device-btn"
                data-active={previewMode === mode ? "true" : "false"}
                onClick={() => setPreviewMode(mode)}
              >
                {mode === "full" ? "Full" : mode === "desktop" ? "1280" : mode === "tablet" ? "768" : "375"}
              </button>
            ))}

            <div style={{ width: "1px", height: "16px", background: "rgba(0,0,0,0.08)", margin: "0 4px" }} />

            {/* Zoom controls */}
            <button
              className="preview-device-btn"
              onClick={() => setPreviewScale(s => Math.max(0.25, s - 0.1))}
            >
              &minus;
            </button>
            <span style={{
              fontSize: "0.55rem", fontWeight: 600, color: "#888",
              fontFamily: "var(--mono, monospace)", minWidth: "36px", textAlign: "center",
            }}>
              {Math.round(previewScale * 100)}%
            </span>
            <button
              className="preview-device-btn"
              onClick={() => setPreviewScale(s => Math.min(1.5, s + 0.1))}
            >
              +
            </button>
            <button
              className="preview-device-btn"
              onClick={() => setPreviewScale(1)}
              style={{ fontSize: "0.5rem" }}
            >
              Fit
            </button>
          </div>

          {/* Preview area */}
          <div ref={previewRef} style={{
            flex: 1,
            overflow: "auto",
            background: previewMode === "full"
              ? "#e8e8e6"
              : `repeating-conic-gradient(#e0e0de 0% 25%, #e8e8e6 0% 50%) 0 0 / 16px 16px`,
            display: "flex",
            justifyContent: "center",
            padding: previewMode === "full" ? 0 : "20px",
          }}>
            <div style={{
              width: PREVIEW_WIDTHS[previewMode],
              maxWidth: "100%",
              minHeight: "100%",
              background: "#fff",
              transform: `scale(${previewScale})`,
              transformOrigin: "top center",
              boxShadow: previewMode === "full"
                ? "none"
                : "0 0 0 1px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.08)",
              borderRadius: previewMode === "full" ? 0 : "4px",
              overflow: "hidden",
            }}>
              {state.page.sections.map((section) => (
                <SectionRenderer
                  key={section.id}
                  section={section}
                  isSelected={section.id === state.selectedSectionId}
                  onClick={() => dispatch({ type: "SELECT_SECTION", payload: { id: section.id } })}
                />
              ))}
              {state.page.sections.length === 0 && (
                <div style={{ padding: "80px 40px", textAlign: "center", color: "#999" }}>
                  <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "8px" }}>Empty page</p>
                  <p style={{ fontSize: "0.8rem" }}>Add sections from the sidebar to get started.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Toggle right panel button */}
        <button
          className="builder-toggle-btn"
          onClick={() => setRightOpen(v => !v)}
          style={{
            right: rightOpen ? "309px" : "0px",
            borderRadius: "6px 0 0 6px",
            transform: "translateY(-50%)",
            transition: "right 0.2s ease",
          }}
          title={rightOpen ? "Collapse config" : "Expand config"}
        >
          {rightOpen ? "\u25B6" : "\u25C0"}
        </button>

        {/* ═══ Right sidebar — Config panel ═══ */}
        <div className="builder-right-panel" style={{
          borderLeft: rightOpen ? "1px solid rgba(0,0,0,0.08)" : "none",
          background: "#fff",
          overflow: "hidden",
          width: rightOpen ? "320px" : "0px",
          opacity: rightOpen ? 1 : 0,
          transition: "width 0.2s ease, opacity 0.15s ease",
        }}>
          <div style={{ overflow: "auto", height: "100%" }}>
            {selectedSection ? (
              <>
                <ConfigPanel
                  section={selectedSection}
                  onUpdate={(config) => {
                    dispatch({ type: "UPDATE_SECTION", payload: { id: selectedSection.id, config } });
                  }}
                />
                {/* Duplicate / Delete actions at bottom of config */}
                <div style={{
                  padding: "12px 20px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  gap: "8px",
                }}>
                  <button onClick={handleDuplicate} style={{
                    ...secondaryBtn, flex: 1,
                  }}>
                    Duplicate
                  </button>
                  <button onClick={() => {
                    dispatch({ type: "REMOVE_SECTION", payload: { id: selectedSection.id } });
                  }} style={{
                    ...secondaryBtn, flex: 1, color: "#ef4444", borderColor: "rgba(239,68,68,0.2)",
                  }}>
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <div style={{ padding: "60px 20px", textAlign: "center", color: "#999" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "12px",
                  background: "#f5f4f0", margin: "0 auto 16px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem", color: "#ccc",
                }}>
                  &#9998;
                </div>
                <p style={{ fontSize: "0.8rem", fontWeight: 500 }}>Select a section to edit</p>
                <p style={{ fontSize: "0.65rem", marginTop: "6px", lineHeight: 1.5 }}>
                  Click any section in the preview or sidebar to open its config panel
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </BuilderContext>
  );
}

/* ─── Add Section Dropdown ─── */
const SECTION_TYPES: { type: SectionType; label: string; icon: string }[] = [
  { type: "nav", label: "Navigation", icon: "\u2630" },
  { type: "hero", label: "Hero Grid (SRG)", icon: "\u25A6" },
  { type: "manifesto", label: "Manifesto", icon: "\u00B6" },
  { type: "chapter", label: "Chapter Grid", icon: "\u229E" },
  { type: "custom", label: "Custom HTML", icon: "</>" },
  { type: "footer", label: "Footer", icon: "\u25AC" },
];

function AddSectionDropdown({ onAdd }: { onAdd: (type: SectionType) => void }) {
  return (
    <select
      onChange={(e) => {
        if (e.target.value) {
          onAdd(e.target.value as SectionType);
          e.target.value = "";
        }
      }}
      defaultValue=""
      style={{
        width: "100%",
        padding: "8px 10px",
        fontSize: "0.65rem",
        fontWeight: 600,
        fontFamily: "inherit",
        border: "1px dashed rgba(0,0,0,0.15)",
        borderRadius: "6px",
        background: "#fafaf8",
        cursor: "pointer",
        color: "#666",
      }}
    >
      <option value="" disabled>+ Add Section...</option>
      {SECTION_TYPES.map(s => (
        <option key={s.type} value={s.type}>{s.icon} {s.label}</option>
      ))}
    </select>
  );
}

/* ─── Shared button styles ─── */
const actionBtn: React.CSSProperties = {
  padding: "7px 10px",
  fontSize: "0.6rem",
  fontWeight: 700,
  fontFamily: "inherit",
  borderRadius: "6px",
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  border: "none",
};

const secondaryBtn: React.CSSProperties = {
  flex: 1,
  padding: "5px 6px",
  fontSize: "0.55rem",
  fontWeight: 600,
  fontFamily: "inherit",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "4px",
  background: "#fafaf8",
  cursor: "pointer",
  color: "#888",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};
