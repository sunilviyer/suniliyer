# Bias Mitigation Framework

**Purpose**: Systematic strategies for reducing algorithmic bias in AI systems
**Use Case**: AI development teams, governance teams, product managers, compliance officers

---

## Overview

Detecting bias is necessary but not sufficient. Organizations must take action to reduce it. This framework provides structured approaches to bias mitigation across the AI lifecycle.

**Key Principle**: Mitigation is iterative, not one-time. No single technique guarantees fairness.

---

## Mitigation Strategy Matrix

Choose mitigation approaches based on when in the lifecycle you're intervening:

| Timing | Strategy | When to Use | Limitations |
|--------|----------|-------------|-------------|
| **Pre-Processing** | Fix training data before training | When data bias is identified | May not eliminate all bias; can reduce model accuracy |
| **In-Processing** | Add fairness constraints during training | When you want to optimize for fairness + accuracy simultaneously | Trade-offs required; no guaranteed "fair" solution |
| **Post-Processing** | Adjust outputs after model is trained | When model is already deployed; quick fix needed | Doesn't address root cause; may reduce accuracy |
| **Organizational** | Build diverse teams, oversight processes | Always - foundational approach | Takes time; doesn't guarantee technical fairness |

**Best Practice**: Use multiple strategies in combination.

---

## Pre-Processing Strategies: Fixing the Data

### Strategy 1: Diversify Training Data

**Problem**: Underrepresentation of groups leads to poor performance for those groups.

**Solution**: Actively seek data from underrepresented groups.

**Implementation**:

```
DATA DIVERSIFICATION PLAN

1. Identify Underrepresented Groups
   Current dataset breakdown:
   - Group A: _____ samples (____%)
   - Group B: _____ samples (____%)
   - Group C: _____ samples (____%)

   Target: Minimum 15% representation for each group

2. Data Collection Strategies
   □ Partner with organizations serving underrepresented communities
   □ Oversample from existing data (with caution - can amplify noise)
   □ Collect new data specifically from underrepresented groups
   □ Use stratified sampling to ensure representation
   □ Consider synthetic data generation (see limitations below)

3. Validation
   - Re-test model performance by group
   - Confirm performance improvements for underrepresented groups
   - Monitor for overfitting on augmented data
```

**Limitations**:
- More data doesn't guarantee fairness if data is still biased
- Synthetic data can introduce artifacts
- Oversampling can lead to overfitting
- May not address historical bias in existing data

**Example**: After Gender Shades revealed facial recognition bias, companies collected more diverse datasets (more women, more darker-skinned individuals) and retrained models. Performance gaps narrowed significantly.

---

### Strategy 2: Remove Biased Features

**Problem**: Features correlated with protected attributes enable discrimination.

**Solution**: Identify and remove features that enable bias.

**Implementation**:

```
BIASED FEATURE REMOVAL PROCESS

1. Feature-Bias Correlation Analysis
   For each feature, calculate correlation with protected attributes:

   Feature → Protected Attribute Correlation:
   - Zip code → Race: r = ____
   - First name → Gender: r = ____
   - [Feature] → [Attribute]: r = ____

   Flag: Correlation > 0.5

2. Feature Importance for Predictions
   Which features most influence model decisions?

   Top 10 Features by Importance:
   1. _________ (importance: ____)
   2. _________ (importance: ____)
   ...

3. Bias-Enabling Features
   Overlap between high-correlation AND high-importance?

   These features enable indirect discrimination:
   - _______________________
   - _______________________

4. Removal Decision
   □ Remove feature entirely
   □ Replace with less-biased proxy
   □ Transform feature to reduce correlation
   □ Keep but add fairness constraints (in-processing)

5. Re-Test Performance
   - Overall accuracy after removal: ____
   - Accuracy by group after removal: ____
   - Fairness metric after removal: ____
```

**Limitations**:
- Removing features reduces model accuracy
- Can't remove all correlated features (infinite proxies exist)
- "Fairness through unawareness" doesn't work—model can infer protected attributes from remaining features

**Example**: Amazon couldn't fix bias in hiring tool by removing gender-related terms. The model learned gender from subtle linguistic patterns in resumes.

