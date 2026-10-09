# Jelajah Rembang

Situs profil daerah **Kabupaten Rembang**, Jawa Tengah: sejarah, budaya, kuliner, destinasi wisata, profil & geografi, galeri, dan peta interaktif. Bilingual (Indonesia + Inggris), statis, cepat.

Live: `https://jelajah-rembang.zzdree.workers.dev`

---

## Stack

| Bagian | Pilihan |
|---|---|
| Framework | **Astro 7** (`output: 'static'`, zero-JS by default) |
| Styling | **Tailwind CSS v4** via `@tailwindcss/vite` (token di `@theme`) |
| Bahasa | TypeScript strict |
| Konten | Astro Content Collections (Markdown/MDX) |
| Font | Self-hosted via `@fontsource` (Newsreader serif display, Hanken Grotesk body, Martian Mono data) |
| Peta | Leaflet 1.9 + OpenStreetMap (tanpa API key) |
| Deploy | Cloudflare (static assets) |
| Uji | Playwright (smoke), `astro check`, Impeccable design linter |

**Tidak ada** framework UI klien (React/Vue). Interaktivitas hanya empat island kecil: peta Leaflet, lightbox `<dialog>`, toggle tema, dan pengendali reveal/counter/parallax.

---

## Struktur

```
src/
├── content.config.ts        # skema koleksi (zod)
├── content/
│   ├── sejarah/{id,en}/     # artikel per bahasa
│   ├── budaya/{id,en}/
│   ├── kuliner/{id,en}/
│   ├── destinasi/{id,en}/
│   └── galeri/{id,en}/
├── assets/                  # gambar sumber (dioptimasi saat build)
│   └── credits.json         # atribusi lisensi CC
├── components/
│   ├── seo/BaseHead.astro   # SEO, canonical, hreflang, OG
│   ├── nav/                 # header, breadcrumb, toggle bahasa/tema
│   ├── footer/
│   ├── ui/                  # primitif: Prose, Figure, StatBlock, BatikMotif
│   ├── cards/               # 4 varian kartu per tipe konten
│   ├── peta/MapIsland.astro # island Leaflet
│   └── pages/               # badan halaman (dipakai ulang id & en)
├── layouts/BaseLayout.astro
├── lib/{i18n,content}.ts
├── styles/global.css        # token desain "Arsip Pesisir"
└── pages/                   # rute id (root) + en/ (prefix)
```

---

## Perintah

```bash
npm install          # pasang dependensi
npm run dev          # server pengembangan
npm run build        # astro check + astro build → dist/
npm run preview      # pratinjau hasil build
npm run check        # typecheck (termasuk file .astro)
npm run lint:design  # 60 aturan anti-slop Impeccable (target: 0)
npm test             # smoke test Playwright
npm run format       # Prettier
```

### Deploy

```bash
npm run deploy       # build + wrangler deploy
```

> **Catatan lingkungan dev Linux ini:** IPv6 mati, sehingga wrangler/Node fetch perlu prefix
> `NODE_OPTIONS='--dns-result-order=ipv4first'`. Sudah dibakukan di script `deploy` dan `preview:cf`.

---

## Arsitektur konten

Setiap berkas = satu bahasa. ID entri berformat `{lang}/{slug}` (mis. `id/sate-srepeh`).
Field `translationKey` menjodohkan pasangan id↔en, dipakai untuk `hreflang` dan toggle bahasa.

Menambah artikel:

1. Buat `src/content/{koleksi}/id/{slug}.md` dan `src/content/{koleksi}/en/{slug}.md`
   dengan `translationKey` yang **sama**.
2. Isi frontmatter sesuai skema di `src/content.config.ts`.
3. Halaman indeks & detail otomatis terbentuk lewat `getStaticPaths`.

---

## Sistem desain — "Arsip Pesisir"

Hangat & editorial, seperti arsip pesisir: **kertas tua** `#F4EDE0`, **tinta cokelat** `#231A14`,
tiga warna batik Lasem (merah bata `#A3302A`, wedel indigo `#2C3E63`, soga tanah `#7C5A2A`) +
**emas langka** `#96630C` (drop-cap, tanda arsip, `::selection`). Tema gelap = arang hangat
`#1A1512`, bukan hitam dingin.

Dua suara tipografi: **Newsreader** (serif) untuk judul/hero/judul kartu, **Hanken Grotesk** untuk
prosa & UI, **Martian Mono** untuk angka tabular. Foto dibingkai **lempeng arsip** (1px border +
langkah tonal, tanpa bayangan); artikel punya drop-cap emas.

Sumber kebenaran token: **`DESIGN.md`** (frontmatter YAML + prosa). Konteks produk: **`PRODUCT.md`**.

Aturan inti: tanpa Inter/font sistem, tanpa teks abu di atas warna, tanpa `#000` murni, tanpa
glassmorphism/bayangan kartu, tanpa kartu bersarang, tanpa grid kartu identik, kontras body
≥4.5:1 (semua pasangan token lolos AA di kedua tema, dijaga `tests/contrast.spec.ts`),
measure 65–75ch, sistem gerak **MOTION 3** (reveal, stagger, mask judul, underline, counter
angka, parallax hero, pita kecamatan, transisi halaman) yang semuanya mati di
`prefers-reduced-motion`.

---

## Kredit gambar

Foto berasal dari **Wikimedia Commons** dengan lisensi bebas (CC BY, CC BY-SA, CC0, domain publik).
Atribusi lengkap per gambar: `src/assets/credits.json`, ditampilkan di halaman `/kredit`.

---

## Lisensi

Kode: MIT. Konten teks: © penulis. Gambar: sesuai lisensi masing-masing (lihat kredit).
Situs tidak resmi, dibuat untuk edukasi dan pelestarian budaya.
