# Article 87: Model Selection – Choosing the Right AI Approach

## TL;DR

Choosing the right AI model is like choosing the right tool for a job—a hammer is great for nails, terrible for screws. Model selection involves matching your problem type (classification, regression, generation, etc.) to the right algorithm family, then balancing trade-offs: accuracy vs. explainability, speed vs. sophistication, simplicity vs. power. Simple models (linear regression, decision trees) are easy to understand and audit but may miss complex patterns. Complex models (deep learning, transformers) can capture subtle patterns but are harder to explain and require more data. This article walks through the model selection process, explains common model types in plain language, and provides a framework for making the right choice for your specific situation.

---

## Introduction

A client once asked me: "We want to use deep learning for everything. It's the most powerful, right?"

It's a reasonable assumption. Deep learning powers ChatGPT, image recognition, self-driving cars. Why wouldn't you want the most powerful option?

Here's why: Deep learning is like using a Formula 1 race car to go grocery shopping. Yes, it's incredibly powerful. But it's expensive, requires a specialized pit crew, is terrible on speed bumps, and you can't fit much in the trunk.

For grocery shopping, a Honda Civic is actually better.

Model selection is about matching the tool to the job. The "best" model depends entirely on:
- What problem you're solving
- How much data you have
- Whether you need to explain decisions
- How fast predictions need to be
- What resources you have available
- What risks are acceptable

Sometimes the best model is a simple one. Sometimes you need the complexity. Knowing the difference is a crucial AI governance skill.

---

## Understanding Model Types

### First: What Are You Trying to Do?

Before selecting a model, clarify your task:

| Task Type | What It Does | Example |
|-----------|--------------|---------|
| **Classification** | Assign categories | Is this email spam or not spam? |
| **Regression** | Predict a number | What will sales be next quarter? |
| **Clustering** | Group similar items | Which customers are similar? |
| **Ranking** | Order items | Which search results are most relevant? |
| **Recommendation** | Suggest items | What should this customer buy next? |
| **Generation** | Create new content | Write a product description |
| **Detection** | Find anomalies | Is this transaction fraudulent? |
| **Forecasting** | Predict future values | What will demand be in December? |

The task type narrows your model options significantly.

---

### Common Model Families

#### Linear Models

**What they are:** Models that find straight-line relationships between inputs and outputs.

**Examples:** Linear regression, logistic regression

**How they work (simple explanation):**
Imagine predicting house prices. A linear model says: Price = (some amount per square foot) + (some amount per bedroom) + (base price). It finds the best weights for each factor.

**Strengths:**
- Very easy to understand and explain
- Fast to train and predict
- Work well with limited data
- Highly interpretable (you can see exactly how each input affects output)

**Weaknesses:**
- Can't capture complex, non-linear patterns
- Miss interactions between variables
- Limited accuracy on complex problems

**When to use:**
- You need high explainability (regulated decisions)
- You have limited data
- Relationships are roughly linear
- Speed and simplicity matter more than maximum accuracy

**Governance note:** Highly auditable. You can explain exactly why any prediction was made.

---

#### Decision Trees

**What they are:** Models that make decisions through a series of yes/no questions.

**How they work (simple explanation):**
Like a flowchart. "Is income > $50K? If yes, go right. Is age > 30? If yes, approve loan." Each decision splits the data until you reach an answer.

**Strengths:**
- Very intuitive and explainable
- Handle both numbers and categories
- Show clear decision rules
- No assumptions about data distribution

**Weaknesses:**
- Can overfit (memorize training data)
- Sensitive to small data changes
- Limited accuracy on complex problems

**When to use:**
- You need to show decision logic
- Mixed data types (numbers and categories)
- Rules-based explanation needed
- Regulatory requirement for transparent decisions

**Governance note:** Can literally print the decision rules. Auditors love them.

---

#### Random Forests and Gradient Boosting

**What they are:** Combinations of many decision trees that vote together.

**Examples:** Random Forest, XGBoost, LightGBM, CatBoost

**How they work (simple explanation):**
One tree might make mistakes. But if you build 100 trees, each slightly different, and let them vote, the majority is usually right. The errors cancel out.

**Strengths:**
- Much more accurate than single trees
- Handle complex patterns well
- Robust to outliers and noise
- Work well "out of the box"

**Weaknesses:**
- Harder to explain than single trees
- Can be slow with very large data
- Less interpretable (which tree decided?)

**When to use:**
- Structured data (spreadsheet-like)
- Need accuracy but some interpretability
- Competition-winning performance needed
- Tabular data with mixed types

**Governance note:** Feature importance is available but individual predictions are harder to explain.

---

#### Neural Networks / Deep Learning

**What they are:** Models inspired by brain structure, with layers of connected "neurons."

**Examples:** Multi-layer perceptrons, CNNs (images), RNNs (sequences), Transformers (language)

**How they work (simple explanation):**
Data flows through layers. Each layer transforms the data, finding increasingly abstract patterns. Early layers might detect edges in an image; later layers might detect faces.

**Strengths:**
- Can learn extremely complex patterns
- State-of-the-art for images, text, speech
- Can handle massive amounts of data
- Learn features automatically

