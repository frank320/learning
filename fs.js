const fs = require('fs')
const path=require('path')
fs.mkdirSync(path.join(__dirname+'/a/b')) //err
fs.mkdirSync(path.join(__dirname+'/a')) //ok