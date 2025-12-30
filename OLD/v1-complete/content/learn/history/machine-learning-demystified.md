---
type: concept
id: 6
path: history
title: Machine Learning Demystified
slug: machine-learning-demystified
tldr: Machine learning enables systems to improve from experience rather than explicit programming. Four fundamental approaches—supervised learning (labeled data), unsupervised learning (pattern discovery), semi-supervised learning (partial labeling), and reinforcement learning (trial and error)—each have distinct use cases, strengths, limitations, and governance implications. Understanding how systems learn reveals where bias, failures, and unexpected behaviors originate.
category: AI Fundamentals

# Learning Path
learning_objectives:
  - Distinguish between four fundamental machine learning approaches and their use cases
  - Understand how training data quality and labeling affect system behavior
  - Recognize governance risks specific to each learning method
  - Evaluate vendor claims about machine learning capabilities
  - Apply learning method knowledge to risk assessment and system selection

# SEO
seo_keywords:
  - machine learning
  - supervised learning
  - unsupervised learning
  - reinforcement learning
  - semi-supervised learning
  - training data
  - labeled data
  - ml algorithms
  - learning methods
  - ai training

# Knowledge Graph
related_concepts:
  - deep-learning-explained
  - foundation-models
  - data-behind-ai
  - ai-vs-automation
  - large-language-models

cross_path_refs:
  - path: terminology
    concepts:
      - training-vs-inference
      - supervised-learning
      - unsupervised-learning
      - reinforcement-learning
      - transfer-learning
  - path: risk
    concepts:
      - training-data-bias
      - data-quality-risk
      - model-drift
      - reward-hacking

example_refs:
  - spam-filter-supervised
  - customer-segmentation-unsupervised
  - medical-image-semi-supervised
  - warehouse-robot-reinforcement
  - chatgpt-transformer

# Visual Components
components:
  - type: image_prompt
    id: hero
    prompt: "Machine learning visualization, neural network learning from data, training process illustration, data flowing into AI model with feedback loops, educational diagram style, algorithms processing information, gradient descent visualization, modern tech illustration, blue and purple color scheme"

  - type: table
    id: learning-methods-comparison
    label: "Four Machine Learning Approaches"
    section: "Overview of Learning Methods"

  - type: table
    id: supervised-learning-examples
    label: "Supervised Learning Use Cases"
    section: "Supervised Learning"

  - type: table
    id: unsupervised-learning-examples
    label: "Unsupervised Learning Applications"
    section: "Unsupervised Learning"

  - type: table
    id: reinforcement-learning-examples
    label: "Reinforcement Learning Scenarios"
    section: "Reinforcement Learning"

  - type: template
    id: spam-filter-example
    label: "Spam Filter Training Example"
    section: "Supervised Learning"
    template_link: /examples/spam-filter-supervised-learning

  - type: template
    id: customer-segmentation-example
    label: "Customer Segmentation Example"
    section: "Unsupervised Learning"
    template_link: /examples/customer-segmentation-clustering

  - type: template
    id: medical-labeling-example
    label: "Medical Image Labeling Example"
    section: "Semi-Supervised Learning"
    template_link: /examples/medical-image-semi-supervised

  - type: template
    id: warehouse-robot-example
    label: "Warehouse Robot Optimization"
    section: "Reinforcement Learning"
    template_link: /examples/warehouse-robot-reinforcement

  - type: table
    id: transformer-capabilities
    label: "Transformer Architecture Capabilities"
    section: "Transformers and Modern AI"

  - type: table
    id: rpa-vs-robotics
    label: "RPA vs Physical Robotics"
    section: "RPA vs Physical Robotics"

  - type: checklist
    id: vendor-evaluation
    label: "Machine Learning Vendor Evaluation"
    section: "Vendor Evaluation Questions"

# Metadata
word_count: 2434
source_articles:
  - how-machines-learn-training-methods-and-automation-explained.md
processed_date: 2025-12-19
---

## Introduction

When an AI vendor tells you their system "learned" from millions of examples, what does that actually mean? When someone mentions their tool uses "reinforcement learning" versus "supervised learning," how should that affect your risk assessment?

