# Article 81: AI Project Scoping – Defining Success Criteria

## TL;DR

AI projects fail more often from poor scoping than poor technology. Scoping means defining exactly what the AI will do, what it won't do, how you'll know if it's working, and what constraints apply. Good scoping includes clear boundaries (in-scope vs. out-of-scope), measurable success criteria (not vague goals like "better customer experience"), realistic constraints (time, budget, data, skills), and explicit assumptions that can be validated. This article provides practical frameworks for scoping AI projects, including templates for scope statements, success metrics, and assumption documentation.

---

## Introduction

A company decides to build "an AI that improves customer retention." Six months later, they have a model that predicts churn with 85% accuracy. Success?

Not if the business expected a system that would automatically intervene with at-risk customers. Not if "improve retention" was supposed to mean "reduce churn by 20%." Not if leadership thought the AI would be in production by now, but it's still in testing.

The problem wasn't the AI. The problem was scope.

Scoping is the work of defining exactly what you're building, what success looks like, and what constraints apply. It sounds basic, but it's where AI projects most often go wrong.

Poor scoping produces:
- AI that technically works but doesn't solve the business problem
- Endless projects that keep expanding
- Teams working toward different definitions of "done"
- Success that can't be measured because criteria were never defined

Good scoping produces:
- Shared understanding of what we're building
- Clear criteria for success and failure
- Boundaries that prevent scope creep
- Realistic expectations across stakeholders

This article shows you how to scope AI projects properly.

---

## Why AI Scoping Is Particularly Hard

### The Ambiguity Problem

Traditional software projects can have tight specifications: "When the user clicks 'Submit,' save the form data and display a confirmation."

AI projects are inherently fuzzier: "Predict which customers will churn." That raises questions:

- What counts as "churn"? (Cancel? Reduce usage? Switch to competitor?)
- How far in advance should we predict? (Next week? Next quarter?)
- How accurate does prediction need to be?
- What happens with predictions? Who acts on them? How?
- What data can we use? What data can't we use?

Without explicit answers, different stakeholders will have different assumptions. That's a recipe for disappointment.

### The Moving Target Problem

Business needs evolve. Data scientists discover things during development. What seemed important at the start may change.

But without a defined scope, every change blends into the project. You can't distinguish between:
- Legitimate refinement based on learning
- Scope creep that threatens success
- New requirements that should be separate projects

### The Success Definition Problem

What does "success" mean for AI? Traditional software either works or doesn't. AI exists on a spectrum:

- 95% accurate: Success or failure?
- 80% of users adopt it: Success or failure?
- Reduces churn by 5% instead of 20%: Success or failure?

Without predefined criteria, you can't answer these questions—or you'll answer them politically rather than objectively.

---

## The Scope Document: Core Components

A comprehensive AI project scope includes:

### 1. Project Overview

**Project name:** Clear, specific identifier

**Problem statement:** What problem are we solving? (From planning phase)

**Solution overview:** What AI capability will address this problem?

**Business sponsor:** Who owns this initiative?

**Project owner:** Who is accountable for delivery?

### 2. Objectives and Success Criteria

What does success look like? Define measurable criteria.

### 3. Scope Boundaries

What's included? What's explicitly excluded?

### 4. Constraints

What limitations apply? (Time, budget, resources, data, technology)

### 5. Assumptions

What must be true for success? (To be validated)

### 6. Dependencies

What do we need from others? What needs to happen first?

### 7. Risks

What could derail scope or success? (Beyond general project risks)

Let's examine the critical components in detail.

---

## Defining Success Criteria

### The SMART Framework for AI

Success criteria should be SMART:
- **Specific:** Precisely defined, not vague
- **Measurable:** Can be quantified or objectively assessed
- **Achievable:** Realistic given constraints
- **Relevant:** Connected to business value
- **Time-bound:** Has a deadline for measurement

### Categories of Success Criteria

**Technical Performance:**
- Accuracy, precision, recall
- Speed/latency
- Reliability/uptime
- Scalability

**Business Outcomes:**
- Revenue impact
- Cost reduction
- Efficiency gains
- Quality improvements

**User Adoption:**
- Usage rates
- User satisfaction
- Behavior change
- Productivity impact

**Compliance/Ethics:**
- Fairness metrics met
- Privacy requirements satisfied
- Regulatory compliance achieved
- Audit requirements passed

### Examples: Vague vs. Measurable

**Vague:** "The chatbot will improve customer experience."

**Measurable:** 
- Customer satisfaction (CSAT) for chatbot interactions ≥ 4.0/5.0
- Resolution rate for chatbot-handled inquiries ≥ 75%
- Customer effort score ≤ 2.5

**Vague:** "The model will accurately predict churn."

