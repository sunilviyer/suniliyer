
![Article 99: AI Incident Response – When Things Go Wrong]({{IMAGE_PLACEHOLDER_article-99-ai-incident-response-when-things-go-wrong}})

---
title: 'Article 99: AI Incident Response – When Things Go Wrong'
tldr: ''
category: AI Fundamentals
learning_objectives:
- Understand the key concepts and principles of regulatory requirements
- Implement best practices in real-world scenarios
- Evaluate risk assessment frameworks for organizational compliance
seo_keywords:
- article
- incident
- AI governance
- incident response
- when things go wrong
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: educational diagram showing AI concepts, neural network visualization, technology
    icons, professional illustration, modern flat design style, clean and authoritative,
    high quality, blue and gray color scheme with accent colors, suitable for professional
    article header
- type: checklist
  label: Incident Response Checklist
  section: Incident Response Checklist
  id: checklist-incident-response-checklist
- type: checklist
  label: Incident Response Checklist
  section: Preparation
  id: checklist-preparation
- type: checklist
  label: During Incident
  section: During Incident
  id: checklist-during-incident
- type: checklist
  label: After Incident
  section: After Incident
  id: checklist-after-incident
- type: table
  label: Type vs Example Table
  section: Defining AI Incidents
  id: table-defining-ai-incidents
- type: table
  label: Aspect vs Traditional Incident Table
  section: AI Incidents vs. Traditional Incidents
  id: table-ai-incidents-vs-traditional-incidents
- type: table
  label: Role vs Responsibility Table
  section: AI Incident Response Team
  id: table-ai-incident-response-team
- type: table
  label: Source vs What It Catches Table
  section: Detecting AI Incidents
  id: table-detecting-ai-incidents
- type: table
  label: Option vs Speed Table
  section: Stop Ongoing Harm
  id: table-stop-ongoing-harm
- type: table
  label: Category vs Examples Table
  section: Root Cause Analysis
  id: table-root-cause-analysis
- type: flowchart
  label: Build Incident Response Capability Process
  section: Build Incident Response Capability
  id: flowchart-build-incident-response-capability
- type: flowchart
  label: Incident Triage Process
  section: Incident Triage
  id: flowchart-incident-triage
- type: flowchart
  label: Root Cause Analysis Process
  section: Root Cause Analysis
  id: flowchart-root-cause-analysis
- type: flowchart
  label: Returning to Normal Operation Process
  section: Returning to Normal Operation
  id: flowchart-returning-to-normal-operation
- type: flowchart
  label: Conclusion Process
  section: Conclusion
  id: flowchart-conclusion
- type: flowchart
  label: Sources and Further Reading Process
  section: Sources and Further Reading
  id: flowchart-sources-and-further-reading
- type: template
  label: Post-Incident Review Template
  section: Post-Incident Review Template
  id: template-post-incident-review-template
  template_link: /templates/post-incident-review-template.md
topic_fingerprint:
- fairness
- impact assessment
- responsible ai
- data drift
named_examples:
- defense
- eu ai act
- google
- ieee
- microsoft
- nist
word_count: 1490
processed_date: '2025-12-18T02:17:12.594Z'
---


## What Is an AI Incident?


### Defining AI Incidents

An AI incident is any event where an AI system causes or contributes to harm, operates outside its intended parameters, or fails to meet its requirements.

**Types of AI incidents:**

| Type | Example |
<!-- component:table:table-defining-ai-incidents -->
|------|---------|
| **Performance failure** | Model accuracy drops significantly |
| **Harmful output** | Model produces offensive or dangerous content |
| **Bias/discrimination** | Model treats groups unfairly |
| **Privacy violation** | Model leaks training data or user information |
| **Security breach** | Model is manipulated or attacked |
| **Availability failure** | Model system goes down |
| **Integration failure** | Model outputs cause downstream problems |
| **Misuse** | Model used outside intended scope with bad results |


### AI Incidents vs. Traditional Incidents

