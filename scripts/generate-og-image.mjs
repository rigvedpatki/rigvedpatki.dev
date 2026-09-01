import { Buffer } from 'node:buffer';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'src/assets/images/ghibli-profile.webp');
const output = resolve(root, 'public/og-image.png');

const portrait = await sharp(source)
  .resize(430, 430, { fit: 'cover' })
  .composite([
    {
      input: Buffer.from(
        '<svg width="430" height="430"><circle cx="215" cy="215" r="215" fill="white"/></svg>'
      ),
      blend: 'dest-in'
    }
  ])
  .png()
  .toBuffer();

const background = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#171717"/>
    <rect x="0" y="0" width="18" height="630" fill="#f05a47"/>
    <path d="M72 78H676" stroke="#f05a47" stroke-width="4"/>
    <text x="72" y="138" fill="#f05a47" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="3">ENGINEERING PORTFOLIO</text>
    <text x="72" y="254" fill="#ffffff" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="700">Rigved Patki</text>
    <text x="72" y="326" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700">Senior Full-Stack Engineer</text>
    <text x="72" y="382" fill="#cfcfcf" font-family="Arial, Helvetica, sans-serif" font-size="23">Frontend architecture · Cloud-native systems</text>
    <text x="72" y="417" fill="#cfcfcf" font-family="Arial, Helvetica, sans-serif" font-size="23">Technical leadership</text>
    <text x="72" y="550" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700">rigvedpatki.dev</text>
    <circle cx="954" cy="315" r="231" fill="none" stroke="#f05a47" stroke-width="4"/>
  </svg>
`);

await mkdir(dirname(output), { recursive: true });
await sharp(background)
  .composite([{ input: portrait, left: 739, top: 100 }])
  .png({ compressionLevel: 9, palette: true })
  .toFile(output);
