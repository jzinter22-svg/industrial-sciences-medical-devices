# Golden Page Specification
## Page 09 — Chapter 01 / Lesson 01

Version: 1.0
Status: Golden Reference
Source: Original textbook page 09

---

# 1. PURPOSE

This page is the first implementation reference for the interactive
Industrial Sciences — Medical Devices textbook.

It defines the visual, structural, interaction, and technical patterns
that may be reused on later pages.

It does NOT authorize copying the scientific content of this page into
other pages.

Each later page must be implemented from its own source content.

---

# 2. SOURCE PAGE

Chapter:

الفصل الأول

Chapter title:

جهاز الأشعة السينية
X-ray equipment

Page:

9

Main sections:

1. 1-1 تمهيد
2. 1-2 أنواع واستخدامات جهاز الأشعة السينية

English section title:

Types and uses of X-ray Equipment

---

# 3. PAGE STRUCTURE

The interactive page must preserve the source sequence:

Chapter Header
↓
Section 1-1
↓
Introduction / Scientific Context
↓
Section 1-2
↓
Types and Uses
↓
Five X-Ray Equipment Types

The sequence must not be changed merely for visual reasons.

---

# 4. CHAPTER HEADER

The top of the page must contain:

- Chapter number.
- Arabic chapter title.
- English title.

Primary Arabic typography:

Cairo

Direction:

RTL

English technical terminology:

LTR

The chapter header must be visually prominent but must not consume
excessive vertical space on mobile devices.

---

# 5. SECTION HEADER

Each major textbook section must have a distinctive section header.

For example:

1-1 تمهيد

and

1-2 أنواع واستخدامات جهاز الأشعة السينية

The interactive implementation may improve the visual treatment,
but the original section numbering and wording must remain unchanged.

---

# 6. INTRODUCTION SECTION

The introduction must preserve the scientific content of the source.

The page explains that X-rays are:

- Electromagnetic radiation.
- Very high frequency.
- Short wavelength.
- Capable of penetrating objects.
- Used in many medical fields.
- Capable of producing clear images of bones.

The source also explains the visual appearance of bones,
tissues, and air in the resulting image.

No additional scientific information may be silently introduced.

---

# 7. INTRODUCTION PRESENTATION

The introduction must NOT be converted into many small cards.

Use one primary educational surface:

Intro / Context Card

Within the card, important concepts may be visually emphasized.

Possible supporting visualization:

X-Ray
↓
Electromagnetic radiation
↓
High frequency
↓
Short wavelength
↓
Penetration
↓
Medical imaging

This visualization is a presentation layer only.

It must not introduce information that is absent from the source.

---

# 8. TYPES AND USES SECTION

The page contains five types of X-ray equipment.

They must remain in the original order:

1. Still Picture X-ray Machine
2. Continuous Picture X-ray Machine (Fluoroscopy)
3. Motion Picture X-ray Machine (Angiography)
4. Mammography
5. Computerized X-ray Scan Machine (Tomography)

The classification itself must remain clearly visible.

---

# 9. DEVICE CARD

Each device type should use a reusable DeviceCard component.

Recommended structure:

Device number
↓
Arabic device name
↓
English technical name
↓
Real device photograph
↓
Use / purpose
↓
Optional interactive visualization

The card must not invent additional scientific information.

---

# 10. REAL DEVICE PHOTOGRAPHS

Real photographs should be used when they help students recognize
the physical medical device.

Photographs are supplementary visual material.

They must not replace technical diagrams when the purpose is to explain
internal structure or operation.

Images should be:

- High quality.
- Relevant to the exact device type.
- Properly cropped.
- Responsive.
- Optimized for mobile devices.

---

# 11. SVG POLICY

SVG must be used when a device, structure, relationship, or process
can benefit from technical visualization.

Interactive SVG may provide:

- Component highlighting.
- Labels.
- Click interaction.
- Hover interaction.
- Guided paths.
- Animated flow.

SVG must represent the source accurately.

Do not invent internal components that are not supported by the source
page being implemented.

---

# 12. ANIMATION POLICY

Animation is educational.

Animation may be used to demonstrate:

- Movement.
- Process sequence.
- Signal flow.
- Imaging process.
- Component relationships.

Animation must never introduce unsupported scientific behavior.

Animation must remain optional and must not prevent reading the content.

Users must be able to understand the page without animation.

---

# 13. GIF POLICY

GIF may be used when an appropriate animated source exists.

However:

Interactive SVG/CSS/JavaScript animation is preferred when:

- Interaction is required.
- Scaling is required.
- Touch interaction is required.
- The animation represents a scientific process.

GIF must not be used merely as decoration.

---

# 14. DEVICE-SPECIFIC VISUALIZATION

## Still Picture X-ray Machine

Possible visualization:

Real device photograph
+
Body-part / usage illustration

Only uses explicitly supported by the source may be displayed.

---

## Fluoroscopy

Possible visualization:

Real device photograph
+
Continuous imaging concept

Animation may be used to represent continuous imaging.

Do not add unsupported procedural medical information.

---

## Angiography

Possible visualization:

Real device photograph
+
Blood-vessel SVG
+
Animated flow representation

The animation must remain an educational representation of the
description contained in the textbook.

---

## Mammography

Possible visualization:

Real device photograph
+
Simple identification diagram

