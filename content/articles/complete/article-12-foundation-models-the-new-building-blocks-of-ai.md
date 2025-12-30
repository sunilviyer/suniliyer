---
title: Untitled
slug: article-12-foundation-models-the-new-building-blocks-of-ai
path: responsibility
tldr: Only a handful of organizations can create frontier foundation models:

| Organization | Models | Approach |
<!
contentSections:
  - The Foundation Model Ecosystem
  - Governance Challenges
  - Foundation Model Selection
  - Governance Framework for Foundation Models
  - The Future of Foundation Models
  - Practical Checklist
  - Further Reading
relatedConcepts: []
crossPathRefs:
tags:
  - ai
  - governance
  - responsibility
category: AI & Technology
image: article-12-foundation-models-the-new-building-blocks-of-ai.jpg
imageAlt: Untitled
author: Sunil Iyer
publishDate: 2025-12-23
readingTime: 10
seoTitle: Untitled
seoDescription: Only a handful of organizations can create frontier foundation models:

| Organization | Models | Approach |
<!
---



## The Foundation Model Ecosystem


### Who Creates Foundation Models

Only a handful of organizations can create frontier foundation models:

| Organization | Models | Approach |
<!-- component:table:table-who-creates-foundation-models -->
|--------------|--------|----------|
| OpenAI | GPT-4, GPT-4o | Closed, API access |
| Anthropic | Claude 3, Claude 3.5 | Closed, safety-focused |
| Google | Gemini, PaLM | Closed, integrated with Google products |
| Meta | LLaMA 3 | Open weights, enables ecosystem |
| Mistral | Mistral, Mixtral | Open weights, European |
| Amazon | Titan | AWS-integrated |
| Cohere | Command | Enterprise-focused |

**Why so few?**
- Training costs: $10M-$100M+ for frontier models
- Data requirements: Access to massive, diverse datasets
- Expertise: Specialized ML engineering talent
- Compute: Thousands of high-end GPUs for months
- Infrastructure: Custom training systems and pipelines


### Who Deploys Foundation Models

Many more organizations deploy and adapt foundation models:

**API consumers:**
- Build applications using model APIs
- No infrastructure management
- Pay per use
- Dependent on provider policies

**Fine-tuners:**
- Customize models for specific domains
- Require some ML expertise
- Moderate compute requirements
- Can use open or closed models (depending on provider)

**Self-hosters:**
- Run models on own infrastructure
- Full control over deployment
- Significant infrastructure investment
- Typically use open-weight models


### The Dependency Chain

Foundation models create dependency chains:

```
Foundation Model Provider (e.g., OpenAI)
    ↓
Platform Provider (e.g., Azure OpenAI)
    ↓
Application Developer (e.g., enterprise software company)
    ↓
Enterprise Customer (e.g., your organization)
    ↓
End Users (e.g., employees, customers)
```

**Governance implication:** Changes at any level cascade down. A foundation model update can break applications three layers removed.

---


## Governance Challenges


### The Black Box Problem

Foundation models are difficult to understand:

**Opacity sources:**
- Billions of parameters with no interpretable meaning
- Training data often undisclosed (especially for closed models)
- Capabilities emerge unpredictably
- Behavior varies with prompting

**What we can't easily answer:**
- Why did the model produce this specific output?
- What information did it use?
- What biases does it encode?
- How will it behave in edge cases?

**Governance responses:**
- Focus on behavioral testing (what does it do?) rather than explanation (why?)
- Implement output monitoring and filtering
- Require human oversight for high-stakes applications
- Demand transparency from providers where possible


### Homogenization Risk

When many applications use the same foundation models:

**The problem:**
- A bug affects all dependent applications simultaneously
- A bias propagates across the ecosystem
- A security vulnerability exposes multiple systems
- Correlated failures across systems

**Example scenario:**
If GPT-4 has a systematic error in legal reasoning, every legal application built on GPT-4 inherits that error. Independent legal AI systems would have independent errors—problematic, but not correlated.

**Governance responses:**
- Consider model diversity in critical applications
- Monitor foundation model changes and assess impact
- Don't assume foundation model quality eliminates application-level testing
- Plan for foundation model failures in business continuity


### Emergent Capability Risk

Capabilities that appear unexpectedly:

**The problem:**
- Models may develop capabilities not anticipated during testing
- Safety measures may not cover unexpected capabilities
- Capability jumps between versions can change risk profiles
- Downstream applications may be exposed to new risks

