# Golden Visual Reference — Diagram Design System

Status: Official — Mandatory
Source image: `docs/design/GOLDEN_VISUAL_REFERENCE.png`

---

## 1. WHAT THIS DOCUMENT IS

This document is a **design system specification**, extracted by direct visual
analysis of `GOLDEN_VISUAL_REFERENCE.png`. It defines how every scientific
diagram in this book must be composed from now on.

It is **not** a description of one specific page's content. The reference
page shows a central-nervous-system diagram; our book's diagrams will show
different equipment and anatomy entirely. What must be preserved is the
**visual language** — composition, spacing, typography, color hierarchy,
card structure, and callout behavior — never the specific scientific
content of the reference image itself.

Do not copy the reference image's science (brain/spinal-cord regions) into
unrelated lessons. Adapt this system to whatever the actual textbook page
says.

---

## 2. WHAT THE REFERENCE IMAGE ACTUALLY SHOWS

Read directly from the file, top to bottom:

1. A page-chrome header: a page-indicator pill ("صفحة 9 من 23") at the
   top-left, and a chapter label with a small logo mark at the top-right.
2. A centered page title ("مكونات الجهاز العصبي المركزي") with a short
   decorative underline accent beneath it — not full-width, just under the
   title's own width.
3. A centered, 3-line introductory paragraph directly under the title, in
   plain text (no card border).
4. The main diagram area, split into two zones:
   - **Left**: one large, detailed, full-color anatomical illustration
     (brain + spinal cord), running the full height of the diagram area.
     Overlaid on the illustration, at each labeled region's exact vertical
     extent, is a soft rounded-rectangle color wash (a distinct color per
     region) that highlights *where* that region is without adding any
     text on top of the artwork itself.
   - **Right**: a vertical stack of five fully self-contained cards, one
     per region, each connected to its region's colored band by a short
     horizontal leader line ending in a small filled dot at the
     illustration's edge.
5. One secondary, lighter-weight annotation off to the far left of the
   illustration (a bracket + short label + dashed connector, for the
   adrenal glands) — used for a minor supplementary detail that does not
   warrant a full numbered card.
6. A figure caption below the diagram area ("الشكل (1): ...").
7. A footer bar with book-series branding.

---

## 3. WHY THIS READS BETTER THAN OUR PREVIOUS DIAGRAM

Comparing directly against the callout-based diagram currently in
`TomographySectionsDiagram.astro`:

| | Previous implementation | Golden reference |
|---|---|---|
| Illustration | Simplified gray-outline geometric silhouette | Detailed, full-color, recognizable illustration |
| Label content | One or two words only (e.g. "بطن") | Full card: title + one-sentence explanation + icon |
| Region indication | A single small dot on the outline | A soft colored band covering the region's whole extent |
| Card location | Split across both sides (start + end columns) | Single side, one clean top-to-bottom stack |
| Numbers | Rejected outright (caused a numbered-legend anti-pattern) | Used, but only as a small ordinal *inside* an already-fully-labeled card — never a substitute for the label |
| Whitespace | Adequate but tight at mobile widths | Generous throughout |

The core lesson: **a direct label alone is not enough context.** The golden
reference pairs every label with one explanatory sentence and an icon, so a
student never has to cross-reference the surrounding paragraph to know what
a region *is*, not just what it's *called*. The colored band (not just a
dot) also removes any ambiguity about the labeled region's actual extent on
the illustration.

The numbering in the golden reference is **not** the numbered-legend
anti-pattern rejected earlier in this project. That earlier pattern used
numbers as the *only* on-illustration marker, requiring the student to
cross-reference a separate index to find the label. Here, the number is a
small ordinal printed *inside* a card that already carries the full Arabic
label and its explanation — it never stands in for the label.

---

## 4. REUSABLE VISUAL SYSTEM

### 4.1 Overall composition

```
                         [ optional page-chrome ]
                         Centered Title
                         short underline accent
                    Centered intro paragraph (plain text)

  ┌────────────────────┐        ┌─────────────────────────────┐
  │                     │┈┈┈┈┈┈┈▶│  ① Card 1 title              │
  │                     │        │     one-sentence explanation │
  │   Illustration      │┈┈┈┈┈┈┈▶│  ② Card 2 title  ...         │
  │   (colored region   │        ├─────────────────────────────┤
  │    bands overlaid)  │┈┈┈┈┈┈┈▶│  ③ Card 3 ...                 │
  │                     │        │  ④ Card 4 ...                 │
  │                     │┈┈┈┈┈┈┈▶│  ⑤ Card 5 ...                 │
  └────────────────────┘        └─────────────────────────────┘
                         Figure caption
```

