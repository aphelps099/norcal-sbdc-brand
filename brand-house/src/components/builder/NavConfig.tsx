"use client";

import type { NavConfig as NavConfigType } from "@/lib/section-types";
import { FieldGroup, TextInput, ToggleSwitch, SectionDivider } from "./FieldGroup";

interface Props {
  config: NavConfigType;
  onUpdate: (config: Record<string, unknown>) => void;
}

export default function NavConfig({ config, onUpdate }: Props) {
  return (
    <div>
      <FieldGroup label="Brand text">
        <TextInput value={config.brandText} onChange={v => onUpdate({ brandText: v })} />
      </FieldGroup>
      <FieldGroup label="Glass background">
        <ToggleSwitch value={config.glassBg} onChange={v => onUpdate({ glassBg: v })} />
      </FieldGroup>

      <SectionDivider label="Menu Items" />
      {config.menuItems.map((item, idx) => (
        <div key={idx} style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
          <TextInput value={item.label} onChange={v => {
            const items = [...config.menuItems];
            items[idx] = { ...items[idx], label: v };
            onUpdate({ menuItems: items });
          }} placeholder="Label" />
          <TextInput value={item.href} onChange={v => {
            const items = [...config.menuItems];
            items[idx] = { ...items[idx], href: v };
            onUpdate({ menuItems: items });
          }} placeholder="URL" />
          <button onClick={() => {
            onUpdate({ menuItems: config.menuItems.filter((_, i) => i !== idx) });
          }} style={{ background: "none", border: "none", cursor: "pointer", color: "#ccc", fontSize: "0.7rem" }}>✕</button>
        </div>
      ))}
      <button onClick={() => {
        onUpdate({ menuItems: [...config.menuItems, { label: "Link", href: "#" }] });
      }} style={{
        width: "100%", padding: "6px", fontSize: "0.6rem", fontWeight: 600,
        border: "1px dashed rgba(0,0,0,0.15)", borderRadius: "5px",
        background: "transparent", cursor: "pointer", color: "#1D5AA7",
      }}>
        + Add Item
      </button>
    </div>
  );
}
