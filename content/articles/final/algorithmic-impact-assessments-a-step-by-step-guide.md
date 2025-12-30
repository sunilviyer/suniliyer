---
title: "Algorithmic Impact Assessments: A Step-by-Step Guide"
slug: algorithmic-impact-assessments-a-step-by-step-guide
path: responsibility
publishDate: 2025-10-24
tldr: Algorithmic Impact Assessments (AIAs) are systematic evaluations of algorithmic systems' potential impacts on individuals, groups, and society, conducted before and during deployment to transform vague commitments to responsible AI into concrete documented analysis and action. AIAs are prospective (conducted before deployment with ongoing assessment), systematic (following structured methodology not ad-hoc review), documented (creating record of assessment and decisions), actionable (leading to design, deployment, or monitoring changes), and stakeholder-informed (incorporating affected parties' perspectives). Comprehensive AIAs assess fairness and bias (discrimination risks), privacy (data protection concerns), safety (physical or psychological harm), transparency (decision explainability), accountability (responsibility for outcomes), autonomy (respect for human agency), and access (inequality creation or exacerbation). Legal requirements exist in Canada (proposed AIDA requiring AIAs for high-impact systems), New York City (Local Law 144 requiring bias audits for employment AI), and EU (AI Act requiring risk assessment for high-risk AI). Best practice triggers include significant decisions about people, difficult-to-reverse decisions, vulnerable populations, scale operations, discrimination potential, and human judgment replacement. Risk-based approach matches assessment depth to risk level—high risk (hiring, credit, healthcare) requires full AIA with external review, medium risk (customer service routing, recommendations) requires standard AIA with internal review, low risk (spam filtering, autocomplete) requires abbreviated assessment, minimal risk (internal analytics) requires brief documentation. The eight-step process includes: (1) Define Scope (identify system, decisions, deployment context, users, affected parties, data inputs, outputs), (2) Stakeholder Identification (direct users, decision subjects, affected third parties, operators, developers, regulators, advocates), (3) Impact Identification (individual impacts on economic, physical, psychological, privacy, access; group impacts on discrimination, differential treatment, inequality amplification; societal impacts on democratic participation, institutions, environment, markets), (4) Impact Analysis (assessing likelihood, severity, scope, vulnerability to determine combined risk rating), (5) Fairness Deep Dive (training data representativeness, feature proxies, outcome disparities, error rates using metrics like demographic parity, equal opportunity, predictive parity), (6) Mitigation Planning (avoid, replace, modify, control, or accept using strategies for bias, privacy, transparency, accountability), (7) Documentation and Approval (structured report with executive summary, system description, impact assessment, mitigation plan, recommendations, approval record), and (8) Ongoing Monitoring (performance tracking, fairness monitoring, incident tracking, periodic reassessment triggers). Common pitfalls include treating AIAs as checkbox exercises (solution: require substantive findings and specific mitigations), conducting AIAs too late (solution: begin during design phase), ignoring stakeholder perspectives (solution: actively engage affected groups), inadequate fairness testing (solution: require quantitative testing with methodology and thresholds), and no ongoing monitoring (solution: build monitoring into deployment requirements with periodic reassessment). AIAs surface problems before they become incidents, create defensible records of responsible practice, and are increasingly required by law—ensuring organizations have thought carefully about algorithmic impacts on people.
relatedConcepts:
  - algorithmic-impact-assessment
  - aia-process
  - impact-evaluation
  - systematic-assessment
  - prospective-assessment
  - documented-assessment
  - actionable-assessment
  - stakeholder-informed-assessment
  - fairness-and-bias-assessment
  - privacy-impact
  - safety-assessment
  - transparency-assessment
  - accountability-assessment
  - autonomy-assessment
  - access-inequality
  - canada-aida
  - nyc-local-law-144
  - eu-ai-act-risk-assessment
  - high-impact-ai-systems
  - bias-audits
  - conformity-assessment
  - risk-based-assessment-approach
  - assessment-depth
  - high-risk-aia
  - medium-risk-aia
  - low-risk-aia
  - minimal-risk-aia
  - scope-definition
  - system-identification
  - decision-type
  - deployment-context
  - affected-parties
  - data-inputs-outputs
  - stakeholder-identification
  - direct-users
  - decision-subjects
  - affected-third-parties
  - operators
  - developers
  - regulators
  - advocates
  - stakeholder-engagement
  - impact-identification
  - individual-impacts
  - economic-impacts
  - physical-impacts
  - psychological-impacts
  - privacy-impacts
  - access-impacts
  - group-impacts
  - discrimination-impacts
  - differential-treatment
  - inequality-amplification
  - societal-impacts
  - democratic-participation
  - social-institutions
  - environmental-impacts
  - market-effects
  - impact-analysis
  - likelihood-assessment
  - severity-assessment
  - scope-assessment
  - vulnerability-assessment
  - combined-risk-rating
  - critical-risk
  - high-risk
  - medium-risk
  - low-risk
  - fairness-deep-dive
  - training-data-representativeness
  - historical-bias
  - data-gaps
  - protected-characteristics
  - proxy-variables
  - feature-validation
  - outcome-disparities
  - error-rate-disparities
  - false-negative-rates
  - false-positive-rates
  - demographic-parity
  - equal-opportunity
  - predictive-parity
  - individual-fairness
  - four-fifths-rule
  - disparate-impact-testing
  - mitigation-planning
  - mitigation-hierarchy
  - avoid-risk
  - replace-alternative
  - modify-algorithm
  - control-safeguards
  - accept-residual-risk
  - bias-mitigation
  - privacy-mitigation
  - transparency-mitigation
  - accountability-mitigation
  - fairness-constraints
  - data-minimization
  - differential-privacy
  - explanation-capabilities
  - audit-trails
  - appeal-processes
  - documentation-approval
  - aia-report-structure
  - executive-summary
  - system-description
  - impact-assessment-findings
  - residual-risks
  - recommendations
  - approval-record
  - approval-levels
  - ongoing-monitoring
  - performance-monitoring
  - fairness-monitoring
  - incident-tracking
  - review-triggers
  - periodic-reassessment
  - abbreviated-aia-template
  - standard-aia-template
  - comprehensive-aia-template
  - aia-pitfalls
  - checkbox-exercise
  - late-assessment
  - stakeholder-exclusion
  - superficial-fairness-testing
  - one-time-assessment
  - substantive-findings
  - early-design-phase-assessment
  - quantitative-fairness-testing
  - continuous-monitoring
  - data-protection-impact-assessment
  - dpia
  - model-risk-assessment
  - resume-screening-ai-example
  - bias-audit-requirements
examples:
  - Resume screening AI assessing 5,000 annual applicants with scope definition including fit scoring, ranking, interview advancement recommendations
  - Stakeholder engagement for hiring AI including recruiter interviews, applicant surveys, HR leadership briefing, legal compliance review, diversity team input
  - Impact identification for resume AI revealing employment discrimination risk, privacy concerns, reduced human judgment, efficiency gains, consistency, explanation challenges
  - Fairness analysis showing age discrimination (22% vs 38% selection rate, 58% of baseline failing four-fifths rule) and racial bias (26% vs 34% selection rate, 76% of baseline)
  - Mitigation plan removing graduation year, auditing training data, adding fairness constraints, developing SHAP explanations, requiring human review for rejections
  - Ongoing monitoring with monthly demographic parity checks triggering immediate review if <80% ratio detected
  - Critical risk requiring executive/board approval for high-impact algorithmic systems
