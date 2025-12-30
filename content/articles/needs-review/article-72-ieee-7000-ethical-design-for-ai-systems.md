---
title: 'Article 72: IEEE 7000 – Ethical Design for AI Systems'
tldr: ''
category: Risk Frameworks & Standards
learning_objectives:
- Understand the key concepts and principles of ai governance frameworks
- Implement ethical ai principles in real-world scenarios
- Evaluate model validation processes for organizational compliance
seo_keywords:
- article
- ieee
- AI governance
- AI ethics
- ethical design
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: framework diagram, interconnected standards, quality assurance symbols,
    certification badges, professional illustration, modern flat design style, clean
    and authoritative, high quality, blue and gray color scheme with accent colors,
    suitable for professional article header
- type: table
  label: Standard vs Focus Table
  section: The IEEE 7000 Series
  id: table-the-ieee-7000-series
- type: table
  label: Value vs Justification Table
  section: 'Phase 2: Ethical Value Elicitation'
  id: table-phase-2-ethical-value-elicitation
- type: table
  label: Value vs Value Requirement Table
  section: 'Phase 3: Ethical Requirements Definition'
  id: table-phase-3-ethical-requirements-definition
- type: table
  label: Value Requirement vs Risk Table
  section: 'Phase 4: Ethical Risk Analysis'
  id: table-phase-4-ethical-risk-analysis
- type: table
  label: Decision vs Options Considered Table
  section: 'Phase 5: Design'
  id: table-phase-5-design
- type: table
  label: Value Requirement vs Verification Method Table
  section: 'Phase 6: Verification and Validation'
  id: table-phase-6-verification-and-validation
- type: table
  label: Value vs AI Relevance Table
  section: AI-Specific Values
  id: table-ai-specific-values
- type: table
  label: Value vs Source Table
  section: Value Elicitation
  id: table-value-elicitation
- type: table
  label: Value vs Requirement Table
  section: Value Requirements
  id: table-value-requirements
- type: table
  label: Risk vs Likelihood Table
  section: Ethical Risk Analysis
  id: table-ethical-risk-analysis
- type: table
  label: Decision vs Choice Table
  section: Design Decisions
  id: table-design-decisions
- type: table
  label: Requirement vs Verification Table
  section: Verification
  id: table-verification
- type: flowchart
  label: Introduction Process
  section: Introduction
  id: flowchart-introduction
- type: flowchart
  label: Conclusion Process
  section: Conclusion
  id: flowchart-conclusion
- type: flowchart
  label: Sources and Further Reading Process
  section: Sources and Further Reading
  id: flowchart-sources-and-further-reading
- type: template
  label: '*Example'
  section: Values vs. Requirements
  id: template-values-vs-requirements
  template_link: /templates/example.md
- type: template
  label: 'For AI Example:'
  section: 'Phase 1: Concept of Operations and Context Exploration'
  id: template-phase-1-concept-of-operations-and-context-exploration
  template_link: /templates/for-ai-example.md
- type: template
  label: 'For AI Example:'
  section: 'Phase 2: Ethical Value Elicitation'
  id: template-phase-2-ethical-value-elicitation
  template_link: /templates/for-ai-example.md
- type: template
  label: 'For AI Example:'
  section: 'Phase 3: Ethical Requirements Definition'
  id: template-phase-3-ethical-requirements-definition
  template_link: /templates/for-ai-example.md
- type: template
  label: 'For AI Example:'
  section: 'Phase 4: Ethical Risk Analysis'
  id: template-phase-4-ethical-risk-analysis
  template_link: /templates/for-ai-example.md
- type: template
  label: 'For AI Example:'
  section: 'Phase 5: Design'
  id: template-phase-5-design
  template_link: /templates/for-ai-example.md
- type: template
  label: 'For AI Example:'
  section: 'Phase 6: Verification and Validation'
  id: template-phase-6-verification-and-validation
  template_link: /templates/for-ai-example.md
- type: template
  label: 'For AI Example:'
  section: 'Phase 7: Operations and Sustainment'
  id: template-phase-7-operations-and-sustainment
  template_link: /templates/for-ai-example.md