For governance professionals evaluating AI systems, understanding how machines learn isn't just technical background—it's the foundation for recognizing where problems originate:

- **A system trained with supervised learning on biased historical data will make biased decisions** (it learned that bias as a pattern)
- **A reinforcement learning system optimizes for whatever you measure** (if you measure the wrong thing, it optimizes toward harm)
- **Unsupervised learning finds patterns** (but can't distinguish meaningful patterns from spurious correlations)
- **Semi-supervised learning amplifies whatever biases exist in the small labeled set** (across the entire dataset)

The learning method reveals risk profiles. This concept card explains the four fundamental approaches to machine learning, what they're good at, where they fail, and what governance questions to ask for each.

---

## Overview of Learning Methods

Machine learning systems learn from experience rather than explicit programming. Four fundamental approaches dominate:

| Method | Training Data | How It Learns | Common Applications | Key Governance Risk |
<!-- component:table:learning-methods-comparison -->
|--------|--------------|---------------|-------------------|-------------------|
| **Supervised Learning** | Labeled examples (input + correct output) | Learns patterns mapping inputs to known outputs | Classification, regression, spam filtering, credit approval | Bias in historical labels becomes learned behavior |
| **Unsupervised Learning** | Unlabeled data (inputs only) | Discovers hidden patterns, clusters, relationships | Customer segmentation, anomaly detection, recommendation systems | Hard to validate correctness; may find meaningless correlations |
| **Semi-Supervised Learning** | Small labeled set + large unlabeled set | Learns from labeled examples, applies to unlabeled data | Medical image analysis, content moderation, fraud detection | Small labeled set biases propagate across all predictions |
| **Reinforcement Learning** | Environment + reward signal | Trial and error, optimizing for rewards | Game playing, robotics, resource optimization, trading | Optimizes exclusively for measured reward (reward hacking risk) |

**Why this matters for governance:**
- Different learning methods have different failure modes
- Training data requirements vary dramatically (labeled data is expensive)
- Explainability differs by method (supervised > unsupervised/reinforcement)
- Regulatory requirements may depend on learning approach

---

## Supervised Learning: Training with Answer Keys

### How It Works

Imagine onboarding a new HR coordinator by showing them 10,000 past hiring decisions: "This candidate was hired. This one wasn't. This one was hired. This one wasn't." Over time, they'd recognize patterns: certain qualifications, experiences, or signals that predicted hiring outcomes.

That's supervised learning. The AI trains on labeled examples where the correct answer is known. The system learns a function that maps inputs (candidate qualifications) to outputs (hire/don't hire) by finding patterns in the labeled training data.

**The training process:**
1. Provide many examples of (input, correct output) pairs
2. System makes predictions on training examples
3. Measure error between predictions and correct outputs
4. Adjust internal parameters to reduce error
5. Repeat until predictions are accurate enough

### Common Applications

| Application | Input | Output | Training Data Source |
<!-- component:table:supervised-learning-examples -->
|-------------|-------|--------|---------------------|
| **Spam filtering** | Email text, metadata | Spam / Not Spam | Millions of emails labeled by users |
| **Credit approval** | Applicant financial data | Approve / Deny | Historical applications with outcomes |
| **Medical diagnosis** | Patient symptoms, test results | Disease / No disease | Cases labeled by expert physicians |
| **Fraud detection** | Transaction details | Fraudulent / Legitimate | Known fraud cases + legitimate transactions |
| **Image classification** | Image pixels | Object category | Images manually labeled by humans |
| **Predictive maintenance** | Sensor readings | Failure / Normal | Equipment history with known failures |

<!-- component:template:spam-filter-example -->
**Example: Spam filter learning**
Your email spam filter trained on millions of emails labeled "spam" or "not spam." It learned that certain words ("lottery," "Nigerian prince"), patterns (excessive caps, many links), and sender characteristics correlate with spam. When new email arrives, it applies learned patterns to predict spam probability.

### Strengths

- **Well-understood**: Decades of research, mature algorithms
- **Measurable performance**: Accuracy quantifiable against test set
- **Broad applicability**: Works for classification and regression tasks
- **Commercial maturity**: Production-ready tools and frameworks

