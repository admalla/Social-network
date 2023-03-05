import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.scss';

export default function Header(props) {
    return (
        <div className={s.header}>
            Header
            <div className={s.login}>
                {props.isAuth ? (
                    <div>
                        {props.login} -
                        <NavLink to="/profile" onClick={props.logout}>
                            logout
                        </NavLink>
                    </div>
                ) : (
                    <NavLink to="/login">login</NavLink>
                )}
            </div>
        </div>
    );
}
