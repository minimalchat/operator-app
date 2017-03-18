export default function initSockets (socket) {
  // Successful connection
  function onSocketConnected () {
    console.log('DEBUG', 'Socket connected');
  }

  // Disconnected
  function onSocketDisconnected () {
    console.warn('DEBUG', 'Socket disconnected');
  }

  // Successful re-connected
  function onSocketReconnected () {
    console.log('DEBUG', 'Socket reconnected');
  }

  // Attempting to re-connect
  function onSocketReconnecting () {
    console.log('DEBUG', 'Socket reconnecting ...');
  }

  // Failed to re-connect after manager.reconnectionAttempts tried
  function onSocketReconnectionFailed () {
    console.error('DEBUG', 'Socket failed reconnection');
  }

  // Timeout either connecting or re-connecting
  function onSocketTimeout () {
    console.warn('DEBUG', 'Socket timeout');
  }

  // Error when connecting or re-connecting
  function onSocketConnectionError () {
    console.error('DEBUG', 'Socket connection error');
  }

  socket.on('connect', onSocketConnected);
  socket.on('connect_error', onSocketConnectionError);
  socket.on('connect_timeout', onSocketTimeout);
  socket.on('disconnect', onSocketDisconnected);
  socket.on('reconnect', onSocketReconnected);
  socket.on('reconnecting', onSocketReconnecting);
  // socket.on('reconnect_error', socketConnectionError);
  socket.on('reconnect_failed', onSocketReconnectionFailed);
  socket.on('reconnect_timeout', onSocketTimeout);
}
