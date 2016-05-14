import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2QuickstartAppComponent } from '../app/angular2-quickstart.component';

beforeEachProviders(() => [Angular2QuickstartAppComponent]);

describe('App: Angular2Quickstart', () => {
  it('should create the app',
      inject([Angular2QuickstartAppComponent], (app: Angular2QuickstartAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-quickstart works!\'',
      inject([Angular2QuickstartAppComponent], (app: Angular2QuickstartAppComponent) => {
    expect(app.title).toEqual('angular2-quickstart works!');
  }));
});
