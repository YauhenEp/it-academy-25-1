import { $ } from '@wdio/globals'
import Base from './Base.js';

class AdminPage extends Base {
  constructor() {
    super();
  }
  get 'Add Button'() {
    return ".orangehrm-header-container button.oxd-button--secondary";
  }

  get 'User Dropdown'() {
    return "//label[text()='User Role']/..//following-sibling::div//*[@class='oxd-select-text-input']";
  }

  get 'Status Dropdown' () {
    return "//label[text()='Status']/..//following-sibling::div//*[@class='oxd-select-text-input']";
  }

  get 'Enable Option'() {
    return "//div[@class='oxd-select-option']//span[text()='Enabled']"
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login (username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }

}

export default AdminPage;