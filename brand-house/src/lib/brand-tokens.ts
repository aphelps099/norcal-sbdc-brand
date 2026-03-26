export const colors = {
  navy: { hex: "#0f1c2e", name: "Navy", usage: "Primary background, depth" },
  navyDeep: { hex: "#091422", name: "Navy Deep", usage: "Deepest background" },
  royal: { hex: "#1D5AA7", name: "Royal", usage: "Primary brand blue, links" },
  pool: { hex: "#8FC5D9", name: "Pool", usage: "Accent, emphasis text" },
  poolBright: { hex: "#a8d8e8", name: "Pool Bright", usage: "Hover states" },
  cream: { hex: "#f0efeb", name: "Cream", usage: "Primary text on dark" },
  strawberry: { hex: "#F7024D", name: "Strawberry", usage: "CTAs, alerts" },
  white: { hex: "#ffffff", name: "White", usage: "High contrast text" },
} as const;

export const fonts = {
  sans: { family: "GT America", weights: ["400", "500", "900"], usage: "Body text, UI" },
  serif: { family: "GT Era Display", weights: ["300", "700"], usage: "Headlines, emphasis" },
  mono: { family: "GT America Mono", weights: ["400", "700"], usage: "Labels, stats, code" },
  body: { family: "Tiempos", weights: ["400"], usage: "Long-form reading" },
} as const;

export const chapters = [
  { title: "Logos", description: "Logo suite, clear space rules, and download assets.", href: "/logos" },
  { title: "Colors", description: "Brand palette, usage guidelines, and accessible pairings.", href: "/colors" },
  { title: "Typography", description: "Type system, specimens, and hierarchy rules.", href: "/typography" },
  { title: "Voice & Tone", description: "Personality, messaging framework, and copy templates.", href: "/voice" },
  { title: "Templates", description: "Email signatures, social frames, and presentation decks.", href: "/templates" },
] as const;

export const stats = [
  { value: "$2.8B", label: "Capital raised" },
  { value: "42,000+", label: "Jobs created" },
  { value: "64,000+", label: "Clients served" },
  { value: "40+", label: "Years of impact" },
] as const;

export const pillNavItems = [
  { label: "Connected", href: "#chapters" },
  { label: "People", href: "#chapters" },
  { label: "Funded", href: "#chapters" },
] as const;
