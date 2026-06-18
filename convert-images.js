const sharp = require('sharp');
const path = require('path');

const mapping = [
  ['お金の基本コース.png', 'money-basics.webp'],
  ['日本経済と社会のお金.png', 'economics.webp'],
  ['家計管理の基本.png', 'money-household.webp'],
  ['税金の基本.png', 'money-tax.webp'],
  ['保険の基本.png', 'money-insurance.webp'],
  ['ライフプランニング入門.png', 'money-lifeplan.webp'],
  ['ふるさと納税完全ガイド.png', 'furusato-tax.webp'],
  ['副業・フリーランスのお金入門.png', 'freelance-money.webp'],
];

const sourceDir = 'C:\\Users\\fukuf\\OneDrive\\画像\\マネぼうアカデミー\\お金コース\\お金を学ぼう＿サムネ';
const outputDir = 'public/images/courses';

(async () => {
  for (const [pngName, webpName] of mapping) {
    const inputPath = path.join(sourceDir, pngName);
    const outputPath = path.join(outputDir, webpName);
    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`✓ ${pngName} → ${webpName}`);
    } catch (err) {
      console.error(`✗ ${pngName}: ${err.message}`);
    }
  }
  console.log('変換完了');
})();
