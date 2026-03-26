/* ═══════════════════════════════════════════
   Section Type Definitions
   Matches the proven HTML builders exactly
   ═══════════════════════════════════════════ */

export type SectionType = 'nav' | 'splash' | 'hero' | 'manifesto' | 'chapter' | 'custom' | 'footer';

/* ─── Nav ─── */
export interface NavConfig {
  brandText: string;
  menuItems: { label: string; href: string }[];
  glassBg: boolean;
}

/* ─── Splash ─── */
export interface SplashConfig {
  logo: string;
  label: string;
  duration: number;
  fadeSpeed: number;
  bgColor: string;
}

/* ─── Hero (SRG Builder) ─── */
export interface HeroCellConfig {
  src: string;
  posX: string;
  posY: string;
  zoom: number;
}

export interface HeroConfig {
  cells: HeroCellConfig[];
  cols: number;
  rows: number;
  colWidths: number[];
  rowHeightMode: 'equal' | 'custom';
  rowHeights: number[];
  gap: number;
  aspectRatio: string;
  bgColor: string;
  containerRadius: number;
  /* text */
  showText: boolean;
  heading: string;
  subhead: string;
  headingSize: number;
  subSize: number;
  textColor: string;
  /* vignette */
  enableVignette: boolean;
  vignetteStrength: number;
  vignetteSpread: number;
  edgeDarken: number;
  overlayColor: string;
  /* animation */
  enablePin: boolean;
  pinDuration: number;
  enableInset: boolean;
  insetStart: number;
  insetRadius: number;
  skewX: number;
  enableFade: boolean;
  scaleStart: number;
}

/* ─── Manifesto Builder ─── */
export interface ManifestoConfig {
  editorHTML: string;
  eyebrow: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  alignment: 'left' | 'center' | 'right';
  eyebrowStyle: 'mono-upper' | 'sans-light' | 'hidden';
  maxWidth: string;
  fontFamily: 'serif' | 'sans';
  paddingTop: number;
  paddingBottom: number;
  grainEnabled: boolean;
  grainOpacity: number;
  /* underlines */
  underlineWords: string[];
  underlineStyle: 'solid' | 'dashed' | 'gradient' | 'none';
  underlineColor: 'accent' | 'text' | 'custom';
  underlineCustomColor: string;
  ulThickness: string;
  ulOffset: string;
  ulAnimate: boolean;
  ulSpeed: number;
  /* animation */
  animType: 'none' | 'fade-up' | 'stagger-words' | 'snap-scale';
  animTrigger: 'on-load' | 'on-scroll';
  staggerDelay: number;
  animDuration: number;
  easing: string;
}

/* ─── Chapter Builder ─── */
export interface ChapterCardConfig {
  icon: string;
  title: string;
  description: string;
  tag?: string;
}

export interface ChapterConfig {
  cards: ChapterCardConfig[];
  cols: number;
  gap: number;
  padding: number;
  bgColor: string;
  cardBgColor: string;
  cardRadius: number;
  iconColor: string;
  textColor: string;
  headerText: string;
  headerStyle: 'mono-upper' | 'serif' | 'hidden';
  animEnabled: boolean;
  animStagger: number;
}

/* ─── Custom HTML ─── */
export interface CustomConfig {
  html: string;
}

/* ─── Footer ─── */
export interface FooterConfig {
  brandText: string;
  year: string;
  links: { label: string; href: string }[];
  bgColor: string;
}

/* ─── Section Union ─── */
export type SectionConfig =
  | { type: 'nav'; id: string; config: NavConfig }
  | { type: 'splash'; id: string; config: SplashConfig }
  | { type: 'hero'; id: string; config: HeroConfig }
  | { type: 'manifesto'; id: string; config: ManifestoConfig }
  | { type: 'chapter'; id: string; config: ChapterConfig }
  | { type: 'custom'; id: string; config: CustomConfig }
  | { type: 'footer'; id: string; config: FooterConfig };

export type PageConfig = {
  title: string;
  sections: SectionConfig[];
};
