import { browser } from '@wdio/globals'

export default class Base {
    open (endpoint) {
        return browser.url(`https://opensource-demo.orangehrmlive.com/${endpoint ? endpoint : ''}`)
    }
}
