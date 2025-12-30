# AI Regulatory Readiness Assessment

**Purpose**: Comprehensive assessment tool for organizations to evaluate preparedness for AI regulations (EU AI Act, U.S. state laws, sector-specific rules)
**Use Case**: Compliance officers, legal teams, governance teams, executives planning AI strategy

---

## Overview

AI regulation is accelerating globally. The EU AI Act, U.S. state laws, and sector-specific rules create complex compliance obligations. This assessment helps organizations:

1. Understand which regulations apply to their AI systems
2. Identify compliance gaps
3. Prioritize remediation efforts
4. Estimate compliance costs and timelines
5. Build regulatory readiness roadmap

**Time to Complete**: 2-4 hours (initial assessment), ongoing updates quarterly

**Prerequisites**: AI inventory (list of all AI systems), stakeholder availability (legal, technical, business leads)

---

## Part 1: Jurisdictional Scope Assessment

### Step 1: Identify Applicable Jurisdictions

```
JURISDICTIONAL ANALYSIS

Where does your organization operate/deploy AI?

EUROPE:
□ EU member states (list): _______________________________
  → EU AI Act applies (regardless of where organization headquartered)
  → Brussels Effect: Consider applying EU standards globally

UNITED STATES:
□ Federal government contracts → Executive Order on AI applies
□ States where AI deployed:
  □ Colorado → Colorado AI Act (effective Feb 2026)
  □ California → Multiple bills (employment, transparency, GenAI)
  □ New York → NYC Local Law 144 (hiring AI)
  □ Illinois → BIPA (biometrics), video interview law
  □ Other states: _______________________________

ASIA-PACIFIC:
□ China → Algorithm regulations, GenAI regulations, deep synthesis
□ Singapore → Voluntary framework (reputation/market reasons)
□ Japan → Voluntary guidelines
□ India → Emerging sector rules
□ Australia → Risk-based framework (evolving)
□ Other: _______________________________

OTHER:
□ UK → Sector-led principles
□ Canada → AIDA (when passed)
□ Brazil → AI Bill (when passed)
□ Other: _______________________________

SECTOR-SPECIFIC REGULATIONS (regardless of geography):
□ Healthcare → FDA (U.S.), CE marking (EU), local health authorities
□ Financial services → Banking regulators, SEC, FCA, etc.
□ Employment → EEOC (U.S.), equality bodies (EU/UK)
□ Other regulated sectors: _______________________________
```

---

### Step 2: Map AI Systems to Jurisdictions

```
AI SYSTEM JURISDICTIONAL MAPPING

For each AI system in your inventory:

System Name: _______________________________
Deployed in which jurisdictions?: _______________________________
Affects users in which jurisdictions?: _______________________________

Regulatory Assessment:
□ EU AI Act applies? (if affects EU users/deployed in EU)
□ U.S. state laws apply? (list states): _______________________________
□ Sector rules apply? (list): _______________________________
□ Other jurisdictions: _______________________________

Most Stringent Regulation Applicable: _______________________________
```

---

## Part 2: EU AI Act Readiness

### EU AI Act Risk Classification

For each AI system deployed in/affecting EU:

```
EU AI ACT CLASSIFICATION

System Name: _______________________________

STEP 1: Check if PROHIBITED
□ Social scoring by government?
□ Real-time biometric surveillance in public (non-law-enforcement)?
□ Emotion recognition in workplace/education?
□ Subliminal manipulation causing harm?
□ Exploiting vulnerabilities (children, disabled)?

→ If YES to any: DO NOT DEPLOY. Consult legal immediately.

STEP 2: Check if HIGH-RISK (Annex III)
□ Biometric identification/categorization?
□ Critical infrastructure management?
□ Education/vocational training (admissions, scoring, proctoring)?
□ Employment (recruitment, screening, promotion, monitoring)?
□ Essential services (credit, insurance, benefits eligibility)?
□ Law enforcement (predictive policing, risk assessment)?
□ Migration/asylum/border control?
□ Justice system (legal research affecting outcomes)?

→ If YES to any: HIGH-RISK classification → Strict requirements

STEP 3: Check if GENERAL-PURPOSE AI (Foundation Model)
□ Model can be adapted to wide range of tasks?
□ Trained on large, general data (not task-specific)?
□ Examples: GPT-4, Claude, Llama, Gemini

  → If YES:
     □ Compute threshold met (>10^25 FLOPs)? → Systemic risk model
     □ If not: Standard GPAI requirements

STEP 4: Check if LIMITED RISK
□ Chatbot or conversational AI?
□ Emotion recognition system?
□ Biometric categorization (not identification)?
□ Generates/manipulates image/audio/video (deepfakes)?

→ If YES: Transparency obligations only

STEP 5: If none above
□ MINIMAL RISK → No specific requirements (voluntary codes encouraged)

CLASSIFICATION RESULT: _______________________________
```

