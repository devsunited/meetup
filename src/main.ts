import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2QuickstartAppComponent, environment } from './app/';
import { provideStore } from '@ngrx/store';


import { huffelpuffCounter } from './app/huffelpuff-counter';


if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2QuickstartAppComponent, [
  provideStore({huffelpuffCounter})
]);
