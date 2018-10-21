import { browser, by, element, Key } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getHeadingText() {
    return element(by.css('app-root h1')).getText();
  }

  getCopyrightText() {
    return element(by.css('app-root .copyright')).getText();
  }

  getDefaultResults() {
    return element.all(by.css('.single-recipe'));
  }


  getSearchButtonElement() {
    return  element(by.css('app-root .search-button'));
  }

}
