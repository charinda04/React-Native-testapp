import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions/Types";
import {createReducer} from 'reduxsauce';

const INITIAL_STATE = {
  counter: 0
};

export const incrementCounter = (state: any = INITIAL_STATE, {payload} : any) => {
    

  return ({
    ...state,
    counter: state.counter+1,
  });
};

export const decrementCounter = (state: any = INITIAL_STATE, {payload} : any) => {
  return ({
    ...state,
    counter: state.counter-1,
  });
};

const ACTION_HANDLERS = {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