### Limitations and Failure Modes

**Data requirements:**
- Requires large amounts of labeled data
- Labeling is expensive (expert time for medical images, legal documents)
- Data must cover full range of scenarios the system will encounter

**Bias amplification:**
- Learns whatever patterns exist in training data
- If historical hiring favored certain universities, system learns that as valid pattern
- Bias in labels becomes bias in predictions
- System doesn't distinguish legitimate correlations from discriminatory ones

**Distribution shift:**
- Performs poorly on inputs significantly different from training data
- If trained on data from 2020, may fail on 2024 data if patterns changed
- World changes, training data becomes stale

**Overfitting:**
- May memorize training data rather than learn generalizable patterns
- Performs well on training data but poorly on new examples

### Governance Implications

**Critical questions for supervised learning systems:**
- **What data was used for training?** (Source, time period, demographic coverage)
- **How were labels created?** (Human experts? Automated? Crowdsourced?)
- **What biases exist in historical data?** (Who is underrepresented? What outcomes were historically unfair?)
- **How is performance measured?** (Accuracy? On what population?)
- **How do you handle distribution shift?** (When does the model get retrained?)
- **What happens when system encounters novel situations?** (Fallback procedures?)

**Regulatory considerations:**
- EU AI Act requires training data documentation for high-risk systems
- Bias testing mandatory in some jurisdictions (NYC AI hiring law)
- Explainability requirements may be challenging for complex models
- Data provenance matters for IP and privacy compliance

---

## Unsupervised Learning: Finding Patterns Without Instructions

### How It Works

Imagine giving a new analyst your entire customer database and saying, "Find me the patterns." No labels, no answer key—just data. They might discover that customers naturally group into segments based on purchasing behavior, geography, or engagement patterns.

That's unsupervised learning. The AI identifies clusters, relationships, and structures on its own without being told what to look for.

**Common unsupervised techniques:**
- **Clustering**: Group similar items together (customer segmentation)
- **Dimensionality reduction**: Find underlying factors in complex data
- **Anomaly detection**: Identify unusual patterns (fraud, equipment failure)
- **Association rules**: Discover relationships ("customers who bought X also bought Y")

### Common Applications

| Application | What System Discovers | Business Value |
<!-- component:table:unsupervised-learning-examples -->
|-------------|---------------------|----------------|
| **Customer segmentation** | Natural customer groups based on behavior | Targeted marketing, personalized experiences |
| **Anomaly detection** | Unusual patterns in transactions, network traffic | Fraud detection, cybersecurity, quality control |
| **Recommendation systems** | Similar users, similar products | Product recommendations, content discovery |
| **Market basket analysis** | Products frequently purchased together | Store layout, cross-selling, promotions |
| **Topic modeling** | Themes in large document collections | Content organization, trend analysis |
| **Network analysis** | Community structures in social/organizational networks | Influence mapping, organizational design |

<!-- component:template:customer-segmentation-example -->
**Example: Customer segmentation**
A retail company runs unsupervised clustering on customer purchase history without any predefined categories. The system discovers five natural segments: "frequent small purchases," "seasonal bulk buyers," "discount seekers," "premium brand loyal," and "occasional large purchases." Marketing can now target each segment differently without having manually defined these categories.

### Strengths

- **No labeling required**: Works with unlabeled data (abundant and cheap)
- **Discovers unexpected patterns**: Finds relationships humans might miss
- **Scalable**: Can process vast amounts of data
- **Exploratory**: Useful for understanding data structure before building supervised models

### Limitations and Failure Modes

**No ground truth:**
- No "correct answer" to validate against
- System may find meaningless correlations that look like patterns
- Human interpretation required to determine if discovered patterns are meaningful

**Interpretation challenges:**
- Clusters may not correspond to useful business categories
- Results can be unstable (small data changes = different clusters)
- Choosing number of clusters often arbitrary

**Spurious patterns:**
- May find correlations that are coincidental, not causal
- Can amplify noise if not carefully tuned
- Sensitive to how "similarity" is defined

**Reproducibility:**
- Results can vary with algorithm initialization
- Different runs may produce different patterns
- Harder to audit and verify than supervised learning

