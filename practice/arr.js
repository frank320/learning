
const o = [1, 2, 3, 4].keys();//返回遍历器对象 非数组
console.log(Array.isArray(o))//false
console.log(typeof o)//object

for (let i of o) {
    console.log(i)
}

const arr = [12, 14]
arr.unshift(1)
arr.unshift(2)
arr.unshift(3, 4)
console.log(arr)
