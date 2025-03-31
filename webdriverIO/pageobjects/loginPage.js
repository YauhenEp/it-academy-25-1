import { Base } from './Base';

class LoginPage extends Base {
  get usernameField() {
    return $('[name="username"]');
  }

  get passwordField() {
    return $('[name="password"]')
  }

  get loginButton() {
    return $('.orangehrm-login-button')
  }

  get errorNotification() {
    return $('.oxd-alert-content-text')
  }

  async login(username, password) {
    await this.usernameField.waitForDisplayed();
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }
}

export { LoginPage };