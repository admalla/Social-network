import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Avatar.module.scss';
import userImeg from './user.jpg';

export default function Userava(props) {
  return (
    <div className={s.box}>
      <div className={s.ava}>
        <NavLink to={'/profile/' + props.id}>
          <img src={props.photos.small !== null ? props.photos.small : userImeg} alt={'img'} />
        </NavLink>
      </div>
      <div>
        {props.followed ? (
          <button
            disabled={props.isFollowing.some((id) => id === props.id)}
            onClick={() => {
              props.AC.unfollow(props.id);
            }}
          >
            unfollow
          </button>
        ) : (
          <button
            disabled={props.isFollowing.some((id) => id === props.id)}
            onClick={() => {
              props.AC.follow(props.id);
            }}
          >
            follow
          </button>
        )}
      </div>
    </div>
  );
}
