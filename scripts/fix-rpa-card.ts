import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixRPACard() {
  console.log('Fixing RPA vs AI card...\n');

  const fullContentHTML = `<div class="card-content">
<h3 class="card-heading">RPA vs AI: Understanding the Distinction</h3>
<p>Robotic Process Automation (RPA) represents traditional automation—software bots that follow predefined rules to complete repetitive tasks like data entry, form filling, or moving files between systems.</p>
<p><strong>Key Characteristics of Pure RPA:</strong></p>
<ul>
  <li>Follows explicit, rule-based instructions</li>
  <li>Cannot adapt to new situations without reprogramming</li>
  <li>Executes the same steps every time</li>
  <li>No learning or improvement over time</li>
</ul>
<p><strong>When RPA Becomes AI:</strong></p>
<p>RPA tools only qualify as AI when they incorporate machine learning components that enable them to:</p>
<ul>
  <li>Recognize patterns in unstructured data (like invoices or emails)</li>
  <li>Make decisions based on probability rather than fixed rules</li>
  <li>Improve accuracy through experience</li>
  <li>Handle variations and exceptions autonomously</li>
</ul>
<p><strong>Governance Implication:</strong> Most RPA implementations in organizations are pure automation, not AI, and therefore don't require AI-specific governance measures. However, if your RPA vendor adds AI capabilities (like intelligent document processing), your governance obligations change significantly.</p>
</div>`;

  const fullContent = {
    tags: ['RPA', 'Automation', 'Distinction'],
    content: fullContentHTML
  };

  await sql`
    UPDATE cards
    SET
      summary = 'Robotic Process Automation (RPA) is pure automation—software that mimics human clicks and keystrokes following fixed rules. It only becomes "AI" when it incorporates machine learning capabilities that allow it to adapt and improve over time. Most RPA tools are not AI; they simply automate repetitive tasks without learning.',
      full_content = ${JSON.stringify(fullContent)}::jsonb
    WHERE card_id = 'concept-rpa-vs-ai'
    RETURNING card_id, title
  `;

  console.log('✓ Fixed RPA vs AI card with complete summary and full content');
}

fixRPACard().catch(console.error);
