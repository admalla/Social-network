import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth-reducer';
import profileReducer from './profile-reducer';
import Reducer from './reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
  messages: Reducer,
  usersPage: usersReducer,
  profileUser: profileReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
