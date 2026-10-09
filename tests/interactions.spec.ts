import { test, expect } from '@playwright/test';

// Regresi: interaksi harus tetap hidup SETELAH navigasi client-side (View Transitions).
// Skrip modul hanya berjalan sekali, sementara DOM berganti setiap navigasi, sehingga
// listener yang tidak dipasang ulang di `astro:page-load` mati tanpa gejala saat
// setiap pengujian dimuat penuh. Semua tes di sini sengaja berpindah halaman lewat klik.

test.describe('Interaksi bertahan lintas navigasi', () => {
  test('menu seluler bekerja sebelum dan sesudah pindah halaman', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const toggle = page.locator('[data-menu-toggle]');
    const panel = page.locator('[data-menu-panel]');

    await toggle.click();
    await expect(panel).toBeVisible();
    await toggle.click();
    await expect(panel).toBeHidden();

    // Pindah lewat tautan di dalam panel (nav desktop tersembunyi di 390px).
    await toggle.click();
    await panel.locator('a[href="/sejarah/"]').click();
    await expect(page).toHaveURL(/\/sejarah\/$/);

    // Menu harus tetap berfungsi di halaman baru.
    await toggle.click();
    await expect(panel).toBeVisible();
    await toggle.click();
    await expect(panel).toBeHidden();
  });

  test('toggle tema bertahan setelah pindah halaman dan bertahan di localStorage', async ({ page }) => {
    await page.goto('/');

    const themeToggle = page.locator('[data-theme-toggle]');
    await themeToggle.click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

    await page.locator('a[href="/galeri/"]').first().click();
    await expect(page).toHaveURL(/\/galeri\/$/);

    // Tema ikut terbawa ke halaman baru, dan ikon tetap cocok dengan tema aktif.
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    const stored = await page.evaluate(() => localStorage.getItem('rembang-theme'));
    expect(stored).toBe('dark');

    // Tombol masih hidup di halaman baru.
    await themeToggle.click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('lightbox galeri membuka dan menutup setelah pindah halaman', async ({ page }) => {
    await page.goto('/galeri/');

    const thumb = page.locator('[data-lightbox]').first();
    const lightbox = page.locator('#lightbox');
    await thumb.click();
    await expect(lightbox).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(lightbox).toBeHidden();

    await page.locator('a[href="/"]').first().click();
    await expect(page).toHaveURL(/\/$/);
    await page.locator('a[href="/galeri/"]').first().click();
    await expect(page).toHaveURL(/\/galeri\/$/);

    await page.locator('[data-lightbox]').first().click();
    await expect(lightbox).toBeVisible();
    // Gambar benar-benar terpasang (bukan placeholder kosong).
    const src = await page.locator('#lb-img').getAttribute('src');
    expect(src).toBeTruthy();
    expect(src).not.toContain('data:image');
  });

  // Petakan: bukti peta matang adalah marker terpasang. Tile OSM adalah aset pihak
  // ketiga dan butuh jaringan, jadi hanya ditunggu (bukan diperkuat) supaya uji ini
  // tidak rapuh saat paralel.
  async function mapReady(page: import('@playwright/test').Page) {
    await page.locator('#rembang-map').scrollIntoViewIfNeeded();
    await expect(page.locator('.rembang-pin').first()).toBeAttached({ timeout: 15000 });
    await expect
      .poll(async () => page.locator('.leaflet-tile-loaded').count(), { timeout: 15000 })
      .toBeGreaterThan(0);
  }

  test('peta memasang marker lagi setelah kembali ke halaman peta', async ({ page }) => {
    await page.goto('/peta/');
    await mapReady(page);
    const pinsFirst = await page.locator('.rembang-pin').count();

    // Keluar lalu kembali lewat navigasi client-side (bukan muat penuh).
    await page.goto('/');
    await page.locator('a[href="/peta/"]').first().click();
    await expect(page).toHaveURL(/\/peta\/$/);

    await mapReady(page);
    // Jumlah pin sama: dipasang sekali, bukan tertumpuk.
    expect(await page.locator('.rembang-pin').count()).toBe(pinsFirst);
  });
});

test.describe('Counter angka', () => {
  test('counter menghitung naik dan berhenti persis di nilai SSR', async ({ page }) => {
    await page.goto('/');
    const counter = page.locator('[data-count]').first();
    const final = await counter.getAttribute('data-count-final');
    expect(final).toBe('669.145');

    await counter.scrollIntoViewIfNeeded();

    // Cuplik di tengah animasi: harus berupa angka positif yang sedang berubah.
    const mid = await counter.innerText();
    expect(mid).toMatch(/^\d{1,3}(\.\d{3})*$/);

    // Setelah animasi selesai, teks musti sama persis dengan nilai SSR.
    await expect(counter).toHaveText(final!, { timeout: 5000 });
  });

  test('counter tidak pernah menampilkan angka negatif', async ({ page }) => {
    await page.goto('/');

    // Amati setiap perubahan teks sejak frame pertama.
    await page.evaluate(() => {
      const seen: string[] = [];
      (window as unknown as { __negatives: string[] }).__negatives = seen;
      const check = () => {
        document.querySelectorAll('[data-count]').forEach((el) => {
          const value = (el.textContent || '').trim();
          if (/^-|NaN/.test(value)) seen.push(value);
        });
      };
      const io = new MutationObserver(check);
      io.observe(document.body, { subtree: true, childList: true, characterData: true });
    });

    await page.locator('[data-count]').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);

    const negatives = await page.evaluate(
      () => (window as unknown as { __negatives: string[] }).__negatives,
    );
    expect(negatives).toEqual([]);
  });
});

test.describe('Reveal judgement', () => {
  test('judul hero muncul, tidak tertinggal di opacity 0', async ({ page }) => {
    await page.goto('/');
    const heroTitle = page.locator('h1 [data-reveal-clip-inner]');
    await expect(heroTitle).toHaveText('Rembang');
    // Elemen yang ter-clip punya luas irisan nol, jadi masker harus ada di anak.
    await expect(heroTitle).toBeVisible();
    await expect
      .poll(async () => page.locator('h1 [data-reveal="clip"]').getAttribute('class'))
      .toBeTruthy();
    const opacity = await page.locator('h1 [data-reveal-clip-inner]').evaluate(
      (el) => getComputedStyle(el).opacity,
    );
    expect(Number(opacity)).toBeGreaterThan(0.9);
  });
});