---

### EU AI Act Compliance Checklist (High-Risk AI)

```
HIGH-RISK AI COMPLIANCE CHECKLIST

System: _______________________________
Risk Category: _______________________________
Compliance Deadline: August 2, 2026 (or earlier if voluntary)

PRE-MARKET REQUIREMENTS:

□ RISK MANAGEMENT SYSTEM
  □ Risk identification and analysis
  □ Risk estimation and evaluation
  □ Risk mitigation measures
  □ Residual risk evaluation
  □ Testing to ensure effectiveness
  □ Documentation of risk management process

  Status: □ Complete  □ In Progress  □ Not Started
  Gap: _______________________________

□ DATA GOVERNANCE
  □ Training data quality assurance
  □ Data relevant, representative, error-free (to extent possible)
  □ Bias examination and mitigation
  □ Appropriate data sets for intended purpose
  □ Data provenance documented

  Status: □ Complete  □ In Progress  □ Not Started
  Gap: _______________________________

□ TECHNICAL DOCUMENTATION
  □ General description of AI system
  □ Detailed description of elements and development process
  □ Information on monitoring, functioning, control
  □ Description of risk management system
  □ Changes to system through lifecycle
  □ Validation/testing procedures and results
  □ Cybersecurity measures

  Documentation complete? □ Yes  □ Partial  □ No
  Gap: _______________________________

□ RECORD-KEEPING (LOGGING)
  □ Automatic recording of events during operation
  □ Traceability throughout lifecycle
  □ Logging capabilities enable:
    - Monitoring compliance
    - Post-market monitoring
    - Incident investigation

  Logging implemented? □ Yes  □ Partial  □ No
  Gap: _______________________________

□ TRANSPARENCY
  □ Instructions for use clear and adequate
  □ Information on system capabilities and limitations
  □ Information on performance (accuracy, robustness)
  □ Information enabling deployers to comply with obligations

  User documentation complete? □ Yes  □ Partial  □ No
  Gap: _______________________________

□ HUMAN OVERSIGHT
  □ Human oversight measures designed into system
  □ Humans can:
    - Understand system capabilities/limitations
    - Monitor system operation
    - Interpret system outputs
    - Override or stop system (stop button)
  □ Technical knowledge requirements identified
  □ Training planned for overseers

  Oversight mechanisms implemented? □ Yes  □ Partial  □ No
  Gap: _______________________________

□ ACCURACY, ROBUSTNESS, CYBERSECURITY
  □ Accuracy level documented and appropriate for purpose
  □ Robustness to errors, faults, inconsistencies
  □ Resilience to attempts to alter use/performance
  □ Cybersecurity measures appropriate to risks

  Technical resilience ensured? □ Yes  □ Partial  □ No
  Gap: _______________________________

□ CONFORMITY ASSESSMENT
  □ Internal assessment procedures established (for most)
  □ OR Third-party assessment arranged (for certain high-risk)
    - Biometric identification
    - Critical infrastructure
  □ Assessment documentation prepared

  Assessment planned? □ Yes  □ In Progress  □ Not Started
  Assessor identified: _______________________________

□ CE MARKING & DECLARATION
  □ CE marking affixed once compliant
  □ EU Declaration of Conformity drafted
  □ Registration in EU database planned

  Ready for CE marking? □ Yes  □ No

POST-MARKET REQUIREMENTS:

□ QUALITY MANAGEMENT SYSTEM
  □ Compliance monitoring strategy
  □ Post-market monitoring procedures
  □ Handling of user feedback
  □ Procedures for managing changes to AI system
  □ Corrective/preventive actions

  QMS established? □ Yes  □ Partial  □ No

□ POST-MARKET MONITORING
  □ Plan to collect and analyze data on performance
  □ Active and systematic collection of data from deployers
  □ Plan for addressing identified issues

  Monitoring plan in place? □ Yes  □ Partial  □ No

□ SERIOUS INCIDENT REPORTING
  □ Incident reporting procedures established
  □ Timeline for reporting understood (15 days after awareness)
  □ Responsible person assigned

  Reporting procedure established? □ Yes  □ No

OVERALL COMPLIANCE READINESS:
□ Compliant (all requirements met)
□ Near-compliant (minor gaps, achievable before deadline)
□ Significant gaps (major work required)
□ Not ready (fundamental redesign needed)

ESTIMATED EFFORT TO COMPLIANCE:
□ <3 months
□ 3-6 months
□ 6-12 months
□ >12 months

ESTIMATED COST: $_______________
```

