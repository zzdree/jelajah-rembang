# HANDOFF — Jelajah Rembang

> Dokumen serah-terima untuk agent berikutnya. Terakhir diperbarui **9 Oktober 2026**.
> Baca `AGENTS.md` dulu (aturan wajib), lalu `PRODUCT.md` (konteks produk) dan `DESIGN.md` (token).

---

## Status: SELESAI & LIVE ✅

Konten lengkap, galeri terisi, cover & koordinat dilengkapi. Redesign terakhir
**"Arsip Pesisir"** (hangat + editorial + serif) menggantikan "Tinta & Tanah". Working tree git
berisi perubahan yang siap di-commit (lihat riwayat `git log`).

| Metrik | Nilai |
|---|---|
| Halaman terbangun | **74** |
| Artikel konten | **54** (27 judul × 2 bahasa) |
| Album galeri | **6** (12 berkas id+en), **36 foto** |
| Foto (Wikimedia Commons) | **52** berkas (51 entri `credits.json`) |
| Judul ber-cover | **19** dari 27 |
| Destinasi ber-koordinat | **5** dari 10 |
| `astro check` | **0 error / 0 warning / 0 hint** |
| Impeccable design lint | **0 anti-pattern** |
| Playwright (seluruh suite) | **41 lulus** (smoke, kontras, interaksi, ketahanan) |
| Kontras WCAG AA | **901 pasangan, 0 gagal** (6 halaman × terang/gelap) |
| Gambar OG (per halaman) | **86** (`/og/<slug>.jpg`, 1200×630) |
| Versi Cloudflare aktif | `31cf7996-ff72-438c-8311-a9a2eb419199` |

**Live:** https://jelajah-rembang.zzdree.workers.dev
**Repo:** https://github.com/zzdree/jelajah-rembang

Berkas uji: `tests/smoke.spec.ts` (asli), `tests/contrast.spec.ts` (kontras nyata dari
computed style, 6 halaman × 2 tema), `tests/interactions.spec.ts` (regresi lintas navigasi),
`tests/resilience.spec.ts` (reduced-motion + tanpa JS), `tests/live.spec.ts` (verifikasi
produksi — hanya jalankan bila memang menguji live).

---

## Redesign "Arsip Pesisir" (SELESAI 9 Okt 2026) — palet AKTIF

Pengguna **menolak** palet "Tinta & Tanah" di bawah: *"color palette jelek sih, tema nya jelek
banget, kurang untuk website pengenalan sejarah gini"*. Akar masalah terverifikasi: palet itu
persis **default "Museum/Gallery" bawaan tool `ui-ux-pro-max`** (`#18181B` + `#FAFAFA`), yaitu
flat minimalism Swiss yang **dingin** — default AI, bukan identitas Rembang.

**Jadi riset dulu, baru rombak.** Riset situs warisan nyata + arahan tool yang sama
(**Editorial Grid / Magazine**, **Scroll-Triggered Storytelling**, **serif display + sans body**)
menghasilkan arah yang dipilih pengguna: **A. Arsip Pesisir**.

**Palet (kontras dihitung, semua lolos AA di kedua tema):**

| Token | Terang | Gelap | Peran |
|---|---|---|---|
| `--merah-lasem` | `#A3302A` | `#E4796B` | Aksen utama (Lasem bata) |
| `--merah-lasem-deep` | `#8A2320` | `#F09B8E` | Hover aksen |
| `--indigo-lasem` | `#2C3E63` | `#8FA9D8` | Wedel pesisir (tautan, judul identitas) |
| `--soga` | `#7C5A2A` | `#CFA268` | Soga tanah (label, garis, motif, pin) |
| **`--gold`** (baru) | `#96630C` | `#E0B24A` | Aksen **langka**: drop-cap, tanda arsip, `::selection` |
| `--paper` | `#F4EDE0` | `#1A1512` | Kertas tua hangat / arang hangat |
| `--paper-raised` | `#FBF7EF` | `#241E19` | Kartu, lempeng foto |
| `--paper-sunken` | `#EBE1D0` | `#12100D` | Seksi inset |
| `--ink` | `#231A14` | `#F2E9D9` | Teks utama (tinta cokelat / gading hangat) |
| `--ink-soft` | `#5C4A3A` | `#B9A78F` | Teks sekunder |
| `--rule` | `#DCCFB8` | `#3A3129` | Garis rambut |
| `--scrim` | `#231A14` | (tak dibalik) | Veil lightbox, **selalu gelap** |

