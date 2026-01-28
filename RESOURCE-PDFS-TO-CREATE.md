# Resource PDFs to Create

This document provides detailed context for creating 6 missing resource PDFs for the AIDefence platform.

**Status:** 34 out of 40 resource cards have PDFs (85% complete)
**Target Location:** `/public/downloads/resources/`

---

## 1. AI Ethics Principles Implementation Guide

**File Name:** `ai-ethics-principles-implementation.pdf`

**Card Details:**
- **Card ID:** `res-ai-ethics-principles-implementation`
- **Title:** AI Ethics Principles Implementation Guide
- **Trigger Text:** Ethics Implementation
- **Type:** Guide/Framework
- **Tags:** Ethics, Implementation, Best Practice
- **Used In:** Future of AI Ethics article (`future-ai-ethics`)

**Summary:**
Practical guide to operationalize high-level AI ethics principles—bridges the gap between values statements and concrete practices.

**Content Structure:**

### Page 1: Introduction
- Purpose: Transform abstract ethics principles into actionable practices
- Target audience: Organizations with AI ethics commitments
- The "principles-to-practice" gap problem

### Page 2-3: Core AI Ethics Principles
Common principles to cover:
1. **Transparency** - Making AI systems understandable
2. **Fairness** - Ensuring equitable outcomes
3. **Accountability** - Clear responsibility chains
4. **Privacy** - Protecting personal data
5. **Safety & Reliability** - Preventing harm
6. **Human Agency** - Keeping humans in control
7. **Social Benefit** - Positive societal impact

### Page 4-6: Implementation Roadmap
For each principle:
- **Assessment:** How to evaluate current state
- **Design:** How to build it into systems
- **Deployment:** How to maintain it in production
- **Monitoring:** How to measure compliance

### Page 7-8: Practical Examples
- Example: Implementing transparency in a credit scoring model
- Example: Building fairness into a hiring algorithm
- Example: Creating accountability structures for chatbot responses

### Page 9: Measurement Criteria
- KPIs for each principle
- Assessment frameworks (checklist format)
- Red flags and warning signs

### Page 10: Common Pitfalls & Solutions
- "Ethics washing" vs. real implementation
- Conflicting principles (transparency vs. privacy)
- Scalability challenges
- Resource constraints

**Similar Resources:**
- `res-seven-pillars-trustworthy-ai` (framework companion)
- `res-nist-ai-rmf-core-functions` (implementation structure)

---

## 2. AI Governance Career Pathways Map

**File Name:** `ai-governance-career-pathways.pdf`

**Card Details:**
- **Card ID:** `res-ai-governance-career-pathways`
- **Title:** AI Governance Career Pathways Map
- **Trigger Text:** Career Pathways
- **Type:** Guide/Matrix
- **Tags:** Careers, Skills, Professional Development
- **Used In:** AI Governance Careers article (`ai-governance-careers`)

**Summary:**
Career development guide for AI governance professionals—maps roles, required skills, certifications, and progression paths.

**Content Structure:**

### Page 1: Introduction
- The emerging AI governance profession
- Why these roles are critical
- Market demand trends

### Page 2-3: Career Progression Framework
Visual career ladder showing:
```
Executive Level
├── Chief AI Ethics Officer (CAIO)
├── VP of AI Governance
└── Head of Responsible AI

Senior Level
├── Senior AI Ethics Consultant
├── AI Governance Lead
└── Principal AI Policy Advisor

Mid-Level
├── AI Ethics Officer
├── AI Compliance Manager
├── AI Risk Manager
└── AI Policy Analyst

Entry Level
├── AI Ethics Analyst
├── AI Governance Coordinator
└── Junior AI Compliance Specialist
```

### Page 4-7: Detailed Role Profiles
For each role category, include:
- **Role Description** - Key responsibilities
- **Required Skills**
  - Technical: AI/ML basics, data analysis, risk assessment
  - Domain: Ethics, law, policy, compliance
  - Soft skills: Communication, stakeholder management
