import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const sectionIds = [
  'about',
  'skills',
  'experience',
  'education',
  'projects',
  'certifications'
];

test('home page exposes its primary navigation and actions', async ({
  page
}) => {
  await page.goto('/');

  await expect(page).toHaveTitle(
    'Rigved Patki - Senior Full-Stack Engineer | Portfolio'
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /Senior Full-Stack Engineer with 9\+ years/
  );
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Rigved Patki'
  );
  await expect(page.getByText('Senior Full-Stack Engineer')).toBeVisible();
  await expect(
    page.getByText(
      'Frontend architecture, cloud-native systems, and technical leadership'
    )
  ).toBeVisible();

  for (const sectionId of sectionIds) {
    await expect(page.locator(`#${sectionId}`)).toHaveCount(1);
    await expect(
      page.locator(`a[href="/#${sectionId}"]`).first()
    ).toBeVisible();
  }

  for (const name of ['LinkedIn profile', 'GitHub profile']) {
    const link = page.getByRole('link', { name }).first();
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }

  const resume = page.getByRole('link', { name: 'Download Resume' });
  const resumePath = await resume.getAttribute('href');
  expect(resumePath).toBeTruthy();

  const response = await page.request.get(resumePath!);
  expect(response.ok()).toBeTruthy();
  expect(response.headers()['content-type']).toContain('application/pdf');
});

test('section links update the URL fragment', async ({ page }) => {
  await page.goto('/');
  await page.emulateMedia({ reducedMotion: 'reduce' });

  await page.locator('a[href="/#projects"]').first().click();
  await expect(page).toHaveURL(/#projects$/);
});

test('theme control changes and persists the selected theme', async ({
  page
}) => {
  await page.goto('/');

  const themeControl = page.getByRole('checkbox', {
    name: 'Toggle theme between light and dark mode'
  });
  const initialTheme = await page.locator('html').getAttribute('data-theme');

  await page.locator('label', { has: themeControl }).click();
  const expectedTheme = initialTheme === 'dark' ? 'light' : 'dark';
  await expect(page.locator('html')).toHaveAttribute(
    'data-theme',
    expectedTheme
  );

  await page.reload();
  await expect(page.locator('html')).toHaveAttribute(
    'data-theme',
    expectedTheme
  );
});

test('home page has no automatically detectable accessibility violations', async ({
  page
}) => {
  await page.goto('/');

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('unknown routes render the recovery page', async ({ page }) => {
  const response = await page.goto('/missing-page');

  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole('heading', { name: 'This page could not be found.' })
  ).toBeVisible();
  await expect(
    page.getByRole('navigation', { name: 'Page recovery' })
  ).toBeVisible();
});
