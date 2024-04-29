import { Action } from './actions';
import { DECREMENT, INCREMENT } from './constant';

export type AppState={
  counter:number
}

const initialState:AppState = {
  counter: 0,
};

export const CounterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      if (action.payload) {
        return { ...state, counter: state.counter + action.payload };
      } else {
        return { ...state, counter: state.counter + 1 };
      }
    case DECREMENT:
      if (action.payload) {
        return { ...state, counter: state.counter - action.payload };
      } else {
        return { ...state, counter: state.counter - 1 };
      }
    default:
      return state;
  }
};
