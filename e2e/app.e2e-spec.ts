import { R1WebinarAppPage } from './app.po';

describe('r1-webinar-app App', function() {
  let page: R1WebinarAppPage;

  beforeEach(() => {
    page = new R1WebinarAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
