import { readdirSync, copyFileSync } from 'fs';
import { join } from 'path';

// Mapping of article slug to existing image filename
const imageMapping: Record<string, string> = {
  // FUTURE PATH
  'agi-governance': 'artificial-general-intelligence-hype-hope-and-governance.webp',
  'ai-existential-risk': null, // Need to create
  'ai-national-security': null, // Need to create
  'ai-safety': null, // Need to create
  'future-ai-ethics': null, // Need to create
  'future-ai-regulation': 'the-future-of-ai-regulation-whats-coming-next.webp',
  'ai-governance-careers': 'ai-governance-career-path-aigp-and-beyond.webp',
  'trustworthy-ai': null, // Need to create

  // RESPONSIBILITY PATH
  'eu-ai-act-explained': 'the-eu-ai-act-europes-landmark-regulation-explained.webp',
  'nist-ai-rmf': null, // Need to create
  'iso-42001': 'ai-standards-development-iso-ieee-frameworks.webp', // Closest match
  'ai-transparency': 'ai-transparency-what-users-deserve-to-know.webp',
  'ai-accountability': 'ai-accountability-who-is-responsible-when-ai-causes-harm.webp',
  'human-centered-ai': 'human-centered-ai-design-keeping-people-in-the-loop.webp',
  'global-ai-law-tracker': 'global-ai-law-tracker-whos-regulating-what.webp',
  'cross-border-compliance': 'cross-border-ai-compliance-navigating-multiple-jurisdictions.webp',
};

function mapImages() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║        MAPPING EXISTING IMAGES TO ARTICLE SLUGS              ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const futureDir = '/Volumes/External/aidefence/public/images/future';
  const respDir = '/Volumes/External/aidefence/public/images/responsibility';

  let mappedCount = 0;
  let missingCount = 0;

  console.log('📋 IMAGE MAPPING PLAN:\n');

  for (const [slug, sourceImage] of Object.entries(imageMapping)) {
    const path = slug.startsWith('ai-') && ['ai-accountability', 'ai-transparency', 'human-centered-ai', 'global-ai-law-tracker', 'cross-border-compliance', 'eu-ai-act-explained', 'nist-ai-rmf', 'iso-42001'].includes(slug)
      ? 'responsibility'
      : slug.includes('future') || ['agi-governance', 'ai-existential-risk', 'ai-national-security', 'ai-safety', 'ai-governance-careers', 'trustworthy-ai'].includes(slug)
      ? 'future'
      : null;

    if (!path) continue;

    const targetFilename = `${slug}.webp`;

    if (sourceImage) {
      console.log(`✅ ${slug}`);
      console.log(`   Source: ${sourceImage}`);
      console.log(`   Target: ${targetFilename}`);
      console.log(`   Action: Copy to ${path}/\n`);
      mappedCount++;
    } else {
      console.log(`❌ ${slug}`);
      console.log(`   Target: ${targetFilename}`);
      console.log(`   Action: ⚠️  NEED TO CREATE IMAGE\n`);
      missingCount++;
    }
  }

  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`\n📊 SUMMARY:\n`);
  console.log(`   Can map from existing: ${mappedCount}`);
  console.log(`   Need to create: ${missingCount}`);
  console.log(`   Total: ${mappedCount + missingCount}\n`);

  // List images that can be mapped
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('\n📋 IMAGES THAT CAN BE MAPPED (11):\n');

  const mappable = [
    { slug: 'agi-governance', source: imageMapping['agi-governance'], path: 'future' },
    { slug: 'future-ai-regulation', source: imageMapping['future-ai-regulation'], path: 'future' },
    { slug: 'ai-governance-careers', source: imageMapping['ai-governance-careers'], path: 'future' },
    { slug: 'eu-ai-act-explained', source: imageMapping['eu-ai-act-explained'], path: 'responsibility' },
    { slug: 'iso-42001', source: imageMapping['iso-42001'], path: 'responsibility' },
    { slug: 'ai-transparency', source: imageMapping['ai-transparency'], path: 'responsibility' },
    { slug: 'ai-accountability', source: imageMapping['ai-accountability'], path: 'responsibility' },
    { slug: 'human-centered-ai', source: imageMapping['human-centered-ai'], path: 'responsibility' },
    { slug: 'global-ai-law-tracker', source: imageMapping['global-ai-law-tracker'], path: 'responsibility' },
    { slug: 'cross-border-compliance', source: imageMapping['cross-border-compliance'], path: 'responsibility' },
  ].filter(m => m.source);

  mappable.forEach((m, i) => {
    console.log(`${i + 1}. ${m.slug}`);
    console.log(`   cp /Volumes/External/aidefence/public/images/${m.path}/${m.source} \\`);
    console.log(`      /Volumes/External/aidefence/public/images/${m.path}/${m.slug}.webp\n`);
  });

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('\n❌ IMAGES TO CREATE (5):\n');

  const toCreate = [
    { slug: 'ai-existential-risk', path: 'future' },
    { slug: 'ai-national-security', path: 'future' },
    { slug: 'ai-safety', path: 'future' },
    { slug: 'future-ai-ethics', path: 'future' },
    { slug: 'nist-ai-rmf', path: 'responsibility' },
    { slug: 'trustworthy-ai', path: 'future' },
  ];

  toCreate.forEach((item, i) => {
    console.log(`${i + 1}. /images/${item.path}/${item.slug}.webp`);
  });

  console.log('\n');
}

mapImages();
