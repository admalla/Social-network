import React from 'react';
import Contacts from './Contacts/Contacts';
import s from './Dialogs.module.scss';
import DialogsContainer from './DialogsContainer';

export default function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <Contacts />
      <DialogsContainer state={props.state} />
    </div>
  );
}
