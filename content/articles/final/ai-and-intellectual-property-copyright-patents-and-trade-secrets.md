---
title: AI and Intellectual Property - Copyright, Patents, and Trade Secrets
slug: ai-and-intellectual-property-copyright-patents-and-trade-secrets
path: responsibility
publishDate: 2025-08-01
tldr: AI disrupts intellectual property fundamentals - Copyright Office requires human authorship meaning AI-generated content without meaningful human creative input cannot be copyrighted (Zarya of the Dawn 2023 case granted copyright to human-authored text and selection/arrangement but denied for individual AI images because Midjourney users cannot predict/control specific expression unlike cameras/Photoshop). Training data controversy centers on whether using copyrighted works to train AI constitutes infringement - copyright holders argue copying occurs during training, models are derivative works, market harm from substitute content, style theft profits from creators' life work; AI developers claim fair use through transformative purpose (learning patterns not copying), with major lawsuits testing questions (Getty v. Stability AI showing watermark reproductions, NYT v. OpenAI/Microsoft alleging verbatim reproduction threatening business model, Andersen v. Stability AI/Midjourney/DeviantArt challenging style copying, Tremblay v. OpenAI/Meta over book training). AI output infringement occurs through direct verbatim copying (ChatGPT reciting book portions, images containing distorted watermarks evidencing memorization) and substantial similarity raising questions whether style-matching output infringes despite style itself not being copyrightable. Patent law globally rejects AI as inventor (US, UK, EPO rejecting DABUS applications requiring "natural persons," Australia initial acceptance overturned) creating uncertainty where genuine AI inventive contributions may render inventions unpatentable with no proper inventor. Trade secrets gain importance for AI protecting training data/methods, model architecture/parameters, AI-generated innovations through confidentiality since copyright/patent protections fail, though lost upon disclosure and providing no protection against independent development/reverse engineering. Business implications include AI-generated content entering public domain enabling free competitor copying, requiring human creative contribution documentation for copyright claims, considering trade secret/contract/first-mover advantage alternatives. Training data licensing markets emerging if courts hold training constitutes infringement creating massive development barriers and existing model liability, or if fair use prevails creators lack remedies with severe economic impacts potentially prompting mandatory compensation regulations. Output liability questions whether AI developers providing infringement-enabling tools and/or users generating infringing content bear responsibility with vendors typically shifting liability through terms of service though contractual terms don't eliminate legal obligations. International approaches vary - EU Text and Data Mining exceptions for research (broad) and commercial (narrower with opt-outs) plus AI Act training data disclosure requirements, UK TDM exception for non-commercial research with commercial expansion abandoned after creator pushback, Japan broad exception for non-expressive information analysis, China Generative AI regulations requiring IP respect with developing enforcement. Future developments may include Congressional copyright law amendments creating training exceptions or licensing requirements, collective licensing organizations similar to music frameworks, content authentication/watermarking/detection technical solutions, international harmonization efforts despite difficulty. Organizations must understand uncertain AI-IP rules, document human creative contributions supporting IP claims, develop strategies accounting for copyright/patent limitations including trade secrets/contracts/first-mover advantage, prepare for rapid rule changes, consider ethical fairness of using creators' work without compensation/consent beyond legal compliance.
relatedConcepts:
  - ai-intellectual-property
  - copyright-law
  - human-authorship-requirement
  - ai-generated-content
  - zarya-of-the-dawn
  - midjourney
  - ai-training-data
  - copyright-infringement
  - fair-use-doctrine
  - transformative-use
  - getty-v-stability-ai
  - nyt-v-openai
  - andersen-v-stability-ai
  - training-data-licensing
  - ai-output-infringement
  - substantial-similarity
  - patent-law
  - ai-inventor
  - dabus-cases
  - natural-person-requirement
  - ai-assisted-inventions
  - trade-secrets
  - training-data-protection
  - model-architecture
  - public-domain
  - human-creative-control
  - derivative-works
  - market-harm
  - style-theft
  - four-factor-fair-use
  - verbatim-copying
  - watermark-reproduction
  - eu-tdm-exception
  - text-data-mining
  - uk-copyright
  - japan-copyright
  - china-generative-ai
  - collective-licensing
  - content-authentication
  - ip-strategy