| Aspect | Traditional Incident | AI Incident |
<!-- component:table:table-ai-incidents-vs-traditional-incidents -->
|--------|---------------------|-------------|
| **Detection** | Errors, alerts, downtime | May be silent; requires monitoring |
| **Root cause** | Code bug, infra failure | Data issue, drift, model behavior |
| **Fix** | Deploy code patch | May require retraining, data fix |
| **Verification** | Test the fix | Validate across scenarios |
| **Communication** | Technical explanation | May need to explain model behavior |

---


## Incident Response Framework


### The PICERL Model

A standard incident response framework, adapted for AI:

```
P - Preparation      (Before incidents happen)
I - Identification   (Detecting the incident)
C - Containment      (Stopping ongoing harm)
E - Eradication      (Fixing the root cause)
R - Recovery         (Returning to normal)
L - Lessons Learned  (Preventing recurrence)
```

---


## Phase 1: Preparation


### Build Incident Response Capability

**Before any incident:**

<!-- component:flowchart:flowchart-build-incident-response-capability -->
1. **Define what constitutes an incident**
   - Severity levels
   - Classification criteria
   - Reporting thresholds

2. **Establish response team**
   - Roles and responsibilities
   - Contact information
   - Escalation paths

3. **Create playbooks**
   - Common incident types
   - Step-by-step responses
   - Decision criteria

4. **Set up infrastructure**
   - Incident tracking system
   - Communication channels
   - Documentation tools


### AI Incident Response Team

| Role | Responsibility |
<!-- component:table:table-ai-incident-response-team -->
|------|---------------|
| **Incident Commander** | Overall coordination, decisions |
| **Technical Lead** | Model/system investigation |
| **Data Lead** | Data quality, drift analysis |
| **Communications** | Stakeholder/customer communication |
| **Legal/Compliance** | Regulatory implications |
| **Business Owner** | Business impact assessment |


### Incident Severity Levels

```
SEVERITY LEVELS

SEV-1: Critical
├── Definition: Widespread harm, major business impact, safety risk
├── Examples: Model producing dangerous content, major discrimination
├── Response: All-hands, immediate action, executive notification
└── Timeline: Containment in minutes, resolution in hours

SEV-2: High
├── Definition: Significant impact, affecting many users
├── Examples: Major performance degradation, integration failures
├── Response: On-call team, urgent response
└── Timeline: Containment in hours, resolution in days

SEV-3: Medium
├── Definition: Moderate impact, workarounds possible
├── Examples: Feature-level issues, minor performance problems
├── Response: Next business day, planned response
└── Timeline: Resolution in days to weeks

SEV-4: Low
├── Definition: Minor impact, cosmetic issues
├── Examples: Edge cases, minor inconsistencies
├── Response: Queued for normal work
└── Timeline: Resolution in weeks to months
```


### Incident Playbooks

Create playbooks for common scenarios:

**Playbook: Model Performance Degradation**
```
TRIGGER: Performance monitoring alert

IMMEDIATE (0-15 minutes):
1. Acknowledge alert
2. Verify alert is legitimate
3. Check monitoring dashboard
4. Notify incident commander

ASSESSMENT (15-60 minutes):
1. Determine scope (which users, which predictions)
2. Quantify impact (how much degradation, since when)
3. Identify possible causes
4. Decide: Containment needed?

CONTAINMENT OPTIONS:
- Roll back to previous model version
- Enable fallback/default predictions
- Disable model and use manual process
- Reduce traffic to model

INVESTIGATION:
1. Check for data drift
2. Check for upstream data changes
3. Check for recent deployments
4. Analyze error patterns

RESOLUTION:
1. Identify root cause
2. Implement fix
3. Validate fix works
4. Gradually restore full operation
```

---


## Phase 2: Identification


### Detecting AI Incidents

AI incidents are often harder to detect than traditional incidents.

**Detection sources:**

