# Article 48: AI in Insurance – Fairness and Discrimination Concerns

## TL;DR

Insurance has always been about discrimination—distinguishing between high-risk and low-risk customers. But there's a difference between actuarially justified risk classification and unfair discrimination. AI blurs this line. Insurers use AI for underwriting, pricing, claims handling, and fraud detection, promising greater accuracy and efficiency. But AI can also encode historical biases, use proxies for protected characteristics, and make decisions that disparately impact vulnerable groups. Regulators are paying attention: the NAIC has issued model guidance, states are enacting AI insurance laws, and the EU AI Act classifies insurance pricing as high-risk AI. For insurers and consumers alike, the stakes are high—AI could make insurance more fair and accessible, or it could entrench and amplify discrimination.

---

## Introduction

Insurance is fundamentally about prediction. Will this driver have an accident? Will this house flood? Will this person develop a costly illness? Insurers have always used data to make these predictions—actuarial tables, claims history, credit scores, and countless other factors.

Artificial intelligence takes this predictive power to a new level. Machine learning can analyze thousands of variables, finding patterns humans would never discover. AI can process unstructured data—satellite imagery of roofs, social media posts, telematics from cars, wearable device data. It can update predictions in real time and personalize pricing with unprecedented precision.

The promise is significant: more accurate risk assessment could make insurance cheaper for low-risk customers, detect fraud more effectively, and speed claims processing. Some proponents argue AI could even expand access to insurance by identifying low-risk individuals who traditional methods might overlook.

But there's a darker possibility. AI trained on historical data might perpetuate historical discrimination. AI using novel data sources might create new forms of discrimination—penalizing people for where they live, how they speak, or patterns that correlate with race or disability without any actuarial justification. AI's complexity might make it impossible to know whether discrimination is occurring.

This article examines how AI is transforming insurance, the fairness and discrimination concerns it raises, and how regulators are responding.

---

## How Insurers Use AI

### Underwriting

Underwriting determines whether to offer coverage and on what terms. AI is transforming this process:

**Data sources:** AI can incorporate data beyond traditional applications:
- Credit history and financial behavior
- Social media activity
- Driving behavior from telematics
- Health data from wearables
- Satellite and drone imagery
- Public records and third-party data

**Automated decisions:** AI can make instant underwriting decisions for straightforward cases, reserving human review for complex situations.

**Risk segmentation:** AI enables finer risk distinctions, moving from broad categories to individualized assessments.

**Example:** A life insurance AI might analyze an applicant's prescription drug history, credit behavior, motor vehicle records, and demographic data to predict mortality risk—producing a decision in minutes rather than weeks.

### Pricing

Once someone is approved for coverage, AI helps determine their premium:

**Dynamic pricing:** AI can adjust prices based on real-time data rather than static categories.

**Personalization:** Instead of broad rating classes, AI enables individual-level pricing.

**Optimization:** AI can identify the price point that maximizes profit while retaining customers.

**Example:** Auto insurers using telematics can price based on actual driving behavior—miles driven, hard braking, time of day—rather than proxy variables like age or gender.

### Claims Handling

AI streamlines the claims process:

**Automated processing:** Simple claims can be approved and paid without human intervention.

**Damage assessment:** Computer vision can estimate repair costs from photos.

**Fraud detection:** AI identifies patterns suggesting fraudulent claims.

**Subrogation:** AI identifies claims where recovery from third parties is possible.

**Example:** After a car accident, a customer uploads photos via an app. AI assesses damage, checks for fraud indicators, and approves payment within hours.

### Fraud Detection

AI helps identify fraudulent applications and claims:

**Pattern recognition:** AI detects anomalies suggesting fraud.

**Network analysis:** AI identifies connections between seemingly unrelated claims.

**Behavioral analysis:** AI flags suspicious behavior patterns.

**Example:** An AI system might detect that multiple claims involve the same body shop, the same medical provider, and customers who share connections—suggesting an organized fraud ring.

### Customer Service