- **Typical Background** - Education and experience
- **Salary Range** - Market rates
- **Career Transitions** - Paths in/out of role

### Page 8-9: Skills Development Matrix
| Skill Category | Entry | Mid | Senior | Executive |
|----------------|-------|-----|--------|-----------|
| AI/ML Technical | Basic | Intermediate | Advanced | Strategic |
| Ethics Theory | Foundational | Applied | Expert | Thought Leader |
| Regulatory Knowledge | Awareness | Proficient | Specialist | Strategist |

### Page 10-11: Certifications & Qualifications
- Academic programs (Masters in AI Ethics, etc.)
- Professional certifications
  - IAPP AI Governance Professional
  - ISACA AI Auditor
  - IEEE CertifAIEd
- Short courses and bootcamps
- Industry conferences and networking

### Page 12: Action Plan Template
- Self-assessment checklist
- 6-month development plan
- Networking strategies
- Portfolio building tips

**Similar Resources:**
- `res-governance-raci` (roles and responsibilities)
- Career pathway format similar to professional development guides

---

## 3. AI National Security Risk Assessment

**File Name:** `ai-national-security-assessment.pdf`

**Card Details:**
- **Card ID:** `res-ai-national-security-assessment`
- **Title:** AI National Security Risk Assessment
- **Trigger Text:** Security Assessment
- **Type:** Framework/Assessment
- **Tags:** National Security, Risk, Defense
- **Used In:** AI and National Security article (`ai-national-security`)

**Summary:**
Framework for assessing AI systems with national security implications—evaluates dual-use risks, adversarial threats, and supply chain vulnerabilities.

**Content Structure:**

### Page 1: Introduction
- National security dimensions of AI
- Critical infrastructure and defense applications
- Regulatory context (ITAR, EAR, CFIUS)

### Page 2-3: Dual-Use Risk Evaluation
Assessment matrix:
- **Civilian Application** → **Military Application**
- Capability assessment (offensive vs. defensive)
- Technology sensitivity scoring
- Export control implications

Questions to assess:
1. Could this AI capability be weaponized?
2. Does it enhance surveillance capabilities?
3. Could it disrupt critical infrastructure?
4. Does it provide strategic military advantage?

### Page 4-5: Adversarial Threat Assessment
Threat categories:
1. **Model Poisoning** - Compromised training data
2. **Adversarial Attacks** - Fooling AI systems
3. **Model Theft** - Intellectual property exfiltration
4. **System Manipulation** - Backdoors and trojans

Assessment framework:
- Threat actor profiles (nation-states, criminal, hacktivists)
- Attack surface analysis
- Impact scenarios
- Mitigation strategies

### Page 6-7: Supply Chain Vulnerability Checklist
Risk assessment areas:
- **Training Data Sources** - Foreign data dependency
- **Compute Infrastructure** - Cloud provider security
- **Model Components** - Third-party libraries
- **Development Teams** - Personnel security clearances
- **Deployment Environment** - Operational security

Vendor assessment criteria:
- ☐ Jurisdiction of data centers
- ☐ Foreign ownership/control
- ☐ Security certifications (FedRAMP, etc.)
- ☐ Incident response capabilities

### Page 8-9: Classification Guidance
Decision tree for classifying AI systems:
```
Is system used for defense/intelligence? → Classified
Does system process classified data? → Classified
Could capabilities threaten national security? → Sensitive
Has dual-use potential? → Controlled Unclassified
General commercial application → Public
```

Information sharing protocols:
- What can be published
- Collaboration restrictions
- Foreign national access controls

### Page 10-11: Risk Scoring Matrix
Composite risk score based on:
- **Sensitivity** (1-5): How critical is the capability?
- **Vulnerability** (1-5): How exposed is it to threats?
- **Impact** (1-5): What's the consequence of compromise?

