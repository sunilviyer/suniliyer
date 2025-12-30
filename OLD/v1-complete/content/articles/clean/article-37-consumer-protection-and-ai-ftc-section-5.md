
![Article 37: Consumer Protection and AI – FTC Section 5 Explained]({{IMAGE_PLACEHOLDER_article-37-consumer-protection-and-ai-ftc-section-5-explaine}})

---
category: "AI Fundamentals"
learning_objectives:

  - "Understand the key concepts and principles of model validation processes"
  - "Implement regulatory requirements in real-world scenarios"
  - "Evaluate policy development for organizational compliance"
seo_keywords:

  - "article"
  - "consumer"
  - "AI governance"
  - "artificial intelligence"
  - "consumer protection"
word_count: 3155
processed_date: "2025-12-18T20:00:54.925Z"
---


## What Section 5 Actually Says


### The Statutory Language

Section 5(a) of the FTC Act declares unlawful "unfair or deceptive acts or practices in or affecting commerce" and empowers the FTC to prevent such acts and practices.

The law doesn't define "unfair" or "deceptive" in detail—those definitions have been developed through decades of FTC enforcement, court decisions, and policy statements.


### Deception: The Three-Part Test

The FTC considers an act or practice deceptive if:

1. **There is a representation, omission, or practice that is likely to mislead consumers.** This includes explicit false statements, but also implications, omissions of important information, and practices that create false impressions.

2. **Consumers are interpreting the message reasonably under the circumstances.** The FTC looks at how a reasonable consumer would understand the claim, not how the company intended it.

3. **The representation, omission, or practice is material.** A claim is material if it's likely to affect a consumer's decision—what they buy, how much they pay, or whether they take some other action.

**Example:** If a company claims its AI can accurately predict which job candidates will succeed, but the AI has never been validated for that purpose, that's likely deceptive. The claim is likely to mislead (consumers believe the AI works), a reasonable consumer would take the claim at face value, and it's material (it affects hiring decisions and consumer choices about applying for jobs).


### Unfairness: The Three-Part Test

The FTC considers an act or practice unfair if:

1. **It causes or is likely to cause substantial injury to consumers.** The injury must be more than trivial or speculative. It can be financial harm, but also other tangible harms like physical safety risks or unwarranted discrimination.

2. **The injury is not reasonably avoidable by consumers.** If consumers can easily avoid the harm themselves—by shopping around, reading disclosures, or choosing alternatives—the practice may not be unfair. But consumers can't avoid harms they don't know about.

3. **The injury is not outweighed by countervailing benefits to consumers or competition.** The FTC weighs the costs and benefits. Even a harmful practice might not be "unfair" if it produces sufficient benefits.

**Example:** If an AI system systematically denies services to people based on their race—even without using race as an explicit input—that causes substantial injury (discrimination), consumers cannot reasonably avoid it (they often don't know it's happening), and there's no legitimate benefit that outweighs racial discrimination. That's unfair.

---


## How the FTC Applies Section 5 to AI


### AI Washing: False Claims About AI Capabilities

"AI washing" is the practice of exaggerating AI capabilities to attract customers, investors, or business partners. It's the AI equivalent of "greenwashing"—making misleading environmental claims.

The FTC has specifically warned companies about AI washing. In a 2023 blog post titled "Keep your AI claims in check," the FTC cautioned:

> "Are you exaggerating what your AI product can do? If so, you're not just at risk of losing customer trust. You might also be running afoul of the FTC Act."

The Commission identified several common forms of AI washing:

**Claiming AI when there's no AI:** Some products marketed as "AI-powered" use simple rules, basic automation, or no meaningful AI at all. If consumers pay a premium expecting sophisticated AI and get something less, that's deceptive.

**Overstating AI accuracy:** Claims that AI is "highly accurate" or works "like a human expert" may be deceptive if the AI's actual performance doesn't match.

**Hiding AI limitations:** Omitting important limitations—like the conditions under which the AI performs well or poorly—can be deceptive if those limitations are material to consumers.

**Promising AI will do things it can't:** Claiming AI can predict the future, diagnose diseases, or make other consequential determinations without scientific validation is potentially deceptive.

**Example:** The FTC took action against a company called Automators AI for allegedly claiming their AI could generate guaranteed returns on investment. The company's claims were, according to the FTC, "false or unsubstantiated." This case shows the FTC will pursue not just tech giants, but any company making false AI claims.


### Discriminatory AI Outcomes

The FTC has made clear that AI producing discriminatory outcomes can violate Section 5's unfairness standard, even without any intent to discriminate.

In a 2021 blog post, the FTC warned:

> "The sale or use of—for example—racially biased algorithms... could be an unfair practice."

This matters because many AI systems exhibit discriminatory patterns:

- Facial recognition systems that work less accurately on darker-skinned faces
- Hiring algorithms that systematically disadvantage women or minorities
- Credit scoring models that produce disparate outcomes by race or national origin
- Ad targeting systems that exclude protected groups from opportunities

The FTC doesn't require proof that a company intended to discriminate. If the AI causes discriminatory harm, consumers can't avoid it, and there's no offsetting benefit, it's potentially unfair.

**Example:** The FTC's action against Rite Aid focused on facial recognition technology that falsely identified customers as shoplifters, disproportionately affecting people of color. The company was required to stop using the technology and implement comprehensive AI governance measures.


### Deceptive Design and Dark Patterns

"Dark patterns" are design choices that manipulate users into taking actions they didn't intend—signing up for subscriptions, sharing data, or making purchases. When AI is used to optimize these manipulative designs, Section 5 applies.

AI can supercharge dark patterns by:

- Personalizing manipulation to each user's vulnerabilities
- Testing thousands of design variations to find the most effective at influencing behavior
- Making real-time adjustments to maximize conversion regardless of user intent

The FTC has proposed a rule specifically addressing "junk fees and bait-and-switch tactics," and has taken enforcement actions against companies using dark patterns. AI that makes these practices more effective doesn't immunize companies—it potentially increases their liability.


### Data Collection for AI Training

When companies collect consumer data to train AI systems, Section 5's requirements apply. The FTC has emphasized several principles:

**Don't collect more than you need:** Collecting excessive data "just in case" it's useful for AI training can violate data minimization principles.

**Don't use data for undisclosed purposes:** If consumers provide data for one purpose, using it to train AI models may require separate consent.

**Provide meaningful privacy disclosures:** Burying AI training in pages of fine print isn't adequate notice.

**Protect the data you collect:** Data collected for AI training is subject to the same security requirements as any other consumer data.

**Example:** The FTC required Weight Watchers to delete models trained on data collected from children without proper parental consent. This "algorithmic disgorgement" remedy shows the FTC's willingness to destroy AI models built on improperly collected data.

---


## Major FTC AI Enforcement Actions


### Rite Aid (2023)

**What happened:** Rite Aid deployed facial recognition technology in stores to identify potential shoplifters based on matches to a database of people suspected of theft or fraud.

**The problems:** The system had high false positive rates, particularly for people of color. Employees treated customers flagged by the system as suspected criminals—following them, searching them, accusing them of crimes, and even calling police. Many flagged individuals had done nothing wrong.

**The FTC's action:** The Commission found that Rite Aid's practices were unfair because they caused substantial consumer injury (humiliation, embarrassment, harassment, wrongful detention) that consumers couldn't avoid and that wasn't outweighed by benefits.

**The remedy:** Rite Aid was banned from using facial recognition for five years and required to implement a comprehensive AI governance program, including bias testing and human oversight.

**The lesson:** Deploying AI that harms consumers—even if you don't intend harm—can violate Section 5. Companies must test for and mitigate AI risks before deployment.


### Amazon/Ring (2023)

**What happened:** Ring, Amazon's home security company, gave employees and contractors broad access to customers' private video footage without meaningful oversight.

**The problems:** Some employees accessed videos without legitimate business reasons. The company also retained children's voice recordings and geolocation data longer than necessary.

**The FTC's action:** The Commission found unfair and deceptive practices in Ring's data handling.

**The remedy:** Amazon paid $5.8 million and was required to delete data collected in violation of the law.

**The lesson:** AI systems that process sensitive consumer data must have strong access controls and data retention limits.


### Weight Watchers/Kurbo (2022)

**What happened:** Kurbo, Weight Watchers' app for children, collected personal information from children under 13 without obtaining verifiable parental consent, as required by the Children's Online Privacy Protection Act (COPPA).

**The problems:** The company collected birth dates, weight, and other sensitive information from children, using this data to train AI models.

**The FTC's action:** The Commission found COPPA violations and unfair practices.

**The remedy:** Weight Watchers paid $1.5 million and was required to delete all personal information collected from children and any algorithms or AI models developed using that data—"algorithmic disgorgement."

**The lesson:** AI models are only as legitimate as the data used to train them. Improperly collected data can result in the destruction of the AI models themselves.


### Cambridge Analytica/Facebook (2019)

**What happened:** Cambridge Analytica harvested Facebook user data through a third-party quiz app, collecting information on approximately 87 million users without proper consent.

