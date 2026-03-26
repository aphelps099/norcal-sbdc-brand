"use client";

import { createContext, useContext } from "react";
import type { PageConfig, SectionConfig, SectionType } from "./section-types";

/* ─── Actions ─── */
export type BuilderAction =
  | { type: 'SET_PAGE'; payload: PageConfig }
  | { type: 'ADD_SECTION'; payload: { sectionType: SectionType; index?: number } }
  | { type: 'REMOVE_SECTION'; payload: { id: string } }
  | { type: 'MOVE_SECTION'; payload: { fromIndex: number; toIndex: number } }
  | { type: 'UPDATE_SECTION'; payload: { id: string; config: Record<string, unknown> } }
  | { type: 'SELECT_SECTION'; payload: { id: string | null } }
  | { type: 'SET_TITLE'; payload: string };

export interface BuilderState {
  page: PageConfig;
  selectedSectionId: string | null;
}

/* ─── Default configs for new sections ─── */
function uid() { return `s${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`; }

function createDefaultSection(sectionType: SectionType): SectionConfig {
  const id = uid();
  switch (sectionType) {
    case 'nav':
      return { type: 'nav', id, config: { brandText: 'Brand', menuItems: [], glassBg: true } };
    case 'splash':
      return { type: 'splash', id, config: { logo: 'Logo', label: 'Subtitle', duration: 2, fadeSpeed: 0.8, bgColor: '#f5f4f0' } };
    case 'hero':
      return { type: 'hero', id, config: {
        cells: [], cols: 3, rows: 3, colWidths: [1, 3, 1], rowHeightMode: 'equal' as const, rowHeights: [1, 1, 1],
        gap: 6, aspectRatio: '16/10', bgColor: '#000000', containerRadius: 0,
        showText: true, heading: 'Heading', subhead: 'Subheading', headingSize: 64, subSize: 13, textColor: '#ffffff',
        enableVignette: true, vignetteStrength: 60, vignetteSpread: 40, edgeDarken: 30, overlayColor: '#000000',
        enablePin: true, pinDuration: 200, enableInset: true, insetStart: 40, insetRadius: 16,
        skewX: 5, enableFade: true, scaleStart: 0.7,
      }};
    case 'manifesto':
      return { type: 'manifesto', id, config: {
        editorHTML: '<p>Your statement here</p>', eyebrow: 'LABEL', subtitle: '',
        bgColor: '#ffffff', textColor: '#0a1528', accentColor: '#1D5AA7',
        fontSize: 48, lineHeight: 1.15, letterSpacing: -0.01, alignment: 'center' as const,
        eyebrowStyle: 'mono-upper' as const, maxWidth: '920px', fontFamily: 'serif' as const,
        paddingTop: 80, paddingBottom: 80, grainEnabled: false, grainOpacity: 2,
        underlineWords: [], underlineStyle: 'solid' as const, underlineColor: 'accent' as const,
        underlineCustomColor: '#3b82f6', ulThickness: '2px', ulOffset: '6px', ulAnimate: true, ulSpeed: 2,
        animType: 'stagger-words' as const, animTrigger: 'on-scroll' as const,
        staggerDelay: 40, animDuration: 700, easing: 'ease-out',
      }};
    case 'chapter':
      return { type: 'chapter', id, config: {
        cards: [], cols: 3, gap: 16, padding: 24,
        bgColor: '#f5f4f0', cardBgColor: '#ffffff', cardRadius: 12,
        iconColor: '#1D5AA7', textColor: '#0a1528',
        headerText: 'Section', headerStyle: 'mono-upper' as const,
        animEnabled: true, animStagger: 80,
      }};
    case 'custom':
      return { type: 'custom', id, config: { html: '<div>Custom content</div>' } };
    case 'footer':
      return { type: 'footer', id, config: { brandText: 'Brand', year: '2026', links: [], bgColor: '#f5f4f0' } };
  }
}

export function builderReducer(state: BuilderState, action: BuilderAction): BuilderState {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, page: action.payload };

    case 'ADD_SECTION': {
      const newSection = createDefaultSection(action.payload.sectionType);
      const sections = [...state.page.sections];
      const idx = action.payload.index ?? sections.length;
      sections.splice(idx, 0, newSection);
      return { ...state, page: { ...state.page, sections }, selectedSectionId: newSection.id };
    }

    case 'REMOVE_SECTION': {
      const sections = state.page.sections.filter(s => s.id !== action.payload.id);
      return {
        ...state,
        page: { ...state.page, sections },
        selectedSectionId: state.selectedSectionId === action.payload.id ? null : state.selectedSectionId,
      };
    }

    case 'MOVE_SECTION': {
      const sections = [...state.page.sections];
      const [moved] = sections.splice(action.payload.fromIndex, 1);
      sections.splice(action.payload.toIndex, 0, moved);
      return { ...state, page: { ...state.page, sections } };
    }

    case 'UPDATE_SECTION': {
      const sections = state.page.sections.map(s =>
        s.id === action.payload.id ? { ...s, config: { ...s.config, ...action.payload.config } } : s
      ) as PageConfig['sections'];
      return { ...state, page: { ...state.page, sections } };
    }

    case 'SELECT_SECTION':
      return { ...state, selectedSectionId: action.payload.id };

    case 'SET_TITLE':
      return { ...state, page: { ...state.page, title: action.payload } };

    default:
      return state;
  }
}

/* ─── Context ─── */
export interface BuilderContextValue {
  state: BuilderState;
  dispatch: React.Dispatch<BuilderAction>;
}

export const BuilderContext = createContext<BuilderContextValue | null>(null);

export function useBuilder() {
  const ctx = useContext(BuilderContext);
  if (!ctx) throw new Error('useBuilder must be used within BuilderProvider');
  return ctx;
}