**Measurable:**
- Precision ≥ 80% (of predicted churners, 80% actually churn)
- Recall ≥ 70% (capture 70% of actual churners)
- Prediction window: 30 days before churn event
- Model accuracy sustained for 6 months without retraining

**Vague:** "The AI will be fair and unbiased."

**Measurable:**
- Demographic parity ratio ≥ 0.8 across protected groups
- False positive rate difference across groups ≤ 5%
- Third-party bias audit passed before production deployment

### Setting Realistic Targets

How do you know if targets are achievable?

**Research comparable projects:**
- What accuracy have similar projects achieved?
- What's the state of the art for this problem type?

**Consult experts:**
- What do data scientists think is realistic?
- What have vendors achieved with similar data?

**Consider the data:**
- How predictive is available data likely to be?
- Are there known data quality issues?

**Run quick experiments:**
- Can a simple baseline model provide a floor?
- Does exploratory analysis suggest signal exists?

**Build in ranges:**
- Minimum viable: What's the floor for value?
- Target: What we're aiming for?
- Stretch: What would be exceptional?

**Example:**

| Metric | Minimum | Target | Stretch |
|--------|---------|--------|---------|
| Prediction accuracy | 75% | 85% | 92% |
| User adoption | 40% | 60% | 80% |
| Churn reduction | 5% | 12% | 20% |

Minimum = project is viable
Target = project is successful
Stretch = project is exceptional

---

## Setting Scope Boundaries

### In-Scope vs. Out-of-Scope

Explicitly define what's included and excluded:

**Example: Customer Churn Prediction**

**In-Scope:**
- Prediction model for individual consumer accounts
- 30-day prediction window
- Integration with existing CRM for predictions
- Dashboard for customer success team
- Training for 15 customer success users
- Documentation and handover

**Out-of-Scope:**
- B2B accounts (different churn patterns)
- Automated intervention (future phase)
- Mobile app integration
- Real-time predictions (batch is sufficient)
- Prediction explanation interface (future phase)
- Changes to CRM system itself

**Why exclusions matter:** Without explicit exclusions, stakeholders may assume features are included. "I thought we'd have automated interventions by now" becomes a predictable conflict.

### The "Future Phase" Approach

Some items are clearly valuable but shouldn't be in initial scope. Use "future phase" designation:

| Feature | This Phase | Future Phase | Rationale |
|---------|------------|--------------|-----------|
| Prediction model | ✓ | | Core capability |
| Dashboard | ✓ | | Essential for users |
| Automated intervention | | Phase 2 | Depends on prediction accuracy |
| Mobile access | | Phase 2 | Low priority, high effort |
| Self-service explanation | | Phase 3 | After adoption proven |

This acknowledges value while protecting scope.

### Scope Change Management

Define how scope changes will be handled:

- Who can request scope changes?
- Who approves scope changes?
- What's the process for evaluating impact?
- What triggers re-baselining the project?

**Example scope change process:**
1. Change request submitted to project owner
2. Impact assessment (timeline, budget, resources, risks)
3. Review by steering committee if material impact
4. Formal approval/rejection with documented rationale
5. Updated scope document if approved

---

## Documenting Constraints

### Types of Constraints

**Time:**
- Project deadline
- Phase milestones
- External timing dependencies

**Budget:**
- Total project budget
- Phase budgets
- Contingency allocation

**Resources:**
- Available team members and their allocation
- Skills available (or not available)
- External support limitations

**Data:**
- Data that's available
- Data access restrictions
- Data quality limitations
- Privacy/consent constraints

**Technology:**
- Platform constraints
- Integration requirements
- Performance requirements
- Security requirements

**Organizational:**
- Approval requirements
- Change management capacity
- Competing priorities
- Political considerations

### Constraint Documentation

For each constraint, document:

| Constraint | Description | Impact on Scope | Mitigation |
|------------|-------------|-----------------|------------|
| Budget: $500K | Total approved budget | Limits feature set | Prioritize must-haves |
| Timeline: 6 months | Deadline for production | Limits complexity | Phased approach |
| Data: No transaction data | Transaction data not accessible | Reduces prediction accuracy | Use behavioral proxies |
| Skills: No ML Ops | Team lacks deployment expertise | Deployment risk | Engage vendor support |

### Constraint Negotiation

Constraints aren't always fixed. Understand which can be negotiated:

**Fixed constraints:** Legal requirements, immovable deadlines
**Flexible constraints:** Budget (with business case), scope (with trade-offs)
**Soft constraints:** Preferences that can be challenged

When constraints conflict with success criteria, escalate early:
"With current budget, we can achieve 75% accuracy. 85% accuracy requires an additional $100K for data acquisition and expert resources."

