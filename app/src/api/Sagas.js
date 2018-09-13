// @flow
import {fork} from 'redux-saga/effects';

import AuthSignInSaga from './SignIn';

/**
 * Export all sagas from a single point so it can be imported easily
 * @return {Object} All sagas in an object
 */
export default (): {[string]: any} => {
  const {watchAuthenticateUser} = AuthSignInSaga();

  return {
    watchAuthenticateUser: fork(watchAuthenticateUser),
  };
};



