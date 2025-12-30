---
title: 'Article 75: AI Risk Assessment Templates – Tools for Practitioners'
tldr: ''
category: AI Risks & Principles
learning_objectives:
- Understand the key concepts and principles of ai governance frameworks
- Implement best practices in real-world scenarios
- Evaluate risk assessment frameworks for organizational compliance
seo_keywords:
- article
- risk
- AI governance
- AI risk management
- risk assessment templates
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: balanced composition showing risk and safety elements, warning symbols with
    protective shields, checklist, magnifying glass, inspection tools, quality badges,
    shield icons, warning triangles, protective barriers, safety nets, professional
    illustration, modern flat design style, clean and authoritative, high quality,
    blue and gray color scheme with accent colors, suitable for professional article
    header
- type: checklist
  label: 'Template 4: AI Bias Assessment Checklist'
  section: 'Template 4: AI Bias Assessment Checklist'
  id: checklist-template-4-ai-bias-assessment-checklist
- type: flowchart
  label: Customization Tips Process
  section: Customization Tips
  id: flowchart-customization-tips
- type: flowchart
  label: Sources and Further Reading Process
  section: Sources and Further Reading
  id: flowchart-sources-and-further-reading
- type: template
  label: 'Article 75: AI Risk Assessment Templates – Tools for Practitioners'
  section: 'Article 75: AI Risk Assessment Templates – Tools for Practitioners'
  id: template-article-75-ai-risk-assessment-templates-tools-for-practitioners
  template_link: /templates/article-75-ai-risk-assessment-templates-tools-for-practitioners.md
- type: template
  label: 'Template 1: AI System Initial Risk Screening'
  section: 'Template 1: AI System Initial Risk Screening'
  id: template-template-1-ai-system-initial-risk-screening
  template_link: /templates/template-1-ai-system-initial-risk-screening.md
- type: template
  label: Template
  section: Template
  id: template-template
  template_link: /templates/template.md
- type: template
  label: 'Template 2: Standard AI Risk Assessment'
  section: 'Template 2: Standard AI Risk Assessment'
  id: template-template-2-standard-ai-risk-assessment
  template_link: /templates/template-2-standard-ai-risk-assessment.md
- type: template
  label: 'Template 3: AI Risk Register'
  section: 'Template 3: AI Risk Register'
  id: template-template-3-ai-risk-register
  template_link: /templates/template-3-ai-risk-register.md
- type: template
  label: 'Template 4: AI Bias Assessment Checklist'
  section: 'Template 4: AI Bias Assessment Checklist'
  id: template-template-4-ai-bias-assessment-checklist
  template_link: /templates/template-4-ai-bias-assessment-checklist.md
- type: template
  label: 'Template 5: AI Incident Report'
  section: 'Template 5: AI Incident Report'
  id: template-template-5-ai-incident-report
  template_link: /templates/template-5-ai-incident-report.md
- type: template
  label: Using These Templates
  section: Using These Templates
  id: template-using-these-templates
  template_link: /templates/using-these-templates.md
topic_fingerprint:
- machine learning
- nlp
- computer vision
- risk assessment
- oversight
named_examples:
- energy
- eu ai act
- iso
- nist
word_count: 716
processed_date: '2025-12-18T02:16:45.461Z'
---

<!-- component:template:template-template-1-ai-system-initial-risk-screening -->

## Template 1: AI System Initial Risk Screening


### Purpose

Quick triage to determine what level of assessment an AI system needs. Use this first to prioritize assessment efforts.


### When to Use

- When a new AI system is proposed
- When an existing system is discovered in inventory
- When deciding resource allocation for assessments


### Time to Complete

15-30 minutes

<!-- component:template:template-template -->

### Template

