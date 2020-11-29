// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const fs = require("fs");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Open the DevTools.
  // if (isDev) {
  //   mainWindow.webContents.openDevTools();
  // }

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function read(filename) {
  let output = [];
  if (fs.existsSync(filename)) {
    let data = fs.readFileSync(filename, "utf8").split("\n");

    data.forEach((line, index) => {
      const splitter = line.indexOf(":", "03/22 08:54:35".length);
      const part1 = line.substring(0, splitter);
      const part2 = line.substring(splitter + 1, line.length - splitter + 1);
      const time = part1.substring(0, "03/22 08 54:35".length);
      const type = part1.substring(time.length + 1).trim();
      let level = "info";
      if (type == "WARNING") {
        console.log(line);
        console.log(part2);
        level = "warning";
      } else if (type == "ERROR") {
        level = "error";
      }

      output.push({ id: index, time: time, content: part2, debuglevel: level });
    });
  } else {
    console.log("File Doesn't Exist.");
  }

  return output;
}

ipcMain.once("file-openning", (event, path) => {
  data = read(path);
  if (data.length > 0) {
    console.log("fire file-read event");
    event.reply("file-read", data);
  }
});
