
![Article 113: The Three Lines Model for AI – Defense in Depth]({{IMAGE_PLACEHOLDER_article-113-the-three-lines-model-for-ai-defense-in-depth}})

---
category: "Governance Implementation"
learning_objectives:

  - "Understand the key concepts and principles of policy development"
  - "Implement best practices in real-world scenarios"
  - "Evaluate risk assessment frameworks for organizational compliance"
seo_keywords:

  - "article"
  - "three"
  - "AI governance"
  - "the three lines model"
  - "defense"
word_count: 1526
processed_date: "2025-12-18T20:00:53.475Z"
---


## Understanding the Three Lines Model


### What Is the Three Lines Model?

The Three Lines Model (formerly "Three Lines of Defense") is a governance framework published by the Institute of Internal Auditors (IIA). It clarifies roles and responsibilities for managing risk.

```
THE THREE LINES MODEL

GOVERNING BODY (Board)
│
├── Accountability to stakeholders
├── Oversight of all activities
└── Sets risk appetite
│
▼
MANAGEMENT
│
├─────────────────┬─────────────────┐
│                 │                 │
▼                 ▼                 ▼
FIRST LINE      SECOND LINE      THIRD LINE
Operations      Oversight        Assurance
│                 │                 │
├── Owns risk     ├── Monitors      ├── Independent
├── Manages risk  ├── Advises       ├── Objective
├── Controls      ├── Challenges    ├── Evaluates
└── Reports       └── Supports      └── Reports to Board
```


### The Three Lines Explained

**First Line: Operations**

- Business units and functions that conduct operations
- Owns and manages risk day-to-day
- Implements controls
- Reports on risk and control status

**Second Line: Oversight**

- Functions that provide expertise, monitoring, and challenge
- Sets policies and standards
- Monitors compliance
- Advises and supports First Line
- Reports on risk across the organization

**Third Line: Assurance**

- Internal audit function
- Independent of management
- Provides objective assurance
- Reports to governing body
- Evaluates effectiveness of governance and controls


### Why Three Lines for AI?

AI governance needs defense in depth because:

**AI risks are hard to detect:**
Bias, drift, and errors may not be obvious without deliberate testing.

**AI is complex:**
No single perspective catches all issues.

**AI evolves:**
Ongoing monitoring requires multiple checkpoints.

**Accountability can be unclear:**
Multiple teams touch AI; clear roles prevent gaps.

**Stakes are high:**
AI failures can cause significant harm before detection.

---


## First Line: AI Operations


### Who Is the First Line for AI?

The First Line includes everyone directly involved in building, deploying, and operating AI:

- Data scientists and ML engineers
- AI product managers
- Business units using AI
- Operations teams running AI systems
- Vendors providing AI (by extension)


### First Line AI Responsibilities

```
FIRST LINE AI RESPONSIBILITIES

DEVELOPMENT
├── Build AI according to standards
├── Document models and systems
├── Conduct initial testing (accuracy, bias)
├── Ensure data quality
└── Follow development governance

DEPLOYMENT
├── Complete pre-deployment checklists
├── Obtain required approvals
├── Implement monitoring
├── Configure alerts
└── Prepare for incidents

OPERATIONS
├── Monitor AI performance
├── Respond to alerts
├── Investigate issues
├── Maintain documentation
└── Report status

RISK OWNERSHIP
├── Identify risks in their AI
├── Implement controls
├── Self-assess compliance
├── Escalate issues
└── Remediate findings
```


### First Line Practices

**Self-assessment:**
First Line regularly assesses their own AI systems.

```
FIRST LINE AI SELF-ASSESSMENT

System: _______________
Owner: _______________
Date: _______________

DOCUMENTATION
□ Model card complete and current
□ Technical documentation updated
□ User documentation available
□ Data lineage documented

TESTING
□ Performance meets requirements
□ Bias testing completed
□ Last test date: _______________
□ Results acceptable

MONITORING
□ Monitoring active and functioning
□ Alerts configured appropriately
□ Dashboard reviewed regularly
□ Issues investigated promptly

COMPLIANCE
□ Policies understood and followed
□ Required approvals obtained
□ Training completed
□ No outstanding findings

ISSUES
□ Known issues documented
□ Remediation plans in place
□ Escalation if needed

Assessment result: [Pass/Issues/Fail]
Next assessment: _______________
```

**Risk and Control Self-Assessment (RCSA):**
Periodic comprehensive review of AI risks and controls.

---


## Second Line: AI Oversight


### Who Is the Second Line for AI?

The Second Line includes oversight functions that don't directly build or run AI but provide monitoring, expertise, and challenge:

- AI Governance / Responsible AI Office
- Risk Management
- Compliance
- Legal
- Privacy / Data Protection
- Information Security
- Quality Assurance


