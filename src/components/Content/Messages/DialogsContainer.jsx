import { connect } from 'react-redux';
import { compose } from 'redux';
import { addStateActionCreator, upDateStateActionCreator } from '../../../Redux/reducer';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import Dialog from './Dialog/Dialog';

let mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
    inTextArea: state.messages.textArea,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onAddText: (textAreaValue) => {
      console.log(textAreaValue);
      dispatch(upDateStateActionCreator(textAreaValue));
    },
    onClickBtn: (text) => {
      dispatch(addStateActionCreator(text));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthNavigate)(Dialog);