---

### Strategy 3: Reweighting or Resampling

**Problem**: Historical data over-represents biased decisions for some groups.

**Solution**: Adjust data to reduce bias before training.

**Implementation**:

**Reweighting**: Assign different weights to training samples.
- Upweight underrepresented groups
- Downweight overrepresented groups
- Upweight historical decisions that align with fairness goals

**Resampling**:
- Oversample minority class
- Undersample majority class
- SMOTE (Synthetic Minority Over-sampling Technique)

```
REWEIGHTING STRATEGY

1. Identify Imbalance
   Group A: _____ samples
   Group B: _____ samples
   Ratio: A:B = _____:_____

2. Calculate Weights
   Target: Equal influence on model

   Weight for Group A = Total / (Num_Groups × Count_A)
   Weight for Group B = Total / (Num_Groups × Count_B)

3. Apply During Training
   Most ML frameworks support sample weights:
   - Scikit-learn: fit(X, y, sample_weight=weights)
   - TensorFlow/Keras: fit(X, y, sample_weight=weights)
   - PyTorch: Use WeightedRandomSampler

4. Validate Results
   - Performance by group with reweighting: ____
   - Fairness metric with reweighting: ____
   - Compare to baseline: ____
```

**Limitations**:
- May reduce overall accuracy
- Oversampling can lead to overfitting
- Doesn't fix underlying data bias, just balances representation

---

### Strategy 4: Data Transformation

**Problem**: Features encode historical bias.

**Solution**: Transform features to remove bias while preserving useful information.

**Techniques**:

**Learning Fair Representations** (Zemel et al., 2013):
- Transform data into intermediate representation
- Representation encodes task-relevant info
- Representation is independent of protected attributes

**Disparate Impact Remover**:
- Adjust feature values to achieve demographic parity
- Preserves rank ordering but reduces correlation with protected attributes

```
TRANSFORMATION APPROACH

1. Identify Biased Features
   Features with correlation > 0.5 to protected attributes

2. Choose Transformation Method
   □ Fair representation learning
   □ Disparate impact remover
   □ Custom transformation (domain-specific)

3. Apply Transformation
   Original feature → Transformed feature
   Test: Correlation to protected attribute reduced?

4. Train Model on Transformed Data

5. Validate
   - Accuracy: ____
   - Fairness metric: ____
   - Utility preserved? □ Yes  □ No
```

**Limitations**:
- Complex to implement
- May lose useful information
- No guarantee of fairness in all contexts

---

## In-Processing Strategies: Fairness During Training

### Strategy 5: Fairness Constraints

**Problem**: Standard ML optimization ignores fairness.

**Solution**: Add fairness as an optimization objective alongside accuracy.

**Implementation**:

**Multi-Objective Optimization**:
- Objective 1: Maximize accuracy
- Objective 2: Minimize unfairness (chosen fairness metric)
- Find Pareto-optimal trade-off

```
FAIRNESS-CONSTRAINED TRAINING

1. Choose Fairness Metric
   □ Demographic parity
   □ Equal opportunity
   □ Equalized odds
   □ Predictive parity

   (See Bias Detection Framework for guidance)

2. Define Constraint
   Example: Equal opportunity

   |TPR(Group A) - TPR(Group B)| < ε

   Where ε = acceptable difference (e.g., 0.05 for 5%)

3. Training Approach

   Option A: Regularization
   - Add fairness penalty to loss function
   - Loss = Accuracy_Loss + λ × Fairness_Penalty
   - Tune λ to control accuracy/fairness trade-off

   Option B: Constrained Optimization
   - Maximize accuracy subject to fairness constraint
   - Use Lagrangian multipliers or specialized algorithms

   Option C: Adversarial Debiasing
   - Train predictor to maximize accuracy
   - Train adversary to predict protected attribute from predictor's representation
   - Predictor learns to hide protected attribute info while maintaining accuracy

4. Validation
   - Accuracy: ____
   - Fairness metric: ____
   - Acceptable trade-off? □ Yes  □ No
```

**Tools**:
- **Fairlearn** (Microsoft): Fairness-constrained classifiers
- **AI Fairness 360** (IBM): In-processing algorithms
- **TensorFlow Fairness Indicators**: Training-time fairness monitoring