templates:
  - AIA Scope Definition Template (system name, description, decision type, deployment context, users, affected parties, data inputs, outputs)
  - Stakeholder Analysis Template (categories, engagement approach, input methods)
  - Impact Identification Checklist (individual, group, societal impact categories)
  - Impact Analysis Matrix (likelihood, severity, scope, vulnerability, risk rating)
  - Fairness Assessment Template (training data analysis, feature proxy testing, outcome disparity testing, error rate analysis)
  - Mitigation Plan Template (risk, mitigation strategy, priority, owner, timeline)
  - AIA Report Template (executive summary, system description, impact assessment, mitigation plan, recommendations, approvals)
  - Monitoring Plan Template (metrics, frequency, thresholds, escalation actions)
  - Abbreviated AIA Template for Low-Risk Systems
  - Standard AIA Template for Medium-Risk Systems
crossPathRefs:
  - slug: eu-ai-act-the-complete-compliance-guide
    path: responsibility
    relevance: EU AI Act Article 9 requires risk assessment for high-risk AI systems as part of conformity assessment; AIAs provide systematic methodology for conducting required assessments
  - slug: algorithmic-bias-detection-and-mitigation
    path: responsibility
    relevance: AIA Step 5 Fairness Deep Dive requires quantitative bias detection using demographic parity, equal opportunity, and predictive parity metrics with documented mitigation strategies
  - slug: nist-ai-rmf-core-functions-govern-map-measure-manage
    path: risk
    relevance: AIAs implement NIST AI RMF MAP function (understanding AI context and impacts) and MEASURE function (assessing AI risks and impacts) with systematic methodology
  - slug: the-singapore-model-ai-governance-framework-practical-implementation
    path: responsibility
    relevance: Singapore framework Operations Management area requires impact assessment and monitoring; AIAs provide detailed process for conducting assessments systematically
  - slug: ai-ethics-principles-and-frameworks
    path: responsibility
    relevance: AIAs translate abstract ethics principles (fairness, transparency, accountability, autonomy) into concrete impact evaluation and mitigation planning
tags:
  - article
  - algorithmic-impact-assessment
  - aia
  - impact-evaluation
  - risk-assessment
  - fairness-testing
  - bias-audits
  - stakeholder-engagement
  - ai-auditing
  - accountability
  - documentation
  - mitigation-planning
  - ongoing-monitoring
  - compliance
  - responsible-ai
category: AI Auditing & Accountability
image: article-74-algorithmic-impact-assessments-a-step-by-step-guide.jpg
imageAlt: Algorithmic Impact Assessments - A Step-by-Step Guide
author: Sunil Iyer
readingTime: 18
seoTitle: Algorithmic Impact Assessments - A Step-by-Step Guide
seoDescription: Comprehensive guide to conducting Algorithmic Impact Assessments (AIAs) with 8-step process, fairness testing, mitigation planning, templates, and real examples. Transform responsible AI commitments into concrete action.
---



## Summary

Algorithmic Impact Assessments (AIAs) are systematic evaluations of algorithmic systems' potential impacts on individuals, groups, and society, conducted before and during deployment. Unlike ad-hoc reviews or vague commitments to responsible AI, AIAs provide structured methodology transforming ethical intentions into concrete, documented analysis and action.

AIAs possess five key characteristics: prospective (conducted before deployment though ongoing assessment continues afterward), systematic (following structured methodology with consistent process), documented (creating permanent record of assessment and decisions for accountability and defensibility), actionable (leading to tangible changes in system design, deployment decisions, or monitoring requirements rather than just identifying issues), and stakeholder-informed (incorporating perspectives of affected parties beyond internal technical teams).

Comprehensive AIAs assess seven core dimensions: fairness and bias (could system discriminate against certain groups through training data bias, feature proxies, or outcome disparities), privacy (data protection concerns including collection, retention, access, and sharing), safety (potential physical harm in autonomous systems or psychological harm from dehumanizing interactions), transparency (can system decisions be explained to affected parties in meaningful ways), accountability (who is responsible for system outcomes and how can affected parties seek redress), autonomy (does system respect human agency and choice or coerce/manipulate), and access (does system create or exacerbate inequalities in service access or opportunities).

AIAs differ from other assessments in scope and purpose: bias audits focus specifically on fairness and discrimination at specific points in time, Data Protection Impact Assessments (DPIAs) focus on privacy and data protection before processing begins, model risk assessments focus on model accuracy and reliability during development and deployment, while AIAs comprehensively cover all algorithmic impacts throughout lifecycle.

Legal requirements are emerging globally: Canada's proposed Artificial Intelligence and Data Act (AIDA) requires AIAs for high-impact AI systems with risk assessment, mitigation measures, and record-keeping; New York City's Local Law 144 requires annual bias audits by independent auditors for automated employment decision tools with public disclosure; EU AI Act requires risk assessment as part of conformity assessment process for high-risk AI with ongoing monitoring. Beyond legal requirements, best practices trigger AIAs when algorithms affect significant decisions about people (employment, credit, healthcare, education), decisions are difficult to reverse (permanent records, life-changing outcomes), vulnerable populations are affected (children, elderly, disabled, marginalized groups), algorithms operate at scale (affecting thousands or millions), there's potential for discrimination (protected characteristics involved), or algorithms replace human judgment entirely (full automation of consequential decisions).

Risk-based approach matches assessment depth to risk level, avoiding one-size-fits-all burden: high risk (hiring, credit, healthcare decisions) requires full comprehensive AIA with external review, stakeholder engagement, quantitative fairness testing, executive approval; medium risk (customer service routing, content recommendations) requires standard internal AIA with documented impacts, basic fairness testing, department-level approval; low risk (spam filtering, autocomplete suggestions) requires abbreviated assessment documenting basic considerations with team-level approval; minimal risk (internal analytics, A/B testing) requires brief documentation of purpose and data with self-certification.

The eight-step AIA process provides systematic methodology: Step 1 Define Scope clearly identifies what you're assessing (system name, function, decision type, deployment context, users, affected parties, data inputs, outputs), Step 2 Stakeholder Identification maps everyone with stake (direct users operating system, decision subjects affected by decisions, affected third parties impacted indirectly, operators deploying system, developers building system, regulators with oversight, advocates representing affected groups) with appropriate engagement approach, Step 3 Impact Identification systematically identifies potential positive and negative impacts across individual (economic, physical, psychological, privacy, access), group (discrimination, differential treatment, inequality amplification), and societal (democratic participation, social institutions, environmental, market effects) categories using brainstorming, checklists, scenario analysis, historical analysis, and stakeholder input, Step 4 Impact Analysis assesses identified impacts across likelihood (high/medium/low probability), severity (high/medium/low harm), scope (wide/moderate/limited people affected), and vulnerability (effects on vulnerable populations) to determine combined risk rating (critical, high, medium, low), Step 5 Fairness Deep Dive specifically examines bias and discrimination through training data analysis (representativeness, historical bias, gaps), feature and proxy analysis (protected characteristics, correlated variables, job-relevance validation), and outcome analysis (selection rates, error rates, false positive/negative disparities across groups) using fairness metrics (demographic parity with four-fifths rule, equal opportunity, predictive parity, individual fairness), Step 6 Mitigation Planning develops strategies following hierarchy (avoid deployment, replace with alternative, modify algorithm, add control safeguards, accept documented residual risk) with specific approaches for bias (audit training data, remove proxies, apply fairness constraints, add human review), privacy (data minimization, anonymization, differential privacy, retention limits), transparency (develop explanations, create disclosures, provide decision factors), and accountability (define responsibility, create audit trails, establish appeals), Step 7 Documentation and Approval creates structured report (executive summary with key findings and recommendations, detailed system description, impact assessment findings, mitigation plan with residual risks, recommendations with conditions, approval record) with appropriate approval level (critical/high risks to executive/board, medium to senior management, low to department head), and Step 8 Ongoing Monitoring continues assessment after deployment through performance monitoring (accuracy, effectiveness, drift detection), fairness monitoring (ongoing disparate impact analysis, bias audits, trend analysis), incident tracking (complaints, errors, remediation), and periodic reassessment triggered by significant changes, context changes, incidents, regulatory changes, or scheduled review.

