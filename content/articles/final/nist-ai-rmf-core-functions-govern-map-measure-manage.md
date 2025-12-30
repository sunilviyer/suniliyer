---
title: "NIST AI RMF Core Functions: GOVERN, MAP, MEASURE, MANAGE"
slug: nist-ai-rmf-core-functions-govern-map-measure-manage
path: risk
publishDate: 2025-10-07
tldr: The NIST AI Risk Management Framework's four core functions provide operational structure for systematic AI risk management working as continuous cycle rather than linear process. GOVERN establishes organizational foundation (culture, structures, processes) through six categories—legal/regulatory requirements understanding which laws apply, organizational policies creating internal AI rules, roles and responsibilities defining who does what with executive accountability, risk tolerance defining acceptable risk levels, culture and training building awareness and capability, and documentation/communication recording decisions and sharing information. MAP builds understanding of AI context through five categories—AI system inventory knowing what AI exists including vendor-embedded systems, intended purpose and use documenting what AI supposed to do and non-uses, stakeholder analysis identifying all affected parties including vulnerable populations, context of use understanding deployment environment and integration, and risks/benefits assessment initial identification of what could go right or wrong. MEASURE generates evidence through four categories—risk assessment approaches having systematic evaluation methods for different AI types, bias and fairness assessment testing for discriminatory outcomes across demographics using multiple fairness metrics, security and privacy assessment evaluating vulnerabilities to attacks and information leakage, and ongoing monitoring tracking performance degradation and emerging risks in production through dashboards and alerts. MANAGE drives action through four categories—risk prioritization deciding which risks address first based on severity/likelihood/costs, risk treatment implementing controls (accept/mitigate/transfer/avoid options) with documented rationale, documentation and communication recording decisions for legal defensibility and sharing appropriately with stakeholders, and response and recovery handling incidents through escalation processes and learning from failures. The functions work together as integrated system—GOVERN decisions shape how you MAP/MEASURE/MANAGE, risk tolerance informs measurement thresholds, policies determine management actions; MAP identification determines what you measure, stakeholder analysis informs fairness definitions, context understanding shapes monitoring approaches; MEASURE results drive management priorities, monitoring triggers actions, evidence informs governance updates; MANAGE lessons improve governance, incident patterns reveal policy gaps, effectiveness data informs resource allocation. Implementation follows practical sequence—Month 1-2 GOVERN foundation (assign accountability, create policy, establish committee, define risk tolerance, plan training); Month 2-3 MAP your AI (conduct inventory, document purposes/stakeholders, assess initial risks, prioritize systems); Month 3-4 establish MEASURE capabilities (define methodologies, establish baselines, implement monitoring, conduct initial assessments); Month 4+ activate MANAGE and iterate (address identified risks, establish incident response, document/communicate, review continuously). Success indicators vary by function—GOVERN shows executive engagement and policy awareness; MAP shows complete inventory and stakeholder consideration; MEASURE shows evidence-based discussions and no surprises from monitoring; MANAGE shows actual risk reduction and timely action with learning culture.
relatedConcepts:
  - nist-ai-rmf-core-functions
  - govern-function-nist
  - map-function-nist
  - measure-function-nist
  - manage-function-nist
  - continuous-cycle-functions
  - legal-regulatory-requirements
  - organizational-ai-policies
  - roles-and-responsibilities-ai
  - executive-accountability
  - ai-risk-tolerance
  - culture-and-training
  - documentation-communication
  - ai-system-inventory
  - vendor-embedded-ai
  - intended-purpose-use
  - non-uses-documentation
  - stakeholder-analysis
  - vulnerable-populations
  - context-of-use
  - deployment-environment
  - system-integration
  - risks-benefits-assessment
  - risk-assessment-approaches
  - systematic-evaluation-methods
  - bias-fairness-assessment
  - multiple-fairness-metrics
  - demographic-testing
  - security-privacy-assessment
  - adversarial-attacks
  - information-leakage
  - ongoing-monitoring
  - performance-degradation
  - monitoring-dashboards
  - alert-thresholds
  - risk-prioritization
  - severity-likelihood-assessment
  - risk-treatment-options
  - accept-mitigate-transfer-avoid
  - control-implementation
  - documented-rationale
  - stakeholder-communication
  - legal-defensibility
  - response-recovery
  - incident-escalation
  - learning-from-failures
  - function-integration
  - governance-shapes-execution
  - measurement-drives-management
  - management-improves-governance
  - implementation-sequence
  - govern-foundation-months
  - map-inventory-months
  - measure-capabilities-months
  - manage-iterate-ongoing
  - success-indicators
  - executive-engagement
  - policy-awareness
  - complete-inventory
  - evidence-based-decisions
  - risk-reduction
  - timely-action
  - learning-culture
