# Article 11: The Data Behind AI – Why Training Data Determines Everything

## Introduction

There's an old saying in computer science: "Garbage in, garbage out." For AI, we need a stronger version: "Data in, behavior out." The training data doesn't just affect AI performance—it fundamentally determines what the AI is, what it can do, and how it will fail.

When Amazon's hiring AI discriminated against women, it wasn't because someone programmed it to be sexist. The model learned from historical hiring data where men had been disproportionately hired. When facial recognition systems perform worse on darker skin tones, it's because training datasets underrepresented those faces. When ChatGPT confidently states false information, it's because the internet—its training data—contains false information.

Understanding training data is not optional for AI governance professionals. It's the foundation. This article explains how training data shapes AI systems, what can go wrong, and how to govern data practices effectively.

---

## The Fundamental Relationship: Data and Models

### How AI Learns from Data

AI systems don't "learn" in the human sense—they detect statistical patterns in data. A model that classifies images as "cat" or "dog" has learned patterns of pixels that correlate with each label. A language model has learned patterns of words that tend to follow other words.

**The training process:**

1. **Data collection**: Gather examples relevant to the task
2. **Data preparation**: Clean, label, format the data
3. **Training**: Adjust model parameters to minimize errors on training data
4. **Validation**: Test on held-out data to check generalization
5. **Deployment**: Use the trained model on new data

Every pattern in the training data becomes a potential pattern in model behavior. Including problematic patterns.

### The Data-Model Relationship

| What's in the Data | What's in the Model |
|-------------------|---------------------|
| Accurate information | Ability to provide accurate outputs |
| Errors and falsehoods | Tendency to reproduce errors |
| Biased examples | Biased predictions |
| Diverse examples | Performance across diverse inputs |
| Limited examples | Narrow capabilities, blind spots |
| Quality writing | Quality text generation |

This relationship is often summarized as: **"The model is a compressed representation of its training data."**

### Why Data Dominates

You might think clever algorithms could overcome data problems. They can't—at least not fundamentally:

**No data, no learning**: Without examples, there's nothing to learn from. An image classifier trained without cat pictures cannot recognize cats.

**Biased data, biased model**: If 90% of training examples associate nurses with women, the model will predict "woman" for nurses regardless of how sophisticated the algorithm is.

**Distribution matters**: Models perform well on data similar to training data and poorly on different data. A model trained on formal English struggles with slang.

**Scale amplifies patterns**: Large models trained on large datasets amplify whatever patterns exist—including harmful ones.

---

## Types of Training Data

### Labeled Data

Data with human-provided annotations indicating the "correct" answer.

**Examples:**
- Images labeled "cat" or "dog"
- Emails marked "spam" or "not spam"
- Sentiment labels: "positive," "negative," "neutral"
- Medical images with diagnosis annotations

**How it's created:**
- Human annotators review examples
- Domain experts provide labels
- Crowdsourcing platforms (MTurk, etc.)
- Customer feedback (implicit labels)

**Governance concerns:**
- Labeler accuracy and consistency
- Labeler bias (demographics, perspectives)
- Label definitions and ambiguity
- Cost and scalability

### Unlabeled Data

Raw data without human annotations—used for unsupervised learning or self-supervised learning (like LLM pre-training).

**Examples:**
- Web pages scraped from the internet
- Books and articles
- Images without descriptions
- Audio recordings

**How it's used:**
- Language models predict next words
- Image models learn visual features
- Clustering algorithms find patterns
- Autoencoders learn representations

**Governance concerns:**
- Data quality varies wildly
- Sources may be problematic
- Copyright and consent unclear
- Difficult to audit at scale

### Synthetic Data

Data generated artificially, often by other AI systems.

**Examples:**
- Generated images for training
- Simulated sensor data
- AI-generated text for fine-tuning
- Augmented versions of real data

**Advantages:**
- Can create unlimited examples
- Can fill gaps in real data
- Can protect privacy (no real individuals)
- Can create rare scenarios

**Governance concerns:**
- May not reflect real-world distribution
- Can amplify existing biases
- Quality depends on generation method
- May introduce artifacts

### Human Feedback Data

Data from human evaluations used for RLHF and similar techniques.

**Examples:**
- Rankings of model outputs (A is better than B)
- Ratings of response quality
- Corrections to model mistakes
- Preference selections

**Governance concerns:**
- Labeler demographics affect preferences
- Annotation guidelines shape behavior
- Scale vs. quality tradeoffs
- Consistent interpretation across labelers

---

## Data Quality Dimensions

### Accuracy

**Definition**: Does the data correctly represent reality?

**Accuracy problems:**
- Mislabeled examples (calling a dog a cat)
- Incorrect information (wrong dates, false claims)
- Outdated information (no longer true)
- Transcription errors

