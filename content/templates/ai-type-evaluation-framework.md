# AI Type Evaluation Framework

**Purpose**: Quickly assess what type of AI system you're dealing with - for procurement, policy, and risk assessment
**Use Case**: Business leaders, procurement teams, risk managers, compliance officers

---

## Quick Classification Guide

### Intelligence Level Assessment

**Ask These Questions**:

1. **Can it transfer learning to new domains?**
   - NO → Narrow AI ✅ (what we have today)
   - YES → AGI or beyond ❌ (doesn't exist yet)

2. **What happens if you give it a completely different task?**
   - Fails completely → Narrow AI
   - Adapts and learns → AGI (not available)
   - Solves it better than humans → ASI (science fiction for now)

3. **Vendor claims it "understands" your industry?**
   - Reality: Trained on industry data ≠ actual understanding
   - Still Narrow AI, just specialized for your domain

---

## Functional Type Assessment

### Is It Generative or Discriminative?

**Discriminative AI** (Classifies/Decides):
- [ ] Screens resumes or applications
- [ ] Flags fraud or policy violations
- [ ] Routes customer service tickets
- [ ] Approves/rejects decisions
- [ ] Categorizes content
- [ ] Predicts outcomes (churn, risk, etc.)

**Generative AI** (Creates Content):
- [ ] Writes text (emails, posts, descriptions)
- [ ] Creates images or videos
- [ ] Generates code
- [ ] Drafts documents
- [ ] Summarizes content
- [ ] Translates languages

**Both** (Hybrid Systems):
- [ ] Chatbots that classify intent AND generate responses
- [ ] Content moderation that detects violations AND suggests edits
- [ ] Some marketing tools that analyze AND create

---

## Risk Assessment Matrix

### Step 1: Identify Intelligence Level + Function Type

| Type | Risk Level | Example | Key Concerns |
|------|------------|---------|--------------|
| **Narrow + Discriminative** | HIGH | Resume screening | Bias, discrimination |
| **Narrow + Generative** | MEDIUM | Content creation | Accuracy, IP ownership |
| **AGI + Discriminative** | VERY HIGH | N/A (doesn't exist) | Autonomous decision-making at scale |
| **AGI + Generative** | VERY HIGH | N/A (doesn't exist) | Misinformation, deepfakes at scale |
| **ASI + Any** | EXTREME | N/A (doesn't exist) | Existential risk, control problem |

### Step 2: Apply Domain-Specific Multipliers

**High-Stakes Domains** (multiply risk by 2x):
- Healthcare (patient safety)
- Finance (fraud, lending)
- Criminal justice (sentencing, parole)
- Employment (hiring, firing)
- Education (grading, admissions)

**Low-Stakes Domains** (risk as-is):
- Marketing content
- Internal productivity tools
- Entertainment recommendations
- Non-critical automation

---

## Vendor Evaluation Checklist

### For Narrow AI Tools

**Claims to Verify**:
- [ ] "AI-powered" - What specific AI technique? (Many vendors use "AI" for simple rules)
- [ ] "Understands your industry" - Trained on industry data or just keyword matching?
- [ ] "Human-level performance" - On what specific task? In what conditions?
- [ ] "90% accurate" - Accurate at what? On whose test data?

**Red Flags**:
- ⚠️ Vendor won't share accuracy metrics
- ⚠️ Can't explain failure modes
- ⚠️ Claims to do "everything" (Narrow AI can't)
- ⚠️ No information about training data
- ⚠️ Promises AGI-like capabilities today

**Must-Have Information**:
- [x] Specific task it performs
- [x] Accuracy/performance metrics
- [x] What data it was trained on
- [x] Known limitations
- [x] Explanation capability (for high-stakes decisions)
- [x] Human oversight options
- [x] Update/retraining frequency
- [x] Compliance with relevant regulations

---

## Decision Framework Templates

### Template 1: Procurement Decision

```
AI TOOL EVALUATION

Tool Name: ________________
Vendor: ________________
Use Case: ________________

CLASSIFICATION
Intelligence Level: [ ] Narrow  [ ] AGI (unavailable)  [ ] ASI (unavailable)
Function Type: [ ] Discriminative  [ ] Generative  [ ] Hybrid
Domain Risk: [ ] High-Stakes  [ ] Low-Stakes

CAPABILITIES
What specific task does it perform?
_________________________________

What can it NOT do?
_________________________________

RISK ASSESSMENT
What happens if it makes a mistake?
_________________________________

Who is affected by its decisions?
_________________________________

Can decisions be explained? [ ] Yes [ ] No [ ] Partially

OVERSIGHT
Is human review required? [ ] Yes [ ] No
How often: [ ] Every decision [ ] Sampling [ ] Exception cases

COMPLIANCE
Regulations applicable:
[ ] GDPR  [ ] EEOC  [ ] Fair Credit  [ ] Other: _______

Does tool comply? [ ] Yes [ ] No [ ] Unknown

RECOMMENDATION
[ ] Approve  [ ] Approve with oversight  [ ] Deny  [ ] Need more info
```

---

### Template 2: Policy Setting

```
AI GOVERNANCE POLICY

For: [Narrow AI / AGI / ASI]
Function: [Discriminative / Generative / Hybrid]

PERMITTED USES
✅ Approved for:
- ____________________
- ____________________

⛔ NOT approved for:
- ____________________
- ____________________

OVERSIGHT REQUIREMENTS
- Human review: [Always / Sampling / Exceptions only]
- Review frequency: [Per decision / Weekly / Monthly]
- Escalation path: ____________________

MONITORING
- Performance metrics tracked: ____________________
- Bias audits: [Frequency: _____]
- Drift detection: [ ] Enabled [ ] Disabled
- Incident reporting: ____________________

COMPLIANCE
- Regulations: ____________________
- Audit trail required: [ ] Yes [ ] No
- Explainability required: [ ] Yes [ ] No
- Documentation: ____________________
```

---

### Template 3: Risk Assessment

```
AI SYSTEM RISK ASSESSMENT

System: ________________
Classification: ________________

RISK FACTORS (Rate 1-5, 5 = highest risk)

Potential Harm Severity: ___/5
- What's the worst that could happen?
- Who would be affected?

Probability of Harm: ___/5
- How often does the system make mistakes?
- Are there edge cases where it fails?

Affected Population Size: ___/5
- How many people impacted?
- Are vulnerable populations affected?

Reversibility: ___/5 (1 = easily reversed, 5 = irreversible)
- Can decisions be appealed/corrected?
- What's the cost of reversing mistakes?

Transparency: ___/5 (1 = fully transparent, 5 = black box)
- Can it explain decisions?
- Is the logic auditable?

TOTAL RISK SCORE: ___/25

RISK CATEGORY
- 1-8: Low Risk (standard oversight)
- 9-16: Medium Risk (enhanced oversight)
- 17-25: High Risk (intensive oversight or don't deploy)

MITIGATION REQUIRED
Based on risk score: ____________________
____________________
____________________
```

---

## Common Mistakes to Avoid

### Mistake 1: Believing Vendor Hype
**They Say**: "Our AI understands your business like a human consultant"
**Reality**: It's Narrow AI trained on your industry data - still can only do specific tasks

**Fix**: Ask vendor to demonstrate failure modes and limitations

---

### Mistake 2: Confusing Narrow AI with AGI
**Symptom**: Expecting the hiring AI to also help with performance reviews
**Reality**: Each task needs separate system or retraining

**Fix**: Map one AI tool to one specific task

---

### Mistake 3: Ignoring the Discriminative/Generative Distinction
**Symptom**: Same governance approach for resume screener (discriminative) and job description writer (generative)
**Reality**: Different risks require different oversight

**Fix**: Use this framework to categorize and govern appropriately

---

### Mistake 4: "Set and Forget" Deployment
**Symptom**: Deployed 2 years ago, never reviewed since
**Reality**: Models drift, data changes, performance degrades

**Fix**: Schedule regular performance reviews and bias audits

---

### Mistake 5: No Human Oversight on High-Stakes Decisions
**Symptom**: AI automatically rejects loan applications
**Reality**: High legal/ethical risk for discriminatory outcomes

**Fix**: Human review required for high-stakes Discriminative AI

---

## When to Bring in Experts

**You Need Expert Help If**:
- System affects civil rights (hiring, housing, credit)
- High financial risk (fraud detection, lending)
- Safety-critical (healthcare, autonomous vehicles)
- Regulatory scrutiny (finance, healthcare, government)
- Black box model with high-stakes decisions
- Vendor can't explain how it works

**Types of Experts**:
- AI Ethics Consultant
- Algorithmic Bias Auditor
- AI Governance Specialist
- Domain-specific (legal, medical, financial)

---

## Future-Proofing for AGI/ASI

Even if AGI/ASI is years away, build governance now:

**Scalable Frameworks**:
- Design oversight for increasing capability levels
- Plan for AI that can learn new tasks
- Consider scenarios where AI exceeds human performance

**Institutional Knowledge**:
- Document why decisions were made
- Build organizational AI literacy
- Create feedback loops for learning

**Adaptability**:
- Don't hard-code today's AI limitations into policies
- Regular policy reviews (annually minimum)
- Stay informed on AI capability developments

---

## Quick Reference Card

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AI TYPE QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INTELLIGENCE LEVELS
├─ Narrow AI (EXISTS TODAY)
│  └─ Single task specialist
│  └─ Cannot transfer learning
│  └─ Examples: Spam filter, resume screener
│
├─ AGI (DOESN'T EXIST - Maybe 2027-2040)
│  └─ Human-level across domains
│  └─ Can transfer learning
│  └─ Examples: N/A (not built yet)
│
└─ ASI (DOESN'T EXIST - Maybe 2027+)
   └─ Surpasses humans everywhere
   └─ Self-improving
   └─ Examples: N/A (not built yet)

FUNCTION TYPES
├─ Discriminative
│  └─ Classifies, categorizes, decides
│  └─ Risk: Bias, discrimination
│  └─ Examples: Screening, flagging, approving
│
└─ Generative
   └─ Creates new content
   └─ Risk: Accuracy, IP, misinformation
   └─ Examples: Writing, images, code

GOVERNANCE PRIORITY
1. High-stakes Discriminative Narrow AI (hiring, lending)
2. Public-facing Generative AI (customer content)
3. Low-stakes automation (internal tools)
4. Plan for AGI/ASI (even if distant)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

**Used By Articles**:
- The AI Family Tree: Understanding AI Intelligence Levels
- [Future articles on AI procurement, AI governance, AI risk assessment]
