import { Base } from './Base';

class MainPage extends Base {
  get mainBanner() {
    return $('.oxd-brand-banner img');
  }
}

export { MainPage };