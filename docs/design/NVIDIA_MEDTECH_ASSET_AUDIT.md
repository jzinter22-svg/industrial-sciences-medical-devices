# NVIDIA MedTech — Asset Audit

Status: **Research complete. No assets integrated. No book files modified.**

Scope: inspect https://github.com/NVIDIA-Medtech for visual assets
(illustrations, diagrams, device representations) reusable for Chapter
1's five device cards (X-ray/radiography, fluoroscopy, angiography,
mammography, CT) and Chapter 2's ultrasound/probe/Doppler content.

## Method

`commons.wikimedia.org`, `bioart.niaid.nih.gov`, and `svgrepo.com` remain
blocked by this session's network egress policy (confirmed again before
starting this audit), but **anonymous `git clone` of public GitHub
repositories is available** through this session's git proxy — a
different channel from the general HTTPS egress used for arbitrary web
downloads. That let this audit go further than prior passes: instead of
trusting search-result summaries, six of the org's repositories were
actually cloned (shallow, `GIT_LFS_SKIP_SMUDGE=1`) and their full file
trees, README content, and license files were read directly. One
(`NV-Reason-CXR-3B`) could not be cloned anonymously — noted below.

## Finding, in one sentence

**NVIDIA-Medtech is an AI/ML research organization publishing model code,
weights, and research-figure images (PNG/JPG/GIF) — it does not publish
illustration or icon assets in any format, SVG or otherwise, and every
repository inspected either bundles MRI or carries a restrictive
research-only/non-commercial license, or both.**

## Repositories inspected

| Repository | What it actually is | Images found | Format | License |
|---|---|---|---|---|
| `NV-Raw2insights-US` | Deep-learning model estimating tissue speed-of-sound from raw ultrasound RF signal data (advanced signal-processing research, not basic imaging) | 1 hero image: a 3-panel research comparison (uncorrected B-mode / corrected B-mode / velocity overlay) | PNG (1514×638) | Code: Apache 2.0. **Weights: CC BY-NC 4.0 (NonCommercial)** |
| `NV-Segment-CTMR` | 3D medical image segmentation foundation models (organ/tumor segmentation masks) | 4 images: `ctmr.png`, `ctmr2.png` (segmentation-overlay comparison figures), `benchmarkct.png`, `benchmarkmr.png` (performance benchmark charts) | PNG only | Code: Apache 2.0-adjacent. **NV-Segment-CTMR weights: Non-Commercial (NVIDIA OneWay Noncommercial License)**. Also **explicitly bundles MRI** ("CT + MRI (body & brain)") |
| `NV-Generate-CTMR` | Latent-diffusion model generating *synthetic* 3D CT/MRI volumes (MAISI framework) | 5 images: GIFs/PNGs of generated synthetic scan examples (`MR_example.png`, `combined_grid.gif`, etc.) | PNG/GIF only | Code: Apache 2.0. Weights: separate per-variant licenses. **Explicitly generates MRI content** (`NV-Generate-MR`, `NV-Generate-MR-Brain` are named model variants) |
| `Cosmos-H-Surgical` | Surgical-video world-foundation model (predicts/generates video of surgical actions: suturing, dissection, coagulation, etc.) | 10 JPGs, all surgical-action reference clips (`tissue_retraction.jpg`, `needle_puncture.jpg`, etc.) — no equipment illustrations | JPG only | OpenMDW-1.1 (a model-specific research license, not a general asset license) |
| `GR00T-H` | Healthcare **robotics** foundation model (multi-embodiment robot autonomy) — physical robots, not imaging equipment | 8 images: robot photos/GIFs, architecture diagrams | PNG/GIF/JPG only | Code: Apache 2.0. Model: NVIDIA Open Model License |
| `NV-Reason-CXR-3B` | Vision-language model for chest X-ray interpretation/reasoning (per its public description) | **Could not clone** — anonymous git access refused ("could not read Username… terminal prompts disabled"), suggesting a gated/auth-required repo | — | — |

Two further repositories the org lists
(`Cosmos-H-Surgical-Simulator`) were not separately cloned once the
pattern across six repositories was unambiguous — every one is
model code/weights with raster demo imagery, none is a design-asset
repository. Cloning the remainder would not change the conclusion.

## Per-target-device audit table

