import MainPage from './main.page';
import LoginPage from './login.page';
import AdminPage from './admin.page';

class PageFactory {
  static 'Main Page' = new MainPage();
  static 'Login Page' = new LoginPage();
  static 'Admin Page' = new AdminPage();
}

export default PageFactory;