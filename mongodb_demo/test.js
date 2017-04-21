/**
 * Created by frank on 2016/12/1.
 * nodejs test
 */
const config = {
  name: 'frank',
  age: 26,
  sayHi: function () {
    console.log('hello')
  }
}
const util = require('util')
console.log(JSON.stringify(config))//函数不显示
var jsonstr = util.inspect(config, {depth: null})
console.log(typeof jsonstr)//json字符串 也会显示函数
console.log(JSON.parse(jsonstr))//json字符串

var duck = {
  duckSinging: function () {
    console.log('嘎嘎嘎');
  }
};

var chicken = {
  duckSinging: function () {
    console.log('嘎嘎嘎');
  }
};
var choir = []; // 合唱团
var joinChoir = function (animal) {
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal);
    console.log('恭喜加入合唱团');
    console.log('合唱团已有成员数量:' + choir.length);
  }
};
