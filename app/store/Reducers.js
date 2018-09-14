import HomeReducer from '../modules/home/reducers/HomeReducer';
import CounterReducer from '../modules/counter/reducers/CounterReducer'
import ToDoListReducer from '../modules/todolist/reducers/ToDoListReducer'
import {combineReducers} from 'redux';

export default combineReducers({
  home: HomeReducer,
  counter: CounterReducer,
  todolist: ToDoListReducer,
});