- Illustration on one side (the side nearer the reading-start edge is not
  mandated by the reference — pick whichever side keeps the illustration
  visually dominant), cards stacked as one clean column on the other side.
- Do **not** split cards across both sides of the illustration. One column,
  top-to-bottom, in the same order the regions appear on the illustration.

### 4.2 Illustration placement

- The illustration is the **primary visual object** — it must occupy more
  width than the card column, and must never be shrunk to make room for
  text. If space is tight, shrink card content density, not the
  illustration.
- The illustration should be a real, recognizable, colored rendering of the
  subject wherever a suitable licensed/source-book asset exists — not a
  flat gray geometric placeholder. Where no real asset exists yet
  (per this project's existing asset-sourcing rules), a placeholder must
  say so honestly rather than pretend to be final art.
- Colored region bands sit **behind** the illustration's own linework, at
  each labeled region's exact vertical (or spatial) extent — this is what
  gives an unambiguous "where," distinct from a single point marker.

### 4.3 Explanatory cards

Each card is a **self-contained unit**, not a bare label. Required parts:

1. A small colored ordinal badge (number), matching the region's color.
2. The Arabic label, bold, as the card's title.
3. One short explanatory sentence (not a paragraph) — drawn from the
   source textbook's own wording for that region, never invented.
4. A small themed icon on the card, colored to match the region.

Cards use a soft pastel background tint plus a colored accent (border or
wash) in the region's own color, generous internal padding, and rounded
corners — consistent with this project's existing neumorphic surface
language (`.neo-surface` / `.neo-surface-soft` tokens), not a new visual
system bolted on top of it.

### 4.4 Numbered callouts

- Numbers are permitted, but **only** as a small ordinal printed inside a
  card that already carries the full label. A number must never appear on
  the illustration or in a legend without its label immediately present.
- Numbers reinforce sequence/reading order; they are not the mechanism a
  student uses to identify what something is called.

### 4.5 Leader-line behavior

- One short, straight line per region, from a small filled dot at the
  illustration/band edge to the corresponding card.
- Lines are **short** — the card sits close to its region, not across the
  full width of the page.
- A line must never cross another leader line, another label, another
  card, or an unrelated region of the illustration.
- Because every card lives in one column in the same top-to-bottom order as
  the regions on the illustration, lines are naturally parallel-ish and
  non-crossing by construction — this matches the non-crossing proof
  already established for this project's callout system (ordered anchors
  connected to ordered targets on a shared edge cannot cross).
- Minor/secondary details (e.g. a tiny gland, not a full labeled region)
  may use a lighter annotation style: a bracket, a short label, and a
  dashed connector — visually distinct from the main numbered cards, and
  positioned so it cannot collide with them.

### 4.6 Label placement

- Labels live **inside cards**, entirely outside the illustration's own
  bounding area. A label must never sit on top of, or touch, the
  illustration.
- No label ever touches or overlaps another label or card — enforced by
  each card having a fixed slot in the vertical stack with real measured
  spacing, not by hoping percentages work out (see §4.7 and this project's
  existing lesson: verify with actual rendered bounding boxes, not just
  computed percentages).

### 4.7 Spacing and safe zones

- Generous whitespace between the illustration and the card column.
- Generous whitespace between consecutive cards — enough that a card's
  full text (title + explanation, potentially wrapping to 2 lines) can
  never approach its neighbor.
- Generous internal card padding — text never touches a card's own border.
- As established while fixing the previous diagram: always verify spacing
  with real measured label/card heights at the narrowest supported width,
  not a hand-computed estimate. A percentage gap that looks fine on paper
  can still produce a measured overlap once real text wraps to two lines.

### 4.8 Typography hierarchy

From largest/heaviest to smallest/lightest:

1. Page title — largest, boldest, dark.
2. Card title (region label) — bold, clearly a step below the page title.
3. Intro paragraph / card explanation body text — regular weight, readable
   size, never shrunk to fit.
4. Secondary/meta text (figure caption, footer, minor annotations) —
   smallest, muted color.

Reuse this project's existing type scale tokens
(`--neo-font-size-h1/h2/h3/body`) for these tiers rather than inventing new
sizes per diagram.

### 4.9 Arabic RTL layout

- All Arabic text is real HTML/CSS text (never SVG `<text>`) so the
  browser's own bidi and shaping engine handles it correctly — this
  project already established why embedding Arabic directly in SVG causes
  clipping and anchor-direction bugs; the golden reference's card-based
  labels reinforce that HTML-based labels are the only style consistent
  with correct, robust Arabic rendering.
