# Fairness in AI – Definitions, Metrics, and Trade-offs

## TL;DR

Fairness in AI isn't a single concept—it's a collection of different, often incompatible definitions. The three most common are: demographic parity (equal outcomes across groups), equal opportunity (equal accuracy for qualified individuals across groups), and predictive parity (equal reliability of predictions across groups). Here's the crucial insight: these definitions mathematically cannot all be satisfied simultaneously except in rare circumstances. Organizations must choose which type of fairness matters most for their specific context—a choice that involves values, not just math. This article explains the major fairness definitions, when each applies, why they conflict, and how organizations can navigate these trade-offs thoughtfully.

---

## Introduction

Imagine you're building an AI system to help a bank decide who gets approved for mortgages. You want the system to be fair. But what does "fair" actually mean?

Does it mean approving the same percentage of applicants from every racial group? Does it mean being equally accurate in predicting who will repay across groups? Does it mean that among people who would actually repay, the same percentage of each group gets approved?

These sound similar, but they're different—and they can't all be true at the same time.

This isn't a hypothetical puzzle. It's a real problem that every organization deploying AI for consequential decisions must confront. The word "fair" is simple; the reality is not.

This article unpacks the complexity of AI fairness. We'll explore the major definitions researchers and practitioners use, explain why they conflict, and provide guidance on navigating these trade-offs. Understanding these concepts is essential for anyone responsible for AI systems that affect people's lives.

---

## Why Fairness Is Complicated

Before diving into definitions, it's worth understanding why fairness in AI is genuinely difficult.

### Historical Context Matters

AI systems learn from historical data. That history includes discrimination, inequality, and bias. An AI trained on past lending decisions learns from an era when discrimination was legal and common. An AI trained on hiring decisions inherits decades of biased practices.

This means "accurate" and "fair" can conflict. An AI that accurately predicts outcomes based on historical patterns may perpetuate historical injustice.

### Groups Differ in Measured Characteristics

Due to historical and ongoing inequality, different demographic groups often have different distributions of characteristics that AI systems measure. Average credit scores differ by race—not because of inherent differences, but because of historical discrimination in housing, employment, and education.

When AI uses these characteristics to make predictions, it produces different outcomes for different groups. Is that unfair? It depends on how you define fairness.

### Individual vs. Group Fairness

Should fairness be measured at the individual level (treating similar individuals similarly) or the group level (producing similar outcomes across groups)? These perspectives can conflict.

### Different Stakeholders Have Different Interests

What seems fair from one perspective may seem unfair from another:
- A rejected applicant wants to know they were treated fairly as an individual
- An advocacy group wants to see equal outcomes across communities
- A lender wants accurate predictions that minimize default risk
- A regulator wants to prevent discrimination while allowing legitimate business decisions

### Multiple Definitions Exist—and They Conflict

Researchers have identified more than 20 different mathematical definitions of fairness. Many of them are mutually exclusive. You cannot satisfy all of them simultaneously.

**Example: The Impossible Requirement**

A company announces: "Our hiring AI will have equal accuracy for all demographic groups, produce equal hiring rates across groups, and among truly qualified candidates, select equal percentages of each group."

This sounds reasonable. But mathematically, unless qualified candidates are distributed identically across groups (they rarely are, due to historical inequality), these requirements cannot all be met. The company has made an impossible promise.

---

## The Major Fairness Definitions

Let's examine the most commonly used fairness definitions. Each captures something important about fairness—but each is incomplete.

### Demographic Parity (Statistical Parity)

**Definition**: An AI system satisfies demographic parity if it produces positive outcomes at equal rates across groups.

**In plain English**: The same percentage of each group gets approved, hired, or receives the favorable outcome.

**Example**: If 30% of male applicants are approved for a loan, 30% of female applicants should also be approved.

**When it makes sense**:
- When you believe historical differences in qualifications reflect discrimination, not genuine differences
- When you want outcomes to reflect population proportions
- When the goal is representation or diversity

**When it's problematic**:
- If qualification rates genuinely differ between groups (even if due to historical factors), demographic parity requires approving less qualified individuals from some groups
- It can lead to accusations of "reverse discrimination"
- It ignores individual qualifications

