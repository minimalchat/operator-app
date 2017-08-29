
const electron = require('electron');
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

const defaultMenuTemplate = [
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

function buildMenu (template = defaultMenuTemplate) {
  //TODO: remove: This is not needed as there are click listeners/handlers that can be specified in the defaultMenuType Struct above
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
  // TODO this will be refactored out in another PR 
  for (let menu of template) {
    handleMenuClick(menu);
  }

  // Assign menu
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

module.exports = buildMenu;