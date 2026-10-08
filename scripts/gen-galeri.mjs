#!/usr/bin/env node
/**
 * gen-galeri.mjs
 *
 * Menghasilkan 12 berkas konten album galeri (6 album x id/en) dari data di
 * bawah, memakai kredit asli dari src/assets/credits.json (artist + license).
 * Paritas id/en dijamin: nama berkas, translationKey, order, dan urutan foto sama.
 *
 * Pakai: node scripts/gen-galeri.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CREDITS = JSON.parse(readFileSync(join(ROOT, 'src/assets/credits.json'), 'utf8'));
const creditByLocal = Object.fromEntries(CREDITS.map((c) => [c.local, c]));

const SRC = '../../../assets/galeri';

const ALBUMS = [
  {
    slug: 'lasem-tiongkok-kecil',
    key: 'lasem-chinese-heritage',
    order: 1,
    title: { id: 'Lasem, Tiongkok Kecil', en: 'Lasem, the Little China' },
    summary: {
      id: 'Kelenteng, rumah tua, dan kampung warisan di Lasem, kota yang sejak abad ke-15 menjadi salah satu titik pendaratan awal warga Tionghoa di Jawa.',
      en: 'Temples, old houses, and heritage lanes of Lasem, a town that since the 15th century has been one of the earliest landing points for Chinese settlers in Java.',
    },
    photos: [
      ['klenteng-po-an-bio.jpg', 'Kelenteng Po An Bio di Lasem.', 'Kelenteng Po An Bio, salah satu kelenteng tua di Lasem.', 'Po An Bio Temple in Lasem.', 'Po An Bio, one of the old temples of Lasem.'],
      ['cu-an-kiong-aula.jpg', 'Aula tengah Kelenteng Cu An Kiong, Lasem.', 'Aula tengah Kelenteng Cu An Kiong, berdiri sejak abad ke-16.', 'Central hall of Cu An Kiong Temple, Lasem.', 'The central hall of Cu An Kiong Temple, standing since the 16th century.'],
      ['cu-an-kiong-papan-nama.jpg', 'Papan nama Kelenteng Cu An Kiong.', 'Papan nama Kelenteng Cu An Kiong di kawasan Soditan.', 'Name plaque of Cu An Kiong Temple.', 'The name plaque of Cu An Kiong Temple in the Soditan quarter.'],
      ['cu-an-kiong-ubin-tegel.jpg', 'Ubin tegel tua di Kelenteng Cu An Kiong.', 'Ubin tegel warisan di Kelenteng Cu An Kiong.', 'Old floor tiles in Cu An Kiong Temple.', 'Heritage floor tiles inside Cu An Kiong Temple.'],
      ['tiongkok-kecil-heritage.jpg', 'Kawasan Tiongkok Kecil Heritage di Lasem.', 'Kawasan warisan Tiongkok Kecil, Lasem.', 'The Tiongkok Kecil heritage quarter in Lasem.', 'The Tiongkok Kecil heritage quarter, Lasem.'],
      ['gerbang-rumah-lasem.jpg', 'Gerbang rumah tua bergaya Tionghoa di Lasem.', 'Gerbang rumah tua di kawasan pecinan Lasem.', 'The gate of an old Chinese-style house in Lasem.', 'The gate of an old house in the Chinese quarter of Lasem.'],
      ['kuda-kuda-museum-nyah.jpg', 'Kuda-kuda atap bergaya Tionghoa di Museum Nyah Lasem.', 'Kuda-kuda atap gaya Tionghoa, koleksi Museum Nyah Lasem.', 'Chinese-style roof truss at the Nyah Lasem Museum.', 'A Chinese-style roof truss in the collection of the Nyah Lasem Museum.'],
    ],
  },
  {
    slug: 'batik-lasem',
    key: 'batik-lasem-galeri',
    order: 2,
    title: { id: 'Batik Tiga Negeri', en: 'Batik of Three Lands' },
    summary: {
      id: 'Batik tulis Lasem dengan merah getih pitik dan motif Tionghoa-Jawa, dari rumah produksi yang masih bekerja hingga hari ini.',
      en: 'Lasem hand-drawn batik, with its getih pitik red and Chinese-Javanese motifs, from workshops still working today.',
    },
    photos: [
      ['batik-kaligrafi.jpg', 'Kain batik tulis Lasem bermotif kaligrafi.', 'Batik tulis Lasem motif kaligrafi, Rumah Batik Sekar Kencana.', 'Lasem hand-drawn batik with a calligraphy motif.', 'Lasem hand-drawn batik with a calligraphy motif, Rumah Batik Sekar Kencana.'],
      ['koleksi-pusaka-beruang-1.jpg', 'Koleksi batik Lasem di Rumah Batik Pusaka Beruang.', 'Koleksi batik di Rumah Batik Pusaka Beruang, Lasem.', 'A collection of Lasem batik at Rumah Batik Pusaka Beruang.', 'A collection of batik at Rumah Batik Pusaka Beruang, Lasem.'],
      ['koleksi-pusaka-beruang-2.jpg', 'Ragam motif batik tulis Lasem.', 'Ragam motif batik tulis Lasem dari sebuah rumah batik.', 'A range of Lasem hand-drawn batik motifs.', 'A range of Lasem hand-drawn batik motifs from a batik workshop.'],
      ['oemah-batik-lasem.jpg', 'Oemah Batik Lasem.', 'Oemah Batik Lasem, rumah produksi batik tulis.', 'Oemah Batik Lasem.', 'Oemah Batik Lasem, a hand-drawn batik workshop.'],
      ['batik-gringsing.jpg', 'Kain batik tulis Lasem motif gringsing.', 'Batik tulis Lasem motif gringsing.', 'Lasem hand-drawn batik with a gringsing motif.', 'Lasem hand-drawn batik with a gringsing motif.'],
    ],
  },
  {
    slug: 'panggung-dan-warisan',
    key: 'panggung-dan-warisan',
    order: 3,
    title: { id: 'Panggung dan Warisan', en: 'Stage and Heritage' },
    summary: {
      id: 'Wayang potehi dan kesenian yang tumbuh dari pertemuan tradisi Tionghoa dan Jawa di pesisir.',
      en: 'Wayang potehi and the arts born from the meeting of Chinese and Javanese traditions on the coast.',
    },
    photos: [
      ['potehi-01.jpg', 'Wayang potehi koleksi Museum Ganesya.', 'Wayang potehi, koleksi Museum Ganesya.', 'Wayang potehi from the Ganesya Museum collection.', 'Wayang potehi, from the collection of the Ganesya Museum.'],
      ['potehi-02.jpg', 'Wayang potehi koleksi Museum Ganesya.', 'Boneka wayang potehi, koleksi Museum Ganesya.', 'Wayang potehi puppets from the Ganesya Museum collection.', 'Wayang potehi puppets, from the collection of the Ganesya Museum.'],
      ['panggung-potehi-gudo.jpg', 'Panggung wayang potehi rombongan Gudo.', 'Panggung wayang potehi rombongan Gudo (Jawa Timur) dalam sebuah pameran.', 'A wayang potehi stage of the Gudo troupe.', 'A wayang potehi stage of the Gudo troupe (East Java) at an exhibition.'],
      ['potehi-genderang.jpg', 'Genderang pertunjukan wayang potehi.', 'Genderang pengiring pertunjukan wayang potehi.', 'A drum used in wayang potehi.', 'A drum accompanying a wayang potehi performance.'],
      ['potehi-instrumen.jpg', 'Instrumen musik wayang potehi.', 'Instrumen musik pengiring wayang potehi.', 'Musical instruments of wayang potehi.', 'Musical instruments accompanying wayang potehi.'],
    ],
  },
  {
    slug: 'napak-tilas-kartini',
    key: 'napak-tilas-kartini',
    order: 4,
    title: { id: 'Napak Tilas R.A. Kartini', en: 'In the Footsteps of R.A. Kartini' },
    summary: {
      id: 'Museum dan makam R.A. Kartini di Rembang, dua tempat yang menjaga ingatan akan gagasan dan hidupnya.',
      en: 'The museum and grave of R.A. Kartini in Rembang, two places that keep the memory of her life and ideas.',
    },
    photos: [
      ['museum-kartini-pendopo.jpg', 'Pendopo Museum Kartini Rembang.', 'Pendopo bekas rumah dinas Bupati Rembang, kini Museum Kartini.', 'The pendopo of the Kartini Museum in Rembang.', 'The pendopo of the former regent’s residence, now the Kartini Museum.'],
      ['museum-kartini-pringgitan.jpg', 'Pringgitan Museum Kartini Rembang.', 'Ruang pringgitan Museum Kartini Rembang.', 'The pringgitan hall of the Kartini Museum.', 'The pringgitan hall of the Kartini Museum in Rembang.'],
      ['museum-kartini-interior.jpg', 'Bagian dalam Museum Kartini Rembang.', 'Bagian dalam Museum Kartini Rembang.', 'Inside the Kartini Museum in Rembang.', 'Inside the Kartini Museum in Rembang.'],
      ['makam-kartini-01.jpg', 'Makam R.A. Kartini di Bulu, Rembang.', 'Makam R.A. Kartini di Desa Bulu, Rembang.', 'The grave of R.A. Kartini in Bulu, Rembang.', 'The grave of R.A. Kartini in Bulu village, Rembang.'],
      ['makam-kartini-02.jpg', 'Kompleks makam R.A. Kartini.', 'Kompleks makam R.A. Kartini dan keluarganya.', 'The grave complex of R.A. Kartini.', 'The grave complex of R.A. Kartini and her family.'],
    ],
  },
  {
    slug: 'pesisir-dan-pantai',
    key: 'pesisir-dan-pantai',
    order: 5,
    title: { id: 'Pesisir dan Pantai', en: 'Coast and Beaches' },
    summary: {
      id: 'Pantai, mangrove, dan pelabuhan: pesisir yang bekerja, bukan sekadar latar belakang.',
      en: 'Beaches, mangrove, and harbour: a coast that works, not merely a backdrop.',
    },
    photos: [
      ['pantai-karang-jahe.jpg', 'Pantai Karang Jahe dengan deretan pohon cemara.', 'Pantai Karang Jahe, pesisir utara Rembang.', 'Karang Jahe beach with its rows of casuarina trees.', 'Karang Jahe beach on the north coast of Rembang.'],
      ['pantai-karang-jahe-sore.jpg', 'Pantai Karang Jahe pada sore hari.', 'Sore hari di Pantai Karang Jahe.', 'Karang Jahe beach in the late afternoon.', 'Late afternoon at Karang Jahe beach.'],
      ['pantai-caruban-sore.jpg', 'Pantai Caruban pada sore hari.', 'Suasana sore di Pantai Caruban, Lasem.', 'Caruban beach in the late afternoon.', 'Late afternoon at Caruban beach, Lasem.'],
      ['pantai-wates.jpg', 'Pantai Pasir Putih Wates.', 'Pantai Pasir Putih Wates, Kecamatan Pancur.', 'Wates white-sand beach.', 'Wates white-sand beach, Pancur district.'],
      ['hutan-mangrove.jpg', 'Hutan mangrove Pasarbanggi.', 'Hutan mangrove Pasarbanggi di pesisir Rembang.', 'The Pasarbanggi mangrove forest.', 'The Pasarbanggi mangrove forest on the Rembang coast.'],
      ['hutan-mangrove-suasana.jpg', 'Suasana di dalam hutan mangrove Pasarbanggi.', 'Suasana di dalam hutan mangrove Pasarbanggi.', 'Inside the Pasarbanggi mangrove forest.', 'Inside the Pasarbanggi mangrove forest.'],
      ['pelabuhan-rembang-01.jpg', 'Pelabuhan Rembang.', 'Pelabuhan Rembang, simpul aktivitas nelayan pesisir.', 'The port of Rembang.', 'The port of Rembang, a hub of coastal fishing.'],
    ],
  },
  {
    slug: 'kuliner-pesisir',
    key: 'kuliner-pesisir',
    order: 6,
    title: { id: 'Kuliner Pesisir', en: 'Coastal Cuisine' },
    summary: {
      id: 'Hidangan pesisir Rembang, dari sate srepeh hingga lontong tuyuhan dan kopi lelet.',
      en: 'The coastal dishes of Rembang, from sate srepeh to lontong tuyuhan and kopi lelet.',
    },
    photos: [
      ['sate-srepeh.jpg', 'Sate srepeh khas Rembang.', 'Sate srepeh, sate ayam berbumbu santan kemerahan.', 'Sate srepeh, a Rembang specialty.', 'Sate srepeh, chicken skewers in a reddish coconut sauce.'],
      ['sate-srepeh-nasi-tahu.jpg', 'Sate srepeh disajikan dengan nasi dan tahu.', 'Sate srepeh dengan nasi dan tahu.', 'Sate srepeh served with rice and tofu.', 'Sate srepeh served with rice and tofu.'],
      ['srepeh-rembang.jpg', 'Sate srepeh dari Rembang.', 'Sate srepeh dari Rembang.', 'Sate srepeh from Rembang.', 'Sate srepeh from Rembang.'],
      ['lontong-tuyuhan-09.jpg', 'Lontong tuyuhan dalam kuah santan kuning.', 'Lontong tuyuhan, lontong dalam kuah santan kuning.', 'Lontong tuyuhan in a yellow coconut broth.', 'Lontong tuyuhan, rice cakes in a yellow coconut broth.'],
      ['lontong-tuyuhan-10.jpg', 'Lontong tuyuhan.', 'Lontong tuyuhan dengan ayam dan tempe.', 'Lontong tuyuhan.', 'Lontong tuyuhan with chicken and tempeh.'],
      ['lontong-tuyuhan-11.jpg', 'Lontong tuyuhan.', 'Sajian lontong tuyuhan.', 'Lontong tuyuhan.', 'A serving of lontong tuyuhan.'],
      ['warung-kopi-lelet.jpg', 'Warung Kopi Lelet di Lasem.', 'Warung Kopi Lelet di Lasem, tempat tradisi ngelelet.', 'A Kopi Lelet stall in Lasem.', 'A Kopi Lelet stall in Lasem, home of the ngelelet tradition.'],
    ],
  },
];

const q = (s) => `"${String(s).replace(/"/g, '\\"')}"`;

let written = 0;
const problems = [];

for (const album of ALBUMS) {
  for (const lang of ['id', 'en']) {
    const lines = [];
    lines.push('---');
    lines.push(`translationKey: ${album.key}`);
    lines.push(`title: ${q(album.title[lang])}`);
    lines.push(`summary: ${q(album.summary[lang])}`);
    lines.push(`order: ${album.order}`);
    lines.push('photos:');
    for (const [file, altId, capId, altEn, capEn] of album.photos) {
      const local = `galeri/${album.slug}/${file}`;
      const credit = creditByLocal[local];
      if (!credit) problems.push(`Kredit hilang: ${local}`);
      const alt = lang === 'id' ? altId : altEn;
      const caption = lang === 'id' ? capId : capEn;
      const creditLine = credit
        ? `${lang === 'id' ? 'Foto' : 'Photo'}: ${credit.artist}, ${credit.license}, Wikimedia Commons`
        : '';
      lines.push(`  - src: ${SRC}/${album.slug}/${file}`);
      lines.push(`    alt: ${q(alt)}`);
      lines.push(`    caption: ${q(caption)}`);
      lines.push(`    credit: ${q(creditLine)}`);
    }
    lines.push('---');
    lines.push('');
    lines.push(album.summary[lang]);
    lines.push('');

    const out = join(ROOT, 'src/content/galeri', lang, `${album.slug}.md`);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, lines.join('\n'));
    written++;
  }
}

console.log(`Ditulis: ${written} berkas (${ALBUMS.length} album x 2 bahasa).`);
if (problems.length) {
  console.error('MASALAH:');
  problems.forEach((p) => console.error('  ' + p));
  process.exitCode = 1;
}
