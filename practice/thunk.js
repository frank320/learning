//ES6版本
const Thunk = function (fn) {
    return function (...args) {
        return function (callback) {
            // console.log(this === global) true
            return fn.call(this, ...args, callback);
        }
    };
};

function f(a, cb) {
    cb(a);
}
const ft = Thunk(f);

ft(1)(console.log) // 1