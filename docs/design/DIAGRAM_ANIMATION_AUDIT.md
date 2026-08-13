# Diagram Animation Audit — Chapter 1 / Lesson 1

Status: Complete
Scope: every scientific diagram/illustration currently in the project.

This document is the audit required before the global animation pass
(animate every existing scientific diagram without redesigning the book,
rebuilding pages, or changing scientific content). It inventories every
diagram found in the repository, classifies it, and records the
animation decision made for it.

---

## 1. Inventory method

Searched for: `*.svg` files, diagram/figure Astro components, diagram
JSON block references (`"type": "diagram"` / `"type": "device"`),
existing animation code (`animation`, `@keyframes`, `playing`).

Found:

- 11 static SVG figures under `public/assets/diagrams/chapter-01/`
  (Figures 1-1 through 1-11), each referenced by a `"diagram"` block in
  `src/data/chapter-01/page-0X.json`.
- 1 hand-authored interactive anatomical illustration,
  `TomographySectionsDiagram.astro` (device-05, "Golden Page"), built on
  the reusable `DiagramFrame`/`DiagramCard` leader-line system. Already
  interactive (card ↔ region highlighting) from an earlier phase.
- Devices 1–4 on page-01 (Still/Continuous/Motion Picture, Mammography)
  have only an image placeholder ("سيتم إضافة الصورة لاحقًا") — no real
  diagram asset exists yet, so there is nothing to animate.
- No other SVGs, flowcharts, or illustrations exist anywhere else in the
  repository.

---

## 2. Per-diagram classification and decision

| # | File / component | Page | Subject | Type | Level | Animation added |
|---|---|---|---|---|---|---|
| 1 | `diagram-01-block-diagram.svg` → `XraySystemBlockDiagram.astro` | p.10 | X-ray machine block diagram | System block diagram | 1 | Sequential activation: power supply → kV control → HV generator → tube, plus the separate mA/filament and exposure-time control paths (built in a prior session; used here as the quality benchmark) |
| 2 | `diagram-02-tube-cross-section.svg` → `AnimatedTubeCrossSection.astro` | p.11 | X-ray tube (cathode/anode/envelope) | Labeled structural diagram | 2 | Electron flow cathode→anode (stroke-dashoffset on the existing dashed line) triggers a brief anode/X-ray-beam/window glow |
| 3 | `diagram-03-kv-control.svg` → `AnimatedKvControl.astro` | p.12 | Autotransformer kV control | Electrical circuit | 2 | Current particle: supply → primary winding → kV tap → secondary output rails |
| 4 | `diagram-04-ma-control.svg` → `AnimatedMaControl.astro` | p.13 | Variable-resistor mA control | Electrical circuit | 2 | Current particle through the wired resistor tap to the mA-select node and out; the illustrative "أ" loop (not fully closed in the artwork) gets a restrained highlight only, not an invented path |
| 5 | `diagram-05-timer-circuit.svg` → `AnimatedTimerCircuit.astro` | p.13 | Timer/contactor circuit | Electrical circuit / process | 1 | Cause → effect: timer switch closes → contactor coil energizes → main contacts close → power reaches the HV transformer |
| 6 | `diagram-06-timer-types.svg` → `AnimatedTimerTypes.astro` | p.14 | 3 timer types (comparison) | Comparison / reference figure | 2 | Each icon demonstrates only its own principle: dial hand sweep, motor rotor spin, digital readout pulse |
| 7 | `diagram-07-one-pulse.svg` → `PulseGeneratorDiagram` (`variant="one-pulse"`) | p.16 | One-pulse generator | Flow diagram + circuit | 1 | Waveform traces draw themselves (input, then rectified output), then current flows transformer → bridge → tube |
| 8 | `diagram-08-two-pulse.svg` → `PulseGeneratorDiagram` (`variant="two-pulse"`) | p.16 | Two-pulse generator | Flow diagram + circuit | 1 | Same treatment, full-wave output trace |
| 9 | `diagram-09-six-pulse.svg` → `PulseGeneratorDiagram` (`variant="six-pulse"`) | p.17 | Six-pulse (3-phase) generator | Flow diagram + circuit | 1 | Same treatment, 3-phase input/output traces |
| 10 | `diagram-10-twelve-pulse.svg` → `PulseGeneratorDiagram` (`variant="twelve-pulse"`) | p.17 | Twelve-pulse (3-phase) generator | Flow diagram + circuit | 1 | Same treatment, smoother 12-pulse output trace |
| 11 | `diagram-11-film-processor.svg` → `AnimatedFilmProcessor.astro` | p.19 | Automatic film processor stages | Process diagram | 1 | Film indicator travels through all 6 stages in order, each box highlighting only while "occupied" |
| — | `TomographySectionsDiagram.astro` (device-05) | p.9 | Tomography scan regions | Anatomical illustration, already interactive | 1 (pre-existing) | Untouched — already has card↔region highlighting + replay button from an earlier phase; this pass did not modify it |

