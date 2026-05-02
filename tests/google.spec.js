import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');

test('Google search test', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});