---

## Identifying Assumptions

### Why Assumptions Matter

Every project makes assumptions. Problems arise when:
- Assumptions aren't documented
- Assumptions aren't validated
- Different stakeholders have different assumptions

### Common AI Project Assumptions

**Data assumptions:**
- Data quality is sufficient
- Historical data predicts future patterns
- Data access will be approved
- Data volume is adequate for training

**Technical assumptions:**
- Problem is solvable with available techniques
- Performance will meet requirements
- Integration is technically feasible
- Infrastructure can support production load

**Organizational assumptions:**
- Users will adopt the system
- Process changes will be implemented
- Stakeholders will remain engaged
- Resources will be available as planned

**Business assumptions:**
- Business need remains stable
- Success criteria remain relevant
- Benefits will materialize as projected
- Regulatory environment won't change materially

### Assumption Documentation

For each assumption:

| # | Assumption | Risk if Wrong | Validation Approach | Validated? |
|---|------------|---------------|---------------------|------------|
| A1 | Historical customer data available for 3 years | Can't build model | Confirm with IT before kickoff | Pending |
| A2 | Users will act on churn predictions | No business value | Pilot with user group | Pending |
| A3 | Churn patterns are predictable from available features | Low accuracy | Exploratory data analysis | Pending |
| A4 | IT can support API integration | Manual process required | Technical review | Pending |

### Validate Early

Assumptions should be validated before significant investment:

**Phase 0:** Validate critical assumptions
**Go/No-go:** Decide based on validation results
**Then proceed:** With reduced risk

---

## Dependencies and Integration

### Types of Dependencies

**Input dependencies:** What must be provided by others?
- Data from source systems
- Access to platforms
- Approvals from stakeholders
- Expertise from specialists

**Output dependencies:** What will others need from us?
- Model outputs for downstream systems
- Documentation for operations
- Training for users

**Timing dependencies:** What must happen when?
- System availability for integration
- User availability for testing
- Budget cycle alignment

### Dependency Documentation

| Dependency | Owner | Required By | Status | Risk if Delayed |
|------------|-------|-------------|--------|-----------------|
| Customer data extract | IT - Data Team | Week 2 | Requested | Delays model development 4+ weeks |
| API access to CRM | IT - CRM Team | Week 8 | Not requested | Blocks integration testing |
| User acceptance testing | Customer Success | Week 14 | Scheduled | Delays go-live |

### Managing Dependencies

- Identify dependencies during scoping
- Confirm commitment from dependency owners
- Track status regularly
- Escalate delays immediately
- Have contingency plans for critical dependencies

---

## The Scope Document Template

