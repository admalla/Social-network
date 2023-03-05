import React from 'react';
import s from './Profile.module.scss';
import profile from './img/profile.png';
import preLoader from '../../../common/Preloader/Spinner-2.gif';
import StatusProfile from './StatusProfileFunc';

export default function Profile(props) {
  if (!props.profile) {
    return <img src={preLoader} alt="" />;
  }
  return (
    <div className={s.prof}>
      <img src={profile} alt="img" />
      {props.profile.fullName}
      <img src={props.profile.photos.large} alt="" />
      <StatusProfile
        status={props.status}
        updateStatus={props.updateStatus}
        authUserId={props.authUserId}
        profileId={props.profile.userId}
      />
    </div>
  );
}
