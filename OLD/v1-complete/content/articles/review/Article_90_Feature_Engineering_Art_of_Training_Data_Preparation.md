# Article 90: Feature Engineering – The Art of Training Data Preparation

## TL;DR

Feature engineering is the process of turning raw data into inputs that machine learning models can use effectively. It's often the difference between a model that barely works and one that works brilliantly. Features are the characteristics or attributes you feed into a model—like age, income, number of purchases, or days since last login. Good feature engineering requires domain knowledge (understanding what information actually matters), technical skill (knowing how to transform data), and careful attention to potential problems (like data leakage or encoding bias). This article explains feature engineering in practical terms, covering common techniques, common pitfalls, and why governance professionals should care about how features are created.

---

## Introduction

A data science team was building a model to predict customer churn. Their first attempt, using raw data from the database, achieved 65% accuracy—barely better than flipping a coin.

They brought in a domain expert from the customer success team. She asked: "Are you looking at how engagement has changed over time? A customer who used to log in daily but now logs in weekly is very different from someone who's always logged in weekly."

They created new features: engagement trend (increasing/decreasing), days since peak usage, and ratio of current to historical activity. The model jumped to 85% accuracy.

That's the power of feature engineering. The raw data was the same. The model algorithm was the same. The difference was how the data was transformed into features.

Feature engineering is often called an "art" because it requires creativity and domain knowledge, not just technical skill. But it's an art with principles—and with governance implications that are often overlooked.

---

## What Are Features?

### Features in Plain Language

A feature is a measurable property or characteristic that you feed into a machine learning model.

Think of it like filling out a form. Each field on the form is a feature:
- Name: "John Smith" (text feature)
- Age: 35 (numeric feature)
- City: "Toronto" (categorical feature)
- Income: $75,000 (numeric feature)

The model learns patterns in these features to make predictions.

### Raw Data vs. Features

Raw data is what you have in databases. Features are what you feed to models. They're often different.

**Raw data:** Transaction timestamps
**Features created:**
- Day of week
- Hour of day
- Weekend vs. weekday
- Days since last transaction
- Transactions per week

**Raw data:** Customer address
**Features created:**
- Distance to nearest store
- Urban vs. suburban vs. rural
- Region category
- Population density of area

The transformation from raw data to features is where domain knowledge meets technical skill.

---

## Why Feature Engineering Matters

### The 80/20 Rule of ML

There's an old saying in data science: "80% of the work is data preparation." Feature engineering is a big part of that 80%.

**Impact on model performance:**

| Approach | Typical Outcome |
|----------|-----------------|
| Good algorithm + bad features | Poor performance |
| Simple algorithm + good features | Good performance |
| Good algorithm + good features | Best performance |

Good features often matter more than sophisticated algorithms.

### What Features Can Do

**Capture domain knowledge:**
An expert knows that "recency of last purchase" matters for customer behavior. Feature engineering encodes that knowledge into data the model can use.

**Make patterns learnable:**
Raw transaction dates are hard for models to interpret. "Days since last purchase" is easy to learn from.

**Reduce complexity:**
Instead of feeding 100 raw data points, you might create 20 meaningful features that capture the important patterns.

**Improve interpretability:**
A feature called "engagement_score" is easier to explain than a model learning from 50 individual activity metrics.

---

## Types of Features

### Numeric Features

Numbers that have mathematical meaning.

**Examples:**
- Age, income, price
- Count of events
- Ratios and percentages
- Distances and durations

**Common transformations:**
- Scaling (normalize to 0-1 or standardize to mean=0, std=1)
- Log transformation (for skewed data)
- Binning (convert to categories: low/medium/high)
- Polynomial features (age², interactions like age × income)

### Categorical Features

Categories or labels without numeric meaning.

**Examples:**
- Country, city, region
- Product category
- Customer segment
- Day of week

