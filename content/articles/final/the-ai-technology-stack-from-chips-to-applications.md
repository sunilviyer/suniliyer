---
title: The AI Technology Stack - From Chips to Applications
slug: the-ai-technology-stack-from-chips-to-applications
path: terminology
publishDate: 2025-07-21
tldr: AI systems operate across five interdependent layers - Hardware (GPUs, specialized chips with NVIDIA ~80% market share, Taiwan manufacturing concentration), Infrastructure (cloud compute, data centers, networking with Big Three providers AWS/Azure/Google controlling access), Platforms (development tools, APIs, MLOps with API/fine-tuning/self-hosting trade-offs), Models (foundation models like GPT-4/Claude/LLaMA as trained intelligence with open-weight vs closed-source choices), and Applications (user-facing products from ChatGPT to industry-specific solutions). Power concentrates at lower layers - handful of companies control hardware/infrastructure constraining entire ecosystem. Each layer presents distinct governance challenges - hardware has supply chain/geopolitical risks, infrastructure determines data residency/lock-in, platforms impose terms of service/data handling policies, models raise provenance/licensing/behavior questions, applications control user interaction/data flows. Effective governance requires understanding full stack to identify where controls apply, where risks concentrate, and where organizations have leverage. Data flows through all layers from training data through user inputs to outputs, requiring privacy/security analysis across stack. Cost structures distribute differently - training/infrastructure capital costs embed in higher-layer pricing for most enterprises. Regulatory mapping varies by layer - EU AI Act targets models/applications, GDPR applies across all layers, export controls affect hardware/infrastructure, copyright touches training data/outputs. Organizations must document stack (cloud providers, platform dependencies, model versions, application inventory), assess vendor concentration risks, understand data handling at each layer, and implement appropriate controls recognizing risks aggregate across layers where multiple applications share models/platforms/infrastructure. Build vs buy spectrum ranges from API calls (minimal effort, per-use cost, lowest control) through fine-tuning (moderate customization) to self-hosting (infrastructure investment, full control) to custom training (massive effort, highest control). Open-weight models (LLaMA, Mistral) provide customization/control but lag frontier capability, while closed models (GPT-4, Claude, Gemini) offer state-of-art with limited transparency. Stack awareness transforms abstract AI discussions into concrete conversations about hardware dependencies, infrastructure choices, platform trade-offs, model characteristics, and application controls enabling better governance through identifying control points, risk concentration, and organizational leverage.
relatedConcepts:
  - ai-technology-stack
  - five-layer-architecture
  - hardware-layer
  - infrastructure-layer
  - platform-layer
  - model-layer
  - application-layer
  - nvidia-gpus
  - cuda
  - tpus
  - specialized-chips
  - cloud-compute
  - aws
  - azure
  - google-cloud
  - data-centers
  - ml-platforms
  - sagemaker
  - vertex-ai
  - azure-ml
  - model-apis
  - mlops
  - foundation-models
  - gpt-4
  - claude
  - gemini
  - llama
  - mistral
  - open-weight-models
  - closed-models
  - fine-tuning
  - self-hosting
  - build-vs-buy
  - chatgpt
  - copilot
  - vertical-ai-applications
  - power-concentration
  - data-flows
  - cost-structure
  - regulatory-mapping
  - vendor-lock-in
  - stack-awareness
  - risk-aggregation
examples:
  - generative-ai-systems-comparison
  - ai-governance-use-cases
  - ai-safety-incidents-case-studies
templates:
  - ai-governance-framework-builder
  - ai-vendor-assessment-template
  - ai-risk-assessment-template
crossPathRefs:
  - path: terminology
    articles:
      - foundation-models-the-new-building-blocks-of-ai
      - large-language-models-the-technology-behind-the-hype
      - generative-ai-explained-how-chatgpt-dall-e-and-claude-work
  - path: responsibility
    articles:
      - ai-governance-frameworks-building-your-organizations-approach
      - ai-accountability-who-is-responsible-when-ai-causes-harm
  - path: future
    articles:
      - the-future-of-ai-regulation-whats-coming-next
tags:
  - technology-stack
  - hardware
  - infrastructure
  - platforms
  - models
  - applications
  - nvidia
  - cloud
  - mlops
  - open-weight
  - closed-models
  - governance