examples:
  - ai-governance-use-cases
  - ai-safety-incidents-case-studies
  - generative-ai-systems-comparison
templates:
  - ai-governance-framework-builder
  - ai-vendor-assessment-template
  - ai-risk-assessment-template
crossPathRefs:
  - path: responsibility
    articles:
      - ai-accountability-who-is-responsible-when-ai-causes-harm
      - ai-governance-frameworks-building-your-organizations-approach
      - the-legal-patchwork-existing-laws-that-apply-to-ai
  - path: risk
    articles:
      - the-data-behind-ai-why-training-data-determines-everything
      - building-trustworthy-ai-the-seven-pillars
  - path: terminology
    articles:
      - generative-ai-explained-how-chatgpt-dall-e-and-claude-work
      - foundation-models-the-new-building-blocks-of-ai
tags:
  - intellectual-property
  - copyright
  - patents
  - trade-secrets
  - ai-generated-content
  - training-data
  - fair-use
  - human-authorship
  - infringement
  - licensing
  - dabus
  - getty-lawsuit
  - nyt-lawsuit
  - governance
category: Legal Frameworks
image: ai-and-intellectual-property-copyright-patents-and-trade-secrets.jpg
imageAlt: AI intellectual property framework showing copyright human authorship requirement, training data controversy, patent inventor restrictions, and trade secret protections
author: Sunil Iyer
readingTime: 22
seoTitle: AI Intellectual Property Law - Copyright, Patents & Trade Secrets Guide
seoDescription: AI-IP law - Copyright Office human authorship requirement (Zarya case), training data fair use controversy (Getty/NYT/Andersen lawsuits), patent law rejecting AI inventors (DABUS cases), trade secrets for model protection, output infringement, licensing markets, international approaches (EU TDM, UK, Japan, China), organizational strategies.
---

## Summary