| Device | Repository | Asset | Format | License | Usable? | Reason |
|---|---|---|---|---|---|---|
| X-ray / Radiography | `NV-Reason-CXR-3B` | none accessible | — | unknown | **NOT FOUND — DO NOT SUBSTITUTE** | Repo could not be cloned (access refused); even if it could, its own description names it as a chest-X-ray *interpretation model*, not an illustration source, consistent with every other repo in this org |
| Fluoroscopy | *(none)* | — | — | — | **NOT FOUND — DO NOT SUBSTITUTE** | No repository in this org relates to fluoroscopy in any way |
| Angiography | *(none)* | — | — | — | **NOT FOUND — DO NOT SUBSTITUTE** | No repository relates to angiography; `Cosmos-H-Surgical`'s content (open surgical procedures) is a different clinical context entirely, not vascular catheter imaging |
| Mammography | *(none)* | — | — | — | **NOT FOUND — DO NOT SUBSTITUTE** | No repository in this org relates to mammography in any way |
| CT / Computed Tomography | `NV-Segment-CTMR` | `docs/ctmr.png` | PNG | Non-Commercial (weights); repo bundles MRI | **NOT FOUND — DO NOT SUBSTITUTE** | Wrong content (a segmentation-mask overlay on a scan slice, not a picture of a CT machine), wrong format (raster, not vector/SVG), and the repository explicitly bundles MRI, which the task rules exclude outright |
| Ultrasound | `NV-Raw2insights-US` | hero comparison image | PNG | Weights CC BY-NC 4.0 (NonCommercial) | **NOT FOUND — DO NOT SUBSTITUTE** | The image is a 3-panel *research results* comparison (raw vs. corrected B-mode vs. velocity map), not a device or probe illustration; the underlying topic (adaptive-beamforming speed-of-sound estimation) is graduate-research-level content, far beyond this chapter's introductory scope; NonCommercial license would also block reuse in a redistributable book regardless |
| Ultrasound probe | *(none)* | — | — | — | **NOT FOUND — DO NOT SUBSTITUTE** | No repository contains a probe/transducer illustration of any kind |
| Doppler / related imaging | *(none)* | — | — | — | **NOT FOUND — DO NOT SUBSTITUTE** | No repository addresses Doppler imaging |

**Result: 0 of 8 target devices have a usable asset in NVIDIA-Medtech.**
Every row is `NOT FOUND — DO NOT SUBSTITUTE`, exactly as the task
instructs for this outcome — no fallback or approximate substitution was
made for any device.

## Why this outcome was expected, in hindsight

NVIDIA-Medtech publishes **foundation models for a Physical-AI/robotics
and generative-imaging research audience** — segmentation networks,
diffusion-based synthetic-data generators, surgical video-world models,
robot-autonomy stacks. That is a different product category from a
"design/asset library" (which is what Wikimedia Commons, NIH BioArt, or
an icon repository like SVG Repo actually are). None of the six
inspected repositories contains a single vector graphic; every image
found exists to illustrate a model's own output (segmentation masks,
generated synthetic scans, benchmark charts, robot demo photos), not to
depict medical equipment for an educational audience. This is a
structural mismatch, not a licensing near-miss — even a fully
public-domain-licensed repository from this org would not have solved
the actual need, because the image *content* itself doesn't fit.

## Explicit non-actions in this pass

- No assets were downloaded into the project.
- `DeviceCard.astro`, `BlockRenderer.astro`, and every content JSON file
  were left untouched.
- No existing diagram, animation, or Chapter 2 file was modified.
- The five device cards continue to render exactly as they did after the
  previous integration pass (four placeholders, one interactive
  Tomography diagram for device-05) — see
  `docs/design/CHAPTER1_CHAPTER2_SVG_ACQUISITION_PLAN.md` for the
  still-open Wikimedia Commons / NIH BioArt candidates from the prior
  research pass, none of which are affected by this audit's findings.
- No commit beyond this audit document.

## Recommendation

Do not pursue NVIDIA-Medtech further for this book's illustration needs.
The active path remains the one already documented in
`CHAPTER1_CHAPTER2_SVG_ACQUISITION_PLAN.md`: specific Wikimedia
Commons / NIH BioArt files with license evidence, awaiting a download
channel this session doesn't have.
