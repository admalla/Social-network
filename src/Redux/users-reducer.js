import {followAPI, unfollowAPI, usersAPI} from '../api/api';
import {updateObjectInArray} from "../utils/object-helper";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 100,
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
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false} )
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            };
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount};
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
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

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setIsFollowing = (isFollowing, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFollowing,
    userId,
});

export const getUsersThunk = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    };
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setIsFollowing(true, userId));

    const response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setIsFollowing(false, userId));
}

export const followThunk = (userId) => {
    return async (dispatch) => {
        let apiMethod = followAPI.setFollow.bind(userId);
        let actionCreator = follow;

        await followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    };
};

export const unfollowThunk = (userId) => {
    return async (dispatch) => {
        let apiMethod = unfollowAPI.setUnfollow.bind(userId);
        let actionCreator = unfollow;

        await followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    };
};

export default usersReducer;
