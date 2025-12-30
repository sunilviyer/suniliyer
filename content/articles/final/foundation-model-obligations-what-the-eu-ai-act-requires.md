---
title: Foundation Model Obligations - What the EU AI Act Requires
slug: foundation-model-obligations-what-the-eu-ai-act-requires
path: responsibility
publishDate: 2025-08-25
tldr: EU AI Act Chapter V creates two-tier framework for general-purpose AI (GPAI) models - Tier 1 baseline obligations for ALL GPAI providers regardless of scale requiring technical documentation (training process/methods, model capabilities/limitations, testing/evaluation results), downstream provider information enabling compliance/high-risk requirement fulfillment, EU copyright law compliance policy respecting text/data mining rights reservation, publicly published training data summary helping rights holders understand content use with EU AI Office template. Tier 2 additional systemic-risk GPAI obligations for most powerful models defined by automatic 10^25 FLOPs training compute threshold (capturing GPT-4 scale) OR European Commission designation based on registered business users/downstream provider dependence/market impact/large-scale safety incident potential requiring model evaluations using standardized protocols with adversarial testing, systemic risk assessment/mitigation tracking sources/documenting/reporting serious incidents, adequate cybersecurity protecting model weights/endpoints/infrastructure, capabilities/limitations documentation with safety evaluation information/energy consumption. Open-source considerations provide exemptions for permissive-licensed models with publicly available parameters/architecture/weights from technical documentation/downstream information/copyright policy (still require training data summary) BUT systemic-risk open-source models above 10^25 FLOPs threshold or Commission-designated must comply with all systemic-risk requirements recognizing potential harm too great for exemption. Downstream providers using foundation models must classify applications independently (Llama model general-purpose but hiring tool using Llama is high-risk Annex III), receive entitled information about capabilities/limitations/risks/appropriate use from GPAI providers, remain responsible for integration/testing/documentation/user transparency regardless of base model with foundation model issues becoming application issues. EU AI Office oversees GPAI regulation facilitating codes of practice development providing detailed guidance for obligations (copyright compliance, risk evaluation) representing industry consensus with presumption of conformity, exercising powers including documentation/information requests, evaluations, corrective measures, non-compliance fines with August 2 2025 GPAI obligations applicable date, May 2 2025 codes of practice ready target, ongoing oversight. Foundation models are infrastructure like power grids/telecommunications where reliability/safety affects all dependents requiring tiered approach - all providers transparent about models, most powerful take systemic risk precautions, downstream users get better information/clearer expectations but responsibility for powerful tool use.
relatedConcepts:
  - foundation-models
  - general-purpose-ai-gpai
  - gpai-model
  - gpai-system
  - eu-ai-act-chapter-v
  - two-tier-gpai-framework
  - tier-1-baseline-obligations
  - tier-2-systemic-risk-obligations
  - technical-documentation-requirement
  - downstream-provider-information
  - copyright-law-compliance
  - training-data-summary
  - text-data-mining-rights
  - eu-ai-office-template
  - systemic-risk-definition
  - flops-threshold
  - 10-to-25-flops
  - commission-designation-criteria
  - business-users
  - downstream-dependence
  - market-impact
  - safety-incident-potential
  - model-evaluations
  - standardized-protocols
  - adversarial-testing
  - systemic-risk-assessment
  - risk-mitigation
  - serious-incident-reporting
  - cybersecurity-requirements
  - model-weights-protection
  - endpoint-protection
  - infrastructure-protection
  - capabilities-documentation
  - safety-evaluation-information
  - energy-consumption-documentation
  - open-source-exemptions
  - permissive-license
  - public-parameters
  - systemic-risk-open-source
  - downstream-classification
  - application-high-risk
  - gpai-provider-information
  - integration-responsibility
  - testing-responsibility
  - user-transparency
  - eu-ai-office
  - codes-of-practice
  - presumption-of-conformity
  - ai-office-powers
  - documentation-requests
  - evaluation-authority
  - corrective-measures
  - compliance-fines
examples:
  - ai-governance-use-cases
  - ai-regulatory-compliance-examples
templates:
  - ai-governance-framework-builder
  - ai-regulatory-readiness-assessment
crossPathRefs:
  - path: responsibility
    articles:
      - the-eu-ai-act-europes-landmark-regulation-explained
      - ai-governance-frameworks-building-your-organizations-approach
      - data-protection-impact-assessments-the-ai-dpia-guide
  - path: risk
    articles:
      - eu-ai-act-risk-classification-prohibited-high-risk-and-beyond
      - high-risk-ai-systems-the-complete-requirements-checklist
      - building-trustworthy-ai-the-seven-pillars
