/**
  * This file handles the state / actions for the config.json file.
  * The config state object needs to match the keys of the back end config json file.
  * An example interaction with this file / these functions would be as follows:
  * User toggles a setting such as: "disable notifications"
    |> clicking the toggle dispatches an action
    |> the action triggers an ipcSend call sending the config object to the server
    |> the server takes the data and tries to write it to the config file
    |>  -> on success: return payload, and, finally, update the config state object
    |>  -> on failure: return a message indicating a failure; client config state doesn't change
*/

// State (config object)
const initialState = {
  apiServer: null,
  operator: null
}


// Constants

const SET_CONFIG = 'CHAT_SET_CONFIG';
const SET_API_SERVER = 'CHAT_SET_API_SERVER';


// Actions

export function setConfig (payload) {
  return {
    type: SET_CONFIG,
    payload,
  };
}


// Reducer

function ConfigReducer (state = initialState, action) {
  switch(action.type) {

    // when a user sets the config, set it in the state
    // NOTE: payload from server should match the exact initial state in this file;
    // Still, we use object assign to create a new object and merge any lingering properties that could be in memory memory
    // if SET_CONFIG was to be called in any other place that an `initialize` type function
    case SET_CONFIG:
      return Object.assign({}, state, action.payload)

    default:
      return state;

  }
}

export default ConfigReducer;
