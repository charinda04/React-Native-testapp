import { ADD_TODOLIST, REMOVE_TODOLIST } from "../actions/Types";
import {createReducer} from 'reduxsauce';

const INITIAL_STATE = {
  list: [
    'test',
  ]
};

export const addToDoList = (state: any = INITIAL_STATE, {payload} : any) => {
    console.log(payload);

  return ({
    ...state,list: [...state.list, payload]
  });
};

export const removeToDoList = (state: any = INITIAL_STATE, {payload} : any) => {
  return ({
    ...state,
    counter: state.counter-1,
  });
};

const ACTION_HANDLERS = {
  [ADD_TODOLIST]: addToDoList,
  [REMOVE_TODOLIST]: removeToDoList,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

