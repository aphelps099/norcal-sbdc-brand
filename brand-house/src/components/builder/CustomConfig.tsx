"use client";

import type { CustomConfig as CustomConfigType } from "@/lib/section-types";
import { FieldGroup } from "./FieldGroup";

interface Props {
  config: CustomConfigType;
  onUpdate: (config: Record<string, unknown>) => void;
}

export default function CustomConfig({ config, onUpdate }: Props) {
  return (
    <div>
      <FieldGroup label="HTML Content">
        <textarea
          value={config.html}
          onChange={e => onUpdate({ html: e.target.value })}
          rows={15}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "0.7rem",
            fontFamily: "var(--mono, monospace)",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "5px",
            background: "#fafafa",
            resize: "vertical",
            lineHeight: 1.5,
          }}
        />
      </FieldGroup>
    </div>
  );
}
