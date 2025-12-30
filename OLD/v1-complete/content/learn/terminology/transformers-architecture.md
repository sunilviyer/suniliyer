---
title: "Transformers Architecture"
slug: "transformers-architecture"
description: "Understand the transformer architecture that revolutionized NLP through self-attention mechanisms, enabling models like GPT, BERT, and Claude to process language at unprecedented scale"
category: "terminology"
pubDate: 2024-01-19
author: "AIDefence Team"
tags: ["deep-learning", "transformers", "attention", "nlp", "large-language-models"]
prerequisites: ["neural-networks-basics", "rnns-for-sequences", "embeddings-vectors"]
related: ["pre-training-fine-tuning", "model-size-scale", "inference-vs-training"]
difficulty: "advanced"
learningPath: "terminology"
order: 9
estimatedTime: "20 minutes"
---

# Transformers Architecture

**Transformers are neural architectures that process sequences using self-attention mechanisms to weigh the relevance of every element to every other element, enabling parallelizable training and capturing long-range dependencies better than RNNs.** They're the foundation of modern NLP—GPT, BERT, Claude, ChatGPT all use transformer architectures.

The 2017 paper "Attention Is All You Need" introduced transformers and fundamentally changed deep learning.

## Why Transformers Replaced RNNs

RNNs dominated sequential data processing until transformers solved their core limitations.

<!-- component:table:rnn-limitations -->

