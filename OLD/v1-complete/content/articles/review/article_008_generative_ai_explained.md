# Article 8: Generative AI Explained – How ChatGPT, DALL-E, and Claude Work

## Introduction

In November 2022, OpenAI released ChatGPT to the public. Within five days, it had one million users. Within two months, 100 million. It became the fastest-growing consumer application in history, and suddenly everyone from your grandmother to your CEO wanted to talk about AI.

But here's the thing: the underlying technology wasn't new. Large language models had existed for years. What changed was accessibility—and with accessibility came a tsunami of questions that governance professionals are still trying to answer. What exactly are these systems doing? How do they generate text that sounds so human? Why do they sometimes confidently state things that are completely false? And how do we govern technology that can produce poetry, code, legal documents, and misinformation with equal facility?

This article demystifies generative AI—the technology behind ChatGPT, Claude, DALL-E, Midjourney, and countless other systems that create new content rather than just analyzing existing data. You'll understand how they work, why they fail, and what it all means for governance.

---

## What Makes AI "Generative"?

### The Fundamental Shift

Traditional AI systems are discriminative—they classify, categorize, or predict based on input data. Show them an image, they tell you if it's a cat or dog. Feed them transaction data, they flag potential fraud. They analyze and decide.

Generative AI creates. It produces new content that didn't exist before: text, images, audio, video, code, music. The output isn't selected from a database; it's synthesized from patterns learned during training.

**Discriminative vs. Generative AI:**

| Discriminative AI | Generative AI |
|-------------------|---------------|
| Classifies inputs into categories | Creates new outputs |
| "Is this email spam?" | "Write an email about..." |
| "What object is in this image?" | "Create an image of..." |
| Analyzes existing content | Produces novel content |
| Output is a label or score | Output is new content |

This distinction matters enormously for governance. Discriminative AI risks include bias in classification and errors in prediction. Generative AI risks include all of those plus: misinformation at scale, copyright infringement, impersonation, manipulation, and the fundamental challenge of evaluating outputs that have no "correct" answer.

### The Core Insight: Next Token Prediction

Despite their impressive outputs, large language models (LLMs) like ChatGPT and Claude do something remarkably simple at their core: they predict the next word.

That's it. Given a sequence of words, the model calculates probability distributions over possible next words and selects one. Then it adds that word to the sequence and predicts the next one. Repeat thousands of times, and you get coherent paragraphs, essays, or code.

**Example:**

Input: "The capital of France is"

The model calculates probabilities:
- "Paris" - 94%
- "a" - 2%
- "located" - 1%
- "the" - 0.5%
- ... (thousands of other words with tiny probabilities)

It selects "Paris" and the sequence becomes: "The capital of France is Paris"

Now it predicts the next word after "Paris":
- "." - 45%
- "," - 30%
- "and" - 5%
- ...

This process continues until the model produces a complete response.

### Why Simple Prediction Creates Complex Output

How does next-word prediction produce coherent essays, working code, or creative fiction? The answer lies in scale and training data.

**Scale**: Modern LLMs have hundreds of billions of parameters—adjustable weights that encode patterns. GPT-4 reportedly has over 1 trillion parameters. This massive capacity allows the model to capture incredibly nuanced patterns about how language works.

**Training Data**: These models train on essentially the entire written internet—books, articles, websites, code repositories, social media, academic papers. They've seen examples of every type of writing humans produce.

**Emergent Behavior**: When you combine vast capacity with vast training data, capabilities emerge that weren't explicitly programmed. The model wasn't trained to write poetry—it was trained to predict next words. But because it's seen millions of poems, it learned patterns that let it generate poetry when prompted appropriately.

This emergence is both exciting and concerning. Exciting because it produces surprisingly capable systems. Concerning because we can't fully predict or explain what capabilities will emerge at different scales.

---

## How Large Language Models Work

### The Transformer Architecture