- type: list
  label: Values vs. Requirements
  section: Values vs. Requirements
  id: list-values-vs-requirements
- type: list
  label: 'Phase 3: Ethical Requirements Definition'
  section: 'Phase 3: Ethical Requirements Definition'
  id: list-phase-3-ethical-requirements-definition
- type: list
  label: Value Requirements
  section: Value Requirements
  id: list-value-requirements
topic_fingerprint:
- fairness
- transparency
- ai ethics
- algorithmic bias
- risk assessment
named_examples:
- eu ai act
- fair
- iec
- ieee
- institute of electrical
- iso
- nist
word_count: 2763
processed_date: '2025-12-18T02:16:41.832Z'
---


## Understanding IEEE and Its Standards


### What Is IEEE?

IEEE (pronounced "Eye-triple-E") is the world's largest technical professional organization. With over 400,000 members across 160 countries, it develops standards for everything from Wi-Fi (IEEE 802.11) to electrical safety.

IEEE standards are influential because they represent expert consensus. When IEEE publishes a standard, it reflects input from engineers, researchers, and practitioners worldwide.


### The IEEE 7000 Series

IEEE 7000 is part of a broader family of standards addressing ethics in technology:

| Standard | Focus |
<!-- component:table:table-the-ieee-7000-series -->
|----------|-------|
| IEEE 7000 | Overall ethical design process |
| IEEE 7001 | Transparency in autonomous systems |
| IEEE 7002 | Data privacy processes |
| IEEE 7003 | Algorithmic bias considerations |
| IEEE 7005 | Employer data governance |
| IEEE 7007 | Ontology for ethical AI design |
| IEEE 7010 | Well-being metrics for AI |

IEEE 7000 is the foundational standard—it provides the overall process, while the others address specific concerns.

---


## The Core Concept: Value-Based Engineering


### What Is Value-Based Engineering?

Value-Based Engineering (VBE) is the methodology at the heart of IEEE 7000. It extends traditional systems engineering to include ethical values alongside functional requirements.

In traditional engineering:
- You define what the system must **do** (functional requirements)
- You define how well it must **perform** (performance requirements)
- You build and verify

Value-Based Engineering adds:
- You define what **values** the system must embody
- You translate values into **value requirements**
- You build and verify those too

<!-- component:list:list-values-vs-requirements -->

### Values vs. Requirements

This distinction is crucial:

**Values** are abstract principles—fairness, privacy, dignity, autonomy. They describe what matters but not what to build.

**Value Requirements** are concrete specifications derived from values. They can be built, tested, and verified.

<!-- component:template:template-values-vs-requirements -->
*Example:*
- **Value:** Fairness
- **Value Requirement:** "The credit scoring model shall produce equal false positive rates (within 5% tolerance) across demographic groups defined in the Equalized Odds framework."

The first tells you what matters. The second tells you what to build and test.


### The Translation Problem

Most ethical failures in technology stem from a failure to translate values into requirements. Teams genuinely believe in fairness but have no specification for what fair means for their system.

IEEE 7000 provides a systematic process for this translation.

---


## The IEEE 7000 Process

IEEE 7000 defines a multi-phase process that runs alongside (not separate from) normal system development:


### Phase 1: Concept of Operations and Context Exploration

**Purpose:** Understand what you're building and its context.

**Activities:**
- Define the system's concept of operations
- Identify stakeholders
- Understand the social, cultural, and regulatory context
- Begin identifying ethically relevant aspects

**Key Output:** Context exploration report documenting stakeholders, environment, and initial ethical considerations.

<!-- component:template:template-phase-1-concept-of-operations-and-context-exploration -->
**For AI Example:** Before building a facial recognition system:
- What will it be used for? (security, convenience, surveillance)
- Who are the stakeholders? (users, people being recognized, operators, regulators)
- What's the context? (public spaces, private venues, law enforcement)
- What ethical aspects emerge? (privacy, consent, discrimination, safety)


