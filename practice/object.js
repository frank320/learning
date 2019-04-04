const o1 = Object.create({ a: 1 });
o1.b = 2;

const o2 = { ...o1 };//拷贝o1自身所有可遍历属性
console.log(o2.a)//undefined
const { a } = o1;//可以解构原型上的属性 等价于 const a = o1.a
console.log(a)