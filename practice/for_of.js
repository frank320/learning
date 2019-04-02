const arr=[1,2,3,4,5,6]
for (let v of arr) {
  if (v === 2) {
    continue
  }
  console.log(v);
  if (v === 5) {
    break
  }
  
}