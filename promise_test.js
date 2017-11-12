// const promise = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve()
//   console.log(2)
// })
// promise.then(() => {
//   console.log(3)
// })
// console.log(4)
//--------------------------
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    setTimeout(function () {
      console.log('timeout again')
    },0)
    resolve('success')
    console.log('down success ')
  }, 1000)
})
const promise2 = promise1.then((r) => {
    console.log(r)
  // throw new Error('error!!!')
})

console.log('promise1', promise1)
console.log('promise2', promise2)

setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)
// setTimeout(() => {
//   console.log('800')
// }, 800)
//-----------------------
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('once')
//     resolve('success')
//   }, 1000)
// })
//
// const start = Date.now()
// promise.then((res) => {
//   console.log(res, Date.now() - start)
// })
// promise.then((res) => {
//   console.log(res, Date.now() - start)
// })
//once
//success 1062
//success 1062
//-----------------------------------
// const promise = Promise.resolve()
//   .then(() => {
//     return promise
//   })
// promise.catch(console.error)
//----------------------

// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log) //1

//------------
// Promise.resolve()
//   .then(function success (res) {
//     throw new Error('error')
//   }, function fail1 (e) {
//     console.error('fail1: ', e)
//   })
//   .catch(function fail2 (e) {
//     console.error('fail2: ', e)
//   })

//-------------
setTimeout(()=>{
  console.log('setTimeout')
}) //下一轮事件循环开始执行
setImmediate(() => {
  console.log('setImmediate')
}) //下一轮事件循环开始执行
Promise.resolve()
  .then(() => {
    console.log('then')
  })//本轮事件循环末尾执行
process.nextTick(() => {
  console.log('nextTick')
}) //主线程代码执行完后后立即执行


console.log('end') //end nextTick then setTimeout setImmediate