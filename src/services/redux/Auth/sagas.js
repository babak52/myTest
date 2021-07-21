import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {setTokenInHeader} from 'services/api/logicapi';
import {authLogin, authInitNotification} from 'services/api';
import {showAuthMessage, userSignInSuccess, setToken, userSignOutSuccess} from './actions';
import {SIGNIN_USER, SIGNOUT_USER} from 'constants/ActionTypes';
import {setCookie, deleteCookie} from 'utils/cookie';
// import {generateRandomHash} from 'utils';

const signInUserWithEmailPasswordRequest = (username, password) => {
  return authLogin(username, password)
    .then(authUser => authUser)
    .catch(error => error);
};

function* signInUserWithEmailPassword({payload}) {
  const {username, password} = payload;

  try {
    const signInUser = yield call(signInUserWithEmailPasswordRequest, username, password);
    if (signInUser.message) {
      // yield put(userSignIn(signInUser.message));
      yield put(showAuthMessage(signInUser.message));
    } else {
      // const hash = generateRandomHash(50);


      let signInUserData = {
        ...signInUser.data,
      };

      setTokenInHeader(signInUserData.accessToken.token);

      // rabbitMq clientId
      const result = yield authInitNotification();

      signInUserData = {
        mqttClientId: result?.data?.queueKey,
        ...signInUserData,
      };
      setCookie('__data_u', JSON.stringify(signInUserData), 1);


      yield put(userSignInSuccess(signInUserData));
      yield put(setToken(signInUserData.accessToken.token));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signOutUser() {
  try {
    // const signInUser = yield call(signInUserWithEmailPasswordRequest, username, password);
    yield put(userSignOutSuccess());
    deleteCookie('__data_u');

    /*    if (signInUser.message) {
      // yield put(userSignIn(signInUser.message));
      yield put(showAuthMessage(signInUser.message));
    } else {*/
    // setCookie("__data_u",JSON.stringify(signInUser.data),1);
    // setTokenInHeader(signInUser.data.accessToken.token);
    // yield put(userSignInSuccess(signInUser.data));
    // yield put(setToken(signInUser.data.accessToken.token));
  } catch (error) {
    // yield put(showAuthMessage(error));
  }
}

export function* signInUserSaga() {
  yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}
export function* signOutUserSaga() {
  yield takeEvery(SIGNOUT_USER, signOutUser);
}

export default function* rootSaga() {
  yield all([fork(signInUserSaga), fork(signOutUserSaga)]);
}
