import {
  CHAT_SET_CONFIG,
  CHAT_SET_ACTIVE,
  CHAT_TOGGLE_OPEN,
  OPERATOR_SET_FILTER,
} from './constants';

import makeDummy from '../dummy';


// Flag to enable putting dummy data into redux
const DUMMY_DATA = true;
const dummy = makeDummy(6, 50);


const initialState = {
  activeId: '',
  activeIsOpen: null,
  chats: DUMMY_DATA ? dummy.chatSessions : [],
  messages: DUMMY_DATA ? dummy.messages : [],
  operatorFilter: 'all',
  config: {},
};


function ChatReducer (state = initialState, action) {
  switch (action.type) {

    case CHAT_SET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };

    case CHAT_SET_ACTIVE:
      return {
        ...state,
        activeId: action.payload.id,
        activeIsOpen: action.payload.open,
      };


    case OPERATOR_SET_FILTER:
      return {
        ...state,
        operatorFilter: action.payload,
      };


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
