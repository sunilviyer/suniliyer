---
title: 'Article 106: Third-Party AI Risk – Vendor Assessment and Management'
tldr: ''
category: AI Auditing & Accountability
learning_objectives:
- Understand the key concepts and principles of ai governance frameworks
- Implement compliance strategies in real-world scenarios
- Evaluate regulatory requirements for organizational compliance
seo_keywords:
- article
- third
- AI governance
- AI ethics
- AI risk management
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: audit checklist, magnifying glass over AI system, accountability chain visualization,
    checklist, magnifying glass, inspection tools, quality badges, shield icons, warning
    triangles, protective barriers, safety nets, professional illustration, modern
    flat design style, clean and authoritative, high quality, blue and gray color
    scheme with accent colors, suitable for professional article header
- type: table
  label: Traditional Vendor Risk vs Third-Party AI Risk Table
  section: Why Third-Party AI Risk Is Different
  id: table-why-third-party-ai-risk-is-different
- type: table
  label: Risk vs Mitigation Strategies Table
  section: Mitigation by Risk Type
  id: table-mitigation-by-risk-type
- type: flowchart
  label: Discovery Challenge Process
  section: Discovery Challenge
  id: flowchart-discovery-challenge
- type: flowchart
  label: Due Diligence Questions Process
  section: Due Diligence Questions
  id: flowchart-due-diligence-questions
- type: flowchart
  label: Vendor Tiers Process
  section: Vendor Tiers
  id: flowchart-vendor-tiers
- type: flowchart
  label: Conclusion Process
  section: Conclusion
  id: flowchart-conclusion
- type: flowchart
  label: Sources and Further Reading Process
  section: Sources and Further Reading
  id: flowchart-sources-and-further-reading
- type: template
  label: '- Example'
  section: Types of Third-Party AI
  id: template-types-of-third-party-ai
  template_link: /templates/-example.md
- type: list
  label: Common Mistakes
  section: Common Mistakes
  id: list-common-mistakes
topic_fingerprint:
- nlp
- oversight
- transparency
- risk assessment
- fairness
named_examples:
- defense
- eu ai act
- fair
- iso
- nist
- occ
- openai
word_count: 1529
processed_date: '2025-12-18T20:04:44.774Z'
---


## The Third-Party AI Landscape


### Types of Third-Party AI

**Embedded AI in SaaS products:**
AI features built into software you already use.
<!-- component:template:template-types-of-third-party-ai -->
- Example: Resume screening in your HR system
- Risk: May not realize AI is being used

**AI-as-a-Service:**
AI capabilities accessed via API.
<!-- component:template:template-types-of-third-party-ai -->
- Example: OpenAI API, cloud vision services
- Risk: Rapid changes, limited transparency

**AI platforms:**
Tools for building and deploying AI.
<!-- component:template:template-types-of-third-party-ai -->
- Example: AutoML platforms, model marketplaces
- Risk: Responsibility for how you use them

**Outsourced AI development:**
Custom AI built by external parties.
<!-- component:template:template-types-of-third-party-ai -->
- Example: Consulting firm building a model
- Risk: Knowledge transfer, ongoing maintenance


### Why Third-Party AI Risk Is Different

| Traditional Vendor Risk | Third-Party AI Risk |
<!-- component:table:table-why-third-party-ai-risk-is-different -->
|------------------------|---------------------|
| Known functionality | AI behavior may be unpredictable |
| Static between updates | AI may learn and change continuously |
| Clear inputs and outputs | Black box decision-making |
| Quality is stable | Model performance can degrade |
| One-time assessment | Ongoing monitoring required |
| Liability is clear | Shared responsibility, unclear liability |

---


## Identifying Third-Party AI


### Discovery Challenge

Many organizations don't know what third-party AI they're using.

**Hidden AI:**
- AI features enabled by default in SaaS
- AI in plugins or integrations
- AI used by vendors to process your data
- AI buried in terms of service

**Discovery questions:**
<!-- component:flowchart:flowchart-discovery-challenge -->
1. Does this vendor use AI, ML, or algorithms?
2. Does AI affect our data or our customers?
3. Are automated decisions being made?
4. Could AI features be enabled without our knowledge?


### Third-Party AI Inventory

Add vendor AI to your AI inventory:

```
THIRD-PARTY AI INVENTORY FIELDS

Vendor Information:
├── Vendor Name
├── Contract Reference
├── Relationship Owner
└── Contract Expiration

AI System Details:
├── AI Feature/System Name
├── Description
├── AI Type (ML, NLP, etc.)
└── Version/Last Updated

Usage:
├── How We Use It
├── Data We Provide
├── Decisions Affected
└── Users/Customers Affected

Risk:
├── Risk Classification
├── Assessment Status
├── Key Concerns
└── Monitoring Status
```

---


## Third-Party AI Risk Assessment


### Risk Categories

**Performance risk:**
- Model accuracy degrades
- Performance varies across populations
- Doesn't work in your context

**Bias and fairness risk:**
- Discriminates against protected groups
- Amplifies historical biases
- Unfair outcomes for your customers

**Transparency risk:**
- Can't explain decisions
- Black box to your organization
- Users can't understand or challenge

**Security risk:**
- Adversarial vulnerabilities
- Data exposure
- Model theft or manipulation

**Privacy risk:**
- Data used for training without consent
- Retention beyond necessity
- Cross-customer data leakage

**Dependency risk:**
- Vendor discontinues product
- API changes break your integration
- No alternative available

**Compliance risk:**
- Doesn't meet regulatory requirements
- Documentation inadequate
- Can't demonstrate compliance


### Risk Assessment Framework

```
THIRD-PARTY AI RISK ASSESSMENT

Step 1: Understand the AI
├── What does the AI do?
├── What decisions does it affect?
├── What data does it use?
└── Who is affected?

Step 2: Assess Inherent Risk
├── Consequence if wrong (high/medium/low)
├── Sensitivity of data used
├── Regulatory requirements
└── Volume of affected decisions

Step 3: Evaluate Vendor Controls
├── How is the AI developed?
├── What testing is performed?
├── How is bias addressed?
├── What documentation exists?
└── How is the AI monitored?

Step 4: Identify Gaps
├── What controls are missing?
├── What information is unavailable?
├── What risks aren't addressed?
└── What questions are unanswered?

Step 5: Determine Residual Risk
├── Risk after vendor controls
├── Risk we can mitigate ourselves
├── Risk we must accept
└── Risk that's unacceptable
```

---


## Vendor Due Diligence


### Pre-Contract Due Diligence

Before signing a contract for AI:

**Technical due diligence:**
```
TECHNICAL ASSESSMENT CHECKLIST

AI System Information:
□ Model type and architecture described
□ Training data sources documented
□ Performance metrics provided
□ Bias testing results available
□ Update/retraining process explained

Data Handling:
□ Data usage terms clear
□ Data not used for other customers
□ Data not used to train shared models (without consent)
□ Data retention limits defined
□ Data deletion process documented

Security:
□ Security certifications (SOC 2, ISO 27001)
□ Vulnerability management process
□ Incident response capability
□ Access controls documented
□ Encryption standards met
```

**Governance due diligence:**
```
GOVERNANCE ASSESSMENT CHECKLIST

Vendor AI Governance:
□ AI ethics policy exists
□ AI development standards documented
□ Testing and validation process defined
□ Change management process exists
□ Incident response process documented

Transparency:
□ Can explain how AI reaches conclusions
□ Documentation sufficient for our needs
□ Will disclose significant changes
□ Audit access available

Compliance:
□ Relevant regulatory compliance demonstrated
□ Can support our compliance requirements
□ Will cooperate with audits
□ Documentation supports regulatory needs
```

**Reference checks:**
- Other customers' experiences
- Any known issues or incidents
- Responsiveness to problems
- Quality of documentation


### Due Diligence Questions

Questions to ask vendors:

**About the AI:**
<!-- component:flowchart:flowchart-due-diligence-questions -->
1. How does your AI system work at a high level?
2. What data was used to train the model?
3. What is the accuracy/performance of the model?
4. Have you tested for bias? What were the results?
5. How do you validate the model works correctly?

**About data:**
6. How will our data be used?
7. Will our data train models used by others?
8. How long do you retain our data?
9. Can we get our data back? In what format?
10. What happens to our data if we terminate?

**About governance:**
11. Do you have an AI ethics policy?
12. How do you ensure your AI is fair and unbiased?
13. What testing do you perform before release?
14. How do you handle reported issues?
15. What documentation can you provide?

