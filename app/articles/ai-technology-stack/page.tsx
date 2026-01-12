'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';

export default function AITechnologyStackArticle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

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

  return (
    <>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="theme-toggle-btn"
        style={{
          position: 'fixed',
          top: '20px',
          right: '30px',
          zIndex: 10000,
          background: theme === 'light' ? '#1a1a1a' : '#ffffff',
          color: theme === 'light' ? '#ffffff' : '#1a1a1a',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease'
        }}
      >
        <i className={theme === 'light' ? 'ph-bold ph-moon-stars' : 'ph-bold ph-sun-horizon'} />
      </button>

      <ArticleLayout
        path="terminology"
        pathTitle="Terminology"
        articleTitle="The AI Technology Stack"
        tldr="The AI technology stack consists of five layers: Hardware, Infrastructure, Platforms, Models, and Applications. Understanding these dependencies is crucial for managing vendor risk and ensuring business continuity."
        tags={['AI Infrastructure', 'Cloud Compute', 'Foundation Models', 'Technical Foundations']}
        readTime="9 min read"
        updatedDate="January 2025"
        headerImage="/images/history/ai-technology-stack.webp"
        theme={theme}
        sidebarCards={[]}
      >
        <h2 className="content-h2">
          <span className="heading-decoration" />
          Peeking Under the Hood
        </h2>

        <div className="content-p">
          When you use an AI tool like a chatbot, it can feel a bit like magic. But here is the key insight: that simple interface sits on top of a massive &quot;Jenga tower&quot; of hardware and software dependencies. If any of those lower layers wobble—due to a chip shortage, a cloud outage, or a change in a vendor&apos;s policy—your entire AI strategy can feel the impact.
        </div>

        <div className="content-p">
          To lead an organization through the AI transformation, you do not need to be a hardware engineer, but you do need to understand how these layers fit together. Think of it this way: understanding the AI stack is like checking the foundation of a building before you decide to add three new floors. Let&apos;s walk through the five layers that make modern AI possible.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Layer 1: The Hardware Foundation
        </h2>

        <div className="content-p">
          At the very bottom are the physical chips that do the heavy lifting. Unlike your laptop&apos;s brain (the CPU), which is good at doing one complex thing at a time, AI needs chips that can do thousands of tiny, simple math problems simultaneously. This is why GPUs (Graphics Processing Units) are the gold standard for AI today.
        </div>

        <div className="content-p">
          Currently, NVIDIA dominates this layer, controlling nearly 80-90% of the market. This creates a &quot;concentration risk&quot;—nearly every AI system your company uses probably depends on this one supplier. To understand the scale of investment here, consider the{' '}
          <InlineContextCard trigger="cost of a single high-end H100 GPU" card={cardData.h100GpuCost} />, which can range from $25,000 to $40,000.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Layer 2 & 3: Infrastructure and Platforms
        </h2>

        <div className="content-p">
          The next two layers turn that raw hardware into something your team can actually use. Infrastructure is the cloud environment provided by giants like AWS, Azure, or Google Cloud. This is where your data is physically processed, which raises important governance questions about data residency and whether your information stays within specific borders.
        </div>

        <div className="content-p">
          The Platform layer provides the tools and APIs that let developers build AI apps without managing the hardware themselves. This is where you might face &quot;vendor lock-in.&quot; Here is what matters: if you build your entire workflow on one specific provider&apos;s platform, moving to a competitor later can be expensive and time-consuming.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Layer 4 & 5: Models and Applications
        </h2>

        <div className="content-p">
          Layer 4 is the &quot;intelligence&quot; of the system—the models. Most of the world now uses &quot;foundation models,&quot; which are massive systems trained on broad data that can be adapted for many tasks. While some organizations use{' '}
          <InlineContextCard trigger="open-weight models" card={cardData.openSourceCompliance} />{' '}
          that they host themselves, many rely on closed APIs from companies like OpenAI or Anthropic.
        </div>

        <div className="content-p">
          Finally, at the top is the Application layer. This is the chatbot, the resume screener, or the analytics dashboard your employees see. Many of these applications are actually &quot;thin wrappers&quot;—simple interfaces sitting on top of someone else&apos;s model and hardware. If the model provider below them changes their rules, your application could change overnight.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          Managing the Costs and Risks
        </h2>

        <div className="content-p">
          As you evaluate your AI portfolio, it is helpful to distinguish between training (the one-time cost to teach the model) and inference (the ongoing cost every time someone uses the model). While training GPT-4 cost over $100 million, the inference costs for running a popular service can be 15 times higher over a single year.
        </div>

        <div className="content-p">
          Because the AI stack is so interconnected, we recommend using a structured{' '}
          <InlineContextCard trigger="stack assessment framework" card={cardData.stackAssessment} />{' '}
          to map out where your data flows and who your critical vendors are. By understanding these dependencies, you can move from just &quot;using AI&quot; to governing it with the clarity your organization needs.
        </div>

        <style jsx>{`
          .content-h2 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 32px;
            font-weight: 700;
            color: ${theme === 'light' ? '#1a1a1a' : '#ffffff'};
            margin: 60px 0 24px 0;
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .heading-decoration {
            width: 40px;
            height: 3px;
            background: linear-gradient(90deg, #a68a64 0%, transparent 100%);
            border-radius: 2px;
          }

          .content-p {
            font-family: 'Crimson Pro', Georgia, serif;
            font-size: 20px;
            line-height: 1.8;
            color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
            margin-bottom: 24px;
          }

          @media (max-width: 768px) {
            .content-h2 {
              font-size: 28px;
              margin: 40px 0 20px 0;
            }

            .content-p {
              font-size: 18px;
            }
          }
        `}</style>
      </ArticleLayout>

      {/* Navigation Components */}
      <ArticleProgressNav
        currentIndex={1}
        totalArticles={8}
        pathTitle="Terminology"
        nextArticle={{
          slug: '/articles/ai-vs-automation',
          title: 'AI vs Automation'
        }}
        theme={theme}
      />

      <FloatingPathsNav
        currentPath="/terminology"
        theme={theme}
      />
    </>
  );
}
