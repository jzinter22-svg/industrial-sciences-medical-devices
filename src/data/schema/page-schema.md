# Industrial Sciences Interactive Book
# Page Data Schema v1.0

Status: Official
Purpose: Unified schema for all textbook pages

---

# 1. CORE PRINCIPLE

Every textbook page must be represented as structured data.

The page data is the source for rendering the interactive page.

Scientific content must remain separate from presentation logic.

The schema must represent the source textbook faithfully.

Do not add fields merely because they are technically possible.

A field should exist only when the source page or the interactive
implementation requires it.

---

# 2. ROOT PAGE OBJECT

Every page follows this conceptual structure:

page
├── id
├── source
├── metadata
├── title
├── sections
└── assets

---

# 3. PAGE IDENTITY

Required:

- id
- pageNumber
- chapterNumber
- lessonNumber

Example:

{
  "id": "page-01",
  "pageNumber": 9,
  "chapterNumber": 1,
  "lessonNumber": 1
}

The internal page ID is a project identifier.

The printed textbook page number must remain separate.

---

# 4. SOURCE OBJECT

The source object records where the content came from.

Structure:

{
  "source": {
    "book": "العلوم الصناعية",
    "chapter": "الفصل الأول",
    "printedPage": 9
  }
}

The source object is metadata.

It must not replace the actual educational content.

---

# 5. METADATA

Recommended fields:

{
  "metadata": {
    "language": "ar",
    "direction": "rtl",
    "status": "draft",
    "goldenReference": false
  }
}

Allowed status values:

- draft
- review
- verified
- accepted

Only a page that has passed QA may be marked:

accepted

---

# 6. TITLE

Structure:

{
  "title": {
    "ar": "جهاز الأشعة السينية",
    "en": "X-ray equipment"
  }
}

Arabic is the primary title.

English is optional and must only be included when supported by
the source or explicitly authorized.

---

# 7. SECTIONS

All educational content belongs inside sections.

Structure:

{
  "sections": []
}

Each section must preserve the order of the source textbook.

Example:

{
  "sections": [
    {
      "id": "section-1-1",
      "number": "1-1",
      "title": {
        "ar": "تمهيد"
      },
      "blocks": []
    }
  ]
}

Do not reorder sections for visual reasons.

---

# 8. CONTENT BLOCKS

A section contains ordered blocks.

Structure:

{
  "blocks": []
}

Each block represents one meaningful educational element.

Supported block types:

- paragraph
- definition
- explanation
- list
- numbered-list
- table
- question
- fill-blank
- image
- diagram
- interactive-diagram
- animation
- gif
- device
- comparison
- note
- reference

Only use a block type when appropriate to the source page.

---

# 9. PARAGRAPH

Structure:

{
  "type": "paragraph",
  "id": "intro-01",
  "content": {
    "ar": "..."
  }
}

Do not split normal prose into unnecessary cards.

---

# 10. DEFINITION

Use only when the source presents an actual definition.

Structure:

{
  "type": "definition",
  "id": "definition-01",
  "term": {
    "ar": "...",
    "en": "..."
  },
  "definition": {
    "ar": "..."
  }
}

Do not convert an ordinary explanatory sentence into a definition.

---

# 11. EXPLANATION

Used for explanatory content.

Structure:

{
  "type": "explanation",
  "id": "explanation-01",
  "content": {
    "ar": "..."
  }
}

This is different from a definition.

---

# 12. LIST

Use when the source contains an unordered enumeration.

Structure:

{
  "type": "list",
  "id": "list-01",
  "items": [
    {
      "id": "item-01",
      "content": {
        "ar": "..."
      }
    }
  ]
}

---

# 13. NUMBERED LIST

Use when the source explicitly numbers the items.

Structure:

{
  "type": "numbered-list",
  "id": "list-01",
  "items": []
}

Do not remove source numbering when it carries educational meaning.

---

# 14. DEVICE BLOCK

