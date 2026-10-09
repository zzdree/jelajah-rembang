# scripts/

Skrip bantu build/konten. Di luar `src/`, jadi tak tersentuh Content Collections,
`astro check`, atau linter desain.

| Skrip | Fungsi |
|---|---|
| `commons-manifest.json` | Daftar berkas Wikimedia Commons → path lokal + judul. |
| `fetch-commons.mjs` | Unduh foto (1600 px) via `curl -4`, resumable, append `credits.json`. |
| `gen-galeri.mjs` | Hasilkan 12 berkas album galeri dari data + kredit asli. |
| `apply-covers-coords.mjs` | Sisipkan `cover`/`coverAlt`/`coords` ke frontmatter (idempoten). |
| `fix-dims.mjs` | Perbaiki `width`/`height` di `credits.json` dari berkas asli. |
| `build-fonts.mjs` | Konversi woff2 → TTF statis (untuk OG image, `src/lib/og.ts`). |
| `fonts/*.ttf` | Font TTF statis yang dipakai satori saat render OG. |

## OG image (src/lib/og.ts)

Kartu Open Graph 1200×630 dirender **saat build** (satori → SVG → sharp → JPEG),
menghasilkan 86 berkas `/og/<slug>.jpg`. Font harus TTF statis (variable font gagal
di satori), karena itu ada `scripts/fonts/*.ttf`.

Regenerasi font (bila ubah muka huruf):
```bash
npm install -D wawoff2 @fontsource/hanken-grotesk @fontsource/martian-mono
node scripts/build-fonts.mjs
```

> Muka huruf OG: **Hanken Grotesk** (400/600/700) untuk judul & teks, **Martian Mono** untuk
> data. Bodoni Moda sudah dilepas pada redesign "Tinta & Tanah" (9 Okt 2026).
