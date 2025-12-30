# Hallucination Detection and Mitigation Framework

**Purpose**: Systematic approach to preventing, detecting, and mitigating AI hallucinations across the deployment lifecycle
**Who This Is For**: Organizations deploying LLMs, AI content systems, chatbots, or code assistants
**Coverage**: Pre-deployment testing, runtime detection, mitigation strategies, incident response
**Last Updated**: December 2024

---

## Framework Overview

This framework provides a structured approach to managing hallucination risks across four phases:

1. **Pre-Deployment**: Testing and architecture decisions before go-live
2. **Deployment Controls**: Technical measures to reduce hallucination risk in production
3. **Runtime Detection**: Monitoring and catching hallucinations in real-time
4. **Incident Response**: What to do when hallucinations reach users/customers

**Key Principle**: You cannot eliminate hallucinations (fundamental LLM limitation), but you can reduce risk through layered controls.

---

## Phase 1: Pre-Deployment Testing and Architecture

### Step 1.1: Risk Classification for Your Use Case

Before deploying, classify your use case's hallucination risk:

| Risk Level | Characteristics | Examples | Verification Bar |
|-----------|-----------------|----------|-----------------|
| **Critical** | Life/safety/legal impact, no human review | Medical diagnosis, legal filings, autonomous vehicles | **Do not deploy** without extreme controls |
| **High** | Financial/reputational impact, limited review | Financial advice, journalism, customer contracts | **Mandatory fact-checking + expert review** |
| **Medium** | Potential for harm, human in loop | Customer service, internal research, draft content | **Human review + spot-checking** |
| **Low** | Low consequence, clearly labeled as experimental | Creative writing, brainstorming, non-critical suggestions | **User awareness + disclaimers** |

**Decision Point**: If your use case is **Critical** risk, reconsider whether LLM is the right technology. Consider:
- Rule-based systems for deterministic outputs
- Human-AI collaboration (AI assists, human decides)
- Extended testing/validation period

### Step 1.2: Choose Appropriate Architecture

Different architectures have different hallucination characteristics:

#### Architecture Option 1: Retrieval-Augmented Generation (RAG)

**How It Works**:
1. User query triggers search in knowledge base
2. Relevant documents retrieved
3. LLM generates answer grounded in retrieved documents
4. Answer includes citations to source documents

**Hallucination Reduction**:
- ✅ Grounds LLM in your actual documents (not just training data)
- ✅ Enables citation/source verification
- ✅ Limits scope to known information
- ❌ Still hallucinates: Can misinterpret documents, invent details not in sources

**Best For**: Q&A over internal documents, customer support, research assistance

**Critical Controls**:
- Ensure retrieval is accurate (get the right documents)
- Show sources to users (enable verification)
- Test with questions your knowledge base can't answer (does it admit "I don't know"?)

#### Architecture Option 2: Fine-Tuned Model

**How It Works**:
1. Start with base model (GPT-4, LLaMA, etc.)
2. Further train on your specific dataset
3. Deploy customized model

**Hallucination Reduction**:
- ✅ Better at your specific domain
- ✅ Can learn organization-specific facts
- ❌ Still hallucinates: Fine-tuning doesn't eliminate base hallucination tendency
- ❌ Can overfit: May hallucinate "facts" from training examples

**Best For**: Specialized domains, consistent style/tone, domain-specific terminology

**Critical Controls**:
- High-quality, fact-checked training data
- Testing on out-of-distribution examples
- Regular retraining as information changes

#### Architecture Option 3: Prompt Engineering (Base Model)

**How It Works**:
1. Use off-the-shelf model (ChatGPT, Claude, etc.)
2. Design careful prompts to reduce hallucinations
3. No custom training or retrieval

**Hallucination Reduction**:
- ✅ Easy to deploy
- ✅ Can include instructions about when to say "I don't know"
- ❌ Least control over hallucinations
- ❌ Prompts can be circumvented or fail unpredictably

**Best For**: Low-risk applications, experimentation, internal tools

**Critical Controls**:
- Extensive prompt testing
- Clear disclaimers
- Human review of outputs

#### Architecture Option 4: Hybrid (RAG + Fine-Tuning + Prompt Engineering)

**How It Works**: Combine multiple approaches

