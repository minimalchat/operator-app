// Constants
//

const UI_TOGGLE_SETTINGS = 'UI_TOGGLE_SETTINGS';


// Actions
//

export function toggleSettings () {
  return { type: UI_TOGGLE_SETTINGS };
}


// Reducer
//

const initialState = {
  settingsOpen: false,
};

function UIReducer (state = initialState, action) {
  switch (action.type) {

    case UI_TOGGLE_SETTINGS:
      return { ...state, settingsOpen: !state.settingsOpen };

    default:
      return state;

  }
}


export default UIReducer;
