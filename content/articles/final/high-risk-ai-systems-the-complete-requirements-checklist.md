---
title: High-Risk AI Systems - The Complete Requirements Checklist
slug: high-risk-ai-systems-the-complete-requirements-checklist  
path: risk
publishDate: 2025-08-22
tldr: EU AI Act Articles 9-15 establish seven core requirements for high-risk AI systems creating integrated compliance framework - Requirement 1 Risk Management System (Article 9) mandates continuous iterative process identifying/analyzing/evaluating/mitigating health/safety/fundamental rights risks throughout lifecycle including risk identification (known/foreseeable societal impacts like discrimination), risk estimation and evaluation (likelihood/severity), mitigation measures (eliminate/reduce to acceptable levels), real-world testing, residual risk documentation. Requirement 2 Data and Data Governance (Article 10) requires training/validation/testing data meeting quality standards (relevant to purpose, representative of affected populations, error-free, complete) with documented design choices, active bias examination especially affecting protected groups, governance practices (collection/sourcing, preparation/processing, annotation/labeling, gap analysis, privacy protection) plus special category data processing only for bias detection/correction with strict safeguards. Requirement 3 Technical Documentation (Article 11) demands comprehensive documentation before market placement covering general description (purpose, provider, version, integration), detailed description (logic, specifications, architecture, algorithms, training methodology, design choices/rationales), development process (data requirements/sources, preparation/labeling, training/validation/testing, performance metrics), monitoring/functioning (capabilities/limitations, foreseeable misuse, human oversight, output interpretation), risk management materials, change management records - Annex IV specifies complete contents. Requirement 4 Record-Keeping/Logging (Article 12) requires automatic event recording enabling lifecycle operation tracing including time periods, reference databases, input data leading to matches, persons involved in verification with retention matching purpose/legal requirements. Requirement 5 Transparency/Information to Deployers (Article 13) requires clear sufficient information through instructions for use covering identity/contact, characteristics/capabilities/limitations (purpose, accuracy/robustness/security levels, performance-affecting circumstances, misuse risks), lifecycle changes/updates, human oversight guidance, computational/hardware resources, technical log specifications, expected lifetime/maintenance. Requirement 6 Human Oversight (Article 14) requires design-integrated oversight enabling humans to prevent/minimize risks with capabilities for understanding system capabilities/limitations, automation bias awareness, correct output interpretation, deciding not to use in situations, overriding/reversing outputs, intervening/stopping operation - oversight appropriate to context with competent trained authorized overseers. Requirement 7 Accuracy/Robustness/Cybersecurity (Article 15) requires appropriate lifecycle levels for accuracy (matching purpose with declared metrics/thresholds), robustness (resilience to errors/faults, adversarial input resistance, fail-safe measures, continuous learning safeguards), cybersecurity (protection against exploits/data poisoning/adversarial inputs/model extraction defending against specific attacks like model evasion/inversion/stealing). After meeting all requirements must conduct conformity assessment before market placement - most high-risk systems use self-assessment (internal conformity assessment Annex VI), some categories (biometric identification) require third-party notified body assessment, successful assessment leads to EU declaration of conformity, CE marking affixation, EU database registration with August 2 2026 deadline for most high-risk requirements.
relatedConcepts:
  - high-risk-ai-requirements
  - eu-ai-act-articles-9-15
  - risk-management-system-article-9
  - data-governance-article-10
  - technical-documentation-article-11
  - record-keeping-logging-article-12
  - transparency-information-article-13
  - human-oversight-article-14
  - accuracy-robustness-security-article-15
  - continuous-risk-management
  - risk-identification
  - risk-estimation-evaluation
  - risk-mitigation-measures
  - residual-risk-assessment
  - data-quality-standards
  - training-data-requirements
  - validation-testing-data
  - data-representativeness
  - bias-examination
  - special-category-data-processing
  - data-governance-practices
  - annex-iv-documentation
  - general-system-description
  - detailed-technical-specifications
  - development-process-documentation
  - performance-metrics-documentation
  - capabilities-limitations
  - foreseeable-misuse
  - change-management-records
  - automatic-logging
  - event-recording
  - traceability-requirements
  - log-retention-period
  - instructions-for-use
  - deployer-information
  - performance-characteristics
  - known-limitations
  - human-oversight-measures
  - design-integrated-oversight
  - automation-bias-awareness
  - override-capability
  - intervention-controls
  - stop-button
  - competent-oversight
  - accuracy-metrics
  - robustness-testing
  - adversarial-resistance
  - fail-safe-mechanisms
  - continuous-learning-safeguards
  - cybersecurity-protections
  - data-poisoning-protection
  - model-evasion-protection
  - model-inversion-protection
  - model-stealing-protection
  - conformity-assessment
  - self-assessment-annex-vi
  - third-party-notified-body
  - eu-declaration-conformity
  - ce-marking
  - eu-database-registration