**Mathematical notation**: P(Ŷ = 1 | A = a) = P(Ŷ = 1 | A = b) for groups a and b

### Equal Opportunity

**Definition**: An AI system satisfies equal opportunity if, among individuals who actually deserve the positive outcome, the same percentage of each group receives it.

**In plain English**: Among people who would actually succeed (repay loans, perform well in jobs), the AI approves equal percentages of each group.

**Example**: If 80% of men who would actually repay a loan get approved, 80% of women who would actually repay should also get approved.

**When it makes sense**:
- When you care most about not missing qualified individuals from any group
- When false negatives (rejecting qualified individuals) are the main concern
- When you want to ensure equal access to opportunity for those who would benefit

**When it's problematic**:
- It says nothing about false positives (approving unqualified individuals)
- It requires knowing the "ground truth" of who actually deserves positive outcomes
- It doesn't guarantee equal overall outcomes

**Mathematical notation**: P(Ŷ = 1 | Y = 1, A = a) = P(Ŷ = 1 | Y = 1, A = b)

### Equalized Odds

**Definition**: An AI system satisfies equalized odds if both the true positive rate AND the false positive rate are equal across groups.

**In plain English**: The AI makes mistakes at equal rates for all groups—both missing qualified individuals and incorrectly approving unqualified ones.

**Example**: If the AI correctly approves 80% of qualified men and incorrectly approves 10% of unqualified men, it should do the same for women.

**When it makes sense**:
- When both types of errors (false positives and false negatives) matter
- When you want the AI to be equally accurate across groups
- When error rates have equal consequences for different groups

**When it's problematic**:
- It's hard to achieve in practice
- It may require sacrificing overall accuracy
- It still doesn't guarantee equal outcomes

**Mathematical notation**: P(Ŷ = 1 | Y = y, A = a) = P(Ŷ = 1 | Y = y, A = b) for y ∈ {0, 1}

### Predictive Parity (Calibration)

**Definition**: An AI system satisfies predictive parity if, among individuals the AI predicts will succeed, the same percentage actually does succeed across groups.

**In plain English**: When the AI says someone will repay (or succeed, or perform well), that prediction is equally reliable regardless of what group they belong to.

**Example**: If 90% of men predicted to repay actually repay, 90% of women predicted to repay should also actually repay.

**When it makes sense**:
- When the reliability of positive predictions matters most
- When decision-makers need to trust AI recommendations equally across groups
- When false positives have similar consequences across groups

**When it's problematic**:
- It doesn't guarantee equal approval rates
- It doesn't guarantee equal true positive rates
- It focuses on prediction reliability, not outcomes

**Mathematical notation**: P(Y = 1 | Ŷ = 1, A = a) = P(Y = 1 | Ŷ = 1, A = b)

### Individual Fairness

**Definition**: An AI system satisfies individual fairness if similar individuals receive similar outcomes.

**In plain English**: Two people with similar qualifications should have similar chances of approval, regardless of group membership.

**Example**: Two loan applicants with the same income, credit score, and debt levels should have similar approval chances, whether they're men or women, Black or white.

**When it makes sense**:
- When the focus is on treating individuals fairly rather than achieving group-level outcomes
- When you can define "similarity" meaningfully
- When individual merit should determine outcomes

**When it's problematic**:
- Defining "similarity" is subjective and contested
- It doesn't address systemic patterns of unequal outcomes
- Two "similar" individuals from different groups may have achieved that similarity through different levels of effort due to structural barriers

**Mathematical notation**: If d(x, x') is small, then d(f(x), f(x')) should be small

### Counterfactual Fairness

**Definition**: An AI system satisfies counterfactual fairness if an individual would receive the same outcome in a hypothetical world where only their group membership was different.

**In plain English**: Would this person get the same decision if they were a different race or gender but otherwise identical?

**Example**: Would Maria get approved for this loan if she were Mario, with everything else the same?

**When it makes sense**:
- When you want to isolate the effect of protected characteristics
- When causal reasoning about fairness is important
- When you want to answer "what if" questions about discrimination