AI enhances customer interactions:

**Chatbots:** Handle routine inquiries and transactions.

**Personalization:** Tailor communications and offers to individual customers.

**Retention:** Predict which customers might leave and intervene.

---

## The Discrimination Problem

### Legitimate vs. Unfair Discrimination

Insurance inherently involves discrimination—treating different people differently based on risk. The question is when this discrimination is legitimate versus unfair.

**Actuarially justified discrimination:**
- Based on factors statistically related to risk
- Supported by credible data and analysis
- Proportionate to the risk difference
- Not serving as a pretext for unfair treatment

**Unfair discrimination:**
- Based on protected characteristics without actuarial justification
- Using proxies for protected characteristics
- Producing unjustified disparate impact
- Exploiting vulnerable populations

The challenge with AI: it's often unclear whether discrimination is actuarially justified or unfair.

### Protected Characteristics in Insurance

Insurance anti-discrimination rules vary by line of business and jurisdiction, but generally prohibit discrimination based on:

**Commonly prohibited:**
- Race
- National origin
- Religion

**Prohibited in many contexts:**
- Sex/gender (prohibited in EU health and life insurance; limited in US)
- Genetic information (GINA prohibits in health insurance)
- Disability (with limitations)

**Sometimes permitted:**
- Age (often permitted with actuarial justification)
- Credit history (permitted in some states, prohibited in others)
- Location (permitted but monitored for redlining)

### How AI Can Discriminate

**Training data bias:** AI learns from historical data. If past underwriting or claims decisions were discriminatory, AI learns those patterns.

**Example:** If historical data shows higher claims in minority neighborhoods—perhaps due to discriminatory claims handling—AI might learn to penalize those neighborhoods regardless of actual current risk.

**Proxy discrimination:** AI may use factors that correlate with protected characteristics without using those characteristics directly.

**Example:** An AI might heavily weight zip code, education level, occupation, and consumer behavior—factors that correlate strongly with race. Even without using race as an input, the model produces racially disparate outcomes.

**Novel data sources:** New data sources may correlate with protected characteristics in unexpected ways.

**Example:** Social media language patterns might correlate with national origin or disability. Wearable device data might reveal health conditions. Shopping behavior might correlate with religion.

**Algorithmic optimization:** AI optimized solely for prediction accuracy or profit may find discriminatory patterns that maximize those objectives.

**Example:** An AI might discover that certain names, speech patterns, or addresses predict higher claims—and those patterns might correlate with protected characteristics.

---

## Specific Concerns by Insurance Line

### Health Insurance

**Underwriting concerns:**
- Discrimination based on pre-existing conditions (prohibited under ACA)
- Use of genetic information (prohibited under GINA)
- Disability-based discrimination
- Mental health parity issues

**AI risks:**
- Inferring health conditions from non-health data
- Screening out high-risk individuals through targeted marketing
- Claims processing that disadvantages certain conditions

**Regulatory framework:**
- Affordable Care Act prohibitions
- GINA (Genetic Information Nondiscrimination Act)
- Mental Health Parity and Addiction Equity Act
- HIPAA privacy protections

### Life Insurance

**Underwriting concerns:**
- Accurate mortality prediction
- Fair treatment of health conditions
- Non-discrimination in pricing

**AI risks:**
- Accelerated underwriting that embeds bias
- Use of lifestyle data that correlates with protected characteristics
- Opacity in decision-making

**Example concern:** AI that uses consumer purchasing data might penalize people who buy certain foods, shop at certain stores, or have certain hobbies—patterns that might correlate with race, religion, or disability.

### Auto Insurance

**Pricing concerns:**
- Gender-based pricing (prohibited in EU, varies in US)
- Age-based pricing
- Location-based pricing (potential redlining)
- Credit-based pricing (controversial)

**AI risks:**
- Telematics that disadvantages certain groups
- Pricing algorithms with disparate impact
- Facial recognition for driver monitoring