**Overall Risk = Sensitivity × Vulnerability × Impact**

Risk thresholds:
- 0-25: Low risk (standard controls)
- 26-75: Moderate risk (enhanced controls)
- 76-125: High risk (specialized controls + monitoring)

### Page 12: Compliance & Reporting
- Required notifications (CFIUS, DoD, etc.)
- Ongoing monitoring requirements
- Incident reporting procedures
- Audit preparation

**Similar Resources:**
- `res-ai-impact-identification-framework` (risk identification)
- `res-ai-incident-response-playbook` (incident handling)

---

## 4. Open-Weight Models Compliance Checklist

**File Name:** `open-source-compliance-checklist.pdf`

**Card Details:**
- **Card ID:** `res-open-source-compliance-checklist`
- **Title:** Open-Weight Models Compliance
- **Trigger Text:** None
- **Type:** Checklist
- **Tags:** Open Source, Licensing, Compliance
- **Used In:** The AI Technology Stack article (`ai-technology-stack`)

**Summary:**
Open-weight models (often called "open source AI") provide model weights that organizations can download and host themselves. However, these require careful license compliance checking, as some restrict commercial use or require attribution.

**Content Structure:**

### Page 1: Introduction
- What are open-weight models?
- "Open source" vs. "open weight" distinction
- Why license compliance matters (legal risk, penalties)

### Page 2-3: Common Open-Weight Licenses
Summary table of popular licenses:

| License | Commercial Use | Modification | Attribution | Share-Alike | Revenue Cap |
|---------|----------------|--------------|-------------|-------------|-------------|
| **Apache 2.0** | ✅ Yes | ✅ Yes | ✅ Required | ❌ No | ❌ No |
| **MIT** | ✅ Yes | ✅ Yes | ✅ Required | ❌ No | ❌ No |
| **Meta Llama Community** | ⚠️ Restricted* | ✅ Yes | ✅ Required | ❌ No | ✅ $700M MAU |
| **RAIL (Responsible AI)** | ⚠️ Restricted** | ✅ Yes | ✅ Required | ❌ No | ❌ No |
| **BigScience RAIL** | ⚠️ Restricted** | ✅ Yes | ✅ Required | ✅ Yes | ❌ No |
| **CreativeML OpenRAIL** | ⚠️ Restricted** | ✅ Yes | ✅ Required | ❌ No | ❌ No |

*Llama restrictions: No use if > 700M monthly active users
**RAIL restrictions: Banned use cases (weapons, surveillance, misinformation, etc.)

### Page 4-5: Pre-Deployment Compliance Checklist

**Step 1: License Identification**
- ☐ Locate LICENSE file in model repository
- ☐ Identify license version (e.g., Apache 2.0 vs. Apache 1.1)
- ☐ Check for additional terms or restrictions
- ☐ Review model card for usage limitations

**Step 2: Commercial Use Assessment**
- ☐ Is our use case considered "commercial"?
- ☐ Does license permit commercial use?
- ☐ Are there revenue/user thresholds?
- ☐ Do we exceed any thresholds?
- ☐ Is our industry restricted? (e.g., weapons, surveillance)

**Step 3: Attribution Requirements**
- ☐ Attribution required in:
  - ☐ Documentation
  - ☐ User interface
  - ☐ API responses
  - ☐ Marketing materials
- ☐ Specific attribution text provided by licensor
- ☐ Link to original model repository required

**Step 4: Modification Rights**
- ☐ Are we fine-tuning or modifying the model?
- ☐ Does license permit modifications?
- ☐ Share-alike requirements (must release modified versions)?
- ☐ What license must modified versions use?

**Step 5: Distribution & Deployment**
- ☐ Are we distributing the model to third parties?
- ☐ API access considered "distribution"?
- ☐ Must we provide source code/weights?
- ☐ Trademark/brand restrictions on model name

### Page 6-7: Prohibited Use Cases
Common RAIL license restrictions:

