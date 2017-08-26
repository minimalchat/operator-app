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

// State


// Constants


// Actions


// Reducer
