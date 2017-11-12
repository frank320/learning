'use strict'

function foo(a, b) {
  console.log(a)
  arguments[0] = 2
  console.log(a)
}
foo(1)