# NorCal SBDC Brand House — Design Instructions

_Working reference for page layout, typography, color, and composition. Written after the Typography / Voice / Media / Content / Logos redesigns. Treat this as the house style — every new page and every edit should pass these rules before shipping._

---

## 1. First Principles

1. **Editorial, not dashboard.** This is a Pentagram specimen book, an Aperture monograph, an annual report — not a SaaS settings panel. If a section starts to feel like a product UI (cards, chips, status rows, sidebars), stop and reconsider.
2. **Minimalist.** Strip before you add. Fewer containers. Fewer rules. Fewer labels. Fewer columns. The page should feel quiet and confident, not busy.
3. **Type does the work.** Scale, weight contrast, and the serif-italic pairing create hierarchy — not borders, not boxes, not background panels.
4. **Whitespace is structure.** Generous top and bottom padding on every section. Let the background color transitions (cream → navy → steel → cream) do the dividing, not hairline rules.
5. **One idea per section.** Each section has one headline, one supporting thought, and one piece of evidence. If a section is doing three jobs, split it.
6. **Design for scroll, not for scanning.** Long vertical reading is a feature. We are not compressing the site into a dense reference grid.

---

## 2. What to Avoid (Anti-Patterns)

These are things that kept creeping in during earlier rounds. Don't let them back.

- **Cards.** No white-or-cream bordered boxes holding content. If content needs emphasis, use scale or a color block, not a card.
- **3-column card grids.** Use vertically stacked rows or asymmetric layouts. A 3-col grid of equally-weighted cards is the default AI-design look we're moving away from.
- **Divider lines everywhere.** One or two 2px container-width rules per page is plenty. Don't draw a line between every item.
- **Pills as chips.** Tiny uppercase pill tags stacked in rows read like filter chips in a dashboard. Fine sparingly; not as a primary element.
- **Sidebar labels on every row.** "CATEGORY · TYPE · TAG" eyebrows on every list item turn the page into a spec sheet.
- **Accordion soup.** One focused accordion per page, maximum. They're a tool for progressive disclosure of optional detail, not the default layout.
- **Utility-only reference sections.** "Weights we use," "Legislative Brief," anything that reads like a technical footnote — cut it unless it's genuinely needed for the audience.
- **Duplicate intro blocks.** The InteriorHero already introduces the chapter. Don't restate the chapter description in the first content section.
- **Orange / off-brand accents.** Coral `#c4543a` is the only warm accent. No orange, no amber, no random palette drift.

---

## 3. Page Architecture

Every chapter page follows this shape:

1. **InteriorHero** — chapter eyebrow + oversized serif title + helper copy on cream.
2. **One editorial "hero moment"** — the page's defining idea, scaled up. Navy background, huge italic serif, or a full-bleed image with quote. This is the first thing after the hero and it should feel like a magazine spread opener.
3. **2–4 supporting sections** — alternating cream and navy backgrounds for rhythm. Each section has its own character (stacked rows, 2-col essay, single pull quote, etc.) — do not repeat the same layout twice in a row.
4. **One reference or "how we use it" section** — tactical detail, kept tight.
5. **NextSectionLink footer** — unchanged pattern.

Good pages have **visual rhythm**: the reader's eye moves from light to dark, from dense to open, from quiet to loud. If three sections in a row are the same background color and the same layout, the page is flat — break it up.

---

## 4. Color System (Locked)

| Role | Hex | Use |
|---|---|---|
| Navy | `#0f1c2e` | Editorial heroes, dominant section bg, primary text on cream |
| Steel | `#5684BA` | Social media section bg, supporting tiles, accent type on navy |
| Fog | `#85A3C8` | Secondary accent on navy |
| Cream | `#f5f4f0` | Default page bg |
| Coral | `#c4543a` | Primary CTA, 2-word accent type (e.g. "no-fee."), numbered labels |
| Berry | `#A73B44` | Chapter eyebrow accent, sparing |

**Rules:**
- Cream is the default. Navy is for the hero moment and one or two breaks. Steel is reserved for Social Media Best Practice. Coral appears in small, intentional doses — a button, a single italic word, a number.
- Never put dark text on dark backgrounds or light-on-light. Check contrast on every screen.
- Do not introduce new colors without updating this doc.

---

## 5. Typography

**Families:**
- **Proxima Nova** — body, labels, UI (sans)
- **Proxima Sera** — display serif. Replaces the old Turnip everywhere. Use italic heavily for editorial moments.
- **Roboto Mono** — eyebrow labels only (11px, 0.22em tracking, uppercase)
- **Extra-wide display** — large impact stats ($549M, 3,723). Use in tiles and stat blocks, never for body.