Rasio terverifikasi (terang): ink 14,67 · soft 7,23 · lasem 5,99 · wedel 9,13 · soga 5,38 ·
gold 5,20; (gelap): ink 15,03 · soft 7,75 · lasem 6,25 · wedel 7,62 · soga 7,78 · gold 9,17.
Rasio bilangan desimal: `1.05/(L1+0.05) - 1`.

**Strategi: swap NILAI saja, nama token dipertahankan.** 277 pemakaian kelas Tailwind
(`text-ink-soft`, `border-rule`, …) tetap valid; **nol rename → nol risiko regresi kelas**.
Hanya **satu token baru** (`--gold` + `--color-gold`).

**Tipografi (dua suara):** **Newsreader Variable** (serif) untuk display (`h1/h2/h3`, judul
kartu), Hanken Grotesk untuk prosa & UI, Martian Mono untuk data. Impeccable menandai
"single font families" sebagai anti-pattern — ini memperbaiki lint. Metrik serif:
h1 lh 1,1 / ls −0,015em; h2 lh 1,18 / −0,01em; h3 weight 600, lh 1,32.

**Perlakuan editorial "arsip":**
- `Figure.astro` & sampul `ArticleHeader.astro` jadi **lempeng arsip**: `frame-plate`
  (1px `border-rule` + latar `paper-raised` + padding tipis), foto di dalam. Caption serif italic.
- `ArticleHeader` punya tanda emas pendek (`h-0.5 w-12 bg-gold`) di atas `h1`.
- `Prose.astro` → prop `dropcap` → `.prose-dropcap` (drop-cap serif emas 3,4em);
  blockquote serif italic + garis `--soga`.
- `::selection` memakai `color-mix(in oklch, var(--gold) 26%, transparent)`.
- Beranda: hero `h1` serif `clamp(3rem,9vw,6.5rem)` lh `0.98` ls `−0.01em`, masker clip.

**Pipeline font:** `@fontsource-variable/newsreader` (web) + `@fontsource/newsreader` (dev).
`scripts/build-fonts.mjs` mengonversi woff2 → **TTF statis** `newsreader-{400,600,700}.ttf`
(satori menolak variable font) diregistrasi di `src/lib/og.ts` sebagai `'Newsreader Variable'`.
Favicon (`favicon.svg` + `favicon.ico` 16/32/48) ikut palet baru.

**Tiga bug tambahan ditemukan & diperbaiki saat verifikasi visual:**
1. **Judul hero tertinggal di opacity 0.** `clip-path: inset(0 0 100% 0)` ada pada elemen yang
   diobservasi IntersectionObserver → luas irisan nol → IO tak pernah menyala. Masker dipindah
   ke **anak** (`[data-reveal-clip-inner]`). Terverifikasi: `is-visible`, opacity 1, IO ratio 1.
2. **Tema gelap hilang setelah navigasi client-side.** ClientRouter menyalin semua atribut
   `<html>` dari dokumen baru; SSR `data-theme="light"` menang. Diperbaiki dengan **tidak**
   mengirim `data-theme` dari SSR, dan `ThemeToggle` menyinkronkan dari `localStorage`/OS di
   `astro:page-load` + memulihkan di `astro:before-swap`.
3. **Veil lightbox terang di mode gelap** (`backdrop:bg-ink/70` terbalik jadi nyaris putih).
   Diganti token `--scrim` yang **tidak dibalik** tema.

Juga: `will-change: auto` setelah reveal selesai (tak lagi mem-promosikan puluhan lapisan),
guard parallax `dataset.parallaxOn = 'true'` yang tadinya `''` (falsy), dan `--radius-pill`
yang hilang (`rounded-pill` undefined).

