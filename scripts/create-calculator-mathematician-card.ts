import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

async function createCard() {
  try {
    const cardData = {
      card_id: 'sc-calculator-vs-mathematician',
      card_type: 'scenario',
      title: 'Calculator vs. Mathematician',
      trigger_text: 'calculator versus mathematician',
      summary: 'A calculator follows explicit rules to solve problems. A mathematician identifies patterns and applies reasoning to new situations. This distinction mirrors the difference between traditional automation and AI systems.',
      status: 'published',
      used_in_articles: ['what-ai-actually-is'],
      full_content: {
        setup: 'Imagine you need to solve a complex mathematical problem. You could use a calculator or consult a mathematician. Both might give you an answer, but they work in fundamentally different ways.',
        challenge: 'Understanding why governing a calculator-like system (traditional software) requires different approaches than governing a mathematician-like system (AI).',
        options: [
          'Traditional automation: Follows explicit instructions, predictable, easy to audit',
          'AI systems: Learns patterns from data, probabilistic, requires different governance',
          'Hybrid approaches: Combining rule-based logic with learned patterns'
        ],
        teaching_point: 'Just as you would trust a calculator for arithmetic but need a mathematician for complex problem-solving, traditional software excels at following rules while AI systems excel at pattern recognition. Governance must match the tool to the task.',
        related_concepts: [
          'Rule-based systems vs. machine learning',
          'Deterministic vs. probabilistic outputs',
          'Traditional software testing vs. AI validation'
        ],
        discussion_questions: [
          'What types of business decisions are more like calculator problems (rule-based)?',
          'What types require mathematician-like reasoning (pattern recognition)?',
          'How should governance differ between these two approaches?'
        ],
        tags: ['AI Fundamentals', 'Automation', 'Governance', 'Teaching Analogy']
      }
    };

    await sql`
      INSERT INTO cards (
        card_id,
        card_type,
        title,
        trigger_text,
        summary,
        status,
        used_in_articles,
        full_content
      ) VALUES (
        ${cardData.card_id},
        ${cardData.card_type},
        ${cardData.title},
        ${cardData.trigger_text},
        ${cardData.summary},
        ${cardData.status},
        ${cardData.used_in_articles},
        ${JSON.stringify(cardData.full_content)}
      )
    `;

    console.log('✅ Created card: sc-calculator-vs-mathematician');
    console.log('   Type: scenario');
    console.log('   Status: published');
    console.log('   Used in: what-ai-actually-is');

  } catch (error) {
    console.error('❌ Error creating card:', error);
    throw error;
  }
}

createCard();
