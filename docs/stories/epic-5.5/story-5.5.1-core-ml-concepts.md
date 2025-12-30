# Story 5.5.1: Create Core ML Concepts Articles

**Epic**: 5.5 - Terminology Content Creation
**Story ID**: 5.5.1
**Priority**: P1 (High)
**Estimated Effort**: 12-18 hours
**Dependencies**: None
**Assigned To**: TBD

---

## Story Description

Create 6 foundational machine learning terminology articles covering basic ML concepts that business professionals need to understand when working with AI systems.

---

## User Story

**As a** business professional learning AI governance
**I want** clear explanations of core ML terminology
**So that** I can understand technical discussions and documentation

---

## Acceptance Criteria

- [ ] All 6 articles created with complete frontmatter
- [ ] Each article is 1500-2500 words
- [ ] All articles have proper cross-references to other paths
- [ ] Articles follow documentation standards from `/docs/bmm/data/documentation-standards.md`
- [ ] Technical accuracy verified
- [ ] Content is accessible to non-technical readers

---

## Articles to Create

### 1. Machine Learning Fundamentals - What Is ML and How Does It Work?

**Slug**: `machine-learning-fundamentals-what-is-ml-and-how-does-it-work`
**Word Count**: 2000-2200 words

**Content Outline**:
1. **Introduction** (200 words)
   - What is machine learning?
   - Why it matters for governance professionals

2. **Core Concepts** (1000 words)
   - Traditional programming vs ML
   - Learning from data concept
   - Pattern recognition
   - Predictions vs decisions

3. **Practical Applications** (500 words)
   - Email spam filtering
   - Product recommendations
   - Fraud detection
   - Content moderation

4. **Key Takeaways** (200 words)
   - Summary of ML fundamentals
   - Why governance professionals need to understand this

**Frontmatter**:
```yaml
---
title: "Machine Learning Fundamentals - What Is ML and How Does It Work?"
slug: machine-learning-fundamentals-what-is-ml-and-how-does-it-work
path: terminology
publishDate: 2025-12-26
category: Terminology
tldr: "Machine learning is when computers learn patterns from data instead of following explicit instructions, enabling them to make predictions and decisions on new, unseen data."
tags:
  - machine-learning
  - fundamentals
  - ai-basics
  - pattern-recognition
  - data-driven
relatedConcepts:
  - term-2
  - term-3
  - term-4
crossPathRefs:
  - path: history
    articles: [history-8, history-12]
  - path: risk
    articles: [risk-2, risk-3]
---
```

---

### 2. Supervised vs. Unsupervised Learning - Key Differences Explained

**Slug**: `supervised-vs-unsupervised-learning-key-differences-explained`
**Word Count**: 1800-2000 words

**Content Outline**:
1. **Introduction** (150 words)
   - Two main learning paradigms

2. **Supervised Learning** (600 words)
   - Definition: learning from labeled examples
   - Training data with input-output pairs
   - Common algorithms: decision trees, neural networks
   - Use cases: classification, regression

3. **Unsupervised Learning** (600 words)
   - Definition: finding patterns without labels
   - Clustering and dimensionality reduction
   - Common algorithms: k-means, PCA
   - Use cases: customer segmentation, anomaly detection

4. **Comparison & When to Use Each** (300 words)
   - Comparison table
   - Decision framework

5. **Key Takeaways** (150 words)

**Frontmatter**:
```yaml
---
title: "Supervised vs. Unsupervised Learning - Key Differences Explained"
slug: supervised-vs-unsupervised-learning-key-differences-explained
path: terminology
publishDate: 2025-12-26
category: Terminology
tldr: "Supervised learning uses labeled training data to learn input-output relationships, while unsupervised learning finds hidden patterns in unlabeled data."
tags:
  - supervised-learning
  - unsupervised-learning
  - machine-learning-types
  - classification
  - clustering
relatedConcepts:
  - term-1
  - term-8
  - term-11
crossPathRefs:
  - path: risk
    articles: [risk-2]
  - path: terminology
    articles: [term-4]
---
```

---

### 3. Deep Learning Basics - Neural Networks Demystified

**Slug**: `deep-learning-basics-neural-networks-demystified`
**Word Count**: 2000-2200 words

**Content Outline**:
1. **Introduction** (200 words)
   - What is deep learning?
   - Relationship to machine learning

2. **Neural Network Architecture** (800 words)
   - Neurons and layers
   - Input, hidden, and output layers
   - Activation functions
   - Forward propagation

3. **Training Neural Networks** (500 words)
   - Backpropagation
   - Loss functions
   - Gradient descent

4. **Deep Learning Applications** (400 words)
   - Image recognition
   - Natural language processing
   - Speech recognition

5. **Key Takeaways** (200 words)

**Frontmatter**:
```yaml
---
title: "Deep Learning Basics - Neural Networks Demystified"
slug: deep-learning-basics-neural-networks-demystified
path: terminology
publishDate: 2025-12-26
category: Terminology
tldr: "Deep learning uses multi-layered neural networks to automatically learn hierarchical representations of data, enabling breakthroughs in image recognition, NLP, and speech."
tags:
  - deep-learning
  - neural-networks
  - artificial-intelligence
  - machine-learning
  - backpropagation
relatedConcepts:
  - term-1
  - term-7
  - term-10
  - term-13
crossPathRefs:
  - path: history
    articles: [history-12, history-13]
  - path: risk
    articles: [risk-3, risk-6]
---
```