**About changes:**
16. How often does the model change?
17. Will you notify us of significant changes?
18. Can we test changes before they affect us?
19. Can we opt out of updates?
20. What's your process for deprecating features?

---


## Vendor Monitoring


### Ongoing Oversight

Due diligence isn't just pre-contract. Monitor vendors continuously:

**Performance monitoring:**
- Track AI performance in your context
- Compare to baseline and expectations
- Watch for degradation over time

**Change monitoring:**
- Receive notifications of updates
- Assess significant changes
- Test changes when possible

**Incident monitoring:**
- Track vendor incidents
- Monitor for issues affecting you
- Stay informed of industry problems

**Compliance monitoring:**
- Verify ongoing compliance
- Monitor regulatory changes
- Ensure continued alignment


### Monitoring Dashboard

```
THIRD-PARTY AI MONITORING

Vendor: TalentAI Corp
System: Resume Screening API
Risk Level: High
Last Assessment: 2024-01-15

PERFORMANCE
├── Response time: 245ms (target: <500ms) ✓
├── Error rate: 0.02% (target: <0.1%) ✓
├── Our accuracy check: 82% (baseline: 85%) ⚠️
└── Bias test (quarterly): Due in 15 days

VENDOR STATUS
├── Last update: 2024-02-28 (v3.2.1)
├── Reported incidents: None active
├── Contract status: Active until 2025-06-30
└── Review due: 2024-04-15

ISSUES
├── Open: 1 (minor performance variance)
├── Resolved (90d): 2
└── Escalated: 0

ACTIONS
├── Schedule quarterly bias test
├── Discuss performance variance with vendor
└── Review contract 90 days before renewal
```


### Periodic Reassessment

**Annual comprehensive review:**
- Full risk reassessment
- Performance evaluation
- Contract terms review
- Alternative evaluation
- Relationship health check

**Triggered reassessment:**
- Major vendor update
- Reported incidents
- Regulatory changes
- Significant issues discovered
- Business needs change

---


## Risk Mitigation Strategies


### Mitigation Options

**Accept the risk:**
- Risk is within tolerance
- Document acceptance decision
- Monitor for changes

**Mitigate with controls:**
- Add your own testing
- Implement monitoring
- Add human review
- Limit usage scope

**Transfer the risk:**
- Contract terms (indemnification)
- Insurance coverage
- Liability allocation

**Avoid the risk:**
- Don't use that AI feature
- Select different vendor
- Build internally instead


### Mitigation by Risk Type

| Risk | Mitigation Strategies |
<!-- component:table:table-mitigation-by-risk-type -->
|------|----------------------|
| **Bias** | Conduct your own testing; require vendor testing; monitor outcomes |
| **Performance** | Test before production; monitor continuously; set performance SLAs |
| **Transparency** | Require documentation; audit rights; explanation capabilities |
| **Security** | Security requirements; audit rights; incident notification |
| **Privacy** | Data usage restrictions; retention limits; deletion rights |
| **Dependency** | Data portability; exit planning; alternative evaluation |
| **Compliance** | Regulatory attestations; audit cooperation; documentation |


### Compensating Controls

When vendor controls are insufficient:

```
COMPENSATING CONTROLS EXAMPLES

Vendor doesn't test for bias:
→ We conduct our own bias testing quarterly
→ We sample and review decisions manually
→ We monitor outcome distributions

Vendor updates without notice:
→ We version-lock where possible
→ We test in staging before production
→ We monitor for performance changes

Vendor can't explain decisions:
→ We limit to advisory use (human decides)
→ We document human review process
→ We provide alternative explanation to users
```

---


## Incident Management


### Vendor AI Incidents

When something goes wrong with vendor AI:

**Detection:**
- Your monitoring detects issue
- Vendor notifies you
- User/customer reports problem
- Media or regulatory attention

**Response:**

```
VENDOR AI INCIDENT RESPONSE

1. ASSESS
├── What is the issue?
├── How severe is it?
├── Who is affected?
└── Is it ongoing?

2. CONTAIN
├── Can we disable the feature?
├── Can we switch to fallback?
├── Do we need to pause usage?
└── What's the business impact?

3. COORDINATE WITH VENDOR
├── Report the issue formally
├── Get acknowledgment
├── Request investigation timeline
├── Establish communication cadence

4. COMMUNICATE
├── Internal stakeholders
├── Affected customers (if appropriate)
├── Regulators (if required)
└── Legal counsel (if significant)

5. RESOLVE AND REVIEW
├── Verify fix is effective
├── Document what happened
├── Assess vendor response
├── Update risk assessment
└── Consider relationship implications
```


