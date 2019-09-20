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
    // mainWindow.webContents.openDevTools();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVFQUF1RTtBQUN2RSx1Q0FBcUQ7QUFDckQsdURBQTZDO0FBQzdDLDJDQUE2QjtBQUU3Qiw4RUFBOEU7QUFDOUUsMkVBQTJFO0FBQzNFLElBQUksVUFBcUMsQ0FBQztBQUUxQyxTQUFTLFlBQVk7SUFDbkIsNkJBQTZCO0lBQzdCLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUM7UUFDN0IsZUFBZSxFQUFFLE1BQU07UUFDdkIsTUFBTSxFQUFFLElBQUk7UUFDWixTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUUsR0FBRztRQUNYLEtBQUssRUFBRSxHQUFHO1FBQ1YsU0FBUyxFQUFFLEdBQUc7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsY0FBYyxFQUFFO1lBQ2QsZUFBZSxFQUFFLElBQUk7U0FDdEI7S0FDRixDQUFDLENBQUM7SUFFSCxpQkFBaUI7SUFDakIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV6QixzQ0FBc0M7SUFDdEMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVsQyxxQkFBcUI7SUFDckIseUNBQXlDO0lBRXpDLHFDQUFxQztJQUNyQyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDM0IsaUVBQWlFO1FBQ2pFLG1FQUFtRTtRQUNuRSxvREFBb0Q7UUFDcEQsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUNwQyxRQUFRLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtZQUM1RSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBRXBHLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxHQUFHO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELHdEQUF3RDtBQUN4RCx5REFBeUQ7QUFDekQsc0RBQXNEO0FBQ3RELGNBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBRTlCLG9DQUFvQztBQUNwQyxjQUFHLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUMvQixVQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsMkRBQTJEO0lBQzNELDhEQUE4RDtJQUM5RCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ2pDLGNBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNaO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7SUFDdEIsZ0VBQWdFO0lBQ2hFLDREQUE0RDtJQUM1RCxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7UUFDdkIsWUFBWSxFQUFFLENBQUM7S0FDaEI7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILDhCQUFXLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUNwQyxVQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQyxDQUFDO0FBRUgsOEJBQVcsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLFVBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtJQUN2QyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsY0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDN0IsOEJBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQztBQUdILDRFQUE0RTtBQUM1RSx1RUFBdUUifQ==