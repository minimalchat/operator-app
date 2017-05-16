const initialState = {
  state: null,
};

// Constants
//

export const CONNECTED = 'SOCKET_CONNECTED';
export const DISCONNECTED = 'SOCKET_DISCONNECTED';
export const CONNECTION_ERROR = 'SOCKET_CONNECTION_ERROR';
export const CONNECTION_TIMEOUT = 'SOCKET_CONNECTION_TIMEOUT';
export const RECONNECTING = 'SOCKET_RECONNECTING';
export const RECONNECTED = 'SOCKET_RECONNECTED';
export const RECONNECT_ERROR = 'SOCKET_RECONNECT_ERROR';
export const RECONNECT_FAILED = 'SOCKET_RECONNECT_FAILED';
export const RECONNECT_TIMEOUT = 'SOCKET_RECONNECT_TIMEOUT';


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

export function socketConnectionError () {
  return {
    type: CONNECTION_ERROR,
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

export function socketReconnectError () {
  return {
    type: RECONNECT_ERROR,
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
