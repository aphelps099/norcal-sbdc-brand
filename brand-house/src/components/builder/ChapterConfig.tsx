"use client";

import type { ChapterConfig as ChapterConfigType } from "@/lib/section-types";
import { FieldGroup, TextInput, RangeSlider, ColorInput, ToggleSwitch, SelectInput, SectionDivider } from "./FieldGroup";

interface Props {
  config: ChapterConfigType;
  onUpdate: (config: Record<string, unknown>) => void;
}

const ICON_OPTIONS = [
  "layers", "palette", "type", "shield", "message-square", "grid",
  "star", "calendar", "file-text", "users", "zap", "award",
  "book", "link", "bar-chart", "globe", "rocket", "megaphone",
  "image", "mic", "layout",
].map(v => ({ value: v, label: v }));

export default function ChapterConfig({ config, onUpdate }: Props) {
  const set = (key: string, value: unknown) => onUpdate({ [key]: value });

  const updateCard = (idx: number, field: string, value: string) => {
    const cards = [...config.cards];
    cards[idx] = { ...cards[idx], [field]: value };
    onUpdate({ cards });
  };

  const addCard = () => {
    onUpdate({ cards: [...config.cards, { icon: "star", title: "New Card", description: "Description", tag: "" }] });
  };

  const removeCard = (idx: number) => {
    const cards = config.cards.filter((_, i) => i !== idx);
    onUpdate({ cards });
  };

  return (
    <div>
      <SectionDivider label="Layout" />
      <FieldGroup label="Columns">
        <RangeSlider value={config.cols} onChange={v => set("cols", v)} min={1} max={4} />
      </FieldGroup>
      <FieldGroup label="Gap">
        <RangeSlider value={config.gap} onChange={v => set("gap", v)} min={0} max={24} label={`${config.gap}px`} />
      </FieldGroup>
      <FieldGroup label="Card padding">
        <RangeSlider value={config.padding} onChange={v => set("padding", v)} min={12} max={60} label={`${config.padding}px`} />
      </FieldGroup>
      <FieldGroup label="Card radius">
        <RangeSlider value={config.cardRadius} onChange={v => set("cardRadius", v)} min={0} max={24} label={`${config.cardRadius}px`} />
      </FieldGroup>

      <SectionDivider label="Colors" />
      <FieldGroup label="Section background">
        <ColorInput value={config.bgColor} onChange={v => set("bgColor", v)} />
      </FieldGroup>
      <FieldGroup label="Card background">
        <ColorInput value={config.cardBgColor} onChange={v => set("cardBgColor", v)} />
      </FieldGroup>
      <FieldGroup label="Icon color">
        <ColorInput value={config.iconColor} onChange={v => set("iconColor", v)} />
      </FieldGroup>

      <SectionDivider label="Header" />
      <FieldGroup label="Header text">
        <TextInput value={config.headerText} onChange={v => set("headerText", v)} />
      </FieldGroup>
      <FieldGroup label="Header style">
        <SelectInput value={config.headerStyle} onChange={v => set("headerStyle", v)} options={[
          { value: "mono-upper", label: "Mono Uppercase" },
          { value: "serif", label: "Serif" },
          { value: "hidden", label: "Hidden" },
        ]} />
      </FieldGroup>

      <SectionDivider label="Animation" />
      <FieldGroup label="Animate cards">
        <ToggleSwitch value={config.animEnabled} onChange={v => set("animEnabled", v)} />
      </FieldGroup>
      {config.animEnabled && (
        <FieldGroup label="Stagger delay">
          <RangeSlider value={config.animStagger} onChange={v => set("animStagger", v)} min={20} max={200} label={`${config.animStagger}ms`} />
        </FieldGroup>
      )}

      <SectionDivider label="Cards" />
      {config.cards.map((card, idx) => (
        <div key={idx} style={{
          padding: "10px",
          border: "1px solid rgba(0,0,0,0.06)",
          borderRadius: "6px",
          marginBottom: "8px",
          background: "#fafafa",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#888" }}>Card {idx + 1}</span>
            <button onClick={() => removeCard(idx)} style={{
              background: "none", border: "none", cursor: "pointer", fontSize: "0.65rem", color: "#ccc",
            }}>✕</button>
          </div>
          <FieldGroup label="Icon">
            <SelectInput value={card.icon} onChange={v => updateCard(idx, "icon", v)} options={ICON_OPTIONS} />
          </FieldGroup>
          <FieldGroup label="Title">
            <TextInput value={card.title} onChange={v => updateCard(idx, "title", v)} />
          </FieldGroup>
          <FieldGroup label="Description">
            <TextInput value={card.description} onChange={v => updateCard(idx, "description", v)} />
          </FieldGroup>
          <FieldGroup label="Tag">
            <TextInput value={card.tag || ""} onChange={v => updateCard(idx, "tag", v)} placeholder="Optional" />
          </FieldGroup>
        </div>
      ))}
      <button onClick={addCard} style={{
        width: "100%", padding: "8px", fontSize: "0.65rem", fontWeight: 600,
        border: "1px dashed rgba(0,0,0,0.15)", borderRadius: "6px",
        background: "transparent", cursor: "pointer", color: "#1D5AA7",
      }}>
        + Add Card
      </button>
    </div>
  );
}