AI fundamentally disrupts intellectual property law's foundational principles that copyright protects human expression and patents protect human invention, tested by systems generating expression and invention without clear human creative control. Copyright Office establishes human authorship requirement meaning "copyright can protect only material that is the product of human creativity" - content generated entirely by AI without meaningful human creative input cannot be copyrighted, humans must contribute "creative control" over work's expression, simply instructing AI insufficient, copyright protects only human-contributed elements. Zarya of the Dawn 2023 case provides clearest guidance where graphic novel creator Kristina Kashtanova used Midjourney to generate images from prompts then arranged with her text - Copyright Office granted copyright to human-authored text and selection/arrangement of images but refused for individual AI-generated images because Midjourney users cannot predict or control what images AI will generate (unlike cameras where humans control framing/timing/lighting or Photoshop where humans direct each edit), influence through prompts/iterations insufficient when AI determines specific expression. Business implications mean AI-generated content enters public domain immediately enabling free competitor copying, no infringement lawsuit capability for AI-generated works, requiring strategies ensuring meaningful human creative contribution to protected works, documenting human creative process demonstrating authorship, considering copyright alternatives (trade secrets, contracts, first-mover advantage), including human-authored protectable elements. Training data controversy centers whether training AI on copyrighted works without permission constitutes infringement - copyright holders argue copying occurs (training data must be copied into system even if temporarily), derivative works (trained model based on copyrighted training data), market harm (AI generates substitute content displacing human-created work demand), style theft (AI learning artist's distinctive style produces competing works without compensation/consent profiting from life work while potentially destroying market); AI developers argue fair use through transformative purpose (learning patterns to generate new content not simply copying, precedent in Google image thumbnails/book digitization for search), though courts fiercely battle on market effect factor. Major lawsuits testing questions include Getty Images v. Stability AI (2023 alleging Stable Diffusion trained on 12M Getty images without permission with AI-generated images including distorted Getty watermarks suggesting memorization), NYT v. OpenAI/Microsoft (2023 alleging ChatGPT training on Times articles enabling near-verbatim reproduction threatening business model with OpenAI claiming fair use), Andersen v. Stability AI/Midjourney/DeviantArt (2023 artists alleging training without consent generating style-copying images), Tremblay v. OpenAI/Meta (authors over book training usage) with outcomes shaping AI development for decades. Possible outcomes range from training held infringement requiring licenses creating massive development barriers/existing model liability/content licensing markets emerging, to fair use holdings enabling largely unrestricted development but leaving creators without copyright remedies/severe economic impacts potentially prompting other regulatory approaches, to middle-ground distinctions based on whether AI replicates specific works (not fair use) versus learns general patterns (fair use), whether outputs compete directly with originals, whether attribution/compensation occurs. AI output infringement separate from training occurs through direct verbatim copying (ChatGPT reciting book portions, image generators producing watermarked/logo/signature-containing outputs evidencing memorization) and substantial similarity tests (whether similar-but-not-identical AI outputs copying protectable expression beyond general uncopyrightable style) with liability questions whether AI developers providing infringement-enabling tools and/or users generating content bear responsibility though vendor terms of service typically shift liability without eliminating legal obligations. Patent law globally answers AI cannot be inventor through DABUS cases where creator Stephen Thaler claimed AI independently invented devices filing applications listing DABUS inventor - US USPTO/federal courts, UK courts, European Patent Office all rejected requiring "natural persons" as inventors holding patent law terms "individual"/"whoever" require human beings and inventors have rights AI cannot hold, Australia initial acceptance overturned on appeal, South Africa grant not substantively examined. AI-assisted invention inventorship depends on human users making "inventive contribution" (creative mental act) being inventor not AI developer (designing system doesn't contribute to specific invention) or employer (owns employee-scope inventions potentially extending to AI-assisted), or potentially nobody if genuine inventive contribution came from AI with only routine human input rendering invention unpatentable. Patentability uncertainty creates strange situation where AI-primary inventions may be unpatentable, companies might obscure AI's role claiming patentability, truly novel AI inventions could enter public domain immediately, patent system's incentive structure (temporary monopoly for disclosure) breaks down requiring documentation of human contributions, considering trade secret alternatives, watching for jurisdictional law revisions. Trade secrets gain importance as copyright/patent face challenges protecting confidential business information providing competitive advantage (formulas, algorithms, customer lists, manufacturing processes) through secrecy requirements (not generally known/readily ascertainable, economic value because secret, reasonable secrecy maintenance efforts) applicable to AI training data/methods, model architecture/parameters, AI-generated innovations if kept confidential though lost upon disclosure with no protection against independent development/reverse engineering. International approaches vary - EU Text and Data Mining exceptions for research (broad) and commercial purposes (narrower with copyright holder opt-out rights) plus AI Act requiring generative AI training data disclosure summaries, UK TDM exception for non-commercial research with proposed commercial expansion abandoned after creator pushback, Japan broad exception for non-expressive information analysis potentially covering much training, China Generative AI regulations requiring IP respect with developing enforcement mechanisms. Future developments may include Congressional copyright amendment creating training exceptions or licensing requirements, collective licensing organizations negotiating creator-representing licenses similar to music frameworks, technical solutions (content authentication, watermarking, AI detection), international harmonization becoming more important but difficult as AI development is global. Organizations must understand uncertain current AI-IP rules, document human creative contributions to support IP claims, develop strategies accounting for copyright/patent limitations including trade secrets/contracts/first-mover advantage, prepare for rapid rule changes, consider ethical fairness of using creators' work without compensation/consent beyond mere legal compliance.

## Key Learning Objectives

After reading this article, you will be able to:

1. **Understand copyright human authorship** - Copyright Office requirement for human creativity, AI-generated content without meaningful human input uncopyrightable
2. **Analyze Zarya of the Dawn precedent** - Human text/arrangement copyrightable, AI images not due to unpredictable/uncontrollable Midjourney generation
3. **Navigate business copyright implications** - AI content public domain, competitor free copying, documentation needs, alternative protections (trade secrets, contracts)
4. **Evaluate training data controversy** - Copyright holder infringement arguments vs AI developer fair use claims, four-factor analysis
5. **Track major AI-IP lawsuits** - Getty (watermark evidence), NYT (verbatim reproduction/business threat), Andersen (style copying), Tremblay (book training)
6. **Assess output infringement risks** - Direct verbatim copying, substantial similarity tests, developer vs user liability questions
7. **Understand patent AI inventor rejection** - DABUS cases globally requiring natural persons, AI-assisted invention inventorship determination, patentability uncertainty
8. **Apply trade secret strategies** - Training data/model protection through confidentiality, limitations (disclosure loss, reverse engineering, independent development)
9. **Navigate international IP regimes** - EU TDM exceptions/AI Act, UK non-commercial TDM, Japan broad analysis exception, China IP respect requirements
10. **Develop organizational IP strategies** - Documentation, copyright/patent limitation accounting, trade secret/contract/first-mover alternatives, ethical considerations

---

## Copyright Basics and AI-Generated Content

### The Human Authorship Requirement

The Copyright Office has made its position clear: "Copyright can protect only material that is the product of human creativity."

This means:

- Content generated entirely by AI, without meaningful human creative input, cannot be copyrighted
- The human must contribute "creative control" over the work's expression
- Simply instructing AI to "create something" isn't enough creative input
- The copyright, if any exists, protects only the human-contributed elements

### The "Zarya of the Dawn" Decision

The 2023 "Zarya of the Dawn" case provides the clearest guidance on AI and copyright:

**The facts:** Kristina Kashtanova created a graphic novel using Midjourney to generate images based on her prompts, then arranged the images with her own text to tell a story.

**The ruling:** The Copyright Office granted copyright to:
- The text (human-authored)
- The selection and arrangement of images and text (human creative choices)

But refused copyright for:
- The individual AI-generated images

**The reasoning:** Midjourney users cannot predict or control what images the AI will generate. Users can influence results through prompts and iterations, but the AI, not the human, determines the specific expression. This is fundamentally different from using a camera (where the human controls framing, timing, lighting) or Photoshop (where the human directs each edit).

### Business Implications

For businesses using AI to generate content:

**No copyright protection means:**
- Competitors can copy your AI-generated content freely
- You cannot sue for infringement of AI-generated works
- AI-generated content enters the public domain immediately
- Trade secret or contract protections become more important

**Strategies to consider:**
- Ensure meaningful human creative contribution to works you want to protect
- Document the human creative process to demonstrate authorship
- Consider copyright alternatives: trade secrets, contracts, first-mover advantage
- Include human-authored elements that can be protected even if AI elements cannot

---

## Training Data: The Central Controversy

### The Arguments for Infringement

Copyright holders argue that training AI on their works without permission constitutes infringement because:

**Copying occurs:** To train an AI, the training data must be copied into the system. This reproduction, even if temporary, is a potentially infringing act.

**Derivative works:** The trained AI model could be considered a derivative work based on the copyrighted training data.

**Market harm:** AI trained on copyrighted works can generate substitute content, displacing demand for human-created works.

**The "style theft" problem:** An AI can learn an artist's distinctive style and produce works that compete directly with that artist—without compensation or consent.

**Example:** If a model is trained on an illustrator's entire portfolio, and users can prompt it to generate images "in the style of [that illustrator]," the model is essentially profiting from the illustrator's life work while potentially destroying their market.

### The Arguments Against Infringement (Fair Use)

AI developers argue that training on copyrighted works is "fair use"—a legal doctrine that permits some uses of copyrighted material without permission. Fair use analysis considers four factors:

**Factor 1: Purpose and character of the use**

AI developers argue that training is "transformative"—the AI isn't simply copying works but learning patterns to generate something new. Previous cases have found transformative purposes in uses like search engine image thumbnails (Google v. Perfect 10) and digitizing books for search (Authors Guild v. Google).

**Factor 2: Nature of the copyrighted work**

This factor considers whether the original is creative (more protection) or factual (less protection). Training data typically includes both, making this factor mixed.

**Factor 3: Amount and substantiality used**

AI training typically uses entire works. This factor usually weighs against fair use—but courts have allowed copying of entire works for transformative purposes (like search indexing).

