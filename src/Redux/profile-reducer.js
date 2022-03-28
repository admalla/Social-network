import { profileAPI, usersAPI } from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS_AUTH_USER = 'UPDATE_STATUS_AUTH_USER';

let initialState = {
  profile: null,
  status: '',
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
}

export function setProfile(profile) {
  return { type: SET_USER_PROFILE, profile };
}

export function setStatus(status) {
  return { type: SET_STATUS, status };
}

export function updateStatusAuthUser(status) {
  return { type: UPDATE_STATUS_AUTH_USER, status };
}

export const getProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setProfile(response.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    dispatch(updateStatusAuthUser(response.data));
  });
};