No unnecessary animation is required.

---

## Tomography

Possible visualization:

Real CT device photograph
+
Interactive sectional visualization

The sectional visualization must represent the source description
without adding unsupported technical details.

---

# 15. CARD HIERARCHY

Do NOT convert every sentence into a separate card.

Use cards at meaningful educational levels:

- Section.
- Concept.
- Device.
- Explanation.
- Interactive visualization.

Avoid excessive card fragmentation.

The objective is clarity, not maximum number of cards.

---

# 16. NEUMORPHISM

The visual system must use Neumorphism.

Use:

- Soft surfaces.
- Controlled shadows.
- Subtle depth.
- Consistent elevation.
- Clear hierarchy.
- Generous spacing.

Do NOT apply heavy shadows to every element.

Neumorphism must not reduce:

- Contrast.
- Readability.
- Accessibility.
- Touch usability.

---

# 17. TYPOGRAPHY

Primary Arabic font:

Cairo

Arabic:

RTL

English technical terms:

LTR

The typography hierarchy must clearly distinguish:

- Chapter title.
- Section title.
- Device title.
- English technical title.
- Body text.
- Supporting information.

Body text must remain comfortable to read on tablets and phones.

---

# 18. RESPONSIVE BEHAVIOR

## Desktop

Device cards may use a grid.

## Tablet

Use a reduced grid or two-column layout depending on available width.

## Mobile

Use a vertical stack.

Example:

Device 01
↓
Device 02
↓
Device 03
↓
Device 04
↓
Device 05

Interactive diagrams must support touch.

No essential interaction may depend exclusively on hover.

---

# 19. RTL / LTR RULES

Arabic content:

RTL

English technical terminology:

LTR

Technical names must not become visually corrupted because of RTL
inheritance.

Mixed Arabic/English content must be tested carefully.

---

# 20. CONTENT / PRESENTATION SEPARATION

Scientific content must be stored separately from UI presentation
whenever practical.

Recommended architecture:

Structured page data
↓
Reusable components
↓
Visual rendering

The page content must not be hard-coded repeatedly inside components.

---

# 21. PAGE DATA MODEL

The page should eventually be represented by structured data similar to:

page
├── metadata
├── chapter
├── sections
│   ├── introduction
│   └── deviceTypes
│       ├── device01
│       ├── device02
│       ├── device03
│       ├── device04
│       └── device05
└── assets

This is a structural model only.

The exact JSON schema must be finalized before implementation.

---

# 22. FORBIDDEN ON THIS PAGE

Do not add:

- Content from later pages.
- Content from later lessons.
- External medical explanations presented as textbook content.
- Unverified technical specifications.
- Unverified device components.
- Extra examples.
- Extra exercises.
- Extra questions.
- Decorative scientific diagrams with no educational purpose.

---

# 23. VISUAL QUALITY RULE

The interactive page does not need to copy the original textbook's
visual design.

It must preserve:

- Content.
- Meaning.
- Hierarchy.
- Relationships.
- Educational intent.

The interactive design may be substantially more modern.

---

# 24. INTERACTION QUALITY RULE

Every interaction must answer a question:

"What does this interaction teach the student?"

If the answer is unclear, the interaction should not be implemented.

---

# 25. ACCESSIBILITY

Interactive elements must have:

- Clear labels.
- Adequate touch targets.
- Readable text.
- Visible states.
- Keyboard accessibility where applicable.
- Reduced-motion consideration.

Animation must never be the only way to access information.

---

# 26. PERFORMANCE

Medical images and animations can be large.

Assets must be optimized.

Use:

- WebP/AVIF where appropriate for photographs.
- SVG for scalable diagrams.
- Optimized animation.
- Lazy loading for non-critical assets.

Do not sacrifice scientific clarity merely to reduce file size.

---

# 27. PAGE ACCEPTANCE

The page cannot be considered complete until:

## Content QA

- [ ] All source text represented.
- [ ] All five device types represented.
- [ ] Original ordering preserved.
- [ ] English technical names preserved.
- [ ] No source information omitted.

## Visual QA

- [ ] Chapter header verified.
- [ ] Section headers verified.
- [ ] Device cards verified.
- [ ] Images verified.
- [ ] SVG verified.
- [ ] Animations verified.

## Responsive QA

- [ ] Mobile verified.
- [ ] Tablet verified.
- [ ] Desktop verified.
- [ ] Touch interaction verified.
- [ ] RTL/LTR verified.

## Scientific QA

- [ ] Terminology verified.
- [ ] Device uses verified.
- [ ] No unsupported scientific additions.
- [ ] No contradictions with source.

---

# 28. GOLDEN PAGE STATUS

Once Page 09 passes all QA stages, it becomes the first
Golden Implementation Reference.

Later pages may reuse:

- Component architecture.
- Typography.
- Spacing.
- Interaction patterns.
- Image treatment.
- SVG treatment.
- Animation conventions.
- Neumorphic design tokens.

Later pages must NOT copy scientific content from Page 09.

---

# 29. FINAL PRINCIPLE

SOURCE
↓
INVENTORY
↓
STRUCTURE
↓
VISUAL MAPPING
↓
IMPLEMENTATION
↓
SCIENTIFIC QA
↓
VISUAL QA
↓
RESPONSIVE QA
↓
ACCEPTANCE

No shortcut is permitted.