category: AI Terminology
image: the-ai-technology-stack-from-chips-to-applications.jpg
imageAlt: Five-layer AI technology stack diagram showing Hardware, Infrastructure, Platforms, Models, and Applications layers with key players, governance implications, and data flows
author: Sunil Iyer
readingTime: 18
seoTitle: AI Technology Stack - 5 Layers from GPUs to Applications | Governance Guide
seoDescription: AI stack governance - Hardware (NVIDIA GPUs, specialized chips, Taiwan manufacturing), Infrastructure (AWS/Azure/Google cloud), Platforms (APIs, MLOps), Models (GPT-4, Claude, LLaMA open vs closed), Applications (ChatGPT, Copilot), power concentration, data flows, regulatory mapping.
---

## Summary

AI systems operate across five interdependent layers that build upon each other, each controlled by different players with distinct governance implications. Layer 1 (Hardware) includes GPUs, TPUs, and specialized AI chips where NVIDIA dominates with ~80% market share and manufacturing concentrates in Taiwan creating geopolitical supply chain risks. Layer 2 (Infrastructure) encompasses cloud compute, data centers, and networking controlled by Big Three providers (AWS, Azure, Google Cloud) whose deployment choices determine data residency, costs, and vendor lock-in exposure. Layer 3 (Platforms) provides development environments—ML platforms (SageMaker, Vertex AI, Azure ML), model APIs (OpenAI, Anthropic, Google), MLOps tools (MLflow, Weights & Biases), and specialized services (Hugging Face)—with build-vs-buy spectrum ranging from API calls (minimal effort, per-use cost, lowest control) through fine-tuning (moderate customization) to self-hosting (infrastructure investment, full control) to custom training (massive effort, highest control). Layer 4 (Models) represents trained intelligence—foundation models (GPT-4, Claude, Gemini, LLaMA, Mistral) as accumulated knowledge in billions of parameters, with critical choice between open-weight models (downloadable, full customization, infrastructure costs, community support) versus closed models (API-only access, limited fine-tuning, per-token pricing, provider support). Layer 5 (Applications) delivers user-facing products—chat interfaces (ChatGPT, Claude.ai), copilots (Microsoft 365, GitHub), embedded AI (search, email), and vertical solutions (healthcare, legal, finance)—where user interaction and data flows concentrate. Power concentrates at lower layers with handful of companies controlling hardware and infrastructure constraining entire ecosystem—NVIDIA for GPUs, three clouds for infrastructure, few frontier model makers (though many open alternatives), highly fragmented application market. Each layer presents distinct governance challenges: hardware faces supply chain/geopolitical risks, infrastructure determines data residency and lock-in, platforms impose terms of service and data handling policies requiring careful review, models raise provenance/licensing/behavior/version management questions, applications control use case implementation and data flows. Data moves through stack in complex ways—training data becomes model parameters (Layer 4), user inputs flow Application → Platform → Model, outputs return Model → Platform → Application → User—requiring privacy/security analysis, IP protection, and audit trail capabilities across all layers. Cost structures distribute differently with capital/operations costs at lower layers (hardware, infrastructure, model training) embedded in higher-layer pricing that most enterprises see at Layers 3-5 (platform services, model API calls, application development). Regulatory mapping varies by layer: EU AI Act targets models and applications for risk classification and transparency, GDPR applies across all layers for data protection, export controls affect hardware and infrastructure for technology transfer, copyright law touches models and training data, sector regulations focus on application use cases. Effective governance requires documenting your stack (cloud providers used, data center locations, contract terms, platform dependencies, API terms, model versions/licenses, application inventory/data flows), assessing vendor concentration risks (multiple applications on same model multiplies model risk, all platforms on same cloud multiplies infrastructure risk), understanding data handling at each layer, and implementing appropriate controls. Risks aggregate across layers requiring diversification strategies. Stack awareness transforms abstract "AI adoption" discussions into concrete conversations about hardware dependencies, infrastructure choices, platform trade-offs, model characteristics, and application controls—enabling better governance by identifying where controls should apply, where risks concentrate, and where organizations have leverage in vendor relationships and architectural decisions.

## Key Learning Objectives

After reading this article, you will be able to:

