# The AI Family Tree - Types of AI Systems

## Article Metadata
- **Week:** 2
- **Phase:** 1 - AI Fundamentals
- **AIGP Domain:** I.5-I.8
- **Target Word Count:** 1,600 words

---

## Target Audience
Career-changers entering AI governance who need to understand the different categories of AI systems. Also valuable for business professionals evaluating AI solutions and compliance officers assessing AI risk levels across different system types.

---

## Key Learning Objectives
1. Distinguish between Artificial General Intelligence (AGI) and Narrow AI
2. Understand the four primary machine learning training methods
3. Grasp how transformer architecture powers modern AI
4. Differentiate between generative and discriminative AI
5. Understand the difference between physical robotics and RPA

---

## Article Content

### Introduction

If you've ever felt confused about AI terminology, you're in excellent company. The field is littered with acronyms, overlapping definitions, and enough buzzwords to make a marketer blush. But here's the thing: understanding the different types of AI systems isn't just academic trivia—it's fundamental to AI governance. You can't regulate what you don't understand, and you certainly can't assess risk without knowing whether you're dealing with a spam filter or something that might one day decide it wants a corner office.

This article maps out the AI family tree, from the humble narrow AI systems running your email inbox to the theoretical AGI that keeps researchers up at night. We'll cover how machines learn, why transformers revolutionized everything, and clear up the confusion between software robots and the kind that might actually roll over your foot.

---

### Section 1: Strong AI vs. Weak AI — The Great Divide

The most fundamental distinction in AI is between what researchers call "strong" and "weak" AI—though the more precise terms are Artificial General Intelligence (AGI) and Narrow AI.

**Narrow AI (Weak AI)** is what we actually have today. Every AI system you've interacted with—Siri, ChatGPT, your email's spam filter, Netflix recommendations—falls into this category. These systems excel at specific tasks within predefined parameters but can't transfer their skills elsewhere. An AI trained for image recognition cannot perform natural language processing without being completely retrained for that new task. Even ChatGPT, despite its impressive conversational abilities, is considered narrow AI because it's fundamentally limited to text-based interactions.

**Artificial General Intelligence (AGI)**, also known as Strong AI, remains theoretical. AGI would possess cognitive capabilities matching or exceeding human intelligence across all domains. It could use previous learning and skills to accomplish new tasks in entirely different contexts without requiring humans to retrain the underlying models. The key distinction: AGI would exhibit a range of intelligence in different areas without human intervention—something no existing system can do.

The timeline for AGI remains hotly debated. Geoffrey Hinton, a pioneering AI researcher, estimated in 2024 that systems smarter than humans could appear within 5 to 20 years, though he noted this prediction comes with low confidence. Jensen Huang, Nvidia's CEO, predicted in March 2024 that AI would be capable of passing any human test within five years. These predictions vary wildly, but the consensus among researchers is that AGI remains beyond our current technological capabilities.

For governance professionals, this distinction matters enormously. Every AI system requiring oversight today is narrow AI, meaning it has specific, bounded capabilities and known limitations. When evaluating risk, you're assessing what a system was designed to do, not some hypothetical general intelligence.

---

### Section 2: How Machines Learn — The Four Training Methods

Machine learning, the engine powering most modern AI, uses several distinct approaches to training. Understanding these methods helps governance professionals assess how systems make decisions and where bias might enter.

**Supervised Learning** operates like learning with a teacher. The model trains on labeled datasets where each input has a corresponding correct output. If you're training an image classifier, you provide thousands of images labeled "cat" or "dog," and the model learns to associate visual patterns with labels. Common applications include spam detection, house price prediction, and medical diagnosis. The strength of supervised learning is its precision; the limitation is that it requires extensive labeled data, which can be expensive and time-consuming to create.

**Unsupervised Learning** works with unlabeled data, discovering patterns and structures without human guidance. The model identifies clusters, associations, and relationships on its own. Customer segmentation is a classic example: feed the system purchase data, and it groups customers with similar behaviors without being told what categories to look for. This approach excels when you don't know what patterns exist in your data, but results can be harder to interpret and validate.

**Semi-Supervised Learning** bridges the gap. Instead of labeling an entire massive dataset—which might cost a fortune and take months—you hand-label a small portion and use that to train a model, which then processes the vast ocean of unlabeled data. This approach is particularly valuable in fields like medical imaging, where expert labeling is expensive and time-consuming. A doctor might label a few hundred CT scans, and the model uses that foundation to learn from thousands more.

**Reinforcement Learning** involves an agent interacting with an environment, learning through rewards and penalties to maximize long-term success. It's neither supervised nor unsupervised because it doesn't require labeled data or a training set—instead, it learns from trial and error. This approach taught algorithms to play chess and Go, with the system receiving feedback about wins, losses, and individual moves. Amazon's warehouse robots use reinforcement learning to optimize picking and movement patterns.

For governance purposes, understanding the training method reveals potential vulnerabilities. Supervised learning's dependence on labeled data means bias in labeling propagates through the system. Reinforcement learning's trial-and-error approach can lead to unexpected behaviors optimized for narrow reward signals.

---

### Section 3: Deep Learning and the Transformer Revolution

Deep learning, a subset of machine learning using artificial neural networks, has driven most recent AI breakthroughs. But the real revolution came in 2017 with the transformer architecture.

Before transformers, processing sequential data like text required recurrent neural networks (RNNs) that handled information one element at a time. Imagine reading a sentence by looking at each word, one after another, trying to remember what came before while processing what's in front of you. This sequential approach was slow and struggled with long passages where early context mattered.

