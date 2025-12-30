---
title: 'Article 48: AI in Insurance – Fairness and Discrimination Concerns'
tldr: ''
category: AI Risks & Principles
learning_objectives:
- Understand the key concepts and principles of ai governance frameworks
- Implement risk assessment methodologies in real-world scenarios
- Evaluate bias detection techniques for organizational compliance
seo_keywords:
- article
- insurance
- AI governance
- artificial intelligence
- AI ethics
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: balanced composition showing risk and safety elements, warning symbols with
    protective shields, balanced scales, diverse people silhouettes, equality symbols,
    professional illustration, modern flat design style, clean and authoritative,
    high quality, blue and gray color scheme with accent colors, suitable for professional
    article header
- type: flowchart
  label: Sources Process
  section: Sources
  id: flowchart-sources
- type: template
  label: 'Example:'
  section: Underwriting
  id: template-underwriting
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: Pricing
  id: template-pricing
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: Claims Handling
  id: template-claims-handling
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: Fraud Detection
  id: template-fraud-detection
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: How AI Can Discriminate
  id: template-how-ai-can-discriminate
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: Causal Fairness
  id: template-causal-fairness
  template_link: /templates/example.md
topic_fingerprint:
- machine learning
- computer vision
- fairness
- risk assessment
- accountability
named_examples:
- eu ai act
- european parliament
- fair
- gdpr
word_count: 2871
processed_date: '2025-12-18T20:06:32.547Z'
---


## What Are AI Hallucinations?

An AI hallucination occurs when an artificial intelligence system generates information that is false, fabricated, or nonsensical—while presenting it with the same confidence as accurate information. The term "hallucination" comes from the idea that the AI is "seeing" things that aren't there, creating outputs disconnected from reality.

Hallucinations come in several flavors:

**Factual Fabrication**

The AI states something as fact that is simply untrue. "The Eiffel Tower was built in 1920" (it was 1889). "Einstein won the Nobel Prize for the theory of relativity" (it was for the photoelectric effect). These might seem like minor errors, but in professional contexts, factual fabrication can be catastrophic.

**Invented Citations**

The AI creates references to sources that don't exist. It might cite a journal article with a plausible title, real-sounding authors, and a proper citation format—but when you go looking for that article, you discover it was never written. This was exactly what happened in the Schwartz legal case.

**Fictional Details**

When asked about a real person, company, or event, the AI fills in gaps with invented details. It might describe a CEO's career history that never happened, attribute quotes that were never said, or describe events that never occurred—all while weaving in enough real information to make the fabrication seem credible.

**Confident Nonsense**

Sometimes AI outputs are not just wrong but logically incoherent or physically impossible. The AI might describe a chemical process that violates basic chemistry, a business strategy that contradicts itself, or a historical timeline that's internally inconsistent.

**Example: The Fake Professor**

A journalist asked an AI chatbot to write a biography of a real university professor. The AI produced a detailed account of the professor's career, including degrees from universities he never attended, books he never wrote, and awards he never received. It even invented a sabbatical year in a country he'd never visited. The AI had found the professor's name online and then fabricated an entire professional history around it—mixing real details with complete fiction.

---


## Why Do AI Systems Hallucinate?

To understand hallucinations, you need to understand how large language models (LLMs) work—and more importantly, how they don't work.


### AI Doesn't "Know" Anything

When you ask ChatGPT, Claude, or any LLM a question, it's not looking up the answer in a database of facts. It's not retrieving information from a knowledge base. It's predicting what words should come next based on patterns in its training data.

Think of it like an incredibly sophisticated autocomplete. When you type "The capital of France is..." your phone might predict "Paris" because that sequence appears frequently in text. LLMs do the same thing, just at a vastly more complex scale, predicting entire paragraphs based on patterns in billions of documents.

This means LLMs don't distinguish between true and false statements. They distinguish between probable and improbable word sequences. A false statement that appears frequently in training data—or that fits the patterns of true statements—is just as likely to be generated as a true statement.


### The Training Data Problem