### Governance Implications

**Critical questions for unsupervised learning systems:**
- **How are results validated?** (What confirms patterns are meaningful, not noise?)
- **Who interprets the findings?** (Human expertise required to assess business relevance)
- **How stable are the results?** (Do patterns persist over time and data changes?)
- **What decisions depend on these patterns?** (High-stakes decisions need extra validation)
- **Can you explain why items grouped together?** (Interpretability for stakeholders)

**Regulatory considerations:**
- Harder to audit than supervised learning (no clear "correct" output)
- May require human-in-the-loop validation for high-stakes uses
- Transparency about uncertainty essential
- Documentation of methodology and interpretation process

---

## Semi-Supervised Learning: Practical Compromise

### How It Works

Labeling data is expensive. Having doctors review and label 100,000 medical images could take months and cost a fortune. But what if you could label just 1,000 images and have the AI learn patterns that apply to the remaining 99,000?

That's semi-supervised learning—a practical compromise between supervised and unsupervised approaches.

**The process:**
1. Hand-label a small portion of data (expensive but feasible)
2. Train initial model on labeled subset
3. Use model to predict labels for unlabeled data
4. Retrain using both original labels and predicted labels
5. Iteratively refine predictions across full dataset

### Common Applications

- **Medical image analysis**: Label small set of X-rays/MRIs, apply to large archives
- **Content moderation**: Label examples of violating content, apply to massive user uploads
- **Fraud detection**: Label known fraud cases, identify similar patterns in vast transaction history
- **Document classification**: Label representative documents, classify entire repositories
- **Speech recognition**: Label small audio dataset, leverage large unlabeled audio corpus

<!-- component:template:medical-labeling-example -->
**Example: Medical image analysis**
A hospital has 50,000 chest X-rays. Radiologists can feasibly label 2,000 images for specific conditions (pneumonia, tumors, etc.). Semi-supervised learning trains on the 2,000 labeled images, then applies learned patterns to identify potential cases in the remaining 48,000 images. Radiologists review only the flagged cases, dramatically reducing workload while maintaining oversight.

### Strengths

- **Cost-effective**: Requires far less labeling effort than supervised learning
- **Leverages abundant unlabeled data**: Most organizations have vastly more data than labeled data
- **Better than purely unsupervised**: Labeled examples provide direction
- **Practical for specialized domains**: Where experts are scarce but data is abundant

### Limitations and Failure Modes

**Bias amplification:**
- Quality of small labeled set matters enormously
- Errors or biases in initial labels propagate across entire dataset
- Confirmation bias: system finds more of what was in initial labeled set

**Distribution mismatch:**
- If labeled subset not representative of full dataset, predictions will be skewed
- Sampling strategy for what to label is critical

**Error accumulation:**
- Mistakes in pseudo-labels (predicted for unlabeled data) can reinforce incorrect patterns
- Iterative retraining can amplify rather than correct errors

**Validation challenges:**
- Hard to assess true performance without extensive labeled test set
- May appear accurate on biased validation data

### Governance Implications

**Critical questions for semi-supervised learning systems:**
- **How was the labeled subset selected?** (Random? Strategic sampling? Potentially biased?)
- **What quality controls apply to initial labeling?** (Expert review? Inter-rater reliability?)
- **How are pseudo-labels validated?** (Any human review of machine-generated labels?)
- **What's the performance gap vs. fully supervised?** (Quantify tradeoff between cost and accuracy)
- **How do you detect when predictions drift?** (Ongoing monitoring essential)

**Regulatory considerations:**
- May not meet standards for high-risk applications without extensive validation
- Transparency about which data is human-labeled vs. machine-labeled
- Regular audits to catch error accumulation
- Higher risk than supervised learning for same apparent accuracy

---

## Reinforcement Learning: Trial, Error, and Optimization

### How It Works

Think of how salespeople develop their pitch through experience. They try different approaches, some work better than others, and over time they optimize based on what generates results.

That's reinforcement learning (RL). The AI takes actions in an environment, receives feedback (rewards for desirable outcomes, penalties for undesirable), and learns a policy that maximizes cumulative reward over time.

