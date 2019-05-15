const obj1 = {
  a: 1,
  foo() {
    console.log(this.a);
  }
}
obj1.foo()//1

const obj2 = {
  bar: obj1.foo
}
obj2.bar()//undefined