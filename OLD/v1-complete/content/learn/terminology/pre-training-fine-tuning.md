---
title: "Pre-training and Fine-tuning"
slug: "pre-training-fine-tuning"
description: "Learn how modern AI models are built in two stages: pre-training on massive datasets to learn general patterns, then fine-tuning for specific tasks"
category: "terminology"
pubDate: 2024-01-20
author: "AIDefence Team"
tags: ["transfer-learning", "training", "llm", "deep-learning", "model-development"]
prerequisites: ["neural-networks-basics", "transformers-architecture", "training-validation-test"]
related: ["model-size-scale", "inference-vs-training", "embeddings-vectors"]
difficulty: "intermediate"
learningPath: "terminology"
order: 10
estimatedTime: "17 minutes"
---

# Pre-training and Fine-tuning

**Pre-training and fine-tuning is a two-stage training methodology where models first learn general patterns from massive unlabeled datasets (pre-training), then specialize for specific tasks or behaviors using smaller labeled datasets (fine-tuning).** This approach powers modern AI—GPT, BERT, Claude all use pre-training + fine-tuning.

The paradigm shift: Instead of training task-specific models from scratch, we train one general-purpose foundation model, then adapt it to many tasks.

## Why Pre-training + Fine-tuning Works

Traditional machine learning: Train separate models for each task from scratch.

<!-- component:example:traditional-vs-transfer -->

**Traditional approach problems:**

```
Task 1: Sentiment analysis
  → Train model from scratch on 10K labeled examples
  → Learns: "great" = positive, "terrible" = negative, ...

Task 2: Question answering
  → Train NEW model from scratch on 15K labeled examples
  → Re-learns: "great" = positive (already learned in Task 1!)

Task 3: Text summarization
  → Train ANOTHER model from scratch on 20K labeled examples
  → Re-learns the same language patterns AGAIN

Result: Wasted computation, needs large labeled datasets for each task
```

**Pre-training + fine-tuning approach:**

```
Stage 1: Pre-training (once, expensive)
  → Train on billions of unlabeled tokens from internet
  → Learns: grammar, facts, reasoning patterns, world knowledge
  → Cost: $1M-$100M in compute

Stage 2: Fine-tuning (many times, cheap)
  → Task 1: Fine-tune on 1K sentiment examples → sentiment model
  → Task 2: Fine-tune on 2K QA examples → QA model
  → Task 3: Fine-tune on 500 summary examples → summarization model
  → Cost per task: $100-$10K in compute

Result: Reuse expensive general knowledge, specialize cheaply for each task
```

**Key insight:** Pre-training learns language; fine-tuning learns tasks.

## Stage 1: Pre-training

Pre-training builds a **foundation model** with broad general knowledge.

### Pre-training Objectives

Models learn from unlabeled text using self-supervised objectives (create labels from the data itself).

<!-- component:table:pretraining-objectives -->

| Objective | How It Works | Models Using It | What It Learns |
|-----------|--------------|-----------------|----------------|
| **Causal Language Modeling** | Predict next token given previous tokens | GPT, LLaMA, Claude | Left-to-right text generation, autoregressive reasoning |
| **Masked Language Modeling** | Predict masked tokens given context | BERT, RoBERTa | Bidirectional understanding, fill-in-the-blank reasoning |
| **Span Corruption** | Predict masked spans of text | T5, UL2 | Understanding and generation of longer coherent text |
| **Denoising** | Reconstruct original text from corrupted version | BART, mT5 | Robust representations, noise tolerance |
| **Contrastive Learning** | Distinguish similar vs. dissimilar examples | SimCLR (vision), CLIP (vision-text) | Semantic similarity, multimodal alignment |

**Example (Causal Language Modeling—GPT):**

```
Training data: "The quick brown fox jumps over the lazy dog"

Training examples (predict next token):
  Context: "The"
  Target: "quick"

  Context: "The quick"
  Target: "brown"

  Context: "The quick brown"
  Target: "fox"

  ... repeat for billions of examples
```

