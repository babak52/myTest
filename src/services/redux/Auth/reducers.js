// import {
//   HIDE_MESSAGE,
//   INIT_URL,
//   ON_HIDE_LOADER,
//   ON_SHOW_LOADER,
//   SHOW_MESSAGE,
//   USER_DATA,
//   SIGNIN_USER_SUCCESS,
//   SIGNOUT_USER_SUCCESS,
//   REFRESH_TOKEN_SUCCESS,
//   USER_TOKEN_SET,
//   HIDE_CHANGE_PASSWORD,
//   SHOW_CHANGE_PASSWORD,
// } from '../../../constants/ActionTypes';


// const INIT_STATE = {
//   token: getCookie('__data_u') && JSON.parse(getCookie('__data_u')).accessToken?.token,
//   initURL: '',
//   authUser: getCookie('__data_u') && JSON.parse(getCookie('__data_u')),
//   showChangePassword: false,
// };

// export default (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case INIT_URL: {
//       return {...state, initURL: action.payload};
//     }

//     case SIGNOUT_USER_SUCCESS: {
//       return {
//         ...state,
//         token: null,
//         authUser: null,
//         initURL: '',
//       };
//     }

//     case USER_DATA: {
//       return {
//         ...state,
//         authUser: action.payload,
//       };
//     }

//     case USER_TOKEN_SET: {
//       return {
//         ...state,
//         token: action.payload,
//       };
//     }
//     case SIGNIN_USER_SUCCESS: {
//       return {
//         ...state,
//         loader: false,
//         authUser: action.payload,
//       };
//     }

//     case REFRESH_TOKEN_SUCCESS: {
//       return {
//         ...state,
//         token: action.payload.accessToken.token,
//         authUser: {
//           ...state.authUser,
//           ...action.payload,
//         },
//       };
//     }

//     case SHOW_MESSAGE: {
//       return {
//         ...state,
//         alertMessage: action.payload,
//         showMessage: true,
//         loader: false,
//       };
//     }
//     case HIDE_MESSAGE: {
//       return {
//         ...state,
//         alertMessage: '',
//         showMessage: false,
//         loader: false,
//       };
//     }
//     case ON_SHOW_LOADER: {
//       return {
//         ...state,
//         loader: true,
//       };
//     }
//     case ON_HIDE_LOADER: {
//       return {
//         ...state,
//         loader: false,
//       };
//     }

//     case SHOW_CHANGE_PASSWORD: {
//       return {
//         ...state,
//         showChangePassword: true,
//       };
//     }

//     case HIDE_CHANGE_PASSWORD: {
//       return {
//         ...state,
//         showChangePassword: false,
//       };
//     }
//     default:
//       return state;
//   }
// };
