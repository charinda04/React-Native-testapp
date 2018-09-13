import {all, fork} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import AuthSignInSaga from './SignIn';

/**
 * Export all sagas from a single point so it can be imported easily
 * @return {Object} All sagas in an object
 */
// export default (): {[string]: any} => {
//   const {watchAuthenticateUser} = AuthSignInSaga();

//   return {
//     watchAuthenticateUser: fork(watchAuthenticateUser),
//   };
// };

export default function* root(): Saga<void> {
  const {watchAuthenticateUser} = AuthSignInSaga();

  yield all([
    fork(watchAuthenticateUser),
  ]);
}