---

### 4. Training Data - The Foundation of ML Systems

**Slug**: `training-data-the-foundation-of-ml-systems`
**Word Count**: 1800-2000 words

**Content Outline**:
1. **Introduction** (150 words)
   - Why data is crucial

2. **Types of Training Data** (600 words)
   - Labeled vs unlabeled
   - Structured vs unstructured
   - Data quality characteristics

3. **Data Collection & Preparation** (500 words)
   - Sources of training data
   - Data cleaning
   - Data augmentation
   - Bias in training data

4. **Training/Validation/Test Split** (400 words)
   - Why we split data
   - Common split ratios
   - Cross-validation

5. **Key Takeaways** (200 words)

**Frontmatter**:
```yaml
---
title: "Training Data - The Foundation of ML Systems"
slug: training-data-the-foundation-of-ml-systems
path: terminology
publishDate: 2025-12-26
category: Terminology
tldr: "Training data is the dataset used to teach ML models patterns and relationships. Quality, quantity, and representativeness of training data directly determine model performance."
tags:
  - training-data
  - data-quality
  - machine-learning
  - data-preparation
  - bias-in-data
relatedConcepts:
  - term-1
  - term-2
  - term-6
crossPathRefs:
  - path: risk
    articles: [risk-2, risk-5]
  - path: responsibility
    articles: [resp-3]
---
```

---

### 5. Model Accuracy vs. Precision - Understanding ML Metrics

**Slug**: `model-accuracy-vs-precision-understanding-ml-metrics`
**Word Count**: 1500-1800 words

**Content Outline**:
1. **Introduction** (150 words)
   - Why metrics matter

2. **Accuracy** (400 words)
   - Definition
   - When accuracy is misleading
   - Class imbalance problem

3. **Precision and Recall** (500 words)
   - Definitions
   - Trade-offs
   - F1 score
   - Confusion matrix

4. **Choosing the Right Metric** (300 words)
   - Use case examples
   - Business context matters

5. **Key Takeaways** (150 words)

**Frontmatter**:
```yaml
---
title: "Model Accuracy vs. Precision - Understanding ML Metrics"
slug: model-accuracy-vs-precision-understanding-ml-metrics
path: terminology
publishDate: 2025-12-26
category: Terminology
tldr: "Accuracy measures overall correctness, but precision and recall are often more important for understanding model performance in real-world applications with class imbalance."
tags:
  - model-metrics
  - accuracy
  - precision
  - recall
  - f1-score
  - confusion-matrix
relatedConcepts:
  - term-1
  - term-11
crossPathRefs:
  - path: risk
    articles: [risk-2, risk-13]
  - path: responsibility
    articles: [resp-14]
---
```

---

### 6. Feature Engineering - The Art of Data Preparation

**Slug**: `feature-engineering-the-art-of-data-preparation`
**Word Count**: 1800-2000 words

**Content Outline**:
1. **Introduction** (150 words)
   - What is feature engineering?

2. **Feature Selection** (500 words)
   - Choosing relevant features
   - Dimensionality reduction
   - Feature importance

3. **Feature Transformation** (600 words)
   - Normalization and scaling
   - Encoding categorical variables
   - Creating derived features

4. **Impact on Model Performance** (400 words)
   - Examples of good vs bad features
   - Feature engineering in practice

5. **Key Takeaways** (200 words)

**Frontmatter**:
```yaml
---
title: "Feature Engineering - The Art of Data Preparation"
slug: feature-engineering-the-art-of-data-preparation
path: terminology
publishDate: 2025-12-26
category: Terminology
tldr: "Feature engineering is the process of selecting, transforming, and creating input variables (features) to improve machine learning model performance and interpretability."
tags:
  - feature-engineering
  - data-preparation
  - feature-selection
  - model-performance
  - dimensionality-reduction
relatedConcepts:
  - term-1
  - term-4
  - term-11
crossPathRefs:
  - path: risk
    articles: [risk-2]
---
```

---

## Tasks

- [ ] Research and outline all 6 articles
- [ ] Write Article 1: Machine Learning Fundamentals
- [ ] Write Article 2: Supervised vs. Unsupervised Learning
- [ ] Write Article 3: Deep Learning Basics
- [ ] Write Article 4: Training Data
- [ ] Write Article 5: Model Accuracy vs. Precision
- [ ] Write Article 6: Feature Engineering
- [ ] Technical accuracy review for all articles
- [ ] Add cross-references and examples
- [ ] Proofread and edit for clarity
- [ ] Verify all frontmatter is complete

---

## Definition of Done

- All 6 articles written and saved in `/content/articles/final/`
- Each article has complete frontmatter
- Word counts within target range (1500-2500 words)
- Cross-references verified to exist
- Technical accuracy reviewed
- Content accessible to business professionals
- Ready for Epic 5 (Terminology Path Implementation)

---

## Notes

- Use analogies and real-world examples throughout
- Avoid overly technical jargon
- Explain terms when first introduced
- Include diagrams where helpful (note for future)
- Focus on "why it matters for governance" in each article

---

**Story Status**: Ready to Start
**Blockers**: None
**Next Story**: 5.5.2 - Create Advanced AI Concepts Articles
