
const PENDING = Symbol('PENDING')
const FULFILLED = Symbol('FULFILLED')
const REJECTED = Symbol('REJECTED')


class MyPromise {

  constructor(fn) {
    this.fulfilledQueue = []
    this.rejectedQueue = []
    this.status = PENDING
    this.val = null
    //执行成功队列中的回调函数
    const handleFulfilledQueue = () => {
      while (this.fulfilledQueue.length) {
        const fulfilledFn = this.fulfilledQueue.shift()
        fulfilledFn(this.val)
      }
    }
    //执行失败队列中的回调函数
    const handleRejectedQueue = () => {
      while (this.rejectedQueue.length) {
        const rejectedFn = this.rejectedQueue.shift()
        rejectedFn(this.val)
      }
    }
    // 完成状态转变(进行中-->成功)，执行成功队列中的回调函数
    const _resolve = val => {
      const fn = () => {
        if (this.status !== PENDING) {
          return
        }
        if (val instanceof MyPromise) {
          val.then(res => {
            this.status = FULFILLED
            this.val = res
            handleFulfilledQueue()
          })
        } else {
          this.status = FULFILLED
          this.val = val
          handleFulfilledQueue()
        }
      }
      //保证异步执行
      setTimeout(fn, 0)
    }
    // 完成状态转变(进行中-->失败)，执行失败队列中的回调函数
    const _reject = val => {
      const fn = () => {
        if (this.status !== PENDING) {
          return
        }
        this.status = REJECTED
        this.val = val
        handleRejectedQueue()
      }
      setTimeout(fn, 0)
    }
    //立即执行外部传入的函数
    try {
      fn(_resolve, _reject)
    } catch (e) {
      return _reject(e)
    }

    //MyPromise 使用 Timeout 实现异步，使得 MyPromise 只能添加 macrotask，实际上原生的Promise 是 microtask
  }
  then(successFn, failFn) {
    return new MyPromise((resolve, reject) => {
      //执行成功时的回调函数
      const handleSuccess = fn => {
        try {
          if (typeof fn === "function") {
            const res = fn(this.val)
            if (res instanceof MyPromise) {
              res.then(resolve, reject)
            } else {
              resolve(res)
            }
          } else {
            resolve(res)
          }
        } catch (e) {
          reject(e)
        }
      }
      //执行失败时的回调函数
      const hanldeFail = fn => {
        try {
          if (typeof fn === "function") {
            const res = fn(this.val)
            if (res instanceof MyPromise) {
              res.then(resolve, reject)
            } else {
              reject(res)
            }
          } else {
            reject(this.val)
          }
        } catch (e) {
          reject(e)
        }
      }
      switch (this.status) {
        case PENDING:
          //任务未完成 将回调函数推入相应的队列 (多次调用同一个promise 返回相同的结果)
          this.fulfilledQueue.push(() => {
            handleSuccess(successFn)
          })
          this.rejectedQueue.push(() => {
            hanldeFail(failFn)
          })
          break
        case FULFILLED:
          handleSuccess(successFn)
          break
        case REJECTED:
          hanldeFail(failFn)
          break
        default:
          console.log('Promise error status', this.status)
          break
      }
    })
  }
  catch(failFn) {
    return this.then(null, failFn)
  }
  finally(finallyFn) {
    return this.then(finallyFn, finallyFn)
  }
  static resolve(val) {
    if (val instanceof MyPromise) {
      return val
    } else {
      return new MyPromise((resolve, reject) => {
        resolve(val)
      })
    }
  }
  static reject(val) {
    return new MyPromise((resolve, reject) => {
      reject(val)
    })
  }

  static all(promiseArr) {
    return new MyPromise((resolve, reject) => {
      const len = promiseArr.lenght
      const count = 0
      const result = []
      for (let i = 0; i < len; i++) {
        promiseArr[i].then(val => {
          count++
          result.push(val)
          if (count === len) {
            resolve(result)
          }
        }, err => {
          reject(err)
        })
      }
    })
  }
  static race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      const len = promiseArr.length
      for (let i = 0; i < len; i++) {
        promiseArr[i].then(val => {
          resolve(val)
        }, err => { reject(err) })
      }
    })
  }
}


//test
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success1')
  }, 1000)
})
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success2')
  }, 2000)
})
const p3 = new MyPromise((resove, reject) => {
  setTimeout(() => {
    reject('fail1')
  }, 1000)
})

p1.then(val=>console.log(val))
p1.then(val=>console.log(val))
p1.then(val=>console.log(val))
p3.then(val=>console.log(val)).catch(err=>console.log(err))
