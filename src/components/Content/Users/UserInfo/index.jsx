import React from 'react';
import s from './userinfo.module.scss';

export default function Userinfo(props) {
  return (
    <div className={s.user}>
      <div className={s.name}>
        <p>{props.name}</p>
      </div>
      <div className={s.country}></div>
      <div className={s.status}>
        <p>
          <i>{props.status}</i>
        </p>
      </div>
      <div className={s.sity}></div>
    </div>
  );
}
