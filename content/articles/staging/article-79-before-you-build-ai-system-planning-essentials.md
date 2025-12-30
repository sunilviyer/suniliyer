---
title: Article 79: Before You Build – AI System Planning Essentials
slug: article-79-before-you-build-ai-system-planning-essentials
path: responsibility
tldr: You might think: "We plan all our projects.
contentSections:
  - Why Planning Matters More for AI
  - Planning Essential #1: Problem Definition
  - Planning Essential #2: Stakeholder Identification
  - Planning Essential #3: Feasibility Assessment
  - Planning Essential #4: Ethical Pre-Screening
  - Planning Essential #5: Governance Setup
  - Bringing It Together: The Planning Checklist
  - Common Planning Pitfalls
relatedConcepts: []
crossPathRefs:
tags:
  - article
  - before
  - ai governance
  - ai ethics
  - before you build
category: Governance Implementation
image: article-79-before-you-build-ai-system-planning-essentials.jpg
imageAlt: Article 79: Before You Build – AI System Planning Essentials
author: Sunil Iyer
publishDate: 2025-12-23
readingTime: 14
seoTitle: Article 79: Before You Build – AI System Planning Essentials
seoDescription: You might think: "We plan all our projects.
---



## Why Planning Matters More for AI


### AI Is Different

You might think: "We plan all our projects. What's special about AI?"

Several things make AI planning particularly critical:

**1. AI problems are often ill-defined**

Traditional software has clear specifications: "When user clicks X, do Y." AI problems are messier: "Predict which customers will churn" or "Detect fraudulent transactions." The definition of success is fuzzier and requires more upfront work.

**2. AI impacts are harder to predict**

A traditional software bug produces consistent, reproducible errors. AI systems can produce unexpected behaviors at scale, affecting thousands of people in ways that weren't anticipated.

**3. AI requires data—which requires planning**

You can't build AI without appropriate data. Understanding what data you need, whether you have it, and whether you should use it requires early planning.

**4. AI raises unique ethical questions**

Will this system treat people fairly? Will it respect privacy? Will it be transparent? These questions need answering before design begins, not after deployment.

**5. AI changes how people work**

AI systems often change job roles, decision processes, and organizational dynamics. Planning for this change is essential.


### The Cost of Poor Planning

When AI planning fails, the consequences include:

- **Wasted investment:** Building systems that don't address real needs
- **Delayed value:** Reworking systems that missed requirements
- **Reputational damage:** Deploying AI that harms people or makes headlines
- **Regulatory penalties:** Violating laws that proper planning would have identified
- **Organizational resistance:** Deploying systems that people won't use

---


## Planning Essential #1: Problem Definition


### Start with the Problem, Not the Technology

The biggest planning mistake is starting with "We want to use AI" instead of "We have this problem."

AI is a tool. Like any tool, it's good for some jobs and terrible for others. You wouldn't start a home renovation project by saying "I want to use a hammer"—you'd start by identifying what needs fixing.

**Good problem statements:**

- "Our customer support team can't handle volume during peak times, causing wait times over 30 minutes"
- "We're losing $2M annually to fraudulent transactions we catch too late"
- "Our loan officers make inconsistent decisions on similar applications"

**Bad problem statements:**

- "We need an AI chatbot"
- "Competitors are using machine learning"
- "Our executives want us to innovate with AI"


### The Problem Definition Process

**Step 1: Identify the pain point**

What's not working? What costs too much? What takes too long? What produces poor outcomes?

Talk to people experiencing the problem. Don't assume you know what it is.

<!-- component:template:template-the-problem-definition-process -->
*Example:* A healthcare organization assumed the problem was "doctors need AI to diagnose faster." After talking to doctors, they discovered the real problem was "administrative tasks consume 40% of physician time, reducing patient care capacity."

**Step 2: Quantify the impact**

How big is this problem? What does it cost in money, time, or outcomes?

Numbers matter. "Customer complaints are up" is vague. "Customer complaints increased 45% year-over-year, costing an estimated $500K in churn" is actionable.

**Step 3: Understand root causes**

Why does this problem exist? Is it a process problem? A resource problem? An information problem?

AI solves certain types of problems well—pattern recognition, prediction, automation of cognitive tasks. It doesn't solve organizational dysfunction, poor processes, or political issues.

