import Base from "../base";

class Navigation extends Base {
  constructor(page) {
    super(page);
    this.haare = '[aria-label="HAARE"] a'
  }

  get angebotItem() {
    return '[aria-label="Angebote"] a';
  }

  get parfumItem() {
    return '[aria-label="PARFUM"] a';
  }

  async getNavMenuItemByName(itemName) {
    const items = {
      parfum: '[aria-label="PARFUM"] a',
      angebot: '[aria-label="Angebote"] a',
      haare: '[aria-label="HAARE"] a',
      'make-up': '[aria-label="MAKE-UP"] a',
    }
    console.log(items[itemName])
    return items[itemName]
  }

  // async getNavMenuItemByName(itemName) {
  //   return `//*[contains(@class,"link--nav-heading") and contains(text(),"${itemName}")]`
  // }

  async goToPageByName(itemName) {
    await this.page.locator(await this.getNavMenuItemByName(itemName)).click();
  }
}

export  { Navigation };