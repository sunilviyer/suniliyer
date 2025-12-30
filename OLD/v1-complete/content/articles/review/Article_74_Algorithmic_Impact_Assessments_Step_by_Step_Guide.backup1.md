# Article 74: Algorithmic Impact Assessments – A Step-by-Step Guide

## TL;DR

An Algorithmic Impact Assessment (AIA) is a structured process for evaluating how an AI or algorithmic system might affect people before you deploy it. Think of it like an environmental impact assessment, but for algorithms. AIAs help you identify potential harms (bias, privacy violations, safety issues), assess their severity, and plan mitigations. They're increasingly required by law (Canada's proposed AIDA, NYC Local Law 144 for hiring AI) and expected as best practice. This guide walks you through conducting an AIA step-by-step, with templates and examples you can use immediately.

---

## Introduction

Before a company builds a factory, they conduct an environmental impact assessment. Before a drug goes to market, there are clinical trials. Before a building goes up, there are safety inspections.

But what about before an algorithm starts making decisions about people's lives?

For too long, the answer was: nothing much. Companies deployed algorithms affecting loans, jobs, healthcare, and criminal justice with minimal structured assessment of potential impacts.

That's changing.

Algorithmic Impact Assessments (AIAs) are becoming a standard practice—and increasingly, a legal requirement. Canada's proposed AI law (AIDA) requires impact assessments for high-impact AI systems. NYC's Local Law 144 requires bias audits for hiring algorithms. The EU AI Act requires risk assessments for high-risk AI.

An AIA forces you to think carefully about what could go wrong before it goes wrong. It documents your thinking, demonstrates due diligence, and often surfaces issues that would otherwise be discovered only after harm occurs.

This article provides a practical, step-by-step guide to conducting AIAs, with templates you can adapt for your own use.

---

## What Is an Algorithmic Impact Assessment?

### Definition

An Algorithmic Impact Assessment is a systematic evaluation of an algorithmic system's potential impacts on individuals, groups, and society, conducted before and during the system's deployment.

### Key Characteristics

**Prospective:** Conducted before deployment (though ongoing assessment continues after)

**Systematic:** Follows a structured methodology, not ad-hoc review

**Documented:** Creates a record of assessment and decisions

**Actionable:** Leads to changes in design, deployment, or monitoring

**Stakeholder-informed:** Incorporates perspectives of affected parties

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
| Algorithmic Impact Assessment | All algorithmic impacts | Pre-deployment + ongoing |
| Bias Audit | Fairness and discrimination | Pre-deployment + periodic |
| Data Protection Impact Assessment (DPIA) | Privacy and data protection | Before processing begins |
| Model Risk Assessment | Model accuracy and reliability | Development + deployment |

AIAs often incorporate elements of these other assessments into a comprehensive evaluation.

---

## When to Conduct an AIA

### Legal Requirements

Some jurisdictions now require AIAs or similar assessments:

**Canada (Proposed AIDA):**
- Required for "high-impact" AI systems
- Must assess risks and mitigation measures
- Record-keeping requirements

**New York City (Local Law 144):**
- Required bias audits for automated employment decision tools
- Annual audit by independent auditor
- Public disclosure of results

**EU AI Act:**
- Risk assessment required for high-risk AI
- Part of conformity assessment process
- Ongoing monitoring requirements

### Best Practice Triggers

Even without legal requirements, conduct AIAs when:

- The algorithm affects significant decisions about people
- Decisions are difficult to reverse
- Vulnerable populations are affected
- The algorithm operates at scale
- There's potential for discrimination
- The algorithm replaces human judgment

### The Risk-Based Approach

Not every algorithm needs the same level of assessment. Match assessment depth to risk level:

| Risk Level | Examples | Assessment Depth |
|------------|----------|------------------|
| High | Hiring, credit, healthcare | Full AIA with external review |
| Medium | Customer service routing, recommendations | Standard AIA, internal review |
| Low | Spam filtering, autocomplete | Abbreviated assessment |
| Minimal | Internal analytics, A/B testing | Brief documentation |

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
System Description: Analyzes job applications and scores 
candidates based on predicted fit for the role
Decision Type: Informs which candidates advance to interview
Deployment Context: Used by HR for all entry-level tech positions
Users: Recruiting team (5 people)
Affected Parties: Job applicants (~5,000/year)
Data Inputs: Resume text, job description
Outputs: Fit score (0-100), ranking, recommendation
```

### Step 2: Stakeholder Identification

**Objective:** Identify everyone who has a stake in the system.

**Stakeholder Categories:**

| Category | Description | Examples |
|----------|-------------|----------|
| Direct users | People who operate the system | Recruiters, loan officers |
| Decision subjects | People decisions are made about | Applicants, customers |
| Affected third parties | Others impacted indirectly | Families, communities |
| Operators | Organization deploying the system | Your company |
| Developers | Those who built the system | Internal team, vendors |
| Regulators | Oversight bodies | Government agencies |
| Advocates | Groups representing affected parties | Civil rights organizations |

**Engagement Approach:**

For high-risk systems, actively engage stakeholders:
- Interview representatives of affected groups
- Consult with advocacy organizations
- Seek input from domain experts
- Consider public consultation for very high-impact systems

**Example:**

For the resume screening AI:
- Recruiters: Interview to understand workflow and concerns
- Job applicants: Survey sample about expectations and concerns
- HR leadership: Briefing on risks and governance
- Legal/compliance: Review for legal requirements
- Diversity & inclusion team: Input on fairness concerns
- External: Consider input from job seeker advocacy groups

### Step 3: Impact Identification

**Objective:** Systematically identify potential positive and negative impacts.

**Impact Categories:**

**Individual Impacts:**
- Economic (employment, credit, benefits)
- Physical (health, safety)
- Psychological (dignity, stress, autonomy)
- Privacy (data exposure, surveillance)
- Access (services, opportunities)

**Group Impacts:**
- Discrimination against protected groups
- Differential treatment of communities
- Amplification of existing inequalities

**Societal Impacts:**
- Effects on democratic participation
- Impact on social institutions
- Environmental considerations
- Market effects

**Identification Methods:**

1. **Brainstorming:** Team identifies potential impacts
2. **Checklists:** Use standard impact categories
3. **Scenario analysis:** "What if X goes wrong?"
4. **Historical analysis:** What happened with similar systems?
5. **Stakeholder input:** What do affected parties worry about?

**Example Impact Identification:**

Resume Screening AI - Potential Impacts:

| Impact | Description | Affected Party |
|--------|-------------|----------------|
| Employment discrimination | May disadvantage protected groups | Diverse applicants |
| Privacy concerns | Processing of personal data | All applicants |
| Reduced human judgment | Qualified candidates missed | Applicants, company |
| Efficiency gains | Faster screening process | Recruiting team |
| Consistency | More uniform evaluation | All applicants |
| Explanation challenges | Hard to explain rejections | Rejected applicants |

### Step 4: Impact Analysis

**Objective:** Assess the likelihood and severity of identified impacts.

**Analysis Framework:**

For each identified impact, assess:

**Likelihood:** How probable is this impact?
- High: Likely to occur
- Medium: Could occur under certain conditions
- Low: Unlikely but possible

**Severity:** How serious would the impact be?
- High: Significant harm, difficult to reverse
- Medium: Moderate harm, reversible with effort
- Low: Minor harm, easily reversible

**Scope:** How many people could be affected?
- Wide: Thousands or more
- Moderate: Hundreds
- Limited: Dozens or fewer

**Vulnerability:** Are particularly vulnerable groups affected?
- High: Affects vulnerable populations directly
- Medium: May affect vulnerable populations
- Low: General population only

**Combined Risk Rating:**

| Likelihood | Severity | Risk Level |
|------------|----------|------------|
| High | High | Critical |
| High | Medium | High |
| Medium | High | High |
| High | Low | Medium |
| Medium | Medium | Medium |
| Low | High | Medium |
| Medium | Low | Low |
| Low | Medium | Low |
| Low | Low | Low |

**Example Analysis:**

Resume Screening AI - Impact Analysis:

| Impact | Likelihood | Severity | Scope | Risk Level |
|--------|------------|----------|-------|------------|
| Gender discrimination | Medium | High | Wide | High |
| Age discrimination | Medium | High | Wide | High |
| Racial bias | Medium | High | Wide | High |
| Privacy concerns | Low | Medium | Wide | Medium |
| Missing good candidates | Medium | Medium | Moderate | Medium |
| Lack of explanation | High | Low | Wide | Medium |

### Step 5: Fairness Deep Dive

**Objective:** Specifically assess bias and discrimination risks.

**Fairness Analysis Questions:**

**Training Data:**
- Is the training data representative of all groups?
- Does historical data encode past discrimination?
- Are there gaps in data for certain populations?

**Features and Proxies:**
- Are protected characteristics used directly?
- Are there proxy variables that correlate with protected characteristics?
- Are features validated as job-relevant (for hiring AI)?

**Outcomes:**
- Are outcomes (selection rates, scores) similar across groups?
- Are error rates similar across groups?
- Do certain groups face more false negatives or false positives?

**Fairness Metrics to Consider:**

| Metric | What It Measures | Example Threshold |
|--------|------------------|-------------------|
| Demographic parity | Equal selection rates across groups | 80% rule (4/5 ratio) |
| Equal opportunity | Equal true positive rates | <5% difference |
| Predictive parity | Equal precision across groups | <5% difference |
| Individual fairness | Similar individuals treated similarly | Case-by-case |

**Example Fairness Analysis:**

Resume Screening AI - Fairness Assessment:

Testing on historical data with demographic labels:

| Group | Selection Rate | Pass/Fail Ratio |
|-------|---------------|-----------------|
| Men | 35% | Baseline |
| Women | 28% | 80% of baseline ⚠️ |
| Under 40 | 38% | Baseline |
| Over 40 | 22% | 58% of baseline ❌ |
| White | 34% | Baseline |
| Asian | 32% | 94% of baseline ✓ |
| Black | 26% | 76% of baseline ❌ |
| Hispanic | 29% | 85% of baseline ⚠️ |

Findings: Significant disparate impact by age and race. Gender disparity at threshold. Requires mitigation.

### Step 6: Mitigation Planning

**Objective:** Develop strategies to address identified risks.

**Mitigation Hierarchy:**

1. **Avoid:** Don't use the algorithm for this purpose
2. **Replace:** Use a less risky alternative approach
3. **Modify:** Change the algorithm to reduce risk
4. **Control:** Add safeguards around the algorithm
5. **Accept:** Document acceptance of residual risk

**Mitigation Strategies by Risk Type:**

**Bias/Discrimination:**
- Audit and adjust training data
- Remove or constrain problematic features
- Apply fairness constraints in training
- Implement disparate impact testing
- Add human review for affected groups

**Privacy:**
- Minimize data collection
- Implement anonymization/pseudonymization
- Apply differential privacy
- Limit data retention

**Transparency:**
- Develop explanation capabilities
- Create disclosure notices
- Provide decision factors to affected parties

**Accountability:**
- Define clear responsibility
- Create audit trails
- Establish appeal processes

**Example Mitigation Plan:**

Resume Screening AI - Mitigation Actions:

| Risk | Mitigation | Priority | Owner |
|------|------------|----------|-------|
| Age discrimination | Remove graduation year; retrain model | Critical | Data Science |
| Racial bias | Audit training data; add fairness constraint | Critical | Data Science |
| Gender disparity | Analyze feature importance; adjust | High | Data Science |
| Lack of explanation | Develop SHAP-based explanations | Medium | Engineering |
| All | Add human review for all rejections | High | HR Ops |
| All | Quarterly bias monitoring | High | Analytics |

### Step 7: Documentation and Approval

**Objective:** Record the assessment and obtain appropriate sign-off.

**AIA Report Structure:**

1. **Executive Summary**
   - System overview
   - Key findings
   - Risk level determination
   - Recommendation (proceed/modify/halt)

2. **System Description**
   - Detailed system documentation
   - Stakeholder analysis
   - Deployment context

3. **Impact Assessment**
   - Identified impacts
   - Analysis results
   - Fairness assessment findings

4. **Mitigation Plan**
   - Planned mitigations
   - Residual risks
   - Implementation timeline

5. **Recommendations**
   - Go/no-go recommendation
   - Conditions for deployment
   - Monitoring requirements

6. **Approval Record**
   - Review signatures
   - Approval date
   - Conditions attached

**Approval Levels:**

| Risk Level | Approval Required |
|------------|-------------------|
| Critical | Executive/Board level |
| High | Senior management |
| Medium | Department head |
| Low | Team lead |

### Step 8: Ongoing Monitoring

**Objective:** Continue assessment after deployment.

**Monitoring Elements:**

**Performance Monitoring:**
- Track accuracy/effectiveness metrics
- Detect performance degradation
- Identify drift from baseline

**Fairness Monitoring:**
- Ongoing disparate impact analysis
- Regular bias audits
- Trend analysis across groups

**Incident Tracking:**
- Log complaints and concerns
- Track system errors
- Document remediation actions

**Review Triggers:**

Reassess the AIA when:
- Significant system changes (retraining, new features)
- Material changes in use context
- Incidents or complaints
- Regulatory changes
- Periodic review threshold (e.g., annual)

**Example Monitoring Plan:**

Resume Screening AI - Ongoing Monitoring:

| Metric | Frequency | Threshold | Action if Exceeded |
|--------|-----------|-----------|-------------------|
| Overall selection rate | Weekly | <20% or >50% | Investigation |
| Demographic parity ratios | Monthly | <80% | Immediate review |
| Complaint rate | Monthly | >0.5% | Investigation |
| User override rate | Monthly | >30% | System review |
| Full bias audit | Quarterly | Any significant disparity | Remediation |

---

## AIA Templates

### Abbreviated AIA Template (Low-Risk Systems)

```
ABBREVIATED ALGORITHMIC IMPACT ASSESSMENT

