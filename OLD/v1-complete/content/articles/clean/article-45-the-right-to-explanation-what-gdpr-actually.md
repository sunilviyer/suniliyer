
![Article 45: The Right to Explanation – What GDPR Actually Requires]({{IMAGE_PLACEHOLDER_article-45-the-right-to-explanation-what-gdpr-actually-requi}})

---
category: "Legal Frameworks"
learning_objectives:

  - "Understand the key concepts and principles of regulatory requirements"
  - "Implement audit procedures in real-world scenarios"
  - "Evaluate transparency measures for organizational compliance"
seo_keywords:

  - "article"
  - "right"
  - "the right"
  - "explanation"
  - "what"
word_count: 4049
processed_date: "2025-12-18T20:00:55.018Z"
---


## The Source of the Debate


### Where Does the "Right to Explanation" Come From?

The phrase "right to explanation" doesn't appear in GDPR's binding articles. The debate centers on several provisions that, together, might (or might not) create such a right.

**Article 13(2)(f) and Article 14(2)(g):** When collecting personal data, controllers must provide information including:

> "the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject."

**Article 15(1)(h):** The right of access includes:

> "the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject."

**Article 22(3):** When automated decisions are permitted under exceptions, controllers must implement:

> "suitable measures to safeguard the data subject's rights and freedoms and legitimate interests, at least the right to obtain human intervention on the part of the controller, to express his or her point of view and to contest the decision."

**Recital 71:** This non-binding explanatory text states that safeguards for automated decision-making should include:

> "specific information to the data subject and the right to obtain human intervention, to express his or her point of view, to obtain an explanation of the decision reached after such assessment and to challenge the decision."


### The Key Question

The debate boils down to this: Do these provisions create a right to explanation of *individual decisions*, or only a right to *general information* about how automated decision-making works?

The distinction matters enormously in practice:

**General information:** "Our credit algorithm considers payment history, debt levels, income, and length of credit history. Payment history is the most important factor."

**Individual explanation:** "Your application was denied because your debt-to-income ratio of 45% exceeds our threshold of 40%, and your payment history shows two late payments in the past year, which our model weights heavily."

The former tells you how the system works. The latter tells you why *you* got *this* result.

---


## The Academic Debate


### The "No Right to Explanation" View

In an influential 2017 paper, scholars Sandra Wachter, Brent Mittelstadt, and Luciano Floridi argued that GDPR does not create a right to explanation of individual decisions.

Their key arguments:

**Textual analysis:** The binding articles (13, 14, 15) require "meaningful information about the logic involved"—information about the system's logic, not explanations of specific decisions. This is an *ex ante* (before the decision) transparency requirement, not an *ex post* (after the decision) explanation requirement.

**Recital vs. Article:** Recital 71 does mention a right to "obtain an explanation of the decision reached," but recitals are interpretive aids, not binding law. The binding articles don't use this language.

**Timing:** Articles 13 and 14 apply at data collection, before any decision is made. They require information about how decisions *will be* made, not explanations of decisions *already made*.

**Practical impossibility:** Many AI systems are "black boxes" where even developers can't fully explain individual predictions. A legal requirement to explain individual decisions might be technically impossible to satisfy.


### The "Yes, There Is a Right" View

Other scholars argue that GDPR does create some form of right to explanation:

**Purpose-driven interpretation:** GDPR's purpose is to protect individuals' rights regarding their personal data. Transparency that doesn't enable people to understand and contest decisions affecting them would be hollow.

**Recital 71's significance:** While recitals aren't binding, they guide interpretation of ambiguous articles. Recital 71's explicit mention of "explanation of the decision reached" suggests this was intended.

**Article 22(3) safeguards:** The right to "contest the decision" implies some ability to understand the decision. How can you contest what you don't understand?

**Regulatory interpretation:** Several data protection authorities have interpreted GDPR as requiring individual explanations, at least in some circumstances.


### The Emerging Consensus

The debate has evolved beyond the binary "yes/no" framing. A more nuanced view has emerged:

1. **GDPR clearly requires** general information about automated decision-making logic, significance, and consequences.

2. **GDPR arguably requires** sufficient information to enable individuals to exercise their rights (contest decisions, obtain human review).

3. **The exact scope** of explanation requirements depends on context—the nature of the decision, the risks to individuals, and what's technically feasible.

4. **Practical compliance** means providing meaningful information that actually helps individuals understand and, if desired, challenge automated decisions.

---


## What GDPR Actually Requires

Let's move past the academic debate and focus on concrete requirements.


