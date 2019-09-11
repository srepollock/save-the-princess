// Modules to control application life and create native browser window
import {app, BrowserWindow, ipcMain} from "electron";
import {autoUpdater} from "electron-updater";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: BrowserWindow | undefined;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    backgroundColor: "#000",
    center: true,
    resizable: false,
    height: 600,
    width: 800,
    minHeight: 150,
    minWidth: 200,
    minimizable: true,
    maximizable: true,
    movable: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = undefined;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  mainWindow!.webContents.send("close", "");
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

autoUpdater.on('update-available', () => {
    mainWindow!.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
    mainWindow!.webContents.send('update_downloaded');
});

ipcMain.on('app_version', (event: any) => {
  event.sender.send('app_version', { version: app.getVersion() });
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
