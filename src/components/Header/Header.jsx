import React, {useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import s from './Header.module.scss';

export default function Header(props) {
    const [search, setSearch] = useState('')

    let usersURL = useLocation()

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className={s.header}>
            <div>
                <span className={s.span}>Header</span>
                {usersURL.pathname === '/users' &&
                    <>
                        <input placeholder='поиск...' value={search} onChange={onChangeHandler}/>
                        <button>Поиск</button>
                    </>

                }
            </div>
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