No diagram was left static for being "decorative only" — all 11 static
figures are genuine scientific process/system/circuit diagrams, so none
qualified for Level 3.

---

## 3. What was NOT changed, on every animated diagram

- Component/box positions, sizes, `viewBox`, proportions
- Colors, fills, strokes
- Arabic text, English terminology, labels
- Captions (sourced from the same JSON field as before)
- Arrows, leader lines, scientific symbols
- Card/page layout and spacing around the diagram

Verified mechanically (not just by inspection): for every animated
diagram, the live-rendered `<text>` content was extracted via Playwright
and diffed against the same extraction from the original static SVG file
— all 11 matched exactly, in the same order.

## 4. How animation was added, on every animated diagram

1. The static SVG's markup is reproduced inline, unchanged.
2. A small number of `class` hooks were added to existing elements
   (boxes, meters, coils) — inert in the resting state, they only matter
   once a `.playing` class is toggled on the wrapper.
3. A new, additive `<g>` layer was appended after all original content,
   holding the moving particles / film indicator / glow — never
   displacing or hiding anything original.
4. Particle waypoints are the exact coordinates of the `<line>`/`<path>`
   elements they visually follow, not redrawn or approximated paths.
5. Every keyframe's first and last stop is the neutral/resting
   appearance, so the diagram is pixel-identical before playing and after
   the cycle completes.

## 5. Shared utilities (avoiding duplication)

- `src/styles/diagram-animations.css` — the button styling
  (`.diagram-replay-button`, `.diagram-controls`), a generic
  `.flow-particle` motion keyframe (parameterized via `--tx`/`--ty`/
  `--particle-delay`/`--particle-duration`), a generic `.flow-highlight`
  pulse keyframe, and the `prefers-reduced-motion` handling — imported by
  every new animated diagram component instead of being hand-duplicated.
- `src/scripts/diagramPlayback.js` — the shared play → disable →
  auto-stop-on-cycle-end → replay-forces-restart wiring, called once per
  component with its own root selector. Guards against being wired twice
  (relevant for `PulseGeneratorDiagram`, used four times on one page).
- `src/components/diagrams/PulseGeneratorDiagram.astro` +
  `pulseGeneratorData.ts` — one component reused for Figures 1-7 through
  1-10, since the four source SVGs share identical circuit geometry and
  differ only in their waveform traces and two label strings. The
  waveform `<path d>` data was extracted programmatically from the
  approved SVGs (not retyped or regenerated) so the animated version is
  byte-for-byte faithful to the static artwork's curves.

## 6. Files changed in this pass

New:
- `src/styles/diagram-animations.css`
- `src/scripts/diagramPlayback.js`
- `src/components/diagrams/AnimatedTubeCrossSection.astro`
- `src/components/diagrams/AnimatedKvControl.astro`
- `src/components/diagrams/AnimatedMaControl.astro`
- `src/components/diagrams/AnimatedTimerCircuit.astro`
- `src/components/diagrams/AnimatedTimerTypes.astro`
- `src/components/diagrams/PulseGeneratorDiagram.astro`
- `src/components/diagrams/pulseGeneratorData.ts`
- `src/components/diagrams/AnimatedFilmProcessor.astro`
- `docs/design/DIAGRAM_ANIMATION_AUDIT.md` (this file)

Modified:
- `src/components/BlockRenderer.astro` — routes each `diagram-0N` block
  id to its animated component; anything not listed still falls back to
  the generic static `DiagramBlock`.

Untouched (verified via `git diff --stat`):
- `public/assets/diagrams/chapter-01/*.svg` (the approved static source
  files — still the canonical reference used for the fidelity checks)
- `src/components/TomographySectionsDiagram.astro`,
  `src/components/diagrams/DiagramFrame.astro`,
  `src/components/diagrams/DiagramCard.astro`
- `src/components/diagrams/XraySystemBlockDiagram.astro` (Figure 1-1,
  already animated in a prior session — used as the benchmark, not
  redesigned)
- Every `src/data/**/*.json` file — no scientific content, captions, or
  labels were rewritten.

## 7. Validation performed

- `npm run build` — clean.
- Label fidelity: every `<text>` node's content, live-rendered, matched
  the static source SVG exactly (11/11 diagrams, Playwright).
- Resting-state screenshots for all 11 diagrams confirm visual parity
  with the approved static figures (same layout, colors, proportions).
- Animation sequence spot-checked frame-by-frame for the two richest
  diagrams (timer circuit's cause→effect chain; film processor's 6-stage
  traversal) — both progress correctly and return to neutral.
- No horizontal overflow and zero console/page errors at 375/768/1024/
  1440px (Playwright, all four breakpoints).
- `prefers-reduced-motion: reduce` correctly removes the play/replay
  controls on all 11 new diagrams, leaving each fully static and
  readable.
- Keyboard access: play buttons are focusable and Enter-activatable
  (spot-checked on three diagrams); native `<button>` elements are used
  throughout, so this holds for all of them.
- Mobile (375px): the widest diagrams (film processor, pulse generators,
  mA control) were checked individually for clipping — none found.
