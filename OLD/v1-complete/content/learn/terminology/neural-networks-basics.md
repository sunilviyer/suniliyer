---
type: concept
id: term-3
path: terminology
title: "Neural Networks Architecture Basics"
slug: neural-networks-basics
tldr: "Neural networks are mathematical functions built from layers of simple computational units (neurons) that learn patterns through adjusting weights. Despite brain-inspired terminology, they're statistical pattern matchers that transform inputs through weighted addition and activation functions to produce outputs."
category: "AI Terminology"

# Learning Path
learning_objectives:
  - "Understand the fundamental building blocks of neural networks: neurons, weights, biases, and activation functions"
  - "Distinguish between different network architectures (feedforward, CNNs, RNNs, transformers) and their appropriate use cases"
  - "Recognize how training works through backpropagation and gradient descent"
  - "Evaluate the limitations and failure modes critical for governance oversight"

# SEO
seo_keywords:
  - "neural networks explained"
  - "deep learning architecture"
  - "backpropagation"
  - "convolutional neural networks"
  - "transformers architecture"
  - "gradient descent"
  - "neural network training"
  - "AI explainability"
  - "black box AI"

# Knowledge Graph
related_concepts:
  - machine-learning-terminology
  - supervised-unsupervised
  - transformers-architecture

cross_path_refs:
  - path: history
    concepts:
      - deep-learning-explained
      - generative-ai-explained
      - large-language-models
  - path: risk
    concepts:
      - black-box-explainability
      - algorithmic-bias

example_refs:
  - alphafold
  - chatgpt

# Visual Components
components:
  - type: image_prompt
    id: hero
    prompt: "Technical illustration of a neural network architecture: multiple layers of interconnected nodes (neurons) with flowing connections between them, showing data transformation from input layer through hidden layers to output layer. Glowing connections represent active pathways. Clean, professional visualization with black/white/earth-tone color scheme. Show 3-4 distinct layers with 5-7 nodes per layer. Include subtle mathematical notation (weights, activation functions) in the background."

  - type: flowchart
    id: single-neuron-process
    label: "How a Single Neuron Computes"
    section: "The Fundamental Building Block: A Single Neuron"

  - type: table
    id: layer-types
    label: "Neural Network Layer Types and Functions"
    section: "Network Architecture: Layers Working Together"

  - type: table
    id: network-architectures
    label: "Comparison of Neural Network Architectures"
    section: "Architectural Variations: Different Tools for Different Jobs"

  - type: flowchart
    id: training-loop
    label: "The Training Loop Process"
    section: "How Networks Learn: The Training Process"

  - type: table
    id: data-requirements
    label: "Training Data Requirements by Task Complexity"
    section: "Data Dependency: Networks Learn What They See"

  - type: table
    id: failure-modes
    label: "Common Neural Network Failure Modes"
    section: "When Networks Fail: Predictable Vulnerabilities"

  - type: table
    id: explainability-techniques
    label: "Explainability Approaches and Limitations"
    section: "The Black Box Problem: Why Explanation Is Hard"

  - type: checklist
    id: governance-questions
    label: "Essential Governance Questions for Neural Network Systems"
    section: "Governance Implications: Questions That Matter"

# Metadata
word_count: 2547
source_articles:
  - "article-7-deep-learning-decoded-neural-networks-for-non-engi.md"
processed_date: 2025-12-20
---

<!-- component:image_prompt:hero -->

## Introduction

When most people hear "neural network," they imagine something like a human brain—billions of neurons firing in complex patterns, somehow producing intelligence. The reality is simultaneously more mundane and more remarkable. Neural networks are mathematical functions: they take numbers as inputs, perform millions of arithmetic operations on those numbers, and produce numbers as outputs. The "intelligence" emerges not from any brain-like quality, but from the sheer scale of computation and the patterns encoded in the weights connecting computational units.