1. **Understand five-layer architecture** - Hardware, Infrastructure, Platforms, Models, Applications building interdependently with distinct players/governance
2. **Identify hardware layer dynamics** - NVIDIA dominance, specialized chips (TPUs, custom), Taiwan manufacturing concentration, geopolitical risks
3. **Navigate infrastructure choices** - Cloud providers (AWS/Azure/Google), data residency implications, cost structures, vendor lock-in exposure
4. **Evaluate platform options** - ML platforms, model APIs, MLOps tools, build-vs-buy spectrum from API calls to custom training
5. **Understand model characteristics** - Foundation vs fine-tuned vs task-specific, open-weight vs closed models, licensing/provenance/version management
6. **Analyze application layer** - User-facing products, data flows, use case controls, incident response requirements
7. **Map power concentration** - Lower layers (hardware/infrastructure) controlled by few players constraining ecosystem, fragmentation at application layer
8. **Trace data flows** - Training data → model parameters, user inputs → application → platform → model, outputs returning through stack
9. **Assess cost structures** - Capital costs at lower layers, per-use pricing at higher layers, embedded infrastructure costs in API pricing
10. **Apply regulatory mapping** - EU AI Act (models/applications), GDPR (all layers), export controls (hardware/infrastructure), sector laws (applications)

---

## Understanding the Five-Layer AI Stack

The AI technology stack consists of five distinct but interdependent layers, each building on the layers below. Understanding this architecture is essential for AI governance because different risks, controls, and responsibilities apply at each layer.

### The Five Layers

**Layer 1: Hardware** - Physical chips (GPUs, TPUs, custom AI accelerators) that perform the mathematical operations underlying AI

**Layer 2: Infrastructure** - Data centers, cloud compute platforms, networking, and storage that connect hardware into usable systems

**Layer 3: Platforms** - Development tools, APIs, and services that make it easier to build, deploy, and manage AI applications

**Layer 4: Models** - Trained neural networks containing the "intelligence"—the accumulated knowledge learned from training data

**Layer 5: Applications** - User-facing products and services that deliver AI capabilities to end users

Each layer depends on the ones below it. You can't run models without infrastructure, can't have infrastructure without hardware, and applications need models to provide AI functionality.

### Why This Matters for Governance

Different organizations control different layers. Most enterprises operate primarily at Layers 3-5 (platforms, models, applications) while depending on specialized providers for Layers 1-2 (hardware, infrastructure).

Understanding where your organization operates in the stack helps you:
- Identify dependencies and concentration risks
- Know where you can apply controls
- Understand regulatory obligations at each layer
- Make informed build-vs-buy decisions
- Communicate clearly about AI capabilities and limitations

---

## Layer 1: Hardware - The Foundation

### What Happens Here

AI hardware performs the massive parallel computations required for training and running neural networks. Modern AI relies on specialized chips optimized for matrix multiplication operations that are fundamental to neural network math.

**Key hardware types:**

**Graphics Processing Units (GPUs)** - Originally designed for rendering graphics, GPUs excel at parallel processing making them ideal for AI workloads. NVIDIA dominates with ~80% market share.

**Tensor Processing Units (TPUs)** - Google's custom chips designed specifically for neural network operations, available primarily through Google Cloud.

**Custom AI Chips** - Specialized processors designed for AI workloads by companies like Amazon (Trainium, Inferentia), Microsoft (Maia), and startups (Cerebras, Graphcore).

**CPUs** - Traditional processors still used for some AI tasks, particularly inference on smaller models.

### Key Players and Market Concentration

**NVIDIA** - Overwhelming market leader in AI GPUs with H100, A100 chips dominating training infrastructure. CUDA software ecosystem creates significant lock-in.

**AMD** - Distant second with MI300 series chips, gaining ground in some workloads.

**Intel** - Attempting to compete with Gaudi chips and Habana Labs acquisition.

**Google** - TPUs for internal use and Google Cloud customers.

**Cloud Provider Custom Chips** - AWS (Trainium/Inferentia), Microsoft (Maia), designed to reduce dependence on NVIDIA.

**Manufacturing Concentration** - TSMC in Taiwan manufactures most advanced AI chips, creating supply chain and geopolitical concentration risk.

### Governance Implications

**Supply Chain Vulnerability** - Extreme concentration in Taiwan chip manufacturing creates geopolitical risk. Any disruption (natural disaster, conflict, trade restrictions) could affect global AI development.

