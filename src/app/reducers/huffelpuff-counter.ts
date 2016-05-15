import {Reducer, Action} from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const RECEIVED_FROM_EVENTS = 'RECEIVED_FROM_EVENTS';

const initState = {
  counter: 0,
  events: [],
};
const oneHuffelpuff = 100000;

type StateShape = {
  counter: number;
  events: any;
}

export const huffelpuffCounter:Reducer<StateShape> = (state: StateShape = initState, action:Action) => {

  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        counter: state.counter + oneHuffelpuff
      });

    case DECREMENT:
      return Object.assign({}, state, {
        counter: state.counter - oneHuffelpuff
      });

    case RESET:
      return Object.assign({}, state, {
        counter: 0
      });

    case RECEIVED_FROM_EVENTS:
      return Object.assign({}, state, { events: action.payload });

    default:
      console.log(`unhandled action: ${action.type}`);
      return state;
  }
}
