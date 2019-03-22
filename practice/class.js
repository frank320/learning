/**
 * Created by wikeLi on 2016/12/23.
 */
class Foo {
  constructor(name = 'admin', age = 18) {//类Foo的默认方法 不写则回默认添加
    this.name = name
    this.age = age
    return this //默认返回this 也可以指定其他对象
  }

  sayHi() {
    console.log('hello, I am', this.name, this.age)
  }
}
const fo = new Foo('frank')
fo.sayHi()
console.log(fo.constructor === Foo.prototype.constructor)//true
console.log(Foo.prototype.constructor)

class Child extends Foo {
  constructor() {//会默然添加此方法
    super()//父类构造函数 但返回的是子类的实例(this)
  }

  sayHello() {
    super.sayHi()//super 代表父类Foo的原型对象(Foo.prototype)
    console.log('hello')
  }
}
const child = new Child()
child.sayHi()


const obj = {
  a: 1,
  b: 2
}
const arr = [1, 2, 3, 4]
function test({a,b}) {
  console.log(a + b)
}
function test1(first, ...arr) {
  console.log(arr)
}
test(obj)
test1(1, 2, 3, 4)