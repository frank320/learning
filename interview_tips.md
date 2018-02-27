# interview_preparation
some topics you should understand before seeking for a job as a full-stack enginner !

## front-end

### 1. **react**
  
   - 组件生命周期
    [参考](https://www.jianshu.com/p/4784216b8194?_blank)
    [参考](https://segmentfault.com/q/1010000006019858/a-1020000006020641)
     
   - 组件间通信
     [参考](https://www.jianshu.com/p/fb915d9c99c4?_blank)
   
   - 调用setState方法发生了什么
   > 在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程(Reconciliation)。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。
   
   - setState方法是异步执行
   > setState方法与包含在其中的执行是一个很复杂的过程，这段程式码从React最初的版本到现在，也有无数次的修改。它的工作除了要更动this.state之外，还要负责触发重新渲染(render)，这里面要经过React核心中diff演算法，最终才能决定是否要进行重渲染，以及如何渲染。而且为了批次与效能的理由，多个setState呼叫有可能在执行过程中还需要被合并，所以它被设计以异步的或延时的来进行执行是相当合理的。
   
   - setState以同步方式执行
   > 在React库控制之外时，它就会以同步的方式来执行  
     [参考](https://www.bennadel.com/blog/2893-setstate-state-mutation-operation-may-be-synchronous-in-reactjs.htm?_blank)
   
   - 什么是 Immutable Data(immutable.js)
   > Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享

### 2. **webpack**
   
   - webpack优化建议
   > <a href='http://www.cnblogs.com/powertoolsteam/p/Webpack.html' target='_blank'>参考</a>
     
## back-end

### 1. **nodejs**   
   
   - nodejs中启动一个服务(http.creatServer())底层实现
   
   - nodejs中的stream
     [参考](http://www.cnblogs.com/dolphinX/p/6279805.html?_blank)
    
   - nodejs集群部署和监控预警
     1. 单机集群 pm2模块负载均衡
     2. 多机集群 http-proxy模块/nginx负载均衡
     [参考](http://blog.csdn.net/future_challenger/article/details/47087123?_blank)
     3. 监控预警
       
   - nodejs中大数据处理时如何防止栈溢出
     1. 递归实现
     
### 2. **mongo** 

   - 使用时遇到的坑及解决办法
     [参考](http://blog.csdn.net/jiesa/article/details/53069089?_blank)
     [参考](http://blog.csdn.net/zxmsdyz/article/details/50939314?_blank)
   
      