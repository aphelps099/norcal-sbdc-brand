# Brand House — Continuation Plan

## What's Done (This Session)

### Typography Migration
- **Proxima Nova** → primary (`--sans`, `--font-sans`) — headings, body, nav, display
- **Roboto Mono** → secondary (`--font-label`, `--font-mono`) — labels, eyebrows, helpers, footers
- All 11 chapter pages updated. `brand-tokens.ts`, `globals.css`, search index, builder configs all migrated.
- Old fonts (Sofia Pro, GT America Extended) still in `/public/fonts/` — safe to delete.

### Hero Backgrounds
- All 11 pages switched from 5-stop SVG gradients to solid brand colors.
- InteriorHero accepts `bg="..."` prop for solid fills.
- All gradients archived at `/saved-colors` with visual swatches + CSS reference.

### Email Signature Generator
- 3 styles: Two Column, Minimal Mono, Compact. M3 tabs. Demo preview. Title case normalization.
- Setup guide modal (Gmail, Outlook, Apple Mail instructions).
- Lives on `/templates` page.

### Content Generator
- M3 underline tabs (no more card grid). Scroll-to-form on tab click.
- Markdown rendering (react-markdown). Two-column layout (form left, output right).
- Hashtag strategy in system prompt. Fabricated anecdote guardrail.

### Content Page
- Full redesign: inline CTA banner, 3-col principle cards with icons, horizontal platform rows, two-column comments section, numbered email grid, do/don't tinted cards.

### Navigation
- "SBDC" → "Brand" (Proxima Nova). "MENU" label removed.
- Search results → large Proxima text links (not pill cards).
- BrandGrid → 11 chapters with Material Symbol icon accents + color dots.

### Infrastructure
- Material Symbols Outlined font loaded globally.
- Roboto Mono loaded from Google Fonts.
- FOG color (#85A3C8) added to Tailwind theme.
- `.no-scrollbar` utility class in globals.css.
- CopyButton → fog ghost state, solid royal on hover.

---

## What Needs Work (Next Session)

### P0 — Embarrassing / Broken

1. **Search results UX** — current large text links are "10% better." Rethink entirely:
   - Consider: as-you-type dropdown beneath the search input (not above in a separate section)
   - Fuzzy match highlighting on the matched term
   - Keyboard navigation (arrow up/down + enter)
   - Maybe a full-page search mode vs inline results

2. **Nav columns incomplete** — the 4-column nav (Explore / Identity / Resources / Reference) only shows 10 of 11 pages. Missing: Generate. Also the Resources column is missing Content. Audit and fix `NAV_COLS` in TopNav.tsx.

3. **Colors page** — card overload on all-white background. Needs:
   - Section rhythm (alternate white → cream → navy)
   - Reduce card density
   - Add contextual "usage examples" with real UI mockups instead of abstract swatches

### P1 — Quality Polish

4. **Max-width standardization** — currently a mix of 780px, 960px, 1100px, 1200px across pages. Decision needed:
   - Narrow content (body text, principles): **780px**
   - Standard sections: **960px** or **1100px** (pick one)
   - Wide interactive tools (generator, signature): **1200px**
   - Document the system and enforce it.

5. **Section rhythm audit** — many pages are all-white. Add alternating backgrounds:
   - White → Cream (#f5f4f0) → Navy (#0f1c2e) → White
   - Every page should have at least one dark section for visual breathing room.
   - Pages that need this most: Typography, Colors, Glossary.

6. **SbdcWatermark cleanup** — used in 5+ pages. Decide:
   - Keep it as a subtle dark-section accent? Standardize positioning.
   - Or replace with the oversized Material Symbol pattern (like templates page)?
   - Don't mix both approaches on the same page.

7. **Photography page** — solid structure but still has SbdcWatermark. The do/don't cards are good. Consider adding actual photo examples or before/after treatments.

8. **Voice & Tone page** — white-heavy after the first navy section. Needs:
   - Messaging framework in a distinct cream or dark section
   - Tone table could be more visual (less table, more cards)

9. **Stories page** — fundamentally good but the ScrollRevealGrid component hardcodes `'Sofia Pro'` as a CSS fallback (already updated to `'Proxima Nova'` but verify rendering).

### P2 — Enhancement

10. **Homepage hero** — the video background + scroll animation is sophisticated. But the "Your Business, Better" text reveal could be tighter. Consider:
    - Reducing the scroll distance required
    - Making the text larger / more impactful
    - Adding a subtle CTA or scroll indicator

11. **Calendar page** — functional but basic. Could benefit from:
    - Visual timeline instead of text blocks
    - Color-coded quarters
    - Integration with actual event data

12. **Glossary page** — reference content. Consider:
    - Alphabetical jump links
    - Search/filter within the glossary
    - Better visual hierarchy between terms

13. **SiteFooter** — decent (8/10) but could be elevated:
    - Add all 11 chapter links (not just a subset)
    - Consider a "Made with" credit line
    - Social links if applicable

14. **Accessibility pass** — not audited this session:
    - Color contrast ratios on all text (especially white/40, navy/30 opacity text)
    - Focus states on all interactive elements
    - Screen reader testing on the search modal and generator tools
    - Reduced motion preferences for GSAP animations

15. **Delete orphaned files**:
    - `page-gradients.ts` — no longer imported by any page (gradients archived in saved-colors page directly)
    - Old font files in `/public/fonts/`: `SofiaPro-Medium.otf`, `SofiaPro-MediumItalic.otf`, `GT-America-Extended-Regular.otf`, `GT-America-Mono-Regular.otf`, `GT-America-Mono-Bold.otf`

### P3 — Nice to Have

16. **Dark mode** — the infrastructure is there (navy bg sections exist). Could offer a site-wide dark mode toggle.

17. **PDF export** — generate a downloadable brand guide PDF from the site content.

18. **Component playground** — a `/test` page already exists. Could expand into a Storybook-like component showcase.

19. **Analytics** — track which pages/tools get the most usage to prioritize future work.

---

## Architecture Notes for Next Developer

### Font System
```
Primary:  Proxima Nova Medium (500) — var(--sans) / font-sans
          Loaded from /public/fonts/ProximaNova-Medium.otf
          
Secondary: Roboto Mono (400-700) — var(--sans-label) / font-label / font-mono
           Loaded from Google Fonts in layout.tsx
           
Icons:    Material Symbols Outlined (variable)
          Loaded from Google Fonts in layout.tsx
          Use: <span class="material-symbols-outlined">icon_name</span>
```

### Color System
```
Navy:      #0f1c2e  — headers, footers, dark sections
Cobalt:    #004290  — CTAs, buttons, links
Royal:     #1D5AA7  — active states, focus rings, accents
Berry:     #A73B44  — alerts, emphasis, warm accent
Evergreen: #00685E  — success, growth themes
Fog:       #85A3C8  — ghost buttons, secondary UI
Slate:     #2B3035  — dark UI, secondary text
Cream:     #f5f4f0  — alternating section bg
```

### Key Files
```
globals.css          — all CSS variables, font-face, theme
brand-tokens.ts      — colors, fonts, chapters, stats
page-gradients.ts    — archived (no active imports)
system-prompt.ts     — AI content generator guardrails + hashtag strategy
content-formats.ts   — 7 content generation format definitions
InteriorHero.tsx     — hero component (bg prop for solid, gradient prop for archived)
TopNav.tsx           — main navigation + search
BrandGrid.tsx        — homepage chapter grid
ContentGenerator.tsx — AI content tool
EmailSignatureGenerator.tsx — signature builder
```

### Branch
All work is on `claude/update-colors-page-mz5XC`. No PR created yet.
