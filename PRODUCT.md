<!-- impeccable:product-schema 1 -->

# Kabupaten Rembang — Profil Digital

## Platform

web

## Stack

Greenfield. Astro 7 (output statis, zero-JS by default) + Tailwind CSS v4 (plugin `@tailwindcss/vite`, token di `@theme`) + TypeScript strict. Deploy ke Cloudflare (static assets). Konten via Astro Content Collections (MDX). Tidak ada framework UI klien — interaktivitas hanya empat island kecil (`MapIsland` Leaflet, `Lightbox` `<dialog>`, `ThemeToggle`, pengendali reveal/counter/parallax di `BaseLayout`).

## Users

- **Warga & diaspora Rembang** — mencari rekam jejak sejarah, budaya, dan kuliner kampung halaman; bangga pada identitas daerah.
- **Wisatawan domestik** — merencanakan kunjungan; butuh destinasi, kuliner, dan peta yang bisa langsung dipakai.
- **Pelajar, mahasiswa, peneliti** — merujuk sejarah Lasem, batik, akulturasi, dan Kartini; butuh konten yang akurat dan bertahun jelas.
- **Wisatawan asing & peneliti internasional** — versi Inggris dengan istilah budaya dipertahankan + penjelasan.

## Product Purpose

Menyediakan satu kanal digital terpadu yang memperkenalkan Kabupaten Rembang — sejarah, budaya, kuliner, destinasi, dan profil wilayah — secara akurat, cepat, dan terindeks mesin pencari, dalam dua bahasa.

## Positioning

Bukan situs pariwisata generik. Ini **arsip hidup** sebuah daerah pesisir dengan warisan akulturasi langka (Jawa–Tionghoa–Arab–kolonial). Nada: editorial, tenang, terpercaya — seperti buku meja tamu warisan budaya, bukan brosur wisata.

## Operating Context

- Pembaca Indonesia dominan; Inggris sebagai lapisan kedua yang serius (bukan terjemahan mesin).
- Konten dibaca di ponsel (mayoritas) maupun desktop; perlu ringan dan cepat di jaringan seluler.
- Sumber fakta: Pemerintah Kabupaten Rembang, BPS, jurnal akademik, Museum Nyah Lasem. Setiap data statistik mencantumkan tahun.

## Capabilities and Constraints

- Situs statis murni: tanpa database, tanpa autentikasi, tanpa server runtime.
- Konten adalah file MDX di repositori — mudah ditambah/dikoreksi lewat Git.
- Bilingual lewat routing bawaan Astro (`id` di root, `en` di `/en/`).
- Foto awal dari Wikimedia Commons (lisensi CC/domain publik) dengan atribusi; mudah ditukar dengan foto asli.
- Harus tetap berfungsi penuh tanpa JavaScript (peta & lightbox sebagai *enhancement*).

## Brand Commitments

- Motto resmi daerah: **Rembang BANGKIT** (Bahagia, Aman, Nyaman, Gotong-royong, Kerja keras, Iman, Takwa).
- Identitas visual berakar pada **Batik Tiga Negeri** Lasem — bukan pada template SaaS.
- Istilah budaya lokal (mis. *getih pitik*, *sedekah laut*, *lontong tuyuhan*) dipertahankan apa adanya, dengan penjelasan singkat.

## Evidence on Hand

Riset terverifikasi (Pemkab Rembang, BPS Rembang Dalam Angka, jurnal warisan budaya Lasem, Visit Jawa Tengah, Wikipedia/Dinas Kearsipan):

- Geografi: luas ±1.036,70 km²; 14 kecamatan; 287 desa + 7 kelurahan; garis pantai ±62,5 km; Gunung Lasem 806 m; Gunung Butak 679 m.
- Demografi: ±669.145 jiwa (Des 2025).
- Sejarah: jalur dagang pesisir Majapahit→Demak; Lasem "Tiongkok Kecil" sejak abad ke-15; ekspedisi Cheng Ho; R.A. Kartini; Sunan Bonang (abad 15); Mbah Sambu (w. 1671); Perang Kuning vs VOC; asal nama "ngRembang".
- Budaya: Batik Tulis Lasem (motif Tiga Negeri/Empat Negeri, merah *getih pitik*); klenteng Cu An Kiong, Gie Yong Bio, Po An Bio; Masjid Jami' Lasem; Wayang Potehi, Laesan, Thong-thong Klek, Barongsai/Liong, Pathol Sarang/Tari Patholan; Sedekah Laut/Lomban, Penjamasan Bende Becak, Haul Mbah Sambu; Kopi Lelet & *ngelelet*.
- Kuliner: Sate Srepeh, Lontong Tuyuhan, Kelo Mrico, Mangut, Urap Latoh, Dumbeg, Kaoya Dudul, Legen; plus Garang Asem, Kare Rajungan, Soto Kemiri.
- Destinasi: 20+ (Pantai Karang Jahe, Caruban, Wates, Binangun, Jatisari, Nyamplung, Dasun; Museum & Makam Kartini; Petilasan Sunan Bonang; klenteng Lasem; Puncak Argopuro; Hutan Mangrove; Embung Lodan/Panohan; dll).

## Product Principles

1. **Akurasi sebelum kelengkapan.** Legenda disajikan sebagai legenda; angka selalu bertahun.
2. **Istilah asli dipertahankan.** Jangan hilangkan kata yang memuat makna budaya demi kemudahan terjemahan.
3. **Cepat itu bagian dari rasa hormat.** Pembaca di jaringan seluler berhak atas halaman yang segera tampil.
4. **Tanpa JS tetap terbaca.** Peta dan lightbox memperkaya; bukan syarat.
5. **Satu bahasa tidak lebih penting dari yang lain.** Inggris ditulis, bukan diterjemahkan mesin.

## Accessibility & Inclusion

Target WCAG 2.2 AA. Kontras teks ≥4.5:1 (body) dan ≥3:1 (teks besar). Navigasi keyboard penuh. Fokus terlihat jelas. `prefers-reduced-motion` mematikan **seluruh** sistem gerak (reveal, mask judul, counter angka, parallax, marquee, canting draw, transisi halaman). Semua gambar punya `alt` bermakna; peta punya padanan daftar teks.