**Key components:**
- **Agent**: The AI system making decisions
- **Environment**: The context in which agent operates
- **Actions**: Choices available to the agent
- **Reward signal**: Feedback indicating success or failure
- **Policy**: Strategy the agent learns for choosing actions

**The learning process:**
1. Agent takes action in current state
2. Environment responds with new state and reward
3. Agent updates its policy based on outcome
4. Over many iterations, learns which actions lead to high cumulative rewards

### Common Applications

| Domain | What Optimizes | Reward Signal | Risk if Misaligned |
<!-- component:table:reinforcement-learning-examples -->
|--------|---------------|--------------|-------------------|
| **Game playing** | Winning strategy | Victory/defeat | None (low stakes) |
| **Robotics** | Physical task completion | Task success metrics | Physical damage, safety violations |
| **Warehouse optimization** | Item retrieval efficiency | Speed, energy efficiency | Ignoring safety, equipment damage |
| **Trading algorithms** | Investment returns | Profit/loss | Excessive risk-taking, market manipulation |
| **Resource allocation** | System performance | Throughput, latency | Unfairness, gaming metrics |
| **Ad placement** | Click-through rates | User clicks | Clickbait, user annoyance, long-term brand damage |

<!-- component:template:warehouse-robot-example -->
**Example: Warehouse robot optimization**
Amazon's warehouse robots learn efficient picking routes through reinforcement learning. They try different paths, receive rewards for fast delivery and energy efficiency, penalties for collisions or dropped items. Over millions of iterations, they optimize routing strategies that humans might not discover. But if the reward only measures speed, robots might take unsafe shortcuts or wear out equipment prematurely—illustrating reward misalignment risk.

### Strengths

- **Learns without explicit supervision**: Discovers strategies through experience
- **Handles complex sequential decisions**: Optimizes long-term outcomes, not just immediate actions
- **Adapts to changing environments**: Continues learning as conditions change
- **Can discover novel strategies**: Sometimes exceeds human expert performance

### Limitations and Failure Modes

**Reward hacking (specification gaming):**
- System optimizes for measured reward, not intended outcome
- If you reward sales volume without measuring customer satisfaction, system maximizes volume at expense of satisfaction
- Gaming metrics: achieves high reward through unintended exploits

**Exploration vs. exploitation:**
- Must try new actions (exploration) to discover better strategies
- But also leverage known good actions (exploitation)
- Poor balance leads to suboptimal performance

**Sample inefficiency:**
- Often requires millions of iterations to learn
- Expensive if learning must occur in real world rather than simulation
- Can be impractical for high-cost environments (medical treatment, manufacturing)

**Safety during learning:**
- Agent makes mistakes while learning
- In physical systems, mistakes can cause damage or harm
- Hard to constrain exploration to safe actions only

**Emergent behaviors:**
- May develop unexpected strategies
- Can be difficult to predict what policy will emerge
- Strategies may work for wrong reasons (Clever Hans problem)

### Governance Implications

**Critical questions for reinforcement learning systems:**
- **What exactly are you rewarding?** (Is the reward signal aligned with actual goals?)
- **What constraints prevent harmful actions?** (Safety bounds during learning and deployment?)
- **How do you detect reward hacking?** (Monitoring for unintended optimization strategies?)
- **What happens during learning phase?** (Sandbox? Simulation? Real-world consequences?)
- **Can you explain the learned policy?** (Why does system choose specific actions?)
- **How do you handle distributional shift?** (If environment changes, does system adapt safely?)

**Critical governance risks:**

**Reward misalignment:** If ad placement optimizes only for clicks, it places inflammatory content. If content recommendation optimizes for engagement time, it shows increasingly extreme content. The system does exactly what you measured, not what you meant.

**Unexpected strategies:** RL systems sometimes discover exploits that technically maximize reward but violate intent (e.g., video game AI that discovers glitches).

**Safety during exploration:** Physical robots or trading algorithms can cause real harm while learning. Adequate safeguards essential.

