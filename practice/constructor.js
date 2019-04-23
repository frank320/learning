class Foo{
  constructor() {
    this.a=1
  }
}
const f = new Foo()

console.log(f.constructor===Foo)//true
