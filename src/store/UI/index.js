const initialState = {
  welcomeScreenOpen: false,
  settingsOpen: false,
  notification: '',
  notificationIcon: null,
  notificationColour: null,
};

// Constants
//

const TOGGLE_SETTINGS = 'UI_TOGGLE_SETTINGS';
const TOGGLE_WELCOME_SCREEN = 'UI_TOGGLE_WELCOME_SCREEN';

const SHOW_NOTIFICATION = 'UI_SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'UI_HIDE_NOTIFICATION';


// Actions
//

export function toggleSettings (payload) {
  return { type: TOGGLE_SETTINGS, payload };
}

export function toggleWelcomeScreen (payload) {
  return {
    type: TOGGLE_WELCOME_SCREEN,
    payload,
  };
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
    case TOGGLE_WELCOME_SCREEN:
      if (action.payload == null) {
        return {
          ...state,
          welcomeScreenOpen: !state.welcomeScreenOpen,
        };
      }
      return { ...state, welcomeScreenOpen: action.payload };
    // Can take a boolean, or no args, in which case this just toggles opposite
    //  state value from  before
    case TOGGLE_SETTINGS:
      if (action.payload == null) {
        return {
          ...state,
          settingsOpen: !state.settingsOpen,
        };
      }
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
