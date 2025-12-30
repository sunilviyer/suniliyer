---
title: The Future of AI Ethics – Emerging Challenges and Opportunities
slug: the-future-of-ai-ethics-emerging-challenges-and-opportunitie
path: risk
tldr: Before examining how AI challenges product liability, let's understand how traditional product liability works.
contentSections:
  - Traditional Product Liability: A Quick Primer
  - Why AI Breaks Traditional Product Liability
  - Current Legal Landscape in the United States
  - The European Approach: Liability Reform
  - Who Bears the Risk? Developers, Deployers, and Users
  - Practical Risk Management for Organizations
  - Case Studies: When AI Products Cause Harm
  - The Future of AI Product Liability
relatedConcepts: []
crossPathRefs:
tags:
  - future
  - ethics
  - ai governance
  - artificial intelligence
  - ai ethics
category: AI Risks & Principles
image: the-future-of-ai-ethics-emerging-challenges-and-opportunitie.jpg
imageAlt: The Future of AI Ethics – Emerging Challenges and Opportunities
author: Sunil Iyer
publishDate: 2025-12-23
readingTime: 19
seoTitle: The Future of AI Ethics – Emerging Challenges and Opportunit
seoDescription: Before examining how AI challenges product liability, let's understand how traditional product liability works.
---



## Traditional Product Liability: A Quick Primer

Before examining how AI challenges product liability, let's understand how traditional product liability works.


### The Three Types of Product Defects

Product liability law recognizes three types of defects that can make a manufacturer liable:

**Manufacturing Defects:** Something went wrong during production, making a specific unit different from (and more dangerous than) the intended design. Think of a car with a brake line that wasn't properly connected, or a bottle of medicine contaminated during packaging.

Key characteristics:
- The defect exists in a particular product, not the whole product line
- The product differs from the manufacturer's intended design
- Relatively straightforward to identify—compare the defective unit to a properly made one

**Design Defects:** The entire product line is dangerous because of how it was designed. Every unit has the same problem because the problem is in the blueprint, not the assembly line.

Key characteristics:
- The defect exists in every product of that design
- The product was made exactly as intended—but the design itself is flawed
- Courts typically apply one of two tests:
  - **Consumer expectations test:** Would a reasonable consumer expect the product to be this dangerous?
  - **Risk-utility test:** Do the risks of the design outweigh its benefits, considering whether a safer alternative was feasible?

**Failure to Warn:** The product is dangerous in ways that aren't obvious, and the manufacturer didn't provide adequate warnings or instructions. The design and manufacturing may be fine, but users weren't told what they needed to know to use the product safely.

Key characteristics:
- The danger isn't obvious to typical users
- Adequate warning could have prevented the harm
- Manufacturers have a duty to warn about known or reasonably foreseeable risks


### Strict Liability vs. Negligence

In most U.S. jurisdictions, product liability claims can proceed under two theories:

**Strict Liability:** The plaintiff doesn't need to prove the manufacturer was careless—only that the product was defective and caused harm. The policy rationale is that manufacturers are best positioned to prevent defects and absorb the costs of injuries.

**Negligence:** The plaintiff must prove the manufacturer failed to exercise reasonable care in designing, manufacturing, or warning about the product.

For many product defects, strict liability makes lawsuits more viable. But as we'll see, AI's characteristics make it harder to prove a "defect" exists, which complicates both strict liability and negligence claims.

---


## Why AI Breaks Traditional Product Liability


### Problem 1: Is Software a "Product"?

Traditionally, product liability applied to tangible goods—things you can touch. Software has long occupied an uncertain legal space.

**The service vs. product distinction:** Courts have sometimes treated software as a "service" rather than a "product," exempting it from product liability. When you license software (as most software is licensed, not sold), the transaction may be characterized as a service agreement rather than a product sale.

**Pure software cases:** When software alone causes harm—a medical app gives wrong dosage information, a financial algorithm makes erroneous trades—courts have often been reluctant to apply product liability.

**Embedded software cases:** When software is embedded in a physical product—a car's braking system, a medical device's control system—courts are more willing to treat the whole system as a product. But even here, the analysis can be murky.

**Example:** If a self-driving car crashes, the car is clearly a product. But what about the AI software that made the driving decisions? What about the machine learning model that was trained on millions of miles of driving data? What about the cloud service that provides real-time updates to the navigation system?


### Problem 2: Who Is the "Manufacturer"?

