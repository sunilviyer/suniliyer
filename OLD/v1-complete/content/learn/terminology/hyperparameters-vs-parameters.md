---
title: "Hyperparameters vs. Parameters"
slug: "hyperparameters-vs-parameters"
description: "Understand the crucial distinction between model parameters (learned from data) and hyperparameters (chosen before training) and how they impact model performance"
category: "terminology"
pubDate: 2024-01-21
author: "AIDefence Team"
tags: ["machine-learning", "training", "optimization", "model-configuration"]
prerequisites: ["neural-networks-basics", "training-validation-test", "bias-variance-tradeoff"]
related: ["model-size-scale", "pre-training-fine-tuning", "feature-engineering"]
difficulty: "intermediate"
learningPath: "terminology"
order: 11
estimatedTime: "14 minutes"
---

# Hyperparameters vs. Parameters

**Parameters are model weights learned from training data through optimization (backpropagation, gradient descent). Hyperparameters are configuration choices set before training that control how learning happens.** Confusing these leads to poor model performance, overfitting, and wasted compute.

The distinction is fundamental: **Parameters define what the model learned. Hyperparameters define how the model learns.**

## Parameters: What the Model Learns

Parameters are the internal variables that the model adjusts during training to minimize loss.

<!-- component:example:neural-network-parameters -->

**Neural network parameters:**

```
Input layer (784 neurons - 28×28 pixel image)
    ↓
Hidden layer 1 (256 neurons)
    → Weight matrix W₁: 784 × 256 = 200,704 parameters
    → Bias vector b₁: 256 parameters
    ↓
Hidden layer 2 (128 neurons)
    → Weight matrix W₂: 256 × 128 = 32,768 parameters
    → Bias vector b₂: 128 parameters
    ↓
Output layer (10 neurons - digit classification)
    → Weight matrix W₃: 128 × 10 = 1,280 parameters
    → Bias vector b₃: 10 parameters

Total parameters: 235,146
```

**What these parameters do:**
- **Weights:** Determine how strongly each input influences each neuron
- **Biases:** Shift activation thresholds

**How they're learned:**
1. Initialize randomly
2. Forward pass: Compute predictions
3. Compute loss (how wrong predictions are)
4. Backward pass: Compute gradients (how to adjust parameters to reduce loss)
5. Update parameters: `parameter = parameter - learning_rate × gradient`
6. Repeat for many iterations

**Key point:** You never manually set parameters. They emerge from training data through gradient descent.

### Parameters in Different Model Types

<!-- component:table:model-parameters -->

| Model Type | What Are the Parameters? | Example |
|------------|-------------------------|---------|
| **Linear Regression** | Coefficient weights + intercept | `y = w₁x₁ + w₂x₂ + b` → 3 parameters |
| **Logistic Regression** | Coefficient weights + intercept | Same as linear, but with sigmoid activation |
| **Neural Network** | All weight matrices + bias vectors | 235K (small), 175B (GPT-3), 1.7T (GPT-4 rumored) |
| **Decision Tree** | Split thresholds, leaf values | Tree with 100 splits → ~100 parameters |
| **Transformer** | Attention weights, FFN weights, embeddings | BERT-base: 110M, GPT-3: 175B |
| **CNN** | Convolutional filters, fully-connected layers | ResNet-50: 25M, EfficientNet-B7: 66M |

**Why parameter count matters:**
- More parameters → more capacity to fit complex patterns
- More parameters → higher risk of overfitting (memorizing training data)
- More parameters → more compute (training time, memory, inference cost)

## Hyperparameters: What You Choose

Hyperparameters are configuration decisions made before training that control the learning process.

### Critical Hyperparameters

<!-- component:table:key-hyperparameters -->