### Requirement 1: Disclose the Existence of Automated Decision-Making

**What it means:** Organizations must tell individuals when automated decision-making (including profiling) covered by Article 22 is occurring.

**When:** At the time of data collection (Articles 13, 14) and upon request (Article 15).

**Practical implementation:**

- Privacy notices should state whether automated decision-making occurs
- If it does, identify which decisions are automated
- Be specific—don't hide this in generic language

**Example:** "We use automated systems to make decisions about your credit application. This means a computer program analyzes your information and makes a decision without human review."


### Requirement 2: Provide "Meaningful Information About the Logic Involved"

**What it means:** Organizations must explain how the automated decision-making system works—what factors it considers and how it reaches decisions.

**The "meaningful" standard:** Information must be genuinely useful to the individual, not just technically accurate. A page of mathematical formulas isn't meaningful to most people.

**What to include:**

- Categories of data used (income, payment history, etc.)
- How data influences decisions (what factors matter most)
- General decision-making process
- Thresholds or rules, if applicable

**What's NOT required:**

- Disclosure of proprietary algorithms or source code
- Mathematical formulas or model weights
- Information that would compromise security
- Trade secrets

**Example:** "Our credit decision considers: (1) Your payment history—this is the most important factor; late payments significantly affect your score. (2) Your current debt relative to your income—we look for a healthy balance. (3) How long you've had credit—longer credit history generally helps. (4) Recent applications for new credit—many recent applications may lower your score."


### Requirement 3: Explain Significance and Consequences

**What it means:** Organizations must explain what the automated decision-making means for the individual—what effects it might have on their life.

**What to include:**

- What decisions are made (approval/denial, pricing, access)
- What consequences flow from those decisions
- How decisions might affect the individual's situation
- Any downstream effects

**Example:** "If your credit application is approved, you'll receive a credit card with a limit based on your profile. If denied, this decision will be recorded and may affect future applications. You can reapply after 30 days or request human review of the decision."


### Requirement 4: Enable Individuals to Contest Decisions

**What it means:** When automated decisions are made under Article 22 exceptions (contract, consent, or legal authorization), individuals must have the right to contest decisions.

**What this requires:**

- A clear mechanism for contesting decisions
- Genuine consideration of contests (not just acknowledgment)
- Response to contests explaining the outcome
- Potentially, modification of decisions when appropriate

**Practical implementation:**

- Provide clear instructions for contesting decisions
- Assign staff to review contests
- Document contest handling procedures
- Track and analyze contest outcomes

**Example:** "If you believe this decision is incorrect, you can contest it by calling [number] or visiting [website]. A member of our team will review your case within 5 business days and contact you with the outcome."


### Requirement 5: Provide Human Intervention on Request

**What it means:** Individuals have the right to have a human being review automated decisions covered by Article 22.

**What this requires:**

- A mechanism to request human review
- Genuine human review (not rubber-stamping)
- The human must have authority to change the decision
- Reasonable response time

**Example:** "You have the right to request that a person, rather than our automated system, review your application. To request human review, contact [contact information]. A credit analyst will review your complete application and make a decision within 10 business days."


### Requirement 6: Allow Individuals to Express Their Views

**What it means:** Before or during human review, individuals can provide additional information or context.

**What this requires:**

- A channel for submitting additional information
- Actual consideration of submitted information
- Incorporation into review process

**Example:** "When requesting human review, you can provide additional information that you believe is relevant to your application, such as explanations for past payment issues or documentation of changed circumstances."

---


## Individual Explanations: Are They Required?


### The Question

Beyond general information about system logic, must organizations explain *why a specific individual received a specific decision*?


### The Current Position

Regulatory guidance increasingly supports some form of individual explanation, at least for consequential decisions:

**UK Information Commissioner's Office:** The ICO's guidance states that organizations should be prepared to provide "a basic explanation of the decision that was reached" and "insight into the main factors that led to that decision." The ICO interprets GDPR as requiring sufficient information for individuals to understand their situation.

**Article 29 Working Party / EDPB:** The Working Party's guidance on automated decision-making states that "meaningful information about the logic involved" should provide sufficient information to "understand the reasons behind a decision."

**French CNIL:** France's data protection authority has emphasized that explanations should help individuals understand decisions affecting them and exercise their rights effectively.


### What Individual Explanations Should Include

Based on regulatory guidance and best practices, individual explanations should address:

**Key factors:** What were the main factors that influenced this specific decision?

**Direction of influence:** Did these factors help or hurt the outcome?

**Relative importance:** Which factors mattered most?

