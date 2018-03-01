import React, { Component } from 'react'

class Child extends Component {
  constructor (props) {
    super()
    this.state = {
      text: props.text,
      foo: '666',
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
    return this.needUpdate
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
    return <p>{this.state.text}</p>
  }
}

class Parent extends Component {
  state = {
    name: 'xxx'
  }

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
        <Child text={this.state.name}/>
        <Child text={this.state.name}/>
        <button onClick={() => this.setState({name: 'zzz'})}>chang texte</button>
      </div>
    )
  }
}

export default Parent