import Base from "../base";

class Filter extends Base {
  constructor(page) {
    super(page);
  }

  get showMoreFilters() {
    return '.facet-list__show-more';
  }

  get sortTypeDropdown() {
    return '.dropdown__input';
  }

  get selectDropdown() {
    return '.dropdown__select';
  }

  get minPriceField() {
    return '#preis-from';
  }

  get maxPriceField() {
    return 'preis-to';
  }

  get approveFilterButton() {
    return '.facet-slider__close-button'
  }

  get filterContentSearch() {
    return `.facet__menu-content .input__input`;
  }

  async getFilterByName(filterName) {
    return `//*[@class='facet__title' and contains(text(),'${filterName}')]/span`
  }

  async getCheckboxOptionByName(optionName) {
    return `//*[contains(@class,'link--text facet-option')]//*[contains(text(),'${optionName}')]//ancestor::div[@class='facet-option__label']//preceding-sibling::span/input`;
  }

  async openFilterByName(filerName) {
    await this.page.waitForLoadState('load');
    await this.page.locator(await this.getFilterByName(filerName)).click();
  }

  async selectPriceRange(minPrice, maxPrice) {
    await this.openFilterByName('Preis');
    await this.page.locator(this.minPriceField).fill(minPrice);
    await this.page.locator(this.maxPriceField).fill(maxPrice);
    await this.page.locator(this.approveFilterButton).click();
  }

  async selectFilterOptionsWithSearch(filterName, ...optionsName) {
    for (let option of optionsName) {
      await this.openFilterByName(filterName);
      await this.page.locator(this.filterContentSearch).fill(option);
      await this.page.locator(this.getCheckboxOptionByName(option)).click();
    }
  }

  async selectFilterOptions(filterName, ...optionsName) {
    for (let option of optionsName) {
      await this.openFilterByName(filterName);
      await this.page.locator(this.getCheckboxOptionByName(option)).click();
    }
  }
}

export { Filter };