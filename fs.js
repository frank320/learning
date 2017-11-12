const fs = require('fs')
const path=require('path')
fs.mkdirSync(__dirname+'/a/b') //err
fs.mkdirSync(__dirname+'/a') //ok