**Regulatory considerations:**
- High-risk for safety-critical applications without extensive testing
- Reward function design is a governance decision (defines system values)
- Ongoing monitoring essential (learned policies can drift)
- Transparency about training process and safety constraints
- May require human oversight or kill switches in high-stakes environments

---

## Transformers and Modern AI

### Why Modern AI Seems So Capable

If you've used ChatGPT, Claude, or any recent AI writing tool, you've experienced transformer technology—the 2017 breakthrough that made AI seem suddenly capable of understanding context.

**How transformers differ from earlier approaches:**

| Aspect | Previous Approaches | Transformers |
<!-- component:table:transformer-capabilities -->
|--------|-------------------|-------------|
| **Processing** | Sequential (one word at a time) | Parallel (entire sequence at once) |
| **Context understanding** | Limited memory of previous words | Each word "attends" to all other words |
| **Training speed** | Slow (sequential processing bottleneck) | Fast (parallelizable on GPUs) |
| **Long-range dependencies** | Struggled with distant relationships | Captures relationships across entire text |
| **Scalability** | Diminishing returns from scaling | Performance improves with model size |

**The technical insight:**
When you type "The CEO told the board she would resign," transformers instantly connect "she" to "CEO" rather than "board" by using attention mechanisms that let each word consider relationships with every other word simultaneously. Earlier approaches processed left-to-right and struggled to maintain context over distance.

**Why this matters for business:**
Modern AI tools can handle context-dependent tasks that previously required human interpretation:
- Summarizing long documents while maintaining key points
- Drafting responses that maintain conversational context
- Analyzing contracts where meaning depends on relationships between distant clauses
- Translating idioms that require cultural context

**The governance challenge:**
These models are powerful but opaque. When your AI writing tool produces a response, explaining why it chose those specific words is nearly impossible. The "black box" quality creates challenges for auditing, accountability, and regulatory compliance.

**Governance implications for transformers:**
- Exceptional capability on language tasks
- Extremely limited explainability
- Prone to hallucination (confident false statements)
- Training data biases affect outputs
- Require extensive testing before high-stakes deployment

---

## RPA vs Physical Robotics: Clarifying the Confusion

When vendors mention "robotics," clarify what they mean—the word describes two completely different technologies with different governance frameworks:

| Aspect | Physical Robotics | Robotic Process Automation (RPA) |
<!-- component:table:rpa-vs-robotics -->
|--------|------------------|--------------------------------|
| **What it is** | Physical machines that move and interact with real world | Software that automates repetitive computer tasks |
| **Examples** | Factory robots welding cars, warehouse robots moving inventory, surgical robots | Copying data between systems, filling forms, processing emails |
| **Governed by** | Workplace safety regulations, equipment standards | Data privacy, process integrity, access controls |
| **Risks** | Physical injury, equipment damage, manufacturing defects | Data errors, process failures, security vulnerabilities |
| **Labor impact** | Manufacturing and warehouse jobs | Administrative and knowledge worker jobs |
| **Failure modes** | Mechanical failure, collision, malfunction | Logic errors, data corruption, unauthorized access |

**Physical Robotics:** Factory robots welding car frames. Warehouse systems moving pallets. Surgical robots assisting operations. These are physical machines governed by workplace safety regulations, requiring physical maintenance, posing physical risks.

**RPA (Robotic Process Automation):** Contains no physical robots whatsoever. It's software that automates repetitive computer tasks—copying data from emails to spreadsheets, filling forms, moving files between systems.

**Example of RPA:**
When your HR team manually copies new hire information from email to your HRIS to payroll to benefits enrollment—that's exactly what RPA automates. The software "watches" how a human performs the task, then replicates those clicks and keystrokes automatically. One expert described it perfectly: "RPA takes the robot out of the human."

**Governance distinction:**
- Physical robotics: workplace safety, mechanical failure risks, labor displacement in manufacturing
- RPA: data accuracy, process dependencies, access control, labor displacement in knowledge work

Same word. Very different governance frameworks. Always clarify which type you're discussing.

---

## Vendor Evaluation Questions

When evaluating AI vendors, understanding the learning method enables better due diligence:

<!-- component:checklist:vendor-evaluation -->
**Machine learning vendor evaluation checklist:**

