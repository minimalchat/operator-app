/* eslint no-param-reassign: ["error", { "props": false }] */
import io from 'socket.io-client';
import {
  socketConnected,
  socketDisconnected,
  socketConnectionError,
  socketConnectionTimeout,
  socketReconnecting,
  socketReconnected,
  socketReconnectError,
  socketReconnectFailed,
  socketReconnectTimeout,
} from './Socket';

import {
  addChat,
  receiveMessage,
} from './Chat';

let socket = null;

// Middleware for Redux to watch for new chat messages
export function socketMessageHook (store) {
  return next => (action) => {
    const result = next(action);

    if (socket && action.type === 'CHAT_MESSAGE_OPERATOR') {
      socket.emit('operator:message', JSON.stringify(action.payload));
    }

    if (socket && action.type === 'TYPING') {
      socket.emit('operator:typing');
    }
  };
}


export default function socketInit (store) {
  const { dispatch } = store;
  const { chat: { config } } = store.getState();
  const socketPath = config.apiServer || 'http://localhost:8000';

  if (!socketPath) {
    console.error('ERROR: No API Server defined', config);
  }

  console.debug('CONNECTING SOCKET');

  // Make connection
  socket = io.connect(socketPath, {
    reconnectionAttempts: 10,
    query: {
      type: 'operator',
    },
  });


  // Client events
  socket.on('client:message', data => dispatch(receiveMessage(data ? JSON.parse(data) : [])));

  socket.on('chat:new', data => dispatch(addChat(data ? JSON.parse(data) : [])));


  // Connection events
  socket.on('connect', () => dispatch(socketConnected()));

  socket.on('disconnect', () => dispatch(socketDisconnected()));

  socket.on('connect_error', error => dispatch(socketConnectionError(error)));

  socket.on('connect_timeout', () => dispatch(socketConnectionTimeout()));

  socket.on('reconnect', attempt => dispatch(socketReconnected(attempt)));

  socket.on('reconnecting', attempt => dispatch(socketReconnecting(attempt)));

  socket.on('reconnect_error', error => dispatch(socketReconnectError(error)));

  socket.on('reconnect_failed', () => dispatch(socketReconnectFailed()));

  socket.on('reconnect_timeout', () => dispatch(socketReconnectTimeout()));

  socket.on('ping', () => {
    console.debug('PING');
  });

  socket.on('pong', latency => console.debug('PONG', latency, 'ms'));

  // Listen for anything, useful in debugging
  const onevent = socket.onevent;
  socket.onevent = function onEvent (packet) {
    const args = packet.data || [];
    onevent.call(this, packet);    // original call
    packet.data = ['*', ...args];
    onevent.call(this, packet);      // additional call to catch-all
  };
  socket.on('*', (...args) => console.debug('SOCKET', args));

  return socket;
}