### Phase 2: Ethical Value Elicitation

**Purpose:** Identify the values that should guide the system's design.

**Activities:**
- Gather stakeholder input on values
- Research ethical concerns relevant to the system type
- Consider legal and regulatory requirements
- Identify and resolve value conflicts
- Prioritize values for the specific context

**Key Output:** Prioritized list of ethical values with justifications.

**Value Elicitation Methods:**
- Stakeholder interviews and surveys
- Ethics literature review
- Regulatory analysis
- Scenario analysis (what could go wrong?)
- Consultation with ethics experts

<!-- component:template:template-phase-2-ethical-value-elicitation -->
**For AI Example:** For the facial recognition system:

| Value | Justification | Priority |
<!-- component:table:table-phase-2-ethical-value-elicitation -->
|-------|---------------|----------|
| Consent | People should control their image use | High |
| Accuracy | False identifications cause harm | High |
| Non-discrimination | Must work equally across groups | High |
| Privacy | Recognition enables tracking | High |
| Transparency | People should know they're scanned | Medium |
| Security | System data needs protection | Medium |

<!-- component:list:list-phase-3-ethical-requirements-definition -->

### Phase 3: Ethical Requirements Definition

**Purpose:** Translate values into concrete, buildable requirements.

**Activities:**
- For each prioritized value, define specific requirements
- Make requirements testable and verifiable
- Ensure requirements are complete (cover all value aspects)
- Resolve conflicts between requirements
- Document rationale for each requirement

**Key Output:** Value requirements specification.

**Requirements Characteristics:**
- **Specific:** Clear, not ambiguous
- **Measurable:** Can be quantified or observed
- **Achievable:** Technically possible
- **Relevant:** Tied to identified values
- **Testable:** Can verify compliance

<!-- component:template:template-phase-3-ethical-requirements-definition -->
**For AI Example:** Translating values to requirements:

| Value | Value Requirement |
<!-- component:table:table-phase-3-ethical-requirements-definition -->
|-------|------------------|
| Consent | Users must opt-in before first recognition; opt-out available at any time; enrollment requires explicit informed consent |
| Accuracy | False acceptance rate below 0.1%; false rejection rate below 1%; accuracy reviewed annually |
| Non-discrimination | Recognition accuracy shall not vary more than 2% across demographic groups (age, gender, skin tone) |
| Privacy | Images processed in-memory only, never stored; recognition events logged without images; data retention 30 days maximum |
| Transparency | Clear signage at entry points; privacy notice accessible via QR code; regular public reporting on system use |


### Phase 4: Ethical Risk Analysis

**Purpose:** Identify and assess risks of the system violating its value requirements.

**Activities:**
- Identify potential failure modes for each value requirement
- Assess likelihood and severity of violations
- Prioritize risks
- Plan risk treatments

**Key Output:** Ethical risk assessment with treatment plans.

<!-- component:template:template-phase-4-ethical-risk-analysis -->
**For AI Example:**

| Value Requirement | Risk | Likelihood | Severity | Treatment |
<!-- component:table:table-phase-4-ethical-risk-analysis -->
|------------------|------|------------|----------|-----------|
| Non-discrimination accuracy | Model underperforms on darker skin | Medium | High | Additional testing data; fairness constraints |
| Opt-out available | Technical failure prevents opt-out | Low | High | Redundant opt-out mechanisms |
| Images never stored | Developer error stores images | Medium | High | Code review; automated auditing |


### Phase 5: Design

**Purpose:** Create system design that satisfies value requirements.

**Activities:**
- Develop design alternatives
- Evaluate alternatives against value requirements
- Select design that best balances requirements
- Document design decisions and trade-offs
- Involve value considerations in architecture choices

**Key Output:** System design with documented value rationale.

<!-- component:template:template-phase-5-design -->
**For AI Example:** Design decisions for facial recognition:

