import type { GradientDef } from "@/components/InteriorHero";

/**
 * Per-page gradient definitions.
 *
 * Brand palette:
 *   Navy    #0f1c2e
 *   Royal   #1D5AA7
 *   Pool    #8FC5D9
 *   Berry   #A73B44
 *   Evergreen #00685E
 *   Cobalt  #004290
 *   Fog     #85A3C8
 *   Midnight #13171C
 *   Strawberry #F7024D
 *   Slate   #2B3035
 *
 * Each gradient uses 5 stops and a unique angle to give every page
 * its own atmosphere while staying on-palette.
 */

/** Colors — full rainbow sweep through the palette */
export const gradientColors: GradientDef = {
  angle: 135,
  stops: ["#0f1c2e", "#1D5AA7", "#8FC5D9", "#A73B44", "#00685E"],
};

/** Typography — deep editorial: navy → slate → fog → pool → cream-ish */
export const gradientTypography: GradientDef = {
  angle: 160,
  stops: ["#13171C", "#2B3035", "#1D5AA7", "#85A3C8", "#8FC5D9"],
};

/** Logos — institutional: navy → cobalt → royal → fog → pool */
export const gradientLogos: GradientDef = {
  angle: 120,
  stops: ["#0f1c2e", "#004290", "#1D5AA7", "#85A3C8", "#8FC5D9"],
};

/** Voice & Tone — warm + authoritative: midnight → berry → royal → pool → fog */
export const gradientVoice: GradientDef = {
  angle: 145,
  stops: ["#13171C", "#A73B44", "#1D5AA7", "#8FC5D9", "#85A3C8"],
};

/** Photography — cinematic: dark sweep with berry warmth */
export const gradientPhotography: GradientDef = {
  angle: 170,
  stops: ["#0f1c2e", "#2B3035", "#A73B44", "#004290", "#13171C"],
};

/** Templates — cool systematic: navy → royal → cobalt → fog → pool */
export const gradientTemplates: GradientDef = {
  angle: 130,
  stops: ["#0f1c2e", "#1D5AA7", "#004290", "#85A3C8", "#8FC5D9"],
};

/** Content — energetic: navy → evergreen → pool → berry → royal */
export const gradientContent: GradientDef = {
  angle: 155,
  stops: ["#0f1c2e", "#00685E", "#8FC5D9", "#A73B44", "#1D5AA7"],
};

/** Calendar — warm cycles: midnight → berry → evergreen → pool → royal */
export const gradientCalendar: GradientDef = {
  angle: 140,
  stops: ["#13171C", "#A73B44", "#00685E", "#8FC5D9", "#1D5AA7"],
};

/** Stories — narrative warmth: navy → berry → fog → pool → evergreen */
export const gradientStories: GradientDef = {
  angle: 150,
  stops: ["#0f1c2e", "#A73B44", "#85A3C8", "#8FC5D9", "#00685E"],
};

/** Glossary — referential, cool: midnight → slate → cobalt → royal → fog */
export const gradientGlossary: GradientDef = {
  angle: 125,
  stops: ["#13171C", "#2B3035", "#004290", "#1D5AA7", "#85A3C8"],
};