**What the model learns:**
- Grammar: "The" is followed by nouns/adjectives
- Semantics: "fox" is an animal that "jumps"
- World knowledge: Foxes are quick and brown
- Reasoning: Completing partial thoughts

### Pre-training Data: Scale and Composition

Modern foundation models train on trillions of tokens from diverse sources.

<!-- component:example:pretraining-corpus -->

**GPT-3 pre-training data (~300B tokens):**

- **Common Crawl (60%):** Web scrapes (filtered for quality)
  - Blogs, forums, news, articles, documentation
  - Filtered to remove low-quality, adult, harmful content

- **WebText2 (22%):** Reddit outbound links with upvotes (quality signal)
  - Higher quality than raw web scraping

- **Books1 + Books2 (16%):** Internet Archive, e-books
  - Long-form, coherent text; narrative reasoning

- **Wikipedia (3%):** Encyclopedia content
  - Factual, well-structured knowledge

**Governance concern:** Data composition creates biases:
- English-dominant (GPT-3: ~93% English) → underserves other languages
- Western internet culture → cultural biases
- Historical text → outdated stereotypes and facts
- Unfiltered web → toxic content, misinformation

### Pre-training Cost and Scale

Pre-training is expensive and resource-intensive.

<!-- component:table:pretraining-cost -->

| Model | Parameters | Training Tokens | Compute (GPU-hours) | Est. Cost | Training Time |
|-------|------------|-----------------|---------------------|-----------|---------------|
| **BERT-Base** | 110M | 3B | ~4K (TPU-v3) | ~$10K | Days |
| **GPT-2** | 1.5B | 10B | ~50K (V100) | ~$50K | Weeks |
| **GPT-3** | 175B | 300B | ~3.6M (V100) | $4-12M | Months |
| **PaLM** | 540B | 780B | ~10M (TPU-v4) | $10-20M | Months |
| **GPT-4** (rumored) | ~1.7T | Unknown | Unknown | $50-100M+ | Months |

**Why this matters for governance:**
- Only well-funded organizations can train frontier models
- Concentrates AI capability in OpenAI, Google, Meta, Anthropic
- Open-source efforts (LLaMA, BLOOM, Falcon) critical for democratization

### What Pre-training Learns

Foundation models develop surprising capabilities from self-supervised learning alone.

**Emergent abilities (not explicitly trained for):**

- **Arithmetic:** Can perform basic math despite never seeing "5 + 3 = ?" labels
- **Translation:** Can translate between languages despite only predicting next tokens
- **Code execution:** Can trace through code logic
- **Theory of mind:** Can reason about beliefs and intentions of characters
- **Factual recall:** Memorizes facts from training data (both correct and incorrect!)

**Scaling phenomenon:** Many capabilities emerge only at large scale (GPT-3 shows abilities GPT-2 lacks).

## Stage 2: Fine-tuning

Fine-tuning adapts the general-purpose foundation model to specific tasks or behaviors.

### Types of Fine-tuning

<!-- component:table:finetuning-types -->

| Type | Purpose | Data Requirements | Example |
|------|---------|-------------------|---------|
| **Task-specific Fine-tuning** | Specialize for one task | 1K-100K labeled examples | Sentiment analysis, NER, classification |
| **Instruction Fine-tuning** | Follow instructions/commands | 10K-1M instruction-response pairs | "Translate this to French:", "Summarize this:" |
| **Dialogue Fine-tuning** | Conversational ability | 10K-100K conversation transcripts | Chatbots, assistants |
| **RLHF (Alignment)** | Align with human preferences | 10K-100K comparisons | Helpful, harmless, honest assistant |
| **Domain Adaptation** | Specialize for domain | 100K-10M domain examples | Medical, legal, financial language |
| **Multi-task Fine-tuning** | Handle many tasks simultaneously | Mix of all task types | T5 (trained on mixture of tasks) |