| Hyperparameter | What It Controls | Typical Values | Effect of Increasing |
|----------------|------------------|----------------|----------------------|
| **Learning Rate** | Step size for parameter updates | 0.0001 - 0.1 | Too high: unstable training; Too low: slow convergence |
| **Batch Size** | Examples per gradient update | 16, 32, 64, 128, 256 | Larger: faster but noisier; Smaller: slower but more precise |
| **Epochs** | Training passes through data | 10 - 1000 | More: better fit but overfitting risk |
| **Network Depth** | Number of layers | 2 - 100+ | More: higher capacity but harder to train |
| **Network Width** | Neurons per layer | 64, 128, 256, 512, 1024+ | More: higher capacity, more parameters |
| **Dropout Rate** | Regularization strength | 0.1 - 0.5 | Higher: less overfitting but underfitting risk |
| **Weight Decay** | L2 regularization penalty | 0.0001 - 0.01 | Higher: simpler models, less overfitting |

### 1. Learning Rate: The Most Critical Hyperparameter

**Learning rate determines how much to adjust parameters based on gradients.**

<!-- component:example:learning-rate-impact -->

**Learning rate effects:**

```
Too low (e.g., 0.00001):
  Iteration 1: Loss = 2.5
  Iteration 100: Loss = 2.3
  Iteration 1000: Loss = 2.1
  → Painfully slow progress, may never converge

Goldilocks (e.g., 0.001):
  Iteration 1: Loss = 2.5
  Iteration 100: Loss = 0.8
  Iteration 1000: Loss = 0.1
  → Smooth, steady improvement

Too high (e.g., 1.0):
  Iteration 1: Loss = 2.5
  Iteration 2: Loss = 15.3
  Iteration 3: Loss = NaN (exploded)
  → Overshoots minimum, training diverges
```

**Learning rate schedules (advanced):**
- **Constant:** Same LR throughout training
- **Step decay:** Reduce LR by factor every N epochs
- **Exponential decay:** Gradually decrease over time
- **Cosine annealing:** Oscillate LR in cosine pattern
- **Warm-up + decay:** Start low, increase, then decrease (transformer standard)

**Modern practice:** Use adaptive optimizers (Adam, AdamW) that adjust learning rate per parameter.

### 2. Batch Size: Training Stability vs. Speed

**Batch size: Number of examples used to compute each gradient update.**

<!-- component:table:batch-size-tradeoffs -->

| Batch Size | Name | Pros | Cons | Use Case |
|------------|------|------|------|----------|
| **1** | Stochastic | Fast updates, regularization effect | Noisy gradients, slow on GPUs | Small datasets, online learning |
| **32-256** | Mini-batch | Good speed/stability balance | Moderate memory | Most common choice |
| **1024+** | Large batch | Fast throughput, GPU utilization | Generalization gap, large memory | Distributed training, massive models |
| **Full dataset** | Batch | Deterministic | Slow, large memory, overfitting | Small datasets, convex optimization |

**Practical guidance:**
- **Small models, small data:** 16-64
- **Standard deep learning:** 32-128
- **Large-scale pre-training:** 256-2048+ (with learning rate scaling)

**Memory constraint:** Larger batches need more GPU memory. If you get "out of memory" errors, reduce batch size.

### 3. Architecture Hyperparameters

These define the model structure itself.

<!-- component:checklist:architecture-choices -->

**Neural network architecture decisions:**

- [ ] **Number of layers (depth):** How many transformation stages?
  - Shallow (2-5 layers): Fast, simple patterns
  - Deep (10-100+ layers): Complex patterns, higher capacity

- [ ] **Neurons per layer (width):** How much information per stage?
  - Narrow (64-128): Parameter-efficient, faster
  - Wide (512-4096): More capacity, slower

- [ ] **Activation functions:** What non-linearity to use?
  - **ReLU:** Default choice (fast, avoids vanishing gradients)
  - **GELU:** Smoother (used in transformers)
  - **Tanh/Sigmoid:** Classic but vanishing gradient issues

- [ ] **Attention heads (transformers):** How many parallel attention mechanisms?
  - BERT: 12 heads/layer
  - GPT-3: 96 heads/layer

- [ ] **Embedding dimension:** How to represent tokens/features?
  - Small: 128-256
  - Large: 768-12288 (GPT-4 rumored)

**Governance consideration:** Architecture choices have huge compute implications. A 10-layer network might train in hours; a 100-layer network might take weeks and cost millions.

### 4. Regularization Hyperparameters

Control overfitting by constraining model complexity.

<!-- component:table:regularization -->

