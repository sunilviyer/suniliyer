'use client';

import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';

export default function AITechnologyStackArticle() {
  const cardData = {
    h100GpuCost: {
      id: 'insight-h100-gpu-cost',
      title: 'H100 GPU Cost',
      type: 'insight' as const,
      summary: 'A single NVIDIA H100 GPU, the gold standard for AI training, costs between $25,000 and $40,000. A typical AI cluster requires hundreds or thousands of these chips, making hardware one of the largest barriers to entry for foundation model development.',
      tags: ['Hardware', 'Cost', 'Infrastructure']
    },
    openSourceCompliance: {
      id: 'res-open-source-compliance-checklist',
      title: 'Open-Weight Models Compliance',
      type: 'resource' as const,
      summary: 'Open-weight models (often called "open source AI") provide model weights that organizations can download and host themselves. However, these require careful license compliance checking, as some restrict commercial use or require attribution.',
      tags: ['Open Source', 'Licensing', 'Compliance']
    },
    stackAssessment: {
      id: 'res-ai-stack-assessment-framework',
      title: 'AI Stack Assessment Framework',
      type: 'resource' as const,
      summary: 'A structured approach to mapping your AI dependencies across all five layers: documenting hardware providers, cloud infrastructure, platform APIs, model vendors, and application integrations. Essential for vendor risk management and business continuity planning.',
      tags: ['Assessment', 'Vendor Management', 'Risk']
    }
  };

  const metadata = {
    title: 'The AI Technology Stack',
    slug: 'ai-technology-stack',
    path: 'terminology',
    headerImage: '/images/terminology/ai-technology-stack.png',
    navigation: {
      prev: null,
      next: {
        slug: '/terminology/ai-vs-automation',
        title: 'AI vs Automation'
      }
    },
    keyLearnings: [
      'The AI technology stack consists of five layers: Hardware, Infrastructure, Platforms, Models, and Applications.',
      'NVIDIA dominates the hardware layer with roughly 80-90% market share, creating significant supply chain concentration risk.',
      'Foundation models serve as the "intelligence" layer, where a few major providers influence the entire downstream ecosystem.',
      'Governance must be applied at every layer, addressing specific risks like data residency, vendor lock-in, and compute costs.',
      'Understanding the difference between training (one-time cost) and inference (ongoing cost) is essential for AI budgeting.'
    ],
    readTime: '9 min read',
    updatedDate: 'January 2025',
    tags: ['AI Infrastructure', 'Cloud Compute', 'Foundation Models', 'Technical Foundations'],
    seo: {
      description: 'Explore the five layers of the AI technology stack, from specialized hardware and cloud infrastructure to the models and applications used by your team.',
      keywords: ['AI technology stack', 'GPU vs TPU', 'AI infrastructure', 'foundation model layer', 'AI governance framework']
    }
  };

  return (
    <ArticleLayout metadata={metadata}>
      <h2>Peeking Under the Hood</h2>
      <p>
        When you use an AI tool like a chatbot, it can feel a bit like magic. But here is the key insight: that simple interface sits on top of a massive "Jenga tower" of hardware and software dependencies. If any of those lower layers wobble—due to a chip shortage, a cloud outage, or a change in a vendor's policy—your entire AI strategy can feel the impact.
      </p>
      <p>
        To lead an organization through the AI transformation, you do not need to be a hardware engineer, but you do need to understand how these layers fit together. Think of it this way: understanding the AI stack is like checking the foundation of a building before you decide to add three new floors. Let's walk through the five layers that make modern AI possible.
      </p>

      <h2>Layer 1: The Hardware Foundation</h2>
      <p>
        At the very bottom are the physical chips that do the heavy lifting. Unlike your laptop's brain (the CPU), which is good at doing one complex thing at a time, AI needs chips that can do thousands of tiny, simple math problems simultaneously. This is why GPUs (Graphics Processing Units) are the gold standard for AI today.
      </p>
      <p>
        Currently, NVIDIA dominates this layer, controlling nearly 80-90% of the market. This creates a "concentration risk"—nearly every AI system your company uses probably depends on this one supplier. To understand the scale of investment here, consider the{' '}
        <InlineContextCard trigger="cost of a single high-end H100 GPU" card={cardData.h100GpuCost} />, which can range from $25,000 to $40,000.
      </p>

      <h2>Layer 2 & 3: Infrastructure and Platforms</h2>
      <p>
        The next two layers turn that raw hardware into something your team can actually use. Infrastructure is the cloud environment provided by giants like AWS, Azure, or Google Cloud. This is where your data is physically processed, which raises important governance questions about data residency and whether your information stays within specific borders.
      </p>
      <p>
        The Platform layer provides the tools and APIs that let developers build AI apps without managing the hardware themselves. This is where you might face "vendor lock-in." Here is what matters: if you build your entire workflow on one specific provider's platform, moving to a competitor later can be expensive and time-consuming.
      </p>

      <h2>Layer 4 & 5: Models and Applications</h2>
      <p>
        Layer 4 is the "intelligence" of the system—the models. Most of the world now uses "foundation models," which are massive systems trained on broad data that can be adapted for many tasks. While some organizations use{' '}
        <InlineContextCard trigger="open-weight models" card={cardData.openSourceCompliance} />{' '}
        that they host themselves, many rely on closed APIs from companies like OpenAI or Anthropic.
      </p>
      <p>
        Finally, at the top is the Application layer. This is the chatbot, the resume screener, or the analytics dashboard your employees see. Many of these applications are actually "thin wrappers"—simple interfaces sitting on top of someone else's model and hardware. If the model provider below them changes their rules, your application could change overnight.
      </p>

      <h2>Managing the Costs and Risks</h2>
      <p>
        As you evaluate your AI portfolio, it is helpful to distinguish between training (the one-time cost to teach the model) and inference (the ongoing cost every time someone uses the model). While training GPT-4 cost over $100 million, the inference costs for running a popular service can be 15 times higher over a single year.
      </p>
      <p>
        Because the AI stack is so interconnected, we recommend using a structured{' '}
        <InlineContextCard trigger="stack assessment framework" card={cardData.stackAssessment} />{' '}
        to map out where your data flows and who your critical vendors are. By understanding these dependencies, you can move from just "using AI" to governing it with the clarity your organization needs.
      </p>
    </ArticleLayout>
  );
}
