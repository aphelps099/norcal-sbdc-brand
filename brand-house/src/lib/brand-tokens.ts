export const colors = {
  sbdcNavy: { hex: "#111C2E", name: "SBDC Navy", usage: "Headlines, primary text, headers, footers, hero backgrounds" },
  slate: { hex: "#2D3340", name: "Slate", usage: "Dark UI, secondary text" },
  cobalt: { hex: "#004290", name: "Cobalt", usage: "CTAs, buttons, links, interactive elements, data visualization primary" },
  berry: { hex: "#A73B44", name: "Berry", usage: "Alerts, emphasis, accent details, secondary CTAs, pull quotes" },
  evergreen: { hex: "#00685E", name: "Evergreen", usage: "Success states, growth themes, secondary accent, charts and graphs" },
  steel: { hex: "#5684BA", name: "Steel", usage: "Secondary links, icon color, supporting data viz, borders" },
  fog: { hex: "#85A3C8", name: "Fog", usage: "Soft blue backgrounds, secondary UI, supporting fills" },
  silver: { hex: "#D9D9D9", name: "Silver", usage: "Dividers, borders, disabled states, subtle backgrounds" },
  cloud: { hex: "#F2F4F7", name: "Cloud", usage: "Light backgrounds, cards, content areas" },
} as const;

export const colorGroups = [
  { label: "Primary & Dark Tones", keys: ["sbdcNavy", "slate", "cobalt"] as const },
  { label: "Accent Colors", keys: ["berry", "evergreen", "steel"] as const },
  { label: "Neutrals & Backgrounds", keys: ["fog", "silver", "cloud"] as const },
] as const;

export const colorUsageCards = [
  { key: "sbdcNavy" as const, text: "Headlines, primary text, headers, footers, hero backgrounds. This is your anchor." },
  { key: "cobalt" as const, text: "CTAs, buttons, links, interactive elements, data visualization primary." },
  { key: "berry" as const, text: "Alerts, emphasis, accent details, secondary CTAs, pull quotes." },
  { key: "evergreen" as const, text: "Success states, growth themes, secondary accent, charts and graphs." },
  { key: "steel" as const, text: "Secondary links, icon color, supporting data viz, borders." },
  { key: "silver" as const, text: "Dividers, borders, disabled states, subtle backgrounds." },
] as const;

export const fonts = {
  sans: { family: "Sofia Pro", weights: ["500"], usage: "Headings, body text, navigation, display" },
  label: { family: "GT America Extended", weights: ["400"], usage: "Labels, eyebrows, tags, micro-copy" },
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
  { title: "Generate", description: "AI-powered on-brand content generation.", href: "/generate" },
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
