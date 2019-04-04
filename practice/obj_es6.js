/**
 * Created by Frank on 2017/6/11.
 */
function getKey(v) {
  return v + 1
}
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,//使用属性表达式
}

for (let k in obj) {
  console.log(k)
  console.log(obj[k])
}

const o1 = {
  a: 1,
  say() {
    console.log("hello")
  },
  get age(){//取值函数
    return 1
  },
  set foo(v) {
    console.log("v",v)
  }
}
const o2 = Object.assign({}, o1)//无法拷贝赋值set方法 
o1.foo=2
console.log(o1)