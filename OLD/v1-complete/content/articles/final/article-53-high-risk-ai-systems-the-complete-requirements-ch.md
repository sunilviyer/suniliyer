
![Article 53: High-Risk AI Systems – The Complete Requirements Checklist]({{IMAGE_PLACEHOLDER_article-53-high-risk-ai-systems-the-complete-requirements-ch}})

---
title: 'Article 53: High-Risk AI Systems – The Complete Requirements Checklist'
tldr: ''
category: AI Risks & Principles
learning_objectives:
- Understand the key concepts and principles of risk assessment methodologies
- Implement model validation processes in real-world scenarios
- Evaluate policy development for organizational compliance
seo_keywords:
- article
- high
- artificial intelligence
- AI compliance
- risk
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: balanced composition showing risk and safety elements, warning symbols with
    protective shields, shield icons, warning triangles, protective barriers, safety
    nets, professional illustration, modern flat design style, clean and authoritative,
    high quality, blue and gray color scheme with accent colors, suitable for professional
    article header
- type: checklist
  label: 'Article 53: High-Risk AI Systems – The Complete Requirements Checklist'
  section: 'Article 53: High-Risk AI Systems – The Complete Requirements Checklist'
  id: checklist-article-53-high-risk-ai-systems-the-complete-requirements-checklist
- type: checklist
  label: Practical Checklist
  section: Practical Checklist
  id: checklist-practical-checklist
- type: flowchart
  label: 'What Comes Next: Conformity Assessment Process'
  section: 'What Comes Next: Conformity Assessment'
  id: flowchart-what-comes-next-conformity-assessment
- type: flowchart
  label: Sources Process
  section: Sources
  id: flowchart-sources
- type: template
  label: 'Requirement 5: Transparency and Information to Deployers (Article 13)'
  section: 'Requirement 5: Transparency and Information to Deployers (Article 13)'
  id: template-requirement-5-transparency-and-information-to-deployers-article-13
  template_link: /templates/requirement-5-transparency-and-information-to-deployers-article-13.md
- type: template
  label: What Information to Provide
  section: What Information to Provide
  id: template-what-information-to-provide
  template_link: /templates/what-information-to-provide.md
- type: template
  label: 'What Comes Next: Conformity Assessment'
  section: 'What Comes Next: Conformity Assessment'
  id: template-what-comes-next-conformity-assessment
  template_link: /templates/what-comes-next-conformity-assessment.md
- type: list
  label: 'Article 53: High-Risk AI Systems – The Complete Requirements Checklist'
  section: 'Article 53: High-Risk AI Systems – The Complete Requirements Checklist'
  id: list-article-53-high-risk-ai-systems-the-complete-requirements-checklist
- type: list
  label: 'Requirement 1: Risk Management System (Article 9)'
  section: 'Requirement 1: Risk Management System (Article 9)'
  id: list-requirement-1-risk-management-system-article-9
- type: list
  label: 'Requirement 2: Data and Data Governance (Article 10)'
  section: 'Requirement 2: Data and Data Governance (Article 10)'
  id: list-requirement-2-data-and-data-governance-article-10
- type: list
  label: 'Requirement 3: Technical Documentation (Article 11)'
  section: 'Requirement 3: Technical Documentation (Article 11)'
  id: list-requirement-3-technical-documentation-article-11
- type: list
  label: 'Requirement 4: Record-Keeping / Logging (Article 12)'
  section: 'Requirement 4: Record-Keeping / Logging (Article 12)'
  id: list-requirement-4-record-keeping-logging-article-12
- type: list
  label: 'Requirement 5: Transparency and Information to Deployers (Article 13)'
  section: 'Requirement 5: Transparency and Information to Deployers (Article 13)'
  id: list-requirement-5-transparency-and-information-to-deployers-article-13
- type: list
  label: 'Requirement 6: Human Oversight (Article 14)'
  section: 'Requirement 6: Human Oversight (Article 14)'
  id: list-requirement-6-human-oversight-article-14
- type: list
  label: Key Principles
  section: Key Principles
  id: list-key-principles
- type: list
  label: 'Requirement 7: Accuracy, Robustness, and Cybersecurity (Article 15)'
  section: 'Requirement 7: Accuracy, Robustness, and Cybersecurity (Article 15)'
  id: list-requirement-7-accuracy-robustness-and-cybersecurity-article-15
- type: list
  label: Accuracy Requirements
  section: Accuracy Requirements
  id: list-accuracy-requirements
- type: list
  label: Robustness Requirements
  section: Robustness Requirements
  id: list-robustness-requirements
- type: list
  label: Cybersecurity Requirements
  section: Cybersecurity Requirements
  id: list-cybersecurity-requirements
topic_fingerprint:
- transformer
- nlp
- bert
- transparency
- oversight
named_examples:
- eu ai act
- european commission
- european parliament
- gdpr
- iec
- international organization for standardization
- iso
- national institute of standards
- nist
- nvidia
- toronto
word_count: 2267
processed_date: '2025-12-18T20:06:40.755Z'
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

