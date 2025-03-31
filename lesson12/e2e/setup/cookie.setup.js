import { test as setup } from '@playwright/test';
import path from 'path';
import {MainPage} from "../../page-objects/mainPage";

const authFile = path.join(__dirname, '../../playwright/.auth/user.json');

setup('Close cookies', async ({page}) => {
  const mainPage = new MainPage(page)
  await mainPage.navigate('https://www.douglas.de/')
  await page.waitForTimeout(4000);
  await mainPage.acceptCookies();
  await page.waitForTimeout(5000)
  await page.waitForLoadState('load');
  await page.context().storageState({ path: authFile });
})