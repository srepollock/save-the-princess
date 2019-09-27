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
const electron_2 = require("electron");
electron_updater_1.autoUpdater.checkForUpdatesAndNotify();
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
    electron_2.globalShortcut.register('f5', () => {
        mainWindow.reload();
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
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVFQUF1RTtBQUN2RSx1Q0FBcUQ7QUFDckQsdURBQStDO0FBQy9DLDJDQUE2QjtBQUM3Qix1Q0FBMEM7QUFFMUMsOEJBQVcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0FBRXZDLDhFQUE4RTtBQUM5RSwyRUFBMkU7QUFDM0UsSUFBSSxVQUFxQyxDQUFDO0FBRTFDLFNBQVMsWUFBWTtJQUNuQiw2QkFBNkI7SUFDN0IsVUFBVSxHQUFHLElBQUksd0JBQWEsQ0FBQztRQUM3QixlQUFlLEVBQUUsTUFBTTtRQUN2QixNQUFNLEVBQUUsSUFBSTtRQUNaLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxHQUFHO1FBQ1gsS0FBSyxFQUFFLEdBQUc7UUFDVixTQUFTLEVBQUUsR0FBRztRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsV0FBVyxFQUFFLElBQUk7UUFDakIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsT0FBTyxFQUFFLElBQUk7UUFDYixjQUFjLEVBQUU7WUFDZCxlQUFlLEVBQUUsSUFBSTtTQUN0QjtLQUNGLENBQUMsQ0FBQztJQUVILGlCQUFpQjtJQUNqQixVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpCLHNDQUFzQztJQUN0QyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRWxDLHFCQUFxQjtJQUNyQixVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXRDLHFDQUFxQztJQUNyQyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDM0IsaUVBQWlFO1FBQ2pFLG1FQUFtRTtRQUNuRSxvREFBb0Q7UUFDcEQsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUNwQyxRQUFRLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtZQUM1RSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBRXBHLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxHQUFHO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgseUJBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtRQUNqQyxVQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsd0RBQXdEO0FBQ3hELHlEQUF5RDtBQUN6RCxzREFBc0Q7QUFDdEQsY0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFOUIsb0NBQW9DO0FBQ3BDLGNBQUcsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQy9CLFVBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQywyREFBMkQ7SUFDM0QsOERBQThEO0lBQzlELElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDakMsY0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ1o7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILGNBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUN0QixnRUFBZ0U7SUFDaEUsNERBQTREO0lBQzVELElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtRQUN2QixZQUFZLEVBQUUsQ0FBQztLQUNoQjtBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsNEVBQTRFO0FBQzVFLHVFQUF1RSJ9