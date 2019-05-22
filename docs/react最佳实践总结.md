## react最佳实践总结

+ 选择性渲染 使用三目运算符或逻辑表达式来判断 eg: isNeedRender && <Com />
+ render函数尽量减少js逻辑，组件功能尽量单一
+ 根元素使用 Fragment(16版本 简写<></>)代替div
+ 不使用...this.props 只传递需要的属性
+ state只存储需要改变的值
+ 定义propsType  PropTypes.shape({})可以定义包含嵌套属性的对象 PropTypes.oneOfType({})多选一