| Decision | Options Considered | Choice | Value Rationale |
<!-- component:table:table-phase-5-design -->
|----------|-------------------|--------|-----------------|
| Processing location | Cloud vs. edge | Edge | Privacy: data stays local |
| Model architecture | Complex vs. simple | Balanced | Accuracy vs. explainability |
| Database storage | Centralized vs. federated | Federated | Privacy: limits breach impact |
| Enrollment process | Automatic vs. opt-in | Opt-in | Consent: explicit agreement |


### Phase 6: Verification and Validation

**Purpose:** Confirm the system meets its value requirements.

**Activities:**
- Develop verification methods for each value requirement
- Test value requirements during development
- Validate with stakeholders
- Document verification results

**Key Output:** Verification evidence for value requirements.

**Verification Methods:**
- Testing (automated and manual)
- Inspection and code review
- Stakeholder validation
- Third-party audit
- Simulation and modeling

<!-- component:template:template-phase-6-verification-and-validation -->
**For AI Example:**

| Value Requirement | Verification Method | Acceptance Criteria |
<!-- component:table:table-phase-6-verification-and-validation -->
|------------------|---------------------|---------------------|
| Non-discrimination | Bias testing across demographic groups | <2% accuracy variance |
| Privacy (no storage) | Automated log analysis; code audit | Zero image storage events |
| Transparency (signage) | Physical inspection | Signage at all entry points |
| Accuracy | Benchmark testing | FAR <0.1%, FRR <1% |


### Phase 7: Operations and Sustainment

**Purpose:** Maintain value alignment during system operation.

**Activities:**
- Monitor value-related metrics in production
- Handle incidents affecting values
- Update system as values or context change
- Plan for end-of-life

**Key Output:** Ongoing value monitoring and improvement.

<!-- component:template:template-phase-7-operations-and-sustainment -->
**For AI Example:**
- Monthly fairness metrics review
- Quarterly stakeholder feedback collection
- Annual value requirements review
- Incident response for ethics violations

---


## Key Roles in IEEE 7000

The standard defines specific roles for value-based engineering:


### Value Lead

The Value Lead is responsible for:
- Overseeing the value-based engineering process
- Facilitating value elicitation
- Ensuring value requirements are developed
- Tracking value compliance
- Resolving value conflicts

**Think of it as:** An ethics-focused project role, similar to how there might be a security lead or quality lead.


### Ethicist

If available, an ethics professional who:
- Advises on ethical frameworks
- Helps interpret values
- Reviews value requirements
- Provides ethical expertise


### Stakeholder Representatives

People who represent affected parties:
- Users
- People impacted by the system
- Communities
- Regulators


### Development Team

Engineers, developers, and designers who:
- Implement value requirements
- Make design decisions affecting values
- Report value-related concerns

---


## Applying IEEE 7000 to AI

While IEEE 7000 applies to any technology, AI systems present specific considerations:


### AI-Specific Values

When eliciting values for AI systems, consider:

| Value | AI Relevance |
<!-- component:table:table-ai-specific-values -->
|-------|--------------|
| Fairness | Algorithmic bias, equal treatment |
| Transparency | Explainability, disclosure of AI use |
| Accountability | Who's responsible for AI decisions |
| Human autonomy | AI supporting not replacing human choice |
| Privacy | Training data, inference data, model data |
| Safety | Physical safety, psychological well-being |
| Dignity | Respectful treatment by AI systems |


### AI-Specific Risks

AI systems introduce unique ethical risks:

**Opacity:** AI decisions may be difficult to explain, undermining transparency and accountability values.

**Scale:** AI can affect millions of people, amplifying ethical impacts.

**Automation:** AI can remove human judgment from sensitive decisions.

**Learning:** AI behavior can change over time through retraining or drift.

**Bias amplification:** AI can encode and scale existing biases.


### AI-Specific Verification Challenges

Verifying AI meets value requirements has unique challenges:

**Non-determinism:** AI may give different outputs for similar inputs.

**Distribution shift:** AI tested in one context may fail in another.

**Emergent behavior:** AI may behave unexpectedly in novel situations.

**Testing limitations:** You can't test every possible input.

**Continuous change:** AI may be retrained, changing behavior.

---


## IEEE 7000 in Practice: A Case Study