| Regularization | What It Does | Hyperparameter(s) | Effect |
|----------------|--------------|-------------------|--------|
| **Dropout** | Randomly disable neurons during training | Dropout rate (0.1-0.5) | Prevents co-adaptation, reduces overfitting |
| **Weight Decay (L2)** | Penalize large weights | Lambda (0.0001-0.01) | Encourages simpler solutions |
| **L1 Regularization** | Penalize absolute weights | Lambda (0.0001-0.01) | Sparse weights (feature selection) |
| **Early Stopping** | Stop training when validation loss stops improving | Patience (5-50 epochs) | Prevents overfitting to training data |
| **Data Augmentation** | Artificially expand training data | Augmentation types/strength | More robust features |
| **Batch Normalization** | Normalize layer activations | Momentum (0.9-0.99) | Faster training, regularization effect |

**Rule of thumb:** If training loss ≪ validation loss → overfitting → increase regularization.

## Hyperparameter Tuning: Finding Good Values

Hyperparameters must be set before training, but optimal values aren't known in advance. This requires systematic search.

### Tuning Strategies

<!-- component:table:tuning-strategies -->

| Strategy | How It Works | Pros | Cons | Best For |
|----------|--------------|------|------|----------|
| **Manual Tuning** | Try values, observe results, adjust | Builds intuition | Slow, not systematic | Learning, small projects |
| **Grid Search** | Exhaustive search over predefined grid | Thorough | Exponentially expensive | 2-3 hyperparameters, small models |
| **Random Search** | Sample randomly from ranges | More efficient than grid | No guarantee of finding best | 3-5 hyperparameters |
| **Bayesian Optimization** | Smart search using probabilistic model | Sample-efficient | Complex to implement | Expensive-to-evaluate models |
| **Hyperband** | Multi-armed bandit early stopping | Very efficient | Harder to implement | Large hyperparameter spaces |
| **Population-Based Training** | Evolve hyperparameters during training | Adaptive | Requires parallel training | Reinforcement learning, GANs |

**Practical recommendation:**
- Start: Manual tuning (1-2 experiments)
- Small project: Random search (20-50 trials)
- Production system: Bayesian optimization or Hyperband

### Validation Set: The Critical Rule

**Never tune hyperparameters on the test set—that would be cheating.**

<!-- component:example:proper-tuning-protocol -->

**Proper hyperparameter tuning workflow:**

```
1. Split data:
   Training (60%) | Validation (20%) | Test (20%)

2. Train models with different hyperparameters:
   Model A: learning_rate=0.001, layers=3 → Train on Training Set
   Model B: learning_rate=0.01, layers=5 → Train on Training Set
   Model C: learning_rate=0.0001, layers=7 → Train on Training Set

3. Evaluate on Validation Set:
   Model A: 85% accuracy
   Model B: 90% accuracy ✓ (best)
   Model C: 82% accuracy

4. Select Model B (best validation performance)

5. ONLY NOW evaluate on Test Set:
   Model B on Test Set: 89% accuracy

6. Report 89% as final performance estimate
```

**Why this matters:** Tuning on test set inflates performance estimates—you're optimizing for that specific test data, not generalizing.

**Cross-validation (advanced):** Split training+validation into K folds, train on K-1, validate on 1, rotate. More reliable than single validation split.

## Common Hyperparameter Combinations

Hyperparameters interact—good values for one depend on others.

<!-- component:example:hyperparameter-interactions -->

**Learning rate × batch size:**

- Large batch (512) → increase learning rate (0.01)
  - Larger batches give more stable gradients → can take bigger steps

- Small batch (32) → decrease learning rate (0.001)
  - Smaller batches give noisier gradients → need smaller steps for stability

**Depth × width:**

- Deep + narrow (50 layers × 128 neurons): Parameter-efficient, sequential reasoning
- Shallow + wide (5 layers × 1024 neurons): Parallel processing, faster inference

**Regularization × model capacity:**

- Large model (high capacity) → more regularization (dropout 0.5, weight decay 0.01)
- Small model (low capacity) → less regularization (dropout 0.2, weight decay 0.0001)

## Parameters vs. Hyperparameters: Summary Table

<!-- component:table:params-vs-hyperparams -->

