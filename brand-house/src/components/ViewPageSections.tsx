"use client";

import { DEFAULT_PAGE_CONFIG } from "@/lib/default-config";
import SectionRenderer from "@/components/sections/SectionRenderer";

export default function ViewPageSections() {
  // In view mode, render hero and manifesto sections from default config
  const heroSection = DEFAULT_PAGE_CONFIG.sections.find(s => s.type === "hero");
  const manifestoSection = DEFAULT_PAGE_CONFIG.sections.find(s => s.type === "manifesto");

  return (
    <>
      {heroSection && <SectionRenderer section={heroSection} />}
      {manifestoSection && <SectionRenderer section={manifestoSection} />}
    </>
  );
}
