export interface SearchItem {
  title: string;
  section: string;
  content: string;
  href: string;
}

export const searchData: SearchItem[] = [
  {
    title: "Logo Guidelines",
    section: "Logos",
    content: "Primary logo, clear space rules, minimum size, usage dos and donts, downloads",
    href: "/logos",
  },
  {
    title: "Brand Colors",
    section: "Colors",
    content: "Navy #0f1c2e, Royal #1D5AA7, Pool #8FC5D9, Strawberry #F7024D, Cream #f0efeb, color palette, hex values, usage guidelines, accessible pairings",
    href: "/colors",
  },
  {
    title: "Typography",
    section: "Typography",
    content: "GT Era Display, GT America, GT America Mono, Tiempos, font specimens, type hierarchy, headline rules, body text, labels",
    href: "/typography",
  },
  {
    title: "Voice & Tone",
    section: "Voice",
    content: "Brand personality, messaging framework, tagline Your Business Better, campaign pillars, headline patterns, tone by context, copy templates",
    href: "/voice",
  },
  {
    title: "Templates",
    section: "Templates",
    content: "Email signature, social bio, elevator pitch, copy blocks, ready-to-use templates",
    href: "/templates",
  },
];
