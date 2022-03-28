import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Contacts.module.scss';

export default function Contacts(props) {
  return (
    <div className={s.users}>
      <div className={s.user}>
        <NavLink to="/dialogs/1">Ибрагим</NavLink>
      </div>
      <div className={s.user}>
        <NavLink to="/dialogs/2">Ахьмад</NavLink>
      </div>
      <div className={s.user}>
        <NavLink to="/dialogs/3">Адам</NavLink>
      </div>
    </div>
  );
}
