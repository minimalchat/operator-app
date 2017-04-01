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
    console.debug('CONNECT');

    dispatch(actions.socketConnected())
  ));

  socket.on('disconnect', () => (
    console.debug('DISCONNECT');

    dispatch(actions.socketDisconnected())
  ));

  socket.on('connect_error', () => (
    console.debug('CONNECT ERROR');

    // TODO: Dispatch event and alert Operator of connection issue
  ));

  socket.on('connect_timeout', () => (
    console.debug('CONNECT TIMEOUT');

    // TODO: Dispatch event and alert Operator of connection issue
  ));

  socket.on('reconnect', () => (
    console.debug('RECONNECTED');

    // TODO: Dispatch event and alert Operator of successful reconnection
  ));

  socket.on('reconnecting', () => (
    console.debug('RECONNECTING');

    // TODO: Dispatch event and alert Operator of reconnection
  ));

  socket.on('reconnect_failed', () => (
    console.debug('RECONNECT FAILED');

    // TODO: Dispatch event and alert Operator of reconnection issue
  ));

  socket.on('reconnect_timeout', () => (
    console.debug('RECONNECT TIMEOUT');

    // TODO: Dispatch event and alert Operator of reconnection issue
  ));

}
