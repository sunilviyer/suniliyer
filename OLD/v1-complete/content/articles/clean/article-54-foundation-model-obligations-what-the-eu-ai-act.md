
![Article 54: Foundation Model Obligations – What the EU AI Act Requires]({{IMAGE_PLACEHOLDER_article-54-foundation-model-obligations-what-the-eu-ai-act-r}})

---
category: "AI Fundamentals"
learning_objectives:

  - "Understand the key concepts and principles of policy development"
  - "Implement audit procedures in real-world scenarios"
  - "Evaluate transparency measures for organizational compliance"
seo_keywords:

  - "article"
  - "foundation"
  - "artificial intelligence"
  - "foundation model obligations"
  - "what"
word_count: 2021
processed_date: "2025-12-18T20:00:53.894Z"
---


## What Are Foundation Models and GPAI?

Let's clear up the terminology.


### Foundation Model

A large AI model trained on broad data that can be adapted for many different tasks. The term comes from Stanford researchers who introduced it in 2021.

*Examples*: GPT-4, Claude, Gemini, Llama, Mistral


### General-Purpose AI (GPAI) Model

The EU AI Act's legal term for what we commonly call foundation models. A GPAI model is an AI model that:

- Displays significant generality
- Can competently perform a wide range of distinct tasks
- Can be integrated into a variety of downstream systems or applications

*In plain English*: It's an AI that can do lots of different things, not just one specific task.


### GPAI System

When you integrate a GPAI model into a specific application or system.

*Example*: ChatGPT (the product) is a GPAI system built on GPT-4 (the GPAI model).

---


## Why Foundation Models Get Special Treatment

Foundation models present unique governance challenges:


### 1. Downstream Risk Transfer

When you build a foundation model, you don't know all the ways it will be used. But your design decisions affect every downstream application.

*Analogy*: Imagine manufacturing steel. You sell it to bridge builders, car manufacturers, and knife makers. If your steel has a hidden flaw, it affects all of them. But you didn't build the bridge—you just made the steel.


### 2. Concentrated Power

Only a handful of companies can afford to train large foundation models. This concentration raises concerns about:

- Market power
- Bottleneck effects
- Single points of failure


### 3. Systemic Effects

The most powerful models are used by millions of people and thousands of businesses. A single flaw can have cascading effects across the economy and society.


### 4. Opacity

Even the companies that build these models don't fully understand how they work. This makes traditional testing and certification difficult.

---


## Two-Tier Obligations for GPAI

The EU AI Act creates two tiers of obligations for GPAI models:

```
┌─────────────────────────────────────────────┐
│     GPAI WITH SYSTEMIC RISK                 │
│     (Top Tier - Most Powerful Models)       │
│     • All Tier 2 requirements, PLUS:        │
│     • Model evaluations                     │
│     • Systemic risk assessment              │
│     • Incident reporting                    │
│     • Advanced cybersecurity                │
└─────────────────────────────────────────────┘
          ▲
          │
┌─────────────────────────────────────────────┐
│     ALL GPAI MODELS                         │
│     (Baseline Requirements)                 │
│     • Technical documentation               │
│     • Information for downstream users      │
│     • Copyright compliance                  │
│     • Training data summary                 │
└─────────────────────────────────────────────┘
```

---


## Tier 1: Obligations for ALL GPAI Model Providers

Every provider of a GPAI model placed on the EU market must meet these baseline requirements:


### 1. Technical Documentation

You must prepare and maintain detailed technical documentation about your model. This includes:

**Training Information**

- How the model was designed and developed
- Testing and evaluation procedures
- Results of those evaluations

**Model Capabilities and Limitations**

- What the model can and cannot do
- Known limitations and failure modes
- Circumstances where the model might perform poorly

**What This Looks Like in Practice**

```
TECHNICAL DOCUMENTATION: Foundation Model XYZ

MODEL OVERVIEW

- Model family: XYZ
- Version: 2.5
- Architecture: Transformer, 175B parameters
- Training completion: March 2024

TRAINING PROCESS

- Data sources: [Listed by category]
- Data volume: 2.3 trillion tokens
- Compute resources: 25,000 GPU-hours on A100s
- Training methods: [Described]

CAPABILITIES

- Language understanding: English (primary), 40+ languages (secondary)
- Reasoning: Chain-of-thought supported
- Context length: 128,000 tokens
- Multimodal: Text and image input

LIMITATIONS

- May generate incorrect or biased information
- Not suitable for real-time applications requiring <100ms latency
- Reduced performance on technical domains outside training
- Known challenges with: [List specific weaknesses]

EVALUATION RESULTS
[Detailed benchmark results and safety evaluations]
```


