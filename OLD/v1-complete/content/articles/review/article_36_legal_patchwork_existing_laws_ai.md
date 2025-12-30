# Article 36: The Legal Patchwork – Existing Laws That Apply to AI

## TL;DR

There is no single "AI law" in most countries. Instead, AI systems are already regulated by dozens of existing laws covering consumer protection, employment discrimination, product safety, privacy, and intellectual property. Companies building or using AI must navigate this complex web of overlapping regulations. Understanding this legal patchwork is essential for anyone working in AI governance because violations can result in significant fines, lawsuits, and reputational damage—even when companies didn't realize they were breaking the law.

---

## Introduction

Here's a common misconception: because there's no specific "AI law" in most countries, AI operates in a legal vacuum where anything goes.

Nothing could be further from the truth.

When Amazon built a hiring algorithm that systematically downgraded resumes containing the word "women's" (as in "women's chess club captain"), they didn't violate an AI law. They violated employment discrimination laws that have been on the books since the 1960s. When the Federal Trade Commission (FTC) took action against companies making false claims about their AI products, they used consumer protection laws dating back to 1914.

The reality is that AI systems are already subject to a complex web of existing regulations. Consumer protection laws apply when AI deceives customers. Employment laws apply when AI makes hiring decisions. Privacy laws apply when AI processes personal data. Product liability laws apply when AI causes harm.

This creates what legal experts call a "patchwork"—a collection of overlapping laws from different eras, different government agencies, and different areas of law, all applying to AI in ways their original authors never anticipated.

For business leaders and HR professionals, understanding this patchwork isn't just an academic exercise. It's the difference between building AI responsibly and facing lawsuits, regulatory enforcement, and headlines you'd rather avoid.

---

## The Myth of the Regulatory Vacuum

Before diving into specific laws, let's address a persistent myth: the idea that because AI is new, it isn't regulated.

This myth persists for a few reasons. First, technology often moves faster than legislation. By the time lawmakers understand a technology well enough to regulate it, that technology has evolved into something different. Second, there's genuine uncertainty about how existing laws apply to AI. Courts are still working through novel questions, and regulatory agencies are still issuing guidance.

But uncertainty about how laws apply is not the same as an absence of laws.

Consider this analogy: when automobiles first appeared, there was no "automobile law." But cars were still subject to existing laws about property damage, personal injury, and public safety. Over time, specific automobile regulations emerged (traffic laws, safety standards, licensing requirements), but the absence of those specific laws never meant cars operated in a legal vacuum.

AI is in a similar position today. We're seeing the emergence of AI-specific laws like the EU AI Act, but existing laws have always applied—and continue to apply—to AI systems.

**Example:** In 2023, the FTC settled with a company called Rite Aid over its use of facial recognition technology. The company hadn't violated an "AI law" or even a "facial recognition law." Instead, the FTC found violations of consumer protection laws because the system falsely identified customers as shoplifters, leading to embarrassment, harassment, and even wrongful detention. The technology was new; the legal principles were decades old.

---

## Consumer Protection Laws: When AI Deceives

### FTC Act Section 5

The Federal Trade Commission Act, passed in 1914, prohibits "unfair or deceptive acts or practices." This seemingly simple phrase has become one of the most powerful tools for regulating AI in the United States.

The FTC considers a practice "deceptive" if it misleads consumers and affects their decisions. A practice is "unfair" if it causes substantial harm that consumers cannot reasonably avoid and that isn't outweighed by benefits.

How does this apply to AI? Several ways:

**False claims about AI capabilities:** If a company claims its AI can do something it cannot—like accurately predict job performance or detect diseases—that's potentially deceptive. The FTC has specifically warned companies about "AI washing," making exaggerated claims about AI to attract customers or investors.

**Hidden AI decision-making:** When AI makes important decisions about consumers (credit, insurance, employment) without disclosure, that can be deceptive. Consumers have a right to know when algorithms, rather than humans, are making decisions that affect them.

**Discriminatory outcomes:** Even without intent to discriminate, AI that produces discriminatory outcomes can be considered "unfair" under Section 5. The harm to affected consumers is substantial, they can't avoid it (they often don't even know it's happening), and discrimination has no countervailing benefit.

