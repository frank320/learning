async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  new Promise((resolve) => {
    console.log('promise1')
    resolve()
  }).then(() => {
    console.log('promise2')
  })
}

console.log('script start')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

async1()

new Promise((resolve) => {
  console.log('promise3')
  resolve()
}).then(() => {
  console.log('promise4')
})

console.log('script end') 
