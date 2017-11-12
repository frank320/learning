const Foo = require('./Symbol')

const foo = new Foo(0)
// foo.show()//0
const s = Symbol.for('foo')//获取全局的symbol类型的值
console.log(foo[s])//0