### Second Line AI Responsibilities

```
SECOND LINE AI RESPONSIBILITIES

POLICY AND STANDARDS
├── Develop AI policies
├── Set governance standards
├── Define requirements
├── Maintain frameworks
└── Update for regulatory changes

MONITORING AND OVERSIGHT
├── Monitor AI risk across organization
├── Track compliance with policies
├── Review high-risk AI systems
├── Aggregate and report risks
└── Identify emerging risks

EXPERTISE AND SUPPORT
├── Advise First Line on requirements
├── Provide technical guidance
├── Support risk assessments
├── Train and build capability
└── Share best practices

CHALLENGE
├── Review First Line assessments
├── Challenge risk ratings
├── Validate testing adequacy
├── Question assumptions
└── Escalate concerns

REPORTING
├── Report to management on AI risk
├── Aggregate metrics
├── Highlight issues
└── Recommend actions
```


### Second Line Practices

**AI risk monitoring:**
Ongoing monitoring of AI risk indicators.

```
SECOND LINE MONITORING DASHBOARD

COVERAGE METRICS
├── AI systems inventoried: 47/52 (90%)
├── High-risk systems reviewed: 8/8 (100%)
├── Documentation complete: 38/47 (81%)
└── Monitoring active: 42/47 (89%)

RISK INDICATORS
├── Systems with elevated risk: 5
├── Overdue reviews: 3
├── Open audit findings: 7
└── Incidents this quarter: 2

COMPLIANCE STATUS
├── Policy compliance: 85%
├── Training completion: 78%
├── Required approvals: 100%
└── Vendor assessments: 90%

ATTENTION NEEDED
├── System A: Bias testing overdue
├── System B: Documentation incomplete
├── System C: Monitoring gaps
```

**High-risk AI review:**
Second Line reviews all high-risk AI before deployment.

```
SECOND LINE REVIEW CHECKLIST

Pre-Review Requirements:
□ First Line self-assessment complete
□ Documentation package submitted
□ Risk classification confirmed

Review Areas:
□ Risk assessment adequate and accurate?
□ Testing appropriate for risk level?
□ Controls properly designed?
□ Monitoring plan sufficient?
□ Documentation complete?
□ Regulatory requirements met?
□ Policy compliance verified?

Review Outcome:
□ Approved
□ Approved with conditions
□ Returned for additional work
□ Escalated

Conditions (if applicable):
_______________

Reviewer: _______________
Date: _______________
```


### Coordination Between First and Second Line

Clear handoffs prevent gaps:

| Activity | First Line Role | Second Line Role |
|----------|----------------|------------------|
| Risk identification | Identify risks in their AI | Aggregate risks, identify patterns |
| Risk assessment | Complete assessments | Review and challenge assessments |
| Control implementation | Implement controls | Verify control design |
| Testing | Conduct testing | Review testing adequacy |
| Monitoring | Monitor own systems | Monitor across organization |
| Issue remediation | Remediate findings | Track remediation, verify closure |
| Reporting | Report on own AI | Aggregate and report to management |

---


## Third Line: AI Assurance


### Who Is the Third Line for AI?

The Third Line is Internal Audit, which provides independent, objective assurance on AI governance effectiveness.


### Third Line AI Responsibilities

```
THIRD LINE AI RESPONSIBILITIES

INDEPENDENT ASSURANCE
├── Evaluate AI governance effectiveness
├── Assess First and Second Line performance
├── Test controls independently
├── Verify management representations
└── Report to Board/Audit Committee

AUDIT ACTIVITIES
├── AI governance framework audits
├── High-risk AI system audits
├── Thematic reviews (bias, transparency, etc.)
├── Regulatory compliance audits
├── Vendor AI audits
└── Follow-up on prior findings

ADVISORY ROLE
├── Consult on governance design
├── Provide insights from audits
├── Share industry practices
└── Participate in governance forums (observer)

REPORTING
├── Report findings to Audit Committee
├── Track management remediation
├── Escalate unresolved issues
└── Annual opinion on AI governance
```


### Third Line Independence

Internal Audit must remain independent:

**Does:**

- Report to Audit Committee/Board
- Determine own scope and methodology
- Access all information needed
- Report findings without management filter

**Doesn't:**