**Factor 4: Effect on the market**

This is where the battle gets fiercest. AI developers argue their tools create new markets rather than substituting for originals. Copyright holders argue AI directly competes with and displaces human creators.

### Major Lawsuits

Several landmark cases are testing these questions:

**Getty Images v. Stability AI (2023):**
Getty Images sued Stability AI, alleging Stable Diffusion was trained on 12 million Getty images without permission. Key evidence: some AI-generated images included distorted versions of Getty's watermark, suggesting the model memorized copyrighted content.

**The New York Times v. OpenAI and Microsoft (2023):**
The Times sued over ChatGPT's training on Times articles, alleging the model can reproduce Times content nearly verbatim and that AI threatens the Times's business model. OpenAI argues the training was fair use.

**Andersen v. Stability AI (2023):**
A group of artists sued image generators Stability AI, Midjourney, and DeviantArt, alleging their tools were trained on artwork without consent and can generate images that copy artists' styles.

**Tremblay v. OpenAI (2023) and related cases:**
Multiple authors have sued OpenAI and Meta over the use of their books to train AI models.

These cases are ongoing. The outcomes will shape the future of AI development for decades.

### Possible Outcomes

**If training is held to be infringement:**

- AI developers would need licenses for training data
- This could create massive barriers to AI development
- Existing models trained on unlicensed data could face enormous liability
- Content licensing markets would emerge (and already are)

**If training is held to be fair use:**

- AI development would proceed largely unrestricted
- Artists and authors would have no copyright remedy for training use
- The economic impact on creators could be severe
- Other regulatory approaches might emerge (like mandatory compensation)

**Somewhere in between:**

More likely than either extreme, courts might draw lines based on:
- Whether the AI can replicate specific copyrighted works (not fair use)
- Whether the AI learns general patterns and styles (fair use)
- Whether AI outputs compete directly with originals (weighs against fair use)
- Whether attribution or compensation occurs (weighs toward fair use)

---

## Output Infringement: When AI Creates Copies

### Direct Copying

AI can sometimes reproduce copyrighted content nearly verbatim:

**Example:** Users have prompted ChatGPT to recite substantial portions of copyrighted books. The New York Times lawsuit includes exhibits showing ChatGPT reproducing Times articles nearly word-for-word.

**Example:** Image generators have produced outputs containing distorted copyrights watermarks, logos, and signatures—evidence that the AI memorized and can reproduce copyrighted content.

When AI output substantially reproduces copyrighted material, it's likely infringement—regardless of the training fair use question.

### Substantial Similarity

Even without verbatim copying, AI output can infringe if it's "substantially similar" to copyrighted works. This is the standard test for copyright infringement:

- Is there evidence of copying (direct or circumstantial)?
- Is the copied expression substantially similar to the original?

**The challenge:** An AI trained on an artist's work might generate images that are similar but not identical. Is that infringement?

**Arguments for infringement:**
- The AI learned from and depends on the original
- The output captures protectable elements of the original's expression
- The similarity goes beyond general style to specific choices

**Arguments against infringement:**
- Style itself isn't copyrightable—only specific expression
- The AI generated new expression, not a copy
- Any similarity is at the level of ideas, not expression

**Example:** If an AI generates an image that "looks like a Pixar movie," that's probably not infringement—Pixar doesn't own that general style. But if the AI generates an image that looks like a specific Pixar character, that's likely infringement of that character's copyright (and possibly trademark too).

### Who's Liable for Output Infringement?

If AI output infringes copyright, who is responsible?

**The AI developer:** Could be liable for providing a tool that enables infringement, especially if the AI was designed or trained in ways that make infringement likely.

**The user:** Could be liable for generating infringing content, even if unintentionally. Copyright infringement is a strict liability offense—intent isn't required.

**Both:** Infringement cases often name multiple defendants with different roles.

AI vendors typically include terms of service requiring users to take responsibility for outputs. But contractual terms don't eliminate legal liability—they only shift it between parties.

---

## Patents and AI Inventions

### Can AI Be an Inventor?

