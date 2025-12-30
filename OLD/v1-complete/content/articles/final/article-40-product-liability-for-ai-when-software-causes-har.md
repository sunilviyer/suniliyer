
![Article 40: Product Liability for AI – When Software Causes Harm]({{IMAGE_PLACEHOLDER_article-40-product-liability-for-ai-when-software-causes-har}})

---
title: 'Article 40: Product Liability for AI – When Software Causes Harm'
tldr: ''
category: Legal Frameworks
learning_objectives:
- Understand the key concepts and principles of ai governance frameworks
- Implement compliance strategies in real-world scenarios
- Evaluate regulatory requirements for organizational compliance
seo_keywords:
- article
- product
- AI governance
- artificial intelligence
- product liability
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: legal documents, scales of justice, regulatory framework visualization,
    government buildings, professional illustration, modern flat design style, clean
    and authoritative, high quality, blue and gray color scheme with accent colors,
    suitable for professional article header
- type: flowchart
  label: Sources Process
  section: Sources
  id: flowchart-sources
- type: template
  label: 'Example:'
  section: 'Problem 1: Is Software a "Product"?'
  id: template-problem-1-is-software-a-product
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: 'Problem 2: Who Is the "Manufacturer"?'
  id: template-problem-2-who-is-the-manufacturer
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: 'Problem 4: The Learning Problem'
  id: template-problem-4-the-learning-problem
  template_link: /templates/example.md
- type: template
  label: 'The European Approach: Liability Reform'
  section: 'The European Approach: Liability Reform'
  id: template-the-european-approach-liability-reform
  template_link: /templates/the-european-approach-liability-reform.md
topic_fingerprint:
- machine learning
- foundation model
- deep learning
- explainability
- oversight
named_examples:
- anthropic
- european commission
- european parliament
- google
- ibm
- manufacturing
- meta
- microsoft
- nvidia
- openai
- tesla
- tesla autopilot
- twitter
- uber
- watson
word_count: 3833
processed_date: '2025-12-18T20:06:21.851Z'
---


## Copyright Basics: What's Protected and Why

Before diving into AI-specific issues, let's establish how copyright works.


### What Copyright Protects

Copyright protects "original works of authorship fixed in a tangible medium of expression." That legal phrase contains several important concepts:

**Original:** The work must originate from the author—it can't be copied from somewhere else. Originality doesn't require brilliance or novelty; even a simple photograph can be original if the photographer made creative choices.

**Works of authorship:** Copyright covers literary works, musical works, dramatic works, pictorial and graphic works, motion pictures, sound recordings, and architectural works. It doesn't cover ideas, facts, methods, or systems—only the specific expression of ideas.

**Fixed in a tangible medium:** The work must be recorded somehow—written down, painted on canvas, saved to a computer file. Purely mental creations or ephemeral performances aren't protected until fixed.