**The problems:** Facebook's platform allowed third-party apps to access not just the data of users who installed them, but also data about those users' friends. This data was used for political advertising and targeting.

**The FTC's action:** The Commission found that Facebook violated a 2012 consent order and engaged in deceptive practices regarding user privacy.

**The remedy:** Facebook (now Meta) paid a record $5 billion penalty and was required to implement comprehensive privacy compliance measures.

**The lesson:** Third-party access to data for AI applications carries significant regulatory risk. Platforms are responsible for how partners use consumer data.

---


## The Algorithmic Disgorgement Remedy

One of the FTC's most powerful remedies is "algorithmic disgorgement"—requiring companies to delete AI models trained on improperly collected data.

This remedy recognizes that AI models are built on data. If that data was collected illegally, the model itself is "fruit of the poisonous tree." Simply deleting the underlying data doesn't undo the harm if the company gets to keep an AI model that learned from that data.

Algorithmic disgorgement has several components:

1. **Delete the improperly collected data.** This is the baseline expectation.

2. **Delete any AI models or algorithms derived from that data.** This is the novel remedy.

3. **Delete any products or services built on those models.** The taint extends to commercial applications.

**Example:** When the FTC settled with Everalbum for allegedly misusing photos and videos to train facial recognition AI without proper consent, the company was required to delete not just the data, but the AI models built on it.

For companies, algorithmic disgorgement is an existential threat. A company whose value depends on AI built from years of data collection could lose everything if that collection is found to violate consumer protection law.

---


## FTC Guidance and Policy Statements


### The Blog Posts That Matter

The FTC doesn't just enforce—it also educates. The Commission's Business Blog has published numerous posts warning companies about AI risks:

**"Aiming for truth, fairness, and equity in your company's use of AI" (2021):** Warned that biased algorithms can violate Section 5 and announced that the FTC was making AI a priority.

**"Keep your AI claims in check" (2023):** Detailed warning about AI washing and the need for substantiation of AI claims.

**"Chatbots, deepfakes, and voice clones: AI deception for sale" (2023):** Warned about AI tools that enable fraud and deception.

These blog posts aren't legally binding, but they signal the FTC's enforcement priorities. Companies that ignore these warnings can expect less sympathy when enforcement actions follow.


### Commercial Surveillance and Data Security Rulemaking

The FTC has proposed a rule on "Commercial Surveillance and Data Security" that would establish clearer requirements for AI systems. The proposed rule would:

- Require documentation of AI systems' design and potential risks
- Mandate assessments of AI systems for accuracy, bias, and discrimination
- Establish requirements for human oversight of automated decision-making
- Create data minimization requirements limiting collection for AI training

While the rule is still being developed, it signals where the FTC is heading. Companies that get ahead of these requirements will be better positioned when they take effect.

---


## Practical Implications for Businesses


### Before Deploying AI

**Validate your claims:** Any marketing claims about AI capabilities must be truthful and substantiated. If you claim your AI is accurate, have evidence to prove it.

**Test for discrimination:** AI systems should be tested for discriminatory outcomes before deployment, not after complaints arise.

**Review data collection practices:** Ensure that data used for AI training was collected properly, with appropriate consent and disclosures.

**Document everything:** Maintain records of AI development, testing, and decision-making. If the FTC investigates, these records will be crucial.


### During Operation

**Monitor for problems:** AI systems can develop problems over time as they learn from new data or as the world changes. Continuous monitoring is essential.

**Respond to complaints:** Consumer complaints about AI systems should be taken seriously. A pattern of complaints can attract FTC attention.

**Update disclosures:** As AI capabilities or limitations change, update consumer-facing disclosures accordingly.


### If the FTC Comes Calling

**Cooperate but protect your rights:** FTC investigations require careful navigation. Cooperation can help, but companies also have rights that should be protected.

**Assess remediation options:** The FTC often prefers settlements that include remediation measures. Companies that can propose credible improvements may achieve better outcomes.

**Consider the algorithmic disgorgement risk:** If there's any question about the legitimacy of training data, the risk of losing AI models entirely should factor into legal strategy.

---


## The State Law Layer

While this article focuses on the FTC, state attorneys general also enforce consumer protection laws. These state laws often mirror the FTC Act's prohibition on unfair and deceptive practices, but may include additional requirements:

**California:** The California Consumer Privacy Act gives consumers rights to know how their data is used, including for AI.

**Illinois:** The Biometric Information Privacy Act (BIPA) requires consent before collecting biometric data, including for facial recognition AI.

**New York:** The New York City AI hiring law requires bias audits of AI tools used in employment decisions.

