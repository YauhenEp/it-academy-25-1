import { $ } from '@wdio/globals'
import Base from './Base.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Base {
    /**
     * define selectors using getter methods
     */
    get pageHeader () {
        return $('.oxd-topbar-header-breadcrumb-module');
    }
}

export default MainPage;
