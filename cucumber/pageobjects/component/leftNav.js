class LeftNav {
  async getLeftNavItemByName(itemName) {
    return $(`//*[contains(@class,"oxd-main-menu-item--name") and text()="${itemName}"]`)
  }

  async goToPageByItem(itemName) {
    await (await this.getLeftNavItemByName(itemName)).waitForDisplayed();
    await (await this.getLeftNavItemByName(itemName)).click();
  }
}

export default new LeftNav();