LLMs are trained on massive datasets scraped from the internet. This data contains:

- Accurate, well-sourced information
- Outdated information that was once true but no longer is
- Errors, typos, and honest mistakes
- Deliberate misinformation and propaganda
- Fiction, satire, and hypotheticals
- Opinions presented as facts

The AI learns from all of this without distinguishing reliable sources from unreliable ones. It might learn the pattern "according to research, vaccines cause..." from both legitimate scientific discourse and anti-vaccine misinformation. When generating text, both patterns are available.


### Confidence Without Calibration

Humans typically express uncertainty when they're unsure. We say "I think," "probably," "I'm not certain, but..." LLMs don't naturally do this. They generate text with uniform confidence regardless of accuracy.

An LLM might state "The Battle of Hastings occurred in 1066" with the same confident tone as "The Battle of Thermopylae occurred in 480 BC"—even if it has vastly more training data supporting the first claim than the second. It might invent a citation with the same confidence it uses to cite a real paper.

This confidence without calibration is what makes hallucinations so dangerous. There's often no signal in the AI's output that indicates "this part I'm confident about, but this part is a guess."


### Filling Gaps Creatively

LLMs are trained to produce helpful, complete responses. When they don't have information, they don't naturally say "I don't know." Instead, they generate plausible-sounding content that fills the gap.

If you ask about an obscure historical figure, the AI might combine patterns from other historical figures to create a convincing-sounding biography. If you ask for a research citation, it might combine patterns from real citations to create a fake one that follows the right format.

**Example: The Invented Ingredient**

A food blogger used AI to generate a recipe for a traditional dish. The AI produced a recipe that looked authentic, complete with cooking times and specific ingredient amounts. But it included an ingredient that isn't used in that cuisine at all—the AI had invented a plausible-sounding addition that fit the pattern of similar recipes but wasn't actually traditional. Without cultural knowledge to catch the error, the blogger published it as authentic.

---


## The Real-World Consequences of Hallucinations

Hallucinations might seem like a minor inconvenience until you consider the contexts where they occur.


### Legal Consequences

The Schwartz case wasn't isolated. Multiple attorneys have been caught submitting AI-generated briefs with fabricated citations. In some cases, judges have required lawyers to disclose AI use and personally verify every citation. Beyond professional embarrassment and sanctions, fabricated legal arguments can affect case outcomes and harm clients.


### Medical Risks

Medical professionals using AI assistants face hallucination risks in diagnosis support, treatment recommendations, and drug interaction information. An AI might confidently recommend a drug dosage that's dangerously wrong, or describe contraindications that don't exist. In healthcare, hallucinated information can literally kill.

Research from Stanford found that medical AI chatbots provided incorrect information in up to 30% of responses to medical questions. Some errors were minor; others were clinically significant.


### Financial Harm

Financial advisors, accountants, and analysts using AI tools risk acting on hallucinated data. An AI might invent statistics about market performance, fabricate details about a company's financial history, or produce analysis based on numbers it made up. Financial decisions based on hallucinated information can result in significant losses.


### Reputational Damage

Companies using AI for customer service, marketing, or communications risk publishing hallucinated content. Imagine a company chatbot confidently telling a customer about a product feature that doesn't exist, a refund policy that was never offered, or a warranty that the company doesn't actually provide. The Air Canada chatbot case demonstrated this risk: the airline was held liable when its AI gave a customer incorrect information about bereavement fares.


### Academic Integrity

Students using AI for research papers may inadvertently include hallucinated citations or fabricated facts. Educators struggle to distinguish between student plagiarism and AI hallucination. Academic reputations can be damaged by innocent reliance on AI-generated misinformation.

**Example: The Phantom CEO Quote**

A company's PR team used AI to draft a press release about their CEO's statements at a conference. The AI generated several quotes attributed to the CEO that sounded plausible and aligned with company messaging—but the CEO had never actually said those things. The draft went through multiple reviews before someone noticed that one quote referenced a product that hadn't been announced yet. Further investigation revealed that all the "quotes" were AI fabrications.

---


## How to Detect Hallucinations