tags:
  - foundation-models
  - gpai
  - eu-ai-act
  - systemic-risk
  - open-source-ai
  - copyright-compliance
  - model-evaluation
  - downstream-responsibility
  - ai-office
  - compliance
category: Legal Frameworks
image: foundation-model-obligations-what-the-eu-ai-act-requires.jpg
imageAlt: EU AI Act GPAI two-tier pyramid showing Tier 1 baseline requirements for all models (documentation, downstream info, copyright, training data) and Tier 2 systemic-risk additions (evaluations, risk mitigation, incident reporting, cybersecurity) with 10^25 FLOPs threshold
author: Sunil Iyer
readingTime: 16
seoTitle: EU AI Act GPAI Requirements - Foundation Model Obligations Explained
seoDescription: EU AI Act foundation model/GPAI obligations - two-tier framework, baseline requirements (documentation, downstream info, copyright, training data summary), systemic-risk threshold (10^25 FLOPs), additional obligations (evaluations, risk assessment, incident reporting, cybersecurity), open-source exemptions, downstream responsibility.
---

## Summary

EU AI Act Chapter V establishes specialized framework for general-purpose AI (GPAI) models—legal term for foundation models displaying significant generality, competently performing wide range of distinct tasks, integrable into variety of downstream systems/applications (examples: GPT-4, Claude, Gemini, Llama, Mistral) recognizing unique governance challenges including downstream risk transfer where provider design decisions affect every downstream application without knowing all uses (steel manufacturing analogy: flaws affect bridge builders/car manufacturers/knife makers but didn't build end products), concentrated power where only handful of companies afford large model training raising market power/bottleneck/single-point-of-failure concerns, systemic effects where most powerful models used by millions across thousands of businesses meaning single flaw creates cascading economy/society impacts, opacity where even model builders don't fully understand operation making traditional testing/certification difficult. Two-tier obligation framework proportionally regulates based on scale and impact.

Tier 1 baseline obligations apply to ALL GPAI providers placing models on EU market regardless of size: (1) technical documentation preparing and maintaining details about model including training information (design/development, testing/evaluation procedures, results), model capabilities and limitations (what can/cannot do, known limitations/failure modes, poor-performance circumstances) with example documentation covering overview (model family/version, architecture parameters, training completion), training process (data sources by category, data volume tokens, compute GPU-hours, training methods), capabilities (language understanding primary/secondary, reasoning support, context length, multimodal inputs), limitations (incorrect/biased information generation, real-time latency unsuitability, reduced technical domain performance, specific weakness challenges), evaluation results (detailed benchmarks, safety evaluations); (2) downstream provider information sufficient for understanding model capabilities/limitations, complying with own AI Act obligations, meeting high-risk requirements if applicable (ingredient-to-chef analogy: disclose contents/allergens/safe storage enabling safe dish creation for customers); (3) copyright law compliance establishing policy respecting text/data mining rights reservation, working with rights holders opting out of AI training recognizing hot topic where many models trained on scraped copyrighted internet material with Act not banning but requiring creator rights respect processes; (4) training data summary publicly publishing sufficiently detailed summary helping rights holders understand whether content might have been used—doesn't require every piece listing (impractical) but meaningful information about data sources/types, collection methods, selection/cleaning processes with EU AI Office providing template.

Tier 2 additional systemic-risk GPAI obligations apply to most powerful models creating potential for widespread harm defined through automatic threshold where trained using total computing power exceeding 10^25 FLOPs floating-point operations (context: GPT-4 estimated 10^24-10^25 FLOPs training, threshold captures only largest most resource-intensive models) OR European Commission designation based on criteria including high registered business user numbers, high downstream provider dependence degree, significant market impact, large-scale safety incident potential with systemic risk meaning if model fails/crashes/produces harmful outputs the blast radius for millions of users across thousands of applications can spread misinformation at massive scale, enable new cyber attack vectors, disrupt critical business processes, cause cascading dependent system failures. Additional requirements: (1) model evaluations conducting standardized protocol assessments including adversarial testing (systematically trying to break model finding failure modes before bad actors), (2) systemic risk assessment and mitigation assessing potential systemic risks including sources, tracking/documenting/reporting serious incidents, ensuring appropriate cybersecurity levels with example incidents including model exploitation generating new malware at scale or misinformation significantly impacting national elections, (3) incident reporting to AI Office and relevant national authorities without undue delay, (4) adequate cybersecurity with protections appropriate to significance including model weights theft prevention, model endpoints manipulation prevention, training/deployment infrastructure protection, (5) model capabilities documentation keeping up-to-date capabilities/limitations, relevant safety evaluation information, energy consumption documentation.

Open-source considerations provide partial exemptions recognizing different operation model: GPAI models with publicly available parameters/architecture/weights under permissive license exempt from technical documentation requirements, information-to-downstream-providers requirements, copyright policy requirements BUT still must publish training data summary recognizing open-source works differently (provider may lack ongoing commercial user relationships, model openly available for inspection, open-source community provides oversight/evaluation) however exemption disappears for systemic-risk models—open-source models exceeding 10^25 FLOPs threshold or Commission-designated must comply with all systemic-risk requirements because potential harm too great to leave unaddressed. Downstream providers building products/services using others' foundation models must understand: classification still matters independently (Llama model general-purpose but hiring tool using Llama is high-risk under Annex III requiring high-risk compliance), entitled to receive information from GPAI provider about capabilities/limitations, known risks/failure modes, appropriate use guidelines for own risk assessment/documentation use, responsible even when using others' models for integration approach, combined system testing, application documentation, user transparency provision (house construction analogy: can't blame lumber supplier when house falls from poor construction despite purchased materials).

EU AI Office oversees GPAI regulation with significant powers: facilitating codes of practice development providing detailed guidance on meeting obligations, covering specific topics like copyright compliance/risk evaluation, representing consensus industry-input approaches where providers can use codes demonstrating compliance ("presumption of conformity"), exercising powers including requesting documentation/information, conducting evaluations, requesting corrective measures, imposing non-compliance fines. Timeline: August 1 2024 AI Act entered force, August 2 2025 GPAI obligations become applicable, May 2 2025 codes of practice target ready date, ongoing AI Office oversight begins. Practical implications: foundation model providers should document everything now, assess scale approaching 10^25 FLOPs threshold, copyright audit training data practices, prepare summaries drafting training data, engage with codes of practice participating industry discussions; downstream builders should get information requesting necessary GPAI provider documentation, classify use determining specific application high-risk status, document integration showing responsible model incorporation, test thoroughly not assuming base model testing covers use case; business leaders should map AI supply chain knowing which foundation models power tools, assess vendor compliance whether GPAI providers preparing, understand inherited risks where foundation model issues become organizational issues, diversify if possible considering single provider dependence risks. Foundation models are infrastructure like power grids/telecommunications where reliability/safety affects all dependents requiring tiered approach ensuring all providers transparent about models while most powerful take systemic risk extra precautions giving downstream users better information/clearer expectations alongside responsibility for powerful tool use—EU's attempt bringing order to general-purpose AI wild frontier with success depending on provider/regulator/broader ecosystem adaptation to new requirements.

## Key Learning Objectives

After reading this article, you will be able to:

1. **Understand GPAI definition** - Foundation models displaying generality, performing wide task range, integrable into diverse systems (GPT-4, Claude, Gemini, Llama)
2. **Recognize unique governance challenges** - Downstream risk transfer, concentrated power, systemic effects, opacity requiring specialized framework
3. **Apply two-tier obligation structure** - Baseline Tier 1 for all GPAI vs additional Tier 2 for systemic-risk models
4. **Implement Tier 1 baseline requirements** - Technical documentation, downstream information, copyright compliance, training data summary
5. **Navigate systemic-risk threshold** - 10^25 FLOPs automatic trigger or Commission designation based on users/dependence/impact/incidents
6. **Execute Tier 2 additional obligations** - Model evaluations, systemic risk assessment/mitigation, incident reporting, cybersecurity
7. **Understand open-source exemptions** - Partial exemption for permissive-licensed models except systemic-risk above threshold
8. **Manage downstream responsibilities** - Independent classification, entitled information, integration/testing/documentation/transparency responsibility
9. **Engage with EU AI Office** - Codes of practice, presumption of conformity, oversight powers, documentation requests, evaluations, fines
10. **Execute compliance roadmap** - Provider documentation/assessment/engagement, downstream information/classification/testing, business supply chain mapping

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

1. European Union. "Regulation (EU) 2024/1689 of the European Parliament and of the Council (EU AI Act)." Official Journal of the European Union, Chapter V (GPAI), 2024.

2. European Commission. "General-Purpose AI Models in the AI Act: Questions and Answers." 2024.

3. Bommasani, Rishi, et al. "On the Opportunities and Risks of Foundation Models." Stanford HAI, 2021.

4. EU AI Office. "Guidance on GPAI Model Obligations." 2024.

5. IAPP. "Understanding General-Purpose AI Under the EU AI Act." 2024.

6. Epoch AI. "Compute Trends Across Large Models." Research Database, 2024.

7. Stanford HAI. "AI Index Report 2024." Human-Centered Artificial Intelligence, 2024.

8. OpenAI, Anthropic, Google DeepMind. Various model cards and technical reports for GPT-4, Claude, and Gemini models, 2023-2024.

---

*Next: EU AI Act Enforcement - Penalties and Compliance Timeline*
