# Human-Centered AI Design Framework

## Purpose
Systematic framework for designing AI systems that enhance human capabilities, maintain meaningful human control, consider all stakeholders, and preserve human agency. Guides automation level selection, human-AI collaboration design, stakeholder mapping, and implementation following human-centered design principles.

## When to Use This Template
- Designing new AI systems from scratch
- Redesigning existing AI systems to be more human-centered
- Evaluating AI procurement decisions
- Conducting human-AI interaction assessments
- Planning AI deployment that involves human users or affected populations

---

## Part 1: Human-Centered AI Principles Assessment

### Principle 1: Start with Human Needs

**Before building AI, answer these questions:**

| Question | Answer | Evidence |
|----------|--------|----------|
| WHO are the humans who will use this AI? | | |
| WHO will be affected by this AI's decisions? | | |
| WHO will be served by this AI? | | |
| WHAT problems do they face that AI might address? | | |
| WHAT capabilities do they need? | | |
| WHAT values matter to them? | | |
| WHAT are their current workarounds/solutions? | | |
| WHAT would success look like from their perspective? | | |

**User research conducted:**
- [ ] Interviews with intended users (n=____, duration=_____)
- [ ] Observations of current workflows (n=____ hours)
- [ ] Surveys (n=____ responses)
- [ ] Contextual inquiry (observed users in natural environment)
- [ ] Stakeholder workshops
- [ ] Competitive analysis of existing solutions

**Key findings:**
- Pain points: _________________________
- Unmet needs: _________________________
- Values and preferences: _________________________
- Current capabilities and limitations: _________________________

---

### Principle 2: Design for Augmentation, Not Just Automation

**Augmentation vs Automation Assessment:**

| Aspect | Augmentation (Enhance Humans) | Automation (Replace Humans) | Our Approach |
|--------|------------------------------|----------------------------|--------------|
| **Goal** | Make humans more effective | Remove humans from process | |
| **Human role** | Expert empowered with AI insights | Monitor/button-pusher | |
| **Skill impact** | Humans maintain and develop skills | Skills atrophy from disuse | |
| **Outcome when AI fails** | Human can compensate | Human can't perform task | |
| **Outcome when AI succeeds** | Human + AI better than either | AI replaces human | |

**Augmentation opportunities identified:**

| Human Capability | How AI Can Augment (Not Replace) | Expected Benefit |
|------------------|----------------------------------|------------------|
| | | |
| | | |
| | | |

