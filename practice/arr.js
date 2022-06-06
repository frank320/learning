
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

//不设置initialValue  则total初始值为arr[0] 并且从arr[1]开始遍历
arr.reduce(function (total, currentValue, currentIndex, arr) { }, initialValue);