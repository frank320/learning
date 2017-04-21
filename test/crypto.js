/**
 * Created by wikeLi on 2017/4/10.
 * md5加密字符串
 */
var crypto = require('crypto')
function crypto_md5(text) {
  var hash = crypto.createHash("md5")
  hash.update(new Buffer(text, "binary"))
  //return hash.digest('hex') //16进制
  return hash.digest('base64')
}
console.log(crypto_md5('hello'))
console.log(crypto_md5('world'))