examples:
  - ai-governance-use-cases
  - ai-regulatory-compliance-examples
  - algorithmic-bias-case-studies
templates:
  - ai-governance-framework-builder
  - ai-regulatory-readiness-assessment
  - ai-risk-assessment-template
  - ai-privacy-impact-assessment-framework
crossPathRefs:
  - path: responsibility
    articles:
      - the-eu-ai-act-europes-landmark-regulation-explained
      - data-protection-impact-assessments-the-ai-dpia-guide
      - ai-governance-frameworks-building-your-organizations-approach
  - path: risk
    articles:
      - eu-ai-act-risk-classification-prohibited-high-risk-and-beyond
      - algorithmic-bias-how-ai-discriminates-and-why
      - the-black-box-problem-why-ai-explainability-matters
tags:
  - high-risk-ai
  - eu-ai-act
  - compliance-requirements
  - risk-management
  - data-governance
  - technical-documentation
  - logging
  - human-oversight
  - accuracy
  - robustness
  - cybersecurity
category: AI Risks & Principles
image: high-risk-ai-systems-the-complete-requirements-checklist.jpg
imageAlt: EU AI Act seven pillars of high-risk AI compliance showing interconnected requirements - Risk Management, Data Governance, Technical Documentation, Logging, Transparency, Human Oversight, Accuracy/Robustness/Security leading to Conformity Assessment
author: Sunil Iyer
readingTime: 19
seoTitle: High-Risk AI Requirements - EU AI Act Articles 9-15 Compliance Checklist
seoDescription: EU AI Act high-risk AI seven requirements - risk management system, data quality/governance, technical documentation (Annex IV), automatic logging, transparency/deployer information, human oversight design, accuracy/robustness/cybersecurity, conformity assessment, CE marking, database registration.
---

## Summary

EU AI Act Articles 9-15 establish seven core requirements for high-risk AI systems creating integrated compliance framework ensuring safety, transparency, and accountability before and after market placement with August 2 2026 deadline for most systems. Requirement 1 Risk Management System (Article 9) mandates continuous iterative lifecycle process not one-time assessment: identify known and foreseeable risks to health/safety/fundamental rights including societal impacts like discrimination (example: hiring AI identifying gender/age/disability discrimination, privacy concerns), estimate and evaluate each risk's occurrence likelihood and impact severity (example: 15% higher rejection for non-Western names = high likelihood + high severity affecting livelihoods), implement mitigation measures eliminating or reducing risks to acceptable levels (example: name blinding, fairness constraints, human borderline review), test for appropriate risk levels in real-world conditions (example: historical data disparate impact testing across protected groups), document residual risks remaining after mitigation with acceptability justification - process must be iterative updating when system changes or new risks emerge.

Requirement 2 Data and Data Governance (Article 10) requires training/validation/testing data meeting quality standards: relevant design choices documented (collection methods, preparation procedures, labeling approaches with example: "40% client historical, 35% purchased, 25% synthetic with three-annotator disagreement resolution"), data quality criteria ensuring data relevant to purpose, representative of affected populations (cross-industry hiring AI needs multi-industry training not single-sector), free from errors reasonably, complete for task, active bias examination especially affecting protected groups (analyze demographic over/under-representation, check labels for historical bias reflection), data governance practices established for collection/sourcing, preparation/processing, annotation/labeling, gap analysis identifying missing data, data protection and privacy with special category data (race, ethnicity, religion, sexual orientation) processable only for bias detection and correction purpose subject to strict safeguards not other uses.

