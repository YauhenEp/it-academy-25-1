import { When } from '@wdio/cucumber-framework';
import leftNav from "../pageobjects/component/leftNav.js";
import {waitForLoadState} from "../helpers/waiters.js";

When("I click on {locator} element", async function (selector) {
  await $(selector).waitForClickable();
  await $(selector).click();
})

When("I go to page by menu item {string}", async function (text) {
  await leftNav.goToPageByItem(text);
})

When("I fill field {string} with text {string}", async function (selector, text) {
  await $(selector).waitForDisplayed();
  await $(selector).setValue(text);
})

When("I select option {string} from dropdown {locator}", async function(text, selector) {
  await waitForLoadState();
  await $(selector).waitForDisplayed();
  await $(selector).click();
  // await $(selector).click();
  // await browser.pause(1000)
  await $(`//div[contains(@class,'oxd-select-option')]//span[text()='${text}']`).waitForDisplayed();
  await $(`//div[contains(@class,'oxd-select-option')]//span[text()='${text}']`).click();
})