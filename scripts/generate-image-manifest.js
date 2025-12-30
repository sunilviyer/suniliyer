#!/usr/bin/env node

/**
 * Story 0.11: Generate Image Manifest CSV
 *
 * Creates a comprehensive CSV manifest of all images with:
 * - Filename, Path, Category, Color Palette, Resolution, File Size
 * - Cross-reference with knowledge-graph.yaml IDs
 */

const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.join(process.cwd(), 'public/images');

// Color palette mapping
const COLOR_PALETTES = {
  history: 'Toffee Brown #936639',
  terminology: 'Camel #a68a64',
  risk: 'Dark Walnut #582f0e',
  responsibility: 'Dry Sage #a4ac86',
  future: 'Blue #4285F4 + Yellow #FBBC04',
  heroes: 'Path-specific gradients',
  breaks: 'Mixed earth tones',
  resources: 'Mixed (category-based)',
  examples: 'Company brand colors'
};

// Get image stats
function getImageStats(filePath) {
  const stats = fs.statSync(filePath);
  return {
    sizeKB: (stats.size / 1024).toFixed(1),
    sizeMB: (stats.size / 1024 / 1024).toFixed(2)
  };
}

// Find all images
function findImages(dir, category = '', fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && file !== 'extra') {
      const subCategory = category || file;
      findImages(filePath, subCategory, fileList);
    } else if (/\.(png|jpg|jpeg|webp)$/i.test(file)) {
      const ext = path.extname(file);
      const basename = path.basename(file, ext);
      const relativePath = path.relative(IMAGE_DIR, filePath);
      const stats = getImageStats(filePath);

      fileList.push({
        filename: file,
        basename: basename,
        path: relativePath,
        category: category || path.dirname(relativePath).split('/')[0],
        extension: ext,
        sizeKB: stats.sizeKB,
        colorPalette: COLOR_PALETTES[category] || 'N/A'
      });
    }
  });

  return fileList;
}

// Generate CSV
function generateCSV(images) {
  const headers = [
    'Filename',
    'Basename',
    'Category',
    'Path',
    'Format',
    'Size (KB)',
    'Color Palette',
    'Status'
  ];

  let csv = headers.join(',') + '\n';

  images
    .sort((a, b) => {
      if (a.category !== b.category) {
        return a.category.localeCompare(b.category);
      }
      return a.filename.localeCompare(b.filename);
    })
    .forEach(img => {
      const status = parseFloat(img.sizeKB) > 200 ? 'Oversized' : 'OK';
      const row = [
        `"${img.filename}"`,
        `"${img.basename}"`,
        `"${img.category}"`,
        `"${img.path}"`,
        img.extension,
        img.sizeKB,
        `"${img.colorPalette}"`,
        status
      ];
      csv += row.join(',') + '\n';
    });

  return csv;
}

// Main function
function main() {
  console.log('📊 Generating Image Manifest...\n');

  const images = findImages(IMAGE_DIR);
  const csv = generateCSV(images);

  const outputPath = path.join(process.cwd(), 'docs/image-manifest.csv');
  fs.writeFileSync(outputPath, csv);

  console.log(`✅ Image manifest created: ${outputPath}`);
  console.log(`\nTotal images cataloged: ${images.length}`);

  // Summary by category
  const byCategory = images.reduce((acc, img) => {
    acc[img.category] = (acc[img.category] || 0) + 1;
    return acc;
  }, {});

  console.log('\nImages by category:');
  Object.entries(byCategory)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([category, count]) => {
      console.log(`  ${category}: ${count}`);
    });

  // WebP conversion status
  const webpImages = images.filter(img => img.extension === '.webp');
  const sourceImages = images.filter(img => img.extension !== '.webp');

  console.log(`\nFormat breakdown:`);
  console.log(`  Source images (PNG/JPG): ${sourceImages.length}`);
  console.log(`  WebP images: ${webpImages.length}`);
  console.log(`  WebP coverage: ${((webpImages.length / sourceImages.length) * 100).toFixed(1)}%`);
}

main();
