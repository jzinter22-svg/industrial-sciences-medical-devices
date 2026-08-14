# Chapter 1 supplementary device SVGs

Status: **empty — infrastructure ready, no assets integrated yet.**

`DeviceCard.astro` now accepts an optional `image` prop
(`{ src, alt, credit?: { source, sourceUrl, license, licenseUrl } }`) —
see `src/components/DeviceCard.astro`. When a `device` content block in
`src/data/chapter-01/page-01.json` includes an `image` field,
`BlockRenderer.astro` passes it straight through and the card renders
that image (with a visible source/license credit line, same visual
treatment as `PhotoBlock.astro`) instead of the
"سيتم إضافة الصورة لاحقًا" placeholder. No device block currently sets
`image`, so all five device cards still render the placeholder — this is
intentional, not a bug: per the acquisition plan's own rule, an
unverified or undownloaded asset must never be substituted just to fill
a card.

## Why this directory is empty

This session's network egress cannot reach `commons.wikimedia.org` or
`bioart.niaid.nih.gov` (confirmed again via `curl`, both return a
policy-denial 403) — no SVG file could be downloaded in this pass. The
full candidate research, per-asset license evidence, and confidence
grading live in
[`docs/design/CHAPTER1_CHAPTER2_SVG_ACQUISITION_PLAN.md`](../../../../docs/design/CHAPTER1_CHAPTER2_SVG_ACQUISITION_PLAN.md).

## Expected filenames (once downloaded by a human / broader-access session)

| Filename | Device | Plan reference |
|---|---|---|
| `chapter-01-ct-scanner-nih-bioart.svg` | device-05 (Tomography/CT) | CH01-SVG-01 — highest confidence, NIH BioArt PD |
| `chapter-01-still-xray-chest-icon.svg` | device-01 (Still Picture X-ray) | CH01-SVG-03 — CC BY-SA 3.0 confirmed |
| `chapter-01-mammography-icon.svg` | device-04 (Mammography) | CH01-SVG-02 — license needs the most scrutiny before use |
| *(none identified)* | device-02 (Fluoroscopy) | still UNVERIFIED — needs human category browse |
| *(none identified)* | device-03 (Angiography) | still UNVERIFIED — needs human category browse |

## To finish the integration once a file lands here

1. Save the file under the exact name above.
2. Add an `"image"` field to that device's block in
   `src/data/chapter-01/page-01.json`:
   ```json
   "image": {
     "src": "/assets/svg/chapter-01/<filename>.svg",
     "alt": "<Arabic alt text>",
     "credit": {
       "source": "<name>",
       "sourceUrl": "<Commons/NIH page URL>",
       "license": "<license name>",
       "licenseUrl": "<license URL>"
     }
   }
   ```
3. `npm run build` and re-run the same Playwright overflow/broken-asset
   check used throughout this project. No further component code should
   need to change — `DeviceCard.astro` already handles this shape.