examples:
  - Bank identifies AI credit scoring subject to ECOA, Fair Housing Act, state laws, OCC guidance; creates regulatory mapping (GOVERN 1.1)
  - Healthcare system requires ethics review for clinical AI, bias assessment pre-deployment, human oversight for diagnostics, 24-hour incident reporting (GOVERN 1.2)
  - Company assigns CTO executive accountability, AI Product Managers ownership, Data Science risk assessment, Ethics Board high-risk approval, Legal compliance monitoring (GOVERN 1.3)
  - Hiring platform defines 5% differential threshold for demographic recommendation rates triggering immediate review (GOVERN 1.4)
  - Customer Churn Predictor inventory entry documenting ML classification, production status, Marketing owner, purpose, users, deployment date, data sources (MAP 2.1)
  - Resume screening AI documents purpose, decision (flags for human review not rejection), users (recruiters), intended use (first-pass filter), non-uses (final hiring/performance/promotion) (MAP 2.2)
  - Credit decisioning AI tests demographic parity, equal opportunity, predictive parity, individual fairness across groups (MEASURE 3.2)
  - Monitoring dashboard tracks accuracy >95%, latency <100ms, demographic parity >0.8, user override baseline, error categories, data drift with yellow/red alerts (MEASURE 3.4)
  - Risk prioritization matrix comparing discriminatory hiring (high severity, medium likelihood, critical priority) vs slow response (low severity, high likelihood, low priority) (MANAGE 4.1)
  - Incident response defines critical (1 hour, discriminatory decisions), high (4 hours, wrong recommendations), medium (24 hours, degraded performance), low (72 hours, latency) (MANAGE 4.4)
templates:
  - GOVERN Category Checklist (1.1-1.6 legal requirements, policies, roles, risk tolerance, culture, documentation)
  - MAP AI System Inventory Template (system name, type, status, owner, purpose, users, deployment date, vendor/in-house, data sources)
  - Stakeholder Analysis Matrix (stakeholder, relationship, potential impact)
  - MEASURE Assessment Framework (phase, assessment type, frequency from pre-development through triggered)
  - Risk Prioritization Matrix (risk, severity, likelihood, priority calculation)
  - Risk Treatment Options Table (accept, mitigate, transfer, avoid with descriptions and examples)
  - Incident Response Plan (severity levels, response times, example scenarios, response steps)
crossPathRefs:
  - article: "NIST AI Risk Management Framework: The Complete Guide"
    slug: nist-ai-risk-management-framework-the-complete-guide
    path: risk
    category: Risk Frameworks & Standards
    relevance: Foundation article introducing four core functions that this article explores in depth with detailed implementation guidance
  - article: "Building an AI Governance Program"
    slug: building-an-ai-governance-program
    path: responsibility
    category: Governance & Oversight
    relevance: GOVERN function provides structure and categories for establishing organizational AI governance programs
  - article: "Algorithmic Bias: Detection and Mitigation"
    slug: algorithmic-bias-detection-and-mitigation
    path: risk
    category: Bias & Fairness
    relevance: MEASURE function's bias and fairness assessment requires detection methodologies and mitigation approaches
  - article: "AI Risk Assessment: Identifying and Evaluating Risks"
    slug: ai-risk-assessment-identifying-evaluating-risks
    path: risk
    category: Risk Management
    relevance: MEASURE function implements systematic risk assessment approaches across different AI types and contexts
  - article: "AI Incident Response: When Things Go Wrong"
    slug: ai-incident-response-when-things-go-wrong
    path: risk
    category: Risk Management
    relevance: MANAGE function's response and recovery category requires incident response procedures and escalation processes
tags:
  - nist-rmf
  - govern-function
  - map-function
  - measure-function
  - manage-function
  - risk-frameworks
  - ai-governance
  - ai-inventory
  - bias-testing
  - risk-assessment
  - incident-response
  - stakeholder-analysis
  - continuous-improvement
  - implementation-guide
  - organizational-culture
category: Risk Frameworks & Standards
image: article-69-nist-ai-rmf-core-functions-govern-map-measure-man.jpg
imageAlt: Four NIST AI RMF core functions (GOVERN, MAP, MEASURE, MANAGE) shown as continuous cycle with detailed categories
author: Sunil Iyer
readingTime: 19
seoTitle: "NIST AI RMF Core Functions: GOVERN, MAP, MEASURE, MANAGE | Implementation Guide"
seoDescription: Deep dive into NIST AI RMF four core functions with categories, implementation guidance, examples, and success indicators for systematic AI risk management.
---

