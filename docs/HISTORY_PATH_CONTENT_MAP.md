# History Path Content Extraction Map

## Purpose
This document maps which SOURCE article sections will be extracted into each CONCEPT card, ensuring:
- No duplication across concept cards
- Engaging, focused content (not dumping full articles)
- Proper component markup preservation
- Clear attribution

---

## Concept Cards (15 Total)

### ✅ history-1: What AI Actually Is
**Sources:**
- Primary: `ai-governance-frameworks-building-your-organizations-approac.md`
- Supplementary: None needed

**Extract sections:**
- OECD AI Definition (Nov 2023) - ~300 words
- ISO/IEC 22989 terminology - ~200 words
- AI vs Traditional Software table
- Why definitions matter (5 points) - ~250 words

**Components to preserve:**
- `table` comparing AI vs traditional software
- `curved_box` with OECD definition
- `image_prompt` for hero

**Status:** ✅ Created (needs component markup)

---

### ✅ history-2: AI Family Tree
**Sources:**
- Primary: Synthesized from article-title.md Phase 1 content

**Extract sections:**
- Three Tiers (Narrow, Foundation Models, AGI) - ~400 words
- OECD Classification Framework 5 dimensions - ~350 words
- EU AI Act risk categories - ~300 words

**Components to preserve:**
- `table` for tier comparison
- `list` for OECD dimensions

**Status:** ✅ Created (needs component markup)

---

### ✅ history-3: AI Technology Stack
**Sources:**
- Primary: `article-10-the-ai-technology-stack-from-chips-to-application.md` (3018 words)

**Extract sections:**
- Layer 1: Hardware (~400 words) - NVIDIA dominance, key players table
- Layer 2: Infrastructure (~350 words) - Cloud options table
- Layer 3: Platforms (~400 words) - Build vs buy table
- Layer 4: Models (~350 words) - Open vs closed table
- Layer 5: Applications (~300 words)
- Cross-stack considerations (~500 words) - 3 key tables

**Components to preserve:**
- `table:table-key-players` (appears 2x - Hardware & Infrastructure)
- `table:table-build-vs-buy-spectrum`
- `table:table-open-vs-closed-models`
- `table:table-concentration-of-power`
- `table:table-cost-structure`
- `table:table-regulatory-mapping`
- `template:template-layer-3-platforms`

**Total source: 3018 words → Extract: ~2300 words**

**Status:** ✅ Created (needs component markup addition)

---

### ❌ history-4: AI History Timeline
**Sources:**
- Primary: `ai-history-from-dartmouth-to-deepmind.md` (needs reading)

**Extract sections:**
- Dartmouth Conference (1956)
- AI Winters and Springs
- Deep Learning Revolution (2012+)
- Timeline visualization

**Components needed:**
- `flowchart` for timeline
- `table` for key milestones

**Status:** ❌ Not started - need to read source

---

### ✅ history-5: Strong vs Weak AI
**Sources:**
- Primary: `article-5-strong-vs-weak-ai-why-the-difference-matters-for-g.md` (2275 words)

**Extract sections:**
- What is Weak AI (~350 words + table)
- What would Strong AI be (~300 words)
- Why distinction matters (~400 words)
- Stakeholder communication table
- Governance implications (~500 words)

**Components to preserve:**
- `table:table-weak-ai-examples`
- `table:table-stakeholder-communication`
- `table:table-governance-narrow-ai`
- `table:table-governance-foundation-models`
- `curved_box:governance-focus`

**Total source: 2275 words → Extract: ~1800 words**

**Status:** ✅ Created (needs component markup)

---

### ❌ history-6: Machine Learning Demystified
**Sources:**
- Primary: `how-machines-learn-training-methods-and-automation-explained.md` (needs reading)

**Extract sections:**
- What is Machine Learning
- Supervised vs Unsupervised vs Reinforcement
- Training process basics
- When to use ML vs rules

**Components needed:**
- `table` for ML types comparison
- `flowchart` for training process

