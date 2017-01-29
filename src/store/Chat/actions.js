import {
  CHAT_OPEN_CONVERSATION,
  CHAT_TAG_CLIENT,
} from './constants';

export function openConversation(payload) {
  return {
    type: CHAT_OPEN_CONVERSATION,
    payload,
  };
}

export function tagClient(payload) {
  return {
    type: CHAT_TAG_CLIENT,
    payload,
  };
}