**When it's problematic**:
- Requires causal models of how characteristics relate
- "Everything else the same" is philosophically tricky—some characteristics are shaped by group membership
- Computationally complex

---

## The Impossibility Results

Here's the crucial insight that makes AI fairness so challenging: researchers have proven that several common fairness definitions cannot be satisfied simultaneously, except in special circumstances.

### Chouldechova's Impossibility Theorem

In 2017, researcher Alexandra Chouldechova proved that when base rates differ between groups (i.e., when the actual proportion of qualified individuals differs), it's mathematically impossible to simultaneously achieve:
- Equal false positive rates
- Equal false negative rates
- Equal positive predictive values

You must choose which to prioritize.

### Kleinberg-Mullainathan-Raghavan Impossibility

Around the same time, Kleinberg, Mullainathan, and Raghavan proved a similar result: calibration (predictive parity) is incompatible with equal false positive and false negative rates when base rates differ.

### What This Means in Practice

These aren't just theoretical curiosities. They have real implications:

**You must make choices**: There's no algorithm that satisfies everyone's definition of fairness. Pretending otherwise leads to hidden trade-offs.

**Trade-offs are value judgments**: Choosing which fairness definition to prioritize isn't a technical decision—it's an ethical and political one.

**Context matters**: The right choice depends on the specific application, stakeholders, and consequences.

**Example: The COMPAS Dilemma**

ProPublica's famous analysis of the COMPAS criminal risk assessment algorithm claimed it was biased against Black defendants because false positive rates were higher for Black defendants than white defendants.

Northpointe (the company that made COMPAS) responded that the algorithm was calibrated—among defendants with the same risk score, actual recidivism rates were equal across races.

Both were technically correct. The algorithm satisfied one fairness criterion (calibration) while violating another (equal false positive rates). Because base rates differed (due to complex societal factors), it couldn't satisfy both.

Who was right? That depends on which type of fairness you prioritize—a question about values, not math.

---

## Choosing the Right Fairness Definition

Given that you can't achieve all fairness definitions simultaneously, how do you choose?

### Consider the Consequences of Different Errors

**False Negatives (Missing Qualified Individuals)**:
- In hiring: Qualified candidates from certain groups don't get jobs
- In lending: Creditworthy individuals from certain groups don't get loans
- In healthcare: Patients who need care don't get flagged for treatment

**False Positives (Incorrectly Selecting Unqualified Individuals)**:
- In lending: Individuals who will default get approved, losing money and potentially hurting them
- In criminal justice: People incorrectly flagged as high risk face harsher treatment
- In hiring: Positions filled by less qualified individuals

Which type of error matters more in your context? That should guide your fairness definition choice.

### Consider Who Bears the Costs

Different fairness definitions distribute costs differently:

- **Demographic parity** may impose costs on organizations (lower accuracy) to benefit underrepresented groups
- **Predictive parity** may impose costs on individuals from groups with lower base rates (higher rejection rates) to benefit organizational decision-making
- **Equal opportunity** prioritizes qualified individuals from all groups, potentially at cost to unqualified individuals from some groups

Who should bear the costs of achieving fairness? There's no neutral answer.

### Consider Historical Context

If historical discrimination has suppressed the qualifications of certain groups, using current qualifications as the standard perpetuates that discrimination.

- If you believe qualifications would be equal absent discrimination, demographic parity may be appropriate
- If you believe current qualifications, though shaped by history, should determine outcomes, individual fairness may be more appropriate

### Consider Legal and Regulatory Requirements

Different jurisdictions and contexts have different legal standards:

- U.S. employment law often focuses on disparate impact (related to demographic parity)
- Credit decisions must provide reasons (suggesting individual fairness considerations)
- European law emphasizes individual rights to explanation and non-discrimination

Legal requirements don't resolve the philosophical questions, but they constrain choices.

### Consider Stakeholder Input

Different stakeholders have different perspectives on fairness. Engage them:

- Affected communities may prioritize different fairness definitions than organizational leadership
- Frontline workers may have insights about how fairness manifests in practice
- Legal and compliance teams understand regulatory constraints
- Ethics advisors can facilitate difficult trade-off discussions

**Example: The Hiring System Trade-off**