System: [Name]
Date: [Date]
Assessor: [Name]

1. SYSTEM OVERVIEW
   - Purpose: [One paragraph]
   - Users: [List]
   - Affected parties: [List]

2. RISK CLASSIFICATION
   - Decision type: [Consequential/Routine/Informational]
   - Scope: [Number affected]
   - Reversibility: [Easy/Moderate/Difficult]
   - Overall risk level: [Low/Medium]

3. KEY RISKS IDENTIFIED
   - [Risk 1]: [Low/Medium] - [Mitigation]
   - [Risk 2]: [Low/Medium] - [Mitigation]

4. FAIRNESS CONSIDERATION
   - Protected groups affected: [Yes/No]
   - Fairness testing conducted: [Yes/No]
   - Findings: [Brief summary]

5. RECOMMENDATION
   [Proceed/Proceed with conditions/Further review needed]

Approved by: [Name/Role/Date]
```

### Standard AIA Template (Medium-Risk Systems)

```
ALGORITHMIC IMPACT ASSESSMENT

Part 1: System Identification
- System name:
- Version:
- Assessment date:
- Lead assessor:
- System owner:

Part 2: System Description
- Purpose and function:
- Technical overview:
- Data inputs:
- Outputs and decisions:
- Deployment context:
- Integration with other systems:

