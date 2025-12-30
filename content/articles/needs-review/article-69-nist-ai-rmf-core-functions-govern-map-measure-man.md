---
title: 'Article 69: NIST AI RMF Core Functions – Govern, Map, Measure, Manage'
tldr: ''
category: Risk Frameworks & Standards
learning_objectives:
- Understand the key concepts and principles of risk assessment methodologies
- Implement regulatory requirements in real-world scenarios
- Evaluate stakeholder engagement for organizational compliance
seo_keywords:
- article
- nist
- AI governance
- AI ethics
- AI risk management
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: framework diagram, interconnected standards, quality assurance symbols,
    certification badges, structured framework diagram, building blocks, architectural
    blueprint, professional illustration, modern flat design style, clean and authoritative,
    high quality, blue and gray color scheme with accent colors, suitable for professional
    article header
- type: table
  label: Field vs Entry Table
  section: 2.1 AI System Inventory
  id: table-21-ai-system-inventory
- type: table
  label: Stakeholder vs Relationship Table
  section: 2.3 Stakeholder Analysis
  id: table-23-stakeholder-analysis
- type: table
  label: Benefits vs Risks Table
  section: 2.5 Risks and Benefits Assessment
  id: table-25-risks-and-benefits-assessment
- type: table
  label: Phase vs Assessment Type Table
  section: 3.1 Risk Assessment Approaches
  id: table-31-risk-assessment-approaches
- type: table
  label: Threat vs Test Table
  section: 3.3 Security and Privacy Assessment
  id: table-33-security-and-privacy-assessment
- type: table
  label: Risk vs Severity Table
  section: 4.1 Risk Prioritization
  id: table-41-risk-prioritization
- type: table
  label: Option vs Description Table
  section: 4.2 Risk Treatment
  id: table-42-risk-treatment
- type: table
  label: Risk vs Treatment Table
  section: 4.2 Risk Treatment
  id: table-42-risk-treatment
- type: table
  label: Level vs Definition Table
  section: 4.4 Response and Recovery
  id: table-44-response-and-recovery
- type: flowchart
  label: 3.2 Bias and Fairness Assessment Process
  section: 3.2 Bias and Fairness Assessment
  id: flowchart-32-bias-and-fairness-assessment
- type: flowchart
  label: 4.4 Response and Recovery Process
  section: 4.4 Response and Recovery
  id: flowchart-44-response-and-recovery
- type: flowchart
  label: Continuous Integration Process
  section: Continuous Integration
  id: flowchart-continuous-integration
- type: flowchart
  label: Practical Cycle Example Process
  section: Practical Cycle Example
  id: flowchart-practical-cycle-example
- type: flowchart
  label: Sources and Further Reading Process
  section: Sources and Further Reading
  id: flowchart-sources-and-further-reading
- type: template
  label: 'Practical example:'
  section: 1.1 Legal and Regulatory Requirements
  id: template-11-legal-and-regulatory-requirements
  template_link: /templates/practical-example.md
- type: template
  label: 'Practical example:'
  section: 1.2 Organizational Policies
  id: template-12-organizational-policies
  template_link: /templates/practical-example.md
- type: template
  label: 'Practical example:'
  section: 1.3 Roles and Responsibilities
  id: template-13-roles-and-responsibilities
  template_link: /templates/practical-example.md
- type: template
  label: 'Practical example:'
  section: 1.4 Risk Tolerance
  id: template-14-risk-tolerance
  template_link: /templates/practical-example.md
- type: template
  label: 'Practical example:'
  section: 1.5 Culture and Training
  id: template-15-culture-and-training
  template_link: /templates/practical-example.md
- type: template
  label: 'Practical example:'
  section: 1.6 Documentation and Communication
  id: template-16-documentation-and-communication
  template_link: /templates/practical-example.md
- type: template
  label: 'Practical example:'
  section: 2.2 Intended Purpose and Use
  id: template-22-intended-purpose-and-use
  template_link: /templates/practical-example.md
- type: template
  label: 'Practical example:'
  section: 2.4 Context of Use
  id: template-24-context-of-use
  template_link: /templates/practical-example.md
- type: list
  label: 1.1 Legal and Regulatory Requirements
  section: 1.1 Legal and Regulatory Requirements
  id: list-11-legal-and-regulatory-requirements
topic_fingerprint:
- machine learning
- accountability
- oversight
- risk assessment
- ai ethics
named_examples:
- fair
- iec
- ieee
- iso
- nist
- occ
word_count: 3030
processed_date: '2025-12-18T02:16:38.585Z'
---


## Function 1: GOVERN – Building the Foundation


### What GOVERN Means

GOVERN establishes the organizational foundation for AI risk management. It's about people, culture, policies, and accountability—the "soft" infrastructure that makes everything else possible.

Without GOVERN, the other functions happen sporadically or not at all. You might measure AI bias once because an engineer was curious, but without governance, it won't happen systematically or consistently.


### The GOVERN Categories

NIST organizes GOVERN into six categories:

<!-- component:list:list-11-legal-and-regulatory-requirements -->

#### 1.1 Legal and Regulatory Requirements

**What it means:** Understanding which laws, regulations, and standards apply to your AI activities.

**Key questions:**
- Which AI-related laws apply to our operations?
- What industry-specific regulations affect our AI use?
- Are there contractual obligations regarding AI?
- What standards (ISO, IEEE, etc.) are relevant?