**Limitations**:
- Accuracy-fairness trade-off inevitable
- May not achieve target fairness level
- Computationally expensive

---

### Strategy 6: Adversarial Debiasing

**Problem**: Model learns to use protected attributes (directly or via proxies).

**Solution**: Train model to make accurate predictions while being unable to predict protected attributes.

**Architecture**:

```
Input Data
    ↓
[Encoder] → Representation
    ↓                    ↓
[Predictor]         [Adversary]
    ↓                    ↓
Task Prediction   Protected Attribute Prediction

Goal:
- Predictor: Maximize task accuracy
- Adversary: Predict protected attribute from representation
- Encoder: Fool adversary (make representation independent of protected attribute)
```

**Implementation Steps**:

1. Build predictor network (main task)
2. Build adversary network (predict protected attribute)
3. Train in alternating fashion:
   - Update predictor to improve task accuracy
   - Update adversary to better predict protected attribute
   - Update encoder to fool adversary while maintaining predictor accuracy
4. Final model uses only predictor (discard adversary after training)

**Limitations**:
- Complex to implement
- Training instability (adversarial training is tricky)
- No guarantee of fairness
- May reduce accuracy

---

## Post-Processing Strategies: Adjusting Outputs

### Strategy 7: Threshold Optimization

**Problem**: Single decision threshold disadvantages some groups.

**Solution**: Use different thresholds for different groups to achieve fairness.

**Implementation**:

```
THRESHOLD OPTIMIZATION

1. Train Model (no fairness constraints)

2. Analyze Predictions by Group

   Group A:
   - Score distribution: [histogram]
   - Optimal threshold for accuracy: ____

   Group B:
   - Score distribution: [histogram]
   - Optimal threshold for accuracy: ____

3. Choose Fairness Goal
   □ Equal opportunity (equal TPR)
   □ Equalized odds (equal TPR + FPR)
   □ Demographic parity (equal positive prediction rate)

4. Optimize Thresholds

   Find threshold_A and threshold_B such that:
   - Fairness constraint is satisfied
   - Accuracy loss is minimized

   Result:
   - Threshold for Group A: ____
   - Threshold for Group B: ____
   - Fairness metric: ____
   - Accuracy: ____

5. Deploy with Group-Specific Thresholds
```

**Limitations**:
- Requires knowing group membership at deployment (may not be legal/ethical)
- Can seem unfair to treat groups differently
- May violate anti-discrimination laws in some jurisdictions
- Doesn't address root cause of bias

**Legal Considerations**: Using different thresholds by protected attribute may violate anti-discrimination laws. Consult legal counsel before deploying.

---

### Strategy 8: Calibration

**Problem**: Model's confidence scores aren't equally reliable across groups.

**Solution**: Adjust scores to ensure equal calibration across groups.

**Calibration Check**:

```
CALIBRATION ANALYSIS

For each group, for each predicted probability bin:

Predicted Probability | Actual Positive Rate (Group A) | Actual Positive Rate (Group B)
--------------------|--------------------------------|-------------------------------
0.0 - 0.1           |                                |
0.1 - 0.2           |                                |
0.2 - 0.3           |                                |
...                 |                                |
0.9 - 1.0           |                                |

Goal: Actual rates should match predicted probabilities for both groups
```

**Calibration Methods**:

1. **Platt Scaling**: Fit logistic regression on model outputs
2. **Isotonic Regression**: Fit monotonic function to outputs
3. **Temperature Scaling**: Divide logits by temperature parameter

**Implementation**:

```
CALIBRATION CORRECTION

1. Hold out calibration set (separate from training/test)

2. For each group:
   - Fit calibration model on group's calibration set
   - Transform predictions using group-specific calibration

3. Validate calibration on test set

4. Deploy with group-specific calibration functions
```

**Limitations**:
- Requires group membership at deployment
- Improves calibration but may not fix other fairness issues
- Doesn't address underlying bias

---

## Organizational Strategies: Beyond Technical Fixes

Technical debiasing alone isn't enough. Organizational changes are essential.

