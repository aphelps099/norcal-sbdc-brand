"use client";

import type { SectionConfig } from "@/lib/section-types";
import ScrollRevealGrid from "./ScrollRevealGrid";
import ManifestoSection from "./ManifestoSection";
import ChapterGrid from "./ChapterGrid";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import CustomHTML from "./CustomHTML";

interface Props {
  section: SectionConfig;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function SectionRenderer({ section, isSelected, onClick }: Props) {
  const outline = isSelected ? "2px solid #3b82f6" : undefined;

  const wrapper = (children: React.ReactNode) => (
    <div
      onClick={onClick}
      style={{
        outline,
        outlineOffset: "-2px",
        cursor: onClick ? "pointer" : undefined,
        position: "relative",
      }}
    >
      {children}
    </div>
  );

  switch (section.type) {
    case "nav":
      return wrapper(<SiteNav config={section.config} />);
    case "hero":
      return wrapper(<ScrollRevealGrid config={section.config} />);
    case "manifesto":
      return wrapper(<ManifestoSection config={section.config} />);
    case "chapter":
      return wrapper(<ChapterGrid config={section.config} />);
    case "custom":
      return wrapper(<CustomHTML config={section.config} />);
    case "footer":
      return wrapper(<SiteFooter config={section.config} />);
    case "splash":
      // Splash is a special overlay — render nothing in builder preview
      return wrapper(<div style={{ padding: "40px", textAlign: "center", opacity: 0.5, fontFamily: "var(--mono)" }}>Splash Intro (plays on page load)</div>);
    default:
      return null;
  }
}
