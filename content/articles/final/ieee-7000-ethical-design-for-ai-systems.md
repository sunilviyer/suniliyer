---
title: "IEEE 7000: Ethical Design for AI Systems"
slug: ieee-7000-ethical-design-for-ai-systems
path: risk
publishDate: 2025-10-17
tldr: IEEE 7000 provides a systematic process for addressing ethical concerns during system design through Value-Based Engineering (VBE), extending traditional systems engineering to include ethical values alongside functional requirements. The standard distinguishes between values (abstract principles like fairness, privacy, dignity, autonomy) and value requirements (concrete, testable specifications derived from values). Most ethical failures in technology stem from failure to translate values into requirements—teams genuinely believe in fairness but lack specifications for what fair means for their specific system. The IEEE 7000 process runs alongside normal development in seven phases—(1) Concept of Operations and Context Exploration (understanding system and identifying ethically relevant aspects), (2) Ethical Value Elicitation (identifying values through stakeholder input, ethics research, regulatory analysis, prioritizing for context), (3) Ethical Requirements Definition (translating values into specific, measurable, achievable, relevant, testable requirements), (4) Ethical Risk Analysis (identifying failure modes, assessing likelihood/severity, planning treatment), (5) Design (creating alternatives, evaluating against value requirements, documenting trade-offs), (6) Verification and Validation (confirming system meets value requirements through testing, inspection, stakeholder validation, third-party audit), and (7) Operations and Sustainment (maintaining value alignment through monitoring, incident handling, updates, end-of-life planning). The standard defines key roles including Value Lead (overseeing process, facilitating elicitation, tracking compliance, resolving conflicts), Ethicist (advising on frameworks, reviewing requirements), Stakeholder Representatives (representing affected parties), and Development Team (implementing requirements, making value-affected decisions). For AI systems specifically, IEEE 7000 addresses unique considerations including AI-specific values (fairness/algorithmic bias, transparency/explainability, accountability, human autonomy, privacy across training/inference/model data, safety, dignity), AI-specific risks (opacity undermining transparency, scale amplifying impacts, automation removing human judgment, learning causing behavior change, bias amplification), and AI-specific verification challenges (non-determinism, distribution shift, emergent behavior, testing limitations, continuous change through retraining). The standard complements other frameworks—ISO 42001 provides organizational management while IEEE 7000 provides system-level engineering process; NIST AI RMF provides risk functions while IEEE 7000 provides detailed implementation guidance; EU AI Act requires ethical considerations while IEEE 7000 provides compliance process. Implementation challenges include value identification disagreements (requiring structured facilitation, documentation of conflicts), value conflicts requiring explicit recognition and trade-off analysis, measurability difficulties addressed through proxy measures and qualitative verification, and organizational resistance overcome through integration into existing processes and demonstrating business value. The key insight is that engineering ethics into systems requires systematic translation from abstract principles to concrete, testable requirements integrated throughout development lifecycle.
relatedConcepts:
  - ieee-7000
  - ieee-standards
  - value-based-engineering
  - ethical-design
  - ieee-7000-series
  - ieee-7001-transparency
  - ieee-7002-data-privacy
  - ieee-7003-algorithmic-bias
  - ieee-7005-employer-data
  - ieee-7007-ontology
  - ieee-7010-wellbeing
  - values-vs-requirements
  - ethical-values
  - value-requirements
  - abstract-principles
  - concrete-specifications
  - fairness-value
  - privacy-value
  - dignity-value
  - autonomy-value
  - safety-value
  - transparency-value
  - accountability-value
  - translation-problem
  - concept-of-operations
  - context-exploration
  - stakeholder-identification
  - ethical-value-elicitation
  - value-prioritization
  - value-conflicts
  - ethical-requirements-definition
  - testable-requirements
  - verifiable-requirements
  - specific-measurable-achievable-relevant-testable
  - ethical-risk-analysis
  - failure-modes
  - value-violation-risks
  - design-phase-ieee
  - value-rationale
  - design-trade-offs
  - verification-validation
  - verification-methods
  - acceptance-criteria
  - operations-sustainment
  - value-monitoring
  - incident-handling
  - end-of-life-planning
  - value-lead-role
  - ethicist-role
  - stakeholder-representatives
  - development-team-responsibilities
  - ai-specific-values
  - algorithmic-bias
  - explainability
  - human-autonomy
  - ai-specific-risks
  - opacity-risk
  - scale-amplification
  - automation-risk
  - learning-behavior-change
  - bias-amplification
  - ai-verification-challenges
  - non-determinism
  - distribution-shift
  - emergent-behavior
  - testing-limitations
  - continuous-change
  - hiring-ai
  - resume-screening
  - selection-rate-parity
  - four-fifths-rule
  - protected-characteristics
  - merit-based-hiring
  - human-oversight-value
  - dignity-value
  - fairness-requirement
  - transparency-requirement
  - privacy-requirement
  - merit-requirement
  - human-oversight-requirement
  - dignity-requirement
  - hidden-proxy-discrimination
  - historical-bias
  - over-reliance-on-ai
  - shap-values
  - feature-audit
  - bias-testing
  - value-identification-challenge
  - value-conflicts-challenge
  - measurability-challenge
  - organizational-resistance
  - proxy-measures
  - qualitative-verification
  - process-integration
  - pilot-implementation
  - capability-building
  - ieee-7000-iso-42001
  - ieee-7000-nist-ai-rmf
  - ieee-7000-eu-ai-act
  - value-sensitive-design
  - ethically-aligned-design
  - wi-fi-ieee-802-11
  - expert-consensus-standards
  - systems-engineering
  - functional-requirements
  - performance-requirements
  - value-embodiment
examples:
  - Credit scoring model fairness value requirement specifying equal false positive rates within 5% tolerance across demographic groups using Equalized Odds framework
  - Facial recognition system context exploration identifying stakeholders (users, people being recognized, operators, regulators) and ethical aspects (privacy, consent, discrimination, safety)
  - Facial recognition value elicitation prioritizing consent (people control image use), accuracy (false identifications cause harm), non-discrimination (equal performance), privacy (tracking enablement)
  - AI hiring system applying complete IEEE 7000 process from context exploration through verification, translating fairness value into selection rate parity requirement
  - Hidden proxy discrimination risk in hiring AI requiring extensive testing and feature audit to identify demographic proxies
  - Human oversight value requirement ensuring AI recommends but humans decide, with every rejection reviewed by human before communication
  - SHAP explainability method integrated into hiring AI design to satisfy transparency value requirement
  - Opt-in enrollment process chosen over automatic enrollment to satisfy consent value requirement despite efficiency trade-off
