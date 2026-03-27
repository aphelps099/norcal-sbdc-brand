export const colors = {
  navy: { hex: "#0f1c2e", name: "Navy", usage: "Primary brand, headlines" },
  navyDeep: { hex: "#091422", name: "Navy Deep", usage: "Deepest backgrounds" },
  royal: { hex: "#1D5AA7", name: "Royal", usage: "Primary blue, links, accents" },
  pool: { hex: "#8FC5D9", name: "Pool", usage: "Light accent, emphasis" },
  poolBright: { hex: "#a8d8e8", name: "Pool Bright", usage: "Hover states" },
  cream: { hex: "#f5f4f0", name: "Cream", usage: "Primary background" },
  strawberry: { hex: "#F7024D", name: "Strawberry", usage: "CTAs, alerts" },
  white: { hex: "#ffffff", name: "White", usage: "Cards, clean sections" },
} as const;

export const fonts = {
  sans: { family: "Proxima Nova", weights: ["500", "800", "900"], usage: "Body text, UI, navigation" },
  serif: { family: "Tiempos", weights: ["400"], usage: "Headlines, editorial emphasis" },
  mono: { family: "GT America Mono", weights: ["400", "700"], usage: "Labels, stats, code" },
} as const;

export const chapters = [
  { title: "Colors", description: "Brand palette, usage guidelines, and accessible pairings.", href: "/colors" },
  { title: "Typography", description: "Type system, specimens, and hierarchy rules.", href: "/typography" },
  { title: "Logos", description: "Logo suite, clear space rules, and download assets.", href: "/logos" },
  { title: "Voice & Tone", description: "Personality, messaging framework, and copy templates.", href: "/voice" },
  { title: "Templates", description: "Email signatures, social frames, and presentation decks.", href: "/templates" },
  { title: "Content", description: "Social media and newsletter guidelines.", href: "/content" },
  { title: "Calendar", description: "Key dates and campaign themes.", href: "/calendar" },
  { title: "Stories", description: "Client success stories.", href: "/stories" },
  { title: "Glossary", description: "Terms and definitions.", href: "/glossary" },
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