**Export Controls** - Advanced AI chips face export restrictions to certain countries (particularly China). These controls affect who can develop frontier AI systems.

**Vendor Lock-in** - NVIDIA's CUDA software platform creates switching costs. Code optimized for NVIDIA GPUs doesn't easily port to competitors.

**Environmental Impact** - AI chip manufacturing and operation consume enormous energy and water. Data centers housing AI hardware have significant environmental footprint.

**Cost and Access** - Leading-edge chips are expensive and often in short supply. This creates barriers to entry and concentrates capability among well-funded organizations.

**Questions to ask:**
- Where is the hardware that powers our AI systems located?
- What happens if chip supply is disrupted?
- What are the environmental costs of our hardware dependencies?
- Do export controls affect our access to advanced hardware?

---

## Layer 2: Infrastructure - The Backbone

### What Happens Here

Infrastructure connects hardware into usable systems—data centers, networking, storage, and cloud platforms that make compute accessible. Most AI development happens on cloud infrastructure rather than on-premises hardware.

**Infrastructure components:**

**Cloud Compute** - Rented access to GPUs and other hardware through cloud providers (AWS, Azure, Google Cloud)

**Data Centers** - Physical facilities housing servers, networking equipment, cooling systems

**Networking** - High-bandwidth connections between GPUs for distributed training

**Storage** - Massive storage systems for training datasets and model checkpoints

### Key Players

**The Big Three Cloud Providers:**
- Amazon Web Services (AWS) - Market leader, extensive AI services
- Microsoft Azure - Tight integration with OpenAI, enterprise focus
- Google Cloud Platform (GCP) - TPU access, Vertex AI platform

**Specialized Infrastructure:**
- CoreWeave - GPU-focused cloud provider
- Lambda Labs - AI training infrastructure
- Vast.ai - Distributed GPU marketplace

**On-Premises Options:**
- NVIDIA DGX systems - Integrated AI infrastructure
- Dell, HPE, Lenovo - Enterprise AI infrastructure

### Deployment Models

| Model | Description | Control | Cost Structure |
|-------|-------------|---------|---------------|
| Public cloud | Rent compute from providers | Low | Pay-per-use, operating expense |
| Private cloud | Organization-owned infrastructure | High | Capital investment, operating costs |
| Hybrid | Combination of public and private | Medium | Mixed capital and operating |
| Colocation | Rent data center space, own hardware | Medium-High | Capital for hardware, rent for space |

### Governance Implications

**Data Residency** - Where AI infrastructure is located determines data jurisdiction. GDPR and other regulations may require data to stay within specific geographic regions.

**Vendor Lock-in** - Each cloud provider has proprietary services, APIs, and tools. Switching providers requires significant engineering effort.

**Business Continuity** - Dependence on cloud providers creates risks if service is disrupted, terms change, or providers exit AI services.

**Compliance Documentation** - Cloud providers may or may not provide sufficient documentation for regulatory compliance. SOC 2, ISO certifications matter.

**Cost Management** - Cloud AI costs can spiral quickly. Training large models can cost millions; even inference costs add up at scale.

**Multi-Cloud Strategy** - Using multiple cloud providers reduces concentration risk but increases complexity and management overhead.

**Questions to ask:**
- Where does our AI infrastructure physically reside?
- What are our contractual terms with cloud providers?
- What happens if our primary cloud provider experiences outages or changes terms?
- Can we demonstrate compliance with data residency requirements?

---

## Layer 3: Platforms - The Development Environment

### What Happens Here

AI platforms provide tools, APIs, and services that make it easier to develop, deploy, and manage AI applications. They sit between raw infrastructure and finished models, abstracting complexity and providing standardized interfaces.

**Platform components:**

**ML Platforms** - Tools for training, versioning, and deploying machine learning models. Examples: AWS SageMaker, Google Vertex AI, Azure Machine Learning.

**Model Serving** - Infrastructure for running trained models and exposing them via APIs. Handles scaling, load balancing, and inference optimization.

**MLOps Tools** - DevOps-style tools adapted for machine learning—experiment tracking, model versioning, pipeline automation, monitoring.

**Model APIs** - Hosted models accessible via API calls. Instead of training your own model, you send requests to a provider's model and receive results.

### Key Players

**Integrated Cloud Platforms:**
- AWS SageMaker
- Google Vertex AI  
- Azure Machine Learning

