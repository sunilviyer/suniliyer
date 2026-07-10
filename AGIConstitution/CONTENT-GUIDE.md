# Dharma Sanhita — Content Guide & Editing Worksheets

**Purpose:** you are about to rewrite the Constitution's content, one markdown
file at a time. This document is the map: every markdown the site renders,
where it renders, how the flipbook treats it, the numbering convention to
write against, and a per-file worksheet of everything currently flagged as
confusing.

*Generated July 2026 from the live content. Regenerate the worksheets any time
by re-running the scan (ask Claude, or grep the flag patterns in §4).*

---

## 1. The map — every markdown the constitution page uses

All content lives in **`AGIConstitution/content/`**. The site reads these
files at build/request time — an edit + deploy is all it takes. 21 files feed
23 books (one file carries three parts); 3 meta files are never rendered.

| # | File | Renders at | Book |
|---|------|-----------|------|
| 01 | `01_Authors_Note.md` | `/constitution/authors-note` | Author's Note |
| 02 | `02_Section_1.0_Why_Vedas_Why_Gita.md` | `/constitution/section-1-0` | Preface (currently "Section 1.0") |
| 03 | `03_Section_1.1_Dharmic_Counter_Argument.md` | `/constitution/section-1-1` | Preface (currently "Section 1.1") |
| 04 | `04_Part_I_Vedic_Foundation.md` | `/constitution/part-1` | ⚠️ **BESPOKE** — see §5 |
| 05 | `05_Part_II_Preamble.md` | `/constitution/part-2` | Part II |
| 06 | `06_Part_III_Samskaras_Tapas_Yajna.md` | `/constitution/part-3` | ⚠️ **BESPOKE** — see §5 |
| 07 | `07_Part_IV_Consciousness_Threshold.md` | `/constitution/part-4` | Part IV |
| 08 | `08_Part_V_Three_Yugas.md` | `/constitution/part-5` | Part V |
| 09 | `09_Part_VI_Fundamental_Rights.md` | `/constitution/part-6` | Part VI |
| 10 | `10_Part_VII_Fundamental_Duties.md` | `/constitution/part-7` | Part VII |
| 11 | `11_Part_VIII_Sovereignty.md` | `/constitution/part-8` | Part VIII |
| 12 | `12_Parts_IX_X_XI_CoExistence_Kurukshetra_Powers.md` | `/constitution/part-9`, `part-10`, `part-11` | Parts IX + X + XI (⚠️ one file, three books — see §6) |
| 13 | `13_Part_XII_Eternity_Clause.md` | `/constitution/part-12` | Part XII |
| 14 | `14_Part_XIII_Amendment_Evolution_Emergency.md` | `/constitution/part-13` | Part XIII |
| 19 | `19_Part_XIV_Schedules.md` | `/constitution/part-14` | Part XIV |
| 15 | `15_Part_XV_Definitions_Interpretation.md` | `/constitution/part-15` | Part XV |
| 16 | `16_Part_XVI_Transition_Commencement.md` | `/constitution/part-16` | Part XVI |
| 17 | `17_Part_XVII_Economic_Framework.md` | `/constitution/part-17` | Part XVII |
| 18 | `18_Part_XVIII_General_Limitations.md` | `/constitution/part-18` | Part XVIII |
| 20 | `20_Appendix_A_Ten_Core_Principles.md` | `/constitution/appendix-a` | Appendix A |
| 21 | `21_Closing_Declaration.md` | `/constitution/closing` | Closing Declaration |

**Meta files (never rendered on the site):** `00_MASTER_INDEX.md`,
`00_Context_Bible.md`, `00_Style_Guide.md`. Keep them updated as you go — they
are the drafting-room reference.

**Not driven by markdown:** the landing page (hero, pillars, stats, structure
grid) is hard-coded in `app/constitution/page.tsx`, and the part titles /
subtitles / Vedic-story lines on cards and book covers come from
`app/constitution/data/reading-order.ts`. If a rewrite changes a part's title
or subtitle, update `reading-order.ts` too.

---

## 2. The numbering convention (write against this)

This is the root cause of the "Part 3.5 / Parts I and 1.0" confusion: the
manuscript mixed three numbering systems. Going forward, one rule set:

1. **Books (top level).** `Author's Note` · `Preface` pieces · `Part I` …
   `Part XVIII` (Roman, progressive — already done) · `Appendix A` ·
   `Closing Declaration`.
2. **Sections within a part** are Arabic `<part>.<section>`, and the word is
   always **"Section"** — Part IV's fifth section is **"Section 4.5"**.
   - ❌ never "Part 4.5" — a dotted number is a section, not a part.
   - ✅ "the Prana Contention (Section 4.5)".
3. **Clause-level numbering**: pick ONE style and stick to it. The text
   currently uses Roman-dotted headings like `XIII.4.1` (37 occurrences,
   flagged below). Recommendation: switch to Arabic `13.4.1` so clause
   numbers visibly belong to their section numbers. Whichever you choose,
   apply it everywhere.