Let's walk through how a company might apply IEEE 7000 to an AI hiring system.


### Context Exploration

**System:** AI resume screening tool
**Stakeholders:** Job applicants, recruiters, hiring managers, HR leadership, legal team
**Context:** Used for first-pass screening in tech company hiring

**Ethically relevant aspects identified:**
- Hiring decisions affect people's livelihoods
- Risk of demographic bias in screening
- Lack of human judgment in initial screening
- Privacy of applicant data
- Transparency about AI use in hiring


### Value Elicitation

Through stakeholder consultation and ethics research:

| Value | Source | Priority |
<!-- component:table:table-value-elicitation -->
|-------|--------|----------|
| Fairness | Legal requirements, ethics principles | Critical |
| Transparency | Applicant expectations, regulations | High |
| Privacy | Data protection laws, ethics | High |
| Merit | Business need, fairness | High |
| Human oversight | Ethics principles, risk management | High |
| Dignity | Ethics principles | Medium |

<!-- component:list:list-value-requirements -->

### Value Requirements

| Value | Requirement |
<!-- component:table:table-value-requirements -->
|-------|-------------|
| Fairness | Selection rates within 20% across demographic groups (four-fifths rule); no use of protected characteristics as input features |
| Transparency | Applicants informed AI is used; explanation available on request; annual public disclosure of AI use in hiring |
| Privacy | Resumes used only for evaluation; deleted after 12 months; no third-party sharing |
| Merit | Only job-relevant factors influence decisions; regular validation against job success |
| Human oversight | AI recommends, humans decide; every rejection reviewed by human before communication |
| Dignity | Respectful communication; no humiliating feedback; constructive rejection notices |


### Ethical Risk Analysis

| Risk | Likelihood | Severity | Treatment |
<!-- component:table:table-ethical-risk-analysis -->
|------|------------|----------|-----------|
| Hidden proxy discrimination | Medium | High | Extensive testing; feature audit |
| Training data reflects historical bias | High | High | Bias-aware training; diverse training data |
| Over-reliance on AI by recruiters | Medium | Medium | Training; decision documentation requirements |
| Applicants don't know about AI | Medium | Medium | Clear disclosure at application |


### Design Decisions

| Decision | Choice | Value Rationale |
<!-- component:table:table-design-decisions -->
|----------|--------|-----------------|
| Features used | Skills, education, experience only | Fairness: no demographic proxies |
| Decision type | Score + recommendation | Human oversight: humans make final call |
| Explainability | SHAP values available | Transparency: can explain decisions |
| Human review | All rejections | Human oversight, dignity |


### Verification

| Requirement | Verification | Result |
<!-- component:table:table-verification -->
|-------------|--------------|--------|
| Selection rate parity | Bias testing on 12-month data | Passed: 4% maximum variance |
| No protected characteristics | Feature audit | Passed: no protected features |
| Human review all rejections | Audit log analysis | Passed: 100% human review |
| Disclosure to applicants | Application flow review | Passed: disclosure on page 1 |

---


## Relationship to Other Standards


### With ISO 42001

ISO 42001 (AI management systems) focuses on organizational management of AI. IEEE 7000 focuses on engineering ethics into specific systems. They complement each other:

- ISO 42001: Organizational policies, governance, roles
- IEEE 7000: System-level ethical design process


### With NIST AI RMF

NIST AI RMF provides risk management functions (Govern, Map, Measure, Manage). IEEE 7000 provides detailed engineering guidance that can inform how those functions are executed, particularly for the MAP and MEASURE functions.


### With EU AI Act

The EU AI Act requires risk management and ethical considerations for high-risk AI. IEEE 7000 provides a process that can demonstrate compliance with these requirements.

---


## Implementation Challenges


### Challenge 1: Value Identification

Not all stakeholders agree on values. Different cultures, perspectives, and interests lead to different priorities.

**Solutions:**
- Use structured facilitation
- Document conflicts and resolution rationale
- Prioritize based on context and impact
- Accept that perfect consensus is unlikely