**Status:** ❌ Not started - need to read source

---

### ✅ history-7: Deep Learning Decoded
**Sources:**
- Primary: `article-7-deep-learning-decoded-neural-networks-for-non-engi.md` (2912 words)

**Extract sections:**
- Single neuron explanation (~250 words + flowchart)
- Layering neurons (~300 words)
- Training process (~400 words + flowchart)
- Types of networks (~600 words) - CNNs, RNNs, Transformers
- Why it works/fails (~500 words)
- Governance implications (~400 words + table)

**Components to preserve:**
- `flowchart:the-building-block-a-single-neuron`
- `flowchart:layering-neurons-the-network`
- `flowchart:what-training-actually-means`
- `table:the-role-of-data`
- `table:the-explainability-challenge`
- `template:transformers`

**Total source: 2912 words → Extract: ~2450 words**

**Status:** ✅ Created (needs component markup)

---

### ⏳ history-8: Generative AI Explained
**Sources:**
- Primary: `article-8-generative-ai-explained-how-chatgpt-dall-e-and-cla.md` (2897 words)

**Extract sections:**
- Discriminative vs Generative table (~200 words)
- How LLMs work (~500 words) - next token prediction, transformer, training phases
- How image generation works (~400 words) - diffusion models, CLIP
- Why generative AI fails (~600 words) - hallucination, bias, inconsistency
- Governance challenges (~500 words)
- Comparing major systems (~300 words) - tables for LLMs and image generators

**Components to preserve:**
- `table:the-fundamental-shift` (discriminative vs generative)
- `table:the-context-window`
- `flowchart:diffusion-models-dall-e-midjourney-stable-diffusion`
- `flowchart:clip-connecting-text-and-images`
- `table:large-language-models` (GPT-4, Claude, Gemini comparison)
- `table:image-generators` (DALL-E, Midjourney, Stable Diffusion)
- `table:questions-for-vendor-evaluation`
- `template:the-transformer-architecture`
- `template:example` (within "The Core Insight: Next Token Prediction")

**Total source: 2897 words → Extract: ~2500 words**

**Status:** ⏳ Have source, ready to create

---

### ⏳ history-9: Large Language Models
**Sources:**
- Primary: `article-9-large-language-models-the-technology-behind-the-hy.md` (2730 words)

**Extract sections:**
- Transformers architecture (~300 words)
- Scale: the secret ingredient (~250 words + table)
- Training process 4 phases (~400 words)
- What LLMs can/can't do (~500 words + table for capability-reliability gap)
- Deployment options (~400 words) - API, fine-tuned, self-hosted, RAG
- Key players table (~200 words)
- Governance challenges (~500 words) - hallucination, inconsistency, privacy, prompt injection

**Components to preserve:**
- `template:transformers-the-foundation`
- `table:scale-the-secret-ingredient` (GPT-1 to LLaMA 3)
- `table:the-capability-reliability-gap`
- `table:frontier-model-providers` (OpenAI, Anthropic, Google, Meta, Mistral)
- `table:capability-evaluation` (benchmarks)
- `flowchart:what-llms-actually-do`
- `flowchart:inconsistency-and-sycophancy`
- `template:inconsistency-example`
- `template:sycophancy-example`
- `template:prompt-injection-example`
- `checklist:practical-checklist`

**Total source: 2730 words → Extract: ~2350 words**

**Status:** ⏳ Have source, ready to create

---

### ⏳ history-10: AI vs Automation
**Sources:**
- Primary: `article-10-ai-vs-automation-understanding-the-distinction.md` (2502 words)

**Extract sections:**
- What is Automation (~200 words + table)
- What is AI (~200 words + table)
- The crucial difference (~300 words + table + flowchart)
- The Spectrum (~300 words) - not binary
- Hybrid systems (~400 words) - 2 examples with tables
- RPA confusion (~400 words + table)
- Why distinction matters (~500 words) - 3 tables (risks, regulatory, stakeholders)
- Classification framework (~300 words + flowchart + 2 tables)