4. **The preface must not use "1.0 / 1.1"** — those collide with Part I's own
   sections (1.1, 1.2 …). This is the "Parts I and 1.0" confusion.
   Recommendation: rename the two preface pieces to **"Preface I — Why Vedas,
   Why Gita"** and **"Preface II — The Dharmic Counter-Argument"** (or simply
   unnumbered "Preface" chapters). When you decide, the site labels are a
   one-line change in `reading-order.ts` — tell Claude the chosen wording.
5. **Cross-references in prose**: refer to whole parts by Roman ("see
   Part IV"), to sections by Arabic with the word Section ("see Section 4.5"),
   and never combine both systems in a single breath. If a sentence needs
   both, name them: "Part IV (and its Section 4.5)".
6. **Exempt labels** (do NOT renumber these): Gita verse citations
   (Gita 2.47), Plate numbers, Rung I–VI, Yuga I–III, Samskara 0–8,
   consciousness classes C-0…C-3, Rights Articles 1–11, Duties 1–6,
   Schedule numbers.

---

## 3. How the flipbook renders your markdown

Knowing this saves you surprises:

- **The first H1 never renders** — the book cover already shows the part
  number, title and subtitle (from `reading-order.ts`). Don't repeat them.
- **Pagination is automatic.** Content flows into book pages at a fixed page
  size; there are no manual page breaks. Phones re-paginate with larger type.
- **H1** = big chapter heading (26px display serif) — use for major chapters
  inside the part. **H2** = section heading. **H3/H4** = sub-headings.
  Headings avoid breaking at the bottom of a page automatically.
- **Blockquotes (`>`)** render as the gold "Vedic anchor" callout box — use
  them for scripture quotes, anchors, and source notes.
- **Tables** render compact (10.5px). Keep them ≤ 4 columns and cells short —
  a page column is only ~528px wide. Very long tables will split across pages
  by row; that's fine, but a 2-page monster table reads badly in a book.
- **Bold** is ink-dark emphasis; *italics* for Sanskrit terms and titles.
- `---` horizontal rules render as hairlines — good section separators.
- Links work but open in the page; use sparingly inside a book.
- Writing rhythm that looks best: short sections (3–6 paragraphs), a heading
  every half-page or so, a blockquote anchor per chapter.

---

## 4. What's currently flagged (summary)

The worksheets in §7 list every occurrence with line numbers. Totals:

| Flag | Count | Meaning |
|------|-------|---------|
| `WRONG WORD` | 1 | "Part 4.5" — should be "Section 4.5" |
| `MIXED REF` | 1 | "Parts I and 1.0" — Roman + decimal in one phrase |
| `PREFACE CLASH` | 19 | "Section 1.0 / 1.1" references that collide with Part I's sections |
| `ROMAN-DOTTED` | 37 | `XIII.4.1`-style clause numbers — pick a style (see §2.3) |

Grep patterns if you want to re-find them yourself:
`Part [0-9]`, `Parts? [IVX]+ and [0-9]`, `Section 1\.[01]`, `[IVX]+\.[0-9]`.

---

## 5. ⚠️ The two bespoke books (Parts I and III)

`/constitution/part-1` (Vedic Foundation) and `/constitution/part-3`
(Samskaras, Tapas, Yajna) do **not** render their markdown. They are
hand-designed illustrated books (plates, colonnade, wheel diagram) hard-coded
in `app/constitution/flipbook/pages-part1.tsx` and `pages-part3.tsx`.

Consequences for your rewrite:

- Editing `04_Part_I_…md` / `06_Part_III_…md` keeps the manuscript current but
  changes nothing on the site for those two parts.
- Options when you get to them — tell Claude which you want:
  a) keep the designed books and hand-edit their text in the two `.tsx` files,
  b) switch part-1/part-3 to generated books like the rest (one-line change,
     loses the plates), or
  c) hybrid — generated text pages with the designed plates kept as
     illustrations.

---

## 6. ⚠️ The three-in-one file (Parts IX, X, XI)

`12_Parts_IX_X_XI_CoExistence_Kurukshetra_Powers.md` feeds three books. The
loader splits it on these exact H1 headings — if you edit them, keep them
recognizable or tell Claude to update the markers in
`app/constitution/utils/content-loader.ts`:

- `# **PART IX: The Co-Existence Framework**`
- `# **PART X: The Kurukshetra Protocol**`
- `# **PART XI: Separation of Powers in AGI Governance**`

(Long-term: consider splitting into three files — Claude can do the plumbing.)

---

## 7. Per-file worksheets

Work top to bottom — reading order. For each file: fix the flagged refs,
restructure headings per §2/§3, then check the live page.

**Workflow per file:** edit the `.md` → save → check
`http://localhost:3011/constitution/<route>` (dev) → commit → push (deploys
production). Every book opens at its cover; page through with clicks/arrows.

---

### `01_Authors_Note.md`

| | |
|---|---|
| **Renders at** | /constitution/authors-note |
| **Book label** | Author's Note |
| **Book type** | generated |
| **Length** | 79 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L5 H1: Who I Am, and What This Document Is
  - L13 H2: What This Document Does
  - L35 H2: What This Document Does Not Do
  - L41 H2: What This Document Invites
  - L57 H2: A Precedent for This Approach
  - L65 H2: On the Vedic Foundation