templates:
  - Context Exploration Report Template (stakeholders, environment, ethical considerations)
  - Value Elicitation Questionnaire (stakeholder interviews, ethics literature review, regulatory analysis)
  - Value Requirements Specification Template (specific, measurable, achievable, relevant, testable)
  - Ethical Risk Assessment Template (failure modes, likelihood, severity, treatment plans)
  - Design Decision Documentation Template (with value rationale and trade-off analysis)
  - Verification Plan Template (methods, acceptance criteria, evidence documentation)
  - Value Monitoring Dashboard Template (operational metrics, incident tracking, stakeholder feedback)
crossPathRefs:
  - slug: iso-iec-42001-ai-management-system-standard
    path: risk
    relevance: ISO 42001 focuses on organizational AI management systems while IEEE 7000 focuses on engineering ethics into specific systems; they complement each other with ISO 42001 providing governance and IEEE 7000 providing system-level implementation
  - slug: nist-ai-rmf-core-functions-govern-map-measure-manage
    path: risk
    relevance: NIST AI RMF provides risk management functions (GOVERN, MAP, MEASURE, MANAGE) while IEEE 7000 provides detailed value-based engineering process that implements those functions, particularly MAP (context, values) and MEASURE (verification)
  - slug: eu-ai-act-the-complete-compliance-guide
    path: responsibility
    relevance: EU AI Act requires risk management and ethical considerations for high-risk AI; IEEE 7000 provides systematic process demonstrating compliance with ethical design requirements
  - slug: algorithmic-bias-detection-and-mitigation
    path: responsibility
    relevance: Algorithmic bias is key ethical concern addressed through IEEE 7000's value elicitation and requirements translation process, with fairness requirements verified through bias testing
  - slug: ai-ethics-principles-and-frameworks
    path: responsibility
    relevance: AI ethics principles provide abstract values that IEEE 7000 systematically translates into concrete, testable requirements, bridging gap between principle and practice
tags:
  - article
  - ieee-7000
  - value-based-engineering
  - ethical-design
  - ai-governance
  - ai-ethics
  - ieee-standards
  - requirements-engineering
  - verification-validation
  - stakeholder-engagement
  - value-requirements
  - ethical-risk-analysis
  - system-design
  - iso-42001
  - nist-ai-rmf
category: Risk Frameworks & Standards
image: article-72-ieee-7000-ethical-design-for-ai-systems.jpg
imageAlt: IEEE 7000 - Ethical Design for AI Systems
author: Sunil Iyer
readingTime: 17
seoTitle: IEEE 7000 - Ethical Design for AI Systems
seoDescription: IEEE 7000 provides systematic Value-Based Engineering process for translating ethical values into concrete requirements. Learn the seven-phase process, key roles, AI-specific considerations, and practical implementation.
---



## Summary

IEEE 7000 addresses a fundamental gap in AI governance: translating abstract ethical principles into concrete system requirements. Published in 2021, this standard from the world's largest technical professional organization (over 400,000 members across 160 countries) provides a systematic process for addressing ethical concerns during system design through Value-Based Engineering (VBE).

The core concept extends traditional systems engineering beyond functional requirements (what system must do) and performance requirements (how well it must perform) to include value requirements (what ethical values system must embody). Most ethical failures in technology stem not from lack of good intentions but from failure to translate abstract values like fairness, privacy, dignity, and autonomy into concrete, testable specifications that development teams can implement and verify.

IEEE 7000 distinguishes between values (abstract principles describing what matters) and value requirements (concrete specifications that can be built, tested, and verified). For example, "fairness" is a value; "the credit scoring model shall produce equal false positive rates within 5% tolerance across demographic groups defined in the Equalized Odds framework" is a value requirement. The first tells you what matters; the second tells you what to build and test.

The standard defines a seven-phase process running alongside normal system development: Phase 1 (Concept of Operations and Context Exploration) understands what you're building, identifies stakeholders, and recognizes ethically relevant aspects; Phase 2 (Ethical Value Elicitation) gathers stakeholder input, researches ethical concerns, considers legal/regulatory requirements, identifies and resolves value conflicts, and prioritizes values for specific context; Phase 3 (Ethical Requirements Definition) translates each prioritized value into specific, measurable, achievable, relevant, testable requirements; Phase 4 (Ethical Risk Analysis) identifies potential failure modes for each value requirement, assesses likelihood and severity, and plans treatments; Phase 5 (Design) creates alternatives, evaluates against value requirements, selects optimal balance, and documents design decisions with value rationale; Phase 6 (Verification and Validation) confirms system meets value requirements through testing, inspection, code review, stakeholder validation, and third-party audit; Phase 7 (Operations and Sustainment) maintains value alignment during operation through monitoring, incident handling, updates as values or context change, and end-of-life planning.

The standard defines four key roles: Value Lead (oversees value-based engineering process, facilitates value elicitation, ensures value requirements development, tracks compliance, resolves conflicts), Ethicist (advises on ethical frameworks, helps interpret values, reviews requirements, provides expertise), Stakeholder Representatives (represent users, impacted people, communities, regulators), and Development Team (implements value requirements, makes value-affected design decisions, reports concerns).