This distinction matters for AI governance. Neural networks don't "think," "understand," or "reason" in any meaningful sense. They perform pattern matching at extraordinary scale. Understanding their actual mechanics—how they transform inputs to outputs, how they learn patterns from data, and how they fail—is essential for effective oversight. This concept card explains the fundamental architecture of neural networks, from single computational units to massive deep learning systems with billions of parameters.

Whether you're evaluating vendor claims, assessing risk, or writing policy, you need a clear mental model of what neural networks actually are: powerful statistical tools that excel at finding patterns in data, limited by their dependence on that data, and fundamentally difficult to explain.

---

## The Fundamental Building Block: A Single Neuron

Neural network architecture starts with a single artificial neuron—the simplest possible computational unit. Understanding this building block makes everything else comprehensible.

**What a neuron does:**

<!-- component:flowchart:single-neuron-process -->
1. **Receives inputs**: Multiple numerical values arrive (e.g., customer age = 35, income = $75,000)
2. **Applies weights**: Each input is multiplied by a weight representing its importance
   - Age × 0.3 = 10.5
   - Income × 0.0001 = 7.5
3. **Sums weighted inputs**: Adds all weighted values together (10.5 + 7.5 = 18)
4. **Adds bias**: A baseline number is added (18 + (-15) = 3)
5. **Applies activation function**: A mathematical function produces the final output
   - Simple example: If positive, output 1; if negative, output 0
   - Result: 3 is positive → output 1

That's it. A single artificial neuron performs **weighted addition followed by a nonlinear transformation**. No magic, no thinking—just arithmetic.

**The components explained:**

**Weights**: Numbers that determine how much each input influences the output. Large positive weights mean the input strongly pushes toward a positive output. Large negative weights push toward negative outputs. Weights near zero mean the input has little effect. During training, these weights are adjusted to produce better predictions.

**Bias**: A constant added to shift the activation threshold. It allows the neuron to activate even when all inputs are zero, or to remain inactive even with positive inputs. Think of it as the neuron's "default tendency."

**Activation function**: A mathematical function that introduces nonlinearity. Without activation functions, stacking many layers would still produce only linear relationships (a useless limitation). Common activation functions include:
- **Sigmoid**: Squashes output to range 0-1 (useful for probabilities)
- **ReLU (Rectified Linear Unit)**: Outputs the input if positive, zero if negative (most common in modern networks)
- **Tanh**: Squashes output to range -1 to 1
- **Softmax**: Converts multiple outputs to probabilities that sum to 1 (used in output layers)

The choice of activation function affects what patterns the network can learn and how easily it trains.

**Governance note**: When vendors describe "neurons" and "brain-like processing," remember this reality—it's multiplication, addition, and simple mathematical functions. The complexity comes from scale and interconnection, not from individual unit sophistication.

---

## Network Architecture: Layers Working Together

One neuron can only make simple decisions—essentially drawing a single line through data to separate categories. The power of neural networks comes from connecting many neurons in layers, allowing the system to detect complex patterns.

**Layer structure:**

<!-- component:table:layer-types -->
| Layer Type | Function | Example Processing (Image Recognition) |
|------------|----------|----------------------------------------|
| **Input Layer** | Receives raw data | Pixel values for each tiny square in an image |
| **Hidden Layer 1** | Detects low-level features | Edges (where dark and light pixels meet) |
| **Hidden Layer 2** | Detects mid-level features | Shapes (circles, lines, curves formed by edges) |
| **Hidden Layer 3** | Detects high-level features | Combinations (circle on top of line → digit "9") |
| **Output Layer** | Produces final prediction | Probability for each possible digit (0-9) |

**How information flows:**

Each neuron in a layer receives inputs from all neurons in the previous layer (in fully connected networks). It performs its weighted addition and activation, then passes its output to all neurons in the next layer. This creates a cascade of transformations:

Raw data → Simple features → Complex features → Highly complex patterns → Final prediction

**The "hidden" in hidden layers:**

