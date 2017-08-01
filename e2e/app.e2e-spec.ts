import { BudgularPage } from './app.po';

describe('budgular App', () => {
  let page: BudgularPage;

  beforeEach(() => {
    page = new BudgularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
