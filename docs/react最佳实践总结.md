## react最佳实践总结

+ 选择性渲染 使用三目运算符或逻辑表达式来判断 eg: isNeedRender && <Com />
+ render函数尽量减少js逻辑，组件功能尽量单一
+ 根元素使用 Fragment(16版本 简写<></>)代替div
+ 不使用...this.props 只传递需要的属性
+ state只存储需要改变的值
+ 定义propsType  PropTypes.shape({})可以定义包含嵌套属性的对象 PropTypes.oneOfType({})多选一

+ css方案  
  1. 行内样式 radium库
  2. css module(:global取消局部作用域 & 原子级css & composes & react css库)
  3. styled-components库

+ 渲染性能 (PureComponent)
  1. react-addons-perf / react-perf-tool
  2. why-did-you-update
  3. 渲染方法中添加函数
  4. props常量
  5. 不可变数据

+ 测试
  1. jest + testUtils
  2. mocha + testUtils
  3. jest + enzyme
  4. react-test-renderer 快照测试