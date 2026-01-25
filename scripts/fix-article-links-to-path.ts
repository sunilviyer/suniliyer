import { readFileSync, writeFileSync } from 'fs';

const pages = [
  { path: '/Volumes/External/aidefence/app/history/page.tsx', pathName: 'history' },
  { path: '/Volumes/External/aidefence/app/terminology/page.tsx', pathName: 'terminology' },
  { path: '/Volumes/External/aidefence/app/risk/page.tsx', pathName: 'risk' },
  { path: '/Volumes/External/aidefence/app/responsibility/page.tsx', pathName: 'responsibility' },
  { path: '/Volumes/External/aidefence/app/future/page.tsx', pathName: 'future' },
];

console.log('\n╔══════════════════════════════════════════════════════════════╗');
console.log('║   FIX ARTICLE LINKS: /articles/{slug} → /{path}/{slug}      ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

let successCount = 0;
let errorCount = 0;

for (const { path, pathName } of pages) {
  try {
    let content = readFileSync(path, 'utf-8');

    // Replace /articles/{slug} with /{pathName}/{slug}
    const oldPattern = `/articles/\${card.slug}`;
    const newPattern = `/${pathName}/\${card.slug}`;

    if (content.includes(oldPattern)) {
      content = content.replace(oldPattern, newPattern);
      writeFileSync(path, content, 'utf-8');

      const fileName = path.split('/').pop();
      console.log(`✅ ${fileName}`);
      console.log(`   Updated: ${oldPattern} → ${newPattern}\n`);
      successCount++;
    } else {
      const fileName = path.split('/').pop();
      console.log(`⏭️  ${fileName} - Already correct or no match\n`);
    }
  } catch (error) {
    const fileName = path.split('/').pop();
    console.log(`❌ ${fileName} - Error: ${error}\n`);
    errorCount++;
  }
}

console.log('═══════════════════════════════════════════════════════════════');
console.log(`\n✅ Successfully updated: ${successCount}/5`);
console.log(`❌ Errors: ${errorCount}/5\n`);
console.log('═══════════════════════════════════════════════════════════════\n');