```
═══════════════════════════════════════════════════════════════
AI SYSTEM INITIAL RISK SCREENING
═══════════════════════════════════════════════════════════════

SECTION A: SYSTEM IDENTIFICATION

System Name: _________________________________________________
System ID/Version: ___________________________________________
Date of Screening: ___________________________________________
Screener Name/Role: __________________________________________
System Owner: ________________________________________________

Brief Description (2-3 sentences):
______________________________________________________________
______________________________________________________________
______________________________________________________________

───────────────────────────────────────────────────────────────
SECTION B: QUICK RISK FACTORS
───────────────────────────────────────────────────────────────

Answer each question. Each "Yes" adds to risk level.

B1. Decision Impact
[ ] Does the system make or significantly influence decisions 
    about individuals? (employment, credit, healthcare, etc.)
[ ] Are decisions difficult or impossible to reverse?
[ ] Could wrong decisions cause financial harm >$1,000 to 
    individuals?
[ ] Could wrong decisions affect physical health or safety?

B2. Scale and Scope  
[ ] Will the system affect >1,000 people per year?
[ ] Will it be used for >6 months?
[ ] Will it operate without direct human oversight?
[ ] Does it operate across multiple jurisdictions?

B3. Vulnerable Populations
[ ] Are children (<18) directly affected?
[ ] Are decisions made about employees or job applicants?
[ ] Are disadvantaged or marginalized groups specifically 
    affected?
[ ] Is the system used in healthcare, education, housing, or 
    criminal justice?

B4. Technical Risk Factors
[ ] Does the system use personal data as inputs?
[ ] Is the decision-making process difficult to explain?
[ ] Does the system learn/update from new data in production?
[ ] Is the system provided by a third party with limited 
    visibility?

B5. Regulatory Considerations
[ ] Does the system fall under specific AI regulations 
    (EU AI Act, state laws)?
[ ] Is the domain subject to sector-specific regulations 
    (financial, healthcare)?
[ ] Have regulators expressed interest in this type of AI?
[ ] Could deployment create significant legal liability?

───────────────────────────────────────────────────────────────
SECTION C: RISK LEVEL DETERMINATION
───────────────────────────────────────────────────────────────

Count "Yes" responses:

Section B1 (Decision Impact):     ___ / 4
Section B2 (Scale and Scope):     ___ / 4
Section B3 (Vulnerable Populations): ___ / 4
Section B4 (Technical Factors):   ___ / 4
Section B5 (Regulatory):          ___ / 4

TOTAL "Yes" responses:            ___ / 20

Risk Level (circle one):

0-4 Yes:   LOW RISK
           → Abbreviated assessment sufficient
           → Standard development practices apply
           
5-9 Yes:   MEDIUM RISK  
           → Standard risk assessment required
           → Department-level approval needed
           
10-14 Yes: HIGH RISK
           → Comprehensive risk assessment required
           → Senior management approval needed
           → Consider external review
           
15-20 Yes: CRITICAL RISK
           → Full impact assessment required
           → Executive/Board approval required
           → External independent review required
           → Consider whether to proceed

───────────────────────────────────────────────────────────────
SECTION D: SCREENING NOTES AND NEXT STEPS
───────────────────────────────────────────────────────────────

Key concerns identified:
______________________________________________________________
______________________________________________________________
______________________________________________________________

Recommended assessment level: _________________________________

Next steps:
[ ] Proceed to standard risk assessment
[ ] Proceed to comprehensive risk assessment  
[ ] Proceed to full impact assessment
[ ] Schedule stakeholder consultation
[ ] Escalate to [role] for guidance
[ ] Other: ___________________________________________________

Screener Signature: ____________________ Date: ________________

═══════════════════════════════════════════════════════════════
```


### Example: Completed Screening

```
System Name: Customer Churn Prediction Model
System ID/Version: CHURN-v2.1
Date of Screening: October 15, 2024
Screener Name/Role: Alex Chen, Risk Analyst
System Owner: Marketing Analytics Team

Brief Description: Machine learning model that predicts which 
customers are likely to cancel their subscription in the next 
90 days. Used to trigger retention offers.

Section B1: 1 Yes (affects decisions about individuals)
Section B2: 2 Yes (>1,000 people, >6 months)
Section B3: 0 Yes
Section B4: 2 Yes (personal data, some opacity)
Section B5: 0 Yes

TOTAL: 5 Yes → MEDIUM RISK

Key concerns: Uses personal data for targeting; customers 
unaware of profiling; potential for unfair treatment.

Recommended assessment level: Standard risk assessment

Next steps: Proceed to standard risk assessment, consult with 
Privacy team before deployment.
```

---

<!-- component:template:template-template-2-standard-ai-risk-assessment -->

