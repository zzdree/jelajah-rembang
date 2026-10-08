# AGENTS.md — Panduan Agent untuk Proyek Ini

> **Baca ini dulu sebelum menyentuh kode.** Dokumen ini menjelaskan apa proyek ini,
> aturan yang tidak boleh dilanggar, dan cara memverifikasi pekerjaan.
> Handoff detail (status & langkah berikutnya): lihat **`HANDOFF.md`**.
> Konteks produk: **`PRODUCT.md`**. Token desain: **`DESIGN.md`**.

---

## Apa proyek ini

**Jelajah Rembang** — situs profil daerah Kabupaten Rembang, Jawa Tengah.
Berisi sejarah, budaya, kuliner, destinasi wisata, profil & geografi, galeri, dan peta interaktif.
Bilingual: **Indonesia** (root) + **Inggris** (`/en/`).

- **Live:** https://jelajah-rembang.zzdree.workers.dev
- **Repo:** https://github.com/zzdree/jelajah-rembang
- **Bahasa konten:** Indonesia (utama) + Inggris (terjemahan tulisan, bukan mesin)

---

## Stack (dan yang BUKAN)

| Ya | Bukan |
|---|---|
| **Astro 7**, `output: 'static'` | ❌ Next.js, React, Vue, Svelte |
| **Tailwind CSS v4** via `@tailwindcss/vite` | ❌ `tailwind.config.ts` (Tailwind v4 tidak punya) |
| Token desain di `@theme` dalam `src/styles/global.css` | ❌ `@astrojs/tailwind` (deprecated, hanya untuk Astro ≤5) |
| TypeScript strict | ❌ JavaScript polos |
| Content Collections (Markdown) | ❌ D1, database, CMS, API routes |
| Cloudflare Workers **static assets** | ❌ SSR, adapter Cloudflare, server runtime |
| 3 island vanilla TS | ❌ framework UI klien |

**Situs ini 100% statis.** Tidak ada server, tidak ada database, tidak ada autentikasi.
Kalau sebuah tugas terasa butuh server, tanyakan dulu — kemungkinan besar tidak perlu.

---

## Aturan wajib (jangan dilanggar)

1. **Jangan jalankan `npx astro add tailwind` atau `npx astro add cloudflare`.**
   Yang pertama memasang integrasi yang tidak mendukung Astro 7; yang kedua mengubah
   proyek jadi SSR padahal kita statis.

2. **Tailwind v4 tidak punya `tailwind.config.ts`.** Token warna/tipe/radius didefinisikan
   di `src/styles/global.css` dalam blok `@theme`. Untuk menambah token, edit di sana
   **dan** di `DESIGN.md` (sumber kebenaran), jangan buat file config.

3. **`.astro` mengirim nol JS secara default.** Jangan bikin komponen framework.
   Interaktivitas ditulis sebagai `<script>` di dalam komponen `.astro` (lihat
   `MapIsland.astro`, `ThemeToggle.astro`, `GaleriPage.astro`).

4. **Patuhi `DESIGN.md`.** Jalankan `npm run lint:design` — target **0 anti-pattern**.
   Dilarang: Inter/font sistem, teks abu di atas warna, `#000`/`#fff` murni, kartu
   bersarang, grid kartu identik untuk semua seksi, eyebrow di atas setiap judul,
   gradient text, glassmorphism, border garis-samping >1px, bayangan offset keras,
   easing bounce, emoji sebagai ikon.

5. **Setiap perintah yang menyentuh jaringan WAJIB prefix IPv4-first** (IPv6 mati di
   laptop dev ini):
   ```bash
   NODE_OPTIONS='--dns-result-order=ipv4first' <perintah>
   ```
   Contoh: `NODE_OPTIONS='--dns-result-order=ipv4first' npm run deploy`.
   Untuk `gh`, pakai `GODEBUG=netdns=cgo gh <perintah>`.

6. **Nol em dash (—) di prosa konten.** Gunakan koma, titik dua, atau titik.

7. **Hormati lisensi gambar.** Semua foto dari Wikimedia Commons; atribusi ada di
   `src/assets/credits.json` dan halaman `/kredit`. Jangan hapus entri kredit.