**Example concern:** Telematics-based insurance rewards those who drive less, during safe hours, in safe areas. This may disadvantage people who must drive more for work, work night shifts, or live in urban areas—patterns that correlate with income, race, and occupation.

### Homeowners/Property Insurance

**Pricing and availability concerns:**
- Redlining (discrimination based on neighborhood demographics)
- Disparate impact on minority homeowners
- Climate risk pricing affecting vulnerable communities

**AI risks:**
- Satellite imagery analysis that incorporates neighborhood characteristics
- Pricing based on factors correlated with neighborhood demographics
- Withdrawal from high-risk areas that are disproportionately minority

**Example concern:** AI that assesses property risk from aerial imagery might incorporate neighborhood characteristics—housing density, tree coverage, proximity to commercial areas—that correlate with race, creating a modern form of redlining.

---

## The Regulatory Response

### State Insurance Regulation

Insurance is primarily regulated at the state level in the US. States are increasingly focused on AI:

**Colorado SB21-169 (2021):** Prohibits unfair discrimination in insurance based on external consumer data and information sources, including AI. Requires insurers to test for discrimination and take corrective action.

**Connecticut (2024):** Requires insurers to establish governance frameworks for AI, including testing for unfair discrimination.

**California (ongoing):** Various proposals to regulate AI in insurance, including disclosure requirements and anti-discrimination provisions.

**New York (ongoing):** Department of Financial Services circular letters addressing AI use in insurance.

### NAIC Model Bulletin

The National Association of Insurance Commissioners (NAIC) adopted a Model Bulletin on AI in 2023, which states are adopting:

**Key provisions:**

**Accountability:** Insurers are accountable for AI decisions, including those made by vendors.

**Governance:** Insurers should have governance frameworks for AI, including:
- Policies and procedures
- Risk management
- Compliance oversight
- Documentation

**Unfair discrimination prohibition:** AI shall not be used in a manner that unfairly discriminates based on protected characteristics.

**Testing requirements:** Insurers should test AI for unfair discrimination and take corrective action.

**Transparency:** Insurers should be able to explain AI decisions to regulators.

### EU Approach

The EU has taken a comprehensive approach to AI in insurance:

**EU AI Act:** Classifies AI for insurance pricing and underwriting (when it affects access to insurance) as "high-risk," requiring:
- Conformity assessments
- Risk management systems
- Data governance
- Transparency
- Human oversight
- Accuracy and robustness

**Insurance Distribution Directive:** Requires fair treatment of customers and adequate disclosure.

**GDPR:** Applies to AI processing of personal data, including automated decision-making provisions.

**Gender pricing prohibition:** The EU prohibits gender-based pricing in insurance.

---

## Testing for Discrimination

### Disparate Impact Analysis

The primary method for detecting discrimination is disparate impact analysis:

**Step 1: Define outcomes**
- Approval rates
- Premium levels
- Claims outcomes
- Coverage offered

**Step 2: Compare across groups**
- Compare outcomes for different demographic groups
- Calculate impact ratios

**Step 3: Assess significance**
- Statistical significance of differences
- Practical significance of disparities

**Step 4: Evaluate justification**
- Is the disparity actuarially justified?
- Are there less discriminatory alternatives?

### Challenges in AI Testing

**Protected characteristic data:** Insurers often don't collect race data, making testing difficult. Proxy methods (like BISG—Bayesian Improved Surname Geocoding) can estimate race, but imperfectly.

**Complex interactions:** AI may discriminate through complex interactions of variables that are hard to detect.

**Counterfactual difficulty:** It's hard to know what outcome a person would receive if their protected characteristic were different.

**Continuous outcomes:** Insurance pricing is continuous, not binary, making impact analysis more complex.

**Multiple products:** Discrimination might appear in which products are offered, not just pricing.

### Testing Methodologies

**Statistical parity:** Do outcomes occur at similar rates across groups?

**Equalized odds:** Are error rates (false positives, false negatives) similar across groups?

**Individual fairness:** Do similar individuals receive similar outcomes?

