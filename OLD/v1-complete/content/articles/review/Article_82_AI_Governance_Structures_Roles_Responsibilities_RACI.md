# Article 82: AI Governance Structures – Roles, Responsibilities, and RACI

## TL;DR

AI governance doesn't work without clear accountability. Someone needs to own AI decisions, someone needs to build systems responsibly, someone needs to monitor outcomes, and someone needs to handle problems. This article defines the key roles in AI governance (from executive sponsors to data scientists to ethics advisors), explains how to assign responsibilities using RACI matrices, and shows how to structure governance bodies (steering committees, ethics boards, working groups). Good governance structure prevents the "everyone's responsible so no one's responsible" problem that plagues many AI initiatives.

---

## Introduction

Here's a scenario that plays out in organizations everywhere:

An AI system produces a biased outcome. Customers complain. Media picks up the story. Executives ask: "Who was responsible for this?"

The answers:
- "Data science built what they were asked to build."
- "Product just defined requirements."
- "Legal never reviewed it."
- "Compliance wasn't consulted."
- "The business team assumed someone was checking for bias."

Everyone did their job. No one owned the outcome.

This is the accountability gap that kills AI governance. Organizations have AI policies, ethics principles, risk frameworks—but no clear structure for who actually makes decisions, who does the work, and who's accountable when things go wrong.

Governance structure is the skeleton that holds everything together. Without it, even the best policies are just paper.

This article shows you how to build governance structures that create real accountability.

---

## Why Structure Matters

### The Accountability Problem

AI creates unique accountability challenges:

**Cross-functional nature:** AI systems involve data teams, engineering, product, legal, compliance, and business units. Who's in charge?

**Novel decisions:** Traditional roles weren't designed for AI-specific choices like fairness thresholds or explainability trade-offs.

**Distributed responsibility:** Many people contribute to an AI system. How do you assign accountability for outcomes?

**Rapid evolution:** AI capabilities change quickly. Who decides when policies need updating?

### What Happens Without Structure

**Paralysis:** No one is authorized to make decisions, so decisions don't get made—or get made by whoever shouts loudest.

**Gaps:** Everyone assumes someone else is handling ethics, bias, privacy. No one actually is.

**Conflicts:** Teams make inconsistent decisions because there's no central coordination.

**Blame games:** When problems occur, finger-pointing replaces accountability.

**Audit failures:** Regulators ask "who's accountable?" and no one can answer clearly.

---

## Key Roles in AI Governance

### Executive Level

**Executive Sponsor / AI Governance Owner**

*What they do:*
- Champion AI governance at the executive level
- Ensure resources and budget for governance
- Set risk appetite and tolerance
- Make final decisions on critical AI matters
- Report to board on AI risks and governance

*Who this is:*
- Often CTO, CDO, CRO, or dedicated Chief AI Officer
- Must have authority to make binding decisions
- Must have visibility into AI activities across the organization

*Example responsibility:* Approve deployment of high-risk AI systems; decide organizational AI ethics principles.

---

**Board of Directors (or designated committee)**

*What they do:*
- Oversee AI strategy alignment with business objectives
- Monitor material AI risks
- Ensure governance framework exists and functions
- Review significant AI incidents

*Why this matters:*
- EU AI Act and other regulations increasingly expect board-level oversight
- AI risks can be material business risks
- Sets tone from the top

*Example responsibility:* Annual review of AI governance effectiveness; approval of AI risk appetite statement.

---

### Governance Bodies

**AI Governance Committee / Steering Committee**

*What they do:*
- Oversee implementation of AI governance framework
- Review and approve high-risk AI projects
- Resolve cross-functional governance issues
- Monitor AI risk register and mitigation progress
- Recommend policy updates

*Composition:*
- Senior representatives from: Technology, Legal, Compliance, Risk, Business Units, HR, Privacy
- Chaired by AI Governance Owner or delegate
- Meets monthly or quarterly

*Example responsibility:* Review all proposed AI systems classified as high-risk; approve changes to AI policy.

---

**AI Ethics Board / Advisory Council**

*What they do:*
- Provide ethical guidance on complex AI decisions
- Review edge cases and novel situations
- Advise on evolving ethical standards
- Champion ethical considerations in AI development

*Composition:*
- Internal ethics experts
- External advisors (academics, ethicists, community representatives)
- Diverse perspectives critical

*When used:*
- Not every organization needs a separate ethics board
- Valuable for organizations with significant AI ethics exposure
- Can be combined with governance committee for smaller organizations

*Example responsibility:* Advise on whether a proposed AI use case is ethically acceptable; review fairness thresholds for sensitive applications.