| Source | What It Catches |
<!-- component:table:table-detecting-ai-incidents -->
|--------|-----------------|
| **Monitoring alerts** | Performance drift, data drift, errors |
| **User reports** | Bad outputs, unexpected behavior |
| **Business metrics** | Impact on outcomes (sales, conversions) |
| **Fairness monitoring** | Discrimination patterns |
| **Security tools** | Attacks, manipulation attempts |
| **Audits** | Systemic issues, compliance gaps |
| **Media/social** | Public discovery of issues |


### Incident Triage

When a potential incident is reported:

<!-- component:flowchart:flowchart-incident-triage -->
1. **Verify:** Is this actually a problem, or expected behavior?
2. **Classify:** What type of incident is this?
3. **Assess severity:** How bad is it?
4. **Assign:** Who owns the response?

**Triage questions:**
- Is there ongoing harm?
- How many users are affected?
- Is the problem getting worse?
- Is there safety/legal/reputation risk?

---


## Phase 3: Containment


### Stop Ongoing Harm

The first priority is stopping the incident from causing more damage.

**Containment options:**

| Option | Speed | Impact | When to Use |
<!-- component:table:table-stop-ongoing-harm -->
|--------|-------|--------|-------------|
| **Rollback** | Fast | Reverts to old version | Previous version available and stable |
| **Feature flag off** | Instant | Disables model | Feature flag configured |
| **Traffic block** | Fast | Stops requests | Severe harm ongoing |
| **Fallback mode** | Fast | Uses backup system | Fallback configured |
| **Manual override** | Slow | Human replaces model | Critical decisions |
| **Rate limiting** | Fast | Reduces exposure | Limit spread while investigating |


### Containment Decision Tree

```
Is there ongoing harm?
├── YES → Contain immediately
│   ├── Can we rollback? → Rollback
│   ├── Can we disable? → Disable
│   └── Neither → Manual intervention
│
└── NO → Proceed to investigation
    └── Monitor for escalation
```


### Document Containment

Record:
- What containment action was taken
- When it was taken
- Who made the decision
- What the immediate impact was

---


## Phase 4: Eradication


### Root Cause Analysis

Find the actual cause, not just the symptom.

**Common AI incident root causes:**

| Category | Examples |
<!-- component:table:table-root-cause-analysis -->
|----------|----------|
| **Data issues** | Drift, quality problems, pipeline bugs |
| **Model issues** | Overfitting, bias, edge cases |
| **Integration issues** | API changes, downstream interpretation |
| **Operational issues** | Configuration errors, deployment problems |
| **Design issues** | Wrong problem formulation, missing guardrails |
| **External factors** | Adversarial attacks, market changes |

**Investigation approach:**

<!-- component:flowchart:flowchart-root-cause-analysis -->
1. **Timeline reconstruction:** What happened when?
2. **Data analysis:** Did inputs change?
3. **Output analysis:** How did outputs change?
4. **System review:** What else changed?
5. **Hypothesis testing:** Test potential causes


### Root Cause Documentation

```
ROOT CAUSE ANALYSIS

Incident: INC-2024-0315-001
Date: March 15, 2024
System: Customer Service Chatbot

WHAT HAPPENED:
Chatbot provided false information about company closing stores.

TIMELINE:
- 14:30: Model deployment with updated knowledge base
- 14:47: First customer report of false information
- 15:02: Incident confirmed, chatbot disabled
- 15:15: Root cause identified

ROOT CAUSE:
Knowledge base update included a draft press release about 
"store renovations" that was misinterpreted by the model as 
"store closures." The content said stores would be "closed 
for renovation" which the model generalized to "closing."

CONTRIBUTING FACTORS:
1. No review process for knowledge base updates
2. No testing of model behavior after knowledge base changes
3. No content validation for potentially sensitive information

WHY IT WASN'T CAUGHT:
- Knowledge base updates don't trigger model validation
- No semantic check for significant content changes
- Monitoring focuses on technical metrics, not content accuracy
```

---


## Phase 5: Recovery


### Returning to Normal Operation

After the root cause is fixed:

<!-- component:flowchart:flowchart-returning-to-normal-operation -->
1. **Validate the fix**
   - Test in staging environment
   - Verify the specific issue is resolved
   - Check for side effects

2. **Plan restoration**
   - Staged rollout (don't big-bang)
   - Monitoring during restoration
   - Rollback plan if problems recur

3. **Restore service**
   - Gradual traffic increase
   - Close monitoring
   - Ready to revert

4. **Verify stability**
   - Confirm metrics are normal
   - Check for related issues
   - User feedback


### Recovery Communication

**Internal:**
- Incident resolved
- What was done
- Any ongoing monitoring

**External (if applicable):**
- Acknowledgment of issue
- What happened (appropriate detail)
- What was done
- Commitment to prevent recurrence

---


## Phase 6: Lessons Learned


### Post-Incident Review

Every significant incident should have a post-incident review (PIR) or postmortem.

**PIR principles:**
- Blameless (focus on systems, not individuals)
- Thorough (understand the full picture)
- Actionable (produce concrete improvements)
- Shared (spread learning across organization)

<!-- component:template:template-post-incident-review-template -->

### Post-Incident Review Template

```
POST-INCIDENT REVIEW

Incident ID: INC-2024-0315-001
Date of Incident: March 15, 2024
PIR Date: March 18, 2024
Facilitator: J. Smith

SUMMARY
Brief description of what happened.

IMPACT
- Users affected: ~500 customer conversations
- Duration: 35 minutes
- Business impact: Social media negative mentions
- Financial impact: Estimated $25K in recovery costs

TIMELINE
14:30 - Knowledge base deployment
14:47 - First customer complaint
14:52 - On-call paged
14:58 - Incident confirmed
15:02 - Chatbot disabled (containment)
15:15 - Root cause identified
15:45 - Fix deployed to staging
16:15 - Fix deployed to production
16:30 - Service restored
17:00 - All-clear declared

ROOT CAUSE
[Detailed explanation]

WHAT WENT WELL
- Fast containment (10 minutes to disable)
- Clear escalation path
- Effective cross-team collaboration

WHAT COULD BE IMPROVED
- Detection (35 minutes before we knew)
- Knowledge base change process
- Testing after content updates

ACTION ITEMS
┌────────────────────────────────────────┬─────────┬──────────┐
│ Action                                 │ Owner   │ Due      │
├────────────────────────────────────────┼─────────┼──────────┤
│ Implement content review process       │ J. Kim  │ Mar 25   │
│ Add semantic change detection          │ A. Patel│ Apr 1    │
│ Create testing protocol for KB updates │ M. Chen │ Mar 30   │
│ Update runbook with this scenario      │ S. Brown│ Mar 20   │
└────────────────────────────────────────┴─────────┴──────────┘

LESSONS LEARNED
1. Content changes need same rigor as code changes
2. User complaints are valuable detection signal
3. Fast containment limited damage significantly
```


### Learning from Industry Incidents

Stay informed about AI incidents at other organizations:

**Resources:**
- AI Incident Database (incidentdatabase.ai)
- NIST AI Incident Tracker
- Industry publications and case studies

---


## Communication During Incidents


### Internal Communication

**During incident:**
- Dedicated channel (Slack, Teams)
- Regular status updates
- Clear ownership

**Status update format:**
```
INCIDENT UPDATE - INC-2024-0315-001

Time: 15:30
Status: INVESTIGATING
Severity: SEV-2

Current state: Chatbot disabled, investigating root cause
Impact: ~200 customer conversations affected
Next update: 16:00 or sooner if status changes

Actions:
- [J. Smith] Analyzing knowledge base changes
- [A. Patel] Reviewing recent deployments
- [M. Chen] Preparing fix options
```


### External Communication

**Principles:**
- Be honest about what happened
- Don't speculate on cause before you know
- Explain what you're doing about it
- Provide updates as appropriate

**Template for customer communication:**
```
Subject: Update on [Service] Issue

We're aware that some customers experienced [brief description 
of issue] on [date/time]. We've identified the cause and 
implemented a fix.

We take this seriously and are implementing additional 
safeguards to prevent similar issues.

We apologize for any inconvenience and appreciate your patience.

[Contact information for further questions]
```

---


## Special Considerations for AI Incidents


### Explaining AI Behavior

Traditional incidents: "The server crashed because of a memory leak."

AI incidents may require explaining model behavior, which is harder:
- Why did the model produce this output?
- What data influenced this decision?
- How is this different from expected behavior?

**Communication approaches:**
- Focus on impact and remediation
- Be honest about uncertainty
- Avoid overpromising understanding
- Provide appropriate technical detail for audience


### Regulatory Reporting

Some AI incidents may require regulatory notification:
- Data breaches involving personal data
- Discrimination incidents in regulated domains
- Safety incidents in high-risk applications

**Know your obligations:**
- What incidents must be reported?
- To whom?
- Within what timeframe?
- What information is required?


### Evidence Preservation

For serious incidents, preserve evidence:
- Model version and configuration
- Input/output logs
- Monitoring data
- System state at time of incident
- Communications

This supports:
- Root cause analysis
- Legal defense if needed
- Regulatory inquiries
- Improvement efforts

---


## Incident Response Checklist


### Preparation

<!-- component:checklist:checklist-preparation -->
- [ ] Incident response plan documented
- [ ] Response team identified with contact info
- [ ] Severity levels defined
- [ ] Playbooks created for common scenarios
- [ ] Communication templates ready
- [ ] Incident tracking system in place


### During Incident

- [ ] Incident acknowledged and classified
- [ ] Incident commander assigned
- [ ] Severity assessed
- [ ] Stakeholders notified
- [ ] Containment implemented (if needed)
- [ ] Regular status updates provided
- [ ] Timeline documented
- [ ] Evidence preserved


### After Incident

- [ ] Service restored
- [ ] All-clear communicated
- [ ] Post-incident review scheduled
- [ ] PIR conducted and documented
- [ ] Action items assigned and tracked
- [ ] Playbooks updated if needed
- [ ] Monitoring improved if gaps found

---


## Conclusion

AI incidents are inevitable—no system is perfect, data changes, and models drift. What separates responsible AI operations from chaos is having a plan for when things go wrong.

Key takeaways:

<!-- component:flowchart:flowchart-conclusion -->
1. **Prepare before incidents happen:** Plans, playbooks, and teams should be ready.

2. **Detect quickly:** AI incidents can be silent; monitoring and user feedback are essential.

3. **Contain immediately:** Stop ongoing harm first, investigate second.

4. **Find the root cause:** Don't just fix the symptom; understand what actually went wrong.

5. **Recover carefully:** Validate fixes before full restoration.

6. **Learn and improve:** Every incident is an opportunity to prevent future incidents.

7. **Communicate appropriately:** Keep stakeholders informed without over-promising.

The goal isn't to prevent all incidents—that's impossible. The goal is to detect them quickly, respond effectively, and continuously improve.

---


## Sources and Further Reading

1. **AI Incident Database** - Repository of AI incidents. Available at: incidentdatabase.ai

2. **Google SRE Book** - Incident response chapters. Available at: sre.google/sre-book

3. **PagerDuty Incident Response Guide** - Best practices. Available at: response.pagerduty.com

4. **NIST Cybersecurity Framework** - Incident response. Available at: nist.gov

5. **Partnership on AI** - AI incident reporting. Available at: partnershiponai.org

6. **Etsy** - Blameless postmortems. Available at: etsy.com/codeascraft

7. **Microsoft** - AI incident management. Available at: docs.microsoft.com

8. **EU AI Act** - Incident reporting requirements. Available at: eur-lex.europa.eu

9. **AIAAIC** - AI/Algorithm Incident Repository. Available at: aiaaic.org

10. **IEEE** - AI system failure modes research. Available at: ieee.org

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