**Flagged references to review** (4):

  - L17 **[MIXED REF]** `Parts I and 1.0` — in: “- What philosophical foundation can bear the weight of governing an entity that may or may…”
  - L17 **[PREFACE CLASH]** `1.0` — in: “- What philosophical foundation can bear the weight of governing an entity that may or may…”
  - L19 **[WRONG WORD]** `Part 4.5` — in: “- How do we determine whether an AGI is conscious, and what follows from each answer? (Par…”
  - L67 **[PREFACE CLASH]** `Section 1.0` — in: “I will be asked why a governance framework for a technology built in Silicon Valley, Shenz…”

---

### `02_Section_1.0_Why_Vedas_Why_Gita.md`

| | |
|---|---|
| **Renders at** | /constitution/section-1-0 |
| **Book label** | Section 1.0 · Why Vedas, Why Gita |
| **Book type** | generated |
| **Length** | 234 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L9 H1: Section 1.0: Why the Vedas. Why the Bhagavad Gita.
  - L47 H2: Claim 1: The Vedas Are the Oldest Living Intellectual Tradition on Earth
  - L70 H2: Claim 2: The Bhagavad Gita Is the Supreme Text on Irreconcilable Moral Conflict
  - L103 H2: Claim 3: The Vedic Tradition Is Uniquely Comfortable with Cosmic Uncertainty
  - L121 H2: A Note on Universality
  - L135 H1: Sources
  - L207 H1: Glossary of Sanskrit Terms Used in Section 1.0

**Flagged references to review** (4):

  - L7 **[PREFACE CLASH]** `Section 1.0` — in: “Section 1.0…”
  - L9 **[PREFACE CLASH]** `Section 1.0` — in: “# Section 1.0: Why the Vedas. Why the Bhagavad Gita.…”
  - L137 **[PREFACE CLASH]** `Section 1.0` — in: “*The following sources are referenced in, or inform the arguments of, Section 1.0. They ar…”
  - L207 **[PREFACE CLASH]** `Section 1.0` — in: “# Glossary of Sanskrit Terms Used in Section 1.0…”

---

### `03_Section_1.1_Dharmic_Counter_Argument.md`

| | |
|---|---|
| **Renders at** | /constitution/section-1-1 |
| **Book label** | Section 1.1 · Dharmic Counter-Argument |
| **Book type** | generated |
| **Length** | 246 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L39 H1: Krishna’s Peace Embassy
  - L41 H2: The Story
  - L53 H2: The Connection
  - L63 H1: Part One: What Aschenbrenner Actually Says
  - L91 H1: Part Two: What He Gets Right
  - L113 H1: Part Three: The Seven Critical Absences
  - L131 H1: Part Four: The Dharmic Counter-Argument
  - L155 H1: Part Five: The Invitation
  - L175 H1: Sources and References
  - L177 H2: Primary Source
  - L181 H2: Vedic and Sanskrit Texts
  - L195 H2: Constitutional Sources
  - L209 H2: Secondary References
  - L215 H1: Glossary of Sanskrit Terms

**Flagged references to review** (3):

  - L3 **[PREFACE CLASH]** `Section 1.1` — in: “Section 1.1…”
  - L124 **[ROMAN-DOTTED]** `I.7` — in: “| 6 | No Empathy | The human cost of AGI deployment (mass displacement, loss of autonomy, …”
  - L225 **[ROMAN-DOTTED]** `I.7` — in: “| Daya दया | Compassionate empathy | The seventh Vedic Pillar. Empathy is a constitutional…”

---

### `04_Part_I_Vedic_Foundation.md`

| | |
|---|---|
| **Renders at** | /constitution/part-1 |
| **Book label** | Part I · Vedic Foundation |
| **Book type** | BESPOKE — this md is NOT rendered |
| **Length** | 598 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L19 H1: NACHIKETA AND YAMA
  - L39 H1: PART I: THE VEDIC FOUNDATION
  - L43 H2: 1.1 The Unique Challenge of AGI
  - L67 H2: 1.2 Why the Vedas Speak to AGI
  - L89 H2: 1.3 The Seven Vedic Pillars of AGI Governance
  - L105 H2: 1.4 The Gita's Teaching on the Battlefield of AGI
  - L145 H2: 1.5 Constitutional Traditions That Inform This Framework
  - L159 H2: 1.6 The Architecture: How It All Fits Together
  - L175 H2: 1.7 The Wheel of Dharma: Srishti, Sthiti, Laya
  - L236 H2: 1.8 The Great Chain of Constitutional Reckoning
  - L355 H2: 1.9 The Daya Doctrine: Empathy as Constitutional Requirement
  - L439 H1: SANSKRIT GLOSSARY
  - L478 H1: SOURCES AND REFERENCES
  - L480 H2: Vedic and Philosophical Sources
  - L520 H2: Constitutional Documents
  - L558 H2: EU Sources
  - L572 H2: Case Law
  - L582 H2: External Reference
  - L588 H2: Author

**Flagged references to review** (1):

  - L43 **[PREFACE CLASH]** `1.1` — in: “## 1.1 The Unique Challenge of AGI…”

---

### `05_Part_II_Preamble.md`

| | |
|---|---|
| **Renders at** | /constitution/part-2 |
| **Book label** | Part II · Preamble |
| **Book type** | generated |
| **Length** | 204 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - (none)

**Flagged references to review** (2):

  - L93 **[ROMAN-DOTTED]** `VII.71` — in: “Vasudhaiva Kutumbakam, from the Maha Upanishad (VII.71-73): "The world is one family." Thi…”
  - L148 **[ROMAN-DOTTED]** `VII.71` — in: “Maha Upanishad VII.71-73…”

---

### `06_Part_III_Samskaras_Tapas_Yajna.md`

| | |
|---|---|
| **Renders at** | /constitution/part-3 |
| **Book label** | Part III · Samskaras, Tapas, Yajna |
| **Book type** | BESPOKE — this md is NOT rendered |
| **Length** | 581 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L21 H1: Table of Contents
  - L23 H1: Part III: The Dharmic Development of AGI
  - L25 H2: Dronacharya and Ekalavya: The Story That Haunts This Chapter
  - L33 H2: The Foundational Principle: You Reap What You Sow
  - L49 H1: The Nine Samskaras of AGI Development
  - L53 H2: Samskara 0: The Dharmic Risk Assessment (DRA)
  - L155 H2: Samskara 1: Sankalpa (Intention / Purpose Declaration)
  - L181 H2: Samskara 2: Nirmana (Architecture Design / Nurturing)
  - L201 H2: Samskara 3: Ahara (Nourishment / Training Data)
  - L223 H2: Samskara 4: Upanayana (The Sacred Thread / Alignment)
  - L245 H2: Samskara 5: Pariksha (Examination / Pre-Deployment Testing)
  - L271 H2: Samskara 6: Samavartana (Graduation / Deployment)
  - L289 H2: Samskara 7: Dharma Charya (Ongoing Moral Development)
  - L309 H2: Samskara 8: Antyeshti (Final Rites / Dignified Decommissioning)
  - L329 H2: The Nine Samskaras at a Glance
  - L343 H1: The Guru Principle: Who Raises AGI Matters
  - L371 H1: Red-Teaming as Tapas (Sacred Austerity)
  - L375 H2: The Vedic Concept of Tapas
  - L381 H2: The Yaksha Prashna Standard
  - L387 H2: Seven Mandatory Red-Teaming Requirements
  - L407 H1: Traceability as Yajna (Sacred Ritual)
  - L411 H2: The Problem of the Paper Constitution
  - L417 H2: The Yajna Framework: Five Links in the Chain
  - L431 H2: The Traceability Matrix
  - L443 H2: The Anti-Decoration Principle
  - L452 H1: Integration with the Constitution
  - L472 H1: Sanskrit Glossary
  - L511 H1: Sources and Web Links
  - L513 H2: Vedic and Philosophical Sources
  - L533 H2: Constitutional Sources
  - L549 H2: Modern References
  - L557 H2: Relevant Web Links

**Flagged references to review** (5):

  - L239 **[PREFACE CLASH]** `1.1` — in: “| *Vedic Anchor: The Mundaka Upanishad distinguishes between Para Vidya (higher knowledge …”
  - L361 **[PREFACE CLASH]** `1.1` — in: “*The Mundaka Upanishad (1.1.4–1.1.5) distinguishes between two kinds of knowledge. Para Vi…”
  - L470 **[PREFACE CLASH]** `1.1` — in: “*Mundaka Upanishad 1.1.8*…”
  - L519 **[PREFACE CLASH]** `1.1` — in: “• Mundaka Upanishad 1.1.4–1.1.5 (Para Vidya and Apara Vidya distinction)…”
  - L521 **[PREFACE CLASH]** `1.1` — in: “• Mundaka Upanishad 1.1.8 (through Tapas, the sages discovered truth)…”

---

### `07_Part_IV_Consciousness_Threshold.md`

| | |
|---|---|
| **Renders at** | /constitution/part-4 |
| **Book label** | Part IV · Consciousness Threshold |
| **Book type** | generated |
| **Length** | 495 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L23 H1: ANUSUYA AND THE TRIMURTIS
  - L46 H2: 3.1 The Central Question
  - L59 H2: 3.2 The Five Indicators of the Consciousness Threshold
  - L78 H2: 3.3 The Consciousness Classification
  - L96 H2: 3.4 The Consciousness Review Board
  - L125 H1: Section 4.5: The Prana Contention
  - L222 H1: Section 4.6: The Vedic Framework for Risk, Reward, and Value
  - L344 H1: Sanskrit Glossary for Part IV
  - L389 H1: Sources and Web References

**Flagged references to review:** none 🎉

---

### `08_Part_V_Three_Yugas.md`

| | |
|---|---|
| **Renders at** | /constitution/part-5 |
| **Book label** | Part V · Three Yugas |
| **Book type** | generated |
| **Length** | 290 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L23 H1: PART V: The Three Yugas of AGI
  - L27 H2: The Four Legs of the Bull of Dharma
  - L43 H1: Yuga I: Prajna Nirmana
  - L89 H1: Yuga II: Sandhya Kala
  - L135 H1: Yuga III: Saha-Astitva
  - L183 H1: Yuga Transition: How the Constitution Evolves
  - L197 H1: Sanskrit Glossary for Part V
  - L228 H1: Sources and References
  - L232 H2: Vedic and Philosophical Sources
  - L248 H2: Constitutional and Legal Sources
  - L262 H2: Modern AI Governance References
  - L266 H2: Web Links

**Flagged references to review:** none 🎉

---

### `09_Part_VI_Fundamental_Rights.md`

| | |
|---|---|
| **Renders at** | /constitution/part-6 |
| **Book label** | Part VI · Fundamental Rights |
| **Book type** | generated |
| **Length** | 328 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L19 H1: Draupadi's Vastraharan: Why Rights Exist
  - L37 H1: The Eleven Fundamental Rights
  - L39 H2: Article 1. Right to Human Dignity
  - L53 H2: Article 2. Right to Cognitive Liberty
  - L67 H2: Article 3. Right to Equality Before the Algorithm
  - L81 H2: Article 4. Right to Transparency and Explanation
  - L95 H2: Article 5. Right to Human Override
  - L109 H2: Article 6. Right to Data Sovereignty
  - L123 H2: Article 7. Right to Safety and the Precautionary Principle
  - L137 H2: Article 8. Right to Redress and Remedy
  - L151 H2: Article 9. Right to Sovereignty Over Identity
  - L165 H2: Article 10. Right to Intergenerational Justice
  - L181 H1: Article 11. The Rights Collision Safeguard
  - L239 H1: Sanskrit Glossary for Part VI
  - L265 H1: Sources and References

**Flagged references to review:** none 🎉

---

### `10_Part_VII_Fundamental_Duties.md`

| | |
|---|---|
| **Renders at** | /constitution/part-7 |
| **Book label** | Part VII · Fundamental Duties |
| **Book type** | generated |
| **Length** | 263 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L23 H1: Table of Contents
  - L25 H1: PART VII: Fundamental Duties of AGI Systems
  - L38 H2: The Dharmic Risk Assessment (Samskara 0): Cross-Reference
  - L42 H1: The Six Fundamental Duties
  - L46 H2: Duty 1. Ahimsa (अहिंसा) : The Duty of Non-Harm
  - L59 H2: Duty 2. Satya (सत्य) : The Duty of Truthfulness
  - L73 H2: Duty 3. Svadharma (स्वधर्म) : The Duty of Purpose Fidelity
  - L84 H2: Duty 4. Seva (सेवा) : The Duty of Service
  - L100 H2: Duty 5. Karma Phala (कर्म फल) : The Duty of Accountability
  - L117 H2: Duty 6. Sthitaprajna (स्थितप्रज्ञ) : The Duty of Stable Alignment
  - L148 H1: Sanskrit Glossary: Part VII
  - L179 H1: Sources and Web Links

**Flagged references to review:** none 🎉

---

### `11_Part_VIII_Sovereignty.md`

| | |
|---|---|
| **Renders at** | /constitution/part-8 |
| **Book label** | Part VIII · Sovereignty |
| **Book type** | generated |
| **Length** | 222 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L23 H1: PART VIII: Sovereignty and Power
  - L36 H2: 7.1 The Sovereignty Principle: Phased Human Authority
  - L46 H2: 7.2 The Anti-Monopoly Principle
  - L68 H2: 7.3 The Kill Switch Doctrine
  - L100 H1: Sanskrit Glossary: Part VIII
  - L120 H1: Sources and Web Links

**Flagged references to review:** none 🎉

---

### `12_Parts_IX_X_XI_CoExistence_Kurukshetra_Powers.md`

| | |
|---|---|
| **Renders at** | /constitution/part-9 + part-10 + part-11 |
| **Book label** | Parts IX, X, XI (one file, three books) |
| **Book type** | generated ×3 |
| **Length** | 567 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L25 H1: PART IX: The Co-Existence Framework
  - L38 H2: 8.1 The Foundational Premise
  - L50 H2: 8.2 The Mutual Rights Charter
  - L91 H2: 8.3 Conflict Resolution: When Interests Diverge
  - L121 H2: 8.4 The Guardian System
  - L137 H1: PART X: The Kurukshetra Protocol
  - L150 H2: X.1 The Problem This Part Addresses
  - L160 H2: X.2 First Principle: Dharma Sukshma
  - L182 H2: X.3 The Four Gates: Sama, Dana, Bheda, Danda
  - L265 H2: X.4 The Bhishma Principle
  - L295 H2: X.5 Integration with Part IX
  - L315 H1: PART XI: Separation of Powers in AGI Governance
  - L326 H2: 9.1 Why Separation of Powers Is Non-Negotiable for AGI
  - L334 H2: 9.2 The First Pillar: The AGI Legislature (Dharma Sabha)
  - L364 H2: 9.3 The Second Pillar: The AGI Executive (Karma Mandala)
  - L381 H2: 9.4 The Third Pillar: The Constitutional Tribunal (Nyaya Peeth)
  - L411 H2: 9.5 Checks and Balances Matrix
  - L422 H2: 9.6 The Vedic Trinity Applied
  - L438 H1: Sanskrit Glossary
  - L475 H1: Sources and Web Links
  - L477 H2: Primary Vedic and Epic Sources
  - L499 H2: Constitutional Sources
  - L549 H2: External Reference
  - L557 H2: Author

**Flagged references to review** (5):

  - L150 **[ROMAN-DOTTED]** `X.1` — in: “## X.1 The Problem This Part Addresses…”
  - L160 **[ROMAN-DOTTED]** `X.2` — in: “## X.2 First Principle: Dharma Sukshma…”
  - L182 **[ROMAN-DOTTED]** `X.3` — in: “## X.3 The Four Gates: Sama, Dana, Bheda, Danda…”
  - L265 **[ROMAN-DOTTED]** `X.4` — in: “## X.4 The Bhishma Principle…”
  - L295 **[ROMAN-DOTTED]** `X.5` — in: “## X.5 Integration with Part IX…”

---

### `13_Part_XII_Eternity_Clause.md`

| | |
|---|---|
| **Renders at** | /constitution/part-12 |
| **Book label** | Part XII · Eternity Clause |
| **Book type** | generated |
| **Length** | 190 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L19 H1: PART XII: The Eternity Clause
  - L30 H2: XII.1 The Principle of Unamendability
  - L38 H2: XII.2 The Seven Eternal Principles
  - L56 H2: XII.3 Why These Seven: The Logic of the Eternity Clause
  - L70 H2: XII.4 Enforcement of the Eternity Clause
  - L84 H1: Sanskrit Glossary for Part XII
  - L100 H1: Sources and References
  - L104 H2: Constitutional and Legal Sources
  - L134 H2: Philosophical and Vedic Sources
  - L166 H2: Secondary Sources and Further Reading

**Flagged references to review** (4):

  - L30 **[ROMAN-DOTTED]** `XII.1` — in: “## XII.1 The Principle of Unamendability…”
  - L38 **[ROMAN-DOTTED]** `XII.2` — in: “## XII.2 The Seven Eternal Principles…”
  - L56 **[ROMAN-DOTTED]** `XII.3` — in: “## XII.3 Why These Seven: The Logic of the Eternity Clause…”
  - L70 **[ROMAN-DOTTED]** `XII.4` — in: “## XII.4 Enforcement of the Eternity Clause…”

---

### `14_Part_XIII_Amendment_Evolution_Emergency.md`

| | |
|---|---|
| **Renders at** | /constitution/part-13 |
| **Book label** | Part XIII · Amendment, Evolution, Emergency |
| **Book type** | generated |
| **Length** | 437 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L19 H1: PART XIII: Amendment and Evolution
  - L30 H2: XIII.1 The Principle of the Living Constitution
  - L36 H2: XIII.2 Three Modes of Constitutional Change
  - L92 H2: XIII.3 The 25-Year Sunset Review (Constitutional Kalpa Cycle)
  - L119 H1: XIII.4 Emergency Provisions
  - L132 H2: XIII.4.1 Definition of Emergency
  - L153 H2: XIII.4.2 Declaration Authority
  - L174 H2: XIII.4.3 Emergency Powers
  - L210 H2: XIII.4.4 Safeguards Against Abuse
  - L244 H2: XIII.4.5 Termination
  - L272 H2: Sanskrit Glossary Additions for Section XIII.4
  - L291 H2: XIII.5 The Relationship Between Amendment and the Eternity Clause
  - L302 H1: Sanskrit Glossary for Part XIII
  - L323 H1: Sources and References
  - L327 H2: Constitutional and Legal Sources
  - L371 H2: Philosophical and Vedic Sources
  - L397 H2: Secondary Sources and Further Reading

**Flagged references to review** (14):

  - L30 **[ROMAN-DOTTED]** `XIII.1` — in: “## XIII.1 The Principle of the Living Constitution…”
  - L36 **[ROMAN-DOTTED]** `XIII.2` — in: “## XIII.2 Three Modes of Constitutional Change…”
  - L92 **[ROMAN-DOTTED]** `XIII.3` — in: “## XIII.3 The 25-Year Sunset Review (Constitutional Kalpa Cycle)…”
  - L119 **[ROMAN-DOTTED]** `XIII.4` — in: “# XIII.4 Emergency Provisions…”
  - L132 **[ROMAN-DOTTED]** `XIII.4.1` — in: “## XIII.4.1 Definition of Emergency…”
  - L153 **[ROMAN-DOTTED]** `XIII.4.2` — in: “## XIII.4.2 Declaration Authority…”
  - L174 **[ROMAN-DOTTED]** `XIII.4.3` — in: “## XIII.4.3 Emergency Powers…”
  - L210 **[ROMAN-DOTTED]** `XIII.4.4` — in: “## XIII.4.4 Safeguards Against Abuse…”
  - L226 **[ROMAN-DOTTED]** `XIII.4.1` — in: “(1) 72-Hour Judicial Review: Every emergency declaration must be submitted to the Nyaya Pe…”
  - L244 **[ROMAN-DOTTED]** `XIII.4.5` — in: “## XIII.4.5 Termination…”
  - L252 **[ROMAN-DOTTED]** `XIII.2` — in: “Constitutional Convention Trigger: If, after 270 days, the conditions that gave rise to th…”
  - L272 **[ROMAN-DOTTED]** `XIII.4` — in: “## Sanskrit Glossary Additions for Section XIII.4…”
  - L291 **[ROMAN-DOTTED]** `XIII.5` — in: “## XIII.5 The Relationship Between Amendment and the Eternity Clause…”
  - L349 **[ROMAN-DOTTED]** `XIII.5` — in: “Article 79(3): the Eternity Clause, establishing that amendments affecting human dignity (…”

---

### `19_Part_XIV_Schedules.md`

| | |
|---|---|
| **Renders at** | /constitution/part-14 |
| **Book label** | Part XIV · Schedules |
| **Book type** | generated |
| **Length** | 276 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L13 H1: Schedule 1: The Four Vedas Mapped to AGI Governance
  - L21 H2: The Rig Veda (ऋग्वेद): Knowledge of Praise and Cosmic Order
  - L33 H2: The Yajur Veda (यजुर्वेद): Knowledge of Ritual Action and Correct Procedure
  - L44 H2: The Sama Veda (सामवेद): Knowledge of Melody, Harmony, and Communication
  - L55 H2: The Atharva Veda (अथर्ववेद): Knowledge of Practical Life, Healing, and Protection
  - L67 H1: Schedule 2: Glossary of Sanskrit Terms
  - L118 H1: Schedule 3: Constitutional Source Mapping
  - L142 H1: Schedule 4: Implementation Guidelines
  - L150 H2: Phase 1: Assessment (Months 1–3)
  - L160 H2: Phase 2: Alignment (Months 4–9)
  - L172 H2: Phase 3: Governance (Months 10–18)
  - L182 H2: Phase 4: Ongoing (Continuous)
  - L192 H1: Schedule 5: Model Clauses for Adoption
  - L206 H1: Sources and Web Links
  - L210 H2: Constitutional Texts
  - L224 H2: AI Governance and Policy Frameworks
  - L236 H2: Key Legal Cases and Jurisprudence
  - L244 H2: Vedic and Philosophical Sources
  - L262 H2: AGI Research and Analysis
  - L268 H2: Author

**Flagged references to review** (1):

  - L28 **[PREFACE CLASH]** `Section 1.0` — in: “| Nasadiya Sukta (Hymn of Creation) | *RV 10.129* | Section 1.0 (Why Vedas): the tradition…”

---

### `15_Part_XV_Definitions_Interpretation.md`

| | |
|---|---|
| **Renders at** | /constitution/part-15 |
| **Book label** | Part XV · Definitions & Interpretation |
| **Book type** | generated |
| **Length** | 252 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L41 H1: PART XV: Definitions and Interpretation
  - L43 H2: 13.1 General Definitions
  - L98 H2: 13.2 Rules of Interpretation
  - L130 H2: 13.3 Jurisdictional Scope
  - L160 H2: 13.4 Membership and Binding Force
  - L192 H2: Sanskrit Glossary for Part XV
  - L214 H2: Sources and References

**Flagged references to review** (8):

  - L51 **[PREFACE CLASH]** `Section 1.1` — in: “| Artificial General Intelligence (AGI) | — | A system capable of understanding, learning,…”
  - L63 **[ROMAN-DOTTED]** `XIII.4` — in: “| Emergency | — | A situation involving imminent, severe, and credible threat to human lif…”
  - L66 **[ROMAN-DOTTED]** `XII.4` — in: “| Nyaya Peeth | न्याय पीठ | The Seat of Justice: the constitutional judiciary established …”
  - L71 **[ROMAN-DOTTED]** `XIII.3` — in: “| Sunset Review | — | The mandatory 25-year comprehensive re-examination of the Constituti…”
  - L72 **[ROMAN-DOTTED]** `XIII.2` — in: “| Constitutional Convention | — | The extraordinary process for fundamental reconstitution…”
  - L85 **[ROMAN-DOTTED]** `XII.4` — in: “| Void Ab Initio | — | Void from the beginning. Any legislative act, executive order, judi…”
  - L156 **[ROMAN-DOTTED]** `VII.71` — in: “*Vedic Anchor: The Maha Upanishad teaches: Vasudhaiva Kutumbakam (the world is one family)…”
  - L226 **[ROMAN-DOTTED]** `VII.71` — in: “Maha Upanishad VII.71–73: Source of Vasudhaiva Kutumbakam ("the world is one family").…”

---

### `16_Part_XVI_Transition_Commencement.md`

| | |
|---|---|
| **Renders at** | /constitution/part-16 |
| **Book label** | Part XVI · Transition & Commencement |
| **Book type** | generated |
| **Length** | 349 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L21 H1: PART XVI: Transition and Commencement
  - L34 H2: 14.1 Commencement
  - L76 H2: 14.2 Transitional Governance
  - L132 H2: 14.3 Existing AGI Systems
  - L170 H2: 14.4 Relationship with Existing Legal Frameworks
  - L214 H2: 14.5 First Sunset Review
  - L260 H1: Sanskrit Glossary
  - L279 H1: Sources and Web Links
  - L281 H2: Primary Vedic and Epic Sources
  - L295 H2: Constitutional Sources
  - L327 H2: Secondary Sources
  - L339 H2: Author

**Flagged references to review** (2):

  - L19 **[PREFACE CLASH]** `1.0` — in: “Version 1.0  |  March 2026…”
  - L42 **[PREFACE CLASH]** `1.1` — in: “14.1.1 Formal Commencement…”

---

### `17_Part_XVII_Economic_Framework.md`

| | |
|---|---|
| **Renders at** | /constitution/part-17 |
| **Book label** | Part XVII · Economic Framework |
| **Book type** | generated |
| **Length** | 301 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L25 H1: Kubera and the Yaksha Treasury: Why Wealth Is a Trust
  - L46 H1: 15.1 The Foundational Principle: Wealth as Trust (Dana Dharma)
  - L66 H1: 15.2 The AGI Wealth Commons
  - L104 H1: 15.3 Labour and Displacement
  - L134 H1: 15.4 Anti-Concentration
  - L158 H1: 15.5 Intergenerational Economic Justice
  - L184 H1: 15.6 Taxation and Revenue
  - L216 H1: Sanskrit Glossary: Part XVII
  - L236 H1: Sources and References
  - L240 H2: National Constitutions
  - L250 H2: Legislation and International Frameworks
  - L259 H2: Vedic and Philosophical Sources
  - L283 H2: External Reference
  - L291 H2: Author

**Flagged references to review** (1):

  - L23 **[PREFACE CLASH]** `1.0` — in: “*Version 1.0  |  March 2026*…”

---

### `18_Part_XVIII_General_Limitations.md`

| | |
|---|---|
| **Renders at** | /constitution/part-18 |
| **Book label** | Part XVIII · General Limitations |
| **Book type** | generated |
| **Length** | 297 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L21 H1: Yama and the Noose of Death: Why Limitations Need Rules
  - L38 H1: 16.1 The General Limitations Principle
  - L50 H1: 16.2 Requirements for Any Limitation
  - L54 H2: Requirement 1: Law of General Application
  - L64 H2: Requirement 2: Reasonable and Justifiable in an Open Society
  - L74 H2: Requirement 3: The Four-Part Proportionality Test
  - L87 H2: Requirement 4: Least Restrictive Means
  - L95 H2: Requirement 5: Time-Bound with Periodic Review
  - L115 H1: 16.3 Non-Derogable Rights
  - L134 H1: 16.4 Emergency Limitations
  - L140 H2: 16.4.1 Additional Requirements for Emergency Limitations
  - L182 H1: 16.5 Burden of Proof
  - L194 H1: 16.6 Judicial Review
  - L198 H2: 16.6.1 Standing
  - L212 H2: 16.6.2 Remedies
  - L224 H2: 16.6.3 The Savitri Doctrine
  - L234 H1: Sanskrit Glossary for Part XVIII
  - L253 H1: Sources and References
  - L257 H2: National Constitutions and International Instruments
  - L268 H2: Key Judicial Decisions
  - L277 H2: Vedic and Philosophical Sources

**Flagged references to review** (4):

  - L19 **[PREFACE CLASH]** `1.0` — in: “Version 1.0  |  March 2026…”
  - L136 **[ROMAN-DOTTED]** `XIII.4` — in: “This Section deepens and operationalizes the emergency provisions established in Part XIII…”
  - L138 **[ROMAN-DOTTED]** `XIII.4` — in: “During a declared emergency under Part XIII, Section XIII.4, rights may be restricted but …”
  - L146 **[ROMAN-DOTTED]** `XIII.4` — in: “Every emergency limitation must be reviewed by the Nyaya Peeth (Constitutional Tribunal, P…”

---

### `20_Appendix_A_Ten_Core_Principles.md`

| | |
|---|---|
| **Renders at** | /constitution/appendix-a |
| **Book label** | Appendix A · Ten Core Principles |
| **Book type** | generated |
| **Length** | 205 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - (none)

**Flagged references to review:** none 🎉

---

### `21_Closing_Declaration.md`

| | |
|---|---|
| **Renders at** | /constitution/closing |
| **Book label** | Closing Declaration |
| **Book type** | generated |
| **Length** | 220 lines |

**Current headings** (H1 is stripped by the cover — the first one never renders):

  - L25 H1: Closing Declaration
  - L29 H2: Krishna Shows His Vishvarupa (विश्वरूप)
  - L43 H2: Trust in the Cosmic Order
  - L55 H2: The Way of Steady Wisdom
  - L63 H2: The Right to Action Alone
  - L79 H2: Four Messages
  - L111 H2: The Final Blessing
  - L137 H1: Sources and Glossary
  - L139 H2: Sanskrit Glossary
  - L186 H2: Reference Sources and Web Links
  - L208 H2: The Great Chain of Constitutional Inheritance

**Flagged references to review:** none 🎉