### 2. Information to Downstream Providers

If someone builds a product or service using your GPAI model, you must provide them with enough information to:

- Understand your model's capabilities and limitations
- Comply with their own obligations under the AI Act
- Enable them to meet high-risk requirements if applicable

*Think of it as*: You're selling ingredients to chefs. You need to tell them what's in the ingredients, potential allergens, and how to store them safely—so they can make safe dishes for their customers.


### 3. Copyright Law Compliance

You must have a policy to comply with EU copyright law, including:

- Respecting the rights reservation for text and data mining
- Working with rights holders who opt out of AI training

This is a hot topic. Many foundation models were trained on copyrighted material scraped from the internet. The EU AI Act doesn't ban this practice but requires providers to have processes for respecting creators' rights.


### 4. Training Data Summary

You must publish a sufficiently detailed summary of the training data you used.

This summary must be made publicly available and should help rights holders understand whether their content might have been used.

**Important**: The summary doesn't need to list every piece of training data (that would be impractical), but it should give meaningful information about:

- Data sources and types
- Data collection methods
- Selection and cleaning processes

The EU AI Office will provide a template for this summary.

---


## Tier 2: Additional Obligations for Systemic Risk GPAI

The most powerful GPAI models face additional obligations because their scale creates potential for widespread harm.


### What Counts as "Systemic Risk"?

A GPAI model has systemic risk if:

**Automatic Threshold**: It was trained using total computing power exceeding **10^25 FLOPs** (floating-point operations)

*In context*: GPT-4 is estimated to have been trained with approximately 10^24-10^25 FLOPs. This threshold captures only the largest, most resource-intensive models.

**Or**: The European Commission designates it as having systemic risk based on other criteria:

- High number of registered business users
- High degree of dependence among downstream providers
- Significant market impact
- Potential for large-scale safety incidents


### What "Systemic Risk" Means in Practice

Think of it this way: if your model fails, crashes, or produces harmful outputs, what's the blast radius?

For a model used by millions of people across thousands of applications, a single flaw can:

- Spread misinformation at massive scale
- Enable new attack vectors for cyber threats
- Disrupt critical business processes
- Cause cascading failures across dependent systems


### Additional Requirements for Systemic Risk Models

**1. Model Evaluations**
You must conduct model evaluations according to standardized protocols, including adversarial testing.

*Translation*: You must systematically try to break your model and find its failure modes before bad actors do.

**2. Systemic Risk Assessment and Mitigation**
You must:

- Assess potential systemic risks, including their sources
- Track, document, and report serious incidents
- Ensure appropriate levels of cybersecurity

**3. Incident Reporting**
You must report serious incidents to the AI Office and relevant national authorities without undue delay.

*Example incident*: Your model is exploited to generate a new type of malware at scale, or it's used to create misinformation that significantly impacts a national election.

**4. Adequate Cybersecurity**
Systemic risk models must have cybersecurity protections appropriate to their significance, including protections for:

- The model weights (to prevent theft)
- Model endpoints (to prevent manipulation)
- Training and deployment infrastructure

**5. Model Capabilities Documentation**
You must document and keep up to date:

- Model capabilities and limitations
- Relevant information for safety evaluation
- Energy consumption documentation

---


## Open-Source Considerations

The EU AI Act includes some exceptions for open-source GPAI models:


### What's Exempt

If your GPAI model is open source (parameters, architecture, and weights are publicly available under a permissive license), you're exempt from:

- The technical documentation requirements
- The information-to-downstream-providers requirements
- The copyright policy requirements

You still must publish the training data summary.


### What's NOT Exempt

Open-source models with systemic risk do NOT get exemptions. If your open-source model exceeds the 10^25 FLOPs threshold or is designated as having systemic risk, you must comply with all systemic risk requirements.


### Why This Matters

This exemption recognizes that open-source models work differently:

- The "provider" may not have ongoing commercial relationships with users
- The model is openly available for anyone to inspect
- The open-source community often provides oversight and evaluation

But the exemption disappears for the most powerful models because the potential for harm is too great to leave unaddressed.

---


## What Downstream Providers Must Know

If you're building products or services that use someone else's foundation model, here's what you need to know:


### Your Classification Still Matters

Just because the foundation model isn't high-risk doesn't mean your application isn't.

*Example*: Llama (the model) may be general-purpose. But if you build a hiring tool using Llama, your application is high-risk under Annex III, and you must comply with high-risk requirements.


