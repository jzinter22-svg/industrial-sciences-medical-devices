# Chapter 2 — Scientific Image Acquisition Plan

Status: **Planning only. No images downloaded. No content, component, or
diagram files modified.**

This document supersedes the candidate list in
`CHAPTER2_SUPPLEMENTARY_IMAGES.md` (that file covered the same general
territory before this more rigorous pass; this document is the one to
act on going forward).

---

## 1. Summary

Chapter 2 (`جهاز الأجهزة الطبية الفوق صوتية` / Ultrasound Medical
Devices, `chapter-02/lesson-01`) already contains 30 textbook figures
extracted directly from the source PDF: schematic diagrams (now animated),
device photographs, scan-result images, and circuit schematics. That
existing set is complete and internally consistent with the textbook and
is **not being touched or replaced**.

This plan identifies a small number of additional real-world photographs
— sourced from outside the PDF — that would strengthen a student's
connection between the textbook's abstract diagrams/analogies and the
real equipment or real clinical practice those diagrams represent. Each
candidate is tied to a concept the Chapter 2 PDF explicitly teaches; none
are decorative.

Because this session's network egress cannot reach Wikimedia Commons,
NASA, NOAA, or NIH domains (confirmed via both `curl` and `WebFetch` —
both return policy-denial errors on every one of these hosts), no source
page could be opened directly. Every candidate below was located via
`WebSearch` (which is not subject to the same block) and its license
status is reported at whatever confidence that search evidence supports —
explicit, unambiguous license text is treated as high confidence; a
category membership or general policy is treated as medium confidence;
anything with no direct evidence is marked **UNVERIFIED** and explicitly
not recommended, per the task's verification rule.

Nothing below has been page-verified by a human yet. That verification —
opening the actual Commons/NASA/NOAA/NIH file page and confirming the
license tag and the depicted subject — is the required first step of the
next phase, before any download.

## 2. Number of recommended images

- **5 substantively recommended** (2 high confidence / Public Domain,
  3 medium confidence / open license pending page verification)
- **2 flagged UNVERIFIED**, not recommended as specific files — each
  needs a human to browse a linked category and pick one confirmed file