Two AIA templates support different risk levels: Abbreviated AIA Template for low-risk systems covers system overview, risk classification, key risks with mitigations, fairness consideration, and recommendation in concise format suitable for routine systems; Standard AIA Template for medium/high-risk systems provides comprehensive structure across 10 parts (system identification, system description, stakeholder analysis, impact identification, impact analysis, fairness assessment, mitigation plan, residual risk, monitoring plan, recommendations and approval) ensuring thorough documentation.

Common pitfalls undermine AIA effectiveness: Pitfall 1—treating AIAs as checkbox exercises without genuine analysis (solution: require substantive findings with specific measurable mitigations, be skeptical if assessment finds nothing); Pitfall 2—conducting AIAs too late after system is built when changes are costly (solution: begin AIA during design phase, update as development proceeds, integrate into development lifecycle); Pitfall 3—ignoring stakeholder perspectives with only technical team assessment (solution: actively engage representatives of affected groups especially for high-risk systems through interviews, consultations, public input); Pitfall 4—inadequate fairness testing without quantitative analysis or only superficial review (solution: require quantitative fairness testing with documented methodology, specific metrics, clear thresholds, demographic-disaggregated results); Pitfall 5—no ongoing monitoring with one-time assessment mentality (solution: build ongoing monitoring into deployment requirements with defined metrics, automated tracking, periodic reassessment schedule, clear review triggers).

The value proposition is clear: AIAs surface problems before they become public incidents (catching discrimination in development rather than after lawsuit), create defensible records of responsible practice (demonstrating due diligence to regulators, stakeholders, courts), and are increasingly required by law (mandatory in growing number of jurisdictions for high-risk applications). Whether legally required or not, the underlying question remains: Have you thought carefully about how your algorithm might affect people? An AIA ensures the answer is yes, with documentation proving it.



## Key Learning Objectives

1. Understand AIAs as systematic, prospective, documented, actionable, stakeholder-informed evaluations of algorithmic impacts
2. Distinguish AIAs from related assessments (bias audits, DPIAs, model risk assessments) in scope and timing
3. Identify when AIAs are legally required (Canada AIDA, NYC Local Law 144, EU AI Act) and best practice triggers
4. Apply risk-based approach matching assessment depth (full/standard/abbreviated/minimal) to risk level
5. Execute 8-step AIA process from scope definition through ongoing monitoring with systematic methodology
6. Conduct fairness deep dive using demographic parity, equal opportunity, predictive parity, and individual fairness metrics
7. Develop mitigation plans following hierarchy (avoid, replace, modify, control, accept) with specific strategies
8. Create comprehensive AIA documentation meeting appropriate approval levels with structured report format
9. Implement ongoing monitoring with performance, fairness, and incident tracking plus periodic reassessment triggers
10. Avoid common pitfalls (checkbox mentality, late timing, stakeholder exclusion, superficial testing, one-time assessment)



## What Is an Algorithmic Impact Assessment?


### Definition

An Algorithmic Impact Assessment is a systematic evaluation of an algorithmic system's potential impacts on individuals, groups, and society, conducted before and during the system's deployment.


### Key Characteristics

**Prospective:** Conducted before deployment (though ongoing assessment continues after)

*Example:* Resume screening AI undergoes AIA during design and development phases (identifying potential age discrimination from graduation year feature), leading to design changes before deployment rather than discovering issue after thousands of applicants affected.

**Systematic:** Follows a structured methodology, not ad-hoc review

*Example:* Using standardized 8-step AIA process with documented templates, checklists, and approval requirements rather than informal team discussion concluding "seems fine."

**Documented:** Creates a record of assessment and decisions

*Example:* 45-page AIA report for credit decisioning AI documenting stakeholder consultation, quantitative fairness testing results showing 78% demographic parity for age groups (failing four-fifths rule), mitigation plan adding age-blind features, executive approval with conditions for quarterly monitoring, providing defensible record if discrimination claims arise.

**Actionable:** Leads to changes in design, deployment, or monitoring

*Example:* Healthcare diagnostic AI assessment identifying 15% accuracy difference across skin tones leading to concrete actions: retraining model with balanced dermato logical dataset, implementing skin tone normalization preprocessing, requiring dermatologist review for all predictions, establishing monthly accuracy monitoring by skin tone.

**Stakeholder-informed:** Incorporates perspectives of affected parties

*Example:* Hiring AI assessment including not just technical team but interviews with 20 job seekers, consultation with disability rights advocates, input from diversity and inclusion office, revealing concerns technical team hadn't considered (screen reader compatibility, implicit bias in "culture fit" features).


### What AIAs Cover

A comprehensive AIA typically assesses:

- **Fairness and bias:** Could the system discriminate against certain groups?
- **Privacy:** Does the system raise privacy or data protection concerns?
- **Safety:** Could the system cause physical or psychological harm?
- **Transparency:** Can the system's decisions be explained?
- **Accountability:** Who is responsible for system outcomes?
- **Autonomy:** Does the system respect human agency and choice?
- **Access:** Does the system create or exacerbate inequalities?


### AIAs vs. Other Assessments

| Assessment Type | Focus | Timing |
|----------------|-------|--------|
| Algorithmic Impact Assessment | All algorithmic impacts (comprehensive) | Pre-deployment + ongoing |
| Bias Audit | Fairness and discrimination only | Pre-deployment + periodic |
| Data Protection Impact Assessment (DPIA) | Privacy and data protection only | Before processing begins |
| Model Risk Assessment | Model accuracy and reliability | Development + deployment |

AIAs often incorporate elements of these other assessments into a comprehensive evaluation.

*Example:* Credit scoring AI undergoes comprehensive AIA incorporating: fairness testing (bias audit component) showing demographic parity across race/gender, privacy assessment (DPIA component) evaluating data minimization and retention, and accuracy validation (model risk component) confirming 82% precision, creating single integrated assessment rather than separate disconnected reviews.

---


## When to Conduct an AIA


### Legal Requirements

Some jurisdictions now require AIAs or similar assessments:

**Canada (Proposed AIDA):**
- Required for "high-impact" AI systems (those making predictions/decisions/recommendations affecting health, safety, rights, interests, economic interests)
- Must assess risks to individuals and mitigation measures
- Record-keeping requirements for accountability
- Penalties for non-compliance up to 5% of global revenue

**New York City (Local Law 144):**
- Required bias audits for automated employment decision tools (AEDTs)
- Annual audit by independent auditor (not internal team)
- Public disclosure of results (selection rates by race, ethnicity, gender)
- Penalties $500-$1,500 per violation per day

