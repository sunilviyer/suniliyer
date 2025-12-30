# AI Harm Assessment Framework Template

**Purpose:** Systematic framework for evaluating potential AI harms across five interconnected levels (Individual, Group, Societal, Organizational, Ecosystem) before deployment, with risk scoring, mitigation strategies, and governance recommendations.

**Related Concepts:** ai-harms-taxonomy, risk-assessment, individual-harms, group-harms, societal-harms, organizational-harms, ecosystem-harms, pre-deployment-assessment, comprehensive-risk-evaluation

---

## Template Overview

This framework enables comprehensive assessment of AI systems using the five-level harm taxonomy:
1. **Individual Harms** - Direct impacts on specific people
2. **Group Harms** - Systematic impacts on demographic communities
3. **Societal Harms** - Broad impacts on democracy, economy, public health
4. **Organizational Harms** - Risks to deploying organization
5. **Ecosystem Harms** - Environmental, concentration, supply chain impacts

Use this template BEFORE deployment to identify and mitigate potential harms across all levels.

---

## Part 1: AI System Overview

### System Identification

**System Name:** [Name/identifier of AI system]

**System Purpose:** [What does this AI do?]

**Deployment Context:** [Where/how will it be used?]

**Decision Type:**
- [ ] Fully automated (AI decides and acts)
- [ ] Automated with human monitoring (AI decides, human can override)
- [ ] Decision support (AI recommends, human decides)
- [ ] Informational (AI provides information, human uses as input)

**Stakes:**
- [ ] High (affects fundamental rights, safety, major life opportunities)
- [ ] Medium (significant impact but not life-altering)
- [ ] Low (minor inconvenience if wrong)