## Summary

The NIST AI Risk Management Framework's four core functions—GOVERN, MAP, MEASURE, and MANAGE—provide the operational structure for systematic AI risk management, working together as a continuous cycle rather than a linear process. Each function serves a distinct purpose while integrating with the others to create a comprehensive risk management system.

GOVERN establishes the organizational foundation for AI risk management through culture, structures, policies, and processes. This foundational function encompasses six categories: understanding legal and regulatory requirements that apply to AI activities, creating organizational policies for AI development and deployment, defining roles and responsibilities with clear executive accountability, establishing risk tolerance thresholds, building culture and training for organizational awareness, and implementing documentation and communication practices. Without GOVERN, the other functions happen sporadically rather than systematically.

MAP builds understanding of AI context by identifying systems, stakeholders, use cases, and potential impacts. The five MAP categories include conducting AI system inventory to know what exists including vendor-embedded systems, documenting intended purpose and use with explicit non-uses, performing stakeholder analysis to identify all affected parties including vulnerable populations, assessing context of use including deployment environment and integration with other systems, and conducting initial risks and benefits assessment. You cannot manage risks you don't understand, making this contextual mapping essential before assessment.

MEASURE generates evidence about AI risks through systematic assessment, analysis, and tracking. The four MEASURE categories cover developing risk assessment approaches appropriate to different AI systems and use cases, conducting bias and fairness assessment testing for discriminatory outcomes across demographics using multiple fairness metrics, performing security and privacy assessment evaluating vulnerabilities to adversarial attacks and information leakage, and implementing ongoing monitoring tracking performance degradation and emerging risks in production through dashboards with alert thresholds. This function puts data and evidence behind risk understanding rather than relying on assumptions.

MANAGE drives action by responding to identified risks based on evidence from measurement. The four MANAGE categories include risk prioritization deciding which risks to address first based on severity, likelihood, and costs, risk treatment implementing controls through accept/mitigate/transfer/avoid options with documented rationale, documentation and communication recording decisions for legal defensibility and sharing appropriately with stakeholders, and response and recovery handling incidents through escalation processes and learning from failures. Assessment without action is merely paperwork—MANAGE translates understanding into risk reduction.

The functions work together as an integrated system through continuous cycles. GOVERN decisions shape how you MAP, MEASURE, and MANAGE—risk tolerance defined in GOVERN informs measurement thresholds, policies determine management actions. MAP identification determines what you measure—stakeholder analysis informs what fairness means, context understanding shapes monitoring approaches. MEASURE results drive management priorities—monitoring triggers actions, evidence informs governance updates. MANAGE lessons improve governance—incident patterns reveal policy gaps, effectiveness data informs resource allocation.

Implementation follows a practical sequence beginning with GOVERN foundation in months 1-2 (assign executive accountability, create or update AI policy, establish governance committee, define risk tolerance statements, begin training planning), continuing with MAP your AI in months 2-3 (conduct AI inventory, document purposes and stakeholders, assess initial risks for each system, prioritize systems for deeper assessment), establishing MEASURE capabilities in months 3-4 (define assessment methodologies, establish baseline metrics, implement monitoring for priority systems, conduct initial bias and fairness assessments), and activating MANAGE with continuous iteration from month 4 onward (address identified risks, establish incident response procedures, document and communicate, review and improve continuously).

Success indicators vary by function demonstrating effectiveness. GOVERN success shows through executive engagement with leaders actively discussing AI risks, policy awareness with employees knowing policies exist and their content, clear accountability with every AI system having identified owners, consistent decisions with similar AI applications receiving similar scrutiny, and learning culture where incidents lead to improvements not just blame. MAP success appears through complete inventory with no surprise AI systems discovered, clear documentation enabling any team member to explain AI purposes, stakeholder awareness with affected parties identified and considered, risk visibility providing leadership understanding of key AI risks, and living documentation staying current as systems change. MEASURE success manifests through evidence-based discussions referencing actual data, no surprises with problems detected before becoming incidents, continuous visibility providing real-time AI performance understanding, meaningful metrics actually indicating risk levels, and assessment discipline with testing happening consistently not just when convenient. MANAGE success demonstrates through actual risk reduction with identified risks decreasing over time, timely action without issues lingering unaddressed, clear decisions with records showing what was decided and why, learning culture where incidents drive improvements, and prepared response with teams knowing what to do when problems occur.

## Key Learning Objectives