---

### GPAI/Foundation Model Compliance (if applicable)

```
GPAI COMPLIANCE CHECKLIST

Model: _______________________________
Compute Threshold Met? □ Yes (>10^25 FLOPs) → Systemic Risk  □ No → Standard GPAI

TIER 1: ALL GPAI MODELS (Effective August 2, 2025)

□ Technical documentation prepared
  □ Training process description
  □ Data sources description
  □ Compute resources used
  □ Testing and validation results

□ Copyright compliance
  □ Training data copyright assessment
  □ Opt-out mechanisms for rights holders (if applicable)
  □ Documentation of copyright compliance measures

□ Publicly available summary
  □ Summary of training data content
  □ Summary published and accessible

Status: □ Compliant  □ Partial  □ Not Started

TIER 2: SYSTEMIC RISK MODELS (if applicable)

□ Model evaluation performed
  □ Evaluation against standardized protocols
  □ Identification of systemic risks

□ Adversarial testing
  □ Testing against misuse
  □ Red-teaming exercises
  □ Documentation of testing results

□ Serious incident tracking and reporting
  □ Incidents monitored
  □ Reporting procedures established

□ Cybersecurity protections
  □ Model security measures
  □ Protection against unauthorized access/modification

□ Energy efficiency
  □ Energy consumption tracked
  □ Reporting on efficiency

Status: □ Compliant  □ Partial  □ Not Started  □ N/A

OVERALL GPAI READINESS: _______________________________
```

---

## Part 3: U.S. Regulatory Readiness

### Federal Requirements

```
U.S. FEDERAL COMPLIANCE

EXECUTIVE ORDER ON AI (if federal contractor):
□ Selling AI to federal government?
□ Safety testing requirements understood?
□ Procurement standards compliance planned?

Status: □ N/A  □ Compliant  □ In Progress

FEDERAL AGENCY ENFORCEMENT:

FTC (Consumer Protection):
□ AI claims accurate and not deceptive?
□ No algorithmic bias causing consumer harm?
□ Privacy practices compliant?

Status: □ Compliant  □ Needs Review

EEOC (Employment):
□ Hiring AI complies with Title VII?
□ No disparate impact on protected groups?
□ Validation studies conducted?

Status: □ N/A  □ Compliant  □ Needs Review

CFPB (Financial Services):
□ Credit AI complies with ECOA, FCRA?
□ Adverse action notices provided?
□ No redlining or discrimination?

Status: □ N/A  □ Compliant  □ Needs Review

FDA (Medical Devices):
□ Medical AI approved/cleared?
□ Post-market surveillance in place?

Status: □ N/A  □ Compliant  □ Needs Review

OVERALL FEDERAL READINESS: _______________________________
```

---

### State Law Compliance

```
STATE AI LAW COMPLIANCE

COLORADO AI ACT (if applicable)

□ High-risk AI determination made?
  Criteria: Significant risk of algorithmic discrimination

  If YES (High-Risk):
    □ Algorithmic discrimination impact assessment conducted?
    □ Reasonable care measures implemented?
    □ Disclosure to consumers provided?
    □ Opt-out/appeal mechanisms created?

  Status: □ N/A  □ Compliant  □ Gaps Identified
  Gaps: _______________________________

NYC LOCAL LAW 144 (if hiring AI in NYC):
□ Independent bias audit conducted (annually)?
□ Audit results publicly disclosed?
□ Notice to candidates/employees provided?
□ Alternative selection process offered?

Status: □ N/A  □ Compliant  □ Overdue
Last audit date: _______________________________

CALIFORNIA LAWS:
□ GenAI labeling (AB 2013) compliant?
□ Employment AI compliance?
□ Other CA bills applicable: _______________________________

Status: □ N/A  □ Compliant  □ Needs Review

ILLINOIS:
□ BIPA (biometrics) compliant (if collecting biometrics)?
□ Video interview AI law compliant (if interviewing Illinois residents)?

Status: □ N/A  □ Compliant  □ Needs Review

OTHER STATES:
List states where AI deployed: _______________________________
State-specific requirements: _______________________________
Compliance status: _______________________________

OVERALL STATE READINESS: _______________________________
```