Layers between input and output are called "hidden" because their outputs aren't directly visible or interpretable. They're intermediate calculations that build progressively complex representations. When a network correctly identifies a cat, we can verify the output ("cat" = correct), but we can't easily interpret what the hidden layers are detecting—this is the beginning of the "black box" problem.

**Width vs. depth:**

- **Width**: How many neurons are in each layer (more neurons = more capacity to detect patterns within that level of abstraction)
- **Depth**: How many layers the network has (more layers = ability to build higher levels of abstraction)

Modern trends favor deep networks (many layers) over wide networks (many neurons per layer), though both dimensions matter. The term "deep learning" literally means neural networks with many hidden layers.

---

## What Makes a Network "Deep"?

**Deep learning = neural networks with many hidden layers.** That's the entire distinction.

Early neural networks (1980s-1990s) had 1-2 hidden layers. Modern deep learning systems have dozens, hundreds, or even thousands of layers. More layers allow hierarchical feature learning—each layer builds on the abstractions created by the layer before.

**Depth and capability:**

| Depth | Typical Capability | Example Systems |
|-------|-------------------|-----------------|
| 1-2 layers | Simple pattern recognition | Early perceptrons, simple classifiers |
| 5-10 layers | Moderate complexity tasks | Image classification (AlexNet, early CNNs) |
| 50-100 layers | High complexity tasks | Advanced image recognition (ResNet), complex NLP |
| 1000+ layers | Extremely complex tasks | Large language models (GPT-4, Claude) |

**Why more depth helps:**

- **Hierarchical abstraction**: Low layers detect simple patterns (edges), middle layers combine them (shapes), deep layers recognize complex concepts (objects, scenes, meanings)
- **Efficiency**: Deep networks can represent complex functions with fewer total parameters than shallow-but-wide networks
- **Compositionality**: Real-world patterns are often compositional—deep networks naturally mirror this structure

**Why more depth creates challenges:**

- **Vanishing gradients**: During backpropagation, error signals can shrink exponentially as they pass backward through layers, making early layers learn very slowly or not at all
- **Computational cost**: More layers mean more computation for both training and inference
- **Overfitting risk**: Very deep networks can memorize training data rather than learning generalizable patterns
- **Training difficulty**: Deeper networks require more sophisticated initialization, normalization, and optimization techniques to train successfully

Modern techniques (residual connections, batch normalization, careful initialization) help train very deep networks, enabling the current deep learning revolution.

**Governance implication**: Deeper networks often mean more data requirements, more computational costs, greater explainability challenges, and more potential for unexpected behaviors. When evaluating AI systems, ask about network depth and how it was chosen.

---

## How Networks Learn: The Training Process

Before training, a neural network is useless—its weights are random numbers producing garbage predictions. After training, those weights encode patterns that make useful predictions. Training is the process of adjusting billions of weights to minimize prediction errors.

**The training loop:**

<!-- component:flowchart:training-loop -->
1. **Initialize weights**: Start with random values (small numbers, carefully distributed)
2. **Forward pass**: Send training data through the network, get a prediction
3. **Calculate loss**: Compare prediction to correct answer using a loss function (measures "how wrong")
4. **Backward pass (backpropagation)**: Calculate how much each weight contributed to the error
5. **Update weights**: Adjust weights slightly to reduce the error (using gradient descent)
6. **Repeat**: Process millions of training examples in batches, cycling through the data multiple times (epochs)

Over thousands or millions of iterations, weights gradually converge to values that minimize prediction errors across the training dataset.

**Backpropagation explained:**

Backpropagation is the algorithm that calculates how much each weight contributed to the error. It uses calculus (the chain rule) to propagate error backward through the network, layer by layer. For each weight, it calculates the **gradient**—the direction and magnitude that changing the weight would change the error.

Without backpropagation, training neural networks would be impossible at scale. It's the mathematical breakthrough that enabled modern deep learning.

**Gradient descent explained:**

