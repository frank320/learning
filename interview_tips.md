# interview_preparation
some topics you should understand before seeking for a job as a full-stack enginner !

## front-end

### 1. **react**
  
   - 组件生命周期
    [参考](https://www.jianshu.com/p/4784216b8194)
    [参考](https://segmentfault.com/q/1010000006019858/a-1020000006020641)
     
   - 组件间通信
     [参考](https://www.jianshu.com/p/fb915d9c99c4)
   - react diff算法浅析
     [参考](https://blog.csdn.net/qq_26708777/article/details/78107577)
   - 调用setState方法发生了什么
   > 在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程(Reconciliation)。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。
   
   - setState方法是异步执行
   > setState方法与包含在其中的执行是一个很复杂的过程，这段程式码从React最初的版本到现在，也有无数次的修改。它的工作除了要更动this.state之外，还要负责触发重新渲染(render)，这里面要经过React核心中diff演算法，最终才能决定是否要进行重渲染，以及如何渲染。而且为了批次与效能的理由，多个setState呼叫有可能在执行过程中还需要被合并，所以它被设计以异步的或延时的来进行执行是相当合理的。
   
   - setState以同步方式执行
   > 在React库控制之外时，它就会以同步的方式来执行  
     [参考](https://www.bennadel.com/blog/2893-setstate-state-mutation-operation-may-be-synchronous-in-reactjs.htm)
   
   - 什么是 Immutable Data(immutable.js)
   > Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享

   - Web性能优化与实践整理  
    [参考](https://cnodejs.org/topic/5a311f729807389a1809f37a)
    
   - 网站优化  
    [参考](https://www.zhihu.com/question/21658448)
    
   - css优化   
    [参考](https://www.zhihu.com/question/19886806) <br/>
    [BFC](https://www.cnblogs.com/chen-cong/p/7862832.html) <br/>
    [水平垂直](https://www.cnblogs.com/cme-kai/p/6192544.html) <br/>
    
   - 判断数组的几种方式
    [参考](https://www.cnblogs.com/heshan1992/p/6927690.html)
    
    - call apply bind区别
     [参考](https://www.cnblogs.com/Jade-Liu18831/p/9580410.html)

### 2. **webpack**
   
   - webpack优化建议
   <a href='http://www.cnblogs.com/powertoolsteam/p/Webpack.html' target='_blank'>参考</a>
     
## back-end

### 1. **nodejs**   
   
   - nodejs面试常见基础问题
    [参考](https://github.com/jimuyouyou/node-interview-questions)
    
   - nodejs中启动一个服务(http.creatServer())底层实现
   
   - nodejs中的stream
     [参考](http://www.cnblogs.com/dolphinX/p/6279805.html)
     [参考](http://blog.csdn.net/weixin_39573030/article/details/79345305)
    
   - nodejs集群部署、负载均衡、监控预警
     1. 单机集群 pm2模块负载均衡
     2. 多机集群 
     > http-proxy/nginx反向代理
     [参考](http://blog.csdn.net/future_challenger/article/details/47087123)  
     
     > nginx配置静态资源服务器
     [参考](http://blog.csdn.net/zzq900503/article/details/72821081)
     
     > docker部署
     [参考](http://blog.csdn.net/qq_36892341/article/details/73918672)
     [参考](https://www.jianshu.com/p/ab76ba86eafc)

     3. 监控预警
     > Easy-Monitor模块(函数性能监控)
     [参考](https://cnodejs.org/topic/58d0dd8b17f61387400b7de5)
     
     > alinode平台
     [参考](https://help.aliyun.com/document_detail/60338.html?spm=a2c4g.11186623.6.545.VJaKGB)  
      
   - nodejs中大数据处理时如何防止栈溢出
     1. 递归实现
     
### 2. **mongo** 

   - 使用时遇到的坑及解决办法  
   
     [参考](http://blog.csdn.net/jiesa/article/details/53069089)
     [参考](http://blog.csdn.net/zxmsdyz/article/details/50939314)
     
### 3. **linux** 
  
   - linux服务器硬件配置信息查看  
     
     [参考](https://github.com/frank320/learning/blob/master/linux_info_check.md)     
   
      
