# Article 151: How to Build a Model Card — Documentation Best Practices

## Comprehensive Step-by-Step Guide

---

## Introduction

A Model Card is a standardized document that provides essential information about a machine learning model. Think of it as a "nutrition label" for AI — just as food labels tell you what's in your food and how to use it safely, Model Cards tell users what's in an AI model and how to use it responsibly.

This guide walks you through creating a complete Model Card from scratch, with templates, examples, and practical guidance at every step.

---

## What is a Model Card?

### Definition

A Model Card is a short document accompanying trained machine learning models that provides:

- **What** the model is and does
- **How** it was trained and evaluated
- **Where** it works well and where it doesn't
- **Who** should use it and for what purposes
- **Why** certain design decisions were made
- **When** it should (and shouldn't) be used

### Origins

Model Cards were introduced by Margaret Mitchell, Timnit Gebru, and colleagues at Google in their 2019 paper "Model Cards for Model Reporting." The concept has since been adopted widely across the AI industry and is referenced in regulations including the EU AI Act.

### Why Create Model Cards?

| Stakeholder | Benefit |
|-------------|---------|
| **Model Users** | Understand capabilities, limitations, and appropriate use |
| **Decision Makers** | Make informed choices about model deployment |
| **Affected Persons** | Understand how AI affects decisions about them |
| **Regulators** | Verify compliance with transparency requirements |
| **Auditors** | Assess model governance and documentation |
| **Researchers** | Understand methodology for reproducibility |
| **Developers** | Maintain institutional knowledge over time |

### Regulatory Requirements

| Regulation | Requirement |
|------------|-------------|
| **EU AI Act** | High-risk AI systems must have technical documentation including model information |
| **NYC Local Law 144** | Bias audit summaries for automated employment decision tools |
| **Canada AIDA** | High-impact AI systems require documentation of capabilities and limitations |
| **NIST AI RMF** | Recommends documentation as part of AI risk management |

---

## Model Card Components Overview

A comprehensive Model Card includes these sections:

```
┌─────────────────────────────────────────────────────────┐
│  1. MODEL DETAILS                                       │
│     Basic identification and ownership                  │
├─────────────────────────────────────────────────────────┤
│  2. INTENDED USE                                        │
│     What the model should be used for                   │
├─────────────────────────────────────────────────────────┤
│  3. FACTORS                                             │
│     What factors affect model performance               │
├─────────────────────────────────────────────────────────┤
│  4. METRICS                                             │
│     How model performance is measured                   │
├─────────────────────────────────────────────────────────┤
│  5. EVALUATION DATA                                     │
│     What data was used to test the model                │
├─────────────────────────────────────────────────────────┤
│  6. TRAINING DATA                                       │
│     What data was used to build the model               │
├─────────────────────────────────────────────────────────┤
│  7. QUANTITATIVE ANALYSES                               │
│     Performance results and breakdowns                  │
├─────────────────────────────────────────────────────────┤
│  8. ETHICAL CONSIDERATIONS                              │
│     Potential risks and sensitive uses                  │
├─────────────────────────────────────────────────────────┤
│  9. CAVEATS AND RECOMMENDATIONS                         │
│     Known limitations and usage guidance                │
└─────────────────────────────────────────────────────────┘
```

---

## Before You Start: Prerequisites

### Information to Gather

Before creating your Model Card, collect:

```
INFORMATION GATHERING CHECKLIST

Model Information:
□ Model name and version
□ Model type/architecture
□ Development team and organization
□ Development timeline
□ License and usage terms

Training Information:
□ Training data sources
□ Training data characteristics
□ Training methodology
□ Hyperparameters used
□ Training infrastructure

Evaluation Information:
□ Evaluation datasets used
□ Evaluation methodology
□ Performance metrics
□ Performance results (overall and by subgroup)
□ Comparison to baselines

Use Case Information:
□ Intended applications
□ Intended users
□ Out-of-scope uses
□ Known limitations
□ Deployment context

Ethical Considerations:
□ Potential risks identified
□ Bias assessments conducted
□ Sensitive use cases
□ Mitigations implemented
```

### Who Should Be Involved

| Role | Contribution |
|------|--------------|
| Data Scientists/ML Engineers | Technical details, training methodology, performance metrics |
| Data Engineers | Data sources, data processing, data quality |
| Product Managers | Intended use, user context, business requirements |
| Legal/Compliance | Regulatory requirements, usage restrictions |
| Ethics/Responsible AI | Ethical considerations, bias assessment |
| Documentation Specialists | Clear writing, formatting, accessibility |

### Tools You May Need

- Performance evaluation tools (for generating metrics)
- Fairness assessment tools (for subgroup analysis)
- Documentation templates (provided in this guide)
- Version control (for tracking Model Card updates)

---

## Step-by-Step Guide

### Step 1: Model Details

This section provides basic identification information about the model.

#### 1.1 Basic Information

```
MODEL DETAILS

Model Name: _______________________
Version: _______________________
Version Date: _______________________

Model Type:
□ Classification
□ Regression
□ Clustering
□ Generation (text)
□ Generation (image)
□ Generation (audio)
□ Generation (video)
□ Recommendation
□ Ranking
□ Object Detection
□ Segmentation
□ Speech Recognition
□ Translation
□ Other: _______________________

Architecture:
[Describe the model architecture]
Examples:
- "Transformer-based large language model with 7B parameters"
- "Convolutional neural network (ResNet-50)"
- "Gradient boosted decision trees (XGBoost)"
- "Fine-tuned BERT-base for text classification"

_____________________________________________________________
_____________________________________________________________
```

#### 1.2 Development Information

```
DEVELOPMENT INFORMATION

Developer/Organization: _______________________
Contact Information: _______________________

Development Date:
- Training started: _______________________
- Training completed: _______________________
- First release: _______________________
- Current version release: _______________________

Development Team:
| Role | Name/Team | Contact |
|------|-----------|---------|
| Lead Developer | | |
| Data Scientists | | |
| Data Engineers | | |
| Product Owner | | |

Funding/Resources:
- Funding source: _______________________
- Compute resources used: _______________________
- Estimated training cost: _______________________
- Carbon footprint (if known): _______________________
```

#### 1.3 License and Access

```
LICENSE AND ACCESS

License Type:
□ Proprietary (internal use only)
□ Proprietary (commercial license required)
□ Open source: _______________________
□ Research use only
□ Other: _______________________

Access:
□ API access
□ Model weights available
□ Source code available
□ Restricted access (approval required)

Usage Restrictions:
_____________________________________________________________
_____________________________________________________________

Citation (if applicable):
_____________________________________________________________
```

#### 1.4 Model Lineage

```
MODEL LINEAGE

Base Model (if applicable):
- Base model name: _______________________
- Base model version: _______________________
- Base model source: _______________________

Relationship to Other Models:
□ Trained from scratch
□ Fine-tuned from base model
□ Distilled from larger model
□ Ensemble of multiple models
□ Other: _______________________

Previous Versions:
| Version | Date | Key Changes |
|---------|------|-------------|
|         |      |             |
|         |      |             |

Dependencies:
| Dependency | Version | Purpose |
|------------|---------|---------|
|            |         |         |
|            |         |         |
```

---

### Step 2: Intended Use

This section defines what the model should and shouldn't be used for.

#### 2.1 Primary Intended Uses

```
PRIMARY INTENDED USES

Primary Use Case(s):
[Describe the main applications this model was designed for]

1. _____________________________________________________________
   Context: _____________________________________________________________
   Example: _____________________________________________________________

2. _____________________________________________________________
   Context: _____________________________________________________________
   Example: _____________________________________________________________

3. _____________________________________________________________
   Context: _____________________________________________________________
   Example: _____________________________________________________________

Intended Task:
□ Classification: Categorizing inputs into predefined classes
□ Prediction: Forecasting future values or outcomes
□ Generation: Creating new content (text, images, etc.)
□ Extraction: Identifying information from inputs
□ Recommendation: Suggesting items or actions
□ Detection: Identifying objects or patterns
□ Translation: Converting between languages or formats
□ Summarization: Condensing information
□ Other: _______________________

Input Type:
□ Text
□ Images
□ Audio
□ Video
□ Tabular data
□ Time series
□ Other: _______________________

Output Type:
□ Class labels
□ Probabilities/scores
□ Generated text
□ Generated images
□ Numerical predictions
□ Rankings
□ Other: _______________________
```

#### 2.2 Intended Users

```
INTENDED USERS

Primary Users:
[Who is expected to directly interact with or use this model?]

| User Type | Description | Technical Expertise Required |
|-----------|-------------|------------------------------|
|           |             | None/Basic/Intermediate/Advanced |
|           |             |                              |
|           |             |                              |

User Prerequisites:
□ Technical training required
□ Domain expertise required
□ Access approval required
□ Terms acceptance required
□ Other: _______________________

User Training/Documentation:
- Training available: □ Yes □ No
- Documentation location: _______________________
- Support contact: _______________________
```

#### 2.3 Use Case Context

```
USE CASE CONTEXT

Intended Deployment Environment:
□ Production system
□ Research/experimentation
□ Decision support (human-in-the-loop)
□ Fully automated decisions
□ Other: _______________________

Intended Industries/Domains:
□ Healthcare
□ Financial services
□ Education
□ Retail/e-commerce
□ Manufacturing
□ Government
□ Legal
□ Media/entertainment
□ General purpose
□ Other: _______________________

Geographic Scope:
□ Global
□ Specific regions: _______________________
□ Specific countries: _______________________

Language Support:
□ English only
□ Multilingual: _______________________
□ Specific languages: _______________________
```

#### 2.4 Out-of-Scope Uses

```
OUT-OF-SCOPE USES

This model should NOT be used for:

Explicitly Prohibited Uses:
[Uses that are strictly forbidden]

1. _____________________________________________________________
   Reason: _____________________________________________________________

2. _____________________________________________________________
   Reason: _____________________________________________________________

3. _____________________________________________________________
   Reason: _____________________________________________________________

Uses Requiring Caution:
[Uses that may be possible but require additional safeguards]

1. _____________________________________________________________
   Required safeguards: _____________________________________________________________

2. _____________________________________________________________
   Required safeguards: _____________________________________________________________

Unsupported Uses:
[Uses the model was not designed for and may not perform well]

1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________

Common Misuse Scenarios:
| Misuse | Why It's Problematic | What to Do Instead |
|--------|---------------------|-------------------|
|        |                     |                   |
|        |                     |                   |
```

---

### Step 3: Factors

This section identifies factors that may influence model performance.

#### 3.1 Relevant Factors

```
RELEVANT FACTORS

Factors are variables that may affect model performance. Identify all relevant factors:

DEMOGRAPHIC FACTORS
[Characteristics of people the model makes predictions about]

□ Age
  Relevant because: _______________________
  Groups considered: _______________________

□ Gender
  Relevant because: _______________________
  Groups considered: _______________________

□ Race/Ethnicity
  Relevant because: _______________________
  Groups considered: _______________________

□ Geographic location
  Relevant because: _______________________
  Groups considered: _______________________

□ Socioeconomic status
  Relevant because: _______________________
  Groups considered: _______________________

□ Language/dialect
  Relevant because: _______________________
  Groups considered: _______________________

□ Disability status
  Relevant because: _______________________
  Groups considered: _______________________

□ Other: _______________________
  Relevant because: _______________________
  Groups considered: _______________________

---

ENVIRONMENTAL FACTORS
[Characteristics of the context in which the model operates]

□ Lighting conditions
  Relevant because: _______________________

□ Audio quality/noise levels
  Relevant because: _______________________

□ Image resolution
  Relevant because: _______________________

□ Text length
  Relevant because: _______________________

□ Data quality
  Relevant because: _______________________

□ Hardware/platform
  Relevant because: _______________________

□ Other: _______________________
  Relevant because: _______________________

---

INPUT FACTORS
[Characteristics of inputs that affect performance]

□ Input format variations
  Relevant because: _______________________

□ Input complexity
  Relevant because: _______________________

□ Domain of input
  Relevant because: _______________________

□ Temporal factors (seasonality, trends)
  Relevant because: _______________________

□ Other: _______________________
  Relevant because: _______________________
```

#### 3.2 Factor Evaluation

```
FACTOR EVALUATION APPROACH

How were factors evaluated?

□ Disaggregated performance analysis
  Description: _______________________

□ Fairness metrics calculated
  Metrics used: _______________________

□ Subgroup testing
  Subgroups tested: _______________________

□ Intersectional analysis
  Intersections examined: _______________________

□ Sensitivity analysis
  Factors varied: _______________________

□ A/B testing across groups
  Description: _______________________

□ External audit
  Auditor: _______________________

Factors NOT Evaluated:
| Factor | Reason Not Evaluated |
|--------|---------------------|
|        |                     |
|        |                     |

Limitations in Factor Analysis:
_____________________________________________________________
_____________________________________________________________
```

---

### Step 4: Metrics

This section defines how model performance is measured.

#### 4.1 Performance Metrics

```
PERFORMANCE METRICS

Primary Metrics:
[Main metrics used to evaluate model performance]

| Metric | Definition | Why Chosen |
|--------|------------|------------|
|        |            |            |
|        |            |            |
|        |            |            |

Common Metrics Reference:

CLASSIFICATION:
□ Accuracy: Proportion of correct predictions
□ Precision: True positives / (True positives + False positives)
□ Recall: True positives / (True positives + False negatives)
□ F1 Score: Harmonic mean of precision and recall
□ AUC-ROC: Area under receiver operating characteristic curve
□ AUC-PR: Area under precision-recall curve
□ Specificity: True negatives / (True negatives + False positives)
□ Matthews Correlation Coefficient

REGRESSION:
□ Mean Absolute Error (MAE)
□ Mean Squared Error (MSE)
□ Root Mean Squared Error (RMSE)
□ R-squared (R²)
□ Mean Absolute Percentage Error (MAPE)

GENERATION (TEXT):
□ BLEU: Bilingual Evaluation Understudy
□ ROUGE: Recall-Oriented Understudy for Gisting Evaluation
□ Perplexity
□ Human evaluation scores
□ Toxicity scores
□ Factual accuracy

GENERATION (IMAGE):
□ FID: Fréchet Inception Distance
□ Inception Score
□ Human preference scores
□ CLIP scores

OTHER:
□ Latency/inference time
□ Throughput
□ Memory usage
□ Other: _______________________
```

#### 4.2 Fairness Metrics

```
FAIRNESS METRICS

Fairness metrics assess performance equity across groups:

□ Demographic Parity
  Definition: Equal positive prediction rates across groups
  Formula: P(Ŷ=1|A=0) = P(Ŷ=1|A=1)
  
□ Equal Opportunity
  Definition: Equal true positive rates across groups
  Formula: P(Ŷ=1|Y=1,A=0) = P(Ŷ=1|Y=1,A=1)

□ Equalized Odds
  Definition: Equal true positive AND false positive rates across groups
  
□ Predictive Parity
  Definition: Equal precision across groups
  Formula: P(Y=1|Ŷ=1,A=0) = P(Y=1|Ŷ=1,A=1)

□ Calibration
  Definition: Predicted probabilities reflect true probabilities across groups

□ Individual Fairness
  Definition: Similar individuals receive similar predictions

□ Counterfactual Fairness
  Definition: Predictions unchanged if sensitive attribute changed

Fairness Metrics Used:
| Metric | Groups Compared | Threshold | Result |
|--------|-----------------|-----------|--------|
|        |                 |           |        |
|        |                 |           |        |

Fairness-Accuracy Trade-offs:
_____________________________________________________________
_____________________________________________________________
```

#### 4.3 Decision Thresholds

```
DECISION THRESHOLDS

For models that output probabilities/scores, thresholds determine decisions:

Default Threshold: _______________________
Threshold Selection Method: _______________________

Threshold Analysis:

| Threshold | Precision | Recall | F1 | False Positive Rate |
|-----------|-----------|--------|----|--------------------|
|           |           |        |    |                    |
|           |           |        |    |                    |
|           |           |        |    |                    |

Threshold Selection Considerations:
□ Business requirements
□ Cost of false positives vs. false negatives
□ Fairness implications
□ Regulatory requirements
□ User expectations

Recommended Threshold Ranges:
| Use Case | Recommended Range | Rationale |
|----------|-------------------|-----------|
|          |                   |           |
|          |                   |           |

Note: Users may need to adjust thresholds based on their specific use case and risk tolerance.
```

---

### Step 5: Evaluation Data

This section describes the data used to test the model.

#### 5.1 Evaluation Datasets

```
EVALUATION DATA

Primary Evaluation Dataset(s):

Dataset 1:
- Name: _______________________
- Source: _______________________
- Size: _______________________
- Time period: _______________________
- Description: _______________________

Dataset 2:
- Name: _______________________
- Source: _______________________
- Size: _______________________
- Time period: _______________________
- Description: _______________________

Evaluation Data Characteristics:

| Characteristic | Value | Notes |
|----------------|-------|-------|
| Total samples |       |       |
| Class distribution |  |       |
| Geographic coverage | |       |
| Time period |        |       |
| Languages |          |       |
```

#### 5.2 Evaluation Methodology

```
EVALUATION METHODOLOGY

Data Split Strategy:
□ Hold-out test set (____% of data)
□ Cross-validation (____-fold)
□ Temporal split (trained on data before ____, tested on data after ____)
□ Geographic split
□ Other: _______________________

Evaluation Process:
[Describe how evaluation was conducted]
_____________________________________________________________
_____________________________________________________________

Evaluation Frequency:
□ One-time evaluation
□ Periodic re-evaluation (frequency: _______)
□ Continuous monitoring

Evaluation Independence:
□ Evaluation conducted by development team
□ Evaluation conducted by independent team
□ External third-party evaluation
```

#### 5.3 Evaluation Data Preprocessing

```
EVALUATION DATA PREPROCESSING

Preprocessing Steps Applied:

| Step | Description | Rationale |
|------|-------------|-----------|
|      |             |           |
|      |             |           |

Data Cleaning:
□ Missing value handling: _______________________
□ Outlier treatment: _______________________
□ Duplicate removal: _______________________

Feature Engineering:
□ Feature transformations: _______________________
□ Feature selection: _______________________
□ Encoding: _______________________

Data Consistency:
- Same preprocessing as training data? □ Yes □ No
- If no, differences: _______________________
```

---

### Step 6: Training Data

This section describes the data used to train the model.

#### 6.1 Training Data Sources

```
TRAINING DATA

Data Sources:

| Source | Type | Size | Acquisition Method |
|--------|------|------|-------------------|
|        |      |      |                   |
|        |      |      |                   |
|        |      |      |                   |

Data Collection:
- Collection period: _______________________
- Collection method: _______________________
- Sampling strategy: _______________________

Data Providers/Origins:
| Provider | Data Type | License/Terms | Verification |
|----------|-----------|---------------|--------------|
|          |           |               |              |
|          |           |               |              |

Synthetic Data (if used):
□ No synthetic data used
□ Synthetic data used
  - Generation method: _______________________
  - Proportion of training data: _______________________
  - Quality validation: _______________________
```

#### 6.2 Training Data Characteristics

```
TRAINING DATA CHARACTERISTICS

Size and Scale:
- Total training samples: _______________________
- Total data size: _______________________
- Number of features: _______________________

Distribution:

For Classification:
| Class | Count | Percentage |
|-------|-------|------------|
|       |       |            |
|       |       |            |

For Continuous Targets:
- Mean: _______________________
- Median: _______________________
- Standard deviation: _______________________
- Range: _______________________

Demographic Distribution (if applicable):
| Demographic | Distribution | Population Baseline |
|-------------|--------------|-------------------|
|             |              |                   |
|             |              |                   |

Geographic Distribution:
| Region | Percentage | Notes |
|--------|------------|-------|
|        |            |       |
|        |            |       |

Temporal Distribution:
| Time Period | Percentage | Notes |
|-------------|------------|-------|
|             |            |       |
|             |            |       |
```

#### 6.3 Data Quality and Limitations

```
DATA QUALITY

Quality Assessment:
| Dimension | Assessment | Issues Identified |
|-----------|------------|-------------------|
| Completeness |         |                   |
| Accuracy |             |                   |
| Consistency |          |                   |
| Timeliness |           |                   |
| Representativeness |   |                   |

Known Data Limitations:

1. _____________________________________________________________
   Impact: _____________________________________________________________
   Mitigation: _____________________________________________________________

2. _____________________________________________________________
   Impact: _____________________________________________________________
   Mitigation: _____________________________________________________________

3. _____________________________________________________________
   Impact: _____________________________________________________________
   Mitigation: _____________________________________________________________

Data Gaps:
| Gap | Description | Impact on Model |
|-----|-------------|-----------------|
|     |             |                 |
|     |             |                 |

Label Quality:
- Labeling method: _______________________
- Labeler qualifications: _______________________
- Inter-annotator agreement: _______________________
- Quality assurance: _______________________
```

#### 6.4 Data Governance

```
DATA GOVERNANCE

Privacy and Consent:
□ Personal data included
  - Types of personal data: _______________________
  - Legal basis for processing: _______________________
  - Consent obtained: □ Yes □ No □ N/A
  - Anonymization/pseudonymization applied: _______________________

□ No personal data included

Data Provenance:
- Can data lineage be traced? □ Yes □ No □ Partially
- Data provenance documentation: _______________________

Intellectual Property:
- Data usage rights confirmed: □ Yes □ No □ Pending
- License restrictions: _______________________
- Attribution requirements: _______________________

Data Retention:
- Training data retained: □ Yes □ No
- Retention period: _______________________
- Deletion policy: _______________________
```

---

### Step 7: Quantitative Analyses

This section presents performance results.

#### 7.1 Overall Performance

```
OVERALL PERFORMANCE RESULTS

Primary Metrics:

| Metric | Value | Confidence Interval | Baseline Comparison |
|--------|-------|--------------------|--------------------|
|        |       |                    |                    |
|        |       |                    |                    |
|        |       |                    |                    |

Performance Summary:
[Brief narrative description of overall performance]
_____________________________________________________________
_____________________________________________________________

Comparison to Alternatives:

| Model/Approach | Primary Metric | Secondary Metric | Notes |
|----------------|----------------|------------------|-------|
| This model |                |                  |       |
| Baseline 1 |                |                  |       |
| Baseline 2 |                |                  |       |
| Human performance |         |                  |       |
```

#### 7.2 Disaggregated Performance

```
DISAGGREGATED PERFORMANCE

Performance by Subgroup:

[Include results broken down by relevant factors identified in Step 3]

By Demographic Group 1 (e.g., Gender):
| Group | N | Metric 1 | Metric 2 | Metric 3 |
|-------|---|----------|----------|----------|
|       |   |          |          |          |
|       |   |          |          |          |

By Demographic Group 2 (e.g., Age):
| Group | N | Metric 1 | Metric 2 | Metric 3 |
|-------|---|----------|----------|----------|
|       |   |          |          |          |
|       |   |          |          |          |

By Environmental Factor (e.g., Input Quality):
| Condition | N | Metric 1 | Metric 2 | Metric 3 |
|-----------|---|----------|----------|----------|
|           |   |          |          |          |
|           |   |          |          |          |

Performance Gaps Identified:
| Comparison | Gap Size | Statistical Significance | Concern Level |
|------------|----------|-------------------------|---------------|
|            |          |                         | High/Med/Low  |
|            |          |                         |               |
```

#### 7.3 Intersectional Analysis

```
INTERSECTIONAL ANALYSIS

Performance across combined demographic groups:

| Group 1 | Group 2 | N | Metric 1 | Metric 2 | Notes |
|---------|---------|---|----------|----------|-------|
|         |         |   |          |          |       |
|         |         |   |          |          |       |
|         |         |   |          |          |       |
|         |         |   |          |          |       |

Intersectional Findings:
_____________________________________________________________
_____________________________________________________________

Groups with Notably Different Performance:
| Group Intersection | Performance | Potential Cause |
|-------------------|-------------|-----------------|
|                   |             |                 |
|                   |             |                 |
```

#### 7.4 Error Analysis

```
ERROR ANALYSIS

Error Distribution:

For Classification:
| Error Type | Count | Rate | Common Causes |
|------------|-------|------|---------------|
| False Positives |  |     |               |
| False Negatives |  |     |               |

Error Patterns:
[Describe common patterns in errors]
_____________________________________________________________
_____________________________________________________________

Failure Cases:
[Describe typical situations where the model fails]

1. _____________________________________________________________
   Frequency: _____________________________________________________________
   Impact: _____________________________________________________________

2. _____________________________________________________________
   Frequency: _____________________________________________________________
   Impact: _____________________________________________________________

Edge Cases:
| Edge Case | Model Behavior | Recommendation |
|-----------|----------------|----------------|
|           |                |                |
|           |                |                |
```

---

### Step 8: Ethical Considerations

This section addresses potential risks and ethical concerns.

#### 8.1 Potential Risks

```
ETHICAL CONSIDERATIONS

Identified Risks:

RISK 1:
- Description: _______________________
- Affected parties: _______________________
- Likelihood: □ High □ Medium □ Low
- Severity: □ High □ Medium □ Low
- Mitigation: _______________________

RISK 2:
- Description: _______________________
- Affected parties: _______________________
- Likelihood: □ High □ Medium □ Low
- Severity: □ High □ Medium □ Low
- Mitigation: _______________________

RISK 3:
- Description: _______________________
- Affected parties: _______________________
- Likelihood: □ High □ Medium □ Low
- Severity: □ High □ Medium □ Low
- Mitigation: _______________________

Risk Categories Assessed:
□ Bias and discrimination
□ Privacy violations
□ Safety hazards
□ Misinformation/deception
□ Manipulation
□ Job displacement
□ Environmental impact
□ Security vulnerabilities
□ Dual use concerns
□ Other: _______________________
```

#### 8.2 Sensitive Use Cases

```
SENSITIVE USE CASES

Applications Requiring Extra Caution:

| Use Case | Sensitivity Reason | Required Safeguards |
|----------|-------------------|---------------------|
|          |                   |                     |
|          |                   |                     |
|          |                   |                     |

Sensitive Populations:
| Population | Concern | Recommendation |
|------------|---------|----------------|
|            |         |                |
|            |         |                |

High-Stakes Decisions:
□ This model should NOT be used for high-stakes decisions without:
  _____________________________________________________________

□ This model MAY be used for high-stakes decisions with:
  _____________________________________________________________
```

#### 8.3 Bias Assessment

```
BIAS ASSESSMENT

Bias Sources Examined:
□ Historical bias in training data
□ Representation bias (underrepresented groups)
□ Measurement bias (how outcomes are defined)
□ Aggregation bias (inappropriate grouping)
□ Evaluation bias (non-representative test data)
□ Deployment bias (usage differs from design)

Bias Testing Results:
| Bias Type | Groups Tested | Finding | Action Taken |
|-----------|---------------|---------|--------------|
|           |               |         |              |
|           |               |         |              |

Residual Bias:
[Describe any bias that remains despite mitigation efforts]
_____________________________________________________________
_____________________________________________________________

Bias Monitoring Plan:
_____________________________________________________________
```

#### 8.4 Human Oversight

```
HUMAN OVERSIGHT

Recommended Human Oversight:

□ Human-in-the-loop: Human reviews and approves each decision
  When required: _______________________

□ Human-on-the-loop: Human monitors and can intervene
  When required: _______________________

□ Human-out-of-the-loop: Fully automated operation acceptable
  Conditions: _______________________

Override Capability:
- Can humans override model decisions? □ Yes □ No
- Override mechanism: _______________________
- Override documentation: _______________________

Escalation Triggers:
| Trigger | Action Required |
|---------|-----------------|
|         |                 |
|         |                 |
```

---

### Step 9: Caveats and Recommendations

This section provides guidance for users.

#### 9.1 Known Limitations

```
CAVEATS AND RECOMMENDATIONS

Known Limitations:

LIMITATION 1:
- Description: _______________________
- Impact: _______________________
- Workaround: _______________________

LIMITATION 2:
- Description: _______________________
- Impact: _______________________
- Workaround: _______________________

LIMITATION 3:
- Description: _______________________
- Impact: _______________________
- Workaround: _______________________

Performance Boundaries:
| Condition | Expected Performance | Notes |
|-----------|---------------------|-------|
| Best case |                     |       |
| Typical case |                  |       |
| Worst case |                    |       |

What This Model Cannot Do:
1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________
```

#### 9.2 Recommendations for Users

```
RECOMMENDATIONS FOR USERS

Before Deployment:
□ Review intended use cases against your use case
□ Evaluate performance metrics for your context
□ Assess fairness metrics for your population
□ Test with your own data before full deployment
□ Establish monitoring procedures
□ Define escalation procedures
□ Train users on model capabilities and limitations

During Operation:
□ Monitor performance continuously
□ Track outcomes across demographic groups
□ Collect user feedback
□ Document incidents and near-misses
□ Review at regular intervals

Best Practices:
1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________

Common Pitfalls to Avoid:
1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________
```

#### 9.3 Feedback and Updates

```
FEEDBACK AND UPDATES

Providing Feedback:
- Feedback contact: _______________________
- Feedback mechanism: _______________________
- What feedback is useful: _______________________

Reporting Issues:
- Issue reporting channel: _______________________
- Security vulnerability reporting: _______________________
- Expected response time: _______________________

Update Schedule:
- Update frequency: _______________________
- Update notification method: _______________________
- Deprecation policy: _______________________

Version History:
| Version | Date | Changes | Migration Notes |
|---------|------|---------|-----------------|
|         |      |         |                 |
|         |      |         |                 |
```

---

## Complete Model Card Template

Here is a consolidated template you can copy and customize:

```
═══════════════════════════════════════════════════════════════
                         MODEL CARD
═══════════════════════════════════════════════════════════════

Model Name: _______________________
Version: _______ | Date: _______________________

───────────────────────────────────────────────────────────────
1. MODEL DETAILS
───────────────────────────────────────────────────────────────

Organization: _______________________
Contact: _______________________
Model Type: _______________________
Architecture: _______________________
License: _______________________

───────────────────────────────────────────────────────────────
2. INTENDED USE
───────────────────────────────────────────────────────────────

Primary Uses:
• _______________________
• _______________________

Intended Users: _______________________

Out-of-Scope Uses:
• _______________________
• _______________________

───────────────────────────────────────────────────────────────
3. FACTORS
───────────────────────────────────────────────────────────────

Relevant Factors:
• _______________________
• _______________________

Groups Evaluated:
• _______________________
• _______________________

───────────────────────────────────────────────────────────────
4. METRICS
───────────────────────────────────────────────────────────────

| Metric | Value |
|--------|-------|
|        |       |
|        |       |

Decision Threshold: _______________________

───────────────────────────────────────────────────────────────
5. EVALUATION DATA
───────────────────────────────────────────────────────────────

Dataset(s): _______________________
Size: _______________________
Methodology: _______________________

───────────────────────────────────────────────────────────────
6. TRAINING DATA
───────────────────────────────────────────────────────────────

Source(s): _______________________
Size: _______________________
Collection Period: _______________________

Known Limitations:
• _______________________

───────────────────────────────────────────────────────────────
7. QUANTITATIVE ANALYSES
───────────────────────────────────────────────────────────────

Overall Performance:
| Metric | Overall | Group A | Group B |
|--------|---------|---------|---------|
|        |         |         |         |

Performance Gaps:
• _______________________

───────────────────────────────────────────────────────────────
8. ETHICAL CONSIDERATIONS
───────────────────────────────────────────────────────────────

Risks:
• _______________________
• _______________________

Mitigations:
• _______________________
• _______________________

───────────────────────────────────────────────────────────────
9. CAVEATS AND RECOMMENDATIONS
───────────────────────────────────────────────────────────────

Limitations:
• _______________________
• _______________________

Recommendations:
• _______________________
• _______________________

───────────────────────────────────────────────────────────────
DOCUMENT INFORMATION
───────────────────────────────────────────────────────────────

Created: _______________________
Last Updated: _______________________
Next Review: _______________________
Document Owner: _______________________

═══════════════════════════════════════════════════════════════
```

---

## Example Model Cards

### Example 1: Image Classification Model (Abbreviated)

```
═══════════════════════════════════════════════════════════════
MODEL CARD: Product Defect Detector v2.1
═══════════════════════════════════════════════════════════════

1. MODEL DETAILS
Organization: Manufacturing Co.
Model Type: Image Classification (CNN)
Architecture: ResNet-50 fine-tuned
License: Proprietary (internal use)

2. INTENDED USE
Primary Use: Detecting manufacturing defects on assembly line
Intended Users: Quality control systems, QC technicians
Out-of-Scope: Medical device inspection, safety-critical applications

3. FACTORS
Relevant Factors: Lighting conditions, product orientation, camera angle
Groups Evaluated: Different product lines, shift times, factory locations

4. METRICS
| Metric | Value |
|--------|-------|
| Accuracy | 97.2% |
| Precision | 94.8% |
| Recall | 98.1% |
| F1 Score | 96.4% |

Decision Threshold: 0.7 (optimized for high recall)

5. EVALUATION DATA
Dataset: Internal test set (10,000 images)
Time Period: Jan-Mar 2024
Methodology: Stratified hold-out (20%)

6. TRAINING DATA
Source: Factory cameras (3 facilities)
Size: 150,000 labeled images
Labeling: QC experts, 3-annotator consensus

7. QUANTITATIVE ANALYSES
| Metric | Overall | Factory A | Factory B | Factory C |
|--------|---------|-----------|-----------|-----------|
| Recall | 98.1% | 98.5% | 97.8% | 97.9% |

Gap: 0.7% recall difference between facilities (acceptable)

8. ETHICAL CONSIDERATIONS
Risks: False negatives could allow defective products
Mitigations: Human review of borderline cases, secondary inspection

9. CAVEATS AND RECOMMENDATIONS
Limitations: 
• Performance degrades in low-light (<200 lux)
• Not validated for new product line (SKU-789)

Recommendations:
• Maintain lighting above 400 lux
• Human review when confidence < 0.85
• Retrain before deploying to new product lines
```

### Example 2: Text Classification Model (Abbreviated)

```
═══════════════════════════════════════════════════════════════
MODEL CARD: Customer Support Ticket Router v1.0
═══════════════════════════════════════════════════════════════

1. MODEL DETAILS
Organization: TechSupport Inc.
Model Type: Multi-class Text Classification
Architecture: Fine-tuned DistilBERT
License: Internal use only

2. INTENDED USE
Primary Use: Route support tickets to appropriate department
Intended Users: Customer support platform
Out-of-Scope: Sentiment analysis, priority assignment, auto-response

3. FACTORS
Relevant Factors: Ticket length, language, product mentioned
Groups Evaluated: Product categories, customer segments

4. METRICS
| Metric | Value |
|--------|-------|
| Accuracy | 89.3% |
| Macro F1 | 0.87 |
| Top-2 Accuracy | 96.1% |

5. EVALUATION DATA
Dataset: 5,000 manually labeled tickets
Time Period: Q4 2023

6. TRAINING DATA
Source: Historical support tickets
Size: 50,000 tickets
Languages: English only

Known Limitations:
• Enterprise tier underrepresented (8% of data)
• New product (launched Q1 2024) not in training

7. QUANTITATIVE ANALYSES
| Department | Precision | Recall | F1 | Support |
|------------|-----------|--------|-----|---------|
| Billing | 0.92 | 0.94 | 0.93 | 1,250 |
| Technical | 0.88 | 0.91 | 0.89 | 2,100 |
| Sales | 0.85 | 0.82 | 0.83 | 890 |
| Account | 0.84 | 0.80 | 0.82 | 760 |

Gap: Sales and Account departments have lower performance

8. ETHICAL CONSIDERATIONS
Risks: Misrouting delays customer resolution
Mitigations: Agents can re-route; escalation for repeat contacts

9. CAVEATS AND RECOMMENDATIONS
Limitations:
• English only
• Struggles with multi-issue tickets
• New product queries may misclassify

Recommendations:
• Allow agent override without friction
• Review misroutes weekly for retraining
• Add new product to training by Q2 2024
```

---

## Model Card Maintenance

### When to Update

| Trigger | Update Required |
|---------|-----------------|
| Model retrained | Full update |
| Significant performance change | Metrics update |
| New use case approved | Intended use update |
| New limitation discovered | Caveats update |
| Bias issue identified | Ethics update |
| Regulatory change | Compliance review |
| Annual review | Full review |

### Version Control

```
MODEL CARD VERSION CONTROL

Versioning Scheme: [Model Version].[Card Version]
Example: v2.1.3 = Model v2.1, Card revision 3

Change Log:
| Version | Date | Author | Changes |
|---------|------|--------|---------|
|         |      |        |         |

Review Schedule:
- Minor review: Quarterly
- Major review: Annually
- Triggered review: As needed

Approval Required For:
□ Any change to Intended Use section
□ Any change to Out-of-Scope Uses
□ Significant metric changes
□ New ethical considerations
```

---

## Common Mistakes to Avoid

| Mistake | Why It's a Problem | Better Approach |
|---------|-------------------|-----------------|
| **Too technical** | Non-experts can't understand | Write for your audience; use plain language |
| **Too vague** | Doesn't provide actionable guidance | Be specific about capabilities and limitations |
| **Missing subgroup analysis** | Hides fairness issues | Always disaggregate by relevant factors |
| **Outdated information** | Misleads users | Establish update triggers and review schedule |
| **No limitations** | Appears dishonest; users unprepared | Every model has limitations—be transparent |
| **Copy-paste metrics** | May not apply to your context | Calculate metrics for your specific model |
| **Ignoring edge cases** | Users surprised by failures | Document known failure modes |
| **No contact info** | Users can't report issues | Provide clear feedback channels |

---

## Tools and Resources

### Model Card Tools

| Tool | Description | Link |
|------|-------------|------|
| Model Card Toolkit (Google) | Python library for generating model cards | github.com/tensorflow/model-card-toolkit |
| Hugging Face Model Cards | Template and hosting for model cards | huggingface.co/docs/hub/model-cards |
| FactSheets (IBM) | Comprehensive AI documentation | aifs360.mybluemix.net |
| Datasheets for Datasets | Companion documentation for training data | arxiv.org/abs/1803.09010 |

### Fairness Assessment Tools

| Tool | Description |
|------|-------------|
| Fairlearn | Microsoft's fairness assessment toolkit |
| AI Fairness 360 | IBM's comprehensive fairness toolkit |
| What-If Tool | Google's model exploration tool |
| Aequitas | Bias and fairness audit toolkit |

---

## Summary

A complete Model Card requires:

1. **Model Details** — Basic identification and ownership
2. **Intended Use** — What the model is for (and not for)
3. **Factors** — Variables that affect performance
4. **Metrics** — How performance is measured
5. **Evaluation Data** — What data was used to test
6. **Training Data** — What data was used to train
7. **Quantitative Analyses** — Performance results and breakdowns
8. **Ethical Considerations** — Risks and mitigations
9. **Caveats and Recommendations** — Limitations and guidance

The goal is transparency — helping users understand what the model can and cannot do so they can make informed decisions about its use.

Start with the template, customize for your model, be honest about limitations, and keep it updated.

---

**Word Count:** Approximately 5,800 words
**Estimated Reading Time:** 25-30 minutes
**Templates Included:** 20+

---

*End of Guide*
