// react中的dom监听事件
import React, { Component } from 'react';

export default class ListenEvent extends Component {
    constructor(props) {
        super(props);
        //this.state={ userInput: '' };
    }

    // 演示错误添加监听事件
    componentWillMount() {
        //window.addEventListener('resize', this.handleResize);
    }


    componentDidMount() {
        // 不管是用refs属性获取dom元素，还是给dom元素添加监听事件，还是请求服务器接口数据，都要在虚拟dom里面的节点
        // 已经渲染到真实dom节点之后进行操作

        // 在已经插入到真实的dom节点中，注册窗体改变大小的事件监听
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        // 在组件将要被卸载的时候移除监听事件
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize=(e)=>{
        console.log(window.innerWidth);
    }

    render() {
        return (
            <div>
                <div>
                   dom事件监听
                </div>
            </div>
        );
    }
}

