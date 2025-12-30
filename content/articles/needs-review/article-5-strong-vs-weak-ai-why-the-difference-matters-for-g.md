---


## The Capability Spectrum

Rather than a binary strong/weak divide, it's more accurate to think of AI capabilities as a spectrum with multiple dimensions.


### Dimensions of AI Capability

**1. Task Breadth**
<!-- component:flowchart:flowchart-dimensions-of-ai-capability -->
- Single task (spam filter) → Multiple related tasks (virtual assistant) → Cross-domain (hypothetical AGI)

**2. Reasoning Depth**
- Pattern matching → Multi-step inference → Abstract reasoning → Novel problem-solving

**3. Learning Flexibility**
- Fixed after training → Fine-tunable → Few-shot learning → Continuous learning

**4. Contextual Understanding**
- No context → Session context → Long-term memory → True understanding

**5. Autonomy Level**
- Fully supervised → Human-in-loop → Human-on-loop → Fully autonomous

Current frontier models like GPT-4 and Claude have advanced significantly on several dimensions—they handle multiple tasks, perform multi-step reasoning, and learn from few examples. But they remain fundamentally narrow: their "understanding" is statistical, their "reasoning" is pattern-matching at scale, and their outputs require human verification.


### Where Current AI Actually Sits

Modern large language models represent a new category some call "foundation models"—systems that are narrow in principle but broad in application. They're still weak AI: no genuine understanding, no autonomous goals, no transfer beyond training distribution. But they're weak AI that can be applied to thousands of tasks, creating governance challenges that don't fit neatly into either category.

This is why the EU AI Act specifically addresses "general-purpose AI" and foundation models—recognizing that systems can be narrow in nature while broad in application.

---


## Governance Implications by AI Type


### Governing Narrow Task-Specific AI

For traditional narrow AI (fraud detection, image classification, recommendation systems), governance is relatively straightforward:

**Key governance elements:**
- Define acceptable performance metrics for the specific task
- Assess bias relevant to the particular use case
- Establish human oversight proportional to decision impact
- Monitor for drift within the task domain
- Document training data and intended use

<!-- component:template:template-governing-narrow-task-specific-ai -->
**Example: Credit Scoring AI**

| Governance Element | Approach |
<!-- component:table:table-governing-narrow-task-specific-ai -->
|--------------------|----------|
| Performance metrics | Accuracy, false positive/negative rates by demographic |
| Bias assessment | Disparate impact analysis across protected classes |
| Human oversight | Human review for decisions near threshold |
| Monitoring | Weekly distribution analysis, monthly fairness audits |
| Documentation | Model card with training data sources and limitations |


### Governing Foundation Models

Foundation models require additional governance considerations due to their breadth of application:

**Additional governance elements:**
- Acceptable use policies (what applications are permitted)
- Downstream deployment controls (who can build on the model)
- Emergent capability monitoring (what can it do that we didn't expect)
- Multi-stakeholder impact assessment (effects across use cases)
- Content and safety filtering (preventing misuse across applications)

<!-- component:template:template-governing-foundation-models -->
**Example: Enterprise LLM Deployment**

| Governance Element | Approach |
<!-- component:table:table-governing-foundation-models -->
|--------------------|----------|
| Acceptable use | Permitted for internal knowledge search; prohibited for customer-facing decisions |
| Downstream controls | All applications require AI governance review before deployment |
| Capability monitoring | Quarterly red team exercises for new capabilities |
| Impact assessment | Department-level assessments for each use case |
| Content filtering | Profanity filter, PII detection, prompt injection prevention |


### Preparing for More Capable Systems

While strong AI doesn't exist, AI capabilities are advancing. Prudent governance includes scenario planning for more capable systems:

**Questions to consider:**
- What capabilities would trigger governance escalation?
- Who monitors for capability advances?
- How would decision-making processes change with more autonomous systems?
- What human oversight mechanisms are capability-dependent?
- Where are our governance assumptions most vulnerable to capability increases?

This isn't about preparing for robot uprisings. It's about recognizing that a system requiring human approval for every output needs different governance than one making thousands of autonomous decisions per second.

---


## The AGI Hype Cycle and Governance


### Why AGI Claims Persist

Despite the absence of strong AI, claims about imminent AGI are endemic in the technology industry. Understanding why helps governance professionals navigate the hype.

**Motivations for AGI claims:**
- **Funding**: AGI narratives attract venture capital and research grants
- **Talent**: Top researchers want to work on "world-changing" technology
- **Valuations**: Public companies benefit from AI mystique
- **Media**: "AI achieves consciousness" gets more clicks than "statistical model improves"
- **Ego**: Some researchers genuinely believe they're building something revolutionary

**Red flags in AGI claims:**
- Moving goalposts (AGI is always 5-10 years away)
- Conflating performance with understanding
- Cherry-picked impressive examples
- Dismissing fundamental limitations as "engineering problems"
- Lack of falsifiable predictions


### The Governance Response to Hype

Governance professionals should neither amplify nor dismiss AI hype. Instead, focus on:

**1. Capability-based assessment**
Evaluate what systems actually do, not what they might theoretically do. If a vendor claims "AGI-level reasoning," ask for specific, measurable demonstrations in your use case.

**2. Evidence-based risk assessment**
Base controls on documented capabilities and failures, not speculative scenarios. The risk from biased training data is proven; the risk from AI consciousness is not.

**3. Incremental governance scaling**
Design governance frameworks that can scale with capabilities. As systems become more capable, oversight increases—but not before capabilities materialize.

**4. Clear communication**
Help stakeholders understand the gap between headlines and reality. This builds credibility and prevents both over-reaction and under-reaction to actual risks.

---


## Practical Takeaways for Governance Professionals

<!-- component:list:list-key-principles -->

### Key Principles

<!-- component:flowchart:flowchart-key-principles -->
1. **All current AI is weak AI**: No exceptions, regardless of impressive demos or marketing claims.

2. **Weak AI causes real harm**: Discrimination, privacy violations, safety failures, and manipulation don't require consciousness.

3. **Governance frameworks should match reality**: Apply narrow AI governance to narrow AI systems; don't waste resources on hypothetical risks.

4. **Communicate accurately**: Help stakeholders understand what AI actually is—both less magical and more risky than they assume.

5. **Monitor capability changes**: While current AI is narrow, capabilities advance. Build governance that can scale.


### Questions to Ask About Any AI System

| Question | Why It Matters |
<!-- component:table:table-questions-to-ask-about-any-ai-system -->
|----------|----------------|
| What specific task(s) is this designed for? | Establishes scope of governance |
| What happens when it encounters out-of-scope inputs? | Identifies failure modes |
| Does it have any autonomous goal-seeking behavior? | Clarifies agency boundaries |
| How is human oversight implemented? | Ensures meaningful control |
| What would changing capabilities look like? | Enables proactive governance |


### The Bottom Line

The distinction between strong and weak AI isn't just philosophical—it's the foundation of effective AI governance. Every AI system you govern today is weak AI, with bounded capabilities, predictable failure modes, and manageable risks. Treating narrow AI as if it were a nascent consciousness wastes resources; ignoring narrow AI risks because "it's not really intelligent" enables real harm.

Your job is to govern the AI that exists, not the AI that might exist someday. That means robust controls for bias, transparency, and oversight—not containment protocols for systems that have no more autonomy than a calculator. Understanding the strong/weak distinction ensures your governance efforts match reality, your stakeholder communications are accurate, and your resources target actual risks.

---


## Summary

**Key Takeaways:**

- **Strong AI (AGI)** is hypothetical general intelligence matching or exceeding human cognition across all domains—it does not exist and may never exist

- **Weak AI (Narrow AI)** describes all current AI systems—highly capable within specific domains, completely incapable outside them

- Current AI systems are sophisticated pattern-matching engines without understanding, consciousness, or autonomous goals

- Governance frameworks should match AI reality: focus on narrow AI risks (bias, errors, misuse) rather than hypothetical AGI risks (consciousness, autonomy, existential threat)

- Foundation models blur boundaries by being narrow in principle but broad in application, requiring hybrid governance approaches

- Effective governance requires translating between technical reality and stakeholder perceptions shaped by science fiction

- Monitor for capability changes, but don't govern for capabilities that don't exist

---


## Further Reading

- Searle, J. (1980). "Minds, Brains, and Programs" - The Chinese Room argument
- Bostrom, N. (2014). "Superintelligence" - Arguments for AGI risk (read critically)
- Marcus, G. (2022). "Deep Learning is Hitting a Wall" - Limitations of current approaches
- Mitchell, M. (2019). "Artificial Intelligence: A Guide for Thinking Humans" - Clear-eyed assessment
- OECD (2019). "Recommendation on AI" - Governance framework for narrow AI

---

*Article 5 of 158 in the AI Governance Mastery series*

*Next: Article 7 - Deep Learning Decoded – Neural Networks for Non-Engineers*