Once we know the gradient (how each weight affects error), we need an algorithm to update weights. Gradient descent is that algorithm.

**Intuition**: Imagine you're blindfolded on a hilly landscape, trying to find the lowest valley. You can feel the slope under your feet. Strategy: take small steps downhill. Eventually you'll reach a low point.

**In neural networks**: The "landscape" is the relationship between weight values and prediction errors. The "slope" is the gradient. The network takes small steps (weight updates) in the direction that reduces error.

**Learning rate**: How big each step is. Too small = training takes forever. Too large = you might overshoot the minimum and never converge.

**Variants**: Standard gradient descent updates weights after seeing all training data. **Stochastic gradient descent (SGD)** updates after each example (faster but noisier). **Mini-batch gradient descent** updates after small batches (good trade-off). Modern optimizers (Adam, RMSprop) use adaptive learning rates that adjust during training.

**When training succeeds**: Weights converge to values that produce good predictions on both training data and new data (generalization).

**When training fails**:
- **Overfitting**: Network memorizes training data but performs poorly on new data
- **Underfitting**: Network fails to learn patterns even in training data
- **Local minima**: Weights converge to a suboptimal solution
- **Vanishing/exploding gradients**: Gradients become too small or too large to train effectively

Modern training techniques address these challenges through regularization, dropout, batch normalization, learning rate schedules, and early stopping.

**Governance implication**: Training quality depends entirely on data quality and training process design. Ask vendors: What training data was used? How was training validated? What prevented overfitting?

---

## Data Dependency: Networks Learn What They See

Neural networks learn patterns from data—enormous amounts of data. The quality and quantity of training data determines what the network can learn, what biases it acquires, and what blind spots it develops.

**Data requirements scale with task complexity:**

<!-- component:table:data-requirements -->
| Task | Approximate Training Data Needed | Example Scale |
|------|----------------------------------|---------------|
| Simple classification | Thousands of examples | Spam detection (10,000+ emails) |
| Image recognition | Millions of images | ImageNet (14 million labeled images) |
| Speech recognition | Thousands of hours | Common Voice (10,000+ hours of audio) |
| Language models (GPT-4 scale) | Trillions of words | Much of the public internet |

**What the data teaches:**

The network has no knowledge beyond its training data. Every pattern, bias, gap, and error in the data becomes encoded in the model:

- **Patterns in data → Patterns in weights**: If training data shows certain correlations, the network learns them regardless of whether they're meaningful or spurious
- **Biases in data → Biases in model**: If training data underrepresents certain groups or contains discriminatory patterns, the model inherits these biases
- **Gaps in data → Blind spots in model**: If certain scenarios, edge cases, or populations aren't in training data, the model can't handle them
- **Errors in data → Errors in predictions**: Mislabeled examples or data quality issues propagate into model behavior

**This is why data governance is inseparable from AI governance.** The network doesn't know what's "right"—it only knows what's in the training data.

**Critical governance questions:**
- Where did the training data come from?
- Is it representative of the population the system will be used on?
- What quality checks were performed?
- Are there known biases or gaps?
- How was data labeled, and by whom?
- Is there ongoing monitoring for data drift (when real-world data distributions change)?

---

## Architectural Variations: Different Tools for Different Jobs

While all neural networks share the same basic building blocks (neurons, layers, weights), different architectures are optimized for different data types. Understanding the major architectures helps evaluate whether a system uses appropriate tools.

**Comparison of architectures:**

<!-- component:table:network-architectures -->
| Architecture | Data Type | Key Innovation | Good For | Example Applications | Governance Concerns |
|--------------|-----------|----------------|----------|----------------------|---------------------|
| **Feedforward** | Structured tabular data | Simple layer-by-layer processing | Classification, regression | Credit scoring, risk prediction | Interpretability easier but still limited |
| **Convolutional (CNN)** | Images, spatial data | Local pattern detection via filters | Image/video analysis | Facial recognition, medical imaging, content moderation | Bias in visual data (skin tone, demographics) |
| **Recurrent (RNN)** | Sequential data | Memory of previous inputs | Time series, text, speech | Stock prediction, early NLP | Replaced by transformers for most tasks |
| **Transformer** | Language, increasingly all data | Attention mechanisms | Language understanding/generation | GPT-4, Claude, translation, chatbots | Hallucinations, bias, copyright concerns |

