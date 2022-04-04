import { authAPI } from '../api/api';

const SET_AUTH_LOGIN = 'SET_AUTH_LOGIN';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_LOGIN:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
}

export function setAuthLogin(id, login, email, isAuth) {
  return { type: SET_AUTH_LOGIN, data: { id, login, email, isAuth } };
}

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data;
      dispatch(setAuthLogin(id, login, email, true));
    }
  });
};

export const login =
  ({ email, password, rememberMe }) =>
  (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    });
  };

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthLogin(null, null, null, false));
    }
  });
};