### Strategy 9: Build Diverse Teams

**Problem**: Homogeneous teams have blind spots.

**Solution**: Diversity in backgrounds brings diversity in perspectives.

**Diversity Dimensions**:

```
TEAM DIVERSITY AUDIT

Technical Diversity:
□ Computer science
□ Statistics / data science
□ Domain expertise (healthcare, finance, law, etc.)
□ Ethics / philosophy
□ Social sciences (sociology, psychology, etc.)
□ Legal / compliance

Demographic Diversity:
□ Gender diversity
□ Racial/ethnic diversity
□ Age diversity
□ Disability representation
□ Socioeconomic background diversity
□ Geographic diversity

Perspective Diversity:
□ Representatives from affected communities
□ User advocates
□ Civil rights / social justice background
□ Industry outsiders (fresh perspectives)

Current team composition:
- Total members: ____
- Diversity across dimensions: ____
- Gaps: ____________________

Hiring plan to address gaps:
1. _________________________
2. _________________________
```

**Why It Matters**:
- Amazon's all-male hiring tool team didn't notice gender bias
- Facial recognition teams lacking diversity missed bias against darker skin tones
- Teams from privileged backgrounds miss harms to vulnerable populations

**Not Just About Demographics**: Include people with different types of expertise. Ethicists see different issues than engineers. Social scientists understand systemic bias that statisticians might miss.

---

### Strategy 10: Establish Human Oversight

**Problem**: Fully automated high-stakes decisions amplify bias at scale.

**Solution**: Require human review for consequential outcomes.

**Oversight Models**:

```
HUMAN OVERSIGHT MODELS

Model 1: Human-in-the-Loop (Every Decision)
- AI recommends
- Human reviews and decides
- Use for: Highest-stakes decisions (parole, organ allocation, asylum)

Model 2: Human-on-the-Loop (Exception Review)
- AI decides automatically for most cases
- Human reviews exceptions (low confidence, contested, random sample)
- Use for: Medium-high stakes (lending, hiring, healthcare referrals)

Model 3: Human-over-the-Loop (Monitoring)
- AI decides automatically
- Human monitors aggregate performance and patterns
- Use for: Medium-low stakes (content recommendations, routing)

Model 4: Fully Automated
- AI decides, humans monitor dashboards
- Use for: Low stakes (spam filtering, product recommendations)
```

**Choosing the Right Model**:

| Use Case | Stakes | Oversight Model |
|----------|--------|----------------|
| Parole decisions | Extreme | Human-in-the-Loop |
| Loan approvals | High | Human-on-the-Loop |
| Resume screening | Medium-High | Human-on-the-Loop |
| Content moderation | Medium | Human-over-the-Loop |
| Product recommendations | Low | Fully Automated |

**Oversight Effectiveness Checklist**:

```
EFFECTIVE HUMAN OVERSIGHT

□ Humans have sufficient information to evaluate AI decision
  (Not just "approve/reject" but explanation of why)

□ Humans have training to recognize bias
  (Can spot disparate impact, questionable patterns)

□ Humans have time to review
  (Not rushed, unrealistic quotas)

□ Humans have authority to override
  (Not just rubber-stamping AI)

□ Disagreements are tracked and analyzed
  (When humans override AI, why? Patterns?)

□ Feedback loop to improve AI
  (Human corrections used to retrain/refine model)
```

