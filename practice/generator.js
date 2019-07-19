/**
 * Created by wikeLi on 2016/12/21.
 */
function* gen(x) {
  var y = yield x + 2;
  console.log(y)
  var z = yield x + 3;
  return z
}
//var g = gen(8)
//console.log(g.next());
//console.log(g.next(6));
//console.log(g.next());


async function f() {
  var f1 = await Promise.resolve('f1')//f1接收异步返回的结果
  var f2 = await Promise.resolve('f2')
  console.log(f1)//f1
  console.log(f2)//f2
  return 'over'
}
//f().then(r=> {
//  console.log(r)//over
//})

function* test1() {
  const f1 = yield Promise.resolve('f1')
  console.log(f1)//undefined
  return f1
}
//const test = test1()
//console.log(test.next().value)
//console.log(test.next().value)


//遍历器接口 Symbol.iterator
//const fs = require('fs')
//const path = require('path')
//const files = fs.readdirSync(path.join(__dirname, './upload'))
//let result = null
//let flag = true
//for (let _iterator = files[Symbol.iterator](); flag === !(result = _iterator.next()).done; flag = true) {
//  console.log(result.value)
//}


function getSomething() {
  var r = 0
  setTimeout(function () {
    r = 2
    it.next(2)//yield句本身没有返回值，
    // 或者说总是返回undefined。next方法可以带一个参数，
    // 该参数就会被当作上一个yield语句的返回值。
  }, 10)
}
function* compute() {
  console.log('执行了没')
  var x = yield getSomething() //x=2
  console.log(x * 2)

}
// var it = compute()//获取一个生成器对象
// for(let i of it){//遍历生成器对象
//   console.log(i)
// }
// var r = it.next()
// console.log(it.next())
// console.log(it.next())
//console.log(it.next())

// 异步任务的封装
// const Thunk = require("thunkify")
// ES6版本
const Thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    }
  };
};

function f(a, cb) {
  cb(a);
}
const ft = Thunk(f);

ft(1)(console.log) // 1





//自动执行器 thunk
function run(fn) {
  var gen = fn();

  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

// function* g() {
//   // ...
// }

// run(g);



//自动执行器 co
function run(gen){
  var g = gen();
  function next(data){
    var result = g.next(data);
    if (result.done) return result.value;
    result.value.then(function(data){
      next(data);
    });
  }
  next();
}
run(gen);

//部署iterator接口
function* iterEntries(obj) {
  // let keys = Reflect.ownKeys(obj);
  let keys = Object.keys(obj);
  for (let i=0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}

let myObj = { foo: 3, bar: 7 };

for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value);
}


// async function* gen() {
//   yield 'hello';
// }
// const genObj = gen();
// genObj.next().then(x => console.log(x));