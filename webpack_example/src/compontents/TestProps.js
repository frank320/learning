import React, { Component } from 'react'

class Child extends Component {
  constructor (props) {
    super()
    this.state = {
      text: props.text,
      foo: '666',
    }
  }

  componentWillReceiveProps (nextProps) {
    const text = nextProps.text
    this.setState({
      text
    })
    //console.log(this.state)
  }

  render () {
    console.log(111)
    return <p>{this.state.text}</p>
  }
}

class Parent extends Component {
  state = {
    name: 'xxx'
  }

  render () {
    return (
      <div>
        <Child text={this.state.name}/>
        <button onClick={() => this.setState({name: 'zzz'})}>change</button>
      </div>
    )
  }
}

export default Parent