---
title: 'Article 101: Building the AI Governance Function – Where to Start'
tldr: ''
category: Governance Implementation
learning_objectives:
- Understand the key concepts and principles of ai governance frameworks
- Implement regulatory requirements in real-world scenarios
- Evaluate audit procedures for organizational compliance
seo_keywords:
- article
- building
- AI governance
- governance function
- where
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: organizational structure, implementation roadmap, strategic planning elements,
    professional illustration, modern flat design style, clean and authoritative,
    high quality, blue and gray color scheme with accent colors, suitable for professional
    article header
- type: table
  label: Department vs Likely AI Uses Table
  section: 'Step 1: Find Your AI'
  id: table-step-1-find-your-ai
- type: table
  label: Factor vs Higher Risk Table
  section: 'Step 2: Assess Risk'
  id: table-step-2-assess-risk
- type: table
  label: Existing Process vs Integration Point Table
  section: Integration Points
  id: table-integration-points
- type: table
  label: Metric vs Baseline Table
  section: Measuring Progress
  id: table-measuring-progress
- type: flowchart
  label: 'Step 4: Define Governance Principles Process'
  section: 'Step 4: Define Governance Principles'
  id: flowchart-step-4-define-governance-principles
- type: flowchart
  label: Conclusion Process
  section: Conclusion
  id: flowchart-conclusion
- type: flowchart
  label: Sources and Further Reading Process
  section: Sources and Further Reading
  id: flowchart-sources-and-further-reading
- type: list
  label: 'Step 4: Define Governance Principles'
  section: 'Step 4: Define Governance Principles'
  id: list-step-4-define-governance-principles
topic_fingerprint:
- machine learning
- audit
- oversight
- accountability
- transparency
named_examples:
- eu ai act
- fair
- mit
- nist
word_count: 1766
processed_date: '2025-12-18T20:04:38.464Z'
---


## The Starting Point Problem


### Common Starting Situations

Organizations typically start their AI governance journey from one of these positions:

**Reactive start:** "We just had an AI incident" or "Regulators are asking questions"
- Urgency is high
- May need to fix problems while building program
- Risk: rushing leads to superficial solutions

**Proactive start:** "We want to get ahead of this" or "Leadership sees the need"
- More time to plan
- Need to maintain momentum without crisis urgency
- Risk: governance becomes theoretical without practical application

**Compliance-driven start:** "New regulation requires this" or "Audit findings"
- Clear external requirements
- Defined timeline
- Risk: checkbox compliance without real governance

**Growth-driven start:** "We're scaling AI and need controls" or "Moving from experimentation to production"
- AI maturity creating new risks
- Business sees value in governance
- Risk: governance seen as blocker rather than enabler


### The Maturity Reality

Most organizations are at one of these maturity levels:

```
Level 0: Unaware
├── AI in use but not tracked
├── No governance awareness
└── "We don't really use AI" (they probably do)

Level 1: Ad Hoc
├── Some AI awareness
├── Informal, inconsistent practices
└── Individual teams making decisions

Level 2: Developing
├── Governance need recognized
├── Initial policies and processes
└── Limited coverage and enforcement

Level 3: Defined
├── Formal governance program
├── Documented policies and procedures
└── Coverage across organization

Level 4: Managed
├── Metrics and monitoring
├── Continuous improvement
└── Governance embedded in culture

Level 5: Optimized
├── Industry-leading practices
├── Innovation in governance
└── Governance enables AI value
```

Most organizations starting their governance journey are at Level 0 or 1. That's okay—everyone starts somewhere.

---


## Phase 1: Discovery and Assessment


### Step 1: Find Your AI

Before you can govern AI, you need to know what AI you have.

**Discovery questions:**
- What systems use AI, machine learning, or algorithms for decision-making?
- Who built or bought these systems?
- What decisions do they support or make?
- Who is affected by these decisions?

