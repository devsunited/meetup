import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../../reducers/huffelpuff-counter';
import { HuffelpuffCounterComponent } from '../../components/huffelpuff-counter/huffelpuff-counter.component';
import { AppState } from '../../shared/state';

@Component({
  moduleId: module.id,
  selector: 'du-huffelpuff-counter-container',
  directives: [HuffelpuffCounterComponent],
  template: `
    <du-huffelpuff-counter
      [count]="counter | async"
      [eventsList]="events | async"
      (increment)="increment()"
      (decrement)="decrement()"
      (reset)="reset()"
      ></du-huffelpuff-counter>
  `,
  styles: []
})
export class HuffelpuffCounterContainerComponent {

  counter: Observable<number>;

  events: Observable<any[]>;

  constructor(public store: Store<AppState>){
    // using string we have to explicitly add type
    this.events = store.select(state => state.huffelpuffCounter.events)
    this.counter = store.select(state => state.huffelpuffCounter.counter);
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }
  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }
  reset(){
    this.store.dispatch({ type: RESET });
  }

}
