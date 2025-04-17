import { Base } from "./Base";

class MainPage extends Base {
  get mainBanner() {
    return $(".oxd-brand-banner img");
  }

  obj = {
    value: "123",
    cat: "murka",
  };
}

export { MainPage };
