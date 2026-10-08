/**
 * Endpoint OG image statis: /og/<slug>.jpg (1200x630).
 *
 * Karena `output: 'static'`, tiap halaman punya berkas JPEG sendiri yang
 * dirender saat build (satori + sharp). Slug memakai pathname halaman
 * (mis. `kuliner/sate-srepeh.jpg`), jadi `BaseHead.astro` bisa menebaknya
 * langsung dari `Astro.url.pathname`.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { renderOg } from '@/lib/og';
import { t, type Lang } from '@/lib/i18n';

export const prerender = true;

interface OgPageProps {
  eyebrow: string;
  title: string;
  lead?: string;
  imageFile?: string;
  [key: string]: unknown;
}

const EYEBROW: Record<string, Record<Lang, string>> = {
  sejarah: { id: 'Sejarah', en: 'History' },
  budaya: { id: 'Budaya', en: 'Culture' },
  kuliner: { id: 'Kuliner', en: 'Cuisine' },
  destinasi: { id: 'Destinasi', en: 'Destinations' },
  galeri: { id: 'Galeri', en: 'Gallery' },
  profil: { id: 'Profil', en: 'Profile' },
  peta: { id: 'Peta', en: 'Map' },
  kredit: { id: 'Kredit', en: 'Credits' },
  beranda: { id: 'Jelajah Rembang', en: 'Jelajah Rembang' },
};

/** Halaman statis (indeks, profil, galeri, peta, kredit, 404). */
const STATIC_PAGES: { base: string; eyebrow: string; title: Record<Lang, string>; lead?: Record<Lang, string> }[] = [
  { base: '', eyebrow: 'beranda', title: { id: 'Rembang', en: 'Rembang' }, lead: { id: t('home.heroLead', 'id'), en: t('home.heroLead', 'en') } },
  { base: 'sejarah', eyebrow: 'sejarah', title: { id: 'Sejarah', en: 'History' }, lead: { id: t('sejarah.lead', 'id'), en: t('sejarah.lead', 'en') } },
  { base: 'budaya', eyebrow: 'budaya', title: { id: 'Budaya', en: 'Culture' }, lead: { id: t('budaya.lead', 'id'), en: t('budaya.lead', 'en') } },
  { base: 'kuliner', eyebrow: 'kuliner', title: { id: 'Kuliner', en: 'Cuisine' }, lead: { id: t('kuliner.lead', 'id'), en: t('kuliner.lead', 'en') } },
  { base: 'destinasi', eyebrow: 'destinasi', title: { id: 'Destinasi', en: 'Destinations' }, lead: { id: t('destinasi.lead', 'id'), en: t('destinasi.lead', 'en') } },
  { base: 'profil', eyebrow: 'profil', title: { id: 'Profil & Geografi', en: 'Profile & Geography' }, lead: { id: t('profil.lead', 'id'), en: t('profil.lead', 'en') } },
  { base: 'galeri', eyebrow: 'galeri', title: { id: 'Galeri', en: 'Gallery' }, lead: { id: t('galeri.lead', 'id'), en: t('galeri.lead', 'en') } },
  { base: 'peta', eyebrow: 'peta', title: { id: 'Peta Interaktif', en: 'Interactive Map' }, lead: { id: t('peta.lead', 'id'), en: t('peta.lead', 'en') } },
  { base: 'kredit', eyebrow: 'kredit', title: { id: 'Kredit & Lisensi', en: 'Credits & Licences' } },
  { base: '404', eyebrow: 'beranda', title: { id: 'Halaman tidak ditemukan', en: 'Page not found' } },
];

const COLLECTIONS = ['sejarah', 'budaya', 'kuliner', 'destinasi', 'galeri'] as const;

/** Selesaikan path berkas gambar dari ImageMetadata.src. */
function resolveAsset(src?: string): string | undefined {
  if (!src) return undefined;
  const root = process.cwd();
  const candidates = [src, resolve(root, src), join(root, 'src', src.replace(/^\//, ''))];
  return candidates.find((c) => existsSync(c));
}

export const getStaticPaths = (async () => {
  const paths: { params: { slug: string }; props: OgPageProps }[] = [];

  // Halaman statis, dua bahasa
  for (const page of STATIC_PAGES) {
    for (const lang of ['id', 'en'] as const) {
      const prefix = lang === 'en' ? 'en/' : '';
      const slug = `${prefix}${page.base || 'beranda'}`.replace(/\/+$/, '') || 'beranda';
      paths.push({
        params: { slug: `${slug}.jpg` },
        props: {
          eyebrow: EYEBROW[page.eyebrow]?.[lang] ?? 'Jelajah Rembang',
          title: page.title[lang],
          lead: page.lead?.[lang],
        },
      });
    }
  }

  // Halaman detail tiap koleksi
  for (const collection of COLLECTIONS) {
    const entries = await getCollection(collection);
    for (const entry of entries) {
      if (entry.data.draft) continue;
      const [lang, ...rest] = entry.id.split('/');
      const slugNoLang = rest.join('/');
      const l = (lang === 'en' ? 'en' : 'id') as Lang;
      const data = entry.data as {
        title: string;
        summary?: string;
        cover?: { src: string };
      };
      const prefix = l === 'en' ? 'en/' : '';
      paths.push({
        params: { slug: `${prefix}${collection}/${slugNoLang}.jpg` },
        props: {
          eyebrow: EYEBROW[collection]?.[l] ?? 'Jelajah Rembang',
          title: data.title,
          lead: data.summary,
          imageFile: resolveAsset(data.cover?.src),
        },
      });
    }
  }

  return paths;
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const jpeg = await renderOg(props as OgPageProps);
  return new Response(new Uint8Array(jpeg), {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
