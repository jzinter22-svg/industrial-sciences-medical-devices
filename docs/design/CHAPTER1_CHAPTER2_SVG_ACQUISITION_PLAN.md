# Chapter 1 & Chapter 2 — Open-License SVG Acquisition Plan

Status: **Research and comparison complete. No files downloaded, no
code modified, no diagrams replaced.**

Same network constraint as the prior image-acquisition pass applies here:
this session's egress cannot reach `commons.wikimedia.org`,
`bioart.niaid.nih.gov`, or `svgrepo.com` (re-confirmed via `curl` and
`WebFetch` before starting this research — all return policy-denial
errors). All candidates below were located via `WebSearch`, which is not
subject to that block, and are graded by the strength of evidence that
search actually returned, not assumed. Nothing here should be treated as
final until a human opens the source page and confirms the license.

---

## 1. PDF-vs-target comparison (done first, as instructed)

Before searching for any SVG, the actual Chapter 1 and Chapter 2 content
was checked against the task's prioritized target list, because two of
the named targets turned out to be outside what these chapters actually
teach — and the project's standing rule (established and applied
consistently in the prior Chapter 2 photo-planning pass) is to never
introduce a device or modality the source PDF doesn't cover.

| Target | In Chapter 1? | In Chapter 2? | Verdict |
|---|---|---|---|
| Patient and MRI device | **No** — Chapter 1 is entirely X-ray-based equipment (still/fluoroscopy/angiography/mammography/CT); magnetic resonance is never mentioned | No | **Out of scope — do not source.** |
| CT Scanner | **Yes** — `device-05`, "جهاز الاشعة السينية المقطعية بالحاسوب" (Computerized X-ray Scan Machine / Tomography), `src/data/chapter-01/page-01.json` | No | In scope for Ch.1 |
| Mammography / Mammogram procedure | **Yes** — `device-04`, "جهاز تصوير الثدي" | No | In scope for Ch.1 |
| Angiography system | **Yes** — `device-03`'s own English gloss is literally "(Angiography)": "جهاز الاشعة السينية ذات الصورة المتحركة / Motion Picture X-ray Machine (Angiography)," description covers catheter dye injection and vessel imaging | No | In scope for Ch.1 — corrects an initial read of mine that almost excluded it for not using the Arabic loanword "تصوير الأوعية" |
| X-ray / fluoroscopy | **Yes** — `device-01` (still) and `device-02` ("جهاز الاشعة السينية ذات الصورة المستمرة" / Continuous Picture X-ray Machine, English gloss "Fluoroscopy") | No | In scope for Ch.1 |
| Ultrasonic Scanner Block Diagram | No | **Yes, but already covered** — `UltrasoundSystemDiagram.astro`, animated, built to match Figure 2-21 exactly | Reject — see §4 |
| Ultrasound probe/scanner | No | **Yes, but already covered** — `ProbeStructureDiagram.astro` (internal parts, Figure 2-8) plus PDF probe photos (2-9/2-10) | Reject — see §4 |
| Radar animation | No | **Yes, but already covered** — `RadarDiagram.astro`, purpose-built to the exact 8-step sequence for Figure 2-2 | Reject — see §4 |
| FMCW Doppler Radar | No | Chapter 2 discusses the basic pulse-echo radar analogy only; FMCW (frequency-modulated continuous-wave) is a specific radar sub-type the textbook doesn't name | Reject — see §4 |

**Finding:** the real opportunity is Chapter 1, devices 1-4. Every one of
them is pure text in the current build — `DeviceCard.astro`
(`src/components/DeviceCard.astro:21-23`) renders a hardcoded
"سيتم إضافة الصورة لاحقًا" ("image to be added later") placeholder for
every device card, because no image was ever wired in. This is the
single most clearly-justified gap found in either chapter across this
whole project: the UI itself already flags it as incomplete.

Chapter 2 has **no legitimate SVG gap** — every target the task named for
it already has a project-built, PDF-fidelity-matched, animated
equivalent. Recommendation for all four Chapter 2 targets: **do not
source or integrate anything**, for the reasons in §4.

---

## 2. Candidates for Chapter 1 (devices 1-4, currently imageless)

### CH01-SVG-01 — CT scanner (for device-05, supplementary)