- Cards read start-to-end in normal RTL flow; the illustration sits on
  whichever side keeps the overall composition natural in RTL reading
  order.
- English technical terms inside a card (if the source textbook provides
  one) keep `dir="ltr"` exactly as established elsewhere in this project.

### 4.10 Color hierarchy

- One distinct color per region, applied consistently across: the
  illustration's region band, the connector dot and line, the card's
  accent/background tint, and the number badge.
- Color reinforces grouping but is never the *only* signal — position
  (card order matches illustration order) and text (the label itself)
  always carry the same information redundantly, so the diagram remains
  understandable in grayscale or to colorblind readers.
- Keep the palette restrained: enough hue separation to tell regions apart
  at a glance, soft/pastel saturation so cards read as calm educational
  surfaces, not alert/warning colors.

### 4.11 Card structure (implementation mapping)

Maps onto this project's existing component architecture:

- A `DiagramFrame`-equivalent shell owns the illustration/card-column
  layout split and overall spacing.
- A `DiagramCard` (new concept, replacing the plain-text `DiagramCallout`)
  is required to carry: number, title, explanation, icon, and region color
  — richer than the current callout's single text span.
- The illustration remains a single SVG (or a real sourced image once
  available) with region bands and connector dots as part of its own
  geometry — no text inside the SVG.

### 4.12 Visual grouping

Each region's identity is carried by **four redundant signals at once**:
color, spatial position (band + card order), the connector line, and the
text label. No single signal is ever relied upon alone.

### 4.13 Scientific illustration style

- Detailed and recognizable rather than abstract/geometric, wherever a
  legitimate sourced or project-created illustration exists.
- Colored, not flat monochrome outline — but still restrained/clinical in
  palette, not cartoonish.
- Must represent only what the source textbook actually describes — no
  invented anatomical detail, exactly as already required by the project
  Constitution and Golden Page Spec.

### 4.14 Mobile readability

- At the narrowest supported width, cards may need to shrink their
  internal spacing or icon size, but never their minimum readable font
  size.
- If true side-by-side (illustration + card column) layout cannot fit
  comfortably at mobile width, the columns may narrow — but content must
  never be allowed to overlap as a result. Verify at 375px with real
  rendered measurements before considering a diagram complete, per §4.7.

### 4.15 Responsive behavior

- The same single-column-of-cards structure holds at every breakpoint;
  only spacing/sizing changes, not the fundamental composition (this
  project already established that stacking cards *above/below* the
  illustration instead of beside it, at narrow widths, severs the
  label-to-structure relationship — avoid that).
- Illustration and card column scale together so the connector lines stay
  visually attached to the correct points at any width.

### 4.16 Accessibility / readability

- Sufficient text/background contrast on every card (reuse this project's
  already-corrected `--neo-text` / `--neo-muted` / `--neo-primary` tokens,
  chosen for WCAG AA contrast).
- Nothing conveyed by color alone (§4.10).
- No information available only through hover or only through animation.
- Real, adequate touch targets if a card is ever made interactive.

### 4.17 Prevention checklist (must pass before any diagram is considered done)

- [ ] No label/card overlaps the illustration.
- [ ] No label/card overlaps another label/card.
- [ ] No leader line crosses another leader line.
- [ ] No leader line crosses a label, card, or unrelated region of the
      illustration.
- [ ] Every leader line's endpoint clearly indicates one specific
      structure.
- [ ] Verified via real rendered measurements (not just computed
      percentages) at the narrowest supported width.
- [ ] No horizontal overflow at any tested width.
- [ ] Nothing is clipped.
- [ ] Text never shrinks below a comfortable minimum to force a fit —
      the composition is resized/restructured instead.
- [ ] Visual hierarchy is consistent with §4.8.

---

## 5. WHAT THIS DOCUMENT DELIBERATELY DOES NOT SPECIFY

- The reference image's own page-chrome (page-number pill, footer
  branding bar) is page-template styling from the source the reference
  was drawn from — not part of this project's diagram system. This
  project's own `ChapterHeader`/`PageLayout`/figure-caption conventions
  already cover that role and are unaffected by this document.
- Exact pixel values, exact colors, or exact icon artwork — those are
  implementation decisions for whoever builds the next diagram, made
  consistent with the principles above and this project's existing design
  tokens, not dictated by this document.

---

## 6. STATUS OF THIS PHASE

This document is a specification only. As of this commit:

- No diagram component was modified.
- No new illustration or icon assets were generated or downloaded.
- `TomographySectionsDiagram.astro` and the rest of the diagram system
  remain exactly as they were before this phase.

Implementing this system (rebuilding the Tomography diagram, or any other)
is explicitly deferred to a later phase.
