---
title: "Embeddings and Vector Representations"
slug: "embeddings-vectors"
description: "Learn how AI models convert words, images, and other data into numerical vectors that capture semantic meaning, enabling similarity search and transfer learning"
category: "terminology"
pubDate: 2024-01-23
author: "AIDefence Team"
tags: ["embeddings", "vectors", "representation-learning", "nlp", "semantic-similarity"]
prerequisites: ["neural-networks-basics", "transformers-architecture", "feature-engineering"]
related: ["pre-training-fine-tuning", "cnns-for-images", "rnns-for-sequences"]
difficulty: "intermediate"
learningPath: "terminology"
order: 13
estimatedTime: "15 minutes"
---

# Embeddings and Vector Representations

**Embeddings are learned dense vector representations that map discrete objects (words, images, users, products) into continuous numerical space where semantically similar items are close together.** They're fundamental to modern AI—transformers use word embeddings, recommendation systems use item embeddings, facial recognition uses face embeddings.

The core insight: **Instead of treating "cat" and "dog" as completely unrelated symbols, represent them as points in space where nearby points have similar meanings.**

## The Problem: Representing Discrete Objects

Machine learning models need numerical inputs, but much real-world data is categorical (words, categories, IDs).

<!-- component:example:encoding-problem -->

**Naive approaches and their failures:**

**Approach 1: Integer encoding**

```
"cat" → 1
"dog" → 2
"car" → 3
"airplane" → 4

Problem: Implies ordering and distance
  "dog" (2) is closer to "cat" (1) than "airplane" (4)
  But also implies "cat" < "dog" < "car" (nonsensical ordering)
```

**Approach 2: One-hot encoding**

```
Vocabulary size: 50,000 words

"cat" → [0, 0, ..., 1, ..., 0]  (1 at position 3,451, zeros elsewhere)
"dog" → [0, 0, ..., 1, ..., 0]  (1 at position 8,723, zeros elsewhere)
"kitten" → [0, 0, ..., 1, ..., 0]  (1 at position 22,019, zeros elsewhere)

Problems:
  1. Sparse: 50,000 dimensions, only 1 non-zero
  2. No similarity: "cat" and "kitten" are equally distant from each other as "cat" and "airplane"
  3. Memory: 50K × 4 bytes = 200KB per word!
```

**Embedding solution:**

```
Vocabulary: 50,000 words
Embedding dimension: 300

Each word → 300-dimensional dense vector

"cat" → [0.23, -0.15, 0.88, ..., 0.42]  (300 numbers)
"dog" → [0.29, -0.11, 0.85, ..., 0.39]  (similar to "cat"!)
"kitten" → [0.25, -0.13, 0.87, ..., 0.41]  (very similar to "cat")
"airplane" → [-0.52, 0.71, -0.33, ..., -0.18]  (far from "cat")

Benefits:
  1. Dense: 300 dimensions instead of 50,000
  2. Semantic similarity: Similar meanings → similar vectors
  3. Memory: 300 × 4 bytes = 1.2KB per word (166× smaller)
```

**Key principle:** Embeddings compress high-dimensional sparse representations into low-dimensional dense representations that preserve semantic relationships.

## How Embeddings Are Learned

Embeddings are learned from data, not hand-crafted.

### Word Embeddings: Word2Vec

**Intuition:** "You shall know a word by the company it keeps"—words appearing in similar contexts have similar meanings.

<!-- component:example:word2vec-training -->

**Word2Vec training (Skip-gram variant):**

```
Training sentence: "The quick brown fox jumps over the lazy dog"

Create training examples (predict context from target word):

  Target: "fox"
  Context: "quick", "brown", "jumps", "over"

  Target: "dog"
  Context: "the", "lazy"

Model learns:
  - "fox" and "dog" have similar contexts (both appear near verbs, adjectives)
  - Their embeddings become similar
  - Words with different contexts (e.g., "jumps" and "dog") have dissimilar embeddings
```

**Training objective:** Maximize probability of context words given target word.

**Result after training on billions of words:**

```
similarity("king", "queen") = 0.82
similarity("king", "man") = 0.76
similarity("king", "apple") = 0.12

Famous example:
  king - man + woman ≈ queen

  king = [0.5, 0.3, 0.7, ...]
  man = [0.4, 0.1, 0.5, ...]
  woman = [0.3, 0.1, 0.6, ...]

  king - man + woman = [0.4, 0.3, 0.8, ...] ≈ queen embedding
```

**Why this matters:** Embeddings capture semantic relationships—gender, tense, hierarchies—without explicit supervision.

