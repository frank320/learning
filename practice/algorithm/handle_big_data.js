'use strict'

//找出0-1000000000中1的个数
function counts(min, max) {
  return new Promise(resolve => {
    let result = 0;
    for (let i = min; i < max; i++) {
      result += count(i);
    }
    resolve(result);
  });
}

function count(num) {
  const len0 = (num + '').length;
  const len1 = (num + '').replace(/1/g, '').length;
  return len0 - len1;
}


async function main(end) {
  const start = 1;
  const step = 20000;
  async function reduce(sum, next) {
    let num = next;
    next = next + step;
    if (next > end) return sum + await counts(num, end + 1);
    return await reduce(sum + await counts(num, next), next);
  }
  const time = Date.now();
  const result = await reduce(0, start);
  console.log(`(${start}, ${end}), step=${step}，耗时：${(Date.now() - time) / 1000}，结果：${result}`);
}

//直接for循环
const MAX = 10000000000
// let sum = 0;
// for (let num = 0; num < MAX; num++) {
//   const len0 = (num + '').length;
//   const len1 = (num + '').replace(/1/g, '').length;
//   sum += (len0 - len1);
// }
// console.log(sum)

main(MAX)