**Where to look:**
| Department | Likely AI Uses |
<!-- component:table:table-step-1-find-your-ai -->
|------------|---------------|
| Marketing | Customer segmentation, personalization, content optimization |
| Sales | Lead scoring, forecasting, pricing optimization |
| Customer Service | Chatbots, routing, sentiment analysis |
| HR | Resume screening, performance prediction |
| Finance | Fraud detection, credit scoring, forecasting |
| Operations | Demand planning, logistics optimization |
| IT | Security threat detection, anomaly detection |
| Product | Recommendations, search, features |

**Discovery methods:**
- Survey business units
- Review vendor contracts (look for "AI," "ML," "algorithm," "automated")
- Interview technology teams
- Review IT asset inventory
- Check cloud service usage


### Step 2: Assess Risk

Not all AI is equally risky. Prioritize based on potential for harm.

**Risk factors:**

| Factor | Higher Risk | Lower Risk |
<!-- component:table:table-step-2-assess-risk -->
|--------|-------------|------------|
| **Decision type** | Consequential (credit, employment, health) | Convenience (recommendations, search) |
| **Autonomy** | Fully automated decisions | Human-in-the-loop |
| **Scale** | Affects many people | Limited scope |
| **Reversibility** | Hard to reverse | Easy to undo |
| **Data sensitivity** | Personal, protected data | Non-sensitive data |
| **Regulatory context** | Regulated domain | Unregulated |

**Simple risk categorization:**

```
HIGH RISK
├── Automated decisions affecting rights or opportunities
├── Use of protected or sensitive data
├── Regulatory requirements apply
├── High visibility or reputational exposure
└── Examples: Credit scoring, hiring algorithms, medical diagnosis

MEDIUM RISK
├── Significant decisions with human review
├── Business-critical applications
├── Some regulatory consideration
└── Examples: Customer churn prediction, fraud alerts (reviewed)

LOW RISK
├── Convenience or optimization
├── Limited impact if wrong
├── Low regulatory concern
└── Examples: Content recommendations, internal efficiency tools
```


### Step 3: Document Current State

Create a baseline understanding:

```
AI INVENTORY SUMMARY (Example)

Total AI systems identified: 23

By risk level:
├── High risk: 4
├── Medium risk: 9
└── Low risk: 10

By origin:
├── Built in-house: 8
├── Vendor/third-party: 12
└── Open source/cloud service: 3

By governance status:
├── Some documentation: 7
├── No documentation: 16
├── Formal governance: 0

By department:
├── Marketing: 6
├── Sales: 4
├── Customer Service: 5
├── HR: 2
├── Finance: 3
├── Operations: 3

Key findings:
- 2 high-risk systems have no documentation
- Vendor AI contracts lack governance provisions
- No consistent approach across departments
```

---


## Phase 2: Establish Foundations

<!-- component:list:list-step-4-define-governance-principles -->

### Step 4: Define Governance Principles

Start with simple, clear principles that guide decision-making.

**Example AI Principles:**

<!-- component:flowchart:flowchart-step-4-define-governance-principles -->
1. **Beneficial:** AI should benefit customers, employees, and society
2. **Fair:** AI should not discriminate or cause unjust harm
3. **Transparent:** AI use and limitations should be explainable
4. **Secure:** AI systems should be protected against misuse
5. **Accountable:** Clear ownership and responsibility for AI decisions
6. **Human-centered:** Humans should remain in control of significant decisions

These don't need to be perfect. They need to provide direction.


### Step 5: Create Essential Policies

Start with policies for the most important areas:

**Priority 1: AI Acceptable Use Policy**
- What AI uses are permitted
- What uses are prohibited
- Approval requirements for new AI

**Priority 2: High-Risk AI Policy**
- Definition of high-risk AI
- Requirements for high-risk systems
- Approval and oversight process

**Priority 3: Third-Party AI Policy**
- Vendor AI evaluation requirements
- Contract provisions
- Ongoing monitoring


### Step 6: Assign Ownership

Governance requires accountability. Define:

**Executive sponsor:**
Who has ultimate accountability? (CTO, CDO, CPO, or designated executive)

