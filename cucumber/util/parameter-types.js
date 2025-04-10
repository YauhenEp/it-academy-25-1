import { defineParameterType } from '@wdio/cucumber-framework';
import PageFactory from'../pageobjects/pageFactory.js';
import Utils from'./utils'

defineParameterType({
  regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
  name: 'locator',
  transformer: (string) => {
    if(string.indexOf(' > ') !== -1) {
      const array = string.split(' > ');
      return Utils.poParser(array, PageFactory);
    }

    return string;
  },
  useForSnippets: false
})