**Colorado:** The Colorado AI Act (effective 2026) will require disclosures and impact assessments for high-risk AI systems.

Companies must consider not just FTC requirements, but the consumer protection laws of every state where they operate or have customers.

---


## Looking Ahead

The FTC's approach to AI is evolving. Several trends are clear:

**Increased enforcement:** The FTC has announced that AI is an enforcement priority. More cases are coming.

**Expanding theories:** The Commission is developing new applications of Section 5 to novel AI harms. What's permissible today may be actionable tomorrow.

**Rulemaking:** The proposed Commercial Surveillance rule would codify many principles currently enforced through case-by-case actions.

**Algorithmic accountability:** The FTC increasingly expects companies to understand how their AI works and to be accountable for its outcomes.

Companies that treat consumer protection as a compliance exercise—doing the minimum required—may find themselves on the wrong side of enforcement actions. Those that build consumer protection into their AI development processes will be better positioned for the regulatory environment ahead.

---


## Conclusion

Section 5 of the FTC Act may be over a century old, but it remains remarkably relevant to AI. The principles are simple: don't deceive consumers, and don't harm them unfairly.

The applications to AI are clear:

- Don't exaggerate what your AI can do
- Don't deploy AI that discriminates
- Don't use dark patterns powered by AI
- Don't collect data improperly to train AI

The consequences of violations are severe: millions in fines, destruction of AI models, and reputational damage that can take years to repair.

For business leaders and HR professionals, the message is straightforward: you don't need to wait for an "AI law" to know what's expected. The FTC has made its expectations clear through enforcement actions, guidance documents, and policy statements. Companies that heed these signals will avoid the fate of those that didn't.

Consumer protection isn't a barrier to AI innovation—it's a requirement for sustainable AI adoption. The companies that build AI consumers can trust will be the ones that succeed in the long run.

---


## Sources

1. Federal Trade Commission Act, 15 U.S.C. § 45(a). https://www.law.cornell.edu/uscode/text/15/45

2. Federal Trade Commission. "FTC Policy Statement on Deception." October 14, 1983. https://www.ftc.gov/legal-library/browse/ftc-policy-statement-deception

3. Federal Trade Commission. "FTC Policy Statement on Unfairness." December 17, 1980. https://www.ftc.gov/legal-library/browse/ftc-policy-statement-unfairness

4. Federal Trade Commission. "Keep your AI claims in check." Business Blog, February 27, 2023. https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check

5. Federal Trade Commission. "Aiming for truth, fairness, and equity in your company's use of AI." Business Blog, April 19, 2021. https://www.ftc.gov/business-guidance/blog/2021/04/aiming-truth-fairness-equity-your-companys-use-ai

6. Federal Trade Commission. "FTC Takes Action Against Rite Aid for Failing to Protect Consumers from AI-Driven Surveillance." Press release, December 19, 2023. https://www.ftc.gov/news-events/news/press-releases/2023/12/ftc-takes-action-against-rite-aid-failing-protect-consumers-ai-driven-surveillance

7. Federal Trade Commission. "FTC Requires Weight Watchers to Pay $1.5 Million and Delete Data and Algorithms Obtained from Kids' Health App." Press release, March 4, 2022. https://www.ftc.gov/news-events/news/press-releases/2022/03/ftc-requires-weight-watchers-pay-15-million-delete-data-algorithms-obtained-kids-health-app

8. Federal Trade Commission. "Amazon and Ring to Pay Over $30 Million to Settle FTC Allegations Related to Privacy and Security Failures." Press release, May 31, 2023. https://www.ftc.gov/news-events/news/press-releases/2023/05/amazon-ring-pay-over-30-million-settle-ftc-allegations-related-privacy-security-failures

9. Federal Trade Commission. "FTC Imposes $5 Billion Penalty and Sweeping New Privacy Restrictions on Facebook." Press release, July 24, 2019. https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook

10. Federal Trade Commission. "Trade Regulation Rule on Commercial Surveillance and Data Security." Advanced Notice of Proposed Rulemaking, 2022. https://www.ftc.gov/legal-library/browse/federal-register-notices/commercial-surveillance-data-security-rulemaking

11. Federal Trade Commission. "Chatbots, deepfakes, and voice clones: AI deception for sale." Business Blog, March 20, 2023. https://www.ftc.gov/business-guidance/blog/2023/03/chatbots-deepfakes-voice-clones-ai-deception-sale

12. California Consumer Privacy Act (CCPA), Cal. Civ. Code § 1798.100 et seq.

13. Illinois Biometric Information Privacy Act (BIPA), 740 ILCS 14.
