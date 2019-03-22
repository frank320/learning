# fed sumup
some topics you should know  as a full-stack enginner !

## front-end

### 1. **react**
  
   - 组件生命周期  
     [周期总结 v16.3之前](https://www.jianshu.com/p/4784216b8194)  
     [周期总结 v16.3之后](https://mp.weixin.qq.com/s/Lp-pXHdg48d-TV0QsJOcwA)  
     [二次渲染问题](https://segmentfault.com/q/1010000006019858/a-1020000006020641)  
     [基本概念](https://mp.weixin.qq.com/s/Q4tVWxACmw1Rd8fQHfC-ow)
     
   - 组件间通信  
     [参考](https://www.jianshu.com/p/fb915d9c99c4)
   - react diff算法浅析  
     [参考](https://blog.csdn.net/qq_26708777/article/details/78107577)
  
   - setState方法是异步执行
   > setState方法与包含在其中的执行是一个很复杂的过程，这段程式码从React最初的版本到现在，也有无数次的修改。它的工作除了要更动this.state之外，还要负责触发重新渲染(render)，这里面要经过React核心中diff演算法，最终才能决定是否要进行重渲染，以及如何渲染。而且为了批次与效能的理由，多个setState呼叫有可能在执行过程中还需要被合并，所以它被设计以异步的或延时的来进行执行是相当合理的。
   
   - setState以同步方式执行
   > 在React库控制之外时，它就会以同步的方式来执行  
     [demo](https://www.bennadel.com/blog/2893-setstate-state-mutation-operation-may-be-synchronous-in-reactjs.htm)
   
   - Immutable Data(immutable.js,immer模块)
   > Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享

   - Web渲染  
    [渲染过程](https://github.com/laoqiren/web-performance/blob/master/%E7%BD%91%E9%A1%B5%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B.md)  
    [资源加载顺序](https://github.com/laoqiren/web-performance/blob/master/%E7%BD%91%E9%A1%B5%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/%E8%B5%84%E6%BA%90%E5%8A%A0%E8%BD%BD%E9%A1%BA%E5%BA%8F.md)  
    
   - 网站性能优化  
    [参考](https://www.zhihu.com/question/21658448)
    
   - css   
    [性能优化](https://www.zhihu.com/question/19886806)  
    [BFC](https://www.cnblogs.com/chen-cong/p/7862832.html)  
    [水平垂直居中](https://www.cnblogs.com/cme-kai/p/6192544.html)  
    [清除浮动几种方式](https://www.cnblogs.com/nxl0908/p/7245460.html)  
    
   - 判断数组的几种方式  
    [参考](https://www.cnblogs.com/heshan1992/p/6927690.html)
    
   - call apply bind区别  
     [参考](https://www.cnblogs.com/Jade-Liu18831/p/9580410.html)

   - mobx基础  
     [参考](https://www.jianshu.com/p/505d9d9fe36a)  
     [redux mobx对比](https://www.jianshu.com/p/c7e06cee4ea6)

### 2. **webpack**
   
   - webpack优化建议  
   <a href='http://www.cnblogs.com/powertoolsteam/p/Webpack.html' target='_blank'>参考</a>

### 3. **web网络**

   - http协议  
    [简介](https://www.cnblogs.com/ranyonsue/p/5984001.html)  
    [发展](./http_history.md)

   - web缓存  
   [参考](../imgs/web_cache.jpg)

   - 互联网网络传输协议  
   <a href='http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html' target='_blank'>参考</a>
   
   - 页面输入url后发生什么  
   <a href='https://www.cnblogs.com/jesse131/p/6215961.html' target="_blank">参考<a>  
## back-end

### 1. **nodejs**   
   
   - nodejs面试常见基础问题  
    [参考](https://github.com/jimuyouyou/node-interview-questions)
    
   - nodejs中的stream  
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
      
   - nodejs中处理大量数据时如何防止栈溢出
     1. 递归实现(尾调用优化)
     2. 数据分段处理
     
### 2. **database** 

   - mongo & redis   
     [mongo](http://www.runoob.com/mongodb/mongodb-tutorial.html)   
     [redis](http://www.runoob.com/redis/redis-tutorial.html)
     
    
   
      
