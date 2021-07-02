const funcs = [(p) => console.log(1, p), (p) => console.log(2, p), (p) => console.log(3, p)]

const f = funcs.reduce((a, b) => (...args) => a(b(...args)))

f(666)

// console.log(f)