**Governance lead:**
Who manages the day-to-day program? (May be fractional at first)

**System owners:**
Who is accountable for each AI system?

**Stakeholders:**
Who needs to be involved? (Legal, compliance, risk, business units)

---


## Phase 3: Quick Wins


### Why Quick Wins Matter

Building a governance program takes time. Quick wins:
- Demonstrate value to leadership
- Build credibility for the program
- Address the most urgent risks
- Create momentum


### Quick Win 1: Document High-Risk Systems

For your highest-risk AI systems:
- Create basic model cards
- Document intended use and limitations
- Identify data sources and owners
- Establish monitoring (even basic)

**Time:** 1-2 weeks per system
**Impact:** Immediate risk reduction and compliance foundation


### Quick Win 2: Review Vendor Contracts

For AI systems from third parties:
- Review contracts for AI-specific provisions
- Identify gaps in transparency, audit rights, data use
- Flag contracts needing renegotiation
- Add AI provisions to procurement templates

**Time:** 2-4 weeks
**Impact:** Vendor risk visibility and future protection


### Quick Win 3: Establish Escalation Path

Create a clear process for AI concerns:
- How do employees report AI issues?
- Who reviews concerns?
- What triggers escalation?
- How are decisions documented?

**Time:** 1 week
**Impact:** Immediate mechanism for catching problems


### Quick Win 4: Train Key Personnel

Provide basic AI governance training to:
- AI/ML practitioners
- Product managers with AI products
- Procurement team
- Legal/compliance team

**Time:** 2-4 weeks to develop, ongoing delivery
**Impact:** Build awareness and capability

---


## Phase 4: Build Structure


### Governance Operating Model

Decide how governance will work:

**Centralized model:**
- Single governance team makes decisions
- Consistent but may be slow
- Works for smaller organizations or high-risk domains

**Federated model:**
- Business units have governance responsibility
- Central team sets standards and provides support
- Faster but may be inconsistent

**Hybrid model:**
- High-risk decisions centralized
- Lower-risk decisions delegated
- Balance of consistency and speed


### Governance Processes

Establish core processes:

**1. AI Registration**
New AI systems must be registered before deployment.

**2. Risk Assessment**
All registered systems undergo risk assessment.

**3. Approval Workflow**
High-risk systems require formal approval.

**4. Monitoring**
Deployed systems are monitored for issues.

**5. Review**
Periodic review of AI systems and governance effectiveness.


### Integration Points

Governance should connect with existing processes:

| Existing Process | Integration Point |
<!-- component:table:table-integration-points -->
|------------------|-------------------|
| Project management | AI risk assessment at project gates |
| Procurement | Vendor AI evaluation in sourcing |
| Change management | AI impact assessment for changes |
| Incident management | AI-specific incident procedures |
| Audit | AI governance in audit scope |
| Risk management | AI risks in enterprise risk framework |

---


## Phase 5: Mature and Expand


### Building Capability

Over time, develop:

**People:**
- Dedicated governance resources
- AI governance skills across organization
- Executive education
- External expertise as needed

**Process:**
- Refined policies and procedures
- Automated workflows where possible
- Metrics and reporting
- Continuous improvement

**Technology:**
- AI inventory tools
- Monitoring platforms
- Documentation systems
- Workflow automation


### Expansion Roadmap

```
YEAR 1: Foundation
├── Q1: Discovery and assessment
├── Q2: Principles, policies, quick wins
├── Q3: Basic processes and structure
└── Q4: Review and adjust

YEAR 2: Maturation
├── Q1: Expand coverage to all high-risk AI
├── Q2: Enhance monitoring and metrics
├── Q3: Deeper integration with business processes
└── Q4: External audit/assessment

YEAR 3: Optimization
├── Continuous improvement based on metrics
├── Advanced capabilities (automated testing, etc.)
├── Industry leadership and benchmarking
└── Innovation in governance approaches
```


### Measuring Progress