### Escalation

When to escalate vendor issues:

- Vendor unresponsive
- Issue causing significant harm
- Compliance implications
- Reputational exposure
- Need for legal or executive involvement

---


## Relationship Management


### Vendor Tiers

Not all vendors need the same oversight:

**Tier 1 (Critical):**
- High-risk AI
- Significant business dependency
- Customer-facing decisions

<!-- component:flowchart:flowchart-vendor-tiers -->
→ Intensive oversight, regular engagement, executive relationship

**Tier 2 (Important):**
- Medium-risk AI
- Business value but alternatives exist
- Some customer impact

→ Regular oversight, periodic engagement, defined escalation

**Tier 3 (Standard):**
- Low-risk AI
- Limited business impact
- Easily replaceable

→ Standard oversight, issue-based engagement


### Building Effective Relationships

**Regular engagement:**
- Scheduled review meetings
- Roadmap discussions
- Issue resolution
- Relationship health

**Mutual accountability:**
- Clear expectations both ways
- Performance metrics
- Escalation paths
- Partnership mindset

**Exit planning:**
- Know how to leave if needed
- Data portability rights
- Transition planning
- Alternative identification

---

<!-- component:list:list-common-mistakes -->

## Common Mistakes


### Mistake 1: Treating AI Like Any Software

**The error:** Standard vendor management without AI-specific considerations.

**The problem:** Miss bias, performance drift, explainability issues.

**The fix:** AI-specific due diligence and monitoring.


### Mistake 2: Trust Without Verify

**The error:** Accepting vendor claims without evidence.

**The problem:** Vendor says "no bias" but hasn't actually tested.

**The fix:** Require evidence; conduct independent testing.


### Mistake 3: One-Time Assessment

**The error:** Assess at contract time, never again.

**The problem:** AI changes; risks evolve; performance degrades.

**The fix:** Ongoing monitoring and periodic reassessment.


### Mistake 4: Assuming Vendor Liability

**The error:** Thinking the vendor is responsible for AI problems.

**The problem:** You may still be legally liable for harm.

**The fix:** Understand your liability; don't rely on contract alone.


### Mistake 5: No Exit Strategy

**The error:** Deep vendor dependency without exit plan.

**The problem:** Trapped if vendor fails, becomes unacceptable, or is acquired.

**The fix:** Maintain data portability; know alternatives; plan for exit.

---


## Conclusion

Third-party AI is often the fastest path to AI capability, but it comes with risks that traditional vendor management doesn't address. When you use vendor AI, you're still responsible for outcomes affecting your customers, employees, and stakeholders.

Key takeaways:

<!-- component:flowchart:flowchart-conclusion -->
1. **Know what you have:** Discover all third-party AI in your organization.

2. **Assess before buying:** AI-specific due diligence before signing contracts.

3. **Monitor continuously:** Performance, changes, incidents, and compliance.

4. **Mitigate gaps:** Compensating controls when vendor controls are insufficient.

5. **Manage incidents:** Clear process for when vendor AI fails.

6. **Plan for exit:** Data portability, alternatives, and transition capability.

7. **Own the responsibility:** Vendor relationship doesn't transfer your liability.

Third-party AI can be a great choice—but only with proper risk management.

---


## Sources and Further Reading

1. **NIST AI RMF** - Third-party AI considerations. Available at: nist.gov

2. **EU AI Act** - Provider and deployer responsibilities. Available at: eur-lex.europa.eu

3. **OCC Bulletin 2013-29** - Third-party risk management. Available at: occ.gov

4. **Shared Assessments** - Third-party risk management resources. Available at: sharedassessments.org

5. **ISACA** - AI vendor assessment frameworks. Available at: isaca.org

6. **Gartner** - Third-party AI risk research. Available at: gartner.com

7. **McKinsey** - AI vendor management. Available at: mckinsey.com

8. **World Economic Forum** - AI procurement guidance. Available at: weforum.org

9. **IAPP** - Vendor AI and privacy. Available at: iapp.org

10. **EY** - Third-party AI risk management. Available at: ey.com

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
