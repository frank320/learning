async function foo(a) {
  console.log(666)
  return a
}
foo(888).then(r=>{
  console.log(r)
})

console.log(777)