---
category: "AI Development Lifecycle"
learning_objectives:

  - "Understand the key concepts and principles of ai governance principles"
  - "Implement implementation strategies in real-world scenarios"
  - "Evaluate compliance frameworks for organizational compliance"
seo_keywords:

  - "article"
  - "deployment"
  - "AI governance"
  - "deployment strategies"
  - "canary releases"
word_count: 1641
processed_date: "2025-12-18T20:00:54.315Z"
---


## Why Deployment Strategy Matters


### The Risk of "Big Bang" Deployment

**Big bang deployment:** Switch from old system to new system all at once, for all users.

**Problems:**

- If something's wrong, everyone is affected
- No comparison with old system performance
- Rollback affects everyone
- Issues discovered late, at scale


### The Value of Gradual Deployment

**Gradual deployment:** Roll out progressively, monitoring at each stage.

**Benefits:**

- Problems caught early, with limited impact
- Real production data validates the system
- Easy comparison with current system
- Rollback is quick and targeted

---


## Deployment Strategy Overview

| Strategy | How It Works | Best For |
|----------|--------------|----------|
| **Direct deployment** | Replace old with new immediately | Low-risk, well-tested changes |
| **Canary release** | Deploy to small % first, expand gradually | Most production AI deployments |
| **Blue-green** | Two identical environments; switch traffic | Quick rollback requirement |
| **A/B testing** | Split traffic between versions | Comparing model performance |
| **Shadow mode** | New model runs alongside but doesn't serve | Pre-production validation |
| **Feature flags** | Enable/disable for specific users | Controlled rollout |

---


## Strategy 1: Canary Release


### What Is It?

Deploy the new model to a small percentage of traffic first. If it works well, gradually increase the percentage until full deployment.

**Analogy:** The name comes from "canary in a coal mine"—miners used canaries to detect toxic gases. If the canary died, miners knew to evacuate. In deployment, the canary group detects problems before everyone is affected.


### How It Works

```
Stage 1: Canary (1-5% of traffic)
├── Monitor key metrics
├── Compare to baseline
├── Duration: 30 min - 2 hours
└── Decision: Continue or rollback

Stage 2: Early Adopters (10-25% of traffic)
├── Expanded monitoring
├── User feedback collection
├── Duration: 2-24 hours
└── Decision: Continue or rollback

Stage 3: Majority (50% of traffic)
├── Full monitoring suite
├── Performance validation
├── Duration: 24-48 hours
└── Decision: Continue or rollback

Stage 4: Full Deployment (100% of traffic)
├── Complete rollout
├── Old version kept for rollback
└── Declare deployment complete
```


### Canary Traffic Selection

How do you choose which users are in the canary group?

**Random selection:**

- Random % of all traffic
- Representative sample
- Good for general validation

**Geographic selection:**

- Start with one region
- Expand to others
- Isolates regional issues

**User-based selection:**

- Specific user segments
- Internal users first
- Power users who can provide feedback

**Sticky assignment:**

- Same user always gets same version
- Important for consistent experience
- Enables user-level comparison


### Canary Metrics

What to monitor during canary:

| Metric Category | Specific Metrics |
|-----------------|------------------|
| **Performance** | Latency, throughput, error rate |
| **Model quality** | Accuracy, prediction distribution |
| **Business** | Conversion, engagement, revenue |
| **User experience** | Complaints, support tickets |


### Canary Decision Criteria

**Proceed if:**

- Error rate ≤ baseline
- Latency ≤ baseline + threshold
- No critical bugs discovered
- Model metrics within expected range

**Rollback if:**

- Error rate significantly higher
- Latency degradation unacceptable
- Critical bugs discovered
- Model behavior unexpected

---


## Strategy 2: Blue-Green Deployment


### What Is It?

Maintain two identical production environments (Blue and Green). Only one serves traffic at a time. Deploy new version to the inactive environment, test it, then switch traffic.


### How It Works

