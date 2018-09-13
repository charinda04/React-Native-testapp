import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

// import type {FlashReduxAction} from 'ancon-flash-lib/src/types/redux';
import {
  POST_AUTHENTICATE_USER,
} from '../../modules/home/actions/HomeActions.js';
import {authenticateUser as authenticateUserAPI} from './Auth';



export default () => {
  /**
   * Redux saga to authenticate user  (reducer)
   * @param {FlashReduxAction} action Redux action
   */
  function* authenticateUser(): Saga<void> {
    try {
      const {token} = yield call(authenticateUserAPI);
      // yield put(authenticateUserSuccess(token));
      // console.log({token});
           console.log({token});

    } catch (err) {
      yield put(authenticateUserFailure(err));
    }
  }

  /**
   * Watcher saga for user authenticate saga
   */
  function* watchAuthenticateUser(): Saga<void> {
    yield takeLatest(POST_AUTHENTICATE_USER, authenticateUser);
  }

  // Return the sagas that has to be forked
  return {
    watchAuthenticateUser,
  };
};