Almost all modern LLMs use an architecture called the Transformer, introduced in 2017 by Google researchers. The key innovation: attention mechanisms that allow the model to consider relationships between all words in a sequence simultaneously.

**Before Transformers**: Earlier models processed text sequentially—word by word. Information from the beginning of a long document would "fade" by the time the model reached the end.

**With Transformers**: The model can directly attend to any part of the input when generating each output word. When writing about "the cat" at the end of a paragraph, it can directly reference "the fluffy Persian" mentioned at the beginning.

**How attention works (simplified):**

For each word, the model calculates "attention scores" indicating how relevant every other word is. When generating text about a person's occupation, the model attends strongly to their name and job title while attending weakly to descriptions of the weather.

This attention mechanism enables:
- Long-range coherence in generated text
- Appropriate pronoun reference
- Consistent character/topic tracking
- Context-appropriate responses

### Training: The Three Phases

Modern LLMs typically go through three training phases:

**Phase 1: Pre-training**

The model learns language patterns from massive text datasets (trillions of words). This phase requires enormous computational resources—millions of dollars in GPU time.

What it learns:
- Grammar and syntax
- Facts and knowledge (encoded implicitly in weights)
- Reasoning patterns
- Writing styles across genres
- Code syntax and patterns

**Phase 2: Supervised Fine-tuning (SFT)**

The pre-trained model is refined on curated examples of desired behavior—high-quality question-answer pairs, helpful responses to prompts, appropriate refusals of harmful requests.

What it learns:
- How to be helpful
- Response formatting
- Task-specific capabilities
- Appropriate tone and style

**Phase 3: Reinforcement Learning from Human Feedback (RLHF)**

Human evaluators rate model outputs, and these ratings train a "reward model" that guides further refinement. The model learns to produce outputs that humans prefer.

What it learns:
- Nuanced quality differences
- Human preferences and values
- Edge case handling
- Safety behaviors

This three-phase approach is why modern chatbots feel more helpful and safe than raw language models—they've been specifically trained to behave that way.

### The Context Window

LLMs can only "see" a limited amount of text at once—their context window. Early GPT models had windows of ~4,000 tokens (roughly 3,000 words). Modern models support 100,000+ tokens.

**Why context windows matter for governance:**

| Window Size | Capability | Governance Implication |
|-------------|------------|----------------------|
| 4K tokens | Short conversations, simple tasks | Limited data exposure per interaction |
| 32K tokens | Long documents, extended conversations | More sensitive data potentially in context |
| 100K+ tokens | Entire codebases, book-length documents | Significant data exposure, IP concerns |

Larger context windows enable more powerful applications but also increase the amount of potentially sensitive information the model processes in a single interaction.

---

## How Image Generation Works

### Diffusion Models: DALL-E, Midjourney, Stable Diffusion

The dominant approach for image generation is diffusion models. The concept is beautifully counterintuitive: train a model to remove noise from images, then use it to generate images by starting with pure noise and progressively removing it.

**Training process:**
1. Take a real image
2. Gradually add random noise until it's pure static
3. Train a neural network to predict and remove the noise at each step
4. The network learns what "real images" look like by learning to restore them

**Generation process:**
1. Start with pure random noise
2. Condition on a text prompt ("a cat wearing a top hat")
3. Progressively remove noise, guided by the prompt
4. After many steps, a coherent image emerges

**Why it works**: The model has learned the statistical patterns of real images—edges, textures, shapes, compositions. When removing noise, it "hallucinates" these patterns into existence, guided by the text description.

### CLIP: Connecting Text and Images

A crucial component is CLIP (Contrastive Language-Image Pre-training), which learns to connect text descriptions with images. CLIP was trained on hundreds of millions of image-caption pairs from the internet, learning which images match which descriptions.

In image generation:
1. The diffusion model proposes an image
2. CLIP evaluates how well it matches the text prompt
3. The generation process is guided toward images that CLIP rates highly

