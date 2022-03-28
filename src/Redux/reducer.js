const UP_DATE_STATE = 'UP-DATE-STATE';
const ADD_STATE = 'ADD-STATE';

let initialState = {
  messages: [
    { id: 0, message: 'hy' },
    { id: 1, message: 'hello world' },
  ],
  textArea: '',
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case UP_DATE_STATE:
      return {
        ...state,
        textArea: action.text,
      };
    case ADD_STATE:
      return {
        ...state,
        textArea: '',
        messages: [...state.messages, { id: 2, message: action.interText }],
      };
    default:
      return state;
  }
}

export const upDateStateActionCreator = (textAreaValue) => ({
  type: UP_DATE_STATE,
  text: textAreaValue,
});
export const addStateActionCreator = (textAreaValue) => ({
  type: ADD_STATE,
  interText: textAreaValue,
});
