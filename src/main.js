const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');


// 是否macOS
const isMac = process.platform === 'darwin';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// 创建登录窗口
const createWinLogin = () => {
  // Create the browser window.
  const winLogin = new BrowserWindow({
    width: 300,
    height: 450,
    useContentSize: true,
    resizable: false,
    frame: false,
    titleBarStyle: 'hidden',
    center: true,
    // transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  createWinCommon(winLogin);

  // 隐藏
  ipcMain.handle('hideWinLogin', (e, args) => {
    winLogin.hide();
  });

  // 销毁
  ipcMain.handle('destroyWinLogin', (e, args) => {
    winLogin.destroy();
    ipcMain.removeListener('destroyWinLogin', () => { });
  });
};


// 创建主体
ipcMain.handle('createWinMain', (e, args) => {
  createWinMain();
});

// 创建软件主体窗口
const createWinMain = () => {
  const winMain = new BrowserWindow({
    width: 900,
    height: 600,
    minWidth: 750,
    minHeight: 500,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#ffffff',
      height: 10,
      // symbolColor: 'black'
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  createWinCommon(winMain);

  // winMain.on('ready-to-show', () => {
  //   win.show();
  // });

  // 隐藏
  ipcMain.handle('hideWinMain', (e, args) => {
    winMain.hide();
    ipcMain.removeListener('hideWinMain', () => { });
  });

  // 销毁
  ipcMain.handle('destroyWinMain', (e, args) => {
    winMain.destroy();
    ipcMain.removeListener('destroyWinMain', () => { });
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWinMain);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWinMain();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// 创建窗口时的一些公共方法
function createWinCommon(win) {
  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    win.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  win.webContents.openDevTools();
}