### Challenge 2: Value Conflicts

Values often conflict. Privacy may conflict with transparency. Safety may conflict with autonomy.

**Solutions:**
- Recognize conflicts explicitly
- Use ethical frameworks to analyze trade-offs
- Prioritize based on severity of violation
- Design for the "least bad" outcome when perfect satisfaction is impossible
- Document trade-offs and rationale


### Challenge 3: Measurability

Some values are hard to measure. How do you quantify "dignity"?

**Solutions:**
- Use proxy measures where direct measurement is impossible
- Use qualitative verification (stakeholder validation)
- Acknowledge measurement limitations
- Combine multiple indicators


### Challenge 4: Organizational Resistance

Engineering teams may see ethics as slowing them down.

**Solutions:**
- Integrate ethics into existing processes (don't add separate tracks)
- Show business value (risk reduction, trust building)
- Start small and demonstrate value
- Get leadership support

---


## Getting Started with IEEE 7000

For organizations new to value-based engineering:


### Step 1: Learn the Fundamentals

Read IEEE 7000 and related materials. Train key personnel on value-based engineering concepts.


### Step 2: Pilot on One System

Don't try to apply IEEE 7000 to everything immediately. Choose one system and work through the process.


### Step 3: Adapt to Your Context

IEEE 7000 is a model process—adapt it to your organization's structure, processes, and culture.


### Step 4: Build Capability

Develop internal expertise. Consider the Value Lead role. Train development teams.


### Step 5: Integrate

Connect value-based engineering to existing processes—requirements management, design reviews, testing.


### Step 6: Scale

Once you've proven the approach, expand to other systems and teams.

---


## Conclusion

IEEE 7000 addresses a fundamental gap in AI governance: the translation from ethical principles to working systems.

Key takeaways:

<!-- component:flowchart:flowchart-conclusion -->
1. **Values need engineering:** Abstract principles must become concrete requirements to influence what gets built.

2. **Process matters:** Systematic processes for value identification, translation, and verification produce better outcomes than ad hoc approaches.

3. **Integration is key:** Value-based engineering works alongside, not separate from, regular development.

4. **Verification is essential:** Claims about ethical AI need evidence, just like claims about functional correctness.

5. **Roles are important:** Someone needs to own value considerations (Value Lead).

For AI governance professionals, IEEE 7000 provides a crucial piece of the puzzle. It's not enough to have policies and principles—you need ways to implement them. IEEE 7000 shows how.

As AI becomes more powerful and pervasive, the ability to engineer ethics into systems becomes more important. IEEE 7000 is a leading approach for doing exactly that.

---


## Sources and Further Reading

1. **IEEE 7000-2021** - IEEE Standard Model Process for Addressing Ethical Concerns During System Design. Available at: standards.ieee.org/standard/7000-2021.html

2. **IEEE 7001-2021** - Transparency of Autonomous Systems. Available at: standards.ieee.org

3. **IEEE 7002-2022** - Data Privacy Process. Available at: standards.ieee.org

4. **IEEE 7003-2021** - Algorithmic Bias Considerations. Available at: standards.ieee.org

5. **IEEE Ethically Aligned Design** - Vision document that informed the 7000 series. Available at: ethicsinaction.ieee.org

6. **IEEE SA (Standards Association)** - Autonomous and Intelligent Systems resources. Available at: standards.ieee.org/initiatives/autonomous-intelligence-systems/

7. **Value Sensitive Design** - Academic methodology related to IEEE 7000. See work by Batya Friedman at University of Washington.

8. **ISO/IEC 42001** - AI management systems (related standard). Available at: iso.org

9. **NIST AI RMF** - Complementary risk management framework. Available at: nist.gov

10. **EU AI Act** - Regulation that IEEE 7000 can support compliance with. Available at: eur-lex.europa.eu

11. **Sarah Spiekermann** - "Ethical IT Innovation: A Value-Based System Design Approach" (book). CRC Press.

12. **IEEE Technology and Society Magazine** - Articles on ethics in engineering. Available at: ieeexplore.ieee.org

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
