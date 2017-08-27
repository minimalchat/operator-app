/**
 * This file handles the state / actions for writing / reading the config.json file
 * The config state object needs to match the keys of the back end config json file.
 * An example interaction with this file / these functions would be as follows:
 * User toggles a setting such as: "disable notifications"
   |> clicking the toggle dispatches an action
   |> the action triggers an ipcSend call sending the config object to the server
   |> the server takes the data and tries to write it to the config file
   |>  -> on success: return payload, and, finally, update the config state object
   |>  -> on failure: return a message indicating a failure; client config state doesn't change
 */

// setup

import { ipcRenderer } from 'electron';

const initialState = {
  apiServer: null,
  operator: null,
  notificationsEnabled: null,
}

// Constants

const SET_CONFIG = 'SET_CONFIG';
const SET_API_SERVER = 'SET_API_SERVER';
const UPDATE_SETTINGS = 'UPDATE_SETTINGS'


// Actions

export function setConfig (payload) {
  return {
    type: SET_CONFIG,
    payload,
  };
}

export function updateSettings (payload) {
  return {
    type: UPDATE_SETTINGS,
    payload,
  }
}


// Reducer

function ConfigReducer (state = initialState, action) {
  console.log('config reducer:', action)
  switch(action.type) {

    // Triggered by incoming IPC message: 'config'
    // NOTE: payload from server should match the exact initial state in this file;
    // IPC ON: 'config' <--
    case SET_CONFIG:
      const newConfig = Object.assign({}, action.payload)

      // attach config to window to avoid doing all the passing around of the state between reducers
      // example: the chat reducer needs to know the config data, but that would entail passing the entire store and accessing the config object
      // every time a message gets sent (referring to when to show a messagen notification)
      // TODO: figure out a better way to do this
      window.config = newConfig
      return newConfig


    //Sends payload to server to be written to file
    //IPC SEND: 'update-settings' -->
    case UPDATE_SETTINGS:
      var newState = Object.assign({}, state, action.payload)
      ipcRenderer.send('update-settings', newState)


    default:
      return state;

  }
}

export default ConfigReducer;
