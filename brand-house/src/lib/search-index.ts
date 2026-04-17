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
    content: "Proxima Nova, Roboto Mono, font specimens, type hierarchy, headline rules, body text, labels",
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
    content: "Social media guidelines, newsletter templates, content calendar, editorial standards, social posts, LinkedIn Facebook Instagram X Twitter, platform tone, posting rhythm",
    href: "/content",
  },
  {
    title: "Email",
    section: "Email",
    content: "Email communications, welcome drip sequence, newsletter, SBA ADA disclaimer, subject lines, mobile first, client onboarding, drip campaign",
    href: "/email",
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
  {
    title: "Photography",
    section: "Photography",
    content: "Photo style, real people, natural light, composition rules, Do and Don't, image overlays, brand photography guidelines",
    href: "/photography",
  },
  {
    title: "Content Generator",
    section: "Generate",
    content: "AI content generator, success stories, social posts, email snippets, workshop flyers, lender outreach, newsletter, client spotlight, brand-compliant copy, Claude AI",
    href: "/generate",
  },
];
