setTimeout(function () {
  console.log('setTimeout over', +new Date())
}, 3000)

for (let i = 0; i < 10e9; i++) {

}
console.log('loop over', +new Date())
//两者时间一样

