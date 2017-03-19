import io from 'socket.io-client';
import * as actions from './Chat/actions.js';
// import actions that have anything to do with sockets.

export default function (store) {
  const { dispatch } = store;
  const socketPath = 'http://localhost:8000';

  const socket = io.connect(socketPath, {
    reconnectionAttempts: 10,
  });

  socket.on('connect', () => (
    dispatch(actions.socketConnected())
  ));

  // dispatch different actions on different socket events
  /* socket.on('connect', onSocketConnected);
   * socket.on('connect_error', onSocketConnectionError);
   * socket.on('connect_timeout', onSocketTimeout);
   * socket.on('disconnect', onSocketDisconnected);
   * socket.on('reconnect', onSocketReconnected);
   * socket.on('reconnecting', onSocketReconnecting);
   * // socket.on('reconnect_error', socketConnectionError);
   * socket.on('reconnect_failed', onSocketReconnectionFailed);
   * socket.on('reconnect_timeout', onSocketTimeout);*/
}