A company building an AI hiring system must choose its fairness approach:

*Option A - Demographic Parity*: Hire equal percentages from each group. May require hiring less qualified candidates from some groups to achieve parity. Promotes diversity. May face legal challenges as "quotas."

*Option B - Equal Opportunity*: Among truly qualified candidates, hire equal percentages from each group. Requires defining "truly qualified." Ensures qualified candidates from all groups have equal chances. Doesn't guarantee diverse outcomes if qualification rates differ.

*Option C - Individual Fairness*: Treat similar candidates similarly regardless of group. Seems meritocratic. But "similar" is defined by characteristics that may themselves reflect historical discrimination.

The company convenes stakeholders:
- HR wants demographic parity for diversity goals
- Legal worries about quota accusations
- Hiring managers want the most qualified candidates (individual fairness)
- Diversity advocates note that "qualifications" reflect historical advantage

The company ultimately chooses a hybrid approach: individual fairness as the baseline, with additional outreach and pipeline programs to increase qualified applicants from underrepresented groups, and monitoring for demographic parity as a warning sign of potential problems.

---

## Measuring Fairness in Practice

Once you've chosen fairness definitions, you need to measure them.

### Disaggregated Metrics

Don't just measure overall performance. Break down metrics by group:

- Approval/rejection rates by demographic group
- True positive rates by group
- False positive rates by group
- Predictive accuracy by group
- Any other relevant metrics by group

Significant disparities warrant investigation.

### Statistical Testing

Use statistical tests to determine whether observed disparities are likely due to chance or represent real differences:

- Chi-square tests for outcome differences
- Statistical significance testing for rate differences
- Confidence intervals for metric estimates

Small samples can produce spurious differences; statistical rigor helps distinguish signal from noise.

### Intersectional Analysis

Don't just analyze single dimensions (race OR gender). Analyze intersections (race AND gender):

- A system might be fair for men and fair for Black people but unfair for Black men
- Intersectional disparities can hide in aggregate statistics

This is more challenging due to smaller sample sizes at intersections but essential for comprehensive fairness assessment.

### Ongoing Monitoring

Fairness isn't a one-time check. Monitor continuously:

- Fairness metrics can change as populations change
- Model drift can introduce new disparities
- Feedback loops can amplify initial disparities over time

Build fairness monitoring into operational dashboards.

### External Audits

Internal teams may have blind spots. External audits provide independent verification:

- Third-party auditors can assess fairness without organizational biases
- External audits may be required by regulations (e.g., NYC Local Law 144)
- Published audit results demonstrate commitment to fairness

**Example: The Fairness Dashboard**

A financial services company built a fairness monitoring dashboard for its lending AI:

*Daily metrics*:
- Approval rates by race, gender, age
- Average credit amounts by demographic group

*Weekly metrics*:
- True positive rates by group (among those predicted to repay, what percentage did?)
- False positive rates by group
- Model confidence distributions by group

*Monthly metrics*:
- Intersectional analysis (race × gender × age)
- Comparison to previous months for trend detection
- Statistical significance testing for disparities

*Quarterly*:
- External audit of fairness metrics
- Comparison to industry benchmarks
- Stakeholder review of findings

The dashboard enabled early detection when a model update inadvertently increased disparities, allowing correction before significant harm occurred.

---

## Beyond Metrics: Substantive Fairness

Metrics capture only part of fairness. Substantive fairness requires looking beyond the numbers.

### Process Fairness

Beyond outcomes, is the process fair?
- Do affected individuals understand how decisions are made?
- Can they challenge decisions they believe are wrong?
- Is there meaningful opportunity for appeal?
- Are decision criteria legitimate and relevant?

A system with equal outcome metrics but an opaque, unchallengeable process may not be substantively fair.

### Relational Fairness

Does the system treat people with dignity?
- Are explanations provided respectfully?
- Does the system avoid stigmatizing language or categories?
- Does interaction with the system feel fair, regardless of outcome?

People care about how they're treated, not just outcomes.

### Structural Fairness

Does the system address or perpetuate structural inequality?
- Does it provide opportunity for advancement?
- Does it help overcome historical disadvantage?
- Does it consider systemic barriers individuals face?

