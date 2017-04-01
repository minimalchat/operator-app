// Constants
//

export const SOCKET_CONNECTED = 'SOCKET_CONNECTED';
export const SOCKET_DISCONNECTED = 'SOCKET_DISCONNECTED';
export const SOCKET_CONNECTION_ERROR = 'SOCKET_CONNECTION_ERROR';
export const SOCKET_CONNECTION_TIMEOUT = 'SOCKET_CONNECTION_TIMEOUT';
export const SOCKET_RECONNECTING = 'SOCKET_RECONNECTING';
export const SOCKET_RECONNECTED = 'SOCKET_RECONNECTED';
export const SOCKET_RECONNECT_ERROR = 'SOCKET_RECONNECT_ERROR';
export const SOCKET_RECONNECT_FAILED = 'SOCKET_RECONNECT_FAILED';
export const SOCKET_RECONNECT_TIMEOUT = 'SOCKET_RECONNECT_TIMEOUT';


// Actions
//
export function socketConnected () {
  return {
    type: SOCKET_CONNECTED,
  };
}

export function socketDisconnected () {
  return {
    type: SOCKET_DISCONNECTED,
  };
}

export function socketConnectionError () {
  return {
    type: SOCKET_CONNECTION_ERROR,
  };
}

export function socketConnectionTimeout () {
  return {
    type: SOCKET_CONNECTION_TIMEOUT,
  };
}

export function socketReconnecting () {
  return {
    type: SOCKET_RECONNECTING,
  };
}

export function socketReconnected () {
  return {
    type: SOCKET_RECONNECTED,
  };
}

export function socketReconnectError () {
  return {
    type: SOCKET_RECONNECT_ERROR,
  };
}

export function socketReconnectFailed () {
  return {
    type: SOCKET_RECONNECT_FAILED,
  };
}

export function socketReconnectTimeout () {
  return {
    type: SOCKET_RECONNECT_TIMEOUT,
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
