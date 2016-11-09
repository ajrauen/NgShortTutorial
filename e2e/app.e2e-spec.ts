import { TogetherPage } from './app.po';

describe('together App', function() {
  let page: TogetherPage;

  beforeEach(() => {
    page = new TogetherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
