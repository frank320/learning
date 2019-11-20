const arr = [3, 7, 6, 8, 4, 2, 1, 5]

function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

function buble() {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1)
            }
        }
    }
}
// buble()
// console.log(arr)

function select() {
    const len = arr.length;
    let indexMin;
    for (let i = 0; i < len - 1; i++) {
        indexMin = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j
            }
        }
        if (indexMin !== i) {
            swap(indexMin, i)
        }
    }
}
// select()
// console.log(arr)

function insert() {
    const len = arr.length;
    let j;
    let temp;
    for (let i = 1; i < len; i++) {
        j = i;
        temp = arr[i]
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
}

// insert()
// console.log(arr)

//归并排序
function merge(left, right) {
    const result = [];
    let il = 0;
    let ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++])
        } else {
            result.push(right[ir++])
        }
    }
    while (il < left.length) {
        result.push(left[il++])
    }
    while (ir < right.length) {
        result.push(right[ir++])
    }
    return result;
}

function mergeSort(arr) {
    const len = arr.length;
    if (len === 1) {
        return arr;
    }
    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, len)
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(arr))