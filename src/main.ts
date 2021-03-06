import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

import { AppComponent, environment, huffelpuffCounter } from './app';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideStore( { huffelpuffCounter } ),
  FIREBASE_PROVIDERS,
  defaultFirebase('https://angularattack2016-devsunited.firebaseio.com')
]);
