import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';

import { AppComponent, environment } from './app';
import { huffelpuffCounter } from './app/reducers';


if (environment.production) {
  enableProdMode();
}


bootstrap(AppComponent, [
  provideStore( { huffelpuffCounter } )
]);