```
Initial State:
┌──────────────────────────────┐
│         Load Balancer        │
└──────────────┬───────────────┘
               │ 100% traffic
               ▼
┌──────────────────────────────┐
│     Blue Environment         │
│     (Current Version)        │  ← ACTIVE
└──────────────────────────────┘

┌──────────────────────────────┐
│     Green Environment        │
│     (Idle)                   │  ← INACTIVE
└──────────────────────────────┘

After Deployment:
┌──────────────────────────────┐
│         Load Balancer        │
└──────────────┬───────────────┘
               │ 100% traffic
               ▼
┌──────────────────────────────┐
│     Green Environment        │
│     (New Version)            │  ← ACTIVE
└──────────────────────────────┘

┌──────────────────────────────┐
│     Blue Environment         │
│     (Previous Version)       │  ← STANDBY
└──────────────────────────────┘
```


### Benefits

**Instant rollback:** If problems occur, switch traffic back to the old environment immediately.

**Zero downtime:** The switch is instant; no gap in service.

**Clean environments:** Each deployment starts fresh.


### Considerations

**Cost:** Requires double the infrastructure.

**State management:** If environments have state (databases, caches), synchronization is complex.

**Testing:** Can test new environment before switching, but not with real traffic.


### When to Use

- When instant rollback is critical
- When you can afford duplicate infrastructure
- When deployments are infrequent but high-risk

---


## Strategy 3: A/B Testing


### What Is It?

Split traffic between two (or more) versions and compare their performance on real users. Unlike canary, the goal is comparison, not gradual rollout.


### How It Works

```
┌──────────────────────────────┐
│         Load Balancer        │
└───────┬──────────────┬───────┘
        │ 50%          │ 50%
        ▼              ▼
┌───────────────┐  ┌───────────────┐
│   Version A   │  │   Version B   │
│   (Control)   │  │   (Treatment) │
└───────────────┘  └───────────────┘
        │              │
        ▼              ▼
    Measure         Measure
    Outcomes        Outcomes
        │              │
        └──────┬───────┘
               ▼
         Compare & 
         Decide Winner
```


### A/B Testing for Models

**What you're comparing:**

- Model A (current/control) vs. Model B (new/treatment)
- Different model versions
- Different model architectures
- Different features or thresholds

**What you're measuring:**

- Business metrics (conversion, revenue, engagement)
- Model metrics (accuracy on live data)
- User experience metrics (satisfaction, complaints)


### A/B Test Requirements

**Statistical validity:**

- Sufficient sample size
- Random assignment
- Appropriate test duration
- Proper statistical analysis

**Isolation:**

- Users don't switch between versions
- No interference between groups
- Consistent experience per user

**Measurement:**

- Clear success metrics defined upfront
- Instrumentation in place
- Attribution is correct


### A/B Test Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| Peeking | Looking at results before test completes | Pre-define test duration and sample size |
| Multiple comparisons | Testing many metrics increases false positives | Adjust for multiple comparisons |
| Selection bias | Non-random assignment | Verify randomization |
| Duration | Test too short to capture full effects | Run for complete business cycles |
| Novelty effects | Users react to change, not quality | Allow time for novelty to wear off |


### When A/B Testing Is Appropriate

**Good for:**

- Comparing model versions with unclear winner
- Measuring business impact of model changes
- Optimizing thresholds or parameters

**Not appropriate for:**

