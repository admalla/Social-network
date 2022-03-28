import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.scss';

export default function Sidebar(props) {
  return (
    <div className={s.sidebar}>
      <div>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div>
        <NavLink to="/users">Users</NavLink>
      </div>
    </div>
  );
}