**Actionable information:** What could the individual change to get a different outcome?

**Example of a good individual explanation:**

"Your loan application was not approved. The main factors in this decision were:

1. **Debt-to-income ratio (most important factor):** Your current debts represent 52% of your monthly income. Our guidelines require this to be below 43% for approval.

2. **Recent credit applications:** You've applied for credit 4 times in the past 6 months. Multiple recent applications can indicate financial stress.

3. **Payment history (positive factor):** Your payment history is good, with no late payments in the past 2 years. This factor supported your application.

To improve your chances in a future application, you might consider paying down existing debts to reduce your debt-to-income ratio and waiting several months before reapplying."

---


## The Explainability Challenge


### The Technical Problem

Many AI systems—particularly deep learning models—are genuinely difficult to explain. They may have millions of parameters with complex, non-linear relationships. Even their developers may not fully understand why they make specific predictions.

This creates tension with explanation requirements:

- **Accuracy vs. simplicity:** Accurate explanations may be too complex for non-experts; simple explanations may be misleading.
- **Global vs. local:** Explaining how a model works generally is different from explaining a specific decision.
- **Post-hoc explanations:** Many explanation techniques analyze models after the fact and may not capture the model's actual reasoning.


### Approaches to AI Explainability

Several techniques can help generate explanations:

**Feature importance:** Identify which input features most influenced a prediction. Methods include SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations).

**Counterfactual explanations:** Explain what would need to change for a different outcome. "If your income were €5,000 higher, your application would have been approved."

**Rule extraction:** Approximate complex models with simpler, interpretable rules that capture key decision patterns.

**Attention mechanisms:** For some neural networks, attention weights can indicate which parts of inputs the model focused on.

**Inherently interpretable models:** Use models that are explainable by design (decision trees, linear regression, rule-based systems) for high-stakes decisions.


### Practical Recommendations

**Choose appropriate models:** For high-stakes decisions requiring explanation, consider whether simpler, more interpretable models can achieve acceptable performance.

**Build explanation capability:** When using complex models, incorporate explanation techniques (SHAP, LIME, counterfactuals) into your pipeline.

**Test explanations on real users:** Verify that explanations are actually meaningful to the people who receive them.

**Be honest about limitations:** If explanations are approximate or simplified, say so.

**Layer information:** Provide simple explanations initially, with options to receive more detailed information.

---


## Sector-Specific Requirements


### Financial Services

Beyond GDPR, financial services face additional explanation requirements:

**Consumer Credit Directive:** In the EU, credit decisions must be explained, and reasons for adverse decisions must be provided.

**Fair lending laws:** Various jurisdictions require specific disclosures when credit is denied.

**Example requirements:**

- Provide specific reasons for credit denial
- Explain what factors were most important
- Inform individuals of their right to request the information used


### Employment

Hiring decisions face scrutiny under:

**GDPR:** Automated hiring decisions with significant effects trigger Article 22.

**NYC Local Law 144:** Requires bias audits and disclosure of automated employment decision tools.

**EU AI Act:** Classifies AI for employment as high-risk, requiring transparency and human oversight.

**Best practice:** Explain to candidates how AI is used in hiring and what factors are evaluated.


### Insurance

Insurance underwriting and claims decisions:

**Insurance Distribution Directive:** Requires explanations of insurance decisions.

**GDPR:** Automated insurance decisions affecting individuals require transparency.

**Emerging regulation:** Several jurisdictions are developing specific AI requirements for insurance.

---


## Building an Explanation Framework


### Step 1: Map Your Automated Decisions

Create an inventory of automated decisions:

- What decisions are made automatically?
- Which involve personal data?
- What effects do they have on individuals?
- Which trigger Article 22?


### Step 2: Determine Explanation Requirements

For each automated decision:

- What general information about logic is required?
- Should individual explanations be provided?
- What sector-specific requirements apply?
- What level of explanation is technically feasible?


### Step 3: Design Explanation Mechanisms

**General information (for all automated decisions):**

- Privacy notice disclosures
- Website information about AI use
- Documentation of system logic

**Individual explanations (where required/appropriate):**

- Explanation generation systems
- Templates for common decisions
- Staff training for human explanations

**Supporting processes:**

- Request handling procedures
- Escalation paths
- Quality assurance


### Step 4: Implement Layered Transparency

**Layer 1: Basic notice**

- "We use automated systems to make this decision"
- Available to everyone at data collection

**Layer 2: General information**

- How the system works
- What factors are considered
- Significance and consequences
- Available in privacy notices and on request

**Layer 3: Decision-specific information**

