import wawoff from 'wawoff2';
import { readFileSync, writeFileSync } from 'node:fs';
const jobs = [
  ['node_modules/@fontsource/hanken-grotesk/files/hanken-grotesk-latin-400-normal.woff2', 'scripts/fonts/hanken-400.ttf'],
  ['node_modules/@fontsource/hanken-grotesk/files/hanken-grotesk-latin-600-normal.woff2', 'scripts/fonts/hanken-600.ttf'],
  ['node_modules/@fontsource/hanken-grotesk/files/hanken-grotesk-latin-700-normal.woff2', 'scripts/fonts/hanken-700.ttf'],
];
for (const [src, dst] of jobs) {
  const ttf = await wawoff.decompress(readFileSync(src));
  writeFileSync(dst, Buffer.from(ttf));
  console.log(dst, Buffer.from(ttf).length, 'bytes');
}