---

## Part 4: Sector-Specific Compliance

```
SECTOR-SPECIFIC REQUIREMENTS

HEALTHCARE:
□ FDA clearance/approval (if medical device AI)?
□ HIPAA compliance (if handling PHI)?
□ Clinical validation completed?
□ Post-market surveillance established?

Status: □ N/A  □ Compliant  □ Needs Work

FINANCIAL SERVICES:
□ Model risk management framework (SR 11-7)?
□ Fair lending compliance?
□ Explainability for adverse actions?
□ Regular model validation?

Status: □ N/A  □ Compliant  □ Needs Work

EMPLOYMENT/HR:
□ EEOC guidance followed?
□ Validation studies conducted?
□ Disparate impact analysis performed?
□ Human review for decisions?

Status: □ N/A  □ Compliant  □ Needs Work

INSURANCE:
□ State insurance regulator guidance followed?
□ Underwriting AI fairness tested?
□ Pricing models validated?

Status: □ N/A  □ Compliant  □ Needs Work

OTHER SECTORS:
Sector: _______________________________
Specific requirements: _______________________________
Compliance status: _______________________________

OVERALL SECTOR READINESS: _______________________________
```

---

## Part 5: Organizational Capability Assessment

### Governance Maturity

```
AI GOVERNANCE MATURITY

STRUCTURE:
□ AI governance committee established?
□ Responsible AI lead designated?
□ Cross-functional team (legal, tech, business)?
□ Board-level oversight?

Score: ___/4

POLICIES:
□ AI acceptable use policy?
□ AI risk assessment policy?
□ AI procurement policy?
□ Bias testing policy?
□ Incident response policy?

Score: ___/5

PROCESSES:
□ AI inventory process?
□ Risk classification process?
□ Pre-deployment review process?
□ Post-deployment monitoring?
□ Audit/assessment process?

Score: ___/5

DOCUMENTATION:
□ Model cards for AI systems?
□ Datasheets for datasets?
□ Risk assessments documented?
□ Testing results recorded?
□ Incident logs maintained?

Score: ___/5

TOTAL GOVERNANCE SCORE: ___/19

MATURITY LEVEL:
- 16-19: Advanced
- 11-15: Developing
- 6-10: Basic
- 0-5: Ad hoc

Current Level: _______________________________
```

---

### Resource Assessment

```
COMPLIANCE RESOURCE EVALUATION

INTERNAL EXPERTISE:
□ Legal/compliance staff with AI expertise?
  Count: ___  Need: ___  Gap: ___

□ Technical staff (data science, ML engineering)?
  Count: ___  Need: ___  Gap: ___

□ Risk/audit staff?
  Count: ___  Need: ___  Gap: ___

□ Ethics/policy expertise?
  Count: ___  Need: ___  Gap: ___

EXTERNAL SUPPORT:
□ Legal counsel with AI expertise engaged?
□ Technical auditors identified?
□ Consultants for gap remediation?

TOOLS & SYSTEMS:
□ AI inventory system/tool?
□ Monitoring/observability platform?
□ Bias testing tools?
□ Documentation platform?

BUDGET:
Estimated compliance cost (next 12 months): $_______________
Budget allocated: $_______________
Gap: $_______________

TIME:
Staff hours needed (estimate): _______________
Staff hours available: _______________
Gap: _______________
```

---

## Part 6: Gap Analysis & Prioritization

### Compliance Gap Summary

```
GAP ANALYSIS

List all compliance gaps identified:

1. _________________________________________________
   Impact: □ Critical  □ High  □ Medium  □ Low
   Deadline: _______________
   Effort: _______________  Cost: _______________

2. _________________________________________________
   Impact: □ Critical  □ High  □ Medium  □ Low
   Deadline: _______________
   Effort: _______________  Cost: _______________

[Continue for all gaps]

PRIORITIZATION MATRIX:

HIGH IMPACT + NEAR DEADLINE = CRITICAL PRIORITY
HIGH IMPACT + FAR DEADLINE = HIGH PRIORITY
LOW IMPACT + NEAR DEADLINE = MEDIUM PRIORITY
LOW IMPACT + FAR DEADLINE = LOW PRIORITY

CRITICAL PRIORITIES (fix immediately):
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

HIGH PRIORITIES (fix within 3 months):
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

MEDIUM PRIORITIES (fix within 6 months):
1. _________________________________________________
2. _________________________________________________

LOW PRIORITIES (fix within 12 months):
1. _________________________________________________
2. _________________________________________________
```