1. **Understand GOVERN function's six categories** establishing organizational foundation through legal/regulatory requirements (identifying applicable laws and standards), organizational policies (creating internal AI rules and approval processes), roles and responsibilities (defining who does what with executive accountability), risk tolerance (setting acceptable risk thresholds), culture and training (building awareness and capability), and documentation/communication (recording decisions and sharing information)

2. **Implement MAP function's five categories** building comprehensive AI context understanding through AI system inventory (knowing what AI exists including vendor-embedded and inherited systems), intended purpose and use (documenting what AI should do and explicit non-uses), stakeholder analysis (identifying all affected parties including vulnerable populations), context of use (understanding deployment environment and system integration), and risks/benefits assessment (initial identification of potential harms and values)

3. **Execute MEASURE function's four categories** generating evidence-based risk understanding through risk assessment approaches (systematic evaluation methods for different AI types), bias and fairness assessment (testing for discriminatory outcomes using multiple fairness metrics across demographics), security and privacy assessment (evaluating vulnerabilities to adversarial attacks and information leakage), and ongoing monitoring (tracking performance degradation and emerging risks with dashboards and alert thresholds)

4. **Operationalize MANAGE function's four categories** driving action on identified risks through risk prioritization (deciding which risks address first based on severity, likelihood, resource requirements), risk treatment (implementing controls via accept/mitigate/transfer/avoid options with documented rationale), documentation and communication (recording decisions for legal defensibility and sharing with appropriate stakeholders), and response and recovery (handling incidents via escalation processes and learning from failures)

5. **Recognize function integration patterns** understanding how GOVERN shapes execution (policies determine actions, risk tolerance informs thresholds), MAP determines measurement (identified systems need assessment, stakeholders inform fairness definitions), MEASURE drives management (results trigger priorities, monitoring reveals issues), and MANAGE improves governance (incident patterns reveal policy gaps, effectiveness data guides resource allocation)

6. **Follow practical implementation sequence** starting with GOVERN foundation establishing accountability and policies (months 1-2), continuing with MAP inventory documenting systems and stakeholders (months 2-3), establishing MEASURE capabilities defining methods and monitoring (months 3-4), then activating MANAGE with continuous iteration addressing risks and learning (month 4 onward)

7. **Apply GOVERN success indicators** recognizing effective governance through executive engagement (leaders actively discuss AI risks), policy awareness (employees know policies and content), clear accountability (every system has identified owner), consistent decisions (similar applications receive similar scrutiny), and learning culture (incidents drive improvements not blame)

8. **Apply MAP success indicators** recognizing effective context understanding through complete inventory (no surprise discoveries), clear documentation (anyone can explain purposes), stakeholder awareness (affected parties identified), risk visibility (leadership understands key risks), and living documentation (information stays current as systems change)

9. **Apply MEASURE success indicators** recognizing effective risk assessment through evidence-based discussions (referencing actual data), no surprises (detecting problems before incidents), continuous visibility (real-time performance understanding), meaningful metrics (numbers indicating actual risk levels), and assessment discipline (consistent testing not just when convenient)

