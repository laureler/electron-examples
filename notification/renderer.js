
// 在渲染进程中显示通知
const myNotification = new Notification('Title', {
  body: 'Notification from the Renderer process'
})
myNotification.onclick = () => {
  console.log('Notification clicked')
}
