---
title: 'Article 76: Mapping Frameworks to Regulations – A Compliance Crosswalk'
tldr: ''
category: Risk Frameworks & Standards
learning_objectives:
- Understand the key concepts and principles of ai governance frameworks
- Implement regulatory requirements in real-world scenarios
- Evaluate stakeholder engagement for organizational compliance
seo_keywords:
- article
- mapping
- AI governance
- mapping frameworks
- regulations
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: framework diagram, interconnected standards, quality assurance symbols,
    certification badges, structured framework diagram, building blocks, architectural
    blueprint, legal documents, regulatory symbols, compliance checkmarks, professional
    illustration, modern flat design style, clean and authoritative, high quality,
    blue and gray color scheme with accent colors, suitable for professional article
    header
- type: checklist
  label: 'Regulations (mandatory):'
  section: 'Step 1: Identify Your Requirements'
  id: checklist-step-1-identify-your-requirements
- type: table
  label: EU AI Act Requirement vs NIST AI RMF Table
  section: High-Risk AI System Requirements (Articles 9-15)
  id: table-high-risk-ai-system-requirements-articles-9-15
- type: table
  label: NIST AI RMF Element vs EU AI Act Mapping Table
  section: GOVERN Function
  id: table-govern-function
- type: table
  label: NIST AI RMF Element vs EU AI Act Mapping Table
  section: MAP Function
  id: table-map-function
- type: table
  label: NIST AI RMF Element vs EU AI Act Mapping Table
  section: MEASURE Function
  id: table-measure-function
- type: table
  label: NIST AI RMF Element vs EU AI Act Mapping Table
  section: MANAGE Function
  id: table-manage-function
- type: table
  label: ISO 42001 Clause vs EU AI Act Mapping Table
  section: Management System Clauses
  id: table-management-system-clauses
- type: table
  label: ISO 42001 Control vs EU AI Act Mapping Table
  section: Annex A Controls
  id: table-annex-a-controls
- type: table
  label: LL144 Requirement vs NIST AI RMF Table
  section: NYC Local Law 144 (Hiring AI)
  id: table-nyc-local-law-144-hiring-ai
- type: table
  label: Colorado Requirement vs NIST AI RMF Table
  section: Colorado AI Act
  id: table-colorado-ai-act
- type: table
  label: AIDA Requirement vs NIST AI RMF Table
  section: 'Crosswalk: Canada AIDA (Proposed)'
  id: table-crosswalk-canada-aida-proposed
- type: table
  label: NIST AI RMF vs ISO 42001 Mapping Table
  section: NIST AI RMF to ISO 42001
  id: table-nist-ai-rmf-to-iso-42001
- type: table
  label: Singapore Area vs NIST AI RMF Mapping Table
  section: Singapore Framework to NIST AI RMF
  id: table-singapore-framework-to-nist-ai-rmf
- type: table
  label: Requirement Area vs Regulation 1 Table
  section: 'Step 2: Create Your Crosswalk'
  id: table-step-2-create-your-crosswalk
- type: flowchart
  label: Conclusion Process
  section: Conclusion
  id: flowchart-conclusion
- type: flowchart
  label: Sources and Further Reading Process
  section: Sources and Further Reading
  id: flowchart-sources-and-further-reading
- type: template
  label: 'Example: Bias Assessment Control'
  section: 'Step 4: Build Unified Controls'
  id: template-step-4-build-unified-controls
  template_link: /templates/example-bias-assessment-control.md
- type: template
  label: 'Example:'
  section: 'Challenge 1: Terminology Differences'
  id: template-challenge-1-terminology-differences
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: 'Challenge 2: Different Granularity'
  id: template-challenge-2-different-granularity
  template_link: /templates/example.md
- type: template
  label: Practical Crosswalk Template
  section: Practical Crosswalk Template
  id: template-practical-crosswalk-template
  template_link: /templates/practical-crosswalk-template.md
- type: list
  label: High-Risk AI System Requirements (Articles 9-15)
  section: High-Risk AI System Requirements (Articles 9-15)
  id: list-high-risk-ai-system-requirements-articles-9-15
