---
schemaVersion: 2
name: Kain Tiga Negeri
description: Sistem desain untuk situs profil Kabupaten Rembang — sehelai kain batik tulis Lasem di atas kertas pesisir yang hangat.

colors:
  # --- Tiga tinta (the three negeri) ---
  merah-lasem: 'oklch(47% 0.155 26)'
  merah-lasem-deep: 'oklch(40% 0.15 26)'
  indigo-lasem: 'oklch(38% 0.088 258)'
  soga: 'oklch(49% 0.07 62)'

  # --- Permukaan terang ---
  paper: 'oklch(96.5% 0.011 74)'
  paper-raised: 'oklch(98.5% 0.007 74)'
  paper-sunken: 'oklch(93% 0.014 72)'
  ink: 'oklch(24% 0.024 58)'
  ink-soft: 'oklch(43% 0.02 60)'
  rule: 'oklch(86% 0.016 68)'
  focus: 'oklch(55% 0.15 258)'

  # --- Permukaan gelap ("Malam Lasem") ---
  paper-dark: 'oklch(16.5% 0.012 62)'
  paper-dark-raised: 'oklch(21.5% 0.014 62)'
  paper-dark-sunken: 'oklch(12.5% 0.01 62)'
  ink-dark: 'oklch(93% 0.012 74)'
  ink-soft-dark: 'oklch(72% 0.016 70)'
  rule-dark: 'oklch(30% 0.014 62)'
  merah-lasem-dark: 'oklch(67% 0.148 27)'
  indigo-lasem-dark: 'oklch(70% 0.1 255)'
  soga-dark: 'oklch(74% 0.082 66)'

typography:
  display:
    fontFamily: 'Bodoni Moda Variable'
    fontSize: 'clamp(2.75rem, 6vw, 4.5rem)'
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: '-0.02em'
  h1:
    fontFamily: 'Bodoni Moda Variable'
    fontSize: 'clamp(2rem, 4.5vw, 3rem)'
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: '-0.02em'
  h2:
    fontFamily: 'Bodoni Moda Variable'
    fontSize: '1.75rem'
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: '-0.01em'
  h3:
    fontFamily: 'Hanken Grotesk Variable'
    fontSize: '1.25rem'
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: 'Hanken Grotesk Variable'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: 'Hanken Grotesk Variable'
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: 'Hanken Grotesk Variable'
    fontSize: '0.75rem'
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: '0.06em'
  data:
    fontFamily: 'Martian Mono Variable'
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.4
  micro:
    fontFamily: 'Hanken Grotesk Variable'
    fontSize: '0.625rem'
    fontWeight: 600
    lineHeight: 1.4

rounded:
  control: '8px'
  card: '14px'
  hairline: '2px'
  pill: '999px'

spacing:
  unit: '0.25rem'
  section: 'clamp(4.5rem, 9vw, 8rem)'
  content: '72rem'
  prose: '46rem'

components:
  button-primary:
    backgroundColor: '{colors.merah-lasem}'
    textColor: '{colors.paper-raised}'
    rounded: '{rounded.control}'
    padding: '0.75rem 1.25rem'
  card:
    backgroundColor: '{colors.paper-raised}'
    textColor: '{colors.ink}'
    rounded: '{rounded.card}'
    border: '1px solid {colors.rule}'
  nav-link:
    textColor: '{colors.ink-soft}'
    fontSize: '0.875rem'
  stat-block:
    fontFamily: '{typography.data.fontFamily}'
    textColor: '{colors.ink}'
---

# Kain Tiga Negeri

Sistem desain untuk situs profil **Kabupaten Rembang**. North Star: *sehelai kain batik tulis Lasem yang dibentangkan di atas kertas pesisir yang hangat.*

## Overview

Identitas Rembang adalah tumbukan yang spesifik: **Batik Tiga Negeri** — tiga negeri dalam satu kain (merah Lasem, biru Pekalongan, soga Solo) — yang dijahit dari sinkretisme Tionghoa–Jawa di sebuah pesisir yang bekerja. Situs ini harus terasa seperti **mengamati sehelai kain**, bukan seperti menjelajahi template pariwisata.

Lima gagasan yang mengikat seluruh keputusan visual:

1. **Tiga tinta, satu dasar.** Merah Lasem (*getih pitik*), indigo wedel, dan soga kulit tingi adalah satu-satunya warna jenuh, dan mereka berperilaku seperti zat warna — muncul sebagai *tinta* di atas kertas, tidak pernah sebagai bidang besar atau gradasi.
2. **Kertas pesisir hangat, bukan putih.** Dasar halaman adalah kertas yang hangat seperti pasir yang diputihkan matahari. Kartu adalah kertas yang sama, diangkat sedikit dan diberi garis rambut — bukan kotak putih di atas abu-abu.
3. **Suara pers untuk sejarah.** Didone berkontras tinggi membawa judul — mengacu pada pers Jawa era Kartini dan surat-suratnya. Register editorial, hanya untuk tampilan.
4. **Geometri kain adalah ornamen.** Motif batik (Latohan, Watu Pecah, kisi Lokchan) hadir sebagai **geometri garis yang digambar sendiri** — SVG, garis, dan satu momen gerak — tidak pernah sebagai tekstur foto atau "latar pola batik" yang diulang di belakang teks.
5. **Tionghoa–Jawa adalah isi, bukan kostum.** Tanpa palet "restoran Tionghoa" merah-emas, tanpa emoji naga, tanpa kaligrafi palsu. Sinkretisme tampil dalam *struktur* — klenteng ↔ masjid ↔ wihara dalam satu rute, Cheng Ho bersebelahan dengan Sunan Bonang dalam garis waktu.