Patent law requires listing the "inventor" of a patented invention. Can AI be listed as an inventor?

Courts around the world have answered: **No.**

**The DABUS Cases:** Stephen Thaler created an AI system called DABUS (Device for the Autonomous Bootstrapping of Unified Sentience) that he claimed had independently invented two novel devices. Thaler filed patent applications listing DABUS as the inventor.

Results:
- **United States:** The USPTO and federal courts rejected the application. Only "natural persons" can be inventors under U.S. patent law.
- **United Kingdom:** Courts rejected the application on similar grounds.
- **European Patent Office:** Rejected the application—inventors must be natural persons.
- **Australia:** An initial court ruling accepted AI inventorship, but was overturned on appeal.
- **South Africa:** Granted the patent with DABUS listed as inventor—but South Africa doesn't substantively examine patent applications.

**The reasoning:** Patent law uses words like "individual" and "whoever" to describe inventors, which courts interpret as requiring human beings. Additionally, inventors have rights (like the right to assign the patent), and AI cannot hold legal rights.

### Who Owns AI-Assisted Inventions?

If AI can't be the inventor, but AI contributes to an invention, who is the inventor?

**The human user:** If a human uses AI as a tool to develop an invention, and the human makes the "inventive contribution" (the creative mental act that produces the invention), the human is the inventor.

**The AI developer:** If the AI developer designed the system that generated the invention, are they the inventor? Generally no—inventors must contribute to the specific invention, not just to the tools used.

**The employer:** Under patent law, employers often own inventions created by employees within the scope of employment. This could extend to AI-assisted inventions.

**Nobody:** If the genuine inventive contribution came from AI, with humans providing only routine input, there might be no proper inventor—and the invention might be unpatentable.

### The Patentability Uncertainty

This creates a strange situation:

- Inventions made primarily by AI may be unpatentable (no human inventor)
- Companies might obscure AI's role to claim patentability
- Truly novel AI-generated inventions could enter the public domain immediately
- The patent system's incentive structure (temporary monopoly for disclosure) breaks down

### Business Implications

For businesses developing AI-assisted inventions:

**Documentation matters:** Document human contributions to the inventive process to support inventorship claims.

**Consider alternatives:** If patent protection is uncertain, consider trade secrets for AI-generated innovations.

**Watch for changes:** Some jurisdictions may revise patent law to address AI inventions. The UK and EU have discussed reforms.

**Policy participation:** Businesses affected by this uncertainty should engage with patent offices and policymakers to help shape future rules.

---

## Trade Secrets and AI

While patents and copyrights face AI-related challenges, trade secret law may actually gain importance.

### What Trade Secrets Protect

Trade secret law protects confidential business information that provides competitive advantage—formulas, algorithms, customer lists, manufacturing processes, and more.

Requirements:
- The information must be secret (not generally known or readily ascertainable)
- It must have economic value because it's secret
- Reasonable efforts must be made to maintain secrecy

### Why Trade Secrets Matter for AI

**Training data and methods:** The specific data used to train an AI model, and the methods used to curate and process that data, can be trade secrets.

**Model architecture and parameters:** The detailed design of an AI model—its architecture, hyperparameters, and trained weights—can be protected as trade secrets.

**AI-generated innovations:** Even if AI-generated content can't be copyrighted or AI-generated inventions can't be patented, they might be protectable as trade secrets if kept confidential.

### Limitations

**Secrecy requirement:** Trade secrets are lost if disclosed. Published AI outputs, or models made publicly available, lose trade secret protection.

**Reverse engineering:** In most jurisdictions, independently discovering trade secrets through reverse engineering is legal. Competitors who study AI outputs to infer how the model works aren't violating trade secrets.

**No protection against independent development:** If a competitor independently develops the same AI innovation, trade secret law provides no remedy.

---

## International Perspectives

### European Union

The EU's approach includes:

**Text and Data Mining (TDM) exceptions:** EU copyright law includes exceptions for text and data mining for research (broad exception) and commercial purposes (narrower, with opt-out rights for copyright holders).

**AI Act implications:** The EU AI Act requires generative AI providers to disclose summaries of training data, which could affect IP enforcement.

