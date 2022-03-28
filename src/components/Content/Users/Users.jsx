import React from 'react';
import Userinfo from './UserInfo';
import s from './users.module.scss';
import Userava from './Avatar';

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={s.pages}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectPage}
              onClick={() => {
                props.onChangedPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => {
        return (
          <div key={u.id} className={s.users}>
            <Userava
              AC={{ follow: props.follow, unfollow: props.unfollow }}
              id={u.id}
              photos={u.photos}
              followed={u.followed}
              isFollowing={props.isFollowing}
            />
            <Userinfo name={u.name} status={u.status} />
          </div>
        );
      })}
    </div>
  );
};

export default Users;
