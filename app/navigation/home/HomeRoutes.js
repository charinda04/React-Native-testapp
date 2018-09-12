// @flow
// import HomeScreen from '../modules/home/screens/home/HomeScreen';
import HomeScreen from '../../modules//home/screens/HomeScreen';
import CounterScreen from '../../modules/counter/screens/CounterScreen';
import ToDoListScreen from '../../modules/todolist/screens/ToDoListScreen';

export const ROOT_NAV_HOME = 'HomeScreen';
export const ROOT_NAV_COUNTER = 'CounterScreen';
export const ROOT_NAV_TODOLIST = 'ToDoListScreen';


export const rootRoutes = {
  [ROOT_NAV_HOME]: {
    screen: HomeScreen,
    path: `/${ROOT_NAV_HOME}`,
  },
  [ROOT_NAV_COUNTER]: {
    screen: CounterScreen,
    path: `/${ROOT_NAV_COUNTER}`,
  },
  [ROOT_NAV_TODOLIST]: {
    screen: ToDoListScreen,
    path: `/${ROOT_NAV_TODOLIST}`,
  },
};
