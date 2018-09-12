import HomeReducer from '../modules/home/reducers/HomeReducer';
import CounterReducer from '../modules/counter/reducers/CounterReducer'
import {combineReducers} from 'redux';

export default combineReducers({
  home: HomeReducer,
  counter: CounterReducer,
});