---

**AI Working Group / Community of Practice**

*What they do:*
- Share best practices across teams
- Develop technical standards and guidelines
- Provide peer support and knowledge sharing
- Identify emerging issues and opportunities

*Composition:*
- Data scientists, ML engineers, product managers, analysts
- Voluntary or designated participants
- Meets regularly (bi-weekly or monthly)

*Example responsibility:* Develop organization's model documentation standard; share lessons learned from incidents.

---

### Operational Roles

**AI System Owner**

*What they do:*
- Accountable for specific AI system's outcomes
- Ensure system meets governance requirements
- Make operational decisions about the system
- Report system performance and risks

*Who this is:*
- Usually a business leader or product owner
- Has authority over system decisions
- Not the data scientist (who builds) but the accountable owner

*Example responsibility:* Ensure hiring AI complies with fairness requirements; decide when to retrain model.

---

**AI Project Manager**

*What they do:*
- Coordinate AI project activities
- Ensure governance checkpoints are completed
- Track deliverables, timeline, budget
- Facilitate communication across stakeholders

*Who this is:*
- Dedicated project manager or product manager
- Understands both AI and governance requirements
- Not accountable for outcomes—accountable for process

*Example responsibility:* Ensure risk assessment is completed before design phase; coordinate bias audit before deployment.

---

**Data Scientist / ML Engineer**

*What they do:*
- Build and train AI models
- Implement technical requirements including fairness measures
- Document model design decisions
- Conduct technical testing

*Governance responsibilities:*
- Flag ethical concerns discovered during development
- Implement governance requirements in technical work
- Provide technical input to governance decisions
- Document work for auditability

*Example responsibility:* Implement bias testing in model development; document training data sources and decisions.

---

**Data Steward / Data Governance Lead**

*What they do:*
- Ensure data quality and integrity
- Manage data access and permissions
- Maintain data documentation and lineage
- Enforce data policies

*Why this matters for AI:*
- AI is only as good as its data
- Data governance is foundational to AI governance
- Many AI risks originate in data issues

*Example responsibility:* Ensure training data meets quality standards; verify data use is authorized.

---

### Oversight and Assurance Roles

**AI Risk Manager**

*What they do:*
- Identify and assess AI risks
- Maintain AI risk register
- Monitor risk mitigation
- Report on risk status

*Who this is:*
- May be dedicated role or part of enterprise risk function
- Needs AI-specific expertise
- Works across AI projects

*Example responsibility:* Conduct AI risk assessments; escalate critical risks to governance committee.

---

**AI Compliance Officer**

*What they do:*
- Monitor regulatory requirements affecting AI
- Ensure AI systems meet compliance requirements
- Manage regulatory relationships and inquiries
- Track compliance status

*Who this is:*
- Often part of legal or compliance function
- Needs understanding of AI-specific regulations
- May be combined with privacy officer role

*Example responsibility:* Ensure high-risk AI systems meet EU AI Act requirements; respond to regulatory inquiries.

---

**Internal Audit**

*What they do:*
- Independently assess AI governance effectiveness
- Audit AI systems against policies and requirements
- Report findings to audit committee/board
- Follow up on remediation

*Key principle:*
- Audit should be independent from AI development
- Provides objective assurance
- Reports to board/audit committee, not management

*Example responsibility:* Annual audit of AI governance framework effectiveness; audit of high-risk AI systems.

---

**AI Ethics Advisor / Responsible AI Lead**

*What they do:*
- Provide ethics guidance to AI teams
- Conduct ethical reviews of AI proposals
- Develop ethical guidelines and training
- Champion responsible AI practices

*Who this is:*
- May be dedicated role or part of other function
- Needs ethics expertise and AI understanding
- Embedded in process, not just consulted at end

*Example responsibility:* Review new AI use cases for ethical concerns; develop ethics training for AI teams.

---

## The RACI Matrix

### What Is RACI?

RACI is a framework for clarifying roles:

- **R - Responsible:** Does the work
- **A - Accountable:** Owns the outcome (only one person)
- **C - Consulted:** Provides input before decision
- **I - Informed:** Notified after decision

### Why RACI for AI?

AI projects involve many roles. Without clarity:
- Work falls through cracks
- Decisions aren't made
- Conflicts arise over authority
- Accountability is diffuse

RACI forces explicit assignment.

### Sample AI Governance RACI

**AI System Lifecycle Activities:**

