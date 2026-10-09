---
schemaVersion: 2
name: Arsip Pesisir
description: Sistem desain untuk situs profil Kabupaten Rembang — warm editorial/arsip: kertas tua, tinta cokelat, tiga warna batik (Lasem bata, wedel, soga), serif display.

colors:
  # --- Tiga warna batik + emas langka ---
  merah-lasem: '#a3302a'
  merah-lasem-deep: '#8a2320'
  indigo-lasem: '#2c3e63'
  soga: '#7c5a2a'
  gold: '#96630c'

  # --- Permukaan terang (kertas tua hangat) ---
  paper: '#f4ede0'
  paper-raised: '#fbf7ef'
  paper-sunken: '#ebe1d0'
  ink: '#231a14'
  ink-soft: '#5c4a3a'
  rule: '#dccfb8'
  focus: '#a3302a'
  scrim: '#231a14'

  # --- Permukaan gelap (arang hangat) ---
  paper-dark: '#1a1512'
  paper-dark-raised: '#241e19'
  paper-dark-sunken: '#12100d'
  ink-dark: '#f2e9d9'
  ink-soft-dark: '#b9a78f'
  rule-dark: '#3a3129'
  merah-lasem-dark: '#e4796b'
  merah-lasem-deep-dark: '#f09b8e'
  indigo-lasem-dark: '#8fa9d8'
  soga-dark: '#cfa268'
  gold-dark: '#e0b24a'

typography:
  display:
    fontFamily: 'Newsreader Variable'
    fontSize: 'clamp(3rem, 9vw, 6.5rem)'
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: '-0.01em'
  h1:
    fontFamily: 'Newsreader Variable'
    fontSize: 'clamp(2rem, 4.5vw, 3rem)'
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: '-0.015em'
  h2:
    fontFamily: 'Newsreader Variable'
    fontSize: '1.75rem'
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: '-0.01em'
  h3:
    fontFamily: 'Newsreader Variable'
    fontSize: '1.25rem'
    fontWeight: 600
    lineHeight: 1.32
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

# Arsip Pesisir

Sistem desain untuk situs profil **Kabupaten Rembang**. North Star: *selembar kertas tua tempat
tiga warna batik (merah Lasem, wedel, soga) dicetak rapi, dan judul-judulnya seperti kutipan
dari arsip lama.*

## Overview

Revisi 9 Okt 2026 menggantikan "Tinta & Tanah" (flat minimalism Swiss yang dingin) dengan
**Arsip Pesisir**: warm editorial/arsip. Kertas tua, tinta cokelat, tiga warna batik dipakai kaya
tapi tertata, **serif display** untuk judul. Perubahan ini menjawab penilaian pengguna bahwa
palet dingin itu "kurang untuk website pengenalan sejarah".

Lima gagasan yang mengikat keputusan visual:

1. **Tiga warna batik, satu aksen utama.** Merah Lasem (`merah-lasem`) adalah aksen utama;
   wedel (`indigo-lasem`) dan soga (`soga`) membawa identitas. Emas (`gold`) **sangat langka**:
   hanya untuk drop-cap dan tanda arsip.
2. **Kertas tua, bukan putih.** Dasar halaman adalah kertas gading hangat. Pemisahan permukaan
   lewat **langkah tonal** (`paper` / `paper-raised` / `paper-sunken`) dan **garis rambut 1px**.
3. **Serif untuk judul, sans untuk prosa.** Newsreader (serif) membawa judul & hero; Hanken
   Grotesk menjaga prosa Indonesia panjang tetap enak dibaca. Dua suara, masing-masing satu tugas.
4. **Geometri kain adalah ornamen.** Motif batik (Kawung, Truntum, Latohan) hadir sebagai
   **geometri garis SVG yang digambar sendiri** — bukan tekstur foto, bukan pola yang diulang
   di belakang teks.
