import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';

export default async function AITechnologyStackArticle() {
  // Fetch cards from database
  const cards = await getCardsByArticle('ai-technology-stack');

  return (
    <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle="The AI Technology Stack"
      tldr="The AI technology stack consists of five layers: Hardware, Infrastructure, Platforms, Models, and Applications. Understanding these dependencies is crucial for managing vendor risk and ensuring business continuity."
      tags={['AI Infrastructure', 'Cloud Compute', 'Foundation Models', 'Technical Foundations']}
      readTime="9 min read"
      updatedDate="January 2025"
      headerImage="/images/history/ai-technology-stack.webp"
      currentIndex={1}
      totalArticles={8}
      nextArticle={{
        slug: '/articles/ai-vs-automation',
        title: 'AI vs Automation'
      }}
      cards={cards}
    >
      <AITechnologyStackContent />
    </ArticlePageWrapper>
  );
}

function AITechnologyStackContent() {
  return (
    <>
      {/* Main Content */}
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
        <InlineContextCard cardId="insight-h100-gpu-cost" trigger="cost of a single high-end H100 GPU" />, which can range from $25,000 to $40,000.
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
        <InlineContextCard cardId="res-open-source-compliance-checklist" trigger="open-weight models" />{' '}
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
        <InlineContextCard cardId="res-ai-stack-assessment-framework" trigger="stack assessment framework" />{' '}
        to map out where your data flows and who your critical vendors are. By understanding these dependencies, you can move from just &quot;using AI&quot; to governing it with the clarity your organization needs.
      </div>

      <AITechnologyStackFooter />
    </>
  );
}

function AITechnologyStackFooter() {
  return (
    <>
      {/* Key Learnings */}
      <KeyLearnings
        learnings={[
          'The AI technology stack has five layers: Hardware (GPUs), Infrastructure (cloud), Platforms (APIs), Models (foundation models), and Applications.',
          'NVIDIA controls 80-90% of the GPU market, creating significant concentration risk for organizations dependent on AI infrastructure.',
          'Training costs are one-time expenses, but inference costs (running the model) can be 15x higher annually for high-traffic services.',
          'Vendor lock-in at the Platform layer can make it expensive and time-consuming to switch providers later.',
          'Understanding your AI stack dependencies is essential for vendor risk management and business continuity planning.'
        ]}
      />

      {/* Accordions */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ marginTop: '20px' }}>
          <Accordion title="Additional Resources">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>NVIDIA - AI Infrastructure and GPU Architecture Documentation</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>AWS, Azure, GCP - AI Platform Comparison Guides</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Stanford HAI - AI Index Report (Infrastructure Economics)</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Hugging Face - Open-Weight Model Licensing Guide</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Gartner - AI Vendor Risk Management Framework</li>
            </ul>
          </Accordion>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Accordion title="Sources & References">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>NVIDIA (2024). H100 Tensor Core GPU Architecture Whitepaper</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Stanford University (2024). AI Index Report - Infrastructure and Economics</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>OpenAI (2023). GPT-4 Technical Report - Training Infrastructure</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>McKinsey & Company (2024). The State of AI Infrastructure Investment</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Gartner (2024). Magic Quadrant for Cloud AI Developer Services</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
}