Traditional product liability focuses on manufacturers—the companies that design and produce products. With AI, identifying the responsible party is often much harder.

**The AI supply chain:**
- **Chip manufacturers:** NVIDIA, AMD, and others make the specialized hardware that runs AI
- **Cloud providers:** AWS, Google Cloud, and Azure provide the computing infrastructure
- **Foundation model developers:** OpenAI, Anthropic, Meta, and others create base AI models
- **Fine-tuners:** Companies customize base models for specific applications
- **Application developers:** Companies build products using AI components
- **Deployers:** Organizations implement AI in their operations
- **End users:** Individuals and businesses that use AI-powered products

When an AI system causes harm, which of these parties is legally responsible? All of them? Some of them? The one with the deepest pockets?

**Example:** A hospital uses an AI diagnostic tool to screen X-rays for cancer. The AI is built on a foundation model from Company A, fine-tuned by Company B, integrated into diagnostic software by Company C, and deployed by the hospital. The AI misses a tumor, and the patient's cancer progresses to an advanced stage. Who is liable?


### Problem 3: What Is an AI "Defect"?

The three traditional defect categories map poorly onto AI:

**Manufacturing defects:** With physical products, a manufacturing defect means something went wrong during production—a specific unit differs from the design. But AI doesn't work this way. Every copy of an AI model is identical. There's no "assembly line" where defects can creep in.

Could a "manufacturing defect" in AI be corrupted training data? A bug introduced during model development? A problem in the specific deployment? Courts haven't established clear rules.

**Design defects:** Design defects traditionally involve the blueprint—a flaw present in every unit. For AI, the closest analog might be flawed model architecture, biased training data, or inadequate testing protocols.

But applying design defect analysis to AI is challenging:
- AI systems are often too complex for anyone to fully understand
- "Defects" may emerge from the interaction of millions of parameters
- The same model may work perfectly in some contexts and fail dangerously in others
- What counts as a "reasonable alternative design" for AI?

**Failure to warn:** Warning about AI risks is complicated because:
- AI behavior can be unpredictable, even to its creators
- Risks may vary dramatically based on how the AI is used
- Some risks may only become apparent after deployment
- How do you warn about a risk you don't know exists?


### Problem 4: The Learning Problem

Traditional products are static—a toaster today is the same toaster tomorrow. AI systems that learn from data can change over time.

**The evolving product:** A machine learning model that updates based on new data may behave differently next month than it does today. If the AI causes harm after an update, was the original product defective, or did a new defect emerge?

**The deployment problem:** An AI model might be perfectly safe in the lab but dangerous when deployed in the real world, exposed to inputs its creators never anticipated.

**Example:** Microsoft's chatbot Tay was designed for friendly conversation. Within 24 hours of deployment on Twitter, users had trained it to spout racist and offensive content. Was Tay defective when it was launched, or did a "defect" emerge from its interaction with users?


### Problem 5: The Causation Problem

To win a product liability case, plaintiffs must prove the defect caused their injury. With AI, causation is often extremely difficult to establish.

**The black box problem:** Many AI systems—especially deep learning models—are "black boxes." Even their creators can't fully explain why they make specific predictions. How can a plaintiff prove the AI's decision-making was "defective" if no one can explain how it decided?

**The counterfactual problem:** Proving causation often requires showing that "but for" the defect, the harm wouldn't have occurred. With AI, this is hard:
- Would a "non-defective" AI have made a different decision?
- What would a "non-defective" AI even look like?
- Would the harm have occurred anyway?

**Multiple causes:** AI harms often result from complex interactions. The Uber crash involved sensor problems, classification errors, software decisions, human inattention, and regulatory gaps. Isolating any single cause is difficult.

---


## Current Legal Landscape in the United States


### Case Law: Still Developing

There's surprisingly little case law directly addressing AI product liability. Most AI harm cases have settled before establishing precedent, or have been resolved on other grounds.

**Relevant cases:**

*Autonomous vehicles:* The Uber crash didn't result in product liability litigation—criminal charges were filed against the safety driver (later dismissed in a plea deal), and civil claims were settled. Tesla faces ongoing litigation over Autopilot crashes, but cases typically involve negligence and consumer protection claims rather than strict product liability.

*Medical AI:* Few published cases address medical AI liability. When AI-assisted diagnostics fail, claims typically proceed under medical malpractice (focusing on physician decisions) rather than product liability (focusing on the AI).

*General software:* Courts have been inconsistent about whether software is a "product" for liability purposes. Some jurisdictions apply product liability to embedded software but not standalone software.