## Template 2: Standard AI Risk Assessment


### Purpose

Comprehensive assessment of AI system risks for medium-risk systems.


### When to Use

- Initial screening indicated medium risk
- Required before deploying new AI systems
- Periodic reassessment of existing systems


### Time to Complete

2-4 hours (may require input from multiple stakeholders)

<!-- component:template:template-template -->

### Template

```
═══════════════════════════════════════════════════════════════
STANDARD AI RISK ASSESSMENT
═══════════════════════════════════════════════════════════════

DOCUMENT CONTROL
Assessment ID: _____________  Version: ________  
Assessment Date: ___________  Next Review: __________
Assessor(s): ________________________________________________
Reviewed by: ________________________________________________

───────────────────────────────────────────────────────────────
PART 1: SYSTEM DESCRIPTION
───────────────────────────────────────────────────────────────

1.1 System Identification
Name: _______________________________________________________
Version: ____________________________________________________
Type: [ ]Classification [ ]Regression [ ]NLP [ ]Computer Vision
      [ ]Recommendation [ ]Generative [ ]Other: ______________
Vendor/Developer: ___________________________________________
Deployment Status: [ ]Proposed [ ]Development [ ]Production

1.2 Purpose and Functionality
Business purpose:
______________________________________________________________
______________________________________________________________

What problem does this solve?
______________________________________________________________
______________________________________________________________

Inputs (what data does it receive?):
______________________________________________________________
______________________________________________________________

Outputs (what does it produce?):
______________________________________________________________
______________________________________________________________

How outputs are used:
______________________________________________________________
______________________________________________________________

1.3 Users and Stakeholders
Primary users (who operates the system):
______________________________________________________________

People affected by decisions:
______________________________________________________________

Other stakeholders:
______________________________________________________________

1.4 Human Oversight
Level: [ ]Human-in-the-loop [ ]Human-on-the-loop 
       [ ]Human-out-of-the-loop
Describe oversight mechanism:
______________________________________________________________
______________________________________________________________

───────────────────────────────────────────────────────────────
PART 2: RISK IDENTIFICATION
───────────────────────────────────────────────────────────────

2.1 Fairness and Bias Risks

Could the system disadvantage any groups?
______________________________________________________________

Protected characteristics potentially affected:
[ ]Age [ ]Gender [ ]Race/Ethnicity [ ]Disability [ ]Religion
[ ]National Origin [ ]Other: _________________________________

Training data bias concerns:
______________________________________________________________

Proxy variable concerns:
______________________________________________________________

2.2 Privacy and Data Risks

Personal data processed:
[ ]Name [ ]Contact info [ ]Financial [ ]Health [ ]Behavioral
[ ]Biometric [ ]Location [ ]Other: ___________________________

Data protection concerns:
______________________________________________________________

Data quality issues:
______________________________________________________________

2.3 Safety Risks

Could errors cause physical harm?   [ ]Yes [ ]No
Could errors cause psychological harm? [ ]Yes [ ]No
Could errors cause financial harm?  [ ]Yes [ ]No

Describe potential harms:
______________________________________________________________
______________________________________________________________

2.4 Transparency and Explainability Risks

Can decisions be explained to affected parties? [ ]Yes [ ]Partial [ ]No

Describe explainability challenges:
______________________________________________________________

Are users aware AI is used? [ ]Yes [ ]Partial [ ]No

2.5 Reliability Risks

Accuracy concerns:
______________________________________________________________

Performance degradation risks:
______________________________________________________________

Dependency risks (what if system fails?):
______________________________________________________________

2.6 Security Risks

Adversarial attack vulnerabilities:
______________________________________________________________

Data security concerns:
______________________________________________________________

2.7 Other Risks

Additional concerns not covered above:
______________________________________________________________
______________________________________________________________

───────────────────────────────────────────────────────────────
PART 3: RISK ANALYSIS
───────────────────────────────────────────────────────────────

For each identified risk, assess likelihood and impact:

┌────────────────────────┬────────────┬──────────┬───────────┐
│ Risk Description       │ Likelihood │ Impact   │ Risk Level│
│                        │ (H/M/L)    │ (H/M/L)  │ (Critical/│
│                        │            │          │ High/Med/ │
│                        │            │          │ Low)      │
├────────────────────────┼────────────┼──────────┼───────────┤
│                        │            │          │           │
├────────────────────────┼────────────┼──────────┼───────────┤
│                        │            │          │           │
├────────────────────────┼────────────┼──────────┼───────────┤
│                        │            │          │           │
├────────────────────────┼────────────┼──────────┼───────────┤
│                        │            │          │           │
├────────────────────────┼────────────┼──────────┼───────────┤
│                        │            │          │           │
├────────────────────────┼────────────┼──────────┼───────────┤
│                        │            │          │           │
└────────────────────────┴────────────┴──────────┴───────────┘

Risk Level Matrix:
                    Impact
                    Low    Medium    High
Likelihood  High    Medium  High     Critical
            Medium  Low     Medium   High
            Low     Low     Low      Medium

───────────────────────────────────────────────────────────────
PART 4: EXISTING CONTROLS
───────────────────────────────────────────────────────────────

What controls are already in place?

Technical controls:
______________________________________________________________
______________________________________________________________

Procedural controls:
______________________________________________________________
______________________________________________________________

Governance controls:
______________________________________________________________
______________________________________________________________

Assessment of control effectiveness:
[ ]Effective [ ]Partially effective [ ]Ineffective [ ]Unknown

───────────────────────────────────────────────────────────────
PART 5: MITIGATION PLAN
───────────────────────────────────────────────────────────────

For each High/Critical risk, define mitigation:

┌────────────────┬───────────────────┬──────────┬──────────────┐
│ Risk           │ Mitigation Action │ Owner    │ Due Date     │
├────────────────┼───────────────────┼──────────┼──────────────┤
│                │                   │          │              │
├────────────────┼───────────────────┼──────────┼──────────────┤
│                │                   │          │              │
├────────────────┼───────────────────┼──────────┼──────────────┤
│                │                   │          │              │
├────────────────┼───────────────────┼──────────┼──────────────┤
│                │                   │          │              │
└────────────────┴───────────────────┴──────────┴──────────────┘

───────────────────────────────────────────────────────────────
PART 6: RESIDUAL RISK AND RECOMMENDATION
───────────────────────────────────────────────────────────────

After mitigations, what risks remain?
______________________________________________________________
______________________________________________________________

Is residual risk acceptable? [ ]Yes [ ]No [ ]Conditional

Recommendation:
[ ] PROCEED - Risks acceptable, deploy with standard monitoring
[ ] PROCEED WITH CONDITIONS - Deploy subject to: _______________
    ___________________________________________________________
[ ] DEFER - Address mitigations before deployment
[ ] DO NOT PROCEED - Risks unacceptable

───────────────────────────────────────────────────────────────
PART 7: MONITORING REQUIREMENTS
───────────────────────────────────────────────────────────────

Metrics to monitor:
┌─────────────────────────┬───────────────┬───────────────────┐
│ Metric                  │ Frequency     │ Alert Threshold   │
├─────────────────────────┼───────────────┼───────────────────┤
│                         │               │                   │
├─────────────────────────┼───────────────┼───────────────────┤
│                         │               │                   │
├─────────────────────────┼───────────────┼───────────────────┤
│                         │               │                   │
└─────────────────────────┴───────────────┴───────────────────┘

Reassessment trigger events:
______________________________________________________________

Next scheduled review date: __________________________________

───────────────────────────────────────────────────────────────
APPROVALS
───────────────────────────────────────────────────────────────

Assessor: 
Signature: __________________ Date: __________

Reviewer:
Name/Role: __________________ Date: __________
Signature: __________________

Approver:
Name/Role: __________________ Date: __________
Signature: __________________
Decision: [ ]Approved [ ]Approved with conditions [ ]Not approved
Conditions (if any):
______________________________________________________________

═══════════════════════════════════════════════════════════════
```

