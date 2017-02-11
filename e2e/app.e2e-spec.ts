import { WikipediaSearchAngular2Page } from './app.po';

describe('wikipedia-search-angular2 App', function() {
  let page: WikipediaSearchAngular2Page;

  beforeEach(() => {
    page = new WikipediaSearchAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
