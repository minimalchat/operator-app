// This file handles the functions to call when certain events are received by the ipc renderer.
const path = require('path');
const fs = require('fs')

// creates config file if it doesn't already exist
function initConfig (event) {
  // Config file read/create
  let config = null;
  const configPath = path.join(__dirname, '../config.json');

  // TODO: Convert this to asynchronous file ops (faster?)
  if (!fs.existsSync(configPath)) {
    const fd = fs.openSync(configPath, 'w');

    // this config must be mirrored in the client app for passing config payloads from client<->server
    // TODO: move this to another file
    const initialConfig = {
      apiServer: '',
      operator: '',
      settings: {
        notificationsEnabled: true,
      },
    };

    fs.writeSync(fd, JSON.stringify(initialConfig, null, '  '), 0, 'utf8');
    fs.closeSync(fd);
  }

  config = require(configPath);
  event.sender.send('config', config);
}

module.exports = {
  initConfig,
};
