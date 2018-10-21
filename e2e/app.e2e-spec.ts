import { AppPage } from './app.po';

describe('recipes-search-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  /**
  * This e2e test checks if page title is displayed in header
  * @success: if page title is present and the same it should be
  * @false: if page title is not present or is not the same as it should be
  */
  it('Should display page title', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Recipes search app');
  });

  /**
  * This e2e test if copyright text is loaded in footer
  * @success: if copyright text is present and the same it should be
  * @false: if copyright text is not present or is not the same as it should be
  */
  it('Should display copyright text', () => {
    page.navigateTo();
    expect(page.getCopyrightText()).toEqual('Copyright Dejan Lužnic 18.10.2018');
  });

  /**
  * This e2e test check if on page load, default results are loaded
  * @success: if default recipes are present on page load
  * @false: if there are not default recipes present on page load
  */
  it('Should load default recipes on load', () => {
    page.navigateTo();
    expect(page.getDefaultResults().count()).toBe(10);
  });

  /**
  * This e2e test if search button click is working,
  * @success: if on seach button click loards results test is success
  * @false: if on search button click recipes are not loaded test fails
  */
  it('Should fire request to server and load recipes on search click', () => {
    page.navigateTo();
    page.getSearchButtonElement().click();
    expect(page.getDefaultResults().count()).toBe(10);
});

});
