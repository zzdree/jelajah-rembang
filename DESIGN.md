---
schemaVersion: 2
name: Tinta & Tanah
description: Sistem desain untuk situs profil Kabupaten Rembang — flat minimalism Swiss: kertas putih, satu aksen terracotta, tipografi grotesk tunggal.

colors:
  # --- Satu aksen ---
  merah-lasem: '#c2410c'
  merah-lasem-deep: '#9a3412'

  # --- Netral (menggantikan peran lama indigo & soga) ---
  indigo-lasem: '#18181b'
  soga: '#52525b'

  # --- Permukaan terang ---
  paper: '#ffffff'
  paper-raised: '#ffffff'
  paper-sunken: '#f5f5f4'
  ink: '#18181b'
  ink-soft: '#52525b'
  rule: '#e4e4e7'
  focus: '#c2410c'
  scrim: '#09090b'

  # --- Permukaan gelap ---
  paper-dark: '#09090b'
  paper-dark-raised: '#18181b'
  paper-dark-sunken: '#060607'
  ink-dark: '#fafafa'
  ink-soft-dark: '#a1a1aa'
  rule-dark: '#27272a'
  merah-lasem-dark: '#fb923c'
  indigo-lasem-dark: '#fafafa'
  soga-dark: '#a1a1aa'

typography:
  display:
    fontFamily: 'Hanken Grotesk Variable'
    fontSize: 'clamp(3rem, 9vw, 6.5rem)'
    fontWeight: 700
    lineHeight: 0.93
    letterSpacing: '-0.03em'
  h1:
    fontFamily: 'Hanken Grotesk Variable'
    fontSize: 'clamp(2rem, 4.5vw, 3rem)'
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: '-0.03em'
  h2:
    fontFamily: 'Hanken Grotesk Variable'
    fontSize: '1.75rem'
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: '-0.02em'
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
    letterSpacing: '0.08em'
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
  control: '2px'
  card: '4px'
  hairline: '2px'
  pill: '9999px'

spacing:
  unit: '0.25rem'
  section: 'clamp(4.5rem, 9vw, 8rem)'
  content: '72rem'
  prose: '68ch'

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

# Tinta & Tanah

Sistem desain untuk situs profil **Kabupaten Rembang**. North Star: *halaman kertas putih
tempat satu tinta terracotta menandai apa yang penting, dan semua sisanya adalah ruang.*

## Overview

Revisi 9 Okt 2026 menggantikan palet hangat "Nyala Pesisir" dengan **flat minimalism / Swiss
style**: netral jernih, satu aksen, tipografi grotesk tunggal, tanpa gradien, tanpa
glassmorphism, tanpa bayangan. Perubahan ini menjawab permintaan pengguna agar situs terasa
"clean dan menarik", bukan hangat-kusam.

Lima gagasan yang mengikat keputusan visual:

1. **Satu aksen, bukan tiga tinta.** Terracotta (`merah-lasem`) adalah satu-satunya warna
   jenuh. Ia menandai aksi dan identitas; tak ada warna jenuh kedua yang bersaing.
2. **Kertas putih, bukan krem.** Dasar halaman adalah putih bersih. Pemisahan permukaan
   dilakukan lewat **langkah tonal** (`paper` / `paper-sunken`) dan **garis rambut 1px**, bukan
   lewat bayangan atau latar berwarna.
3. **Suara Swiss untuk arsip.** Satu keluarga grotesk (Hanken Grotesk) membawa judul dan prosa.
   Hierarki dibangun dari **bobot dan ukuran**, bukan dari pergantian muka huruf.
4. **Geometri kain adalah ornamen.** Motif batik (Kawung, Truntum, Latohan) hadir sebagai
   **geometri garis SVG yang digambar sendiri** — bukan tekstur foto, bukan pola yang diulang
   di belakang teks.
5. **Tionghoa–Jawa adalah isi, bukan kostum.** Tanpa palet merah-emas, tanpa emoji naga,
   tanpa kaligrafi palsu. Sinkretisme tampil dalam *struktur* (klenteng ↔ masjid ↔ wihara).

Tema terang adalah utama. Tema gelap adalah tema kedua yang sungguhan (arang netral, bukan
hangat), dengan aksen yang *naik* kecerahan. Keduanya dikendalikan token yang sama.

## Colors

Flat minimalism: **satu aksen + netral**. Nilai dinyatakan dalam heks untuk sinkron 1:1 dengan
`src/styles/global.css`. Putih murni `#ffffff` **diperbolehkan** (ini flat paper, bukan krem).

### Aksen (peran jenuh — maksimum ~8% dari viewport)