| Aspect | Parameters | Hyperparameters |
|--------|------------|-----------------|
| **What are they?** | Internal model weights | Configuration choices |
| **Learned or set?** | Learned from data | Set before training |
| **Optimization method** | Gradient descent (backpropagation) | Manual tuning, grid search, Bayesian optimization |
| **Examples** | Neural network weights, biases | Learning rate, batch size, number of layers |
| **Number** | Millions to trillions | Dozens |
| **Where they live** | In the trained model file | In training configuration/code |
| **How they change** | Every training iteration | Between training runs |
| **Evaluation dataset** | Training set (learns from this) | Validation set (tunes using this) |

## Governance Implications

### 1. Compute Cost and Environmental Impact

Hyperparameter tuning multiplies training costs.

**Example cost multiplication:**

```
Single training run: $1,000
Grid search (3 LR × 3 batch sizes × 3 depths): 27 runs → $27,000
Random search (50 trials): $50,000
```

**Governance considerations:**
- **Carbon footprint:** 50 training runs = 50× emissions
- **Access equity:** Well-funded orgs can afford extensive tuning; academics/startups cannot
- **Efficiency research:** AutoML to reduce trial count, efficient search algorithms

### 2. Hyperparameter Transparency

**Problem:** Published papers often omit hyperparameters, making results irreproducible.

**Governance best practice:**
- Publish full hyperparameter configurations
- Share tuning logs (what was tried, what worked)
- Version control hyperparameters alongside code

**Impact:** Enables reproducibility, prevents wasted effort rediscovering known configurations.

### 3. Overfitting to Validation Set

**Subtle data leakage:** Extensive tuning on validation set leaks information.

<!-- component:example:validation-overfitting -->

**Scenario:**

```
Run 1: Val accuracy 85%
Run 2: Val accuracy 87%
Run 3: Val accuracy 88%
...
Run 50: Val accuracy 93%

Test accuracy: 84% (much worse than validation!)
```

**What happened:** After 50 tuning runs, you implicitly optimized for quirks of the validation set, not true generalization.

**Mitigation:**
- Use fewer tuning iterations
- Reserve separate "test-validation" set for final hyperparameter selection
- Report uncertainty ranges, not single "best" number

### 4. Hyperparameters as Model Card Documentation

Model cards (documentation for deployed models) should include hyperparameters.

**Why this matters for governance:**
- **Audit trail:** What configuration produced this model?
- **Fairness analysis:** Do certain hyperparameters encode bias? (e.g., class weights favoring majority class)
- **Update tracking:** Did performance change due to data or hyperparameter drift?

<!-- component:summary -->

## Key Takeaways

- **Parameters:** Learned internal weights (W, b in neural networks)—optimized via gradient descent from training data
- **Hyperparameters:** Configuration choices set before training (learning rate, batch size, architecture)—tuned via search on validation set
- Critical hyperparameters: Learning rate (most important), batch size, network architecture (depth/width), regularization (dropout, weight decay)
- Learning rate: Too low = slow convergence; too high = training instability
- Batch size: Small = noisy but regularizing; large = stable but memory-intensive
- Architecture choices define model capacity: depth (layers) × width (neurons per layer)
- Regularization prevents overfitting: dropout, weight decay, early stopping, data augmentation
- Tuning strategies: Manual → random search → Bayesian optimization (increasing sophistication)
- **Critical rule:** Tune on validation set, evaluate on test set (never tune on test—that's cheating!)
- Hyperparameters interact: learning rate scales with batch size, regularization scales with capacity
- Governance concerns: compute cost (tuning multiplies training expense), transparency (publish hyperparameters), validation overfitting, model documentation

**Bottom line:** Parameters are what the model learns (gradient descent finds them). Hyperparameters are how the model learns (you choose them). Confusing them leads to poor performance. Proper tuning requires validation sets, systematic search, and careful documentation—all critical for reproducible, auditable AI systems.

---

**Related concepts:** [Neural Networks Basics](/learn/terminology/neural-networks-basics) • [Training, Validation, Test Data](/learn/terminology/training-validation-test) • [Bias-Variance Tradeoff](/learn/terminology/bias-variance-tradeoff) • [Model Size and Scale](/learn/terminology/model-size-scale)
