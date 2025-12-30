---
type: concept
id: history-12
path: history
title: "Foundation Models – The New Building Blocks of AI"
slug: foundation-models
tldr: "Foundation models are large AI models pre-trained on broad data (GPT-4, DALL-E, Claude) that can be adapted to many tasks via fine-tuning or prompting. They enable transfer learning but create governance challenges around opacity, homogenization risk, and dependency chains."
category: AI Fundamentals

learning_objectives:
  - Understand foundation model types and how they differ from traditional AI
  - Recognize pre-training, fine-tuning, and adaptation mechanisms
  - Identify governance challenges unique to foundation models
  - Apply risk-based governance frameworks to foundation model deployment

seo_keywords:
  - foundation models explained
  - GPT-4 Claude explained
  - transfer learning AI
  - pre-training fine-tuning

# Knowledge Graph Relationships
related_concepts:
  - id: history-8
    title: "Generative AI Explained"
    path: history
  - id: history-9
    title: "Large Language Models"
    path: history
  - id: term-10
    title: "Pre-training and Fine-tuning"
    path: terminology

cross_path_refs:
  terminology: [term-10, term-12]
  responsibility: [resp-54]

# Visual Components
components:
  - type: image_prompt
    id: hero
    prompt: "foundation model architecture, transfer learning visualization, AI building blocks concept, professional technical diagram"
  - type: table
    id: who-creates-foundation-models
    section: "Who Creates Foundation Models"
    label: "Foundation Model Providers"
  - type: list
    id: evaluation-criteria
    section: "Evaluation Criteria"
    label: "Foundation Model Selection Criteria"
  - type: table
    id: open-vs-closed-models
    section: "Open vs. Closed Models"
    label: "Open vs Closed Model Comparison"
  - type: checklist
    id: due-diligence
    section: "Due Diligence Checklist"
    label: "Foundation Model Due Diligence"
  - type: checklist
    id: practical-checklist
    section: "Practical Checklist"
    label: "Foundation Model Governance Checklist"

word_count: 2378
source_articles:
  - article-12-foundation-models-the-new-building-blocks-of-ai.md
example_refs: [ex-gpt4-claude-gemini]
processed_date: "2025-12-19"
---

# Foundation Models – The New Building Blocks of AI

## Introduction

In 2018, if you wanted an AI system to summarize documents, you'd train a specialized summarization model. If you wanted translation, you'd train a translation model. If you wanted code generation, you'd train a code model. Each task required separate models, separate training data, and separate expertise.

Then foundation models changed everything. A single model—trained once on broad data—could summarize, translate, generate code, answer questions, and perform dozens of other tasks without task-specific training. This is the fundamental shift foundation models represent: from narrow, task-specific AI to broad, adaptable AI systems.

This article explains what foundation models are, how they work, and why they create both opportunities and governance challenges that didn't exist with traditional AI.

---

## Types of Foundation Models

### Large Language Models (LLMs)

Foundation models trained primarily on text data.

**Examples:** GPT-4, Claude, LLaMA, Gemini Pro, Mistral

**Capabilities:**
- Text generation and completion
- Question answering
- Summarization
- Translation
- Code generation
- Reasoning and analysis

**Training approach:** Predict next token from massive text corpora (books, web, code)

### Vision Foundation Models

Foundation models for image understanding and generation.

**Examples:** CLIP, DALL-E, Stable Diffusion, SAM (Segment Anything)

**Capabilities:**
- Image classification
- Object detection
- Image generation
- Image segmentation
- Visual reasoning

**Training approach:** Learn visual representations from image-text pairs or image datasets

### Multimodal Foundation Models

Foundation models that process multiple types of data (text, images, audio, video).

**Examples:** GPT-4V, Gemini, Claude 3 (with vision), LLaVA

**Capabilities:**
- Understand and generate across modalities
- Reason about images using language
- Generate images from text descriptions
- Process documents with text and images

**Training approach:** Joint training on multiple data types, learning cross-modal relationships

### Domain-Specific Foundation Models

Foundation models trained for specific domains.

**Examples:**
- **Code:** Codex, StarCoder, Code LLaMA
- **Science:** Galactica, BioGPT
- **Medicine:** Med-PaLM, BioMedLM
- **Legal:** Various legal-specific models

**Value proposition:** Better performance on domain tasks than general models

---

## How Foundation Models Work

### Pre-training: Learning General Capabilities

Foundation models develop their broad capabilities during pre-training on massive datasets.

**For language models:**
- Training data: Trillions of words from books, web, code, etc.
- Objective: Predict the next word (or masked words)
- Result: Model learns language patterns, facts, reasoning

**For vision models:**
- Training data: Millions or billions of images (with or without labels)
- Objective: Learn visual representations, predict image properties
- Result: Model learns visual concepts, objects, relationships

**For multimodal models:**
- Training data: Paired data across modalities (images with captions, videos with audio)
- Objective: Learn relationships between modalities
- Result: Model can transfer understanding across modalities

### Adaptation: Specializing for Tasks

Foundation models can be adapted to specific tasks through several mechanisms:

**Prompting (Zero-shot)**
Simply describe the task in natural language:
```
"Translate the following English text to French: 'Hello, how are you?'"
```
No additional training required—the model uses its pre-trained capabilities.

**Few-shot Learning**
Provide a few examples in the prompt:
```
"Translate English to French:
English: Good morning → French: Bonjour
English: Thank you → French: Merci
English: Hello, how are you? → French:"
```
The model learns the pattern from examples.

**Fine-tuning**
Additional training on task-specific data:
- Supervised fine-tuning on labeled examples
- Instruction tuning on task descriptions
- RLHF for preference alignment

Results in better performance but requires more effort and compute.

**Retrieval-Augmented Generation (RAG)**
Combine the model with external knowledge retrieval:
- Query relevant documents from a knowledge base
- Include retrieved context in the prompt
- Model generates responses grounded in retrieved information

### Emergent Capabilities

A striking property of foundation models: capabilities that emerge at scale without being explicitly trained.

**Examples of emergence:**
- Chain-of-thought reasoning (explaining step-by-step)
- In-context learning (learning from examples in the prompt)
- Instruction following (doing what's asked)
- Code execution (writing and debugging code)
- Multi-step problem solving

**Why emergence matters for governance:**
- Hard to predict what capabilities will emerge
- Testing must account for unexpected abilities
- Capabilities may appear between model versions
- Safety testing needs to anticipate emergence

---

## The Foundation Model Ecosystem

### Who Creates Foundation Models

Only a handful of organizations can create frontier foundation models:

| Organization | Models | Approach |
<!-- component:table:who-creates-foundation-models -->
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

<!-- component:list:evaluation-criteria -->

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
<!-- component:table:open-vs-closed-models -->
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

<!-- component:checklist:due-diligence -->
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

## Practical Takeaways

### Key Principles

1. **Foundation models are building blocks**: They're not complete solutions—they require adaptation, application design, and governance.

2. **Transfer learning is the value**: One model enables many tasks, but this creates dependency and homogenization risks.

3. **Emergence is real**: Capabilities appear unpredictably as models scale. Governance must account for the unexpected.

4. **Opacity is unavoidable**: Focus on behavioral testing and monitoring rather than demanding full explainability.

5. **Responsibility doesn't transfer**: Using a third-party foundation model doesn't eliminate your governance obligations.

### Practical Checklist

**For organizations using foundation models:**

<!-- component:checklist:practical-checklist -->
- [ ] Inventory all foundation models in use
- [ ] Document use cases and risk levels for each
- [ ] Review provider terms and policies
- [ ] Establish testing requirements by risk level
- [ ] Implement monitoring for model updates
- [ ] Define human oversight requirements
- [ ] Create incident response procedures
- [ ] Plan for regulatory compliance evolution

### Questions to Ask Vendors

| Question | Why It Matters |
|----------|----------------|
| What data was your model trained on? | Bias, IP, and capability assessment |
| How do you test for safety and bias? | Risk understanding |
| What are the known limitations? | Deployment decisions |
| How do you handle model updates? | Change management |
| What happens to data sent to your API? | Privacy compliance |
| What are your acceptable use policies? | Compliance boundaries |

---

## Conclusion

Foundation models represent a fundamental shift in how AI systems are built. Instead of training specialized models for each task, organizations now adapt general-purpose models to specific needs. This enables capabilities that were previously accessible only to organizations with massive ML teams and budgets.

But foundation models also create new governance challenges. Opacity makes understanding difficult. Dependency chains create cascading risks. Emergence makes capability assessment ongoing rather than one-time. And accountability becomes diffuse across multiple actors.

Effective governance requires understanding foundation models as socio-technical systems: not just algorithms, but ecosystems of providers, platforms, applications, and users. Your governance framework must address each layer, scale with risk, and evolve as both capabilities and regulations develop.

The good news: governance frameworks for foundation models are maturing. The EU AI Act provides regulatory clarity. Industry standards are emerging. Best practices are being shared. Organizations that invest in foundation model governance now will be prepared for both current deployments and future regulatory requirements.

---

## Related Concepts

**Within this path:**
- [Generative AI Explained](/learn/history/generative-ai-explained)
- [Large Language Models](/learn/history/large-language-models)
- [The AI Technology Stack](/learn/history/ai-technology-stack)

**Other paths:**
- [Pre-training and Fine-tuning](/learn/terminology/pre-training-fine-tuning) (Terminology)
- [Foundation Model Obligations – EU AI Act](/learn/responsibility/foundation-model-obligations) (Responsibility)

**Example Cards:**
- [GPT-4, Claude, Gemini – Foundation Model Landscape](/examples/foundation-models)

---

## Sources

1. Bommasani et al. (2021). "On the Opportunities and Risks of Foundation Models" - The defining paper
2. Stanford CRFM. "Foundation Models" - Ongoing research and resources
3. EU AI Act (2024). "General-Purpose AI" provisions - Regulatory requirements
4. Anthropic (2023). "Core Views on AI Safety" - Safety-focused development approach
5. NIST AI RMF (2024). "Generative AI Profile" - Governance guidance