### Regulatory Guidance

**FDA and Medical AI:** The FDA regulates AI-based medical devices, requiring premarket approval or clearance for many AI diagnostic and treatment tools. FDA approval doesn't immunize manufacturers from liability, but it can affect how courts evaluate defect claims.

**NHTSA and Autonomous Vehicles:** The National Highway Traffic Safety Administration has issued guidance on autonomous vehicles but hasn't established comprehensive liability rules. Current regulations largely adapt existing vehicle safety standards to autonomous technology.

**No Comprehensive Framework:** Unlike the EU (discussed below), the U.S. has no comprehensive framework for AI liability. Cases proceed under general product liability principles, adapted on a case-by-case basis.

---


## The European Approach: Liability Reform


### The Product Liability Directive Update

The EU is updating its Product Liability Directive (originally from 1985) to address AI and other digital products. Key changes:

**Software as a product:** The updated directive explicitly includes software as a product, ending ambiguity about whether product liability applies.

**AI and machine learning:** The directive addresses products that change after market placement, including AI that learns and updates.

**Disclosure requirements:** Manufacturers may be required to disclose technical documentation when plaintiffs need it to prove defects—addressing the "black box" problem.

**Burden of proof adjustments:** In some circumstances, defect or causation may be presumed, shifting the burden to manufacturers to prove their products weren't defective.


### The AI Liability Directive

Beyond updating general product liability rules, the EU has proposed an AI-specific liability directive:

**Presumption of causality:** If a plaintiff can show (1) that the defendant failed to comply with AI Act requirements and (2) that the AI output caused the harm, causation is presumed. The defendant must prove the non-compliance didn't cause the harm.

**Disclosure of evidence:** National courts can order AI providers to disclose technical documentation. If a provider fails to disclose, courts can presume defect.

**Fault-based liability:** Unlike the Product Liability Directive's strict liability approach, the AI Liability Directive uses fault-based liability. Plaintiffs must show the defendant's non-compliance with rules or duties, not just that the product was defective.


### Implications for Global Companies

Companies operating in the EU must prepare for stricter liability rules:
- Documentation requirements increase (to enable disclosure)
- Compliance with the AI Act becomes essential (non-compliance creates presumptions)
- Insurance costs may rise
- Product design may need to prioritize explainability

---


## Who Bears the Risk? Developers, Deployers, and Users


### Developer Liability

Developers—those who create AI models and software—face potential liability for:

**Design choices:** Decisions about model architecture, training data, testing protocols, and safety measures. If these choices are unreasonable and lead to harm, design defect claims may succeed.

**Known risks:** Failure to address known limitations or dangers. If a developer knows their AI struggles in certain conditions but doesn't fix the problem or warn users, liability is more likely.

**Documentation:** Failure to provide adequate documentation for downstream users. If deployers can't properly implement the AI because documentation is lacking, developers may share responsibility for resulting harms.


### Deployer Liability

Deployers—organizations that implement AI in their operations—face liability for:

**Selection:** Choosing inappropriate AI for a given application. If a deployer uses AI in a context the developer warned against, liability may shift to the deployer.

**Implementation:** Errors in integrating AI into broader systems. An AI might be fine on its own but dangerous when combined with other components.

**Monitoring:** Failure to monitor AI performance after deployment. If problems emerge and the deployer doesn't respond, they may be liable for harms that could have been prevented.

**Overreliance:** Using AI inappropriately or without adequate human oversight. If a deployer treats AI as infallible when it isn't, resulting harms may be their responsibility.


### User Liability

End users can bear some responsibility when:

**Misuse:** Using AI in ways that were warned against or obviously inappropriate. If instructions clearly state limitations and users ignore them, liability may shift.

**Modification:** Altering AI systems in ways that create dangers. Users who modify or "jailbreak" AI may assume responsibility for resulting harms.

**Contributory negligence:** Failing to take reasonable precautions when using AI. A human driver who ignores an autonomous vehicle's warnings may share liability for a crash.


### The Allocation Challenge

In practice, liability often gets allocated through contracts:

**Indemnification clauses:** AI vendors often require customers to indemnify them against claims. Deployers agree to bear liability in exchange for using the AI.

**Limitation of liability:** Contracts typically cap vendors' liability, often at the amount paid for the AI.

**Warranty disclaimers:** Vendors disclaim implied warranties, limiting what customers can expect.

