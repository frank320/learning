//JavaScript如何让(a ==1 && a== 2 && a==3)的值为true。

//1. 重写Object的toString或者valueOf
const a = {
  i: 1,
  toString: function () {
    return a.i++;
  }
}
if(a == 1 && a == 2 && a == 3) {
  console.log('Hello World!');
}
// Object类型与Number类型的==比较，Object类型会转换为数字类型后再和数字比较。

// A为Object类型，B为Number类型，A==B实际是

// ToPrimitive(A) == B
// ToPrimitive(A)会尝试调用A.toString()和A.valueOf()方法来获取A对应的数字基本类型。

//2 定义"a"属性，并重写它的getter方法
const value = function* () {
  let i = 0;
  while(true) yield ++i;
}();

Object.defineProperty(this, 'a', {
  get() {
    return value.next().value;
  }
});

if (a === 1 && a === 2 && a === 3) {
  console.log('yo!');
}
// Object.defineProperty()定义"a"为this的属性，并定义了a属性的getter方法。这样在条件语句里使用的a，实际为this的属性a。

// 这里使用了ES6新增的特性：Generator函数来产生value。


//3 
// var aﾠ = 1;
// var a = 2;
// var  a = 3;
// /****
// var a = 1;
// var a\u200c = 2;
// var a\u200d = 3;
// console.log(a == 1 && a\u200c == 2 && a\u200d == 3);
// ****/
// if(aﾠ==1 && a== 2 &&ﾠa==3) {
//     console.log("Why hello there!")
// }

//4 数组toString隐含调用join()方法
a = [1,2,3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3);