**Terbaru: verifikasi ulang total** setelah ada agent lain yang keliru masuk ke repo ini dan
memicu crash. Semua gerbang dijalankan dari nol: check **0/0/0 (80 berkas)**, lint **0
anti-pattern**, build **74 halaman**, suite **41 lulus** dengan kontras **0 gagal** di 6 halaman
× terang/gelap (45–110 pasangan per halaman). Screenshot ditinjau di `/tmp/jr-arsip/`.

---

## Redesign "Tinta & Tanah" (SELESAI 9 Okt 2026) — DITOLAK, tinggal riwayat

Permintaan pengguna berlanjut: *"kurang suka palette warnanya, mau flat minimalism, banyak
animasi, palette clean dan menarik."* Dikerjakan dengan skill **antislop** + **ui-ux-pro-max**.
Revisi ini **menggantikan** percobaan sebelumnya ("Nyala Pesisir", maroon + krem) yang ditolak,
lalu **sendiri ditolak** dan diganti "Arsip Pesisir" di atas. Riwayat dipertahankan sebagai
pelajaran: apa yang berguna dari sini adalah sistem gerak **MOTION 3** dan bug yang ditemukan.

- **Palet (flat minimalism / Swiss):** satu aksen **terracotta** `#c2410c` + netral
  near-black. Kertas putih bersih `#ffffff` (bukan krem), inset `#f5f5f4`. Peran lama
  `indigo`/`soga` menjadi netral (`#18181b`/`#52525b`). **Semua kontras WCAG AA dihitung**
  (terang: ink 17,72 · soft 7,73 · aksen 5,18; gelap: 19,06 · 7,76 · 8,79).
- **Tipografi:** **Bodoni Moda dilepas.** Satu grotesk (**Hanken Grotesk**) untuk display
  **dan** body; Martian Mono tetap untuk data. Font OG → Hanken 400/600/700.
- **Radius tajam:** kontrol 2px, kartu 4px. **Bug `rounded-pill` diperbaiki** (token hilang →
  badge `DestinasiCard` & bahan `KulinerDetailPage` kini benar-benar pil).
- **Flat:** glassmorphism header dihapus (solid + garis bawah); bayangan kartu dihapus; satu
  bayangan tersisa hanya untuk popup Leaflet (terdokumentasi DESIGN.md §Elevation).
- **Sistem gerak** (`src/styles/global.css`): `[data-reveal]` (+ `clip` mask),
  `[data-underline]`, **`[data-count]`** (counter angka `Intl.NumberFormat`; SSR = nilai final),
  **`[data-parallax]`** (hero, ≥768px, listener dibersihkan di `astro:before-swap`),
  `.canting-draw`, `.float-soft`, `.marquee-track`, dan **Astro View Transitions**.
- **Bug diperbaiki:** masker `clip-path: inset(0 0 100% 0)` dulu dipasang pada elemen yang
  diobservasi IntersectionObserver → luas irisan nol → **judul hero tertinggal di opacity 0**
  (tidak terlihat). Kini masker di elemen anak (`[data-reveal-clip-inner]`). Terverifikasi:
  `is-visible`, opacity 1, IO ratio 1.
- **Tanpa JS** → kelas `.js` tidak ada → semua konten tampil (nilai statistik = final).
- **`prefers-reduced-motion`** → reveal langsung, counter = nilai final, tanpa parallax/marquee.
- `ui-ux-pro-max` menyarankan "Glassmorphism / biru #2563EB / Poppins"; **ditolak** (default AI slop).

**Pelajaran penting:** linter Impeccable **buta pada glassmorphism/bayangan/gradien di
`.astro`/`.css`** (hanya membaca `.html`). "lint 0" **bukan** bukti flat. Audit manual:
`grep -rn "shadow\|backdrop-blur\|repeating-" src/`.

---

## Bug interaksi lintas halaman (DITEMUKAN & DIPERBAIKI 9 Okt 2026)

Redesign tadi hanya diuji dengan **memuat penuh setiap halaman**, sehingga kelas bug yang hanya
muncul saat **navigasi client-side** lolos tanpa terdeteksi. Ditemukan lewat pengujian browser
(klik tautan → verifikasi interaksi masih hidup). Lima bug nyata, semuanya sekarang dijaga uji
regresi `tests/interactions.spec.ts`:

| # | Gejala | Akar masalah | Perbaikan |
|---|---|---|---|
| 1 | Peta kosong (0 tile, 0 marker) setelah kembali ke `/peta` | skrip modul hanya berjalan sekali; DOM berganti saat navigasi | `initMap()` dipasang ulang di `astro:page-load` |
| 2 | Lightbox galeri tidak membuka setelah navigasi | sama | `bindLightbox()` dipasang ulang + penanda `dataset.bound` |
| 3 | Menu seluler mati setelah navigasi | sama | `bindMenu()` dipasang ulang |
| 4 | Tema kembali **light** setelah navigasi | ClientRouter menyalin atribut `<html>` dari dokumen baru; `data-theme` selalu `light` | sumber kebenaran `localStorage`; pulihkan di `astro:before-swap` |
| 5 | Counter menampilkan **angka negatif** (`-23.699`) | timestamp rAF bisa mendahului `performance.now()` | clamp `p` ke `[0,1]` |

Plus dua perbaikan kuatifikasi: observer ganda (`initReveal`/`initCount` dipanggil langsung
**dan** didengarkan dari `astro:page-load`), dan penanda guard `dataset.x = ''` yang *falsy*
sehingga listener terpasang dua kali (peta: *"Map container is already initialized"*).

**Cara menguji supaya kelas bug ini tidak terulang:** jangan puas dengan `page.goto()`.
Selalu klik tautan, lalu verifikasi interaksi masih hidup.

---

## Isi konten saat ini

| Koleksi | id | en | Catatan |
|---|---|---|---|
| sejarah | 4 | 4 | gerbang timur, asal nama, Lasem, Kartini+Sunan Bonang |
| budaya | 5 | 5 | batik Lasem, klenteng+masjid, seni pertunjukan, tradisi laut, kopi lelet |
| kuliner | 8 | 8 | sate srepeh, lontong tuyuhan, kelo mrico, mangut, urap latoh, dumbeg, legen, kaoya dudul |
| destinasi | 10 | 10 | pantai, museum, religi, hutan, embung |
| **galeri** | **6** | **6** | ✅ album tematik: Lasem Tiongkok Kecil, Batik Tiga Negeri, Panggung dan Warisan, Napak Tilas R.A. Kartini, Pesisir dan Pantai, Kuliner Pesisir |

**Judul ber-cover (19):** batik-tulis-lasem, klenteng-dan-masjid-lasem, lasem-tiongkok-kecil,
kartini-dan-sunan-bonang, rembang-gerbang-timur, pantai-caruban, pantai-wates, petilasan-sunan-bonang,
legen, kopi-lelet, wayang-potehi-dan-seni-pertunjukan, hutan-mangrove-rembang, klenteng-cu-an-kiong,
makam-kartini, museum-kartini, pantai-karang-jahe, lontong-tuyuhan, sate-srepeh, asal-usul-nama-rembang.

**Belum ber-cover (8, sengaja):** tradisi-laut, klenteng-gie-yong-bio, embung-lodan, dumbeg,
kaoya-dudul, kelo-mrico, mangut-manyung, urap-latoh. Tidak ada foto Commons yang benar-benar cocok;
jangan pasang foto generik.

**Koordinat peta (5 destinasi):** pantai-karang-jahe, museum-kartini, pantai-caruban,
klenteng-gie-yong-bio, hutan-mangrove-rembang. Sisanya (makam-kartini, pantai-wates,
petilasan-sunan-bonang, klenteng-cu-an-kiong, embung-lodan) belum ada koordinat yang yakin.

---

## Yang BELUM dikerjakan (prioritas untuk agent berikutnya)

### Prioritas tinggi

1. **Cover 8 judul sisanya.** Hanya bila ada foto Commons yang benar-benar cocok. Jangan
   pakai foto generik atau foto tempat lain.
2. **Koordinat 5 destinasi sisanya.** Isi **hanya bila yakin** (daftar resmi Jadesta/pemkab,
   atau OSM Nominatim). Jangan mengarang.

### Prioritas menengah

