import { readFileSync, writeFileSync } from 'fs';

const updates = {
  '/Volumes/External/aidefence/app/history/page.tsx': [
    { old: "image: 'machine-learning-explained.webp'", new: "image: 'types-of-ai-intelligence.webp'" },
    { old: "image: 'deep-learning-explained.webp'", new: "image: 'how-machines-learn.webp'" },
    { old: "image: 'foundation-models.webp'", new: "image: 'deep-learning-decoded.webp'" },
  ],
  '/Volumes/External/aidefence/app/terminology/page.tsx': [
    { old: "image: 'model-size-scale.webp'", new: "image: 'ai-technology-stack.webp'" },
    { old: "image: 'machine-learning-terminology.webp'", new: "image: 'ai-vs-automation.webp'" },
    { old: "image: 'training-validation-test.webp'", new: "image: 'data-behind-ai.webp'" },
    { old: "image: 'transformers-architecture.webp'", new: "image: 'foundation-models.webp'" },
    { old: "image: 'embeddings-vectors.webp'", new: "image: 'multimodal-ai.webp'" },
    { old: "image: 'inference-vs-training.webp'", new: "image: 'ai-compute.webp'" },
    { old: "image: 'hyperparameters-vs-parameters.webp'", new: "image: 'environmental-cost-ai.webp'" },
    { old: "image: 'neural-networks-basics.webp'", new: "image: 'black-box-problem.webp'" },
  ],
  '/Volumes/External/aidefence/app/risk/page.tsx': [
    { old: "image: 'ai-safety-failures.webp'", new: "image: 'when-ai-goes-wrong.webp'" },
    { old: "image: 'deepfakes-trust-crisis.webp'", new: "image: 'deepfakes-synthetic-media.webp'" },
    { old: "image: 'ai-misinformation-democracy.webp'", new: "image: 'ai-misinformation.webp'" },
  ],
  '/Volumes/External/aidefence/app/responsibility/page.tsx': [
    { old: "image: 'the-eu-ai-act-europes-landmark-regulation-explained.webp'", new: "image: 'eu-ai-act-explained.webp'" },
    { old: "image: 'ai-governance-frameworks-building-your-organizations-approach.webp'", new: "image: 'nist-ai-rmf.webp'" },
    { old: "image: 'ai-and-intellectual-property-copyright-patents-and-trade-secrets.webp'", new: "image: 'iso-42001.webp'" },
    { old: "image: 'ai-transparency-what-users-deserve-to-know.webp'", new: "image: 'ai-transparency.webp'" },
    { old: "image: 'ai-accountability-who-is-responsible-when-ai-causes-harm.webp'", new: "image: 'ai-accountability.webp'" },
    { old: "image: 'human-centered-ai-design-keeping-people-in-the-loop.webp'", new: "image: 'human-centered-ai.webp'" },
    { old: "image: 'global-ai-law-tracker-whos-regulating-what.webp'", new: "image: 'global-ai-law-tracker.webp'" },
    { old: "image: 'cross-border-ai-compliance-navigating-multiple-jurisdictions.webp'", new: "image: 'cross-border-compliance.webp'" },
  ],
  '/Volumes/External/aidefence/app/future/page.tsx': [
    { old: "image: 'artificial-general-intelligence-hype-hope-and-governance.webp'", new: "image: 'agi-governance.webp'" },
    { old: "image: 'ai-agents-and-autonomous-systems-the-next-frontier.webp'", new: "image: 'ai-existential-risk.webp'" },
    { old: "image: 'digital-sovereignty-national-vs-global-standards.webp'", new: "image: 'ai-national-security.webp'" },
    { old: "image: 'ai-alignment-technical-and-governance-challenges.webp'", new: "image: 'ai-safety.webp'" },
    { old: "image: 'global-ai-governance-institutions-international-bodies.webp'", new: "image: 'future-ai-ethics.webp'" },
    { old: "image: 'the-future-of-ai-regulation-whats-coming-next.webp'", new: "image: 'future-ai-regulation.webp'" },
    { old: "image: 'ai-governance-career-path-aigp-and-beyond.webp'", new: "image: 'ai-governance-careers.webp'" },
    { old: "image: 'ai-standards-development-iso-ieee-frameworks.webp'", new: "image: 'trustworthy-ai.webp'" },
  ],
};

console.log('\n╔══════════════════════════════════════════════════════════════╗');
console.log('║   SYNC PAGE IMAGES WITH DATABASE                             ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

let totalUpdates = 0;
let totalErrors = 0;

for (const [filePath, replacements] of Object.entries(updates)) {
  const fileName = filePath.split('/').pop();
  console.log(`\n${fileName}:`);

  try {
    let content = readFileSync(filePath, 'utf-8');
    let fileChanged = false;

    for (const { old, new: newValue } of replacements) {
      if (content.includes(old)) {
        content = content.replace(old, newValue);
        fileChanged = true;
      }
    }

    if (fileChanged) {
      writeFileSync(filePath, content, 'utf-8');
      console.log(`   ✅ Updated ${replacements.length} image references\n`);
      totalUpdates++;
    } else {
      console.log(`   ⏭️  No changes needed\n`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error}\n`);
    totalErrors++;
  }
}

console.log('\n═══════════════════════════════════════════════════════════════');
console.log(`\n✅ Files updated: ${totalUpdates}`);
console.log(`❌ Errors: ${totalErrors}\n`);
console.log('═══════════════════════════════════════════════════════════════\n');
