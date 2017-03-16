import {
  CHAT_SET_ACTIVE,
  OPERATOR_SET_FILTER,
  CHAT_TOGGLE_OPEN,
} from './constants';

import makeDummy from '../dummy';


// flag to enable putting dummy data into redux
const DUMMY_DATA = true;
const dummy = makeDummy(6, 50);


const initialState = {
  activeId: '',
  chats: DUMMY_DATA ? dummy.chatSessions : [],
  messages: DUMMY_DATA ? dummy.messages : [],
  operatorFilter: 'all',
};


function ChatReducer (state = initialState, action) {
  switch (action.type) {

    case CHAT_SET_ACTIVE:
      return { ...state, activeId: action.payload };


    case OPERATOR_SET_FILTER:
      return { ...state, operatorFilter: action.payload };


    case CHAT_TOGGLE_OPEN: {
      const chats = state.chats.map((chat) => {
        if (chat.id === action.payload) {
          const toggledChat = chat;
          toggledChat.open = !toggledChat.open;
          return toggledChat;
        }
        return chat;
      });

      return { ...state, chats, activeId: '' };
    }


    default:
      return state;
  }
}

export default ChatReducer;
