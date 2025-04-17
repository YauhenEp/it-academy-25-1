import { Base } from "./Base";

class LoginPage extends Base {
  get usernameField() {
    return $('[name="username"]');
  }

  get passwordField() {
    return $('[name="password"]');
  }

  get loginButton() {
    return $(".orangehrm-login-button");
  }

  /**
   * @returns {*}
   */
  get errorNotification() {
    return $(".oxd-alert-content-text");
  }

  /**
   *
   * @param username
   * @param password
   * @returns {Promise<void>}
   */
  async login(username, password) {
    await this.usernameField.waitForDisplayed();
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }
}

export { LoginPage };
