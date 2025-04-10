async function waitForChangeText(selector, expectedText, timeout = 10000) {
  return browser.waitUntil(() => {
    return $(selector).getText() === expectedText;
  }, {
    timeout: timeout,
    timeoutMsg: `Text in web element with selector ${selector} does equal ${expectedText}, text is ${await $(selector).getText()}`
  })
}

async function waitForLoadState(timeout = 10000) {
  return browser.waitUntil(() => {
    return () => browser.execute(
      () => document.readyState === 'complete');
  }, {
    timeout: timeout,
    timeoutMsg: `Load state is not ready after ${timeout}`,
  })
}

export  {waitForLoadState}