These contractual provisions shift risk but don't eliminate it. When third parties are harmed, contracts between developers and deployers don't bind victims. The question becomes whether victims can recover from anyone—and if so, who ultimately bears the loss.

---


## Practical Risk Management for Organizations


### Before Deploying AI

**Due diligence on vendors:**
- Request documentation of testing and validation
- Ask about known limitations and failure modes
- Review the vendor's liability and insurance arrangements
- Assess the vendor's track record and reputation

**Risk assessment:**
- Identify potential harms from AI failures
- Evaluate likelihood and severity of different scenarios
- Consider who could be harmed and how
- Document the assessment process

**Legal review:**
- Have counsel review vendor contracts for liability allocation
- Understand your organization's exposure under various scenarios
- Consider whether existing insurance covers AI-related claims


### During Operation

**Monitoring:**
- Track AI performance against expected outcomes
- Watch for drift, degradation, or unexpected behavior
- Document any problems and responses

**Human oversight:**
- Maintain meaningful human review of high-stakes AI decisions
- Train staff on AI limitations and when to override
- Create clear escalation paths for AI failures

**Incident response:**
- Establish procedures for AI-related incidents
- Document incidents thoroughly
- Respond promptly to prevent additional harm


### Insurance Considerations

**Traditional coverage gaps:**
- General liability policies may exclude or limit AI claims
- Technology E&O policies may not cover physical harm
- Cyber policies focus on data breaches, not AI failures

**Emerging AI coverage:**
- Some insurers now offer AI-specific liability coverage
- Coverage may require compliance with governance standards
- Premiums depend on AI risk profile and controls

**Key questions for insurance review:**
- Does current coverage address AI-specific risks?
- Are there gaps that need dedicated AI liability coverage?
- What documentation and controls do insurers require?

---


## Case Studies: When AI Products Cause Harm


### Autonomous Vehicles