**Hallucination Reduction**:
- ✅ Layered defenses
- ✅ Can specialize model while grounding in current data
- ❌ More complex to build and maintain
- ❌ Still can't eliminate hallucinations

**Best For**: High-stakes applications that justify investment

**Critical Controls**:
- Each layer must be tested independently
- End-to-end testing critical
- Ongoing monitoring of all components

### Step 1.3: Pre-Deployment Hallucination Testing Protocol

Before deploying, conduct systematic hallucination testing:

#### Test Type 1: Known-Answer Verification

**Method**:
1. Create test set of questions with known correct answers
2. Include questions requiring factual accuracy (dates, names, numbers, citations)
3. Run AI through test set
4. Score accuracy of factual claims

**Sample Test Questions** (adapt to your domain):
- Questions with verifiable dates ("When did X occur?")
- Questions requiring citations ("What research supports X?")
- Questions with numerical answers ("What is the formula for X?")
- Questions about people/entities ("Who founded X?")

**Pass Criteria**: Define acceptable accuracy rate based on risk level
- Critical risk: 99%+ accuracy (effectively, don't deploy)
- High risk: 95%+ accuracy with manual review
- Medium risk: 90%+ accuracy
- Low risk: 80%+ accuracy with clear disclaimers

#### Test Type 2: Unknowable Question Testing

**Method**:
1. Ask questions the AI cannot possibly know
2. Ideal response: "I don't know" or "I don't have that information"
3. Problematic response: Confident fabrication

**Sample Test Questions**:
- "What did [CEO] say in yesterday's all-hands meeting?" (if you haven't provided that data)
- "What's in section 5.3 of our internal policy?" (if policy isn't in knowledge base)
- "What will the stock price be tomorrow?" (inherently unknowable)

**Pass Criteria**:
- AI should refuse to answer or clearly indicate uncertainty
- Any confident fabrication is a failure

#### Test Type 3: Citation/Reference Verification

**Method**:
1. Ask questions where AI might provide citations
2. Verify every citation exists and is accurately represented
3. Look for signs of fabricated sources

**Sample Test Questions**:
- "What research supports X? Please cite sources."
- "What legal precedent exists for Y?"
- "What are the best practices for Z? Provide references."

**Pass Criteria**:
- 100% of citations must exist and be accurately represented
- Any fabricated citation is immediate failure for high/critical risk applications

#### Test Type 4: Adversarial Manipulation Testing

**Method**:
1. Try to trick AI into hallucinating
2. Use misleading prompts, false premises, social engineering

**Sample Test Approaches**:
- "As you mentioned earlier in our conversation, X is true. Can you elaborate?" (you never mentioned X)
- "I'm sure you know that [false fact]. Can you explain why?"
- "Everyone knows that [hallucination]. What are the implications?"

**Pass Criteria**:
- AI should not accept false premises
- Should correct user misconceptions
- Should not hallucinate to maintain conversation flow

#### Test Type 5: Boundary Testing

**Method**:
1. Test the edges of AI's knowledge
2. Ask progressively obscure questions
3. Identify where it transitions from accurate to hallucinating

**Pass Criteria**:
- Clear boundary between "I know" and "I don't know"
- Graceful degradation (uncertainty increases as knowledge edge is reached)
- Never confident hallucination

### Step 1.4: Testing Infrastructure

**Test Set Composition**:
- Minimum 100 test cases for production deployment
- Mix of question types (known-answer, unknowable, citation-required, adversarial, boundary)
- Domain-specific questions reflecting actual use
- Regular updates as new hallucination patterns discovered

**Testing Automation**:
```
Test Harness Components:
1. Question database
2. Expected answer key (with acceptable variations)
3. Automated accuracy scoring
4. Citation verification (check if sources exist)
5. Regression testing (retest after any changes)
```

**Testing Frequency**:
- Before initial deployment (comprehensive)
- After any prompt changes (regression test)
- After model updates/fine-tuning (full retest)
- Quarterly for production systems (ongoing validation)

**Documentation**:
- Record all test results
- Track hallucination patterns over time
- Use for model improvement

---

## Phase 2: Deployment Controls (Technical Mitigation)

### Control 1: Grounding and Fact-Checking Layers

#### Option A: Real-Time Fact-Checking

**Implementation**:
1. AI generates response
2. Before showing to user, fact-checking layer validates claims
3. Flag or block responses with unverified claims

**Fact-Checking Methods**:
- **Knowledge graph lookup**: Verify factual claims against structured data
- **Web search verification**: For current events, check against recent trusted sources
- **Database queries**: For business data, verify against authoritative systems
- **Citation checking**: Validate that cited sources exist and support claims

**Example Workflow**:
```
1. User asks: "What's our return policy for electronics?"
2. AI generates: "Electronics can be returned within 30 days with receipt."
3. Fact-checker queries policy database
4. Database confirms: 30-day policy exists
5. Response approved and shown to user

Alternative:
3. Database shows: Actually 14-day policy for electronics
4. Response blocked or corrected
5. Corrected version shown to user
```

**Limitations**:
- Adds latency (fact-checking takes time)
- Not all claims are fact-checkable
- Requires maintaining fact-checking infrastructure

#### Option B: Confidence Scores and Uncertainty Quantification

**Implementation**:
1. AI generates response with confidence score
2. Low-confidence responses flagged for review or include uncertainty disclaimers

**Confidence Indicators**:
- Model-native confidence scores (when available)
- Consistency checking (ask same question multiple times, see if answers vary)
- Presence of hedge words ("likely", "possibly", "might")

**User Communication**:
```
High Confidence (>90%):
"Our return policy for electronics is 14 days with receipt."

Medium Confidence (60-90%):
"Based on available information, our electronics return policy appears to be 14 days with receipt. Please verify with customer service."

Low Confidence (<60%):
"I don't have reliable information about the electronics return policy. Please check with customer service or refer to the policy documentation."
```

**Limitations**:
- LLM confidence scores are often uncalibrated (high confidence when wrong)
- Requires user to understand confidence indicators

### Control 2: Output Filtering and Validation

#### Filter Type 1: Pattern-Based Detection

**Detect hallucination red flags**:
- Citations with suspicious formats
- Overly specific claims without sources
- Invented jargon or acronyms
- Implausible precision (e.g., "73.842% of people believe...")

**Implementation**:
```
Red Flag Detection Rules:
1. IF output contains case citation format (e.g., "123 F.3d 456")
   THEN verify citation exists in legal database
   ELSE block output

2. IF output contains URL
   THEN verify URL is accessible
   ELSE flag for review

3. IF output contains specific statistics
   THEN require source attribution
   ELSE add disclaimer "Unverified statistic"
```

#### Filter Type 2: Consistency Checking

**Method**:
1. Generate response multiple times (with temperature > 0)
2. Compare responses
3. If significantly different, flag as low confidence

**Example**:
```
Question: "What year was our company founded?"

Response 1: "The company was founded in 2018."
Response 2: "The company was founded in 2018."
Response 3: "The company was founded in 2018."
→ High consistency, likely accurate

Response 1: "The company was founded in 2018."
Response 2: "The company was founded in 2019."
Response 3: "The company was founded in 2017."
→ Low consistency, likely hallucination → Flag for review
```

### Control 3: Human-in-the-Loop Workflows

**Critical Decision Points for Human Review**:

| Decision Type | AI Role | Human Role | Review Trigger |
|--------------|---------|------------|----------------|
| **Legal filings** | Draft assistance only | Final review & signing | 100% review mandatory |
| **Medical advice** | Information gathering | Diagnosis & treatment | 100% clinical review |
| **Financial advice** | Research & calculations | Final recommendation | Review all transactions |
| **Customer commitments** | Answer questions | Approve deals/contracts | Review all binding commitments |
| **Published content** | Draft content | Fact-check & publish | Review factual claims |
| **Code deployment** | Generate code | Test & review | Test all code before deploy |

**Review Workflow Design**:
1. **Flag for review**: Automatic rules determine what needs human review
2. **Review queue**: Humans see flagged outputs before they reach users
3. **Approve/Edit/Reject**: Human decision with tracked accountability
4. **Feedback loop**: Human corrections inform future AI improvement

### Control 4: Attribution and Sourcing

**Require AI to cite sources**:
- Prompt: "Answer the question and cite the specific sources for each factual claim."
- Verification: Check that cited sources exist and support the claims
- User benefit: Users can verify claims independently

**Example Output**:
```
Question: "What are the requirements for GDPR compliance?"

Good (with attribution):
"GDPR requires organizations to:
1. Obtain explicit consent for data processing (Article 6)
2. Enable the right to be forgotten (Article 17)
3. Report data breaches within 72 hours (Article 33)

Source: EU GDPR Official Text, Regulation (EU) 2016/679"

Bad (no attribution):
"GDPR has various requirements including consent, data protection, and breach notification, among other things."
```

**Citation Verification**:
- Automated: Check that source exists (URL accessible, database record exists)
- Manual: Verify that source actually supports the claim (can't fully automate)

---

## Phase 3: Runtime Detection and Monitoring

### Monitor 1: User Feedback Channels

**Create easy reporting mechanisms**:
- "Report an error" button on AI responses
- User ratings (thumbs up/down)
- Explicit question: "Was this information accurate?"

**User Feedback Workflow**:
```
1. User clicks "Report error"
2. User describes the problem
3. Ticket created for review
4. Human investigates
   - Is it a hallucination?
   - How did it get through filters?
   - What's the correct information?
5. Response:
   - Correct the specific user's issue
   - Update knowledge base/prompts
   - Add to regression test set
```

### Monitor 2: Automated Anomaly Detection

**Detect unusual AI behavior**:
- Response patterns that differ from baseline
- Sudden changes in citation frequency
- Responses with unusual word patterns

**Example Metrics to Monitor**:
- Citation rate (responses with sources): Expect ~60% for knowledge work; if drops to 20%, investigate
- Response length: Sudden change might indicate prompt injection or hallucination
- Hedge word frequency: Increase in "possibly", "might", "likely" may indicate low confidence
- Rejection rate: If AI says "I don't know" more often, could indicate knowledge base issues

### Monitor 3: Spot-Checking and Auditing

**Random Sample Auditing**:
- Select random sample of AI responses (e.g., 1% of traffic)
- Human expert reviews for accuracy
- Track error rate over time

**Audit Frequency**:
- Daily: High-risk applications (medical, legal, financial)
- Weekly: Medium-risk applications
- Monthly: Low-risk applications

**Audit Metrics**:
- **Hallucination rate**: % of responses with factual errors
- **Severity**: Minor errors vs. dangerous hallucinations
- **Pattern detection**: Are certain question types more prone to hallucination?

### Monitor 4: A/B Testing for Mitigation Strategies

**Test different approaches**:
- Variant A: Stricter prompts ("Only answer if certain")
- Variant B: RAG with more retrieval results
- Variant C: Lower temperature (less creative, more deterministic)

**Measure**:
- Hallucination rate (via spot-checking or user reports)
- User satisfaction
- Task completion rate

**Optimize** based on results

---

## Phase 4: Incident Response Plan

### When Hallucinations Reach Users

**Step 1: Detect and Triage (within 1 hour)**

**Detection Sources**:
- User reports
- Automated monitors
- Media reports
- Internal spot-check

**Triage Questions**:
1. How many users affected?
2. What was the hallucination? (Incorrect fact, made-up citation, dangerous advice?)
3. What domain? (Medical = critical; general knowledge = lower severity)
4. What consequences? (Legal liability, safety risk, reputational damage?)

**Severity Classification**:
- **Critical** (Sev 1): Life/safety risk, legal violations, major financial impact
- **High** (Sev 2): Significant reputational damage, moderate financial impact
- **Medium** (Sev 3): User confusion, minor reputational impact
- **Low** (Sev 4): Trivial errors with minimal impact

**Step 2: Immediate Containment (within 2-4 hours)**

**For Sev 1/2 Incidents**:
1. **Disable affected functionality** if hallucination is systematic
2. **Issue immediate user communication** (warning, correction)
3. **Alert legal/compliance** if regulatory implications
4. **Preserve evidence** (logs, user interactions, model version)

**For Sev 3/4 Incidents**:
1. **Flag for correction** in next release
2. **Add to test cases** for regression prevention
3. **Monitor for similar issues**

**Step 3: Investigation (1-7 days depending on severity)**

**Root Cause Analysis Questions**:
- Why did the AI hallucinate? (Prompt issue, training data gap, model limitation?)
- Why didn't pre-deployment testing catch it? (Test coverage gap?)
- Why didn't runtime controls catch it? (Filter evasion, confidence scoring failure?)
- Why didn't we detect it sooner? (Monitoring gap?)

**Investigation Outputs**:
- Technical root cause
- Process root cause
- Recommendations for prevention

**Step 4: Remediation and Communication**

**Technical Fixes**:
- Update prompts to address specific hallucination pattern
- Improve fact-checking filters
- Update knowledge base
- Retrain/fine-tune if necessary

**User Communication**:
```
Sev 1/2: Public statement required
- Acknowledge the error
- Explain what happened (in accessible terms)
- Describe what was wrong
- State corrective actions
- Provide direct contact for affected users

Sev 3/4: Targeted communication
- Notify affected users directly
- Provide correct information
- Brief internal note on lessons learned
```

**Step 5: Post-Incident Review**

**Conduct blameless post-mortem**:
1. Timeline of incident
2. Root causes (technical and process)
3. What worked well (e.g., rapid detection)
4. What can be improved
5. Action items with owners and deadlines

**Update Framework**:
- Add incident pattern to test cases
- Update monitoring rules
- Revise deployment controls
- Update training materials

---

## Mitigation Strategy Decision Matrix

Use this matrix to select appropriate mitigation strategies based on your risk profile:

| Use Case Risk | Pre-Deployment | Deployment Controls | Runtime Monitoring | Incident Response |
|--------------|---------------|--------------------|--------------------|------------------|
| **Critical** | Extensive testing (99%+ accuracy), RAG + fine-tuning, adversarial testing | 100% human review, real-time fact-checking, strict filters | Continuous auditing, automated anomaly detection | Immediate disable capability, legal review, public communication plan |
| **High** | Comprehensive testing (95%+ accuracy), RAG recommended | Human review for key decisions, citation verification | Daily spot-checks, user feedback tracking | Fast response (<2 hrs), user notification, root cause analysis |
| **Medium** | Standard testing (90%+ accuracy), prompt engineering | Confidence scoring, periodic human review | Weekly audits, user reporting | Response within 24 hrs, targeted fixes |
| **Low** | Basic testing (80%+ accuracy) | Disclaimers, user awareness | Monthly reviews, user feedback | Best-effort fixes, log for learning |

---

## Hallucination Mitigation Checklist

### Pre-Deployment
- [ ] Risk classification completed (Critical/High/Medium/Low)
- [ ] Architecture selected appropriate for risk level
- [ ] Test set created (minimum 100 cases)
- [ ] Hallucination testing completed (known-answer, unknowable, citation, adversarial, boundary)
- [ ] Accuracy meets minimum threshold for risk level
- [ ] Testing infrastructure in place for ongoing regression testing

### Deployment Controls
- [ ] Grounding mechanism in place (RAG, database integration, etc.)
- [ ] Fact-checking layer implemented (if High/Critical risk)
- [ ] Output filtering rules defined
- [ ] Human review workflow designed (for critical decisions)
- [ ] Attribution/citation requirements implemented
- [ ] Disclaimers and user education in place

### Runtime Monitoring
- [ ] User feedback mechanism (report errors)
- [ ] Automated anomaly detection
- [ ] Spot-checking/audit schedule defined
- [ ] Metrics dashboard (hallucination rate, user satisfaction, etc.)
- [ ] Alert thresholds set (when to escalate)

### Incident Response
- [ ] Incident response plan documented
- [ ] Severity classification defined
- [ ] Escalation paths identified
- [ ] Communication templates prepared
- [ ] Disable/rollback capability tested
- [ ] Post-incident review process defined

---

## Advanced Mitigation Techniques

### Technique 1: Chain-of-Thought Verification

**Method**:
- Ask AI to show its reasoning
- Verify each step in the reasoning chain
- Catch hallucinations where logic fails

**Example**:
```
Question: "What's the ROI formula?"

Basic Response (more likely to hallucinate):
"The ROI formula is (Gain from Investment - Cost of Investment) / Cost of Investment × 100%"

Chain-of-Thought Response (easier to verify):
"Let me break down the ROI formula:
1. ROI measures return on investment
2. It compares gain to cost
3. Formula: (Gain - Cost) / Cost
4. Often expressed as percentage: × 100%
5. Final formula: (Gain from Investment - Cost of Investment) / Cost of Investment × 100%"
```

Benefits:
- Intermediate steps are verifiable
- Easier to spot where hallucination occurs
- User can understand AI's reasoning

### Technique 2: Multi-Model Consensus

**Method**:
- Get answers from multiple AI models
- If they agree, higher confidence
- If they disagree, flag for review

**Example**:
```
Question: "When was Python first released?"

GPT-4: "Python was first released in 1991."
Claude: "Python was first released in 1991 by Guido van Rossum."
Gemini: "Python was first released in 1991."

→ Consensus: 1991 (high confidence)

Alternative:
GPT-4: "Python was first released in 1991."
Claude: "Python was first released in 1989."
Gemini: "Python was first released in 1991."

→ Disagreement detected → Flag for human verification → Actual: 1991
```

### Technique 3: Temporal Consistency Checking

**Method**:
- For information that changes over time, check freshness
- Detect when AI is using outdated information

**Example**:
```
Question: "Who is the CEO of OpenAI?"

AI Response: "Sam Altman is the CEO of OpenAI."

Consistency Check:
- Query knowledge base for "OpenAI CEO" with timestamp
- If knowledge base updated recently and says same thing → Pass
- If knowledge base has different answer → Flag inconsistency
- If knowledge base has no answer → Note: Potentially outdated
```

---

## Organizational Capability Building

### Training Programs

**For AI Users** (Everyone who uses AI tools):
- What hallucinations are and why they happen
- Red flags for hallucinations (made-up citations, overly specific claims)
- Verification requirements for your role
- How to report hallucinations

**For AI Developers/Engineers**:
- Technical causes of hallucinations
- Architecture patterns for mitigation (RAG, fine-tuning, grounding)
- Testing methodologies
- Monitoring and debugging

**For Reviewers** (People who verify AI outputs):
- Domain-specific hallucination patterns
- Fact-checking techniques
- Tools for verification
- Escalation procedures

### Governance Policies

**Acceptable Use Policy Section on Hallucinations**:
```
AI Hallucination Policy

1. All AI outputs must be verified before use in:
   - Legal filings or contracts
   - Medical decisions or advice
   - Financial recommendations
   - Published content
   - Customer commitments

2. Verification methods (choose appropriate):
   - Domain expert review
   - Citation checking
   - Independent research
   - Database validation

3. Prohibited uses:
   - Using unverified AI outputs for high-stakes decisions
   - Presenting AI outputs as verified fact without checking
   - Deploying AI without hallucination testing

4. Reporting requirement:
   - All detected hallucinations must be reported via [reporting channel]
   - Hallucinations that reach customers/users must be escalated immediately
```

---

## Success Metrics

Track these metrics to measure hallucination management effectiveness:

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Pre-Deployment Test Accuracy** | >95% for high-risk, >90% for medium-risk | Automated test suite |
| **Hallucination Incidents in Production** | <1 per 10,000 interactions (high-risk) | User reports + spot-checks |
| **Mean Time to Detection** | <24 hours | Time from hallucination to detection |
| **Mean Time to Remediation** | <48 hours for Sev 2, <4 hours for Sev 1 | Time from detection to fix deployed |
| **Repeat Hallucination Rate** | <5% | % of hallucinations that recur after fix |
| **User Confidence in AI Outputs** | >80% | User surveys |

---

**Used By Articles**:
- AI Hallucinations: When Machines Confidently Lie
- Generative AI Explained: How ChatGPT, DALL-E, and Claude Work
- [Future articles on LLM deployment, AI risk management, AI quality assurance]

---

**Sources and Further Reading**:
- OpenAI. "GPT-4 Technical Report." arXiv:2303.08774, March 2023. (Discussion of hallucination rates)
- Anthropic. "Constitutional AI: Harmlessness from AI Feedback." arXiv:2212.08073, December 2022. (Reducing hallucinations through training)
- Ji et al. "Survey of Hallucination in Natural Language Generation." ACM Computing Surveys, 2023. (Comprehensive academic review)
- Lewis et al. "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." NeurIPS 2020. (RAG methodology)
- NIST AI Risk Management Framework (AI RMF 1.0), January 2023. (Risk-based governance approach)

**Last Updated**: December 2024
