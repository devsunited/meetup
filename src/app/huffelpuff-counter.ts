import {Reducer, Action} from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

const initState = 0;
const oneHuffelpuff = 100000;

export const huffelpuffCounter:Reducer<number> = (state:number = initState, action:Action) => {

  switch (action.type) {
    case INCREMENT:
      return state + oneHuffelpuff;

    case DECREMENT:
      return state - oneHuffelpuff;

    case RESET:
      return 0;

    default:
      return state;
  }
}
