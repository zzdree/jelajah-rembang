# HANDOFF — Jelajah Rembang

> Dokumen serah-terima untuk agent berikutnya. Terakhir diperbarui **9 Oktober 2026**.
> Baca `AGENTS.md` dulu (aturan wajib), lalu `PRODUCT.md` (konteks produk) dan `DESIGN.md` (token).

---

## Status: SELESAI & LIVE ✅

Proyek dibangun penuh dalam satu sesi. Tidak ada pekerjaan yang setengah jalan.
Working tree git **bersih**; semua sudah di-commit dan di-push ke `main`.

| Metrik | Nilai |
|---|---|
| Halaman terbangun | **74** |
| Artikel konten | **54** (27 judul × 2 bahasa) |
| Foto (Wikimedia Commons) | **15** |
| `astro check` | **0 error** |
| Impeccable design lint | **0 anti-pattern** |
| Playwright smoke test | **11/11 lulus** |
| Commit terakhir | `ff9e092` refactor: ganti nama proyek menjadi Jelajah Rembang |

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
| **galeri** | **0** | **0** | ⚠️ **KOSONG** — halaman `/galeri/` menampilkan keadaan kosong yang elegan |

**Cover foto terpasang pada 9 judul** (batik-tulis-lasem, klenteng-dan-masjid-lasem,
lasem-tiongkok-kecil, kartini-dan-sunan-bonang, rembang-gerbang-timur, pantai-caruban,
pantai-wates, petilasan-sunan-bonang, legen). Sisanya belum punya foto.

**Koordinat peta hanya 2 destinasi** (pantai-karang-jahe, museum-kartini) — sengaja,
karena hanya itu yang koordinatnya yakin. Sisanya tidak dipasang pin agar tidak mengarang.

---

## Yang BELUM dikerjakan (prioritas untuk agent berikutnya)

### Prioritas tinggi

1. **Galeri masih kosong.** Koleksi `galeri` ada skemanya (`photos[]`) tapi belum ada
   berkas. Cara mengisi: buat `src/content/galeri/id/{album}.md` + `en/{album}.md`
   dengan `translationKey` sama dan array `photos: [{src, alt, caption?, credit?}]`.
   Foto taruh di `src/assets/galeri/{album}/`. Unduh dari Wikimedia Commons
   (lihat §Cara unduh foto di bawah) dan catat atribusi di `credits.json`.
   Halaman `/galeri/` sudah siap menerima (lightbox `<dialog>` sudah jadi).

2. **Cover foto untuk 18 judul yang belum punya.** Cari di Wikimedia Commons;
   bila tidak ada yang layak, **jangan pakai foto generik** — biarkan tanpa cover
   (kartu sudah menangani ketiadaan cover dengan baik).

3. **Koordinat destinasi.** 8 destinasi belum ada `coords`. Isi **hanya bila yakin**
   (mis. dari daftar resmi Jadesta/pemkab). Jangan mengarang. Setelah diisi, marker
   peta otomatis muncul.

### Prioritas menengah

4. **Worker lama `rembang-web.zzdree.workers.dev` masih hidup** dengan versi lama.
   Hapus lewat dashboard Cloudflare → Workers & Pages → `rembang-web` → Delete.
   (Butuh konfirmasi pengguna; jangan hapus tanpa izin.)

5. **Custom domain** — pengguna memilih `*.workers.dev` dulu. Bila nanti mau domain
   sendiri (mis. `jelajahrembang.id`), ubah `site:` di `astro.config.mjs`, `robots.txt`,
   lalu deploy ulang.

6. **OG image khusus per halaman.** Sekarang belum ada `og:image` di halaman tanpa cover.
   Bisa dibuat endpoint OG dinamis (`src/pages/og/[...].png.ts`) bila diinginkan.

### Prioritas rendah / opsional

7. **Pagefind** (pencarian statis) — rencana fase 2, belum dipasang.
8. **Sebaran pin peta di `/peta/`** — tambah filter kategori bila destinasi bertambah banyak.
9. **Sitemap** sudah otomatis; tinggal submit ke Google Search Console.

---

## Cara melanjutkan (resep praktis)

### Menambah artikel konten
1. Buat `src/content/{koleksi}/id/{slug}.md` dan `.../en/{slug}.md`.
2. `translationKey` **harus sama** di kedua berkas.
3. Isi frontmatter sesuai `src/content.config.ts`.
4. `npm run build` → halaman indeks & detail otomatis terbentuk.

### Menambah foto (Wikimedia Commons)
1. Cari: `curl -4 -s -H "User-Agent: jelajah-rembang/0.1" "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=filetype:bitmap%20Rembang&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|extmetadata|size"`
2. Unduh `thumburl` (lebar ~1600) ke `src/assets/...`.
3. Catat `artist`, `license`, `source` ke `src/assets/credits.json`.
4. Pasang `cover: ../../assets/...` di frontmatter (path relatif dari berkas konten).

> ⚠️ Node `fetch` diblokir di environment ini. Pakai **`curl`** untuk permintaan jaringan,
> dan prefix `-4` (IPv4). Untuk wrangler/npm: `NODE_OPTIONS='--dns-result-order=ipv4first'`.

### Deploy
```bash
NODE_OPTIONS='--dns-result-order=ipv4first' npm run build
NODE_OPTIONS='--dns-result-order=ipv4first' CI=true WRANGLER_SEND_METRICS=false npx wrangler deploy
```
Cloudflare: akun `b3646e9d901e18b382b3f961d2b98f69`. Worker: `jelajah-rembang`.

### Verifikasi sebelum klaim selesai
```bash
NODE_OPTIONS='--dns-result-order=ipv4first' npm run check     # 0 error
node /home/zzdree/ANDREAS/impeccable/cli/bin/cli.js detect src/    # 0 anti-pattern
NODE_OPTIONS='--dns-result-order=ipv4first' npm run build      # 74+ halaman
NODE_OPTIONS='--dns-result-order=ipv4first' npm test           # 11/11
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
   Jangan naikkan tanpa memeriksa peer-nya.

8. **`BaseLayout` wajib membungkus setiap halaman.** Pernah lupa di `HomePage.astro`
   → beranda kehilangan seluruh `<head>`. Bila `<title>` hilang, cek pembungkusan layout.

---

## Keputusan yang sudah diambil (jangan diubah tanpa alasan)

| Keputusan | Alasan |
|---|---|
| Astro, bukan Next.js | Situs 100% konten; Astro = HTML statis, nol JS default, paling cepat |
| Cloudflare Workers static assets, bukan Pages | Panduan Cloudflare 2026 untuk proyek baru; perintah `wrangler deploy` sama |
| Tanpa database | Tidak butuh; konten = berkas Markdown di repo |
| Tanpa framework UI | 3 island vanilla TS cukup; bundle tetap kecil |
| Font Bodoni Moda/Hanken Grotesk/Martian Mono | **Fraunces ada di daftar larangan Impeccable**; tiga ini tidak |
| Nama "Jelajah Rembang" | Dipilih pengguna; folder & repo sudah konsisten |
| Foto Wikimedia Commons | Lisensi bebas + atribusi; mudah diganti foto asli nanti |

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