**Example:** The FTC took action against Weight Watchers' app Kurbo for collecting personal information from children without parental consent. While this involved an app rather than a complex AI system, the principle applies: technology doesn't exempt companies from basic consumer protection requirements.

### State Consumer Protection Laws

Beyond federal law, every U.S. state has its own consumer protection statutes. California's Consumer Privacy Act (CCPA) and its successor, the California Privacy Rights Act (CPRA), give consumers rights regarding automated decision-making. Illinois' Biometric Information Privacy Act (BIPA) requires consent before collecting biometric data—a law that has generated hundreds of lawsuits against companies using facial recognition and fingerprint scanning.

These state laws create a patchwork within the patchwork. A company using AI must consider not just federal law, but the laws of every state where it operates or has customers.

---

## Employment and Anti-Discrimination Laws

### Title VII of the Civil Rights Act

Title VII, passed in 1964, prohibits employment discrimination based on race, color, religion, sex, or national origin. It applies whether discrimination is intentional or not—a concept called "disparate impact."

Disparate impact is particularly relevant for AI. An algorithm can discriminate without any intent to do so. If an AI hiring tool screens out candidates based on zip codes, and those zip codes correlate with race, the result is racial discrimination regardless of what the algorithm was designed to do.

**Example:** Amazon's infamous recruiting tool learned to penalize resumes containing words associated with women, like "women's chess club" or the names of women's colleges. The algorithm wasn't programmed to discriminate against women—it learned this pattern from historical hiring data that reflected past discrimination. Amazon scrapped the tool, but not before it demonstrated how AI can perpetuate and amplify historical biases.

### Equal Credit Opportunity Act (ECOA)

The ECOA prohibits discrimination in lending based on race, color, religion, national origin, sex, marital status, age, or receipt of public assistance. When AI makes lending decisions, it must comply with these requirements.

This creates tension with how many AI systems work. Machine learning models often make predictions based on correlations that may serve as proxies for protected characteristics. A model might not use race as an input, but if it relies heavily on zip code, educational history, or other factors correlated with race, the effect can be discriminatory.

The Consumer Financial Protection Bureau (CFPB) has made clear that the use of AI does not excuse discriminatory outcomes. Lenders are responsible for ensuring their algorithms comply with fair lending laws.

### Fair Housing Act

The Fair Housing Act prohibits discrimination in housing based on race, color, national origin, religion, sex, familial status, and disability. This applies to AI systems used in housing-related decisions, from tenant screening algorithms to dynamic pricing tools for rentals.

**Example:** In 2019, the Department of Housing and Urban Development (HUD) charged Facebook with violating the Fair Housing Act. Facebook's advertising platform allowed housing advertisers to target or exclude users based on race, color, religion, sex, and other protected characteristics. While Facebook's algorithm wasn't explicitly discriminatory, its design enabled discriminatory advertising.

---

## Product Safety and Liability Laws

### Traditional Product Liability

When a product causes harm, injured parties can sue the manufacturer, distributor, or seller under product liability law. These claims typically fall into three categories:

1. **Manufacturing defects:** The specific product that caused harm was flawed.
2. **Design defects:** The entire product line has a dangerous design.
3. **Failure to warn:** The product lacked adequate warnings about its risks.

How do these concepts apply to AI? That's a question courts are still working through.

Is a flawed AI model a "design defect"? If an AI makes a dangerous recommendation, is that a "manufacturing defect" in that specific output, or a design problem with the model itself? What warnings should accompany AI-powered products?

These questions become especially complex with machine learning systems that learn and change over time. A model might be safe when deployed but become dangerous as it learns from new data. Traditional product liability law wasn't designed for products that evolve.

**Example:** Consider a self-driving car that causes an accident. Is the vehicle manufacturer liable? The software developer? The company that trained the AI model? The provider of the training data? Current law doesn't provide clear answers, which is why liability reform is a major topic in AI governance.

### Software as a Product

