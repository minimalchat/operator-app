const electron = require('electron');
// Module to control application life.
const { app, ipcMain } = electron;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

const fs = require('fs');
const path = require('path');
const url = require('url');

const buildMenu = require('./server/build-menu');
const events = require('./server/events');

const WINDOW_HEIGHT = 900;
const WINDOW_WIDTH = 1440;

const defaultURL = url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true,
});

let windowObject;

module.exports = class Window {
  static isNull () {
    return windowObject === null;
  }

  // Convenience function for electron's 'ready' event
  static onReady () {
    return Window.create();
  }

  // Shortcut function to create an instance of Window
  static create (url = defaultURL, width = WINDOW_WIDTH, height = WINDOW_HEIGHT) {
    return new Window(url, width, height);
  }

  constructor (url = defaultURL, width = WINDOW_WIDTH, height = WINDOW_HEIGHT) {
    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.

    this.window = windowObject = new BrowserWindow({
      width,
      height,
    });

    this.window.loadURL(url);

    // TODO: Only use this when built using DEV environment
    this.window.webContents.openDevTools();

    this.window.on('closed', this.onClosed);

    // Setup IPC handling
    this.configureIpc();

    // Build out the application menu
    buildMenu();
    this.window.setAutoHideMenuBar(true);
    this.window.setMenuBarVisibility(false);
  }

  // sets up all event handlers for messages main<->renderer
  configureIpc () {
    ipcMain.on('init-config', events.initConfig);
  }

  // Window events
  onClosed () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    this.window = windowObject = null;
  }
};