8. **Jangan mengarang fakta.** Angka statistik wajib bertahun; legenda disajikan
   sebagai legenda ("menurut cerita rakyat"), bukan fakta.

---

## Struktur (peta cepat)

```
src/
├── content.config.ts          # skema zod tiap koleksi — ubah di sini bila menambah field
├── content/{koleksi}/{id,en}/{slug}.md
├── assets/                    # gambar sumber (dioptimasi build) + credits.json
├── lib/i18n.ts                # kamus UI, t(), localizePath()
├── lib/content.ts             # getLocalized(), translationOf(), stripLang()
├── layouts/BaseLayout.astro
├── styles/global.css          # token desain
├── components/
│   ├── seo/BaseHead.astro     # SEO, canonical, hreflang, OG, skrip tema
│   ├── nav/                   # header, breadcrumb, toggle bahasa/tema, skip link
│   ├── footer/SiteFooter.astro
│   ├── ui/                    # Prose, Figure, StatBlock, ArticleHeader, BatikMotif, SectionHeading
│   ├── cards/                 # 4 varian kartu (Sejarah/Budaya/Kuliner/Destinasi)
│   ├── peta/MapIsland.astro   # island Leaflet
│   └── pages/                 # badan halaman — dipakai ulang id & en
└── pages/                     # rute: id di root, en di /en/
    ├── index.astro, sejarah/, budaya/, kuliner/, destinasi/, profil/, galeri/, peta/, kredit/, 404.astro
    └── en/  (cermin tipis)
```

**Pola rute:** file di `src/pages/` hanya *wrapper* 5 baris yang memanggil komponen
di `src/components/pages/`. Logika halaman ada di komponen, bukan di rute.
Detail page pakai `getStaticPaths()` yang menyaring entri `id/` atau `en/`.

---

## Model konten (bilingual)

- Satu berkas = satu bahasa. ID entri: `{lang}/{slug}` (mis. `id/sate-srepeh`).
- `translationKey` **harus sama** antara versi id & en — ini yang menjodohkan keduanya
  untuk `hreflang` dan toggle bahasa.
- Menambah artikel: buat dua berkas (id + en) dengan `translationKey` sama, isi
  frontmatter sesuai `src/content.config.ts`. Halaman indeks & detail terbentuk otomatis.

**Skema frontmatter bersama:** `translationKey, title, summary, cover?, coverAlt?, tags, updated?, draft, order, featured, sources`

Field khusus per koleksi: `era/year/places` (sejarah) · `category` (budaya) ·
`type/origin/ingredients` (kuliner) · `kind/kecamatan/coords?/access?/hours?/ticket?` (destinasi).

---

## Perintah

```bash
npm run dev          # server pengembangan
npm run build        # astro check + astro build → dist/
npm run preview      # pratinjau hasil build
npm run check        # typecheck (termasuk .astro)
npm run lint:design  # 60 aturan anti-slop Impeccable (target 0)
npm test             # smoke test Playwright (12 test)
npm run format       # Prettier
npm run deploy       # build + wrangler deploy
```

## Gerbang kualitas (jalankan sebelum mengklaim "selesai")

```bash
NODE_OPTIONS='--dns-result-order=ipv4first' npm run check    # 0 error
node /home/zzdree/ANDREAS/impeccable/cli/bin/cli.js detect src/   # 0 anti-pattern
NODE_OPTIONS='--dns-result-order=ipv4first' npm run build     # 74 halaman
NODE_OPTIONS='--dns-result-order=ipv4first' npm test          # 12/12 lulus
```

**Bukti sebelum klaim.** Jangan bilang "sudah beres" tanpa menjalankan perintah di atas.

---

## Dokumentasi Astro

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Komponen Astro](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling & Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internasionalisasi](https://docs.astro.build/en/guides/internationalization/)

> Catatan: versi Astro di proyek ini (**7.x**) lebih baru dari banyak contoh di internet
> (yang masih Astro 5 + Tailwind 3). Bila ragu, ikuti pola yang sudah ada di repo ini.
