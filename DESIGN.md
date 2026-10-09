---
schemaVersion: 2
name: Kain Tiga Negeri
description: Sistem desain untuk situs profil Kabupaten Rembang — sehelai kain batik tulis Lasem di atas kertas pesisir yang hangat.

colors:
  # --- Tiga tinta (the three negeri) — revisi "Nyala Pesisir", 9 Okt 2026 ---
  merah-lasem: 'oklch(52% 0.19 27)'
  merah-lasem-deep: 'oklch(44% 0.175 27)'
  indigo-lasem: 'oklch(41% 0.115 264)'
  soga: 'oklch(53% 0.108 70)'

  # --- Permukaan terang ---
  paper: 'oklch(97.5% 0.008 82)'
  paper-raised: 'oklch(99% 0.004 82)'
  paper-sunken: 'oklch(94.5% 0.011 80)'
  ink: 'oklch(23% 0.022 56)'
  ink-soft: 'oklch(44% 0.022 58)'
  rule: 'oklch(88% 0.014 76)'
  focus: 'oklch(55% 0.16 264)'

  # --- Permukaan gelap ("Malam Lasem") ---
  paper-dark: 'oklch(15.5% 0.013 60)'
  paper-dark-raised: 'oklch(20% 0.015 60)'
  paper-dark-sunken: 'oklch(12% 0.011 60)'
  ink-dark: 'oklch(94% 0.012 78)'
  ink-soft-dark: 'oklch(74% 0.016 72)'
  rule-dark: 'oklch(30% 0.016 62)'
  merah-lasem-dark: 'oklch(70% 0.17 28)'
  indigo-lasem-dark: 'oklch(74% 0.115 260)'
  soga-dark: 'oklch(78% 0.11 74)'

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
4. **Geometri kain adalah ornamen.** Motif batik (Latohan, Watu Pecah, kisi Lokchan) hadir sebagai **geometri garis yang digambar sendiri** — SVG, garis, dan gerak — tidak pernah sebagai tekstur foto atau "latar pola batik" yang diulang di belakang teks.
5. **Tionghoa–Jawa adalah isi, bukan kostum.** Tanpa palet "restoran Tionghoa" merah-emas, tanpa emoji naga, tanpa kaligrafi palsu. Sinkretisme tampil dalam *struktur* — klenteng ↔ masjid ↔ wihara dalam satu rute, Cheng Ho bersebelahan dengan Sunan Bonang dalam garis waktu.

Mode pengunjung: **Read** (utama) untuk semua artikel; **Experience** untuk galeri dan peta.

Tema terang adalah utama — ini adegan baca arsip di siang hari di pesisir. Tema gelap ("Malam Lasem") adalah tema kedua yang sungguhan, bukan terang yang dibalik: arang hangat, bukan hitam, dan ketiga tinta *naik* kecerahan alih-alih didesaturasi.

## Colors

Semua warna dinyatakan dalam OKLCH. Tidak ada `#000` atau `#fff` di mana pun — bahkan teks tergelap adalah `oklch(24% 0.024 58)`.

### Tiga tinta (peran jenuh — maksimum 10% dari viewport)

| Token | Nilai (terang) | Nilai (gelap) | Peran |
|---|---|---|---|
| `merah-lasem` | `oklch(52% 0.19 27)` | `oklch(70% 0.17 28)` | **Aksi utama & identitas.** Tombol utama, item nav aktif, pin peta kategori pantai. |
| `indigo-lasem` | `oklch(41% 0.115 264)` | `oklch(74% 0.115 260)` | **Identitas & data.** Judul seksi, tautan, pin religi, fokus ring. |
| `soga` | `oklch(53% 0.108 70)` | `oklch(78% 0.11 74)` | **Aksen ketiga.** Garis, label kecil, pin kategori alam. |

> **Revisi "Nyala Pesisir" (9 Okt 2026).** Kroma & kecerahan tiga tinta dinaikkan agar
> terbaca jernih, bukan kusam. Merah Lasem jadi merah sungguhan (`#be2323`), bukan maroon
> kecoklatan; kertas digeser lebih netral hangat (kroma turun dari 0.011 ke 0.008) supaya
> tidak terlihat kekuningan berlumpur. Semua pasangan teks/latar **dihitung** dan lolos
> WCAG AA: `merah` 5,65:1 · `indigo` 8,36:1 · `soga` 5,03:1 · `ink-soft` 7,27:1 di atas
> kertas; teks tombol di atas merah 5,90:1.

### Permukaan & teks

| Peran | Terang | Gelap |
|---|---|---|
| `--paper` (dasar halaman) | `oklch(97.5% 0.008 82)` | `oklch(15.5% 0.013 60)` |
| `--paper-raised` (kartu) | `oklch(99% 0.004 82)` | `oklch(20% 0.015 60)` |
| `--paper-sunken` (inset, kroma peta) | `oklch(94.5% 0.011 80)` | `oklch(12% 0.011 60)` |
| `--ink` (teks utama) | `oklch(23% 0.022 56)` | `oklch(94% 0.012 78)` |
| `--ink-soft` (teks sekunder) | `oklch(44% 0.022 58)` | `oklch(74% 0.016 72)` |
| `--rule` (garis rambut) | `oklch(88% 0.014 76)` | `oklch(30% 0.016 62)` |
| `--focus` (cincin fokus) | `oklch(55% 0.16 264)` | `oklch(74% 0.115 260)` |

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

## Motion — "Nyala Pesisir"

Dial situs ini: **ENERGY 3 / RHYTHM 3 / MOTION 3.** Gerak adalah bagian dari identitas
(pesisir yang bekerja, canting yang menari), bukan hiasan. Tapi setiap animasi punya
tujuan yang bisa ditulis satu baris, dan **semua mati total di bawah `prefers-reduced-motion`**.

| Gerak | Tujuan (R-31) | Implementasi |
|---|---|---|
| **Reveal saat scroll** | Menuntun mata mengikuti urutan baca; mencegah "tembok teks" | `[data-reveal]` + IntersectionObserver; stagger via `--i` |
| **Stagger berjenjang** | Menyatakan hierarki dalam satu kelompok (kartu, stat) | `transition-delay: calc(var(--i) * 90ms)` |
| **Underline tumbuh** | Menandai judul halaman sebagai titik masuk | `[data-underline]::after` skala-X dari kiri |
| **Canting Draw** | Momen khas: motif batik menggambar dirinya sekali | `stroke-dashoffset` 1100ms |
| **Float lembut** | Satu aksen hidup di hero; motif terasa bernapas | `float-soft` 7s, **hanya di hero** |
| **Pita kecamatan** | Memperkenalkan 14 kecamatan sebagai konten nyata, bukan ornamen | `marquee` 38s, jeda saat hover |
| **Transisi halaman** | Menjaga kontinuitas antar navigasi (Astro View Transitions) | `::view-transition-*` |

Dosis & pagar: gerak **tidak** untuk semua elemen (hero berbicara, elemen pendukung tenang);
tanpa loop tak berujung selain pita & float yang disengaja; **nol** bounce/elastic (kurva
`--ease-out-expo` / `--ease-out-quint` saja). Tanpa JavaScript, seluruh konten tampil
apa adanya (kelas `.js` tidak ada → tidak ada elemen tersembunyi).

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
- Biarkan gerak mengikuti sistem di bagian **Motion** (ENERGY 3 / RHYTHM 3 / MOTION 3), bukan ditumpuk tanpa alasan.

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
