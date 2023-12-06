// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');


// 暴露一些操作窗口的方法给渲染进程
contextBridge.exposeInMainWorld('winHandle', {
    // 设置窗口位置
    setPosition: () => {
    },
    destroyWinLogin: () => {
        // send适合发送简单的消息和事件，invoke调用主进程的代码并能获取其返回结果。
        // 不需要主进程返回结果用send
        ipcRenderer.send('destroyWinLogin',);
    },
    hideWinLogin: () => {
        ipcRenderer.send('hideWinLogin',);
    },
    createWinMain: () => {
        ipcRenderer.send('createWinMain',);
    }
});