**EU AI Act:**
- Risk assessment required for high-risk AI systems (employment, credit, law enforcement, critical infrastructure, education, etc.)
- Part of conformity assessment process for market access
- Ongoing monitoring requirements throughout lifecycle
- Penalties up to €35 million or 7% of global revenue

*Example:* Company selling AI hiring tool to NYC employers must conduct annual independent bias audit showing selection rates by demographic groups and publish results publicly per Local Law 144, while same tool sold to EU customers must undergo comprehensive risk assessment per EU AI Act Article 9 including identification of known/foreseeable risks, risk estimation/evaluation, mitigation measures, testing procedures, and human oversight mechanisms—requiring two different but overlapping compliance processes.


### Best Practice Triggers

Even without legal requirements, conduct AIAs when:

- The algorithm affects significant decisions about people (employment, credit, healthcare, education, benefits, legal status)
- Decisions are difficult to reverse (permanent records, blacklisting, life-changing outcomes)
- Vulnerable populations are affected (children, elderly, disabled, marginalized communities, low-income individuals)
- The algorithm operates at scale (affecting thousands or millions of people)
- There's potential for discrimination (involves protected characteristics or proxy features)
- The algorithm replaces human judgment (full automation without human oversight)

*Example:* Internal analytics tool predicting employee flight risk for talent retention doesn't legally require AIA, but best practices suggest assessment because: affects significant decisions (retention bonuses, career development investments), impacts vulnerable populations (employees), operates at scale (10,000 employees), has discrimination potential (age, family status proxies in tenure/life stage features), and informs decisions previously made by managers with human judgment—triggering voluntary AIA revealing age bias (older employees flagged higher flight risk due to retirement proximity) leading to age-blind feature engineering.

### The Risk-Based Approach

Not every algorithm needs the same level of assessment. Match assessment depth to risk level:

| Risk Level | Examples | Assessment Depth |
|------------|----------|------------------|
| High | Hiring, credit, healthcare diagnosis, criminal sentencing | Full AIA with external review, stakeholder engagement, quantitative fairness testing, executive approval |
| Medium | Customer service routing, content recommendations, pricing | Standard AIA, internal review, documented fairness consideration, department approval |
| Low | Spam filtering, autocomplete, search ranking | Abbreviated assessment, basic documentation, team approval |
| Minimal | Internal analytics, A/B testing, operational optimization | Brief documentation, self-certification |

*Example:* Company with 50 AI systems implements tiered approach: 3 high-risk systems (credit decisioning, fraud detection, hiring) undergo full 8-step AIA with external fairness auditor, 12 medium-risk systems (customer service routing, recommendation engines, dynamic pricing) complete standard internal AIA, 25 low-risk systems (spam filters, autocomplete, internal search) use abbreviated 2-page assessment template, 10 minimal-risk systems (website analytics, internal reporting dashboards) have brief purpose statement and data inventory—allocating assessment resources proportionate to risk rather than uniform burden across all systems.

---


## The AIA Process: Step by Step


### Step 1: Define the Scope

**Objective:** Clearly identify what you're assessing.

**Key Questions:**
- What is the algorithmic system?
- What decisions does it make or inform?
- Where is it deployed?
- Who uses it?
- Who is affected by it?

**Documentation:**

```
System Name: [Name]
System Description: [What it does in plain language]
Decision Type: [What decisions it makes/informs]
Deployment Context: [Where and how it's used]
Users: [Who operates or uses the system]
Affected Parties: [Who is impacted by decisions]
Data Inputs: [What data the system uses]
Outputs: [What the system produces]
```

**Example:**

```
System Name: Resume Screening AI
System Description: Analyzes job applications using natural language processing and machine learning to evaluate candidate qualifications and predict job fit based on resume content compared to successful employee profiles
Decision Type: Informs which candidates advance from application to first-round interview (recruiter receives ranked list with fit scores 0-100)
Deployment Context: Used by HR recruiting team for all entry-level and mid-level technology positions (software engineers, product managers, designers) processing approximately 5,000 applications annually across 3 office locations
Users: Recruiting team (5 recruiters, 1 recruiting coordinator, 2 hiring managers with system access)
Affected Parties: Job applicants (5,000/year, diverse demographics, domestic and international, varying experience levels)
Data Inputs: Resume text (PDF or Word documents), job description text, historical hiring data (resumes of employees hired in last 5 years with performance ratings)
Outputs: Candidate fit score (0-100), ranking among applicant pool, recommendation (Strong Fit / Moderate Fit / Weak Fit), top 5 feature contributions to score
```


### Step 2: Stakeholder Identification

**Objective:** Identify everyone who has a stake in the system.

**Stakeholder Categories:**

| Category | Description | Examples |
|----------|-------------|----------|
| Direct users | People who operate the system | Recruiters, loan officers, customer service agents |
| Decision subjects | People decisions are made about | Job applicants, loan applicants, customers |
| Affected third parties | Others impacted indirectly | Families of applicants, community members, competitors |
| Operators | Organization deploying the system | Your company, client organizations |
| Developers | Those who built the system | Internal data science team, external vendors |
| Regulators | Oversight bodies | EEOC, CFPB, FTC, state agencies |
| Advocates | Groups representing affected parties | Civil rights organizations, consumer groups, labor unions |

**Engagement Approach:**

For high-risk systems, actively engage stakeholders beyond document review:
- Interview representatives of affected groups (20-30 interviews for high-risk systems)
- Consult with advocacy organizations (formal consultations with written responses)
- Seek input from domain experts (academic researchers, industry specialists)
- Consider public consultation for very high-impact systems (public comment periods, town halls)

**Example:**

Resume Screening AI - Stakeholder Engagement:

**Direct Users (Recruiters):**
- Conducted 5 individual interviews exploring workflow, pain points, AI trust/concerns
- Group workshop mapping current hiring process and AI integration points
- Ongoing feedback channel for AI performance issues

**Decision Subjects (Job Applicants):**
- Survey of 200 recent applicants about expectations, transparency preferences, concerns
- Focus group with 15 applicants (diverse demographics) discussing AI in hiring
- Analysis of applicant feedback/complaints from last 2 years

**HR Leadership:**
- Executive briefing on risks, governance requirements, resource needs
- Monthly steering committee updates during development
- Final approval authority for deployment decision

**Legal/Compliance Team:**
- Legal review of EEOC guidelines, state AI employment laws, ADA considerations
- Compliance assessment against company policies and industry standards
- Ongoing legal advice on documentation and record-keeping

**Diversity & Inclusion Office:**
- Consultation on fairness metrics, protected group considerations
- Input on historical hiring patterns and bias concerns
- Review of fairness testing methodology and results

**External Stakeholders:**
- Informal consultation with National Employment Law Project (worker advocacy)
- Review of academic literature on hiring AI bias
- Monitoring of regulatory guidance from EEOC and state labor departments

---


## Detailed Example: Resume Screening AI Complete AIA

To illustrate the complete AIA process, let's walk through a comprehensive example from start to finish.


### Step 3: Impact Identification

**Objective:** Systematically identify potential positive and negative impacts.

**Resume Screening AI - Potential Impacts:**

