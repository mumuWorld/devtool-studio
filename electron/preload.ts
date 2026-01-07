import { contextBridge, ipcRenderer } from 'electron'

// 通过 contextBridge 暴露安全的 API 给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 这里可以添加需要暴露给 React 应用的 API
  // 例如：
  // send: (channel: string, data: any) => ipcRenderer.send(channel, data),
  // on: (channel: string, func: (...args: any[]) => void) => 
  //   ipcRenderer.on(channel, (event, ...args) => func(...args)),
})