- type: list
  label: 'Step 1: Identify Your Requirements'
  section: 'Step 1: Identify Your Requirements'
  id: list-step-1-identify-your-requirements
- type: list
  label: 'Challenge 3: Conflicting Requirements'
  section: 'Challenge 3: Conflicting Requirements'
  id: list-challenge-3-conflicting-requirements
topic_fingerprint:
- transparency
- oversight
- governance framework
- audit
- impact assessment
named_examples:
- aida
- canada aida
- colorado ai act
- eu ai act
- european commission
- iec
- ieee
- iso
- nist
- nyc local law 144
- occ
word_count: 1971
processed_date: '2025-12-18T02:16:47.070Z'
---


## Understanding the Landscape


### Frameworks vs. Regulations

**Frameworks** are voluntary guides that describe good practices:
- NIST AI RMF (US)
- ISO/IEC 42001 (International)
- Singapore Model AI Governance Framework
- IEEE 7000 series

**Regulations** are mandatory requirements with legal force:
- EU AI Act (European Union)
- Canada AIDA (Proposed)
- US State Laws (Colorado, NYC, etc.)
- Sector-specific rules (FDA AI, OCC model risk)


### Why Mapping Matters

**Efficiency:** Instead of implementing NIST AI RMF and EU AI Act separately, understand overlaps and address both together.

**Gap identification:** Frameworks don't cover everything regulations require. Mapping reveals gaps.

**Evidence reuse:** Documentation for one requirement often satisfies another.

**Resource allocation:** Focus effort where gaps exist, not where you're already covered.

**Audit preparation:** Show auditors how your practices map to specific requirements.

---


## The Master Crosswalk: Frameworks to EU AI Act

The EU AI Act is the most comprehensive AI regulation, so it's a natural anchor point. Here's how major frameworks map to its key requirements.

<!-- component:list:list-high-risk-ai-system-requirements-articles-9-15 -->

### High-Risk AI System Requirements (Articles 9-15)

| EU AI Act Requirement | NIST AI RMF | ISO 42001 | Singapore Framework |
<!-- component:table:table-high-risk-ai-system-requirements-articles-9-15 -->
|----------------------|-------------|-----------|---------------------|
| **Art. 9: Risk Management** | MEASURE + MANAGE functions; risk identification, assessment, mitigation | Clause 6: Planning; Annex A.4: Impact assessment | Operations Management: risk-based approach |
| **Art. 10: Data Governance** | MAP function (data context); MEASURE (data quality) | Clause 8: Operation; Annex A.3: Resource management | Operations Management: data management |
| **Art. 11: Technical Documentation** | GOVERN (documentation); MAP (system description) | Clause 7.5: Documented information; Annex A.9 | Operations Management: documentation |
| **Art. 12: Record-keeping** | GOVERN (records); MANAGE (logging) | Clause 7.5: Documented information | Not specifically addressed |
| **Art. 13: Transparency** | GOVERN (transparency); MAP (stakeholder communication) | Clause 7.4: Communication | Stakeholder Communication: disclosure |
| **Art. 14: Human Oversight** | GOVERN (accountability); MANAGE (human controls) | Clause 5: Leadership; Clause 8: Operation | Decision-Making Model: human involvement |
| **Art. 15: Accuracy, Robustness** | MEASURE (testing, monitoring); MANAGE (quality) | Clause 8: Operation; Clause 9: Evaluation | Operations Management: model validation |


### Key Observations

**Strong alignment:** Risk management, documentation, and monitoring are well-covered by all frameworks. If you've implemented these framework elements, you have foundation for EU AI Act compliance.

**Gaps to watch:**
- Record-keeping specifics (EU AI Act has detailed requirements)
- Conformity assessment procedures (not in frameworks)
- Registration database requirements (EU AI Act specific)
- Specific technical standards (harmonized standards under development)

---


## Detailed Crosswalk: NIST AI RMF to EU AI Act


### GOVERN Function