3. **Custom domain** — masih `*.workers.dev`. Bila mau domain sendiri (mis. `jelajahrembang.id`),
   ubah `site:` di `astro.config.mjs` + `public/robots.txt`, lalu deploy ulang.

### Prioritas rendah / opsional

4. **Pagefind** (pencarian statis) — rencana fase 2, belum dipasang.
5. **Submit sitemap** ke Google Search Console (`/sitemap-index.xml`).
6. **Em dash di `sources:`** — ~12 berkas konten memakai `—` sebagai pemisah label sitasi
   (mis. `Wikipedia — Topik`). Aturan "nol em dash" (AGENTS.md §6) menyasar prosa; ini metadata
   sitasi. Bila ingin konsisten penuh, ganti dengan `:` atau koma.

---

## OG image (SELESAI 9 Okt 2026)

Tiap halaman kini punya gambar Open Graph 1200×630 sendiri, dirender **saat build**
(satori → SVG → sharp → JPEG) oleh `src/lib/og.ts` + endpoint statis
`src/pages/og/[...slug].ts`. Total **86 berkas** di `dist/og/` (~2,2 MB, rata-rata ~25 KB/berkas).

- Varian **foto-forward** untuk halaman ber-cover (foto di kanan, judul di kiri).
- Varian **teks + motif batik** (garis SVG, bukan emoji) untuk halaman tanpa cover.
- `BaseHead.astro` menebak URL dari `Astro.url.pathname` lewat `ogSlugFor()` (`src/lib/og-slug.ts`);
  selalu mengeluarkan `og:image`, `og:image:width/height/alt`, dan `twitter:image`.
- Slug: `beranda`, `kuliner/sate-srepeh`, `en/destinasi/makam-kartini`, dst. (1:1 dengan pathname).

Regenerasi font (bila muka huruf berubah): `node scripts/build-fonts.mjs` (woff2 → TTF statis).

---

## Skrip bantu (baru, di `scripts/`)

Di luar `src/` sehingga tak tersentuh Content Collections/lint.

| Skrip | Fungsi |
|---|---|
| `scripts/commons-manifest.json` | Daftar berkas Commons → path lokal + judul. |
| `scripts/fetch-commons.mjs` | Unduh foto (1600 px) via `curl -4`, resumable, append `credits.json`. |
| `scripts/gen-galeri.mjs` | Hasilkan 12 berkas album galeri dari data + kredit asli. |
| `scripts/apply-covers-coords.mjs` | Sisipkan `cover`/`coverAlt`/`coords` ke frontmatter (idempoten). |
| `scripts/fix-dims.mjs` | Perbaiki `width`/`height` di `credits.json` dari berkas asli. |
| `scripts/build-fonts.mjs` | Konversi woff2 → TTF statis untuk OG (`scripts/fonts/`). |
| `scripts/README.md` | Penjelasan tiap skrip. |

Jalankan unduhan: `NODE_OPTIONS='--dns-result-order=ipv4first' node scripts/fetch-commons.mjs scripts/commons-manifest.json`

---

## Cara melanjutkan (resep praktis)

### Menambah artikel konten
1. Buat `src/content/{koleksi}/id/{slug}.md` dan `.../en/{slug}.md`.
2. `translationKey` **harus sama** di kedua berkas.
3. Isi frontmatter sesuai `src/content.config.ts`.
4. `npm run build` → halaman indeks & detail otomatis terbentuk.

### Menambah album galeri
Berkas `src/content/galeri/{id,en}/<album>.md`; `photos: [{src, alt, caption?, credit?}]`.
Nama berkas, `translationKey`, `order`, dan urutan `src` **identik** antar bahasa. Foto di
`src/assets/galeri/<album>/`. Halaman `/galeri/` dan lightbox sudah menangani sisanya.

### Menambah foto (Wikimedia Commons)
Pakai `scripts/fetch-commons.mjs` (tambah entri ke manifest). Atau manual:
1. `curl -4 -s -H "User-Agent: jelajah-rembang/0.1" "https://commons.wikimedia.org/w/api.php?action=query&format=json&titles=File:NAMA&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=1600"`
2. Unduh `thumburl` (buang query `?utm_…`) ke `src/assets/...`.
3. Catat atribusi di `src/assets/credits.json` (dimensi dari `file <berkas>`, bukan `thumbwidth` API).
4. Pasang `cover:`/`photos[].src` (path relatif dari berkas konten).

