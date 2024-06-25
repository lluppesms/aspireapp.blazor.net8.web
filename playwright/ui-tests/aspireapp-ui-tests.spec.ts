import { test, expect } from '@playwright/test';

test('find Home page', async ({ page, baseURL }) => {
  console.log('Test: Open website');
  console.log('Using Base URL: ' + baseURL);
  console.log('process.env.CI: ' + process.env.CI);
  console.log('process.env.TEST_ENVIRONMENT: ' + process.env.TEST_ENVIRONMENT);
  await page.goto('/');
  await expect(page).toHaveTitle(/Home/);
});

test('find Weather page', async ({ page, baseURL }) => {
  console.log('Test: Find Weather page');
  console.log('Using Base URL: ' + baseURL);
  console.log('process.env.CI: ' + process.env.CI);
  console.log('process.env.TEST_ENVIRONMENT: ' + process.env.TEST_ENVIRONMENT);
  await page.goto('/');
  await page.getByRole('link', { name: 'Weather' }).click();
  await expect(page.getByRole('heading', { name: 'Weather' })).toBeVisible();
});
