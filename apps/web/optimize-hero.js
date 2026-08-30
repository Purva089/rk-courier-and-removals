const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'hero.jpg');
const outputDir = path.join(__dirname, 'public');

const sizes = [640, 750, 828, 1080, 1200, 1920];

async function optimize() {
  try {
    // Get original image info
    const original = sharp(inputPath);
    const metadata = await original.metadata();
    console.log(`Original: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);
    
    // Generate responsive WebP images
    for (const width of sizes) {
      const outputPath = path.join(outputDir, `hero-${width}.webp`);
      await sharp(inputPath)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      const stats = fs.statSync(outputPath);
      console.log(`Generated: hero-${width}.webp (${(stats.size / 1024).toFixed(1)} KB)`);
    }

    // Generate LQIP (low-quality image placeholder) - 20px wide, base64 blur
    const lqipBuffer = await sharp(inputPath)
      .resize(20, null, { withoutEnlargement: true })
      .webp({ quality: 20 })
      .blur(10)
      .toBuffer();
    
    const lqipBase64 = `data:image/webp;base64,${lqipBuffer.toString('base64')}`;
    console.log('\nLQIP Base64:');
    console.log(lqipBase64);
    
    // Also save LQIP as a tiny file for reference
    fs.writeFileSync(path.join(outputDir, 'hero-lqip.txt'), lqipBase64);
    console.log('\nLQIP saved to public/hero-lqip.txt');

    // Summary
    console.log('\n--- Summary ---');
    for (const width of sizes) {
      const stats = fs.statSync(path.join(outputDir, `hero-${width}.webp`));
      console.log(`hero-${width}.webp: ${(stats.size / 1024).toFixed(1)} KB`);
    }
    
    const origStats = fs.statSync(inputPath);
    console.log(`\nOriginal hero.jpg: ${(origStats.size / 1024).toFixed(1)} KB`);
    console.log(`Reduction for 1920w: ${((1 - fs.statSync(path.join(outputDir, 'hero-1920.webp')).size / origStats.size) * 100).toFixed(1)}%`);

  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

optimize();