- Safety-critical decisions (don't A/B test harm)
- When clear winner is already known
- When you can't wait for statistical significance

---


## Strategy 4: Shadow Mode


### What Is It?

The new model runs in production, receiving real data and making predictions, but its outputs are not used. The old model continues to serve. The new model's predictions are logged for comparison.


### How It Works

```
┌──────────────────────────────┐
│       Production Traffic     │
└──────────────┬───────────────┘
               │
               ├─────────────────────┐
               ▼                     ▼
┌───────────────────────┐  ┌───────────────────────┐
│    Current Model      │  │    New Model          │
│    (Serving)          │  │    (Shadow)           │
└───────────┬───────────┘  └───────────┬───────────┘
            │                          │
            ▼                          ▼
     Users See This             Logged Only
     Response                   (Not Served)
            │                          │
            └──────────┬───────────────┘
                       ▼
              Compare Predictions
              Analyze Differences
```


### Benefits

**Zero user risk:** Users never see the new model's outputs until you're ready.

**Real production data:** Validate with actual traffic patterns.

**Detailed comparison:** Can analyze every prediction difference.


### Challenges

**No business outcomes:** Can compare predictions but not actual impact.

**Resource cost:** Running two models in parallel.

**Latency impact:** Must ensure shadow model doesn't slow down production.


### When to Use

- Before canary release, for additional validation
- When model change is significant
- When prediction errors are costly
- When you want to build confidence before any user exposure

---


## Strategy 5: Feature Flags


### What Is It?

Control which users or requests use the new model through configuration, without code deployment.


### How It Works

```python

# Pseudo-code example

![Article 97: Deployment Strategies – Canary Releases, A/B Testing, and Rollbacks]({{IMAGE_PLACEHOLDER_article-97-deployment-strategies-canary-releases-ab-testing-}})

if feature_flag.is_enabled("new_churn_model", user_id):
    prediction = new_model.predict(features)
else:
    prediction = old_model.predict(features)
```


### Feature Flag Criteria

Enable for specific:

- Users (by ID, segment, or attribute)
- Requests (by type, source, or content)
- Percentage (random sample)
- Time (scheduled windows)
- Geography (regions)


### Benefits

**Granular control:** Enable for exactly who you want.

**Instant toggle:** Turn on/off without deployment.

**Targeting:** Roll out to specific user segments.

**Kill switch:** Immediate disable if problems occur.


### Feature Flag Management

**Best practices:**

- Clean up old flags (don't accumulate forever)
- Audit flag usage
- Document flag purpose and criteria
- Monitor flag evaluations

---


## Implementing Rollback


### Rollback Principles

**Always have a rollback plan.** No deployment should be one-way.

**Rollback should be fast.** Minutes, not hours.

**Rollback should be tested.** Verify it works before you need it.

**Rollback criteria should be defined.** Know when to trigger it.


### Rollback Mechanisms

**Model version rollback:**

- Keep previous model versions
- Can switch serving to previous version
- Model versioning system required

**Configuration rollback:**

- Revert feature flags or routing
- Fastest option if available
- No redeployment required

**Infrastructure rollback:**

- Blue-green switch back
- Container version rollback
- May require redeployment


### Rollback Triggers

Define objective criteria for rollback:

| Metric | Rollback Threshold |
|--------|-------------------|
| Error rate | > 5% increase from baseline |
| Latency (p95) | > 50% increase from baseline |
| Model accuracy | > 10% decrease from baseline |
| Critical errors | Any occurrence |
| User complaints | > 10 in first hour |


### Rollback Procedure

```
ROLLBACK PROCEDURE

Trigger: Rollback criteria met OR critical issue discovered

1. CONFIRM decision (2-person verification if possible)
   
2. EXECUTE rollback
   - Switch traffic to previous version
   - Verify traffic switched
   - Confirm previous version serving

3. VERIFY recovery
   - Check metrics returning to baseline
   - Confirm user-facing behavior normal
   - Monitor for residual issues

4. COMMUNICATE
   - Notify stakeholders
   - Update status page (if applicable)
   - Log incident

5. INVESTIGATE
   - Analyze what went wrong
   - Document root cause
   - Plan fix before retry

Time target: Complete within 15 minutes
```


### Rollback Testing

**Test rollback regularly:**

- During deployment planning
- In staging environment
- Periodically in production (if safe)

**What to verify:**

- Rollback completes successfully
- Time to rollback is acceptable
- System functions correctly after rollback
- Data integrity maintained

---


## Choosing a Deployment Strategy


### Decision Framework

```
┌─────────────────────────────────────────────────────────┐
│                  How risky is this change?              │
└─────────────────────────────────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
    ┌─────────┐      ┌─────────┐      ┌─────────┐
    │  Low    │      │ Medium  │      │  High   │
    │  Risk   │      │  Risk   │      │  Risk   │
    └────┬────┘      └────┬────┘      └────┬────┘
         │                │                │
         ▼                ▼                ▼
    Direct          Canary             Shadow +
    Deployment      Release            Canary +
                                       A/B Test
```


### Strategy by Scenario

| Scenario | Recommended Strategy |
|----------|---------------------|
| Minor model update, well-tested | Direct or small canary |
| New model version | Canary release |
| Major architecture change | Shadow → canary |
| Comparing performance | A/B testing |
| High-stakes model | Shadow → canary → A/B → full |
| Need instant rollback | Blue-green + canary |
| Targeted rollout | Feature flags + canary |


### Combining Strategies

Strategies often combine:

**Example: High-risk model deployment**

1. **Shadow mode** (1 week): Validate predictions match expectations
2. **Canary release** (1%): Initial production exposure
3. **Gradual canary** (1% → 10% → 50%): Expand with monitoring
4. **A/B test** (50/50): Measure business impact
5. **Full rollout**: Complete deployment

---


## Deployment Documentation


### Deployment Record

```
DEPLOYMENT RECORD

Deployment ID: DEPLOY-2024-0315-001
System: Customer Churn Prediction
Model Version: 3.2 → 3.3
Date: 2024-03-15

STRATEGY
Type: Canary Release
Stages: 1% → 10% → 50% → 100%
Duration: 48 hours total

TIMELINE
14:00 - Deploy to 1% (canary)
14:30 - Metrics stable, expand to 10%
18:00 - Metrics stable, expand to 50%
Next day 10:00 - Metrics stable, expand to 100%
Next day 14:00 - Declare deployment complete

METRICS
| Stage | Error Rate | Latency | Model Accuracy |
|-------|------------|---------|----------------|
| 1%    | 0.1%       | 45ms    | 87.2%          |
| 10%   | 0.1%       | 46ms    | 87.1%          |
| 50%   | 0.1%       | 47ms    | 87.0%          |
| 100%  | 0.1%       | 47ms    | 87.0%          |

ISSUES
None

ROLLBACK USED
No

NOTES
Smooth deployment. Model performance consistent with testing.
```

---


## Conclusion

Deployment strategy is how you control the risk of releasing AI into production. The right strategy lets you validate with real data, catch problems early, compare alternatives, and recover quickly when things go wrong.

Key takeaways:

1. **Avoid big bang:** Gradual deployment catches problems before they're widespread.

2. **Canary is the default:** Start small, expand gradually, monitor continuously.

3. **A/B test for comparison:** When you need to know which version is better.

4. **Shadow mode for validation:** Validate with production data before any user exposure.

5. **Rollback is mandatory:** Every deployment needs a tested rollback plan.

6. **Combine strategies:** Use multiple strategies for high-risk deployments.

7. **Define criteria upfront:** Know what metrics trigger expansion or rollback.

The goal isn't to deploy faster—it's to deploy with confidence. Good deployment strategies let you move quickly while maintaining control.

---


## Sources and Further Reading

1. **Google SRE Book** - Release engineering. Available at: sre.google/sre-book

2. **Martin Fowler** - Canary release patterns. Available at: martinfowler.com

3. **AWS** - Deployment strategies. Available at: aws.amazon.com

4. **Netflix Tech Blog** - Deployment practices. Available at: netflixtechblog.com

5. **LaunchDarkly** - Feature flag patterns. Available at: launchdarkly.com

6. **Spotify Engineering** - A/B testing at scale. Available at: engineering.atspotify.com

7. **Microsoft** - Safe deployment practices. Available at: docs.microsoft.com

8. **Chip Huyen** - ML deployment patterns. Available at: huyenchip.com

9. **MLOps Community** - Deployment best practices. Available at: mlops.community

10. **Continuous Delivery** - Jez Humble, David Farley. Foundational book on deployment.

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
