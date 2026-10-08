# HANDOFF — Jelajah Rembang

> Dokumen serah-terima untuk agent berikutnya. Terakhir diperbarui **9 Oktober 2026**.
> Baca `AGENTS.md` dulu (aturan wajib), lalu `PRODUCT.md` (konteks produk) dan `DESIGN.md` (token).

---

## Status: SELESAI & LIVE ✅

Galeri terisi, cover & koordinat dilengkapi, worker lama dibersihkan. Working tree git
berisi perubahan yang siap di-commit (lihat §Git).

| Metrik | Nilai |
|---|---|
| Halaman terbangun | **74** |
| Artikel konten | **54** (27 judul × 2 bahasa) |
| Album galeri | **6** (12 berkas id+en), **37 foto** |
| Foto (Wikimedia Commons) | **52** berkas (51 entri `credits.json`) |
| Judul ber-cover | **19** dari 27 |
| Destinasi ber-koordinat | **5** dari 10 |
| `astro check` | **0 error / 0 warning / 0 hint** |
| Impeccable design lint | **0 anti-pattern** |
| Playwright smoke test | **13/13 lulus** |
| Gambar OG (per halaman) | **86** (`/og/<slug>.jpg`, 1200×630) |
| Versi Cloudflare aktif | `03a3427b-470b-4409-a925-add2aab7ef9d` |

**Live:** https://jelajah-rembang.zzdree.workers.dev
**Repo:** https://github.com/zzdree/jelajah-rembang

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
`src/pages/og/[...slug].ts`. Total **86 berkas** di `dist/og/` (~2,4 MB, ~23 KB/berkas).

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
NODE_OPTIONS='--dns-result-order=ipv4first' npm test           # 13/13
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

---

## Keputusan yang sudah diambil (jangan diubah tanpa alasan)

| Keputusan | Alasan |
|---|---|
| Astro, bukan Next.js | Situs 100% konten; Astro = HTML statis, nol JS default, paling cepat |
| Cloudflare Workers static assets, bukan Pages | Panduan Cloudflare 2026 untuk proyek baru |
| Tanpa database | Konten = berkas Markdown di repo |
| Tanpa framework UI | 3 island vanilla TS cukup; bundle tetap kecil |
| Font Bodoni Moda/Hanken Grotesk/Martian Mono | Fraunces ada di daftar larangan Impeccable; tiga ini tidak |
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