**Strictly Prohibited:**
- ❌ Weapons development or targeting
- ❌ Surveillance systems (without consent)
- ❌ Disinformation campaigns
- ❌ Spam or phishing
- ❌ Discrimination or harassment
- ❌ Illegal content generation
- ❌ Privacy violations
- ❌ Healthcare diagnosis (without validation)
- ❌ Legal advice (as primary source)
- ❌ Financial advice (as primary source)

**Assessment questions:**
1. Does our use case appear on prohibited list?
2. Could our system be misused for prohibited purposes?
3. Do we have adequate safeguards?

### Page 8-9: Liability & Warranty
Key license clauses to understand:

**"AS-IS" Warranty Disclaimer**
- Models provided without guarantees
- No warranty of fitness for purpose
- Organization assumes all risk

**Indemnification**
- Who is responsible if model causes harm?
- Insurance requirements
- Legal defense obligations

**Patent Clauses**
- Patent grant (if any)
- Patent retaliation clauses
- Prior art considerations

### Page 10: Compliance Documentation Template

**Model License Compliance Record**

Model Name: _______________
Model Source: _______________
License Type: _______________
License Version: _______________

Commercial Use Permitted: ☐ Yes ☐ No ☐ Conditional
Conditions: _______________

Attribution Required: ☐ Yes ☐ No
Attribution Text: _______________

Modifications Permitted: ☐ Yes ☐ No
Share-Alike Required: ☐ Yes ☐ No

Prohibited Use Cases Reviewed: ☐ Yes
Our Use Case Compliant: ☐ Yes ☐ No

Legal Review Completed: ☐ Yes
Reviewer: _______________
Date: _______________
Approval: ☐ Approved ☐ Denied ☐ Conditional

### Page 11-12: Ongoing Monitoring
- License changes (model updates may have new terms)
- Usage drift (ensure use case remains compliant)
- Audit preparation (documentation requirements)
- Vendor/provider changes (acquisition, policy updates)

**Annual Compliance Review Checklist:**
- ☐ Re-verify license terms (no changes)
- ☐ Confirm use case still compliant
- ☐ Update attribution if required
- ☐ Review prohibited use cases
- ☐ Document any model updates
- ☐ Legal team sign-off

**Similar Resources:**
- `res-design-review-checklist` (checklist format)
- `res-foundation-model-due-diligence` (model evaluation)

---

## 5. AI Regulatory Horizon Scanner

**File Name:** `regulatory-horizon-scanner.pdf`

**Card Details:**
- **Card ID:** `res-regulatory-horizon-scanner`
- **Title:** AI Regulatory Horizon Scanner
- **Trigger Text:** Regulation Tracking
- **Type:** Framework/Tool
- **Tags:** Regulation, Monitoring, Global
- **Used In:** Future of AI Regulation article (`future-ai-regulation`)

**Summary:**
Monitoring framework to track emerging AI regulations globally—identifies regulatory signals and assesses impact on your organization.

**Content Structure:**

### Page 1: Introduction
- Why regulatory monitoring matters
- Speed of AI regulation development
- Cost of non-compliance
- Proactive vs. reactive approaches

### Page 2-3: Key Jurisdictions to Monitor

**Tier 1: High Priority (Mandatory Monitoring)**
- 🇪🇺 **European Union** - AI Act (comprehensive regulation)
- 🇺🇸 **United States** - Federal and state-level regulation
- 🇬🇧 **United Kingdom** - Post-Brexit AI regulation
- 🇨🇳 **China** - Algorithm registration, data governance

**Tier 2: Emerging Markets (Important Monitoring)**
- 🇨🇦 Canada - AIDA (Artificial Intelligence and Data Act)
- 🇸🇬 Singapore - Model AI Governance Framework
- 🇯🇵 Japan - AI utilization principles
- 🇰🇷 South Korea - AI Framework Act
- 🇮🇳 India - Digital Personal Data Protection Act

