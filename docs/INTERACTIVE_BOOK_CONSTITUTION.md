# Industrial Sciences Interactive Book
## Interactive Book Constitution v1.0

> This document is the mandatory constitution for the entire interactive textbook project.
> Every page, lesson, chapter, component, animation, diagram, and content transformation must comply with these rules.

---

# 1. SOURCE OF TRUTH

The original textbook is the primary and authoritative source for all scientific content.

The interactive book must preserve:

- The original scientific meaning.
- The original terminology.
- The original sequence of concepts.
- The original definitions.
- The original explanations.
- The original lists and classifications.
- The original questions and exercises.
- The original figures and diagrams as references.
- The original educational scope.

The textbook must never be silently rewritten or replaced by general AI knowledge.

---

# 2. ZERO CONTENT LOSS

No educational information contained in the source page may be omitted.

Before implementing any page, create a content inventory containing every relevant element:

- Title
- Subtitle
- Introduction
- Definition
- Explanation
- Enumeration
- Classification
- Technical term
- Figure
- Diagram
- Table
- Question
- Exercise
- Fill-in-the-blank
- Reference to a previous lesson
- Reference to a previous chapter
- Any other educational element

Every extracted element must have a corresponding representation in the interactive page.

---

# 3. ZERO UNAUTHORIZED SCIENTIFIC ADDITIONS

Do not add scientific information that is not supported by the source textbook.

Do not silently:

- Add external definitions.
- Add external examples.
- Add external equations.
- Add external classifications.
- Change terminology.
- Expand scientific explanations using general knowledge.

External enrichment may only be added when explicitly authorized and must be clearly identified as enrichment outside the original textbook content.

---

# 4. PAGE-BY-PAGE WORKFLOW

The textbook must be converted one page at a time.

For every source page:

1. Inspect the original page.
2. Create a complete content inventory.
3. Identify all visual elements.
4. Identify all educational element types.
5. Map each element to an interactive component.
6. Implement the page.
7. Verify scientific fidelity.
8. Verify visual fidelity.
9. Verify responsive behavior.
10. Accept the page.
11. Only then proceed to the next page.

Never skip directly from one page to another without verification.

---

# 5. EDUCATIONAL ELEMENT MAPPING

## Definitions

Definitions must remain clearly identifiable as definitions.

Use a dedicated Definition Card.

## Explanations / Why Questions

Explanations and "Why?" content must remain clearly distinguishable from ordinary paragraphs.

Use an Explanation / Why Card.

## Enumerations

Lists must remain lists.

Do not hide enumerated information inside long paragraphs.

## Questions

Questions must remain visually identifiable as questions.

## Fill-in-the-blanks

Every fill-in-the-blank activity found in the source must be preserved and represented as an interactive exercise.

## Drawings

If the source asks the student to draw, the interactive book must provide an appropriate drawing or visual interaction.

---

# 6. MEDICAL DEVICE VISUALIZATION

Medical devices require multiple visual layers when appropriate.

A device may use:

1. Real photograph
2. Educational illustration
3. SVG technical diagram
4. Interactive SVG
5. Animated process
6. Exploded or component view

These layers must serve different educational purposes.

Do not use decoration as a substitute for scientific visualization.

---

# 7. REAL PHOTOGRAPHS

Use real photographs when they help the student recognize the actual medical device.

Photographs must not replace technical diagrams when the purpose is to explain internal structure or operation.

---

# 8. SVG DIAGRAMS

Scientific diagrams should use SVG whenever practical.

SVG diagrams must be:

- Scalable.
- Responsive.
- Legible on mobile devices.
- Structurally organized.
- Suitable for animation when required.

Interactive SVG may support:

- Hover.
- Click.
- Highlighting.
- Component identification.
- Labels.
- Guided operation.
- Animated flow.

---

# 9. ANIMATION

Animation is educational, not decorative.

Use animation to explain:

- Movement.
- Signal flow.
- Energy flow.
- Component interaction.
- Device operation.
- Sequential processes.

Animation must represent the source content accurately.

Do not invent scientific behavior merely to make an animation attractive.

---

# 10. GIF

GIF may be used when an existing animated visual is appropriate.

Prefer SVG/CSS/JavaScript animation when interactive control or scalability is required.

GIF must not be used merely because animation looks attractive.

---

# 11. TECHNICAL TERMINOLOGY

Arabic is the primary language.

When the textbook provides an English technical term, preserve it.

Preferred presentation:

Arabic Term
English Technical Term