| Activity | Exec Sponsor | AI Governance Committee | System Owner | Project Manager | Data Scientist | Risk Manager | Legal/Compliance |
|----------|--------------|-------------------------|--------------|-----------------|----------------|--------------|------------------|
| Approve AI strategy | A | C | I | I | I | C | C |
| Approve high-risk AI project | I | A | R | R | C | C | C |
| Conduct risk assessment | I | I | A | R | C | R | C |
| Develop AI model | I | I | A | C | R | I | I |
| Test for bias | I | I | A | C | R | C | C |
| Deploy to production | I | I | A | R | C | C | C |
| Monitor performance | I | I | A | R | C | R | I |
| Handle AI incident | C | C | A | R | C | R | C |
| Update AI policy | A | R | C | I | C | C | C |

### Reading the Matrix

**For "Approve high-risk AI project":**
- AI Governance Committee is Accountable (makes the decision)
- System Owner and Project Manager are Responsible (prepare materials, present case)
- Data Scientist, Risk Manager, and Legal/Compliance are Consulted (provide input)
- Executive Sponsor is Informed (notified of decision)

### RACI Design Principles

**One "A" per row:**
If everyone is accountable, no one is. One person owns each outcome.

**"R" can have multiple:**
Several people can do work together.

**"C" should be specific:**
Don't consult everyone. Identify who actually needs input.

**"I" prevents surprises:**
Make sure stakeholders aren't surprised by decisions affecting them.

---

## Building Your Governance Structure

### Step 1: Assess Your Context

**Organization size:**
- Small organizations may combine roles
- Large organizations need more formal structure
- Complexity should match scale

**AI maturity:**
- Early stage: Simpler structure, focus on basics
- Mature: More sophisticated, specialized roles
- Growing: Structure that can scale

**Risk profile:**
- High-risk AI: More oversight, more roles
- Lower-risk AI: Lighter structure acceptable
- Regulated industry: Compliance-focused roles essential

**Existing governance:**
- Leverage existing risk, compliance, data governance
- Don't create parallel structures unnecessarily
- Integrate AI governance with enterprise governance

### Step 2: Define Governance Bodies

**Minimum viable governance:**
- Executive sponsor with clear accountability
- Governance checkpoint in AI project process
- Someone responsible for AI risk assessment

**Standard governance:**
- AI Governance Committee (monthly)
- Defined roles for system owners, risk, compliance
- Documented RACI for key activities
- Integration with enterprise risk

**Comprehensive governance:**
- All of the above plus:
- Dedicated AI ethics function
- AI working group/community of practice
- Board-level AI oversight
- Independent AI audit program

### Step 3: Define Roles and Assign People

For each role:
- Who fills it? (Named person)
- What's their authority?
- What decisions can they make?
- What resources do they have?
- How much time is allocated?

**Common mistakes:**
- Assigning roles to people without time to fulfill them
- Creating roles without authority to act
- Leaving roles empty ("we'll fill that later")

### Step 4: Create RACI for Key Activities

Identify your key AI governance activities:
- New AI project initiation
- Risk assessment
- Design review
- Deployment approval
- Ongoing monitoring
- Incident response
- Policy updates

Create RACI for each. Share with all stakeholders.

### Step 5: Document and Communicate

Create governance documentation:
- Governance charter/framework document
- Role descriptions
- RACI matrix
- Committee charters
- Escalation procedures

Communicate widely:
- All AI practitioners should understand structure
- Business stakeholders should know their roles
- Governance bodies should have clear mandates

### Step 6: Implement and Iterate

Start operating:
- Hold first committee meetings
- Apply RACI to real projects
- Test escalation paths

Learn and adjust:
- What's not working?
- Where are gaps?
- What's too bureaucratic?

Governance structure should evolve with experience.

---

## Governance Structure Examples

### Example 1: Small Organization (< 500 employees)

**Structure:**
- CTO serves as AI Governance Owner
- Monthly AI discussion in existing leadership team meeting
- Data lead responsible for AI risk assessment
- Legal consulted on new AI applications
- No dedicated AI governance committee

**Roles:**
| Role | Person | Allocation |
|------|--------|------------|
| AI Governance Owner | CTO | 5% of time |
| AI Risk Assessment | Data Team Lead | 10% of time |
| Legal Review | General Counsel | As needed |
| Technical Standards | Senior Data Scientist | 10% of time |

### Example 2: Medium Organization (500-5,000 employees)

**Structure:**
- Chief Data Officer as AI Governance Owner
- AI Governance Committee (monthly, 8 members)
- AI Risk Manager (0.5 FTE dedicated)
- System owners assigned for each major AI system
- Quarterly AI governance report to executive team

