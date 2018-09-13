import {createStore, applyMiddleware} from 'redux';
import reducers from './Reducers';
import createSagaMiddleware from 'redux-saga';

import sagas from '../src/api/rootSaga';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export default store