The transformer architecture, introduced in the landmark paper "Attention Is All You Need," changed everything. Instead of processing sequentially, transformers use an attention mechanism that lets each element in a sequence look at every other element simultaneously. When processing the word "it" in a sentence, the attention mechanism allows the model to associate "it" with "animal" from earlier in the text, even if they're far apart. The model essentially asks: "Which words matter to me right now?" and focuses accordingly.

This parallel processing approach offered two massive advantages: faster training (because operations happen simultaneously rather than sequentially) and better handling of long-range dependencies (because the model doesn't need to "remember" through a chain of sequential processing). The transformer architecture became the foundation for GPT, BERT, and essentially every large language model powering today's AI applications.

For governance professionals, understanding transformers matters because these models power the systems generating the most regulatory concern. Their ability to process context and generate coherent output also creates the opacity that makes explainability so challenging.

---

### Section 4: Generative vs. Discriminative AI

AI systems fundamentally divide into two camps based on what they're designed to do: create or classify.

**Discriminative AI** focuses on classification—distinguishing between different categories or classes. A spam filter is discriminative AI: it examines an email and categorizes it as spam or not-spam based on learned patterns. Image recognition systems, fraud detection algorithms, and sentiment analysis tools all fall into this category. These systems learn the boundaries between classes and make predictions about where new data points fall. They're generally faster to train and highly accurate for classification tasks.

**Generative AI** creates new content that resembles its training data. Rather than asking "Is this a dog or a cat?", generative AI asks "What would a new dog image look like?" These systems learn the underlying distribution and patterns of data, then produce new instances following those patterns. ChatGPT generates text, DALL-E generates images, and music AIs generate compositions—all by learning patterns from existing examples and creating novel outputs.

The practical distinction is straightforward: you could use discriminative AI to determine whether an image contains a dog or a cat, while generative AI could create entirely new pictures featuring dogs or cats. Discriminative models learn decision boundaries; generative models learn data distributions.

For governance, this distinction shapes risk assessment. Discriminative AI risks often center on biased classification and unfair outcomes. Generative AI introduces additional concerns around misinformation, copyright, and the authenticity of generated content.

---

### Section 5: Physical Robotics vs. RPA — The Name Game

The term "robotic" in AI creates significant confusion because it describes two completely different things.

**Physical Robotics** (industrial automation) involves actual machines—mechanical systems that can see, sense, and physically interact with environments. Factory robots assembling cars, warehouse systems moving packages, and surgical robots all fall into this category. These systems automate physical tasks requiring high accuracy and consistency in manufacturing, logistics, and healthcare.

**Robotic Process Automation (RPA)** contains no physical robots whatsoever. RPA is software that automates repetitive digital tasks normally performed by humans at computers—extracting data, filling forms, moving files, processing transactions. The "robot" in RPA is a software program running on a physical or virtual machine, mimicking human interactions with user interfaces. As one expert put it: "RPA takes the robot out of the human," automating the dreary, repetitive tasks that knowledge workers perform daily.

The key difference: physical robotics automates manual labor in the physical world; RPA automates knowledge work in the digital world. A factory robot welds car frames. An RPA bot copies invoice data from emails into accounting systems.

RPA operates on predefined rules and workflows—it doesn't learn or adapt the way AI systems do. However, modern "intelligent automation" increasingly combines RPA with AI capabilities, using machine learning to handle unstructured data and make judgment calls that pure RPA cannot.

---

### Conclusion

The AI family tree branches in multiple directions: narrow versus general intelligence, different learning approaches, generative versus discriminative capabilities, and physical versus software automation. Each branch carries distinct governance implications.

Narrow AI requires assessment of specific, bounded capabilities. Training methods reveal potential bias vectors. Transformer-based systems demand attention to explainability challenges. Generative AI introduces content authenticity concerns. And RPA, despite its name, involves entirely different governance considerations than physical robotics.

As AI governance professionals, our job is navigating this landscape with precision. The terminology matters not because we're pedants, but because governance frameworks, risk assessments, and regulatory requirements depend on understanding exactly what type of system we're evaluating. When the EU AI Act classifies systems by risk level, when bias audits examine training data, when procurement decisions weigh automation options—the distinctions in this family tree become the foundation for sound governance decisions.

---

## References

1. IBM. (2024). "Types of Artificial Intelligence." IBM Think.
2. Vaswani, A., et al. (2017). "Attention Is All You Need." arXiv:1706.03762.
3. GeeksforGeeks. (2025). "Supervised vs Unsupervised vs Reinforcement Learning."
4. AltexSoft. (2024). "Semi-Supervised Learning, Explained with Examples."
5. IBM. (2024). "What is an Attention Mechanism?"
6. DataCamp. (2024). "Generative vs Discriminative Models: Differences & Use Cases."
7. IBM. (2024). "What is Robotic Process Automation (RPA)?"
8. McKinsey & Company. (2016). "The next acronym you need to know about: RPA."
9. TechTarget. (2024). "What is Artificial General Intelligence?"
10. AWS. (2024). "What is AGI? - Artificial General Intelligence Explained."

---

## SEO Keywords
- Types of AI systems
- AGI vs narrow AI
- Machine learning training methods
- Transformer architecture explained
- Generative AI vs discriminative AI
- RPA vs robotics
- Supervised learning examples
- Reinforcement learning applications
- AI governance fundamentals
- Weak AI strong AI difference

---

## Publishing Checklist
- [ ] Article reviewed for accuracy
- [ ] All citations verified
- [ ] Word count confirmed (~1,600 words)
- [ ] SEO keywords integrated naturally
- [ ] Internal links to Week 1 article added
- [ ] Images/diagrams created (AI family tree, learning methods diagram)
- [ ] Video script adapted from article
- [ ] Published to website
- [ ] Social media announcement drafted