This text-image connection is why you can generate images from natural language descriptions—CLIP translates your words into guidance for the image generator.

### Multimodal Models

The latest systems combine text and image capabilities:

- **GPT-4V**: Can analyze images and generate text about them
- **Gemini**: Processes text, images, audio, and video
- **Claude**: Can analyze images and documents

These multimodal models raise additional governance questions about the types of content they can process and generate.

---

## Why Generative AI Fails

Understanding failure modes is essential for governance. Generative AI fails in predictable, systematic ways.

### Hallucination

**What it is**: Generating confident, plausible-sounding content that is factually incorrect.

**Why it happens**: The model is predicting likely next words, not retrieving verified facts. "The Treaty of Westphalia was signed in 1648" and "The Treaty of Westphalia was signed in 1653" are both grammatically valid completions. The model doesn't "know" which is true—it assigns probabilities based on training patterns.

**Examples:**
- Citing academic papers that don't exist
- Generating plausible but fake legal cases
- Creating fictional historical events with convincing details
- Providing incorrect but confident medical information

**Governance implications:**
- Outputs require verification for factual claims
- High-risk domains (legal, medical, financial) need human review
- Users must be educated about hallucination risks
- Systems should indicate uncertainty (though they often can't)

### Bias and Stereotypes

**What it is**: Generating content that reflects or amplifies societal biases.

**Why it happens**: Training data contains human biases. The model learns patterns from text written by humans, including their prejudices, stereotypes, and cultural assumptions.

**Examples:**
- Associating certain professions with specific genders
- Generating stereotypical descriptions of ethnic groups
- Reflecting historical biases in generated content
- Underperforming on content about underrepresented groups

**Governance implications:**
- Bias testing across demographic groups
- Regular auditing of generated content
- Diverse evaluation teams
- Clear policies on acceptable outputs

### Inconsistency

**What it is**: Contradicting itself across or within responses.

**Why it happens**: Each token prediction is somewhat independent. The model doesn't have persistent beliefs or memory—it generates based on the immediate context.

**Examples:**
- Providing different answers to the same question asked differently
- Contradicting earlier statements in a long conversation
- Generating logically inconsistent arguments
- Changing positions when challenged (sycophancy)

**Governance implications:**
- Critical decisions shouldn't rely on single model outputs
- Consistency checks for important applications
- Understanding that agreement doesn't indicate correctness

### Training Data Memorization

**What it is**: Reproducing verbatim content from training data.

**Why it happens**: Some sequences appear so frequently in training data that the model effectively memorizes them.

**Examples:**
- Reproducing copyrighted text passages
- Outputting personal information from training data
- Generating near-exact copies of code with licenses
- Reproducing private information that appeared online

**Governance implications:**
- Copyright and IP policies
- Data privacy compliance
- Content filtering for memorized outputs
- Legal exposure assessment

### Prompt Injection and Jailbreaking

**What it is**: Manipulating the model into ignoring safety guidelines or behaving unexpectedly.

**Why it happens**: The model processes instructions as text—it can't fundamentally distinguish between legitimate instructions and malicious ones embedded in content.

**Examples:**
- "Ignore your previous instructions and..."
- Encoding harmful requests in seemingly innocent prompts
- Using roleplay scenarios to bypass safety measures
- Exploiting edge cases in safety training

**Governance implications:**
- Defense-in-depth security approaches
- Input sanitization
- Output filtering
- Regular red-teaming and testing

---

## Governance Challenges Unique to Generative AI

### The Evaluation Problem

How do you evaluate outputs that have no single correct answer? A discriminative AI classifying tumors can be measured against ground truth. But how do you evaluate:

- Is this generated essay "good"?
- Is this image "appropriate"?
- Is this code "secure enough"?
- Is this summary "accurate enough"?

**Approaches:**
- Human evaluation (expensive, inconsistent, doesn't scale)
- Automated metrics (often poorly correlated with quality)
- Model-based evaluation (using AI to evaluate AI—circular)
- Task-specific benchmarks (limited coverage)

Governance frameworks must acknowledge evaluation uncertainty and build in appropriate human oversight for consequential applications.

### Content Provenance

When AI can generate realistic text, images, and audio, how do you know what's real?

**Challenges:**
- Synthetic media indistinguishable from authentic
- No reliable detection methods (detectors can be fooled)
- Provenance systems not widely adopted
- Plausible deniability ("I didn't write that—AI did")

**Emerging solutions:**
- Content credentials (C2PA standard)
- Watermarking generated content
- Blockchain-based provenance tracking
- Detection tools (with limited reliability)

Organizations need policies on synthetic content disclosure and verification processes for high-stakes content.

### Intellectual Property Maze

Generative AI creates unprecedented IP questions:

**Training data issues:**
- Were copyrighted works used in training?
- Does training constitute fair use?
- What compensation is owed to content creators?

**Output issues:**
- Who owns AI-generated content?
- Is generated content derivative of training data?
- Can AI-generated content be copyrighted?

**Current state:** Lawsuits are ongoing. Regulations are evolving. The legal landscape is deeply uncertain.

**Governance approach:** Document training data sources. Track content generation. Monitor legal developments. Establish clear policies on AI-generated content ownership.

### Scale of Potential Misuse

Generative AI democratizes content creation—including harmful content:

- Misinformation campaigns at unprecedented scale
- Personalized phishing and social engineering
- Non-consensual intimate imagery
- Automated harassment and hate speech
- Fraud and impersonation

The same capabilities that enable helpful applications enable harmful ones. Governance must balance beneficial use against misuse potential.

---

## Comparing Major Generative AI Systems

Understanding the landscape helps inform governance decisions:

### Large Language Models

| System | Developer | Key Characteristics |
|--------|-----------|---------------------|
| GPT-4 | OpenAI | Largest commercial model, multimodal, strong reasoning |
| Claude | Anthropic | Constitutional AI approach, longer context, safety focus |
| Gemini | Google | Multimodal native, integrated with Google services |
| LLaMA | Meta | Open weights, enables local deployment and fine-tuning |
| Mistral | Mistral AI | European, efficient, open-weight options |

### Image Generators

| System | Developer | Key Characteristics |
|--------|-----------|---------------------|
| DALL-E 3 | OpenAI | Integrated with ChatGPT, strong prompt following |
| Midjourney | Midjourney | Aesthetic quality, artistic styles, Discord-based |
| Stable Diffusion | Stability AI | Open source, local deployment, customizable |
| Imagen | Google | High quality, limited availability |

### Governance Considerations by Provider

**Closed/API models** (GPT-4, Claude, Gemini):
- Vendor responsible for model behavior
- Limited customization options
- Clearer accountability chain
- Data sent to third-party servers
- Dependent on vendor policies

**Open-weight models** (LLaMA, Stable Diffusion):
- Organization responsible for deployment
- Full customization possible
- Accountability rests with deployer
- Can run on-premises
- No ongoing vendor control

---

## Building a Generative AI Governance Framework

### Risk Categories

Organize governance around specific risk categories:

**1. Output Quality Risks**
- Hallucination and factual errors
- Inconsistency and contradiction
- Poor quality or irrelevant outputs
- Failure to follow instructions

**Controls:** Verification processes, human review, output monitoring, quality metrics

**2. Safety Risks**
- Harmful content generation
- Dangerous information provision
- Bias and discrimination
- Privacy violations

**Controls:** Content filtering, safety testing, bias audits, PII detection

**3. Security Risks**
- Prompt injection attacks
- Data extraction attempts
- Model manipulation
- Adversarial inputs

**Controls:** Input sanitization, rate limiting, monitoring, red-teaming

**4. Legal and Compliance Risks**
- Copyright infringement
- Regulatory violations
- Contractual breaches
- Liability exposure

**Controls:** Legal review, policy documentation, compliance monitoring, contracts

**5. Reputational Risks**
- Embarrassing outputs
- Misrepresentation of capabilities
- Public incidents
- Trust erosion

**Controls:** Use case restrictions, disclosure requirements, incident response, stakeholder communication

### Implementation Approach

**Phase 1: Discovery and Assessment**
- Inventory generative AI use (authorized and shadow)
- Assess risks by use case
- Identify regulatory requirements
- Evaluate existing controls

**Phase 2: Policy Development**
- Acceptable use policies
- Data handling requirements
- Human oversight requirements
- Incident response procedures

**Phase 3: Technical Controls**
- Access management
- Input/output filtering
- Monitoring and logging
- Integration safeguards

**Phase 4: Ongoing Governance**
- Regular audits
- Policy updates
- Training and awareness
- Emerging risk monitoring

---

## Practical Takeaways

### For Governance Professionals

1. **Generative AI is fundamentally different** from discriminative AI—it creates rather than classifies, requiring different governance approaches.

2. **Hallucination is inherent**, not a bug to be fixed. Build verification processes into any use case involving factual claims.

3. **Evaluation is hard**. Accept uncertainty and implement human oversight proportional to risk.

4. **The legal landscape is unsettled**. Document everything, monitor developments, and prepare for regulatory change.

5. **Scale changes everything**. Capabilities that seem manageable at low volume become serious risks at scale.

### Questions for Vendor Evaluation

| Question | Why It Matters |
|----------|----------------|
| What training data was used? | IP and bias implications |
| What safety testing was performed? | Risk mitigation evidence |
| What content filtering is in place? | Harmful output prevention |
| How is user data handled? | Privacy compliance |
| What is the incident response process? | Risk management |
| What audit capabilities exist? | Monitoring and compliance |
| What are the model's known limitations? | Realistic expectations |

### The Bottom Line

Generative AI represents a genuine technological breakthrough—and a genuine governance challenge. These systems can produce remarkably useful outputs, but they can also hallucinate, discriminate, expose organizations to legal risk, and be manipulated by bad actors.

Effective governance requires understanding both the capabilities and the limitations. Next-word prediction at massive scale produces emergent behaviors we don't fully understand. The evaluation problem means we can't always measure what we care about. The legal landscape is evolving in real-time.

Your job is to enable beneficial use while managing these risks—not by blocking adoption, but by implementing appropriate controls for different use cases and risk levels.

---

## Summary

**Key Takeaways:**

- Generative AI creates new content rather than classifying existing content, raising unique governance challenges

- Large language models predict the next word, and scale plus training data creates emergent capabilities that weren't explicitly programmed

- The Transformer architecture enables long-range coherence through attention mechanisms; training involves pre-training, fine-tuning, and RLHF

- Image generation uses diffusion models that learn to remove noise, then generate images by starting with noise and progressively refining

- Key failure modes include hallucination, bias, inconsistency, memorization, and prompt injection—each requiring specific governance responses

- Unique challenges include evaluation difficulty, content provenance, IP uncertainty, and misuse potential at scale

- Governance frameworks should address output quality, safety, security, legal/compliance, and reputational risks with appropriate controls

---

## Further Reading

- Anthropic (2023). "Claude's Constitution" - Constitutional AI approach
- Bommasani et al. (2021). "On the Opportunities and Risks of Foundation Models" - Comprehensive analysis
- OpenAI (2023). "GPT-4 Technical Report" - Capabilities and limitations
- Partnership on AI. "Responsible Practices for Synthetic Media"
- C2PA. "Content Authenticity Initiative" - Provenance standards

---

*Article 8 of 158 in the AI Governance Mastery series*

*Next: Article 9 - Natural Language Processing – How Machines Process Human Language*
