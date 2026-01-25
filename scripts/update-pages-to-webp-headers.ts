import { readFileSync, writeFileSync } from 'fs';

const pages = [
  '/Volumes/External/aidefence/app/terminology/page.tsx',
  '/Volumes/External/aidefence/app/risk/page.tsx',
  '/Volumes/External/aidefence/app/responsibility/page.tsx',
  '/Volumes/External/aidefence/app/future/page.tsx',
];

console.log('\n╔══════════════════════════════════════════════════════════════╗');
console.log('║   UPDATE LEARNING PATH PAGES: PNG → WEBP HEADERS            ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

let successCount = 0;
let errorCount = 0;

for (const pagePath of pages) {
  try {
    const content = readFileSync(pagePath, 'utf-8');

    // Replace .png with .webp and remove unoptimized prop
    let updatedContent = content
      .replace(/headercards\/([^"]+)\.png/g, 'headercards/$1.webp')
      .replace(/\s+unoptimized\n/g, '\n');

    if (content !== updatedContent) {
      writeFileSync(pagePath, updatedContent, 'utf-8');
      const fileName = pagePath.split('/').pop();
      console.log(`✅ ${fileName}`);
      console.log(`   Updated header image to webp\n`);
      successCount++;
    } else {
      const fileName = pagePath.split('/').pop();
      console.log(`⏭️  ${fileName} - No changes needed\n`);
    }
  } catch (error) {
    const fileName = pagePath.split('/').pop();
    console.log(`❌ ${fileName} - Error: ${error}\n`);
    errorCount++;
  }
}

console.log('═══════════════════════════════════════════════════════════════');
console.log(`\n✅ Successfully updated: ${successCount}`);
console.log(`❌ Errors: ${errorCount}\n`);
console.log('═══════════════════════════════════════════════════════════════\n');
