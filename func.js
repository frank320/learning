

const p=new PromiseM((resolve,reject)=>{
  setTimeout(()=>{
    resolve('res')
  },2000)
})
p.then(data=>{
  console.log(data)
})

// function bar (cb) {
//   console.log('bar')
//   cb('cb')
// }

// bar(function (data) {
//   console.log('666')
//   console.log(data)
// })
// console.log('777')

// const obj = {
//   a: 1,
//   b: {
//     c: 2
//   }
// }
//
// function foo(obj) {//传的对象的引用的拷贝
//   console.log(obj)
//   obj.a='a'
//   obj.b.c='c'
// }
// foo(obj)
// console.log(obj)