import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';

export default async function FoundationModelsArticle() {
  // Fetch cards from database
  const cards = await getCardsByArticle('foundation-models');

  return (
    <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle="Foundation Models"
      tldr="Foundation models are large-scale systems trained on broad data that can be adapted to many different tasks. Understanding their risks and benefits is crucial for modern AI strategy."
      tags={['Foundation Models', 'GPAI', 'AI Infrastructure']}
      readTime="8 min read"
      updatedDate="January 2025"
      headerImage="/images/history/foundation-models.webp"
      currentIndex={4}
      totalArticles={8}
      prevArticle={{
        slug: '/terminology/data-behind-ai',
        title: 'The Data Behind AI'
      }}
      nextArticle={{
        slug: '/terminology/multimodal-ai',
        title: 'Multimodal AI'
      }}
      cards={cards}
    >
      <FoundationModelsContent />
    </ArticlePageWrapper>
  );
}

function FoundationModelsContent() {
  return (
    <>
      {/* Main Content */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Skyscraper and the Foundation
      </h2>

      <div className="content-p">
        Think of it this way: In the past, if you wanted to build a house, you built a unique foundation specifically for that one structure. If you then wanted a warehouse, you started from scratch with a different foundation. In the world of AI, we used to do the same—we built one specialized model for translation, another for sentiment analysis, and a third for summarizing reports.
      </div>

      <div className="content-p">
        Here is the key insight: We have moved to a world where we build one massive, incredibly strong foundation that can support a skyscraper, a cottage, or a warehouse all at once. In AI, we call these <strong>foundation models</strong>. They are large models trained on a broad ocean of data that can be adapted to a wide range of downstream tasks.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Scale and Emergence
      </h2>

      <div className="content-p">
        You might wonder what makes these models so much more powerful than the tools of five years ago. It comes down to scale—billions or even trillions of parameters trained on a substantial portion of the written internet. This broad training allows the model to learn language patterns, facts, and reasoning skills that it was never explicitly told to learn.
      </div>

      <div className="content-p">
        We call these emergent capabilities. For example, a model trained primarily to predict the next word in a sentence might suddenly &quot;emerge&quot; with the ability to write computer code or solve logic puzzles. Because these models, such as a{' '}
        <InlineContextCard cardId="article-link-large-language-models" trigger="Large Language Model (LLM)" />, serve as the base for many different products, they have become the essential infrastructure of the modern AI ecosystem.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Governance Jenga Tower
      </h2>

      <div className="content-p">
        While foundation models make development faster and cheaper, they introduce a significant challenge for leadership: homogenization risk. If a single foundation model has a hidden bias or a security flaw, every application your company builds on top of it inherits that same flaw. If the foundation is unstable, the whole building is at risk.
      </div>

      <div className="content-p">
        This is why the{' '}
        <InlineContextCard cardId="fw-eu-ai-act" trigger="EU AI Act" />{' '}
        created a special category for these systems called General-Purpose AI (GPAI). Regulators recognize that because these models are &quot;general,&quot; their risks are also general. Providers must now document their training data and comply with copyright laws to ensure the foundation they provide to the rest of us is reliable.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        How We Specialize
      </h2>

      <div className="content-p">
        Most organizations don&apos;t need to build their own foundation model from scratch—which can cost over $100 million in compute power alone. Instead, we adapt existing models to our needs. You might use fine-tuning to teach a model your company&apos;s specific legal terminology, or use{' '}
        <InlineContextCard cardId="concept-rag" trigger="Retrieval-Augmented Generation (RAG)" />{' '}
        to ensure the model only answers questions using your private internal documents.
      </div>

      <div className="content-p">
        By using these general building blocks, we can achieve high performance on specialized tasks without the &quot;skyscrapers&quot; cost. As a leader, your role is to ensure that the foundation model you select is well-documented, tested for your specific use cases, and monitored for the unexpected capabilities that may emerge as the technology continues to advance.
      </div>

      <FoundationModelsFooter />
    </>
  );
}

function FoundationModelsFooter() {
  return (
    <>
      {/* Key Learnings */}
      <KeyLearnings
        learnings={[
          'Foundation models are large-scale AI systems trained on broad data that can be adapted to many different downstream tasks.',
          'Emergent capabilities arise when models trained for one task (like text prediction) unexpectedly develop skills in other areas (like coding).',
          'Homogenization risk occurs when a single foundation model\'s flaws propagate to all applications built on top of it.',
          'The EU AI Act regulates foundation models as General-Purpose AI (GPAI), requiring transparency about training data and copyright compliance.',
          'Most organizations adapt existing foundation models through fine-tuning or RAG rather than building from scratch (which costs $100M+).'
        ]}
      />

      {/* Accordions */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ marginTop: '20px' }}>
          <Accordion title="Additional Resources">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Stanford HAI - On the Opportunities and Risks of Foundation Models</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>OpenAI - GPT-4 Technical Report</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Anthropic - Constitutional AI and Foundation Model Safety</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>EU AI Act - General-Purpose AI Regulations (Articles 51-56)</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Meta AI - LLaMA Models and Open-Weight Foundation Models</li>
            </ul>
          </Accordion>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Accordion title="Sources & References">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Bommasani, R., et al. (2021). On the Opportunities and Risks of Foundation Models - Stanford HAI</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>OpenAI (2023). GPT-4 Technical Report - arXiv:2303.08774</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>European Parliament (2024). Regulation (EU) 2024/1689 - AI Act</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Lewis, P., et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Wei, J., et al. (2022). Emergent Abilities of Large Language Models - arXiv:2206.07682</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
}
