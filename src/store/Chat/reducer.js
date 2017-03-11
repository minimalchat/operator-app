import { CHAT_OPEN_CONVERSATION } from './constants';
import makeDummy from "../dummy";


let biz = makeDummy(6, 50);
console.log(biz)

const initialState = {
  active: null,
};

const reducer = function ChatReducer(state = initialState, action) {
  /* console.log('CHAT', action);*/

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
