import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';
import type { Lang } from './i18n';

export type { Lang };

/** Buang prefix bahasa dari ID entri: `id/sunan-bonang` → `sunan-bonang`. */
export function stripLang(id: string): string {
  return id.replace(/^(id|en)\//, '');
}

/** Bahasa sebuah entri, dari ID-nya. */
export function langOf(id: string): Lang {
  return id.startsWith('en/') ? 'en' : 'id';
}

interface HasBase {
  id: string;
  data: { draft?: boolean; order?: number; featured?: boolean; translationKey?: string };
}

/** Saring entri milik satu bahasa (dan buang draf). */
export function byLang<T extends HasBase>(entries: T[], lang: Lang): T[] {
  return entries.filter((e) => e.id.startsWith(`${lang}/`) && !e.data.draft);
}

/** Ambil semua entri satu koleksi untuk satu bahasa, terurut. */
export async function getLocalized<K extends CollectionKey>(
  collection: K,
  lang: Lang,
): Promise<CollectionEntry<K>[]> {
  const all = (await getCollection(collection)) as unknown as HasBase[];
  return (byLang(all, lang) as unknown as CollectionEntry<K>[]).sort(
    (a, b) => ((a.data as { order?: number }).order ?? 0) - ((b.data as { order?: number }).order ?? 0),
  );
}

/** Ambil entri unggulan (featured) untuk satu bahasa. */
export async function getFeatured<K extends CollectionKey>(
  collection: K,
  lang: Lang,
): Promise<CollectionEntry<K>[]> {
  const entries = await getLocalized(collection, lang);
  return entries.filter((e) => (e.data as { featured?: boolean }).featured);
}

/**
 * Cari pasangan terjemahan dari sebuah entri.
 * Dipakai untuk hreflang & tautan toggle bahasa.
 */
export async function translationOf<K extends CollectionKey>(
  collection: K,
  translationKey: string,
  lang: Lang,
): Promise<CollectionEntry<K> | undefined> {
  const all = (await getCollection(collection)) as unknown as HasBase[];
  return all.find(
    (e) => e.data.translationKey === translationKey && langOf(e.id) === lang,
  ) as unknown as CollectionEntry<K> | undefined;
}

/** Semua slug (tanpa prefix bahasa) untuk sebuah koleksi + bahasa. */
export async function slugsFor<K extends CollectionKey>(
  collection: K,
  lang: Lang,
): Promise<string[]> {
  const entries = await getLocalized(collection, lang);
  return entries.map((e) => stripLang(e.id));
}

/** Jumlah total entri publik (semua bahasa) untuk sebuah koleksi. */
export async function countAll<K extends CollectionKey>(collection: K): Promise<number> {
  const all = (await getCollection(collection)) as unknown as HasBase[];
  return all.filter((e) => !e.data.draft).length;
}