Traditionally, software has often been licensed rather than sold, and license agreements typically disclaim liability. Courts have sometimes treated software as a "service" rather than a "product," limiting the application of product liability law.

But this is changing. The EU's Product Liability Directive is being updated to explicitly include software as a product. As AI becomes embedded in physical products—cars, medical devices, appliances—the distinction between software and product becomes harder to maintain.

---

## Intellectual Property Laws

### Copyright and Training Data

AI models are typically trained on vast amounts of data, including copyrighted material. This raises fundamental questions: Is training an AI model on copyrighted works infringement? Does the AI's output infringe if it resembles the training data?

Current litigation is testing these questions:

**Example:** Getty Images sued Stability AI, alleging that Stable Diffusion was trained on millions of copyrighted Getty images without permission. Some outputs from the model have reportedly included distorted versions of Getty's watermark—evidence, Getty argues, that the model memorized copyrighted content.

**Example:** The New York Times sued OpenAI and Microsoft, alleging that ChatGPT was trained on Times articles and can sometimes reproduce them nearly verbatim. The Times argues this constitutes copyright infringement and threatens its business model.

The AI industry generally argues that training on copyrighted material is "fair use"—transformative and not a substitute for the original works. Courts will ultimately decide, but the uncertainty creates risk for companies developing or using AI.

### AI-Generated Content

If an AI generates content, who owns it? The person who prompted the AI? The company that built the AI? The creators of the training data?

The U.S. Copyright Office has taken the position that works created by AI without significant human involvement cannot be copyrighted. Only works with human authorship qualify for copyright protection. This means AI-generated content may enter the public domain immediately—a significant issue for companies hoping to protect AI-generated works.

### Patents and AI Inventions

Can an AI be listed as an inventor on a patent? Courts in multiple countries have said no—only humans can be inventors. This means that if an AI genuinely invents something novel, the resulting invention may not be patentable unless a human can be credited with the inventive contribution.

---

## Privacy Laws

### GDPR (General Data Protection Regulation)

The European Union's GDPR applies to AI in numerous ways:

- **Lawful basis for processing:** Using personal data to train AI requires a lawful basis.
- **Data minimization:** Collecting only necessary data limits training data.
- **Purpose limitation:** Data collected for one purpose may not be usable for AI training.
- **Automated decision-making:** Article 22 gives individuals rights regarding solely automated decisions.
- **Right to explanation:** Individuals may have a right to understand how AI decisions are made.
- **Data Protection Impact Assessments:** Required for high-risk processing, including many AI uses.

### U.S. Privacy Laws

The United States lacks a comprehensive federal privacy law, but sectoral laws apply:

- **HIPAA:** Governs health information, including AI uses in healthcare.
- **GLBA:** Governs financial information, affecting AI in banking and finance.
- **FERPA:** Governs education records, limiting AI uses in schools.
- **COPPA:** Requires parental consent before collecting data from children under 13.

State privacy laws add additional requirements. California's CCPA/CPRA, Virginia's VCDPA, Colorado's CPA, and other state laws give consumers rights regarding their personal data and automated decision-making.

---

## How the Patchwork Creates Challenges

### Compliance Complexity

A company deploying a single AI system might need to consider:

- FTC consumer protection requirements
- State consumer protection laws in every state where they operate
- Title VII if the AI affects employment
- ECOA if the AI affects lending
- Fair Housing Act if the AI affects housing
- Product liability if the AI is embedded in a product
- Copyright law regarding training data
- HIPAA if the AI processes health information
- GLBA if the AI processes financial information
- GDPR if the AI affects EU residents
- State privacy laws

Each of these areas has its own regulators, its own enforcement mechanisms, its own precedents, and its own evolving interpretations.

### Gaps and Overlaps

The patchwork has both gaps and overlaps. Some AI uses may fall outside any existing regulatory framework. Others may be subject to multiple, potentially conflicting requirements.

**Example:** An AI that screens job applications might need to comply with Title VII (employment discrimination), the FCRA (if it uses consumer reports), EEOC guidance on AI and employment, state employment laws, and potentially state AI-specific laws like Illinois' AI Video Interview Act. Each has different requirements, different enforcement agencies, and different remedies.

