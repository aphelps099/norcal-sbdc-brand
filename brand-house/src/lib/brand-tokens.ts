export const colors = {
  berry: { hex: "#A73B44", name: "Berry", usage: "Warm accent, editorial emphasis" },
  midnight: { hex: "#13171C", name: "Midnight", usage: "Deepest backgrounds, type" },
  fog: { hex: "#85A3C8", name: "Fog", usage: "Soft blue, secondary accent" },
  cobalt: { hex: "#004290", name: "Cobalt", usage: "Primary blue, links, CTAs" },
  silver: { hex: "#D9D9D9", name: "Silver", usage: "Borders, dividers, muted fills" },
  slate: { hex: "#2B3035", name: "Slate", usage: "Dark UI, secondary text" },
  steel: { hex: "#5684BA", name: "Steel", usage: "Mid-blue accent, charts" },
  evergreen: { hex: "#00685E", name: "Evergreen", usage: "Green accent, success states" },
} as const;

export const fonts = {
  sans: { family: "Sofia Pro", weights: ["500"], usage: "Headings, body text, navigation, display" },
  label: { family: "Sweet Sans Pro", weights: ["400"], usage: "Labels, eyebrows, tags, micro-copy" },
  mono: { family: "Andale Mono", weights: ["400"], usage: "Code, counters, technical details" },
} as const;

export const chapters = [
  { title: "Colors", description: "Brand palette, usage guidelines, and accessible pairings.", href: "/colors" },
  { title: "Typography", description: "Type system, specimens, and hierarchy rules.", href: "/typography" },
  { title: "Logos", description: "Logo suite, clear space rules, and download assets.", href: "/logos" },
  { title: "Voice & Tone", description: "Personality, messaging framework, and copy templates.", href: "/voice" },
  { title: "Photography", description: "Photo style, treatments, and composition rules.", href: "/photography" },
  { title: "Templates", description: "Email signatures, social frames, and presentation decks.", href: "/templates" },
  { title: "Content", description: "Social media and newsletter guidelines.", href: "/content" },
  { title: "Calendar", description: "Key dates and campaign themes.", href: "/calendar" },
  { title: "Stories", description: "Client success stories.", href: "/stories" },
  { title: "Glossary", description: "Terms and definitions.", href: "/glossary" },
] as const;

export const stats = [
  { value: "42K+", label: "Clients served" },
  { value: "11", label: "Centers across Northern California" },
  { value: "40+", label: "Years strong" },
] as const;

export const pillNavItems = [
  { label: "Connected", href: "#chapters" },
  { label: "People", href: "#chapters" },
  { label: "Funded", href: "#chapters" },
] as const;
