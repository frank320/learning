'use strict'

//找出0-1000000000中1的个数
function findOne (num, sum = 0) {
  var arr = num.toString().split('')
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      sum++
    }
  }
  num--
  if (num == 0) {
    return sum
  }
  return findOne(num, sum)
}

console.log(findOne(100000))
