"use client";

import type { ManifestoConfig as ManifestoConfigType } from "@/lib/section-types";
import { FieldGroup, TextInput, RangeSlider, ColorInput, ToggleSwitch, SelectInput, SectionDivider } from "./FieldGroup";

interface Props {
  config: ManifestoConfigType;
  onUpdate: (config: Record<string, unknown>) => void;
}

export default function ManifestoConfig({ config, onUpdate }: Props) {
  const set = (key: string, value: unknown) => onUpdate({ [key]: value });

  return (
    <div>
      <SectionDivider label="Content" />
      <FieldGroup label="Rich text (HTML)">
        <textarea
          value={config.editorHTML}
          onChange={e => set("editorHTML", e.target.value)}
          rows={5}
          style={{
            width: "100%", padding: "8px 10px", fontSize: "0.7rem",
            fontFamily: "var(--mono, monospace)", border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "5px", background: "#fafafa", resize: "vertical",
          }}
        />
      </FieldGroup>
      <FieldGroup label="Eyebrow">
        <TextInput value={config.eyebrow} onChange={v => set("eyebrow", v)} />
      </FieldGroup>
      <FieldGroup label="Eyebrow style">
        <SelectInput value={config.eyebrowStyle} onChange={v => set("eyebrowStyle", v)} options={[
          { value: "mono-upper", label: "Mono Uppercase" },
          { value: "sans-light", label: "Sans Light" },
          { value: "hidden", label: "Hidden" },
        ]} />
      </FieldGroup>
      <FieldGroup label="Subtitle">
        <TextInput value={config.subtitle} onChange={v => set("subtitle", v)} />
      </FieldGroup>

      <SectionDivider label="Style" />
      <FieldGroup label="Background color">
        <ColorInput value={config.bgColor} onChange={v => set("bgColor", v)} />
      </FieldGroup>
      <FieldGroup label="Text color">
        <ColorInput value={config.textColor} onChange={v => set("textColor", v)} />
      </FieldGroup>
      <FieldGroup label="Accent color">
        <ColorInput value={config.accentColor} onChange={v => set("accentColor", v)} />
      </FieldGroup>
      <FieldGroup label="Font family">
        <SelectInput value={config.fontFamily} onChange={v => set("fontFamily", v)} options={[
          { value: "serif", label: "Serif (Tiempos)" },
          { value: "sans", label: "Sans (Proxima Nova)" },
        ]} />
      </FieldGroup>
      <FieldGroup label="Font size">
        <RangeSlider value={config.fontSize} onChange={v => set("fontSize", v)} min={16} max={96} label={`${config.fontSize}px`} />
      </FieldGroup>
      <FieldGroup label="Line height">
        <RangeSlider value={config.lineHeight} onChange={v => set("lineHeight", v)} min={0.8} max={2} step={0.05} label={`${config.lineHeight}`} />
      </FieldGroup>
      <FieldGroup label="Letter spacing">
        <RangeSlider value={config.letterSpacing} onChange={v => set("letterSpacing", v)} min={-0.05} max={0.1} step={0.005} label={`${config.letterSpacing}em`} />
      </FieldGroup>
      <FieldGroup label="Alignment">
        <SelectInput value={config.alignment} onChange={v => set("alignment", v)} options={[
          { value: "left", label: "Left" },
          { value: "center", label: "Center" },
          { value: "right", label: "Right" },
        ]} />
      </FieldGroup>
      <FieldGroup label="Max width">
        <TextInput value={config.maxWidth} onChange={v => set("maxWidth", v)} placeholder="e.g. 920px" />
      </FieldGroup>
      <FieldGroup label="Padding top">
        <RangeSlider value={config.paddingTop} onChange={v => set("paddingTop", v)} min={20} max={200} label={`${config.paddingTop}px`} />
      </FieldGroup>
      <FieldGroup label="Padding bottom">
        <RangeSlider value={config.paddingBottom} onChange={v => set("paddingBottom", v)} min={20} max={200} label={`${config.paddingBottom}px`} />
      </FieldGroup>

      <SectionDivider label="Film Grain" />
      <FieldGroup label="Enable grain">
        <ToggleSwitch value={config.grainEnabled} onChange={v => set("grainEnabled", v)} />
      </FieldGroup>
      {config.grainEnabled && (
        <FieldGroup label="Grain opacity">
          <RangeSlider value={config.grainOpacity} onChange={v => set("grainOpacity", v)} min={1} max={10} label={`${config.grainOpacity}%`} />
        </FieldGroup>
      )}

      <SectionDivider label="Underlines" />
      <FieldGroup label="Underline words (comma-separated)">
        <TextInput
          value={config.underlineWords.join(", ")}
          onChange={v => set("underlineWords", v.split(",").map(w => w.trim()).filter(Boolean))}
        />
      </FieldGroup>
      <FieldGroup label="Underline style">
        <SelectInput value={config.underlineStyle} onChange={v => set("underlineStyle", v)} options={[
          { value: "none", label: "None" },
          { value: "solid", label: "Solid" },
          { value: "dashed", label: "Dashed" },
          { value: "gradient", label: "Gradient" },
        ]} />
      </FieldGroup>
      <FieldGroup label="Underline color">
        <SelectInput value={config.underlineColor} onChange={v => set("underlineColor", v)} options={[
          { value: "accent", label: "Accent" },
          { value: "text", label: "Text" },
          { value: "custom", label: "Custom" },
        ]} />
      </FieldGroup>

      <SectionDivider label="Animation" />
      <FieldGroup label="Animation type">
        <SelectInput value={config.animType} onChange={v => set("animType", v)} options={[
          { value: "none", label: "None" },
          { value: "fade-up", label: "Fade Up" },
          { value: "stagger-words", label: "Stagger Words" },
          { value: "snap-scale", label: "Snap Scale" },
        ]} />
      </FieldGroup>
      <FieldGroup label="Trigger">
        <SelectInput value={config.animTrigger} onChange={v => set("animTrigger", v)} options={[
          { value: "on-load", label: "On Load" },
          { value: "on-scroll", label: "On Scroll" },
        ]} />
      </FieldGroup>
      {config.animType === "stagger-words" && (
        <FieldGroup label="Stagger delay">
          <RangeSlider value={config.staggerDelay} onChange={v => set("staggerDelay", v)} min={10} max={100} label={`${config.staggerDelay}ms`} />
        </FieldGroup>
      )}
      <FieldGroup label="Duration">
        <RangeSlider value={config.animDuration} onChange={v => set("animDuration", v)} min={200} max={2000} label={`${config.animDuration}ms`} />
      </FieldGroup>
    </div>
  );
}
