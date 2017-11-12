/**
 * Created by wikeLi on 2017/1/22.
 */
//ES6模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块。
//import {foo} from './module'
//console.log(foo)//bar
//setTimeout(() => console.log(foo), 500);//baz

//import {readFile} from 'fs' //正确

//readFile('./index.js', function (err,data) {
//  console.log(data.toString())
//})

import {foo,bar} from './export'
console.log(bar)
foo()

//export {}  //让该脚本文件成为es6模块 (严格模式)
//a = 1 //报错

//如果不指定绝对路径，Node 加载 ES6 模块会依次寻找以下脚本，与require()的规则一致。
//加载顺序


//require('./test_module')

//import './test_module'

//require('test_module')
//import 'test_module'
//exports.a = 1
//console.log(this)
//console.log(this === module.exports)//true

//import './foo';
// 依次寻找
//   ./foo/package.json
//   ./foo.js
//   ./foo/index.js
//
//import 'baz';
// 依次寻找
//   ./node_modules/baz/package.json
//   ./node_modules/baz.js
//   ./node_modules/baz/index.js
// 寻找上一级目录
//   ../node_modules/baz/package.json
//   ../node_modules/baz.js
//   ../node_modules/baz/index.js
// 再上一级目录
//ES6 模块之中，顶层的this指向undefined；，这是两者的一个重大差异。CommonJS 模块的顶层this指向当前模块