5. **Tionghoa–Jawa adalah isi, bukan kostum.** Tanpa palet merah-emas norak, tanpa emoji naga,
   tanpa kaligrafi palsu. Sinkretisme tampil dalam *struktur* (klenteng ↔ masjid ↔ wihara).

Tema terang adalah utama. Tema gelap adalah tema kedua yang sungguhan (arang **hangat**, bukan
hitam dingin), dengan aksen yang *naik* kecerahan. Keduanya dikendalikan token yang sama.

## Colors

Warm editorial: **tiga warna batik + emas langka**. Nilai dinyatakan dalam heks untuk sinkron 1:1
dengan `src/styles/global.css`.

### Warna batik (peran jenuh)

| Token | Terang | Gelap | Peran |
|---|---|---|---|
| `merah-lasem` | `#a3302a` | `#e4796b` | **Aksen utama** (Lasem bata). Tombol utama, item nav aktif, tautan aksi, cincin fokus. |
| `merah-lasem-deep` | `#8a2320` | `#f09b8e` | Hover/active aksen. |
| `indigo-lasem` | `#2c3e63` | `#8fa9d8` | **Wedel pesisir.** Tautan & judul "identitas", pin kategori religi. |
| `soga` | `#7c5a2a` | `#cfa268` | **Soga tanah.** Label kecil, garis hover, motif, pin kategori. |
| `gold` | `#96630c` | `#e0b24a` | **Emas arsip (langka).** Drop-cap, tanda arsip, `::selection`. Hanya elemen besar atau `paper`. |

### Permukaan & teks

| Peran | Terang | Gelap |
|---|---|---|
| `--paper` (dasar halaman) | `#f4ede0` | `#1a1512` |
| `--paper-raised` (kartu) | `#fbf7ef` | `#241e19` |
| `--paper-sunken` (inset, seksi) | `#ebe1d0` | `#12100d` |
| `--ink` (teks utama) | `#231a14` | `#f2e9d9` |
| `--ink-soft` (teks sekunder) | `#5c4a3a` | `#b9a78f` |
| `--rule` (garis rambut) | `#dccfb8` | `#3a3129` |
| `--focus` (cincin fokus) | `#a3302a` | `#e4796b` |

> `--scrim` (veil overlay lightbox) selalu gelap di kedua tema (`#231a14` / `#12100d`): veil harus
> menggelapkan, bukan ikut berbalik terang.

> **Kontras (dihitung, WCAG AA).** Terang: `ink` 14,67:1 · `ink-soft` 7,23:1 · `merah` 5,99:1 ·
> `wedel` 9,13:1 · `soga` 5,38:1 · `gold` 5,20:1 di atas kertas; putih di atas `merah` 6,97:1.
> Gelap: `ink` 15,03:1 · `ink-soft` 7,75:1 · `merah` 6,25:1 · `wedel` 7,62:1 · `soga` 7,78:1 ·
> `gold` 9,17:1. Semua lolos. Diuji otomatis oleh `tests/contrast.spec.ts`.

### Aturan pakai

- Warna batik jenuh **≤ ~12% viewport**. Emas **jauh lebih hemat** lagi: hanya drop-cap & tanda.
- **Jangan** menaruh teks abu di atas permukaan beraksen.
- **Satu** aksi utama per tampilan; jangan ada dua CTA aksen bersaing.
- Kartu dipisahkan **garis rambut 1px** saja (tanpa bayangan, tanpa border **dan** bayangan).

## Typography

**Dua suara, masing-masing satu tugas.** **Newsreader** (serif) untuk judul & hero: register
arsip/editorial. **Hanken Grotesk Variable** untuk prosa/UI: menahan teks Indonesia panjang.
**Martian Mono** untuk data/angka.

| Peran | Muka huruf | Alasan |
|---|---|---|
| **Display** | **Newsreader** (serif, variabel) | Serif editorial = register arsip/sejarah; judul jadi "kutipan dari dokumen". |
| **Body/UI** | **Hanken Grotesk** (variabel) | Grotesk humanis, aperture terbuka; nyaman untuk prosa panjang. |
| **Data** | **Martian Mono** (variabel) | Hanya untuk angka tabular, koordinat, label data. Bukan kostum mono, bukan heading. |

