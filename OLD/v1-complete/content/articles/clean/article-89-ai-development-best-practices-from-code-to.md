
![Article 89: AI Development Best Practices – From Code to Compliance]({{IMAGE_PLACEHOLDER_article-89-ai-development-best-practices-from-code-to-compli}})

---
category: "AI Development Lifecycle"
learning_objectives:

  - "Understand the key concepts and principles of ai governance frameworks"
  - "Implement model validation processes in real-world scenarios"
  - "Evaluate risk assessment frameworks for organizational compliance"
seo_keywords:

  - "article"
  - "development"
  - "AI governance"
  - "development best practices"
  - "from code"
word_count: 1826
processed_date: "2025-12-18T20:00:54.247Z"
---


## Why AI Development Is Different


### Code + Data + Model = Complexity

Traditional software: Code → Program → Output

AI systems: Code + Data + Training → Model → Inference → Output

Each component can change independently:

- Same code, different data → different model
- Same data, different code → different model
- Same everything, different random seed → potentially different model


### The Reproducibility Problem

In traditional software, if you have the code, you can rebuild the system.

In AI, you need:

- The exact code
- The exact data (in the exact state)
- The exact hyperparameters
- The exact environment
- Sometimes the exact random seed

Miss any of these, and you can't reproduce your results.


### The Experiment Problem

Building AI involves lots of experiments:

- Try different features
- Try different model architectures
- Try different hyperparameters
- Compare results

Without proper tracking, you end up with "model_final_v2_FINAL_actually_final.pkl" and no idea which experiment produced your best results.

---


## Best Practice 1: Version Control Everything


### Version Control for Code

This is table stakes. Use Git (or similar).

**What to track:**

- Training scripts
- Preprocessing code
- Evaluation code
- Configuration files
- Infrastructure as code

**Best practices:**

- Meaningful commit messages
- Feature branches
- Code reviews for all changes
- Protected main branch


### Version Control for Data

Data changes. You need to track those changes.

**Options:**

| Tool | What It Does |
|------|--------------|
| DVC (Data Version Control) | Git-like versioning for large data files |
| Delta Lake | Versioned data lake with time travel |
| LakeFS | Git-like interface for data lakes |
| Pachyderm | Data versioning with pipeline tracking |

**What to track:**

- Raw data versions
- Processed data versions
- Training/validation/test splits
- Data transformations applied

**Why it matters:**

- Reproduce results from any point in time
- Understand what data produced what model
- Roll back if data issues are discovered
- Audit trail for compliance


### Version Control for Models

Track every model you train.

**What to track:**

- Model files (weights, parameters)
- Training configuration
- Evaluation metrics
- Training data version used
- Code version used

**Tools:**

- MLflow
- Weights & Biases
- Neptune
- Comet

**Example model registry entry:**
```
Model: customer_churn_v3.2
├── Created: 2024-03-15
├── Code commit: abc123
├── Data version: dataset_v2.1
├── Hyperparameters: {learning_rate: 0.01, epochs: 100, ...}
├── Metrics: {accuracy: 0.87, precision: 0.82, recall: 0.79}
├── Training time: 2.4 hours
└── Trained by: j.smith
```

---


## Best Practice 2: Make Everything Reproducible


### The Reproducibility Checklist

Can someone else (or future you) reproduce your results?

- [ ] Code is version controlled
- [ ] Data is version controlled
- [ ] Dependencies are locked (requirements.txt, poetry.lock)
- [ ] Environment is specified (Docker, conda env)
- [ ] Random seeds are set and recorded
- [ ] Hyperparameters are documented
- [ ] Hardware requirements are specified


### Environment Management

Your model trained on Python 3.9 with TensorFlow 2.8 might not work on Python 3.11 with TensorFlow 2.15.

**Options:**

| Approach | Pros | Cons |
|----------|------|------|
| requirements.txt | Simple, standard | Doesn't lock all dependencies |
| Poetry/Pipenv | Full dependency locking | More complex |
| Conda environments | Good for data science | Large environments |
| Docker containers | Full reproducibility | More overhead |