**Model API Providers:**
- OpenAI API (GPT-4, DALL-E)
- Anthropic API (Claude)
- Google AI (Gemini)
- Cohere
- AI21 Labs

**MLOps Platforms:**
- MLflow (open source)
- Weights & Biases
- Neptune
- DataRobot

**Specialized Platforms:**
- Hugging Face (model hub and tools)
- Replicate (model hosting)
- Modal (serverless ML)

### Build vs. Buy Spectrum

Organizations face choices about how much to build versus buy:

| Approach | Description | Control | Effort | Cost |
|----------|-------------|---------|--------|------|
| Use API | Call provider's model | Lowest | Minimal | Per-use |
| Fine-tune | Customize provider's model | Low-Medium | Moderate | Medium |
| Deploy hosted | Run open model on cloud platform | Medium | Moderate | Infrastructure |
| Deploy on-premises | Run model on own infrastructure | Highest | High | Capital + operations |
| Train custom | Build model from scratch | Highest | Massive | Very high |

Most organizations use a mix, with API calls for general capabilities and custom approaches for competitive differentiation.

### Governance Implications

**API Terms and Acceptable Use** - Model API providers have terms of service and acceptable use policies. Violations can result in service termination—potentially disrupting critical applications.

**Data Handling** - When you call a model API, your data is transmitted to the provider. Review data retention, training use, and privacy policies carefully.

**Rate Limits and Availability** - API-based services can rate-limit or deprecate access. Building critical dependencies on third-party APIs creates business continuity risks.

**Model Updates** - Providers update models regularly. An update might improve performance—or break your application's assumptions about model behavior.

**Compliance Documentation** - Demonstrating compliance often requires documentation about AI systems. API providers may or may not provide sufficient transparency.

**Questions to ask:**
- What are the acceptable use policies for platforms we depend on?
- How is our data handled when using model APIs?
- What happens if an API provider changes terms or discontinues service?
- Can we get sufficient documentation for compliance requirements?

---

## Layer 4: Models - The Intelligence

### What Happens Here

Models are the trained neural networks that provide AI capabilities. This layer represents the accumulated "knowledge" learned from training data, encoded in billions of numerical parameters (weights).

**Model types:**

**Foundation Models** - Large models trained on broad data, intended for general-purpose use or as starting points for specialization. Examples: GPT-4, Claude, LLaMA, PaLM.

**Fine-tuned Models** - Foundation models adapted for specific tasks or domains through additional training on specialized data.

**Task-specific Models** - Models trained from scratch for particular applications—often smaller and more efficient for their specific use case.

**Multimodal Models** - Models that process multiple types of data—text, images, audio, video. Examples: GPT-4V, Gemini.

### Key Players

**Closed-source/API-only:**
- OpenAI (GPT-4, GPT-4o)
- Anthropic (Claude 3, Claude 3.5)
- Google (Gemini)

**Open weights:**
- Meta (LLaMA 3)
- Mistral AI (Mistral, Mixtral)
- Technology Innovation Institute (Falcon)
- Alibaba (Qwen)

**Image Generation:**
- OpenAI (DALL-E)
- Midjourney
- Stability AI (Stable Diffusion)

**Specialized:**
- Numerous domain-specific models for code, science, medicine, etc.

### Open vs. Closed Models

| Characteristic | Closed Models | Open-Weight Models |
|----------------|---------------|-------------------|
| Access | API only | Downloadable weights |
| Customization | Limited fine-tuning | Full fine-tuning, modification |
| Deployment | Provider's infrastructure | Any infrastructure |
| Cost model | Per-token usage | Infrastructure costs |
| Transparency | Limited | Full model inspection |
| Control | Provider controls | Deployer controls |
| Updates | Automatic | Manual |
| Support | Provider support | Community + commercial |

The choice between open and closed models involves tradeoffs between control, cost, capability, and responsibility.

### Governance Implications

**Model Provenance** - What data was a model trained on? This affects bias, capability, and legal exposure. Closed models often provide limited transparency.

**Model Behavior** - Models have different behaviors, safety properties, and failure modes. Switching models isn't just a technical change—it can change application behavior in ways that affect compliance.

**Licensing and IP** - Open-weight models come with licenses that vary from highly permissive to restrictive. Commercial use, modification, and redistribution rights differ.