**Common transformations:**
- One-hot encoding (create binary column for each category)
- Label encoding (assign number to each category)
- Target encoding (replace category with target variable mean)
- Frequency encoding (replace with how often category appears)

**Watch out:** The encoding method matters. Label encoding (A=1, B=2, C=3) implies an order that might not exist.

### Time-Based Features

Information derived from dates and timestamps.

**Examples:**
- Day of week, month, quarter, year
- Weekend vs. weekday
- Holiday indicator
- Time since an event
- Trends over time windows

**Common patterns:**
```
From: transaction_timestamp = "2024-03-15 14:30:00"

Create:
- day_of_week = "Friday" (or 5)
- hour_of_day = 14
- is_weekend = False
- is_business_hours = True
- month = 3
- quarter = 1
- days_since_signup = 847
```

### Text Features

Information extracted from text data.

**Examples:**
- Word counts
- Sentiment scores
- TF-IDF vectors
- Embeddings from language models

**Common approaches:**
- Bag of words (count each word)
- TF-IDF (weight words by importance)
- Embeddings (dense vector representations)
- Named entity extraction
- Sentiment analysis

### Aggregated Features

Summaries across multiple records.

**Examples:**
- Average transaction amount per customer
- Total purchases in last 30 days
- Number of support tickets
- Maximum order value

**Time windows:**
- Last 7 days, 30 days, 90 days, year
- Comparing periods (this month vs. last month)

---

## Feature Engineering Techniques

### Technique 1: Domain-Driven Features

Use knowledge about the problem to create meaningful features.

**Example: Credit risk**

Domain knowledge: "Payment behavior in the last 3 months is more predictive than older history."

Features created:
- Payments on time (last 3 months)
- Average days late (last 3 months)
- Trend in payment behavior (improving/worsening)

**Example: Retail churn**

Domain knowledge: "Customers often reduce engagement before churning."

Features created:
- Visits this month vs. average
- Days since last purchase vs. historical average
- Purchase frequency trend

### Technique 2: Interaction Features

Combine features to capture relationships.

**Simple interactions:**
- `income_per_person = income / household_size`
- `price_per_sqft = price / square_feet`
- `debt_to_income = total_debt / annual_income`

**When to use:**
- When the relationship between features matters
- When domain knowledge suggests combined effects

### Technique 3: Window Features

Calculate statistics over time windows.

**Example feature set:**
```
For customer transaction history:
- transaction_count_7d (last 7 days)
- transaction_count_30d (last 30 days)
- transaction_count_90d (last 90 days)
- avg_transaction_amount_30d
- max_transaction_amount_30d
- min_transaction_amount_30d
- std_transaction_amount_30d
- days_since_last_transaction
```

**Why multiple windows:**
Different time scales capture different patterns. Someone might have steady monthly behavior but erratic weekly behavior.

### Technique 4: Lag Features

Use past values to predict future values.

**Example: Time series forecasting**
```
Predicting: sales_tomorrow

Features:
- sales_yesterday (lag 1)
- sales_2_days_ago (lag 2)
- sales_1_week_ago (lag 7)
- sales_1_month_ago (lag 30)
- average_sales_last_7_days
```