| RNN Limitation | Transformer Solution | Impact |
|----------------|----------------------|--------|
| **Sequential processing** (can't parallelize) | **Parallel processing** (all tokens simultaneously) | 10-100× faster training on GPUs |
| **Vanishing gradients** across long sequences | **Direct connections** via attention (no gradient degradation) | Handles sequences of thousands of tokens |
| **Fixed context window** (LSTM: ~100-500 tokens) | **Flexible context** (modern transformers: 100K+ tokens) | Entire documents/books as context |
| **Implicit position encoding** (order from recurrence) | **Explicit position encoding** (learned or fixed positional embeddings) | More flexible position understanding |

**Key insight:** RNNs process sequences like reading a book one word at a time, trying to remember everything. Transformers read the entire book at once and decide which parts are relevant to each other.

## The Core Mechanism: Self-Attention

**Self-attention** allows each token to "attend to" (focus on) every other token in the sequence, learning which relationships matter.

### How Self-Attention Works

<!-- component:example:attention-mechanism -->

**Example sentence:** "The animal didn't cross the street because it was too tired"

**Question:** What does "it" refer to?

**Self-attention computation:**

```
For token "it":

1. Compute attention scores with every other token:
   "The"     → 0.01  (low relevance)
   "animal"  → 0.85  (high relevance!)
   "didn't"  → 0.02
   "cross"   → 0.03
   "street"  → 0.12  (medium—could be relevant)
   "because" → 0.01
   "it"      → 0.05  (self-reference)
   "was"     → 0.02
   "too"     → 0.01
   "tired"   → 0.78  (high relevance—describes "animal")

2. Weighted combination:
   "it" representation = 0.85 × "animal" + 0.12 × "street" + 0.78 × "tired" + ...

3. Result: "it" is strongly influenced by "animal" and "tired"
   → Model understands "it" = animal
```

**If the sentence were "...because it was too narrow":**
- "street" would have high attention weight (narrow describes streets, not animals)
- Model would correctly resolve "it" = street

**This is learned, not programmed**—attention weights emerge from training data.

### Query, Key, Value: The Attention Mechanism

Self-attention uses three learned transformations for each token:

<!-- component:diagram:qkv-attention -->

```
For each token:
  Query (Q):  "What am I looking for?"
  Key (K):    "What do I offer?"
  Value (V):  "What information do I contain?"

Attention score (token i to token j):
  score_ij = Q_i · K_j  (dot product—how well query matches key)

Attention weights (normalized scores):
  weights_i = softmax(scores_i)  (converts to probabilities summing to 1)

Output for token i:
  output_i = Σ(weights_ij × V_j)  (weighted combination of values)
```

**Intuition:** Each token asks (Query) "what should I pay attention to?" and compares against what every token offers (Keys). Then it aggregates information (Values) weighted by how well queries matched keys.

### Multi-Head Attention: Parallel Attention Patterns

Instead of one attention mechanism, transformers use multiple **attention heads** in parallel.

<!-- component:example:multi-head -->

**Why multiple heads?**

**Sentence:** "The bank can guarantee deposits will eventually cover future tuition costs because it has a strong credit rating"

**Different attention heads learn different relationships:**

- **Head 1 (Syntactic):** Connects verbs to subjects, objects to modifiers
  - "guarantee" → "bank" (subject-verb)
  - "deposits" → "guarantee" (verb-object)

- **Head 2 (Semantic—Financial):** Links financial concepts
  - "bank" → "deposits", "credit rating"
  - "costs" → "tuition", "cover"

- **Head 3 (Coreference):** Resolves pronouns and references
  - "it" → "bank"

- **Head 4 (Long-range):** Connects distant dependencies
  - "eventually" → "future"
  - "cover" → "costs"

Each head can specialize in different linguistic patterns, then outputs are combined.

**Typical configuration:** 12-16 heads per layer, 12-96 layers total (GPT-3: 96 layers × 96 heads = 9,216 attention heads!)

## Transformer Architecture Components

### 1. Positional Encoding

Problem: Self-attention has no inherent sense of order—"dog bites man" and "man bites dog" would be identical without position information.

**Solution:** Add positional encodings to input embeddings.

<!-- component:table:positional-encoding -->

| Approach | How It Works | Used By |
|----------|--------------|---------|
| **Sinusoidal (original)** | Fixed sin/cos functions of position and dimension | Original transformer, many variants |
| **Learned** | Trainable position embeddings | BERT, GPT |
| **Relative** | Encode distance between positions, not absolute positions | Transformer-XL, T5 |
| **Rotary (RoPE)** | Rotate embeddings based on position | Modern LLMs (LLaMA, GPT-4 likely) |

**Effect:** Model knows "bank" in position 2 is different from "bank" in position 10, even with identical word embeddings.

### 2. Feedforward Networks

After attention, each token passes through a feedforward network (FFN) independently.

```
FFN(x) = ReLU(x × W_1 + b_1) × W_2 + b_2

Typical dimensions:
  Input:  768 (hidden size)
  Hidden: 3072 (4× expansion)
  Output: 768 (back to hidden size)
```

**Purpose:** Attention aggregates information; FFN processes and transforms it. Think of attention as "gathering relevant context" and FFN as "reasoning about that context."

### 3. Layer Normalization and Residual Connections

**Residual connections:** Output = Input + Transformation(Input)

**Why this matters:** Allows gradients to flow directly through the network, enabling very deep models (100+ layers).

**Layer normalization:** Stabilizes training by normalizing activations.

**Standard transformer block:**

```
# Multi-head attention with residual
x = x + MultiHeadAttention(x)
x = LayerNorm(x)

# Feedforward with residual
x = x + FeedForward(x)
x = LayerNorm(x)
```

Repeated 12-96 times (depending on model size).

### 4. Complete Architecture: Encoder vs. Decoder

Transformers come in three configurations:

<!-- component:table:transformer-variants -->

| Architecture | Structure | Attention Pattern | Example Models | Use Cases |
|--------------|-----------|-------------------|----------------|-----------|
| **Encoder-only** | Stack of encoder layers | Bidirectional (attend to all tokens) | BERT, RoBERTa | Classification, NER, question answering |
| **Decoder-only** | Stack of decoder layers | Causal (attend only to previous tokens) | GPT, Claude, LLaMA | Text generation, chat, completion |
| **Encoder-Decoder** | Encoder stack + decoder stack | Encoder: bidirectional; Decoder: causal + cross-attention | T5, BART | Translation, summarization |

**Key difference:**

- **BERT (encoder):** Can see the entire sentence—ideal for understanding tasks
  - "The [MASK] was too tired" → predicts "animal" by looking at both sides

- **GPT (decoder):** Can only see previous tokens—ideal for generation
  - "The animal was too" → predicts "tired" without seeing what comes after

### 5. Attention Masking

**Causal masking (GPT):** Prevent attending to future tokens (otherwise generation would "cheat")

```
Sentence: "The cat sat on"
Next token prediction for "sat":
  ✓ Can attend to: "The", "cat", "sat"
  ✗ Cannot attend to: "on" (future token)
```

**Padding masking (all transformers):** Ignore padding tokens when sequences have different lengths.

## Scaling Laws and Model Size

Transformers scale remarkably well—bigger models consistently outperform smaller ones (up to current limits).

<!-- component:table:model-scaling -->

| Model | Year | Parameters | Training Tokens | Key Capability Gained |
|-------|------|------------|-----------------|----------------------|
| **GPT** | 2018 | 117M | ~5B | Basic coherence |
| **GPT-2** | 2019 | 1.5B | ~10B | Longer coherence, some reasoning |
| **GPT-3** | 2020 | 175B | ~300B | In-context learning, few-shot reasoning |
| **GPT-4** | 2023 | ~1.7T (rumored) | Unknown | Multimodal, advanced reasoning |
| **Claude 3** | 2024 | Unknown | Unknown | Long context (200K tokens), nuanced reasoning |

**Scaling law observation (Kaplan et al., 2020):**
- Model performance improves as a power law with model size, dataset size, and compute
- No sign of saturation yet—bigger is still better (but with diminishing returns)

**Governance implication:** Only well-funded organizations can train frontier models, concentrating power. Open models (LLaMA, Mistral) aim to democratize access but lag behind frontier capabilities.

## Training Transformers: The Process

### 1. Pre-training: Learning Language

**Objective:** Learn general language patterns from massive text corpora.

**Training objectives:**

<!-- component:table:pretraining-objectives -->

| Objective | How It Works | Models Using It |
|-----------|--------------|-----------------|
| **Causal Language Modeling (CLM)** | Predict next token given previous tokens | GPT, Claude, LLaMA |
| **Masked Language Modeling (MLM)** | Predict masked tokens given context | BERT, RoBERTa |
| **Span Corruption** | Predict masked spans | T5, UL2 |

**Example (CLM):**
```
Training data: "The quick brown fox jumps over the lazy dog"

Training examples (predict next token):
  "The" → predict "quick"
  "The quick" → predict "brown"
  "The quick brown" → predict "fox"
  ...
```

**Scale:** GPT-3 trained on ~300B tokens from Common Crawl, WebText, books, Wikipedia. Training cost: ~$4-10 million in compute.

### 2. Fine-tuning: Specialization

After pre-training, models are fine-tuned for specific capabilities.

**Supervised fine-tuning (SFT):** Train on high-quality task-specific examples
- Question answering pairs
- Instruction following examples
- Conversation transcripts

**Reinforcement Learning from Human Feedback (RLHF):** Align model outputs with human preferences
1. Humans rank model outputs (which response is better?)
2. Train reward model to predict human preferences
3. Use reinforcement learning to maximize reward

**Result:** ChatGPT, Claude—helpful, harmless, honest assistants.

## Transformer Advantages and Limitations

### Advantages

<!-- component:checklist:transformer-benefits -->

**Why transformers dominate:**

- [x] **Parallelizable training:** Processes entire sequences simultaneously (10-100× faster than RNNs)
- [x] **Long-range dependencies:** Direct attention connections eliminate vanishing gradients
- [x] **Flexible context windows:** Modern models handle 100K+ tokens
- [x] **Transfer learning:** Pre-trained models fine-tune to diverse tasks
- [x] **Scalability:** Performance improves predictably with model size
- [x] **Interpretability:** Attention weights show what model focuses on

### Limitations

<!-- component:checklist:transformer-limitations -->

**Where transformers struggle:**

- [ ] **Quadratic memory complexity:** Attention requires O(n²) memory (n = sequence length)
  - 1K tokens: manageable
  - 100K tokens: requires specialized optimizations (Flash Attention, sparse attention)

- [ ] **Computational cost:** Training frontier models costs millions; inference costs scale with usage
  - GPT-3 inference: ~$0.0004-0.0120 per 1K tokens
  - Running ChatGPT: estimated $700K/day

- [ ] **Data requirements:** Pre-training needs billions-trillions of tokens
  - Smaller domains/languages lack sufficient data
  - Quality data becoming scarce as internet is "exhausted"

- [ ] **Factual grounding:** Transformers learn statistical patterns, not truth
  - Hallucinations: Generate plausible-sounding false information
  - No inherent knowledge verification

- [ ] **Biases:** Amplify biases in training data (gender, race, cultural stereotypes)

- [ ] **Explainability limits:** Attention weights show correlation, not causation
  - Can see model attended to certain tokens
  - Cannot fully explain why or how decision was made

## Governance Considerations

### 1. Environmental Impact

Training large transformers has significant carbon footprint.

<!-- component:example:environmental-cost -->

**Estimated CO₂ emissions (training):**

- GPT-3 (175B): ~500 metric tons CO₂ (equivalent to ~100 cars driven for a year)
- BLOOM (176B): ~25 metric tons CO₂ (France's low-carbon grid)
- Average LLM training: 50-500 tons CO₂

**Mitigation strategies:**
- Train in regions with renewable energy
- Model distillation (smaller models matching performance)
- Share pre-trained models to avoid redundant training

### 2. Access and Equity

Frontier model training requires resources only available to well-funded labs.

**Cost barriers:**
- GPT-3 training: $4-10M in compute
- GPT-4 (estimated): $50-100M+
- Requires specialized GPU clusters (thousands of H100s)

**Equity implications:**
- Concentrates AI capability in few organizations (OpenAI, Anthropic, Google, Meta)
- Smaller languages/domains underserved (not profitable to train dedicated models)
- Open-source efforts (LLaMA, Falcon, Mistral) critical for democratization

### 3. Dual-Use and Misuse

Transformers can generate misinformation, spam, malware, and harmful content at scale.

**Governance challenges:**
- **Misinformation:** Generate convincing fake news, propaganda
- **Impersonation:** Mimic writing styles for fraud
- **Malicious code:** Generate exploits, phishing emails
- **Bias amplification:** Reproduce and scale discriminatory patterns

**Mitigation approaches:**
- RLHF to align with human values
- Output filtering and safety classifiers
- Usage monitoring and rate limiting
- Transparency about limitations

### 4. Explainability Requirements

Attention weights provide some interpretability but don't constitute full explanation.

**What attention shows:** Which tokens were relevant to prediction
**What attention doesn't show:** Why those tokens mattered, how they combined to produce output

**Regulatory challenge:** EU AI Act, sector-specific regulations may require explanations that transformers cannot provide. High-stakes decisions (credit, hiring, criminal justice) may need more interpretable models.

## Modern Transformer Innovations

### 1. Efficient Attention

**Problem:** O(n²) complexity limits context window size.

**Solutions:**

<!-- component:table:efficient-attention -->

| Approach | How It Works | Context Length Gain |
|----------|--------------|---------------------|
| **Sparse Attention** | Attend to subset of tokens (local + global) | 2-10× longer contexts |
| **Linear Attention** | Approximate attention with linear complexity | Arbitrary length (memory is bottleneck) |
| **Flash Attention** | Optimized GPU memory access patterns | 2-4× longer at same memory |
| **Sliding Window** | Attend within fixed-size window | Infinite length (but limited receptive field) |

### 2. Mixture of Experts (MoE)

**Concept:** Route each token to subset of specialized expert networks.

**Benefit:** Increase model capacity without proportional compute increase.

**Example:** GPT-4 (rumored) uses MoE—1.7T total parameters, but ~100-200B active per token.

### 3. Multimodal Transformers

Transformers extend beyond text to images, audio, video.

**Vision Transformers (ViT):** Treat image patches as tokens → apply standard transformer
**CLIP:** Joint text-image embeddings (connects language and vision)
**GPT-4, Gemini, Claude 3:** Process text, images, and code together

**Governance implication:** Multimodal models enable new capabilities (visual reasoning) but also new risks (deepfakes, privacy violations from image analysis).

<!-- component:summary -->

## Key Takeaways

- Transformers use self-attention to process sequences by weighing relevance of every element to every other
- Core mechanism: Query-Key-Value attention with multi-head specialization
- Key advantage over RNNs: parallel processing (faster training), direct connections (long-range dependencies)
- Three architectures: encoder-only (BERT—understanding), decoder-only (GPT—generation), encoder-decoder (T5—translation)
- Components: positional encoding, multi-head attention, feedforward layers, residual connections, layer normalization
- Training: pre-training on massive corpora (predict next token) + fine-tuning for specific tasks (RLHF)
- Scaling laws: bigger models consistently outperform smaller ones (up to current limits)
- Limitations: quadratic memory complexity, computational cost, data requirements, hallucinations, biases
- Governance concerns: environmental impact, access equity, dual-use risks, explainability gaps
- Modern innovations: efficient attention (Flash Attention), mixture of experts, multimodal extensions

**Bottom line:** Transformers revolutionized NLP by replacing sequential recurrence with parallel attention, enabling the large language models that power ChatGPT, Claude, and modern AI assistants. Their unprecedented capabilities come with unprecedented governance challenges—bias, misuse, concentration of power, environmental cost, and explainability limitations.

---

**Related concepts:** [RNNs for Sequences](/learn/terminology/rnns-for-sequences) • [Pre-training and Fine-tuning](/learn/terminology/pre-training-fine-tuning) • [Model Size and Scale](/learn/terminology/model-size-scale) • [Embeddings and Vector Representations](/learn/terminology/embeddings-vectors)
