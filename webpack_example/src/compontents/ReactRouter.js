import React, {Component} from 'react';
import { Router, Route,IndexRedirect, Link ,IndexRoute,Redirect,browserHistory,hashHistory,createMemoryHistory} from 'react-router'
import $ from 'jquery'
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <br/>
          <li><Link to="/inbox/messages/5">Message-原始路由</Link></li>
          <li><Link to="/messages/3">Message-绝对路由</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
class About extends Component {
  render() {
    return <h3>About</h3>
  }
}

class Inbox extends Component {

  componentDidMount() {
    $('h2').css('color','red')
    //browserHistory.push('/about')
    //hashHistory.push('/about')
    console.log(this.props.location.pathname);//'/inbox'获取当前的url路径
    console.log(this.props.location.hash);//''
    console.log(location.hash);//'#/about' 地址栏上的锚点值
    //setTimeout(function(){
    //      hashHistory.push('/about')
    //  },3000);
    setTimeout(function(){
          hashHistory.goBack()
      },5000);

  }

  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {/*this.props.children || "Welcome to your Inbox"*/}
        {this.props.children} {/*子组件渲染的位置*/}
      </div>
    )
  }
}

class Dashboard extends Component {
  render() {
    return <div>Welcome to the app!</div>
  }
}


class Message extends Component {
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
}

const NoMatch = React.createClass({
  render() {
    return <h3>没有匹配的路径</h3>
  }
})


export default class ReactRouter extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          {/*利用indexroute上来就给一个初始化的组件，他赋值给父组件的this.props.children*/}
          <IndexRoute component={Dashboard}/>
          <IndexRedirect to="about"/>
          <Route path="about" component={About}/>
          <Route path="inbox" component={Inbox}
                 onLeave={()=>console.log('离开了inbox路由')}
                 onEnter={()=>console.log('进入了inbox路由')}>
            {/*<Route path="messages/:id" component={Message} />*/}
            {<Route path="messages/:id" component={Message}/>}
            {/* 跳转 /inbox/messages/:id 到 /messages/:id */}
            <Redirect from="messages/:id" to="/messages/:id"/>
          </Route>
        </Route>
      </Router>
    )
  }
}

