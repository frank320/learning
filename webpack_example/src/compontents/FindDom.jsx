//react中操作dom元素
import React, { Component } from 'react';

export default class FindDom extends Component {

    // 初始化state 建议卸载constructor函数里面
    state={
        userInput: '请输入想要输入的内容...'
    }

    constructor(props) {
        super(props);
        //this.state={ userInput: '' };
    }

    handleChange(e) {
        console.log(this.refs.theInput1.constructor);
        console.log(this.refs.theInput1.value);
        this.setState({ userInput: e.target.value });
    }

    clearAndFocusInput() {
        // 第一个参数是你要从新赋值的state，第二个参数一个回调函数
        this.setState({ userInput: '' }, () => {
            this.refs.theInput1.focus();
        });
    }

    render() {
        return (
            <div>
                <div onClick={this.clearAndFocusInput.bind(this)}>
                    Click to Focus and Reset
                </div>
                <input
                    ref="theInput1"
                    value={this.state.userInput}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}