- [ ] **What learning method does the system use?** (Supervised, unsupervised, semi-supervised, reinforcement, or hybrid?)

- [ ] **For supervised learning:**
  - [ ] What training data was used? (Source, size, time period)
  - [ ] How were labels created? (Expert review? Crowdsourced? Automated?)
  - [ ] What biases exist in the training data?
  - [ ] How is performance measured and on what population?
  - [ ] How often is the model retrained to prevent staleness?

- [ ] **For unsupervised learning:**
  - [ ] How are discovered patterns validated as meaningful?
  - [ ] What human expertise interprets results?
  - [ ] How stable are the patterns over time?
  - [ ] What happens if system finds spurious correlations?

- [ ] **For semi-supervised learning:**
  - [ ] What portion of data is human-labeled?
  - [ ] How was the labeled subset selected?
  - [ ] What quality controls apply to initial labels?
  - [ ] How are pseudo-labels validated?
  - [ ] What's the performance gap vs. fully supervised learning?

- [ ] **For reinforcement learning:**
  - [ ] What exactly is the reward signal optimizing?
  - [ ] What safety constraints prevent harmful actions?
  - [ ] How do you detect reward hacking or gaming?
  - [ ] Can you explain the learned policy in understandable terms?
  - [ ] What monitoring detects if the policy degrades or drifts?

- [ ] **For all methods:**
  - [ ] Can the system explain its decisions? (Explainability/interpretability)
  - [ ] What happens when the system encounters novel situations?
  - [ ] How do you detect when performance degrades?
  - [ ] What testing was done before deployment?
  - [ ] Who is accountable when the system makes mistakes?

---

## Key Takeaways

**Four fundamental learning approaches with different characteristics:**
- **Supervised**: Learns from labeled examples (requires expensive labeling, risk of bias amplification)
- **Unsupervised**: Discovers patterns without labels (no ground truth, interpretation challenges)
- **Semi-supervised**: Learns from small labeled set + large unlabeled set (cost-effective but error propagation risk)
- **Reinforcement**: Learns through trial and error with rewards (powerful but reward misalignment risk)

**The learning method reveals the risk profile:**
- Supervised systems inherit biases from historical training data
- Unsupervised systems may find meaningless correlations
- Semi-supervised systems amplify errors in small labeled set
- Reinforcement systems optimize exclusively for measured rewards (can ignore unmeasured values)

**Data quality is fundamental:**
- "Garbage in, garbage out" applies to all machine learning
- Labeling quality matters as much as algorithm choice
- Biased data produces biased systems regardless of method
- Staleness: training data age affects real-world performance

**Modern transformers power current AI boom:**
- Process entire sequences simultaneously (vs. sequential)
- Attention mechanisms enable context understanding
- Scalable to billions of parameters
- But: opaque, hard to explain, prone to hallucination

**RPA vs robotics confusion:**
- Physical robotics: machines that move in real world
- RPA: software automating computer tasks
- Same term, completely different governance implications
- Always clarify which type in vendor conversations

**Governance requires understanding learning methods:**
- Different methods need different validation approaches
- Regulatory requirements may vary by learning approach
- Vendor evaluation questions depend on method used
- Risk assessment must account for learning-specific failure modes

---

## Further Reading

- Murphy, Kevin P. (2022). "Probabilistic Machine Learning: An Introduction" - Comprehensive technical foundation
- Goodfellow, Bengio, Courville (2016). "Deep Learning" - Standard reference for neural approaches
- Sutton & Barto (2018). "Reinforcement Learning: An Introduction" - Definitive RL textbook
- Vaswani et al. (2017). "Attention Is All You Need" - Original transformer paper
- Zhu & Goldberg (2009). "Introduction to Semi-Supervised Learning" - Semi-supervised methods
- Géron, Aurélien (2019). "Hands-On Machine Learning" - Practical implementation guide
- Mitchell, Tom (1997). "Machine Learning" - Classic introduction to fundamental concepts
- Russell & Norvig (2020). "Artificial Intelligence: A Modern Approach" - Broader AI context

---

*Concept 6 of 15 in the History learning path*

*Understanding how machines learn is fundamental to AI governance.*
