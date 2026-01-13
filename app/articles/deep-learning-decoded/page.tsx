import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';

export default async function DeepLearningDecodedArticle() {
  // Fetch cards from database (this article has no cards)
  const cards = await getCardsByArticle('deep-learning-decoded');

  return (
    <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="Deep Learning Decoded"
      tldr="Deep learning uses neural networks with multiple layers to automatically learn hierarchical patterns from data, powering modern breakthroughs in image recognition, natural language processing, and more."
      tags={['Deep Learning', 'Neural Networks', 'AI Architecture']}
      readTime="8 min read"
      updatedDate="January 2025"
      headerImage="/images/headercards/history-header.png"
      currentIndex={5}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/how-machines-learn',
        title: 'How Machines Learn'
      }}
      nextArticle={{
        slug: '/articles/generative-ai-explained',
        title: 'Generative AI Explained'
      }}
      cards={cards}
    >
      <DeepLearningDecodedContent />
    </ArticlePageWrapper>
  );
}

function DeepLearningDecodedContent() {
  return (
    <>
      {/* Main Content */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        From Simple to Deep
      </h2>

      <div className="content-p">
        Deep learning represents a fundamental shift in how we build AI systems. Instead of hand-crafting features, deep neural networks learn to extract patterns automatically from raw data through multiple layers of processing.
      </div>

      <DeepLearningDecodedFooter />
    </>
  );
}

function DeepLearningDecodedFooter() {
  return (
    <>
      {/* Key Learnings */}
      <KeyLearnings
        learnings={[
          'Neural networks are composed of interconnected layers that transform input data into meaningful outputs.',
          'Deep learning excels at automatically discovering hierarchical patterns without manual feature engineering.',
          'Training deep networks requires substantial computational resources and large datasets.',
          'Convolutional Neural Networks (CNNs) revolutionized computer vision by learning spatial hierarchies.',
          'Transfer learning allows pre-trained models to be adapted for new tasks with limited data.'
        ]}
      />

      {/* Accordions */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ marginTop: '20px' }}>
          <Accordion title="Additional Resources">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Ian Goodfellow, Yoshua Bengio, Aaron Courville - Deep Learning (2016)</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Andrew Ng - Deep Learning Specialization - Coursera</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Geoffrey Hinton - Neural Networks for Machine Learning</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Yann LeCun - Deep Learning and the Future of AI</li>
            </ul>
          </Accordion>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Accordion title="Sources & References">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Goodfellow, I., Bengio, Y., Courville, A. (2016). Deep Learning - MIT Press</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>LeCun, Y., Bengio, Y., Hinton, G. (2015). Deep learning - Nature</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Krizhevsky, A., Sutskever, I., Hinton, G. E. (2012). ImageNet Classification with Deep Convolutional Neural Networks</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
}