**Best practice:** Use Docker for production; use virtual environments for development with locked dependencies.


### Seed Everything

Many ML operations involve randomness:

- Data shuffling
- Weight initialization
- Dropout
- Data augmentation

Set seeds for reproducibility:
```python
import random
import numpy as np
import tensorflow as tf

SEED = 42
random.seed(SEED)
np.random.seed(SEED)
tf.random.set_seed(SEED)
```

---


## Best Practice 3: Experiment Tracking


### Why Track Experiments?

Without tracking:

- "What hyperparameters did I use for that good model?"
- "Which version of the data gave better results?"
- "Why did I abandon that approach?"

With tracking:

- Every experiment is logged
- Comparison is easy
- Decisions are documented
- Knowledge is preserved


### What to Track

| Category | Examples |
|----------|----------|
| Parameters | Learning rate, batch size, architecture choices |
| Metrics | Accuracy, loss, precision, recall, F1, custom metrics |
| Artifacts | Model files, plots, predictions |
| Code | Git commit, diff from baseline |
| Data | Version, preprocessing applied |
| Environment | Dependencies, hardware |
| Notes | Why you ran this experiment, observations |


### Experiment Tracking Tools

| Tool | Strengths |
|------|-----------|
| MLflow | Open source, model registry, deployment |
| Weights & Biases | Beautiful UI, collaboration features |
| Neptune | Flexible, good for teams |
| Comet | Easy integration, comparison tools |
| TensorBoard | Built into TensorFlow, visualization |


### Experiment Naming Conventions

Bad: `experiment_1`, `test_new_model`, `final_run`

Good: `churn_rf_v2_lr0.01_depth10_20240315`

Structure: `{project}_{model}_{version}_{key_params}_{date}`

---


## Best Practice 4: Code Quality for ML


### ML-Specific Code Smells

| Smell | Problem | Fix |
|-------|---------|-----|
| Hardcoded paths | Won't work elsewhere | Use config files |
| Magic numbers | What does 0.3 mean? | Named constants or config |
| Notebook-only code | Not production-ready | Refactor to modules |
| No error handling | Fails silently | Add validation and logging |
| Monolithic scripts | Hard to test/maintain | Modular functions |


### Code Organization

**Good structure:**
```
project/
├── data/
│   ├── raw/
│   ├── processed/
│   └── external/
├── src/
│   ├── data/           # Data loading and processing

│   ├── features/       # Feature engineering

│   ├── models/         # Model definitions

│   ├── training/       # Training logic

│   └── evaluation/     # Evaluation code

├── notebooks/          # Exploration (not production)

├── tests/              # Unit and integration tests

├── configs/            # Configuration files

├── models/             # Saved models

└── requirements.txt
```


### Code Reviews for ML

Standard code review + ML-specific checks:

**ML-specific review checklist:**

- [ ] Data leakage checked (no test data in training)
- [ ] Appropriate train/val/test split
- [ ] Metrics are appropriate for the problem
- [ ] Randomness is controlled (seeds set)
- [ ] Hyperparameters are reasonable
- [ ] No hardcoded values that should be configurable
- [ ] Model artifacts are saved properly
- [ ] Logging captures necessary information

---


## Best Practice 5: Documentation


### Documentation Levels

**1. Code Documentation**

- Docstrings for functions and classes
- Inline comments for complex logic
- README for each component

**2. Model Documentation (Model Card)**

- What the model does
- Training data description
- Performance metrics
- Limitations and biases
- Intended use cases

**3. Process Documentation**

- How to train
- How to evaluate
- How to deploy
- How to monitor


### Model Card Template