**Examples:**
- Models that unexpectedly develop tool use capabilities
- Reasoning abilities that enable new attack vectors
- Persuasion capabilities that weren't anticipated

**Governance responses:**
- Ongoing capability monitoring (don't just test at deployment)
- Red-teaming for unexpected capabilities
- Version management and change assessment
- Rapid response processes for capability discoveries


### Accountability Gaps

Who's responsible when foundation model-based applications cause harm?

**The chain of actors:**
- Foundation model developer (trained the base model)
- Fine-tuner (adapted for specific use)
- Application developer (built the application)
- Enterprise deployer (deployed to users)
- End user (used the system)

**Accountability challenges:**
- Foundation model developers often disclaim liability
- Terms of service limit provider responsibility
- Harm may result from interactions between layers
- No clear legal framework for AI liability (yet)

**Governance responses:**
- Clear contracts defining responsibilities
- Insurance and indemnification provisions
- Internal accountability regardless of external contracts
- Documentation enabling incident investigation


### Regulatory Uncertainty

Regulations are still catching up:

**EU AI Act approach:**
- "General-purpose AI" (GPAI) provisions specifically address foundation models
- Providers of GPAI models have transparency and documentation obligations
- "Systemic risk" models face additional requirements
- Downstream deployers retain compliance responsibilities

**Other jurisdictions:**
- US: No comprehensive regulation yet; sector-specific and state-level rules
- UK: Pro-innovation framework with less prescriptive rules
- China: Generative AI regulations with registration requirements

**Governance responses:**
- Monitor regulatory developments across jurisdictions
- Document foundation model use for future compliance
- Anticipate stricter requirements and build capacity now
- Participate in standards development where possible

---


## Foundation Model Selection

<!-- component:list:list-evaluation-criteria -->

### Evaluation Criteria

When selecting foundation models for your organization:

**Capability Fit**
- Does the model perform well on your specific tasks?
- How does it compare to alternatives on your use cases?
- Are there domain-specific models that might perform better?

**Deployment Model**
- API access: Lower effort, less control, data sent externally
- Fine-tuning: Moderate effort, some customization, may require external compute
- Self-hosting: Higher effort, full control, infrastructure investment

**Cost Structure**
- API: Per-token costs, can scale quickly
- Fine-tuning: Training costs plus inference costs
- Self-hosting: Infrastructure costs (compute, storage, networking)

**Terms and Policies**
- Acceptable use policies
- Data handling and retention
- Liability and indemnification
- Service level agreements

**Risk Profile**
- Provider's safety testing and red-teaming
- Known limitations and failure modes
- Track record of responsible development
- Transparency and documentation


### Open vs. Closed Models

| Factor | Open-Weight Models | Closed Models |
<!-- component:table:table-open-vs-closed-models -->
|--------|-------------------|---------------|
| Control | Full control over deployment | Limited to provider's interface |
| Customization | Complete flexibility | Limited to allowed fine-tuning |
| Data privacy | Data stays on your infrastructure | Data sent to provider |
| Cost model | Infrastructure costs | Per-use pricing |
| Capability | Often behind frontier | Often most capable |
| Support | Community + optional commercial | Provider support |
| Responsibility | Full responsibility for safety | Shared responsibility |
| Transparency | Can inspect model | Limited transparency |

**When open models make sense:**
- Data privacy requirements preclude sending data externally
- Need deep customization
- Want to avoid per-token costs at scale
- Require full control over deployment

**When closed models make sense:**
- Need state-of-the-art capability
- Don't have ML infrastructure expertise
- Want provider support and safety measures
- Usage patterns suit per-token pricing


### Due Diligence Checklist

Before adopting a foundation model:

<!-- component:checklist:checklist-due-diligence-checklist -->
- [ ] **Capability evaluation**: Tested on representative tasks from your use cases
- [ ] **Benchmark review**: Understood performance on standard benchmarks
- [ ] **Limitation documentation**: Reviewed known limitations and failure modes
- [ ] **Training data understanding**: Know what data was used (to extent disclosed)
- [ ] **Terms review**: Legal review of terms of service and acceptable use
- [ ] **Data handling**: Understand how your data will be handled
- [ ] **Safety testing**: Review provider's safety testing and red-teaming
- [ ] **Cost modeling**: Projected costs for expected usage
- [ ] **Exit strategy**: Plan for switching providers if needed
- [ ] **Compliance alignment**: Verified alignment with regulatory requirements

---


## Governance Framework for Foundation Models


### Layered Governance

Governance should address each layer of the stack:

**Foundation Model Layer**
- Provider selection and due diligence
- Terms and policy review
- Capability and limitation documentation
- Monitoring for model updates and changes

**Adaptation Layer**
- Fine-tuning data governance
- Prompt engineering standards
- RAG knowledge base governance
- Testing of adapted models

**Application Layer**
- Use case risk assessment
- Application-specific testing
- Human oversight requirements
- Output monitoring and filtering

**Deployment Layer**
- Access controls
- Usage monitoring
- Incident response
- Audit trails


### Risk-Based Approach

Tailor governance to risk level:

**High-Risk Applications**
(Medical, legal, financial decisions; safety-critical systems)
- Extensive testing before deployment
- Mandatory human oversight
- Real-time output monitoring
- Regular audits
- Clear accountability

**Medium-Risk Applications**
(Customer communications, internal tools, content generation)
- Standard testing protocol
- Human review for edge cases
- Periodic monitoring
- User feedback mechanisms

**Lower-Risk Applications**
(Internal productivity, research assistance, brainstorming)
- Basic capability verification
- User training and guidelines
- Periodic review


### Essential Policies

**Acceptable Use Policy**
- Approved use cases
- Prohibited uses
- Data handling requirements
- Human oversight requirements

**Model Management Policy**
- Approved models and providers
- Version control and change management
- Testing requirements for new models
- Sunset and migration procedures

**Incident Response**
- Definition of foundation model incidents
- Escalation procedures
- Investigation processes
- Communication protocols

**Vendor Management**
- Due diligence requirements
- Contract provisions
- Ongoing monitoring
- Exit planning

---


## The Future of Foundation Models


### Capability Trajectories

**What's improving:**
- Reasoning and problem-solving capabilities
- Reliability and consistency
- Efficiency (same capability, less compute)
- Context length (handling longer documents)
- Multimodal integration
- Tool use and agentic behavior

**What remains challenging:**
- Hallucination elimination
- Consistent factual accuracy
- True understanding vs. pattern matching
- Robust safety guarantees
- Explainability


### Market Evolution

**Trends to watch:**
- More open-weight alternatives to closed models
- Specialized models for specific domains
- Smaller, efficient models for edge deployment
- Multimodal becoming standard
- Integration with tools and external systems
- Regulatory requirements shaping development


### Governance Evolution

**Anticipate:**
- Stricter regulatory requirements (EU AI Act implementation)
- Standardized documentation and transparency requirements
- Industry standards for foundation model governance
- Better tools for testing and monitoring
- Clearer liability frameworks

---


## Summary

**Key Takeaways:**

- Foundation models are large AI models trained on broad data that can be adapted to many downstream tasks—they're the new building blocks of AI

- They differ from traditional AI by enabling transfer learning: one expensive training produces a model adaptable to many tasks with minimal additional effort

- Types include language models (GPT, Claude, LLaMA), vision models (CLIP, DALL-E), multimodal models (GPT-4V, Gemini), and domain-specific models

- Adaptation mechanisms include prompting (zero-shot, few-shot), fine-tuning, and retrieval-augmented generation (RAG)

- Key governance challenges include opacity (black box), homogenization risk (correlated failures), emergent capabilities (unexpected abilities), and accountability gaps

- Selection criteria should include capability fit, deployment model, cost structure, terms/policies, and risk profile

<!-- component:flowchart:flowchart-summary -->
- Governance frameworks should be layered (foundation → adaptation → application → deployment) and risk-based

- The regulatory landscape is evolving, with the EU AI Act specifically addressing general-purpose AI and foundation models

---


## Practical Checklist

**For organizations using foundation models:**

<!-- component:checklist:checklist-practical-checklist -->
- [ ] Inventory all foundation models in use
- [ ] Document use cases and risk levels for each
- [ ] Review provider terms and policies
- [ ] Establish testing requirements by risk level
- [ ] Implement monitoring for model updates
- [ ] Define human oversight requirements
- [ ] Create incident response procedures
- [ ] Plan for regulatory compliance evolution

---


## Further Reading

- Bommasani et al. (2021). "On the Opportunities and Risks of Foundation Models" - The defining paper
- Stanford CRFM. "Foundation Models" - Ongoing research and resources
- EU AI Act. "General-Purpose AI" provisions - Regulatory requirements
- Anthropic (2023). "Core Views on AI Safety" - Safety-focused development approach
- NIST AI RMF (2024). "Generative AI Profile" - Governance guidance

---

*Article 12 of 158 in the AI Governance Mastery series*

*Next: Article 13 - Multimodal AI – When Machines See, Hear, and Speak*
