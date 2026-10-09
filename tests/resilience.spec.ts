import { test, expect } from '@playwright/test';

// Semua gerak WAJIB mati di prefers-reduced-motion: reveal langsung tampil,
// counter berhenti di nilai SSR, tanpa parallax/marquee/float.
test.describe('reduced motion', () => {
  test.use({ reducedMotion: 'reduce' });

  test('reveal langsung tampil, gerak lain mati', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(700);

    // Semua [data-reveal] langsung is-visible dan opacity 1.
    const reveal = await page.locator('[data-reveal]').evaluateAll((els) =>
      els.map((e) => ({
        visible: e.classList.contains('is-visible'),
        opacity: getComputedStyle(e).opacity,
      })),
    );
    expect(reveal.length).toBeGreaterThan(0);
    for (const r of reveal) {
      expect(r.visible).toBe(true);
      expect(Number(r.opacity)).toBe(1);
    }

    // Marquee, float, underline: animasi mati.
    const anims = await page.evaluate(() => {
      const get = (sel: string) => {
        const el = document.querySelector(sel);
        return el ? getComputedStyle(el).animationName : 'absent';
      };
      return {
        marquee: get('.marquee-track'),
        float: get('.float-soft'),
        underline: document.querySelector('[data-underline]')
          ? getComputedStyle(document.querySelector('[data-underline]')!, '::after').transform
          : 'no-underline-on-this-page',
      };
    });
    expect(anims.marquee).toBe('none');
    expect(anims.float).toBe('none');

    // Parallax tidak pernah digerakkan.
    const parallax = await page.locator('[data-parallax]').evaluate((el) => el.style.transform || 'none').catch(() => 'absent');
    expect(parallax === 'none' || parallax === 'absent').toBe(true);
  });

  test('counter tetap menampilkan nilai SSR (tidak beranimasi)', async ({ page }) => {
    await page.goto('/');
    const counter = page.locator('[data-count]').first();
    const final = await counter.getAttribute('data-count-final');

    await counter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(counter).toHaveText(final!);

    // Tidak ada penanda "sudah beranimasi" yang menyebabkan layout shift.
    const done = await counter.getAttribute('data-count-final');
    expect(done).toBe(final);
  });
});

test.describe('tanpa JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('beranda, statistik, dan konten tetap terbaca', async ({ page }) => {
    await page.goto('/');

    // Judul hero terlihat penuh (reveal tidak menyembunyikan konten).
    await expect(page.locator('h1 [data-reveal-clip-inner]')).toHaveText('Rembang');
    await expect(page.locator('h1 [data-reveal-clip-inner]')).toBeVisible();

    // Nilai statistik: nilai final dari SSR, bukan nol atau kosong.
    const counts = await page.locator('[data-count]').allInnerTexts();
    expect(counts).toContain('669.145');
    expect(counts).toContain('14');

    // Tidak ada yang tersembunyi oleh sistem reveal.
    const hidden = await page.locator('[data-reveal]').evaluateAll(
      (els) => els.filter((e) => getComputedStyle(e).opacity !== '1').length,
    );
    expect(hidden).toBe(0);

    // Kisi identitas (motif batik) tetap dirender sebagai SVG.
    expect(await page.locator('svg').count()).toBeGreaterThan(3);
  });

  test('halaman detail & daftar destinasi tetap terbaca', async ({ page }) => {
    await page.goto('/destinasi/');
    await expect(page.locator('h1')).toBeVisible();
    await page.goto('/kuliner/sate-srepeh/');
    await expect(page.locator('h1')).toBeVisible();
    await page.goto('/peta/');
    // Daftar destinasi teks tetap terbaca walau peta butuh JS.
    await expect(page.getByText('Daftar destinasi')).toBeVisible();
  });
});

test.describe('Peta klien-side', () => {
  test('memuat Leaflet & menampilkan marker', async ({ page }) => {
    await page.goto('/peta/');
    const map = page.locator('#rembang-map');
    await map.scrollIntoViewIfNeeded();
    await expect(page.locator('.rembang-pin').first()).toBeAttached({ timeout: 15000 });
    // Tile dari tile.openstreetmap.org: aset pihak ketiga, hanya ditunggu.
    await expect
      .poll(async () => page.locator('.leaflet-tile-loaded').count(), { timeout: 15000 })
      .toBeGreaterThan(0);
    // Legenda & daftar teks hadir (konten sejati, bukan hanya kanvas).
    await expect(page.getByText('Keterangan')).toBeVisible();
    await expect(page.locator('[data-menu-panel]')).toHaveCount(1);
  });
});
