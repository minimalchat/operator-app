const initialState = {
  settingsOpen: false,
};

// Constants
//

const TOGGLE_SETTINGS = 'UI_TOGGLE_SETTINGS';


// Actions
//

export function toggleSettings () {
  return { type: TOGGLE_SETTINGS };
}


// Reducer
//


function UIReducer (state = initialState, action) {
  /* console.log('UI', action);*/
  switch (action.type) {

    case TOGGLE_SETTINGS:
      return { ...state, settingsOpen: !state.settingsOpen };

    default:
      return state;

  }
}


export default UIReducer;
