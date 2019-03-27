/**
 * Created by frank on 2016/12/13.
 */
const target = {
  a: 1,
  b: 2
}
//给一个对象添加属性 并设置属性的一些配置参数
Object.defineProperty(target, 'c', {
  value: 3,
  writable: false,//属性是否可以被重新赋值
  enumerable: true,//属性是否可以被遍历
  configurable: false //属性是否可以被删除
})
target.c = 4
delete target.c
console.log(target)
for (let v in target) {
  console.log(v)
}

const obj = Object.create({ a: 1});
obj.b = 2;
console.log("a" in obj)//true
console.log(Reflect.has(obj,"a"))//true
console.log(Reflect.ownKeys(obj))//[ 'b' ]