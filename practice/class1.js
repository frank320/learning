
// class Bar {
//   constructor(x) {
//     this.a = this.foo()
//     this.b = x
//   }

//   foo() {
//     return 1
//   }
// }
// const bar = new Bar(2)
// console.log(bar.a)
// console.log(bar.b)

class Foo {
  _a = 1 //实例属性
  static e = 5 //静态属性
  static f = () => 6 //静态属性
  static g() { return 7 }//静态方法 不可枚举
  constructor() {
    this.b = 2;
  }
  c = () => 3//实例属性
  d() { //原型属性 不可枚举
  }
}

const f = new Foo();
console.log(Object.keys(f));//[ '_a', 'c', 'b' ]
console.log(Object.keys(Foo));//[ 'e', 'f' ]
console.log(Object.getOwnPropertyNames(Foo));//[ 'length', 'name', 'prototype', 'g', 'e', 'f' ]
