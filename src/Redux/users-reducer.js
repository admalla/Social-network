import { followAPI, unfollowAPI, usersAPI } from '../api/api';

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowing: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        isFollowing: action.isFollowing
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setIsFollowing = (isFollowing, userId) => ({
  type: TOGGLE_IS_FOLLOWING,
  isFollowing,
  userId,
});

export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowing(true, userId));
    followAPI.setFollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(setIsFollowing(false, userId));
    });
  };
};

export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowing(true, userId));
    unfollowAPI.setUnfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(setIsFollowing(false, userId));
    });
  };
};

export default usersReducer;
