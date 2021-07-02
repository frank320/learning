const PENDING = Symbol("PENDING")
const FULFILLED = Symbol("FULFILLED")
const REJECTED = Symbol("REJECTED")

class MyPromise {
  constructor(fn) {
    this._status = PENDING
    this._value = null
    this.fulfillQueue = []
    this.rejectedQueue = []
    const handleFulfillQueue = () => {
      while (this.fulfillQueue.length) {
        const fn = this.fulfillQueue.shift()
        fn()
      }
    }
    const handleRejectedQueue = () => {
      while (this.rejectedQueue.length) {
        const fn = this.rejectedQueue.shift()
        fn()
      }
    }

    const _resolve = val => {
      const fn = () => {
        if (this._status !== PENDING) {
          return
        }
        if (val instanceof MyPromise) {
          val.then(res => {
            this._status = FULFILLED
            this._value = res
            handleFulfillQueue()
          }, err => {
            this._status = REJECTED
            this._value = err
            handleRejectedQueue()
          })
        } else {
          this._status = FULFILLED
          this._value = val
          handleFulfillQueue()
        }
      }
      setTimeout(fn)
    }

    const _reject = val => {
      const fn = () => {
        if (this._status !== PENDING) {
          return
        }
        this._status = REJECTED
        this._value = val
        handleRejectedQueue()
      }
      //模拟异步
      setTimeout(fn)
    }

    try {
      fn(_resolve, _reject)
    } catch (e) {
      return _reject(e)
    }
  }

  then(successFn, failFn) {
    return new MyPromise((resolve, reject) => {
      const handleSuccess = fn => {
        try {
          if (typeof fn === "function") {
            const res = fn(this._value)
            if (res instanceof MyPromise) {
              res.then(resolve, reject)
            } else {
              resolve(res)
            }
          } else {
            resolve(this._value)
          }

        } catch (e) {
          reject(e)
        }
      }
      const handleFail = fn => {
        try {
          if (typeof fn === "function") {
            const res = fn(this._value)
            if (res instanceof MyPromise) {
              res.then(resolve, reject)
            } else {
              resolve(res)
            }
          } else {
            reject(this._value)
          }

        } catch (e) {
          reject(e)
        }
      }
      switch (this._status) {
        case PENDING:
          this.fulfillQueue.push(() => { handleSuccess(successFn) })
          this.rejectedQueue.push(() => { handleFail(failFn) })
          break;
        case FULFILLED:
          handleSuccess(successFn)
          break;
        case REJECTED:
          handleFail(failFn)
          break
      }
    })
  }
}


const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(666)
  }, 1000)
})

p.then(r => { console.log(r) })
p.then(r => { console.log(r) })





//

class Test {
  constructor() {
    return { a: 1 }
  }
}

const test = new Test()
console.log(test.a)//1