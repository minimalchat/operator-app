import API from '../endpoints';
import makeDummy from '../dummy';

// Flag to enable putting dummy data into redux
// const DUMMY_DATA = process.env.NODE_ENV !== 'production';
// const dummy = makeDummy(6, 50);

const initialState = {
  activeId: '',
  activeIsOpen: null,
  chats: [], // DUMMY_DATA ? dummy.chatSessions : [],
  messages: [], // DUMMY_DATA ? dummy.messages : [],
  operatorFilter: 'all',
  config: {
    apiServer: null,
    operator: null,
  },
};


// Constants
//

export const LOAD_CHATS_SUCCESS = 'CHAT_LOAD_CHATS_SUCCESS';
export const LOAD_CHATS_FAILURE = 'CHAT_LOAD_CHATS_FAILURE';
export const LOAD_MESSAGES_SUCCESS = 'CHAT_LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES_FAILURE = 'CHAT_LOAD_MESSAGES_FAILURE';

export const SET_CONFIG = 'CHAT_SET_CONFIG';
export const SET_APISERVER = 'CHAT_SET_APISERVER';
export const SET_OPERATOR = 'CHAT_SET_OPERATOR';
export const SET_OPERATOR_FILTER = 'CHAT_SETOPERATOR_FILTER';
export const SET_ACTIVE_CHAT = 'CHAT_SET_ACTIVE_CHAT';

export const TOGGLE_OPEN = 'CHAT_TOGGLE_OPEN';

export const ADD_MESSAGE = 'CHAT_ADD_MESSAGE';
export const ADD_CHAT = 'CHAT_ADD_CHAT';


// Actions
//

export function loadChats (dispatch, config) {
  return fetch(`${config.apiServer}${API.chats}`)
    .then(res => res.json())
    .then(data => dispatch({
      type: LOAD_CHATS_SUCCESS,
      payload: data.chats || [],
    }))
    .catch(error => dispatch({
      type: LOAD_CHATS_FAILURE,
      error,
    }));
}

export function loadMessages (dispatch, config, activeId) {
  return fetch(`${config.apiServer}${API.chat}/${activeId}/messages`)
    .then(res => res.json())
    .then(data => dispatch({
      type: LOAD_MESSAGES_SUCCESS,
      payload: data.messages || [],
    }))
    .catch(error => dispatch({
      type: LOAD_MESSAGES_FAILURE,
      error,
    }));
}

export function setConfig (payload) {
  return {
    type: SET_CONFIG,
    payload,
  };
}

export function setActiveChat (payload) {
  return {
    type: SET_ACTIVE_CHAT,
    payload,
  };
}

export function setOperatorFilter (payload) {
  return {
    type: SET_OPERATOR_FILTER,
    payload,
  };
}


export function toggleChatOpen (payload) {
  return {
    type: TOGGLE_OPEN,
    payload,
  };
}


export function addChat (payload) {
  return {
    type: ADD_CHAT,
    payload,
  };
}

export function addMessage (payload) {
  return {
    type: ADD_MESSAGE,
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
        chats: action.payload,
      };

    case LOAD_CHATS_FAILURE:
      // TODO: Handle error
      return state;

    case LOAD_MESSAGES_SUCCESS: {
      // let currentMessages = state.messages;
      //
      // const newMessageIds = action.payload.map(message => [
      //   message.chat,
      //   '.',
      //   new Date(message.timestamp).getTime(),
      // ].join(''));
      //
      // if (state.messages.length > 0) {
      //   currentMessages = state.messages.reduce((messages, message) => {
      //     const messageId = [
      //       message.chat,
      //       '.',
      //       new Date(message.timestamp).getTime(),
      //     ].join('');
      //
      //     console.log(
      //       'CHECKING',
      //       messageId,
      //       'IN',
      //       newMessageIds,
      //       '(',
      //       messageId in newMessageIds,
      //       ')'
      //     );
      //     if (messageId in newMessageIds) {
      //       return messages;
      //     }
      //
      //     return [...messages, message];
      //   });
      // }

      return {
        ...state,
        messages: [...action.payload],
      };
    }

    case LOAD_MESSAGES_FAILURE:
      // TODO: Handle error
      return state;

    case SET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };

    case SET_ACTIVE_CHAT:
      return {
        ...state,
        activeId: action.payload.id,
        activeIsOpen: action.payload.open,
      };


    case SET_OPERATOR_FILTER:
      return {
        ...state,
        operatorFilter: action.payload,
      };


    case TOGGLE_OPEN: {
      const chats = state.chats.map((chat) => {
        if (chat.id === action.payload) {
          const toggledChat = chat;

          toggledChat.open = !toggledChat.open;

          return toggledChat;
        }
        return chat;
      });

      return {
        ...state,
        chats,
        activeId: '',
      };
    }


    case ADD_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload],
      };

    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
}

export default ChatReducer;