| Token | Terang | Gelap | Peran |
|---|---|---|---|
| `merah-lasem` | `#c2410c` | `#fb923c` | **Aksen tunggal.** Tombol utama, item nav aktif, tautan aksi, pin peta, cincin fokus. |
| `merah-lasem-deep` | `#9a3412` | `#fdba74` | Hover/active aksen (putih di atasnya 7,31:1). |

### Netral (menggantikan peran lama `indigo` & `soga`)

| Token | Terang | Gelap | Peran |
|---|---|---|---|
| `indigo-lasem` | `#18181b` (= ink) | `#fafafa` | Tautan & judul "identitas" jadi near-black (konvensi Swiss). |
| `soga` | `#52525b` (= ink-soft) | `#a1a1aa` | Label kecil, garis hover, motif, pin kategori. |

### Permukaan & teks

| Peran | Terang | Gelap |
|---|---|---|
| `--paper` (dasar halaman) | `#ffffff` | `#09090b` |
| `--paper-raised` (kartu) | `#ffffff` | `#18181b` |
| `--paper-sunken` (inset, seksi) | `#f5f5f4` | `#060607` |
| `--ink` (teks utama) | `#18181b` | `#fafafa` |
| `--ink-soft` (teks sekunder) | `#52525b` | `#a1a1aa` |
| `--rule` (garis rambut) | `#e4e4e7` | `#27272a` |
| `--focus` (cincin fokus) | `#c2410c` | `#fb923c` |

> `--scrim` (veil overlay lightbox) selalu gelap `#09090b` di kedua tema: veil harus
> menggelapkan, bukan ikut berbalik terang seperti `--ink` di mode gelap.

> **Kontras (dihitung, WCAG AA).** Terang: `ink` 17,72:1 · `ink-soft` 7,73:1 · aksen 5,18:1 di
> atas putih; putih di atas aksen 5,18:1; putih di atas `merah-lasem-deep` 7,31:1.
> Gelap: `ink` 19,06:1 · `ink-soft` 7,76:1 · aksen 8,79:1. Semua lolos.

### Aturan pakai

- Aksen jenuh **≤ ~8% viewport**. Ia menandai aksi & identitas, tidak lebih.
- **Jangan** menaruh teks abu di atas permukaan beraksen.
- **Satu** aksi utama per tampilan; jangan ada dua CTA aksen bersaing.
- Kartu dipisahkan **garis rambut 1px** saja (tanpa bayangan, tanpa border **dan** bayangan).

## Typography

**Satu keluarga grotesk** untuk display dan prosa: **Hanken Grotesk Variable**. **Martian Mono**
tetap untuk data/label angka. Bodoni Moda **dilepas** pada revisi ini (Swiss murni: satu suara).

| Peran | Muka huruf | Alasan |
|---|---|---|
| **Display + Body** | **Hanken Grotesk** (variabel) | Grotesk humanis, aperture terbuka. Satu suara untuk judul & prosa = disiplin Swiss; menahan prosa Indonesia panjang. |
| **Data** | **Martian Mono** (variabel) | Hanya untuk angka tabular, koordinat, label data. Bukan kostum mono, bukan heading. |

Skala:

```
display  clamp(3rem, 9vw, 6.5rem)       lh 0.93   tracking -0.03em   Hanken 700   (judul hero)
h1       clamp(2rem, 4.5vw, 3rem)      lh 1.05   tracking -0.03em   Hanken 700
h2       1.75rem                        lh 1.14   tracking -0.02em   Hanken 700
h3       1.25rem                        lh 1.30   tracking -0.01em   Hanken 600
body     1rem                           lh 1.65   measure 68ch       Hanken 400
lead     1.125rem                       lh 1.60                      Hanken 400
label    0.75rem                        lh 1.40   tracking 0.08em    Hanken 600 (huruf besar, hemat)
data     0.875rem                       lh 1.40                      Martian Mono 400 (tabular-nums)
2xs      0.625rem                       lh 1.40                      Hanken 600 (metadata mikro)
```

> `display` hanya untuk judul hero (`HomePage.astro`); `h1` adalah judul halaman biasa.

Disiplin: measure body **65–75ch**; **lebih banyak ruang di atas judul daripada di bawah**;
tanpa gradient text; penekanan hanya lewat bobot/ukuran; tanpa eyebrow di atas setiap judul.

## Layout

- Lebar konten `72rem` (publik), `68ch` (prosa). Gutter `clamp(1.25rem, 4vw, 3rem)`.
- Irama seksi vertikal `clamp(4.5rem, 9vw, 8rem)`.
- Grid `minmax()` / `auto-fit`; setiap halaman indeks **berbeda secara struktural** (sejarah =
  garis waktu vertikal; budaya = dua kolom; kuliner = daftar padat mengutamakan gambar;
  destinasi = hibrida peta + kartu). Tidak pernah satu grid kartu identik untuk semua seksi.

## Motion — dial ENERGY 3 / RHYTHM 3 / MOTION 3