<!-- component:template:template-11-legal-and-regulatory-requirements -->
**Practical example:** A bank identifies that its AI credit scoring is subject to the Equal Credit Opportunity Act, Fair Housing Act, state fair lending laws, and OCC guidance on model risk management. They create a regulatory mapping document and assign the compliance team to monitor for changes.


#### 1.2 Organizational Policies

**What it means:** Creating internal rules for AI development and use.

**Key questions:**
- Do we have an AI policy?
- Does it cover development, deployment, and procurement?
- How do we handle AI from vendors versus built in-house?
- What approvals are required before deploying AI?

<!-- component:template:template-12-organizational-policies -->
**Practical example:** A healthcare system creates an AI Policy requiring: (1) ethics review for any clinical AI, (2) bias assessment before deployment, (3) human oversight for all diagnostic recommendations, (4) incident reporting within 24 hours of issues.


#### 1.3 Roles and Responsibilities

**What it means:** Defining who does what in AI risk management.

**Key questions:**
- Who is accountable for AI risks at the executive level?
- Who owns specific AI systems?
- Who conducts risk assessments?
- Who approves deployment decisions?

<!-- component:template:template-13-roles-and-responsibilities -->
**Practical example:** A company assigns:
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

<!-- component:template:template-14-risk-tolerance -->
**Practical example:** A hiring platform defines: "We will not deploy AI that shows more than 5% differential in recommendation rates between demographic groups when candidates have equivalent qualifications. Any detected bias above this threshold triggers immediate human review."


#### 1.5 Culture and Training

**What it means:** Building organizational awareness and capability for AI risk management.

**Key questions:**
- Do employees understand AI risks?
- Is AI ethics part of our training programs?
- Do we encourage reporting AI concerns?
- Is responsible AI part of performance evaluation?

<!-- component:template:template-15-culture-and-training -->
**Practical example:** A tech company requires:
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

<!-- component:template:template-16-documentation-and-communication -->
**Practical example:** A financial services firm maintains:
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

**Practical example inventory entry:**

| Field | Entry |
<!-- component:table:table-21-ai-system-inventory -->
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

<!-- component:template:template-22-intended-purpose-and-use -->
**Practical example:** A resume screening AI documents:
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

**Practical example stakeholder map:**

| Stakeholder | Relationship | Potential Impact |
<!-- component:table:table-23-stakeholder-analysis -->
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

<!-- component:template:template-24-context-of-use -->
**Practical example:** A factory AI that monitors equipment health must account for:
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

**Practical example risk-benefit analysis:**

| Benefits | Risks |
<!-- component:table:table-25-risks-and-benefits-assessment -->
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

**Practical example assessment framework:**

| Phase | Assessment Type | Frequency |
<!-- component:table:table-31-risk-assessment-approaches -->
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

**Practical example bias testing:**

A credit decisioning AI tests for:
- **Demographic parity:** Approval rates similar across groups
- **Equal opportunity:** True positive rates similar across groups
- **Predictive parity:** Precision similar across groups
- **Individual fairness:** Similar applicants treated similarly

Testing protocol:
<!-- component:flowchart:flowchart-32-bias-and-fairness-assessment -->
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

**Practical example security assessment:**

| Threat | Test | Finding |
<!-- component:table:table-33-security-and-privacy-assessment -->
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

**Practical example monitoring dashboard:**

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

**Practical example prioritization matrix:**

| Risk | Severity | Likelihood | Priority |
<!-- component:table:table-41-risk-prioritization -->
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

**Risk treatment options:**

| Option | Description | Example |
<!-- component:table:table-42-risk-treatment -->
|--------|-------------|---------|
| Accept | Proceed with risk as-is | Low-risk AI with minor issues |
| Mitigate | Reduce likelihood or impact | Add human review for edge cases |
| Transfer | Shift risk to another party | Insurance, contractual allocation |
| Avoid | Don't proceed with risky activity | Cancel deployment of problematic AI |

**Practical example mitigation plan:**

| Risk | Treatment | Control | Owner | Deadline |
<!-- component:table:table-42-risk-treatment -->
|------|-----------|---------|-------|----------|
| Bias in hiring AI | Mitigate | Monthly bias testing | Data Science | Ongoing |
| | Mitigate | Human review of all rejections | HR Ops | Immediate |
| | Mitigate | Annual third-party audit | Compliance | Q4 |


#### 4.3 Documentation and Communication

**What it means:** Recording decisions and sharing appropriately.

**Key questions:**
- How do we document risk decisions?
- Who needs to know about risk status?
- How do we communicate externally (regulators, affected parties)?
- What records support legal defensibility?

**Practical example documentation:**

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

**Practical example incident response plan:**

**Incident Severity Levels:**

| Level | Definition | Response Time | Example |
<!-- component:table:table-44-response-and-recovery -->
|-------|------------|---------------|---------|
| Critical | Immediate harm, legal exposure | 1 hour | Discriminatory decisions discovered |
| High | Significant impact on users | 4 hours | AI making wrong recommendations |
| Medium | Degraded performance | 24 hours | Accuracy below threshold |
| Low | Minor issues | 72 hours | Slight latency increase |

**Response Steps:**
<!-- component:flowchart:flowchart-44-response-and-recovery -->
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

<!-- component:flowchart:flowchart-continuous-integration -->
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

<!-- component:flowchart:flowchart-sources-and-further-reading -->
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

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
