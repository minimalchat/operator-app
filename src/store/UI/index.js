const initialState = {
  settingsOpen: false,
  notification: '',
  notificationIcon: null,
  notificationColour: null,
};

// Constants
//

const TOGGLE_SETTINGS = 'UI_TOGGLE_SETTINGS';

const SHOW_NOTIFICATION = 'UI_SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'UI_HIDE_NOTIFICATION';


// Actions
//

export function toggleSettings (payload) {
  return { type: TOGGLE_SETTINGS, payload };
}

export function showNotification (payload) {
  return {
    type: SHOW_NOTIFICATION,
    payload,
  };
}

export function hideNotification () {
  return {
    type: HIDE_NOTIFICATION,
  };
}


// Reducer
//


function UIReducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return { ...state, settingsOpen: action.payload };

    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: action.payload.notification,
        notificationIcon: action.payload.notificationIcon,
        notificationColour: action.payload.notificationColour,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        notification: '',
      };

    default:
      return state;

  }
}


export default UIReducer;
