const func = function () {
  console.log(this.a);
}

const obj = { a: 1 };
func();
const foo = func.bind(obj); //func为箭头函数则无效 因为箭头函数内部没有this
console.log(foo === func)//false

func()//undefined
foo()//1

const o = {
  f: func
}

o.f()//