**Tier 3: Industry-Specific**
- Sector-specific regulations (healthcare, finance, etc.)
- International standards (ISO, IEEE)

### Page 4-5: Regulatory Tracking Template

**Jurisdiction:** _______________
**Regulation Name:** _______________
**Status:** ☐ Proposed ☐ Draft ☐ Enacted ☐ In Force

**Timeline:**
- Proposal Date: _______________
- Expected Enactment: _______________
- Enforcement Date: _______________
- Compliance Deadline: _______________

**Scope:**
- ☐ All AI systems
- ☐ High-risk AI only
- ☐ Specific sectors: _______________
- ☐ Specific technologies: _______________

**Key Requirements:**
- ☐ Risk assessment
- ☐ Impact assessment
- ☐ Registration/notification
- ☐ Transparency/disclosure
- ☐ Human oversight
- ☐ Data governance
- ☐ Model documentation
- ☐ Ongoing monitoring
- ☐ Incident reporting
- ☐ Third-party audits

**Penalties:**
- Maximum Fine: _______________
- Criminal Liability: ☐ Yes ☐ No

### Page 6-7: Impact Assessment Criteria

For each regulation, score impact across dimensions:

**Applicability (0-5)**
- 5 = Directly applies to our AI systems
- 3 = Partially applies
- 1 = Minimal applicability
- 0 = Does not apply

**Compliance Effort (0-5)**
- 5 = Major system changes + new processes
- 3 = Moderate documentation/process changes
- 1 = Minor adjustments
- 0 = Already compliant

**Penalty Risk (0-5)**
- 5 = Severe financial/criminal penalties
- 3 = Moderate fines
- 1 = Administrative actions
- 0 = No penalties

**Timeline Urgency (0-5)**
- 5 = < 6 months to compliance
- 3 = 6-18 months
- 1 = > 18 months
- 0 = Not yet enacted

**Overall Impact Score = Applicability × (Compliance Effort + Penalty Risk + Timeline Urgency)**

Priority tiers:
- **Critical (75-100):** Immediate action required
- **High (50-74):** Action plan within 1 month
- **Medium (25-49):** Monitor and plan within 3 months
- **Low (0-24):** Awareness, revisit quarterly

### Page 8-9: Early Warning Signals

Watch for these indicators of upcoming regulation:

**Legislative Signals:**
- ☐ Parliamentary/Congressional hearings on AI
- ☐ Consultation papers or Requests for Comment
- ☐ White papers from government agencies
- ☐ International policy recommendations (OECD, UN)
- ☐ Regulatory sandbox programs launched

**Incident-Driven Signals:**
- ☐ High-profile AI failures or harms
- ☐ Media coverage of AI risks
- ☐ Class action lawsuits related to AI
- ☐ Regulatory enforcement actions

**Industry Signals:**
- ☐ Trade associations releasing guidelines
- ☐ Major companies adopting voluntary standards
- ☐ Insurance industry requiring AI certifications
- ☐ Investor due diligence on AI governance

**Academic/Expert Signals:**
- ☐ Research papers on AI risks gaining traction
- ☐ Expert testimony to government bodies
- ☐ International conferences on AI governance

### Page 10-11: Monitoring Workflow

**Monthly Tasks:**
- ☐ Scan official government websites/registries
- ☐ Review trade association newsletters
- ☐ Check legal databases (LexisNexis, Westlaw)
- ☐ Monitor news aggregators (Google Alerts)
- ☐ Review academic preprint servers

**Quarterly Tasks:**
- ☐ Update regulatory inventory
- ☐ Re-assess impact scores
- ☐ Stakeholder briefing (legal, compliance, leadership)
- ☐ Adjust compliance roadmap

**Annual Tasks:**
- ☐ Comprehensive regulatory landscape review
- ☐ Benchmark against peer organizations
- ☐ Strategic planning session
- ☐ External legal counsel consultation

### Page 12: Action Planning Framework

