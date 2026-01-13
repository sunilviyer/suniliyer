import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';

export default async function LargeLanguageModelsArticle() {
  // Fetch cards from database (this article has no cards)
  const cards = await getCardsByArticle('large-language-models');

  return (
    <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="Large Language Models"
      tldr="Large Language Models like GPT and Claude use transformer architectures trained on massive text datasets to understand and generate human-like text, fundamentally changing how we interact with AI."
      tags={['LLMs', 'Transformers', 'Natural Language Processing']}
      readTime="9 min read"
      updatedDate="January 2025"
      headerImage="/images/headercards/history-header.png"
      currentIndex={7}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/generative-ai-explained',
        title: 'Generative AI Explained'
      }}
      nextArticle={{
        slug: '/articles/ai-history',
        title: 'AI History: Dartmouth to DeepMind'
      }}
      cards={cards}
    >
      <LargeLanguageModelsContent />
    </ArticlePageWrapper>
  );
}

function LargeLanguageModelsContent() {
  return (
    <>
      {/* Main Content */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Probability of Prose
      </h2>

      <div className="content-p">
        Think about the last time you used autocomplete on your phone to finish a text message. Behind the scenes of sophisticated tools like ChatGPT lies a similar mechanism, scaled up to an incredible degree. These are Large Language Models (LLMs), and while they might seem like they are thinking, they are actually doing something much simpler: predicting the next word in a sequence.
      </div>

      <div className="content-p">
        Here is the key insight: to predict that next word accurately across trillions of examples, the model must capture patterns of grammar, logic, and even a bit of common sense. It does not &quot;know&quot; facts like a person does, but its statistical map of human language is so vast that it can produce coherent essays, debug complex code, or even write poetry.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Engine: The Transformer
      </h2>

      <div className="content-p">
        To understand how we got here, we have to look back at the 2017 Transformer revolution. Before this breakthrough, AI processed text one word at a time, often losing the thread of a long sentence. Think of it like reading through a straw—it was slow and limited.
      </div>

      <div className="content-p">
        Transformers introduced an &quot;attention mechanism&quot; that allows the system to look at every word in a document simultaneously to understand context. When a model reads the word &quot;it,&quot; the attention mechanism allows it to instantly look back and see if &quot;it&quot; refers to a &quot;cat&quot; or a &quot;corporation,&quot; regardless of how far apart they are.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        How Models Are &quot;Schooled&quot;
      </h2>

      <div className="content-p">
        Modern LLMs do not just emerge from the box ready to help. They go through three distinct levels of training. First is pre-training, where the model reads the entire public internet to learn how language works. This is followed by supervised fine-tuning, where human instructors provide high-quality examples of good answers.
      </div>

      <div className="content-p">
        Finally, we use Reinforcement Learning from Human Feedback (RLHF). This is where humans rank different AI responses to teach the model our preferences and values. This process makes the model feel helpful and safe, but it does not change the fact that the underlying engine is still a probability machine.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Reality Check: Hallucination and RAG
      </h2>

      <div className="content-p">
        Because the model is focused on what word is likely to come next rather than what is true, it can experience a hallucination. It might confidently state a historical date that never happened or cite a legal case that does not exist. Think of it like a very well-read assistant who occasionally makes things up just to be helpful.
      </div>

      <div className="content-p">
        For effective governance, we can never treat LLM outputs as a final source of truth. To solve this, we often use Retrieval-Augmented Generation (RAG). RAG forces the AI to look up information in a verified knowledge base before generating an answer, providing the factual grounding that raw models lack.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Path Ahead
      </h2>

      <div className="content-p">
        As we explore the history of AI in our next article, keep this in mind: LLMs are powerful pattern-matchers, not reasoning engines. Understanding this limit is your most important shield against the hype.
      </div>

      <LargeLanguageModelsFooter />
    </>
  );
}

function LargeLanguageModelsFooter() {
  return (
    <>
      {/* Key Learnings */}
      <KeyLearnings
        learnings={[
          'Transformers use self-attention mechanisms to understand context and relationships across entire sequences of text.',
          'LLMs are trained on trillions of tokens from books, websites, and code to learn language patterns and world knowledge.',
          'Scaling laws show that model performance improves predictably with more parameters, data, and compute.',
          'Fine-tuning and RLHF (Reinforcement Learning from Human Feedback) align models with human preferences and safety.',
          'LLMs exhibit emergent capabilities like reasoning and planning that were not explicitly programmed.'
        ]}
      />

      {/* Accordions */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ marginTop: '20px' }}>
          <Accordion title="Additional Resources">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Vaswani et al. - Attention Is All You Need (2017) - Transformer Paper</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>OpenAI - GPT-3 and GPT-4 Technical Reports</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Anthropic - Claude Model Card and Constitutional AI</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Andrej Karpathy - State of GPT and LLM Basics</li>
            </ul>
          </Accordion>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Accordion title="Sources & References">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Vaswani, A., et al. (2017). Attention Is All You Need - NeurIPS</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Brown, T., et al. (2020). Language Models are Few-Shot Learners - OpenAI GPT-3</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Ouyang, L., et al. (2022). Training language models to follow instructions with human feedback</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
}
