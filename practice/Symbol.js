// const s = Symbol('foo')
const s = Symbol.for('foo') //可供全局搜索

class Foo {
  constructor(...arg) {
    this[s] = arg[0]
  }

  show() {
    console.log(this[s])
  }
}

const foo = new Foo(0)
// foo.show()//0
console.log(foo[s])//0

module.exports = Foo