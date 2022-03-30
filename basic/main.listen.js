const {ipcMain} = require('electron')
const asyncMsg = "asyncMsg" //异步消息
const asyncReply = "asyncReply" //异步消息回复

const syncMsg = "syncMsg" // 同步消息
const syncReply = "syncReply" //同步消息回复

//监听异步消息，再过一会回复
ipcMain.on(asyncMsg, (event, args) => {
  console.log(args); // should be ping
  setTimeout(() => {
    event.reply(asyncReply, 'world')
  }, 5 * 1000)
})

// 监听同步消息，并且立刻回复
ipcMain.on(syncMsg, (event, args) => {
  console.log(args); //should be hello
  event.returnValue = "pong"
})
