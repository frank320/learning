'use strict'

function foo(a, b) {
  console.log(a)
  arguments[0] = 2 //非严格模式下 生效
  console.log(a) //严格模式下 打印1
}
foo(1)