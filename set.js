/**
 * Created by frank on 2016/12/15.
 */
const users = new Set()
users.add('frank')
users.add('tom')
users.add('jack')
users.add('frank')
users.add('jack')
users.delete('tom')
console.log(users.size)
console.log([...users] instanceof Array)

//const fs = require('fs')
//const path = require('path')
//fs.unlink(path.join(__dirname,'./upload/38989048361505874.png'), function (err) {
//  console.log(err)
//  if(!err) console.log('ok')
//})