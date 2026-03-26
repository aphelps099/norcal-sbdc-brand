"use client";

import { useReducer, useCallback, useEffect } from "react";
import { BuilderContext, builderReducer } from "@/lib/builder-store";
import type { BuilderState } from "@/lib/builder-store";
import type { PageConfig, SectionType } from "@/lib/section-types";
import { DEFAULT_PAGE_CONFIG } from "@/lib/default-config";
import { exportPageHTML } from "@/lib/export-html";
import SectionList from "./SectionList";
import ConfigPanel from "./ConfigPanel";
import SectionRenderer from "@/components/sections/SectionRenderer";

const STORAGE_KEY = "norcal-sbdc-builder-config";

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

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.page));
    } catch { /* ignore */ }
  }, [state.page]);

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

  const handleExportHTML = useCallback(() => {
    const html = exportPageHTML(state.page);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "page.html";
    a.click();
    URL.revokeObjectURL(url);
  }, [state.page]);

  const handleReset = useCallback(() => {
    if (confirm("Reset to default config? This will overwrite your current work.")) {
      dispatch({ type: "SET_PAGE", payload: DEFAULT_PAGE_CONFIG });
    }
  }, []);

  return (
    <BuilderContext value={{ state, dispatch }}>
      <div className="builder-shell" style={{
        display: "grid",
        gridTemplateColumns: "280px 1fr 320px",
        height: "100vh",
        overflow: "hidden",
        fontFamily: "var(--sans, system-ui, sans-serif)",
        background: "#f8f8f6",
      }}>
        {/* Left sidebar — Section list */}
        <div style={{
          borderRight: "1px solid rgba(0,0,0,0.08)",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            padding: "16px 20px",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0f1c2e" }}>
                Page Builder
              </div>
              <div style={{ fontSize: "0.6rem", color: "#999", marginTop: "2px", fontFamily: "var(--mono, monospace)" }}>
                {state.page.sections.length} sections
              </div>
            </div>
            <a href="/" style={{
              fontSize: "0.6rem",
              fontWeight: 600,
              color: "#1D5AA7",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}>
              View Site
            </a>
          </div>

          {/* Section list */}
          <div style={{ flex: 1, overflow: "auto", padding: "12px" }}>
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
            padding: "12px 16px",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}>
            <AddSectionDropdown onAdd={handleAddSection} />
            <button onClick={handleExportHTML} style={{
              ...smallBtn, width: "100%", background: "#1D5AA7", color: "#fff", border: "none", marginBottom: "4px",
            }}>Export HTML</button>
            <div style={{ display: "flex", gap: "6px" }}>
              <button onClick={handleExportJSON} style={smallBtn}>JSON</button>
              <button onClick={handleImportJSON} style={smallBtn}>Import</button>
              <button onClick={handleReset} style={{ ...smallBtn, color: "#ef4444" }}>Reset</button>
            </div>
          </div>
        </div>

        {/* Center — Preview */}
        <div style={{ overflow: "auto", background: "#eee" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", minHeight: "100%" }}>
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
                <p style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "8px" }}>Empty page</p>
                <p style={{ fontSize: "0.85rem" }}>Add sections from the sidebar to get started.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right sidebar — Config panel */}
        <div style={{
          borderLeft: "1px solid rgba(0,0,0,0.08)",
          background: "#fff",
          overflow: "auto",
        }}>
          {selectedSection ? (
            <ConfigPanel
              section={selectedSection}
              onUpdate={(config) => {
                dispatch({ type: "UPDATE_SECTION", payload: { id: selectedSection.id, config } });
              }}
            />
          ) : (
            <div style={{ padding: "40px 20px", textAlign: "center", color: "#999" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 500 }}>Select a section to edit</p>
              <p style={{ fontSize: "0.7rem", marginTop: "4px" }}>Click any section in the preview or sidebar</p>
            </div>
          )}
        </div>
      </div>
    </BuilderContext>
  );
}

/* ─── Add Section Dropdown ─── */
const SECTION_TYPES: { type: SectionType; label: string }[] = [
  { type: "nav", label: "Navigation" },
  { type: "hero", label: "Hero Grid (SRG)" },
  { type: "manifesto", label: "Manifesto" },
  { type: "chapter", label: "Chapter Grid" },
  { type: "custom", label: "Custom HTML" },
  { type: "footer", label: "Footer" },
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
        padding: "8px 12px",
        fontSize: "0.7rem",
        fontWeight: 600,
        fontFamily: "inherit",
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: "6px",
        background: "#fff",
        cursor: "pointer",
        color: "#333",
      }}
    >
      <option value="" disabled>+ Add Section...</option>
      {SECTION_TYPES.map(s => (
        <option key={s.type} value={s.type}>{s.label}</option>
      ))}
    </select>
  );
}

const smallBtn: React.CSSProperties = {
  flex: 1,
  padding: "6px 8px",
  fontSize: "0.6rem",
  fontWeight: 600,
  fontFamily: "inherit",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "5px",
  background: "#fafafa",
  cursor: "pointer",
  color: "#555",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};