- **Section / device:** `page-01.json`, section 1-2, `device-05`
  ("جهاز الاشعة السينية المقطعية بالحاسوب")
- **Concept:** what a real CT/tomography gantry looks like
- **Why useful:** `device-05` already has an excellent interactive
  diagram (`TomographySectionsDiagram.astro`, the project's "Golden
  Reference," showing scan cross-section regions) — that diagram is
  anatomical, not equipment. This SVG would show the machine itself,
  complementing rather than competing with it.
- **Source:** [Category:CT scanners — Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:CT_scanners); specifically **CT Scanner (NIH BioArt 373 - 632562).svg** and two sibling variants (632567, 632572)
- **License:** Public Domain — NIH BioArt states a blanket policy that
  "all BioArt content is public domain" as a US federal government
  publication; this is stronger evidence than a per-file Commons tag
  check would normally give, but the specific mirrored file should still
  be opened once to confirm no upload error changed its tag
- **Attribution requirement:** none legally required; credit "NIH BioArt
  Source (NIAID)" regardless
- **Suggested filename:** `chapter-01-ct-scanner-nih-bioart.svg`
- **Suggested Arabic caption:** "رسم توضيحي حقيقي لجهاز الأشعة السينية المقطعية بالحاسوب (المصدر: مكتبة NIH BioArt) — يوضح شكل الجهاز الفعلي المرتبط بالشكل التوضيحي التفاعلي أعلاه"
- **Placement:** inside `device-05`'s card, alongside (not replacing)
  the existing `TomographySectionsDiagram`
- **Confidence:** High

### CH01-SVG-02 — Mammography icon (for device-04)

- **Section / device:** `page-01.json`, `device-04` ("جهاز تصوير الثدي")
- **Concept:** mammography equipment — `device-04` currently has zero
  visual of any kind
- **Why useful:** closes the single largest visual gap in Chapter 1
- **Source:** "Mammogram - The Noun Project.svg," in
  [Category:SVG medical icons — Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:SVG_medical_icons)
- **License:** **Needs careful verification, not assumed.** Files
  originally sourced from the Noun Project and mirrored to Commons carry
  whatever terms the original uploader chose — commonly CC BY 3.0
  (attribution required), but Noun Project also hosts icons under
  royalty-free terms that are *not* equivalent to CC0/PD and are not
  always compatible with Commons' free-license requirement. Do not
  assume PD just because it's on Commons; open the file page and read
  the exact template.
- **Attribution requirement:** likely yes (named author + CC BY link) —
  confirm exact wording on the file page
- **Suggested filename:** `chapter-01-mammography-icon.svg`
- **Suggested Arabic caption:** "رسم توضيحي لجهاز تصوير الثدي (الماموغرام)"
- **Placement:** inside `device-04`'s card
- **Confidence:** Medium — license needs the most scrutiny of any
  candidate in this plan before approval

### CH01-SVG-03 — Chest X-ray icon (for device-01)

- **Section / device:** `page-01.json`, `device-01` ("جهاز الاشعة
  السينية ذات الصورة الثابتة" — its own description names chest imaging
  explicitly: "كالاطراف واشعة الصور العادية والجمجمة والكسور")
- **Concept:** a still-picture X-ray, the classic case being a chest
  film
- **Source:** [File:X-rays chest icon.svg](https://commons.wikimedia.org/wiki/File:X-rays_chest_icon.svg)
- **License:** **CC BY-SA 3.0 Unported** — confirmed directly in
  `WebSearch` result text (619×619px, 8KB, license stated explicitly)
- **Attribution requirement:** yes — named author credit + CC BY-SA 3.0
  link, per license terms; confirm the exact author name on the page
  before writing the credit line
- **Suggested filename:** `chapter-01-still-xray-chest-icon.svg`
- **Suggested Arabic caption:** "رمز توضيحي لصورة أشعة سينية ثابتة (صدر)"
- **Placement:** inside `device-01`'s card
- **Confidence:** Medium-high (license is the most directly confirmed of
  any SVG candidate here; subject-match confidence is high since chest
  imaging is explicitly named in the device's own description)

### CH01-SVG-04 — Generic X-ray equipment icon (optional, backup)

- **Source:** [File:X-ray icon.svg](https://commons.wikimedia.org/wiki/File:X-ray_icon.svg)
- **License:** CC BY-SA 4.0 International — confirmed in `WebSearch`
  result text
- **Use:** only as a fallback if CH01-SVG-03 doesn't pan out on review,
  or as a small supplementary icon elsewhere (e.g. next to the "تمهيد"
  intro paragraph). Not independently required — don't add both
  CH01-SVG-03 and -04 to the same card, that would be repetitive.
- **Confidence:** Medium-high on license, low priority on placement

### CH01-SVG-05 — X-ray spectrum/applications diagram (optional, تمهيد section)

- **Section:** `page-01.json`, section 1-1 "تمهيد" — the paragraph that
  describes X-rays as high-frequency electromagnetic radiation with
  medical applications currently has no accompanying figure
- **Source:** [File:X-ray applications.svg](https://commons.wikimedia.org/wiki/File:X-ray_applications.svg)
  (446×241px, shows X-ray wavelengths/photon energies and applications)
- **License:** not confirmed in search results — **must be read on the
  page**
- **Use:** optional; only pursue if the license clears and the content
  matches the intro paragraph's claims (EM radiation, high frequency)
  without contradicting or exceeding what the textbook states
- **Confidence:** Low-medium (subject fit is good, license unconfirmed)

### Device-02 (Fluoroscopy) and Device-03 (Angiography) — no SVG found

Despite the strongest search effort of this whole plan (both English and
Arabic technical terms, `site:`/`filetype:` operators, Commons category
names), no specific SVG could be identified for either device with
enough confidence to recommend. What search did surface:

- [Category:X-ray equipment — Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:X-ray_equipment) (175 files, general — needs human browsing)
- [Category:Angiography — Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Angiography) and [Category:Coronary angiography](https://commons.wikimedia.org/wiki/Category:Coronary_angiography) (mostly diagnostic scan-result images, not equipment illustrations)
- "Doctor with Patient X-ray Cartoon.svg" — **considered and rejected**:
  cartoon/clip-art style doesn't match this book's precise technical
  illustration style used everywhere else, independent of its license
- BioRender's "X-ray machine (C-arm)" icon set — **considered and
  rejected as a source category entirely**: BioRender icons are licensed
  for use inside figures built on BioRender's own platform, not as a
  general-purpose open/PD asset library; this doesn't meet the task's
  "verified Public Domain / open-license" bar

**Status: UNVERIFIED for both devices.** A human should browse
Category:X-ray equipment specifically looking for a fluoroscopy C-arm
unit (device-02) and a cine/angiography unit (device-03) and report back
specific filenames with confirmed licenses. Until then, these two device
cards keep their current placeholder.

---

## 3. Attribution requirements summary

| Candidate | License | Attribution needed in `credit` line |
|---|---|---|
| CH01-SVG-01 (CT scanner) | Public Domain (NIH BioArt) | Not legally required; credit "NIH BioArt Source (NIAID)" as courtesy |
| CH01-SVG-02 (mammography) | Unconfirmed — likely CC BY | Yes, pending confirmation — named author + license link |
| CH01-SVG-03 (chest X-ray icon) | CC BY-SA 3.0 | Yes — named author + CC BY-SA 3.0 link |
| CH01-SVG-04 (generic X-ray icon) | CC BY-SA 4.0 | Yes — named author + CC BY-SA 4.0 link |
| CH01-SVG-05 (X-ray applications) | Unconfirmed | Unknown until page is read |

---

## 4. Chapter 2 — explicit no-action recommendation

For each Chapter 2 target named in the task, here is why it should **not**
be sourced or integrated:

| Target | Existing project asset | Why it wins |
|---|---|---|
| Ultrasonic Scanner Block Diagram SVG | `UltrasoundSystemDiagram.astro` | Built to match Figure 2-21 exactly, already animated with the project's shared flow-particle/highlight system, Arabic-labeled to the textbook's own terminology. A generic external block diagram would be a downgrade — less accurate, not animated, and would violate rule 5 ("do not replace existing educational diagrams blindly"). |
| Ultrasound probe/scanner SVG | `ProbeStructureDiagram.astro` | Same reasoning — built to match Figure 2-8's internal cross-section exactly, animated to walk through the signal path part-by-part. (A real photographic probe close-up is a different, complementary idea, already covered as CH02-PHOTO-03/04 in `CHAPTER2_IMAGE_ACQUISITION_PLAN.md` — that's a photo need, not an SVG need.) |
| Radar animation.svg | `RadarDiagram.astro` | Purpose-built to the task's own previously-specified 8-step radar sequence (transmitter activates → wave travels → reflects → returns → receiver detects → distance emphasized → repeats), matching Figure 2-2's exact geometry. No external generic radar SVG could match this without redoing work already done to a higher standard. |
| FMCW Doppler Radar.svg | *(none needed)* | The textbook's radar content is the basic pulse-echo analogy only (Figure 2-2); it does not teach frequency-modulated continuous-wave radar as a distinct topic. Introducing an FMCW-specific diagram would add a concept the PDF doesn't cover, contradicting rule 1 (PDF is the scientific source of truth) and rule 8 (do not simplify or embellish beyond what the source teaches — here, the risk runs the other way, adding unsupported extra detail). |

No Chapter 2 files are proposed for modification in this plan.

---

## 5. Code integration plan (described, not implemented)

Chapter 1's `device-01` through `device-04` blocks currently have no
`image` field at all, and `DeviceCard.astro` always renders its
placeholder unconditionally
(`src/components/DeviceCard.astro:21-23`). Once specific assets are
downloaded and their licenses confirmed, integration would require:

1. Add an optional `image` field to the relevant `device` blocks in
   `page-01.json` (object: `{ src, alt, credit: { source, sourceUrl,
   license, licenseUrl } }`, mirroring the `credit` schema already used
   by `PhotoBlock.astro` for consistency).
2. Extend `DeviceCard.astro`'s `Props` with an optional `image` prop;
   render the SVG/photo in place of the placeholder only when `image` is
   present, falling back to the current placeholder text for any device
   that still has none (so devices 2 and 3, currently UNVERIFIED, keep
   working exactly as they do today).
3. Add a small attribution line under the image, reusing the same visual
   treatment as `PhotoBlock.astro`'s credit line for consistency across
   both chapters.
4. No changes to `BlockRenderer.astro`, any SVG diagram component, or
   the animation system are needed — `device` blocks are rendered by
   `DeviceCard.astro` directly, a separate path from the `diagram` block
   type all the animated components use.

This is a description of the minimal, additive change that would be
needed — **not implemented in this pass**, per the instruction to stop
after producing the acquisition plan.

## 6. Filename / path plan

```
public/assets/svg/chapter-01/
  chapter-01-ct-scanner-nih-bioart.svg        (CH01-SVG-01)
  chapter-01-mammography-icon.svg             (CH01-SVG-02, pending license confirmation)
  chapter-01-still-xray-chest-icon.svg        (CH01-SVG-03)
  chapter-01-xray-icon-generic.svg            (CH01-SVG-04, optional/backup)
  chapter-01-xray-applications.svg            (CH01-SVG-05, optional)
```

A new `public/assets/svg/chapter-01/` directory is proposed (distinct
from `public/assets/diagrams/chapter-01/`, which holds only the
textbook's own hand-built figures, and from `public/assets/photos/`,
which holds photographic — non-vector — supplementary images) so the
three asset classes stay visually distinguishable in the repo. Not
created in this pass.

---

## Explicit non-actions in this pass

- No SVG or other files were downloaded.
- No content JSON was modified.
- `DeviceCard.astro`, `BlockRenderer.astro`, and every diagram/animation
  component were left untouched.
- No existing diagram was replaced.
- No commit beyond this planning document.

## Next phase (not started)

1. A human opens each source page in §2 and confirms the exact license
   tag, especially CH01-SVG-02 (mammography), whose license is the least
   certain of the group.
2. A human browses Category:X-ray equipment / Category:Angiography
   looking for a specific fluoroscopy (device-02) and angiography
   (device-03) illustration; reports back filename + confirmed license,
   or confirms nothing suitable exists.
3. Approved SVGs are downloaded to `public/assets/svg/chapter-01/` under
   the filenames in §6.
4. Only then: implement the minimal `DeviceCard.astro` + `page-01.json`
   change described in §5, run `npm run build`, and validate with the
   same Playwright overflow/broken-asset check used throughout this
   project.
