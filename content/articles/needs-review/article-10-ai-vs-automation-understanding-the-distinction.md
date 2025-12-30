---


## Robotic Process Automation (RPA): The Great Confusion


### What RPA Actually Is

Robotic Process Automation has "automation" in the name, but marketing has muddied the waters by associating it with AI. Let's be clear: **traditional RPA is automation, not AI**.

RPA uses software "bots" to mimic human interactions with computer systems—clicking buttons, entering data, copying information between applications. It follows scripted sequences of actions.

**What RPA does:**

- Logs into applications
- Copies data between systems
- Fills out forms
- Moves files
- Executes rule-based decisions
- Generates reports

**What RPA doesn't do (without AI integration):**

- Learn from experience
- Handle unstructured data
- Make judgment calls
- Adapt to novel situations
- Understand natural language


### RPA + AI: "Intelligent Automation"

The confusion arises because vendors increasingly integrate AI capabilities with RPA, calling it "intelligent automation" or "cognitive automation":

| Capability | Pure RPA | RPA + AI |
<!-- component:table:table-rpa-ai-intelligent-automation -->
|------------|----------|----------|
| Read typed form | Yes (fixed fields) | Yes (any format) |
| Read handwritten form | No | Yes (with OCR/AI) |
| Extract data from email | Yes (if templated) | Yes (understands context) |
| Categorize documents | No | Yes (with classification model) |
| Make decisions | Only rule-based | Can use ML predictions |
| Handle exceptions | Requires human | Can attempt resolution |

**Governance implication**: You need to know which parts of your "RPA" deployment are actually AI. They require different governance approaches.


### RPA Governance vs. AI Governance

| Aspect | RPA Governance | AI Governance |
<!-- component:table:table-rpa-governance-vs-ai-governance -->
|--------|----------------|---------------|
| Change management | Update scripts, test workflows | Retrain models, validate performance |
| Testing | Verify script execution | Validate predictions across segments |
| Documentation | Document process flows | Document training data, model behavior |
| Risk focus | Process errors, system changes | Bias, drift, unexpected predictions |
| Audit approach | Review rules and logs | Review model performance and fairness |
| Explainability | Fully explainable | May require interpretability tools |

---


## Why the Distinction Matters for Governance


### Different Risk Profiles

Automation and AI present fundamentally different risk profiles:

**Automation Risks:**

| Risk | Description | Mitigation |
<!-- component:table:table-different-risk-profiles -->
|------|-------------|------------|
| Logic errors | Rules don't capture all cases | Thorough requirements, edge case testing |
| Brittleness | Breaks when inputs change | Exception handling, monitoring |
| Scale amplification | Errors execute at machine speed | Rate limiting, human checkpoints |
| Change propagation | Rule changes affect all cases | Testing, staged rollout |
| Maintenance | Rules become outdated | Regular review cycles |

**AI Risks:**

| Risk | Description | Mitigation |
<!-- component:table:table-different-risk-profiles -->
|------|-------------|------------|
| Bias | Model reflects training data biases | Bias testing, diverse data |
| Drift | Performance degrades as data changes | Monitoring, retraining |
| Hallucination | Confident incorrect outputs | Verification, uncertainty quantification |
| Opacity | Can't explain decisions | Interpretability tools, human oversight |
| Adversarial vulnerability | Can be deliberately fooled | Security testing, input validation |
| Emergent behavior | Capabilities appear unexpectedly | Capability monitoring, testing |

Applying AI governance to automation wastes resources on irrelevant controls. Applying automation governance to AI misses critical risks.


### Different Regulatory Considerations

Regulations often distinguish between automated and AI-assisted decision-making:

**GDPR Article 22**: Addresses "automated individual decision-making, including profiling." This covers both automation and AI, but the right to explanation plays out differently:
- For automation: Show the rules that led to the decision
- For AI: Provide meaningful information about the logic involved (harder)

**EU AI Act**: Specifically targets AI systems, defined as "machine-based systems designed to operate with varying levels of autonomy and that may exhibit adaptiveness after deployment." Pure automation may fall outside scope.

**NYC Local Law 144**: Requires bias audits for "automated employment decision tools"—but the focus is on tools that use "machine learning, statistical modeling, data analytics, or artificial intelligence."

Understanding whether your system is automation, AI, or hybrid determines which regulations apply and how.


### Different Stakeholder Expectations

When organizations announce "AI" initiatives, stakeholders have certain expectations:

| Stakeholder | Expects from "AI" | Disappointed by |
<!-- component:table:table-different-stakeholder-expectations -->
|-------------|-------------------|-----------------|
| Executives | Transformative capability, competitive advantage | Rebranded rule engine |
| Employees | Smart assistant that understands context | Rigid chatbot with limited options |
| Customers | Personalized, adaptive experience | Script that can't handle variations |
| Regulators | Appropriate AI governance controls | Over-governance of simple automation |
| Investors | Innovative technology | Dressed-up automation |

