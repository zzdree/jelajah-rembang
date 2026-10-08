#!/usr/bin/env node
/**
 * fix-dims.mjs — perbaiki width/height di credits.json dari berkas asli
 * (murah, tanpa jaringan). Menjamin dimensi akurat untuk semua entri.
 * Pakai: node scripts/fix-dims.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = join(ROOT, 'src/assets');
const CREDITS = join(ASSETS, 'credits.json');
const credits = JSON.parse(readFileSync(CREDITS, 'utf8'));

let fixed = 0;
for (const c of credits) {
  try {
    const out = execFileSync('file', [join(ASSETS, c.local)], { encoding: 'utf8' });
    const m = out.match(/(\d+)\s*x\s*(\d+)\s*,\s*components/);
    if (m) {
      const width = Number(m[1]);
      const height = Number(m[2]);
      if (c.width !== width || c.height !== height) {
        c.width = width;
        c.height = height;
        fixed++;
      }
    }
  } catch {
    console.error(`  ! tidak bisa baca ${c.local}`);
  }
}

writeFileSync(CREDITS, JSON.stringify(credits, null, 2) + '\n');
console.log(`dimensi diperbaiki: ${fixed} | total entri: ${credits.length}`);
