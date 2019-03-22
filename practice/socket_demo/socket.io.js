/**
 * Created by wikeLi on 2016/12/27.
 */
const http = require('http')
const path = require('path')
const express = require('express')
const app = express()

const server = http.createServer(app)
const io = require('socket.io')(server)

let clients = 0 //只在服务启动时执行一次

io.on('connection', (socket)=> {
  clients++
  console.log(`一共有${clients}个用户连接进来了`)
  console.log(socket.id)
  socket.on('foo', data=> {
    setTimeout(()=>{
      socket.emit('event', data)
    },1000)
  })
})

app.use(express.static(__dirname))

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, './chat.html'))
})

server.listen(88, err=> {
  if (!err) console.log('server is running at localhost:88/')
})