| NIST AI RMF Element | EU AI Act Mapping | Gap Analysis |
<!-- component:table:table-govern-function -->
|---------------------|-------------------|--------------|
| GOVERN-1: Policies and procedures | Art. 9(1): Risk management system | Aligned; EU AI Act requires formal system |
| GOVERN-2: Accountability | Art. 16: Provider obligations | NIST is broader; EU specifies provider duties |
| GOVERN-3: Workforce | Art. 14(4): Human oversight competence | EU AI Act specifies competence requirements |
| GOVERN-4: Culture | Not specifically required | NIST goes beyond EU requirements |
| GOVERN-5: Stakeholder engagement | Art. 13: Transparency to users | EU AI Act focuses on users; NIST is broader |
| GOVERN-6: Context | Art. 9(2): Context-appropriate risk mgmt | Aligned |


### MAP Function

| NIST AI RMF Element | EU AI Act Mapping | Gap Analysis |
<!-- component:table:table-map-function -->
|---------------------|-------------------|--------------|
| MAP-1: Context | Art. 9(2): Intended purpose context | Aligned |
| MAP-2: Categorization | Annex III: High-risk classification | EU has specific categories; NIST is flexible |
| MAP-3: Capabilities | Art. 13: User information | Related but EU is more specific |
| MAP-4: Risks | Art. 9(2)(a): Risk identification | Aligned |
| MAP-5: Impacts | Art. 9(9): Impact on fundamental rights | EU specifies fundamental rights focus |


### MEASURE Function

| NIST AI RMF Element | EU AI Act Mapping | Gap Analysis |
<!-- component:table:table-measure-function -->
|---------------------|-------------------|--------------|
| MEASURE-1: Metrics | Art. 9(5): Evaluation and testing | Aligned |
| MEASURE-2: Tracking | Art. 9(4): Continuous assessment | Aligned |
| MEASURE-3: Bias assessment | Art. 10: Data requirements; Art. 15 accuracy | EU has specific data quality requirements |
| MEASURE-4: Efficacy | Art. 9(3): Residual risk assessment | Aligned |


### MANAGE Function

| NIST AI RMF Element | EU AI Act Mapping | Gap Analysis |
<!-- component:table:table-manage-function -->
|---------------------|-------------------|--------------|
| MANAGE-1: Prioritization | Art. 9(4): Effective mitigation | Aligned |
| MANAGE-2: Treatment | Art. 9(4): Risk mitigation measures | Aligned |
| MANAGE-3: Documentation | Art. 11, 12: Technical documentation | EU has specific documentation requirements |
| MANAGE-4: Communication | Art. 13: Transparency | EU specifies transparency content |

---


## Detailed Crosswalk: ISO 42001 to EU AI Act


### Management System Clauses

| ISO 42001 Clause | EU AI Act Mapping | Gap Analysis |
<!-- component:table:table-management-system-clauses -->
|-----------------|-------------------|--------------|
| 4: Context of organization | Art. 9(2): Intended purpose | Aligned in principle |
| 5: Leadership | Art. 16: Provider obligations | ISO is broader; EU specifies obligations |
| 6: Planning | Art. 9: Risk management system | Aligned |
| 7: Support | Art. 14(4): Competent human oversight | ISO covers training; EU specifies competence |
| 8: Operation | Art. 9-15: All operational requirements | ISO provides framework; EU specifies details |
| 9: Performance evaluation | Art. 9(4): Continuous assessment | Aligned |
| 10: Improvement | Art. 9(8): Continuous improvement | Aligned |


### Annex A Controls

| ISO 42001 Control | EU AI Act Mapping | Gap Analysis |
<!-- component:table:table-annex-a-controls -->
|-------------------|-------------------|--------------|
| A.4: Impact assessment | Art. 9: Risk management | ISO is general; EU has specifics |
| A.5: AI system development | Art. 10: Data governance | EU has detailed data requirements |
| A.6: AI system operation | Art. 14, 15: Human oversight, accuracy | Aligned in principle |
| A.8: Monitoring | Art. 12, 72: Record-keeping, post-market | EU has specific logging requirements |

---


## Crosswalk: Frameworks to US State Laws


### NYC Local Law 144 (Hiring AI)

