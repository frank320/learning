const reg = /^(?!.*\.global).*\.css$/;
// const reg = /\.global\.css$/;
console.log(reg.test("a.css"))
console.log(reg.test("global.css"))
console.log(reg.test("b.global.css"))