> ⚠️ Node `fetch` diblokir di environment ini. Pakai **`curl -4`** untuk jaringan.
> Untuk wrangler/npm: `NODE_OPTIONS='--dns-result-order=ipv4first'`.
> Wikimedia membatasi laju: jeda ~9 s antar permintaan, batch judul ≤20.

### Deploy
```bash
NODE_OPTIONS='--dns-result-order=ipv4first' npm run build
NODE_OPTIONS='--dns-result-order=ipv4first' CI=true WRANGLER_SEND_METRICS=false npx wrangler deploy
```
Cloudflare: akun `b3646e9d901e18b382b3f961d2b98f69`. Worker aktif: `jelajah-rembang`.
Worker lama `rembang-web` **sudah dihapus** (9 Okt 2026).

### Verifikasi sebelum klaim selesai
```bash
NODE_OPTIONS='--dns-result-order=ipv4first' npm run check     # 0 error
node /home/zzdree/ANDREAS/impeccable/cli/bin/cli.js detect src/    # 0 anti-pattern
NODE_OPTIONS='--dns-result-order=ipv4first' npm run build      # 74 halaman
NODE_OPTIONS='--dns-result-order=ipv4first' npm test           # seluruh suite lulus
```

---

## Jebakan yang sudah ditemui (jangan terulang)

1. **IPv6 mati di laptop dev ini.** Node `fetch` dan `wrangler` gagal/hang tanpa prefix
   IPv4. Selalu `NODE_OPTIONS='--dns-result-order=ipv4first'`. `curl -6` gagal instan → pakai `curl -4`.
   `gh` butuh `GODEBUG=netdns=cgo`.

2. **Tailwind v4 ≠ v3.** Tidak ada `tailwind.config.ts`. Jangan ikut tutorial lama.

3. **Astro 7 lebih baru dari contoh internet.** Ikuti pola repo ini, bukan blog Astro 5.

4. **YAML frontmatter:** nilai yang mengandung `": "` harus dikutip, atau YAML membacanya
   sebagai objek (pernah mematahkan 74 baris `sources`). Kutip bila ada titik dua + spasi.

5. **Playwright browser mismatch.** Playwright 1.64 minta build 1248, yang terpasang 1234.
   Sudah di-symlink: `~/.cache/ms-playwright/chromium-1248 → chromium-1234`. Bila error
   "Executable doesn't exist", buat ulang symlink atau `npx playwright install chromium`.

6. **Preview server basi.** `astro preview` menyimpan pid; bila folder di-rename, server
   lama menyajikan `dist` lama. Matikan dulu (`kill <pid>` pada port 4321) lalu start ulang.

7. **`@astrojs/check` tidak mendukung TypeScript 7.** TypeScript di-pin ke `6.0.3`.

8. **`BaseLayout` wajib membungkus setiap halaman.** Bila `<title>` hilang, cek pembungkusan layout.

9. **`file` melaporkan density "1x1".** Saat membaca dimensi gambar dari `file`, cocokkan
   `(\d+)x(\d+), components` — jangan regex pertama (bisa menangkap density 1x1).

10. **Rate limit Wikimedia.** Burst beberapa permintaan → HTTP 429. Jeda 9 s + backoff + `maxlag=5`.

11. **satori & path font saat build.** `import.meta.url` menunjuk ke chunk di `dist/`, bukan
    root proyek. Pakai `process.cwd()` untuk menemukan `scripts/fonts/`. Dan satori **menolak
    variable font** (tabel `fvar` bikin opentype.js error); harus TTF statis (per-bobot).

12. **`image` prop `BaseHead`/`BaseLayout` sudah dihapus.** OG kini selalu otomatis; jangan
    tambah `image={...}` lagi.