---

<!-- component:template:template-template-3-ai-risk-register -->

## Template 3: AI Risk Register


### Purpose

Ongoing tracking of all AI risks across an organization or portfolio of systems.


### When to Use

- Enterprise-level AI risk management
- Tracking risks across multiple AI systems
- Regular reporting to leadership

<!-- component:template:template-template -->

### Template

```
═══════════════════════════════════════════════════════════════
AI RISK REGISTER
═══════════════════════════════════════════════════════════════

Organization: ________________________________________________
Register Owner: ______________________________________________
Last Updated: ________________________________________________
Next Review: _________________________________________________

───────────────────────────────────────────────────────────────
SUMMARY DASHBOARD
───────────────────────────────────────────────────────────────

Total AI Systems: ____
Total Open Risks: ____

Risk Distribution:
  Critical: ____
  High: ____
  Medium: ____
  Low: ____

Trend (vs. last period): [ ]Improving [ ]Stable [ ]Worsening

───────────────────────────────────────────────────────────────
RISK REGISTER ENTRIES
───────────────────────────────────────────────────────────────

┌──────┬──────────────────────────────────────────────────────┐
│ ID   │ R-001                                                │
├──────┼──────────────────────────────────────────────────────┤
│System│                                                      │
├──────┼──────────────────────────────────────────────────────┤
│Risk  │                                                      │
│Desc  │                                                      │
├──────┼──────────────────────────────────────────────────────┤
│Category│ [ ]Bias [ ]Privacy [ ]Safety [ ]Reliability        │
│      │ [ ]Security [ ]Transparency [ ]Other                 │
├──────┼──────────────────────────────────────────────────────┤
│Likelihood│ [ ]High [ ]Medium [ ]Low                         │
├──────┼──────────────────────────────────────────────────────┤
│Impact│ [ ]High [ ]Medium [ ]Low                             │
├──────┼──────────────────────────────────────────────────────┤
│Risk  │ [ ]Critical [ ]High [ ]Medium [ ]Low                 │
│Level │                                                      │
├──────┼──────────────────────────────────────────────────────┤
│Current│                                                     │
│Controls│                                                    │
├──────┼──────────────────────────────────────────────────────┤
│Mitigation│                                                  │
│Plan   │                                                     │
├──────┼──────────────────────────────────────────────────────┤
│Owner │                                                      │
├──────┼──────────────────────────────────────────────────────┤
│Due   │                                                      │
│Date  │                                                      │
├──────┼──────────────────────────────────────────────────────┤
│Status│ [ ]Open [ ]In Progress [ ]Pending Review [ ]Closed   │
├──────┼──────────────────────────────────────────────────────┤
│Last  │                                                      │
│Update│                                                      │
├──────┼──────────────────────────────────────────────────────┤
│Notes │                                                      │
│      │                                                      │
└──────┴──────────────────────────────────────────────────────┘

[Repeat for each risk]

───────────────────────────────────────────────────────────────
CLOSED RISKS (Last 12 Months)
───────────────────────────────────────────────────────────────

┌──────┬─────────────┬──────────────┬────────────────┬────────┐
│ ID   │ System      │ Risk Desc    │ Resolution     │ Closed │
├──────┼─────────────┼──────────────┼────────────────┼────────┤
│      │             │              │                │        │
├──────┼─────────────┼──────────────┼────────────────┼────────┤
│      │             │              │                │        │
└──────┴─────────────┴──────────────┴────────────────┴────────┘

───────────────────────────────────────────────────────────────
RISK REGISTER CHANGE LOG
───────────────────────────────────────────────────────────────

┌────────────┬────────────────────────────────────────┬───────┐
│ Date       │ Change Description                     │ By    │
├────────────┼────────────────────────────────────────┼───────┤
│            │                                        │       │
├────────────┼────────────────────────────────────────┼───────┤
│            │                                        │       │
└────────────┴────────────────────────────────────────┴───────┘

═══════════════════════════════════════════════════════════════
```