**Watch out:** In time series, you can only use past data—not future data (that's leakage).

### Technique 5: Encoding Techniques

Convert categorical variables to numbers.

**One-hot encoding:**
```
category: ["Red", "Blue", "Green"]

Becomes:
- is_red: [1, 0, 0]
- is_blue: [0, 1, 0]
- is_green: [0, 0, 1]
```

**Target encoding:**
```
category → average target value for that category

city: "Toronto" → 0.23 (average churn rate for Toronto customers)
city: "Vancouver" → 0.19 (average churn rate for Vancouver customers)
```

**When to use what:**

| Method | Best For | Watch Out |
|--------|----------|-----------|
| One-hot | Few categories, no order | High cardinality creates many columns |
| Label encoding | Ordinal categories (low/med/high) | Implies false ordering for nominal data |
| Target encoding | High cardinality categories | Can leak target information, needs regularization |

---

## Feature Engineering Pitfalls

### Pitfall 1: Data Leakage

**What it is:** Including information that wouldn't be available at prediction time.

**Example 1: Future information**
Predicting if a customer will churn this month, but including a feature "support_tickets_this_month" that includes tickets from after the prediction date.

**Example 2: Target leakage**
Predicting fraud, with a feature "was_investigated" that is only true for transactions that were flagged as fraudulent.

**How to prevent:**
- Always ask: "Would I have this information at prediction time?"
- Time-based splits for training/testing
- Careful feature definition with temporal boundaries

### Pitfall 2: High Cardinality Explosion

**What it is:** Creating too many features from categorical variables.

**Example:**
One-hot encoding "product_id" with 50,000 products creates 50,000 features. Most are zeros. The model can't learn effectively.

**Solutions:**
- Group rare categories into "other"
- Use embedding techniques
- Use target encoding (carefully)
- Select top N most frequent categories

### Pitfall 3: Training-Serving Skew

**What it is:** Features computed differently during training vs. production.

**Example:**
During training, you calculate `avg_purchase_last_30_days` from historical data. In production, the calculation uses a different method or data source, producing different values.

**How to prevent:**
- Use the same code for training and serving
- Test feature computation in production environment
- Monitor feature distributions

### Pitfall 4: Encoding Bias

**What it is:** Feature encoding that introduces or amplifies bias.

**Example:**
Target encoding for "zip_code" might encode historical discrimination. If lending was historically biased against certain zip codes, target encoding captures that bias.

**How to prevent:**
- Understand what features encode
- Test for correlation with protected attributes
- Consider fairness implications of encoding choices

### Pitfall 5: Missing Value Mishandling

**What it is:** Inappropriately handling missing data.

**Bad approaches:**
- Dropping all rows with missing values (loses data, may introduce bias)
- Filling with 0 (might have meaning, like zero income)
- Not thinking about why data is missing

**Better approaches:**
- Understand why data is missing (random? systematic?)
- Create "is_missing" indicator features
- Impute with appropriate values (mean, median, or model-based)
- Consider whether missing data is informative

---

## Feature Selection

After creating features, you may have too many. Feature selection identifies the most important ones.

### Why Select Features?

- **Reduce overfitting:** Fewer features = simpler model = less overfitting
- **Improve speed:** Fewer features = faster training and prediction
- **Improve interpretability:** Fewer features = easier to explain
- **Reduce noise:** Remove features that add noise, not signal

### Feature Selection Methods

**1. Filter Methods**
Evaluate features individually, independent of model.
- Correlation with target
- Statistical tests
- Variance threshold (remove low variance)

**2. Wrapper Methods**
Evaluate subsets of features using model performance.
- Forward selection (add best feature iteratively)
- Backward elimination (remove worst feature iteratively)
- Recursive feature elimination

**3. Embedded Methods**
Feature selection built into model training.
- Lasso regression (L1 regularization)
- Tree-based feature importance
- Attention weights in neural networks

### Feature Importance

Most models can report which features matter most.

**Example output:**
```
Feature Importance (Random Forest):
1. days_since_last_purchase    0.23
2. avg_monthly_spend           0.18
3. engagement_trend            0.15
4. support_tickets_30d         0.12
5. account_age_months          0.09
...
```

Use this for:
- Understanding what drives predictions
- Explaining model to stakeholders
- Identifying potential bias issues
- Simplifying model if needed

---

## Governance Implications of Feature Engineering

### Why Governance Cares About Features

**Bias can enter through features:**
- Features correlated with protected attributes (zip code → race)
- Historical bias encoded in target encoding
- Missing data patterns that differ by group

**Explainability depends on features:**
- "The model uses 500 features" is hard to explain
- "The model primarily looks at purchase recency and engagement trend" is explainable

**Compliance requires documentation:**
- What features are used?
- How were they created?
- What data sources are involved?
- What decisions were made and why?

### Feature Documentation Template

```
Feature: engagement_trend_30d

Description: 
Measures whether customer engagement is increasing or decreasing
over the last 30 days compared to prior 30 days.

Calculation:
(avg_sessions_last_30d - avg_sessions_prior_30d) / avg_sessions_prior_30d

Source Data:
- Table: user_sessions
- Fields: session_timestamp, user_id
- Date range: 60 days prior to prediction date

Potential Issues:
- New customers (<60 days) will have null values
- Seasonal patterns may create false trends
- Not normalized for overall platform trends

Bias Considerations:
- May correlate with age (younger users trend higher engagement)
- No direct use of protected attributes
- Recommend monitoring performance by demographic segment

Created By: J. Smith
Created Date: 2024-03-01
Last Updated: 2024-03-15
```

### Feature Review Checklist

Before deploying features:

- [ ] Feature definition is documented
- [ ] Source data is identified and authorized
- [ ] Calculation logic is reviewed
- [ ] No data leakage (future information)
- [ ] No direct use of protected attributes
- [ ] Proxy discrimination tested
- [ ] Missing data handling documented
- [ ] Feature importance reviewed for reasonableness
- [ ] Feature can be computed in production

---

## Best Practices Summary

### Do:

- **Start with domain knowledge:** Talk to experts before engineering features
- **Document everything:** Feature definitions, sources, transformations
- **Test for leakage:** Always ask "would I have this at prediction time?"
- **Consider bias:** How might features encode unfairness?
- **Iterate:** Feature engineering is exploratory—expect multiple rounds
- **Version control:** Track feature definitions and changes
- **Monitor:** Feature distributions can drift in production

### Don't:

- **Overcomplicate:** Simple features often work best
- **Use everything:** More features isn't always better
- **Ignore missing data:** Understand and handle appropriately
- **Forget production:** Can features be computed at serving time?
- **Skip validation:** Test feature engineering pipeline thoroughly

---

## Conclusion

Feature engineering is where domain knowledge meets machine learning. It's often the most impactful part of building an AI system—the difference between a model that barely works and one that works well.

Key takeaways:

1. **Features matter more than algorithms:** Good features with simple models usually beats bad features with complex models.

2. **Domain knowledge is essential:** Talk to experts. Understand the problem. This informs better features.

3. **Watch out for pitfalls:** Data leakage, high cardinality, encoding bias, and missing value mishandling are common problems.

4. **Document everything:** Governance requires understanding what features are used and how they're created.

5. **Consider fairness:** Features can encode bias—test for proxy discrimination.

6. **Iterate:** Feature engineering is a creative process. Expect to try many approaches.

The best feature engineers combine technical skill with curiosity about the domain and careful attention to potential problems. It's an art—but one with learnable principles.

---

## Sources and Further Reading

1. **Feature Engineering for Machine Learning** - Alice Zheng & Amanda Casari (O'Reilly). Comprehensive book on the topic.

2. **Scikit-learn** - Feature engineering documentation. Available at: scikit-learn.org

3. **Kaggle** - Feature engineering tutorials and competitions. Available at: kaggle.com/learn/feature-engineering

4. **Google ML Crash Course** - Feature engineering module. Available at: developers.google.com/machine-learning

5. **Feature Store** - Feast open source feature store. Available at: feast.dev

6. **Made With ML** - Feature engineering curriculum. Available at: madewithml.com

7. **Papers With Code** - Feature engineering methods. Available at: paperswithcode.com

8. **NIST AI RMF** - Data processing considerations. Available at: nist.gov

9. **Towards Data Science** - Feature engineering articles. Available at: towardsdatascience.com

10. **Machine Learning Mastery** - Practical feature engineering guides. Available at: machinelearningmastery.com

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
