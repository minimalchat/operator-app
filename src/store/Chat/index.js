import API from '../endpoints';
import makeDummy from '../dummy';

// Flag to enable putting dummy data into redux
const DUMMY_DATA = process.env.NODE_ENV !== 'production';
const dummy = makeDummy(6, 50);

const initialState = {
  activeId: '',
  activeIsOpen: null,
  chats: DUMMY_DATA ? dummy.chatSessions : [],
  messages: DUMMY_DATA ? dummy.messages : [],
  operatorFilter: 'all',
  config: {
    apiServer: null,
    operator: null,
  } ,
}; 


// Constants
//

export const LOAD_CHATS_SUCCESS = 'LOAD_CHATS_SUCCESS';
export const LOAD_CHATS_FAILURE = 'LOAD_CHATS_FAILURE';

export const CHAT_SET_CONFIG = 'CHAT_SET_CONFIG';
export const CHAT_SET_APISERVER = 'CHAT_SET_APISERVER';
export const CHAT_SET_OPERATOR = 'CHAT_SET_OPERATOR';
export const CHAT_SET_ACTIVE = 'CHAT_SET_ACTIVE';
export const CHAT_TOGGLE_OPEN = 'CHAT_TOGGLE_OPEN';
export const OPERATOR_SET_FILTER = 'OPERATOR_SET_FILTER';
export const CHAT_ADD_MESSAGE = 'CHAT_ADD_MESSAGE';


// Actions
//

export function loadChats (dispatch, config) {
  // TODO: get API base url from config
  return fetch(`http://localhost:8000${API.chats}`)
    .then(res => res.json())
    .then(data => dispatch({
      type: LOAD_CHATS_SUCCESS,
      data: data.chats || [],
    }))
    .catch(error => dispatch({
      type: LOAD_CHATS_FAILURE,
      error,
    }));
}

export function setConfig (payload) {
  return {
    type: CHAT_SET_CONFIG,
    payload,
  };
}

export function setActiveChat (payload) {
  return {
    type: CHAT_SET_ACTIVE,
    payload,
  };
}

export function setOperatorFilter (payload) {
  return {
    type: OPERATOR_SET_FILTER,
    payload,
  };
}

export function toggleChatOpen (payload) {
  return {
    type: CHAT_TOGGLE_OPEN,
    payload,
  };
}

// Message related actions
export function addMessage (payload) {
  return {
    type: CHAT_ADD_MESSAGE,
    payload,
  };
}


// Reducer
//

function ChatReducer (state = initialState, action) {
   switch (action.type) {
    case LOAD_CHATS_SUCCESS:
      return {
        ...state,
        chats: action.data,
      };

    case LOAD_CHATS_FAILURE:
      // TODO: handle error
      return state;

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