Detecting hallucinations requires skepticism and verification—treating AI outputs as drafts, not facts.


### Verify Every Factual Claim

Don't assume anything an AI tells you is true. For any factual claim that matters, verify it independently:

- Check dates, statistics, and proper names against reliable sources
- Verify citations by looking up the actual sources
- Confirm quotes by finding the original context
- Cross-reference claims across multiple authoritative sources

This is tedious, but it's essential. The more consequential the information, the more rigorous the verification should be.


### Look for Warning Signs

Certain patterns suggest higher hallucination risk:

- **Highly specific details about obscure topics**: If the AI provides very specific information about something that wouldn't be well-documented online, be suspicious.
- **Perfect-sounding citations**: Real citations often have quirks—unusual formatting, authors with common names, journals with specific conventions. AI-generated citations are sometimes "too clean."
- **Information that can't be found elsewhere**: If you can't verify a claim through any other source, that's a red flag.
- **Internal inconsistencies**: Sometimes hallucinated information contradicts other parts of the AI's response or well-established facts.
- **Recent events or very current data**: AI training data has a cutoff date. Information about recent events is more likely to be hallucinated.


### Test with Questions You Know

One way to calibrate an AI's reliability for your use case is to ask questions where you already know the answer. If the AI makes errors on things you can verify, assume it's making errors on things you can't verify too.


### Use Multiple AI Systems

Different AI systems hallucinate differently. If two independent AI systems give you the same answer, it's somewhat more likely to be accurate. If they contradict each other, at least one is wrong—and possibly both.

---


## Reducing Hallucination Risks

Organizations can take several approaches to reduce hallucination risks.


### Retrieval-Augmented Generation (RAG)

RAG systems combine AI generation with information retrieval. Instead of relying solely on patterns learned during training, the AI retrieves relevant documents and uses them to ground its response.

For example, a legal AI might retrieve actual case law from a database before generating analysis, rather than generating case citations from memory. A customer service bot might retrieve product information from the company's documentation rather than generating descriptions from training patterns.

RAG doesn't eliminate hallucinations, but it significantly reduces them by grounding AI outputs in specific, retrieved information.


### Temperature and Parameter Controls

AI systems have parameters that affect how "creative" or "random" their outputs are. A "temperature" setting of 1.0 produces more varied, creative outputs; a setting closer to 0 produces more predictable, conservative outputs.

For factual tasks, lower temperature settings reduce hallucination risk by making the AI stick closer to the most probable (and usually most accurate) patterns. Higher temperatures are useful for creative tasks but increase fabrication risk.


### Structured Outputs

Asking AI to produce structured outputs—filling in templates, answering specific questions, or following strict formats—can reduce the opportunity for creative hallucination. Instead of asking "Tell me about Company X," ask specific questions: "What year was Company X founded? List only information you're certain about."


### Human-in-the-Loop Verification

Build verification steps into your workflows. Don't let AI-generated content go directly to customers, courts, patients, or public channels. Have humans review, fact-check, and approve AI outputs before they have real-world consequences.


### Acknowledge Uncertainty

Design AI systems that express uncertainty when appropriate. Some AI systems can be prompted to indicate confidence levels or to explicitly note when they're uncertain. Building "I'm not sure" as an acceptable response reduces the pressure on the AI to generate plausible-sounding fabrications.


### Use AI for Draft Generation, Not Final Output

Treat AI as a first draft tool, not a finished product generator. AI can generate outlines, suggest ideas, and create starting points that humans then verify, refine, and approve. This approach captures the productivity benefits of AI while maintaining human accountability for accuracy.

**Example: The Verified Customer Service Bot**

A company implemented an AI customer service system with RAG, connecting it to their product database, policy documents, and FAQ. When the AI couldn't find relevant information, it was trained to say "I don't have information about that. Let me connect you with a human representative" rather than generating an answer. The system also flagged responses for human review when confidence was low. Hallucination-related customer complaints dropped by 80% compared to a baseline AI system.

---


## Organizational Policies for Hallucination Risk

