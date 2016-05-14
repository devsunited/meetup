export class Angular2QuickstartPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-quickstart-app h1')).getText();
  }
}
