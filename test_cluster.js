/**
 * Created by wikeLi on 2017/1/6.
 */
const app = require('express')()


app.get('/', (req, res)=> {
  //for (let i = 0; i < 10000000; i++) {
  //  console.log(6)
  //} 最好不要有这种大量计算的代码 严重影响性能 也无法发挥node的优势
  res.send('done')
})

app.get('/home', (req, res)=> {
  res.send('new request')
})

module.exports = app

//判断该模块是否被外部模块调用
if (!module.parent) {
  app.listen(3000, (err)=> {
    console.log(`server is runninf at port 3000`)
  })
}