import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Store } from '@ngrx/store';
import { AppState } from './state';

@Injectable()
export class FirebaseDispatcherService {

  constructor(af: AngularFire, store: Store<AppState>) {
    af.list('/events').do(data => {
      store.dispatch({
        type: 'RECEIVED_FROM_EVENTS',
        payload: data,
      });
    }).subscribe();
  }
}
