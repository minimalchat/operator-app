const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

const path = require('path');
const url = require('url');

let defaultURL = url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true
});

let defaultMenuTemplate = [
  {
    label: 'File',
    submenu: [
      { label: 'Preferences' },
      { type: 'separator' },
      { label: 'Close Conversation', accelerator: 'CmdOrCtrl+W' },
      { label: 'Close Window', accelerator: 'CmdOrCtrl+Shift+W' },
      { type: 'separator' },
      { label: 'Quit', accelerator: 'CmdOrCtrl+Q', role: 'quit' },
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'delete' },
      { role: 'selectall' },
      { type: 'separator' },
      { label: 'Find...', accelerator: 'CmdOrCtrl+F' },
    ],
  },
  {
    label: 'Help',
    submenu: [
      { 'label': 'Keyboard Shortcuts' },
      { type: 'separator' },
      { 'label': 'Report Issue...' },
      { type: 'separator' },
      { 'label': 'About Operator...' },
    ],
  }
];

let windowObject;

module.exports = class Window {
  static isNull() {
    return windowObject === null;
  }

  // Convenience function for electron's 'ready' event
  static onReady() {
    return new Window();
  }

  // Shortcut function to create an instance of Window
  static create (url = defaultURL, width = 800, height = 600) {
    return new Window(url, width, height);
  }

  constructor (url = defaultURL, width = 800, height = 600) {
    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    // let mainWindow;
    this.window = windowObject = new BrowserWindow({ width: width, height: height });
    this.window.loadURL(url);
    this.window.webContents.openDevTools();
    this.window.on('closed', this.onClosed);

    // Build out the application menu
    this.buildMenu();
  }

  // Build out our window menu
  buildMenu (template = defaultMenuTemplate) {
    let handleMenuClick = (menu) => {
      if ('submenu' in menu) {
        // If there is a submenu handle it as well, recursively!
        for (let submenu of menu.submenu) {
          handleMenuClick(submenu);
        }
      } else if ('click' in menu) {
        // OK
      } else if ('role' in menu) {
        // OK
      } else {
        // If theres no label we cant figure out what to look for, so ignore
        if (!menu.hasOwnProperty('label')) {
          return;
        }

        // Build a 'on______Click' property name
        let propertyName = ['on'];
        propertyName.push(menu.label.replace(/[\s\.]+/g, ''));
        propertyName.push('Click');

        // Build method name from property name
        let method = propertyName.join('');

        // If the function exists on this class, use it (for extending upon
        //  this class)
        if (method in this && typeof this[method] == 'function') {
          menu.click = this[method];

          return;
        }

        menu.click = () => {
          throw new Error('NotImplemented: MenuItem without click action');
        }
      }
    }

    // If the menu template objects don't include click properties,
    //  attempt to handle them if we can
    for (let menu of template) {
      handleMenuClick(menu);
    }

    // Assign menu
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  }

  // Menu click events

  // onPreferencesClick () { }
  // onCloseConversationClick () { }
  // onCloseWindowClick () { }
  // onFindClick () { }
  // onKeyboardShortcutsClick () { }
  // onReportIssueClick () { }
  // onAboutOperatorClick () { }


  // Window events

  onClosed () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    this.window = windowObject = null;
  }
};