| LL144 Requirement | NIST AI RMF | ISO 42001 | Singapore |
<!-- component:table:table-nyc-local-law-144-hiring-ai -->
|-------------------|-------------|-----------|-----------|
| Annual bias audit | MEASURE-3: Bias assessment | A.4: Impact assessment | Operations: fairness testing |
| Published summary | GOVERN-5: Communication | 7.4: Communication | Stakeholder Communication |
| Candidate notice | GOVERN-5, MAP-3 | 7.4: Communication | Stakeholder Communication |
| Independent auditor | Not required | Not required | Not required |

**Key Gap:** NYC LL144 requires independent third-party audit. Frameworks allow internal assessment. Must specifically plan for external audit.


### Colorado AI Act

| Colorado Requirement | NIST AI RMF | ISO 42001 | Singapore |
<!-- component:table:table-colorado-ai-act -->
|---------------------|-------------|-----------|-----------|
| Risk management | GOVERN + MEASURE + MANAGE | Clause 6, 8, 9 | All four areas |
| Impact assessment | MAP + MEASURE | A.4 | Operations: assessment |
| Disclosures to consumers | GOVERN-5, MAP-3 | 7.4 | Stakeholder Communication |
| Reasonable care | All functions | All clauses | All areas |

**Key Gap:** Colorado law requires specific disclosures to consumers before consequential decisions. Framework communication elements need to be operationalized to this specific context.

---


## Crosswalk: Canada AIDA (Proposed)

| AIDA Requirement | NIST AI RMF | ISO 42001 | EU AI Act |
<!-- component:table:table-crosswalk-canada-aida-proposed -->
|-----------------|-------------|-----------|-----------|
| High-impact designation | MAP-2: Categorization | 4: Context | Annex III: Classification |
| Impact assessment | MAP + MEASURE | A.4 | Art. 9: Risk management |
| Mitigation measures | MANAGE-2: Treatment | Clause 8 | Art. 9(4): Mitigation |
| Record-keeping | GOVERN, MANAGE-3 | 7.5 | Art. 11, 12 |
| Transparency | GOVERN-5 | 7.4 | Art. 13 |
| Human oversight | GOVERN, MANAGE | Clause 5, 8 | Art. 14 |

**Key Insight:** Organizations compliant with EU AI Act are likely well-positioned for AIDA. The frameworks are structurally similar.

---


## Cross-Framework Mapping


### NIST AI RMF to ISO 42001

| NIST AI RMF | ISO 42001 Mapping |
<!-- component:table:table-nist-ai-rmf-to-iso-42001 -->
|-------------|-------------------|
| GOVERN | Clause 5 (Leadership), Clause 7 (Support), Annex A.1-A.2 |
| MAP | Clause 4 (Context), Clause 6 (Planning), Annex A.4 |
| MEASURE | Clause 9 (Performance evaluation), Annex A.4, A.8 |
| MANAGE | Clause 8 (Operation), Clause 10 (Improvement), Annex A.5-A.7 |


### Singapore Framework to NIST AI RMF

| Singapore Area | NIST AI RMF Mapping |
<!-- component:table:table-singapore-framework-to-nist-ai-rmf -->
|----------------|---------------------|
| Internal Governance | GOVERN function |
| Decision-Making Model | GOVERN (accountability), MANAGE (human oversight) |
| Operations Management | MAP + MEASURE + MANAGE |
| Stakeholder Communication | GOVERN (communication), MAP (stakeholders) |

---


## Building a Unified Compliance Program

<!-- component:list:list-step-1-identify-your-requirements -->

### Step 1: Identify Your Requirements

List all regulations and frameworks that apply:

**Regulations (mandatory):**
<!-- component:checklist:checklist-step-1-identify-your-requirements -->
- [ ] EU AI Act (if serving EU)
- [ ] Canada AIDA (if serving Canada, once enacted)
- [ ] NYC LL144 (if hiring in NYC)
- [ ] Colorado AI Act (if decisions affect Colorado consumers)
- [ ] Sector regulations (FDA, OCC, etc.)

**Frameworks (chosen):**
- [ ] NIST AI RMF
- [ ] ISO 42001
- [ ] Singapore Model Framework
- [ ] Other: _____________