- **2 considered and explicitly rejected** (documented in §5 for
  transparency, so they aren't independently re-proposed later)

Total chapter footprint if all 5 recommended images are approved: **5 new
photographs across a 26-page lesson already containing 30 figures** — kept
deliberately small to avoid diluting the textbook's own material.

## 3. Approved Public Domain images

| ID | Subject | Source | Confidence |
|---|---|---|---|
| CH02-PHOTO-01 | Doppler weather radar antenna | NOAA Photo Library (via Wikimedia Commons) | High — `WebSearch` evidence explicitly shows the file categorized `PD US NOAA` |
| CH02-PHOTO-02 | Astronaut performing an ultrasound exam aboard the ISS | NASA (Advanced Diagnostic Ultrasound in Microgravity / ADUM program) | Medium-high — NASA-produced photography is Public Domain under 14 CFR 1245.105 as a matter of agency policy, but no specific file page could be opened to confirm this exact photo carries no exception marking |

No candidate in this plan reached "confirmed by directly reading the
license notice on its own file page" — that step is the human
verification task for the next phase. CH02-PHOTO-01 and -02 are listed
here rather than under UNVERIFIED because the search evidence for them
is materially stronger than a bare category listing (an explicit PD
category tag for -01; a well-established, narrow agency-wide PD policy
for federal-agency photography for -02).

## 4. Open-license images (medium confidence, need page-level license verification)

| ID | Subject | Source | Confidence |
|---|---|---|---|
| CH02-PHOTO-03 | Close-up of a medical ultrasound linear-array probe/transducer | Wikimedia Commons, Category:Medical ultrasound equipment | Medium — category-level evidence only; individual Commons uploads in this category are typically CC BY-SA but each file's own tag must be checked |
| CH02-PHOTO-04 | Alternate probe close-up (`UltrasoundProbe2006a.jpg`) | Wikimedia Commons, same category | Medium — same caveat as CH02-PHOTO-03; offered as a second option in case -03 doesn't check out |
| CH02-PHOTO-05 | Real-world ultrasound diagnostic device/exam photograph | Wikimedia Commons, Category:Media from National Cancer Institute Visuals Online | Medium-high on the *collection* (NCI Visuals Online publishes exclusively material explicitly labeled "Public Domain" or "Copyright Protected," and only the PD ones are mirrored to this Commons category) — medium overall because no single filename in this category was confirmed to depict a plain device/exam photo (search surfaced titles such as `Ultrasound (1).jpg` and `Breast cancer ultrasound.jpg`, whose exact depicted content is unconfirmed) |

## 5. Unverified candidates (not recommended as specific files)

| ID | Subject | Status | Why |
|---|---|---|---|
| CH02-PHOTO-06 | Sonographer performing a real obstetric ultrasound exam (exam in progress, not just the resulting scan image) | **UNVERIFIED — no specific file identified** | `WebSearch` located the relevant Commons category (`Category:Obstetric_ultrasonography`) but returned no specific filename with confirmed license and confirmed "exam in progress" content. Needs a human to open the category page (blocked for this session) and pick one file. |
| CH02-PHOTO-07 | Therapeutic ultrasound being applied to a patient in physiotherapy | **UNVERIFIED — no specific file identified, low priority** | Only category-level hits (`Category:Physical_therapy`) surfaced, plus one previously-considered file (`Hyperthemia machine.jpg`) that appears to depict a *different* modality (hyperthermia, not therapeutic ultrasound) and was rejected for that mismatch. Treat as optional: only add if a human finds a specific, clearly-matching, clearly-licensed file; otherwise skip this slot entirely rather than force a weak match. |

**Considered and rejected (not proposed further):**

- *Ultrasonography of deep vein thrombosis of the femoral vein.jpg* and
  *Ultrasonography of abdominal aortic aneurysm…jpg* — both confirmed
  **CC0** (explicit template found), but both are diagnostic **scan-result
  images**, the same category of content the chapter already has three of
  (Figures 2-17, 2-19, 2-22). Adding more scan-result images doesn't close
  the actual gap (real device/real exam photos) and risks the "avoid
  repetitive images" rule. Rejected for redundancy, not license.
- A second radar photograph (`C-band Radar-dish Antenna.jpg`, NASA,
  Kennedy Space Center) — solid PD candidate, but a second radar photo
  next to CH02-PHOTO-01 would be a repetitive image of the same subject.
  Kept on file as a **named alternate for CH02-PHOTO-01** (see §6) rather
  than a sixth independent recommendation.

## 6. Image-by-image acquisition table

### CH02-PHOTO-01

- **Chapter section / lesson:** Chapter 2 → Lesson 1 → "تمهيد" (intro),
  page-01.json
- **Exact concept:** Radar as a real detection application of the
  send-pulse/receive-echo principle — the textbook introduces radar only
  as a schematic analogy (Figure 2-2) for how ultrasound echo-ranging
  works
- **Educational purpose:** Connects the abstract radar block diagram to
  a real installation, and previews the Doppler-effect section two pages
  later since this is specifically a *Doppler* weather radar
- **Recommended image type:** Real photograph, equipment/installation
- **Source page:** https://commons.wikimedia.org/wiki/File:Doppler_Weather_Radar_-_NOAA.jpg
- **Direct file URL:** not confirmed (blocked from opening the page;
  typically `https://upload.wikimedia.org/wikipedia/commons/...` — read
  off the page's "Original file" link at download time)
- **License:** Public Domain (`PD US NOAA` category, per search evidence) — **verify on page before use**
- **Attribution requirement:** None legally required for US federal PD
  works, but Commons courtesy attribution to "NOAA Photo Library" should
  be kept in the credit line regardless
- **Suggested filename:** `chapter-02-radar-antenna-noaa.jpg`
- **Suggested Arabic caption:** "صورة حقيقية لهوائي رادار الدوبلر الجوي — تطبيق عملي لمبدأ إرسال الموجة واستقبال صداها الموضح في الشكل 2-2"
- **Recommended placement:** immediately after the `c2-fig-2-2` block in
  `page-01.json`
- **Confidence level:** High
- **Named alternate if rejected on page review:** [File:C-band_Radar-dish_Antenna.jpg](https://commons.wikimedia.org/wiki/File:C-band_Radar-dish_Antenna.jpg) (NASA, Kennedy Space Center) — use *instead of*, not *in addition to*, CH02-PHOTO-01

### CH02-PHOTO-02

- **Chapter section / lesson:** Chapter 2 → Lesson 1 → "الأجزاء
  الاساسية لأجهزة التصوير الفوق صوتي" (ultrasound imaging system parts),
  page-14.json
- **Exact concept:** Real-world clinical/field application of diagnostic
  ultrasound — the textbook's own photo (Figure 2-20) shows only the
  device sitting idle; this shows the technology actually being used to
  examine a person
- **Educational purpose:** A distinctive, memorable real-world example
  (ultrasound diagnostics performed in space, aboard the ISS) that
  demonstrates the same physical principle taught in this chapter is
  used far beyond a hospital room — without duplicating any existing
  device or scan-image photo
- **Recommended image type:** Real photograph, device in clinical use
- **Source page:** https://www.nasa.gov/missions/station/ultrasound-scans-in-space-transform-medicine-on-earth/
  (recommend sourcing directly from NASA's own site rather than an
  unconfirmed Commons mirror, since NASA's own domain is the
  authoritative origin for the PD claim)
- **Direct file URL:** not confirmed — locate via the article's image
  credits or NASA's image library (`images.nasa.gov`) once that page can
  be opened
- **License:** Public Domain (NASA-produced photography, 14 CFR
  1245.105) — **verify no third-party/contractor copyright notice on the
  specific image before use**, since NASA occasionally hosts
  externally-copyrighted images with a rights notice
- **Attribution requirement:** None legally required; credit "NASA" in
  the caption regardless, per standard practice
- **Suggested filename:** `chapter-02-nasa-iss-ultrasound-exam.jpg`
- **Suggested Arabic caption:** "صورة حقيقية لرائد فضاء يُجري فحصًا بالأمواج الفوق صوتية على متن محطة الفضاء الدولية (المصدر: وكالة ناسا) — مثال على استخدام واقعي لتقنية التصوير الفوق صوتي"
- **Recommended placement:** end of the "الأجزاء الاساسية لأجهزة
  التصوير الفوق صوتي" section in `page-14.json` or `page-15.json`, after
  the existing device/diagram blocks
- **Confidence level:** Medium-high

### CH02-PHOTO-03

- **Chapter section / lesson:** Chapter 2 → Lesson 1 → "الظاهرة
  الكهروضغطية" (piezoelectric phenomenon / probe construction),
  page-07.json
- **Exact concept:** المسبار (probe/transducer) internal construction —
  the chapter already has `c2-fig-2-8` (an internal cross-section
  diagram) and PDF photos `c2-fig-2-9`/`c2-fig-2-10`, but those PDF
  photos are small, low-resolution scans
- **Educational purpose:** A sharp, high-resolution close-up lets
  students clearly see the physical probe head that the labeled
  cross-section diagram is describing
- **Recommended image type:** Real photograph, equipment close-up
- **Source page:** https://commons.wikimedia.org/wiki/File:A_medical_ultrasound_linear_array_probe,_scan_head,_transducer.jpg
- **Direct file URL:** not confirmed
- **License:** Unconfirmed — Commons category convention suggests CC
  BY-SA, **must be read directly off the file page**
- **Attribution requirement:** If CC BY-SA as expected: named author
  credit + license name + link, in the visible caption (per
  `PhotoBlock`'s existing credit line)
- **Suggested filename:** `chapter-02-ultrasound-probe-closeup.jpg`
- **Suggested Arabic caption:** "صورة حقيقية عن قرب لمجس (Probe) أمواج فوق صوتية طبي حديث، يقابل التركيب الداخلي الموضح في الشكل 8-2"
- **Recommended placement:** immediately after `c2-fig-2-8` in
  `page-07.json`
- **Confidence level:** Medium
- **Named alternate:** [File:UltrasoundProbe2006a.jpg](https://commons.wikimedia.org/wiki/File:UltrasoundProbe2006a.jpg) (CH02-PHOTO-04 — same placement, use one or the other, not both)

### CH02-PHOTO-04 (alternate for CH02-PHOTO-03)

- Same section, concept, purpose, and placement as CH02-PHOTO-03.
- **Source page:** https://commons.wikimedia.org/wiki/File:UltrasoundProbe2006a.jpg
- **License:** Unconfirmed — verify on page
- **Suggested filename:** `chapter-02-ultrasound-probe-closeup-alt.jpg`
- **Confidence level:** Medium
- Only download **one** of CH02-PHOTO-03 / CH02-PHOTO-04, whichever
  verifies cleanly and looks sharper at the display size.

### CH02-PHOTO-05

- **Chapter section / lesson:** Chapter 2 → Lesson 1 → "الأجزاء
  الاساسية لأجهزة التصوير الفوق صوتي", page-14.json
- **Exact concept:** A second, higher-quality real photograph of
  ultrasound diagnostic equipment/practice, from an unambiguously
  public-domain US federal collection
- **Educational purpose:** Reinforces the existing device photo
  (Figure 2-20) with a sharper, unambiguously-licensed real photo
- **Recommended image type:** Real photograph, device or clinical use
- **Source page:** https://commons.wikimedia.org/wiki/Category:Media_from_National_Cancer_Institute_Visuals_Online
  (browse this category; do not use `Breast_cancer_ultrasound.jpg`
  specifically — the textbook doesn't discuss breast imaging, so a
  breast-cancer-labeled photo would introduce a clinical subject outside
  the chapter's scope even though the underlying device is the same
  technology; pick a plainer device/exam photo from the category instead)
- **Direct file URL:** not confirmed
- **License:** Public Domain (NCI Visuals Online publishes only
  explicitly-labeled Public Domain or Copyright-Protected images, and
  only the PD ones are mirrored into this Commons category) — verify the
  specific file chosen still carries the PD tag on Commons
- **Attribution requirement:** None legally required; credit "National
  Cancer Institute Visuals Online (NIH)" regardless
- **Suggested filename:** `chapter-02-ultrasound-device-nci.jpg`
- **Suggested Arabic caption:** "صورة حقيقية إضافية لجهاز/فحص بالأمواج الفوق صوتية (المصدر: المعهد الوطني الأمريكي للسرطان)"
- **Recommended placement:** alongside `c2-fig-2-20` in `page-14.json`
- **Confidence level:** Medium-high on license, medium on exact subject match — **a human must pick the specific file**, not just accept the first result

### CH02-PHOTO-06 (UNVERIFIED — not approved)

- **Chapter section / lesson:** "التصوير بواسطة الأمواج الفوق صوتية" or
  "الأجزاء الاساسية لأجهزة التصوير الفوق صوتي", page-10 through page-15
- **Exact concept:** A sonographer performing a real obstetric scan —
  the exam *in progress*, distinct from the resulting scan images the
  chapter already has (Figures 2-17, 2-19, 2-22)
- **Educational purpose:** Shows the real clinical procedure, not just
  its output or the idle device
- **Recommended image type:** Real photograph, procedure in progress
- **Source page:** https://commons.wikimedia.org/wiki/Category:Obstetric_ultrasonography
  (category only — no specific file confirmed)
- **License:** Unknown — depends on which file is picked
- **Status:** **Do not download until a human browses this category and
  reports back a specific filename + confirmed license.** Once that
  happens this becomes a normal acquisition entry.

### CH02-PHOTO-07 (UNVERIFIED — optional, not approved)

- **Chapter section / lesson:** "استخدام الموجات الفوق صوتية للعلاج"
  (therapeutic uses), page-24.json
- **Exact concept:** Therapeutic ultrasound actually being applied to a
  patient, complementing the textbook's own idle-device photo (Figure
  2-35)
- **Recommended image type:** Real photograph, treatment in progress
- **Source page:** https://commons.wikimedia.org/wiki/Category:Physical_therapy
  (category only — no specific matching file confirmed; the one file
  this search surfaced, `Hyperthemia machine.jpg`, appears to depict a
  different modality and should not be used for this slot)
- **License:** Unknown — depends on which file is picked
- **Status:** **Optional.** Only pursue if a human finds a file in this
  category (or a better-targeted search) that specifically and clearly
  shows therapeutic ultrasound, not another modality, with a confirmed
  open license. If nothing suitable turns up, leave this slot empty —
  Figure 2-35 already covers the topic adequately on its own.

## 7. Suggested placement in Chapter 2 (by file)

| Content file | Section | New photo(s) |
|---|---|---|
| `page-01.json` | تمهيد | CH02-PHOTO-01 (or its named alternate) |
| `page-07.json` | الظاهرة الكهروضغطية | CH02-PHOTO-03 **or** CH02-PHOTO-04 (pick one) |
| `page-14.json` | الأجزاء الاساسية لأجهزة التصوير الفوق صوتي | CH02-PHOTO-02, CH02-PHOTO-05 |
| `page-10.json`–`page-15.json` | التصوير بواسطة الأمواج الفوق صوتية | CH02-PHOTO-06 (only once verified) |
| `page-24.json` | استخدام الموجات الفوق صوتية للعلاج | CH02-PHOTO-07 (optional, only once verified) |

No other section is proposed for a new photo. Sections not listed above
(قوانين الموجات الفوق صوتية, امتصاص الموجات الفوق صوتية, تأثير دوبلر,
أنماط إرسال الموجات الفوق الصوتية, الأجهزة الفوق صوتية المختبرية, جهاز
مراقبة الولادة, أسئلة الفصل الثاني) were reviewed and judged to already
have adequate visual support (diagrams, existing PDF photos, or content
that doesn't lend itself to a standalone photograph) — adding more there
would risk decorative filler rather than educational value.

## 8. Attribution requirements

`PhotoBlock.astro` (already built, unmodified by this plan) renders a
visible "المصدر / الترخيص" line under every photo's caption, sourced
from a `credit` object on the content block:

```json
"credit": {
  "source": "<name shown to the reader>",
  "sourceUrl": "<link to the Commons/NASA/NOAA/NIH page>",
  "license": "<license name>",
  "licenseUrl": "<link to the license, if applicable>"
}
```

- **Public Domain (US federal) images** (CH02-PHOTO-01, -02, -05): no
  attribution is legally required, but the credit line will still name
  the source agency (NOAA / NASA / NCI) for academic transparency —
  matches how the textbook's own figures are already sourced back to the
  PDF.
- **CC BY-SA images** (CH02-PHOTO-03/04, if that's what page review
  confirms): the credit line must include the named author (read off
  the file page — not yet known) and a link to the CC BY-SA license
  text, per license terms. This is not optional for CC BY-SA.
- Any image whose page review turns up a license Commons doesn't
  recognize as clearly reusable must be dropped, not force-attributed.

## 9. Filename / path plan

All approved downloads go in the already-created
`public/assets/photos/chapter-02/` directory (kept separate from
`public/assets/diagrams/chapter-02/`, which holds only the textbook's own
extracted figures):

```
public/assets/photos/chapter-02/
  chapter-02-radar-antenna-noaa.jpg              (CH02-PHOTO-01)
  chapter-02-nasa-iss-ultrasound-exam.jpg         (CH02-PHOTO-02)
  chapter-02-ultrasound-probe-closeup.jpg         (CH02-PHOTO-03, if chosen)
  chapter-02-ultrasound-probe-closeup-alt.jpg     (CH02-PHOTO-04, if chosen instead)
  chapter-02-ultrasound-device-nci.jpg            (CH02-PHOTO-05)
  chapter-02-obstetric-exam-in-progress.jpg       (CH02-PHOTO-06, once verified)
  chapter-02-therapeutic-ultrasound-in-use.jpg    (CH02-PHOTO-07, once verified, optional)
```

Naming convention: `chapter-02-<short-english-slug>.jpg`, all lowercase,
hyphen-separated — matches the existing `fig-NN-<slug>.jpg` convention
used in `public/assets/diagrams/chapter-02/` closely enough to stay
recognizable while remaining visually distinct in a file listing.

## Explicit non-actions in this pass

- No image files were downloaded.
- No content JSON (`src/data/chapter-02/*.json`) was modified.
- `PhotoBlock.astro` and `BlockRenderer.astro` were not modified.
- No SVG diagram or animation code was modified.
- No commit was made beyond this planning document.

## Next phase (not started)

1. A human opens each source page above, confirms the license tag
   exactly matches what's reported here, and confirms the image content
   matches its description.
2. For CH02-PHOTO-06 and -07, a human browses the linked category and
   reports back a specific filename + confirmed license (or confirms
   nothing suitable exists, in which case that slot is dropped).
3. Approved files are downloaded, optimized, and saved under the exact
   filenames in §9.
4. Only then are the corresponding JSON blocks inserted into the content
   files at the placements in §7, followed by the same build +
   Playwright validation used for every other change in this project.