10. **Apply MANAGE success indicators** recognizing effective risk management through actual risk reduction (identified risks decrease over time), timely action (issues don't linger unaddressed), clear decisions (documented reasoning), learning culture (incidents drive improvements), and prepared response (teams know what to do when problems occur)

---

## Function 1: GOVERN – Building the Foundation

### What GOVERN Means

GOVERN establishes the organizational foundation for AI risk management. It's about people, culture, policies, and accountability—the "soft" infrastructure that makes everything else possible.

Without GOVERN, the other functions happen sporadically or not at all. You might measure AI bias once because an engineer was curious, but without governance, it won't happen systematically or consistently.

### The GOVERN Categories

NIST organizes GOVERN into six categories:

#### 1.1 Legal and Regulatory Requirements

**What it means:** Understanding which laws, regulations, and standards apply to your AI activities.

**Key questions:**
- Which AI-related laws apply to our operations?
- What industry-specific regulations affect our AI use?
- Are there contractual obligations regarding AI?
- What standards (ISO, IEEE, etc.) are relevant?

*Example:* A bank identifies that its AI credit scoring is subject to the Equal Credit Opportunity Act, Fair Housing Act, state fair lending laws, and OCC guidance on model risk management. They create a regulatory mapping document and assign the compliance team to monitor for changes.

#### 1.2 Organizational Policies

**What it means:** Creating internal rules for AI development and use.

**Key questions:**
- Do we have an AI policy?
- Does it cover development, deployment, and procurement?
- How do we handle AI from vendors versus built in-house?
- What approvals are required before deploying AI?

*Example:* A healthcare system creates an AI Policy requiring: (1) ethics review for any clinical AI, (2) bias assessment before deployment, (3) human oversight for all diagnostic recommendations, (4) incident reporting within 24 hours of issues.

#### 1.3 Roles and Responsibilities

**What it means:** Defining who does what in AI risk management.

**Key questions:**
- Who is accountable for AI risks at the executive level?
- Who owns specific AI systems?
- Who conducts risk assessments?
- Who approves deployment decisions?

*Example:* A company assigns:
- Chief Technology Officer: Executive accountability
- AI Product Managers: System-level ownership
- Data Science Team: Technical risk assessment
- AI Ethics Board: Deployment approval for high-risk systems
- Legal Team: Regulatory compliance monitoring

#### 1.4 Risk Tolerance

**What it means:** Defining how much AI risk the organization will accept.

**Key questions:**
- What level of AI errors is acceptable?
- What bias thresholds are unacceptable?
- When would we halt an AI system?
- How do we balance AI benefits against risks?

*Example:* A hiring platform defines: "We will not deploy AI that shows more than 5% differential in recommendation rates between demographic groups when candidates have equivalent qualifications. Any detected bias above this threshold triggers immediate human review."

#### 1.5 Culture and Training

**What it means:** Building organizational awareness and capability for AI risk management.

**Key questions:**
- Do employees understand AI risks?
- Is AI ethics part of our training programs?
- Do we encourage reporting AI concerns?
- Is responsible AI part of performance evaluation?

*Example:* A tech company requires:
- Annual AI ethics training for all employees
- Specialized training for AI developers
- "AI concern" reporting channel with non-retaliation policy
- Responsible AI objectives in developer performance reviews

#### 1.6 Documentation and Communication

**What it means:** Recording decisions and sharing information about AI risks.

**Key questions:**
- How do we document AI risk decisions?
- Who needs to know about AI risks?
- How do we communicate with external stakeholders?
- What records do we keep and for how long?

*Example:* A financial services firm maintains:
- AI Risk Register (updated monthly)
- Deployment decision records (permanent retention)
- Board reports on AI risks (quarterly)
- External transparency report (annual publication)

### GOVERN Success Indicators

How do you know GOVERN is working?

- **Executive engagement:** Leaders actively discuss AI risks
- **Policy awareness:** Employees know AI policies exist and what they say
- **Clear accountability:** Every AI system has an identified owner
- **Consistent decisions:** Similar AI applications receive similar scrutiny
- **Learning culture:** AI incidents lead to improvements, not just blame

---

## Function 2: MAP – Understanding Your Context

### What MAP Means

MAP is about understanding—understanding your AI systems, their context, their stakeholders, and their potential impacts. You can't manage risks you don't know about, and you can't assess risks you don't understand.

MAP answers the question: "What are we dealing with here?"

### The MAP Categories

NIST organizes MAP into five categories:

#### 2.1 AI System Inventory

**What it means:** Knowing what AI you have.

**Key questions:**
- What AI systems do we develop, use, or procure?
- Where are AI components embedded (including in vendor products)?
- What is the current status of each system (development, deployed, retired)?
- What is the purpose of each system?

*Example inventory entry:*

| Field | Entry |
|-------|-------|
| System Name | Customer Churn Predictor |
| Type | Machine Learning Classification |
| Status | Production |
| Owner | Marketing Analytics Team |
| Purpose | Predict customer churn probability |
| Users | Customer Success Team |
| Deployment Date | March 2023 |
| Vendor/In-house | In-house |
| Data Sources | CRM, Usage Logs, Support Tickets |

#### 2.2 Intended Purpose and Use

**What it means:** Documenting what the AI is supposed to do and how.

**Key questions:**
- What problem does this AI solve?
- What decisions does it inform or make?
- Who uses the AI outputs?
- How are outputs meant to be used?
- What are explicit non-uses (things it shouldn't be used for)?

*Example:* A resume screening AI documents:
- **Purpose:** Identify candidates meeting minimum qualifications
- **Decision:** Flags resumes for human review (does not reject)
- **Users:** Recruiters in initial screening
- **Intended use:** First-pass filter to reduce manual review volume
- **Non-uses:** Should not be used for final hiring decisions, performance evaluation, or promotion decisions

#### 2.3 Stakeholder Analysis

**What it means:** Identifying everyone affected by the AI.

**Key questions:**
- Who directly uses the AI?
- Whose data trains or feeds the AI?
- Who is affected by AI decisions?
- Who might be harmed if the AI fails?
- Are there vulnerable populations affected?

*Example stakeholder map:*

| Stakeholder | Relationship | Potential Impact |
|-------------|--------------|------------------|
| Recruiters | Direct users | Efficiency, workload |
| Job applicants | Affected by decisions | Employment opportunity |
| Hiring managers | Use screened candidates | Candidate quality |
| HR leadership | Accountable for process | Legal/reputational risk |
| Rejected applicants | Excluded by AI | Missed opportunities |
| Diverse candidates | Potentially disadvantaged | Discrimination risk |

#### 2.4 Context of Use

**What it means:** Understanding the environment where AI operates.

**Key questions:**
- What environment will the AI operate in?
- What other systems does it interact with?
- What human processes surround it?
- What are the real-world conditions (vs. lab conditions)?

*Example:* A factory AI that monitors equipment health must account for:
- Environmental conditions (temperature, humidity, dust)
- Equipment variations across factory locations
- Operator behavior and override patterns
- Integration with maintenance scheduling systems
- Network reliability for real-time monitoring

#### 2.5 Risks and Benefits Assessment

**What it means:** Initial identification of what could go right and wrong.

**Key questions:**
- What benefits does this AI provide?
- What could go wrong?
- Who would be harmed if it fails?
- How severe could harms be?
- How likely are various failure modes?

*Example risk-benefit analysis:*

| Benefits | Risks |
|----------|-------|
| 70% reduction in screening time | May miss qualified candidates |
| Consistent application of criteria | May encode historical bias |
| Faster time-to-hire | Legal exposure for discrimination |
| Reduced recruiter fatigue | Over-reliance reducing human judgment |

### MAP Success Indicators

How do you know MAP is working?

- **Complete inventory:** No surprise AI systems discovered
- **Clear documentation:** Any team member can explain an AI's purpose
- **Stakeholder awareness:** Affected parties are identified and considered
- **Risk visibility:** Leadership understands key AI risks
- **Living documentation:** Information stays current as systems change

---

## Function 3: MEASURE – Assessing and Tracking Risks

### What MEASURE Means

MEASURE is about putting evidence behind your understanding. MAP gives you an initial view of risks; MEASURE tells you whether those risks are actually materializing and how severe they are.

MEASURE answers the question: "What do we actually know about these risks?"

### The MEASURE Categories

NIST organizes MEASURE into four categories:

#### 3.1 Risk Assessment Approaches

**What it means:** Having methods to evaluate AI risks.

**Key questions:**
- How do we assess AI risks systematically?
- What metrics and methods do we use?
- How do we handle uncertainty?
- When do we conduct assessments (before deployment, ongoing, after incidents)?

*Example assessment framework:*

| Phase | Assessment Type | Frequency |
|-------|-----------------|-----------|
| Pre-development | Use case risk classification | Once |
| Development | Data quality and bias review | Each data update |
| Pre-deployment | Comprehensive testing | Before each release |
| Production | Performance monitoring | Continuous |
| Periodic | Full audit | Annually |
| Triggered | Incident investigation | As needed |

#### 3.2 Bias and Fairness Assessment

**What it means:** Specifically testing for unfair or discriminatory outcomes.

**Key questions:**
- How do we define fairness for this AI?
- What fairness metrics apply?
- How do we test for bias?
- What thresholds are unacceptable?
- How do we handle tensions between different fairness definitions?

*Example:* A credit decisioning AI tests for:
- **Demographic parity:** Approval rates similar across groups
- **Equal opportunity:** True positive rates similar across groups
- **Predictive parity:** Precision similar across groups
- **Individual fairness:** Similar applicants treated similarly

Testing protocol:
1. Run model on held-out test set with demographic labels
2. Calculate fairness metrics by group
3. Compare against defined thresholds
4. If violations found, document and escalate
5. Retest after any model changes

#### 3.3 Security and Privacy Assessment

**What it means:** Evaluating security vulnerabilities and privacy risks.

**Key questions:**
- Can the AI be attacked or manipulated?
- Is training data adequately protected?
- Could the AI leak sensitive information?
- Are there privacy risks from AI inferences?

*Example security assessment:*

| Threat | Test | Finding |
|--------|------|---------|
| Adversarial inputs | Input perturbation testing | Minor vulnerability |
| Model extraction | Query pattern analysis | Not vulnerable |
| Training data leakage | Membership inference testing | Low risk |
| Prompt injection | Injection attempt library | Moderate risk |

#### 3.4 Ongoing Monitoring

**What it means:** Tracking AI performance and risks in production.

**Key questions:**
- How do we detect when AI performance degrades?
- What metrics do we track?
- How do we identify emerging risks?
- What triggers deeper investigation?

*Example monitoring dashboard:*

**Tracked Metrics:**
- Prediction accuracy (target: >95%)
- Inference latency (target: <100ms)
- Demographic parity ratio (target: >0.8)
- User override rate (baseline for comparison)
- Error rate by category (anomaly detection)
- Data drift indicators (statistical tests)

**Alert Thresholds:**
- Accuracy drops below 90%: Yellow alert
- Accuracy drops below 85%: Red alert, immediate review
- Demographic parity ratio below 0.6: Immediate review
- User override rate increases 20%: Investigation triggered

### MEASURE Success Indicators

How do you know MEASURE is working?

- **Evidence-based discussions:** Decisions reference actual data
- **No surprises:** Problems detected before they become incidents
- **Continuous visibility:** Real-time understanding of AI performance
- **Meaningful metrics:** Numbers that actually indicate risk levels
- **Assessment discipline:** Testing happens consistently, not just when convenient

---

## Function 4: MANAGE – Taking Action on Risks

### What MANAGE Means

MANAGE is about action—doing something with what you've learned from MAP and MEASURE. Identifying and measuring risks is pointless if nothing changes as a result.

MANAGE answers the question: "What are we going to do about it?"

### The MANAGE Categories

NIST organizes MANAGE into four categories:

#### 4.1 Risk Prioritization

**What it means:** Deciding which risks to address first.

**Key questions:**
- Which risks are most severe?
- Which are most likely to materialize?
- What are the costs of addressing each risk?
- How do we allocate limited resources?

*Example prioritization matrix:*

| Risk | Severity | Likelihood | Priority |
|------|----------|------------|----------|
| Discriminatory hiring decisions | High | Medium | Critical |
| Slow response time | Low | High | Low |
| Security breach exposing training data | High | Low | Medium |
| Inaccurate predictions under new conditions | Medium | High | High |

Priority determination: Severity × Likelihood, adjusted for reputational and legal factors

#### 4.2 Risk Treatment

**What it means:** Implementing controls to address risks.

**Key questions:**
- What controls can reduce this risk?
- Should we accept, mitigate, transfer, or avoid the risk?
- How do we verify controls are effective?
- What residual risk remains?

*Risk treatment options:*

| Option | Description | Example |
|--------|-------------|---------|
| Accept | Proceed with risk as-is | Low-risk AI with minor issues |
| Mitigate | Reduce likelihood or impact | Add human review for edge cases |
| Transfer | Shift risk to another party | Insurance, contractual allocation |
| Avoid | Don't proceed with risky activity | Cancel deployment of problematic AI |

#### 4.3 Documentation and Communication

**What it means:** Recording decisions and sharing appropriately.

**Key questions:**
- How do we document risk decisions?
- Who needs to know about risk status?
- How do we communicate externally (regulators, affected parties)?
- What records support legal defensibility?

*Example documentation:*

**Risk Decision Record:**
- Date: October 15, 2024
- AI System: Customer Churn Predictor
- Risk Identified: Model accuracy degraded 8% over 3 months
- Root Cause: Customer behavior shift during economic change
- Decision: Retrain model with recent 6-month data
- Rationale: Cost of inaccuracy exceeds retraining cost
- Approved by: VP Analytics
- Timeline: Complete by November 1
- Verification: Post-retraining accuracy assessment

#### 4.4 Response and Recovery

**What it means:** Handling incidents and learning from them.

**Key questions:**
- How do we respond when AI causes harm?
- What's our escalation process?
- How do we recover from AI failures?
- How do we learn from incidents?

*Example incident response plan:*

**Incident Severity Levels:**

| Level | Definition | Response Time | Example |
|-------|------------|---------------|---------|
| Critical | Immediate harm, legal exposure | 1 hour | Discriminatory decisions discovered |
| High | Significant impact on users | 4 hours | AI making wrong recommendations |
| Medium | Degraded performance | 24 hours | Accuracy below threshold |
| Low | Minor issues | 72 hours | Slight latency increase |

**Response Steps:**
1. Detect and confirm incident
2. Classify severity level
3. Assemble response team
4. Contain impact (may include halting AI)
5. Investigate root cause
6. Implement remediation
7. Communicate to stakeholders
8. Conduct post-incident review
9. Update controls and procedures

### MANAGE Success Indicators

How do you know MANAGE is working?

- **Risk reduction:** Identified risks actually decrease over time
- **Timely action:** Issues don't linger unaddressed
- **Clear decisions:** Records show what was decided and why
- **Learning culture:** Incidents lead to improvements
- **Prepared response:** Team knows what to do when problems occur

---

## How the Functions Work Together

The four functions aren't linear steps—they're an ongoing cycle:

### Continuous Integration

**GOVERN → All Functions**
- Governance decisions shape how you map, measure, and manage
- Risk tolerance from GOVERN informs MEASURE thresholds
- Policies from GOVERN determine MANAGE actions

**MAP → MEASURE**
- What you identify in MAP determines what you measure
- Stakeholder analysis informs what fairness means
- Context understanding shapes monitoring approaches

**MEASURE → MANAGE**
- Measurement results drive management priorities
- Monitoring triggers management actions
- Evidence from MEASURE informs GOVERN updates

**MANAGE → GOVERN**
- Lessons from managing risks improve governance
- Incident patterns reveal policy gaps
- Effectiveness data informs resource allocation

### Practical Cycle Example

1. **GOVERN:** Bank establishes policy requiring bias assessment for lending AI
2. **MAP:** Team inventories lending AI and identifies affected populations
3. **MEASURE:** Analysis reveals 12% higher rejection rate for certain zip codes
4. **MANAGE:** Team implements additional review, investigates root cause
5. **GOVERN (update):** Policy revised to require geographic fairness testing
6. **MAP (update):** Documentation updated with new stakeholder concerns
7. **MEASURE (update):** Monitoring expanded to include geographic metrics
8. **Continue...**

---

## Getting Started: Function by Function

If you're implementing the AI RMF, here's a practical sequence:

### Month 1-2: GOVERN Foundation

- Assign executive accountability
- Create or update AI policy
- Establish AI governance committee
- Define risk tolerance statements
- Begin training planning

### Month 2-3: MAP Your AI

- Conduct AI inventory
- Document purposes and stakeholders
- Assess initial risks for each system
- Prioritize systems for deeper assessment

### Month 3-4: Establish MEASURE Capabilities

- Define assessment methodologies
- Establish baseline metrics
- Implement monitoring for priority systems
- Conduct initial bias and fairness assessments

### Month 4+: Activate MANAGE and Iterate

- Address identified risks
- Establish incident response procedures
- Document and communicate
- Review and improve continuously

---

## Conclusion

The four NIST AI RMF functions—Govern, Map, Measure, Manage—provide a complete framework for AI risk management. Each function serves a distinct purpose:

- **GOVERN** creates the foundation (people, policies, culture)
- **MAP** builds understanding (inventory, context, stakeholders)
- **MEASURE** generates evidence (testing, monitoring, assessment)
- **MANAGE** drives action (treatment, response, learning)

Together, they form a continuous cycle of improvement. Skip one, and the others suffer. Implement all four, and you have a robust AI risk management program.

The key insight: this isn't a one-time exercise. AI systems change, contexts evolve, and risks shift. The four functions keep working together as your AI portfolio grows and matures.

Start where you are, use what you have, do what you can. Even partial implementation of these functions is better than none. And as you build capability in each area, the connections between them will become clearer and more powerful.

---

## Sources and Further Reading

1. **NIST AI Risk Management Framework (AI RMF 1.0)** - Complete framework with all functions detailed. Available at: nist.gov/itl/ai-risk-management-framework

2. **NIST AI RMF Playbook** - Suggested actions for each subcategory. Available at: airc.nist.gov/AI_RMF_Knowledge_Base/Playbook

3. **NIST AI RMF Profiles** - Guidance on creating organizational profiles. Available at: airc.nist.gov

4. **GOVERN Function Deep Dive** - NIST resources on governance. Available at: airc.nist.gov/AI_RMF_Knowledge_Base/AI_RMF/Core_And_Profiles/Govern

5. **MAP Function Resources** - NIST guidance on context and mapping. Available at: airc.nist.gov/AI_RMF_Knowledge_Base/AI_RMF/Core_And_Profiles/Map

6. **MEASURE Function Resources** - NIST guidance on assessment. Available at: airc.nist.gov/AI_RMF_Knowledge_Base/AI_RMF/Core_And_Profiles/Measure

7. **MANAGE Function Resources** - NIST guidance on risk treatment. Available at: airc.nist.gov/AI_RMF_Knowledge_Base/AI_RMF/Core_And_Profiles/Manage

8. **NIST SP 1270** - Bias in AI publication. Available at: nist.gov/publications

9. **ISO/IEC 23894:2023** - Related international standard on AI risk management. Available at: iso.org

10. **Model Risk Management (OCC 2011-12)** - Banking guidance that complements AI RMF. Available at: occ.gov

---

*This article is part of the AI Governance Implementation Program. Next article: "ISO/IEC 42001: AI Management System Standard" explores the international standard for AI management systems.*

*For comprehensive AI risk management guidance, visit AIDefence or the AIDefence YouTube channel.*