### Transformer Embeddings: Contextual Representations

**Word2Vec limitation:** "bank" has one embedding whether it means "financial institution" or "river bank."

**Transformer solution (BERT, GPT):** Different embeddings for each occurrence, based on context.

<!-- component:example:contextual-embeddings -->

**Contextual embeddings:**

```
Sentence 1: "I deposited money in the bank"
  "bank" embedding: [0.6, -0.2, 0.8, ...] (financial context)

Sentence 2: "We sat on the river bank"
  "bank" embedding: [0.2, 0.4, -0.3, ...] (geographical context)

Same word, different contexts → different embeddings
```

**How transformers compute contextual embeddings:**

1. Start with static word embedding (like Word2Vec)
2. Pass through transformer layers with self-attention
3. Each layer updates embeddings based on surrounding words
4. Final layer outputs context-specific embedding

**Result:** Transformers produce different embeddings for each word occurrence, capturing nuanced meaning from context.

## Types of Embeddings

Embeddings generalize beyond words to any discrete objects.

<!-- component:table:embedding-types -->

| Embedding Type | What It Represents | Typical Dimensions | Applications | Learned From |
|----------------|-------------------|-------------------|---------------|--------------|
| **Word Embeddings** | Words/tokens | 100-1024 | NLP, search, translation | Text corpora (Word2Vec, GloVe, BERT) |
| **Sentence Embeddings** | Entire sentences | 384-1536 | Semantic search, clustering | Sentence pairs, paraphrases |
| **Image Embeddings** | Visual content | 512-2048 | Image search, similarity | Image classification (ResNet, CLIP) |
| **User Embeddings** | User preferences | 50-500 | Recommendations, personalization | User-item interactions |
| **Item Embeddings** | Products, content | 50-500 | Recommendations, search | Co-occurrence, ratings |
| **Graph Embeddings** | Nodes in networks | 64-256 | Link prediction, clustering | Network structure (Node2Vec) |
| **Code Embeddings** | Code snippets | 768-2048 | Code search, similarity | Code repositories (CodeBERT) |

### Sentence and Document Embeddings

**Challenge:** Represent variable-length text (sentences, paragraphs, documents) as fixed-size vectors.

**Approaches:**

<!-- component:table:sentence-embedding-methods -->

| Method | How It Works | Quality | Use Case |
|--------|--------------|---------|----------|
| **Average word embeddings** | Mean of all word vectors | Low | Simple baseline |
| **TF-IDF weighted average** | Weight words by importance | Medium | Better baseline |
| **Sentence-BERT (SBERT)** | Fine-tuned transformer for sentence pairs | High | Semantic search, clustering |
| **Universal Sentence Encoder** | Trained on diverse tasks | High | General-purpose |
| **Doc2Vec** | Extension of Word2Vec for documents | Medium | Document similarity |

**Example use case (semantic search):**

```
Query: "How to train a neural network?"

Candidate documents:
  Doc A: "Machine learning model training procedures"
    → Embedding: [0.5, 0.7, 0.2, ...]
  Doc B: "Recipe for chocolate cake"
    → Embedding: [-0.3, 0.1, 0.9, ...]

Compute similarity (cosine similarity):
  similarity(query, Doc A) = 0.89 (high—semantically related!)
  similarity(query, Doc B) = 0.15 (low—unrelated)

Rank: Doc A first (more relevant)
```

### Image Embeddings

**CNN-based image embeddings:** Learned as part of image classification.

<!-- component:example:image-embeddings -->

**How it works:**

```
Input image (224×224×3 pixels)
    ↓
Convolutional layers (learn visual features)
    ↓
Global average pooling
    ↓
Dense vector (2048 dimensions) ← This is the image embedding
    ↓
Classification layer (1000 classes)

The 2048-dim vector is the embedding—captures visual content
```

**Applications:**

- **Reverse image search:** Find similar images by embedding similarity
- **Visual recommendation:** "Show me products that look like this"
- **Content moderation:** Detect near-duplicates of prohibited content
- **Facial recognition:** Face embeddings where similar faces cluster

**CLIP (Contrastive Language-Image Pre-training):** Learns joint text-image embeddings.

```
"A dog playing fetch" (text) → [0.3, 0.7, ..., 0.5]
[Image of dog playing] → [0.32, 0.68, ..., 0.48]

Similar embeddings despite different modalities!
```

**Why this matters:** Enables cross-modal search (text query → image results, image query → text descriptions).

## Measuring Similarity: Distance Metrics

Embeddings enable similarity search—but how do you measure similarity?

