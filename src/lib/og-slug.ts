/**
 * og-slug.ts — pemetaan pathname halaman → slug OG.
 *
 * Dipakai bersama oleh endpoint `/og/[...slug].ts` dan `BaseHead.astro`
 * supaya penamaan berkas OG selalu sinkron tanpa impor berat (satori/sharp).
 *
 *   '/'                    → 'beranda'
 *   '/en'                  → 'en/beranda'
 *   '/kuliner/sate-srepeh' → 'kuliner/sate-srepeh'
 *   '/en/kuliner/sate-srepeh' → 'en/kuliner/sate-srepeh'
 */
export function ogSlugFor(pathname: string): string {
  const p = pathname.replace(/^\/+|\/+$/g, '');
  if (p === '') return 'beranda';
  if (p === 'en') return 'en/beranda';
  return p;
}
