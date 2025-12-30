---
title: Article 150: How to Conduct an AI Impact Assessment — Step by Step
slug: article-150-how-to-conduct-an-ai-impact-assessment-step-by-s
path: responsibility
tldr: An AI Impact Assessment is a structured evaluation that examines:

- **Who** is affected by the AI system
- **What** impacts (positive and negative...
contentSections:
  - What is an AI Impact Assessment?
  - Before You Start: Prerequisites
  - The AIA Process: Overview
  - PHASE 1: PREPARATION
  - PHASE 2: SYSTEM ANALYSIS
  - PHASE 3: IMPACT ANALYSIS
  - PHASE 4: MITIGATION AND DECISION
  - PHASE 5: DOCUMENTATION AND MONITORING
  - Templates and Tools
  - Common Challenges and Solutions
  - Regulatory Alignment
  - Time Estimates
relatedConcepts: []
crossPathRefs:
tags:
  - article
  - conduct
  - impact assessment
  - step
  - step comprehensive step
category: AI Auditing & Accountability
image: article-150-how-to-conduct-an-ai-impact-assessment-step-by-s.jpg
imageAlt: Article 150: How to Conduct an AI Impact Assessment — Step by Step
author: Sunil Iyer
publishDate: 2025-12-23
readingTime: 32
seoTitle: Article 150: How to Conduct an AI Impact Assessment — Step b
seoDescription: An AI Impact Assessment is a structured evaluation that examines:

- **Who** is affected by the AI system
- **What** impacts (positive and negative...
---



## What is an AI Impact Assessment?


### Definition

An AI Impact Assessment is a structured evaluation that examines:

- **Who** is affected by the AI system
- **What** impacts (positive and negative) the system may have
- **How** significant those impacts are
- **What** can be done to maximize benefits and minimize harms
- **Whether** the system should proceed, and under what conditions


### Why Conduct an AIA?

| Reason | Benefit |
<!-- component:table:table-why-conduct-an-aia -->
|--------|---------|
| Regulatory Compliance | Required by EU AI Act, Canada's AIDA, and various state laws |
| Risk Management | Identifies problems before they become incidents |
| Stakeholder Trust | Demonstrates responsible AI practices |
| Better Outcomes | Improves system design through structured analysis |
| Legal Protection | Documents due diligence if issues arise |
| Ethical Obligation | Ensures consideration of affected communities |


### Types of AI Impact Assessments

| Type | Focus | When Used |
<!-- component:table:table-types-of-ai-impact-assessments -->
|------|-------|-----------|
| Algorithmic Impact Assessment (AIA) | Algorithm-specific impacts | Government/public sector (Canada) |
| AI Impact Assessment | Broad AI system impacts | General enterprise use |
| Human Rights Impact Assessment | Fundamental rights impacts | EU AI Act high-risk systems |
| Data Protection Impact Assessment (DPIA) | Privacy impacts | GDPR-regulated processing |
| Equality Impact Assessment | Discrimination impacts | UK public sector |

This guide covers a comprehensive AI Impact Assessment that can be adapted for specific regulatory requirements.

---


## Before You Start: Prerequisites


### What You Need

**Documentation to Gather:**
- System design documents and technical specifications
- Data documentation (sources, characteristics, processing)
- Intended use cases and user documentation
- Any existing testing results
- Stakeholder analysis (if previously conducted)
- Relevant policies and regulatory requirements

**People to Involve:**
- AI System Owner
- Technical team (developers, data scientists)
- Subject matter experts for the use case
- Legal/Compliance representative
- Privacy specialist
- Representatives of affected communities (where possible)
- Ethics advisor (for high-risk systems)

**Tools and Templates:**
- AIA template (provided in this guide)
- Risk assessment matrix
- Stakeholder mapping template
- Documentation repository


### When to Conduct an AIA

| Timing | Purpose |
<!-- component:table:table-when-to-conduct-an-aia -->
|--------|---------|
| **Pre-development** | Inform design decisions, identify showstoppers |
| **Pre-deployment** | Final check before go-live, document baseline |
| **Post-deployment** | Validate assumptions, identify emerging issues |
| **Periodic review** | Ensure continued appropriateness (annually for high-risk) |
| **After significant changes** | Reassess when system or context changes |

---


## The AIA Process: Overview

The complete AIA process has **10 steps**:

```
┌─────────────────────────────────────────────────────────┐
│  PHASE 1: PREPARATION                                   │
│  Step 1: Define Scope and Objectives                    │
│  Step 2: Assemble the Assessment Team                   │
│  Step 3: Gather Documentation                           │
├─────────────────────────────────────────────────────────┤
│  PHASE 2: SYSTEM ANALYSIS                               │
│  Step 4: Describe the AI System                         │
│  Step 5: Map Stakeholders and Affected Persons          │
├─────────────────────────────────────────────────────────┤
│  PHASE 3: IMPACT ANALYSIS                               │
│  Step 6: Identify Potential Impacts                     │
│  Step 7: Assess Impact Significance                     │
├─────────────────────────────────────────────────────────┤
│  PHASE 4: MITIGATION AND DECISION                       │
│  Step 8: Develop Mitigation Measures                    │
│  Step 9: Make Go/No-Go Recommendation                   │
├─────────────────────────────────────────────────────────┤
│  PHASE 5: DOCUMENTATION AND MONITORING                  │
│  Step 10: Document and Establish Monitoring             │
└─────────────────────────────────────────────────────────┘
```

---


## PHASE 1: PREPARATION


### Step 1: Define Scope and Objectives


#### 1.1 Identify the Assessment Trigger

**Document why this AIA is being conducted:**

```
ASSESSMENT TRIGGER

□ New AI system development
□ Pre-deployment review
□ Significant system modification
□ Regulatory requirement
□ Periodic reassessment
□ Incident response
□ Stakeholder concern
□ Other: _______________________

Trigger Details:
_____________________________________________________________
_____________________________________________________________

Date Triggered: _______________
Requested By: _______________
```


#### 1.2 Define the Scope

**Clearly articulate what is being assessed:**

```
SCOPE DEFINITION

System Being Assessed:
- System Name: _______________________
- System Version: _______________________
- System Owner: _______________________

Assessment Boundaries:

IN SCOPE:
□ Core AI/ML model(s)
□ Training data and data pipelines
□ User interface and interactions
□ Integration with other systems
□ Human oversight processes
□ Organizational processes around the system
□ Third-party components
□ Other: _______________________

OUT OF SCOPE:
□ _______________________
□ _______________________
□ _______________________

Rationale for Scope Decisions:
_____________________________________________________________
_____________________________________________________________

Geographic Scope:
□ Single jurisdiction: _______________________
□ Multiple jurisdictions: _______________________
□ Global

Time Scope:
□ Point-in-time assessment
□ Lifecycle assessment (development through retirement)
□ Specific phase: _______________________
```


#### 1.3 Set Assessment Objectives

**Define what you want to achieve:**

```
ASSESSMENT OBJECTIVES

Primary Objectives:
□ Identify potential harms to individuals and groups
□ Assess compliance with [specific regulation/policy]
□ Evaluate fairness across demographic groups
□ Assess privacy implications
□ Evaluate safety and security risks
□ Inform design decisions
□ Support deployment decision
□ Meet regulatory requirement
□ Other: _______________________

Specific Questions to Answer:
1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________

Success Criteria for This Assessment:
_____________________________________________________________
_____________________________________________________________
```


#### 1.4 Determine Assessment Depth

**Match assessment rigor to risk level:**

| Risk Level | Assessment Depth | Typical Duration | Team Size |
<!-- component:table:table-14-determine-assessment-depth -->
|------------|------------------|------------------|-----------|
| Low | Streamlined (checklist-based) | 1-2 days | 1-2 people |
| Medium | Standard (full process, internal) | 1-2 weeks | 3-5 people |
| High | Comprehensive (full process + external input) | 2-4 weeks | 5-10 people |
| Critical | Extensive (independent review) | 4-8 weeks | 10+ people |

```
ASSESSMENT DEPTH DETERMINATION

Preliminary Risk Level: □ Low  □ Medium  □ High  □ Critical

Assessment Approach:
□ Streamlined
□ Standard
□ Comprehensive
□ Extensive

Justification:
_____________________________________________________________

Target Completion Date: _______________
```

---


### Step 2: Assemble the Assessment Team


#### 2.1 Define Required Roles

**Core Team (all assessments):**

| Role | Responsibility | Required For |
<!-- component:table:table-21-define-required-roles -->
|------|---------------|--------------|
| Assessment Lead | Coordinates process, ensures completion | All |
| System Owner | Provides system information, accountable for outcomes | All |
| Technical Expert | Explains technical aspects, provides data | All |

**Extended Team (standard and above):**

| Role | Responsibility | Required For |
<!-- component:table:table-21-define-required-roles -->
|------|---------------|--------------|
| Legal/Compliance | Regulatory requirements, legal risks | Medium+ |
| Privacy Expert | Data protection, privacy impacts | Medium+ |
| Subject Matter Expert | Domain expertise for use case | Medium+ |
| Ethics Advisor | Ethical considerations | High+ |
| Affected Community Rep | Lived experience perspective | High+ |
| Independent Reviewer | Objectivity, quality assurance | Critical |


#### 2.2 Document the Team

```
ASSESSMENT TEAM

Assessment Lead:
- Name: _______________________
- Role/Title: _______________________
- Contact: _______________________

Core Team Members:

| Name | Role | Responsibility | Time Commitment |
<!-- component:table:table-22-document-the-team -->
|------|------|----------------|-----------------|
<!-- component:table:table-22-document-the-team -->
|      |      |                |                 |
<!-- component:table:table-22-document-the-team -->
|      |      |                |                 |
<!-- component:table:table-22-document-the-team -->
|      |      |                |                 |

Extended Team/Consultees:

| Name | Role | Input Required | Availability |
<!-- component:table:table-22-document-the-team -->
|------|------|----------------|--------------|
<!-- component:table:table-22-document-the-team -->
|      |      |                |              |
<!-- component:table:table-22-document-the-team -->
|      |      |                |              |

External Participants (if applicable):
| Name/Organization | Role | Input Required |
<!-- component:table:table-22-document-the-team -->
|-------------------|------|----------------|
<!-- component:table:table-22-document-the-team -->
|                   |      |                |

Conflict of Interest Declarations:
□ All team members have declared any conflicts of interest
□ Conflicts identified and managed: _______________________
□ No conflicts identified
```


#### 2.3 Establish Working Arrangements

```
WORKING ARRANGEMENTS

Meeting Schedule:
- Kickoff: _______________
- Working sessions: _______________
- Review meetings: _______________
- Final presentation: _______________

Communication:
- Primary channel: _______________________
- Document repository: _______________________
- Decision escalation path: _______________________

Confidentiality:
□ All participants briefed on confidentiality requirements
□ NDA required for external participants
□ Data handling protocols established
```

---


### Step 3: Gather Documentation


#### 3.1 Documentation Checklist

```
DOCUMENTATION CHECKLIST

System Documentation:
□ System requirements/specifications
□ System architecture diagram
□ Data flow diagram
□ Technical design documents
□ User documentation/manuals
□ API documentation (if applicable)

AI/ML Specific:
□ Model architecture description
□ Training methodology
□ Model card (if exists)
□ Performance metrics and test results
□ Known limitations documentation

Data Documentation:
□ Training data description
□ Data sources and provenance
□ Data processing/transformation steps
□ Data quality assessment
□ Data retention policies
□ Privacy/consent documentation

Governance Documentation:
□ Business case/justification
□ Previous risk assessments
□ Stakeholder analysis
□ Change management records
□ Incident history (if deployed)

Regulatory/Policy:
□ Applicable regulations identified
□ Relevant organizational policies
□ Industry standards/guidelines
□ Contractual requirements

Missing Documentation:
| Document | Owner | Due Date | Status |
<!-- component:table:table-31-documentation-checklist -->
|----------|-------|----------|--------|
<!-- component:table:table-31-documentation-checklist -->
|          |       |          |        |
```


#### 3.2 Conduct Preliminary Interviews

**Interview the following (as needed):**

```
PRELIMINARY INTERVIEWS

System Owner Interview:
- Business objectives and success criteria
- Expected benefits
- Known concerns or limitations
- Stakeholder expectations
- Resource constraints

Technical Team Interview:
- How the system works
- Design decisions and trade-offs
- Technical limitations
- Testing approach and results
- Known issues or edge cases

Business Users Interview:
- How system will be used in practice
- Workarounds or modifications expected
- Training and support needs
- Concerns about the system

Interview Notes Location: _______________________
```

---


## PHASE 2: SYSTEM ANALYSIS


### Step 4: Describe the AI System


#### 4.1 System Overview

```
SYSTEM DESCRIPTION

System Name: _______________________
Version: _______________________
Status: □ Concept  □ Development  □ Testing  □ Deployed  □ Retired

Purpose Statement:
[Describe what the system does and why in 2-3 sentences]
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________

Business Context:
- Business problem being solved: _______________________
- Why AI/ML is used (vs. alternatives): _______________________
- Expected benefits: _______________________
- Success metrics: _______________________
```


#### 4.2 Technical Description

```
TECHNICAL DESCRIPTION

AI/ML Approach:
□ Rule-based system
□ Traditional machine learning
  □ Classification
  □ Regression
  □ Clustering
  □ Other: _______________________
□ Deep learning
  □ Neural network type: _______________________
□ Generative AI
  □ Foundation model used: _______________________
□ Hybrid approach
□ Other: _______________________

Model Details:
- Model type/architecture: _______________________
- Number of models: _______________________
- Model size/complexity: _______________________
- Training approach: _______________________
- Update frequency: _______________________

System Components:
[Describe major components and their functions]

| Component | Function | AI/ML Involved? |
<!-- component:table:table-42-technical-description -->
|-----------|----------|-----------------|
<!-- component:table:table-42-technical-description -->
|           |          |                 |
<!-- component:table:table-42-technical-description -->
|           |          |                 |

Third-Party Components:
| Component | Vendor | Purpose | Access to Data? |
<!-- component:table:table-42-technical-description -->
|-----------|--------|---------|-----------------|
<!-- component:table:table-42-technical-description -->
|           |        |         |                 |
```


#### 4.3 Data Description

```
DATA DESCRIPTION

Training Data:

| Data Source | Data Type | Volume | Time Period | Personal Data? |
<!-- component:table:table-43-data-description -->
|-------------|-----------|--------|-------------|----------------|
<!-- component:table:table-43-data-description -->
|             |           |        |             |                |
<!-- component:table:table-43-data-description -->
|             |           |        |             |                |

Data Characteristics:
- Geographic coverage: _______________________
- Demographic representation: _______________________
- Known gaps or limitations: _______________________
- Data quality assessment: _______________________

Input Data (Runtime):
| Input | Source | Format | Frequency |
<!-- component:table:table-43-data-description -->
|-------|--------|--------|-----------|
<!-- component:table:table-43-data-description -->
|       |        |        |           |

Output Data:
| Output | Type | Recipients | Retention |
<!-- component:table:table-43-data-description -->
|--------|------|------------|-----------|
<!-- component:table:table-43-data-description -->
|        |      |            |           |

Data Flow Diagram:
[Include or reference data flow diagram]
```


#### 4.4 Decision Framework

```
DECISION FRAMEWORK

What decisions does the system make or influence?

| Decision | Fully Automated? | Human Review? | Impact Level |
<!-- component:table:table-44-decision-framework -->
|----------|------------------|---------------|--------------|
<!-- component:table:table-44-decision-framework -->
|          |                  |               |              |
<!-- component:table:table-44-decision-framework -->
|          |                  |               |              |

Decision Process:
[Describe how the system reaches its outputs]
_____________________________________________________________
_____________________________________________________________

Confidence/Uncertainty:
- How does system express confidence? _______________________
- What happens when confidence is low? _______________________
- Are uncertainty estimates provided? _______________________

Human Oversight:
- What human review exists? _______________________
- When is human review triggered? _______________________
- Can humans override the system? _______________________
- What information do reviewers see? _______________________
```


#### 4.5 Operational Context

```
OPERATIONAL CONTEXT

Deployment Environment:
□ Cloud: _______________________
□ On-premises
□ Edge/device
□ Hybrid

Users:
| User Type | Number | Role in System | Training Required? |
<!-- component:table:table-45-operational-context -->
|-----------|--------|----------------|-------------------|
<!-- component:table:table-45-operational-context -->
|           |        |                |                   |

Integration:
| Connected System | Integration Type | Data Exchanged |
<!-- component:table:table-45-operational-context -->
|------------------|------------------|----------------|
<!-- component:table:table-45-operational-context -->
|                  |                  |                |

Operational Parameters:
- Expected query/transaction volume: _______________________
- Response time requirements: _______________________
- Availability requirements: _______________________
- Scalability expectations: _______________________
```

---


### Step 5: Map Stakeholders and Affected Persons


#### 5.1 Stakeholder Identification

**Identify all parties with an interest in or affected by the system:**

```
STAKEHOLDER MAP

Primary Stakeholders (directly involved):
| Stakeholder | Role | Interest/Concern | Influence Level |
<!-- component:table:table-51-stakeholder-identification -->
|-------------|------|------------------|-----------------|
|             |      |                  | High/Med/Low    |
<!-- component:table:table-51-stakeholder-identification -->
|             |      |                  |                 |

Secondary Stakeholders (indirectly affected):
| Stakeholder | Relationship | Interest/Concern | Impact Level |
<!-- component:table:table-51-stakeholder-identification -->
|-------------|--------------|------------------|--------------|
|             |              |                  | High/Med/Low |
<!-- component:table:table-51-stakeholder-identification -->
|             |              |                  |              |

Categories to Consider:
□ System users (direct operators)
□ Decision subjects (people decisions are made about)
□ Customers/clients
□ Employees
□ Management/executives
□ Shareholders/owners
□ Regulators
□ Industry peers
□ Advocacy groups
□ General public
□ Future generations
□ Other: _______________________
```


#### 5.2 Affected Persons Analysis

**Deep dive into people affected by the system's outputs:**

```
AFFECTED PERSONS ANALYSIS

Who are the affected persons?
[People about whom the system makes decisions or whose data is used]

| Group | How Affected | Vulnerability Factors | Size/Scale |
<!-- component:table:table-52-affected-persons-analysis -->
|-------|--------------|----------------------|------------|
<!-- component:table:table-52-affected-persons-analysis -->
|       |              |                      |            |
<!-- component:table:table-52-affected-persons-analysis -->
|       |              |                      |            |

Demographic Analysis:
Consider whether affected persons include:
□ Children or minors
□ Elderly individuals
□ People with disabilities
□ Economically disadvantaged
□ Minority ethnic/racial groups
□ Religious minorities
□ LGBTQ+ individuals
□ Immigrants or refugees
□ Incarcerated individuals
□ People with limited digital literacy
□ People in vulnerable circumstances
□ Other: _______________________

For Each Vulnerable Group Identified:
| Group | Specific Vulnerabilities | Special Considerations |
<!-- component:table:table-52-affected-persons-analysis -->
|-------|-------------------------|----------------------|
<!-- component:table:table-52-affected-persons-analysis -->
|       |                         |                      |

Power Dynamics:
- Can affected persons opt out? □ Yes □ No □ Partially
- Are affected persons aware of the system? □ Yes □ No □ Partially
- Do affected persons have recourse? □ Yes □ No □ Partially
- Is there a power imbalance? □ Yes □ No
  If yes, describe: _______________________
```


#### 5.3 Stakeholder Engagement Plan

```
STAKEHOLDER ENGAGEMENT PLAN

Engagement Approach by Stakeholder:

| Stakeholder | Engagement Method | Timing | Status |
<!-- component:table:table-53-stakeholder-engagement-plan -->
|-------------|-------------------|--------|--------|
<!-- component:table:table-53-stakeholder-engagement-plan -->
|             |                   |        |        |

Engagement Methods:
□ Interviews
□ Focus groups
□ Surveys
□ Public consultation
□ Advisory board input
□ Written submissions
□ User testing feedback
□ Other: _______________________

Community/Affected Person Input:
- How will affected persons' perspectives be gathered?
  _____________________________________________________________
- How will input be incorporated into the assessment?
  _____________________________________________________________
- How will results be communicated back?
  _____________________________________________________________

Barriers to Engagement:
| Barrier | Mitigation |
<!-- component:table:table-53-stakeholder-engagement-plan -->
|---------|------------|
<!-- component:table:table-53-stakeholder-engagement-plan -->
|         |            |

Engagement Log:
| Date | Stakeholder | Method | Key Input | Action Taken |
<!-- component:table:table-53-stakeholder-engagement-plan -->
|------|-------------|--------|-----------|--------------|
<!-- component:table:table-53-stakeholder-engagement-plan -->
|      |             |        |           |              |
```

---


## PHASE 3: IMPACT ANALYSIS


### Step 6: Identify Potential Impacts


#### 6.1 Impact Categories Framework

Use this comprehensive framework to systematically identify impacts:

```
IMPACT IDENTIFICATION FRAMEWORK

INDIVIDUAL IMPACTS
Effects on specific people

Rights Impacts:
□ Privacy and data protection
□ Freedom of expression
□ Freedom from discrimination
□ Due process and fair treatment
□ Access to services
□ Dignity and autonomy
□ Safety and security
□ Other: _______________________

Economic Impacts:
□ Employment opportunities
□ Credit/lending access
□ Insurance access/pricing
□ Income or earnings
□ Financial losses
□ Economic opportunity
□ Other: _______________________

Physical/Psychological Impacts:
□ Physical safety
□ Physical health
□ Mental health
□ Emotional wellbeing
□ Stress and anxiety
□ Other: _______________________

Social Impacts:
□ Reputation
□ Social relationships
□ Social standing
□ Access to social services
□ Other: _______________________

---

GROUP IMPACTS
Effects on specific communities or demographic groups

□ Discrimination against protected groups
□ Reinforcement of stereotypes
□ Exclusion of communities
□ Disproportionate burden on specific groups
□ Cultural impacts
□ Language/accessibility barriers
□ Other: _______________________

Groups to Analyze:
□ Racial/ethnic groups
□ Gender groups
□ Age groups
□ Disability status
□ Socioeconomic groups
□ Geographic communities
□ Religious groups
□ Other: _______________________

---

SOCIETAL IMPACTS
Effects on society broadly

Democratic Impacts:
□ Electoral processes
□ Political discourse
□ Civic participation
□ Trust in institutions
□ Other: _______________________

Social Cohesion:
□ Social division
□ Misinformation spread
□ Trust between groups
□ Public discourse quality
□ Other: _______________________

Economic System:
□ Labor market effects
□ Market competition
□ Economic inequality
□ Innovation effects
□ Other: _______________________

---

ORGANIZATIONAL IMPACTS
Effects on the deploying organization

□ Reputation risk
□ Legal/regulatory risk
□ Financial risk
□ Operational risk
□ Strategic risk
□ Employee impacts
□ Other: _______________________

---

ENVIRONMENTAL IMPACTS
Effects on the natural environment

□ Energy consumption
□ Carbon emissions
□ Electronic waste
□ Resource consumption
□ Other: _______________________
```


#### 6.2 Impact Identification Techniques

**Technique 1: Scenario Analysis**

```
SCENARIO ANALYSIS

Develop scenarios for how the system might cause harm:

Scenario 1: Normal Operation Gone Wrong
- What could go wrong during typical use?
_____________________________________________________________
_____________________________________________________________

Scenario 2: Edge Cases
- How might the system fail with unusual inputs?
_____________________________________________________________
_____________________________________________________________

Scenario 3: Adversarial Use
- How might bad actors misuse the system?
_____________________________________________________________
_____________________________________________________________

Scenario 4: Scale Effects
- What happens as the system scales?
_____________________________________________________________
_____________________________________________________________

Scenario 5: Context Change
- What if the environment or context changes?
_____________________________________________________________
_____________________________________________________________

Scenario 6: Cumulative Effects
- What if combined with other AI systems?
_____________________________________________________________
_____________________________________________________________
```

**Technique 2: Failure Mode Analysis**

```
FAILURE MODE ANALYSIS

| Failure Mode | Cause | Effect | Detection | Severity |
<!-- component:table:table-62-impact-identification-techniques -->
|--------------|-------|--------|-----------|----------|
| False positive | | | | |
| False negative | | | | |
| Bias in output | | | | |
| Data quality issue | | | | |
| Model drift | | | | |
| Adversarial attack | | | | |
| Privacy breach | | | | |
| System unavailable | | | | |
| Incorrect confidence | | | | |
| Explanation failure | | | | |
```

**Technique 3: Historical Analogy**

```
HISTORICAL ANALOGY ANALYSIS

Similar systems that have caused harm:

| Similar System | Harm Caused | Relevance to Our System |
<!-- component:table:table-62-impact-identification-techniques -->
|----------------|-------------|------------------------|
<!-- component:table:table-62-impact-identification-techniques -->
|                |             |                        |
<!-- component:table:table-62-impact-identification-techniques -->
|                |             |                        |

Lessons Learned:
_____________________________________________________________
_____________________________________________________________

How we're addressing these lessons:
_____________________________________________________________
_____________________________________________________________
```

**Technique 4: Stakeholder Input**

```
STAKEHOLDER INPUT ON IMPACTS

| Stakeholder | Concerns Raised | Impacts Identified |
<!-- component:table:table-62-impact-identification-techniques -->
|-------------|-----------------|-------------------|
<!-- component:table:table-62-impact-identification-techniques -->
|             |                 |                   |
<!-- component:table:table-62-impact-identification-techniques -->
|             |                 |                   |

Community Concerns:
_____________________________________________________________

Expert Concerns:
_____________________________________________________________
```


#### 6.3 Compile Impact Inventory

```
IMPACT INVENTORY

| ID | Impact Description | Category | Affected Parties | Positive/Negative |
<!-- component:table:table-63-compile-impact-inventory -->
|----|-------------------|----------|------------------|-------------------|
| I1 |                   |          |                  |                   |
| I2 |                   |          |                  |                   |
| I3 |                   |          |                  |                   |
| I4 |                   |          |                  |                   |
| I5 |                   |          |                  |                   |
| I6 |                   |          |                  |                   |
| I7 |                   |          |                  |                   |
| I8 |                   |          |                  |                   |
| I9 |                   |          |                  |                   |
| I10|                   |          |                  |                   |

Total Impacts Identified: _______
- Positive: _______
- Negative: _______
- Both/Uncertain: _______
```

---


### Step 7: Assess Impact Significance

<!-- component:list:list-71-assessment-criteria -->

#### 7.1 Assessment Criteria

**For each negative impact, assess:**

```
IMPACT ASSESSMENT CRITERIA

LIKELIHOOD
How likely is this impact to occur?

| Level | Description | Probability |
<!-- component:table:table-71-assessment-criteria -->
|-------|-------------|-------------|
| 5 - Almost Certain | Expected to occur in most circumstances | >90% |
| 4 - Likely | Will probably occur in most circumstances | 60-90% |
| 3 - Possible | Might occur at some time | 30-60% |
| 2 - Unlikely | Could occur but not expected | 10-30% |
| 1 - Rare | May occur only in exceptional circumstances | <10% |

SEVERITY
How severe would the impact be?

| Level | Description | Examples |
<!-- component:table:table-71-assessment-criteria -->
|-------|-------------|----------|
| 5 - Severe | Catastrophic harm, irreversible | Death, serious injury, total financial ruin |
| 4 - Major | Significant harm, difficult to reverse | Job loss, significant financial loss, serious discrimination |
| 3 - Moderate | Notable harm, reversible with effort | Temporary job impact, moderate financial loss, unfair treatment |
| 2 - Minor | Limited harm, easily reversible | Minor inconvenience, small financial impact |
| 1 - Negligible | Minimal harm | Trivial inconvenience |

SCOPE
How many people could be affected?

| Level | Description |
<!-- component:table:table-71-assessment-criteria -->
|-------|-------------|
| 5 - Extensive | Affects millions or entire populations |
| 4 - Large | Affects thousands to hundreds of thousands |
| 3 - Moderate | Affects hundreds to thousands |
| 2 - Limited | Affects tens to hundreds |
| 1 - Minimal | Affects individuals |

REVERSIBILITY
Can the harm be undone?

| Level | Description |
<!-- component:table:table-71-assessment-criteria -->
|-------|-------------|
| 5 - Irreversible | Cannot be undone |
| 4 - Difficult | Can be partially addressed with significant effort |
| 3 - Moderate | Can be addressed with reasonable effort |
| 2 - Easy | Can be quickly addressed |
| 1 - Automatic | Self-correcting or trivial to fix |
```


#### 7.2 Impact Assessment Matrix

```
IMPACT ASSESSMENT MATRIX

| ID | Impact | Likelihood (1-5) | Severity (1-5) | Scope (1-5) | Reversibility (1-5) | Risk Score |
<!-- component:table:table-72-impact-assessment-matrix -->
|----|--------|------------------|----------------|-------------|---------------------|------------|
| I1 |        |                  |                |             |                     |            |
| I2 |        |                  |                |             |                     |            |
| I3 |        |                  |                |             |                     |            |
| I4 |        |                  |                |             |                     |            |
| I5 |        |                  |                |             |                     |            |

Risk Score Calculation:
Risk Score = Likelihood × Severity × (Scope + Reversibility) / 2

Risk Score Interpretation:
| Score Range | Risk Level | Action Required |
<!-- component:table:table-72-impact-assessment-matrix -->
|-------------|------------|-----------------|
| 75-125 | Critical | Stop - Do not proceed without resolution |
| 50-74 | High | Significant mitigation required before proceeding |
| 25-49 | Medium | Mitigation required, may proceed with controls |
| 10-24 | Low | Monitor, minimal mitigation needed |
| 1-9 | Minimal | Accept risk |
```


#### 7.3 Detailed Impact Analysis

**For each High or Critical risk, complete detailed analysis:**

```
DETAILED IMPACT ANALYSIS

Impact ID: _______
Impact Description: _______________________

Affected Persons:
- Who specifically is affected? _______________________
- How many people? _______________________
- Any vulnerable groups? _______________________

Harm Mechanism:
- How does the harm occur? _______________________
- What is the causal chain? _______________________

Evidence:
- What evidence supports this assessment?
  □ Testing results
  □ Historical data
  □ Expert opinion
  □ Stakeholder input
  □ Literature/research
  □ Analogous systems
  Details: _______________________

Uncertainty:
- How confident are we in this assessment? □ High □ Medium □ Low
- What would change our assessment? _______________________

Existing Controls:
- What controls currently exist? _______________________
- How effective are they? _______________________

Dependencies:
- Does this impact depend on other factors? _______________________
- Could it trigger other impacts? _______________________

Rights Impact Assessment:
- Does this impact fundamental rights? □ Yes □ No
- Which rights? _______________________
- Is this impact lawful? □ Yes □ No □ Uncertain
```


#### 7.4 Benefits Assessment

**Don't forget to assess positive impacts:**

```
BENEFITS ASSESSMENT

| ID | Benefit Description | Beneficiaries | Magnitude | Likelihood |
<!-- component:table:table-74-benefits-assessment -->
|----|---------------------|---------------|-----------|------------|
| B1 |                     |               |           |            |
| B2 |                     |               |           |            |
| B3 |                     |               |           |            |

Benefits Distribution:
- Are benefits equitably distributed? □ Yes □ No □ Partially
- Who benefits most? _______________________
- Who benefits least? _______________________
- Are those bearing risks the same as those receiving benefits? 
  □ Yes □ No

Evidence for Benefits:
- What evidence supports claimed benefits? _______________________
- Have benefits been validated? □ Yes □ No
```


#### 7.5 Net Impact Analysis

```
NET IMPACT ANALYSIS

Summary of Impacts:

| Category | Positive Score | Negative Score | Net |
<!-- component:table:table-75-net-impact-analysis -->
|----------|----------------|----------------|-----|
| Individual |              |                |     |
| Group |                   |                |     |
| Societal |                |                |     |
| Organizational |          |                |     |
| Environmental |           |                |     |
| TOTAL |                   |                |     |

Qualitative Assessment:
_____________________________________________________________
_____________________________________________________________

Do benefits justify risks? □ Yes □ No □ Conditional
Conditions: _______________________
```

---


## PHASE 4: MITIGATION AND DECISION


### Step 8: Develop Mitigation Measures


#### 8.1 Mitigation Hierarchy

**Apply mitigations in this order of preference:**

```
MITIGATION HIERARCHY

1. ELIMINATE
   Remove the risk entirely
   - Don't build the feature
   - Use alternative approach
   - Exclude high-risk use cases

2. SUBSTITUTE
   Replace with lower-risk alternative
   - Use different model type
   - Use different data source
   - Change decision process

3. ENGINEER
   Technical controls to reduce risk
   - Bias mitigation techniques
   - Accuracy improvements
   - Security controls
   - Privacy-enhancing technologies

4. ADMINISTRATIVE
   Policies and procedures to manage risk
   - Human oversight
   - Training requirements
   - Usage guidelines
   - Monitoring procedures

5. INFORM
   Transparency to enable informed choices
   - User notifications
   - Explanations provided
   - Opt-out mechanisms
   - Appeal processes
```


#### 8.2 Mitigation Planning

**For each significant impact, develop mitigation:**

```
MITIGATION PLAN

Impact ID: _______
Impact Description: _______________________
Current Risk Level: _______

Mitigation Options Considered:

| Option | Type | Effectiveness | Feasibility | Cost | Chosen? |
<!-- component:table:table-82-mitigation-planning -->
|--------|------|---------------|-------------|------|---------|
|        |      | H/M/L         | H/M/L       |      | Y/N     |
<!-- component:table:table-82-mitigation-planning -->
|        |      |               |             |      |         |
<!-- component:table:table-82-mitigation-planning -->
|        |      |               |             |      |         |

Selected Mitigation:
- Description: _______________________
- Rationale: _______________________
- Implementation requirements: _______________________
- Timeline: _______________________
- Owner: _______________________
- Cost: _______________________

Residual Risk:
- Risk level after mitigation: _______
- Is residual risk acceptable? □ Yes □ No
- Additional measures needed? _______________________
```


#### 8.3 Consolidated Mitigation Plan

```
CONSOLIDATED MITIGATION PLAN

| Impact ID | Mitigation | Type | Owner | Deadline | Status |
<!-- component:table:table-83-consolidated-mitigation-plan -->
|-----------|------------|------|-------|----------|--------|
<!-- component:table:table-83-consolidated-mitigation-plan -->
|           |            |      |       |          |        |
<!-- component:table:table-83-consolidated-mitigation-plan -->
|           |            |      |       |          |        |
<!-- component:table:table-83-consolidated-mitigation-plan -->
|           |            |      |       |          |        |

Pre-Deployment Mitigations (Must Complete):
□ _______________________
□ _______________________
□ _______________________

Ongoing Mitigations (Must Maintain):
□ _______________________
□ _______________________
□ _______________________

Total Mitigation Cost: _______
Timeline to Full Implementation: _______
```


#### 8.4 Residual Risk Summary

```
RESIDUAL RISK SUMMARY

After all mitigations implemented:

| Impact ID | Original Risk | Mitigation | Residual Risk | Acceptable? |
<!-- component:table:table-84-residual-risk-summary -->
|-----------|---------------|------------|---------------|-------------|
<!-- component:table:table-84-residual-risk-summary -->
|           |               |            |               |             |
<!-- component:table:table-84-residual-risk-summary -->
|           |               |            |               |             |

Overall Residual Risk Level: □ Critical □ High □ Medium □ Low □ Minimal

Unmitigated Risks:
| Risk | Reason Not Mitigated | Acceptance Rationale |
<!-- component:table:table-84-residual-risk-summary -->
|------|---------------------|---------------------|
<!-- component:table:table-84-residual-risk-summary -->
|      |                     |                     |

Risk Acceptance Authority:
- Who can accept these residual risks? _______________________
- Has acceptance been obtained? □ Yes □ No □ Pending
```

---


### Step 9: Make Go/No-Go Recommendation


#### 9.1 Decision Framework

```
DECISION FRAMEWORK

Automatic NO-GO Conditions:
□ Prohibited use case under policy or law
□ Critical unmitigated risk to fundamental rights
□ Unacceptable legal/regulatory exposure
□ Critical unresolved stakeholder concerns
□ Insufficient evidence of benefit
□ Other: _______________________

Conditions Met: □ None (may proceed to evaluation) □ Yes (NO-GO)
```


#### 9.2 Recommendation Development

```
RECOMMENDATION

Assessment Summary:
- Total impacts identified: _______
- Critical risks: _______
- High risks: _______
- Key benefits: _______________________

Recommendation: 
□ PROCEED - System may be deployed as designed
□ PROCEED WITH CONDITIONS - System may be deployed if conditions met
□ REDESIGN - Significant changes required before reassessment
□ DO NOT PROCEED - Risks outweigh benefits, system should not be deployed

Rationale:
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________

Conditions for Proceeding (if applicable):
| Condition | Owner | Deadline | Verification |
<!-- component:table:table-92-recommendation-development -->
|-----------|-------|----------|--------------|
<!-- component:table:table-92-recommendation-development -->
|           |       |          |              |
<!-- component:table:table-92-recommendation-development -->
|           |       |          |              |

Required Approvals:
| Approver | Role | Date | Signature |
<!-- component:table:table-92-recommendation-development -->
|----------|------|------|-----------|
<!-- component:table:table-92-recommendation-development -->
|          |      |      |           |
<!-- component:table:table-92-recommendation-development -->
|          |      |      |           |
```


#### 9.3 Alternative Recommendations

```
ALTERNATIVE APPROACHES

If recommendation is not to proceed as designed:

Alternative 1:
- Description: _______________________
- Impact on risks: _______________________
- Impact on benefits: _______________________
- Feasibility: _______________________

Alternative 2:
- Description: _______________________
- Impact on risks: _______________________
- Impact on benefits: _______________________
- Feasibility: _______________________

Recommended Path Forward:
_____________________________________________________________
```

---


## PHASE 5: DOCUMENTATION AND MONITORING


### Step 10: Document and Establish Monitoring


#### 10.1 Final Documentation

```
AIA DOCUMENTATION CHECKLIST

Core Document:
□ Executive summary
□ Scope and methodology
□ System description
□ Stakeholder analysis
□ Impact identification
□ Impact assessment
□ Mitigation plan
□ Recommendation
□ Approval signatures

Supporting Documentation:
□ Stakeholder engagement records
□ Technical analysis details
□ Testing results referenced
□ Expert opinions obtained
□ Research/literature reviewed
□ Meeting notes

Document Control:
- Document ID: _______________________
- Version: _______________________
- Classification: _______________________
- Author: _______________________
- Reviewer: _______________________
- Approver: _______________________
- Approval Date: _______________________
- Next Review Date: _______________________

Storage:
- Location: _______________________
- Access permissions: _______________________
- Retention period: _______________________
```


#### 10.2 Monitoring Plan

```
MONITORING PLAN

Ongoing Monitoring Requirements:

| Metric/Indicator | Target | Frequency | Owner | Action if Breached |
<!-- component:table:table-102-monitoring-plan -->
|------------------|--------|-----------|-------|-------------------|
<!-- component:table:table-102-monitoring-plan -->
|                  |        |           |       |                   |
<!-- component:table:table-102-monitoring-plan -->
|                  |        |           |       |                   |
<!-- component:table:table-102-monitoring-plan -->
|                  |        |           |       |                   |

Impact-Specific Monitoring:
| Impact ID | Monitoring Approach | Threshold | Response |
<!-- component:table:table-102-monitoring-plan -->
|-----------|--------------------|-----------| ---------|
<!-- component:table:table-102-monitoring-plan -->
|           |                    |           |          |
<!-- component:table:table-102-monitoring-plan -->
|           |                    |           |          |

Reassessment Triggers:
□ Significant system changes
□ Context or regulatory changes
□ Monitoring threshold breaches
□ Incident occurrence
□ Stakeholder concerns raised
□ Annual review due
□ Other: _______________________

Review Schedule:
| Review Type | Frequency | Next Due | Owner |
<!-- component:table:table-102-monitoring-plan -->
|-------------|-----------|----------|-------|
| Monitoring review | Monthly |        |       |
| Limited reassessment | Quarterly |   |       |
| Full reassessment | Annual |         |       |
```


#### 10.3 Communication Plan

```
COMMUNICATION PLAN

Internal Communications:
| Audience | Information | Timing | Channel |
<!-- component:table:table-103-communication-plan -->
|----------|-------------|--------|---------|
| Executive leadership | Summary and recommendation | Immediate | Briefing |
| AI Governance Committee | Full assessment | Per schedule | Meeting |
| System team | Mitigation requirements | Immediate | Meeting |
| Affected departments | Impact on operations | Pre-deployment | Email |

External Communications (if applicable):
| Audience | Information | Timing | Channel |
<!-- component:table:table-103-communication-plan -->
|----------|-------------|--------|---------|
| Regulators | As required | Per requirement | Formal submission |
| Affected persons | Transparency notice | Pre-deployment | Website/notice |
| Public | Summary disclosure | Post-deployment | Publication |

Stakeholder Feedback:
- How will stakeholders be informed of assessment outcomes?
  _____________________________________________________________
- How will ongoing feedback be collected?
  _____________________________________________________________
```


#### 10.4 Lessons Learned

```
LESSONS LEARNED

Process Improvements:
- What worked well in this assessment?
  _____________________________________________________________
- What could be improved?
  _____________________________________________________________
- Recommendations for future assessments:
  _____________________________________________________________

Knowledge Captured:
- Key insights about this type of AI system:
  _____________________________________________________________
- Reusable templates or approaches:
  _____________________________________________________________

Share With:
□ AI Governance Committee
□ Other assessment teams
□ Organizational knowledge base
□ Other: _______________________
```

---

<!-- component:template:template-templates-and-tools -->

## Templates and Tools

<!-- component:template:template-template-1-aia-executive-summary -->

### Template 1: AIA Executive Summary

```
AI IMPACT ASSESSMENT
EXECUTIVE SUMMARY

System: _______________________
Assessment Date: _______________________
Assessment Lead: _______________________

SYSTEM OVERVIEW
[2-3 sentences describing the system and its purpose]

KEY FINDINGS
| Finding | Risk Level |
<!-- component:table:table-template-1-aia-executive-summary -->
|---------|------------|
<!-- component:table:table-template-1-aia-executive-summary -->
|         |            |
<!-- component:table:table-template-1-aia-executive-summary -->
|         |            |

RECOMMENDATION
□ PROCEED  □ PROCEED WITH CONDITIONS  □ REDESIGN  □ DO NOT PROCEED

KEY CONDITIONS (if applicable)
1. _______________________
2. _______________________
3. _______________________

RESIDUAL RISKS ACCEPTED
| Risk | Accepted By | Date |
<!-- component:table:table-template-1-aia-executive-summary -->
|------|-------------|------|
<!-- component:table:table-template-1-aia-executive-summary -->
|      |             |      |

APPROVALS
| Name | Role | Signature | Date |
<!-- component:table:table-template-1-aia-executive-summary -->
|------|------|-----------|------|
<!-- component:table:table-template-1-aia-executive-summary -->
|      |      |           |      |
```

<!-- component:template:template-template-2-quick-risk-assessment-checklist -->

### Template 2: Quick Risk Assessment Checklist

For low-risk systems, this abbreviated checklist may suffice:

```
QUICK AI RISK ASSESSMENT

System: _______________________
Owner: _______________________
Date: _______________________

SCREENING QUESTIONS (Check all that apply)

□ Makes decisions about individuals' access to services
□ Affects employment decisions
□ Affects financial decisions (credit, insurance, pricing)
□ Processes sensitive personal data
□ Affects vulnerable populations
□ Has significant legal effects
□ Could cause physical harm
□ Uses biometric identification
□ Could enable discrimination
□ Operates without human oversight

If ANY boxes checked → Full AIA required
If NO boxes checked → May proceed with documentation

BASIC IMPACT REVIEW
Primary benefits: _______________________
Primary risks: _______________________
Mitigations in place: _______________________

APPROVAL
□ Approved for deployment
Approved by: _______________________ Date: _______
```

<!-- component:template:template-template-3-stakeholder-interview-guide -->

### Template 3: Stakeholder Interview Guide

```
STAKEHOLDER INTERVIEW GUIDE

Interviewee: _______________________
Role: _______________________
Date: _______________________
Interviewer: _______________________

INTRODUCTION
- Explain purpose of AIA
- Explain confidentiality
- Ask permission to take notes

QUESTIONS

Understanding the System:
1. How do you interact with or how are you affected by this system?
2. What benefits do you see from this system?
3. What concerns do you have about this system?

Impacts:
4. What could go wrong with this system?
5. Who might be harmed and how?
6. Are there groups who might be disproportionately affected?

Safeguards:
7. What safeguards would make you more comfortable?
8. What information would you want to know about how the system works?
9. What recourse should people have if something goes wrong?

Other:
10. Is there anything else we should consider?
11. Who else should we talk to?

NOTES
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________

KEY POINTS
_____________________________________________________________
_____________________________________________________________

FOLLOW-UP NEEDED
_____________________________________________________________
```

---


## Common Challenges and Solutions

| Challenge | Solution |
<!-- component:table:table-common-challenges-and-solutions -->
|-----------|----------|
| **"We don't have time for this"** | Use streamlined assessment for low-risk; emphasize that catching issues early saves time later |
| **"We don't have the expertise"** | Build capability incrementally; use external experts for high-risk; create templates |
| **"The technical team won't engage"** | Frame as helping them avoid problems; make their input essential; keep meetings focused |
| **"Stakeholders won't participate"** | Make participation easy; explain benefits; start with those most motivated |
| **"We can't predict all impacts"** | Document uncertainty; plan monitoring; commit to reassessment |
| **"Mitigations are too expensive"** | Compare to cost of incidents; prioritize highest risks; consider alternatives |
| **"Leadership won't approve delays"** | Present risks clearly; show regulatory exposure; recommend conditions not just delays |
| **"The system is already deployed"** | Conduct retrospective AIA; implement mitigations; plan for next version |

---


## Regulatory Alignment

<!-- component:list:list-eu-ai-act-requirements -->

### EU AI Act Requirements

For high-risk AI systems under EU AI Act, your AIA should address:

```
EU AI ACT ALIGNMENT CHECKLIST

Article 9 - Risk Management:
□ Identified and analyzed known and foreseeable risks
□ Estimated and evaluated risks from intended use and foreseeable misuse
□ Evaluated risks from analysis of data gathered from post-market monitoring
□ Adopted appropriate risk management measures

Article 10 - Data Governance:
□ Assessed training data quality and relevance
□ Examined training data for possible biases
□ Identified appropriate data governance measures

Article 13 - Transparency:
□ Designed to enable users to interpret outputs
□ Appropriate human oversight measures identified

Conformity Assessment:
□ AIA supports technical documentation requirements
□ AIA supports conformity assessment process
```

<!-- component:list:list-canada-aida-requirements -->

### Canada AIDA Requirements

```
CANADA AIDA ALIGNMENT CHECKLIST

High-Impact AI Assessment Requirements:
□ Description of how system was assessed for bias
□ Mitigation measures for biased output
□ Monitoring plan for biased output
□ Recourse process for individuals affected
□ Description of training data and quality
□ Intended use and limitations
```

---


## Time Estimates

| Assessment Depth | Preparation | Analysis | Documentation | Total |
<!-- component:table:table-time-estimates -->
|-----------------|-------------|----------|---------------|-------|
| Streamlined | 2-4 hours | 4-8 hours | 2-4 hours | 1-2 days |
| Standard | 1-2 days | 3-5 days | 1-2 days | 1-2 weeks |
| Comprehensive | 2-3 days | 5-10 days | 2-3 days | 2-4 weeks |
| Extensive | 3-5 days | 10-20 days | 3-5 days | 4-8 weeks |

---


## Summary

A complete AI Impact Assessment involves:

<!-- component:flowchart:flowchart-summary -->
1. **Define scope** — Be clear about what you're assessing and why
2. **Assemble team** — Get the right expertise involved
3. **Gather information** — Understand the system thoroughly
4. **Describe the system** — Document how it works
5. **Map stakeholders** — Identify who is affected
6. **Identify impacts** — Use structured approaches to find potential harms
7. **Assess significance** — Evaluate likelihood and severity
8. **Develop mitigations** — Plan how to reduce risks
9. **Make recommendation** — Provide clear guidance on whether to proceed
10. **Document and monitor** — Create record and plan for ongoing oversight

The goal is not to prevent AI deployment, but to ensure AI is deployed responsibly with full awareness of its impacts and appropriate safeguards in place.

---

**Word Count:** Approximately 6,200 words
**Estimated Reading Time:** 30-35 minutes
**Templates Included:** 15+

---

*End of Guide*
