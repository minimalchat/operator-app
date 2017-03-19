import {
  CHAT_SET_CONFIG,
  CHAT_ADD_MESSAGE,
  CHAT_SET_ACTIVE,
  CHAT_TOGGLE_OPEN,
  OPERATOR_SET_FILTER,

  SOCKET_CONNECTED,
  SOCKET_DISCONNECTED,
  /* SOCKET_CONNECTION_ERROR,
   * SOCKET_CONNECTION_TIMEOUT,
   * SOCKET_CONNECTION_RECONNECTING,
   * SOCKET_CONNECTION_RECONNECTED,
   * SOCKET_RECONNECT_ERROR,
   * SOCKET_RECONNECT_FAILED,
   * SOCKET_RECONNECT_TIMEOUT,*/
} from './constants';


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

// socket related actions

export function socketConnected () {
  return {
    type: SOCKET_CONNECTED,
  };
}

export function socketDisconnected () {
  return {
    type: SOCKET_DISCONNECTED,
  };
}

// TODO write action creators for all other socket messages.
// connected, disconnected are prop the most essential for now.


// message related actions

export function addMessage (payload) {
  return {
    type: CHAT_ADD_MESSAGE,
    payload,
  };
}