```markdown

# Model Card: [Model Name]


## Model Details

- **Version:** 2.1
- **Type:** XGBoost classifier
- **Task:** Customer churn prediction
- **Owner:** Data Science Team
- **Last Updated:** 2024-03-15


## Intended Use

- **Primary Use:** Identify customers likely to churn
- **Users:** Marketing team, Customer Success
- **Out of Scope:** Individual customer decisions without review


## Training Data

- **Source:** CRM system, transaction database
- **Size:** 500,000 customers
- **Date Range:** 2022-01-01 to 2024-01-01
- **Features:** 45 features (see feature list)


## Performance

| Metric | Overall | Segment A | Segment B |
|--------|---------|-----------|-----------|
| Accuracy | 0.87 | 0.89 | 0.84 |
| Precision | 0.82 | 0.85 | 0.78 |
| Recall | 0.79 | 0.82 | 0.75 |


## Limitations

- Performance degrades for customers with <6 months history
- Not validated for business customers
- May not perform well during unusual events (pandemic, recession)


## Ethical Considerations

- Does not use protected characteristics directly
- Proxy discrimination tested for age and geography
- Human review required before adverse actions
```

---


## Best Practice 6: Testing (ML-Specific)


### Beyond Traditional Testing

Traditional software testing: Does the code do what it's supposed to?

ML testing: Does the code work? Does the model work? Does the system work?


### Testing Layers

**1. Unit Tests**

- Data processing functions
- Feature engineering logic
- Utility functions
- Input validation

**2. Integration Tests**

- Data pipeline end-to-end
- Training pipeline execution
- Model loading and inference
- API endpoints

**3. Model Tests**

- Performance meets thresholds
- No unexpected behavior on edge cases
- Fairness metrics pass
- No data leakage

**4. System Tests**

- End-to-end workflows
- Performance under load
- Error handling
- Monitoring works


### ML-Specific Test Examples

**Data validation test:**
```python
def test_no_data_leakage():
    """Ensure no future data in training."""
    train_data = load_training_data()
    assert train_data['date'].max() < CUTOFF_DATE
```

**Model performance test:**
```python
def test_model_accuracy_threshold():
    """Model must meet minimum accuracy."""
    model = load_model()
    predictions = model.predict(test_data)
    accuracy = calculate_accuracy(predictions, test_labels)
    assert accuracy >= 0.80, f"Accuracy {accuracy} below threshold"
```

**Fairness test:**
```python
def test_demographic_parity():
    """Selection rates must not differ by >20%."""
    predictions = model.predict(test_data)
    rates_by_group = calculate_selection_rates(predictions, demographics)
    max_ratio = max(rates_by_group) / min(rates_by_group)
    assert max_ratio <= 1.25, f"Disparity ratio {max_ratio} too high"
```

---


## Best Practice 7: CI/CD for ML


### Continuous Integration for ML

Traditional CI: Run tests when code changes.

ML CI: Run tests when code OR data OR configuration changes.

**CI Pipeline for ML:**
```
On code/data/config change:
├── Run unit tests
├── Run integration tests
├── Validate data schema
├── Check data quality
├── Train model (if data changed)
├── Evaluate model
├── Check performance thresholds
├── Run fairness tests
└── Generate reports
```


### Continuous Deployment for ML

**Deployment stages:**

1. **Develop:** Experimentation, exploration
2. **Staging:** Validate in production-like environment
3. **Shadow:** Run alongside production without serving
4. **Canary:** Serve to small percentage of traffic
5. **Production:** Full deployment

**Automated checks before promotion:**

- Performance metrics pass
- No significant drift from expected behavior
- Fairness checks pass
- Integration tests pass
- Approved by model owner

---


## Best Practice 8: Compliance Integration


### Shift Left on Compliance

**Old approach:** Build model → Try to deploy → Compliance review → Rework

**Better approach:** Compliance requirements → Design → Build with compliance → Deploy


### Compliance Checkpoints

Build compliance into the development workflow:

| Stage | Compliance Activity |
|-------|---------------------|
| **Planning** | Risk assessment, approval for high-risk AI |
| **Design** | Privacy review, fairness approach, explainability design |
| **Data** | Data rights verification, consent check, bias assessment |
| **Development** | Bias testing, documentation, code review |
| **Testing** | Fairness testing, adversarial testing, validation |
| **Deployment** | Final review, approval gate, monitoring setup |
| **Operations** | Ongoing monitoring, periodic review, incident response |


### Documentation for Compliance

Regulators and auditors will ask for:

- How was the model trained?
- What data was used?
- How were decisions made?
- What testing was done?
- Who approved deployment?

Build documentation as you go—don't try to recreate it later.

---


## Best Practice 9: Monitoring from Day One


### Design for Monitoring

Don't add monitoring after deployment—build it into the system.

**What to monitor:**

| Category | Metrics |
|----------|---------|
| **Performance** | Accuracy, latency, throughput |
| **Data** | Input distribution, feature drift, missing values |
| **Model** | Prediction distribution, confidence scores |
| **Fairness** | Performance by group, selection rates |
| **Business** | Impact metrics, user feedback |
| **System** | Errors, resource usage, availability |


### Logging for ML

Log everything needed to debug and audit:

- Input features (or hash for privacy)
- Model version used
- Prediction and confidence
- Timestamp
- User/session context


### Alerting

Set up alerts for:

- Performance degradation
- Data drift beyond threshold
- Error rate spikes
- Fairness metric violations
- Unusual prediction patterns

---


## Implementation Roadmap


### If You're Just Starting

**Week 1-2:**

- Set up Git repository with proper structure
- Choose experiment tracking tool (start with MLflow)
- Create basic documentation templates

**Week 3-4:**

- Implement data versioning
- Create basic unit tests
- Set up CI pipeline

**Month 2:**

- Implement model registry
- Add fairness testing
- Create model card template
- Document processes

**Month 3+:**

- Mature CI/CD pipeline
- Integrate compliance checkpoints
- Implement monitoring
- Continuous improvement


### If You Have Existing Models

**Audit current state:**

- Which models are in production?
- What documentation exists?
- What testing is in place?
- What monitoring exists?

**Prioritize:**

- High-risk models get attention first
- Focus on reproducibility
- Add testing incrementally
- Document as you learn

---


## Common Mistakes


### Mistake 1: Notebooks in Production

Jupyter notebooks are great for exploration. They're terrible for production.

**Fix:** Refactor notebook code into modules before deployment.


### Mistake 2: "It Works on My Machine"

Model only runs in one environment.

**Fix:** Containerize. Use dependency locking. Test in multiple environments.


### Mistake 3: Manual Deployment

Hand-copy files to production server.

**Fix:** Automate deployment. Version everything. Use pipelines.


### Mistake 4: Compliance as Afterthought

Build first, deal with compliance later.

**Fix:** Integrate compliance requirements from the start.


### Mistake 5: No Monitoring

Deploy and forget.

**Fix:** Monitoring is required. No exceptions.

---


## Conclusion

AI development best practices aren't bureaucratic overhead—they're what separates professional AI development from chaos. They enable reproducibility, collaboration, compliance, and confidence in production systems.

Key takeaways:

1. **Version control everything:** Code, data, models, experiments—all of it.

2. **Make it reproducible:** If you can't recreate a result, you don't really have it.

3. **Track experiments:** Every run should be logged and comparable.

4. **Test appropriately:** ML requires testing beyond traditional software QA.

5. **Document as you build:** Don't try to reconstruct documentation later.

6. **Integrate compliance early:** Shift left on governance requirements.

7. **Monitor from day one:** Design systems to be observable.

These practices require investment, but the alternative—unmaintainable, unexplainable, unauditable AI—is far more expensive in the long run.

---


## Sources and Further Reading

1. **Google** - "Rules of Machine Learning" - Best practices guide. Available at: developers.google.com

2. **MLflow** - Open source ML lifecycle platform. Available at: mlflow.org

3. **DVC** - Data Version Control. Available at: dvc.org

4. **Weights & Biases** - Experiment tracking. Available at: wandb.ai

5. **Made With ML** - MLOps curriculum. Available at: madewithml.com

6. **Chip Huyen** - "Designing Machine Learning Systems" - O'Reilly book.

7. **Google Cloud** - MLOps best practices. Available at: cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning

8. **Microsoft** - Team Data Science Process. Available at: docs.microsoft.com

9. **NIST AI RMF** - Development practices guidance. Available at: nist.gov

10. **Netflix** - ML engineering blog posts. Available at: netflixtechblog.com

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
