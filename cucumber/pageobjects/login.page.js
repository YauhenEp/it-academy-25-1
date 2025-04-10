import { $ } from '@wdio/globals'
import Base from './Base.js';

class LoginPage extends Base {
    constructor() {
        super();
    }
    get usernameField() {
        return $('[name="username"]');
    }

    get passwordField () {
        return $('[name="password"]');
    }

    get loginButton () {
        return $('.orangehrm-login-button');
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

export default LoginPage;