**Counterfactual fairness:** Would the outcome change if the protected characteristic were different?

**Proxy analysis:** Does the model rely heavily on variables correlated with protected characteristics?

---

## Industry Perspectives

### Arguments for AI in Insurance

**More accurate pricing:** AI can better match price to actual risk, benefiting low-risk customers who subsidize high-risk customers in traditional models.

**Expanded access:** Better risk assessment might allow insurers to offer coverage to people traditional models would reject.

**Efficiency:** AI reduces costs, potentially reducing premiums.

**Fraud reduction:** AI catches fraud that humans miss, reducing costs for honest customers.

**Innovation:** AI enables new products like usage-based insurance that reward safe behavior.

### Arguments for Caution

**Opacity:** AI decisions are hard to explain and audit, making discrimination harder to detect.

**Historical bias:** AI trained on historical data perpetuates historical discrimination.

**Proxy discrimination:** AI finds proxies for protected characteristics that humans wouldn't identify.

**Granular pricing concerns:** Hyper-personalized pricing could undermine risk pooling—the fundamental social function of insurance.

**Access to data:** Wealthier consumers have more data (from wearables, smart homes, etc.) that could lower their premiums, widening inequality.

**Consent and privacy:** Many AI data sources raise consent and privacy concerns.

---

## Fairness Frameworks for Insurance AI

### Actuarial Fairness

The traditional insurance standard: prices should reflect expected costs. If two people have different expected claims, they should pay different premiums.

**Limitation:** Purely actuarial fairness permits discrimination based on any predictive factor, even if that factor correlates with protected characteristics.

### Causal Fairness

Decisions should be based on causal risk factors, not mere correlations.

**Example:** Owning a sports car might correlate with aggressive driving, but if it doesn't cause accidents, it shouldn't affect pricing.

**Limitation:** Causation is hard to establish, and insurers have traditionally priced based on correlation.

### Procedural Fairness

The process for making decisions should be fair, regardless of outcomes.

**Elements:**
- Transparency about factors used
- Ability to understand and contest decisions
- Consistent application of standards

### Distributive Fairness

Outcomes should be distributed fairly across society.

**Consideration:** Insurance that becomes unaffordable for vulnerable populations may violate distributive fairness, even if pricing is actuarially sound.

### Balancing Competing Values

No single fairness framework is universally correct. Insurance AI must balance:
- Actuarial accuracy
- Non-discrimination
- Access and affordability
- Privacy
- Transparency

Different stakeholders weight these values differently, creating ongoing tension.

---

## Practical Guidance for Insurers

### Governance

**Board oversight:** Board should understand AI risks and approve AI strategy.

**AI ethics committee:** Cross-functional group to evaluate AI fairness.

**Clear accountability:** Designate responsibility for AI fairness.

**Policies and procedures:** Documented standards for AI development and use.

### Development Practices

**Data assessment:** Evaluate training data for bias and representativeness.

**Feature review:** Scrutinize features for correlation with protected characteristics.

**Bias testing:** Test models for disparate impact before deployment.

**Documentation:** Maintain thorough documentation of development decisions.

### Monitoring

**Ongoing testing:** Regularly test deployed models for discrimination.

**Performance monitoring:** Track model performance across demographic groups.

**Complaint analysis:** Monitor complaints for discrimination patterns.

**Audit trails:** Maintain records of AI decisions for review.

### Vendor Management

**Due diligence:** Evaluate AI vendors for bias testing and fairness practices.

**Contract requirements:** Require vendors to demonstrate fairness.

**Ongoing monitoring:** Don't assume vendor AI is fair—verify independently.

### Consumer Communication

**Transparency:** Explain what factors affect decisions.

**Appeal rights:** Provide mechanisms to contest AI decisions.

**Human review:** Offer human review of AI decisions when requested.

---

## The Future of Insurance AI

### Increased Regulation

Regulation of insurance AI will intensify:
- More states adopting NAIC model provisions
- EU AI Act implementation affecting global insurers
- Potential federal action on algorithmic discrimination

