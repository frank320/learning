import React, {Component} from 'react';

var Button = React.createClass({
    // 在孙子里面校验祖宗里面的属性
    contextTypes: {
        color: React.PropTypes.string
    },
    render: function() {
        return (
            <div>
                <h1>{this.context.age}</h1>
                <button style={{background: this.context.color}}>
                    {this.props.children}
                </button>
            </div>
        );
    }
});

var Message = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.text}
                <Button>
                    Delete
                </Button>
            </div>
        );
    }
});

var MessageList = React.createClass({
    // 通过这个方法去传递属性
      getChildContext: function() {
        return {
          color: "purple",
          age:12
        };
    },
    // 传递给子孙属性的类型校验
    childContextTypes: {
        color: React.PropTypes.string,
        age: React.PropTypes.number
    },

    render: function() {
        var color = "purple";
        var children = this.props.messages.map(function(message) {
            return <Message text={message.text} />;
        });
        return <div>{children}</div>;
    }
});


export default MessageList;