**Step 4: Define success**

What would solving this problem look like? Be specific.

Not: "Better customer experience"
Yes: "Reduce average response time from 4 hours to 30 minutes while maintaining satisfaction scores above 4.5/5"


### Is AI Even the Right Solution?

After defining the problem, ask: is AI the best approach?

Consider AI when:
- The task involves pattern recognition humans struggle with
- Data exists and is relevant to the problem
- Volume or speed exceeds human capacity
- Consistency is important and currently lacking
- The problem has measurable outcomes

Consider alternatives when:
- The problem is really about process or organization
- Data doesn't exist or isn't accessible
- Decisions require human judgment that can't be modeled
- The stakes are too high for any error
- A simpler solution would work

<!-- component:template:template-is-ai-even-the-right-solution -->
*Example:* A company wanted AI to route customer support tickets to the right team. Analysis revealed that ticket routing was unclear because team responsibilities overlapped confusingly. The real fix was clarifying team roles—no AI needed.

---


## Planning Essential #2: Stakeholder Identification


### Who Cares About This AI?

Every AI system has stakeholders—people who are affected by it, use it, build it, govern it, or care about its outcomes. Identifying them early prevents surprises later.


### Stakeholder Categories

**Direct users:** People who operate or interact with the AI system
- What are their needs?
- What skills do they have?
- How will AI change their work?

**Decision subjects:** People about whom AI makes or influences decisions
- What are their rights?
- What are their vulnerabilities?
- How will they be informed and protected?

**Business owners:** People accountable for the outcomes
- What are their success metrics?
- What risks concern them?
- What resources will they provide?

**Technical teams:** People who build and maintain the system
- What capabilities do they have?
- What constraints do they face?
- What standards do they follow?

**Governance/compliance:** People who ensure the system meets requirements
- What regulations apply?
- What policies govern AI use?
- What approvals are needed?

**Executive sponsors:** Leaders who champion and fund the project
- What's their vision?
- What's their risk tolerance?
- What's their commitment level?

<!-- component:template:template-stakeholder-analysis-template -->

### Stakeholder Analysis Template

For each stakeholder group, document:

| Stakeholder | Interest/Concern | Influence | Engagement Approach |
<!-- component:table:table-stakeholder-analysis-template -->
|-------------|------------------|-----------|---------------------|
| Customer service reps | Job impact, workflow change | Medium | Early involvement, training |
| Customers | Fair treatment, privacy | High | Transparency, opt-out options |
| HR/Legal | Compliance, liability | High | Review process, approvals |
| IT Security | Data protection | Medium | Technical requirements |


### The "Affected But Not Consulted" Problem

Often, the people most affected by AI are least involved in planning. This creates ethical and practical problems.

<!-- component:template:template-the-affected-but-not-consulted-problem -->
*Example:* A company deployed hiring AI without consulting recruiters or candidates. Recruiters felt undermined and started gaming the system. Candidates complained about impersonal experiences. Both problems could have been addressed in planning.

Make sure to include:
- End users (not just managers)
- People whose data is used
- People affected by AI decisions
- People from diverse backgrounds who can spot blind spots

---


## Planning Essential #3: Feasibility Assessment


### Can We Actually Do This?

Enthusiasm about AI potential can overshadow realistic assessment of what's achievable. Feasibility assessment grounds the project in reality.


### Technical Feasibility

**Data availability:**
- Does the data we need exist?
- Can we access it legally and ethically?
- Is it in usable form?
- Is there enough of it?
- Is it representative of the actual problem?

<!-- component:template:template-technical-feasibility -->
*Example:* A retailer wanted AI to predict product returns. They had years of transaction data but no information on why items were returned. The AI could predict which orders were returned but not why—limiting its usefulness for reducing returns.

**Technical capability:**
- Do we have the skills to build this?
- Do we have the infrastructure?
- Is this technically proven or experimental?
- What's the state of the art for this problem?

**Integration:**
- Can AI integrate with existing systems?
- What dependencies exist?
- What changes to other systems are required?


### Organizational Feasibility

**Change readiness:**
- Are people ready to work differently?
- Is there leadership support for change?
- What resistance should we expect?

