function flat(arr) {
  let arr1 = []
  arr.forEach((val) => {
    if (Array.isArray(val)) {
      arr1 = arr1.concat(fn(val))
    } else {
      arr1.push(val)
    }
  })
  return arr1;
}