### Information Flow

You're entitled to receive information from the GPAI provider about:

- Model capabilities and limitations
- Known risks and failure modes
- Appropriate use guidelines

Use this information in your own risk assessment and documentation.


### Your Responsibilities

Even when using someone else's model, you're responsible for:

- How you integrate it
- How you test the combined system
- How you document your application
- How you provide transparency to your users

*Analogy*: If you build a house using purchased materials, you can't blame the lumber supplier when the house falls down due to your poor construction.

---


## The EU AI Office and Codes of Practice

The EU AI Act establishes the **EU AI Office** to oversee GPAI regulation.


### Codes of Practice

The AI Office will facilitate the development of **codes of practice** for GPAI providers. These codes will:

- Provide detailed guidance on meeting obligations
- Cover specific topics like copyright compliance and risk evaluation
- Represent consensus approaches developed with industry input

Providers can use these codes to demonstrate compliance ("presumption of conformity").


### AI Office Powers

The AI Office has significant powers over GPAI providers, including:

- Requesting documentation and information
- Conducting evaluations
- Requesting corrective measures
- Imposing fines for non-compliance

---


## Timeline for GPAI Obligations

| Date | What Happens |
|------|--------------|
| August 1, 2024 | AI Act enters into force |
| August 2, 2025 | GPAI obligations become applicable |
| May 2, 2025 | Codes of practice should be ready |
| Ongoing | AI Office oversight begins |

---


## Practical Implications for Different Stakeholders


### If You're a Foundation Model Provider

1. **Document everything**: Start preparing your technical documentation now
2. **Assess your scale**: Are you approaching the 10^25 FLOPs threshold?
3. **Copyright audit**: Review your training data practices
4. **Prepare summaries**: Draft your training data summary
5. **Engage with codes of practice**: Participate in industry discussions


### If You Build on Foundation Models

1. **Get information**: Request necessary documentation from your GPAI providers
2. **Classify your use**: Determine if your specific application is high-risk
3. **Document the integration**: Show how you've responsibly integrated the model
4. **Test thoroughly**: Don't assume the base model's testing covers your use case


### If You're a Business Leader

1. **Map your AI supply chain**: Know which foundation models power your tools
2. **Assess vendor compliance**: Are your GPAI providers preparing for compliance?
3. **Understand inherited risks**: Foundation model issues become your issues
4. **Diversify if possible**: Consider risks of dependence on single providers

---


## Conclusion

The EU AI Act's GPAI rules recognize a fundamental truth: foundation models are infrastructure. Like power grids or telecommunications networks, their reliability and safety affect everyone who depends on them.

The tiered approach makes sense:

- All GPAI providers must be transparent about their models
- The most powerful must take extra precautions against systemic risks

For foundation model providers, this means significant new compliance obligations. For downstream users, it means better information and clearer expectations—but also responsibility for how they use these powerful tools.

The GPAI provisions represent Europe's attempt to bring order to the wild frontier of general-purpose AI. Whether it succeeds will depend on how well providers, regulators, and the broader ecosystem adapt to these new requirements.

---


## Sources

1. **European Union.** "Regulation (EU) 2024/1689 of the European Parliament and of the Council (EU AI Act)." *Official Journal of the European Union*, Chapter V (GPAI), 2024. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)

2. **European Commission.** "General-Purpose AI Models in the AI Act: Questions and Answers." 2024. [European Commission](https://ec.europa.eu/commission/presscorner/detail/en/qanda_24_3045)

3. **Bommasani, Rishi, et al.** "On the Opportunities and Risks of Foundation Models." Stanford HAI, 2021. [arxiv.org](https://arxiv.org/abs/2108.07258)

4. **EU AI Office.** "Guidance on GPAI Model Obligations." 2024. [EU AI Office](https://digital-strategy.ec.europa.eu/en/policies/ai-office)

5. **IAPP.** "Understanding General-Purpose AI Under the EU AI Act." 2024. [iapp.org](https://iapp.org/)

6. **Epoch AI.** "Compute Trends Across Large Models." Research Database, 2024. [epochai.org](https://epochai.org/data/compute-trends)

7. **Stanford HAI.** "AI Index Report 2024." Human-Centered Artificial Intelligence, 2024. [hai.stanford.edu](https://aiindex.stanford.edu/)

8. **OpenAI, Anthropic, Google DeepMind.** Various model cards and technical reports for GPT-4, Claude, and Gemini models, 2023-2024.