---

<!-- component:template:template-template-4-ai-bias-assessment-checklist -->

## Template 4: AI Bias Assessment Checklist


### Purpose

Focused assessment of bias and fairness risks in an AI system.


### When to Use

- Part of broader risk assessment
- Pre-deployment fairness review
- Periodic bias audits

<!-- component:template:template-template -->

### Template

```
═══════════════════════════════════════════════════════════════
AI BIAS ASSESSMENT CHECKLIST
═══════════════════════════════════════════════════════════════

System: _____________________________________________________
Assessment Date: ____________________________________________
Assessor(s): ________________________________________________

───────────────────────────────────────────────────────────────
SECTION 1: CONTEXT ASSESSMENT
───────────────────────────────────────────────────────────────

1.1 Domain and Use Case
What decisions does this system inform?
______________________________________________________________

Could biased decisions in this domain cause significant harm?
[ ]Yes - Critical [ ]Yes - Moderate [ ]Minimal [ ]No

Relevant anti-discrimination laws/regulations:
______________________________________________________________

1.2 Protected Groups Analysis
Which protected characteristics could be affected?

[ ] Age
[ ] Gender/Sex
[ ] Race/Ethnicity  
[ ] Disability
[ ] Religion
[ ] National Origin
[ ] Sexual Orientation
[ ] Veteran Status
[ ] Pregnancy
[ ] Genetic Information
[ ] Other: _____________________

Are any groups historically disadvantaged in this domain?
______________________________________________________________

───────────────────────────────────────────────────────────────
SECTION 2: DATA ASSESSMENT
───────────────────────────────────────────────────────────────

2.1 Training Data Review
Data source(s): ______________________________________________

Time period covered: _________________________________________

Geographic scope: ____________________________________________

2.2 Representation Analysis
Is demographic breakdown of training data known? [ ]Yes [ ]No

If yes, complete:
┌────────────────────┬────────────────┬────────────────────────┐
│ Group              │ % in Training  │ % in Target Population │
├────────────────────┼────────────────┼────────────────────────┤
│                    │                │                        │
├────────────────────┼────────────────┼────────────────────────┤
│                    │                │                        │
├────────────────────┼────────────────┼────────────────────────┤
│                    │                │                        │
└────────────────────┴────────────────┴────────────────────────┘

Underrepresented groups identified: ___________________________

2.3 Historical Bias
Could historical discrimination be reflected in data?
[ ]Yes - Likely [ ]Yes - Possible [ ]Unlikely [ ]No

Examples of potential historical bias:
______________________________________________________________

2.4 Label Quality
Who/what created the labels? __________________________________
Could labeling reflect human bias? [ ]Yes [ ]Possibly [ ]No

───────────────────────────────────────────────────────────────
SECTION 3: FEATURE ASSESSMENT
───────────────────────────────────────────────────────────────

3.1 Protected Characteristics as Features
Are protected characteristics used as model inputs?
[ ]Yes - directly  [ ]Yes - derived  [ ]No

If yes, justification: _______________________________________

3.2 Proxy Variable Analysis
Features that may proxy for protected characteristics:

┌────────────────────┬───────────────────────────────────────┐
│ Feature            │ May Proxy For                         │
├────────────────────┼───────────────────────────────────────┤
│ Zip code           │ Race, income, etc.                    │
├────────────────────┼───────────────────────────────────────┤
│                    │                                       │
├────────────────────┼───────────────────────────────────────┤
│                    │                                       │
├────────────────────┼───────────────────────────────────────┤
│                    │                                       │
└────────────────────┴───────────────────────────────────────┘

3.3 Feature Relevance
Are all features demonstrably relevant to legitimate purpose?
[ ]Yes - all validated [ ]Mostly [ ]Some unvalidated

Features requiring relevance review:
______________________________________________________________

───────────────────────────────────────────────────────────────
SECTION 4: OUTCOME TESTING
───────────────────────────────────────────────────────────────

4.1 Testing Methodology
Test data source: ____________________________________________
Sample size: _________________________________________________
Demographic labels available: [ ]Yes [ ]Partial [ ]No

4.2 Disparate Impact Analysis (if applicable)
Use 80% (4/5) rule as threshold

┌────────────────────┬────────────────┬────────────────┬──────┐
│ Group              │ Selection Rate │ vs. Highest    │ Pass │
├────────────────────┼────────────────┼────────────────┼──────┤
│                    │                │     %          │ Y/N  │
├────────────────────┼────────────────┼────────────────┼──────┤
│                    │                │     %          │ Y/N  │
├────────────────────┼────────────────┼────────────────┼──────┤
│                    │                │     %          │ Y/N  │
├────────────────────┼────────────────┼────────────────┼──────┤
│                    │                │     %          │ Y/N  │
└────────────────────┴────────────────┴────────────────┴──────┘

4.3 Error Rate Analysis
Are error rates (false positive/false negative) similar 
across groups? [ ]Yes [ ]No [ ]Unable to test

If no, describe disparities:
______________________________________________________________

4.4 Other Fairness Metrics Tested
[ ] Demographic parity
[ ] Equal opportunity
[ ] Predictive parity
[ ] Calibration
[ ] Individual fairness
[ ] Other: ___________________

Results summary:
______________________________________________________________

───────────────────────────────────────────────────────────────
SECTION 5: FINDINGS AND RECOMMENDATIONS
───────────────────────────────────────────────────────────────

5.1 Key Findings
______________________________________________________________
______________________________________________________________
______________________________________________________________

5.2 Bias Risk Level
[ ] High - Significant disparities identified
[ ] Medium - Some concerns requiring attention
[ ] Low - No significant issues found

5.3 Recommended Actions
┌────────────────────────────────────────┬──────────┬─────────┐
│ Action                                 │ Priority │ Owner   │
├────────────────────────────────────────┼──────────┼─────────┤
│                                        │          │         │
├────────────────────────────────────────┼──────────┼─────────┤
│                                        │          │         │
├────────────────────────────────────────┼──────────┼─────────┤
│                                        │          │         │
└────────────────────────────────────────┴──────────┴─────────┘

5.4 Monitoring Recommendations
______________________________________________________________
______________________________________________________________

───────────────────────────────────────────────────────────────
APPROVAL
───────────────────────────────────────────────────────────────

Assessor Signature: __________________ Date: __________

Reviewer Signature: __________________ Date: __________

Deployment Decision:
[ ] Approved for deployment
[ ] Approved with conditions: ________________________________
[ ] Remediation required before deployment
[ ] Not approved

═══════════════════════════════════════════════════════════════
```

