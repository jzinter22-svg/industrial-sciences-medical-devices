# Chapter 2 supplementary photographs

This folder holds **openly-licensed real-world photographs** added on top of
the textbook's own figures (those live in `public/assets/diagrams/chapter-02/`
and are extracted directly from the PDF — do not confuse the two sets).

The full research, reasoning, and per-image placement is in
[`docs/design/CHAPTER2_SUPPLEMENTARY_IMAGES.md`](../../../../docs/design/CHAPTER2_SUPPLEMENTARY_IMAGES.md).
This file is the short version: exact filenames this repo expects, so a
download only has to get the name right and everything else (captions,
attribution, placement) is already wired up in the code.

## Why these files aren't downloaded yet

This session's sandboxed network egress only allows GitHub + package
registries; it cannot reach `commons.wikimedia.org`, `noaa.gov`, `nih.gov`,
or general image hosts to fetch binary files directly. The candidate images
below were identified through search, but **must be downloaded by a human
(or a session with broader network access)** — see the main doc for exact
source URLs and license verification steps for each.

## Expected filenames

Save each approved download using **exactly** this filename so the
already-written content blocks in `src/data/chapter-02/*.json` resolve
without further edits:

| Filename | Subject | Status |
|---|---|---|
| `radar-antenna-noaa.jpg` | Real radar antenna/installation photograph | proposed, see main doc §1 |
| `ultrasound-probe-closeup.jpg` | Close-up of a real medical ultrasound transducer/probe | proposed, see main doc §2 |
| `ultrasound-device-nci.jpg` | Public-domain NCI Visuals Online ultrasound photograph | proposed, see main doc §3 |
| `obstetric-scan-in-progress.jpg` | Sonographer performing a real obstetric ultrasound exam | proposed, see main doc §4 (pick a specific file from the linked category) |
| `therapeutic-ultrasound-in-use.jpg` | Ultrasound therapy being applied in physiotherapy | proposed, see main doc §5 (pick a specific file from the linked category) |

Once a file lands here with the right name, it will render immediately —
the JSON content blocks referencing it are already in place, just waiting
on the asset.

## Optimization before saving

- Re-encode to JPEG, longest edge ≈ 1200px (matches the site's existing
  `max-width: 480px` display box at typical device pixel ratios).
- Target file size well under 300KB without visible quality loss on the
  device/photo subject.
- Do not upscale, crop out identifying subject matter, or alter the image
  content — only resize/re-compress for delivery.