**Governance Committee Composition:**
- CDO (Chair)
- VP Engineering
- VP Product
- General Counsel
- Chief Risk Officer
- Head of HR
- Head of Customer Experience
- CISO

### Example 3: Large Organization (5,000+ employees)

**Structure:**
- Chief AI Officer reporting to CEO
- Board AI/Technology Committee oversight
- AI Governance Committee (monthly)
- AI Ethics Advisory Board (quarterly)
- AI Community of Practice (bi-weekly)
- Dedicated AI Risk team (3 FTEs)
- AI audit program (annual)
- Embedded responsible AI leads in business units

**Reporting Lines:**
```
Board AI/Technology Committee
            ↓
    Chief AI Officer
            ↓
    ┌───────┼───────┐
    ↓       ↓       ↓
AI Ethics   AI     AI Risk
Board    Governance  Team
         Committee
```

---

## Common Governance Structure Mistakes

### Mistake 1: Governance Without Authority

Creating roles or committees that can recommend but not decide.

*Symptom:* Committees meet but nothing changes.

*Fix:* Ensure governance bodies have real authority. If they can't approve/reject AI projects, they're advisory only.

### Mistake 2: Too Much Bureaucracy

Every AI project requires 10 approvals and 3 committee reviews.

*Symptom:* Teams avoid governance or game the system.

*Fix:* Risk-proportionate governance. Light touch for low-risk AI; heavy process only for high-risk.

### Mistake 3: Governance Theater

Beautiful structure on paper, but not actually followed.

*Symptom:* Committees don't meet, RACI is ignored, roles are empty.

*Fix:* Simpler structure actually implemented beats complex structure on paper.

### Mistake 4: Single Point of Failure

All AI governance depends on one person or team.

*Symptom:* When that person is out, governance stops.

*Fix:* Distributed accountability with clear backups.

### Mistake 5: Static Structure

Created structure once, never updated.

*Symptom:* Structure doesn't fit current AI portfolio or risks.

*Fix:* Annual review of governance structure against needs.

---

## Making Governance Work

### Keys to Effective Governance

**Executive commitment:**
Governance only works if leadership visibly supports it. Lip service isn't enough.

**Integration with operations:**
Governance checkpoints should be in actual workflows, not parallel processes.

**Proportionality:**
Match governance intensity to risk. Don't apply the same process to a spam filter and a hiring AI.

**Clear authority:**
People in governance roles must be able to make binding decisions.

**Resources:**
Governance takes time. Allocate it explicitly.

**Continuous improvement:**
Learn from experience. Adjust what doesn't work.

### Measuring Governance Effectiveness

Track governance health:

| Metric | Target | Indicates |
|--------|--------|-----------|
| Committee meeting attendance | >80% | Engagement |
| Decisions made vs. deferred | >70% made | Effectiveness |
| Time from request to decision | <2 weeks | Efficiency |
| AI projects following process | 100% | Compliance |
| Incidents due to governance gaps | 0 | Effectiveness |
| Stakeholder satisfaction | >4.0/5.0 | Value |

---

## Conclusion

AI governance structure is the difference between good intentions and real accountability. Without clear roles, defined responsibilities, and functioning governance bodies, AI governance is just policy on paper.

Key takeaways:

1. **Define clear roles:** From executive sponsor to data scientist, everyone should know their governance responsibilities.

2. **Use RACI:** Explicit assignment prevents gaps and conflicts.

3. **Create governance bodies:** Committees, boards, and working groups provide forums for decisions.

4. **Match structure to context:** Small organizations need simpler structures; large organizations need more formality.

5. **Ensure authority:** Governance roles without decision authority are theater.

6. **Implement, don't just design:** A simple structure that works beats a complex structure that doesn't.

When someone asks "who's responsible for AI governance?"—everyone should know the answer.

---

## Sources and Further Reading

1. **NIST AI RMF** - GOVERN function guidance. Available at: nist.gov/itl/ai-risk-management-framework

2. **ISO/IEC 42001** - AI management system roles. Available at: iso.org

3. **Singapore PDPC** - Model AI Governance Framework. Available at: pdpc.gov.sg

4. **OECD** - AI governance recommendations. Available at: oecd.ai

5. **World Economic Forum** - AI governance structures. Available at: weforum.org

6. **MIT Sloan** - AI organization research. Available at: sloanreview.mit.edu

7. **Deloitte** - AI governance operating models. Available at: deloitte.com

8. **ISACA** - AI governance frameworks. Available at: isaca.org

9. **IIA (Institute of Internal Auditors)** - AI audit guidance. Available at: theiia.org

10. **IAPP** - AI governance roles. Available at: iapp.org

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