**Process fit:**
- Does AI fit existing workflows?
- What processes need to change?
- Who decides on process changes?

**Resource availability:**
- Do we have budget?
- Do we have people?
- Do we have time?


### Ethical and Legal Feasibility

**Legal constraints:**
- What regulations apply?
- What data uses are permitted?
- What decisions can AI make legally?

**Ethical considerations:**
- Could this harm people?
- Is this fair to all groups?
- Would we be comfortable if this were public?


### Feasibility Decision Matrix

| Factor | Assessment | Blocker? | Mitigation |
<!-- component:table:table-feasibility-decision-matrix -->
|--------|------------|----------|------------|
| Data availability | Partial data exists | No | Supplement with new collection |
| Technical skill | Gap in ML expertise | No | Hire or partner |
| Regulatory compliance | GDPR applies | No | Privacy review required |
| Change readiness | Resistance expected | Possible | Change management plan |
| Budget | Underfunded | Yes | Rescope or seek more funding |

If blockers exist, address them before proceeding. Don't hope they'll resolve themselves.

---


## Planning Essential #4: Ethical Pre-Screening


### Catching Issues Before They're Built In

Ethics reviews after AI is built are better than nothing—but much worse than considering ethics during planning. Many ethical issues are design choices that become expensive or impossible to change later.


### Key Ethical Questions

**Fairness:**
- Could this AI disadvantage any group?
- What fairness considerations apply to this domain?
- How will we test for and address bias?

**Privacy:**
- What personal data is used?
- Do people expect this use of their data?
- How will privacy be protected?

**Transparency:**
- Can decisions be explained?
- Will people know AI is involved?
- What information will affected parties receive?

**Human autonomy:**
- Does this remove meaningful human choice?
- Is there appropriate human oversight?
- Can people opt out?

**Accountability:**
- Who is responsible for AI outcomes?
- What happens when things go wrong?
- How will complaints be handled?


### Pre-Screening Assessment

For the planned AI system, rate each dimension:

| Dimension | Low Risk | Medium Risk | High Risk |
<!-- component:table:table-pre-screening-assessment -->
|-----------|----------|-------------|-----------|
| Fairness | No protected groups affected | Protected groups in population | History of discrimination in domain |
| Privacy | No personal data | Some personal data | Sensitive personal data |
| Transparency | Easily explainable | Some complexity | Black box decisions |
| Autonomy | Advisory only | Influences significant decisions | Makes final decisions |
| Accountability | Clear ownership | Distributed responsibility | Unclear accountability |

High-risk ratings don't mean "don't proceed"—they mean "proceed with additional safeguards planned from the start."


### When to Stop

Some AI applications should not proceed, regardless of business case:

- Clear legal violations
- Unacceptable harm potential
- Fundamental ethical problems that can't be mitigated
- Organizational unreadiness that can't be addressed

It's better to recognize this in planning than after investment.

---


## Planning Essential #5: Governance Setup


### Don't Bolt Governance On Later

Governance isn't something to add after the AI works. It's how you ensure the AI works right.


### Planning Phase Governance

**Roles and accountability:**
- Who is the executive sponsor?
- Who is the project owner?
- Who is accountable for ethical considerations?
- Who must approve key decisions?

**Decision rights:**
- Who decides if the project proceeds?
- Who decides on scope changes?
- Who decides on risk acceptance?

**Oversight mechanisms:**
- What reviews are required?
- Who conducts them?
- What checkpoints exist?

**Documentation requirements:**
- What must be documented?
- What templates are used?
- Where is documentation stored?


### Planning Phase Documents

Create or initiate these during planning:

**AI Project Charter:**
- Problem statement
- Success criteria
- Scope boundaries
- Stakeholders
- Governance structure
- Initial risk assessment

**Initial Risk Assessment:**
- Preliminary risk identification
- Ethical pre-screening results
- Mitigation approaches
- Outstanding questions

**Data Requirements Document:**
- Data needed
- Data sources
- Data quality requirements
- Privacy considerations


### Approval Gates

Establish clear criteria for proceeding:

**Gate 1: Problem validation**
- Is the problem real and significant?
- Is AI a reasonable approach?
- Are stakeholders identified and engaged?