**Proposed reforms:** European discussions include possible collective licensing schemes for AI training data.

### United Kingdom

The UK has:

**TDM exception:** A TDM exception for non-commercial research exists, but proposed expansion to commercial use was abandoned after creator pushback.

**AI and IP consultations:** The UK Intellectual Property Office has conducted consultations on AI and IP, without yet reaching definitive conclusions.

### Japan

Japan has a relatively permissive regime:

**Broad exception:** Japanese copyright law allows reproduction for information analysis, potentially covering much AI training.

**Limited to non-expressive use:** The exception applies to uses that don't involve enjoying the expression itself—analyzing patterns rather than reading books.

### China

China is developing its AI IP framework:

**Generative AI regulations:** Regulations require AI services to respect intellectual property rights, though enforcement mechanisms are developing.

**Domestic considerations:** China may balance IP protection against competitive advantages in AI development.

---

## Conclusion

AI has disrupted intellectual property law in ways we're only beginning to understand. The foundational principles—that copyright protects human expression, that patents protect human invention—are being tested by systems that can generate expression and invention without clear human creative control.

For now, the law offers more questions than answers:

- AI-generated content probably can't be copyrighted—unless humans exercise sufficient creative control
- Training AI on copyrighted works might be infringement or might be fair use—the lawsuits will tell us
- AI can't be a patent inventor—but human inventors can use AI as a tool
- The rules are evolving rapidly—what's true today may change tomorrow

For organizations navigating this landscape, the path forward requires:

**Understanding:** Know how IP law currently applies to AI, even if the rules are uncertain.

**Documentation:** Record human creative contributions to support IP claims.

**Strategy:** Develop IP approaches that account for copyright and patent limitations—including trade secrets, contracts, and first-mover advantage.

**Flexibility:** Be prepared for the rules to change as courts and legislators address these novel issues.

**Ethics:** Beyond legal compliance, consider the fairness of using creators' work to train AI without compensation or consent.

The AI-IP intersection isn't just a legal puzzle—it's a question about how we value human creativity in an age of machine intelligence. The answers we develop will shape the future of both technology and culture.

---

## Sources

1. U.S. Copyright Office. "Copyright Registration Guidance: Works Containing Material Generated by Artificial Intelligence." Federal Register, Vol. 88, No. 51, March 16, 2023.

2. U.S. Copyright Office. "Zarya of the Dawn (Registration # VAu001480196)." Decision letter, February 21, 2023.

3. Thaler v. Vidal, 43 F.4th 1207 (Fed. Cir. 2022) (DABUS patent case).

4. Getty Images (US), Inc. v. Stability AI, Inc. Complaint filed in U.S. District Court for the District of Delaware, February 2023.

5. The New York Times Company v. Microsoft Corporation and OpenAI Inc. Complaint filed in U.S. District Court for the Southern District of New York, December 2023.

6. Andersen v. Stability AI Ltd. Complaint filed in U.S. District Court for the Northern District of California, January 2023.

7. Authors Guild v. Google, Inc., 804 F.3d 202 (2d Cir. 2015).

8. Google LLC v. Oracle America, Inc., 593 U.S. ___ (2021).

9. U.S. Copyright Office. "Artificial Intelligence and Copyright." Notice of Inquiry, Federal Register, August 30, 2023.

10. European Parliament and Council. "Directive (EU) 2019/790 on copyright and related rights in the Digital Single Market." Official Journal of the European Union, 2019.

11. UK Intellectual Property Office. "Artificial Intelligence and Intellectual Property: Copyright and Patents." Consultation outcome, June 2022.

12. Samuelson, Pamela. "Generative AI meets copyright." Science, Vol. 381, Issue 6654, July 2023.

13. Lemley, Mark A., and Bryan Casey. "Fair Learning." Texas Law Review, Vol. 99, 2021.

14. U.S. Patent and Trademark Office. "Public Views on Artificial Intelligence and Intellectual Property Policy." Report, October 2020.

---

*Next: GDPR Meets AI – Europe's Privacy Framework Applied*