---

<!-- component:template:template-template-5-ai-incident-report -->

## Template 5: AI Incident Report


### Purpose

Document and learn from AI-related incidents.


### When to Use

- When an AI system causes harm or near-miss
- When bias or errors are discovered in production
- When complaints are received about AI decisions

<!-- component:template:template-template -->

### Template

```
═══════════════════════════════════════════════════════════════
AI INCIDENT REPORT
═══════════════════════════════════════════════════════════════

INCIDENT IDENTIFICATION
Report Number: _______________________________________________
Report Date: _________________________________________________
Reporter Name/Role: __________________________________________
Incident Date: _______________________________________________

───────────────────────────────────────────────────────────────
SECTION 1: SYSTEM INFORMATION
───────────────────────────────────────────────────────────────

System Name: _________________________________________________
System Owner: ________________________________________________
System Version: ______________________________________________

───────────────────────────────────────────────────────────────
SECTION 2: INCIDENT DESCRIPTION
───────────────────────────────────────────────────────────────

2.1 Incident Summary (what happened):
______________________________________________________________
______________________________________________________________
______________________________________________________________

2.2 How was the incident discovered?
[ ] User complaint
[ ] Internal monitoring
[ ] External report
[ ] Audit finding
[ ] Other: ___________________________________________________

2.3 Incident Category
[ ] Discriminatory outcome
[ ] Incorrect decision
[ ] Privacy breach
[ ] System failure
[ ] Security incident
[ ] Safety issue
[ ] Other: ___________________________________________________

───────────────────────────────────────────────────────────────
SECTION 3: IMPACT ASSESSMENT
───────────────────────────────────────────────────────────────

3.1 Who was affected?
Number of individuals: _______________________________________
Groups particularly affected: ________________________________

3.2 What was the harm?
[ ] Financial loss: estimated $ ______________________________
[ ] Physical harm: describe __________________________________
[ ] Psychological harm: describe _____________________________
[ ] Privacy violation: describe ______________________________
[ ] Reputational harm: describe ______________________________
[ ] Other: ___________________________________________________

3.3 Severity Assessment
[ ] Critical - Significant harm to multiple individuals
[ ] High - Significant harm to individual(s) or moderate 
    harm to many
[ ] Medium - Moderate harm to individual(s)
[ ] Low - Minor harm or near-miss

───────────────────────────────────────────────────────────────
SECTION 4: IMMEDIATE RESPONSE
───────────────────────────────────────────────────────────────

4.1 Immediate actions taken:
______________________________________________________________
______________________________________________________________

4.2 Was the system:
[ ] Continued operation
[ ] Modified operation
[ ] Suspended
[ ] Decommissioned

4.3 Were affected parties notified? [ ]Yes [ ]No [ ]N/A
If yes, when and how: ________________________________________

───────────────────────────────────────────────────────────────
SECTION 5: ROOT CAUSE ANALYSIS
───────────────────────────────────────────────────────────────

5.1 Technical root cause:
______________________________________________________________
______________________________________________________________

5.2 Process root cause (why wasn't this caught earlier?):
______________________________________________________________
______________________________________________________________

5.3 Contributing factors:
______________________________________________________________
______________________________________________________________

───────────────────────────────────────────────────────────────
SECTION 6: CORRECTIVE ACTIONS
───────────────────────────────────────────────────────────────

┌────────────────────────────────────────┬──────────┬─────────┐
│ Action                                 │ Owner    │ Due     │
├────────────────────────────────────────┼──────────┼─────────┤
│                                        │          │         │
├────────────────────────────────────────┼──────────┼─────────┤
│                                        │          │         │
├────────────────────────────────────────┼──────────┼─────────┤
│                                        │          │         │
├────────────────────────────────────────┼──────────┼─────────┤
│                                        │          │         │
└────────────────────────────────────────┴──────────┴─────────┘

───────────────────────────────────────────────────────────────
SECTION 7: LESSONS LEARNED
───────────────────────────────────────────────────────────────

What should we do differently?
______________________________________________________________
______________________________________________________________

What changes to prevent recurrence?
______________________________________________________________
______________________________________________________________

Should other systems be reviewed? [ ]Yes [ ]No
If yes, which: _______________________________________________

───────────────────────────────────────────────────────────────
APPROVALS AND CLOSURE
───────────────────────────────────────────────────────────────

Report completed by: __________________ Date: __________

Reviewed by: _________________________ Date: __________

Closed by: ___________________________ Date: __________

Closure verification:
[ ] All corrective actions completed
[ ] Effectiveness verified
[ ] Documentation updated
[ ] Lessons learned shared

═══════════════════════════════════════════════════════════════
```

