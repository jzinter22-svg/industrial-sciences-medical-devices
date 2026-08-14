# Diagram Animation Audit — Chapter 1 / Lesson 1

Status: Complete
Scope: every scientific diagram/illustration currently in the project.

> **Chapter 2 addendum:** see [Section 8](#8-chapter-2-animation-pass-addendum)
> for the second animation pass, which extends this same architecture to
> every suitable Chapter 2 diagram (including the radar diagram, Figure
> 2-2) and fixes the chapter-heading display bug. Sections 1-7 below
> describe the original Chapter 1 pass and are unchanged.

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

---

## 8. Chapter 2 animation pass (addendum)

Status: Complete
Scope: every Chapter 2 scientific diagram that was still a plain static
`<img>` render, plus the chapter-heading display bug.

### 8.1 Chapter-heading fix

The book home page (`src/pages/index.astro` → `ChapterCard.astro`) showed
only a bare numeral badge ("1", "2", "3"...) with no Arabic ordinal label
anywhere on the card — `chapters.json` already had correct `label` fields
(e.g. `"الفصل الأول"`) from an earlier pass, but `ChapterCard.astro` never
received or rendered that prop. Fixed by adding `label` to `ChapterCard`'s
props/template (numeral badge + Arabic label shown together) and passing
`label={chapter.label}` from `index.astro`. `ChapterHeader.astro` (used on
chapter/lesson pages) already displayed the label correctly and was not
touched.

### 8.2 Inventory and per-diagram decision

Six Chapter 2 diagrams (A-scan, B-scan, ultrasound system, echo sounder,
fetal pulse, delivery monitor block diagrams) were already animated in
the prior Chapter 2 build pass and needed no further work. The following
15 were still static `<img>` renders and were converted to animated
components using the exact same shared utilities
(`diagram-animations.css`, `diagramPlayback.js`) as Chapter 1:

| # | Figure | Component | Subject | Animation |
|---|---|---|---|---|
| 1 | 2-2 | `RadarDiagram.astro` | Radar sender→object→receiver | Full 8-step sequence: sender activates, outgoing wave ripples toward the object, wave reaches/reflects off the object, reflected wave ripples back, receiver box highlights, distance line emphasized last, cycle repeats |
| 2 | 2-1 | `SpectrumDiagram.astro` | Infrasound/acoustic/ultrasound frequency spectrum | A particle sweeps left→right along the frequency axis while each band and its label lights up in turn |
| 3 | 2-3 | `ReflectionRefractionDiagram.astro` | Light/sound incident, reflected, refracted rays | Incident ray travels to the boundary point O, then reflected and refracted rays (with their angle arcs) leave simultaneously, matching the physics of partial reflection/partial transmission |
| 4 | 2-4 | `DopplerStationaryDiagram.astro` | Stationary source, evenly-spaced wavefronts | The four existing concentric rings ripple outward in order, then the sine trace and stationary listener highlight |
| 5 | 2-5 | `DopplerMovingDiagram.astro` | Moving source, compressed/spread wavefronts | Rings ripple in true emission order (oldest/largest first, newest/smallest last), then the source and velocity arrow, sine trace, and listener highlight |
| 6 | 2-6 | `DopplerWavelengthDiagram.astro` | Doppler shift vs. wavelength | Trailing (stretched) arcs pulse first, then the moving object/velocity arrow, then the leading (compressed) arcs — matching the higher/lower frequency labels already on the figure |
| 7 | 2-8 | `ProbeStructureDiagram.astro` | Probe internal parts | Each labeled part (cable → crystal → backing block → insulator → housing → ground/cover) highlights in physical signal-path order |
| 8 | 2-11 | `PulsedUltrasoundDiagram.astro` | Pulsed-mode waveform | The three pulse bursts reveal in left-to-right time order; a particle sweeps the time axis |
| 9 | 2-12 | `ContinuousDopplerDiagram.astro` | Continuous-wave waveform | A single particle traces the entire unbroken wave, contrasting with the pulsed figure's burst-and-silence pattern |
| 10 | 2-14 | `AScanTraceDiagram.astro` | Transmitted pulse + echo spikes | Transmitted pulse highlights first, then the five echo spikes together, as the returning signals they represent |
| 11 | 2-16 | `ScanComparisonDiagram.astro` | A-scan vs. B-scan display | Each A-scan spike and its corresponding B-scan brightness dot highlight together, left to right |
| 12 | 2-18 | `ScanTypesTraceDiagram.astro` | M-scan + corresponding A-scan | Transmitted pulse → moving-target trace → stationary-target trace → the three corresponding A-scan spikes, in that order |
| 13 | 2-27 | `PowerSupplyCircuitDiagram.astro` | Fetal-pulse device power supply circuit | Six stages highlight in electrical-flow order: AC/rectifier → filter → series-pass regulator → zener reference → battery → switch/meter output |
| 14 | 2-28 | `TransmitterCircuitDiagram.astro` | Ultrasound transmitter circuit | Crystal oscillator stage → amplifier transistor → output-coupling stage, plus a particle riding the signal out to the detector |
| 15 | 2-29 (a) | `ReceiverCircuitDiagram.astro` | Ultrasound receiver/detector circuit | Input transformer → first amplifier → detector stage → filter network → output, in signal-flow order |

Photographic figures (probe photos, machine photos, scan images, device
photos — 18 images total) were deliberately left as static `<img>`
renders; they are real photographs, not process diagrams, so animating
them would have no scientific meaning and was explicitly out of scope.

### 8.3 What was not changed

Same guarantees as Section 3 above, verified for all 15 newly-animated
Chapter 2 diagrams: no `viewBox`/proportions/sizing changes, no color or
label changes, no removed content, no rasterization — every static SVG's
markup was reproduced exactly and animation was added purely additively
(class hooks + an appended `flow-layer`/particle group).

### 8.4 Validation performed

- `npm run build` — clean after every wiring step.
- Playwright at 375/768/1024/1440px on the home page, Chapter 1 lesson
  page, and Chapter 2 lesson page: 0 horizontal overflow, 0 broken
  images, 0 console/page errors at every breakpoint.
- Radar diagram (the explicit reference example) spot-checked frame by
  frame: rest state matches the static source exactly, the play button
  disables mid-animation, and re-enables automatically once the
  `cycle-end-marker` fires — confirming the play → auto-stop →
  replay-forces-restart wiring works identically to Chapter 1.
- `chapter2AnimatedDiagrams` in `BlockRenderer.astro` now maps 21
  `c2-fig-2-XX` ids (6 from the prior pass + 15 new), one per diagram
  block id confirmed against the corresponding `src/data/chapter-02/*.json`
  file — no id typos, no diagram silently left on the generic static
  fallback.
- Chapter 1 diff-checked: only `ChapterCard.astro` (label prop) and
  `index.astro` (passing `label`) were touched outside `BlockRenderer.astro`
  and the new `src/components/diagrams/*.astro` files — no Chapter 1 data,
  diagram, or layout file was modified.