**Feedforward networks:**

Information flows in one direction: input → hidden layers → output. No loops, no memory. Each decision is independent.

**Best for**: Structured data with clear features (customer demographics, sensor readings, financial indicators).

**Limitations**: Can't handle sequential dependencies or spatial patterns. Can't remember previous inputs.

**Convolutional Neural Networks (CNNs):**

Specialized layers scan across input data, detecting local patterns regardless of position. Instead of processing every pixel independently, CNNs use small filters (e.g., 3×3 pixel windows) that slide across the entire image, detecting edges, textures, and shapes.

**Best for**: Images, video, any data with spatial structure.

**How they work**: Early layers detect edges, middle layers detect shapes, deep layers detect objects and scenes. The hierarchy mirrors how increasing abstraction builds up from simple visual features.

**Governance importance**: CNNs power facial recognition, content moderation, medical imaging, autonomous vehicles—high-stakes applications with significant bias and safety risks. Biases in training images (overrepresenting certain skin tones, ages, genders) directly translate to model performance disparities.

**Recurrent Neural Networks (RNNs):**

Connections loop back, allowing the network to maintain "memory" of previous inputs. Each step's output feeds into the next step's input.

**Best for**: Sequential data where order matters—text, speech, time series.

**Limitations**: Struggle with long sequences because information from early inputs "fades" over time (vanishing gradients). Mostly replaced by transformers for language tasks.

**Transformers:**

Attention mechanisms allow the network to focus on relevant parts of the input, regardless of position. Instead of processing sequentially, transformers process entire inputs simultaneously, with learned attention weights determining which parts are relevant to each other.

**Best for**: Language tasks, and increasingly everything else.

**Example systems**: GPT-4, Claude, BERT, ChatGPT—virtually all modern large language models.

**Why they matter for governance**: Transformers power the systems raising the most novel governance questions—chatbots, content generation, code assistants, misinformation risks, copyright concerns.

**Governance note**: Ask vendors which architecture they use and why. Mismatched architecture (e.g., using CNNs for non-visual data) suggests poor engineering. Novel architectures may indicate cutting-edge work or untested experimentation—both have implications.

---

## When Networks Fail: Predictable Vulnerabilities

Neural networks fail in predictable ways. Understanding these failure modes is crucial for risk assessment.

**Common failure modes:**

<!-- component:table:failure-modes -->
| Failure Mode | Description | Example | Mitigation Strategies |
|--------------|-------------|---------|----------------------|
| **Brittleness** | Small input changes cause dramatic output changes | Changing a few pixels imperceptibly makes classifier misidentify object | Adversarial training, input validation, human oversight |
| **Distribution shift** | Performance degrades on data different from training | Medical AI trained on one hospital fails at another | Regular retraining, monitoring for drift, diverse training data |
| **Overconfidence** | High confidence predictions even when wrong | 99% confident in completely incorrect answer | Calibration techniques, uncertainty quantification, confidence thresholds |
| **Lack of common sense** | Learns correlations without causal understanding | Learns umbrellas correlate with rain, not that rain causes umbrella use | Human-in-the-loop for critical decisions, sanity checks |
| **Data dependency** | Can only handle what was in training data | Model trained before pandemic fails during pandemic | Ongoing monitoring, continuous learning, explicit scope limits |
| **Spurious correlations** | Learns irrelevant patterns that happen to correlate | Identifies tanks by sunny weather in photos (training artifact) | Careful data curation, robustness testing, diverse data sources |

**Why these failures matter for governance:**

