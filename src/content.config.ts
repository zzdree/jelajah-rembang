import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Model konten: satu berkas = satu bahasa.
 * ID entri berformat `{lang}/{slug}` — mis. `id/sunan-bonang`, `en/sunan-bonang`.
 * `translationKey` menjodohkan pasangan id↔en (dipakai untuk hreflang & toggle bahasa).
 */

const md = { pattern: '**/*.{md,mdx}' } as const;

/** Frontmatter bersama semua koleksi naratif. */
const base = {
  translationKey: z.string(),
  title: z.string(),
  summary: z.string().max(280),
  coverAlt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  updated: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  order: z.number().default(0),
  featured: z.boolean().default(false),
  sources: z.array(z.string()).default([]),
};

const sejarah = defineCollection({
  loader: glob({ ...md, base: './src/content/sejarah' }),
  schema: ({ image }) =>
    z.object({
      ...base,
      cover: image().optional(),
      era: z.string().optional(),
      year: z.string().optional(),
      places: z.array(z.string()).default([]),
    }),
});

const budaya = defineCollection({
  loader: glob({ ...md, base: './src/content/budaya' }),
  schema: ({ image }) =>
    z.object({
      ...base,
      cover: image().optional(),
      category: z.enum(['batik', 'pertunjukan', 'tradisi', 'arsitektur', 'warisan']),
    }),
});

const kuliner = defineCollection({
  loader: glob({ ...md, base: './src/content/kuliner' }),
  schema: ({ image }) =>
    z.object({
      ...base,
      cover: image().optional(),
      type: z.enum(['makanan', 'minuman', 'jajanan']),
      origin: z.string(),
      ingredients: z.array(z.string()).default([]),
    }),
});

const destinasi = defineCollection({
  loader: glob({ ...md, base: './src/content/destinasi' }),
  schema: ({ image }) =>
    z.object({
      ...base,
      cover: image().optional(),
      kind: z.enum(['pantai', 'museum', 'religi', 'alam', 'pulau', 'embung', 'hutan']),
      kecamatan: z.string(),
      // [lat, lng] — hanya diisi bila koordinatnya yakin. Jangan mengarang.
      coords: z.tuple([z.number(), z.number()]).optional(),
      access: z.string().optional(),
      hours: z.string().optional(),
      ticket: z.string().optional(),
    }),
});

const galeri = defineCollection({
  loader: glob({ ...md, base: './src/content/galeri' }),
  schema: ({ image }) =>
    z.object({
      translationKey: z.string(),
      title: z.string(),
      summary: z.string().optional(),
      cover: image().optional(),
      photos: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
            credit: z.string().optional(),
          }),
        )
        .default([]),
      updated: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

export const collections = { sejarah, budaya, kuliner, destinasi, galeri };