**Weaknesses:**
- Need lots of data (often millions of examples)
- Require significant compute resources
- Very hard to explain ("black box")
- Can fail unpredictably

**When to use:**
- Images, audio, video, natural language
- Massive datasets available
- Accuracy is paramount
- Explainability less critical

**Governance note:** Major challenge for regulated applications due to opacity.

---

#### Large Language Models (LLMs) / Foundation Models

**What they are:** Very large neural networks trained on massive text (or multimodal) data.

**Examples:** GPT-4, Claude, Llama, Gemini

**How they work (simple explanation):**
Trained to predict the next word in text, across billions of documents. In the process, they learn language, facts, reasoning patterns, and more.

**Strengths:**
- Remarkable language understanding and generation
- Can perform many tasks without task-specific training
- Few-shot learning (learn from examples in prompt)
- Increasingly multimodal

**Weaknesses:**
- Very expensive to train and run
- Can "hallucinate" (confidently state false things)
- Difficult to control precisely
- Black box explanations
- Potential for harmful outputs

**When to use:**
- Natural language tasks
- General-purpose reasoning
- Content generation
- When flexibility matters more than precision

**Governance note:** Significant concerns around reliability, bias, and controllability.

---

## The Key Trade-offs

### Trade-off 1: Accuracy vs. Explainability

```
High Explainability                              High Accuracy
        │                                              │
Linear ──────►Decision ──────►Random ──────►Neural ──────►Deep
Models        Trees           Forests       Networks    Learning
        │                                              │
Easy to                                           Hard to
explain                                           explain
```

**The tension:**
More complex models capture more patterns, improving accuracy. But complexity makes explanation harder.

**Governance implication:**
Regulated decisions (lending, insurance, employment) may require explainability, limiting model choice.

**Resolution strategies:**
- Use simpler models when explanation is required
- Add explanation methods (LIME, SHAP) to complex models
- Accept accuracy loss for explainability gain
- Use complex model with human review

---

### Trade-off 2: Performance vs. Data Requirements

| Model Type | Data Needed | Performance Ceiling |
|------------|-------------|---------------------|
| Linear models | Hundreds | Lower |
| Decision trees | Hundreds-Thousands | Medium |
| Random forests | Thousands | High |
| Neural networks | Tens of thousands | Higher |
| Deep learning | Millions | Highest |

**The tension:**
Powerful models need lots of data. If you don't have enough, they overfit—memorizing training data instead of learning patterns.

**Governance implication:**
You can't just pick the "best" model. You must match model to available data.

---

### Trade-off 3: Speed vs. Sophistication

| Model Type | Training Time | Prediction Time |
|------------|---------------|-----------------|
| Linear models | Seconds | Milliseconds |
| Decision trees | Seconds-Minutes | Milliseconds |
| Random forests | Minutes-Hours | Milliseconds |
| Neural networks | Hours-Days | Milliseconds-Seconds |
| Large LLMs | Weeks-Months | Seconds |

**The tension:**
Complex models take longer to train and may be slower to make predictions.

**Governance implication:**
Real-time applications need fast predictions. Frequent retraining needs fast training.

---

### Trade-off 4: Simplicity vs. Maintenance

**Simple models:**
- Easier to deploy
- Easier to monitor
- Easier to debug
- Easier to update
- Fewer dependencies

**Complex models:**
- More infrastructure required
- More specialized skills needed
- Harder to diagnose problems
- More potential failure modes
- Vendor dependencies possible

**Governance implication:**
Total cost of ownership includes maintenance, not just initial accuracy.

---

## The Model Selection Process

### Step 1: Define the Problem Clearly

Before any model discussion:

- What exactly are you predicting or deciding?
- What does success look like?
- What's the cost of errors?
- What constraints exist (speed, explainability, resources)?

**Example:** "We want to predict which customers will churn in the next 90 days so we can intervene. Success is reducing churn by 10%. A false positive means wasted outreach effort. A false negative means lost customer. We need to explain to customers why we're reaching out."

---

### Step 2: Understand Your Data

| Question | Impact on Model Selection |
|----------|--------------------------|
| How much data do you have? | Limits complex models |
| What type of data? (tabular, text, images) | Narrows model families |
| What's the data quality? | Poor quality may need robust models |
| Is data labeled? | Limits to supervised vs. unsupervised |
| How balanced is the data? | Imbalanced needs specific techniques |

---

### Step 3: Identify Constraints

**Must-have constraints:**
- Explainability required by regulation?
- Maximum prediction latency?
- Maximum compute budget?
- Specific accuracy threshold?

**Nice-to-have preferences:**
- Prefer simpler solutions?
- Prefer open-source?
- Team familiarity with certain approaches?

---

### Step 4: Start Simple

**The golden rule: Start with the simplest model that might work.**

Why?
- Establishes a baseline
- Often works surprisingly well
- Easy to improve from
- Faster iteration
- May be good enough

Then increase complexity only if needed—and if constraints allow.

---

### Step 5: Experiment and Compare

Test multiple model types:

| Model | Accuracy | Explainability | Speed | Feasibility |
|-------|----------|----------------|-------|-------------|
| Logistic regression | 78% | High | Fast | ✓ |
| Random forest | 84% | Medium | Fast | ✓ |
| Neural network | 86% | Low | Medium | ✓ |
| XGBoost | 85% | Medium | Fast | ✓ |

**Compare on:**
- Primary metrics (accuracy, precision, recall)
- Secondary requirements (speed, explainability)
- Fairness across groups
- Performance on edge cases

---

### Step 6: Validate Thoroughly

Before committing to a model:

- **Cross-validation:** Test on data model hasn't seen
- **Out-of-time validation:** Test on recent data
- **Subgroup analysis:** Check performance by demographic groups
- **Stress testing:** Test with unusual inputs
- **Business validation:** Does it make sense to domain experts?

---

### Step 7: Document Your Choice

Record:
- Models considered
- Selection criteria
- Test results
- Rationale for final choice
- Known limitations
- Conditions for revisiting

---

## Model Selection Decision Framework

### Quick Decision Guide

```
┌─────────────────────────────────────────────────────────────┐
│                    What's your data type?                   │
└─────────────────────────────────────────────────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
     ┌─────────┐        ┌─────────┐        ┌─────────┐
     │ Tabular │        │  Text   │        │ Images  │
     └────┬────┘        └────┬────┘        └────┬────┘
          │                  │                  │
          ▼                  ▼                  ▼
   Start with:        Start with:        Start with:
   - Logistic Reg     - Fine-tuned       - Pre-trained
   - Random Forest      transformers       CNN/Vision
   - XGBoost          - Simpler NLP        model
                        if sufficient
          │                  │                  │
          ▼                  ▼                  ▼
   Increase complexity only if accuracy insufficient
   AND constraints allow AND data supports it
```

### Explainability Decision

```
Is explainability required (regulation, high stakes)?
│
├── YES ──► Strong preference for:
│           - Linear models
│           - Decision trees
│           - Rule-based systems
│           - Models with SHAP/LIME explanation
│
└── NO ───► Full flexibility
            Choose based on accuracy and resources
```

### Data Size Decision

```
How much labeled data do you have?
│
├── < 1,000 ──────► Linear models, simple trees
│                   Consider: Is ML even the right approach?
│
├── 1,000-10,000 ──► Decision trees, random forests, XGBoost
│
├── 10,000-100,000 ► Random forests, gradient boosting, 
│                    small neural networks
│
└── > 100,000 ─────► Full range including deep learning
                     if compute available
```

---

## Common Selection Mistakes

### Mistake 1: Choosing Based on Hype

"Everyone's using deep learning, so we should too."

**Reality:** Deep learning is often overkill. Gradient boosting (XGBoost) beats deep learning on most tabular data problems with far less complexity.

### Mistake 2: Ignoring Simplicity

Jumping to complex models without trying simple ones first.

**Reality:** Simple models often get you 80-90% of maximum accuracy with 10% of the effort.

### Mistake 3: Optimizing Only for Accuracy

Picking the most accurate model regardless of other factors.

**Reality:** A model that's 1% more accurate but impossible to explain may be worse for your use case.

### Mistake 4: Ignoring Maintenance

Selecting based on initial performance without considering ongoing costs.

**Reality:** Complex models require more monitoring, debugging, and expertise.

### Mistake 5: One Model Forever

Treating model selection as a one-time decision.

**Reality:** Models should be revisited as data, requirements, and technology evolve.

---

## Conclusion

Model selection isn't about finding the "best" model—it's about finding the best model for your specific situation. A model that's perfect for one use case may be terrible for another.

Key takeaways:

1. **Match model to task:** Different problem types need different approaches.

2. **Understand trade-offs:** Accuracy vs. explainability, performance vs. data needs, sophistication vs. maintenance.

3. **Start simple:** Begin with simple models and add complexity only if needed.

4. **Consider constraints:** Regulations, resources, and requirements narrow your options.

5. **Experiment and compare:** Test multiple approaches before committing.

6. **Document decisions:** Future you will want to know why this model was chosen.

The right model is rarely the most powerful one. It's the one that solves your problem within your constraints—reliably, explainably, and maintainably.

---

## Sources and Further Reading

1. **Scikit-learn** - Model selection guidance. Available at: scikit-learn.org

2. **Google ML Crash Course** - Model selection fundamentals. Available at: developers.google.com/machine-learning

3. **XGBoost Documentation** - When to use gradient boosting. Available at: xgboost.readthedocs.io

4. **"The Hundred-Page Machine Learning Book"** - Andriy Burkov. Concise model overview.

5. **NIST AI RMF** - Model selection considerations. Available at: nist.gov

6. **Interpretable Machine Learning** - Christoph Molnar. Available at: christophm.github.io/interpretable-ml-book

7. **Papers With Code** - Model benchmarks by task. Available at: paperswithcode.com

8. **Google PAIR** - Responsible model selection. Available at: pair.withgoogle.com

9. **Kaggle** - Competition insights on model performance. Available at: kaggle.com

10. **Stanford CS229** - Machine learning model foundations. Available at: cs229.stanford.edu

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