Gerak punya tujuan yang bisa ditulis satu baris, dan **semua mati total** di
`prefers-reduced-motion`. Tanpa JavaScript, konten tampil apa adanya (kelas `.js` tidak ada).

| Gerak | Tujuan | Implementasi |
|---|---|---|
| **Reveal saat scroll** | Menuntun mata mengikuti urutan baca | `[data-reveal]` + IntersectionObserver |
| **Stagger berjenjang** | Menyatakan hierarki dalam satu kelompok | `transition-delay: calc(var(--i) * 80ms)` |
| **Reveal mask (clip)** | Judul hero muncul dari bawah | `[data-reveal="clip"]` (clip-path) |
| **Underline tumbuh** | Menandai judul sebagai titik masuk | `[data-underline]::after` skala-X |
| **Canting Draw** | Motif batik menggambar dirinya sekali | `stroke-dashoffset` 1100ms |
| **Float lembut** | Satu aksen hidup di hero | `float-soft` 7s, hanya hero |
| **Counter angka** | Statistik "terisi" saat terlihat | `[data-count]`, `Intl.NumberFormat` |
| **Parallax hero** | Kedalaman halus saat scroll | `[data-parallax]`, rAF, hanya ≥768px |
| **Pita kecamatan** | 14 kecamatan sebagai konten nyata | `marquee` 38s, jeda saat hover |
| **Transisi halaman** | Kontinuitas antar navigasi | Astro View Transitions |

Pagar: gerak tidak untuk semua elemen; **nol** bounce/elastic (`--ease-out-expo` /
`--ease-out-quint` saja); listener parallax dibersihkan di `astro:before-swap`.

## Elevation & Depth

- **Diam:** garis rambut 1px `--rule` + satu langkah tonal. **Tanpa bayangan.**
- **Mengambang:** hanya untuk **overlay sejati** (popup/kontrol peta pihak ketiga). Satu
  bayangan terdokumentasi: `0 10px 30px -12px color-mix(in oklch, var(--ink) 35%, transparent)`.
- Tidak pernah glow, tidak pernah garis **dan** bayangan lebar bersamaan.

## Shapes

- Radius **tajam**: kontrol `2px`, kartu `4px`, pil `9999px` (badge saja).
- Garis rambut 1px sebagai pemisah; **tanpa** border garis-samping >1px.
- Motif batik sebagai geometri garis SVG: `stroke` 1–2px, `fill: none`, warna tinta.

## Components

- **Button utama** — latar `merah-lasem`, teks putih, radius `control` (2px). Hover → `merah-lasem-deep`; focus-visible → cincin `--focus`.
- **Card** — latar `paper-raised` (= putih), radius `card` (4px), border 1px `rule`. Tanpa bayangan.
- **Nav link** — `ink-soft` 0.875rem; aktif = `merah-lasem`.
- **Stat block** — `Martian Mono`, angka tabular, label kecil di atas nilai; mendukung counter.
- **Figure** — `<figure>` + `<figcaption>`, `<Image>` rasio terkunci.
- **Timeline** (sejarah) — penanda era + tahun `Martian Mono`, garis vertikal `rule`.
- **Callout** — latar `paper-sunken`, border kiri 1px `soga`.

## Do's and Don'ts

**Lakukan:**

- Pakai **satu** aksen; sisanya netral. Aksen menandai aksi, bukan dekorasi.
- Pisahkan permukaan dengan langkah tonal + garis rambut 1px.
- Jaga measure prosa 65–75ch; beri lebih banyak ruang di atas judul.
- Tema permukaan browser: `::selection`, `caret-color`, scrollbar, `:focus-visible`.
- Ikuti sistem gerak di bagian **Motion**; semua mati di `prefers-reduced-motion`.

**Jangan:**

- Jangan pakai Inter, Roboto, sistem default, atau font larangan Impeccable (Fraunces, Plus Jakarta Sans, Space Grotesk, Geist).
- Jangan pakai **glassmorphism / `backdrop-blur`** di mana pun (header termasuk). Linter tidak menangkap ini; jaga manual.
- Jangan pakai gradien, termasuk pola bergaris berulang (`repeating-linear-gradient`).
- Jangan taruh teks abu di atas warna beraksen.
- Jangan sarangkan kartu di dalam kartu; jangan grid kartu identik untuk semua seksi.
- Jangan pasang eyebrow/kicker di atas setiap judul; jangan gradient text.
- Jangan pakai bayangan pada kartu; hanya overlay sejati yang boleh mengambang.
- Jangan pakai easing bounce/elastic; jangan pakai emoji sebagai ikon; jangan pakai mono sebagai kostum.
- Jangan pakai foto stok pantai daerah lain dan menyebutnya "Pantai Karang Jahe".
