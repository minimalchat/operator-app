import API from '../endpoints';
import makeDummy from '../dummy';

const initialState = {
  activeId: '',
  activeIsOpen: null,
  chats: [], // DUMMY_DATA ? dummy.chatSessions : [],
  messages: [], // DUMMY_DATA ? dummy.messages : [],
  typing: {},
  operatorFilter: 'all',
  config: {
    apiServer: null,
    operator: null,
  },
};


// Constants

const LOAD_CHATS_SUCCESS = 'CHAT_LOAD_CHATS_SUCCESS';
const LOAD_CHATS_FAILURE = 'CHAT_LOAD_CHATS_FAILURE';
const LOAD_MESSAGES_SUCCESS = 'CHAT_LOAD_MESSAGES_SUCCESS';
const LOAD_MESSAGES_FAILURE = 'CHAT_LOAD_MESSAGES_FAILURE';

const SET_CONFIG = 'CHAT_SET_CONFIG';
const SET_APISERVER = 'CHAT_SET_APISERVER';
const SET_OPERATOR = 'CHAT_SET_OPERATOR';
const SET_OPERATOR_FILTER = 'CHAT_SETOPERATOR_FILTER';
const SET_ACTIVE_CHAT = 'CHAT_SET_ACTIVE_CHAT';

const TOGGLE_OPEN = 'CHAT_TOGGLE_OPEN';

const TYPING = 'CHAT_TYPING';
const CLIENT_TYPING = 'CHAT_CLIENT_TYPING';
const CLIENT_IDLE = 'CHAT_CLIENT_IDLE';
const SEND_MESSAGE = 'CHAT_MESSAGE_OPERATOR';
const RECEIVE_MESSAGE = 'CHAT_MESSAGE_CLIENT';

const ADD_CHAT = 'CHAT_ADD_CHAT';


// Actions

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

export function typing () {
  return {
    type: TYPING,
  };
}

export function clientTyping (payload) {
  return {
    type: CLIENT_TYPING,
    payload,
  };
}

export function clientIdle (payload) {
  return {
    type: CLIENT_IDLE,
    payload,
  };
}

export function sendMessage (payload) {
  return {
    type: SEND_MESSAGE,
    payload,
  };
}

export function receiveMessage (payload) {
  return {
    type: RECEIVE_MESSAGE,
    payload,
  };
}


// Reducer

function ChatReducer (state = initialState, action) {
  let messages = [];
  let sortedPayload = [];

  console.log('CHAT', action);

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
      // We need to run through the entire array of messages and aggregate them
      //  into similar sets
      if (action.payload.length > 0) {
        sortedPayload = action.payload.sort((curr, next) => (
          new Date(curr.timestamp) - new Date(next.timestamp)
        ));
        // There should be an algorithm here that would speed things up

        for (let i = 0; i < sortedPayload.length; i += 1) {
          // All we have to do is see if the last message has the same author

          if (messages.length > 0 &&
            messages[messages.length - 1].author === sortedPayload[i].author) {
            // If it is the same author, do our usual slice magic
            messages[messages.length - 1].content.push(sortedPayload[i].content);
          } else {
            messages.push({
              ...sortedPayload[i],
              content: [sortedPayload[i].content],
            });
          }
        }
      }

      return {
        ...state,
        messages,
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

    case SEND_MESSAGE:
      if (state.messages.length > 0 &&
        // TODO: This should check if author === operator username
        state.messages[state.messages.length - 1].author === action.payload.author) {
        messages = [
          ...state.messages[state.messages.length - 1].content,
          action.payload.content,
        ];

        return {
          ...state,
          messages: [
            ...state.messages.slice(0, state.messages.length - 1),
            { ...state.messages[state.messages.length - 1], content: messages },
          ],
        };
      }

      return {
        ...state,
        messages: [
          ...state.messages,
          { ...action.payload, content: [action.payload.content] },
        ],
      };

    case RECEIVE_MESSAGE:
      let msgText = action.payload.content

      let newMessageNotification = new Notification('New Message', {
        body: msgText.length > 80 ? msgText.substring(0, 80) + "..." : msgText
      })
      
      try {
        newMessageNotification.show()
      }
      catch(e) {
        // ignore this error as chrome browser thinks `.show()` isn't a method
      }


      if (state.messages.length > 0 &&
        // TODO: This should check if the author = client ID
        state.messages[state.messages.length - 1].author === action.payload.author) {
        messages = [
          ...state.messages[state.messages.length - 1].content,
          action.payload.content,
        ];

        return {
          ...state,
          messages: [
            ...state.messages.slice(0, state.messages.length - 1),
            { ...state.messages[state.messages.length - 1], content: messages },
          ],
        };
      }

      return {
        ...state,
        messages: [
          ...state.messages,
          { ...action.payload, content: [action.payload.content] },
        ],
      };

    case CLIENT_TYPING:
      return {
        ...state,
        typing: Object.assign({}, ...state.typing, {
          [action.payload.chat]: true,
        }),
      };

    case CLIENT_IDLE:
      return {
        ...state,
        typing: Object.assign({}, ...state.typing, {
          [action.payload.chat]: false,
        }),
      };

    default:
      return state;
  }
}

export default ChatReducer;
