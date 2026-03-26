"use client";

import { useState, useEffect } from "react";
import { DEFAULT_PAGE_CONFIG } from "@/lib/default-config";
import type { PageConfig } from "@/lib/section-types";
import SectionRenderer from "@/components/sections/SectionRenderer";

const STORAGE_KEY = "norcal-sbdc-builder-config";

export default function ViewPageSections() {
  const [config, setConfig] = useState<PageConfig | null>(null);

  useEffect(() => {
    // Read saved page config from localStorage (same key the builder writes to)
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setConfig(JSON.parse(stored));
      } else {
        setConfig(DEFAULT_PAGE_CONFIG);
      }
    } catch {
      setConfig(DEFAULT_PAGE_CONFIG);
    }

    // Listen for storage changes (if builder is open in another tab)
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try { setConfig(JSON.parse(e.newValue)); } catch { /* ignore */ }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!config) return null;

  return (
    <>
      {config.sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
