"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules to control application life and create native browser window
const electron_1 = require("electron");
const electron_updater_1 = require("electron-updater");
const path = __importStar(require("path"));
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
function createWindow() {
    // Create the browser window.
    mainWindow = new electron_1.BrowserWindow({
        backgroundColor: "#000",
        center: true,
        resizable: false,
        height: 600,
        width: 800,
        minHeight: 150,
        minWidth: 200,
        minimizable: true,
        maximizable: false,
        fullscreen: false,
        movable: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // Turns off menu
    mainWindow.setMenu(null);
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
    mainWindow.once('ready-to-show', () => {
        Electron.protocol.interceptFileProtocol('file', (request, callback) => {
            const filePath = request.url.replace('file://', '');
            const url = request.url.includes('assets/') ? path.normalize(`${__dirname}/${filePath}`) : filePath;
            callback({ path: url });
        }, (err) => {
            if (err)
                console.error('Failed to register protocol');
        });
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", createWindow);
// Quit when all windows are closed.
electron_1.app.on("window-all-closed", () => {
    mainWindow.webContents.send("close", "");
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
electron_updater_1.autoUpdater.on('update-available', () => {
    mainWindow.webContents.send('update_available');
});
electron_updater_1.autoUpdater.on('update-downloaded', () => {
    mainWindow.webContents.send('update_downloaded');
});
electron_1.ipcMain.on('app_version', (event) => {
    event.sender.send('app_version', { version: electron_1.app.getVersion() });
});
electron_1.ipcMain.on('restart_app', () => {
    electron_updater_1.autoUpdater.quitAndInstall();
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVFQUF1RTtBQUN2RSx1Q0FBcUQ7QUFDckQsdURBQTZDO0FBQzdDLDJDQUE2QjtBQUU3Qiw4RUFBOEU7QUFDOUUsMkVBQTJFO0FBQzNFLElBQUksVUFBcUMsQ0FBQztBQUUxQyxTQUFTLFlBQVk7SUFDbkIsNkJBQTZCO0lBQzdCLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUM7UUFDN0IsZUFBZSxFQUFFLE1BQU07UUFDdkIsTUFBTSxFQUFFLElBQUk7UUFDWixTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUUsR0FBRztRQUNYLEtBQUssRUFBRSxHQUFHO1FBQ1YsU0FBUyxFQUFFLEdBQUc7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsY0FBYyxFQUFFO1lBQ2QsZUFBZSxFQUFFLElBQUk7U0FDdEI7S0FDRixDQUFDLENBQUM7SUFFSCxpQkFBaUI7SUFDakIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV6QixzQ0FBc0M7SUFDdEMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVsQyxxQkFBcUI7SUFDckIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUV0QyxxQ0FBcUM7SUFDckMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQzNCLGlFQUFpRTtRQUNqRSxtRUFBbUU7UUFDbkUsb0RBQW9EO1FBQ3BELFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFD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