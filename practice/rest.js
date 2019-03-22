/**
 * Created by frank on 2016/12/26.
 * babel-node全局安装 然后通过babel-node运行此文件
 */
//import fs from 'fs'
//import path from 'path'
//
////require('babel-register') //在此处加载无效
//export {demo} //
//const demo = 666


let obj = {
  a: 1,
  b: 2,
  c: 3,
}
obj.__proto__.d = 4
const arr = [1, 2, 3]
let arr1 = [...arr]//拷贝
let obj1 = {...obj}//将源对象（source）的所有可枚举属性，复制到目标对象（target）。 无法拷贝obj原型对象的属性 { a: 1, b: 2, c: 3 }
console.log(obj1)
//arr[0] = 4
console.log(arr1)


console.log(Object.assign({}, obj)) //将源对象（source）的所有可枚举属性，复制到目标对象（target）。 无法拷贝obj原型对象的属性 { a: 1, b: 2, c: 3 }

console.log('-------------------------------------')

for (let v in obj) {
  console.log(v) //可以遍历到其原型对象的属性 a b c d
}

console.log('-------------------------------------')

let {a,...r} = obj
console.log(a)
console.log(r)