Requirement 3 Technical Documentation (Article 11) demands comprehensive documentation created before market placement demonstrating all requirement compliance per Annex IV specifications: general description covering intended purpose, provider identity, version information, hardware/software integration; detailed description including general logic, design specifications, system architecture, computational resources, algorithms/model types, training methodologies, key design choices and rationales; development process information including data requirements/sources, data preparation/labeling, training/validation/testing procedures, performance measurement metrics; monitoring and functioning information covering capabilities and limitations, foreseeable misuse scenarios, human oversight measures, output interpretation technical measures; risk management documentation including all risk process materials and residual risk descriptions; change management records documenting lifecycle modifications - example hiring AI documentation spans 50+ pages covering everything from transformer-based NLP architecture using custom fine-tuned BERT trained on 500 GPU-hours, 2.3M resume-job pairs across 47 industries, 0.87 AUC-ROC validation performance, fairness metrics by gender within 2% parity.

Requirement 4 Record-Keeping/Logging (Article 12) requires technical capability for automatic event recording during operation enabling lifecycle functioning traceability: automatic recording not manual logging, retention period appropriate to intended purpose and legal requirements, logged content including time periods of each use, reference database used if applicable, input data leading to matches for identification systems, identification of persons involved in verification - example airport facial recognition logging timestamp, system version, identity verification attempt, captured image hash, passport database query, 97.3% match confidence against 95% threshold, match result, passenger ID token, Agent #2847 operator, boarding clearance action, 4.7 second duration - logs must be secure, tamper-resistant, accessible for audit/investigation while handling personal data per GDPR.