| Impact | Type | Description | Affected Party |
|--------|------|-------------|----------------|
| Employment discrimination | Negative - Group | AI may systematically disadvantage protected groups (race, gender, age, disability) through biased training data or proxy features | Diverse applicants |
| Privacy concerns | Negative - Individual | Processing of personal data in resumes (education, employment history, potential demographic info) | All applicants |
| Reduced human judgment | Negative - Individual | Qualified candidates missed due to AI limitations in understanding context, non-traditional backgrounds | Applicants, company |
| Lack of transparency | Negative - Individual | Applicants don't understand why rejected, can't challenge decision effectively | Rejected applicants |
| Efficiency gains | Positive - Operational | 70% reduction in time to review applications (from 15 hours to 4.5 hours per 100 applications) | Recruiting team, company |
| Consistency | Positive - Individual | More uniform evaluation criteria reducing individual recruiter bias, "who you know" favoritism | All applicants |
| Scalability | Positive - Operational | Ability to review more applications enabling broader talent search | Applicants, company |
| Explanation challenges | Negative - Accountability | Difficult to explain to candidates why not selected (complex ML model) | Rejected applicants, HR team |
| Over-reliance risk | Negative - Individual | Recruiters may rubber-stamp AI recommendations without genuine review | Applicants |
| Cost reduction | Positive - Operational | Reduced recruiter time costs estimated $50,000 annually | Company |


### Step 4: Impact Analysis

**Objective:** Assess the likelihood and severity of identified impacts.

**Resume Screening AI - Impact Analysis:**

| Impact | Likelihood | Severity | Scope | Vulnerability | Risk Level |
|--------|------------|----------|-------|--------------|------------|
| Gender discrimination | Medium (similar systems showed bias) | High (employment is fundamental right) | Wide (2,500 applications annually from women) | Medium (women in tech underrepresented) | **High** |
| Age discrimination | Medium (age signals in resumes) | High (ADEA violations, severe harm) | Wide (1,000 applications from 40+) | High (older workers face discrimination) | **High** |
| Racial bias | Medium (historical underrepresentation) | High (Title VII violations, severe harm) | Wide (1,500 applications from BIPOC) | High (historical discrimination in tech) | **High** |
| Privacy concerns | Low (standard resume processing) | Medium (personal data exposure) | Wide (all 5,000 applicants) | Low (public info in resumes) | **Medium** |
| Missing good candidates | Medium (AI imperfect) | Medium (business impact, individual harm) | Moderate (estimated 10-15% of applicants) | Low (general population) | **Medium** |
| Lack of explanation | High (ML model complexity) | Low (informational, not material harm) | Wide (4,000 rejected annually) | Low (general population) | **Medium** |
| Over-reliance on AI | Medium (automation bias documented) | Medium (qualified candidates rejected) | Moderate (depends on recruiter behavior) | Medium (non-traditional candidates) | **Medium** |


### Step 5: Fairness Deep Dive

**Objective:** Specifically assess bias and discrimination risks.

**Resume Screening AI - Fairness Assessment:**

**Training Data Analysis:**
- Historical hiring data from 2018-2023 (n=847 hires)
- Demographic analysis reveals underrepresentation: 23% women (vs 28% in applicant pool), 12% Black (vs 18% in applicant pool), 31% over 40 (vs 38% in applicant pool)
- **Finding:** Training data reflects historical bias, likely to perpetuate discrimination

**Feature and Proxy Analysis:**
- Features include: skills, education, work experience duration, job titles, companies, projects
- Identified proxies: Graduation year (age proxy, correlation 0.87), University name (socioeconomic proxy, correlation 0.43), Job titles (gender proxy for technical titles, correlation 0.31)
- **Finding:** Multiple demographic proxies present requiring mitigation

**Outcome Testing Results:**

Testing on holdout dataset (n=2,000 applications with demographic labels):

| Demographic Group | Selection Rate | Ratio to Baseline | Four-Fifths Test | Status |
|-------------------|---------------|-------------------|------------------|---------|
| **Gender:** | | | | |
| Men | 35% | Baseline | — | — |
| Women | 28% | 80% | 80% (minimum) | ⚠️ **At Threshold** |
| **Age:** | | | | |
| Under 40 | 38% | Baseline | — | — |
| Over 40 | 22% | 58% | 80% (minimum) | ❌ **FAIL** |
| **Race/Ethnicity:** | | | | |
| White | 34% | Baseline | — | — |
| Asian | 32% | 94% | 80% (minimum) | ✅ **PASS** |
| Black | 26% | 76% | 80% (minimum) | ❌ **FAIL** |
| Hispanic | 29% | 85% | 80% (minimum) | ⚠️ **At Threshold** |

**Findings:** Significant disparate impact by age (58% ratio) and race (76% for Black applicants). Gender disparity at legal threshold. Requires immediate mitigation before deployment.

**Error Rate Analysis:**

| Group | False Negative Rate | False Positive Rate |
|-------|---------------------|---------------------|
| Men | 18% | 12% |
| Women | 24% | 11% |
| Under 40 | 17% | 13% |
| Over 40 | 29% | 10% |
| White | 19% | 12% |
| Black | 27% | 11% |

**Finding:** False negative rates (qualified candidates incorrectly rejected) significantly higher for women (24% vs 18%), over 40 (29% vs 17%), and Black applicants (27% vs 19%), indicating quality discrimination beyond just selection rates.


### Step 6: Mitigation Planning

**Objective:** Develop strategies to address identified risks.

**Resume Screening AI - Mitigation Plan:**

| Risk | Priority | Mitigation Strategy | Specific Actions | Owner | Timeline |
|------|----------|---------------------|------------------|-------|----------|
| Age discrimination | **Critical** | Modify - Remove age proxies | 1. Remove graduation year from features<br>2. Remove graduation decade from university name<br>3. Cap work experience at 15 years (avoid penalizing extensive experience)<br>4. Retrain model with age-blind features | Data Science Lead | Before deployment (2 weeks) |
| Racial bias | **Critical** | Modify - Address training data bias + Fairness constraints | 1. Audit training data for demographic representation<br>2. Apply demographic reweighting to balance historical underrepresentation<br>3. Implement fairness constraint (demographic parity within 90%)<br>4. Validate with holdout testing (target >85% parity) | Data Science Lead | Before deployment (3 weeks) |
| Gender disparity | **High** | Modify - Feature analysis and adjustment | 1. Analyze feature importance by gender<br>2. Remove/adjust features with gendered correlation >0.3<br>3. Test for indirect gender signals (job titles, companies, industries)<br>4. Validate improvement with testing (target >90% parity) | Data Science Team | Before deployment (2 weeks) |
| Privacy | **Medium** | Control - Data protection safeguards | 1. Implement automated resume scrubbing (remove names, addresses, photos)<br>2. Set 18-month data retention limit<br>3. Provide applicant data access/deletion on request<br>4. Encrypt data at rest and in transit | Engineering Lead | Before deployment (1 week) |
| Lack of explanation | **Medium** | Control - Explanation capabilities | 1. Implement SHAP-based explanations for top 5 factors<br>2. Develop plain language explanation templates<br>3. Train recruiters on explaining AI decisions to applicants<br>4. Provide explanation on request within 5 business days | Engineering + HR | Before deployment (2 weeks) |
| Over-reliance on AI | **Medium** | Control - Human oversight requirements | 1. Require human review for all rejections<br>2. Flag borderline cases (scores 45-55) for extra attention<br>3. Track and report recruiter override rates<br>4. Investigate overrides for systemic AI issues | HR Operations | Deployment + ongoing |
| Missing good candidates | **Medium** | Control - Safety net | 1. Allow recruiters to advance candidates despite low AI scores<br>2. Randomize 5% of rejections for human review (sample auditing)<br>3. Track hiring outcomes to validate AI predictions | HR Operations | Deployment + ongoing |
| All risks | **High** | Monitor - Ongoing fairness monitoring | 1. Monthly demographic parity testing (automated)<br>2. Quarterly comprehensive bias audit<br>3. Continuous logging of scores by demographics<br>4. Alert if any group <85% parity | Analytics Team | Deployment + ongoing |


