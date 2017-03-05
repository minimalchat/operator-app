import {
  CHAT_OPEN_CONVERSATION,
} from './constants';

const initialState = {
  active: null,
};

const reducer = function ChatReducer(state = initialState, action) {
  console.log('CHAT', action); // commenting out temp to clean up test output

  switch (action.type) {
    case CHAT_OPEN_CONVERSATION:
      return Object.assign({}, state, {
        active: action.payload,
      });

    default:
      return state;
  }
};

export default reducer;
