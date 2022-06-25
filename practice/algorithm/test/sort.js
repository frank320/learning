const arr = [3, 7, 6, 8, 4, 2, 1, 5]


function quickSort(arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }
  const n = arr[0];
  const left = []
  const right = []
  for (let i = 1; i < len; i++) {
    if (arr[i] < n) {
      left.push(arr[i])
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([n], quickSort(right))
}


console.log("quicksort: ", quickSort(arr))


function insert(arr) {
  const len = arr.length;
  let j, temp;
  for (let i = 1; i < len; i++){
    j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

console.log("insert: ", insert(arr))