**The Uber Crash (2018):** As described in the introduction, an Uber autonomous vehicle struck and killed a pedestrian. Investigation revealed multiple system failures, but also human error (the safety driver wasn't watching). Criminal charges against the safety driver were resolved in a plea deal. Civil claims were settled confidentially. No significant product liability precedent emerged.

**Tesla Autopilot Incidents:** Tesla has faced numerous lawsuits over Autopilot-involved crashes. Plaintiffs typically allege that Tesla overstated Autopilot capabilities (consumer fraud) or that the system was defectively designed (product liability). Tesla argues that Autopilot is a driver-assistance system, not autonomous driving, and that drivers are responsible for maintaining control. Most cases have settled without establishing precedent.

**Key issues:** Who is responsible when human oversight is supposed to prevent AI errors but fails? Is the AI defective, or did the human operator fail? How should warnings about AI limitations be evaluated?


### Medical Diagnostics

**IBM Watson for Oncology:** IBM's Watson for Oncology was marketed to help doctors identify cancer treatments. Reports emerged of the system making dangerous recommendations—suggesting treatments that could cause severe bleeding for patients with bleeding risks. Internal IBM documents allegedly showed the system was trained on hypothetical cases, not real patient data, and that IBM knew of problems.

Watson for Oncology was never FDA-approved as a diagnostic device, so it avoided regulatory scrutiny. Liability claims would likely focus on whether IBM adequately warned about limitations and whether hospitals appropriately relied on the system.

**Key issues:** Should AI medical tools face strict product liability as medical devices? How should liability be allocated between AI vendors and healthcare providers? What role does FDA approval or non-approval play?


### Chatbots and Advice

**Eating Disorder Chatbot:** In 2023, the National Eating Disorders Association replaced its human helpline with a chatbot named Tessa. Shortly after, reports emerged that Tessa was giving harmful advice to people with eating disorders—recommending calorie restriction and weight loss strategies. The chatbot was taken down.

If Tessa's advice had led to serious harm, liability questions would include: Is a chatbot a "product"? Was the advice a "defect"? Did the organization adequately warn about the chatbot's limitations? Did users assume risk by using AI for sensitive health topics?

**Key issues:** How does product liability apply to AI that gives advice rather than taking physical action? What duties do organizations have to validate AI advice before deployment?

---


## The Future of AI Product Liability


### Trends to Watch

**More AI-specific rules:** Following the EU's lead, other jurisdictions may adopt AI-specific liability frameworks. The current uncertainty benefits neither plaintiffs nor defendants; clearer rules may emerge through legislation or judicial development.

**Strict liability expansion:** As AI becomes more common in consumer products, political pressure may push toward stricter liability rules, making it easier for injured parties to recover.

**Insurance requirements:** Governments may require AI deployers to carry liability insurance, similar to auto insurance requirements. This would ensure compensation is available when AI causes harm.

**Explainability mandates:** Requirements that AI systems be explainable could affect liability law by making it easier to prove (or disprove) defects.


### Preparing for an Uncertain Future

Organizations using AI should:

**Assume liability rules will tighten:** Today's ambiguity likely won't last. Design AI deployments assuming you'll face scrutiny.

**Document everything:** If rules shift to presumed liability or disclosure requirements, thorough documentation becomes essential.

**Invest in governance:** Strong AI governance programs both reduce the likelihood of harm and demonstrate due diligence if harm occurs.

**Stay informed:** AI liability law is evolving rapidly. Monitor developments in courts, legislatures, and regulatory agencies.

---


## Conclusion

Product liability law, developed for a world of physical products and identifiable manufacturers, struggles to address AI's unique characteristics. Software that learns and changes, systems too complex for anyone to understand, and harm emerging from complex interactions—all challenge traditional legal frameworks.

For now, the rules remain uncertain. Courts are working through novel questions, regulators are developing guidance, and the EU is creating new frameworks that may spread globally.

For organizations deploying AI, this uncertainty creates both risk and responsibility:

**Risk:** Without clear rules, organizations can't be certain what liability they face. A deployment that seems reasonable today might be judged harshly tomorrow.

**Responsibility:** Uncertainty isn't an excuse for recklessness. Organizations should act as if they'll be held responsible for AI harms—because increasingly, they will be.

The path forward requires:
- Rigorous testing and validation before deployment
- Meaningful human oversight of AI decisions
- Honest communication about AI limitations
- Thorough documentation of development and deployment decisions
- Continuous monitoring for problems
- Swift response when harms occur

AI product liability law will continue to evolve. Organizations that take safety seriously now will be better positioned when clearer rules emerge—and more importantly, will cause less harm along the way.

When AI goes wrong, someone will pay. The question is whether organizations can manage that risk responsibly—or whether they'll learn the answer in court.

---


## Sources

<!-- component:flowchart:flowchart-sources -->
1. National Transportation Safety Board. "Collision Between Vehicle Controlled by Developmental Automated Driving System and Pedestrian, Tempe, Arizona, March 18, 2018." Highway Accident Report NTSB/HAR-19/03. November 2019. https://www.ntsb.gov/investigations/AccidentReports/Reports/HAR1903.pdf

2. Restatement (Third) of Torts: Products Liability. American Law Institute, 1998.

3. Owen, David G. "Products Liability Law." West Academic Publishing, 3rd Edition, 2015.

4. European Commission. "Proposal for a Directive on adapting non-contractual civil liability rules to artificial intelligence (AI Liability Directive)." COM(2022) 496 final. September 2022.

5. European Commission. "Proposal for a Directive on liability for defective products (Product Liability Directive revision)." COM(2022) 495 final. September 2022.

6. U.S. Food and Drug Administration. "Artificial Intelligence and Machine Learning in Software as a Medical Device." FDA guidance documents, 2021-2024. https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device

7. National Highway Traffic Safety Administration. "Automated Vehicles for Safety." NHTSA guidance and reports. https://www.nhtsa.gov/technology-innovation/automated-vehicles-safety

8. Geistfeld, Mark A. "A Roadmap for Autonomous Vehicles: State Tort Liability, Automobile Insurance, and Federal Safety Regulation." California Law Review, Vol. 105, 2017.

9. Vladeck, David C. "Machines Without Principals: Liability Rules and Artificial Intelligence." Washington Law Review, Vol. 89, 2014.

10. Chagal-Feferkorn, Karni A. "The Reasonable Algorithm." University of Illinois Journal of Law, Technology & Policy, 2018.

11. Ross, Casey, and Ike Swetlitz. "IBM's Watson supercomputer recommended 'unsafe and incorrect' cancer treatments, internal documents show." STAT News, July 25, 2018. https://www.statnews.com/2018/07/25/ibm-watson-recommended-unsafe-incorrect-treatments/

12. Selbst, Andrew D. "Negligence and AI's Human Users." Boston University Law Review, Vol. 100, 2020.

13. Shavell, Steven. "Strict Liability Versus Negligence." Journal of Legal Studies, Vol. 9, 1980.

14. European Parliament. "Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (AI Act)." Official Journal of the European Union, 2024.
