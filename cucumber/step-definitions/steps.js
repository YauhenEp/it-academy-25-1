import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import MainPage from '../pageobjects/main.page.js';

const loginPage = new LoginPage();
const mainPage = new MainPage();

Given(/^I am on the main page$/, async function () {
    // const world = this;
    // console.log('world = ', world)
    // world.attr = 'Hello World'
    await loginPage.open();
});

When(/^I login with (\w+) and (.+)$/, async function (username, password)  {
    // const world = this;
    // console.log('world 2 = ', world)
    await loginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(mainPage.pageHeader).toBeExisting();
    await expect(mainPage.pageHeader).toHaveText(expect.stringContaining(message));
});