**Components to preserve:**
- `table:what-is-automation`
- `table:what-is-artificial-intelligence`
- `table:the-crucial-difference`
- `flowchart:the-crucial-difference`
- `table:hybrid-systems` (appears 3x - one for each component in credit card fraud example)
- `template:example-credit-card-fraud-detection`
- `template:example-customer-service-chatbot`
- `table:rpa-ai-intelligent-automation`
- `table:rpa-governance-vs-ai-governance`
- `table:different-risk-profiles` (appears 2x - automation vs AI risks)
- `table:different-stakeholder-expectations`
- `flowchart:classification-questions`
- `table:common-misclassifications` (appears 2x)
- `table:inventory-classification`
- `table:how-to-cut-through-the-marketing`
- `checklist:practical-checklist`

**Total source: 2502 words → Extract: ~2300 words**

**Status:** ⏳ Have source, ready to create

---

### ✅ history-11: Data Behind AI
**Sources:**
- Primary: `article-11-the-data-behind-ai-why-training-data-determines-e.md` (2706 words)

**Extract sections:**
- How AI learns from data (~250 words)
- Types of training data (~500 words) - labeled, unlabeled, synthetic, human feedback
- Data quality dimensions (~600 words) - accuracy, completeness, representativeness, consistency
- Bias in training data (~500 words + table)
- Privacy and consent (~300 words + table)
- Data provenance (~250 words + table)
- Practical framework (~300 words) - 3 checklists

**Components to preserve:**
- `table:data-model-relationship`
- `table:bias-examples` (Amazon, COMPAS, Gender Shades, Medical AI)
- `checklist:data-acquisition`
- `curved_box:key-insight` ("You cannot govern AI without governing data")
- `image_prompt:hero`

**Total source: 2706 words → Extract: ~2700 words (keep most)**

**Status:** ✅ Created (needs component markup)

---

### ✅ history-12: Foundation Models
**Sources:**
- Primary: `article-12-foundation-models-the-new-building-blocks-of-ai.md` (2378 words - currently just a stub)

**Extract sections:**
- What are foundation models (~300 words)
- Types of foundation models (~400 words) - language, vision, multimodal
- Pre-training and fine-tuning (~400 words)
- Transfer learning (~250 words)
- Governance challenges (~600 words) - opacity, homogenization, dependency
- Foundation model selection (~300 words)
- Layered governance framework (~400 words)

**Components to preserve:**
- Need to read source file to identify

**Total source: 2378 words → Extract: ~2300 words**

**Status:** ✅ Stub created - needs full content extraction

---

### ⏳ history-13: Multimodal AI
**Sources:**
- Primary: `article-13-multimodal-ai-when-machines-see-hear-and-speak.md` (2150 words)

**Extract sections:**
- The definition (~200 words + table)
- How multimodal AI works (~500 words) - encoding modalities, vision encoders, fusion
- Current multimodal systems (~400 words) - 4 tables (vision-language, image gen, audio, video)
- Governance challenges (~600 words) - visual content risks, image generation, audio, video, cross-modal attacks
- Use cases by risk level (~300 words)

**Components to preserve:**
- `table:the-definition` (input vs output modalities)
- `table:vision-encoders` (ViT, CLIP, ResNet)
- `flowchart:vision-encoders`
- `table:vision-language-models` (GPT-4V, Claude 3, Gemini, LLaVA, Qwen)
- `table:image-generation-models` (DALL-E, Midjourney, Stable Diffusion, Imagen, Firefly)
- `table:audio-and-speech-models` (Whisper, Eleven Labs, Bark, MusicGen, AudioLM)
- `table:video-models` (Sora, Gemini, VideoPoet, Gen-2)
- `table:image-generation-governance` (risks and mitigations)
- `table:compliance-considerations` (jurisdiction-specific)
- `template:cross-modal-attacks-example`
- `checklist:practical-checklist`

