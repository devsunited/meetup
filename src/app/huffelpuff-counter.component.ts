import { Component } from '@angular/core';

import {Store} from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from './huffelpuff-counter';
import { Observable } from 'rxjs/Observable';

interface AppState {
  counter: number;
}

@Component({
  selector: 'my-huffelpuff-counter',
  template: `
      <button (click)="increment()">Increment</button>
        <div>{{ counter | async | currency:'HUF':true:'1.2-2'}} Huffelpuff</div>
        <button (click)="decrement()">Decrement</button>
    `
})
export class MyHuffelpuffCounter {
  counter: Observable<number>;
  constructor(public store: Store<AppState>){
    this.counter = store.select('huffelpuffCounter');
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