<!-- component:list:list-requirement-1-risk-management-system-article-9 -->

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

<!-- component:checklist:checklist-practical-checklist -->
- [ ] Risk identification process documented
- [ ] Risk register maintained with all identified risks
- [ ] Likelihood and severity assessed for each risk
- [ ] Mitigation measures defined and implemented
- [ ] Testing conducted to validate risk levels
- [ ] Residual risks documented and justified
- [ ] Process is iterative (not one-time)
- [ ] Updates occur when system changes or new risks emerge

---

<!-- component:list:list-requirement-2-data-and-data-governance-article-10 -->

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

<!-- component:checklist:checklist-practical-checklist -->
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

<!-- component:list:list-requirement-3-technical-documentation-article-11 -->

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

<!-- component:checklist:checklist-practical-checklist -->
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

<!-- component:list:list-requirement-4-record-keeping-logging-article-12 -->

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

<!-- component:checklist:checklist-practical-checklist -->
- [ ] Automatic logging capability implemented
- [ ] Logs capture sufficient detail for traceability
- [ ] Log retention period defined and justified
- [ ] Log storage is secure and tamper-resistant
- [ ] Logs are accessible for audit and investigation
- [ ] Personal data in logs handled per GDPR
- [ ] Log system tested for completeness

---

<!-- component:template:template-requirement-5-transparency-and-information-to-deployers-article-13 -->

## Requirement 5: Transparency and Information to Deployers (Article 13)


### What It Means

You must provide **clear, sufficient information** to the organizations that deploy your AI system, enabling them to understand and use it appropriately.

<!-- component:template:template-what-information-to-provide -->

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

<!-- component:checklist:checklist-practical-checklist -->
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

<!-- component:list:list-requirement-6-human-oversight-article-14 -->

## Requirement 6: Human Oversight (Article 14)


### What It Means

High-risk AI systems must be designed so that **humans can effectively oversee** them during operation. The goal: humans should be able to prevent or minimize risks.

<!-- component:list:list-key-principles -->

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

<!-- component:checklist:checklist-practical-checklist -->
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

<!-- component:list:list-requirement-7-accuracy-robustness-and-cybersecurity-article-15 -->

## Requirement 7: Accuracy, Robustness, and Cybersecurity (Article 15)


### What It Means

Your AI system must achieve appropriate levels of **accuracy**, **robustness**, and **cybersecurity** throughout its lifecycle.

<!-- component:list:list-accuracy-requirements -->

### Accuracy Requirements

**Appropriate Levels**
The level of accuracy must be appropriate for the system's intended purpose. What's "appropriate" depends on context.

*Example*: A medical diagnostic AI may need 99%+ accuracy. A content recommendation system might be acceptable at 80%.

**Declared in Instructions**
You must state the accuracy levels in the instructions for use so deployers know what to expect.

**Metrics and Thresholds**
Use appropriate metrics (precision, recall, F1, AUC, etc.) and set meaningful thresholds.

<!-- component:list:list-robustness-requirements -->

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

<!-- component:list:list-cybersecurity-requirements -->

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

<!-- component:checklist:checklist-practical-checklist -->
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

<!-- component:template:template-what-comes-next-conformity-assessment -->

## What Comes Next: Conformity Assessment

After meeting all seven requirements, you must conduct a **conformity assessment** before placing your AI system on the market.

For most high-risk systems, this is a self-assessment (internal conformity assessment procedure, Annex VI).

For some categories (like biometric identification), you may need a third-party assessment by a notified body.

After successful assessment, you:
<!-- component:flowchart:flowchart-what-comes-next-conformity-assessment -->
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

<!-- component:flowchart:flowchart-sources -->
1. **European Union.** "Regulation (EU) 2024/1689 of the European Parliament and of the Council (EU AI Act)." *Official Journal of the European Union*, Articles 9-15 and Annex IV, 2024. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)

2. **European Commission.** "AI Act: High-Risk AI Systems Requirements." 2024. [European Commission Digital Strategy](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)

3. **NIST.** "Artificial Intelligence Risk Management Framework (AI RMF 1.0)." National Institute of Standards and Technology, 2023. [nist.gov](https://www.nist.gov/itl/ai-risk-management-framework)

4. **ISO/IEC 42001:2023.** "Information technology — Artificial intelligence — Management system." International Organization for Standardization, 2023.

5. **IAPP.** "EU AI Act Compliance Checklist." International Association of Privacy Professionals, 2024. [iapp.org](https://iapp.org/)

6. **European Commission.** "Harmonised Standards for AI." 2024. [European Commission Technical Harmonization](https://ec.europa.eu/growth/single-market/european-standards/harmonised-standards_en)

7. **Raji, Inioluwa Deborah, et al.** "Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing." *FAT* 2020*, 2020.
