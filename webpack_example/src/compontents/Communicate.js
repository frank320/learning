import React, { Component } from 'react'
import emitter from './ev'
//纯组件(无状态组件)定义
const PureCom = (props, context) => {
  return (<p style={{color: context.color}}>我是一个纯组件{props.foo}</p>)
}
// 子组件声明自己需要使用 context
PureCom.contextTypes = {
  color: React.PropTypes.string,
}


class Sib extends Component {
  state = {
    color: 'yellow'
  }
  componentDidMount () {
    this.eventEmitter = emitter.addListener('callMe', (msg) => {
      console.log(msg)
      this.setState({
        color: 'red'
      })
    })
  }

  // 组件销毁前移除事件监听
  componentWillUnmount () {
    emitter.removeListener(this.eventEmitter)
  }
  render () {
    return (<div style={{color: this.state.color}}>我是Sib组件</div>)
  }
}

//孙组件
class Sub extends Component {

  // 子组件声明自己需要使用 context
  static contextTypes = {
    color: React.PropTypes.string,
  }

  componentWillReceiveProps (nextProps, nextState) {
    console.log('孙组件componentWillReceiveProps')
  }

  shouldComponentUpdate () {
    //console.log(this.context) //this.context未发生改变
    console.log('孙组件shouldComponentUpdate')
    return true
  }

  // 组件将要被重新渲染
  componentWillUpdate () {
    console.log('孙组件conpontentWillUpdate')
  }

  // 组件已经被重新渲染
  componentDidUpdate () {
    console.log('孙组件conpontentDidUpdate')
  }

  cb = () => {
    emitter.emit('callMe', 'Hello')
  }

  render () {
    console.log('孙组件渲染')
    //console.log(this.context) //this.context在渲染时发生改变
    const style = {color: this.context.color}
    return (<div style={style}>我是孙组件
      <button onClick={this.cb}>点我和Sib组件通信</button>
    </div>)
  }
}

//子组件
class Child extends Component {
  constructor (props) {
    super()
    this.state = {
      text: props.text,
      foo: '666',
    }
    this.cb = (msg) => {
      return () => props.cb(msg)
    }
  }

  needUpdate = true //定义实例属性

  componentWillReceiveProps (nextProps, nextState) {
    //在重新渲染之前 改变子组件的state 但不会引起第二次渲染
    const text = nextProps.text
    //onsole.log(nextProps)
    this.needUpdate = !(text === this.state.text) //判断是否需要重新渲染组件
    //console.log(this.needUpdate)
    this.setState({
      text
    })
    //console.log(this.state)
    console.log('子组件componentWillReceiveProps')
  }

  shouldComponentUpdate () {
    //console.log(this.state)
    console.log('子组件shouldComponentUpdate')
    return this.needUpdate //判断是否需要重新渲染组件
  }

  // 组件将要被重新渲染
  componentWillUpdate () {
    console.log('子组件conpontentWillUpdate')
  }

  // 组件已经被重新渲染
  componentDidUpdate () {
    console.log('子组件conpontentDidUpdate')
  }

  render () {
    console.log('子组件渲染')
    return (
      <div>
        <p>{this.state.text}</p>
        我是子组件<button onClick={this.cb('你是傻冒')}>点击我和父组件通信</button>
        <Sub/>
        <PureCom foo={this.state.foo}/>
      </div>
    )
  }
}

class Parent extends Component {

  // 父组件声明自己支持 context
  static childContextTypes = {
    color: React.PropTypes.string
  }

  //父组件提供一个函数，用来返回相应的 context 对象
  getChildContext () {
    return {
      color: this.state.color
    }
  }

  state = {
    name: 'xxx',
    foo: 'pureCom',
    color: 'red'
  }
  cb = (msg) => console.log(`子组件跟我说${msg}`)

  componentWillReceiveProps (nextProps, nextState) {//该周期函数不会执行
    console.log('父组件componentWillReceiveProps')
  }

  // 组件将要被重新渲染
  componentWillUpdate () {
    console.log('父组件conpontentWillUpdate')
  }

  // 组件已经被重新渲染
  componentDidUpdate () {
    console.log('父组件conpontentDidUpdate')
  }

  render () {
    console.log('父组件渲染')
    return (
      <div>
        {/*兄弟组件通信*/}
        <Child text={this.state.name} cb={this.cb}/>
        <Sib/>
        <button onClick={() => this.setState({name: 'zzz', foo: 'pure', color: 'blue'})}>chang</button>
      </div>
    )
  }
}

export default Parent