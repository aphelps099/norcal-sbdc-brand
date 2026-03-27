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
    content: "Tiempos, Proxima Nova, font specimens, type hierarchy, headline rules, body text, labels",
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
  {
    title: "Content",
    section: "Content",
    content: "Social media guidelines, newsletter templates, content calendar, editorial standards, social posts",
    href: "/content",
  },
  {
    title: "Calendar",
    section: "Calendar",
    content: "Key dates, campaign themes, seasonal planning, editorial calendar, awareness months",
    href: "/calendar",
  },
  {
    title: "Success Stories",
    section: "Stories",
    content: "Client success stories, case studies, testimonials, impact narratives, business outcomes",
    href: "/stories",
  },
  {
    title: "Glossary",
    section: "Glossary",
    content: "Terms and definitions, brand terminology, SBDC acronyms, business advising vocabulary",
    href: "/glossary",
  },
];