13. **Skrip modul `.astro` hanya berjalan SEKALI.** View Transitions mengganti DOM setiap
    navigasi, jadi listener yang dipasang di badan skrip mati setelah pindah halaman.
    Gejala yang pernah terjadi: menu seluler, toggle tema, lightbox galeri, dan peta mati
    setelah navigasi. Selalu pasang ulang lewat `astro:page-load` (juga dipakai untuk
    memulihkan elemen yang baru dibuat), dan beri penanda guard di elemen (bukan variabel
    modul, karena modul tidak ikut di-scope ulang).

14. **`astro:page-load` juga menyala saat muat awal.** Jangan panggil `initX()` langsung
    *dan* mendengarkan event itu: IntersectionObserver jadi ganda dan memperebutkan elemen.
    Cukup `addEventListener` saja.

15. **Penanda guard harus berisi string tak-kosong.** `el.dataset.bound = ''` itu *falsy*,
    sehingga `if (el.dataset.bound) return;` tak pernah menyala. Akibat nyata: tombol memberi
    dua listener → satu klik membuka lalu langsung menutup panel (tampak seperti "tombol rusak"),
    dan peta melempar **"Map container is already initialized"**. Pakai `'true'`.

16. **View Transitions menimpa atribut `<html>`.** ClientRouter menyalin atribut dari dokumen
    baru dan hanya mempertahankan `data-astro-transition*`; `data-theme` karena itu selalu
    kembali `light` meski pengguna memilih gelap dan `localStorage` sudah benar. Sumber
    kebenaran harus `localStorage`/preferensi OS, bukan DOM. Pulihkan di `astro:before-swap`
    supaya tidak ada kedipan terang.

17. **Timestamp `requestAnimationFrame` bisa mendahului `performance.now()`** saat frame
    pertama. Counter yang memakai `(now - start)` menghasilkan angka **negatif** (`-23.699`).
    Clamp ke `Math.max(0, …)`.

---

## Keputusan yang sudah diambil (jangan diubah tanpa alasan)

| Keputusan | Alasan |
|---|---|
| Astro, bukan Next.js | Situs 100% konten; Astro = HTML statis, nol JS default, paling cepat |
| Cloudflare Workers static assets, bukan Pages | Panduan Cloudflare 2026 untuk proyek baru |
| Tanpa database | Konten = berkas Markdown di repo |
| Tanpa framework UI | 4 island vanilla TS cukup; bundle tetap kecil |
| Font Newsreader (display serif) + Hanken Grotesk (body) + Martian Mono (data) | Register arsip/sejarah butuh serif; satu grotesk saja terdengar datar dan memicu lint "single font families". Fraunces ada di daftar larangan Impeccable |
| Palet "Arsip Pesisir" (kertas tua + tinta cokelat + batik Lasem) | Palet flat dingin sebelumnya ditolak pengguna sebagai "jelek & kurang untuk website sejarah". Warm editorial = register yang benar untuk situs warisan |
| Swap nilai token, pertahankan nama | 277 pemakaian kelas Tailwind tetap valid; nol risiko regresi kelas |
| Nama "Jelajah Rembang" | Dipilih pengguna; folder & repo sudah konsisten |
| Foto Wikimedia Commons | Lisensi bebas + atribusi; mudah diganti foto asli nanti |
| Galeri tematik-warisan (6 album) | Sejalan dengan posisi "arsip hidup", bukan galeri generik |

---

## Aset & kredensial

- **Cloudflare account ID:** `b3646e9d901e18b382b3f961d2b98f69` (env `CLOUDFLARE_ACCOUNT_ID`)
- **GitHub:** `zzdree` (gh CLI aktif)
- **Impeccable CLI:** `/home/zzdree/ANDREAS/impeccable/cli/bin/cli.js`
- **Foto + atribusi:** `src/assets/credits.json`, halaman `/kredit`

---

## Kontak & konteks pengguna

Pemilik proyek: **Andreas** (`zzdree`). Proyek lain di ekosistem yang sama:
`gia-deliksari-web` (Next.js + D1, referensi konvensi), `cbt-online`, `zzluxora-v10`.
Workflow 2 laptop (Linux dev ↔ Windows utama) via GitHub sebagai single source of truth.

**Bahasa komunikasi: Indonesia.** Pengguna menulis dalam bahasa Indonesia santai.
