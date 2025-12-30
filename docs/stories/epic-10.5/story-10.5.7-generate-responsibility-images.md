# Story 10.5.7: Generate Responsibility Path Images (55 images)

**Epic**: 10.5 - Responsibility Content Creation
**Story ID**: 10.5.7
**Priority**: P1 (High)
**Estimated Effort**: 40-50 hours (5-6 days)
**Dependencies**: Story 10.5.6 (Knowledge Graph Update)
**Assigned To**: TBD

---

## Story Description

Generate 55 concept card images for newly created Responsibility articles (resp-21 through resp-75). These images use the Dry Sage earth-tone palette and represent legal, regulatory, and governance concepts across global jurisdictions and implementation frameworks.

---

## User Story

**As a** content creator implementing the Responsibility path
**I want** concept card images for all 55 new responsibility articles
**So that** the learning path has consistent visual branding and helps users navigate complex legal/compliance topics

---

## Acceptance Criteria

- [ ] All 55 new Responsibility images created (resp-21 through resp-75)
- [ ] All images use Dry Sage (#a4ac86) color scheme as primary color
- [ ] All images are 1920x1280 resolution (3:2 aspect ratio)
- [ ] All images saved as JPG (quality 85) and WebP formats
- [ ] All images follow naming convention (article-slug.jpg/webp)
- [ ] All images placed in `/public/images/responsibility/` directory
- [ ] All images under 200KB (WebP format)
- [ ] Visual consistency with existing 20 responsibility images
- [ ] Professional, legal, authoritative aesthetic maintained
- [ ] All images validated for color accuracy and resolution

---

## Prompt Generation Context

Since the articles don't exist yet, you'll need to generate prompts based on the article topics defined in Epic 10.5. Follow this systematic approach:

### Color Palette
**Primary**: Dry Sage `#a4ac86`
**Secondary**: Khaki Beige `#c2c5aa`
**Tertiary**: Fern `#656d4a`
**Accent**: Charcoal `#333d29` (for text/icons)

### Visual Theme Guidelines
**Style**: Minimalist, professional, geometric abstraction
**Aesthetic**: Legal, authoritative, governance-focused
**Tone**: Serious, trustworthy, compliance-oriented

---

## Image Categories & Prompt Templates

### Category 1: Global AI Regulations (resp-21 to resp-35) - 15 images

**Visual Themes**:
- National/regional regulatory frameworks
- International compliance symbols
- Legal document aesthetics
- Geographic/map elements (subtle)
- Regulatory authority badges

**Prompt Template**:
```
Minimalist professional illustration of [COUNTRY/REGION] AI regulation framework. [NATIONAL SYMBOL - subtle, no literal flags]. Central legal document with [REGULATION NAME/ACRONYM] visible. Regulatory authority/government structure shown via geometric organizational diagram. Compliance pathway or framework pillars. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. [COUNTRY]-specific architectural or cultural element (subtle, abstract). Professional governance aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Examples**:

**resp-21: Australia AI Ethics Framework**
```
Minimalist professional illustration of Australia AI ethics framework. Australian continent outline (subtle geometric shape). Eight principles shown as connected nodes forming circular framework. Voluntary guidance shown as supportive hand rather than enforcement hammer. CSIRO/government building icon. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Southern Cross constellation subtle background element. Professional, collaborative governance aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**resp-22: Canada AIDA (Artificial Intelligence and Data Act)**
```
Minimalist professional illustration of Canada AIDA regulation. Canadian parliament building (Peace Tower silhouette). AIDA legislative framework shown as tiered risk pyramid with high-risk systems highlighted. Maple leaf subtle geometric element. Federal/provincial cooperation shown via interconnected circles. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Bilingual aspect shown via dual text elements (EN/FR). Professional legislative aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**resp-23: Japan AI Governance Framework**
```
Minimalist professional illustration of Japan AI governance. Japanese government building (Diet) subtle silhouette. Soft law approach shown as flexible, adaptable framework pattern (not rigid grid). Industry self-regulation symbols. Mount Fuji subtle geometric outline or torii gate abstract shape. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Harmony and balance aesthetic (wa concept). Professional, consensus-based governance visual. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Continue this pattern for**:
- resp-24: South Korea AI Ethics Standards
- resp-25: India AI Strategy and Governance
- resp-26: ASEAN AI Governance Framework (regional, multi-country cooperation)
- resp-27: African Union AI Continental Strategy
- resp-28: Mexico AI Regulation Landscape
- resp-29: UAE National AI Strategy
- resp-30: Israel AI Policy Framework
- resp-31: New Zealand Algorithm Charter
- resp-32: Switzerland AI Regulation Approach
- resp-33: Nordic Countries AI Cooperation (multi-country)
- resp-34: Latin America AI Regulation Overview (regional)
- resp-35: Middle East AI Governance Models (regional)

---

### Category 2: Sector-Specific AI Regulations (resp-36 to resp-45) - 10 images

**Visual Themes**:
- Industry-specific symbols (healthcare cross, financial charts, etc.)
- Sector compliance frameworks
- Regulatory agency logos/badges
- Industry workflows with AI integration points
- Sector-specific risk indicators

**Prompt Template**:
```
Minimalist professional illustration of AI regulation in [SECTOR]. [INDUSTRY SYMBOL] central element. [REGULATORY AGENCY] authority structure shown. AI system integrated into [SECTOR WORKFLOW]. Compliance requirements shown as checklist or framework diagram. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. [SECTOR]-specific visual elements (medical symbols, financial charts, educational icons, etc.). Professional sector compliance aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Examples**:

**resp-36: Healthcare AI Regulations (FDA, CE Mark, HIPAA)**
```
Minimalist professional illustration of healthcare AI regulations. Medical cross symbol with AI circuit pattern overlay. FDA approval pathway shown as staged gate process. CE marking badge. HIPAA privacy shield protecting patient data. Clinical validation workflow diagram. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Medical device classification shown as tiered structure. Professional healthcare compliance aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**resp-37: Financial Services AI Compliance (SEC, FINRA, Basel III)**
```
Minimalist professional illustration of financial AI compliance. Stock market graph with AI pattern overlay. SEC/FINRA regulatory badges. Basel III capital requirements shown as tiered structure. Algorithmic trading oversight shown via monitoring dashboard. Risk management framework. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Financial institution building icon. Professional financial compliance aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**resp-38: Insurance AI Regulations (Actuarial Fairness, Rate Setting)**
```
Minimalist professional illustration of insurance AI regulation. Actuarial fairness scales balancing risk factors. Rate-setting algorithms under regulatory scrutiny (magnifying glass). Prohibited discrimination factors shown with prohibition symbols. State insurance commission oversight structure. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Insurance policy document visual. Professional insurance compliance aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Continue this pattern for**:
- resp-39: Education AI Ethics (FERPA, Student Privacy)
- resp-40: Hiring and HR AI Compliance (EEOC, Title VII, NYC Local Law 144)
- resp-41: Criminal Justice AI Regulations (Algorithmic Risk Assessments)
- resp-42: Social Media AI Governance (Platform Liability, Content Moderation)
- resp-43: Autonomous Vehicles Regulation (NHTSA, DOT)
- resp-44: Defense and National Security AI Governance
- resp-45: Energy and Infrastructure AI Regulation

---

### Category 3: AI Governance Frameworks (resp-46 to resp-55) - 10 images

**Visual Themes**:
- Framework diagrams (pillars, cycles, matrices)
- Standards organization logos (NIST, ISO, IEEE)
- Governance structures and hierarchies
- Implementation pathways
- International cooperation symbols

**Prompt Template**:
```
Minimalist professional illustration of [FRAMEWORK NAME]. [ORGANIZATION LOGO/BADGE] prominent element. [NUMBER] framework pillars/principles shown as geometric columns or connected nodes. Implementation pathway shown as staged process. Organizational adoption structure. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Standards documentation visual. Professional framework implementation aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Examples**:

**resp-46: NIST AI Risk Management Framework (AI RMF) Deep Dive**
```
Minimalist professional illustration of NIST AI Risk Management Framework. NIST logo/badge central element. Four core functions shown as interconnected pillars: GOVERN, MAP, MEASURE, MANAGE. Risk assessment matrix showing probability vs impact. Voluntary framework shown with flexible adoption pathways. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. US federal building subtle background. Professional risk management aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**resp-47: ISO/IEC AI Standards (ISO 42001, ISO 23894)**
```
Minimalist professional illustration of ISO AI standards. ISO/IEC logo prominent. ISO 42001 AI Management System shown as circular PDCA cycle (Plan-Do-Check-Act). ISO 23894 risk management integration. Certification path shown as stepped progression. International adoption shown via global connection nodes. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Standards compliance badge. Professional international standards aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**resp-48: IEEE Ethically Aligned Design Standards**
```
Minimalist professional illustration of IEEE ethical AI design. IEEE logo central element. Eight pillars of ethically aligned design shown as geometric columns supporting AI system. Human rights foundation shown at base. Technical standards integration. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Engineering ethics framework diagram. Professional technical standards aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Continue this pattern for**:
- resp-49: World Economic Forum AI Governance Alliance
- resp-50: Partnership on AI Best Practices
- resp-51: Montreal Declaration for Responsible AI
- resp-52: Asilomar AI Principles in Practice
- resp-53: Toronto Declaration on Algorithmic Discrimination
- resp-54: Beijing AI Principles Implementation
- resp-55: Corporate AI Governance Models (Board Oversight, Risk Committees)

---

### Category 4: AI Compliance Implementation (resp-56 to resp-65) - 10 images

**Visual Themes**:
- Templates and checklists
- Process workflows and flowcharts
- Audit and assessment symbols
- Documentation stacks
- Implementation roadmaps

**Prompt Template**:
```
Minimalist professional illustration of [COMPLIANCE PRACTICE]. [TEMPLATE/CHECKLIST] central visual element. Implementation workflow shown as staged process with checkpoints. Audit or assessment shown via verification symbols. Documentation requirements shown as organized file system. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Professional implementation guidance aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Examples**:

**resp-56: AI Impact Assessment Templates and Best Practices**
```
Minimalist professional illustration of AI impact assessment. Assessment template shown as structured form with evaluation criteria. DPIA (Data Protection Impact Assessment) framework. Impact matrix showing severity vs likelihood. Stakeholder consultation process shown via connected circles. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Assessment workflow diagram. Professional assessment methodology aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**resp-57: Algorithmic Transparency Documentation Requirements**
```
Minimalist professional illustration of algorithmic transparency documentation. Model card template central element. System card documentation structure. Transparency layers shown as stacked transparent sheets revealing information. Documentation completeness checklist. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Open documentation symbol (open book or revealed system). Professional documentation standards aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**resp-58: AI Vendor Risk Management and Due Diligence**
```
Minimalist professional illustration of AI vendor risk management. Vendor evaluation scorecard central element. Due diligence checklist with critical assessment criteria. Third-party risk shown as external connection requiring validation. Contract requirements and SLA monitoring. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Risk assessment matrix. Professional procurement governance aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Continue this pattern for**:
- resp-59: Third-Party AI Audit Requirements
- resp-60: AI Incident Response and Breach Notification
- resp-61: Model Cards and System Cards Documentation
- resp-62: AI Training Data Compliance (Copyright, Licensing, Attribution)
- resp-63: Explainability Requirements by Jurisdiction
- resp-64: AI Testing and Validation for Compliance
- resp-65: Cross-Border AI Data Transfers and Compliance

---

### Category 5: Responsible AI Practice (resp-66 to resp-75) - 10 images

**Visual Themes**:
- Best practice diagrams
- Ethical frameworks
- Responsible deployment patterns
- Stakeholder engagement
- Continuous improvement cycles

**Prompt Template**:
```
Minimalist professional illustration of [RESPONSIBLE AI PRACTICE]. [BEST PRACTICE CONCEPT] shown via clear visual metaphor. Ethical considerations integrated throughout process. Stakeholder involvement shown via collaborative elements. Continuous improvement cycle. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Professional responsible AI implementation aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Examples**:

**resp-66: Algorithmic Fairness Testing Methodologies**
```
Minimalist professional illustration of algorithmic fairness testing. Multiple fairness metrics shown as different measurement scales (demographic parity, equalized odds, predictive parity). Testing workflow from training data through model output. Bias detection shown via comparative analysis charts. Mitigation feedback loop. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Statistical fairness visual. Professional fairness engineering aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**resp-67: AI Bias Mitigation Strategies in Production**
```
Minimalist professional illustration of production AI bias mitigation. Pre-processing, in-processing, post-processing mitigation stages shown as three-stage pipeline. Monitoring dashboard tracking bias metrics. Feedback loop from production performance to model updates. Human review integration points. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Production monitoring aesthetic. Professional operational bias management visual. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**resp-68: Human Oversight Requirements for High-Risk AI**
```
Minimalist professional illustration of human oversight in AI systems. Human-in-the-loop decision points shown in AI workflow. Automation levels spectrum from full automation to full human control. Override capabilities and escalation paths. Meaningful human review shown via thoughtful human figure reviewing AI outputs. Dry sage green (#a4ac86) and khaki beige (#c2c5aa) palette. Human-AI collaboration aesthetic. Professional oversight governance visual. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Continue this pattern for**:
- resp-69: Stakeholder Engagement in AI Development
- resp-70: AI Safety Engineering Best Practices
- resp-71: Responsible AI Procurement Guidelines
- resp-72: AI Ethics Committees: Structure and Function
- resp-73: AI Transparency Reporting Frameworks
- resp-74: Responsible Generative AI Deployment
- resp-75: AI Sustainability and Environmental Impact

---

## Implementation Process

### 1. Extract Article Metadata (1 hour)

After Story 10.5.6 completes, extract metadata for all 55 new articles:

```bash
# Run knowledge graph extraction to get article titles and slugs
node scripts/extract-article-metadata.js --path=responsibility --ids=resp-21:resp-75
```

**Output**: JSON file with article metadata (id, title, slug, category)

---

### 2. Generate Image Prompts (4-6 hours)

For each of the 55 articles:

1. **Review Article Title and Category**
   - Identify which category (Global, Sector, Framework, Implementation, Practice)
   - Apply appropriate visual theme and prompt template

2. **Customize Prompt Template**
   - Replace placeholders with article-specific elements
   - Add jurisdiction/sector/framework-specific visual elements
   - Ensure Dry Sage color palette specified
   - Include cultural/regional elements where appropriate (subtle, abstract)

3. **Create Prompt Document**
   - Save all 55 prompts to `/docs/story-10.5.7-responsibility-image-prompts.md`
   - Organize by category
   - Include visual element descriptions for each

**Template Structure**:
```markdown
### resp-[ID]: [Article Title]

**Concept**: [Brief description]

**Prompt**:
```
[Full Midjourney/DALL-E prompt]
```

**Visual Elements**:
- [Element 1]
- [Element 2]
- [Element 3]

**Category-Specific Notes**:
- [Any special considerations]
```

---

### 3. Generate Images (25-30 hours)

**Batch Processing Strategy** (5-10 images per batch):

1. **Category 1: Global Regulations** (15 images)
   - Batch 1: resp-21 to resp-25 (5 images) - 3 hours
   - Batch 2: resp-26 to resp-30 (5 images) - 3 hours
   - Batch 3: resp-31 to resp-35 (5 images) - 3 hours

2. **Category 2: Sector-Specific** (10 images)
   - Batch 4: resp-36 to resp-40 (5 images) - 2.5 hours
   - Batch 5: resp-41 to resp-45 (5 images) - 2.5 hours

3. **Category 3: Frameworks** (10 images)
   - Batch 6: resp-46 to resp-50 (5 images) - 2.5 hours
   - Batch 7: resp-51 to resp-55 (5 images) - 2.5 hours

4. **Category 4: Implementation** (10 images)
   - Batch 8: resp-56 to resp-60 (5 images) - 2.5 hours
   - Batch 9: resp-61 to resp-65 (5 images) - 2.5 hours

5. **Category 5: Practice** (10 images)
   - Batch 10: resp-66 to resp-70 (5 images) - 2.5 hours
   - Batch 11: resp-71 to resp-75 (5 images) - 2.5 hours

**Per Image**:
- Generation: 15-20 min
- Review and iteration: 15-20 min
- Post-processing: 5-10 min
- **Total**: 35-50 min per image

---

### 4. Post-Processing (3-5 hours)

For each image:
1. **Color Correction** - Ensure Dry Sage (#a4ac86) dominance
2. **Resize** - Verify exact 1920x1280 dimensions
3. **Save JPG** - Quality 85
4. **File Naming** - Use exact article slug from knowledge graph
5. **Place in Directory** - `/public/images/responsibility/`

---

### 5. WebP Conversion (1 hour)

```bash
# Batch convert all responsibility images
cd /public/images/responsibility
for file in resp-{21..75}*.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

**Validation**:
- All WebP files under 200KB
- No quality degradation visible
- Filenames match article slugs exactly

---

### 6. Validation (2 hours)

**Automated Checks**:
```bash
# Run image validation script
node scripts/validate-responsibility-images.js --start=21 --end=75
```

**Validation Checklist**:
- [ ] 55 JPG files present (resp-21 to resp-75)
- [ ] 55 WebP files present (resp-21 to resp-75)
- [ ] All JPG files are 1920x1280 resolution
- [ ] All WebP files under 200KB
- [ ] All filenames match article slugs exactly
- [ ] Color palette verification (Dry Sage dominant)
- [ ] Visual consistency with existing 20 images
- [ ] No duplicate filenames
- [ ] All files properly named (lowercase, hyphenated)

**Manual Quality Review**:
- View each image for professional aesthetic
- Verify category-appropriate visual themes
- Check that legal/governance tone is maintained
- Ensure no culturally insensitive elements
- Confirm readability when text overlays added

---

## Definition of Done

- [ ] All 55 Responsibility images generated (resp-21 to resp-75)
- [ ] All images use Dry Sage color palette correctly
- [ ] All images are 1920x1280 resolution (3:2 aspect ratio)
- [ ] All images saved as both JPG and WebP formats
- [ ] All WebP images under 200KB
- [ ] All images follow naming convention (article-slug.jpg/webp)
- [ ] All images placed in `/public/images/responsibility/` directory
- [ ] Visual consistency verified across all 75 total responsibility images (20 existing + 55 new)
- [ ] Image validation script passes 100%
- [ ] Prompt documentation complete in `/docs/story-10.5.7-responsibility-image-prompts.md`
- [ ] Total Responsibility images: 75 ✓

---

## Deliverables

1. **55 JPG images** - `/public/images/responsibility/resp-21.jpg` through `resp-75.jpg`
2. **55 WebP images** - `/public/images/responsibility/resp-21.webp` through `resp-75.webp`
3. **Prompt documentation** - `/docs/story-10.5.7-responsibility-image-prompts.md` (55 detailed prompts)
4. **Validation report** - `/docs/responsibility-images-validation-report.md`

---

## Blockers Removed

**This story unblocks**:
- Epic 8: Responsibility Path Implementation (needs all 75 images)
- Frontend development of Responsibility learning path UI

---

## Notes

- Largest single batch of images (55)
- Maintain consistent style across 5 distinct categories
- Pay special attention to cultural sensitivity for global regulation images
- Avoid literal flag representations - use subtle geometric/cultural elements
- Legal/compliance content requires serious, professional aesthetic
- Cross-reference with existing 20 responsibility images for consistency
- Some articles may share similar visual themes - ensure sufficient differentiation
- Keep standards organization logos subtle and tasteful
- Consider creating visual style guide after first batch review

---

**Story Status**: Ready to Start (Blocked by 10.5.6)
**Blockers**: Must complete knowledge graph update (10.5.6) first
**Previous Story**: 10.5.6 - Update Knowledge Graph with Responsibility Metadata
**Next Epic**: 11.5 - Future Content Creation
