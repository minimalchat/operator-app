import {
  CHAT_SET_CONFIG,
  CHAT_SET_ACTIVE,
  CHAT_TOGGLE_OPEN,
  OPERATOR_SET_FILTER,
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
