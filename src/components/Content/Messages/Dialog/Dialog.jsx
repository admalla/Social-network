import React from 'react';
import s from './Dialog.module.scss';

export default function Dialog(props) {
  let state = props.messages;

  let message = state.map((m) => <div className={s.message}>{m.message}</div>);

  let onAddTextarea = (e) => {
    let textAreaValue = e.target.value;
    props.onAddText(textAreaValue);
  };

  let onCBtn = () => {
    props.onClickBtn(props.inTextArea);
  };

  return (
    <div>
      <div className={s.messages}>{message}</div>
      <div className={s.textarea}>
        <textarea onChange={onAddTextarea} value={props.inTextArea} />
        <button onClick={onCBtn}>Add</button>
      </div>
    </div>
  );
}