Beyond technical measures, organizations need policies to manage hallucination risk.


### Disclosure Requirements

Require employees to disclose when they've used AI to generate content. This ensures reviewers know to apply appropriate skepticism.


### Verification Standards

Establish minimum verification standards for AI-assisted work. For legal filings, every citation might require independent verification. For medical information, every dosage recommendation might require pharmacist review.


### Acceptable Use Guidelines

Define which tasks are appropriate for AI assistance and which aren't. Tasks with high hallucination risk and high consequences might be off-limits for AI, while lower-stakes tasks might allow more AI involvement.


### Training Programs

Train employees on hallucination risks, warning signs, and verification techniques. Many people still don't understand that AI can fabricate with confidence, and training closes this knowledge gap.


### Incident Response

Establish procedures for when hallucinations cause harm. How will you respond to customers who received incorrect AI-generated information? What's your communication plan if hallucinated content becomes public?

---


## The Future of Hallucinations

AI developers are actively working to reduce hallucinations, but they're unlikely to be eliminated entirely.

**Improved Training Techniques**

Researchers are developing methods to train AI systems that better distinguish between reliable and unreliable information, and that express appropriate uncertainty. These techniques are improving, but hallucinations persist even in the most advanced systems.

**Better Grounding**

Integration with authoritative knowledge bases, real-time information retrieval, and fact-checking systems will reduce hallucinations for many use cases. But grounding can't help when accurate information simply doesn't exist.

**Fundamental Limits**

Some researchers argue that hallucinations are an inherent consequence of how large language models work. Pattern-based generation will always have edge cases where patterns suggest false information. Perfect accuracy may require fundamentally different AI architectures.

---


## Conclusion

AI hallucinations represent one of the most significant challenges in deploying AI systems responsibly. When machines generate false information with complete confidence, users who don't understand this risk can suffer serious consequences—from legal sanctions to financial losses to physical harm.

The key insight is that AI systems don't "know" things the way humans do. They predict patterns, and sometimes those patterns point toward falsehoods. This isn't a bug that will be patched away; it's a feature of how current AI technology works.

For organizations using AI, the practical response is clear: treat AI outputs as drafts that require verification, not as authoritative sources. Implement retrieval-augmented generation where possible. Build human review into workflows. Train employees on hallucination risks. And never let AI-generated content with significant consequences go unverified.

The lawyers who cited fabricated cases learned this lesson the hard way. Your organization doesn't have to.

---


## Sources

<!-- component:flowchart:flowchart-sources -->
1. Weiser, B. (2023). "Here's What Happens When Your Lawyer Uses ChatGPT." The New York Times.

2. Magesh, V., et al. (2024). "Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools." Stanford HAI.

3. Ji, Z., et al. (2023). "Survey of Hallucination in Natural Language Generation." ACM Computing Surveys, 55(12), 1-38.

4. Rawte, V., Sheth, A., & Das, A. (2023). "A Survey of Hallucination in Large Foundation Models." arXiv preprint.

5. Umapathi, L.K., et al. (2023). "Med-HALT: Medical Domain Hallucination Test for Large Language Models." Proceedings of the Conference on Empirical Methods in Natural Language Processing.

6. Elgan, E. (2024). "Air Canada ordered to pay customer who was misled by airline's chatbot." The Guardian.

7. Lewis, P., et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." Advances in Neural Information Processing Systems, 33.

8. Manakul, P., Liusie, A., & Gales, M.J.F. (2023). "SelfCheckGPT: Zero-Resource Black-Box Hallucination Detection for Generative Large Language Models." arXiv preprint.

9. OpenAI. (2024). "GPT-4 Technical Report." OpenAI.

10. Anthropic. (2024). "Claude's Character." Anthropic Documentation.

11. Huang, L., et al. (2023). "A Survey on Hallucination in Large Language Models: Principles, Taxonomy, Challenges, and Open Questions." arXiv preprint.

12. Dziri, N., et al. (2022). "On the Origin of Hallucinations in Conversational Models: Is it the Datasets or the Models?" Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics.