**Scale rules:**
- **Minimum body text: 15px.** 16–17px is preferred for reading passages.
- **Hero title (InteriorHero):** `clamp(120px, 18vw, 280px)`, `-0.04em` tracking, line-height `0.9`.
- **Editorial italic serif (section heroes):** `clamp(72px, 11vw, 180px)` for hero-scale; `clamp(48px, 5.8vw, 84px)` for secondary editorial titles. Always italic, always `-0.04em` tracking, line-height `0.88–0.96`.
- **Section heading (sans):** Proxima 500, `clamp(28px, 3.2vw, 40px)`, `-0.015em`, line-height `1.05`.
- **Eyebrow:** Roboto Mono 11px, uppercase, 0.22em tracking. Pattern: `"Chapter 0X · Topic"` or `"Section · Qualifier"`.

**Pairing rules:**
- Serif italic for emotion, concept, story. Sans for structure, labels, UI.
- Mix faces within a title only when intentional ("Your Business, *Better.*" — sans weight on left, steel italic serif on right).
- Never typeset logos. Use the logo files.

---

## 6. Layout Grid & Rules

- **Content column:** `max-w-[1200px]` centered, padded `px-8 md:px-12 lg:px-16`.
- **Narrow column** (for dense text sections): `max-w-[960px]` inside the 1200px wrapper.
- **Section rules (hairline dividers):** 2px tall, span the content column only — never full-bleed. Color: `rgba(15,28,46,0.18)` on cream pages; `#5684BA` on navy pages. Use sparingly — one or two per page.
- **Vertical rhythm:** section padding `py-20 md:py-28 lg:py-36`. Hero moments get more — `py-28 md:py-40`.
- **Grids:** default to stacked rows. When using columns, prefer asymmetric (5/7, 4/8) over symmetric (6/6, 4/4/4). A symmetric 3-col card grid is almost always the wrong choice.

---

## 7. Section Patterns (When to Use What)

**Editorial hero moment** — Navy bg, massive italic serif title filling the column, short Proxima body in a narrow column below, one CTA if needed. This is how you say "this is important."

**Stacked rows** — For comparing 3–6 items that each deserve breathing room (principles, platforms, rules). No card around each row — just the content with generous vertical spacing between.

**2-col essay** — One serif italic pull-quote on the left, supporting Proxima body on the right. Asymmetric widths (5/7). No background change, no box.

**Tile grid (rare)** — Used for the Social Media Kit only. 2-col grid of 6 tiles, each with a distinct background (client photo, coral, navy, steel, cream) and distinct typography treatment. This is the showcase moment — not a default pattern.

**Stat block** — A single wide-display number on a colored background with one Roboto Mono label. Use when a number is the point.

**Best-practice accordion** — One per page, maximum. Steel bg, white type, big platform/item titles with a plus-icon toggle. Tone/detail reveals as italic serif when opened.

---

## 8. Minimalism Checklist (Apply Before Shipping Any Page)

Ask these questions. If you answer "yes" to any, fix it:

- [ ] Does any section have a card/box around it that isn't essential?
- [ ] Are there more than 2 divider rules on the page?
- [ ] Are there 3 or more consecutive sections with the same background color?
- [ ] Does any row have three or more small labels/chips attached to it?
- [ ] Is there a 3-column symmetric grid of uniform cards?
- [ ] Is there any text smaller than 15px?
- [ ] Is the page restating information the InteriorHero already covered?
- [ ] Is there a section that exists only as reference/utility detail the audience won't use?
- [ ] Are divider lines full-bleed instead of column-width?
- [ ] Does any hover/accent introduce a color not in the palette?

If all clear — ship it.

---

## 9. Component-Level Rules

**Pill / link chips:**
- Sentence case, not UPPERCASE. 16px type.
- `px-6 py-3.5`, `rounded-full`, `border border-navy/20`.
- Right-arrow icon (half-opacity, full on hover).
- Hover: navy fill, white text, 300ms transition.

**Buttons (primary):**
- Coral `#c4543a` bg, white text, Proxima 500, no rounded-full (slightly rounded or square corners).
- Icon optional, always on the right or a sparkle on the left for AI tools.

**Eyebrows:**
- `"Chapter 0X · Topic"` pattern. Roboto Mono 11px, uppercase, 0.22em tracking, navy or fog color.

**Rules (dividers):**
- 2px, container-width only, `rgba(15,28,46,0.18)` on cream / `#5684BA` on navy. Never full-bleed.

**Images:**
- Prefer real client photos (bg-star, circosphere, marin-auto, rejoule, rep-it-out, seal-rock-dental) as full-bleed tile backgrounds with text overlaid in the lower corner.
- No stock photography. No decorative illustrations that aren't part of the brand system.

---

## 10. Voice in Visual Form

The writing voice is direct, confident, practical. The design voice mirrors it:

- **Direct** → large type, one idea per section, no decorative filler.
- **Confident** → generous whitespace, willingness to leave space empty.
- **Practical** → content is the hero; chrome is minimal.

When in doubt: **remove something**. The site gets better every time we cut, not when we add.

---

_Last updated: April 16, 2026. Update this file whenever a new pattern is locked in across pages._
