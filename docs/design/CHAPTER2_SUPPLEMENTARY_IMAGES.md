# Chapter 2 — Supplementary Real-World Scientific Photographs

Status: **Research and code scaffolding complete. Image files not yet
downloaded** (see "Why this stopped at curation" below).

## Why this stopped at curation

This session's network egress is restricted to GitHub and package
registries; `commons.wikimedia.org`, `noaa.gov`, `nih.gov`, and general
image hosts return a policy-denial (403) on every attempt, for both `curl`
and the `WebFetch` tool. There is no tool available in this session that
can download and save an external binary image file into the repository.

Per the user's direction, this pass instead:

1. Reviewed the actual Chapter 2 textbook content (all 26 `page-XX.json`
   files) to find concepts that would genuinely benefit from a real-world
   photo, as opposed to the schematic diagrams and PDF-extracted photos
   already present.
2. Searched for specific, named candidate files on Wikimedia Commons (and
   noted a National Cancer Institute / NIH public-domain source) using
   `WebSearch`, which — unlike `WebFetch`/`curl` — is not subject to this
   session's egress block.
3. Built the code side fully: a new `photo` content-block type,
   `PhotoBlock.astro` (caption + a visible source/license attribution
   line, styled to match the existing card system), wired into
   `BlockRenderer.astro`. This is committed and does not affect any
   existing page — no content JSON references it yet, so the site
   continues to build clean with zero broken images.
4. Below, for each candidate: why it belongs at that spot in the
   textbook, the source to open and verify, and a ready-to-paste JSON
   block using the exact schema `PhotoBlock` expects.

**Important — I could not open any of these Commons pages myself** (same
egress block), so I could not personally confirm the exact license tag,
the uploader, or that the photo depicts what its filename suggests. Please
verify each one before downloading: open the Commons file page, confirm
the license shown there matches what's noted below, and confirm the photo
shows what it's supposed to. Wikimedia Commons requires exactly this kind
of check anyway — file names and search snippets are not the license.

## What was deliberately left out

The task description's example list includes X-ray equipment. Chapter 2 of
this textbook does not cover X-ray at all — that's Chapter 1's subject —
so no X-ray images were proposed here; adding them would introduce content
outside this chapter's actual curriculum, which the task itself says not
to do. Every candidate below ties to a concept the Chapter 2 PDF explicitly
covers: radar (used in the text as the analogy for the echo principle),
piezoelectric ultrasound probes, diagnostic ultrasound imaging, and
therapeutic ultrasound.

---

## 1. Radar antenna — real photograph

**Where it goes:** `src/data/chapter-02/page-01.json`, "تمهيد" section,
immediately after `c2-fig-2-2` (the radar block diagram). The textbook
introduces radar purely as a schematic analogy for the ultrasound echo
principle; there is currently no real photograph of radar equipment
anywhere in the chapter.