<!-- component:table:distance-metrics -->

| Metric | Formula | Range | Best For | Properties |
|--------|---------|-------|----------|------------|
| **Cosine Similarity** | (A · B) / (‖A‖ ‖B‖) | [-1, 1] (1 = identical) | Text, high-dim | Ignores magnitude, focuses on direction |
| **Euclidean Distance** | √Σ(A_i - B_i)² | [0, ∞) (0 = identical) | Images, low-dim | Sensitive to magnitude |
| **Dot Product** | Σ(A_i × B_i) | (-∞, ∞) (higher = more similar) | Fast approximate search | Not normalized |
| **Manhattan Distance** | Σ\|A_i - B_i\| | [0, ∞) (0 = identical) | Sparse data | Less sensitive to outliers |

**Cosine similarity (most common for embeddings):**

```
A = [1, 2, 3]
B = [2, 4, 6]  (2× A)

Cosine similarity = (1×2 + 2×4 + 3×6) / (√14 × √56)
                  = 28 / 28 = 1.0 (perfect similarity)

Why? A and B point in same direction (just different magnitudes)
```

**Practical example:**

```
sentence1 = "The cat sat on the mat"
sentence2 = "A feline rested on the rug"
sentence3 = "Python programming tutorial"

embedding1 = SBERT(sentence1)  # [0.5, 0.7, 0.2, ...]
embedding2 = SBERT(sentence2)  # [0.48, 0.72, 0.19, ...]
embedding3 = SBERT(sentence3)  # [-0.3, 0.1, 0.85, ...]

cosine(embedding1, embedding2) = 0.94  (semantically similar!)
cosine(embedding1, embedding3) = 0.12  (unrelated)
```

## Embedding Dimensions and Trade-offs

Embedding dimensionality affects capacity, memory, and speed.

<!-- component:table:dimension-tradeoffs -->

| Dimensions | Capacity | Memory | Speed | Use Case |
|-----------|----------|--------|-------|----------|
| **50-100** | Low | Low | Fast | Small vocabularies, simple tasks |
| **200-300** | Medium | Medium | Fast | Word2Vec, GloVe (standard) |
| **384-768** | High | Medium | Medium | BERT-base, sentence embeddings |
| **1024-2048** | Very high | High | Slow | BERT-large, vision models (ResNet) |
| **4096-12288** | Extreme | Very high | Very slow | Frontier transformers (GPT-4) |

**Rule of thumb:**
- More dimensions → more capacity to distinguish items
- Diminishing returns beyond ~300-500 for many tasks
- Choose based on vocabulary size, task complexity, compute budget

**Dimensionality reduction (when needed):**
- PCA (Principal Component Analysis): Linear projection
- t-SNE: Non-linear, good for visualization
- UMAP: Faster than t-SNE, preserves global structure

## Governance Implications

### 1. Bias in Embeddings

**Embeddings learn biases from training data.**

<!-- component:example:embedding-bias -->

**Documented biases in Word2Vec:**

```
Analogies learned from biased text:

man : computer programmer :: woman : homemaker
man : doctor :: woman : nurse
European : art :: African : poverty

Association tests:
  similarity("man", "engineer") > similarity("woman", "engineer")
  similarity("white", "pleasant") > similarity("black", "pleasant")
```

**Why this happens:**
- Training data reflects societal biases (historical text, internet content)
- Co-occurrence patterns encode stereotypes
- Model learns statistical associations, not truth

**Impact:**
- **Resume screening:** Embeddings might favor male candidates for technical roles
- **Search rankings:** Biased associations affect relevance
- **Content recommendations:** Reinforce stereotypical interests

**Mitigation approaches:**
- Debiasing algorithms (adjust embeddings to remove bias dimensions)
- Balanced training data (over-represent underrepresented groups)
- Fairness-aware training objectives
- Regular bias audits (test for problematic associations)

**Limitation:** Debiasing is imperfect—biases can resurface in subtle ways.

### 2. Privacy and Memorization

**Embeddings can memorize training data.**

**Risk:** If training data includes private information, embeddings might leak it.

<!-- component:example:memorization -->

**Example:**

```
Training data includes: "John Smith's SSN is 123-45-6789"

Embedding might encode:
  similarity("John Smith", "123-45-6789") > expected

Or worse, model completes:
  "John Smith's SSN is" → generates "123-45-6789"
```

**Governance responses:**
- Filter training data for PII (Personally Identifiable Information)
- Differential privacy during training (add noise to gradients)
- Membership inference testing (can you detect if example was in training set?)
- Data access controls (who can query embeddings?)

