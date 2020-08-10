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
//console.log(users.size)
//console.log([...users] instanceof Array)


const obj = {
  a: 1,
  b: true,
}
const {a,b:c}=obj
console.log(c)
console.log(obj.b)

//console.log({...obj})//node 8.1.0不支持
// good
function divide(a, b, { option =false } = {}) {
  console.log(option)
}
divide(1, 2)
//const fs = require('fs')
//const path = require('path')
//fs.unlink(path.join(__dirname,'./upload/38989048361505874.png'), function (err) {
//  console.log(err)
//  if(!err) console.log('ok')
//})