import { expect, test } from '@playwright/test';

const productSlugs = [
  'midnight-chrono',
  'royal-cufflinks',
  'executive-wallet',
  'golden-era',
  'diamond-cascade-necklace',
  'business-briefcase',
  'italian-silk-tie',
  'platinum-signet-ring',
  'classic-tourbillon',
  'alligator-leather-belt',
  'leather-handbag',
  'emerald-elegy'
];

test('primary and generated routes render', async ({ page }) => {
  for (const route of ['/', '/products', '/events', '/about']) {
    const response = await page.goto(route);
    expect(response?.ok(), route).toBeTruthy();
    await expect(page.locator('main h1')).toBeVisible();
  }
  for (const slug of productSlugs) {
    const response = await page.goto(`/products/${slug}`);
    expect(response?.ok(), slug).toBeTruthy();
    await expect(page.locator('main h1')).toBeVisible();
  }
});

test('legacy entry points map to clean routes', async ({ page }) => {
  await page.goto('/product.html');
  await expect(page).toHaveURL(/\/products$/);
  await page.goto('/event.html');
  await expect(page).toHaveURL(/\/events$/);
  await page.goto('/aboutus.html');
  await expect(page).toHaveURL(/\/about$/);
  await page.goto('/product-detail.html?id=12');
  await expect(page).toHaveURL(/\/products\/emerald-elegy$/);
  await page.goto('/product-detail.html?id=999');
  await expect(page).toHaveURL(/\/products$/);
});

test('mobile navigation opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const button = page.getByRole('button', { name: 'Open Menu' });
  await button.click();
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#mobile-menu')).toHaveClass(/active/);
  await button.click();
  await expect(button).toHaveAttribute('aria-expanded', 'false');
});

test('testimonial controls and newsletter demo work', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.testimonials__slide.active')).toContainText('Jonathan Pierce');
  await page.getByRole('button', { name: 'Next testimonial' }).click();
  await expect(page.locator('.testimonials__slide.active')).toContainText('Elizabeth Chen');

  await page.getByLabel('Your Email Address').fill('invalid');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await expect(page.getByText('Please enter a valid email address.')).toBeVisible();
  await page.getByLabel('Your Email Address').fill('client@example.com');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await expect(page.getByText('Thank you for subscribing to our newsletter!')).toBeVisible({ timeout: 3000 });
});

test('collection filters, sorts, video control, and consultation work', async ({ page }) => {
  await page.goto('/products');
  await expect(page.locator('[data-product-card]')).toHaveCount(12);
  await page.getByRole('button', { name: 'Watches' }).click();
  await expect(page.locator('[data-product-card]:visible')).toHaveCount(3);
  await page.getByRole('button', { name: 'All Products' }).click();
  await page.getByLabel('Sort by:').selectOption('price-asc');
  await expect(page.locator('[data-product-card]').first()).toHaveAttribute('data-name', 'Italian Silk Tie');

  await page.locator('#brand-trailer').evaluate((video) => video.dispatchEvent(new Event('play')));
  await expect(page.locator('#video-play-btn')).toHaveClass(/hidden/);
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Successfully booked a consultation.');
    await dialog.accept();
  });
  await page.getByRole('link', { name: 'Book a Consultation' }).click();
});

test('product controls validate, disclose, notify, and order', async ({ page }) => {
  await page.goto('/products/midnight-chrono');
  const quantity = page.getByRole('spinbutton', { name: 'Quantity' });
  await quantity.fill('11');
  await expect(quantity).toHaveValue('10');
  await expect(page.getByText('Maximum quantity is 10')).toBeVisible();
  await page.getByRole('button', { name: 'Shipping & Returns' }).click();
  await expect(page.getByRole('button', { name: 'Shipping & Returns' })).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByText('Item added to cart')).toBeVisible();

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Proceeding to checkout');
    await dialog.accept();
  });
  await page.getByRole('button', { name: 'Order Now' }).click();
});

test('model application validates and reaches success state', async ({ page }) => {
  await page.goto('/events');
  await page.getByRole('button', { name: 'Submit Application' }).click();
  await expect(page.getByText('Please correct the errors in the form.')).toBeVisible();
  await page.getByLabel('Full Name *').fill('Ari Wijaya');
  await page.getByLabel('Email Address *').fill('ari@example.com');
  await page.getByLabel('Date of Birth *').fill('2000-01-01');
  await page.getByLabel('Female').check();
  await page.getByLabel('Height (cm) *').fill('180');
  await page.getByLabel(/I agree to the/).check();
  await page.getByRole('button', { name: 'Submit Application' }).click();
  await expect(page.getByText('Thank you for your application! We will contact you soon.')).toBeVisible();
});

test('unknown route renders custom 404', async ({ page }) => {
  const response = await page.goto('/not-a-real-route');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'Page Not Found' })).toBeVisible();
});
