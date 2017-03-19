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

  socket.on('disconnect', () => (
    dispatch(actions.socketDisconnected())
  ));


   /* TODO (the corresponding action creators don't exist yet either */

   // 'connect_error'
   // 'connect_timeout'
   // 'reconnect'
   // 'reconnecting'
   // 'reconnect_failed'
   // 'reconnect_timeout'
}
