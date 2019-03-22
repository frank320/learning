/**
 * Created by frank on 2016/12/8.
 */
const http = require('http')
const express = require('express')
const path = require('path')
const app = express()

app.aaaaa = 'frank'

app.get('/', function (req, res, next) {
  console.log(req.app === app)//true
  console.log(req.app.aaaaa)//frank
  res.sendFile(path.join(__dirname, './test.html'))
})
app.get('/test', function (req, res) {
  res.send('ok')
})

//此方法可以将app挂载到req上 以后在任意地方的req都可以使用
http.createServer(app).listen(8000, function () {
  console.log(`sever is running at port 8000`)
})