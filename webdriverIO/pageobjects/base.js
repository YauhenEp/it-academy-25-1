class Base {
  async navigate(url) {
    await browser.url(url);
  }
}
export { Base };