Mislabeling automation as AI creates expectation gaps that damage credibility and trust.

---


## Practical Classification Framework


### Decision Tree for Classification

Use this framework to classify systems in your organization:

```
Does the system learn from data?
│
├─ NO → Does it follow explicit programmed rules?
│        │
│        ├─ YES → AUTOMATION
│        │
│        └─ NO → Something else (not automation or AI)
│
└─ YES → Does it adapt its behavior based on new data?
         │
         ├─ YES → Does it use neural networks or advanced ML?
         │        │
         │        ├─ YES → AI (Advanced/Deep Learning)
         │        │
         │        └─ NO → AI (Traditional ML)
         │
         └─ NO → Hybrid or rule-based with ML components
```


### Classification Questions

Ask these questions to classify any system:

**1. How was it created?**
- Programmed with explicit rules → Automation
- Trained on data → AI
- Both → Hybrid

**2. Can it handle novel situations?**
- Only situations explicitly programmed → Automation
- Attempts predictions for new situations → AI

**3. How is it updated?**
- Changing code/rules → Automation
- Retraining on new data → AI
- Both → Hybrid

**4. Can you fully explain every decision?**
- Yes, by tracing rules → Automation
- Only probabilistically → AI

**5. Does output vary for identical inputs?**
- Never (deterministic) → Automation
- Potentially (probabilistic/stochastic) → AI


### Common Misclassifications

| Often Called "AI" | Actually Is | Why Mislabeled |
<!-- component:table:table-common-misclassifications -->
|-------------------|-------------|----------------|
| Rule-based chatbot | Automation | "AI-powered" marketing |
| Business rules engine | Automation | Complex rules seem intelligent |
| Basic RPA | Automation | "Robotic" sounds like AI |
| Decision trees | Borderline | Can be learned or hand-coded |
| Simple scoring models | Depends | May be statistical, not ML |
| Workflow automation | Automation | "Intelligent" workflow marketing |

| Often Called "Automation" | Actually Has AI | Why Mislabeled |
<!-- component:table:table-common-misclassifications -->
|---------------------------|-----------------|----------------|
| "Smart" OCR | AI (ML-based recognition) | Seems like simple scanning |
| Modern spam filters | AI (ML classification) | We're used to them |
| Content recommendations | AI (ML-based) | Just seems like sorting |
| Voice assistants | AI (multiple ML models) | Natural interaction masks complexity |

---


## Governance Implications by Category


### Governing Pure Automation

For rule-based automated systems:

**Documentation requirements:**
- Complete rule documentation
- Decision flow diagrams
- Exception handling procedures
- Change history

**Testing approach:**
- Rule verification testing
- Boundary case testing
- Exception path testing
- Regression testing after changes

**Monitoring focus:**
- Rule execution metrics
- Exception rates
- Process completion rates
- System availability

**Change management:**
- Formal change request process
- Impact assessment
- Testing before deployment
- Rollback procedures


### Governing AI Systems

For systems using machine learning:

**Documentation requirements:**
- Training data documentation
- Model architecture description
- Performance metrics
- Known limitations
- Bias assessment results

**Testing approach:**
- Performance validation across segments
- Bias and fairness testing
- Adversarial testing
- Drift detection baseline

**Monitoring focus:**
- Prediction accuracy
- Confidence calibration
- Demographic performance parity
- Data drift indicators
- Model drift indicators

**Change management:**
- Retraining protocols
- Model version management
- A/B testing for model updates
- Rollback to previous model version


### Governing Hybrid Systems

For systems combining automation and AI:

**Documentation requirements:**
- Clear boundary identification (what's automated vs. AI)
- Integration logic documentation
- End-to-end process flows
- Both rule documentation and model documentation

**Testing approach:**
- Component-level testing (rules separately, models separately)
- Integration testing
- End-to-end scenario testing
- Both rule verification and model validation

**Monitoring focus:**
- Both automation metrics and AI metrics
- Integration point monitoring
- Overall system performance
- Component attribution for errors

**Change management:**
- Separate tracks for rule changes vs. model changes
- Integration testing for any change
- Coordinated release management

---


## Building Organizational Clarity


### Inventory Classification

Create an inventory that properly classifies AI vs. automation:

| System | Classification | AI Components | Automation Components | Governance Track |
<!-- component:table:table-inventory-classification -->
|--------|----------------|---------------|----------------------|------------------|
| Fraud detection | Hybrid | Anomaly scoring model | Rule-based blocks, routing | AI + Automation |
| Invoice processing | Hybrid | Document OCR | Routing rules, workflow | AI + Automation |
| HR chatbot | Automation | None | Dialog trees, FAQ lookup | Automation only |
| Customer churn prediction | AI | ML prediction model | None (prediction only) | AI only |
| Report generation | Automation | None | Data extraction, formatting | Automation only |


### Stakeholder Education

Help stakeholders understand the distinction:

**For executives:**
"AI learns patterns from data and makes predictions. Automation follows rules we write. Both are valuable, but they require different investments and have different capabilities."

**For project teams:**
"Before calling something AI, ask: does it learn from data? If it just follows rules, it's automation—valuable, but needs different governance."

**For regulators/auditors:**
"We distinguish between rule-based automation and learned AI systems. Our AI systems have these additional controls: [bias testing, drift monitoring, etc.]"


### Policy Framework

Create separate but aligned policies:

**Automation Policy:**
- Rule documentation standards
- Testing requirements
- Change management procedures
- Monitoring requirements

**AI Policy:**
- Acceptable use cases
- Data requirements
- Model documentation standards
- Bias testing requirements
- Performance monitoring
- Human oversight requirements

**Integration Policy (for hybrid systems):**
- Classification requirements
- Combined governance approach
- Integration testing standards
- Clear accountability

---


## The Terminology Trap


### Why Vendors Blur the Lines

Vendors have incentives to call everything "AI":

- **Valuation**: AI companies command higher multiples
- **Sales**: AI sounds more impressive than automation
- **Talent**: Developers want to work on "AI"
- **Funding**: Investors chase AI opportunities

This creates a market where "AI-powered" appears on products ranging from simple rule engines to genuine machine learning.


### How to Cut Through the Marketing

When vendors claim AI capabilities, ask:

| Question | Pure Automation Answer | AI Answer |
<!-- component:table:table-how-to-cut-through-the-marketing -->
|----------|----------------------|-----------|
| "How does it learn?" | "We configure rules" | "It trains on your data" |
| "What happens with new patterns?" | "We update rules manually" | "Model adapts to new patterns" |
| "Can you show the training data?" | Confused response | Dataset description |
| "How do you handle model drift?" | Confused response | Monitoring and retraining process |
| "Can identical inputs give different outputs?" | "No, it's deterministic" | "Possibly, it's probabilistic" |


### Getting Terminology Right Internally

Establish clear internal terminology:

**Use "automation" when:**
- System follows explicit programmed rules
- Behavior is fully deterministic
- No machine learning is involved

**Use "AI" or "ML" when:**
- System was trained on data
- System makes predictions or classifications
- Behavior involves learned patterns

**Use "intelligent automation" or "hybrid" when:**
- System combines both approaches
- AI components inform automated processes

---


## Summary

**Key Takeaways:**

- **Automation** follows predefined rules programmed by humans; outputs are deterministic and fully explainable

- **AI** learns patterns from data; outputs are probabilistic and may not be fully explainable

- Most real-world systems are **hybrids** combining automation and AI—governance must address both

- **RPA is automation**, not AI—unless it incorporates machine learning components for capabilities like document understanding

- The distinction matters for governance because automation and AI have different **risk profiles**, **regulatory treatments**, and **governance requirements**

- **Mislabeling** automation as AI (or vice versa) leads to inappropriate governance, wasted resources, and stakeholder disappointment

- Classification requires asking: Does it learn from data? Can it handle novel situations? Is it deterministic? How is it updated?

- Organizations should **inventory and classify** their systems, create **separate governance tracks**, and **educate stakeholders** on the distinction

---


## Practical Checklist

**For every "AI" system, verify:**
<!-- component:checklist:checklist-practical-checklist -->
- [ ] Does it actually use machine learning or just rules?
- [ ] What components are AI vs. automation?
- [ ] Is it properly classified in our inventory?
- [ ] Is it in the appropriate governance track?
- [ ] Do stakeholders understand what it actually is?

**When evaluating new systems:**
- [ ] Ask vendors to specify AI vs. automation components
- [ ] Request documentation appropriate to each component type
- [ ] Apply appropriate testing and validation for each component
- [ ] Plan appropriate ongoing monitoring for each component

---


## Further Reading

- IEEE (2017). "Guide for Terms and Concepts in Intelligent Process Automation"
- Gartner. "Distinguish AI From Automation in Your Enterprise Strategy"
- OECD (2019). "Recommendation on AI" - Definitions and scope
- Brynjolfsson & McAfee (2017). "Machine, Platform, Crowd" - Automation vs. AI economics
- Davenport & Ronanki (2018). "Artificial Intelligence for the Real World" - HBR

---

*Article 10 of 158 in the AI Governance Mastery series*

*Next: Article 11 - The Data Behind AI – Why Training Data Determines Everything*
