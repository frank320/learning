const obj = {a: 1}
Object.getPrototypeOf(obj).b = 2

const {a, b} = obj
console.log(a, b)
console.log(Object.getPrototypeOf(obj))