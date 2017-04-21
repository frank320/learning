/**
 * Created by wikeLi on 2017/1/22.
 */
//ES6模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块。
import {foo} from './module'
console.log(foo)//bar
setTimeout(() => console.log(foo), 500);//baz