```
═══════════════════════════════════════════════════════════════
AI PROJECT SCOPE DOCUMENT
═══════════════════════════════════════════════════════════════

PROJECT IDENTIFICATION
──────────────────────
Project Name: ________________________________________________
Project ID: _________________________________________________
Version: _________________ Date: ____________________________
Business Sponsor: ___________________________________________
Project Owner: ______________________________________________

───────────────────────────────────────────────────────────────
1. PROJECT OVERVIEW
───────────────────────────────────────────────────────────────

Problem Statement:
______________________________________________________________
______________________________________________________________

Solution Overview:
______________________________________________________________
______________________________________________________________

Business Value:
______________________________________________________________

───────────────────────────────────────────────────────────────
2. SUCCESS CRITERIA
───────────────────────────────────────────────────────────────

Technical Performance:
┌─────────────────────┬───────────┬──────────┬──────────┐
│ Metric              │ Minimum   │ Target   │ Stretch  │
├─────────────────────┼───────────┼──────────┼──────────┤
│                     │           │          │          │
└─────────────────────┴───────────┴──────────┴──────────┘

Business Outcomes:
┌─────────────────────┬───────────┬──────────┬──────────┐
│ Metric              │ Minimum   │ Target   │ Stretch  │
├─────────────────────┼───────────┼──────────┼──────────┤
│                     │           │          │          │
└─────────────────────┴───────────┴──────────┴──────────┘

User Adoption:
┌─────────────────────┬───────────┬──────────┬──────────┐
│ Metric              │ Minimum   │ Target   │ Stretch  │
├─────────────────────┼───────────┼──────────┼──────────┤
│                     │           │          │          │
└─────────────────────┴───────────┴──────────┴──────────┘

Ethics/Compliance:
┌─────────────────────┬─────────────────────────────────┐
│ Requirement         │ Criterion                       │
├─────────────────────┼─────────────────────────────────┤
│                     │                                 │
└─────────────────────┴─────────────────────────────────┘

───────────────────────────────────────────────────────────────
3. SCOPE BOUNDARIES
───────────────────────────────────────────────────────────────

In-Scope:
• _________________________________________________________
• _________________________________________________________
• _________________________________________________________

Out-of-Scope:
• _________________________________________________________
• _________________________________________________________
• _________________________________________________________

Future Phase Candidates:
┌────────────────────────────┬────────────────────────────┐
│ Feature                    │ Planned Phase              │
├────────────────────────────┼────────────────────────────┤
│                            │                            │
└────────────────────────────┴────────────────────────────┘

───────────────────────────────────────────────────────────────
4. CONSTRAINTS
───────────────────────────────────────────────────────────────

┌─────────────┬───────────────────────┬─────────────────────┐
│ Type        │ Constraint            │ Impact/Mitigation   │
├─────────────┼───────────────────────┼─────────────────────┤
│ Time        │                       │                     │
├─────────────┼───────────────────────┼─────────────────────┤
│ Budget      │                       │                     │
├─────────────┼───────────────────────┼─────────────────────┤
│ Resources   │                       │                     │
├─────────────┼───────────────────────┼─────────────────────┤
│ Data        │                       │                     │
├─────────────┼───────────────────────┼─────────────────────┤
│ Technology  │                       │                     │
└─────────────┴───────────────────────┴─────────────────────┘

───────────────────────────────────────────────────────────────
5. ASSUMPTIONS
───────────────────────────────────────────────────────────────

┌────┬──────────────────────┬────────────────┬─────────────┐
│ #  │ Assumption           │ Risk if Wrong  │ Validated?  │
├────┼──────────────────────┼────────────────┼─────────────┤
│    │                      │                │             │
└────┴──────────────────────┴────────────────┴─────────────┘

───────────────────────────────────────────────────────────────
6. DEPENDENCIES
───────────────────────────────────────────────────────────────

┌────────────────────┬─────────────┬───────────┬────────────┐
│ Dependency         │ Owner       │ Required  │ Status     │
├────────────────────┼─────────────┼───────────┼────────────┤
│                    │             │           │            │
└────────────────────┴─────────────┴───────────┴────────────┘

───────────────────────────────────────────────────────────────
APPROVALS
───────────────────────────────────────────────────────────────

Business Sponsor: ___________________ Date: __________________

Project Owner: ______________________ Date: __________________

Technical Lead: _____________________ Date: __________________

═══════════════════════════════════════════════════════════════
```

---

## Scope Review and Approval

### Who Reviews Scope?

- **Business sponsor:** Validates business alignment and success criteria
- **Technical lead:** Validates technical feasibility and constraints
- **Users/stakeholders:** Validate that scope addresses their needs
- **Governance/compliance:** Validate that requirements are included
- **Project team:** Validate that scope is achievable

### Scope Approval Gate

Before design and development, verify:

- [ ] All success criteria are measurable
- [ ] Scope boundaries are clear
- [ ] Constraints are documented
- [ ] Critical assumptions are validated
- [ ] Dependencies are committed
- [ ] All required parties have approved

---

## Conclusion

Good scoping isn't bureaucracy—it's insurance against the most common AI project failures. A clear scope:

1. **Aligns stakeholders:** Everyone agrees on what we're building
2. **Enables measurement:** We know what success looks like
3. **Prevents creep:** Boundaries protect against endless expansion
4. **Surfaces issues early:** Constraints and assumptions are explicit
5. **Supports decision-making:** Provides basis for trade-off decisions

Key takeaways:

- **Define success measurably:** Vague goals produce vague results
- **Draw explicit boundaries:** What's out is as important as what's in
- **Document constraints honestly:** Unrealistic assumptions doom projects
- **Validate assumptions early:** Before significant investment
- **Manage scope formally:** Changes are inevitable; manage them intentionally

Take time to scope properly. The hours invested upfront save weeks of confusion, conflict, and rework later.

---

## Sources and Further Reading

1. **Project Management Institute (PMI)** - Scope management guidance. Available at: pmi.org

2. **NIST AI RMF** - MAP function for scoping context. Available at: nist.gov/itl/ai-risk-management-framework

3. **Agile Alliance** - Agile scoping practices. Available at: agilealliance.org

4. **MIT Sloan** - AI project management. Available at: sloanreview.mit.edu

5. **Google PAIR** - AI project planning. Available at: pair.withgoogle.com

6. **McKinsey** - AI implementation research. Available at: mckinsey.com

7. **Harvard Business Review** - AI project success factors. Available at: hbr.org

8. **Gartner** - AI project scoping. Available at: gartner.com

9. **Microsoft** - AI development lifecycle. Available at: microsoft.com/ai

10. **AWS** - Machine learning project scoping. Available at: aws.amazon.com/machine-learning

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
