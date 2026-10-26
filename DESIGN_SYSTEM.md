# PALMA TRAVEL — LUXURY EDITORIAL DESIGN SYSTEM

## 1. Brand Essence & Aesthetics

PALMA TRAVEL embodies **Contemporary Egyptian Luxury Tourism** and **Editorial Travel Publishing**. The aesthetic draws inspiration from high-end international monographs, architectural journals, and heritage expeditions.

### Core Philosophy
- **Anti-AI Slop:** Zero gratuitous rounded pill boxes around metadata, zero code-style `//` headers, zero fake system scoreboards.
- **Editorial Typography:** Dramatic contrast between classical editorial serif display (`Cormorant Garamond`) and razor-sharp contemporary sans-serif (`Plus Jakarta Sans`).
- **Whitespace & Paper Space:** Generous margins, limestone/sand paper backgrounds (`#FAF9F6`), and hairline architectural dividers (`#E4DCD3`).
- **Curated Color Discipline:** 60% warm limestone paper, 30% structural charcoal/sand, 10% curated Sky Blue & Egyptian Gold accents.

---

## 2. Color Palette

| Token | Hex | Role | Usage |
|---|---|---|---|
| `--color-warm-white` | `#FAF9F6` | Primary Canvas (60%) | Page background, card surfaces, clean reading field |
| `--color-sand` | `#F3EFE9` | Structural Neutral | Subdued containers, timeline backgrounds, quote boxes |
| `--color-sand-border` | `#E4DCD3` | Hairline Separator | 1px clean architectural border rule |
| `--color-charcoal` | `#222222` | Ink / Typographic Black | Primary headlines, primary buttons, high-contrast text |
| `--color-charcoal-deep`| `#161514` | Obsidian Contrast | Dark immersive sections (Nile cruise, footer, hero) |
| `--color-charcoal-muted`| `#55524E` | Body Prose Neutral | Article paragraphs, subtitle decks (WCAG AAA compliant) |
| `--color-sky` | `#49BCE8` | Aerial & River Accent (10%) | Sky, Nile, active indicator lines, subtle focus states |
| `--color-yellow` | `#F5C542` | Egyptian Gold Accent (5%) | Sunrise glows, star ratings, special highlight badges |

---

## 3. Typographic Hierarchy

### Display Serif: `Cormorant Garamond`
- Weights: 300, 400, 500, 600, 700; Italic
- Scale:
  - Hero Display: `clamp(2.5rem, 5vw, 4.5rem)` (`text-4xl` to `text-7xl`)
  - Section Title: `2.25rem`–`3rem` (`text-3xl` to `text-5xl`)
  - Card Title: `1.5rem`–`1.875rem` (`text-xl` to `text-2xl`)
  - Pull Quotes: `1.75rem`–`2.5rem` italic

### Body & Interface Sans: `Plus Jakarta Sans`
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Scale:
  - Body Prose: `15px`–`16px` (`text-sm` to `text-base`), measure `65-75ch`, line-height `1.6-1.7`
  - Button Labels: `11px`–`12px` uppercase tracking-widest font-semibold
  - Metadata: `11px`–`12px` unboxed text with `·` separators
  - Figures / Currency: `tabular-nums` for precise vertical alignment

---

## 4. Component Rules & Governance

1. **Top Bar Contract:**
   - Zone 1: Single text wordmark `PALMA TRAVEL` (Cormorant Garamond, tracking-[0.18em]).
   - Zone 2: 4–6 single-line navigation links with subtle underline indicators.
   - Zone 3: Exactly 1 primary CTA button (`Tailor-Made Journey`).
   - Mobile: Clean overlay drawer with direct concierge lines.

2. **Metadata Rule (Zero Pills):**
   - Informational tags and categories MUST NOT be placed in pill capsules or candy bubbles.
   - Render as clean text:
     ```html
     <span>Luxor</span> · <span>Hot Air Balloon</span> · <span>3.5 Hours</span>
     ```

3. **Imagery Standards:**
   - Every `<img>` tag is wrapped in `EditorialImage` with `referrerPolicy="no-referrer"`, subtle loading shimmer, and structured architectural SVG fallback if network fails.
   - Measured scrim overlays (`from-black/85 via-black/40 to-transparent`) are applied when text overlays photography.

4. **Interactive Controls:**
   - Buttons use `active:scale-[0.98]` and smooth cubic-bezier transitions.
   - Clear focus rings for keyboard accessibility.