**Warning**: Human oversight can fail:
- Automation bias (humans trust AI too much)
- Insufficient time/information (humans can't meaningfully evaluate)
- Lack of training (humans don't recognize bias)
- Perverse incentives (humans rewarded for speed, not accuracy)

---

### Strategy 11: Create Feedback Channels

**Problem**: Organizations don't know when bias harms real users.

**Solution**: Make it easy for affected individuals to report problems.

**Feedback System Design**:

```
BIAS FEEDBACK SYSTEM

1. Accessible Reporting
   □ Clear, visible link: "Report a problem with this decision"
   □ Multiple channels: Web form, email, phone, in-person
   □ Translated into multiple languages
   □ Accessible to people with disabilities

2. Low Barrier to Report
   □ No account/login required
   □ Simple form (not 50 questions)
   □ Anonymous option available
   □ No legal jargon

3. Intake Process
   - What decision was made?
   - Why do you believe it was unfair?
   - What group do you belong to? (optional)
   - What outcome do you seek?

4. Response Process
   □ Acknowledge receipt (within 24 hours)
   □ Human review of complaint (within 5 business days)
   □ Re-evaluation of decision (if warranted)
   □ Explanation provided
   □ Record kept for pattern analysis

5. Pattern Analysis
   - Aggregate complaints by type, group, time
   - Identify systemic issues (not just individual errors)
   - Trigger bias audit if patterns emerge
   - Feed back into model improvement

6. Transparency
   □ Publish aggregate statistics (# complaints, resolution rate, etc.)
   □ Report patterns identified
   □ Report actions taken to address issues
```

**Example**: COMPAS algorithm would have benefited from feedback channel where defendants could challenge risk scores. ProPublica investigation revealed bias, but affected individuals had no direct recourse.

---

### Strategy 12: Documentation and Transparency

**Problem**: When bias is discovered, organizations can't explain how it happened or how to fix it.

**Solution**: Document everything.

**What to Document**:

```
COMPREHENSIVE DOCUMENTATION

Model Card (Mitchell et al., 2019):
□ Model details (architecture, version, training date)
□ Intended use cases
□ Out-of-scope use cases
□ Training data description
□ Performance metrics (overall and disaggregated)
□ Fairness metrics
□ Known limitations
□ Ethical considerations
□ Recommendations for use

Datasheet for Dataset (Gebru et al., 2021):
□ Motivation (why was dataset created?)
□ Composition (what's in it?)
□ Collection process (how was it collected?)
□ Preprocessing (how was it cleaned?)
□ Uses (what is it intended for?)
□ Distribution (how is it shared?)
□ Maintenance (who maintains it?)

Design Decisions Log:
□ Why was this fairness metric chosen?
□ Why were these features selected?
□ Why was this debiasing technique used?
□ What trade-offs were made?
□ Who made decisions?
□ What alternatives were considered?

Testing and Audit Results:
□ Disaggregated performance metrics
□ Fairness metric results
□ Red team findings
□ External audit reports
□ Limitations identified

Deployment and Monitoring:
□ Where is system deployed?
□ Who is affected?
□ What oversight is in place?
□ How is performance monitored?
□ What's the incident response plan?
```

**Why It Matters**:
- When problems arise, you can trace back to root cause
- External auditors can evaluate your decisions
- Regulators can assess compliance
- Future teams understand historical context

---

## Mitigation Strategy Selection Guide

**Use This Decision Tree**:

```
START: Bias detected in AI system

↓

Q: Can you get better training data?
   YES → Pre-Processing (Strategy 1-4)
   NO  → ↓

Q: Are you training a new model or retraining?
   YES → In-Processing (Strategy 5-6)
   NO  → ↓

Q: Is model already deployed / can't retrain?
   YES → Post-Processing (Strategy 7-8)
   NO  → ↓

Q: Is this a systemic organizational issue?
   YES → Organizational (Strategy 9-12)

BEST APPROACH: Combine multiple strategies
```

---

## Mitigation Effectiveness Checklist

After applying mitigation strategies, verify:

```
POST-MITIGATION VALIDATION

□ Disaggregated performance re-tested
  - Accuracy by group: ____
  - Error rates by group: ____
  - Improvement from baseline: ____

□ Fairness metric re-evaluated
  - Metric: ____
  - Result: ____
  - Meets target? □ Yes  □ No

□ Accuracy-fairness trade-off acceptable
  - Accuracy loss: ____
  - Fairness gain: ____
  - Trade-off acceptable to stakeholders? □ Yes  □ No

□ Unintended consequences checked
  - New bias introduced for other groups? □ Yes  □ No
  - Performance degraded for other tasks? □ Yes  □ No

□ External validation (if high-risk)
  - External audit conducted? □ Yes  □ No  □ N/A
  - Audit results: ____

□ Monitoring plan updated
  - Metrics to track: ____
  - Frequency: ____
  - Responsible party: ____

□ Documentation updated
  - Model card reflects changes? □ Yes  □ No
  - Design decisions documented? □ Yes  □ No
```

---

## Common Mitigation Pitfalls

### Pitfall 1: Technical Fix Without Organizational Change
**Problem**: You debiased the model but didn't change the team or processes that created bias.

**Result**: Next model will have the same problems.

**Fix**: Combine technical and organizational strategies.

---

### Pitfall 2: Optimizing the Wrong Fairness Metric
**Problem**: You achieved demographic parity when equal opportunity was needed.

**Result**: You "fixed" the wrong problem.

**Fix**: Carefully choose fairness metric aligned with values and use case (see Bias Detection Framework).

---

### Pitfall 3: Post-Processing Band-Aid on Biased Model
**Problem**: You adjusted thresholds but didn't fix underlying data bias.

**Result**: Fragile fix that breaks when context changes.

**Fix**: Address root cause (biased data, biased features) when possible.

---

### Pitfall 4: Accuracy Loss Unacceptable to Stakeholders
**Problem**: You improved fairness but accuracy dropped 15%, stakeholders reject it.

**Result**: Fair model isn't deployed, biased model stays in production.

**Fix**: Involve stakeholders early, manage expectations about trade-offs, explore multiple mitigation approaches to find acceptable balance.

---

### Pitfall 5: "Set and Forget" After Mitigation
**Problem**: You fixed bias and moved on. No monitoring.

**Result**: Bias re-emerges over time (model drift, context change).

**Fix**: Continuous monitoring and periodic re-audits.

---

### Pitfall 6: Mitigation Without Measurement
**Problem**: Applied debiasing technique but didn't measure if it worked.

**Result**: You don't know if bias actually reduced.

**Fix**: Always test before and after mitigation. Quantify improvement.

---

## When Mitigation Isn't Enough

**Sometimes, the right answer is: Don't deploy the AI.**

**Red Flags for "Do Not Deploy"**:
- Bias can't be reduced to acceptable levels
- Accuracy-fairness trade-off is unacceptable
- Use case is too high-stakes for current AI capabilities
- Affected communities object to deployment
- Legal/regulatory compliance can't be achieved
- Transparency/explainability insufficient for use case
- Organizational capacity for oversight doesn't exist

**Amazon's Decision**: After trying to fix hiring tool bias, Amazon scrapped it entirely. That was the right call.

**Questions to Ask**:
1. Is this AI necessary, or is it automating for automation's sake?
2. Does the AI solve a problem better than alternatives (including human decision-making)?
3. Is the risk of harm proportional to the benefit?
4. Can harm be adequately mitigated and monitored?
5. Do affected communities consent to this use of AI?

If the answer to any of these is "no," seriously consider not deploying.

---

## Mitigation Resources

### Open-Source Tools

- **Fairlearn** (Microsoft): [fairlearn.org](https://fairlearn.org)
  - Pre-processing: Reweighting, sampling
  - In-processing: Fairness constraints
  - Post-processing: Threshold optimization

- **AI Fairness 360** (IBM): [aif360.mybluemix.net](https://aif360.mybluemix.net)
  - 10+ bias mitigation algorithms
  - Pre-, in-, and post-processing techniques
  - Metrics and explanations

- **What-If Tool** (Google): Interactive visualization for fairness exploration

- **Aequitas** (UChicago): Bias audit and mitigation for criminal justice

### Academic Papers

- Zemel et al. (2013): Learning Fair Representations
- Hardt et al. (2016): Equality of Opportunity in Supervised Learning
- Kamiran & Calders (2012): Data Preprocessing Techniques for Classification without Discrimination
- Zhang et al. (2018): Mitigating Unwanted Biases with Adversarial Learning

### Guidance Documents

- NIST AI Risk Management Framework
- EU AI Act High-Risk System Requirements
- EEOC Guidance on AI and Employment Discrimination
- FTC Guidance: Using AI and Algorithms

---

**Used By Articles**:
- Algorithmic Bias: How AI Discriminates and Why
- [Future articles on AI fairness, debiasing techniques, AI governance]

**Reusable For**:
- AI governance frameworks
- Development team training
- Technical implementation guides
- Compliance processes