### Supervised Fine-tuning (SFT)

**Process:**

1. Start with pre-trained foundation model
2. Create labeled dataset for target task
3. Train model to predict labels given inputs
4. Typically 1-10 epochs (vs. pre-training's single pass through massive data)

<!-- component:example:sft-process -->

**Example: Sentiment analysis fine-tuning**

```
Pre-trained model: GPT-2 (knows language, but not task)

Fine-tuning data (1000 labeled examples):
  Input: "This movie was amazing!"
  Label: Positive

  Input: "Waste of time and money."
  Label: Negative

  Input: "It was okay, nothing special."
  Label: Neutral

After fine-tuning:
  Model learns sentiment classification while retaining language knowledge
```

**Data efficiency gain:**
- Training from scratch: Need 100K+ labeled examples for good performance
- Fine-tuning pre-trained model: 1K-10K examples often sufficient
- 10-100× reduction in labeled data requirements

### RLHF: Reinforcement Learning from Human Feedback

**Problem:** Supervised fine-tuning teaches models to imitate examples, but doesn't ensure outputs are helpful, harmless, and honest.

**Solution:** Use human preferences to optimize model behavior.

<!-- component:diagram:rlhf-process -->

**RLHF three-step process:**

```
Step 1: Supervised Fine-tuning (SFT)
  Train on high-quality demonstration data
  Example: "Write a poem" → human-written poem
  Result: Model can follow instructions

Step 2: Reward Model Training
  Collect human comparisons (which output is better?)
  Input: "Explain photosynthesis"
  Output A: Technical jargon-heavy response
  Output B: Clear, accessible explanation
  Human preference: B is better

  Train reward model to predict human preferences
  Result: Automated way to score outputs

Step 3: RL Optimization (PPO)
  Use reward model to optimize foundation model
  Generate many outputs, score with reward model
  Update model to increase reward (generate preferred outputs)
  Result: Model aligned with human preferences
```

**What RLHF achieves:**
- **Helpfulness:** Follow instructions accurately
- **Harmlessness:** Avoid toxic, biased, dangerous outputs
- **Honesty:** Acknowledge uncertainty, avoid hallucinations (partially)

**Used by:** ChatGPT, Claude, Bard, Llama 2

**Governance concern:** Human preferences reflect the human raters' demographics and values. If raters are predominantly from one cultural background, the aligned model may not serve diverse global users well.

### Parameter-Efficient Fine-tuning (PEFT)

**Problem:** Full fine-tuning updates all billions of parameters—expensive and risky (catastrophic forgetting).

**Solution:** Update only a small subset of parameters while freezing most of the model.

<!-- component:table:peft-methods -->

| Method | How It Works | Parameters Updated | Use Case |
|--------|--------------|-------------------|----------|
| **Adapters** | Insert small trainable layers between frozen layers | ~1% of total | Multi-task learning (different adapter per task) |
| **LoRA (Low-Rank Adaptation)** | Add low-rank matrices to frozen weights | ~0.1-1% | Memory-efficient fine-tuning |
| **Prefix Tuning** | Prepend trainable prefix vectors to each layer | ~0.1% | Instruction tuning |
| **Prompt Tuning** | Only train soft prompt embeddings | ~0.01% | Ultra-low-resource adaptation |

**LoRA example:**

```
Standard fine-tuning: Update all 175B parameters of GPT-3
LoRA fine-tuning: Add 100M trainable parameters, freeze 175B base model

Memory requirement: 700GB → 40GB
Training time: Weeks → Days
Result: Comparable performance, 10× cheaper
```

**Governance benefit:** PEFT democratizes fine-tuning—smaller organizations can adapt large models without massive compute budgets.

## Transfer Learning: The Broader Pattern

Pre-training + fine-tuning is a form of **transfer learning**—transferring knowledge from one task/domain to another.

**Transfer learning hierarchy:**

<!-- component:checklist:transfer-depth -->

- [ ] **Feature extraction (minimal adaptation):** Use pre-trained model as fixed feature extractor, only train final classifier
  - Fast, low data requirements
  - Limited adaptation to new domain

- [ ] **Partial fine-tuning:** Freeze early layers, fine-tune later layers + new head
  - Moderate adaptation
  - Preserves low-level features (edges, grammar) while adapting high-level features

- [ ] **Full fine-tuning:** Update all parameters
  - Maximum adaptation to new domain
  - Risk of catastrophic forgetting if dataset is small

- [ ] **Continued pre-training:** Further pre-train on domain-specific unlabeled data, then fine-tune
  - Best for highly specialized domains (medical, legal)
  - Expensive but highest performance

**When to use each:**
- Small dataset (<1K examples): Feature extraction or PEFT
- Medium dataset (1K-100K): Partial or full fine-tuning
- Large dataset (100K-1M): Full fine-tuning or continued pre-training
- Very different domain (e.g., code → natural language): Continued pre-training

## Multi-task Learning and Instruction Tuning

Instead of fine-tuning separate models for each task, train one model on many tasks simultaneously.

**T5 (Text-to-Text Transfer Transformer) approach:**

```
All tasks formatted as text-to-text:

Translation: "translate English to French: Hello" → "Bonjour"
Summarization: "summarize: [long text]" → "[summary]"
Classification: "sentiment: This movie was great!" → "positive"
QA: "question: What is photosynthesis?" → "[answer]"
```

**Benefits:**
- Single model handles all tasks
- Tasks can benefit from each other (translation helps summarization, etc.)
- More parameter-efficient than N separate models

**Instruction tuning:**
Fine-tune on diverse instruction-following examples to create general-purpose assistants.

**FLAN, InstructGPT approach:**

```
"Write a poem about AI"
"Translate this to Spanish: ..."
"Explain quantum computing to a 5-year-old"
"Debug this code: ..."
```

**Result:** Models like ChatGPT that can follow arbitrary instructions without task-specific fine-tuning.

## Catastrophic Forgetting and Mitigation

**Problem:** When fine-tuning on new task, models can "forget" pre-trained knowledge.

<!-- component:example:catastrophic-forgetting -->

**Example:**

```
Pre-trained model:
  "What is the capital of France?" → "Paris" ✓
  "Translate to Spanish: Hello" → "Hola" ✓

After fine-tuning on medical QA:
  "What is diabetes?" → [Correct medical answer] ✓
  "What is the capital of France?" → [Nonsensical or wrong] ✗
  "Translate to Spanish: Hello" → [Fails] ✗

Catastrophic forgetting: Overwrote general knowledge with medical knowledge
```

**Mitigation strategies:**

<!-- component:table:forgetting-mitigation -->

| Strategy | How It Works | Trade-offs |
|----------|--------------|------------|
| **Lower learning rate** | Small updates preserve existing knowledge | Slower convergence |
| **Fewer epochs** | Don't overtrain on new task | May underfit new task |
| **Elastic Weight Consolidation** | Penalize changes to important pre-trained weights | Requires computing importance scores |
| **PEFT (LoRA, adapters)** | Freeze base model, only train new parameters | Minimal forgetting, but limited adaptation |
| **Replay/rehearsal** | Mix original pre-training data into fine-tuning | Expensive (need to store/reuse pre-training data) |
| **Multi-task fine-tuning** | Train on old and new tasks together | Need access to all task datasets |

**Rule of thumb:** The more fine-tuning data differs from pre-training, the higher the forgetting risk.

## Governance Implications

### 1. Data Provenance and Consent

Pre-training on internet-scale data raises consent and copyright questions.

**Key issues:**
- **Copyright:** Is training on copyrighted text fair use? (Ongoing litigation)
- **Consent:** Did individuals consent to their data being used for AI training?
- **Right to be forgotten:** Can individuals request their data be removed from trained models?

**Governance approach:**
- Transparent data documentation (what sources, what filters)
- Opt-out mechanisms for content creators
- Clearer legal frameworks (EU AI Act, proposed regulations)

### 2. Bias in Pre-training Data

Foundation models inherit and amplify biases from pre-training corpora.

**Documented biases:**
- **Gender:** "Doctor" → male pronouns, "nurse" → female pronouns
- **Race:** Associating African American names with negative sentiment
- **Geography:** Western-centric knowledge, underrepresentation of Global South
- **Temporal:** Outdated stereotypes from historical text

**Mitigation:**
- Curate more representative pre-training data
- Bias evaluation benchmarks (WinoBias, StereoSet)
- Fairness-aware fine-tuning (debiasing methods)
- RLHF to align away from harmful outputs

**Challenge:** Debiasing is imperfect—models can learn subtle proxies for protected attributes.

### 3. Concentration of Power

Only well-resourced organizations can pre-train frontier models.

**Implications:**
- **Capability concentration:** Cutting-edge AI controlled by few labs
- **Dependency:** Downstream applications depend on proprietary models
- **Geopolitical:** National competitiveness in AI infrastructure

**Countermeasures:**
- Open-source foundation models (LLaMA, BLOOM, Falcon)
- Academic/government compute grants
- International collaboration (BLOOM: multilingual model by 1000+ researchers)

### 4. Environmental Costs

Pre-training is energy-intensive.

**Carbon footprint estimates:**
- GPT-3: ~500 metric tons CO₂
- BLOOM (176B): ~25 tons (France's low-carbon grid)

**Mitigation:**
- Train in renewable energy regions
- Model efficiency research (distillation, pruning, quantization)
- Share pre-trained models to avoid redundant training

### 5. Dual-Use and Misuse

Foundation models can be fine-tuned for harmful purposes.

**Risks:**
- Fine-tune for misinformation generation
- Fine-tune for malicious code generation
- Fine-tune to remove safety guardrails

**Governance responses:**
- Model access controls (API vs. open weights)
- Usage monitoring and abuse detection
- Safety fine-tuning that's hard to remove
- "Constitutional AI" (build values deeply into model)

<!-- component:summary -->

## Key Takeaways

- Pre-training + fine-tuning: Two-stage training where models first learn general patterns, then specialize for tasks
- Pre-training: Self-supervised learning on massive unlabeled data (billions of tokens, millions in compute)
- Pre-training objectives: Causal LM (GPT), masked LM (BERT), span corruption (T5), denoising (BART)
- Foundation models learn emergent capabilities: arithmetic, translation, reasoning, factual recall
- Fine-tuning: Adapt pre-trained model to specific tasks with small labeled datasets (1K-100K examples)
- Fine-tuning types: Task-specific, instruction following, dialogue, RLHF (alignment), domain adaptation
- RLHF: Align models with human preferences through reinforcement learning (powers ChatGPT, Claude)
- PEFT (LoRA, adapters): Update <1% of parameters for efficient fine-tuning
- Catastrophic forgetting: Fine-tuning can overwrite pre-trained knowledge (mitigate with low LR, PEFT, rehearsal)
- Governance concerns: data provenance/consent, bias amplification, power concentration, environmental cost, dual-use risks

**Bottom line:** Pre-training + fine-tuning democratized access to powerful AI by making expensive general knowledge reusable across many cheap task adaptations. But the high cost of pre-training concentrates power, and biases in foundation models propagate to all downstream applications—making pre-training data curation a critical governance lever.

---

**Related concepts:** [Transformers Architecture](/learn/terminology/transformers-architecture) • [Training, Validation, Test Data](/learn/terminology/training-validation-test) • [Model Size and Scale](/learn/terminology/model-size-scale) • [Inference vs. Training](/learn/terminology/inference-vs-training)
