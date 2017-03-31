/* eslint no-param-reassign: ["error", { "props": false }] */
import io from 'socket.io-client';
import * as actions from './Chat/actions.js';
// import actions that have anything to do with sockets.

export default function (store) {
  const { dispatch } = store;
  const { chat: { config } } = store.getState();
  const socketPath = config.apiServer || 'http://localhost:8000';

  if (!socketPath) {
    console.error('ERROR: No API Server defined', config);
  }

  console.log('CONNECTING SOCKET');

  const socket = io.connect(socketPath, {
    reconnectionAttempts: 10,
    query: 'type=operator',
  });

  let onevent = socket.onevent;
  socket.onevent = function (packet) {
    let args = packet.data || [];
    onevent.call(this, packet);    // original call
    packet.data = ['*'].concat(args);
    onevent.call(this, packet);      // additional call to catch-all
  };
  socket.on('*', (...args) => console.log('SOCKET', args));


  socket.on('client:message', (data) => {
    console.log('DEBUG', 'RECIEVING MESSAGE ...', data);
  });

  socket.on('connect', () => (
    dispatch(actions.socketConnected())
  ));

  socket.on('disconnect', () => (
    dispatch(actions.socketDisconnected())
  ));

  socket.on('connect_error', () => (
    console.log('CONNECT ERROR')
  ));

  socket.on('connect_timeout', () => (
    console.log('CONNECT TIMEOUT')
  ));

  socket.on('reconnect', () => (
    console.log('RECONNECT')
  ));

  socket.on('reconnecting', () => (
    console.log('RECONNECTING')
  ));

  socket.on('reconnect_failed', () => (
    console.log('RECONNECT FAILED')
  ));

  socket.on('reconnect_timeout', () => (
    console.log('RECONNECT TIMEOUT')
  ));

  // TODO: Write the rest of the socket dispatches as necessary

  // 'connect_error'
  // 'connect_timeout'
  // 'reconnect'
  // 'reconnecting'
  // 'reconnect_failed'
  // 'reconnect_timeout'
}
