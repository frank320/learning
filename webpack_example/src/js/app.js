import React from 'react'
//渲染dom的组件
import ReactDOM from 'react-dom'
//import Hello from '../compontents/Hello.js'
//import Life from '../compontents/Life.js'
//import ClickEvent from '../compontents/ClickEvent.js'
//import FindDom from '../compontents/FindDom.jsx'
//import ListenEvent from '../compontents/ListenEvent.jsx'
//import ControlForm from '../compontents/ControlForm.jsx'
// import Combination from '../compontents/Combination.jsx'
//import PropsCheck from '../compontents/PropsCheck.js'
//import Context1 from '../compontents/Context.js'
//import ReactRouter from '../compontents/ReactRouter'
import Parent from '../compontents/Communicate'

// 属性扩散
var obj = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd'
}

//objext.assign({},obj)
//var  obj1={...obj}
//var obj1={
//    a:"a",
//    b:"b",
//    c:"c",
//    d:"d"
//}

ReactDOM.render(
  <div style={{margin: '0 auto', width: '600px', textAlign: 'center'}}>
    <Parent/>
  </div>,
  document.getElementById('app')
)