Medical devices are first-class educational objects.

Structure:

{
  "type": "device",
  "id": "device-01",

  "name": {
    "ar": "...",
    "en": "..."
  },

  "description": {
    "ar": "..."
  },

  "uses": [],

  "assets": [],

  "interaction": null
}

---

# 15. DEVICE USES

If the source lists uses for a device:

{
  "uses": [
    {
      "id": "use-01",
      "content": {
        "ar": "..."
      }
    }
  ]
}

Only include uses supported by the source.

Do not expand the list using general medical knowledge.

---

# 16. DEVICE ASSETS

A device may have multiple visual representations.

Possible asset roles:

- real-photo
- illustration
- technical-diagram
- interactive-svg
- animation
- gif

Example:

{
  "assets": [
    {
      "type": "image",
      "role": "real-photo",
      "src": "/assets/devices/device-01.webp",
      "alt": "..."
    }
  ]
}

---

# 17. IMAGE BLOCK

Structure:

{
  "type": "image",
  "id": "image-01",
  "src": "/assets/...",
  "alt": "...",
  "caption": {
    "ar": "..."
  }
}

Every meaningful image must have an appropriate alternative text.

---

# 18. DIAGRAM BLOCK

For a non-interactive scientific diagram:

{
  "type": "diagram",
  "id": "diagram-01",
  "src": "/assets/diagrams/diagram-01.svg",
  "alt": "..."
}

---

# 19. INTERACTIVE SVG

Interactive scientific diagrams use:

{
  "type": "interactive-diagram",
  "id": "diagram-01",

  "src": "/assets/diagrams/diagram-01.svg",

  "interaction": {
    "mode": "click",
    "targets": []
  }
}

Possible interaction modes:

- click
- hover
- drag
- guided
- animation

No interaction should exist without an educational purpose.

---

# 20. INTERACTIVE DIAGRAM TARGETS

Structure:

{
  "targets": [
    {
      "id": "component-01",
      "label": {
        "ar": "..."
      },
      "description": {
        "ar": "..."
      }
    }
  ]
}

Target information must be supported by the source content.

---

# 21. ANIMATION

Animation is represented as an educational asset.

Structure:

{
  "type": "animation",
  "id": "animation-01",
  "src": "/assets/animations/animation-01...",
  "purpose": {
    "ar": "..."
  }
}

The purpose must describe what the animation teaches.

Decorative animations should not be stored as educational animations.

---

# 22. GIF

Structure:

{
  "type": "gif",
  "id": "gif-01",
  "src": "/assets/animations/example.gif",
  "alt": "..."
}

GIF is optional.

Prefer interactive SVG/CSS/JavaScript when interaction or scalability
is required.

---

# 23. QUESTIONS

If the source page contains a question:

{
  "type": "question",
  "id": "question-01",
  "question": {
    "ar": "..."
  }
}

Do not create questions that do not exist in the source unless the
page is explicitly authorized to contain enrichment.

---

# 24. FILL-IN-THE-BLANK

If the source contains a fill-in-the-blank:

{
  "type": "fill-blank",
  "id": "blank-01",

  "content": {
    "ar": "..."
  },

  "answer": {
    "ar": "..."
  }
}

The original wording must be preserved.

---

# 25. TABLE

Structure:

{
  "type": "table",
  "id": "table-01",
  "headers": [],
  "rows": []
}

Tables must preserve the source structure.

---

# 26. NOTE

Use only for genuine supporting notes.

Structure:

{
  "type": "note",
  "id": "note-01",
  "content": {
    "ar": "..."
  }
}

Do not use notes as a place to hide newly invented scientific content.

---

# 27. REFERENCE

Use when the source explicitly references another chapter,
lesson, page, or previously learned material.

Structure:

{
  "type": "reference",
  "id": "reference-01",
  "content": {
    "ar": "..."
  }
}

---

# 28. ASSET REGISTRY

