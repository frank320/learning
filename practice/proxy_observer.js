//使用 Proxy 实现观察者模式
//观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行。


const queuedObservers = new Set();
const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  console.log(result)
  return result;
}
//上面代码中，先定义了一个Set集合，所有观察者函数都放进这个集合。然后，observable函数返回原始对象的代理，
//拦截赋值操作。拦截函数set之中，会自动执行所有观察者。


const person = observable({
  name: '张三',
  age: 20
});
function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';


// proxy
let numbers = [];

const _numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // 拦截写入操作
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});
console.log(numbers === _numbers) //false
_numbers.push(1); // 添加成功
_numbers.push(2); // 添加成功


class Test{
  get a() { //没有参数
    return "666"
  }
  set b(v) {
    console.log(v)
  }
}
const test = new Test()

console.log(test.a)
test.b = 10;
test.c = 100;
console.log(test.b)
console.log(Object.getOwnPropertyDescriptors(test))
//https://blog.csdn.net/flitrue/article/details/103565803
Object.freeze(test_proto_)
test.c = 1
console.log(test.c)//100