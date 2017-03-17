//
// --- Constants
//

const UI_TOGGLE_SETTINGS = 'UI_TOGGLE_SETTINGS';


//
// --- Actions
//

export function toggleSettings (payload) {
  return {
    type: UI_TOGGLE_SETTINGS,
    payload,
  };
}


//
// --- Reducer
//

const initialState = {
  settingsOpen: false,
};

function UiReducer (state = initialState, action) {
  switch (action.type) {

    case UI_TOGGLE_SETTINGS:
      return { ...state, settingsOpen: !state.settingsOpen };

    default:
      return state;

  }
}


export default UiReducer;
