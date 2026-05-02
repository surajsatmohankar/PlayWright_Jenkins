import { test, expect } from '@playwright/test';

test('Google search test', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});

test('Login test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');

  await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');
});


test('API GET request', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
  
});

test('Dropdown selection', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');

  await page.selectOption('#oldSelectMenu', '2');

  const value = await page.locator('#oldSelectMenu').inputValue();
  expect(value).toBe('2');

});