**Version Management** - Models evolve. Providers release new versions that may behave differently. Organizations need to track which model versions are deployed where.

**Capability Monitoring** - Models can exhibit unexpected capabilities. What a model could do when deployed may differ from what it did during evaluation.

**Questions to ask:**
- What models are we using, and what data were they trained on?
- What are the licensing terms for each model?
- How do we track model versions across our applications?
- What testing have we done for our specific use cases?

---

## Layer 5: Applications - The User Interface

### What Happens Here

Applications are the user-facing products and services built on top of AI models. This is what most people think of when they think of "AI"—ChatGPT, Copilot, smart assistants, recommendation systems, content moderation tools.

**Application types:**

**Chat Interfaces** - Direct conversation with AI models—ChatGPT, Claude, Gemini chat.

**Copilots and Assistants** - AI embedded in productivity tools—Microsoft Copilot, GitHub Copilot, Google Duet AI.

**Embedded AI** - AI capabilities integrated into existing applications—search engines, email clients, content management systems.

**Vertical Solutions** - Industry-specific AI applications—healthcare diagnostics, legal research, financial analysis.

**Custom Enterprise Applications** - Organizations' own AI-powered applications built for internal or customer-facing use.

### Key Players

**Horizontal Applications:**
- ChatGPT (OpenAI)
- Claude.ai (Anthropic)
- Copilot (Microsoft)
- Gemini (Google)

**Productivity Suite Integration:**
- Microsoft 365 Copilot
- Google Workspace AI
- Notion AI
- Canva AI

**Vertical Applications:**
- Healthcare: Nuance DAX, Viz.ai
- Legal: Harvey, CoCounsel
- Finance: Bloomberg Terminal AI, Kensho
- Code: GitHub Copilot, Cursor, Replit

### Governance Implications

**User Behavior** - Applications shape how users interact with AI. Interface design affects what users try to do and how they interpret results.

**Use Case Proliferation** - New applications emerge constantly. Shadow AI—unauthorized AI use—is a growing concern in enterprises.

**Acceptable Use Enforcement** - Application-level controls can restrict what users can do with underlying models. This is often the most practical place to implement governance.

**Data Flows** - Applications determine what user data reaches AI models. Understanding application data flows is essential for privacy compliance.

**Output Verification** - Applications can incorporate verification steps, confidence displays, or human review requirements before AI outputs reach end users.

**Incident Response** - When AI causes problems, it usually manifests at the application layer. Incident response requires understanding the full stack.

**Questions to ask:**
- What AI applications are in use across the organization?
- How do applications handle user data?
- What controls exist at the application level?
- How would we detect and respond to AI-related incidents?

---

## Cross-Stack Considerations

### Concentration of Power

Examine who controls each layer:

| Layer | Concentration | Key Players |
|-------|---------------|-------------|
| Hardware | Very high | NVIDIA dominates |
| Infrastructure | High | Big Three clouds |
| Platforms | Medium | Distributed across cloud providers and specialists |
| Models | Medium | Few frontier model makers, many open alternatives |
| Applications | Low | Highly fragmented market |

Power concentrates at lower layers. A small number of companies control the hardware and infrastructure that all AI depends on.

**Governance implications:**
- Decisions by a few companies affect entire ecosystem
- Regulatory pressure on lower layers has broad effects
- Supply chain disruptions cascade upward
- Competition concerns at infrastructure level

### Data Flows Through the Stack

Data moves through the stack in complex ways:

**Training data** → Model parameters (Layer 4)  
**User inputs** → Application (Layer 5) → Platform (Layer 3) → Model (Layer 4)  
**Model outputs** → Platform (Layer 3) → Application (Layer 5) → User

Understanding these flows is essential for:
- Privacy compliance (where does personal data go?)
- Security assessment (where are attack surfaces?)
- IP protection (where could proprietary data leak?)
- Audit trails (can we track what happened?)

### Cost Structure

Costs distribute differently across layers:

| Layer | Cost Type | Magnitude | Who Pays |
|-------|-----------|-----------|----------|
| Hardware | Capital | Very high | Infrastructure providers |
| Infrastructure | Operations | High | Platform providers or enterprises |
| Platforms | Development + operations | Medium | Model developers or enterprises |
| Models | Training + operations | High (training), lower (inference) | Model providers |
| Applications | Development + operations | Varies | End customers |