Page-level assets may be declared separately.

Structure:

{
  "assets": []
}

Each asset should contain:

- id
- type
- role
- src
- alt
- source
- license

Example:

{
  "id": "device-xray-01",
  "type": "image",
  "role": "real-photo",
  "src": "/assets/devices/xray/device-01.webp",
  "alt": "...",
  "source": "...",
  "license": "..."
}

Asset source and licensing information must not be fabricated.

If source information is unavailable, mark it explicitly rather than
inventing it.

---

# 29. CONTENT ORDER

The order of blocks inside a section is authoritative.

Example:

{
  "blocks": [
    {
      "type": "paragraph"
    },
    {
      "type": "image"
    },
    {
      "type": "paragraph"
    },
    {
      "type": "device"
    }
  ]
}

The renderer must preserve this order unless a specific presentation
rule intentionally changes only the visual layout without changing
the educational sequence.

---

# 30. OPTIONAL FIELDS

Fields are optional unless explicitly marked required.

Do not create empty objects merely to satisfy the schema.

Bad:

"interaction": {}

Good:

"interaction": null

or omit the field when not applicable.

---

# 31. SOURCE FIDELITY

The JSON is not a place for interpretation.

Do not:

- Rewrite definitions.
- Invent examples.
- Expand classifications.
- Add medical facts.
- Correct the textbook silently.
- Merge content from other pages.

If a correction is scientifically necessary, record it separately
as a QA issue.

---

# 32. ENRICHMENT

If additional educational content is explicitly authorized, it must
be distinguishable from source content.

Recommended structure:

{
  "enrichment": {
    "enabled": true,
    "content": {}
  }
}

Enrichment must never overwrite the original source content.

---

# 33. PAGE VALIDATION

Every page JSON must pass structural validation.

Required:

- Valid JSON.
- Unique IDs.
- Correct block types.
- Correct ordering.
- No missing required fields.
- No broken asset references.

---

# 34. SCIENTIFIC VALIDATION

Before a page becomes "accepted":

- Compare JSON with the original source page.
- Verify terminology.
- Verify numbers.
- Verify lists.
- Verify device names.
- Verify device uses.
- Verify figures.
- Verify questions.
- Verify blanks.

---

# 35. VISUAL VALIDATION

Verify:

- Text hierarchy.
- Image placement.
- Diagram readability.
- SVG interaction.
- Animation behavior.
- RTL.
- LTR technical terms.
- Mobile layout.
- Tablet layout.
- Desktop layout.

---

# 36. PAGE STATUS

Page status values:

draft
review
verified
accepted

Only the QA process may change a page to:

accepted

---

# 37. RECOMMENDED COMPLETE PAGE

Conceptual example:

{
  "id": "page-01",

  "source": {
    "book": "العلوم الصناعية",
    "chapter": "الفصل الأول",
    "printedPage": 9
  },

  "metadata": {
    "language": "ar",
    "direction": "rtl",
    "status": "draft",
    "goldenReference": true
  },

  "title": {
    "ar": "جهاز الأشعة السينية",
    "en": "X-ray equipment"
  },

  "sections": [
    {
      "id": "section-1-1",
      "number": "1-1",
      "title": {
        "ar": "تمهيد"
      },
      "blocks": []
    },

    {
      "id": "section-1-2",
      "number": "1-2",
      "title": {
        "ar": "أنواع واستخدامات جهاز الأشعة السينية"
      },
      "blocks": []
    }
  ],

  "assets": []
}

This example is structural only.

It is NOT the actual content of Page 09.

---

# 38. GOLDEN RULE

The schema defines HOW page content is represented.

The source textbook defines WHAT the page contains.

Never reverse these two responsibilities.

SOURCE
→ determines content

SCHEMA
→ determines structure

COMPONENTS
→ determine presentation

ASSETS
→ provide visual material

INTERACTION
→ provides educational engagement

QA
→ determines acceptance