### Step 7: Documentation and Approval

**Resume Screening AI - AIA Report Executive Summary:**

```
ALGORITHMIC IMPACT ASSESSMENT - EXECUTIVE SUMMARY

System: Resume Screening AI
Assessment Date: October 15, 2025
Lead Assessor: Sarah Chen, Senior AI Governance Specialist
Risk Classification: HIGH-RISK

ASSESSMENT FINDINGS:

1. Key Risks Identified:
   - CRITICAL: Age discrimination (58% parity ratio, failing four-fifths rule)
   - CRITICAL: Racial bias against Black applicants (76% parity ratio)
   - HIGH: Gender disparity at legal threshold (80% parity ratio)
   - MEDIUM: Privacy, explanation, over-reliance concerns

2. Root Causes:
   - Training data reflects historical underrepresentation (23% women vs 28%
     applicant pool, 12% Black vs 18% applicant pool)
   - Age proxy features (graduation year, correlation 0.87 with age)
   - Lack of fairness constraints in model training

3. Mitigation Plan:
   - Remove age proxy features (graduation year, work experience capping)
   - Apply demographic reweighting and fairness constraints
   - Implement human review for all rejections
   - Develop SHAP-based explanation capabilities
   - Establish ongoing monthly fairness monitoring

4. Residual Risks After Mitigation:
   - Estimated 85-90% demographic parity (improvement from 58-80%)
   - Remaining false negative rate disparities (target <5% difference)
   - Monitoring required to detect drift over time

5. Recommendation:
   **PROCEED WITH CONDITIONS**

   Conditions for Deployment:
   a) Complete all CRITICAL mitigations (age/race bias) before any deployment
   b) Achieve >85% demographic parity across all protected groups in testing
   c) Implement human review for all rejections (no exceptions)
   d) Establish monthly automated fairness monitoring with <85% parity
      triggering immediate investigation
   e) Conduct quarterly bias audit by external auditor for first year
   f) Obtain legal review of fairness testing methodology and results

APPROVALS REQUIRED:
☐ Data Science Lead (mitigation technical feasibility)
☐ HR Leadership (operational feasibility and business case)
☐ Legal/Compliance (legal risk assessment)
☐ Chief Technology Officer (executive sponsorship and resource allocation)
☐ Chief Human Resources Officer (final deployment authorization)

Next Review Date: 90 days post-deployment, then quarterly
```


### Step 8: Ongoing Monitoring

**Resume Screening AI - Monitoring Plan:**

| Metric | Frequency | Threshold | Action if Exceeded | Owner |
|--------|-----------|-----------|-------------------|-------|
| Overall selection rate | Weekly | <20% or >50% | Investigation of system anomaly, data quality check | Analytics Team |
| Demographic parity ratios (gender, age, race) | Monthly (automated) | Any group <85% | Immediate investigation<br>Temporary system pause if <80%<br>Root cause analysis within 48 hours | AI Governance Team |
| False negative rate disparity | Monthly | >7% difference between groups | Investigation of model performance<br>Consider retraining if persistent | Data Science Team |
| Complaint rate | Monthly | >0.5% of applicants | Investigation of complaints<br>Pattern analysis for systemic issues | HR Compliance |
| Recruiter override rate | Monthly | >30% or <5% | >30%: AI not useful, review value<br><5%: Over-reliance risk, review human oversight | HR Operations |
| Missing candidate rate (false negatives later hired) | Quarterly | >10% of hires | Model retraining<br>Feature engineering review | Data Science Team |
| Explanation request rate | Monthly | >5% of rejections | Review explanation quality<br>Improve clarity if high | HR Communications |
| Full bias audit (independent) | Quarterly (Year 1)<br>Semi-annually (Year 2+) | Any four-fifths rule failure | Immediate remediation<br>External audit if repeated failures | External Auditor |
| Comprehensive AIA reassessment | Annually or on trigger events | N/A (scheduled) | Update AIA with latest data<br>Revise mitigation plan as needed | AI Governance Team |

**Review Triggers (immediate reassessment required):**
- Significant system changes (model retraining, new features, algorithm changes)
- Material changes in use context (new roles, different applicant pool, organizational changes)
- Fairness incidents (discrimination complaints, legal inquiries, media attention)
- Regulatory changes (new laws, updated guidance from EEOC/agencies)
- Monitoring thresholds exceeded (persistent fairness violations, systemic issues)

---


## AIA Templates


### Abbreviated AIA Template (Low-Risk Systems)

```
ABBREVIATED ALGORITHMIC IMPACT ASSESSMENT

System: [Name]
Date: [Date]
Assessor: [Name]

1. SYSTEM OVERVIEW
   Purpose: [One paragraph describing what system does and how it's used]
   Users: [Who operates the system]
   Affected parties: [Who is impacted by system decisions]
   Decision type: [What decisions system makes or informs]

2. RISK CLASSIFICATION
   Decision type: ☐ Consequential ☐ Routine ☐ Informational
   Scope: [Estimated number of people affected annually]
   Reversibility: ☐ Easy ☐ Moderate ☐ Difficult
   Vulnerable populations: ☐ Yes ☐ No [If yes, describe]
   Overall risk level: ☐ Low ☐ Medium

3. KEY RISKS IDENTIFIED
   Risk 1: [Description] - [Low/Medium] - Mitigation: [Action]
   Risk 2: [Description] - [Low/Medium] - Mitigation: [Action]
   Risk 3: [Description] - [Low/Medium] - Mitigation: [Action]

4. FAIRNESS CONSIDERATION
   Protected groups potentially affected: ☐ Yes ☐ No [If yes, which]
   Fairness testing conducted: ☐ Yes ☐ No ☐ N/A
   Findings: [Brief summary of fairness testing results or N/A]

5. PRIVACY CONSIDERATION
   Personal data processed: ☐ Yes ☐ No [If yes, what data]
   Privacy safeguards: [List key safeguards or N/A]

6. TRANSPARENCY
   Users/affected parties informed about AI: ☐ Yes ☐ No ☐ Partial
   Explanation capability: ☐ Yes ☐ No ☐ N/A

7. MONITORING PLAN
   Key metrics: [List 2-3 key metrics to monitor]
   Review frequency: [Monthly/Quarterly/Annually]

8. RECOMMENDATION
   ☐ Proceed (no significant risks identified)
   ☐ Proceed with conditions: [List conditions]
   ☐ Further review needed (escalate to standard AIA)

Approved by: [Name/Role/Date]
```


### Standard AIA Template (Medium/High-Risk Systems)

