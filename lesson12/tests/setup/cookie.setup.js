import { test as setup } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../../playwright/.auth/user.json');

setup('Close cookies', async ({page}) => {
  await page.goto('https://www.onliner.by/');
  await page.locator('#submit-button').click();
  await page.waitForTimeout(5000)
  await page.waitForLoadState('load');
  await page.context().storageState({ path: authFile });
})