---

## Part 7: Remediation Roadmap

```
AI REGULATORY COMPLIANCE ROADMAP

PHASE 1: IMMEDIATE (0-3 Months)
Critical gaps, high-risk AI, near-term deadlines

Actions:
1. _________________________________________________
   Owner: _______________  Deadline: _______________
2. _________________________________________________
   Owner: _______________  Deadline: _______________
3. _________________________________________________
   Owner: _______________  Deadline: _______________

Milestone: _________________________________________________

PHASE 2: NEAR-TERM (3-6 Months)
High-priority gaps, build infrastructure

Actions:
1. _________________________________________________
   Owner: _______________  Deadline: _______________
2. _________________________________________________
   Owner: _______________  Deadline: _______________
3. _________________________________________________
   Owner: _______________  Deadline: _______________

Milestone: _________________________________________________

PHASE 3: MEDIUM-TERM (6-12 Months)
Lower-risk AI, process maturation

Actions:
1. _________________________________________________
   Owner: _______________  Deadline: _______________
2. _________________________________________________
   Owner: _______________  Deadline: _______________

Milestone: _________________________________________________

PHASE 4: LONG-TERM (12+ Months)
Continuous improvement, staying current

Actions:
1. _________________________________________________
2. _________________________________________________

Milestone: _________________________________________________

RESOURCE ALLOCATION:
Phase 1 Budget: $_______________
Phase 2 Budget: $_______________
Phase 3 Budget: $_______________
Phase 4 Budget: $_______________
Total: $_______________

RISK MITIGATION:
If timeline/budget insufficient:
□ Pause deployment of non-compliant high-risk AI
□ Increase resources (hire, contract, tools)
□ Narrow AI scope (reduce jurisdictions, use cases)
□ Seek expert help
□ Other: _______________________________
```

---

## Part 8: Monitoring & Updates

```
ONGOING COMPLIANCE MAINTENANCE

REGULATORY MONITORING:
□ Who monitors regulatory changes? _______________
□ How often? _______________
□ Sources: _______________

REASSESSMENT SCHEDULE:
□ Full readiness assessment: Annually
□ Targeted reassessment triggers:
  - New AI system deployment
  - Major AI system change
  - New regulation in applicable jurisdiction
  - Incident/audit finding
  - Acquisition/merger

DOCUMENTATION UPDATES:
□ Inventory updated: Quarterly
□ Risk assessments refreshed: Annually or upon change
□ Policies reviewed: Annually
□ Training materials updated: As regulations change

STAKEHOLDER REPORTING:
□ Board/executives: _______________
□ Governance committee: _______________
□ Business units: _______________

EXTERNAL ENGAGEMENT:
□ Industry associations: _______________
□ Standards development: _______________
□ Regulatory consultation: _______________
```

---

## Executive Summary Template

After completing assessment, summarize for leadership:

```
AI REGULATORY READINESS: EXECUTIVE SUMMARY

Date: _______________
Prepared by: _______________

OVERALL READINESS: □ Ready  □ Near-Ready  □ Significant Gaps  □ Not Ready

KEY FINDINGS:

1. Applicable Regulations:
   - EU AI Act: □ Yes  □ No
   - U.S. State Laws: _______________
   - Sector Rules: _______________

2. High-Risk AI Systems: ___ out of ___ total

3. Compliance Status:
   - Compliant: ____%
   - Near-compliant: ____%
   - Significant gaps: ____%
   - Non-compliant: ____%

4. Critical Gaps (fix immediately):
   1. _________________________________________________
   2. _________________________________________________
   3. _________________________________________________

5. Resource Needs:
   - Budget: $_______________
   - FTEs: _______________
   - External support: _______________

6. Timeline to Compliance:
   - Critical priorities: ___ months
   - Full compliance: ___ months

7. Risk if No Action:
   - Regulatory: _______________
   - Legal: _______________
   - Reputational: _______________
   - Financial: _______________

RECOMMENDATIONS:

1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

REQUESTED DECISIONS:

1. Budget approval: $_______________
2. Resource allocation: _______________
3. Timeline approval: _______________
4. Risk acceptance (if applicable): _______________

Next Review Date: _______________
```

---

**Used By Articles**:
- The Future of AI Regulation: What's Coming Next
- [Future articles on compliance, risk management, organizational readiness]

**Reusable For**:
- Compliance articles
- Regulatory strategy articles
- Risk assessment articles
- Organizational readiness articles
- Due diligence articles
