"use client";

import type { HeroConfig as HeroConfigType } from "@/lib/section-types";
import { FieldGroup, TextInput, NumberInput, RangeSlider, ColorInput, ToggleSwitch, SelectInput, SectionDivider } from "./FieldGroup";

interface Props {
  config: HeroConfigType;
  onUpdate: (config: Record<string, unknown>) => void;
}

export default function HeroConfig({ config, onUpdate }: Props) {
  const set = (key: string, value: unknown) => onUpdate({ [key]: value });

  return (
    <div>
      <SectionDivider label="Text" />
      <FieldGroup label="Show text overlay">
        <ToggleSwitch value={config.showText} onChange={v => set("showText", v)} />
      </FieldGroup>
      {config.showText && (
        <>
          <FieldGroup label="Heading">
            <TextInput value={config.heading} onChange={v => set("heading", v)} />
          </FieldGroup>
          <FieldGroup label="Subheading">
            <TextInput value={config.subhead} onChange={v => set("subhead", v)} />
          </FieldGroup>
          <FieldGroup label="Heading size">
            <RangeSlider value={config.headingSize} onChange={v => set("headingSize", v)} min={24} max={120} label={`${config.headingSize}px`} />
          </FieldGroup>
          <FieldGroup label="Text color">
            <ColorInput value={config.textColor} onChange={v => set("textColor", v)} />
          </FieldGroup>
        </>
      )}

      <SectionDivider label="Layout" />
      <FieldGroup label="Columns">
        <RangeSlider value={config.cols} onChange={v => set("cols", v)} min={2} max={5} />
      </FieldGroup>
      <FieldGroup label="Rows">
        <RangeSlider value={config.rows} onChange={v => set("rows", v)} min={2} max={5} />
      </FieldGroup>
      <FieldGroup label="Gap">
        <RangeSlider value={config.gap} onChange={v => set("gap", v)} min={0} max={20} label={`${config.gap}px`} />
      </FieldGroup>
      <FieldGroup label="Aspect ratio">
        <SelectInput value={config.aspectRatio} onChange={v => set("aspectRatio", v)} options={[
          { value: "16/9", label: "16:9" },
          { value: "16/10", label: "16:10" },
          { value: "3/2", label: "3:2" },
          { value: "4/3", label: "4:3" },
          { value: "1/1", label: "1:1" },
        ]} />
      </FieldGroup>
      <FieldGroup label="Background color">
        <ColorInput value={config.bgColor} onChange={v => set("bgColor", v)} />
      </FieldGroup>

      <SectionDivider label="Animation" />
      <FieldGroup label="Pin on scroll">
        <ToggleSwitch value={config.enablePin} onChange={v => set("enablePin", v)} />
      </FieldGroup>
      {config.enablePin && (
        <FieldGroup label="Pin duration">
          <RangeSlider value={config.pinDuration} onChange={v => set("pinDuration", v)} min={50} max={500} label={`${config.pinDuration}%`} />
        </FieldGroup>
      )}
      <FieldGroup label="Inset reveal">
        <ToggleSwitch value={config.enableInset} onChange={v => set("enableInset", v)} />
      </FieldGroup>
      {config.enableInset && (
        <>
          <FieldGroup label="Inset start">
            <RangeSlider value={config.insetStart} onChange={v => set("insetStart", v)} min={0} max={100} label={`${config.insetStart}px`} />
          </FieldGroup>
          <FieldGroup label="Inset radius">
            <RangeSlider value={config.insetRadius} onChange={v => set("insetRadius", v)} min={0} max={40} label={`${config.insetRadius}px`} />
          </FieldGroup>
        </>
      )}
      <FieldGroup label="Skew">
        <RangeSlider value={config.skewX} onChange={v => set("skewX", v)} min={0} max={15} label={`${config.skewX}°`} />
      </FieldGroup>
      <FieldGroup label="Fade in">
        <ToggleSwitch value={config.enableFade} onChange={v => set("enableFade", v)} />
      </FieldGroup>
      <FieldGroup label="Start scale">
        <RangeSlider value={config.scaleStart} onChange={v => set("scaleStart", v)} min={0.3} max={1} step={0.05} label={`${config.scaleStart}`} />
      </FieldGroup>

      <SectionDivider label="Vignette" />
      <FieldGroup label="Enable vignette">
        <ToggleSwitch value={config.enableVignette} onChange={v => set("enableVignette", v)} />
      </FieldGroup>
      {config.enableVignette && (
        <>
          <FieldGroup label="Strength">
            <RangeSlider value={config.vignetteStrength} onChange={v => set("vignetteStrength", v)} min={0} max={100} label={`${config.vignetteStrength}%`} />
          </FieldGroup>
          <FieldGroup label="Spread">
            <RangeSlider value={config.vignetteSpread} onChange={v => set("vignetteSpread", v)} min={0} max={80} label={`${config.vignetteSpread}%`} />
          </FieldGroup>
          <FieldGroup label="Edge darken">
            <RangeSlider value={config.edgeDarken} onChange={v => set("edgeDarken", v)} min={0} max={100} label={`${config.edgeDarken}%`} />
          </FieldGroup>
          <FieldGroup label="Overlay color">
            <ColorInput value={config.overlayColor} onChange={v => set("overlayColor", v)} />
          </FieldGroup>
        </>
      )}

      <SectionDivider label="Images" />
      <div style={{ fontSize: "0.65rem", color: "#888", marginBottom: "8px" }}>
        {config.cells.length} images configured. Enter image URLs below.
      </div>
      {Array.from({ length: config.cols * config.rows }, (_, i) => (
        <FieldGroup key={i} label={`Cell ${i + 1}`}>
          <TextInput
            value={config.cells[i]?.src || ""}
            onChange={v => {
              const cells = [...config.cells];
              while (cells.length <= i) cells.push({ src: "", posX: "center", posY: "center", zoom: 1 });
              cells[i] = { ...cells[i], src: v };
              onUpdate({ cells });
            }}
            placeholder="Image URL..."
          />
        </FieldGroup>
      ))}
    </div>
  );
}
