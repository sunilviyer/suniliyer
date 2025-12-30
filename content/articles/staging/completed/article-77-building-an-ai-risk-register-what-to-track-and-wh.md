---
title: Article 77: Building an AI Risk Register – What to Track and Why
slug: article-77-building-an-ai-risk-register-what-to-track-and-wh
path: risk
tldr: Many organizations have enterprise risk registers.
contentSections:
  - Why AI Needs Its Own Risk Register
  - Anatomy of an AI Risk Register
  - AI Risk Categories
  - Building Your Risk Register: Step by Step
  - Example: Populated Risk Register Entries
  - Maintaining Your Risk Register
  - Using the Risk Register
  - Technology Considerations
relatedConcepts: []
crossPathRefs:
tags:
  - article
  - building
  - ai governance
  - risk register
  - what
category: AI Risks & Principles
image: article-77-building-an-ai-risk-register-what-to-track-and-wh.jpg
imageAlt: Article 77: Building an AI Risk Register – What to Track and Why
author: Sunil Iyer
publishDate: 2025-12-23
readingTime: 13
seoTitle: Article 77: Building an AI Risk Register – What to Track and
seoDescription: Many organizations have enterprise risk registers.
---



## Why AI Needs Its Own Risk Register


### Can't We Just Use the Existing Risk Register?

Many organizations have enterprise risk registers. Can't AI risks just go there?

In theory, yes. In practice, AI risks often need:

**Different expertise to assess:** AI risks involve technical concepts (model drift, adversarial attacks) that general risk managers may not understand.

**Different monitoring:** AI systems require ongoing technical monitoring that differs from traditional risk tracking.

**Different stakeholders:** AI governance involves data scientists, ML engineers, and AI ethicists who may not engage with general enterprise risk.

**Different detail:** AI risks often need technical documentation that would clutter a general register.

**Better integration:** AI-specific risks need to be managed alongside AI-specific governance activities.


### The Hybrid Approach

Most organizations benefit from:
- A detailed **AI risk register** managed by AI governance function
- Key AI risks **rolled up** to the enterprise risk register for executive visibility
- **Alignment** in risk taxonomy and rating scales for comparability

This gives you specialized management while maintaining enterprise integration.

---


## Anatomy of an AI Risk Register


### Essential Fields

Every AI risk register should include:

| Field | Purpose | Example |
<!-- component:table:table-essential-fields -->
|-------|---------|---------|
| Risk ID | Unique identifier | AI-R-001 |
| Risk Name | Short descriptive title | Hiring AI gender bias |
| AI System | Which system is affected | Resume Screening v2.1 |
| Risk Description | Detailed explanation | The resume screening AI may disadvantage female candidates due to training data reflecting historical hiring patterns |
| Risk Category | Classification | Fairness/Bias |
| Likelihood | Probability of occurrence | Medium |
| Impact | Severity if occurs | High |
| Risk Level | Combined rating | High |
| Risk Owner | Accountable person | Sarah Chen, Head of HR Tech |
| Current Controls | What's in place | Annual bias audit, human review of rejections |
| Control Effectiveness | How well controls work | Partially Effective |
| Mitigation Actions | Planned improvements | Retrain model with balanced data by Q2 |
| Action Owner | Who's responsible for action | Data Science Team |
| Due Date | When action should complete | March 31, 2025 |
| Status | Current state | In Progress |
| Last Updated | Currency of information | October 15, 2024 |
| Notes | Additional context | Regulatory inquiry received July 2024 |


### Enhanced Fields for Mature Programs

As your program matures, consider adding:

| Field | Purpose |
<!-- component:table:table-enhanced-fields-for-mature-programs -->
|-------|---------|
| Affected Stakeholders | Who's impacted (customers, employees, public) |
| Regulatory Relevance | Which regulations apply (EU AI Act, LL144, etc.) |
| Residual Risk | Risk level after controls |
| Risk Appetite Alignment | Within/outside organizational tolerance |
| Linked Risks | Related risks that should be managed together |
| Incident History | Past incidents related to this risk |
| Key Risk Indicator | Metric that signals risk level |
| Monitoring Frequency | How often risk is reviewed |
| Escalation Triggers | When to escalate to leadership |

---


## AI Risk Categories


### A Practical Taxonomy

Organizing risks by category helps ensure complete coverage and enables meaningful reporting. Here's a practical AI risk taxonomy:

**1. Fairness and Bias**
- Demographic bias (race, gender, age, etc.)
- Proxy discrimination (indirect bias through correlated features)
- Historical bias (training data reflects past discrimination)
- Representation bias (underrepresented groups in data)

