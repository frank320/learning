/**
 * Created by frank on 2016/12/20.
 */
const app = require('express')()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')

//指定上传文件的存储位置
const upload = multer({storage: multer.diskStorage({})})

app.use(upload.any())
app.use(bodyParser.json({strict: false, limit: '100MB'})) //不加此中间件 req.body就是undefined

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, './file_upload.html'))
})
app.post('/upload', (req, res)=> {
  console.log(req.files[0])
  const f = req.files[0]
  const es = f.originalname.split('.')
  const extension = es.length < 2 ? '' : '.' + es[es.length - 1]
  const file = './upload/' + Math.random().toString().substr(2) + extension
  //将接收到的文件存到指定位置
  const reader = fs.createReadStream(f.path)
  const writer = fs.createWriteStream(path.join(__dirname, file))
  writer.on('finish', ()=> {
    //删除临时存储的文件
    fs.unlink(f.path, (err)=> {
      if (!err) console.log('delete ok')
    })
    res.status(200).send('ok')
  })
  reader.pipe(writer)
})
app.post('/demo', (req, res)=> {
  console.log(req.body)
  res.send('ok')
})
const server = app.listen(88, err=> {
  const port = server.address().port
  if (!err) console.log(`server is running at ${port}`)
})