Requirement 5 Transparency and Information to Deployers (Article 13) requires clear sufficient information enabling deployers to understand and appropriately use AI through instructions for use (AI system's user manual): identity and contact details of provider, characteristics/capabilities/limitations including intended purpose, accuracy/robustness/cybersecurity levels, performance-affecting circumstances, known/foreseeable misuse risks, lifecycle changes and updates, human oversight measures with detailed guidance, computational and hardware resources needed, technical logs information and specifications, expected lifetime and maintenance requirements - example hiring AI instructions stating "designed to assist human recruiters by pre-screening and ranking candidates, NOT make final autonomous decisions" with 87% human recruiter agreement, processes 1,000 resumes under 5 minutes, tested on English 47-industry resumes, reduced accuracy for non-standard formats, may underweight non-traditional career experience, not tested on non-English, requiring human review of all rejections with final decisions by humans and override capability for advancing any candidate.

Requirement 6 Human Oversight (Article 14) requires design-integrated oversight from start not afterthought enabling humans to effectively oversee operation preventing or minimizing risks, appropriate to context matching risks and use, competent oversight with necessary competence/training/authority - oversight capabilities must include: understanding system capabilities and limitations, automation bias awareness that might cause over-reliance on AI outputs with training to remain appropriately critical, correct output interpretation especially considering limitations, ability to decide not to use system in particular situations, ability to override or reverse AI outputs or output-based decisions, ability to intervene or stop system operation ("stop button") - example hiring AI oversight design including transparency layer (dashboard showing confidence levels, explanation feature revealing top score factors, uncertainty flags highlighting borderline candidates), critical decision points (AI flags for human review, rejection requiring human confirmation, batch processing human sampling), override mechanisms (any ranking override, "Advance to Interview" bypassing scores, logged overrides with reasons), intervention controls (mid-batch "Pause Processing", "Reset" to pre-AI state, admin AI recommendation disable), training requirements (4-hour capabilities/limits training, automation bias module, annual recertification).

Requirement 7 Accuracy/Robustness/Cybersecurity (Article 15) requires appropriate lifecycle levels: accuracy appropriate to intended purpose (medical diagnostic 99%+ versus content recommendation 80% with declared instructions metrics/thresholds using precision/recall/F1/AUC), robustness through resilience to errors and faults (keep working reasonably when things go wrong), adversarial input handling resistance (facial recognition detecting photograph holding versus actual face), fail-safe measures (fail gracefully when cannot operate safely), continuous learning considerations if learning after deployment (ensure doesn't learn producing non-compliant outputs), cybersecurity protecting against exploits (vulnerability exploitation), data poisoning (training data corruption), adversarial inputs (crafted system-fooling), model extraction (confidential information), specific attacks including model evasion (fooling with crafted inputs), model inversion (extracting training data from outputs), model stealing (recreating model from queries) - example hiring AI accuracy 0.87 AUC-ROC on holdout test (target >0.85) measured quarterly on fresh data with demographic breakdown, robustness tested with 10,000 adversarial examples achieving <2% attack success for known attacks with graceful degradation flagging low-confidence and fail-safe auto-escalation to human if confidence <60%, cybersecurity with OAuth 2.0 API authentication and key rotation, AES-256 at-rest encryption and TLS 1.3 in-transit, no direct model parameter access, quarterly third-party penetration testing, 24-hour critical patch SLA vulnerability management.

After meeting all seven requirements must conduct conformity assessment before market placement: most high-risk systems use self-assessment through internal conformity assessment procedure (Annex VI), some categories like biometric identification require third-party assessment by notified body, successful assessment leads to: (1) draw up EU declaration of conformity, (2) affix CE marking to system, (3) register system in EU database - requirements form integrated system where risk management identifies what could go wrong, data governance ensures solid foundation, technical documentation proves work done, logging enables post-deployment accountability, transparency empowers deployers for responsible use, human oversight keeps humans in control, accuracy/robustness/security ensure reliability with August 2 2026 deadline for most high-risk requirements meaning organizations should start now treating these not as bureaucratic boxes but good engineering and business practices that happen to be mandatory.

## Key Learning Objectives

After reading this article, you will be able to:

1. **Understand seven-requirement framework** - Articles 9-15 integrated compliance system with conformity assessment, CE marking, database registration
2. **Implement risk management system** - Continuous iterative process for risk identification, estimation/evaluation, mitigation, real-world testing, residual documentation
3. **Establish data governance** - Quality standards (relevant, representative, error-free, complete), bias examination, special category data restrictions, governance practices
4. **Create technical documentation** - Annex IV requirements for general/detailed descriptions, development process, monitoring/functioning, risk materials, change management
5. **Deploy automatic logging** - Event recording for traceability with time periods, databases, input data, verification persons, appropriate retention
6. **Provide deployer transparency** - Instructions for use covering identity, characteristics/capabilities/limitations, oversight measures, resources, logs, lifetime
7. **Design human oversight** - Integrated capabilities for understanding, automation bias awareness, interpretation, non-use decision, override/reversal, intervention/stopping
8. **Ensure accuracy/robustness/security** - Appropriate levels for purpose, adversarial resistance, fail-safe measures, continuous learning safeguards, attack protection
9. **Navigate conformity assessment** - Self-assessment (Annex VI) versus third-party notified body requirements, declaration, CE marking, registration
10. **Execute compliance roadmap** - Integrated seven-pillar approach treating requirements as good practices with August 2026 deadline driving immediate action

---

## The Seven Pillars of High-Risk AI Compliance

The EU AI Act establishes seven core requirements for high-risk AI systems. These are found in Articles 9-15 of the regulation.

```
┌─────────────────────────────────────────────────────────┐
│                HIGH-RISK AI REQUIREMENTS                │
├─────────────────────────────────────────────────────────┤
│  1. Risk Management System (Article 9)                  │
│  2. Data & Data Governance (Article 10)                 │
│  3. Technical Documentation (Article 11)                │
│  4. Record-Keeping / Logging (Article 12)               │
│  5. Transparency & Information (Article 13)             │
│  6. Human Oversight (Article 14)                        │
│  7. Accuracy, Robustness & Cybersecurity (Article 15)   │
└─────────────────────────────────────────────────────────┘
```

Let's examine each one.

---

## Requirement 1: Risk Management System (Article 9)

### What It Means

You must implement a **continuous, iterative process** to identify, analyze, evaluate, and mitigate risks throughout the AI system's entire lifecycle—from design to retirement.

### Key Elements

**Identification of Known and Foreseeable Risks**
You need to identify risks to health, safety, and fundamental rights. This isn't just technical risks—it includes societal impacts.

*Example*: For a hiring AI, risks might include gender discrimination, age discrimination, disability discrimination, and privacy concerns about candidate data.

**Risk Estimation and Evaluation**
For each identified risk, estimate how likely it is to occur and how severe the impact would be.

*Example*: A hiring AI might have a 15% higher rejection rate for candidates with non-Western names. Likelihood: high (it's happening in production data). Severity: high (affects employment and livelihoods).

**Risk Mitigation Measures**
For significant risks, you must implement measures to eliminate or reduce them to acceptable levels.

*Example*: To address name-based discrimination, you might: blind the names in initial screening, add fairness constraints to the model, implement human review for borderline cases.

**Testing for Appropriate Risk Levels**
You must test whether your AI system achieves appropriate risk levels in real-world conditions.

*Example*: Run the hiring AI on historical data where you know the outcomes and check for disparate impact across protected groups.

**Residual Risk Assessment**
After mitigation, document what risks remain (residual risks) and whether they're acceptable.

### Practical Checklist

- [ ] Risk identification process documented
- [ ] Risk register maintained with all identified risks
- [ ] Likelihood and severity assessed for each risk
- [ ] Mitigation measures defined and implemented
- [ ] Testing conducted to validate risk levels
- [ ] Residual risks documented and justified
- [ ] Process is iterative (not one-time)
- [ ] Updates occur when system changes or new risks emerge

---

## Requirement 2: Data and Data Governance (Article 10)

### What It Means

The training, validation, and testing data you use must meet **quality standards** and be **properly governed**.

### Key Elements

**Relevant Design Choices**
Document decisions about how you collected, prepared, and labeled data.

*Example*: "We collected resume data from three sources: our client's historical applications (40%), purchased datasets (35%), and synthetic data generation (25%). Labeling was done by three trained annotators with disagreement resolution protocols."

**Data Quality Criteria**
Training data must be:
- **Relevant** to the intended purpose
- **Representative** of the people the system will affect
- **Free from errors** (as much as reasonably possible)
- **Complete** for the task at hand

*Example*: If your hiring AI will be used across industries, training data from only one industry isn't representative.

**Examination for Biases**
You must actively look for biases in your data, especially biases that might affect protected groups.

*Example*: Analyze whether your training data over-represents or under-represents certain demographics. Check if labels (hired/not hired) reflect historical biases.

**Data Governance Practices**
Establish clear practices for:
- Data collection and sourcing
- Data preparation and processing
- Annotation and labeling
- Gap analysis (what data is missing?)
- Data protection and privacy

**Special Rules for Sensitive Data**
You may process special category data (race, ethnicity, religion, sexual orientation, etc.) **only for the purpose of bias detection and correction**, subject to strict safeguards.

*Example*: You can analyze whether your hiring AI treats candidates of different ethnicities differently, but only to identify and fix discrimination—not for any other purpose.

### Practical Checklist

- [ ] Data sources documented
- [ ] Data collection methods documented
- [ ] Data preparation processes documented
- [ ] Annotation/labeling procedures documented
- [ ] Data quality assessment performed
- [ ] Representativeness analysis completed
- [ ] Bias examination conducted
- [ ] Gaps identified and addressed (or justified)
- [ ] Special category data handling (if any) meets strict requirements
- [ ] Data governance policy in place

---

## Requirement 3: Technical Documentation (Article 11)

### What It Means

You must create and maintain **comprehensive technical documentation** that demonstrates compliance with all requirements. This documentation must exist **before** placing the system on the market.

### What Documentation Must Include

The EU AI Act's Annex IV specifies what technical documentation must cover:

**General Description**
- Intended purpose
- Provider identity
- Version information
- How the system interacts with hardware or software

**Detailed Description**
- General logic of the AI system
- Design specifications
- System architecture
- Computational resources used
- Algorithms and model types
- Training methodologies
- Key design choices and rationales

**Development Process Information**
- Data requirements and sources
- Data preparation and labeling
- Training, validation, and testing procedures
- Metrics used to measure performance

**Information on Monitoring and Functioning**
- Capabilities and limitations
- Foreseeable misuse scenarios
- Human oversight measures
- Technical measures for interpreting outputs

**Risk Management Documentation**
- All materials from your risk management process
- Descriptions of residual risks

**Change Management**
- Records of all modifications during the lifecycle

### Real-World Example

Here's what technical documentation might look like for a hiring AI:

```
TECHNICAL DOCUMENTATION: TalentMatch AI v3.2

1. GENERAL DESCRIPTION
   - Purpose: Automated screening of job applications
   - Provider: TalentMatch Inc., Toronto, Canada
   - Version: 3.2.1 (released 2024-09-15)
   - Integration: REST API with ATS platforms

2. SYSTEM DESCRIPTION
   - Architecture: Transformer-based NLP model (custom fine-tuned BERT)
   - Training compute: 500 GPU-hours on NVIDIA A100
   - Input: Resume text, job description text
   - Output: Match score (0-100), skill gap analysis

3. DATA
   - Training set: 2.3M resume-job pairs from 47 industries
   - Sources: Client historical data (anonymized), O*NET, CareerBuilder
   - Preparation: Text normalization, skill extraction, anonymization
   - Labeling: Hiring outcome (hired/not hired/interview)

4. PERFORMANCE
   - AUC-ROC: 0.87 (validation set)
   - Fairness metrics: See Appendix B
   - False negative rate by gender: Within 2% parity
   
[Document continues for 50+ pages...]
```

### Practical Checklist

- [ ] General system description complete
- [ ] Detailed technical specifications documented
- [ ] Development process fully described
- [ ] Data documentation complete
- [ ] Performance metrics documented
- [ ] Capabilities and limitations stated
- [ ] Foreseeable misuse scenarios identified
- [ ] Human oversight measures described
- [ ] Risk management materials included
- [ ] Change log maintained
- [ ] Documentation created BEFORE market placement

---

## Requirement 4: Record-Keeping / Logging (Article 12)

### What It Means

Your high-risk AI system must have the technical capability to **automatically record events** (logs) during operation. These logs enable tracing the system's operation and detecting issues.

### What Must Be Logged

**Traceability Information**
Logs must allow you to trace the functioning of the AI system throughout its lifecycle.

**Automatic Recording**
The system must log events automatically—you can't rely on manual logging.

**Retention Requirements**
Logs must be kept for an appropriate period, determined by:
- Intended purpose of the system
- Applicable legal requirements

**What to Include in Logs**
- Time periods of each use
- Reference database used (if applicable)
- Input data that led to matches (for identification systems)
- Identification of persons involved in verification

### Real-World Example

For a facial recognition system at an airport:

```
LOG ENTRY #847291
Timestamp: 2024-11-15 14:32:07 UTC
System: FaceCheck v2.1
Event: Identity verification attempt

Input: Captured facial image (hash: a7b3c...)
Reference: Passport database query
Match confidence: 97.3%
Threshold applied: 95%
Result: MATCH
Person verified: [Passenger ID token]
Operator: Agent #2847
Action taken: Passenger cleared for boarding

Session duration: 4.7 seconds
System status: Normal operation
```

### Practical Checklist

- [ ] Automatic logging capability implemented
- [ ] Logs capture sufficient detail for traceability
- [ ] Log retention period defined and justified
- [ ] Log storage is secure and tamper-resistant
- [ ] Logs are accessible for audit and investigation
- [ ] Personal data in logs handled per GDPR
- [ ] Log system tested for completeness

---

## Requirement 5: Transparency and Information to Deployers (Article 13)

### What It Means

You must provide **clear, sufficient information** to the organizations that deploy your AI system, enabling them to understand and use it appropriately.

### What Information to Provide

**Instructions for Use**
Think of this as your AI system's user manual. It must include:

- **Identity and contact details** of the provider
- **Characteristics, capabilities, and limitations** including:
  - Intended purpose
  - Level of accuracy, robustness, and cybersecurity
  - Circumstances that may affect performance
  - Known or foreseeable misuse risks
- **Changes and updates** throughout the lifecycle
- **Human oversight measures** with detailed guidance
- **Computational and hardware resources** needed
- **Technical logs** information and specifications
- **Expected lifetime** and maintenance requirements

### Real-World Example

Here's a simplified "Instructions for Use" excerpt:

```
INSTRUCTIONS FOR USE: TalentMatch AI

INTENDED PURPOSE
TalentMatch AI is designed to assist human recruiters by 
pre-screening job applications and ranking candidates by fit.
It is NOT intended to make final hiring decisions autonomously.

PERFORMANCE CHARACTERISTICS
- Accuracy: 87% agreement with human recruiters on top candidates
- Speed: Processes 1,000 resumes in under 5 minutes
- Tested on: English-language resumes in 47 industries

KNOWN LIMITATIONS
- Reduced accuracy for resumes with non-standard formats
- May underweight relevant experience from non-traditional careers
- Not tested on non-English resumes

HUMAN OVERSIGHT REQUIREMENTS
- Human recruiter must review all candidate rejections
- All final hiring decisions must be made by humans
- Override capability allows recruiters to advance any candidate

WHEN NOT TO USE
- Do not use as sole decision-maker for hiring
- Do not use for applications in languages other than English
- Do not use without human review for senior positions

[Instructions continue...]
```

### Practical Checklist

- [ ] Provider identity and contact included
- [ ] Intended purpose clearly stated
- [ ] Performance characteristics documented
- [ ] Limitations explicitly stated
- [ ] Misuse scenarios described
- [ ] Human oversight measures explained
- [ ] Technical requirements specified
- [ ] Log specifications provided
- [ ] Update and change procedures included
- [ ] Information is understandable to deployers

---

## Requirement 6: Human Oversight (Article 14)

### What It Means

High-risk AI systems must be designed so that **humans can effectively oversee** them during operation. The goal: humans should be able to prevent or minimize risks.

### Key Principles

**Built-In by Design**
Human oversight isn't an afterthought—it must be designed into the system from the start.

**Appropriate to Context**
The level of oversight should match the risks and the context of use.

**Competent Oversight**
The humans doing the oversight must have the necessary competence, training, and authority.

### Human Oversight Capabilities Must Include

**Understanding the System**
People overseeing the AI must be able to properly understand its capabilities and limitations.

**Awareness of Automation Bias**
Overseers must be aware that they might over-rely on AI outputs (automation bias) and be trained to remain appropriately critical.

**Correct Interpretation of Output**
The system should help humans correctly interpret its outputs, especially considering its limitations.

**Ability to Decide Not to Use**
Humans must be able to decide not to use the system in particular situations.

**Ability to Override or Reverse**
Humans must be able to override the AI's output or reverse decisions based on it.

**Ability to Intervene or Stop**
There must be a "stop button"—humans must be able to interrupt the system's operation.

### Real-World Example

For a hiring AI with proper human oversight:

```
HUMAN OVERSIGHT DESIGN: TalentMatch AI

1. TRANSPARENCY LAYER
   - Dashboard shows AI confidence levels for each ranking
   - Explanation feature reveals top factors influencing scores
   - Uncertainty flags highlight borderline candidates

2. CRITICAL DECISION POINTS
   - AI flags recommendations for human review
   - Rejection decisions require human confirmation
   - Batch processing includes human sampling review

3. OVERRIDE MECHANISMS
   - Recruiters can override any AI ranking
   - "Advance to Interview" button bypasses AI scores
   - All overrides are logged with reasons

4. INTERVENTION CONTROLS
   - "Pause Processing" stops mid-batch evaluation
   - "Reset" returns to pre-AI candidate state
   - Admin can disable AI recommendations entirely

5. TRAINING REQUIREMENTS
   - 4-hour training on system capabilities/limits
   - Automation bias awareness module
   - Annual recertification required
```

### Practical Checklist

- [ ] Human oversight designed into the system
- [ ] Oversight appropriate to risk level
- [ ] Understanding aids provided (explanations, dashboards)
- [ ] Automation bias training available
- [ ] Override capability implemented
- [ ] Reversal capability implemented
- [ ] Intervention/stop capability implemented
- [ ] Competency requirements defined for overseers
- [ ] Oversight measures documented in instructions for use

---

## Requirement 7: Accuracy, Robustness, and Cybersecurity (Article 15)

### What It Means

Your AI system must achieve appropriate levels of **accuracy**, **robustness**, and **cybersecurity** throughout its lifecycle.

### Accuracy Requirements

**Appropriate Levels**
The level of accuracy must be appropriate for the system's intended purpose. What's "appropriate" depends on context.

*Example*: A medical diagnostic AI may need 99%+ accuracy. A content recommendation system might be acceptable at 80%.

**Declared in Instructions**
You must state the accuracy levels in the instructions for use so deployers know what to expect.

**Metrics and Thresholds**
Use appropriate metrics (precision, recall, F1, AUC, etc.) and set meaningful thresholds.

### Robustness Requirements

**Resilience to Errors and Faults**
The system should keep working reasonably well even when things go wrong.

**Handling Adversarial Inputs**
The system should be resistant to malicious attempts to manipulate it.

*Example*: A facial recognition system should detect when someone is holding up a photograph instead of their actual face.

**Fail-Safe Measures**
When the system can't operate safely, it should fail gracefully.

**Continuous Learning Considerations**
If your AI continues learning after deployment, ensure it doesn't learn in ways that produce non-compliant outputs.

### Cybersecurity Requirements

**Protection Against Attacks**
The system must be protected against attempts to:
- Exploit vulnerabilities
- Manipulate training data (data poisoning)
- Feed adversarial inputs
- Extract confidential information about the model

**Specific Attack Types to Consider**
- Data poisoning (corrupting training data)
- Model evasion (fooling the system with crafted inputs)
- Model inversion (extracting training data from outputs)
- Model stealing (recreating the model from queries)

### Real-World Example

```
ACCURACY, ROBUSTNESS & SECURITY: TalentMatch AI

ACCURACY
- Primary metric: AUC-ROC on holdout test set
- Current level: 0.87 (target: >0.85)
- Measured quarterly on fresh data
- Breakdown by demographic available in Appendix C

ROBUSTNESS
- Tested with 10,000 adversarial resume examples
- Attack success rate: <2% for known attacks
- Graceful degradation: System flags low-confidence results
- Fail-safe: Auto-escalation to human if confidence <60%

CYBERSECURITY
- API authentication: OAuth 2.0 with key rotation
- Data encryption: AES-256 at rest, TLS 1.3 in transit
- Model access: No direct model parameter access
- Penetration tested: Quarterly by third party
- Vulnerability management: 24-hour critical patch SLA
```

### Practical Checklist

- [ ] Accuracy metrics defined and appropriate
- [ ] Accuracy levels declared in documentation
- [ ] Accuracy measured regularly
- [ ] Robustness tested against errors and faults
- [ ] Adversarial testing conducted
- [ ] Fail-safe mechanisms implemented
- [ ] Continuous learning safeguards (if applicable)
- [ ] Cybersecurity protections in place
- [ ] Protection against data poisoning
- [ ] Protection against model evasion
- [ ] Protection against model inversion
- [ ] Protection against model theft
- [ ] Regular security testing conducted

---

## What Comes Next: Conformity Assessment

After meeting all seven requirements, you must conduct a **conformity assessment** before placing your AI system on the market.

For most high-risk systems, this is a self-assessment (internal conformity assessment procedure, Annex VI).

For some categories (like biometric identification), you may need a third-party assessment by a notified body.

After successful assessment, you:

1. Draw up an EU declaration of conformity
2. Affix the CE marking to the system
3. Register the system in the EU database

---

## Conclusion

High-risk AI compliance is substantial but manageable. The seven requirements form an integrated system:

- **Risk management** identifies what could go wrong
- **Data governance** ensures your foundation is solid
- **Technical documentation** proves you've done the work
- **Logging** enables accountability after deployment
- **Transparency** empowers deployers to use AI responsibly
- **Human oversight** keeps humans in control
- **Accuracy, robustness, and security** ensure reliability

Think of these not as bureaucratic boxes to check, but as good engineering and business practices that happen to be mandatory.

Organizations that already follow responsible AI practices will find compliance less burdensome. Those that haven't may face a significant but valuable transformation in how they build and deploy AI.

The deadline for most high-risk requirements is August 2, 2026. Now is the time to start.

---

## Sources

1. European Union. "Regulation (EU) 2024/1689 of the European Parliament and of the Council (EU AI Act)." Official Journal of the European Union, Articles 9-15 and Annex IV, 2024.

2. European Commission. "AI Act: High-Risk AI Systems Requirements." 2024.

3. NIST. "Artificial Intelligence Risk Management Framework (AI RMF 1.0)." National Institute of Standards and Technology, 2023.

4. ISO/IEC 42001:2023. "Information technology — Artificial intelligence — Management system." International Organization for Standardization, 2023.

5. IAPP. "EU AI Act Compliance Checklist." International Association of Privacy Professionals, 2024.

6. European Commission. "Harmonised Standards for AI." 2024.

7. Raji, Inioluwa Deborah, et al. "Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing." FAT* 2020, 2020.

---

*Next: Foundation Model Obligations Under the EU AI Act*