- Implement controls (that's First Line)
- Set policies (that's Second Line)
- Have operational responsibility for AI
- Report exclusively to management


### AI Audit Approach

```
THIRD LINE AI AUDIT PROGRAM

GOVERNANCE AUDITS
├── AI governance framework adequacy
├── Policy effectiveness
├── Roles and responsibilities clarity
├── Oversight function effectiveness
└── Board reporting quality

SYSTEM AUDITS (High-Risk AI)
├── Development governance
├── Testing adequacy
├── Bias and fairness
├── Documentation quality
├── Monitoring effectiveness
└── Incident response

THEMATIC AUDITS
├── Third-party AI management
├── Data governance for AI
├── AI transparency practices
├── Model risk management
├── Regulatory compliance

CONTINUOUS AUDITING
├── Monitoring of key risk indicators
├── Automated testing where possible
├── Ongoing assessment
└── Real-time assurance
```

---


## How the Three Lines Work Together


### Coordination Model

```
THREE LINES COORDINATION

                    Board/Audit Committee
                           │
            ┌──────────────┼──────────────┐
            │              │              │
            ▼              ▼              ▼
       First Line    Second Line    Third Line
            │              │              │
            └──────────────┼──────────────┘
                           │
                    Coordination
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   Information         Challenge          Assurance
     Sharing                              Findings
```


### Avoiding Gaps and Overlaps

**Common gaps:**

| Gap | Problem | Solution |
|-----|---------|----------|
| No AI expertise in any line | Nobody understands AI risks | Build capability in each line |
| Third Line excludes AI | No independent assurance | Add AI to audit universe |
| Second Line rubber stamps | No real challenge | Empower and resource Second Line |
| First Line ignores governance | Self-assessment fiction | Management accountability |

**Common overlaps:**

| Overlap | Problem | Solution |
|---------|---------|----------|
| First and Second both test | Duplication, confusion | Clarify: First tests, Second reviews testing |
| Second and Third both audit | Resource waste | Clarify: Third audits, Second monitors |
| Multiple Second Line functions | Conflicting standards | Coordination, unified standards |


### Communication Protocol

```
THREE LINES COMMUNICATION

First → Second Line:
├── Self-assessments
├── Risk and control status
├── Issue escalation
├── Change notifications
└── Support requests

Second → First Line:
├── Policy and standards
├── Review findings
├── Guidance and advice
├── Monitoring results
└── Improvement recommendations

Third → Second Line:
├── Audit findings (for awareness)
├── Recommendations
├── Industry insights
└── Coordination on scope

Third → Board:
├── Audit reports
├── Annual opinion
├── Unresolved issues
├── Management response status
```

---


## Implementing Three Lines for AI


### Step 1: Assess Current State

Evaluate how well Three Lines currently applies to AI:

```
THREE LINES AI MATURITY ASSESSMENT

FIRST LINE
□ AI teams understand their governance role?
□ Self-assessment processes exist?
□ Risk ownership is clear?
□ Controls are implemented?
Rating: ___/5

SECOND LINE
□ AI oversight function exists?
□ Policies and standards defined?
□ Monitoring is active?
□ Challenge is effective?
Rating: ___/5

THIRD LINE
□ AI is in audit universe?
□ AI audit capability exists?
□ Audits have been conducted?
□ Independence maintained?
Rating: ___/5

COORDINATION
□ Lines work together effectively?
□ Handoffs are clear?
□ Gaps and overlaps addressed?
Rating: ___/5

Overall Maturity: ___/20
```


### Step 2: Define Roles Clearly

Document specific AI responsibilities for each line:

```
AI GOVERNANCE RACI BY LINE

Activity                    | 1st | 2nd | 3rd |
----------------------------|-----|-----|-----|
Develop AI system           |  A  |  C  |  I  |
Conduct bias testing        |  R  |  C  |  I  |
Review bias testing         |  I  |  A  |  C  |
Set AI policies             |  C  |  A  |  I  |
Monitor AI performance      |  A  |  C  |  I  |
Aggregate AI risk reporting |  R  |  A  |  I  |
Audit AI governance         |  I  |  I  |  A  |
Remediate findings          |  A  |  C  |  I  |
Report to Board             |  I  |  R  |  A  |

A = Accountable, R = Responsible, C = Consulted, I = Informed
```


### Step 3: Build Capability

Each line needs AI knowledge appropriate to their role:

| Line | Capability Needed | How to Build |
|------|------------------|--------------|
| **First** | Technical AI skills + governance awareness | Training, embedded governance |
| **Second** | AI risk expertise + oversight skills | Specialized hires, training |
| **Third** | AI audit capability | Training, co-sourcing, specialists |


### Step 4: Establish Processes

Create processes that operationalize the model:

**First Line processes:**

- AI development governance
- Self-assessment program
- Issue escalation

**Second Line processes:**

- Policy maintenance
- Review and approval workflow
- Risk monitoring

**Third Line processes:**

- AI audit methodology
- Audit planning (AI coverage)
- Finding follow-up


### Step 5: Monitor and Improve

Track Three Lines effectiveness:

| Metric | What It Measures |
|--------|-----------------|
| Self-assessment completion | First Line engagement |
| Review cycle time | Second Line efficiency |
| Audit coverage | Third Line coverage |
| Finding rates by line | Where issues are caught |
| Repeat findings | Remediation effectiveness |
| Gap incidents | Issues that fell between lines |

---


## Common Implementation Challenges


### Challenge 1: "We Don't Have a Second Line for AI"

**Symptom:** No dedicated AI oversight function.

**Risk:** Gap between operations and audit.

**Solutions:**

- Assign AI to existing Second Line function (Risk, Compliance)
- Create AI governance role even if small
- Distribute Second Line duties across existing functions with clear ownership


### Challenge 2: "Third Line Has No AI Expertise"

**Symptom:** Audit can't effectively assess AI.

**Risk:** No independent assurance on AI.

**Solutions:**

- Train existing auditors on AI basics
- Hire AI audit specialists
- Co-source with external experts
- Partner with technology audit team


### Challenge 3: "First Line Sees Governance as Overhead"

**Symptom:** Development teams resist governance.

**Risk:** Self-assessment becomes box-checking.

**Solutions:**

- Make governance part of development process, not separate
- Demonstrate value (fewer incidents, faster approvals)
- Executive mandate with accountability
- Involve First Line in designing governance


### Challenge 4: "Lines Don't Communicate"

**Symptom:** Silos between lines.

**Risk:** Gaps, duplicate work, inconsistency.

**Solutions:**

- Regular Three Lines coordination meetings
- Shared tools and information
- Clear escalation protocols
- Joint planning sessions


### Challenge 5: "Second Line Does First Line's Job"

**Symptom:** Oversight team conducts testing instead of reviewing.

**Risk:** First Line abdicates responsibility; Second Line overwhelmed.

**Solutions:**

- Clarify that First Line owns and performs, Second Line reviews
- Build First Line capability
- Second Line steps back as First Line matures

---


## Case Example: Three Lines in Action

```
CASE: Fraud Detection Model Deployment

FIRST LINE (Data Science Team)
Actions:
├── Developed model following standards
├── Completed bias testing
├── Documented in model card
├── Conducted self-assessment
├── Submitted for review
Findings: Passed self-assessment

SECOND LINE (AI Governance Office)
Actions:
├── Reviewed documentation package
├── Challenged bias testing scope
├── Requested additional testing for age groups
├── Approved after additional testing
├── Added to monitoring dashboard
Findings: Bias testing initially incomplete; 
addressed before approval

THIRD LINE (Internal Audit)
Actions:
├── Selected for audit (6 months post-deployment)
├── Tested model independently
├── Reviewed First and Second Line effectiveness
├── Verified monitoring working
├── Identified documentation gap
Findings: Model performing well; documentation 
gap requiring remediation

OUTCOME
├── First Line caught: Development issues (early)
├── Second Line caught: Testing gap (pre-deployment)
├── Third Line caught: Documentation gap (post-deployment)
├── Result: Defense in depth worked
```

---


## Conclusion

The Three Lines Model provides defense in depth for AI governance—multiple independent checks that catch what others miss. When properly applied, it ensures that AI risks are owned (First Line), monitored (Second Line), and independently verified (Third Line).

Key takeaways:

1. **First Line owns AI risk:** Development and operations teams are responsible for managing AI risk, not just building AI.

2. **Second Line provides oversight:** Governance functions monitor, advise, and challenge without taking over First Line responsibilities.

3. **Third Line assures independently:** Internal Audit provides objective assessment to the Board, separate from management.

4. **Lines must coordinate:** Clear handoffs, communication, and defined responsibilities prevent gaps.

5. **Each line needs AI capability:** Build appropriate AI knowledge at each level.

6. **Avoid common pitfalls:** Don't let lines overlap or leave gaps; don't let Second Line do First Line's job.

7. **Defense in depth works:** Multiple checks catch risks that single-point governance misses.

Applied well, the Three Lines Model ensures AI governance isn't dependent on any single point—if one line misses something, another catches it.

---


## Sources and Further Reading

1. **IIA Three Lines Model** - Original framework. Available at: theiia.org

2. **IIA Position Paper on Three Lines** - Updated 2020 model. Available at: theiia.org

3. **ISACA** - Three Lines and technology risk. Available at: isaca.org

4. **Basel Committee** - Three Lines in banking. Available at: bis.org

5. **NIST AI RMF** - Roles and responsibilities. Available at: nist.gov

6. **Deloitte** - Three Lines for emerging risks. Available at: deloitte.com

7. **PwC** - Three Lines Model implementation. Available at: pwc.com

8. **EY** - Internal audit and AI. Available at: ey.com

9. **KPMG** - AI governance and Three Lines. Available at: kpmg.com

10. **Gartner** - IT governance and Three Lines. Available at: gartner.com

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