**Total source: 2150 words → Extract: ~2100 words (keep most)**

**Status:** ⏳ Have source, ready to create

---

### ⏳ history-14: AI Compute & GPUs
**Sources:**
- Primary: `article-14-ai-compute-why-gpus-rule-the-ai-world.md` (2247 words)

**Extract sections:**
- Why AI needs GPUs (~300 words + table comparing CPU vs GPU)
- The GPU landscape (~500 words) - NVIDIA dominance table, competition
- Why NVIDIA wins (~300 words + flowchart)
- Supply chain (~300 words) - geopolitics, constraints
- Training vs Inference (~400 words + table + template)
- Cloud vs On-Premises (~300 words + table)
- Governance implications (~400 words) - compute as lever, concentration of power

**Components to preserve:**
- `table:the-computational-demands-of-ai` (GPT-3, DALL-E, AlphaGo)
- `table:enter-the-gpu` (CPU vs GPU characteristics)
- `table:nvidias-dominance` (A100, H100, H200, B200 specs)
- `flowchart:why-nvidia-wins-so-far` (network effects)
- `table:different-compute-requirements` (training vs inference)
- `list:different-compute-requirements`
- `template:inference-at-scale` (ChatGPT example)
- `table:cloud-gpu-options` (AWS, Azure, Google, Oracle, CoreWeave)
- `table:training-costs` (by model size)
- `table:inference-costs` (GPT-4, Claude pricing)
- `template:inference-costs` (example pricing)
- `table:total-cost-of-ownership` (cloud vs on-prem)
- `template:compute-as-governance-lever` (example)
- `checklist:practical-checklist`

**Total source: 2247 words → Extract: ~2200 words (keep most)**

**Status:** ⏳ Have source, ready to create

---

### ⏳ history-15: Environmental Cost of AI
**Sources:**
- Primary: `article-15-the-environmental-cost-of-ai-data-centers-energy-.md` (2141 words)

**Extract sections:**
- Energy consumption scale (~300 words + table of model training costs)
- From energy to carbon (~250 words + table of carbon intensity)
- Embodied carbon (~200 words)
- Water consumption (~200 words)
- What drives impact (~400 words) - model size, inefficiency, deployment scale
- Measurement challenges (~300 words + table of metrics)
- Mitigation strategies (~500 words + table)
- Regulatory landscape (~200 words + 2 lists)

**Components to preserve:**
- `table:quantifying-ai-energy-use` (GPT-3, DALL-E training energy)
- `table:from-energy-to-carbon` (grid carbon intensity by region)
- `table:metrics-to-track` (energy, carbon, PUE, water, utilization)
- `table:model-selection` (GPT-4 vs GPT-3.5 vs fine-tuned)
- `list:current-requirements` (EU CSRD, US SEC)
- `list:emerging-requirements` (EU AI Act)
- `table:governance-integration` (actions and why)
- `table:reporting` (what metrics, frequency, audience)
- `checklist:practical-checklist`

**Total source: 2141 words → Extract: ~2100 words (keep most)**

**Status:** ⏳ Have source, ready to create

---

## Summary Statistics

**Concept cards by status:**
- ✅ Created (needs markup): 7
- ⏳ Have source, ready: 6
- ❌ Need to read source: 2

**Content extraction strategy:**
- Average extraction: ~2200 words per concept (down from 2500 avg source)
- Component preservation: 100% of identified components
- Duplication: Minimal (each source maps to one primary concept)

**Components inventory (across all 15 concepts):**
- Tables: ~60 unique tables
- Flowcharts: ~10 flowcharts
- Checklists: ~8 checklists
- Templates: ~12 templates/examples
- Curved boxes: ~5 callouts
- Lists: ~4 lists
- Image prompts: ~15 hero images

**Next steps:**
1. Read 2 missing source articles (history-4, history-6)
2. Add component markup to 7 created files
3. Create remaining 6 concept cards with proper markup
4. Validate component IDs match frontmatter