**Gate 2: Feasibility approval**
- Is this technically feasible?
- Is this organizationally feasible?
- Is this ethically and legally feasible?

**Gate 3: Planning completion**
- Are all planning documents complete?
- Are governance structures in place?
- Are resources committed?

Only proceed when gates are passed.

---


## Bringing It Together: The Planning Checklist

Before moving to design and development, verify:


### Problem Definition ✓

<!-- component:checklist:checklist-problem-definition- -->
- [ ] Pain point clearly identified
- [ ] Impact quantified
- [ ] Root causes understood
- [ ] Success criteria defined
- [ ] AI appropriateness confirmed


### Stakeholders ✓

- [ ] All stakeholder groups identified
- [ ] Interests and concerns documented
- [ ] Engagement approach planned
- [ ] Affected parties included (not just decision-makers)


### Feasibility ✓

- [ ] Technical feasibility assessed
- [ ] Data availability confirmed
- [ ] Organizational readiness evaluated
- [ ] Legal/regulatory requirements identified
- [ ] Resources confirmed


### Ethical Pre-Screening ✓

- [ ] Fairness considerations evaluated
- [ ] Privacy approach defined
- [ ] Transparency requirements identified
- [ ] Human oversight model planned
- [ ] Accountability clear


### Governance ✓

- [ ] Roles and responsibilities assigned
- [ ] Decision rights defined
- [ ] Oversight mechanisms established
- [ ] Documentation requirements clear
- [ ] Approval gates passed

---


## Common Planning Pitfalls


### Pitfall 1: Solution-First Thinking

Starting with "let's build AI for X" instead of "what problem are we solving?"

*Fix:* Always start with problem definition. Challenge assumptions about solutions.


### Pitfall 2: Skipping Stakeholder Analysis

Assuming you know what users need without asking them.

*Fix:* Talk to actual users, affected parties, and diverse perspectives before defining the solution.


### Pitfall 3: Optimism Bias

Assuming data is available, teams have skills, and organizations are ready without verification.

*Fix:* Conduct real feasibility assessment with evidence, not assumptions.


### Pitfall 4: Ethics as Afterthought

Waiting to consider ethics until the system is built.

*Fix:* Include ethical pre-screening in planning. Make ethics review a gate requirement.


### Pitfall 5: Governance Vacuum

Starting projects without clear accountability or decision rights.

*Fix:* Establish governance before work begins. Document roles and approval requirements.

---


## Conclusion

AI planning isn't glamorous. There's no algorithm to build, no demo to show, no model to train. But it's where AI projects are won or lost.

Key takeaways:

<!-- component:flowchart:flowchart-conclusion -->
1. **Start with the problem:** Understand what you're solving before deciding how to solve it.

2. **Know your stakeholders:** Everyone affected should be considered, not just sponsors and users.

3. **Assess feasibility honestly:** Enthusiasm doesn't create data, skills, or organizational readiness.

4. **Screen for ethics early:** Design in ethical considerations; don't bolt them on later.

5. **Establish governance first:** Accountability, decision rights, and oversight enable good outcomes.

The time spent in planning is an investment, not overhead. Every hour spent on good planning saves many hours of rework, conflict, and crisis management later.

Build on a solid foundation, and your AI has a chance to succeed. Skip the foundation, and you're building on sand.

---


## Sources and Further Reading

1. **NIST AI RMF** - MAP function guidance for understanding AI context. Available at: nist.gov/itl/ai-risk-management-framework

2. **MIT Sloan Management Review** - AI project success factors research. Available at: sloanreview.mit.edu

3. **McKinsey** - AI implementation and planning guidance. Available at: mckinsey.com/capabilities/quantumblack/our-insights

4. **Google PAIR** - People + AI Research guidelines. Available at: pair.withgoogle.com

5. **Microsoft Responsible AI** - Planning resources. Available at: microsoft.com/ai/responsible-ai

6. **IBM AI Ethics** - Planning considerations. Available at: ibm.com/artificial-intelligence

7. **Gartner** - AI project failure research. Available at: gartner.com

8. **Harvard Business Review** - AI implementation challenges. Available at: hbr.org

9. **Stanford HAI** - AI planning and ethics. Available at: hai.stanford.edu

10. **World Economic Forum** - AI governance frameworks. Available at: weforum.org

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