For most enterprises, costs appear at Layers 3-5 (platforms, model API calls, application development), while Layers 1-2 costs are embedded in provider pricing.

### Regulatory Mapping

Different regulations apply at different layers:

| Regulation | Primary Layer(s) | Focus |
|------------|------------------|-------|
| EU AI Act | Models, Applications | Risk classification, transparency |
| GDPR | All layers | Data protection |
| Export controls | Hardware, Infrastructure | Technology transfer |
| Copyright law | Models, Training data | Training data, outputs |
| Sector regulations | Applications | Use case specific |

Compliance requires understanding which regulations apply where in your stack.

---

## Building Stack Awareness - Practical Framework

### Assessment Framework

For governance purposes, document your AI stack:

**Layer 1-2 (Hardware/Infrastructure):**
- Cloud providers used
- Data center locations
- Contract terms and SLAs
- Concentration risks
- Energy and environmental footprint

**Layer 3 (Platforms):**
- Platform services in use
- API dependencies
- Terms of service
- Data handling practices
- Vendor lock-in exposure

**Layer 4 (Models):**
- Models deployed
- Model versions
- Training data transparency
- Licensing terms
- Performance characteristics

**Layer 5 (Applications):**
- AI applications inventory
- User population
- Data flows
- Use case restrictions
- Monitoring capabilities

### Vendor Assessment

When evaluating AI vendors, understand where they operate in the stack:

| Vendor Type | Key Questions |
|-------------|---------------|
| Hardware | Supply chain reliability, technology roadmap |
| Cloud/Infrastructure | Data residency, security certifications, SLAs |
| Platform | Terms of service, data handling, support |
| Model provider | Training data, safety testing, documentation |
| Application | Use case fit, integration, data flows |

### Risk Aggregation

Risks can aggregate across layers. Consider:
- Multiple applications using the same model (model risk multiplies)
- Multiple models on the same platform (platform risk multiplies)
- All platforms on the same cloud (infrastructure risk multiplies)
- All clouds using the same chips (hardware risk multiplies)

Diversification across layers reduces aggregate risk.

---

## Conclusion

The AI technology stack is deep—what looks like a simple AI application sits atop layers of complexity involving specialized hardware, cloud infrastructure, platform services, trained models, and application code. Power concentrates at the bottom: a handful of companies control the hardware and infrastructure that all AI depends on.

Understanding the full stack transforms abstract conversations about "AI adoption" into concrete discussions about hardware dependencies, infrastructure choices, platform trade-offs, model characteristics, and application controls. This understanding enables better governance because you can identify where controls should be applied, where risks concentrate, and where your organization has leverage.

Each layer presents different risks—hardware has supply chain vulnerabilities, infrastructure determines data residency, platforms impose terms of service, models raise bias and provenance questions, applications control user interaction. Effective governance requires mapping your organization's position in this stack, understanding dependencies, and applying appropriate controls at each layer.

The CEO talking about "AI adoption" doesn't need to know that NVIDIA GPUs run CUDA code on AWS infrastructure accessed via Azure OpenAI Service to serve a fine-tuned GPT-4 model through a custom application. But you do. That understanding is what enables governance that actually works.

---

## Sources

1. NVIDIA (2024). "AI Data Center Reference Architecture." https://www.nvidia.com/

2. Stanford HAI (2024). "AI Index Report - Compute and Infrastructure Trends." https://aiindex.stanford.edu/

3. Epoch AI. "Trends in Machine Learning Hardware." https://epochai.org/

4. Andreessen Horowitz. "The New AI Stack." Market analysis and emerging players.

5. OECD (2023). "AI Compute and Climate: The Environmental Cost of Training." https://oecd.ai/

6. SemiAnalysis (2024). "AI Chip Market Analysis." Industry reports on GPU market concentration.

7. Gartner (2024). "Magic Quadrant for Cloud AI Developer Services."

8. MLflow Documentation. "Open Source MLOps Platform." https://mlflow.org/

9. Hugging Face (2024). "State of Open Source AI." Model hub and platform statistics.

10. Cloud Security Alliance (2024). "AI Security Guidance for Cloud Platforms."

---

*Next: Artificial General Intelligence – Hype, Hope, and Governance*
