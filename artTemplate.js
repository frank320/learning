/**
 * Created by wikeLi on 2016/12/29.
 */
const app = require('express')()
const artTemplate = require('art-template')

app.engine('.html', artTemplate.__express)
app.set('view engine', 'html')
app.set('views', __dirname + '/www')

app.get('/', (req, res)=> {
  res.render('index', {title: 'artTemplate', name: 'frank',age:27})
  console.log('响应结束') //响应结束
})

app.listen(3000, (err)=> {
  if (!err) console.log(`server is running at port:3000`)
})