Mode pengunjung: **Read** (utama) untuk semua artikel; **Experience** untuk galeri dan peta.

Tema terang adalah utama — ini adegan baca arsip di siang hari di pesisir. Tema gelap ("Malam Lasem") adalah tema kedua yang sungguhan, bukan terang yang dibalik: arang hangat, bukan hitam, dan ketiga tinta *naik* kecerahan alih-alih didesaturasi.

## Colors

Semua warna dinyatakan dalam OKLCH. Tidak ada `#000` atau `#fff` di mana pun — bahkan teks tergelap adalah `oklch(24% 0.024 58)`.

### Tiga tinta (peran jenuh — maksimum 10% dari viewport)

| Token | Nilai (terang) | Nilai (gelap) | Peran |
|---|---|---|---|
| `merah-lasem` | `oklch(47% 0.155 26)` | `oklch(67% 0.148 27)` | **Aksi utama & identitas.** Tombol utama, item nav aktif, pin peta kategori pantai. |
| `indigo-lasem` | `oklch(38% 0.088 258)` | `oklch(70% 0.1 255)` | **Identitas & data.** Judul seksi, tautan, pin religi, fokus ring. |
| `soga` | `oklch(49% 0.07 62)` | `oklch(74% 0.082 66)` | **Aksen ketiga.** Garis, label kecil, pin kategori alam. |

### Permukaan & teks

| Peran | Terang | Gelap |
|---|---|---|
| `--paper` (dasar halaman) | `oklch(96.5% 0.011 74)` | `oklch(16.5% 0.012 62)` |
| `--paper-raised` (kartu) | `oklch(98.5% 0.007 74)` | `oklch(21.5% 0.014 62)` |
| `--paper-sunken` (inset, kroma peta) | `oklch(93% 0.014 72)` | `oklch(12.5% 0.01 62)` |
| `--ink` (teks utama) | `oklch(24% 0.024 58)` | `oklch(93% 0.012 74)` |
| `--ink-soft` (teks sekunder) | `oklch(43% 0.02 60)` | `oklch(72% 0.016 70)` |
| `--rule` (garis rambut) | `oklch(86% 0.016 68)` | `oklch(30% 0.014 62)` |
| `--focus` (cincin fokus) | `oklch(55% 0.15 258)` | `oklch(70% 0.1 255)` |

### Aturan pakai

- Tinta jenuh **≤10% dari viewport**. Ia menandai aksi, item nav aktif, identitas sebuah seksi, dan pin peta — tidak lebih.
- **Jangan pernah** menaruh teks abu di atas permukaan berwarna. `--ink-soft` di-tint dari rona kertas; di atas tombol merah, teks sekunder men-tint dari merah, bukan dari abu.
- **Satu** warna aksi utama per tampilan. `merah-lasem` adalah aksi; indigo dan soga adalah *identitas dan data*, bukan CTA yang bersaing.
- Kartu dipisahkan oleh **langkah tonal + garis rambut 1px**, tidak pernah garis **dan** bayangan lebar sekaligus (jebakan *ghost card*).

## Typography

Tiga muka huruf, masing-masing satu tugas. Tidak ada yang masuk daftar larangan font Impeccable.

| Peran | Muka huruf | Alasan |
|---|---|---|
| **Display** | **Bodoni Moda** (variabel) | Didone berkontras tinggi. Struktur garis-rambutnya adalah "suara pers" — era Kartini dicetak dalam Didone. Terbaca sebagai *arsip*, bukan sebagai *startup*. |
| **Body / UI** | **Hanken Grotesk** (variabel) | Grotesk humanis yang hangat dengan aperture terbuka. Menahan prosa Indonesia yang panjang dan label UI kecil. |
| **Data** | **Martian Mono** (variabel) | **Hanya** untuk koordinat peta, angka ketinggian, tabel luas/demografi, dan angka tabular. Ini pemakaian data yang sah, bukan mono sebagai kostum. Tidak pernah menyetel judul atau label. |

Skala (semua komponen mendarat pada satu langkah):