Part 3: Stakeholder Analysis
- Direct users: [List and characterize]
- Decision subjects: [List and characterize]
- Other affected parties: [List and characterize]
- Stakeholder engagement conducted: [Describe]

Part 4: Impact Identification
[Table of identified impacts - positive and negative]

Part 5: Impact Analysis
[Table with likelihood, severity, scope for each impact]

Part 6: Fairness Assessment
- Protected characteristics potentially affected:
- Fairness testing methodology:
- Fairness testing results:
- Disparate impact analysis:

Part 7: Mitigation Plan
[Table of risks and mitigations]

Part 8: Residual Risk
- Risks remaining after mitigation:
- Justification for accepting residual risk:

Part 9: Monitoring Plan
- Ongoing monitoring metrics:
- Review schedule:
- Escalation procedures:

Part 10: Recommendations and Approval
- Recommendation: [Proceed/Modify/Halt]
- Conditions:
- Approvals:
  - [Role]: [Name] [Date]
  - [Role]: [Name] [Date]
```

---

## Common Pitfalls and How to Avoid Them

### Pitfall 1: Treating AIAs as Checkbox Exercises

**Problem:** Going through motions without genuine analysis.

**Solution:** Require substantive findings and specific mitigations. If an AIA finds nothing, be skeptical—dig deeper.

### Pitfall 2: Conducting AIAs Too Late

**Problem:** Assessing after the system is built, when changes are costly.

**Solution:** Begin AIA during design phase. Update as development proceeds.

### Pitfall 3: Ignoring Stakeholder Perspectives

**Problem:** Technical teams assess impacts without input from affected parties.

**Solution:** Actively engage representatives of affected groups, especially for high-risk systems.

### Pitfall 4: Inadequate Fairness Testing

**Problem:** Not testing for bias, or testing only superficially.

**Solution:** Require quantitative fairness testing with documented methodology and thresholds.

### Pitfall 5: No Ongoing Monitoring

**Problem:** One-time assessment without continued vigilance.

**Solution:** Build ongoing monitoring into deployment requirements. Schedule periodic reassessment.

---

## Conclusion

Algorithmic Impact Assessments are becoming essential practice for responsible AI deployment. They transform vague commitments to "responsible AI" into concrete, documented analysis and action.

Key takeaways:

1. **Start early:** Begin assessment during design, not after deployment.

2. **Be systematic:** Use a structured methodology, not ad-hoc review.

3. **Go deep on fairness:** Quantitative testing is essential for high-risk systems.

4. **Involve stakeholders:** Affected parties offer insights technical teams may miss.

5. **Plan mitigations:** Identifying risks is pointless without action plans.

6. **Document thoroughly:** Create records that demonstrate due diligence.

7. **Monitor continuously:** Assessment doesn't end at deployment.

AIAs require effort, but they pay dividends. They surface problems before they become incidents. They create defensible records of responsible practice. And increasingly, they're required by law.

Whether you're legally required to conduct AIAs or not, the underlying question is the same: Have you thought carefully about how your algorithm might affect people? An AIA ensures the answer is yes.

---

## Sources and Further Reading

1. **Canada Algorithmic Impact Assessment Tool** - Government of Canada's AIA tool for federal AI use. Available at: canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html

2. **NYC Local Law 144** - Bias audit requirements for employment AI. Available at: rules.cityofnewyork.us

3. **AI Now Institute** - Algorithmic impact assessment research and frameworks. Available at: ainowinstitute.org

4. **NIST AI RMF** - Risk assessment guidance. Available at: nist.gov/itl/ai-risk-management-framework

5. **EU AI Act** - Risk assessment requirements for high-risk AI. Available at: eur-lex.europa.eu

6. **Ada Lovelace Institute** - Algorithmic impact assessment in healthcare. Available at: adalovelaceinstitute.org

7. **World Economic Forum** - AI governance and impact assessment. Available at: weforum.org

8. **Reisman, Schultz, Crawford, Whittaker** - "Algorithmic Impact Assessments: A Practical Framework for Public Agency Accountability" (2018). AI Now Institute.

9. **Selbst, Boyd, Friedler, Venkatasubramanian, Vertesi** - "Fairness and Abstraction in Sociotechnical Systems" (2019). FAT* Conference.

10. **Metcalf, Moss, Boyd** - "Owning Ethics: Corporate Logics, Silicon Valley, and the Institutionalization of Ethics" (2019). Social Research.

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
