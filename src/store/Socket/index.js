const initialState = {
  state: null,
};

// Constants
//

const CONNECTED = 'SOCKET_CONNECTED';
const DISCONNECTED = 'SOCKET_DISCONNECTED';
const CONNECTION_ERROR = 'SOCKET_CONNECTION_ERROR';
const CONNECTION_TIMEOUT = 'SOCKET_CONNECTION_TIMEOUT';
const RECONNECTING = 'SOCKET_RECONNECTING';
const RECONNECTED = 'SOCKET_RECONNECTED';
const RECONNECT_ERROR = 'SOCKET_RECONNECT_ERROR';
const RECONNECT_FAILED = 'SOCKET_RECONNECT_FAILED';
const RECONNECT_TIMEOUT = 'SOCKET_RECONNECT_TIMEOUT';


// Actions
//
export function socketConnected () {
  return {
    type: CONNECTED,
  };
}

export function socketDisconnected () {
  return {
    type: DISCONNECTED,
  };
}

export function socketConnectionError (error) {
  return {
    type: CONNECTION_ERROR,
    error,
  };
}

export function socketConnectionTimeout () {
  return {
    type: CONNECTION_TIMEOUT,
  };
}

export function socketReconnecting () {
  return {
    type: RECONNECTING,
  };
}

export function socketReconnected () {
  return {
    type: RECONNECTED,
  };
}

export function socketReconnectError (error) {
  return {
    type: RECONNECT_ERROR,
    error,
  };
}

export function socketReconnectFailed () {
  return {
    type: RECONNECT_FAILED,
  };
}

export function socketReconnectTimeout () {
  return {
    type: RECONNECT_TIMEOUT,
  };
}


// Reducer
//
function SocketReducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default SocketReducer;
