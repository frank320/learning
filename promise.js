/**
 * Created by wikeLi on 2016/12/19.
 */
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
})
const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(2)
    console.log('after reject')
  }, 2000)
})


const p3 = [1, 2, 3]
//Promise.all([p1, p2, p3]).then(function (q) {
//  console.log(q[0])
//  console.log(q[1])
//  console.log(q[2])
//}).catch(function (e) {
//  console.log('err')
//})

//p1.then((r)=> {
//  console.log(r)
//}).then((r)=> {
//  console.log(r)
//  return 2
//}).then((r)=> {
//  console.log(r)
//})

function test() {
  return new Promise(function (resolve, reject) {
    console.log(111)
    return setTimeout(function () {
      resolve()
      for (let i = 0; i < 3; i++) {
        console.log(i)
      }
    }, 2000)
  })
}
//test().then(function () {
//  console.log(333)
//})
//console.log(222)

//结果顺序 111 222  i  333


console.log('-------------------------------')

const demo = new Promise((resolve, reject)=>reject('err'))
// demo
//   .catch(err=>console.log(err))
//   .then(()=>console.log('ok'))//会执行吗?会执行