When new regulation identified:

**Phase 1: Assessment (Week 1)**
1. Determine applicability
2. Calculate impact score
3. Identify affected systems/processes

**Phase 2: Gap Analysis (Weeks 2-3)**
1. Compare current practices to requirements
2. Identify compliance gaps
3. Estimate remediation effort

**Phase 3: Roadmap (Week 4)**
1. Prioritize compliance activities
2. Assign ownership
3. Set milestones
4. Budget allocation

**Phase 4: Execution & Monitoring (Ongoing)**
1. Implement compliance measures
2. Track progress
3. Adjust as regulation evolves
4. Prepare for audits

**Similar Resources:**
- `res-compliance-crosswalk-builder` (multi-jurisdiction compliance)
- `res-eu-ai-act-classification` (EU AI Act specifics)

---

## 6. Seven Pillars of Trustworthy AI Implementation

**File Name:** `seven-pillars-implementation.pdf`

**Card Details:**
- **Card ID:** `res-seven-pillars-implementation`
- **Title:** Seven Pillars of Trustworthy AI Implementation
- **Trigger Text:** Seven Pillars
- **Type:** Implementation Guide
- **Tags:** Trustworthy AI, Framework, Implementation
- **Used In:** Trustworthy AI: Seven Pillars article (`trustworthy-ai`)

**Summary:**
Operational framework for the seven pillars of trustworthy AI—turns principles into measurable practices and controls.

**Content Structure:**

### Page 1: Introduction
- Companion to the Seven Pillars Framework
- From principles to practice
- Organization of this guide

### The Seven Pillars:
1. **Transparency**
2. **Fairness**
3. **Accountability**
4. **Safety & Reliability**
5. **Privacy**
6. **Human Agency & Oversight**
7. **Environmental & Social Wellbeing**

### Page 2-9: Implementation Guide for Each Pillar

**For each pillar (1 page each):**

#### Pillar Name: TRANSPARENCY
**Core Principle:** Making AI systems understandable and explainable

**Measurable Practices:**
1. **Model Documentation**
   - ☐ Model card published
   - ☐ Training data described
   - ☐ Performance metrics disclosed
   - ☐ Known limitations documented

2. **User-Facing Transparency**
   - ☐ AI disclosure when users interact with AI
   - ☐ Explanation of how decisions are made
   - ☐ Appeal/challenge mechanism available

3. **Internal Transparency**
   - ☐ Model registry maintained
   - ☐ Decision logs captured
   - ☐ Audit trail enabled

**Governance Controls:**
- **Policy:** Transparency Policy Document
- **Process:** Model approval requires documentation
- **Technology:** Explainability tools deployed (SHAP, LIME, etc.)
- **Roles:** Transparency Lead assigned

**Success Metrics (KPIs):**
- % of models with complete documentation
- User satisfaction with explanations (survey)
- Time to respond to explanation requests
- Audit findings related to transparency

**Common Pitfalls:**
- "Black box" acceptance
- Overly technical explanations for non-technical users
- Transparency theater (surface-level info only)

**Maturity Levels:**
- Level 1: Ad-hoc documentation
- Level 2: Standardized templates
- Level 3: Automated documentation generation
- Level 4: Real-time explainability in production

---

[Repeat similar structure for remaining 6 pillars:]

### Page 3: FAIRNESS
- Measurable Practices: Bias testing, demographic parity checks
- Controls: Fairness audits, diverse training data
- Metrics: Disparity ratios, false positive/negative rates by group

### Page 4: ACCOUNTABILITY
- Measurable Practices: Clear ownership, incident response
- Controls: RACI matrix, escalation procedures
- Metrics: Time to resolve incidents, accountability gaps identified

### Page 5: SAFETY & RELIABILITY
- Measurable Practices: Adversarial testing, monitoring
- Controls: Safety testing protocols, circuit breakers
- Metrics: System uptime, error rates, harm incidents