A system can be "fair" by every metric while still operating within and reinforcing unfair structures.

### Fairness Over Time

Is the system making things more or less fair over time?
- Do initial disparities shrink or grow?
- Does the system create feedback loops that amplify inequality?
- Does it open or close pathways to opportunity?

A static snapshot of fairness metrics doesn't capture dynamic effects.

---

## Conclusion

When ProPublica called COMPAS biased and Northpointe called it fair, both were right—by different definitions. The algorithm couldn't satisfy both definitions simultaneously, because no algorithm can when underlying conditions make different fairness goals mathematically incompatible.

This isn't a failure of AI. It's a revelation about fairness itself: fairness isn't one thing. It's a collection of related but distinct values that can conflict with each other.

Organizations building AI systems must confront this complexity honestly:

1. **Acknowledge the trade-offs**: Pretending you can satisfy everyone's definition of fairness leads to hidden compromises and accusations of bad faith.

2. **Choose deliberately**: Select fairness definitions that match your values, context, and stakeholder needs. Document and defend your choices.

3. **Measure rigorously**: Use disaggregated metrics, statistical testing, and ongoing monitoring to understand how your system is actually performing.

4. **Look beyond metrics**: Consider process fairness, relational fairness, and structural impacts that metrics don't capture.

5. **Engage stakeholders**: Fairness choices are value choices. Those affected by AI decisions should have voice in how fairness is defined.

The goal isn't to find the one true definition of fairness—it doesn't exist. The goal is to make thoughtful, transparent, defensible choices about which aspects of fairness your system will prioritize, and to remain accountable for those choices.

Fairness in AI is hard. But hard isn't the same as impossible. Organizations that take fairness seriously—with all its complexity and trade-offs—build AI that people can trust.

---

## Sources

1. Chouldechova, A. (2017). "Fair Prediction with Disparate Impact: A Study of Bias in Recidivism Prediction Instruments." Big Data, 5(2), 153-163.

2. Kleinberg, J., Mullainathan, S., & Raghavan, M. (2016). "Inherent Trade-Offs in the Fair Determination of Risk Scores." Proceedings of Innovations in Theoretical Computer Science.

3. Barocas, S., Hardt, M., & Narayanan, A. (2019). "Fairness and Machine Learning: Limitations and Opportunities." fairmlbook.org.

4. Angwin, J., Larson, J., Mattu, S., & Kirchner, L. (2016). "Machine Bias." ProPublica.

5. Dieterich, W., Mendoza, C., & Brennan, T. (2016). "COMPAS Risk Scales: Demonstrating Accuracy Equity and Predictive Parity." Northpointe Research.

6. Dwork, C., Hardt, M., Pitassi, T., Reingold, O., & Zemel, R. (2012). "Fairness Through Awareness." Proceedings of Innovations in Theoretical Computer Science.

7. Hardt, M., Price, E., & Srebro, N. (2016). "Equality of Opportunity in Supervised Learning." Advances in Neural Information Processing Systems.

8. Kusner, M.J., Loftus, J., Russell, C., & Silva, R. (2017). "Counterfactual Fairness." Advances in Neural Information Processing Systems.

9. Verma, S., & Rubin, J. (2018). "Fairness Definitions Explained." Proceedings of the International Workshop on Software Fairness.

10. Mitchell, S., Potash, E., Barocas, S., D'Amour, A., & Lum, K. (2021). "Algorithmic Fairness: Choices, Assumptions, and Definitions." Annual Review of Statistics and Its Application, 8, 141-163.

11. Corbett-Davies, S., & Goel, S. (2018). "The Measure and Mismeasure of Fairness: A Critical Review of Fair Machine Learning." arXiv preprint.

12. Selbst, A.D., boyd, d., Friedler, S.A., Venkatasubramanian, S., & Vertesi, J. (2019). "Fairness and Abstraction in Sociotechnical Systems." Proceedings of the Conference on Fairness, Accountability, and Transparency.

13. New York City Department of Consumer and Worker Protection. (2023). "Automated Employment Decision Tools (AEDT) – Local Law 144."
