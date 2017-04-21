/**
 * Created by wikeLi on 2017/4/1.
 */
const express = require('express')
const app = express()

app.get('/', (req, res)=> {
  console.log(req.query)
  res.send(req.query)
})
app.listen(80, (err)=> {
  if (!err) console.log(`server is running at localhost:80`)
})