---

<!-- component:template:template-using-these-templates -->

## Using These Templates


### Customization Tips

<!-- component:flowchart:flowchart-customization-tips -->
1. **Adapt to your context:** These are starting points. Modify terminology, categories, and depth to fit your organization.

2. **Integrate with existing processes:** Connect templates to your existing risk management, project management, and documentation systems.

3. **Version control:** Maintain template versions and document changes.

4. **Training:** Ensure users understand how to complete templates correctly.


### Implementation Suggestions

**Start simple:** Begin with the screening template. Add complexity as maturity grows.

**Create examples:** Complete templates for a few real systems to create reference examples.

**Collect feedback:** Ask users what works and what doesn't. Iterate.

**Automate where possible:** Move templates to digital forms or GRC systems for better tracking.

---


## Conclusion

Templates are tools—they make AI risk assessment faster, more consistent, and more complete. But they're not magic. A template can't substitute for genuine analysis and judgment.

Use these templates to:
- Ensure you cover all important areas
- Create consistent documentation
- Save time on format and structure
- Focus energy on analysis and decisions

The best template is one that gets used. Start with what works, improve over time, and build a toolkit that serves your organization's needs.

---


## Sources and Further Reading

<!-- component:flowchart:flowchart-sources-and-further-reading -->
1. **NIST AI RMF** - Framework these templates align with. Available at: nist.gov/itl/ai-risk-management-framework

2. **ISO 31000** - Risk management standard informing template structure. Available at: iso.org

3. **EU AI Act** - Requirements informing high-risk assessments. Available at: eur-lex.europa.eu

4. **Canada Algorithmic Impact Assessment Tool** - Government template. Available at: canada.ca

5. **OECD** - AI risk assessment resources. Available at: oecd.ai

6. **NYC DCWP** - Bias audit requirements. Available at: nyc.gov

7. **Partnership on AI** - AI incident database. Available at: partnershiponai.org

8. **Singapore PDPC** - ISAGO self-assessment tools. Available at: pdpc.gov.sg

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