### Technical Developments

AI fairness techniques are advancing:
- Better methods for detecting proxy discrimination
- Techniques for training fairer models
- Improved explainability for insurance AI

### Industry Evolution

The industry is adapting:
- More investment in AI governance
- Development of industry standards
- Increased actuarial focus on AI fairness

### Ongoing Tensions

Fundamental tensions will persist:
- Personalization vs. solidarity
- Accuracy vs. fairness
- Innovation vs. precaution
- Efficiency vs. transparency

---

## Conclusion

AI is transforming insurance, offering the potential for more accurate risk assessment, faster processing, and better fraud detection. But with that potential comes risk—the risk that AI will perpetuate and amplify discrimination, disadvantaging vulnerable populations in accessing essential financial protection.

The insurance industry has always walked a line between legitimate risk classification and unfair discrimination. AI makes that line harder to find. Complex models can discriminate in ways that are difficult to detect. Novel data sources create new discrimination risks. The opacity of machine learning challenges traditional oversight.

Regulators are responding. The NAIC model bulletin, state laws like Colorado's, and the EU AI Act all push insurers toward accountable, fair AI. But regulation alone won't solve the problem. Insurers must build fairness into AI from the beginning—through careful data selection, bias testing, ongoing monitoring, and robust governance.

For consumers, the stakes are high. Insurance is a gateway to economic security—protection against accidents, illness, and disaster. If AI makes insurance less accessible or more expensive for certain groups, the consequences extend far beyond insurance itself.

The question isn't whether AI will transform insurance—it already is. The question is whether that transformation will be fair. The answer depends on the choices insurers, regulators, and society make now.

---

## Sources

1. National Association of Insurance Commissioners. "Model Bulletin: Use of Artificial Intelligence Systems by Insurers." Adopted December 2023. https://content.naic.org/sites/default/files/inline-files/2023-12-4%20Model%20Bulletin_Artificial%20Intelligence.pdf

2. Colorado General Assembly. "SB21-169: Restrict Insurers' Use of External Consumer Data." 2021. https://leg.colorado.gov/bills/sb21-169

3. European Parliament and Council. Regulation (EU) 2024/1689 (AI Act). Official Journal of the European Union, 2024.

4. Prince, Anya E.R., and Daniel Schwarcz. "Proxy Discrimination in the Age of Artificial Intelligence and Big Data." Iowa Law Review, Vol. 105, 2020.

5. Avraham, Ronen, Kyle D. Logue, and Daniel Schwarcz. "Understanding Insurance Antidiscrimination Laws." Southern California Law Review, Vol. 87, 2014.

6. Fuster, Andreas, Paul Goldsmith-Pinkham, Tarun Ramadorai, and Ansgar Walther. "Predictably Unequal? The Effects of Machine Learning on Credit Markets." Journal of Finance, Vol. 77, Issue 1, 2022.

7. O'Neil, Cathy. "Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy." Crown Publishing, 2016.

8. Gillis, Talia B. "The Input Fallacy." Minnesota Law Review, Vol. 106, 2022.

9. New York Department of Financial Services. "Circular Letter No. 1 (2019): Use of External Consumer Data and Information Sources in Underwriting for Life Insurance." January 18, 2019.

10. Consumer Federation of America. "High Price of Being Poor and Living in a Minority Neighborhood: Insurance Redlining." CFA Report, 2020.

11. American Academy of Actuaries. "Big Data and the Role of the Actuary." Issue Brief, 2018.

12. Geneva Association. "Artificial Intelligence and Machine Learning in Insurance." Research Report, 2021.

13. Kiviat, Barbara. "The Moral Limits of Predictive Practices: The Case of Credit-Based Insurance Scores." American Sociological Review, Vol. 84, Issue 6, 2019.

14. Binns, Reuben. "Fairness in Machine Learning: Lessons from Political Philosophy." Proceedings of the 2018 Conference on Fairness, Accountability, and Transparency, 2018.
