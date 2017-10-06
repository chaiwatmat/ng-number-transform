import { AngularTestingTrainingPage } from './app.po';

describe('angular-testing-training App', function() {
  let page: AngularTestingTrainingPage;

  beforeEach(() => {
    page = new AngularTestingTrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