- **Safety**: Brittle systems can fail catastrophically in real-world deployment
- **Fairness**: Distribution shift often means worse performance for underrepresented groups
- **Reliability**: Overconfident wrong answers are worse than acknowledged uncertainty
- **Accountability**: Common sense failures reveal that systems don't "understand"—they pattern match
- **Risk management**: Knowing failure modes allows targeted testing and appropriate human oversight

**Testing for failures:**

Effective governance requires proactive testing for these known vulnerabilities:
- Test on out-of-distribution data (data unlike training examples)
- Test edge cases and boundary conditions
- Test across demographic subgroups to detect performance disparities
- Test with adversarial inputs (deliberate attempts to fool the system)
- Monitor performance over time to detect drift

**Governance implication**: Don't ask "does it work?" Ask "when and how does it fail?" Assume failure modes exist and design systems with failures in mind.

---

## The Black Box Problem: Why Explanation Is Hard

Deep neural networks are often called "black boxes"—even their creators can't fully explain why they make specific predictions. A network with billions of parameters doesn't have human-interpretable rules; it has billions of numbers that collectively produce outputs through millions of arithmetic operations.

**Why explainability matters for governance:**

- **Regulatory requirements**: GDPR Article 22 and similar laws require explanations for automated decisions affecting individuals
- **Bias detection**: How do you know if the model is discriminating if you can't see its reasoning?
- **Error diagnosis**: When the model fails, how do you fix it without understanding the failure mechanism?
- **Trust and adoption**: Users and stakeholders resist systems they can't understand
- **Accountability**: If harm occurs, who is responsible for decisions no one can explain?

**Explainability approaches and their limitations:**

<!-- component:table:explainability-techniques -->
| Technique | What It Provides | Limitations | Use Case |
|-----------|------------------|-------------|----------|
| **Feature importance** | Which inputs mattered most | Doesn't explain *how* they mattered or interactions | Identifying relevant variables |
| **Attention visualization** | What the model "focused on" | Attention ≠ explanation; can be misleading | Understanding transformer behavior |
| **Counterfactual explanations** | What changes would flip the decision | May not reflect true model reasoning | Individual decision appeals |
| **Simpler surrogate models** | Interpretable approximation of black box | Approximation may be inaccurate or oversimplified | High-level understanding |
| **Example-based explanations** | Similar training examples | Similarity ≠ causation; cherry-picking risk | Building intuition |
| **Saliency maps (images)** | Which pixels influenced classification | Often highlight irrelevant areas | Visual debugging |
| **LIME/SHAP** | Local feature contributions | Local ≠ global; unstable across similar inputs | Individual prediction analysis |

None of these fully solves the problem. They provide **approximations of explanations**, not true explanations of the model's internal reasoning (because the model doesn't "reason"—it performs billions of mathematical operations).

**Fundamental tradeoff:**

Generally, more powerful models are less interpretable. Simple decision trees are fully interpretable but limited. Deep neural networks are extraordinarily powerful but fundamentally opaque.

**Governance approaches when full explanation is impossible:**

1. **Human oversight**: Require human review for high-stakes decisions
2. **Scope limitations**: Only deploy where explainability isn't critical or where statistical evidence of fairness suffices
3. **Transparency about limitations**: Disclose that explanations are approximations
4. **Rigorous testing**: If you can't explain why it works, prove empirically that it works fairly and safely
5. **Simpler models**: Consider whether interpretable models (decision trees, linear models) would suffice

**Governance implication**: Don't accept vendor claims of "explainable AI" at face value. Ask: What level of explanation can you actually provide? What are the limitations? Is that sufficient for our risk tolerance and regulatory requirements?

---

## Governance Implications: Questions That Matter

You don't need to implement neural networks, but you need to ask the right questions when evaluating, overseeing, or regulating them.

**Essential governance questions:**