**Candidate:** [File:Doppler_Weather_Radar_-_NOAA.jpg](https://commons.wikimedia.org/wiki/File:Doppler_Weather_Radar_-_NOAA.jpg)
— NOAA Photo Library. NOAA is a US federal agency, so its own photographic
works are ordinarily public domain (17 U.S.C. §105) — verify the exact tag
on the file page. Bonus: it is specifically a *Doppler* radar installation,
which also previews the Doppler-effect section two pages later.

**Alternative if that file doesn't pan out:**
[File:Air_traffic_control_radar_and_antenna_at_HAL_Museum_7832.JPG](https://commons.wikimedia.org/wiki/File:Air_traffic_control_radar_and_antenna_at_HAL_Museum_7832.JPG)
(reported as CC BY-SA 3.0 — verify and credit the named author if used).

**Save as:** `public/assets/photos/chapter-02/radar-antenna-noaa.jpg`

**JSON block to insert** (right after the `c2-fig-2-2` block in
`page-01.json`):

```json
{
  "type": "photo",
  "id": "c2-photo-radar",
  "src": "/assets/photos/chapter-02/radar-antenna-noaa.jpg",
  "alt": "صورة فوتوغرافية حقيقية لهوائي رادار",
  "caption": {
    "ar": "صورة حقيقية لهوائي رادار — تطبيق عملي لمبدأ إرسال الموجة واستقبال صداها الموضح في الشكل 2-2"
  },
  "credit": {
    "source": "NOAA Photo Library",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Doppler_Weather_Radar_-_NOAA.jpg",
    "license": "Public Domain (عمل حكومي أمريكي) — تحقق من الترخيص قبل الاستخدام",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Doppler_Weather_Radar_-_NOAA.jpg"
  }
}
```

---

## 2. Ultrasound transducer/probe — close-up photograph

**Where it goes:** `src/data/chapter-02/page-07.json`, "الظاهرة
الكهروضغطية" section, near `c2-fig-2-8` (the probe internal-parts
diagram) and the existing `c2-fig-2-9`/`c2-fig-2-10` PDF photos. The
existing probe photos are small PDF extracts; a sharper reference photo
helps students connect the labeled cross-section diagram to what a real
probe head looks like.

**Candidate:** [File:A_medical_ultrasound_linear_array_probe,_scan_head,_transducer.jpg](https://commons.wikimedia.org/wiki/File:A_medical_ultrasound_linear_array_probe,_scan_head,_transducer.jpg)
— listed under Commons' Category:Medical ultrasound equipment. Verify the
exact license tag on the page (not confirmed by me — likely CC BY-SA per
Commons convention for this category, but check).

**Save as:** `public/assets/photos/chapter-02/ultrasound-probe-closeup.jpg`

**JSON block** (insert after `c2-fig-2-8` in `page-07.json`):

```json
{
  "type": "photo",
  "id": "c2-photo-probe",
  "src": "/assets/photos/chapter-02/ultrasound-probe-closeup.jpg",
  "alt": "صورة فوتوغرافية حقيقية عن قرب لمجس أمواج فوق صوتية طبي",
  "caption": {
    "ar": "صورة حقيقية عن قرب لمجس (Probe) أمواج فوق صوتية طبي حديث، يقابل التركيب الداخلي الموضح في الشكل 8-2"
  },
  "credit": {
    "source": "Wikimedia Commons — Category:Medical ultrasound equipment",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:A_medical_ultrasound_linear_array_probe,_scan_head,_transducer.jpg",
    "license": "تحقق من الترخيص المذكور في صفحة الملف قبل الاستخدام",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:A_medical_ultrasound_linear_array_probe,_scan_head,_transducer.jpg"
  }
}
```

---

## 3. Public-domain NCI ultrasound photograph

**Where it goes:** `src/data/chapter-02/page-14.json`, "الأجزاء
الاساسية لأجهزة التصوير الفوق صوتي" section, alongside `c2-fig-2-20`
(the PDF's own ultrasound-machine photo) — a second, higher-quality real
photo reinforces the same "here is what this equipment actually looks
like" purpose the PDF photo already serves.

**Candidate:** [File:Ultrasound (1).jpg](https://commons.wikimedia.org/wiki/File:Ultrasound_(1).jpg)
— sourced from the National Cancer Institute's Visuals Online, which
publishes exclusively public-domain material (NIH images are unregistrable
for copyright as US federal government works). This is the
highest-confidence license of the five candidates here, but **I still
could not open the page myself to confirm exactly what the photo depicts**
— confirm the subject matches "ultrasound equipment/exam" before using it
in this slot.

**Save as:** `public/assets/photos/chapter-02/ultrasound-device-nci.jpg`

**JSON block** (insert after `c2-fig-2-20` in `page-14.json`):

```json
{
  "type": "photo",
  "id": "c2-photo-nci",
  "src": "/assets/photos/chapter-02/ultrasound-device-nci.jpg",
  "alt": "صورة فوتوغرافية حقيقية لجهاز أو فحص بالأمواج الفوق صوتية",
  "caption": {
    "ar": "صورة حقيقية إضافية لجهاز/فحص بالأمواج الفوق صوتية (المصدر: المعهد الوطني الأمريكي للسرطان)"
  },
  "credit": {
    "source": "National Cancer Institute Visuals Online (NIH)",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Ultrasound_(1).jpg",
    "license": "Public Domain (PD-USGov-NIH)",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Ultrasound_(1).jpg"
  }
}
```

---

## 4. Obstetric ultrasound exam in progress (pick one — needs a human to browse)

**Where it goes:** `src/data/chapter-02/page-14.json` or `page-15.json`,
same imaging-system section, as a "real clinical moment" photo — a
sonographer scanning a patient — versus the existing photos which only
show the device or the resulting scan image, not the exam itself in
progress.

**Candidate category:** [Category:Obstetric ultrasonography](https://commons.wikimedia.org/wiki/Category:Obstetric_ultrasonography)
on Wikimedia Commons. I could not list this category's contents myself
(same block) — please open it, pick one photo that (a) clearly shows the
exam in progress (not just a scan-screen image — those are already
covered by `c2-fig-2-17`/`19`/`22`), and (b) has an unambiguous CC0/Public
Domain/CC-BY license, and note its exact filename + license.

**Save as:** `public/assets/photos/chapter-02/obstetric-scan-in-progress.jpg`

**JSON block template** (fill in the source/license fields once a
specific file is picked):

```json
{
  "type": "photo",
  "id": "c2-photo-obstetric-exam",
  "src": "/assets/photos/chapter-02/obstetric-scan-in-progress.jpg",
  "alt": "صورة فوتوغرافية حقيقية لفحص بالأمواج الفوق صوتية أثناء إجرائه",
  "caption": {
    "ar": "صورة حقيقية لإجراء فحص بالأمواج الفوق صوتية على مريضة"
  },
  "credit": {
    "source": "REPLACE — Wikimedia Commons file name",
    "sourceUrl": "REPLACE — commons.wikimedia.org/wiki/File:...",
    "license": "REPLACE — exact license from the file page",
    "licenseUrl": "REPLACE"
  }
}
```

---

## 5. Therapeutic ultrasound in clinical use (pick one — needs a human to browse, optional)

**Where it goes:** `src/data/chapter-02/page-24.json`, "استخدام الموجات
الفوق صوتية للعلاج" section, alongside `c2-fig-2-35` (the PDF's own
therapy-device photo) — a photo of the device actually being applied to a
patient would show the therapeutic application, not just the device
itself.

**Candidate category:** [Category:Physical therapy](https://commons.wikimedia.org/wiki/Category:Physical_therapy)
on Wikimedia Commons. This is the weakest-confidence candidate of the
five — my search surfaced a "Hyperthemia machine.jpg" file that may be a
related but not identical device (hyperthermia vs. therapeutic ultrasound
are different modalities). **Treat this one as optional**: only add it if,
after browsing the category, you find a photo that specifically and
clearly shows therapeutic ultrasound (not a different modality) being
applied, with a clear open license. If nothing suitable turns up, skip
this slot rather than force a weak match — consistent with "don't add
images simply to fill space."

**Save as:** `public/assets/photos/chapter-02/therapeutic-ultrasound-in-use.jpg`

**JSON block template:**

```json
{
  "type": "photo",
  "id": "c2-photo-therapy",
  "src": "/assets/photos/chapter-02/therapeutic-ultrasound-in-use.jpg",
  "alt": "صورة فوتوغرافية حقيقية لاستخدام الأمواج الفوق صوتية في العلاج الطبيعي",
  "caption": {
    "ar": "صورة حقيقية لتطبيق العلاج بالموجات الفوق صوتية على مريض"
  },
  "credit": {
    "source": "REPLACE — Wikimedia Commons file name",
    "sourceUrl": "REPLACE — commons.wikimedia.org/wiki/File:...",
    "license": "REPLACE — exact license from the file page",
    "licenseUrl": "REPLACE"
  }
}
```

---

## Code scaffolding already in place (committed)

- `src/components/PhotoBlock.astro` — new component: image + caption +
  a visible "المصدر / الترخيص" attribution line, matching the existing
  neumorphic card system exactly (same padding, radius, shadows,
  typography tokens as `DiagramBlock.astro`).
- `src/components/BlockRenderer.astro` — new `block.type === "photo"`
  branch, rendering `PhotoBlock` with `src`, `alt`, `caption.ar`, and
  `credit` read straight from the content JSON — no photo-specific logic
  lives outside the data files, consistent with the project's
  data/presentation separation.
- `public/assets/photos/chapter-02/` — new directory (distinct from
  `public/assets/diagrams/chapter-02/`, which holds only the textbook's
  own extracted figures) with a `README.md` listing the exact expected
  filenames.

## Next step

Once image files land at the paths above (or different files with
verified licenses are substituted), insert the corresponding JSON block
at the noted position in the noted `page-XX.json` file, run `npm run
build`, and re-run the same Playwright overflow/broken-image check used
for every other change in this project. No component code should need to
change — the schema above is already fully supported.