```
display  clamp(2.75rem, 6vw, 4.5rem)   lh 1.04   tracking -0.02em   Bodoni Moda 600
h1       clamp(2rem, 4.5vw, 3rem)      lh 1.10   tracking -0.02em   Bodoni Moda 600
h2       1.75rem                        lh 1.18   tracking -0.01em   Bodoni Moda 600
h3       1.25rem                        lh 1.30                      Hanken Grotesk 600
body     1rem                           lh 1.65   measure 68ch       Hanken Grotesk 400
lead     1.125rem                       lh 1.60                      Hanken Grotesk 400
label    0.75rem                        lh 1.40   tracking 0.06em    Hanken Grotesk 600 (huruf besar, hemat)
data     0.875rem                       lh 1.40                      Martian Mono 400 (tabular-nums)
2xs      0.625rem                       lh 1.40                      Hanken Grotesk 600 (metadata mikro)
```

Disiplin yang ditegakkan:

- Measure body **65–75ch** (`--measure-prose: 68ch`). Kolom prosa dibatasi; hanya hero dan galeri yang full-bleed.
- **Lebih banyak ruang di atas judul daripada di bawah** (`--space-before-heading: 2.75rem`, `--space-after-heading: 0.875rem`).
- Batas bawah tracking display **−0.04em**; kita di −0.02em.
- Tanpa gradient text. Penekanan hanya lewat bobot atau ukuran.
- Tanpa eyebrow/kicker di atas setiap judul.

## Layout

- Lebar konten `72rem` (publik), `46rem` (prosa).
- Gutter `clamp(1.25rem, 4vw, 3rem)`.
- Irama seksi vertikal `clamp(4.5rem, 9vw, 8rem)`.
- Grid memakai `minmax()` dan `auto-fit`, bukan kolom kaku.
- Setiap halaman indeks memakai tata letak yang **berbeda secara struktural**: sejarah = garis waktu vertikal; budaya = dua kolom berkode tinta; kuliner = daftar padat mengutamakan gambar; destinasi = hibrida peta + kartu. Tidak pernah satu grid kartu identik untuk semua.

## Elevation & Depth

Kedalaman dideklarasikan sekali.

- **Diam:** garis rambut 1px `--rule` + satu langkah tonal. Tanpa bayangan.
- **Mengambang** (kontrol peta, lightbox, nav seluler): bayangan lembut ber-offset — `0 10px 30px -12px oklch(24% 0.024 58 / 0.35)`.
- Tidak pernah glow ber-offset-nol, tidak pernah bayangan blok ber-offset keras, tidak pernah garis **dan** bayangan lebar bersamaan.

## Shapes

- Radius: kontrol `8px`, kartu `14px`, pil `999px`.
- Kartu tetap 12–16px — tanpa pembulatan berlebihan.
- Garis rambut 1px sebagai pemisah; **tanpa** border garis-samping >1px.
- Motif batik sebagai geometri garis SVG: `stroke` 1–2px, `fill: none`, warna tinta.

## Components

- **Button utama** — latar `merah-lasem`, teks `paper-raised`, radius `control`. Keadaan: hover (gelapkan ke `merah-lasem-deep`), active, focus-visible (cincin `--focus`), disabled (opasitas 0.5 + kursor not-allowed).
- **Card** — latar `paper-raised`, teks `ink`, radius `card`, border 1px `rule`. Empat varian berbeda per tipe konten (sejarah/budaya/kuliner/destinasi) — berbagi token, berbeda struktur informasi.
- **Nav link** — teks `ink-soft`, 0.875rem; aktif = `merah-lasem` + garis bawah 2px.
- **Stat block** — `Martian Mono`, angka tabular, label kecil di atas nilai.
- **Figure** — `<figure>` + `<figcaption>`, gambar `<Image>` dengan rasio terkunci.
- **Timeline** (sejarah) — penanda era + tahun dalam `Martian Mono`, garis vertikal `rule`.
- **Callout** — latar `paper-sunken`, border kiri 1px `soga` (bukan 4px).

## Do's and Don'ts

**Lakukan:**

- Tint setiap netral dari rona kertas/soga. Tidak ada abu murni.
- Jaga measure prosa di 65–75ch.
- Gunakan langkah tonal + garis rambut untuk memisahkan permukaan.
- Beri lebih banyak ruang di atas judul daripada di bawah.
- Tema permukaan browser: `::selection`, `caret-color`, scrollbar, `:focus-visible`.
- Biarkan satu momen gerak ("Canting Draw") menjadi satu-satunya animasi di situs.

**Jangan:**

- Jangan pakai Inter, Roboto, sistem default, atau font yang ada di daftar larangan Impeccable (termasuk Fraunces, Plus Jakarta Sans, Space Grotesk, Geist).
- Jangan taruh teks abu di atas warna.
- Jangan pakai `#000`/`#fff` murni.
- Jangan sarangkan kartu di dalam kartu.
- Jangan pakai grid kartu identik untuk semua seksi.
- Jangan pasang eyebrow/kicker di atas setiap judul.
- Jangan pakai penanda seksi bernomor, gradient text, glassmorphism.
- Jangan pakai border garis-samping >1px atau bayangan offset keras.
- Jangan pakai easing bounce/elastic.
- Jangan pakai emoji sebagai ikon; jangan pakai mono sebagai kostum.
- Jangan pakai foto stok pantai daerah lain dan menyebutnya "Pantai Karang Jahe".