- Key factors in this decision
- How factors influenced the outcome
- Available on request or automatically for significant decisions

**Layer 4: Detailed information**

- More technical details about the decision
- For individuals who want deeper understanding
- Available on request


### Step 5: Enable Rights Exercise

Ensure individuals can:

- Request human review
- Express their views
- Contest decisions
- Obtain responses to their concerns


### Step 6: Train Your Staff

Staff who communicate about AI decisions need:

- Understanding of how systems work
- Ability to explain in plain language
- Knowledge of individual rights
- Authority to escalate concerns


### Step 7: Monitor and Improve

Track:

- Explanation requests received
- Understanding achieved (through surveys, follow-up questions)
- Contests and their outcomes
- Complaints about lack of transparency

Use insights to improve explanations over time.

---


## Practical Examples


### Example 1: Credit Decision Explanation

**Basic notice (at application):**
"Your application will be assessed by our automated credit system, which analyzes your financial information to make a lending decision."

**General information (in privacy notice):**
"Our credit assessment system considers factors including: payment history on existing accounts, current debt levels relative to income, length of credit history, types of credit held, and recent credit applications. Payment history is typically the most significant factor. The system produces a score that determines whether credit is approved and on what terms."

**Individual explanation (with decision):**
"Your application for a personal loan of €10,000 was not approved. The key factors were:

- Your debt-to-income ratio is 58%, above our threshold of 50% (negative factor)
- You have 2 late payments in the past 12 months (negative factor)  
- You have a 7-year credit history (positive factor)

You may contest this decision or request human review by contacting us at [contact details]. If your financial situation changes, you may reapply after 90 days."


### Example 2: Job Application Screening

**Basic notice (at application):**
"We use software tools to help screen applications. A human recruiter makes all final hiring decisions."

**General information (on careers page):**
"Our application screening software analyzes resumes for relevant qualifications, experience, and skills matching our job requirements. Applications that meet threshold requirements are forwarded to human recruiters for review. The software does not consider age, gender, ethnicity, or other protected characteristics."

**Individual explanation (on request):**
"Your application for the Software Developer position was not selected for interview. Our screening system evaluates applications based on qualifications match, relevant experience, and skills alignment. Your application scored below our threshold for this role, primarily due to [specific factors, e.g., 'the required 5 years of Python experience, where your resume indicated 2 years']. You are welcome to apply for other positions that may better match your experience."


### Example 3: Insurance Premium Calculation

**Basic notice (at quote):**
"Your premium is calculated using automated systems that assess risk based on the information you provide."

**General information (in product documentation):**
"Your insurance premium is based on factors including: age, location, claims history, coverage level selected, and vehicle characteristics (for auto insurance). These factors are weighted based on statistical analysis of risk. Location and claims history typically have the largest impact on premium."

**Individual explanation (with quote):**
"Your annual premium for comprehensive auto insurance is €1,200. Key factors in your premium calculation:

- Your area (postcode XX) has higher than average claim rates (+€180)
- You have no claims in the past 5 years (-€150 discount)
- Your vehicle model has moderate repair costs (neutral)
- Your age group has average risk (neutral)

To potentially reduce your premium, you might consider: increasing your voluntary excess, adding approved security devices, or completing our advanced driver course."

---


## Common Questions


### "Do we have to reveal our algorithm?"

No. GDPR requires meaningful information about logic, not disclosure of proprietary algorithms, source code, or trade secrets. Explain what factors matter and how they influence decisions, not the technical implementation.


### "What if we genuinely don't know why the AI decided something?"

This is a problem—both legally and ethically. If you're using AI for consequential decisions, you should be able to explain those decisions. Consider:

- Using more interpretable models
- Implementing explanation techniques (SHAP, LIME)
- Adding human review for decisions that can't be explained
- Reconsidering whether unexplainable AI is appropriate for this use


### "How detailed must explanations be?"

Detailed enough to be meaningful—to help individuals understand and, if desired, contest decisions. This varies by context:

- Higher-stakes decisions warrant more detailed explanations
- More complex individuals (sophisticated borrowers vs. general public) may need different levels of detail
- Explanations should be proportionate to the impact of the decision


### "Can we provide explanations only on request?"

For general information about AI processing, proactive disclosure is required (Articles 13, 14). For individual decision explanations, providing them automatically is best practice, but responding to requests is the minimum.


### "What about gaming—won't explanations help people cheat the system?"

This is a legitimate concern, but not a justification for complete opacity. Approaches include:

- Explain what factors matter without revealing exact thresholds
- Focus on general logic rather than specific exploitation vectors
- Monitor for gaming and adjust systems accordingly
- Balance transparency with security

---


## The Future of AI Explanation


### EU AI Act Requirements

The EU AI Act creates additional transparency requirements for high-risk AI:

- Instructions for use must include information about AI characteristics and capabilities
- Users must be able to interpret AI outputs
- High-risk AI must be designed to enable human oversight

These requirements complement GDPR's explanation provisions.


### Emerging Standards

Several initiatives are developing explanation standards:

- **ISO/IEC standards** on AI transparency and explainability
- **IEEE standards** on algorithmic transparency
- **NIST guidance** on AI explainability


### Technology Development

Explainable AI (XAI) is an active research area:

- Better explanation techniques for complex models
- Tools that generate human-readable explanations automatically
- Methods to verify that explanations are accurate

---


## Conclusion

The debate over whether GDPR creates a "right to explanation" is ultimately less important than what organizations actually do.

What GDPR clearly requires:

- Tell people when automated decisions are made
- Provide meaningful information about how decision systems work
- Explain the significance and consequences of automated processing
- Enable people to contest decisions and obtain human review

What good practice demands:

- Help people understand decisions that affect them
- Provide sufficient information to exercise rights effectively
- Be transparent about AI use and its implications
- Treat explanation as a feature, not a burden

The legal minimum and ethical best practice are converging. Regulators increasingly interpret GDPR as requiring meaningful, decision-relevant explanations. Courts and enforcement actions are pushing toward greater transparency. The EU AI Act adds new requirements.

Organizations that view explanation as mere compliance will do the minimum. Organizations that view explanation as a trust-building opportunity will do more—and benefit from greater customer confidence, fewer complaints, and more defensible AI systems.

The question isn't really whether GDPR requires explanation. The question is whether you want people affected by your AI to understand and trust it. If the answer is yes, then provide the explanations they need—because it's the right thing to do, regardless of where the legal lines are drawn.

---


## Sources

1. Regulation (EU) 2016/679 (General Data Protection Regulation), Articles 13, 14, 15, 22, and Recital 71. Official Journal of the European Union, 2016.

2. Wachter, Sandra, Brent Mittelstadt, and Luciano Floridi. "Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation." International Data Privacy Law, Vol. 7, Issue 2, 2017.

3. Selbst, Andrew D., and Julia Powles. "Meaningful Information and the Right to Explanation." International Data Privacy Law, Vol. 7, Issue 4, 2017.

4. Malgieri, Gianclaudio, and Giovanni Comandé. "Why a Right to Legibility of Automated Decision-Making Exists in the General Data Protection Regulation." International Data Privacy Law, Vol. 7, Issue 4, 2017.

5. Article 29 Data Protection Working Party. "Guidelines on Automated individual decision-making and Profiling for the purposes of Regulation 2016/679." WP251rev.01, February 2018.

6. Information Commissioner's Office and The Alan Turing Institute. "Explaining decisions made with AI." ICO/Turing Guidance, 2020. https://ico.org.uk/for-organisations/guide-to-data-protection/key-dp-themes/explaining-decisions-made-with-ai/

7. Kaminski, Margot E. "The Right to Explanation, Explained." Berkeley Technology Law Journal, Vol. 34, 2019.

8. Edwards, Lilian, and Michael Veale. "Slave to the Algorithm? Why a 'Right to an Explanation' Is Probably Not the Remedy You Are Looking For." Duke Law & Technology Review, Vol. 16, 2017.

9. CNIL (French Data Protection Authority). "Algorithms: A tool to better understand automated decisions." CNIL Guidance, 2017.

10. Ribeiro, Marco Tulio, Sameer Singh, and Carlos Guestrin. "'Why Should I Trust You?': Explaining the Predictions of Any Classifier." Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 2016. (LIME paper)

11. Lundberg, Scott M., and Su-In Lee. "A Unified Approach to Interpreting Model Predictions." Advances in Neural Information Processing Systems 30, 2017. (SHAP paper)

12. Wachter, Sandra, Brent Mittelstadt, and Chris Russell. "Counterfactual Explanations without Opening the Black Box: Automated Decisions and the GDPR." Harvard Journal of Law & Technology, Vol. 31, Issue 2, 2018.

13. European Parliament and Council. Regulation (EU) 2024/1689 (AI Act). Official Journal of the European Union, 2024.

14. Doshi-Velez, Finale, and Been Kim. "Towards A Rigorous Science of Interpretable Machine Learning." arXiv preprint, 2017.
