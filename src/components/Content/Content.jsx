import React from 'react';
import { Route } from 'react-router';
import s from './Content.module.scss';
import Login from './Login/Login';
import Dialogs from './Messages/Dialogs';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';

export default function Content(props) {
  return (
    <div className={s.content}>
      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
      <Route path="/dialogs" render={() => <Dialogs />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/login" render={() => <Login />} />
    </div>
  );
}
