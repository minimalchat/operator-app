import API from '../endpoints';
import makeDummy from '../dummy';

const initialState = {
  activeId: '',
  activeIsOpen: null,
  chats: [],
  messages: [],
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

const SET_OPERATOR = 'CHAT_SET_OPERATOR';
const SET_OPERATOR_FILTER = 'CHAT_SET_OPERATOR_FILTER';
const SET_ACTIVE_CHAT = 'CHAT_SET_ACTIVE_CHAT';

const TOGGLE_OPEN = 'CHAT_TOGGLE_OPEN';

const OPERATOR_TYPING = 'CHAT_OPERATOR_TYPING';
const SEND_MESSAGE = 'CHAT_MESSAGE_OPERATOR';

const CLIENT_TYPING = 'CHAT_CLIENT_TYPING';
const CLIENT_IDLE = 'CHAT_CLIENT_IDLE';
const RECEIVE_MESSAGE = 'CHAT_MESSAGE_CLIENT';

const ADD_CHAT = 'CHAT_ADD_CHAT';


// Actions

// TODO: not sure what this is doing but it's broken?
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

export function operatorTyping (payload) {
  return {
    type: OPERATOR_TYPING,
    payload,
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
  // TODO: Cleanup dangling variables that lose their meaning at the top
  //    of this list
  let messages = [];
  let sortedPayload = [];
  let chat = {};
  let chats = {};

  /* console.log('CHAT', action);*/

  switch (action.type) {
    case LOAD_CHATS_SUCCESS:
      // Turn the array of chats into an object with the chat ID as the key
      for (let i = 0; i < (action.payload || []).length; i += 1) {
        chats[action.payload[i].id] = {
          client: action.payload[i].client,
          update_time: action.payload[i].update_time,
          creation_time: action.payload[i].creation_time,
          open: action.payload[i].open,
          typing: null,
        };
      }

      return {
        ...state,
        chats,
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


    // case TOGGLE_OPEN: {
    //   const chats = state.chats.map((chat) => {
    //     if (chat.id === action.payload) {
    //       const toggledChat = chat;

    //       toggledChat.open = !toggledChat.open;

    //       return toggledChat;
    //     }
    //     return chat;
    //   });

    //   return {
    //     ...state,
    //     chats,
    //     activeId: '',
    //   };
    // }


    case ADD_CHAT:
      // Pull the chat ID out of the payload and use it as the key
      return {
        ...state,
        chats: Object.assign(
          {},
          state.chats,
          {
            [action.payload.id]: {
              client: action.payload.client,
              update_time: action.payload.update_time,
              creation_time: action.payload.creation_time,
              open: action.payload.open,
              typing: null,
            },
          }),
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

      // TODO: clicking notification should take user to chat notification
      let newMessageNotification = new Notification('New Message', {
        body: msgText.length > 80 ? msgText.substring(0, 80) + "..." : msgText
      })

      try {
        console.log(window.config.notificationsEnabled)
        // NOTE: come back to this - this should be working but it's not?
        if (window.config.notificationsEnabled) {
          newMessageNotification.show()
        }
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
        chats: Object.assign(
          {},
          state.chats,
          {
            [action.payload.chat]: {
              ...state.chats[action.payload.chat],
              typing: action.payload.typing,
            },
          },
        ),
      };

    case CLIENT_IDLE:
      return {
        ...state,
        chats: Object.assign(
          {},
          state.chats,
          {
            [action.payload.chat]: {
              ...state.chats[action.payload.chat],
              typing: null,
            },
          },
        ),
      };

    default:
      return state;
  }
}

export default ChatReducer;