Skala:

```
display  clamp(3rem, 9vw, 6.5rem)       lh 0.98   tracking -0.01em   Newsreader 700   (judul hero)
h1       clamp(2rem, 4.5vw, 3rem)      lh 1.10   tracking -0.015em  Newsreader 700
h2       1.75rem                        lh 1.18   tracking -0.01em   Newsreader 700
h3       1.25rem                        lh 1.32   tracking -0.005em  Newsreader 600
body     1rem                           lh 1.65   measure 68ch       Hanken 400
lead     1.125rem                       lh 1.60                      Hanken 400
label    0.75rem                        lh 1.40   tracking 0.08em    Hanken 600 (huruf besar, hemat)
data     0.875rem                       lh 1.40                      Martian Mono 400 (tabular-nums)
2xs      0.625rem                       lh 1.40                      Hanken 600 (metadata mikro)
```

> `display` hanya untuk judul hero (`HomePage.astro`); `h1` adalah judul halaman biasa.
> Serif butuh tracking **lebih longgar** dari grotesk (jangan pakai -0.03em).

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
- **Card** — latar `paper-raised`, radius `card` (4px), border 1px `rule`. Tanpa bayangan.
- **Nav link** — `ink-soft` 0.875rem; aktif = `merah-lasem`.
- **Stat block** — `Martian Mono`, angka tabular, label kecil di atas nilai; mendukung counter.
- **Figure (lempeng arsip)** — `<figure>` + `<figcaption>`; gambar dibingkai **1px `rule` + padding dalam tipis + latar `paper-raised`**, seperti foto arsip yang ditempel di kertas. Caption serif italic kecil.
- **Drop-cap** — paragraf pertama artikel pakai `.dropcap`: huruf pertama serif besar berwarna `gold`. Tanda arsip, dipakai hemat.
- **Timeline** (sejarah) — penanda era + tahun `Martian Mono`, garis vertikal `rule`.
- **Callout** — latar `paper-sunken`, border kiri 1px `soga`.

## Do's and Don'ts

**Lakukan:**

- Pakai warna batik dengan peran jelas; emas `gold` **sangat hemat** (drop-cap/tanda arsip saja).
- Pisahkan permukaan dengan langkah tonal + garis rambut 1px.
- Jaga measure prosa 65–75ch; beri lebih banyak ruang di atas judul.
- Pakai serif (Newsreader) hanya untuk judul; sans (Hanken) untuk prosa/UI.
- Tema permukaan browser: `::selection` (emas), `caret-color`, scrollbar, `:focus-visible`.
- Ikuti sistem gerak di bagian **Motion**; semua mati di `prefers-reduced-motion`.

**Jangan:**

- Jangan pakai Inter, Roboto, sistem default, atau font larangan Impeccable (Fraunces, Plus Jakarta Sans, Space Grotesk, Geist).
- Jangan pakai **glassmorphism / `backdrop-blur`** di mana pun (header termasuk). Linter tidak menangkap ini; jaga manual.
- Jangan pakai gradien, termasuk pola bergaris berulang (`repeating-linear-gradient`).
- Jangan pakai `gold` untuk teks kecil di atas `paper-sunken` (kontras 3,96 — di bawah AA); hanya elemen besar atau di atas `paper`.
- Jangan taruh teks abu di atas warna beraksen.
- Jangan sarangkan kartu di dalam kartu; jangan grid kartu identik untuk semua seksi.
- Jangan pasang eyebrow/kicker di atas setiap judul; jangan gradient text.
- Jangan pakai bayangan pada kartu; hanya overlay sejati yang boleh mengambang.
- Jangan pakai easing bounce/elastic; jangan pakai emoji sebagai ikon; jangan pakai mono sebagai kostum.
- Jangan pakai foto stok pantai daerah lain dan menyebutnya "Pantai Karang Jahe".
