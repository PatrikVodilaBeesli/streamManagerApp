// tslint:disable:promise-function-async
// tslint:disable-next-line:no-implicit-dependencies
import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  public getTitleText(): Promise<string> {
    return element(by.css('app .content span')).getText() as Promise<string>;
  }
}
