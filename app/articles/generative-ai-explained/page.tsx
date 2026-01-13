import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';

export default async function GenerativeAIExplainedArticle() {
  // Fetch cards from database (this article has no cards)
  const cards = await getCardsByArticle('generative-ai-explained');

  return (
    <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="Generative AI Explained"
      tldr="Generative AI creates new content—text, images, code, and more—by learning patterns from training data. Understanding how these systems work is essential for governing their use responsibly."
      tags={['Generative AI', 'Content Creation', 'AI Applications']}
      readTime="7 min read"
      updatedDate="January 2025"
      headerImage="/images/headercards/history-header.png"
      currentIndex={6}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/deep-learning-decoded',
        title: 'Deep Learning Decoded'
      }}
      nextArticle={{
        slug: '/articles/large-language-models',
        title: 'Large Language Models'
      }}
      cards={cards}
    >
      <GenerativeAIExplainedContent />
    </ArticlePageWrapper>
  );
}

function GenerativeAIExplainedContent() {
  return (
    <>
      {/* Main Content */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        From Classification to Creation
      </h2>

      <div className="content-p">
        Generative AI represents a fundamental shift from systems that analyze and classify to systems that create entirely new content. These models learn the underlying patterns and structures in their training data, then use that knowledge to generate novel outputs.
      </div>

      <GenerativeAIExplainedFooter />
    </>
  );
}

function GenerativeAIExplainedFooter() {
  return (
    <>
      {/* Key Learnings */}
      <KeyLearnings
        learnings={[
          'Generative AI creates new content by learning statistical patterns from training data.',
          'GANs (Generative Adversarial Networks) use two neural networks competing against each other to produce realistic outputs.',
          'Diffusion models gradually refine random noise into structured images through a learned denoising process.',
          'Generative models raise new governance challenges around authenticity, copyright, and misinformation.',
          'Responsible deployment requires watermarking, provenance tracking, and clear disclosure of AI-generated content.'
        ]}
      />

      {/* Accordions */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ marginTop: '20px' }}>
          <Accordion title="Additional Resources">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Ian Goodfellow - Generative Adversarial Networks (GANs) - 2014</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>OpenAI - DALL-E and GPT Model Documentation</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Stability AI - Stable Diffusion Technical Report</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>MIT Technology Review - The Generative AI Revolution</li>
            </ul>
          </Accordion>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Accordion title="Sources & References">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Goodfellow, I., et al. (2014). Generative Adversarial Networks - NeurIPS</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Ho, J., Jain, A., Abbeel, P. (2020). Denoising Diffusion Probabilistic Models</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Ramesh, A., et al. (2022). Hierarchical Text-Conditional Image Generation with CLIP Latents</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
}
