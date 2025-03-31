const Base = require('./Base');

class MainPage extends Base {
  constructor(page) {
    super(page);
  }
  get acceptCookiesButton() {
    return `button.sc-dcJsrY.eIFzaz`
  }

  async acceptCookies() {
    await this.page.locator(this.acceptCookiesButton, {hasText: 'ALLE ERLAUBEN'}).click();
  }
}

export {MainPage}