### Page 6: PRIVACY
- Measurable Practices: Data minimization, encryption
- Controls: Privacy-by-design, access controls
- Metrics: Data breaches, privacy complaints, PIA completion

### Page 7: HUMAN AGENCY & OVERSIGHT
- Measurable Practices: Human-in-the-loop, override mechanisms
- Controls: Escalation paths, human review requirements
- Metrics: Override rate, human intervention speed

### Page 8: ENVIRONMENTAL & SOCIAL WELLBEING
- Measurable Practices: Carbon tracking, impact assessment
- Controls: Efficiency optimization, impact reviews
- Metrics: Carbon footprint per model, social impact score

---

### Page 10-11: Implementation Roadmap

**Phase 1: Foundation (Months 1-3)**
- Baseline assessment against seven pillars
- Identify critical gaps
- Assign pillar champions
- Develop implementation plan

**Phase 2: Quick Wins (Months 3-6)**
- Implement low-hanging fruit
- Create documentation templates
- Initial training programs
- Pilot with 1-2 AI systems

**Phase 3: Systematic Rollout (Months 6-12)**
- Apply framework to all AI systems
- Establish governance processes
- Implement monitoring tools
- First annual audit

**Phase 4: Continuous Improvement (Year 2+)**
- Mature practices to higher levels
- Automation of compliance checks
- External certification (if desired)
- Thought leadership and sharing

### Page 12: Audit & Verification

**Self-Assessment Checklist:**
For each pillar, rate maturity:
- ☐ Level 1: Aware (principles documented)
- ☐ Level 2: Developing (some practices in place)
- ☐ Level 3: Mature (systematic implementation)
- ☐ Level 4: Optimizing (continuous improvement)

**Internal Audit Procedures:**
- Quarterly self-assessments
- Annual comprehensive audits
- Gap analysis and remediation tracking

**External Verification:**
- Third-party audits (optional)
- Industry certifications
- Regulatory assessments

**Continuous Monitoring Dashboard:**
Track real-time KPIs for all seven pillars in a centralized view.

**Similar Resources:**
- `res-seven-pillars-trustworthy-ai` (framework companion)
- `res-nist-ai-rmf-core-functions` (implementation approach)
- `res-design-review-checklist` (operational practices)

---

## Summary Table

| # | File Name | Type | Pages | Complexity |
|---|-----------|------|-------|------------|
| 1 | ai-ethics-principles-implementation.pdf | Guide | 10 | Medium |
| 2 | ai-governance-career-pathways.pdf | Matrix/Guide | 12 | Medium |
| 3 | ai-national-security-assessment.pdf | Framework | 12 | High |
| 4 | open-source-compliance-checklist.pdf | Checklist | 12 | Medium |
| 5 | regulatory-horizon-scanner.pdf | Framework | 12 | High |
| 6 | seven-pillars-implementation.pdf | Guide | 12 | High |

---

## Design Guidelines

**Consistent Formatting:**
- Header: Include resource title and page number
- Footer: "© AIDefence | aidefence.ca"
- Font: Professional sans-serif (Arial, Helvetica)
- Colors: Match AIDefence brand (blues/grays)

**Content Elements:**
- ✅ Checkboxes for actionable items
- 📋 Tables for structured information
- ⚠️ Warning boxes for critical notes
- 💡 Tip boxes for best practices
- Visual diagrams where helpful

**Format:**
- PDF format
- Print-friendly (black & white compatible)
- Bookmarks/table of contents for navigation
- Fillable forms where applicable (checklists)

---

## Next Steps

1. Create PDFs based on detailed outlines above
2. Save to: `/public/downloads/resources/`
3. Run mapping script to connect PDFs to resource cards
4. Verify downloads work in production
5. Test on a few articles to ensure resource cards display correctly

---

**Document Created:** 2026-01-28
**For:** AIDefence Platform Resource Cards
**Target Completion:** 100% of resource cards with downloads (40/40)