Example:

الكاثود (المهبط)
Cathode

Do not replace the textbook terminology without explicit authorization.

---

# 12. TYPOGRAPHY

Primary Arabic font:

Cairo

The interface must support:

- Arabic RTL.
- Correct Arabic shaping.
- Clear hierarchy.
- High readability.
- Appropriate line height.
- Mobile readability.

Scientific notation and technical expressions must remain visually correct.

---

# 13. DESIGN SYSTEM

Primary visual language:

Neumorphism

The design must prioritize:

- Soft surfaces.
- Clear hierarchy.
- Controlled depth.
- Consistent shadows.
- High readability.
- Comfortable spacing.
- Minimal visual clutter.

Neumorphism must never reduce accessibility or readability.

---

# 14. RESPONSIVE DESIGN

The interactive textbook must be optimized for:

- Mobile phones.
- Tablets.
- Desktop screens.

Mobile and tablet layouts must not be treated as compressed desktop layouts.

Interactive diagrams must remain usable on touch screens.

---

# 15. COMPONENT PRINCIPLE

Every repeated educational pattern should become a reusable component.

Examples:

- DefinitionCard
- ExplanationCard
- ListCard
- QuestionCard
- FillBlankCard
- DeviceCard
- TechnicalTerm
- InteractiveDiagram
- RealDeviceImage
- AnimationPanel
- LearningObjective
- SummaryCard

Do not duplicate large blocks of UI unnecessarily.

---

# 16. CONTENT / PRESENTATION SEPARATION

Scientific content must be separated from presentation logic whenever practical.

Content belongs in structured data.

Presentation belongs in reusable components.

This allows the same educational structure to be rendered consistently across the textbook.

---

# 17. DEVICE INTERACTION PRINCIPLE

When an actual medical device is discussed, ask:

- Can the device be shown as a real photograph?
- Can its components be identified?
- Can the technical diagram be converted to SVG?
- Can its operating principle be animated?
- Can the student interact with the components?
- Can the relationship between components and function be visualized?

Only implement interactions that are educationally justified.

---

# 18. SCIENTIFIC FIDELITY

Before accepting a page verify:

- Terminology.
- Definitions.
- Component names.
- Component functions.
- Sequence of operation.
- Labels.
- Diagrams.
- Numbers.
- Classifications.
- Questions.

The interactive implementation must not introduce scientific contradictions with the source.

---

# 19. VISUAL FIDELITY

For every source page verify:

- All important visual elements are represented.
- No important figure is omitted.
- Text hierarchy is preserved.
- Relationships between text and figures are preserved.
- Figures are not distorted.
- Diagrams remain understandable.

The interactive page does not have to copy the textbook's visual design.

It must preserve its educational meaning.

---

# 20. PAGE ACCEPTANCE CHECKLIST

A page is accepted only when all conditions are satisfied.

### Content

- [ ] All source content extracted.
- [ ] No important information omitted.
- [ ] No unauthorized scientific additions.
- [ ] Definitions preserved.
- [ ] Explanations preserved.
- [ ] Lists preserved.
- [ ] Questions preserved.
- [ ] Fill-in-the-blanks preserved.

### Visual

- [ ] Figures reviewed.
- [ ] Images reviewed.
- [ ] Diagrams reviewed.
- [ ] Interactive elements verified.
- [ ] Animations verified.

### Technical

- [ ] RTL verified.
- [ ] Cairo verified.
- [ ] Mobile layout verified.
- [ ] Tablet layout verified.
- [ ] Desktop layout verified.
- [ ] Interactive controls work.
- [ ] No console errors.

### Scientific

- [ ] Scientific terminology verified.
- [ ] Device components verified.
- [ ] Functions verified.
- [ ] Diagrams verified.
- [ ] No scientific contradiction introduced.

---

# 21. GOLDEN PAGE PRINCIPLE

The first fully verified page of the first lesson will become the initial implementation reference.

Its:

- Content structure.
- Component patterns.
- Typography.
- Spacing.
- Visual hierarchy.
- Interaction patterns.
- Diagram treatment.
- Device visualization approach.

may be reused across later pages.

However, later pages must always follow their own source content.

The first page is a design and implementation reference, not permission to copy content into other pages.

---

# 22. FINAL RULE

When there is a conflict between:

- visual attractiveness,
- animation,
- interactivity,
- convenience,

and

- scientific accuracy,
- source fidelity,
- educational clarity,

scientific accuracy and source fidelity always win.
