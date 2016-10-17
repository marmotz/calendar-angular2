import { CalendarAngular2Page } from './app.po';

describe('calendar-angular2 App', function() {
  let page: CalendarAngular2Page;

  beforeEach(() => {
    page = new CalendarAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