For AI systems, IEEE 7000 addresses unique considerations across three dimensions: AI-specific values include fairness (algorithmic bias, equal treatment), transparency (explainability, disclosure of AI use), accountability (responsibility for AI decisions), human autonomy (AI supporting not replacing choice), privacy (training data, inference data, model data), safety (physical and psychological), and dignity (respectful treatment). AI-specific risks include opacity (AI decisions difficult to explain, undermining transparency/accountability), scale (affecting millions, amplifying impacts), automation (removing human judgment from sensitive decisions), learning (behavior changing through retraining or drift), and bias amplification (encoding and scaling existing biases). AI-specific verification challenges include non-determinism (different outputs for similar inputs), distribution shift (tested in one context, failing in another), emergent behavior (unexpected actions in novel situations), testing limitations (can't test every input), and continuous change (retraining changes behavior).

IEEE 7000 belongs to the broader IEEE 7000 series addressing ethics in technology: IEEE 7001 (transparency in autonomous systems), IEEE 7002 (data privacy processes), IEEE 7003 (algorithmic bias considerations), IEEE 7005 (employer data governance), IEEE 7007 (ontology for ethical AI design), and IEEE 7010 (well-being metrics for AI). IEEE 7000 provides the foundational overall process while others address specific concerns.

The standard complements other AI governance frameworks: with ISO 42001, ISO provides organizational AI management (policies, governance, roles) while IEEE 7000 provides system-level ethical design process; with NIST AI RMF, NIST provides risk management functions (GOVERN, MAP, MEASURE, MANAGE) while IEEE 7000 provides detailed engineering guidance implementing those functions, particularly MAP and MEASURE; with EU AI Act, the regulation requires risk management and ethical considerations for high-risk AI while IEEE 7000 provides systematic process demonstrating compliance.

Implementation challenges include value identification (stakeholder disagreement requiring structured facilitation, conflict documentation, context-based prioritization), value conflicts (privacy vs transparency, safety vs autonomy, requiring explicit recognition, ethical framework analysis, severity-based prioritization, least-bad outcome design, trade-off documentation), measurability (quantifying abstract concepts like dignity through proxy measures, qualitative verification, acknowledging limitations, combining multiple indicators), and organizational resistance (engineering teams viewing ethics as slowdown, overcome through integration into existing processes, demonstrating business value, starting small, securing leadership support).

Getting started requires learning fundamentals (reading standard, training key personnel), piloting on one system (working through complete process), adapting to context (modifying model process for organizational structure, culture, maturity), building capability (developing internal expertise, establishing Value Lead role, training development teams), integrating with existing processes (requirements management, design reviews, testing), and scaling after proving approach.

The key insight is that values need engineering—abstract principles must become concrete requirements to influence what gets built. Process matters—systematic approaches for value identification, translation, and verification produce better outcomes than ad hoc approaches. Integration is key—value-based engineering works alongside, not separate from, regular development. Verification is essential—claims about ethical AI need evidence, just like claims about functional correctness. Roles are important—someone needs to own value considerations.



## Key Learning Objectives

1. Understand Value-Based Engineering as extension of traditional systems engineering to include ethical values alongside functional and performance requirements
2. Distinguish between values (abstract principles) and value requirements (concrete, testable specifications) and recognize the translation challenge
3. Master the seven-phase IEEE 7000 process from concept exploration through operations and sustainment
4. Apply systematic ethical value elicitation through stakeholder input, ethics research, regulatory analysis, and conflict resolution
5. Translate abstract values into specific, measurable, achievable, relevant, testable (SMART) value requirements
6. Conduct ethical risk analysis identifying failure modes, assessing likelihood and severity, and planning treatment
7. Document design decisions with explicit value rationale and trade-off analysis
8. Verify value requirements through appropriate methods (testing, inspection, stakeholder validation, third-party audit)
9. Implement key roles including Value Lead, Ethicist, Stakeholder Representatives, and Development Team responsibilities
10. Address AI-specific considerations including unique values, risks, and verification challenges in non-deterministic, learning systems



## Understanding IEEE and Its Standards


### What Is IEEE?

IEEE (pronounced "Eye-triple-E") is the world's largest technical professional organization. With over 400,000 members across 160 countries, it develops standards for everything from Wi-Fi (IEEE 802.11) to electrical safety.

IEEE standards are influential because they represent expert consensus. When IEEE publishes a standard, it reflects input from engineers, researchers, and practitioners worldwide.

*Example:* When you connect to Wi-Fi, you're using IEEE 802.11 standard that defines how wireless networks operate. Similarly, IEEE 7000 defines how ethical values should be systematically incorporated into system design, bringing same engineering rigor to ethics as IEEE brings to wireless networking.


### The IEEE 7000 Series

IEEE 7000 is part of a broader family of standards addressing ethics in technology:

| Standard | Focus |
|----------|-------|
| IEEE 7000 | Overall ethical design process |
| IEEE 7001 | Transparency in autonomous systems |
| IEEE 7002 | Data privacy processes |
| IEEE 7003 | Algorithmic bias considerations |
| IEEE 7005 | Employer data governance |
| IEEE 7007 | Ontology for ethical AI design |
| IEEE 7010 | Well-being metrics for AI |

IEEE 7000 is the foundational standard—it provides the overall process, while the others address specific concerns.

*Example:* Organization building autonomous vehicle would use IEEE 7000 for overall ethical design process, IEEE 7001 for transparency requirements (how will passengers understand vehicle decisions?), IEEE 7003 for algorithmic bias (does object detection work equally across pedestrian demographics?), and IEEE 7010 for well-being metrics (passenger safety and comfort measures).

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

*Example:* Traditional requirements for loan approval AI specify functional requirement ("system shall process applications and output approve/deny decision within 2 seconds") and performance requirement ("system shall handle 10,000 applications per hour"). Value-based engineering adds value requirement ("system shall produce approval rates within 20% across demographic groups, measured quarterly and publicly reported").


### Values vs. Requirements

This distinction is crucial:

**Values** are abstract principles—fairness, privacy, dignity, autonomy. They describe what matters but not what to build.

**Value Requirements** are concrete specifications derived from values. They can be built, tested, and verified.

*Example:*
- **Value:** Fairness
- **Value Requirement:** "The credit scoring model shall produce equal false positive rates (within 5% tolerance) across demographic groups defined in the Equalized Odds framework, verified through quarterly bias testing using representative holdout dataset of minimum 10,000 samples per group."

The first tells you what matters. The second tells you what to build, how to measure it, and how to verify compliance.


### The Translation Problem

Most ethical failures in technology stem from a failure to translate values into requirements. Teams genuinely believe in fairness but have no specification for what fair means for their system.

IEEE 7000 provides a systematic process for this translation.

*Example:* Company states "we value privacy" but builds recommendation system that tracks user behavior across sites without specification for data minimization, retention limits, or user control. Without concrete requirements ("data retained maximum 30 days," "users can delete history," "no cross-site tracking without explicit consent"), abstract value doesn't influence implementation decisions.

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

**For AI Example:** Before building a facial recognition system:
- **What will it be used for?** Security access control for office building (not law enforcement surveillance)
- **Who are the stakeholders?** Employees (convenience), visitors (guest access), security team (operations), privacy advocates (concerned about tracking), regulators (data protection authorities)
- **What's the context?** Private corporate property, voluntary employment relationship, existing badge system alternative available
- **What ethical aspects emerge?** Privacy (tracking movements), consent (required or optional?), discrimination (recognition accuracy across demographics), safety (building security vs individual privacy), dignity (respectful treatment of people)


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

**For AI Example:** For the facial recognition system:

| Value | Justification | Priority |
|-------|---------------|----------|
| Consent | People should control their image use; voluntary in employment context | High |
| Accuracy | False identifications cause harm (denied access, wrong person admitted) | High |
| Non-discrimination | Must work equally across groups; legal requirement | High |
| Privacy | Recognition enables tracking; data protection laws apply | High |
| Transparency | People should know they're scanned; notice requirements | Medium |
| Security | System data needs protection from breaches | Medium |


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

**For AI Example:** Translating values to requirements:

| Value | Value Requirement |
|-------|------------------|
| Consent | Employees must opt-in before first recognition; opt-out available at any time through self-service portal; enrollment requires explicit informed consent with privacy notice; visitors must consent at reception with alternative badge access available |
| Accuracy | False acceptance rate below 0.1%; false rejection rate below 1%; accuracy reviewed annually with third-party testing; performance degradation triggers automatic system pause |
| Non-discrimination | Recognition accuracy shall not vary more than 2% across demographic groups (age, gender, skin tone, facial features); quarterly fairness testing with representative dataset minimum 1,000 samples per group |
| Privacy | Images processed in-memory only, never stored permanently; recognition events logged without images; logs retained 30 days maximum; data retention automatically enforced; no third-party data sharing |
| Transparency | Clear signage at all entry points; privacy notice accessible via QR code at each entry; annual public reporting on system use, accuracy metrics, and fairness testing results; monthly internal reporting to privacy committee |


### Phase 4: Ethical Risk Analysis

**Purpose:** Identify and assess risks of the system violating its value requirements.

**Activities:**
- Identify potential failure modes for each value requirement
- Assess likelihood and severity of violations
- Prioritize risks
- Plan risk treatments

**Key Output:** Ethical risk assessment with treatment plans.

**For AI Example:**

| Value Requirement | Risk | Likelihood | Severity | Treatment |
|------------------|------|------------|----------|-----------|
| Non-discrimination accuracy | Model underperforms on darker skin tones | Medium | High | Additional diverse testing data; fairness constraints in training; threshold tuning per group |
| Opt-out available | Technical failure prevents opt-out processing | Low | High | Redundant opt-out mechanisms (web, email, in-person); manual fallback; quarterly testing |
| Images never stored | Developer error stores images in logs | Medium | High | Automated code review for storage calls; runtime auditing; penetration testing; developer training |
| Consent before first use | New employee auto-enrolled without consent | Low | Medium | Enrollment workflow requires explicit consent step; audit trail; periodic verification |


### Phase 5: Design

**Purpose:** Create system design that satisfies value requirements.

**Activities:**
- Develop design alternatives
- Evaluate alternatives against value requirements
- Select design that best balances requirements
- Document design decisions and trade-offs
- Involve value considerations in architecture choices

**Key Output:** System design with documented value rationale.

**For AI Example:** Design decisions for facial recognition:

| Decision | Options Considered | Choice | Value Rationale |
|----------|-------------------|--------|-----------------|
| Processing location | Cloud vs. edge device | Edge device | Privacy: data stays local, no network transmission of biometric data |
| Model architecture | Deep CNN vs. lightweight | Balanced hybrid | Accuracy vs. explainability: Deep CNN for recognition, lightweight explainability layer for decisions |
| Database storage | Centralized vs. federated | Federated per building | Privacy: limits breach impact; Security: no single point of failure |
| Enrollment process | Automatic enrollment vs. opt-in | Explicit opt-in with alternatives | Consent: voluntary participation; Dignity: respects individual choice |
| Accuracy threshold | High security vs. convenience | Adjustable with default favoring inclusion | Non-discrimination: reduces false rejections; Safety: backup authentication available |


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

**For AI Example:**

| Value Requirement | Verification Method | Acceptance Criteria | Evidence |
|------------------|---------------------|---------------------|----------|
| Non-discrimination (<2% variance) | Bias testing across demographic groups | Maximum 2% accuracy variance across 6 groups | Test report: 0.8-1.9% variance, PASSED |
| Privacy (no storage) | Automated log analysis; code audit; penetration testing | Zero image storage events detected | Security audit report: no storage violations found |
| Transparency (signage) | Physical inspection; user surveys | Signage at all entry points; 80% users aware | Inspection checklist: 12/12 entries signed; Survey: 87% aware |
| Accuracy (FAR <0.1%, FRR <1%) | Benchmark testing with 50,000 test samples | FAR <0.1%, FRR <1% | Test report: FAR 0.08%, FRR 0.7%, PASSED |
| Consent before enrollment | Enrollment workflow audit; consent database audit | 100% enrollments have documented consent | Audit: 2,847 enrollments, 2,847 consent records, PASSED |


### Phase 7: Operations and Sustainment

**Purpose:** Maintain value alignment during system operation.

**Activities:**
- Monitor value-related metrics in production
- Handle incidents affecting values
- Update system as values or context change
- Plan for end-of-life

**Key Output:** Ongoing value monitoring and improvement.

**For AI Example:**
- **Weekly:** Automated accuracy and fairness metrics dashboard review; anomaly alerts
- **Monthly:** Fairness metrics review by AI Governance Committee; trend analysis; stakeholder feedback collection through surveys
- **Quarterly:** Formal value requirements review; bias testing with updated dataset; stakeholder validation sessions
- **Annually:** Complete value requirements update; third-party fairness audit; privacy impact assessment; system value alignment certification
- **Incident Response:** Ethics violation escalation protocol; temporary system pause authority; root cause analysis; corrective action implementation
- **End-of-Life:** Data deletion procedures; consent withdrawal processing; decommissioning notification

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

*Example:* On facial recognition project, Value Lead chairs Phase 2 value elicitation workshops with diverse stakeholders, documents value conflicts (privacy vs convenience), facilitates resolution (opt-in design preserving both), ensures all prioritized values translate to specific requirements, tracks verification status, escalates to project leadership when value requirements can't be met within budget/schedule.


### Ethicist

If available, an ethics professional who:
- Advises on ethical frameworks
- Helps interpret values
- Reviews value requirements
- Provides ethical expertise

*Example:* Ethicist helps team understand difference between consequentialist approach (maximizing overall benefit) and deontological approach (respecting individual rights) when resolving consent value conflict, recommends rights-based approach for facial recognition given biometric sensitivity, reviews value requirements to ensure they reflect chosen ethical framework.


### Stakeholder Representatives

People who represent affected parties:
- Users
- People impacted by the system
- Communities
- Regulators

*Example:* For facial recognition: employee representative (daily users experiencing convenience vs privacy trade-off), visitor representative (occasional users with different expectations), privacy advocate (representing broader privacy concerns), facilities manager (operational perspective), data protection officer (regulatory compliance).


### Development Team

Engineers, developers, and designers who:
- Implement value requirements
- Make design decisions affecting values
- Report value-related concerns

*Example:* ML engineer implements fairness constraints in model training to meet non-discrimination requirement, reports to Value Lead that achieving <2% variance across all demographic groups requires 40% more training data than budgeted, triggering value vs resource trade-off discussion; frontend developer implements consent workflow meeting transparency and consent requirements with clear privacy notice and explicit opt-in step.

---


## Applying IEEE 7000 to AI

While IEEE 7000 applies to any technology, AI systems present specific considerations:


### AI-Specific Values

When eliciting values for AI systems, consider:

| Value | AI Relevance |
|-------|--------------|
| Fairness | Algorithmic bias, equal treatment across demographic groups |
| Transparency | Explainability of AI decisions, disclosure of AI use |
| Accountability | Who's responsible for AI decisions and outcomes |
| Human autonomy | AI supporting not replacing human choice and judgment |
| Privacy | Training data collection, inference data handling, model data protection |
| Safety | Physical safety (autonomous systems), psychological well-being (content recommendations) |
| Dignity | Respectful treatment by AI systems, avoiding dehumanization |


### AI-Specific Risks

AI systems introduce unique ethical risks:

**Opacity:** AI decisions may be difficult to explain, undermining transparency and accountability values.

*Example:* Deep neural network credit model produces accurate predictions but SHAP explanation shows individual feature contributions don't clearly map to understandable reasons, creating tension between accuracy (performance requirement) and transparency (value requirement).

**Scale:** AI can affect millions of people, amplifying ethical impacts.

*Example:* Content recommendation bias that would affect hundreds with manual curation affects millions when automated, turning minor fairness issue into major societal impact requiring heightened value requirements.

**Automation:** AI can remove human judgment from sensitive decisions.

*Example:* Fully automated resume screening violates human oversight value when rejecting qualified candidates without human review, requiring value requirement for human-in-the-loop at critical decision points.

**Learning:** AI behavior can change over time through retraining or drift.

*Example:* Chatbot initially meeting dignity value through respectful responses gradually adopts problematic language learned from user interactions, requiring continuous value monitoring not just deployment verification.

**Bias amplification:** AI can encode and scale existing biases.

*Example:* Hiring AI trained on historical data amplifies past discrimination (when certain demographics were systematically excluded), requiring value requirement addressing not just current fairness but historical bias correction.


### AI-Specific Verification Challenges

Verifying AI meets value requirements has unique challenges:

**Non-determinism:** AI may give different outputs for similar inputs.

*Example:* Stochastic model produces different risk scores for same loan application on different runs, complicating verification that fairness requirement is consistently met, requiring statistical verification approaches rather than deterministic testing.

**Distribution shift:** AI tested in one context may fail in another.

*Example:* Facial recognition achieving non-discrimination requirement in lab testing with balanced dataset fails in production where demographic distribution differs, requiring verification in realistic operational conditions.

**Emergent behavior:** AI may behave unexpectedly in novel situations.

*Example:* Autonomous vehicle meeting safety value in tested scenarios encounters novel combination (pedestrian in wheelchair crossing during snowstorm) where behavior is unpredictable, requiring ongoing monitoring supplementing pre-deployment verification.

**Testing limitations:** You can't test every possible input.

*Example:* Medical diagnosis AI can't be tested on every possible symptom combination, requiring value verification through combination of testing on representative cases, stakeholder validation by medical experts, and ongoing monitoring.

**Continuous change:** AI may be retrained, changing behavior.

*Example:* Fraud detection model retrained monthly to adapt to new fraud patterns must re-verify fairness requirement after each retraining, requiring automated verification pipeline integrated into deployment process.

---


## Detailed Example: AI Hiring System Case Study

Let's walk through how a company might apply IEEE 7000 to an AI resume screening tool.


### Context Exploration

**System:** AI resume screening tool for first-pass candidate evaluation

**Stakeholders:** Job applicants (affected by decisions), recruiters (system users), hiring managers (decision makers based on AI recommendations), HR leadership (policy owners), legal team (compliance), diversity and inclusion office (equity concerns), technical team (system builders)

**Context:** Used for first-pass screening in technology company hiring across engineering, product, and design roles; processes 50,000 applications annually; reduces recruiter workload by 70%; currently uses manual screening with inconsistent quality

**Ethically relevant aspects identified:**
- Hiring decisions fundamentally affect people's livelihoods and career trajectories
- High risk of demographic bias in screening (historical patterns, proxy features)
- Removal of human judgment in initial screening creates accountability questions
- Privacy of applicant data (resumes contain sensitive information)
- Transparency about AI use in hiring (applicant expectations and legal requirements)
- Dignity concerns (avoiding dehumanizing automated rejection)


### Value Elicitation

Through stakeholder consultation (interviews with 30 applicants, 15 recruiters, 8 hiring managers, diversity office, legal team) and ethics research (literature review on algorithmic fairness in hiring, regulatory analysis of NYC Local Law 144 and EU AI Act):

| Value | Source | Priority | Justification |
|-------|--------|----------|---------------|
| Fairness | Legal requirements (anti-discrimination law), ethics principles (equal treatment), business need (diverse workforce) | Critical | Legal compliance mandatory; discrimination causes severe harm; fairness violations create liability and reputational damage |
| Transparency | Applicant expectations (survey: 87% want to know if AI used), regulations (NYC LL 144, EU AI Act Article 13) | High | Regulatory requirement; trust building; applicant rights to understand process |
| Privacy | Data protection laws (GDPR, CCPA), ethics | High | Legal requirement; sensitive personal data; potential misuse risk |
| Merit | Business need (hire best candidates), fairness (job-relevant criteria only) | High | Core hiring purpose; fairness component (irrelevant factors = unfair) |
| Human oversight | Ethics principles (meaningful human control), risk management (AI limitations), applicant expectations | High | Prevents AI errors from directly harming people; maintains accountability; addresses trust concerns |
| Dignity | Ethics principles (respectful treatment), brand reputation | Medium | Avoiding dehumanizing automated process; candidate experience affects employer brand |


### Value Requirements

Translating values to concrete, testable requirements:

| Value | Value Requirement |
|-------|------------------|
| Fairness | Selection rates shall be within 20% across demographic groups (race, gender, age) measured over 6-month periods (four-fifths rule compliance); no use of protected characteristics (race, gender, age, disability, etc.) as input features; no use of proxy features with >0.3 correlation with protected characteristics; annual third-party bias audit required |
| Transparency | Applicants shall be informed AI is used in screening on job posting and application page; explanation of AI decision factors available on request within 5 business days; annual public disclosure of AI use in hiring, demographic impact statistics, and bias testing results; recruiters provided AI decision rationale for each candidate |
| Privacy | Resumes used only for evaluation of specific application; no use for training without consent; data deleted after 12 months or 90 days post-hire/rejection (whichever earlier); no third-party sharing; encryption at rest and in transit; access limited to need-to-know basis with audit logging |
| Merit | Only job-relevant factors shall influence AI decisions (skills, education, experience directly related to role requirements); regular validation against job success metrics; no consideration of factors unrelated to job performance (graduation year, irrelevant hobbies, name, location) |
| Human oversight | AI provides recommendation score and rationale, not final decision; every rejection reviewed by human recruiter before communication to applicant; recruiter can override AI recommendation with documented justification; high-scoring candidates (top 20%) automatically advance regardless of AI concerns |
| Dignity | Respectful communication in all automated messages; no humiliating feedback; constructive rejection notices offering general improvement suggestions when possible; applicants can request human review of AI decision |


### Ethical Risk Analysis

Identifying and analyzing risks of value requirement violations:

| Value Requirement | Risk | Likelihood | Severity | Treatment |
|------------------|------|------------|----------|-----------|
| No proxy features >0.3 correlation | Hidden demographic proxies in features (university, neighborhood, name patterns) | Medium | High | Extensive proxy testing using demographic correlation analysis; feature audit by diversity office; regular monitoring; explainability analysis to detect proxies |
| Selection rate parity (20%) | Training data reflects historical bias (past underrepresentation) | High | High | Bias-aware training with fairness constraints; diverse training data with synthetic minority oversampling if needed; quarterly bias testing; adjustment if parity violated |
| Human review all rejections | Over-reliance on AI by recruiters (rubber-stamping without real review) | Medium | Medium | Recruiter training emphasizing review responsibility; random audit of reviewer quality; decision time tracking (flags <30 seconds as insufficient); performance management includes review quality |
| Applicants informed about AI | Unclear disclosure, applicants miss notice | Medium | Medium | Prominent disclosure at multiple points (job posting, application page, confirmation email); applicant acknowledgment checkbox; periodic applicant surveys measuring awareness |
| Merit-based only | AI learns irrelevant correlations from training data | Medium | High | Regular validation against job performance; feature importance analysis; explainability review; removal of features with unclear relevance |


### Design Decisions

Key architectural and implementation choices with value rationale:

| Decision | Options Considered | Choice | Value Rationale |
|----------|-------------------|--------|-----------------|
| Features used | Full resume text vs. structured features | Structured features only (skills, education, experience) | Fairness: prevents AI learning from demographic proxies in writing style, names, addresses; Merit: focuses on job-relevant factors; Transparency: explainable feature importance |
| AI decision type | Binary (pass/fail) vs. scoring | Recommendation score (0-100) with explanation | Human oversight: enables human judgment incorporation; Transparency: shows confidence level; Fairness: allows threshold adjustment for parity |
| Explainability method | Black box vs. SHAP | SHAP values for each decision | Transparency: can explain individual decisions; Merit: verifies job-relevant factors driving score; Fairness: enables proxy detection |
| Human review scope | Sample review vs. all rejections | All rejections reviewed | Human oversight: prevents automated harm; Dignity: ensures respectful treatment; catches AI errors |
| Data retention | Indefinite vs. time-limited | 12 months or 90 days post-decision | Privacy: minimizes data exposure; compliance with GDPR minimization principle |


### Verification

Verifying the system meets all value requirements before deployment:

| Value Requirement | Verification Method | Acceptance Criteria | Result | Evidence |
|------------------|---------------------|---------------------|--------|----------|
| Selection rate parity (<20% variance) | Bias testing on 12-month historical data (18,000 applications) across race, gender, age groups | Maximum 20% variance from overall selection rate for each group | PASSED | Test report: Race variance 4-11%, Gender variance 7%, Age variance 3-15% |
| No protected characteristics as features | Feature audit and code review | Zero protected characteristics in feature set | PASSED | Code review: confirmed 27 features, none protected; Data audit: no protected characteristics in training data |
| Human review all rejections | Audit log analysis | 100% of rejections have human review timestamp and reviewer ID | PASSED | Log audit: 1,247 rejections, 1,247 reviews (100%); average review time 2.3 minutes |
| Disclosure to applicants | Application flow review and user testing | Disclosure visible on job posting and application page; applicant comprehension >90% | PASSED | User testing (n=50): 96% saw disclosure, 92% understood AI use |
| No proxy features (correlation <0.3) | Statistical correlation analysis of features vs demographics | All features <0.3 correlation with protected characteristics | PASSED | Correlation analysis: maximum 0.24 (university tier with socioeconomic status); Feature review: acceptable as job-relevant |
| Merit-based (job-relevant only) | SME review of features and validation against job success | All features validated as job-relevant by hiring managers; positive correlation with 6-month performance | PASSED | Validation study: all 27 features approved by hiring managers; correlation with performance r=0.31 (significant) |

---


## Relationship to Other Standards


### With ISO 42001

ISO 42001 (AI management systems) focuses on organizational management of AI. IEEE 7000 focuses on engineering ethics into specific systems. They complement each other:

- **ISO 42001:** Organizational policies, governance structures, roles and responsibilities, management processes
- **IEEE 7000:** System-level ethical design process, value requirements engineering, verification methods

**Integration approach:** Use ISO 42001 to establish organizational AI governance (Clause 5 Leadership, Clause 6 Planning with risk assessment, Clause 8 Operation with impact assessment), use IEEE 7000 as the methodology for conducting impact assessments and translating organizational AI policy into system-level value requirements.


### With NIST AI RMF

NIST AI RMF provides risk management functions (GOVERN, MAP, MEASURE, MANAGE). IEEE 7000 provides detailed engineering guidance that can inform how those functions are executed, particularly for the MAP and MEASURE functions.

**Integration approach:** NIST GOVERN establishes organizational culture and policies (creates value context for IEEE 7000), NIST MAP identifies context and risks (corresponds to IEEE 7000 Phases 1-2: context exploration and value elicitation), NIST MEASURE assesses risks and impacts (corresponds to IEEE 7000 Phases 3-4: requirements definition and risk analysis), NIST MANAGE implements responses (corresponds to IEEE 7000 Phases 5-7: design, verification, operations).


### With EU AI Act

The EU AI Act requires risk management and ethical considerations for high-risk AI (Article 9). IEEE 7000 provides a process that can demonstrate compliance with these requirements.

**Integration approach:** EU AI Act Article 9 requires risk management system throughout AI lifecycle—IEEE 7000 provides systematic lifecycle process; Article 9 requires identification and mitigation of risks to health, safety, and fundamental rights—IEEE 7000 value elicitation identifies these as values, requirements translation specifies mitigation; Article 13 requires transparency and information to users—IEEE 7000 transparency value and requirements address this; Article 10 requires data governance ensuring training data appropriateness—IEEE 7000 merit and fairness values drive data requirements.

---


## Implementation Challenges


### Challenge 1: Value Identification

Not all stakeholders agree on values. Different cultures, perspectives, and interests lead to different priorities.

**Solutions:**
- Use structured facilitation techniques (nominal group technique, Delphi method) to gather diverse input systematically
- Document conflicts and resolution rationale transparently (create value conflict register)
- Prioritize based on context and impact (severity of violation, number of people affected, legal requirements)
- Accept that perfect consensus is unlikely—make defensible decisions with documented justification
- Involve ethics expertise when stakeholders reach impasse

*Example:* Facial recognition project has value conflict: security team prioritizes safety value (requiring high accuracy, comprehensive coverage), while privacy advocates prioritize privacy value (requiring consent, minimal data). Resolution: Prioritize privacy as higher due to legal requirements and severity of privacy violations; implement safety value through consent-based enrollment ensuring willing participants; document that perfect safety (forced enrollment) rejected in favor of privacy-respecting approach with adequate security (voluntary enrollment covers 85% of employees, acceptable per security risk assessment).


### Challenge 2: Value Conflicts

Values often conflict. Privacy may conflict with transparency. Safety may conflict with autonomy.

**Solutions:**
- Recognize conflicts explicitly rather than ignoring (create value conflict matrix)
- Use ethical frameworks to analyze trade-offs (consequentialism: which maximizes welfare? Deontology: which respects rights?)
- Prioritize based on severity of violation (which violation causes greater harm?)
- Design for the "least bad" outcome when perfect satisfaction is impossible
- Document trade-offs and rationale for accountability and future review

*Example:* Medical AI has transparency-privacy conflict: transparency value requires sharing patient data with patients and providers for explainability; privacy value requires data minimization. Ethical analysis: privacy violations (HIPAA breaches) have severe legal and personal consequences; transparency can be achieved through aggregate explanations without individual data. Resolution: Implement transparency through model-level explanations (feature importance, aggregate patterns) rather than instance-level (specific patient data), providing meaningful explainability while preserving privacy. Trade-off: less granular explanations, acceptable given privacy priority.


### Challenge 3: Measurability

Some values are hard to measure. How do you quantify "dignity"?

**Solutions:**
- Use proxy measures where direct measurement is impossible (dignity → user satisfaction, complaint rates, respectful language in communications)
- Use qualitative verification through stakeholder validation ("do you feel treated with dignity?")
- Acknowledge measurement limitations explicitly in requirements
- Combine multiple indicators to triangulate (no single measure captures dignity, but combination of metrics provides reasonable coverage)

*Example:* Dignity value in hiring AI is difficult to quantify directly. Proxy measures: rejection message tone analysis (sentiment score >0.6 on 0-1 scale, no negative language), applicant satisfaction survey (dignity question >4.0 on 5-point scale), complaint rate (<1% of applicants), time to rejection (>24 hours, avoiding instant automated rejection feeling). Qualitative verification: focus groups with rejected applicants assessing experience (target: >70% feel treated respectfully despite rejection). Combined measures provide reasonable dignity verification despite lacking direct quantification.


### Challenge 4: Organizational Resistance

Engineering teams may see ethics as slowing them down.

**Solutions:**
- Integrate ethics into existing processes rather than adding separate tracks (value requirements in requirements management, value considerations in design reviews, value verification in testing)
- Show business value: risk reduction (avoid discrimination lawsuits), trust building (customer preference for ethical AI), competitive advantage (differentiation), regulatory compliance (avoid fines)
- Start small and demonstrate value (pilot on one project, show benefits, scale based on success)
- Get leadership support (executive sponsorship signals importance, allocates resources)

*Example:* Development team initially resists IEEE 7000 as "ethics bureaucracy" slowing delivery. Approach: Integrate value requirements into existing Jira workflow (not separate tracking), show risk reduction (bias incident at competitor cost $2M settlement, IEEE 7000 process would have caught), start with single high-risk project (hiring AI) demonstrating value (prevented demographic bias that would have violated anti-discrimination law), secure CTO sponsorship (includes value-based engineering in architecture review). Result: Team sees ethics as risk management, not slowdown; adoption expands to other projects.

---


## Getting Started with IEEE 7000

For organizations new to value-based engineering:


### Step 1: Learn the Fundamentals

Read IEEE 7000 standard (available for purchase from IEEE) and related materials. Train key personnel on value-based engineering concepts.

**Timeline:** 1-2 months
**Investment:** Standard purchase (~$200), training (internal or external workshop, ~$2,000-10,000)


### Step 2: Pilot on One System

Don't try to apply IEEE 7000 to everything immediately. Choose one system (ideally medium complexity, high ethical risk, supportive team) and work through the process.

**Timeline:** 3-6 months for first system
**Investment:** Value Lead time allocation (20-50% dedicated), stakeholder workshop time (10-20 hours total), verification activities


### Step 3: Adapt to Your Context

IEEE 7000 is a model process—adapt it to your organization's structure, processes, and culture.

**Adaptations might include:**
- Simplifying for low-risk systems (lightweight value elicitation)
- Integrating with existing requirements management (value requirements in Jira)
- Adjusting roles (Value Lead as part-time responsibility for product managers)
- Tailoring documentation (templates matching organizational standards)


### Step 4: Build Capability

Develop internal expertise. Consider establishing formal Value Lead role. Train development teams on value-based engineering concepts.

**Capability building:**
- Identify 3-5 people for Value Lead training (formal IEEE training or internal development)
- Create internal IEEE 7000 handbook adapted to organizational context
- Integrate value-based engineering into developer onboarding
- Establish ethics advisor network (internal ethics committee or external consultants)


### Step 5: Integrate

Connect value-based engineering to existing processes—requirements management, design reviews, testing.

**Integration points:**
- Requirements management: Value requirements tracked alongside functional requirements
- Design reviews: Value rationale required for design decisions
- Testing: Value verification included in test plans
- Release approval: Value requirement verification as release gate


### Step 6: Scale

Once you've proven the approach (successful pilot, demonstrated value, team capability), expand to other systems and teams.

**Scaling approach:**
- Mandatory for high-risk systems (those affecting fundamental rights, safety, large populations)
- Recommended for medium-risk systems (simplified process)
- Optional/tailored for low-risk systems
- Build community of practice (Value Leads across teams sharing lessons)

---


## Conclusion

IEEE 7000 addresses a fundamental gap in AI governance: the translation from ethical principles to working systems.

Key takeaways:

1. **Values need engineering:** Abstract principles must become concrete requirements to influence what gets built—"we value fairness" doesn't change code without specific requirements

2. **Process matters:** Systematic processes for value identification, translation, and verification produce better outcomes than ad hoc approaches—repeatable results require repeatable processes

3. **Integration is key:** Value-based engineering works alongside, not separate from, regular development—ethics isn't separate phase but integrated throughout lifecycle

4. **Verification is essential:** Claims about ethical AI need evidence, just like claims about functional correctness—"we're ethical" requires proof

5. **Roles are important:** Someone needs to own value considerations (Value Lead)—without ownership, values get lost in competing priorities

For AI governance professionals, IEEE 7000 provides a crucial piece of the puzzle. It's not enough to have policies and principles—you need ways to implement them. IEEE 7000 shows how.

As AI becomes more powerful and pervasive, the ability to engineer ethics into systems becomes more important. IEEE 7000 is a leading approach for doing exactly that—translating "we should build ethical AI" into "here's how to build ethical AI" with concrete, systematic engineering process.

The standard represents engineering community's recognition that ethics can't be an afterthought—it must be engineered in from the start, with same rigor applied to functional requirements. Just as you wouldn't ship safety-critical system without safety requirements, verification, and validation, IEEE 7000 argues you shouldn't ship AI systems without value requirements, verification, and validation.

---


## Sources and Further Reading

1. **IEEE 7000-2021** - IEEE Standard Model Process for Addressing Ethical Concerns During System Design. Available at: standards.ieee.org/standard/7000-2021.html

2. **IEEE 7001-2021** - Transparency of Autonomous Systems. Available at: standards.ieee.org

3. **IEEE 7002-2022** - Data Privacy Process. Available at: standards.ieee.org

4. **IEEE 7003-2021** - Algorithmic Bias Considerations. Available at: standards.ieee.org

5. **IEEE Ethically Aligned Design** - Vision document that informed the 7000 series. Available at: ethicsinaction.ieee.org

6. **IEEE SA (Standards Association)** - Autonomous and Intelligent Systems resources. Available at: standards.ieee.org/initiatives/autonomous-intelligence-systems/

7. **Value Sensitive Design** - Academic methodology related to IEEE 7000. See work by Batya Friedman at University of Washington. Available at: vsdesign.org

8. **ISO/IEC 42001** - AI management systems (related standard). Available at: iso.org

9. **NIST AI RMF** - Complementary risk management framework. Available at: nist.gov/itl/ai-risk-management-framework

10. **EU AI Act** - Regulation that IEEE 7000 can support compliance with. Available at: eur-lex.europa.eu

11. **Sarah Spiekermann** - "Ethical IT Innovation: A Value-Based System Design Approach" (book). CRC Press, 2015.

12. **IEEE Technology and Society Magazine** - Articles on ethics in engineering. Available at: ieeexplore.ieee.org

13. **ACM Code of Ethics** - Related professional ethics framework. Available at: acm.org/code-of-ethics

14. **The IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems** - Broader context for IEEE 7000 series. Available at: standards.ieee.org/industry-connections/ec/autonomous-systems/

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*

**Next Article:** Article 73: Week 36-40 content continues the curriculum exploration (Publishing: October 20, 2025)
