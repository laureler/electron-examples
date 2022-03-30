const {ipcRenderer} = require('electron')

const asyncMsg = "asyncMsg" //异步消息
const asyncReply = "asyncReply" //异步消息回复

const syncMsg = "syncMsg" // 同步消息
const syncReply = "syncReply" //同步消息回复


const res = ipcRenderer.sendSync(syncMsg, 'ping')
console.log(res) // should be pong


ipcRenderer.send(asyncMsg, 'hello')
ipcRenderer.on(asyncReply, (event, args) => {
  console.log(args)
})
