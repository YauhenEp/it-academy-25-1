import { test, expect } from '@playwright/test';

test.describe('Onliner test', async () => {

  test('should get error notification with wrong credentials', async ({page}) => {
    await page.goto('https://www.onliner.by/');
    await page.locator('.auth-bar__item.auth-bar__item--text').click();
    await page.locator('[placeholder="Ник или e-mail"]').fill('Login Name');
    await page.locator('[placeholder="Пароль"]').fill('Password')
    await page.locator('.auth-button_primary').click();
    await expect(await page.locator('.auth-form__description_error')).toHaveText('Неверный логин или пароль')
  });
});