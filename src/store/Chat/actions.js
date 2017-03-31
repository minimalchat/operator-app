import {
  LOAD_CHATS_SUCCESS,
  LOAD_CHATS_FAILURE,
  CHAT_SET_CONFIG,
  CHAT_ADD_MESSAGE,
  CHAT_SET_ACTIVE,
  CHAT_TOGGLE_OPEN,
  OPERATOR_SET_FILTER,

  // NETWORK
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,

  // SOCKETS
  SOCKET_CONNECTED,
  SOCKET_DISCONNECTED,
  SOCKET_CONNECTION_ERROR,
  SOCKET_CONNECTION_TIMEOUT,
  SOCKET_RECONNECTING,
  SOCKET_RECONNECTED,
  SOCKET_RECONNECT_ERROR,
  SOCKET_RECONNECT_FAILED,
  SOCKET_RECONNECT_TIMEOUT,
} from './constants';

import API from '../endpoints';

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

export function socketConnectionError () {
  return {
    type: SOCKET_CONNECTION_ERROR,
  };
}

export function socketConnectionTimeout () {
  return {
    type: SOCKET_CONNECTION_TIMEOUT,
  };
}

export function socketReconnecting () {
  return {
    type: SOCKET_RECONNECTING,
  };
}

export function socketReconnected () {
  return {
    type: SOCKET_RECONNECTED,
  };
}

export function socketReconnectError () {
  return {
    type: SOCKET_RECONNECT_ERROR,
  };
}

export function socketReconnectFailed () {
  return {
    type: SOCKET_RECONNECT_FAILED,
  };
}

export function socketReconnectTimeout () {
  return {
    type: SOCKET_RECONNECT_TIMEOUT,
  };
}


// message related actions

export function addMessage (payload) {
  return {
    type: CHAT_ADD_MESSAGE,
    payload,
  };
}

export function loadMessages (dispatch, chatSession) {
  const url = `http://localhost:8000/api/chat/:${chatSession}/messages`;
  return fetch(url)
    .then(res => res.json())
    .then(payload => dispatch({
      type: LOAD_MESSAGES_SUCCESS,
      payload,
    }))
    .catch(err => dispatch({
      type: LOAD_MESSAGES_FAILURE,
      err,
    }));
}