**Critical check:** Can humans still perform this task competently without AI?
- [ ] Yes - Good (skills maintained)
- [ ] No - RISK: Design includes skill maintenance mechanisms
- [ ] N/A - Task is new (AI enables, doesn't replace)

---

### Principle 3: Maintain Meaningful Human Control

**Authority and Agency Assessment:**

| Decision Type | AI Role | Human Role | Control Level |
|--------------|---------|------------|---------------|
| | ☐ Suggest ☐ Recommend ☐ Act with veto ☐ Act autonomously | ☐ Final decision ☐ Oversight ☐ Informed only ☐ No involvement | ☐ High ☐ Medium ☐ Low ☐ None |

**Meaningful Control Checklist:**

- [ ] Humans understand what AI is doing
- [ ] Humans can override AI decisions when needed
- [ ] Humans have time to exercise oversight (not just theoretical ability)
- [ ] Humans have necessary information to make informed decisions
- [ ] Humans have authority to challenge/correct AI
- [ ] Humans maintain skills needed to supervise AI effectively
- [ ] System can operate in degraded mode if AI fails (manual fallback)

**RED FLAGS requiring increased human control:**
- [ ] Decisions significantly affect individual rights or freedoms
- [ ] Errors are irreversible or very difficult to correct
- [ ] Vulnerable populations affected
- [ ] High legal/regulatory liability
- [ ] AI reliability is unproven in this context
- [ ] Ethical judgment required beyond pattern recognition

---

### Principle 4: Design for Usability

**Usability Dimensions:**

| Dimension | Assessment | Design Response |
|-----------|------------|-----------------|
| **Understandability** | Can users understand what AI does? | |
| **Trustworthiness** | Can users calibrate trust appropriately? | |
| **Operability** | Can users operate system effectively? | |
| **Learnability** | How long to become proficient? | |
| **Efficiency** | Does AI improve user efficiency? | |
| **Error recovery** | Can users recover from AI errors? | |
| **Accessibility** | Can all intended users use this? | |

**Usability requirements:**

| User Type | Current Skill Level | Usability Needs | Design Accommodations |
|-----------|-------------------|-----------------|----------------------|
| | ☐ Expert ☐ Intermediate ☐ Novice | | |
| | ☐ Expert ☐ Intermediate ☐ Novice | | |

**Accessibility considerations:**
- [ ] Visual disabilities (screen reader compatible, sufficient contrast)
- [ ] Hearing disabilities (visual alternatives to audio)
- [ ] Motor disabilities (keyboard navigation, voice control)
- [ ] Cognitive disabilities (simple language, clear navigation)
- [ ] Age considerations (elderly-friendly, child-appropriate)
- [ ] Language/literacy (multilingual, appropriate reading level)

---

### Principle 5: Consider All Stakeholders

**Stakeholder Mapping:**

**Primary Users (directly operate AI):**

| Stakeholder | Role | Needs | Concerns | Power | Influence |
|------------|------|-------|----------|-------|-----------|
| | | | | ☐ High ☐ Med ☐ Low | ☐ High ☐ Med ☐ Low |

**Secondary Users (use AI outputs without direct interaction):**

| Stakeholder | Role | Needs | Concerns | Power | Influence |
|------------|------|-------|----------|-------|-----------|
| | | | | ☐ High ☐ Med ☐ Low | ☐ High ☐ Med ☐ Low |

**Affected Non-Users (subject to AI decisions without choosing to use):**

| Stakeholder | How Affected | Needs | Concerns | Power | Influence |
|------------|--------------|-------|----------|-------|-----------|
| | | | | ☐ High ☐ Med ☐ Low | ☐ High ☐ Med ☐ Low |

**Indirect Stakeholders (affected by broader system impacts):**

| Stakeholder | Broader Impact | Needs | Concerns | Power | Influence |
|------------|---------------|-------|----------|-------|-----------|
| | | | | ☐ High ☐ Med ☐ Low | ☐ High ☐ Med ☐ Low |

**Vulnerable Populations Requiring Special Consideration:**
- [ ] Children
- [ ] Elderly
- [ ] People with disabilities
- [ ] Economically disadvantaged
- [ ] Marginalized groups (racial/ethnic minorities, gender minorities, etc.)
- [ ] Limited digital literacy
- [ ] Limited English proficiency

**Design for Vulnerable Populations:**

| Population | Specific Risks | Mitigation Strategy |
|-----------|---------------|---------------------|
| | | |

**Conflicting Stakeholder Interests:**

| Stakeholder A | Interest | Stakeholder B | Interest | Conflict | Resolution Strategy |
|--------------|----------|--------------|----------|----------|---------------------|
| | | | | | |

---

### Principle 6: Respect Human Dignity

**Dignity Assessment:**

| Question | Yes/No | If No, Mitigation |
|----------|--------|-------------------|
| Does AI treat people as ends (serving their interests), not just means (serving system goals)? | | |
| Does AI respect autonomy (people can make meaningful choices)? | | |
| Does AI respect privacy (appropriate data collection and use)? | | |
| Does AI respect human rights (no discrimination, due process, etc.)? | | |
| Does AI support human flourishing (meaningful work, relationships, growth)? | | |
| Does AI avoid manipulation or deception? | | |
| Does AI preserve human capacity for choice and self-determination? | | |

**Dignity risks identified:** __________________________

**Mitigation strategies:** __________________________

---

## Part 2: Automation Level Selection

### Step 1: Assess Decision Context

**For each type of decision the AI will make:**

**Decision description:** __________________________________

| Factor | Assessment | Score |
|--------|-----------|-------|
| **Stakes** (impact on people's lives) | ☐ Critical ☐ High ☐ Medium ☐ Low | Critical=4, High=3, Med=2, Low=1: ____ |
| **Reversibility** (can error be corrected?) | ☐ Irreversible ☐ Very difficult ☐ Difficult ☐ Easy | Irreversible=4, Very=3, Difficult=2, Easy=1: ____ |
| **Consequence severity** (harm if wrong) | ☐ Catastrophic ☐ Major ☐ Moderate ☐ Minor | Catastrophic=4, Major=3, Mod=2, Minor=1: ____ |
| **Time criticality** (how fast must decision be made?) | ☐ Milliseconds ☐ Seconds ☐ Minutes ☐ Hours+ | Ms=1, Sec=2, Min=3, Hours=4: ____ |
| **Human expertise available** | ☐ Expert always ☐ Expert sometimes ☐ Novice ☐ None | Always=4, Sometimes=3, Novice=2, None=1: ____ |
| **AI reliability demonstrated** | ☐ Proven (>95%) ☐ High (90-95%) ☐ Moderate (80-90%) ☐ Unproven (<80%) | Proven=1, High=2, Mod=3, Unproven=4: ____ |

**Subtotal A (higher = more human involvement needed):** Stakes + Reversibility + Consequence = ____
**Subtotal B (lower = more automation possible):** Time Criticality + Expertise + Reliability = ____

---

### Step 2: Select Appropriate Automation Level

**Automation Level Decision Matrix:**

| Automation Level | AI Does | Human Does | When Appropriate | Score Guidance |
|-----------------|---------|------------|------------------|----------------|
| **Level 1: Human Does Everything** | Nothing | Everything | AI unproven, stakes critical, human expertise essential | Subtotal A > 10 |
| **Level 2: AI Suggests Options** | Analyze, present options | Review, decide | High stakes, time available, expert judgment needed | Subtotal A = 7-10 |
| **Level 3: AI Recommends One Option** | Analyze, recommend | Accept/override | Medium stakes, time limited, AI reliable | Subtotal A = 4-6, Subtotal B = 6-8 |
| **Level 4: AI Acts Unless Vetoed** | Act with delay | Veto if needed | Lower stakes, AI very reliable, easy correction | Subtotal A < 4, Subtotal B = 8-10 |
| **Level 5: AI Acts Then Informs** | Act, then notify | Review post-hoc | Low stakes, reversible, AI proven | Subtotal A < 4, Subtotal B = 10-12 |
| **Level 6: Fully Autonomous** | Act without notice | Nothing | Millisecond timing, very low stakes, AI proven | ONLY if human physically cannot intervene in time |

**Selected Level for this decision:** Level _____

**Justification:**
- Stakes assessment: _______________________
- Time criticality: _______________________
- AI reliability: _______________________
- Error consequences: _______________________
- Subtotal scores: A=____, B=____

**Graduated Approach (if decisions vary in stakes):**

| Decision Type | Stakes | Level | Example |
|--------------|--------|-------|---------|
| Low-value routine | Low | 4-5 | Small transactions, common questions |
| Medium-value standard | Medium | 3 | Moderate transactions, standard cases |
| High-value unusual | High | 2-3 | Large transactions, unusual circumstances |
| Critical | Critical | 1-2 | Safety, rights, irreversible |

---

### Step 3: Design Controls for Selected Level

**For Level 1 (Human Does Everything):**
- [ ] AI provides information/context but no recommendations
- [ ] Human has full decision authority
- [ ] AI may assist with data lookup, calculation, research

**For Level 2 (AI Suggests Options):**
- [ ] AI presents multiple options (minimum _____)
- [ ] Options include pros/cons, tradeoffs
- [ ] Human selects from options or chooses alternative
- [ ] No default selection (human must actively choose)

**For Level 3 (AI Recommends One Option):**
- [ ] AI recommends specific action with explanation
- [ ] Human can accept, override, or defer
- [ ] Override is frictionless (no penalty, easy process)
- [ ] Alternative options visible if human requests

**For Level 4 (AI Acts Unless Vetoed):**
- [ ] AI announces intended action before executing
- [ ] Delay period: ______ seconds/minutes
- [ ] Clear veto mechanism (button, command, etc.)
- [ ] Human can review and reverse post-action

**For Level 5 (AI Acts Then Informs):**
- [ ] AI notifies human after action (within ______ time)
- [ ] Notification includes what was done and why
- [ ] Human can reverse action (within ______ time window)
- [ ] Audit trail for human review

**For Level 6 (Fully Autonomous):**
- [ ] EXCEPTIONAL JUSTIFICATION REQUIRED (documented above)
- [ ] Kill switch available (human can disable system)
- [ ] Aggregate monitoring (human reviews patterns, not individual decisions)
- [ ] Circuit breakers (auto-stop if errors exceed threshold)
- [ ] Regular human audit of system behavior

---

## Part 3: Human-AI Collaboration Design

### Step 1: Map Complementary Strengths

**AI Strengths in This Domain:**

| AI Capability | How It Applies | Example |
|--------------|---------------|---------|
| Process large data volumes quickly | | |
| Consistent pattern application | | |
| Tireless 24/7 operation | | |
| Detect subtle multi-variable patterns | | |
| Speed (millisecond response) | | |
| Scale (handle volume spikes) | | |

**Human Strengths in This Domain:**

| Human Capability | How It Applies | Example |
|-----------------|---------------|---------|
| Context and nuance understanding | | |
| Common sense and world knowledge | | |
| Novel situation adaptation | | |
| Ethical judgment | | |
| Human communication and empathy | | |
| Creative problem-solving | | |
| "Something doesn't feel right" detection | | |

**Collaboration Strategy:**

| Task Component | Best Handled By | Why | Interface Design |
|---------------|----------------|-----|-----------------|
| | ☐ AI ☐ Human ☐ Both | | |
| | ☐ AI ☐ Human ☐ Both | | |

---

### Step 2: Design Communication (AI to Human)

**Clarity Requirements:**

- [ ] Outputs understandable to intended users (no unexplained jargon)
- [ ] Visual design clear and unambiguous
- [ ] Language appropriate for user expertise level:
  - Novice: ☐ 8th grade reading level, explanatory
  - Intermediate: ☐ Domain terms with explanations
  - Expert: ☐ Technical precision

**Uncertainty Communication:**

AI should distinguish between:
- High confidence (>95%): "This is ______"
- Medium confidence (80-95%): "This appears to be ______"
- Low confidence (<80%): "This might be ______, but confidence is low"
- Unknown: "I don't have enough information to determine ______"

**Uncertainty display method:**
- [ ] Explicit confidence score (e.g., "92% confident")
- [ ] Qualitative language (e.g., "High confidence," "Uncertain")
- [ ] Visual indicator (e.g., green/yellow/red, solid/dashed lines)
- [ ] Confidence range (e.g., "Between 75-85% likely")

**Explanation Requirements:**

| User Type | Explanation Detail Needed | Format |
|-----------|--------------------------|--------|
| Affected individual (customer, applicant) | Key factors (top 3-5), plain language | Simple summary, actionable guidance |
| Operator (customer service, clinician) | All significant factors, technical detail | Structured breakdown, decision support |
| Auditor/regulator | Complete decision trace, all factors | Full audit trail, compliance documentation |

**Explanation technique:**
- [ ] Feature importance (top factors)
- [ ] SHAP/LIME (contribution values)
- [ ] Counterfactual (what would change decision)
- [ ] Example-based (similar cases)
- [ ] Rule-based (if-then logic)

**Actionability:**

AI output should be actionable:
- [ ] Specific next steps recommended
- [ ] Guidance on how to respond
- [ ] Clear escalation path if needed
- [ ] Contact information or help resources

---

### Step 3: Design Communication (Human to AI)

**Feedback Mechanisms:**

- [ ] **Correction:** User can correct AI errors
  - Method: _______________________
  - AI learns from corrections: ☐ Yes ☐ No

- [ ] **Context Addition:** User can provide context AI lacks
  - Method: _______________________
  - Example: _______________________

- [ ] **Preference Indication:** User can indicate preferences
  - Method: _______________________
  - AI adapts to preferences: ☐ Yes ☐ No

- [ ] **Override:** User can override AI decisions
  - Override is: ☐ Frictionless ☐ Requires justification ☐ Blocked
  - Override documentation: _______________________

- [ ] **Confidence Feedback:** User can indicate trust/distrust
  - Method: _______________________
  - Used for: ☐ AI improvement ☐ User trust calibration ☐ Both

**Learning Loop:**

- [ ] AI learns from user feedback
- [ ] User sees how their feedback improved AI
- [ ] Regular review of human-AI collaboration quality
- [ ] Metrics: ___________________________

---

### Step 4: Design for Appropriate Trust

**Calibrating Trust:**

| Risk | Mitigation | Implementation |
|------|-----------|----------------|
| **Over-reliance** (trusting AI when it's wrong) | Show uncertainty, require human check for high-stakes | |
| **Under-reliance** (ignoring AI when it's right) | Build credibility through explanation, demonstrate reliability | |
| **Complacency** (not checking AI over time) | Require active engagement, vary automation level | |
| **Skill atrophy** (losing ability to perform task) | Practice mode, periodic manual operation | |

**Trust Indicators:**

- [ ] AI explicitly indicates confidence level
- [ ] AI indicates when it's operating outside training domain (novel situation)
- [ ] AI tracks and reports its accuracy over time
- [ ] AI distinguishes between routine cases (trust more) and edge cases (verify more)

**Trust Calibration Mechanisms:**

- [ ] Onboarding period with extra human oversight
- [ ] Gradual automation increase as reliability proven
- [ ] Regular "test" cases where AI and human both decide (comparison)
- [ ] Transparent error reporting (AI admits mistakes)

---

## Part 4: Maintaining Human Agency

### Agency Threat Assessment

**Potential Threats:**

| Threat | Risk Level | Mitigation |
|--------|-----------|-----------|
| **Nudging/Manipulation** (AI subtly steers choices) | ☐ High ☐ Med ☐ Low | |
| **Learned Helplessness** (users stop developing own judgment) | ☐ High ☐ Med ☐ Low | |
| **Choice Architecture Abuse** (option presentation biases choices) | ☐ High ☐ Med ☐ Low | |
| **Invisible Decision-Making** (users unaware AI is deciding) | ☐ High ☐ Med ☐ Low | |
| **Autonomy Erosion** (scope of human choice narrows over time) | ☐ High ☐ Med ☐ Low | |
| **Skill Atrophy** (users lose capability to perform task) | ☐ High ☐ Med ☐ Low | |

---

### Agency Preservation Mechanisms

**Meaningful Choice:**

- [ ] Users have genuine options (not just illusion of choice)
- [ ] No option is "right" choice (AI doesn't bias presentation)
- [ ] Users can choose "none of the above" / create own option
- [ ] Choice architecture is transparent (why these options presented this way?)

**Informed Consent:**

- [ ] Users know when AI is being used
- [ ] Users understand what AI does with their data/input
- [ ] Users can consent or refuse AI involvement
- [ ] Users can change consent/preferences over time

**Right to Human Decision:**

- [ ] For important decisions, users can request human review
- [ ] Human review actually different from AI (not just rubber-stamping)
- [ ] No penalty for requesting human review

**Transparency About Influence:**

- [ ] If AI designed to influence behavior (recommendations, nudges), this is disclosed
- [ ] Users understand how personalization works
- [ ] Users can see and control personalization factors

**Opt-Out Capability:**

- [ ] Users can opt out of AI without significant disadvantage
- [ ] Opt-out process is simple (not dark patterns)
- [ ] Opt-out doesn't eliminate service, just AI component

**Skill Maintenance:**

- [ ] Regular manual operation required (users don't lose skills)
- [ ] "Practice mode" available (users can try task without AI)
- [ ] AI provides learning/teaching (users understand WHY, not just WHAT)
- [ ] Gradual automation (users build skills before AI takes over)

**Agency Evaluation Questions:**

| Question | Yes/No | Evidence |
|----------|--------|----------|
| If AI stopped working tomorrow, could users still perform this task competently? | | |
| Do users understand what AI is doing well enough to detect errors? | | |
| Can users articulate WHY they trust or don't trust AI in specific situations? | | |
| Have users' skills in this domain improved, stayed the same, or declined since AI introduction? | | |
| Do users feel more empowered or less empowered since AI introduction? | | |

---

## Part 5: Implementation Process

### Phase 1: Research (BEFORE Building)

**User Research:**

- [ ] Conduct user interviews (target: minimum 10-15 users)
  - Focus: Current tasks, challenges, goals, environment, preferences
  - Completed: _____ interviews on _____

- [ ] Observe users in context (target: minimum 20-40 hours)
  - Focus: Actual workflows, informal practices, pain points, workarounds
  - Completed: _____ hours on _____

- [ ] Survey broader user population (target: 50-100+ responses)
  - Focus: Quantify findings from interviews/observations
  - Completed: _____ responses on _____

**Contextual Inquiry:**

- [ ] Document current workflows (before AI)
- [ ] Identify current tools and how they're used
- [ ] Document where errors occur and why
- [ ] Identify informal practices (workarounds users developed)
- [ ] Map pain points and unmet needs

**Stakeholder Interviews:**

- [ ] Interview all stakeholder types identified in Part 1
- [ ] Document conflicting interests
- [ ] Identify non-negotiable requirements per stakeholder

**Competitive/Comparative Analysis:**

- [ ] How do existing solutions (AI or non-AI) address this need?
- [ ] What works well in existing solutions?
- [ ] What fails in existing solutions?
- [ ] What can we learn from adjacent domains?

**Key Research Findings:**
- User needs: _____________________________
- Pain points: _____________________________
- Values/preferences: _____________________________
- Constraints: _____________________________
- Opportunities: _____________________________

---

### Phase 2: Design Iteratively

**Prototype 1 - Low Fidelity:**

- [ ] Concept: _____________________________
- [ ] Format: ☐ Paper prototype ☐ Wireframe ☐ Wizard-of-Oz ☐ Mockup
- [ ] Test with: _____ users for _____ sessions
- [ ] Key feedback: _____________________________
- [ ] Learning: _____________________________
- [ ] Changes needed: _____________________________

**Prototype 2 - Medium Fidelity:**

- [ ] Concept (revised): _____________________________
- [ ] Format: ☐ Interactive mockup ☐ Limited functionality ☐ Simulated AI
- [ ] Test with: _____ users for _____ sessions
- [ ] Key feedback: _____________________________
- [ ] Learning: _____________________________
- [ ] Changes needed: _____________________________

**Prototype 3 - High Fidelity:**

- [ ] Full functionality in controlled environment
- [ ] Test with: _____ users for _____ weeks
- [ ] Metrics tracked: _____________________________
- [ ] Key feedback: _____________________________
- [ ] Ready for pilot: ☐ Yes ☐ No - Changes needed: _____

**Iteration Principles:**

- [ ] Test early and often (fail fast, learn fast)
- [ ] Test with real users, not internal team
- [ ] Be willing to change direction based on evidence
- [ ] Don't fall in love with your design (embrace feedback)
- [ ] Each iteration should address specific hypothesis

---

### Phase 3: Pilot Deployment

**Pilot Scope:**

- [ ] Limited user population: _____ users
- [ ] Limited geographic area: _____
- [ ] Limited use cases: _____
- [ ] Duration: _____ weeks/months
- [ ] Pilot start date: _____

**Pilot Objectives:**

1. Validate: _____________________________
2. Learn: _____________________________
3. Improve: _____________________________
4. Prepare for scale: _____________________________

**Pilot Support:**

- [ ] Extra training for pilot users
- [ ] Dedicated support channel (response time: _____)
- [ ] Weekly feedback sessions
- [ ] Rapid iteration based on pilot findings

**Pilot Evaluation:**

| Metric | Target | Actual | Gap Analysis |
|--------|--------|--------|--------------|
| User satisfaction | | | |
| Task completion rate | | | |
| Time to competency | | | |
| Error rate | | | |
| Trust calibration | | | |
| Skill maintenance | | | |
| Autonomy preservation | | | |

**Pilot Decision:**

- [ ] Proceed to full deployment (pilot successful)
- [ ] Iterate and extend pilot (needs improvement)
- [ ] Redesign significantly (pilot revealed fundamental issues)
- [ ] Cancel project (approach not viable)

**Justification:** _____________________________

---

### Phase 4: Full Deployment

**Deployment Plan:**

- [ ] Gradual rollout: ☐ Phase 1 (_____ users), ☐ Phase 2 (_____ users), ☐ Phase 3 (all users)
- [ ] Training program: _____ hours per user, format: _____
- [ ] Support resources: _____
- [ ] Monitoring plan: _____
- [ ] Rollback plan (if deployment fails): _____

**Training Program:**

**For Users:**
- [ ] How AI works (high-level)
- [ ] When to trust AI, when to question it
- [ ] How to use interface effectively
- [ ] How to override/correct AI
- [ ] How to provide feedback
- [ ] Error recovery procedures
- Duration: _____ hours

**For Support Staff:**
- [ ] All user training PLUS
- [ ] How to interpret AI outputs
- [ ] Common issues and troubleshooting
- [ ] Escalation procedures
- Duration: _____ hours

**For Administrators:**
- [ ] System configuration
- [ ] Monitoring and maintenance
- [ ] Performance optimization
- [ ] Incident response
- Duration: _____ hours

---

### Phase 5: Evaluation (Ongoing)

**Evaluation Framework:**

**Technical Metrics (AI Performance):**

| Metric | Target | Current | Trend |
|--------|--------|---------|-------|
| Accuracy / F1 / AUROC | | | |
| Precision (false positive rate) | | | |
| Recall (false negative rate) | | | |
| Fairness across groups | | | |

**Human-Centered Metrics (Human Outcomes):**

| Metric | Target | Current | Trend |
|--------|--------|---------|-------|
| User satisfaction | | | |
| Appropriate trust (calibration) | | | |
| Skill maintenance | | | |
| Autonomy perception | | | |
| Time to task completion | | | |
| Task quality | | | |
| User confidence | | | |

**Collaboration Metrics (Human-AI Team):**

| Metric | Target | Current | Trend |
|--------|--------|---------|-------|
| Team performance (human + AI vs either alone) | | | |
| Override rate | | | |
| Override accuracy (were overrides correct?) | | | |
| AI learning from human feedback | | | |
| Human learning from AI | | | |

**Stakeholder Impact Metrics:**

| Stakeholder | Metric | Target | Current |
|-------------|--------|--------|---------|
| | | | |

**Unintended Consequences Monitoring:**

- [ ] Negative effects on users: _____
- [ ] Negative effects on affected populations: _____
- [ ] Broader societal impacts: _____
- [ ] Unexpected uses (positive or negative): _____

**Continuous Improvement:**

- [ ] Monthly review of metrics
- [ ] Quarterly stakeholder feedback
- [ ] Annual comprehensive evaluation
- [ ] Rapid response to issues (incident response process: _____)

---

## Part 6: Final Documentation

**Human-Centered AI Design Documentation:**

**1. Principles Assessment** (Part 1)
- Human needs identified: _____
- Augmentation strategy: _____
- Control mechanisms: _____
- Usability requirements: _____
- Stakeholders mapped: _____
- Dignity preservation: _____

**2. Automation Level** (Part 2)
- Selected level: _____
- Justification: _____
- Controls implemented: _____

**3. Collaboration Design** (Part 3)
- Complementary strengths: _____
- Communication design: _____
- Feedback loops: _____
- Trust calibration: _____

**4. Agency Preservation** (Part 4)
- Threats identified: _____
- Mitigations implemented: _____
- Evaluation results: _____

**5. Implementation** (Part 5)
- Research findings: _____
- Iteration learnings: _____
- Pilot results: _____
- Deployment status: _____
- Evaluation outcomes: _____

**Approval:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Product Owner | | | |
| UX Lead | | | |
| AI/ML Lead | | | |
| User Representative | | | |
| Ethics/Compliance | | | |
| Executive Sponsor | | | |

---

**Document Version:** 1.0
**Last Updated:** _____
**Next Review:** _____ (recommend 6 months)

---

## Related Examples
- Human-Centered AI Implementation Examples (Automation Levels, Complementary Strengths, Case Studies)

## Related Templates
- AI Explainability Assessment and Implementation Framework
- Trustworthy AI - Seven Pillars Implementation Framework
