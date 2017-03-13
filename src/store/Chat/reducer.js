import { CHAT_SET_ACTIVE } from './constants';
import makeDummy from '../dummy';

// flag to enable putting dummy data into redux
const DUMMY_DATA = true;
const dummy = makeDummy(6, 50);

const initialState = {
  active: null,
  chats: DUMMY_DATA ? dummy.chatSessions : [],
  messages: DUMMY_DATA ? dummy.messages : [],
};

function ChatReducer (state = initialState, action) {
  /* console.log('CHAT', action);*/

  switch (action.type) {
    case CHAT_SET_ACTIVE:
      return {...state, active: action.payload};

    default:
      return state;
  }
};

export default ChatReducer;