**Human authorship:** Although not explicit in the statute, courts have consistently required human creativity for copyright protection. Works created by nature (a pattern in rock), animals (a monkey's selfie), or machines (without human creative control) aren't copyrightable.


### Rights Copyright Provides

Copyright gives owners exclusive rights to:

- **Reproduce** the work (make copies)
- **Prepare derivative works** (adaptations, translations, remixes)
- **Distribute** copies to the public
- **Perform** the work publicly (for applicable works)
- **Display** the work publicly

These exclusive rights are subject to limitations, most importantly fair use (discussed below).


### Duration

For works created today, copyright generally lasts for the author's life plus 70 years. For corporate works ("works made for hire"), copyright lasts 95 years from publication or 120 years from creation, whichever is shorter.

---


## AI-Generated Content: Who Owns It?


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


### What About Human-AI Collaboration?

The Copyright Office acknowledges that AI can be a tool, like a camera or word processor. The key question is whether the human exercised sufficient creative control.

**More likely to be copyrightable:**
- Human creates initial work, uses AI for mechanical assistance
- Human provides detailed specifications that determine the output
- Human substantially modifies AI output
- Human selects and arranges AI outputs in creative ways

**Less likely to be copyrightable:**
- Human provides general prompts, AI generates complete work
- Human selects from among AI-generated options without modification
- AI output is used without meaningful human creative contribution

**Example:** If a designer uses AI to generate 50 logo concepts, then selects one and substantially modifies it—adjusting colors, changing elements, adding features—the final logo might be copyrightable as a human-authored derivative work. But the 50 AI-generated concepts themselves would not be copyrightable.


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


### How AI Training Works

To understand the legal controversy, you need to understand how AI models are trained.

Modern AI—especially large language models and image generators—learns from massive amounts of data. A text model like GPT might be trained on hundreds of billions of words from books, articles, websites, and other sources. An image model like Stable Diffusion might be trained on billions of images scraped from the internet.

During training, the AI doesn't simply store copies of this data. It analyzes patterns—how words relate to each other, how visual elements combine, what styles and structures appear in different contexts. The training data shapes the model's parameters (weights), enabling it to generate new content that resembles (but isn't identical to) the training data.

The question: **Does this training process infringe the copyright of the training data's creators?**


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

Separate from training infringement, AI outputs themselves can infringe copyright.


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


## Practical Guidance for Organizations


### For Content Creators

**Document your work:** Keep records of your creative process, including drafts, notes, and iterations. This documentation can help establish human authorship.

**Understand platform terms:** Many AI platforms claim rights to outputs generated using their tools. Read terms of service carefully before using AI for commercial projects.

**Consider opt-outs:** Some platforms (like DeviantArt) allow artists to opt out of AI training. Website technologies like robots.txt can also limit scraping, though enforcement is imperfect.

**Monitor for infringement:** Use tools to identify if your work is being reproduced by AI systems. This evidence could support future legal claims.

**Join collective efforts:** Organizations like the Authors Guild and various artists' groups are advocating for creator rights in the AI era.


### For Businesses Using AI

**Assess IP risks:** Before deploying AI, understand what IP protections (if any) will apply to outputs.

**Review vendor terms:** AI service providers have varying terms about IP ownership, liability, and indemnification. Understand what you're agreeing to.

**Document human contributions:** If you need IP protection for AI-assisted work, document how humans contributed creative control.

**Develop IP strategy:** Some innovations may be better protected by trade secrets, contracts, or first-mover advantage than by patents or copyrights.

**Monitor legal developments:** AI IP law is evolving rapidly. Stay informed about new cases, regulations, and guidance.


### For AI Developers

**Understand training data rights:** Know the source and rights status of training data. Licensed, public domain, and fair-use-defensible data reduces legal risk.

**Build licensing infrastructure:** Consider licensing frameworks for copyrighted training data. Markets for AI training rights are emerging.

**Implement content controls:** Technical measures to prevent AI from reproducing specific copyrighted content can reduce output infringement risk.

**Prepare for litigation:** Major AI developers are already facing lawsuits. Legal risk assessment should be part of development planning.

**Engage policy discussions:** AI IP rules are being shaped now. Developers have important perspectives to contribute to the debate.

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


## The Future of AI and IP


### Possible Developments

**Legislative action:** Congress could amend copyright law to address AI training, either creating explicit exceptions or requiring licensing.

**Collective licensing:** Organizations representing creators could negotiate collective licenses for AI training, similar to music licensing frameworks.

**Technical solutions:** Content authentication, watermarking, and AI detection tools could help enforce IP rights in the AI era.

**International harmonization:** As AI development is global, international IP harmonization becomes more important—but also more difficult.


### Fundamental Questions

The AI-IP debate raises questions that go beyond legal doctrine:

**What is the purpose of IP law?** If it's to incentivize creation, how does AI change that calculus? Do creators need less protection if AI makes creation easier? Or more protection if AI threatens their livelihoods?

**What is authorship?** When AI can generate novels, art, and music, what does human creativity mean? Should IP law protect human expression specifically, or creative output regardless of source?

**Who benefits from AI creativity?** AI development is dominated by well-resourced corporations. If AI-generated content isn't copyrightable, that content enters the public domain—benefiting everyone—but the AI tools remain proprietary. How should these competing interests be balanced?

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

<!-- component:flowchart:flowchart-sources -->
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