```
ALGORITHMIC IMPACT ASSESSMENT

Part 1: System Identification
- System name:
- System version:
- Assessment date:
- Lead assessor:
- Assessment team members:
- System owner/sponsor:
- Vendor (if applicable):
- Risk classification: ☐ High ☐ Medium

Part 2: System Description
- Purpose and business function:
- Technical overview (algorithm type, architecture):
- Data inputs (sources, types, volume):
- Data processing and transformations:
- Model/algorithm outputs:
- Decisions or recommendations produced:
- Deployment context (where, when, how used):
- Integration with other systems:
- Geographic scope:
- Expected lifespan:

Part 3: Stakeholder Analysis
- Direct users: [List individuals/roles, describe relationship to system]
- Decision subjects: [List individuals/groups affected by decisions]
- Other affected parties: [Indirect impacts, third parties, communities]
- Vulnerable populations: [If applicable, describe]
- Stakeholder engagement conducted:
  ☐ Interviews [Number, with whom]
  ☐ Surveys [Number of responses]
  ☐ Focus groups [Number, with whom]
  ☐ Public consultation [Description]
  ☐ Expert consultation [Experts consulted]
  ☐ None [Explain why]
- Key stakeholder concerns: [Summarize input received]

Part 4: Impact Identification
[Table format:]
| Impact | Type (Individual/Group/Societal) | Positive/Negative | Description | Affected Party |
|--------|----------------------------------|-------------------|-------------|----------------|
| [Impact 1] | | | | |
| [Impact 2] | | | | |
[Continue for all identified impacts]

Part 5: Impact Analysis
[Table format:]
| Impact | Likelihood (H/M/L) | Severity (H/M/L) | Scope (Wide/Mod/Limited) | Vulnerability (H/M/L) | Combined Risk |
|--------|-------------------|------------------|--------------------------|----------------------|---------------|
| [Impact 1] | | | | | |
| [Impact 2] | | | | | |
[Continue for all impacts]

Part 6: Fairness Assessment
- Protected characteristics potentially affected:
  ☐ Race/Ethnicity ☐ Gender ☐ Age ☐ Disability ☐ Religion
  ☐ National origin ☐ Sexual orientation ☐ Other: ___________

- Training data analysis:
  • Demographic composition: [Describe representation]
  • Historical bias assessment: [Findings]
  • Data gaps identified: [Any underrepresented groups]

- Feature and proxy analysis:
  • Protected characteristics used directly: ☐ Yes ☐ No [If yes, justify]
  • Proxy features identified: [List with correlation coefficients]
  • Feature validation conducted: ☐ Yes ☐ No [Methodology]

- Fairness testing methodology:
  • Test dataset: [Size, demographic composition]
  • Metrics used: ☐ Demographic parity ☐ Equal opportunity
                 ☐ Predictive parity ☐ Individual fairness
  • Thresholds: [Define acceptable ranges]

- Fairness testing results:
  [Table format:]
  | Group | Selection/Outcome Rate | Ratio to Baseline | Pass/Fail |
  |-------|----------------------|-------------------|-----------|
  | Baseline group | | — | — |
  | Group 1 | | | |
  | Group 2 | | | |

- Disparate impact findings: [Detailed analysis of any significant disparities]

- Error rate analysis:
  [Table format:]
  | Group | False Positive Rate | False Negative Rate |
  |-------|-------------------|---------------------|
  | Group 1 | | |
  | Group 2 | | |

Part 7: Mitigation Plan
[Table format:]
| Risk | Priority (Critical/High/Med/Low) | Mitigation Strategy | Specific Actions | Owner | Timeline | Success Criteria |
|------|--------------------------------|-------------------|------------------|-------|----------|------------------|
| [Risk 1] | | | | | | |
| [Risk 2] | | | | | | |

Part 8: Residual Risk Assessment
- Risks remaining after planned mitigations:
  [List each residual risk with expected level after mitigation]

- Justification for accepting residual risk:
  [For each residual risk, explain why acceptance is appropriate]

- Conditions for managing residual risk:
  [Monitoring, review schedules, escalation procedures]

Part 9: Monitoring Plan
- Performance monitoring:
  • Metrics: [List key performance metrics]
  • Frequency: [How often measured]
  • Thresholds: [When to trigger action]

- Fairness monitoring:
  • Metrics: [Demographic parity ratios, error rates, etc.]
  • Frequency: [How often measured]
  • Thresholds: [When to trigger action]

- Incident tracking:
  • Complaint logging: [Process description]
  • Error tracking: [Process description]
  • Remediation documentation: [Process description]

- Review schedule:
  • Routine reassessment: [Frequency]
  • Trigger events: [List events requiring immediate reassessment]

- Escalation procedures:
  • Monitoring threshold exceeded: [Who to notify, timeline]
  • Incident occurred: [Response protocol]
  • Regulatory inquiry: [Response protocol]

Part 10: Recommendations and Approval
- Overall risk determination: ☐ Critical ☐ High ☐ Medium ☐ Low

- Recommendation:
  ☐ Proceed - No significant risks identified, standard monitoring adequate
  ☐ Proceed with conditions - [List specific conditions below]
  ☐ Modify and reassess - [Describe required changes]
  ☐ Do not proceed - [Explain rationale]

- Conditions for deployment (if applicable):
  1. [Condition 1]
  2. [Condition 2]
  [Continue as needed]

- Approvals required and obtained:
  ☐ Technical Lead: ____________ [Name] _________ [Date]
  ☐ Business Owner: ____________ [Name] _________ [Date]
  ☐ Legal/Compliance: __________ [Name] _________ [Date]
  ☐ Data Protection Officer: ____ [Name] _________ [Date] [If applicable]
  ☐ [Required executive level]: _ [Name] _________ [Date]

- Next review date: _________________

- Assessment completion date: _________________
```

---


## Common Pitfalls and How to Avoid Them


### Pitfall 1: Treating AIAs as Checkbox Exercises

**Problem:** Going through motions without genuine analysis, pro forma assessments that superficially answer questions without substantive investigation.

**Manifestation:**
- AIA concludes "no significant risks" for high-risk hiring AI without fairness testing
- Generic boilerplate answers copied across different system assessments
- No specific, measurable mitigations identified
- Assessment completed in 2 hours for complex system
- No stakeholder engagement beyond internal technical team

**Solution:** Require substantive findings and specific mitigations. If an AIA finds nothing concerning, be skeptical—dig deeper. Establish quality review process where independent reviewer challenges superficial assessments.

*Example:* Initial AIA for credit decisioning AI found "no significant fairness concerns" without quantitative testing. Quality review by AI Governance Committee rejected assessment, requiring fairness testing. Resubmitted AIA revealed 72% demographic parity for age (failing four-fifths rule), leading to model modifications before deployment. Checkpoint process prevented deployment of discriminatory system.


### Pitfall 2: Conducting AIAs Too Late

**Problem:** Assessing after the system is built and tested, when significant design changes are costly and politically difficult, creating pressure to minimize findings.

**Manifestation:**
- AIA begins week before planned production deployment
- Development team already committed to architecture, features, algorithms
- Business stakeholders expect launch, resist delays for mitigation
- Fundamental issues require expensive rework or deployment delay
- AIA becomes deployment rubber stamp rather than genuine assessment

**Solution:** Begin AIA during design phase before significant development investment. Update assessment as development proceeds. Integrate AIA checkpoints into development milestones (design approval, code complete, pre-deployment).

