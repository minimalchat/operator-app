const electron = require("electron");
// Module to control application life.
const { app, ipcMain } = electron;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Preferences",
        click() {
          // TODO: send ipc to front end for opening settings
          console.log("do preferences stuff");
          return;
        }
      },
      { type: "separator" },

      // NOTE: > 1.0
      /* {
       *   label: "Close Conversation",
       *   accelerator: "CmdOrCtrl+W",
       *   click() {
       *     return;
       *   }
       * },*/

      // NOTE: > 1.0
      /* {
       *   label: "Close Window",
       *   accelerator: "CmdOrCtrl+Shift+W",
       *   click() {
       *     return;
       *   }
       * },*/

      { type: "separator" },

      {
        label: "Quit",
        accelerator: "CmdOrCtrl+Q",
        role: "quit",
        click() {
          app.quit();
        }
      }
    ]
  },
  {
    label: "Help",
    submenu: [
      {
        label: "Report Issue...",
        // open link to report issue on github
        // defaulting to a `new` issues template would be cool but it requires
        // being logged into github
        click() {
          require("electron").shell.openExternal(
            "https://github.com/minimalchat/operator-app/issues/"
          );
        }
      },
      { type: "separator" },
      {
        label: "About Operator...",
        click() {
          require("electron").shell.openExternal(
            "https://github.com/minimalchat/operator-app#minimal-chat-operator-application"
          );
        }
      }
    ]
  }
];

// Assign menu
function buildMenu() {
  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
}

module.exports = buildMenu;
