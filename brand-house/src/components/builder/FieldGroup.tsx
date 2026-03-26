"use client";

interface FieldGroupProps {
  label: string;
  children: React.ReactNode;
  hint?: string;
}

export function FieldGroup({ label, children, hint }: FieldGroupProps) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={{
        display: "block",
        fontSize: "0.6rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "#888",
        marginBottom: "6px",
      }}>
        {label}
      </label>
      {children}
      {hint && <div style={{ fontSize: "0.55rem", color: "#bbb", marginTop: "3px" }}>{hint}</div>}
    </div>
  );
}

export function TextInput({ value, onChange, placeholder }: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={inputStyle}
    />
  );
}

export function NumberInput({ value, onChange, min, max, step }: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <input
      type="number"
      value={value}
      onChange={e => onChange(Number(e.target.value))}
      min={min}
      max={max}
      step={step}
      style={{ ...inputStyle, width: "80px" }}
    />
  );
}

export function RangeSlider({ value, onChange, min, max, step, label }: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  label?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input
        type="range"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step || 1}
        style={{ flex: 1, accentColor: "#1D5AA7" }}
      />
      <span style={{ fontSize: "0.6rem", color: "#666", fontFamily: "var(--mono, monospace)", minWidth: "36px", textAlign: "right" }}>
        {label || value}
      </span>
    </div>
  );
}

export function ColorInput({ value, onChange }: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input
        type="color"
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ width: "28px", height: "28px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "4px", cursor: "pointer", padding: 0 }}
      />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ ...inputStyle, flex: 1, fontFamily: "var(--mono, monospace)", fontSize: "0.6rem" }}
      />
    </div>
  );
}

export function ToggleSwitch({ value, onChange, label }: {
  value: boolean;
  onChange: (v: boolean) => void;
  label?: string;
}) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
      <div
        onClick={() => onChange(!value)}
        style={{
          width: "32px",
          height: "18px",
          borderRadius: "9px",
          background: value ? "#1D5AA7" : "#ddd",
          position: "relative",
          transition: "background 0.2s",
          cursor: "pointer",
        }}
      >
        <div style={{
          position: "absolute",
          top: "2px",
          left: value ? "16px" : "2px",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: "#fff",
          transition: "left 0.2s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }} />
      </div>
      {label && <span style={{ fontSize: "0.65rem", color: "#666" }}>{label}</span>}
    </label>
  );
}

export function SelectInput({ value, onChange, options }: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        ...inputStyle,
        cursor: "pointer",
      }}
    >
      {options.map(o => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

export function SectionDivider({ label }: { label: string }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      margin: "18px 0 12px",
    }}>
      <div style={{ height: "1px", flex: 1, background: "rgba(0,0,0,0.06)" }} />
      <span style={{
        fontSize: "0.55rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "#bbb",
      }}>
        {label}
      </span>
      <div style={{ height: "1px", flex: 1, background: "rgba(0,0,0,0.06)" }} />
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "6px 10px",
  fontSize: "0.7rem",
  fontFamily: "inherit",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "5px",
  background: "#fafafa",
  color: "#333",
  outline: "none",
};
