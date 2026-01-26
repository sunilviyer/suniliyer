-- Layer 3 Part 2: Create New Resource Cards
-- These cards have PDFs in /public/downloads/resources/ but no database entries

INSERT INTO cards (
  card_id,
  card_type,
  title,
  trigger_text,
  summary,
  download_url,
  full_content,
  status,
  used_in_articles
) VALUES
(
  'res-governance-raci',
  'resource',
  'AI Governance RACI Matrix Template',
  'Governance RACI',
  'Ready-to-use RACI matrix template for defining AI governance roles and responsibilities across your organization.',
  '/downloads/resources/governance-raci .pdf',
  '{"tags": ["Governance", "Tool", "Roles & Responsibilities"]}',
  'published',
  ARRAY['ai-governance-careers']
),
(
  'res-automation-levels-decision-tree',
  'resource',
  'Automation Levels Decision Tree',
  'Automation Levels',
  'Decision tree to help determine appropriate levels of automation for your AI systems—from fully manual to fully automated.',
  '/downloads/resources/automation-levels-decision-tree.pdf',
  '{"tags": ["Human-Centered AI", "Tool", "Automation"]}',
  'published',
  ARRAY['human-centered-ai']
),
(
  'res-seven-pillars-trustworthy-ai',
  'resource',
  'Seven Pillars of Trustworthy AI Framework',
  'Seven Pillars',
  'Comprehensive framework covering the seven essential pillars of trustworthy AI: transparency, fairness, accountability, safety, privacy, reliability, and human oversight.',
  '/downloads/resources/seven-pillars-trustworthy-ai.pdf',
  '{"tags": ["Trustworthy AI", "Framework", "Ethics"]}',
  'published',
  ARRAY['trustworthy-ai']
),
(
  'res-design-review-checklist',
  'resource',
  'AI Design Review Checklist',
  'Design Review',
  'Structured checklist for reviewing AI system designs to ensure they meet ethical, safety, and usability requirements before implementation.',
  '/downloads/resources/design-review-checklist.pdf',
  '{"tags": ["Human-Centered AI", "Checklist", "Design"]}',
  'published',
  ARRAY['human-centered-ai']
);