<!-- component:checklist:governance-questions -->
- [ ] **Architecture appropriateness**: What type of neural network is used? Is it appropriate for the data type and task?
- [ ] **Architecture justification**: Why was this architecture chosen over alternatives? What were the tradeoffs?
- [ ] **Model size and complexity**: How many layers and parameters? Was this complexity necessary, or is it overengineered?
- [ ] **Training data source**: Where did training data come from? Who collected and labeled it?
- [ ] **Training data representativeness**: Is training data representative of deployment conditions and affected populations?
- [ ] **Known data biases**: What biases, gaps, or limitations exist in the training data?
- [ ] **Training validation**: How was the training process validated to prevent overfitting?
- [ ] **Performance metrics**: What metrics measure performance? Are they appropriate for the use case?
- [ ] **Subgroup performance**: How does performance vary across demographic groups, edge cases, and rare scenarios?
- [ ] **Out-of-distribution handling**: What happens with inputs unlike training data?
- [ ] **Confidence calibration**: Are the model's confidence scores accurate and meaningful?
- [ ] **Known failure modes**: What are the documented failure modes? How are they mitigated?
- [ ] **Adversarial robustness**: How brittle is the model to adversarial inputs or small input perturbations?
- [ ] **Drift detection**: How do you detect when real-world data distributions shift away from training data?
- [ ] **Explainability tools**: What explainability techniques are available? What are their limitations?
- [ ] **Human oversight**: Where is human review required? What are the escalation criteria?
- [ ] **Ongoing monitoring**: How is model performance monitored in deployment? What triggers retraining?
- [ ] **Update procedures**: How are model updates tested and deployed? What's the rollback process?

---

## Key Takeaways

- **Neural networks are mathematical functions**, not brain-like intelligence—they perform pattern matching through weighted addition and nonlinear transformations

- **A single neuron** receives inputs, applies weights, sums them, adds a bias, and passes the result through an activation function—simple arithmetic at scale

- **Networks gain power through layers**—input layers receive data, hidden layers detect progressively complex patterns, output layers produce predictions

- **"Deep" learning simply means many layers**, allowing hierarchical feature learning from simple patterns to complex concepts

- **Training adjusts billions of weights** through repeated cycles of forward propagation (make prediction), error calculation (measure wrongness), backpropagation (calculate weight contributions), and gradient descent (update weights to reduce error)

- **Different architectures serve different purposes**: feedforward for structured data, CNNs for images, RNNs for sequences, transformers for language

- **Networks learn only what's in their training data**—biases, gaps, and errors in data become biases, gaps, and errors in the model

- **Predictable failure modes include** brittleness, distribution shift, overconfidence, lack of common sense, and spurious correlation learning

- **Black box problem is fundamental**—we can describe how networks work mechanically but can't fully explain specific predictions; explainability techniques provide approximations, not true explanations

- **Effective governance requires understanding these limitations**, testing for known failure modes, ensuring appropriate human oversight, and not accepting claims of capability at face value

---

## Further Reading

- Nielsen, M. (2015). *Neural Networks and Deep Learning* - Free online book with excellent intuitive explanations
- Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning* - Comprehensive technical textbook
- 3Blue1Brown YouTube series on neural networks - Outstanding visual explanations of backpropagation and gradient descent
- Karpathy, A. *A Recipe for Training Neural Networks* - Practical insights from training at scale
- Rudin, C. (2019). *Stop Explaining Black Box Models for High Stakes Decisions* - Argument for interpretable models over post-hoc explanations
- Lipton, Z. (2018). *The Mythos of Model Interpretability* - Critical examination of explainability claims
- Goodman, B. & Flaxman, S. (2017). *European Union Regulations on Algorithmic Decision-Making and a "Right to Explanation"* - Governance perspective on explainability requirements

---

*Concept 3 of 14 in the Terminology learning path*

*Understanding neural network architecture is essential for evaluating AI systems, assessing risks, and designing effective governance frameworks. These systems are powerful pattern matchers, not reasoning entities—governance must account for their actual capabilities and inherent limitations.*
