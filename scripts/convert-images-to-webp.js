#!/usr/bin/env node

/**
 * Story 0.10: Image Optimization & WebP Conversion
 *
 * This script:
 * 1. Finds all PNG/JPG images in public/images/
 * 2. Converts them to WebP format (quality 85)
 * 3. Reports file sizes and identifies oversized images
 * 4. Generates a summary report
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const QUALITY = 85;
const MAX_SIZE_KB = 200;
const IMAGE_DIR = path.join(process.cwd(), 'public/images');

// Find all image files recursively
function findImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findImages(filePath, fileList);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Convert image to WebP
async function convertToWebP(imagePath) {
  const ext = path.extname(imagePath);
  const webpPath = imagePath.replace(ext, '.webp');

  try {
    await sharp(imagePath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const originalSize = fs.statSync(imagePath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

    return {
      original: imagePath,
      webp: webpPath,
      originalSizeKB: (originalSize / 1024).toFixed(1),
      webpSizeKB: (webpSize / 1024).toFixed(1),
      savings: savings,
      oversized: webpSize / 1024 > MAX_SIZE_KB
    };
  } catch (error) {
    console.error(`Error converting ${imagePath}:`, error.message);
    return null;
  }
}

// Main function
async function main() {
  console.log('🔄 Starting Image Optimization & WebP Conversion...\n');
  console.log(`Target directory: ${IMAGE_DIR}`);
  console.log(`Quality: ${QUALITY}`);
  console.log(`Max size target: ${MAX_SIZE_KB}KB\n`);

  const images = findImages(IMAGE_DIR);
  console.log(`Found ${images.length} images to convert\n`);

  const results = [];
  let converted = 0;
  let failed = 0;

  for (const imagePath of images) {
    const relativePath = path.relative(IMAGE_DIR, imagePath);
    process.stdout.write(`Converting: ${relativePath}... `);

    const result = await convertToWebP(imagePath);

    if (result) {
      results.push(result);
      converted++;
      console.log(`✅ ${result.webpSizeKB}KB (saved ${result.savings}%)`);
    } else {
      failed++;
      console.log('❌ Failed');
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('CONVERSION SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total images: ${images.length}`);
  console.log(`Converted: ${converted}`);
  console.log(`Failed: ${failed}`);

  // Calculate total savings
  const totalOriginalSize = results.reduce((sum, r) => sum + parseFloat(r.originalSizeKB), 0);
  const totalWebPSize = results.reduce((sum, r) => sum + parseFloat(r.webpSizeKB), 0);
  const totalSavings = ((totalOriginalSize - totalWebPSize) / totalOriginalSize * 100).toFixed(1);

  console.log(`\nTotal original size: ${(totalOriginalSize / 1024).toFixed(2)}MB`);
  console.log(`Total WebP size: ${(totalWebPSize / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${totalSavings}%`);

  // Find oversized images
  const oversized = results.filter(r => r.oversized);

  if (oversized.length > 0) {
    console.log('\n' + '='.repeat(80));
    console.log(`⚠️  OVERSIZED IMAGES (${oversized.length} over ${MAX_SIZE_KB}KB)`);
    console.log('='.repeat(80));
    oversized.forEach(r => {
      const filename = path.basename(r.webp);
      console.log(`${filename}: ${r.webpSizeKB}KB`);
    });
    console.log('\nThese images may need further optimization.');
  } else {
    console.log('\n✅ All images are under the 200KB target!');
  }

  console.log('\n✨ WebP conversion complete!');
}

main().catch(console.error);
