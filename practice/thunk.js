//ES6版本
const Thunk = function (fn) {
    return function (...args) {
        return function (callback) {
            // console.log(this === global) true
            return fn.call(this, ...args, callback);
        }
    };
};

const _Thunk = fn => (...args) => cb => fn(...args, cb);

function f(a, cb) {
    cb(a);
}
const ft = Thunk(f);

ft(1)(console.log) // 1



var foo = 10;
console.log(foo);
foo();
function foo() {
  console.log("foo");
}