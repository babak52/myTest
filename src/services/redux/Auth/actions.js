import {
  // FETCH_ERROR,
  // FETCH_START,
  // FETCH_SUCCESS,
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  USER_TOKEN_SET,
  USER_AUTH_ERROR,
  REFRESH_TOKEN_SUCCESS,
  SHOW_CHANGE_PASSWORD,
  HIDE_CHANGE_PASSWORD,
} from 'constants/ActionTypes';
// import {deleteTokenFromHeader} from 'services/api/logicapi';
// import { deleteCookie } from 'utils/cookie'

export const setInitUrl = url => {
  return {
    type: INIT_URL,
    payload: url,
  };
};

export const userSignIn = user => {
  return {
    type: SIGNIN_USER,
    payload: user,
  };
};

export const userSignUp = () => {};

export const userSignOut = () => {
  return {
    type: SIGNOUT_USER,
  };
  /*  return dispatch => {
    dispatch({type: FETCH_START});
    setTimeout(() => {
      deleteCookie("__data_u");
      sessionStorage.clear();
      deleteTokenFromHeader();
      dispatch({type: FETCH_SUCCESS});
      dispatch({type: SIGNOUT_USER_SUCCESS});
    }, 2000);
  };*/
};

export const showAuthLoader = () => {
  return {
    type: ON_SHOW_LOADER,
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};
export const hideAuthLoader = () => {
  return {
    type: ON_HIDE_LOADER,
  };
};
export const userSignUpSuccess = authUser => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: authUser,
  };
};

export const userSignInSuccess = authUser => {
  console.log('authUser',authUser);
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: authUser,
  };
};
export const userSignOutSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS,
  };
};

export const refreshTokenSuccess = authUser => {
  console.log(authUser);
  return {
    type: REFRESH_TOKEN_SUCCESS,
    payload: authUser,
  };
};

export const userAuthError = () => {
  return {
    type: USER_AUTH_ERROR,
  };
};

export const showAuthMessage = message => {
  return {
    type: SHOW_MESSAGE,
    payload: message,
  };
};

export const setToken = token => {
  return {
    type: USER_TOKEN_SET,
    payload: token,
  };
};

export const showChangePassword = () => {
  return {
    type: SHOW_CHANGE_PASSWORD,
  };
};

export const hideChangePassword = () => {
  return {
    type: HIDE_CHANGE_PASSWORD,
  };
};