### Enforcement Uncertainty

Different agencies interpret the same facts differently. The FTC might see a consumer protection violation where the EEOC sees an employment discrimination case. Multiple agencies might investigate the same AI system under different legal theories.

This uncertainty makes compliance challenging. Companies may think they're following the law, only to discover that a regulator interprets the law differently.

---

## What This Means for Organizations

### Take Existing Laws Seriously

The absence of AI-specific legislation doesn't mean freedom from regulation. Organizations should:

1. **Map their AI uses to existing legal requirements.** Every AI system should be analyzed for applicable laws.

2. **Involve legal counsel early.** Don't wait until an AI system is deployed to consider legal implications.

3. **Monitor regulatory developments.** Agencies like the FTC, CFPB, and EEOC are actively issuing guidance on how existing laws apply to AI.

4. **Document compliance efforts.** If a regulator investigates, showing good-faith compliance efforts matters.

### Prepare for AI-Specific Laws

While existing laws already apply, AI-specific laws are emerging. The EU AI Act is now in force. U.S. states are passing AI laws. Companies should prepare for more specific requirements while continuing to comply with existing frameworks.

### Build Governance Infrastructure

The complexity of the legal patchwork makes AI governance essential. Organizations need:

- Clear policies for AI development and deployment
- Review processes that include legal, compliance, and ethics perspectives
- Documentation practices that demonstrate due diligence
- Monitoring systems that detect problems before they become violations

---

## Conclusion

The legal patchwork governing AI is complex, overlapping, and continuously evolving. But its existence shouldn't come as a surprise. Laws governing deception, discrimination, safety, privacy, and intellectual property don't stop applying just because technology changes.

For AI governance professionals, understanding this patchwork is foundational. Before considering new AI-specific laws like the EU AI Act, you need to understand how existing laws already constrain AI development and deployment.

The companies that succeed will be those that treat legal compliance not as an afterthought, but as an integral part of AI development. They'll build legal and compliance considerations into their AI lifecycle from the start. They'll monitor regulatory developments and adapt quickly. And they'll recognize that "move fast and break things" isn't a viable strategy when the things you might break include civil rights laws, consumer protections, and people's lives.

The patchwork isn't perfect. It wasn't designed for AI, and it doesn't always fit well. But it's the law—and until AI-specific legislation creates clearer rules, organizations must navigate this complex terrain carefully.

---

## Sources

1. Federal Trade Commission. "FTC Act Section 5: Unfair or Deceptive Acts or Practices." FTC.gov. https://www.ftc.gov/legal-library/browse/statutes/federal-trade-commission-act

2. Dastin, Jeffrey. "Amazon scraps secret AI recruiting tool that showed bias against women." Reuters, October 10, 2018. https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G

3. Federal Trade Commission. "FTC Announces Final Rule Banning Fake Reviews and Testimonials." FTC.gov, 2024.

4. U.S. Equal Employment Opportunity Commission. "The Americans with Disabilities Act and the Use of Software, Algorithms, and Artificial Intelligence." EEOC.gov, 2022.

5. Consumer Financial Protection Bureau. "Consumer Financial Protection Circular 2022-03: Adverse action notification requirements." CFPB.gov, 2022.

6. U.S. Department of Housing and Urban Development. "HUD Charges Facebook With Housing Discrimination Over Company's Targeted Advertising Practices." HUD.gov, 2019.

7. Getty Images. "Getty Images Statement." Press release regarding litigation with Stability AI, 2023.

8. The New York Times Company v. Microsoft Corporation and OpenAI. Complaint filed in the U.S. District Court for the Southern District of New York, December 2023.

9. U.S. Copyright Office. "Copyright Registration Guidance: Works Containing Material Generated by Artificial Intelligence." Federal Register, 2023.

10. European Parliament. "Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (AI Act)." Official Journal of the European Union, 2024.

11. Illinois General Assembly. "Biometric Information Privacy Act (BIPA)." 740 ILCS 14.

12. California Legislature. "California Consumer Privacy Act." Cal. Civ. Code § 1798.100 et seq.
