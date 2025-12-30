# Narrow AI Examples

**Concept**: Narrow AI (Also called Weak AI or Applied AI)
**Definition**: AI systems designed for specific tasks that cannot transfer learning to other domains

---

## Business Examples

### Example 1: Email Spam Filters

**What It Does**:
- Analyzes email characteristics (sender, content, links, patterns)
- Classifies messages as spam or legitimate
- Learns from user corrections (marking spam/not spam)

**Why It's Narrow AI**:
- Brilliant at identifying spam (95%+ accuracy)
- Completely useless for anything else
- Can't schedule meetings, write emails, or summarize content
- Single-purpose specialist

**Governance Implications**:
- Low risk (mistakes = annoying, not harmful)
- Minimal oversight needed
- No explanation required for decisions
- Users can easily override

---

### Example 2: Resume Screening Tools

**What It Does**:
- Scans resumes for keywords, skills, experience
- Ranks candidates based on job requirements
- Filters large applicant pools to manageable numbers
- Identifies potential matches

**Why It's Narrow AI**:
- Excellent at pattern matching resume content
- Cannot conduct interviews
- Cannot assess cultural fit or soft skills
- Cannot adapt screening criteria across different job types without retraining

**Governance Implications**:
- HIGH RISK for bias (historical hiring patterns)
- Requires regular audits
- Must comply with anti-discrimination laws
- Needs human oversight of decisions
- Explainability important (why was candidate rejected?)

---

### Example 3: Customer Service Chatbots

**What It Does**:
- Answers common customer questions
- Routes complex issues to humans
- Handles FAQs, order tracking, account info
- Available 24/7

**Why It's Narrow AI**:
- Great at scripted conversations and knowledge base searches
- Struggles with novel questions or complex issues
- Cannot understand emotional nuance well
- Must escalate to humans frequently

**Governance Implications**:
- Medium risk (customer frustration if poorly implemented)
- Requires clear disclosure ("You're chatting with AI")
- Needs easy escalation to humans
- Regular monitoring of customer satisfaction

---

### Example 4: Fraud Detection Systems

**What It Does**:
- Monitors transactions for unusual patterns
- Flags potentially fraudulent activity
- Blocks suspicious transactions
- Learns from confirmed fraud cases

**Why It's Narrow AI**:
- Excellent at recognizing fraud patterns
- Cannot investigate fraud or determine intent
- Cannot handle transaction types it wasn't trained on
- Specialized for specific fraud types (credit card vs insurance)

**Governance Implications**:
- HIGH RISK (false positives harm customers)
- Requires human review of flagged transactions
- Must be explainable (why was transaction blocked?)
- Needs regular retraining as fraud patterns evolve
- Balance: too sensitive = customer frustration, too lenient = fraud losses

---

### Example 5: Recommendation Engines

**What It Does**:
- Suggests products, content, or connections
- Learns from user behavior and preferences
- Optimizes for engagement or purchases
- Powers Netflix, Amazon, LinkedIn, etc.

**Why It's Narrow AI**:
- Great at predicting what you might like
- Cannot create content or products
- Cannot understand *why* you like something
- Only works within its domain (Netflix can't recommend books)

**Governance Implications**:
- Medium risk (filter bubbles, echo chambers)
- Transparency important (why was this recommended?)
- Potential for manipulation (optimizing wrong metric)
- Diversity considerations (over-optimization narrows exposure)

---

## Key Characteristics of Narrow AI

**What Narrow AI CAN Do**:
- Excel at single, well-defined tasks
- Process data faster than humans
- Work 24/7 without breaks
- Scale efficiently
- Maintain consistency

**What Narrow AI CANNOT Do**:
- Transfer learning to new domains
- Understand context like humans
- Handle novel situations
- Reason about things outside training data
- Adapt to fundamental changes without retraining

---

## Governance Framework for Narrow AI

### Risk Assessment Questions

1. **What task is the AI performing?**
   - Classification/screening = high bias risk
   - Recommendation = medium manipulation risk
   - Automation = check for accuracy

2. **What happens if it's wrong?**
   - Hiring decision = discrimination lawsuit
   - Fraud detection = customer harm or financial loss
   - Content moderation = free speech concerns

3. **Can decisions be explained?**
   - Black box models harder to audit
   - Explainability critical for high-stakes decisions

4. **Is there human oversight?**
   - Human-in-the-loop for critical decisions
   - Human-on-the-loop for monitoring
   - Fully automated only for low-risk tasks

5. **How is it being monitored?**
   - Performance metrics tracked
   - Bias audits conducted
   - Drift detection in place
   - Feedback loops established

---

## Vendor Evaluation Checklist

When buying Narrow AI tools:

- [ ] What specific task does this perform?
- [ ] What data was it trained on?
- [ ] What are its accuracy rates?
- [ ] What are known failure modes?
- [ ] Can it explain its decisions?
- [ ] How often does it need retraining?
- [ ] What happens if it makes a mistake?
- [ ] Is there human oversight built in?
- [ ] Does it comply with relevant regulations?
- [ ] Can we audit it?

---

## Common Mistakes with Narrow AI

**Mistake 1: Expecting Generalization**
- "Our hiring AI works great for engineers, let's use it for sales roles!"
- Reality: It will need retraining or separate model

**Mistake 2: Set and Forget**
- "We deployed the fraud detection system two years ago"
- Reality: Patterns drift, models degrade, needs regular updates

**Mistake 3: Over-trusting Accuracy Metrics**
- "It's 95% accurate, we're good!"
- Reality: Depends what the 5% errors are - if they're discriminatory, you have legal problems

**Mistake 4: Ignoring Edge Cases**
- "It handles 90% of customer questions"
- Reality: The 10% it can't handle may be your most valuable customers

**Mistake 5: Vendor Hype Belief**
- "The vendor said it 'understands' our industry"
- Reality: It pattern-matches on industry keywords, doesn't actually understand

---

## Related Concepts

- **Artificial General Intelligence (AGI)**: The next level - AI that can transfer learning across domains
- **Machine Learning**: The primary technique used to build Narrow AI
- **Deep Learning**: Subset of ML often used in Narrow AI (especially for vision, language)
- **Discriminative AI**: Often Narrow AI for classification tasks
- **Generative AI**: Can be Narrow (image generation) but appears more general-purpose

---

**Used By Articles**:
- The AI Family Tree: Understanding AI Intelligence Levels
- [Future articles on AI types, capabilities, limitations]
