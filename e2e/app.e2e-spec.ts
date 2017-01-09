import { Angular2TeslaCalculatorPage } from './app.po';

describe('angular2-tesla-calculator App', function() {
  let page: Angular2TeslaCalculatorPage;

  beforeEach(() => {
    page = new Angular2TeslaCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