**2. Transparency and Explainability**
- Opacity (decisions can't be explained)
- Lack of disclosure (users don't know AI is used)
- Insufficient explanation (explanations don't satisfy stakeholders)
- Audit trail gaps (can't reconstruct decisions)

**3. Privacy and Data**
- Training data privacy (personal data in training sets)
- Input data privacy (personal data processed)
- Inference privacy (AI reveals sensitive information)
- Data quality (inaccurate, outdated, incomplete data)

**4. Safety and Reliability**
- Physical safety (AI causes physical harm)
- Psychological safety (AI causes mental distress)
- System reliability (AI fails or produces errors)
- Performance degradation (AI quality declines over time)

**5. Security**
- Adversarial attacks (inputs designed to fool AI)
- Data poisoning (training data manipulation)
- Model theft (extraction of proprietary models)
- Infrastructure security (systems hosting AI)

**6. Accountability and Governance**
- Unclear ownership (no one responsible for AI)
- Inadequate oversight (insufficient human involvement)
- Documentation gaps (poor records)
- Compliance failures (regulatory violations)

**7. Third-Party and Supply Chain**
- Vendor AI risks (risks from AI providers)
- Transparency gaps (can't assess vendor AI)
- Dependency risks (over-reliance on third-party AI)
- Contract gaps (inadequate AI provisions)

**8. Operational**
- Integration failures (AI doesn't work with other systems)
- Scalability issues (AI can't handle volume)
- Maintenance challenges (AI hard to update)
- Skill gaps (lack of expertise to manage AI)

---


## Building Your Risk Register: Step by Step


### Step 1: Define Your Scope

What will your register cover?

**By system:** All AI systems in your inventory

**By business unit:** AI risks within specific departments

**By risk level:** Only high and critical risks (with lower risks tracked elsewhere)

**By regulation:** Risks relevant to specific compliance requirements

Start with a manageable scope. You can expand later.

<!-- component:template:template-step-2-create-your-template -->

### Step 2: Create Your Template

Design your register structure. Options:

**Spreadsheet:** Simple, accessible, but limited collaboration and version control. Good for starting.

**GRC Platform:** Professional risk management software. Better for mature programs.

**Database/Custom Application:** Tailored to your needs. Requires development investment.

**Hybrid:** Spreadsheet for working register, rolled up to GRC for enterprise visibility.


### Step 3: Establish Your Scales

Define consistent rating scales for likelihood and impact:

**Likelihood Scale:**

| Rating | Definition | Timeframe |
<!-- component:table:table-step-3-establish-your-scales -->
|--------|------------|-----------|
| High | Likely to occur | Within 1 year |
| Medium | Could occur | Within 2 years |
| Low | Unlikely | Beyond 2 years |

**Impact Scale:**

| Rating | Financial | Reputational | Regulatory | Individual Harm |
<!-- component:table:table-step-3-establish-your-scales -->
|--------|-----------|--------------|------------|-----------------|
| High | >$1M | Major media coverage | Enforcement action | Significant harm |
| Medium | $100K-$1M | Industry coverage | Regulatory inquiry | Moderate harm |
| Low | <$100K | Limited coverage | Minor issue | Minor harm |

**Risk Level Matrix:**

|  | Low Impact | Medium Impact | High Impact |
<!-- component:table:table-step-3-establish-your-scales -->
|--|------------|---------------|-------------|
| High Likelihood | Medium | High | Critical |
| Medium Likelihood | Low | Medium | High |
| Low Likelihood | Low | Low | Medium |


### Step 4: Conduct Initial Population

Gather risks from:

- Existing AI risk assessments
- AI system inventory (document known risks)
- Incident reports (historical problems)
- Audit findings (internal and external)
- Stakeholder interviews (concerns from teams)
- Industry research (common AI risks in your sector)

For each risk, complete all register fields.


### Step 5: Validate and Prioritize

Review populated register with stakeholders:

- Are risk descriptions accurate and complete?
- Are likelihood and impact ratings appropriate?
- Are the right owners assigned?
- Are mitigation actions realistic?

Prioritize attention on high and critical risks.


### Step 6: Establish Governance

Define how the register will be maintained:

- **Update frequency:** How often is the register reviewed?
- **Responsibilities:** Who updates entries? Who reviews?
- **Approval process:** Who approves changes to risk ratings?
- **Escalation paths:** When are risks escalated to leadership?
- **Reporting cadence:** How often are summaries shared?

---


## Example: Populated Risk Register Entries


### Example 1: High-Risk Entry

```
═══════════════════════════════════════════════════════════════
RISK ENTRY: AI-R-007
═══════════════════════════════════════════════════════════════

Basic Information:
─────────────────
Risk Name: Customer Service Chatbot Discrimination
AI System: Support Bot v3.2
Category: Fairness/Bias
Status: Open - In Progress

Risk Description:
─────────────────
The customer service chatbot may provide different quality of 
service based on customer name, language patterns, or other 
characteristics that correlate with protected classes. Internal 
testing showed 12% longer resolution times for non-English 
names.

Assessment:
───────────
Likelihood: Medium (testing showed issues; production impact 
unknown)
Impact: High (significant regulatory exposure, customer harm, 
reputational damage)
Risk Level: HIGH

Current Controls:
─────────────────
- Human escalation option available
- Quarterly satisfaction surveys
- Complaint tracking system

Control Effectiveness: Partially Effective (issues not 
consistently detected)

Mitigation Plan:
────────────────
1. Conduct comprehensive bias audit - Data Science - Due: Nov 30
2. Implement real-time fairness monitoring - Engineering - 
   Due: Dec 31
3. Retrain model with bias mitigation - Data Science - Due: Jan 31
4. Establish ongoing monitoring dashboard - Analytics - Due: Feb 15

Ownership:
──────────
Risk Owner: James Wilson, Director of Customer Experience
Action Owner: Maria Santos, Data Science Lead

Regulatory Relevance:
─────────────────────
- Potentially subject to EU AI Act Art. 52 transparency
- Relevant to consumer protection regulations

Key Risk Indicator: Service time differential across demographic 
proxies (target: <5%)

Monitoring Frequency: Monthly

Last Updated: October 15, 2024

Notes:
──────
Customer complaint received September 2024 alleging 
discriminatory treatment. Under investigation.
═══════════════════════════════════════════════════════════════
```


### Example 2: Medium-Risk Entry

```
═══════════════════════════════════════════════════════════════
RISK ENTRY: AI-R-023
═══════════════════════════════════════════════════════════════

Basic Information:
─────────────────
Risk Name: Demand Forecasting Model Drift
AI System: Inventory Optimizer v4.1
Category: Reliability
Status: Open - Monitoring

Risk Description:
─────────────────
The demand forecasting model was trained on pre-pandemic data and 
may not accurately predict current demand patterns. Initial 
accuracy was 92%; current accuracy measured at 84%. Continued 
degradation could lead to significant inventory mismanagement.

Assessment:
───────────
Likelihood: High (degradation already observed)
Impact: Medium (financial impact, no customer harm)
Risk Level: MEDIUM

Current Controls:
─────────────────
- Weekly accuracy monitoring
- Manual override capability
- Quarterly model review

Control Effectiveness: Effective (degradation is detected; 
response process working)

Mitigation Plan:
────────────────
1. Model retraining with recent data - Due: Q4 2024 (Scheduled)

Ownership:
──────────
Risk Owner: Thomas Lee, Supply Chain Director
Action Owner: Forecasting Team

Key Risk Indicator: Forecast accuracy (target: >90%)

Monitoring Frequency: Weekly

Last Updated: October 10, 2024
═══════════════════════════════════════════════════════════════
```

---


## Maintaining Your Risk Register


### Regular Review Cadence

**Weekly (for critical/high risks):**
- Status update on mitigation actions
- Check key risk indicators
- Note any incidents or changes

**Monthly (full register):**
- Review all open risks
- Update likelihood/impact if changed
- Check progress on actions
- Identify new risks

**Quarterly:**
- Full risk reassessment
- Report to leadership
- Update risk appetite alignment
- Archive closed risks


### Triggers for Updates

Update the register when:

| Trigger | Action |
<!-- component:table:table-triggers-for-updates -->
|---------|--------|
| New AI system deployed | Add associated risks |
| Risk assessment completed | Add/update risks |
| Incident occurs | Update relevant risk, add if new |
| Control implemented | Update control effectiveness |
| Mitigation completed | Update status, assess residual risk |
| Regulatory change | Assess impact on existing risks |
| AI system changed | Reassess related risks |
| External event | Assess if risk likelihood changed |


### Common Maintenance Mistakes

**Mistake 1: Register goes stale**
Risks are added but never updated. Register becomes unreliable.
*Fix:* Schedule regular reviews and assign clear responsibility.

**Mistake 2: Too much detail**
Register becomes unwieldy with minor risks and excessive documentation.
*Fix:* Use risk thresholds. Track minor risks elsewhere.

**Mistake 3: Wrong owners**
Risk owners don't know they're owners or can't influence the risk.
*Fix:* Confirm ownership when assigning. Choose people with authority.

**Mistake 4: Actions without follow-through**
Mitigation actions listed but never completed.
*Fix:* Integrate with project management. Report on action completion.

**Mistake 5: Disconnected from decisions**
Register exists but doesn't influence actual decisions.
*Fix:* Use register in governance meetings. Require reference in approvals.

---


## Using the Risk Register


### For Governance Decisions

The register should inform key decisions:

**AI System Approvals:**
"What are the known risks for this system? Are they within tolerance?"

**Resource Allocation:**
"Where should we invest in risk mitigation?"

**Audit Planning:**
"Which systems have the highest risks and need audit attention?"

**Vendor Selection:**
"What risks come with this AI vendor? Are they acceptable?"


### For Reporting

The register enables meaningful risk reporting:

**Executive Dashboard:**
```
AI RISK SUMMARY - Q4 2024
─────────────────────────
Total AI Systems: 23
Total Open Risks: 47

Risk Distribution:
  Critical: 2 (↓1 from last quarter)
  High: 8 (↔ stable)
  Medium: 24 (↑3)
  Low: 13 (↓2)

Actions Due This Quarter: 15
Actions Completed: 9
Actions Overdue: 3

Key Concerns:
1. Hiring AI bias risk (AI-R-001) - Critical
   Action: External audit scheduled November
2. Chatbot discrimination (AI-R-007) - High
   Action: Mitigation in progress
```

**Trend Analysis:**
Track risk levels over time. Are risks increasing or decreasing? Are mitigations effective?

**Category Analysis:**
Which risk categories are most prevalent? Where do you need to strengthen capabilities?


### For Audit and Compliance

The register provides evidence:

**Regulatory Inquiries:**
"Show us how you manage AI risks."
*Response:* Here's our risk register with all identified risks, controls, and mitigations.

**Internal Audit:**
"What AI risks exist and how are they managed?"
*Response:* Risk register provides complete inventory and management status.

**External Audit:**
"Demonstrate your AI governance program."
*Response:* Risk register shows systematic risk identification and treatment.

---


## Technology Considerations


### Spreadsheet-Based Registers

**Pros:**
- Easy to start
- Familiar to most users
- No cost
- Flexible

**Cons:**
- Version control challenges
- Limited collaboration
- Manual reporting
- No workflow automation

**Best for:** Small programs, early stages, limited budget

<!-- component:template:template-grc-platforms -->

### GRC Platforms

**Pros:**
- Professional workflow
- Audit trails
- Automated reporting
- Integration with enterprise risk

**Cons:**
- Cost
- Implementation effort
- May be overkill for small programs

**Examples:** ServiceNow GRC, Archer, MetricStream

**Best for:** Mature programs, regulated industries, large organizations

<!-- component:template:template-specialized-ai-governance-platforms -->

### Specialized AI Governance Platforms

**Pros:**
- AI-specific features
- Model monitoring integration
- Tailored workflows

**Cons:**
- Emerging market
- May not integrate with enterprise systems
- Varying maturity

**Examples:** Credo AI, Fairly AI, IBM AI Governance

**Best for:** Organizations with significant AI portfolios

---


## Conclusion

An AI risk register isn't exciting. It's not cutting-edge AI or innovative governance. It's a spreadsheet with columns.

But that boring spreadsheet is what turns AI governance from aspiration to action. It's where abstract risks become concrete items. It's where accountability becomes clear. It's where progress becomes visible.

Key takeaways:

<!-- component:flowchart:flowchart-conclusion -->
1. **Start simple:** A basic spreadsheet is better than no register.

2. **Be consistent:** Use standard fields, scales, and categories.

3. **Assign ownership:** Every risk needs an owner who can actually influence it.

4. **Maintain actively:** A stale register is worse than none—it creates false confidence.

5. **Use it:** The register should drive decisions, not just document risks.

6. **Connect up:** Roll key risks to enterprise risk management for visibility.

Your AI risk register won't make headlines. But it will make AI governance work.

---


## Sources and Further Reading

1. **ISO 31000:2018** - Risk management principles (includes risk register concepts). Available at: iso.org

2. **NIST AI RMF** - Risk management framework informing register design. Available at: nist.gov/itl/ai-risk-management-framework

3. **COSO ERM** - Enterprise risk management framework. Available at: coso.org

4. **IRM (Institute of Risk Management)** - Risk register guidance. Available at: theirm.org

5. **ISACA** - AI governance and risk resources. Available at: isaca.org

6. **FAIR Institute** - Quantitative risk analysis approaches. Available at: fairinstitute.org

7. **EU AI Act** - Requirements informing risk categories. Available at: eur-lex.europa.eu

8. **OECD** - AI risk classification resources. Available at: oecd.ai

9. **Partnership on AI** - AI Incident Database for risk identification. Available at: partnershiponai.org

10. **MIT SMR** - AI governance research. Available at: sloanreview.mit.edu

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
