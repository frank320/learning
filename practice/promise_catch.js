const promise = new Promise(function (resolve, reject) {
  throw new Error('test');
});
// 错误不会被多次捕获  !: Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止
promise
  .then(null, err => console.log("then second param", err.message))//指定错误函数后 后面catch不会执行
  .then(null)//
  .catch(function (error) {
    console.log("catch", error.message);
  });



//如果 Promise 状态已经变成resolved，再抛出错误是无效的。

const promise = new Promise(function (resolve, reject) {
  resolve('ok');
  throw new Error('test');
});
promise
  .then(function (value) { console.log(value) })
  .catch(function (error) { console.log(error) });
// ok


//
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};