**Impact on AI:**
- Model learns incorrect patterns
- Confident wrong predictions
- Degraded overall performance
- Trust issues with outputs

**Governance measures:**
- Quality audits and spot checks
- Multiple labelers with consensus requirements
- Source verification
- Regular data refresh

### Completeness

**Definition**: Does the data cover the full range of relevant scenarios?

**Completeness problems:**
- Missing categories (model can't recognize unlabeled classes)
- Underrepresented groups (poor performance on minorities)
- Missing edge cases (fails on unusual inputs)
- Geographic gaps (works in US, fails in India)

**Impact on AI:**
- Model fails on underrepresented scenarios
- Performance varies across groups
- Unexpected failures in deployment
- Biased outcomes

**Governance measures:**
- Coverage analysis across dimensions
- Stratified sampling
- Active identification of gaps
- Ongoing data collection for gaps

### Representativeness

**Definition**: Does the data distribution match real-world deployment conditions?

**Representativeness problems:**
- Selection bias (convenience sampling)
- Temporal bias (data from different time period)
- Platform bias (data from one website/source)
- Demographic bias (data from unrepresentative population)

**Impact on AI:**
- Good performance in testing, poor in production
- Systematic failures for certain users
- Distribution shift problems
- Unfair outcomes

**Governance measures:**
- Analysis of data sources vs. deployment population
- Demographic breakdowns
- Temporal analysis
- Ongoing monitoring for drift

### Consistency

**Definition**: Are similar examples treated similarly?

**Consistency problems:**
- Different labelers, different labels
- Ambiguous labeling guidelines
- Evolving standards over time
- Contradictory examples

**Impact on AI:**
- Confused model (learns noise)
- Inconsistent predictions
- Poor performance on ambiguous cases
- Reduced confidence calibration

**Governance measures:**
- Clear annotation guidelines
- Inter-annotator agreement metrics
- Regular calibration sessions
- Adjudication processes for disagreements

---

## Bias in Training Data

### Sources of Bias

Bias enters training data through multiple pathways:

**Historical Bias**
Past discrimination is reflected in historical records:
- Hiring data reflects past hiring discrimination
- Loan data reflects historical lending discrimination
- Crime data reflects policing patterns, not actual crime rates
- Medical data reflects historical care disparities

**Representation Bias**
Some groups are underrepresented in data collection:
- Facial recognition datasets historically underrepresented darker skin tones
- Voice recognition trained primarily on certain accents
- Medical AI trained on data from specific demographics
- Geographic concentration of data collection

**Measurement Bias**
How we measure outcomes differs across groups:
- Proxy variables that correlate with protected characteristics
- Different data availability for different populations
- Inconsistent measurement standards across contexts

**Aggregation Bias**
Single models applied to heterogeneous populations:
- One model for all users ignores subgroup differences
- Averaging obscures variation
- Optimal for majority, suboptimal for minorities

**Labeling Bias**
Human annotators inject their perspectives:
- Cultural assumptions in "common sense" judgments
- Demographic composition of labeler pool
- Subjective tasks with no ground truth
- Labeler fatigue and inconsistency

### Bias Examples in Real Systems

| System | Data Bias | Outcome |
|--------|-----------|---------|
| Amazon hiring AI | Historical hiring favored men | Downranked female candidates |
| COMPAS recidivism | Historical policing patterns | Higher false positive rate for Black defendants |
| Facial recognition | Training data underrepresented darker skin | Higher error rates on darker skin |
| Medical AI | Training on predominantly white patients | Underdiagnosis in Black patients |
| Language models | Internet text reflects societal biases | Stereotype amplification in outputs |
| Image generation | Training data associations | Generates stereotypical depictions |

### Measuring and Addressing Bias

**Detection approaches:**
- Disaggregated performance metrics (accuracy by group)
- Statistical parity analysis
- Error rate analysis across groups
- Representation audits of training data
- Output testing with diverse prompts

**Mitigation approaches:**

| Approach | Description | Tradeoffs |
|----------|-------------|-----------|
| Data collection | Collect more data from underrepresented groups | Expensive, may not be possible |
| Resampling | Over/undersample to balance representation | May reduce overall performance |
| Reweighting | Weight underrepresented examples more heavily | Requires careful tuning |
| Data augmentation | Generate synthetic examples for underrepresented groups | May not capture real patterns |
| Preprocessing | Transform data to remove bias | May remove legitimate signal |
| Algorithmic constraints | Constrain model to satisfy fairness criteria | May reduce accuracy |
| Post-processing | Adjust outputs to satisfy fairness criteria | Doesn't fix underlying model |

No approach is perfect. Bias mitigation involves tradeoffs and ongoing effort.

---

## Data Collection and Sourcing

### Web Scraping

Most large AI models train on data scraped from the internet.

**Common sources:**
- Common Crawl (petabytes of web content)
- Wikipedia
- Books digitized and available online
- News articles
- Forums and social media
- Code repositories (GitHub)

**Quality issues:**
- Uneven quality (spam, low-quality content mixed with high-quality)
- Bias toward English and Western perspectives
- Outdated information
- Legally questionable content
- Privacy concerns (personal information)

**Governance questions:**
- Was consent obtained from content creators?
- Are there copyright issues?
- What filtering was applied?
- How were quality decisions made?

### Licensed Datasets

Curated, licensed datasets for specific purposes.

**Examples:**
- ImageNet (labeled images)
- Academic datasets (with research licenses)
- Commercial data providers
- Government open data

**Advantages:**
- Often higher quality
- Clear legal status
- Documentation available
- Community benchmark

**Governance questions:**
- Are license terms being followed?
- What are the known limitations?
- How was the data collected?
- Is it appropriate for your use case?

### Proprietary Data

Organization's own data used for AI training.

**Examples:**
- Customer interaction logs
- Transaction histories
- Internal documents
- Sensor data
- User-generated content

**Advantages:**
- Relevant to your use case
- Under your control
- Can include domain expertise in labeling

**Governance questions:**
- Was data collected with consent for AI training?
- Are privacy requirements being met?
- Is data representative of deployment conditions?
- Are there internal biases in data collection?

### Data Partnerships

Acquiring data from third parties.

**Governance questions:**
- How was the data originally collected?
- What consent was obtained?
- Are there use restrictions?
- What is the data quality?
- What are the privacy implications?
- Can you audit the data?

---

## Data Privacy and Consent

### Privacy Risks in Training Data

**Personal information in training data:**
- Names, addresses, phone numbers
- Email addresses
- Social media content
- Medical information
- Financial information
- Biometric data

**Risks:**
- Model may memorize and reproduce personal information
- Inference attacks can extract training data
- Membership inference can reveal if someone was in training set
- Re-identification from supposedly anonymous data

### Consent Challenges

**The consent problem:**
When you post on social media, did you consent to having your content used to train AI? Most people would say no, but most models include such data.

**Consent considerations:**
- Was consent obtained for original data collection?
- Does that consent extend to AI training?
- Can individuals opt out?
- How are consent changes handled?

**Regulatory landscape:**
- GDPR requires legal basis for processing (consent is one option)
- CCPA provides opt-out rights
- Evolving regulations may impose stricter requirements
- Class action lawsuits challenging training data use

### Privacy-Preserving Approaches

| Technique | Description | Limitations |
|-----------|-------------|-------------|
| Anonymization | Remove identifying information | Can often be reversed; may not prevent memorization |
| Differential privacy | Add noise to prevent individual identification | Reduces model performance |
| Federated learning | Train on decentralized data without centralizing | Complex to implement; communication overhead |
| Data minimization | Use only necessary data | May reduce model capability |
| Synthetic data | Generate artificial data | May not capture real patterns |

### Governance Framework for Privacy

**Before training:**
- Audit data sources for personal information
- Verify legal basis for use (consent, legitimate interest, etc.)
- Implement data minimization
- Document data lineage

**During training:**
- Apply appropriate privacy techniques
- Log data usage
- Implement access controls

**After training:**
- Test for memorization of personal data
- Implement output filtering
- Monitor for privacy incidents
- Maintain ability to respond to deletion requests

---

## Data Provenance and Documentation

### Why Provenance Matters

**Provenance** = the documented history of data: where it came from, how it was processed, who handled it.

**Why it matters for AI governance:**
- Enables auditing and accountability
- Supports regulatory compliance
- Allows bias investigation
- Facilitates reproducibility
- Informs appropriate use decisions

### Data Documentation Standards

**Datasheets for Datasets** (proposed by Gebru et al.):

A standardized documentation format covering:

| Section | Questions |
|---------|-----------|
| Motivation | Why was the dataset created? Who funded it? |
| Composition | What's in the dataset? How was it collected? |
| Collection | How was data gathered? Who collected it? |
| Preprocessing | What processing was applied? |
| Uses | What are appropriate uses? What shouldn't it be used for? |
| Distribution | How is it distributed? Are there restrictions? |
| Maintenance | Who maintains it? How can errors be reported? |

### Documentation Requirements by Risk Level

| Risk Level | Documentation Required |
|------------|----------------------|
| High risk | Full datasheet, bias audit, provenance chain, consent verification |
| Medium risk | Source documentation, basic statistics, known limitations |
| Lower risk | Source identification, general quality assessment |

### Practical Documentation

At minimum, document:
- **Sources**: Where did data come from?
- **Collection method**: How was it gathered?
- **Time period**: When was it collected?
- **Size and composition**: What's in it?
- **Preprocessing**: What transformations were applied?
- **Known issues**: What problems have been identified?
- **Intended use**: What was it designed for?
- **Restrictions**: What shouldn't it be used for?

---

## Ongoing Data Governance

### Data Drift

**Definition**: Changes in data distribution over time that can degrade model performance.

**Types of drift:**
- **Covariate drift**: Input distribution changes (e.g., new customer demographics)
- **Prior drift**: Label distribution changes (e.g., fraud rates increase)
- **Concept drift**: Relationship between inputs and outputs changes (e.g., what constitutes "relevant" search results evolves)

**Detection:**
- Statistical comparison of production data vs. training data
- Performance monitoring over time
- Feature distribution tracking
- Prediction distribution monitoring

**Response:**
- Scheduled retraining
- Triggered retraining when drift detected
- Continuous learning (with appropriate safeguards)
- Model updates with new data

### Data Quality Monitoring

**Ongoing monitoring for:**
- Missing values and data completeness
- Distribution shifts
- Outliers and anomalies
- Label quality (for ongoing labeling)
- Upstream data source changes

**Processes:**
- Automated quality checks in data pipelines
- Regular manual audits
- Feedback loops from model performance
- Source monitoring for changes

### Data Retention and Deletion

**Considerations:**
- How long to retain training data?
- How to handle deletion requests (GDPR "right to be forgotten")?
- Can you retrain without specific data?
- How do you document what was used?

**Approaches:**
- Clear retention policies
- Ability to retrain without specific examples
- Documentation of training data composition
- Regular data review and cleanup

---

## Practical Framework for Data Governance

### Data Acquisition Checklist

Before acquiring or using data for AI training:

- [ ] **Legal basis**: Do we have the right to use this data for AI?
- [ ] **Source quality**: Is the source reliable and appropriate?
- [ ] **Consent**: Was appropriate consent obtained?
- [ ] **Privacy**: Does data contain personal information? How will we handle it?
- [ ] **Bias**: What biases might be present?
- [ ] **Documentation**: Is the data adequately documented?
- [ ] **Relevance**: Is this data appropriate for our use case?
- [ ] **Terms**: What are the terms of use or license?

### Data Preparation Checklist

Before training on data:

- [ ] **Quality review**: Have we assessed data quality?
- [ ] **Bias analysis**: Have we analyzed for potential biases?
- [ ] **Representation**: Does data represent deployment population?
- [ ] **Privacy review**: Have we applied appropriate privacy measures?
- [ ] **Documentation**: Have we documented processing steps?
- [ ] **Validation**: Have we set aside appropriate test data?

### Ongoing Data Governance

After deployment:

- [ ] **Monitoring**: Are we tracking data quality and drift?
- [ ] **Feedback**: Are we collecting feedback to identify data issues?
- [ ] **Updates**: Do we have a process for data updates and retraining?
- [ ] **Auditing**: Can we audit data usage if needed?
- [ ] **Compliance**: Are we meeting ongoing regulatory requirements?

---

## Summary

**Key Takeaways:**

- Training data fundamentally determines AI behavior—every pattern in the data becomes a potential pattern in the model

- Data quality dimensions include accuracy, completeness, representativeness, and consistency—problems in any dimension affect model performance

- Bias enters through historical patterns, representation gaps, measurement differences, aggregation effects, and labeling subjectivity

- Data sources (web scraping, licensed datasets, proprietary data, partnerships) each have distinct governance considerations

- Privacy risks include memorization, inference attacks, and consent challenges—privacy-preserving techniques help but have tradeoffs

- Data provenance and documentation (like Datasheets for Datasets) enable accountability, auditing, and appropriate use decisions

- Ongoing governance requires monitoring for drift, quality degradation, and compliance with evolving requirements

- Data governance is not separate from AI governance—it's the foundation

---

## The Bottom Line

You cannot govern AI without governing data. The most sophisticated algorithm trained on biased data produces biased results. The most powerful model trained on inaccurate data produces inaccurate outputs. The most carefully designed system trained on unrepresentative data fails on underrepresented groups.

When evaluating AI systems, start with data questions: Where did the training data come from? Who labeled it? What populations are represented? What consent was obtained? What documentation exists? The answers to these questions predict model behavior more reliably than any technical specifications.

---

## Further Reading

- Gebru et al. (2021). "Datasheets for Datasets" - Documentation standard
- Paullada et al. (2021). "Data and Its (Dis)contents" - Critical survey of datasets
- Sambasivan et al. (2021). "Everyone Wants to Do the Model Work, Not the Data Work"
- Raji et al. (2021). "AI and the Everything in the Whole Wide World Benchmark"
- NIST AI RMF (2023). Map function - Data documentation requirements

---

*Article 11 of 158 in the AI Governance Mastery series*

*Next: Article 12 - Foundation Models – The New Building Blocks of AI*
