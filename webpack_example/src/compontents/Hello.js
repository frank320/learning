
import './Hello.css';
import './Hello.scss';

import React, {Component} from 'react';

// 直接在js中定义样式，内嵌样式
let style = {
    backgroundColor: 'blue'
}

// 第一个参数是一个数组，他可以加载一些文件，但是不执行里面的代码，这个类似angular.moudle
// 这种奇怪的语法可以分离代码块,在普通的前端项目中可以使用，但是在react这种单页面应用中是没办法使用
require.ensure([], function(require) {
    var a = require("./World.js");
    var b="b"
},'test');


export default class Hello extends Component {

    render() {
        console.log("Hello组件里面的log");
        return (
            <div>
                {
                    //注释
                }
                {/*以后用这种注释方法*/}
                <h1 style={style}>
                   祝中国代表团勇夺金牌!
                </h1>
                <br/>
                <img/>
            </div>
        )
    }
}




//export function a(radius) {
//    return Math.PI * radius * radius;
//}
//
//export function b(radius) {
//    return 2 * Math.PI * radius;
//}
//
//export default function c(radius) {
//    return 2 * Math.PI * radius;
//}
//
//
//
//
//
//import fdfdfdf from './circle';
