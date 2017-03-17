import {
  CHAT_OPEN_CONVERSATION,

  CHAT_TAG_CLIENT,

  CHAT_SET_APISERVER,
  CHAT_SET_OPERATOR,
} from './constants';

export function setApiServer (payload) {
  return {
    type: CHAT_SET_APISERVER,
    payload,
  };
}

export function setOperator (payload) {
  return {
    type: CHAT_SET_OPERATOR,
    payload,
  };
}

export function openConversation (payload) {
  return {
    type: CHAT_OPEN_CONVERSATION,
    payload,
  };
}

export function tagClient (payload) {
  return {
    type: CHAT_TAG_CLIENT,
    payload,
  };
}