Track governance maturity:

| Metric | Baseline | Year 1 Target |
<!-- component:table:table-measuring-progress -->
|--------|----------|---------------|
| AI systems inventoried | 0% | 80% |
| High-risk AI documented | 0% | 100% |
| Policies established | 0 | 3 core policies |
| Personnel trained | 0 | Key roles |
| Incidents with governance gap | Unknown | Tracked |

---


## Common Pitfalls


### Pitfall 1: Boiling the Ocean

**What it is:** Trying to solve every governance challenge at once.

**Why it fails:** Overwhelms resources, delays progress, loses momentum.

**Fix:** Prioritize ruthlessly. Start with high-risk AI and expand.


### Pitfall 2: Policy Without Practice

**What it is:** Writing policies that aren't implemented.

**Why it fails:** Creates false confidence; governance exists on paper only.

**Fix:** Start small but real. Better to govern 3 systems well than have policies for 100 that aren't followed.


### Pitfall 3: Governance as Blocker

**What it is:** Governance that only says "no" or slows everything down.

**Why it fails:** Business works around governance; credibility lost.

**Fix:** Enable as well as control. Help teams do AI right, not just stop them from doing it wrong.


### Pitfall 4: Going It Alone

**What it is:** Building governance without stakeholder buy-in.

**Why it fails:** Governance requires cooperation; can't be imposed.

**Fix:** Involve legal, risk, business units, and technology from the start.


### Pitfall 5: Perfectionism

**What it is:** Waiting until the program is "ready" to start.

**Why it fails:** You learn by doing; the perfect program doesn't exist.

**Fix:** Start with "good enough" and improve iteratively.

---


## Getting Leadership Support


### Making the Case

**Risk framing:**
"Without AI governance, we're exposed to regulatory, reputational, and operational risks. We don't even know what AI we have."

**Opportunity framing:**
"With governance, we can scale AI confidently, move faster with appropriate controls, and differentiate on trust."

**Compliance framing:**
"Regulations like the EU AI Act require governance capabilities. We need to start building now."


### What to Ask For

**Minimum:**
- Part-time dedicated resource (or fractional time from existing role)
- Executive sponsor
- Authority to assess and inventory AI
- Basic policy approval

**Better:**
- Dedicated governance lead (full or part-time)
- Budget for tools and training
- Integration with existing governance structures
- External expertise for assessment or advice

---


## Conclusion

Building an AI governance function doesn't require solving everything at once. It requires starting—with discovery, prioritization, and practical action.

Key takeaways:

<!-- component:flowchart:flowchart-conclusion -->
1. **Know what you have:** You can't govern what you don't know about. Inventory first.

2. **Prioritize by risk:** Focus on high-risk AI systems first. Not everything is equally urgent.

3. **Start simple:** Basic policies and processes that work beat comprehensive programs that don't.

4. **Demonstrate value:** Quick wins build credibility and support for the program.

5. **Build over time:** Governance maturity develops through iteration, not through a single initiative.

6. **Enable, don't just control:** Good governance helps the organization use AI well, not just prevents harm.

The best time to start AI governance was before you deployed AI. The second best time is now.

---


## Sources and Further Reading

1. **NIST AI RMF** - Framework for AI governance. Available at: nist.gov

2. **OECD AI Policy Observatory** - Governance frameworks. Available at: oecd.ai

3. **World Economic Forum** - AI governance toolkit. Available at: weforum.org

4. **Deloitte** - AI governance frameworks. Available at: deloitte.com

5. **McKinsey** - AI governance articles. Available at: mckinsey.com

6. **PwC** - Responsible AI toolkit. Available at: pwc.com

7. **IAPP** - AI governance resources. Available at: iapp.org

8. **EU AI Act** - Regulatory requirements. Available at: eur-lex.europa.eu

9. **Partnership on AI** - Governance best practices. Available at: partnershiponai.org

10. **MIT Sloan Management Review** - AI governance research. Available at: sloanreview.mit.edu

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
