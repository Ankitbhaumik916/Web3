#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', '1.jpeg');
const destDir = path.join(__dirname, 'src', 'assets');

// Copy images 1-5
for (let i = 1; i <= 5; i++) {
  const srcFile = path.join(__dirname, '..', `${i}.jpeg`);
  const destFile = path.join(destDir, `${i}.jpeg`);
  
  try {
    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, destFile);
      console.log(`✓ Copied ${i}.jpeg`);
    } else {
      console.log(`✗ Source file not found: ${srcFile}`);
    }
  } catch (error) {
    console.error(`Error copying ${i}.jpeg:`, error.message);
  }
}

console.log('\nAssets folder contents:');
fs.readdirSync(destDir).forEach(file => console.log(`  - ${file}`));