*Example:* Healthcare diagnostic AI conducted AIA after 9 months development, 2 weeks before planned deployment, revealing significant accuracy disparity across skin tones (88% for light skin, 71% for dark skin). Correcting required retraining with balanced dataset (3 months), new clinical validation (2 months), delaying launch 5 months and costing $400K. Early-phase AIA (during design) would have identified data diversity requirement before expensive development, addressing in initial data collection rather than late-stage rework.


### Pitfall 3: Ignoring Stakeholder Perspectives

**Problem:** Technical teams assess impacts without input from affected parties, missing crucial concerns and cultural context only stakeholders understand.

**Manifestation:**
- AIA completed entirely by data scientists and engineers
- No consultation with users, decision subjects, or affected communities
- Stakeholder concerns dismissed as "not technical" or "not our problem"
- Assessment focuses on technical metrics, misses human impacts
- Surprise stakeholder backlash after deployment reveals issues AIA missed

**Solution:** Actively engage representatives of affected groups, especially for high-risk systems. Budget time and resources for meaningful consultation. Consider diverse perspectives as essential data, not optional nice-to-have.

*Example:* Welfare benefits AI assessment by technical team concluded "fair" based on equal error rates across demographics. Post-deployment, benefits recipients raised concerns AIA missed: complicated appeal process disadvantaging people with limited English, explanations too technical for typical recipient education level, decisions taking weeks creating hardship for people needing immediate assistance. Stakeholder engagement during AIA would have surfaced these access and usability concerns, leading to simpler language, faster processing, and better appeal support.


### Pitfall 4: Inadequate Fairness Testing

**Problem:** Not testing for bias, or testing only superficially without rigorous quantitative analysis, leaving discrimination risks undetected.

**Manifestation:**
- "We eyeballed the results, seems fair"
- No demographic-disaggregated testing (no protected characteristic labels in test data)
- Testing overall accuracy but not fairness metrics (demographic parity, equal opportunity)
- Small test samples insufficient for statistical significance
- No documentation of testing methodology, thresholds, or results
- Testing internal validity but not real-world deployment conditions

**Solution:** Require quantitative fairness testing with documented methodology and thresholds. For high-risk systems, mandate independent audit. Use appropriate fairness metrics for use case. Ensure sufficient test data with demographic labels.

*Example:* Employment AI initial fairness assessment consisted of team member reviewing 50 random decisions concluding "looks fine." External audit revealed: 68% selection rate for men vs 51% for women (75% ratio, failing four-fifths rule), testing on 2,000 applications with demographic labels. Rigorous quantitative testing uncovered gender bias that superficial review missed, preventing discriminatory deployment and potential EEOC violation.


### Pitfall 5: No Ongoing Monitoring

**Problem:** One-time assessment at deployment without continued vigilance, failing to detect drift, degradation, or changing context.

**Manifestation:**
- AIA completed once, filed away, never revisited
- No metrics tracked in production
- Model retraining without reassessment
- Context changes (new use case, different user population) without AIA update
- Problems detected only through complaints or external scrutiny
- No defined schedule for periodic reassessment

**Solution:** Build ongoing monitoring into deployment requirements. Define specific metrics, measurement frequency, thresholds triggering action. Schedule periodic reassessment (quarterly, annually). Require reassessment for significant changes.

*Example:* Credit scoring AI underwent comprehensive AIA before 2020 deployment showing 87% demographic parity across race/ethnicity. No ongoing monitoring implemented. By 2023, external audit revealed demographic parity degraded to 73% (failing four-fifths rule) due to: model drift from changed economic patterns post-pandemic, changing applicant demographics, feature distributions shifting over time. Ongoing monthly monitoring (automated in production pipeline) would have detected degradation in 2021, triggering investigation and correction before significant discrimination occurred, avoiding regulatory inquiry and reputational damage.

---


## Conclusion

Algorithmic Impact Assessments are becoming essential practice for responsible AI deployment. They transform vague commitments to "responsible AI" into concrete, documented analysis and action.

Key takeaways:

1. **Start early:** Begin assessment during design phase, not after deployment, when changes are expensive and politically difficult

2. **Be systematic:** Use structured 8-step methodology with documented templates, checklists, and approval processes, not ad-hoc review

3. **Go deep on fairness:** Quantitative testing with demographic-disaggregated data, appropriate fairness metrics, clear thresholds is essential for high-risk systems

4. **Involve stakeholders:** Affected parties offer insights technical teams may miss—consult users, decision subjects, advocacy groups, domain experts

5. **Plan mitigations:** Identifying risks is pointless without action plans—follow mitigation hierarchy (avoid, replace, modify, control, accept) with specific accountable actions

6. **Document thoroughly:** Create structured records demonstrating due diligence—defensible in regulatory inquiries, legal proceedings, stakeholder scrutiny

7. **Monitor continuously:** Assessment doesn't end at deployment—implement ongoing performance and fairness monitoring, periodic reassessment, review triggers

AIAs require effort, but they pay dividends. They surface problems before they become public incidents (catching discrimination in development rather than after lawsuit). They create defensible records of responsible practice (demonstrating due diligence to regulators, boards, stakeholders). And increasingly, they're required by law (Canada AIDA, NYC Local Law 144, EU AI Act with expanding jurisdictions).

Whether you're legally required to conduct AIAs or not, the underlying question is the same: Have you thought carefully about how your algorithm might affect people? An AIA ensures the answer is yes, with documentation proving it, stakeholders consulted, impacts analyzed, mitigations implemented, and monitoring ongoing. It's the difference between claiming responsibility and demonstrating it.

---


## Sources and Further Reading

1. **Canada Algorithmic Impact Assessment Tool** - Government of Canada's AIA tool and guidance for federal AI use. Available at: canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html

2. **NYC Local Law 144** - Bias audit requirements for automated employment decision tools. Available at: rules.cityofnewyork.us

3. **AI Now Institute** - Algorithmic impact assessment research, frameworks, and policy recommendations. Available at: ainowinstitute.org

4. **NIST AI RMF** - Risk assessment guidance and playbook. Available at: nist.gov/itl/ai-risk-management-framework

5. **EU AI Act** - Article 9 risk assessment requirements for high-risk AI systems. Available at: eur-lex.europa.eu

6. **Ada Lovelace Institute** - Algorithmic impact assessment in healthcare and public services. Available at: adalovelaceinstitute.org

7. **World Economic Forum** - AI governance and impact assessment frameworks. Available at: weforum.org

8. **Reisman, Schultz, Crawford, Whittaker** - "Algorithmic Impact Assessments: A Practical Framework for Public Agency Accountability" (2018). AI Now Institute publication.

9. **Selbst, Boyd, Friedler, Venkatasubramanian, Vertesi** - "Fairness and Abstraction in Sociotechnical Systems" (2019). FAT* Conference proceedings.

10. **Metcalf, Moss, Boyd** - "Owning Ethics: Corporate Logics, Silicon Valley, and the Institutionalization of Ethics" (2019). Social Research journal.

11. **ICO (UK Information Commissioner's Office)** - AI and data protection risk toolkit. Available at: ico.org.uk

12. **Partnership on AI** - Impact assessment resources and case studies. Available at: partnershiponai.org

13. **Algorithm Audit** - Independent algorithmic bias testing methodologies. Available at: algorithmaudit.eu

14. **OECD.AI** - International algorithmic impact assessment practices and policy analysis. Available at: oecd.ai

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*

**Next Article:** Article 75: Continuing the AI auditing and accountability curriculum (Publishing: October 27, 2025)
