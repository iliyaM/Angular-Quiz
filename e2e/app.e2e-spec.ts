import { AngularQuizPage } from './app.po';

describe('angular-quiz App', () => {
  let page: AngularQuizPage;

  beforeEach(() => {
    page = new AngularQuizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