### 3. Embedding Inversion Attacks

**Can you reconstruct original data from embeddings?**

**Text embeddings:** Partial reconstruction possible
- Sentence embedding → approximate sentence via nearest neighbors
- Not perfect, but can leak sensitive content

**Image embeddings:** More vulnerable
- Face embeddings → reconstruct face images (privacy violation)
- Product embeddings → infer purchase history

**Mitigation:**
- Access controls (don't expose raw embeddings publicly)
- Encrypted embeddings for privacy-critical applications
- Aggregated embeddings (group-level, not individual-level)

### 4. Embedding Spaces as Governance Levers

**Embeddings determine what's "similar"—a powerful governance lever.**

**Example use cases:**

**Content moderation:**
- Cluster toxic content by embedding similarity
- New toxic content likely similar to known violations
- Proactive detection via embedding proximity

**Copyright protection:**
- Embed copyrighted content
- Detect similar (potentially infringing) content
- Trade-off: Aggressive filtering harms fair use

**Recommendation fairness:**
- Audit item embeddings for demographic bias
- Ensure diverse recommendations (not just most similar)
- Balance relevance and exposure equity

## Practical Applications

### 1. Semantic Search

**Traditional search (keyword matching):**

```
Query: "how to bake bread"
Must contain: "how", "bake", "bread"

Misses relevant documents:
  "bread making tutorial"
  "artisan loaf recipes"
```

**Semantic search (embedding-based):**

```
Query embedding: [0.5, 0.7, 0.2, ...]

Find documents with similar embeddings:
  "bread making tutorial" → cosine sim = 0.91 ✓
  "artisan loaf recipes" → cosine sim = 0.87 ✓
  "how to fix a car engine" → cosine sim = 0.15 ✗

Ranks by semantic relevance, not keyword overlap
```

### 2. Recommendation Systems

**Collaborative filtering with embeddings:**

```
Learn embeddings for users and items from interactions

User embedding (Alice): [0.3, 0.7, 0.1, ...]
Item embeddings:
  Movie A (action): [0.32, 0.68, 0.12, ...]  → High similarity!
  Movie B (romance): [-0.2, 0.3, 0.8, ...]  → Low similarity

Recommend Movie A to Alice (similar embedding)
```

**Why this works:** Users with similar embeddings have similar preferences; items with similar embeddings are substitutes.

### 3. Few-Shot Learning

**Embeddings enable learning from few examples.**

```
Task: Classify customer support tickets

Few examples with labels:
  "How do I reset my password?" → Login issue
  "Payment failed" → Billing issue

New ticket: "I can't log in to my account"

Embed new ticket, find nearest labeled example:
  Nearest: "How do I reset my password?" (login issue)
  → Classify as: Login issue

No need to retrain—just embed + nearest neighbor search
```

### 4. Anomaly Detection

**Outliers have dissimilar embeddings to normal data.**

```
Normal credit card transactions embed close together
Fraudulent transaction: Far from cluster → anomaly

Use embedding distance as anomaly score
```

<!-- component:summary -->

## Key Takeaways

- Embeddings convert discrete objects (words, images, users) into continuous dense vectors capturing semantic similarity
- Core principle: Similar meanings → similar vectors (nearby in embedding space)
- Learned from data through neural networks (Word2Vec, transformers, CNNs)
- Word2Vec: Static embeddings learned from context co-occurrence
- Transformers (BERT, GPT): Contextual embeddings that change based on surrounding words
- Types: Word, sentence, image, user, item, code, graph embeddings
- Dimensionality: 50-12K dimensions; higher = more capacity but more memory/compute
- Similarity metrics: Cosine similarity (direction), Euclidean distance (magnitude), dot product (fast approximation)
- Applications: Semantic search, recommendations, few-shot learning, anomaly detection, similarity search
- Governance concerns: Bias (embeddings learn stereotypes from data), privacy (memorization, inversion attacks), embedding spaces as policy levers
- Mitigation: Debiasing algorithms, differential privacy, bias audits, access controls, fairness-aware training

**Bottom line:** Embeddings are the universal representation layer of modern AI—converting symbolic data into numerical vectors that enable similarity-based reasoning. But embeddings inherit and amplify biases from training data, making them critical governance points for fairness, privacy, and content moderation.

---

**Related concepts:** [Neural Networks Basics](/learn/terminology/neural-networks-basics) • [Transformers Architecture](/learn/terminology/transformers-architecture) • [Feature Engineering](/learn/terminology/feature-engineering) • [Pre-training and Fine-tuning](/learn/terminology/pre-training-fine-tuning)