**Scale:**
- Estimated number of people affected: [#]
- Geographic scope: [Local / Regional / National / Global]
- Deployment timeline: [Date]

---

## Part 2: Five-Level Harm Assessment

### Level 1: Individual Harms Assessment

**Could this AI system harm specific people?**

#### 1.1 Civil Rights Violations

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Could AI deny housing, employment, credit, education based on protected characteristics? | | | |
| Could AI restrict access to fundamental rights or services? | | | |
| Could AI violate equal treatment guarantees? | | | |
| Could AI enable discrimination even without intent? | | | |

**Example scenarios where this AI could violate civil rights:**

1. [Scenario description]
   - Who is harmed: [Demographic/individual type]
   - How harm occurs: [Mechanism]
   - Severity: [1-5 scale]

**Mitigation measures:**
- [ ] [Specific action]
- [ ] [Specific action]

---

#### 1.2 Economic Opportunity Denial

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Could AI prevent someone from getting a job? | | | |
| Could AI affect loan, credit, or financial opportunity? | | | |
| Could AI limit career advancement? | | | |
| Could AI restrict access to economic resources? | | | |

**Example scenarios where this AI could deny economic opportunity:**

1. [Scenario description]
   - Economic impact on individual: [$amount or description]
   - Mechanism: [How denial occurs]

**Mitigation measures:**
- [ ] Human review for denials
- [ ] Appeals process
- [ ] Explanation of decision factors
- [ ] [Other measures]

---

#### 1.3 Physical Safety Risks

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Could AI error cause physical injury? | | | |
| Could AI failure affect medical treatment? | | | |
| Could AI control physical systems (vehicles, equipment)? | | | |
| Could AI decision lead to dangerous situations? | | | |

**Example scenarios where this AI could create safety risks:**

1. [Scenario description]
   - Physical harm: [Type and severity]
   - Failure mode: [What goes wrong]

**Mitigation measures:**
- [ ] Fail-safe design
- [ ] Human oversight for safety-critical decisions
- [ ] Emergency override capability
- [ ] Continuous safety monitoring
- [ ] [Other measures]

---

#### 1.4 Privacy Violations

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Could AI expose personal information? | | | |
| Could AI infer sensitive attributes (health, sexuality, religion)? | | | |
| Could AI enable surveillance? | | | |
| Could AI link data to identify individuals? | | | |

**Mitigation measures:**
- [ ] Data minimization
- [ ] Differential privacy
- [ ] Access controls
- [ ] Consent mechanisms
- [ ] [Other measures]

---

**Individual Harm Risk Score:**

| Harm Type | Likelihood (1-5) | Severity (1-5) | Risk Score (L×S) | Priority |
|-----------|-----------------|----------------|------------------|----------|
| Civil Rights | | | | |
| Economic Opportunity | | | | |
| Physical Safety | | | | |
| Privacy | | | | |

**Overall Individual Harm Risk:** [Sum / Average] → [Low / Medium / High / Critical]

---

### Level 2: Group Harms Assessment

**Could this AI systematically disadvantage demographic groups?**

#### 2.1 Algorithmic Discrimination

**Demographic Groups Potentially Affected:**

- [ ] Race/Ethnicity
- [ ] Gender
- [ ] Age
- [ ] Disability status
- [ ] Socioeconomic status
- [ ] Geographic location
- [ ] Language/National origin
- [ ] Religion
- [ ] Sexual orientation/Gender identity
- [ ] [Other: _______]

**Disparate Impact Analysis:**

For each demographic dimension, assess:

| Demographic Group | Could AI perform differently for this group? | Mechanism | Evidence/Concern | Severity (1-5) |
|------------------|-------------------------------------------|-----------|-----------------|----------------|
| [Race: Black] | [ ] Yes [ ] No [ ] Uncertain | [e.g., training data underrepresents] | [Details] | |
| [Gender: Women] | [ ] Yes [ ] No [ ] Uncertain | [e.g., historical hiring bias] | [Details] | |
| [Age: Older adults] | [ ] Yes [ ] No [ ] Uncertain | [e.g., digital literacy assumptions] | [Details] | |
| [Add all groups] | | | | |

**Historical Bias in Training Data:**

| Data Source | Time Period | Known Biases | Impact on AI |
|-------------|-------------|-------------|-------------|
| [e.g., Company hiring records] | [2010-2020] | [Male-dominated tech hiring] | [May learn gender bias] |
| [Add all data sources] | | | |

**Proxy Feature Analysis:**

Features that might correlate with protected characteristics:

| Feature | Might Correlate With | Risk Level | Mitigation |
|---------|---------------------|-----------|------------|
| [Zip code] | [Race, income] | [High] | [Remove or apply fairness constraints] |
| [College name] | [Socioeconomic status, race] | [Medium] | [Careful evaluation] |
| [Add all proxy risks] | | | |

**Mitigation measures:**
- [ ] Pre-deployment bias audit with disaggregated metrics
- [ ] Remove proxy features
- [ ] Fairness constraints in model training
- [ ] Diverse training data collection
- [ ] Ongoing monitoring by demographic group
- [ ] [Other measures]

---

#### 2.2 Bias Amplification

**Historical Baseline:**

Current real-world pattern: [e.g., 60% male / 40% female engineers in company]

**Amplification Risk:**

| Metric | Historical Baseline | AI's Output (estimated) | Amplification? |
|--------|-------------------|----------------------|---------------|
| [Gender ratio in recommendations] | [60% M / 40% F] | [80% M / 20% F] | [Yes - 20pp worse] |
| [Add metrics] | | | |

**Could AI make existing disparities worse?**
- [ ] Yes - AI learns historical patterns and amplifies them
- [ ] No - AI trained with fairness constraints
- [ ] Uncertain - Need to test

**Amplification Mechanism:**

[Explain how AI might amplify bias: e.g., "AI learns that historically hired engineers were 60% male, infers male gender correlates with success, recommends men at 80% rate, making disparity worse"]

**Mitigation measures:**
- [ ] Fairness constraints (require similar outcomes across groups)
- [ ] Debiasing techniques (pre-process, in-process, post-process)
- [ ] Ongoing monitoring to detect amplification
- [ ] Comparison to baseline (are AI outputs worse than historical?)
- [ ] [Other measures]

---

**Group Harm Risk Score:**

| Harm Type | Likelihood (1-5) | Severity (1-5) | Risk Score (L×S) | Priority |
|-----------|-----------------|----------------|------------------|----------|
| Algorithmic Discrimination | | | | |
| Bias Amplification | | | | |

**Overall Group Harm Risk:** [Sum / Average] → [Low / Medium / High / Critical]

---

### Level 3: Societal Harms Assessment

**Could this AI affect society broadly?**

#### 3.1 Threats to Democracy

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Could AI enable political manipulation? | | | |
| Could AI spread misinformation at scale? | | | |
| Could AI create deepfakes of political figures? | | | |
| Could AI enable micro-targeted propaganda? | | | |
| Could AI undermine informed democratic participation? | | | |

**Example scenarios:**

1. [Scenario where AI could threaten democracy]
   - Mechanism: [How threat occurs]
   - Scale: [How many people affected]

**Mitigation measures:**
- [ ] Transparency about AI use in political contexts
- [ ] Content authentication (watermarking AI-generated content)
- [ ] Rate limiting to prevent mass manipulation
- [ ] Coordination with election authorities
- [ ] [Other measures]

---

#### 3.2 Misinformation at Scale

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Could AI generate false information? | | | |
| Could AI amplify misinformation? | | | |
| Could AI make fake content difficult to detect? | | | |
| Could AI spread misinformation faster than corrections? | | | |

**High-Risk Domains:**

- [ ] Public health (vaccine misinformation, treatment claims)
- [ ] Elections (false voting info, candidate misinformation)
- [ ] Financial markets (false market info causing panic)
- [ ] Public safety (false emergency information)
- [ ] [Other: _______]

**Scale of Potential Misinformation:**

If misused, this AI could:
- Generate [#] pieces of false content per [hour/day]
- Reach [#] people
- Spread across [#] platforms

**Mitigation measures:**
- [ ] Content provenance (tracking AI-generated content)
- [ ] Abuse monitoring (detect coordinated misinformation campaigns)
- [ ] Rate limiting
- [ ] Fact-checking partnerships
- [ ] Transparency about AI content generation
- [ ] [Other measures]

---

#### 3.3 Job Displacement

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Could AI automate jobs? | | | |
| Which occupations/tasks affected? | | | |
| How many workers potentially displaced? | | | |
| Are displaced workers likely to find alternative employment? | | | |

**Job Impact Analysis:**

| Occupation/Role | # Workers Affected (estimate) | Tasks AI Could Automate | Displacement vs Augmentation |
|----------------|-------------------------------|------------------------|----------------------------|
| [e.g., Customer service reps] | [10,000] | [80% of routine queries] | [50% displacement, 50% augmentation] |
| [Add occupations] | | | |

**Displacement Timeline:**
- Short-term (0-2 years): [Impact description]
- Medium-term (2-5 years): [Impact description]
- Long-term (5+ years): [Impact description]

**Worker Transition Support:**

What support is provided for displaced workers?
- [ ] Retraining programs
- [ ] Job placement assistance
- [ ] Income support during transition
- [ ] None planned
- [ ] [Other: _______]

**Mitigation measures:**
- [ ] Design for augmentation (AI assists humans) rather than replacement
- [ ] Phase deployment to allow workforce transition
- [ ] Partner with workforce development programs
- [ ] Transparency about automation plans
- [ ] [Other measures]

---

**Societal Harm Risk Score:**

| Harm Type | Likelihood (1-5) | Severity (1-5) | Risk Score (L×S) | Priority |
|-----------|-----------------|----------------|------------------|----------|
| Threats to Democracy | | | | |
| Misinformation | | | | |
| Job Displacement | | | | |

**Overall Societal Harm Risk:** [Sum / Average] → [Low / Medium / High / Critical]

---

### Level 4: Organizational Harms Assessment

**What risks does this AI create for our organization?**

#### 4.1 Reputational Damage

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Could AI produce offensive/embarrassing outputs? | | | |
| Could AI failure become news story? | | | |
| Could AI erode customer/public trust? | | | |
| Could AI contradict organizational values? | | | |

**Reputational Risk Scenarios:**

1. **Best-case failure:** [What happens if AI fails in least embarrassing way?]
   - Public perception: [How would customers/public react?]
   - Media coverage: [ ] None [ ] Local [ ] National [ ] International

2. **Worst-case failure:** [What happens if AI fails in most embarrassing way?]
   - Public perception: [How would customers/public react?]
   - Media coverage: [ ] None [ ] Local [ ] National [ ] International
   - Recovery time: [How long to rebuild trust?]

**Example: Could this AI become "the next Tay chatbot"?**

- [ ] Yes - high risk of spectacular public failure
- [ ] Maybe - moderate risk
- [ ] No - low risk of public embarrassment

**Mitigation measures:**
- [ ] Pre-deployment adversarial testing (try to break it)
- [ ] Content filters and safeguards
- [ ] Human review of high-visibility outputs
- [ ] Crisis communication plan
- [ ] Quick shutdown capability
- [ ] [Other measures]

---

#### 4.2 Legal Liability

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Could AI violate existing laws/regulations? | | | |
| Could AI decisions lead to lawsuits? | | | |
| Could AI trigger regulatory investigations? | | | |
| Could AI create compliance violations? | | | |

**Legal Risk Analysis:**

| Legal Domain | Applicable Laws/Regulations | Violation Risk | Potential Penalties |
|--------------|---------------------------|----------------|-------------------|
| **Anti-discrimination** | [EEOC, Fair Housing Act, etc.] | [High/Med/Low] | [Class action, fines, consent decrees] |
| **Privacy** | [GDPR, CCPA, HIPAA, etc.] | | [Per-violation fines, class action] |
| **Consumer protection** | [FTC Section 5, state laws] | | [Fines, algorithmic disgorgement] |
| **Sector-specific** | [List applicable] | | [Penalties] |
| [Add domains] | | | |

**Lawsuit Risk:**

Potential plaintiffs:
- [ ] Individuals denied opportunities (employment, credit, housing)
- [ ] Groups experiencing discrimination (class action)
- [ ] Regulators (government enforcement)
- [ ] Shareholders (if AI causes major losses)

Estimated financial exposure if sued:
- Best case: [$X]
- Likely case: [$Y]
- Worst case: [$Z]

**Mitigation measures:**
- [ ] Legal review before deployment
- [ ] Compliance documentation
- [ ] Audit trails (decisions + reasoning)
- [ ] Appeals process
- [ ] Insurance coverage
- [ ] Outside counsel engagement
- [ ] [Other measures]

---

#### 4.3 Cultural Erosion

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Could AI reduce employee autonomy/agency? | | | |
| Could AI create surveillance concerns? | | | |
| Could AI undermine trust between employees and management? | | | |
| Could AI reduce critical thinking/skill development? | | | |

**Cultural Impact Analysis:**

**Current culture:** [Describe - e.g., "Collaborative, high-trust, autonomous"]

**AI's potential cultural effects:**

| Cultural Dimension | Current State | Post-AI Risk | Mitigation |
|-------------------|---------------|-------------|------------|
| **Trust** | [High trust environment] | [Surveillance AI could erode trust] | [Transparency, consent] |
| **Autonomy** | [Employees have decision authority] | [AI automation could reduce agency] | [Keep humans in decision roles] |
| **Collaboration** | [Open collaboration] | [AI monitoring could reduce informal communication] | [Don't monitor informal interactions] |
| **Learning** | [Learning culture] | [Over-reliance on AI could reduce skill development] | [Use AI as teacher, not crutch] |

**Employee Concerns:**

Have employees been consulted about AI?
- [ ] Yes - employees support
- [ ] Yes - employees have concerns: [List concerns]
- [ ] No - employees don't know yet
- [ ] No - deliberate decision not to consult (why? [Explain])

**Mitigation measures:**
- [ ] Transparent communication about AI use
- [ ] Employee input in AI design
- [ ] Protections against surveillance overreach
- [ ] Training to use AI as tool, not replacement
- [ ] Maintain human decision authority
- [ ] [Other measures]

---

**Organizational Harm Risk Score:**

| Harm Type | Likelihood (1-5) | Severity (1-5) | Risk Score (L×S) | Priority |
|-----------|-----------------|----------------|------------------|----------|
| Reputational Damage | | | | |
| Legal Liability | | | | |
| Cultural Erosion | | | | |

**Overall Organizational Harm Risk:** [Sum / Average] → [Low / Medium / High / Critical]

---

### Level 5: Ecosystem Harms Assessment

**What broader ecosystem impacts does this AI have?**

#### 5.1 Environmental Impact

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Does AI training require substantial compute? | | | |
| Will AI inference require significant ongoing compute? | | | |
| Does infrastructure require cooling water? | | | |
| Does AI enable wasteful practices? | | | |

**Carbon Footprint Estimate:**

**Training:**
- Model size: [# parameters]
- Training duration: [# GPU-hours]
- Estimated electricity: [MWh]
- Estimated CO2 emissions: [metric tons]
- Equivalent to: [X cars driven for a year / Y homes' annual energy]

**Inference (ongoing use):**
- Queries per day: [#]
- Energy per query: [kWh]
- Annual electricity: [MWh]
- Annual CO2 emissions: [metric tons]

**Total Environmental Footprint:**
- Training + 3 years inference: [Total CO2 tons]

**Data Center Impact:**
- Location: [Where?]
- Water usage: [Gallons per year for cooling]
- Community impact: [Does this compete with community resources?]

**Mitigation measures:**
- [ ] Use renewable energy for data centers
- [ ] Optimize model efficiency (smaller models, pruning)
- [ ] Carbon offsetting (if offsetting, specify: [Project details])
- [ ] Water recycling/conservation
- [ ] Transparency about environmental footprint
- [ ] [Other measures]

---

#### 5.2 Resource Concentration

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Does this AI require resources only large companies have? | | | |
| Does this create dependency on few providers? | | | |
| Does this reinforce existing power concentration? | | | |
| Could this create barriers for smaller competitors? | | | |

**Dependency Analysis:**

**Our organization's dependencies:**

| Resource | Provider | Alternative Providers | Switching Cost | Risk |
|----------|---------|---------------------|---------------|------|
| [Model API] | [OpenAI] | [Anthropic, Google, etc.] | [High/Medium/Low] | [Vendor lock-in] |
| [Training data] | [Single source] | [Few alternatives] | | [Data dependency] |
| [Compute infrastructure] | [Cloud provider] | [Limited alternatives] | | [Infrastructure dependency] |

**Industry concentration effects:**

Does this AI contribute to industry concentration?
- [ ] Yes - reinforces dominance of few large players
- [ ] Neutral - doesn't significantly affect concentration
- [ ] No - enables competition and decentralization

**How?**
[Explain mechanism - e.g., "By using OpenAI API, we contribute to their market dominance and become dependent on their pricing/terms"]

**Mitigation measures:**
- [ ] Multi-provider strategy (don't depend on single vendor)
- [ ] Support open-source alternatives
- [ ] Transparent about dependencies
- [ ] Contingency plans for provider changes
- [ ] [Other measures]

---

#### 5.3 Supply Chain Exploitation

**Assessment Questions:**

| Question | Yes/No/Uncertain | If Yes, Details | Severity (1-5) |
|----------|-----------------|----------------|----------------|
| Does AI training require data labeling? | | | |
| Where are data labelers located? What are wages? | | | |
| Are workers exposed to harmful content? | | | |
| Are workers classified as contractors (no benefits)? | | | |

**Supply Chain Labor Analysis:**

**Data labeling workforce:**

| Workforce Segment | Location | Wages | Working Conditions | Concerns |
|------------------|----------|-------|-------------------|----------|
| [Data labelers] | [Kenya, Philippines, Venezuela] | [$1-3/hour] | [Piece-rate, no benefits] | [Below living wage, psychological exposure] |
| [Content moderators] | [Location] | [Wage] | [Conditions] | [Concerns] |
| [Add segments] | | | | |

**Harmful content exposure:**

If workers must review harmful content:
- Content types: [CSAM, violence, hate speech, etc.]
- Exposure frequency: [# disturbing items per hour]
- Mental health support: [ ] Yes [Details] [ ] No

**Fair labor practices:**

| Practice | Yes/No | Details |
|----------|--------|---------|
| Living wage (based on worker location) | | |
| Benefits (health, sick leave, etc.) | | |
| Mental health support | | |
| Right to unionize | | |
| Transparent labor practices | | |

**Mitigation measures:**
- [ ] Audit data labeling vendors for fair labor practices
- [ ] Require living wages in vendor contracts
- [ ] Require mental health support for workers exposed to harmful content
- [ ] Use automated labeling where possible (reduce human exposure)
- [ ] Transparency about supply chain labor
- [ ] [Other measures]

---

**Ecosystem Harm Risk Score:**

| Harm Type | Likelihood (1-5) | Severity (1-5) | Risk Score (L×S) | Priority |
|-----------|-----------------|----------------|------------------|----------|
| Environmental Impact | | | | |
| Resource Concentration | | | | |
| Supply Chain Exploitation | | | | |

**Overall Ecosystem Harm Risk:** [Sum / Average] → [Low / Medium / High / Critical]

---

## Part 3: Cross-Level Harm Analysis

### Harm Cascade Evaluation

**Could harms at one level cascade to others?**

Example cascade:
- **Individual:** Person wrongly denied loan
- → **Group:** Pattern shows discrimination against demographic group
- → **Societal:** Trust in financial system erodes
- → **Organizational:** Bank faces class-action lawsuit
- → **Ecosystem:** Regulatory response affects entire industry

**Your AI's potential cascades:**

1. **Starting harm:** [e.g., Individual misidentification by facial recognition]
   - Cascades to Group: [Higher error rate for specific demographic]
   - Cascades to Societal: [Erosion of trust in law enforcement]
   - Cascades to Organizational: [Lawsuits, reputational damage]
   - Cascades to Ecosystem: [Technology concentration in few biased vendors]

**Cascade amplification factors:**

What could make small harms become large harms?
- [ ] Scale (affecting millions amplifies individual harm to societal harm)
- [ ] Media attention (one case becomes symbolic of larger problem)
- [ ] Regulatory response (one incident triggers industry-wide regulation)
- [ ] Network effects (harm to some affects many through connections)
- [ ] [Other: _______]

---

## Part 4: Overall Risk Summary

### Risk Score Dashboard

| Harm Level | Risk Score | Severity Rating | Top Risks | Mitigation Priority |
|-----------|-----------|----------------|-----------|-------------------|
| **Individual** | [Score] | [Low/Med/High/Critical] | [Top 2-3 risks] | [Priority ranking] |
| **Group** | [Score] | [Low/Med/High/Critical] | [Top 2-3 risks] | [Priority ranking] |
| **Societal** | [Score] | [Low/Med/High/Critical] | [Top 2-3 risks] | [Priority ranking] |
| **Organizational** | [Score] | [Low/Med/High/Critical] | [Top 2-3 risks] | [Priority ranking] |
| **Ecosystem** | [Score] | [Low/Med/High/Critical] | [Top 2-3 risks] | [Priority ranking] |

**Overall Composite Risk:** [Average or weighted score] → [Low / Medium / High / Critical]

---

### Risk Matrix Visualization

```
         │  Low Impact  │ Med Impact  │ High Impact │ Critical Impact
─────────┼──────────────┼─────────────┼─────────────┼─────────────────
High     │              │             │             │
Likely   │   [Risks]    │  [Risks]    │  [Risks]    │   [Risks]
         │              │             │             │
─────────┼──────────────┼─────────────┼─────────────┼─────────────────
Medium   │              │             │             │
Likely   │   [Risks]    │  [Risks]    │  [Risks]    │   [Risks]
         │              │             │             │
─────────┼──────────────┼─────────────┼─────────────┼─────────────────
Low      │              │             │             │
Likely   │   [Risks]    │  [Risks]    │  [Risks]    │   [Risks]
         │              │             │             │
```

**Critical risks (address before deployment):**
1. [Risk 1: Description, level, why critical]
2. [Risk 2: Description, level, why critical]
3. [Risk 3: Description, level, why critical]

---

## Part 5: Mitigation Plan

### Priority 1: Critical Mitigations (Must complete before deployment)

| Risk | Harm Level | Mitigation Measure | Responsible Party | Timeline | Verification |
|------|-----------|-------------------|------------------|----------|-------------|
| [Risk 1] | [Individual/Group/etc.] | [Specific mitigation] | [Name, role] | [Date] | [How will we verify it worked?] |
| [Risk 2] | | | | | |
| [Add all critical risks] | | | | | |

---

### Priority 2: High Mitigations (Complete within 3 months of deployment)

| Risk | Harm Level | Mitigation Measure | Responsible Party | Timeline | Verification |
|------|-----------|-------------------|------------------|----------|-------------|
| [Risk] | | | | | |

---

### Priority 3: Medium Mitigations (Complete within 6 months)

| Risk | Harm Level | Mitigation Measure | Responsible Party | Timeline | Verification |
|------|-----------|-------------------|------------------|----------|-------------|
| [Risk] | | | | | |

---

### Ongoing Monitoring

**Continuous monitoring for harm detection:**

| Harm Type | Monitoring Metric | Frequency | Alert Threshold | Response Plan |
|-----------|------------------|-----------|----------------|---------------|
| **Individual - Civil Rights** | Demographic disparity in decisions | Weekly | >5 percentage point gap | Immediate investigation, pause if >10pp |
| **Group - Discrimination** | Disaggregated performance metrics | Monthly | Performance gap >10% | Bias audit, remediation plan |
| **Societal - Misinformation** | Abuse reports, fact-check flags | Daily | >X reports per day | Content review, potential shutdown |
| **Organizational - Legal** | Complaints, legal inquiries | Ongoing | Any formal complaint | Legal review, documentation |
| **Ecosystem - Environmental** | Energy consumption | Monthly | >X% increase from baseline | Efficiency investigation |

---

## Part 6: Governance and Accountability

### Decision Authority

**Who has authority to:**

| Decision | Responsible Party | Approval Required From |
|----------|------------------|----------------------|
| **Approve deployment** | [Title] | [Title, committee] |
| **Pause system if harm detected** | [Title] | [Can act unilaterally or needs approval?] |
| **Modify mitigation plan** | [Title] | [Title, committee] |
| **Respond to incidents** | [Title] | [Title] |
| **Communicate with affected individuals** | [Title] | [Title] |
| **Communicate with regulators** | [Title] | [Title] |

---

### Stakeholder Communication

**Who needs to know about this AI and its risks?**

| Stakeholder Group | What They Need to Know | Communication Method | Timing |
|------------------|----------------------|---------------------|--------|
| **Affected individuals** | [That AI is used, how decisions made, rights to appeal] | [Notice, disclosure] | [Before AI affects them] |
| **Employees** | [How AI will be used, impact on work, training needed] | [All-hands, training] | [Before deployment] |
| **Board/Executives** | [Risk summary, organizational exposure, mitigation plan] | [Board memo, presentation] | [Before deployment] |
| **Regulators** | [Compliance with applicable laws, testing results] | [As required by regulation] | [Per regulatory requirements] |
| **Public** | [Optional: Transparency about AI use] | [Public statement, FAQ] | [At deployment or as requested] |

---

### Appeals and Redress

**If AI causes harm, how can affected individuals seek remedy?**

**Appeals process:**
1. [How individuals can appeal AI decisions]
2. [Who reviews appeals - must be independent of original AI system]
3. [Timeline for appeal resolution]
4. [Authority to override AI]

**Remediation for harms:**
- [ ] Financial compensation for economic harms
- [ ] Corrective action (reverse wrong decisions)
- [ ] Apology and explanation
- [ ] Process improvements to prevent recurrence
- [ ] [Other: _______]

---

## Part 7: Deployment Decision

### Go/No-Go Decision Framework

**Based on harm assessment, should we deploy this AI?**

#### Option 1: Deploy as Planned

**Conditions for deployment:**
- [ ] All critical mitigations completed
- [ ] Residual risk acceptable
- [ ] Monitoring in place
- [ ] Governance structures established
- [ ] Legal review completed
- [ ] Executive approval obtained

**Decision:** [ ] DEPLOY

---

#### Option 2: Deploy with Modifications

**Required modifications before deployment:**
1. [Modification needed]
2. [Modification needed]
3. [Modification needed]

**Decision:** [ ] DEPLOY AFTER MODIFICATIONS

---

#### Option 3: Delay Deployment

**Reasons for delay:**
- [ ] Critical risks not adequately mitigated
- [ ] Need more testing
- [ ] Regulatory uncertainty
- [ ] Organizational readiness gaps
- [ ] [Other: _______]

**What must happen before we revisit?**
1. [Requirement]
2. [Requirement]

**Revisit date:** [Date]

**Decision:** [ ] DELAY

---

#### Option 4: Do Not Deploy

**Reasons for cancellation:**
- [ ] Harms cannot be adequately mitigated
- [ ] Risks exceed benefits
- [ ] Alternatives exist that pose less risk
- [ ] Organizational values conflict with AI's impacts
- [ ] [Other: _______]

**Decision:** [ ] DO NOT DEPLOY

---

### Final Decision

**Decision:** [Deploy / Deploy with modifications / Delay / Do not deploy]

**Decision-Maker:** [Name, title, date]

**Rationale:** [Explanation of decision]

**Conditions (if deploying):**
[List any conditions that must be maintained during deployment]

**Review schedule:**
[When will this harm assessment be revisited? Recommend: 6 months post-deployment, then annually]

---

## Part 8: Post-Deployment Review

**[Complete 6 months after deployment]**

### Actual vs. Predicted Harms

| Harm Level | Predicted Risk Score | Actual Harms Observed | Variance | Lessons Learned |
|-----------|---------------------|----------------------|----------|-----------------|
| Individual | [Score] | [Description of actual harms] | [Better/worse than predicted] | [What we learned] |
| Group | | | | |
| Societal | | | | |
| Organizational | | | | |
| Ecosystem | | | | |

**Were there harms we didn't predict?**

1. [Unexpected harm 1: Description, why we missed it]
2. [Unexpected harm 2: Description, why we missed it]

**Were predicted harms overstated?**

1. [Harm we worried about that didn't materialize: Why?]

---

### Mitigation Effectiveness

| Mitigation Measure | Effectiveness (1-5) | Evidence | Adjustments Needed |
|-------------------|-------------------|----------|-------------------|
| [Mitigation 1] | [Rating] | [What evidence shows it worked/didn't work?] | [Changes needed] |
| [Add all mitigations] | | | |

---

### Framework Improvement

**How can we improve this harm assessment process?**

1. [Improvement suggestion]
2. [Improvement suggestion]
3. [Improvement suggestion]

**For next AI system, we will:**
- [ ] [Change 1]
- [ ] [Change 2]
- [ ] [Change 3]

---

## Conclusion

This harm assessment framework ensures comprehensive evaluation across all five harm levels before deployment. By systematically assessing individual, group, societal, organizational, and ecosystem impacts, organizations can:

1. **Identify harms comprehensively** - Not just obvious risks
2. **Prioritize mitigation** - Focus on highest-risk harms first
3. **Make informed decisions** - Deploy, modify, delay, or cancel based on evidence
4. **Demonstrate due diligence** - Document responsible AI practices
5. **Learn and improve** - Post-deployment review improves future assessments

**Remember:** The goal isn't zero risk (impossible), but **informed risk-taking with adequate safeguards and genuine accountability.**

---

**Version:** 1.0
**Last Updated:** 2025-12-24
**Maintained By:** AI Defence
**Related Example:** Five-Level AI Harms Case Studies
