import React from 'react';
import {Route} from 'react-router';
import s from './Content.module.scss';
import Login from './Login/Login';
import Dialogs from './Messages/Dialogs';
// import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import {withSuspense} from "../../hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'))

export default function Content(props) {
    return (
        <div className={s.content}>
            <Route path="/profile/:userId?" render={ withSuspense(ProfileContainer) }/>
            <Route path="/dialogs" render={() => <Dialogs/>}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/login" render={() => <Login/>}/>
        </div>
    );
}
