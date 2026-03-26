"use client";

import type { FooterConfig as FooterConfigType } from "@/lib/section-types";
import { FieldGroup, TextInput, ColorInput, SectionDivider } from "./FieldGroup";

interface Props {
  config: FooterConfigType;
  onUpdate: (config: Record<string, unknown>) => void;
}

export default function FooterConfig({ config, onUpdate }: Props) {
  return (
    <div>
      <FieldGroup label="Brand text">
        <TextInput value={config.brandText} onChange={v => onUpdate({ brandText: v })} />
      </FieldGroup>
      <FieldGroup label="Year">
        <TextInput value={config.year} onChange={v => onUpdate({ year: v })} />
      </FieldGroup>
      <FieldGroup label="Background">
        <ColorInput value={config.bgColor} onChange={v => onUpdate({ bgColor: v })} />
      </FieldGroup>

      <SectionDivider label="Links" />
      {config.links.map((link, idx) => (
        <div key={idx} style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
          <TextInput value={link.label} onChange={v => {
            const links = [...config.links];
            links[idx] = { ...links[idx], label: v };
            onUpdate({ links });
          }} placeholder="Label" />
          <TextInput value={link.href} onChange={v => {
            const links = [...config.links];
            links[idx] = { ...links[idx], href: v };
            onUpdate({ links });
          }} placeholder="URL" />
          <button onClick={() => {
            onUpdate({ links: config.links.filter((_, i) => i !== idx) });
          }} style={{ background: "none", border: "none", cursor: "pointer", color: "#ccc", fontSize: "0.7rem" }}>✕</button>
        </div>
      ))}
      <button onClick={() => {
        onUpdate({ links: [...config.links, { label: "Link", href: "#" }] });
      }} style={{
        width: "100%", padding: "6px", fontSize: "0.6rem", fontWeight: 600,
        border: "1px dashed rgba(0,0,0,0.15)", borderRadius: "5px",
        background: "transparent", cursor: "pointer", color: "#1D5AA7",
      }}>
        + Add Link
      </button>
    </div>
  );
}
