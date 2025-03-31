import { test, expect } from '@playwright/test';
import {Navigation} from "../page-objects/components/navigation";
import {Filter} from "../page-objects/components/filter";
import {MainPage} from "../page-objects/mainPage";

test.describe('Filter options test', async () => {

  test('should change filter type when choose desc option', async ({page}) => {
    const navigation = new Navigation(page);
    const filter = new Filter(page);
    const mainPage = new MainPage(page);

    await mainPage.navigate('https://www.douglas.de/');
    await navigation.goToPageByName('make-up');
    await filter.selectPriceRange('100', '1000');
  });
});