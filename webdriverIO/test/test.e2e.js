import {LoginPage} from '../pageobjects/loginPage';
import {MainPage} from '../pageobjects/mainPage';
import {expect} from 'chai';

const loginPage = new LoginPage();
const mainPage = new MainPage();

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginPage.login('Admin', 'admin123');
        expect(await mainPage.mainBanner.isDisplayed()).to.be.true;
    })

    it('should login with valid credentials', async () => {
        await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginPage.login('dsfdfdsf', 'dsfdfds');
        expect(await loginPage.errorNotification.getText()).to.equal('Invalid credentials');
    })
})