### Step 2: Create Your Crosswalk

For each requirement area, map across all applicable standards:

| Requirement Area | Regulation 1 | Regulation 2 | Framework 1 | Framework 2 | Addressed By |
<!-- component:table:table-step-2-create-your-crosswalk -->
|-----------------|--------------|--------------|-------------|-------------|--------------|
| Risk management | EU AI Act Art. 9 | AIDA | NIST MEASURE | ISO 42001 Cl. 6 | Risk assessment process |
| Bias testing | LL144 | Colorado | NIST MEASURE-3 | ISO A.4 | Bias audit program |
| Documentation | EU AI Act Art. 11 | AIDA | NIST GOVERN | ISO 7.5 | Document management |
| Transparency | EU AI Act Art. 13 | Colorado | NIST GOVERN-5 | ISO 7.4 | Disclosure procedures |


### Step 3: Identify Gaps

For each row, assess:
- Is the "Addressed By" practice sufficient for all columns?
- Are there specific requirements not covered?
- What additional work is needed?

**Common gaps:**
- Specific disclosure language (regulations often specify exact wording)
- Independent audit requirements (some regulations require third-party)
- Registration/notification (regulatory-specific)
- Specific documentation formats


### Step 4: Build Unified Controls

Design controls that satisfy multiple requirements:

<!-- component:template:template-step-4-build-unified-controls -->
**Example: Bias Assessment Control**

Control: "Conduct bias assessment using demographic parity and equalized odds metrics before deployment and annually thereafter."

Satisfies:
- EU AI Act Art. 10 (data quality), Art. 15 (accuracy)
- NYC LL144 (annual bias audit)
- Colorado (impact assessment)
- NIST AI RMF MEASURE-3
- ISO 42001 A.4

Enhancement needed for LL144: Must use independent auditor, not internal assessment.


### Step 5: Document Mappings

Create compliance documentation that shows how each control addresses multiple requirements:

```
CONTROL: AI-RISK-001 - Pre-Deployment Risk Assessment

Purpose: Assess AI system risks before production deployment

Regulatory Mapping:
- EU AI Act Article 9(1): Risk management system ✓
- EU AI Act Article 9(2)(a): Risk identification ✓
- Canada AIDA (proposed): Impact assessment ✓
- Colorado AI Act: Impact assessment ✓

Framework Mapping:
- NIST AI RMF: MAP-4, MEASURE-1, MEASURE-4 ✓
- ISO 42001: Clause 6.1, Annex A.4 ✓
- Singapore: Operations Management ✓

Evidence: 
- Risk assessment template
- Completed assessments per system
- Review and approval records
```

---


## Common Challenges and Solutions


### Challenge 1: Terminology Differences

The same concept has different names across frameworks.

<!-- component:template:template-challenge-1-terminology-differences -->
**Example:** "Risk management" (NIST, EU) vs. "Impact assessment" (Canada, frameworks) vs. "Operations management" (Singapore)

**Solution:** Create a terminology glossary mapping equivalent terms across frameworks.


### Challenge 2: Different Granularity

Regulations may be more specific than frameworks.

<!-- component:template:template-challenge-2-different-granularity -->
**Example:** EU AI Act Article 11 specifies exact documentation contents. NIST just says "document."

**Solution:** Start with regulatory specifics, then verify frameworks are compatible.

<!-- component:list:list-challenge-3-conflicting-requirements -->

### Challenge 3: Conflicting Requirements

Rarely, requirements actually conflict.

**Solution:** Where genuine conflicts exist, document them and determine which takes precedence (usually regulations over frameworks, stricter over lenient).


### Challenge 4: Evolving Landscape

New regulations and framework updates change the map.

**Solution:** Designate someone to track changes and update crosswalks periodically (at least annually).

---

<!-- component:template:template-practical-crosswalk-template -->

## Practical Crosswalk Template

Use this template to build your own crosswalk:

```
═══════════════════════════════════════════════════════════════
COMPLIANCE CROSSWALK

Organization: ________________________________________________
Last Updated: ________________________________________________
Owner: _______________________________________________________

───────────────────────────────────────────────────────────────
APPLICABLE REQUIREMENTS
───────────────────────────────────────────────────────────────

Regulations:
[ ] _________________________________________________________
[ ] _________________________________________________________
[ ] _________________________________________________________

Frameworks:
[ ] _________________________________________________________
[ ] _________________________________________________________

───────────────────────────────────────────────────────────────
CROSSWALK TABLE
───────────────────────────────────────────────────────────────

┌─────────────────┬───────────┬───────────┬───────────┬────────┐
│ Requirement     │ Reg. 1    │ Reg. 2    │ Framework │ Status │
│ Category        │ Citation  │ Citation  │ Reference │        │
├─────────────────┼───────────┼───────────┼───────────┼────────┤
│ Risk Management │           │           │           │        │
├─────────────────┼───────────┼───────────┼───────────┼────────┤
│ Data Governance │           │           │           │        │
├─────────────────┼───────────┼───────────┼───────────┼────────┤
│ Documentation   │           │           │           │        │
├─────────────────┼───────────┼───────────┼───────────┼────────┤
│ Transparency    │           │           │           │        │
├─────────────────┼───────────┼───────────┼───────────┼────────┤
│ Human Oversight │           │           │           │        │
├─────────────────┼───────────┼───────────┼───────────┼────────┤
│ Testing/Audit   │           │           │           │        │
├─────────────────┼───────────┼───────────┼───────────┼────────┤
│ Monitoring      │           │           │           │        │
└─────────────────┴───────────┴───────────┴───────────┴────────┘

Status Key: ✓ Addressed | ⚠ Partial | ✗ Gap | N/A

───────────────────────────────────────────────────────────────
GAP ANALYSIS
───────────────────────────────────────────────────────────────

┌─────────────────┬────────────────────────────┬──────────────┐
│ Gap Description │ Remediation Action         │ Priority     │
├─────────────────┼────────────────────────────┼──────────────┤
│                 │                            │              │
├─────────────────┼────────────────────────────┼──────────────┤
│                 │                            │              │
└─────────────────┴────────────────────────────┴──────────────┘

═══════════════════════════════════════════════════════════════
```

---


## Conclusion

Mapping frameworks to regulations isn't just an academic exercise—it's a practical necessity for efficient AI governance.

Key takeaways:

<!-- component:flowchart:flowchart-conclusion -->
1. **Frameworks and regulations are complementary:** Frameworks tell you how; regulations tell you what's required.

2. **Significant overlap exists:** Most major frameworks address the same core concerns as regulations. Implementation of one provides foundation for the other.

3. **Gaps remain:** Specific regulatory requirements (documentation formats, audit requirements, notification procedures) may not be fully covered by general frameworks.

4. **Build unified programs:** Design controls that address multiple requirements simultaneously.

5. **Document your mappings:** Clear crosswalks demonstrate compliance and simplify audits.

6. **Maintain your crosswalks:** The landscape evolves. Keep mappings current.

By understanding how frameworks and regulations relate, you can build AI governance programs that are both principled and compliant—efficient and effective.

---


## Sources and Further Reading

1. **EU AI Act** - Full text and annexes. Available at: eur-lex.europa.eu

2. **NIST AI RMF** - Framework and Playbook. Available at: nist.gov/itl/ai-risk-management-framework

3. **ISO/IEC 42001** - AI Management Systems. Available at: iso.org

4. **Singapore PDPC** - Model AI Governance Framework. Available at: pdpc.gov.sg

5. **NYC Local Law 144** - Automated Employment Decision Tools. Available at: rules.cityofnewyork.us

6. **Colorado AI Act** - SB21-169. Available at: leg.colorado.gov

7. **Canada AIDA** - Bill C-27 text. Available at: parl.ca

8. **IAPP** - Framework comparison resources. Available at: iapp.org

9. **European Commission** - AI Act guidance and harmonized standards. Available at: digital-strategy.ec.europa.eu

10. **NIST** - Crosswalk resources and alignment documentation. Available at: airc.nist.gov

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
