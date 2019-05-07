# some docs for learning IT

some topics you should know  as a full-stack enginner !

## front-end

### 1. **html js css && react**
  
   - 组件生命周期  
     [周期总结 v16.3之前](https://www.jianshu.com/p/4784216b8194)  
     [周期总结 v16.3之后](https://mp.weixin.qq.com/s/Lp-pXHdg48d-TV0QsJOcwA)  
     [基本概念](https://mp.weixin.qq.com/s/Q4tVWxACmw1Rd8fQHfC-ow)
     
   - 组件间通信  
     [参考](https://www.jianshu.com/p/fb915d9c99c4)
   - react diff算法浅析  
     [参考](https://zhuanlan.zhihu.com/p/20346379)
  
   - setState方法是异步执行
   > setState方法与包含在其中的执行是一个很复杂的过程，这段程式码从React最初的版本到现在，也有无数次的修改。它的工作除了要更动this.state之外，还要负责触发重新渲染(render)，这里面要经过React核心中diff演算法，最终才能决定是否要进行重渲染，以及如何渲染。而且为了批次与效能的理由，多个setState呼叫有可能在执行过程中还需要被合并，所以它被设计以异步的或延时的来进行执行是相当合理的。
   
   - setState以同步方式执行
   > 在React库控制之外时，它就会以同步的方式来执行  
     [demo](https://www.bennadel.com/blog/2893-setstate-state-mutation-operation-may-be-synchronous-in-reactjs.htm)
   
   - react源码分析    
     [小结](https://www.jianshu.com/p/8af5be333b5f)  
     [全面分析](https://juejin.im/post/5a84682ef265da4e83266cc4)  
     [setState源码分析](https://juejin.im/post/5aa25967518825558251f61f#heading-0)

   - react性能优化  
     [参考](https://yq.aliyun.com/articles/183972?spm=a2c4e.11153940.blogcont72330.26.681a5e87R4iVcF)

   - Immutable Data(immutable.js,immer模块)  
     [immer简介及源码解析](https://segmentfault.com/a/1190000013088373)  
     [immer实战讲解](https://blog.csdn.net/qq_30552845/article/details/84989438)
   > Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享

   - Web渲染  
    [渲染过程](https://github.com/laoqiren/web-performance/blob/master/%E7%BD%91%E9%A1%B5%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B.md)  
    [资源加载顺序](https://github.com/laoqiren/web-performance/blob/master/%E7%BD%91%E9%A1%B5%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/%E8%B5%84%E6%BA%90%E5%8A%A0%E8%BD%BD%E9%A1%BA%E5%BA%8F.md)  
    
   - 网站性能优化  
    [参考](https://www.zhihu.com/question/21658448)  
    [页面性能优化](https://mp.weixin.qq.com/s/DapiwE-AhML-Mm4r0b_sWg)
    
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

   - js  
     [js引擎执行过程](http://www.cnblogs.com/chengxs/p/10240163.html)
     + 函数提升优先级比变量提升要高，且不会被变量声明覆盖，但是会被变量赋值覆盖;在编译阶段，后面的变量声明遇到前面有冲突的变量声明或者函数声明，都会忽略;
   - ES6

     1. class
        * 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行
        * 类的内部所有定义的方法(原型方法和静态方法)，都是不可枚举的（non-enumerable）
        * \_\_proto\_\_ 并不是语言本身的特性，建议使用 Object.getPrototypeOf方法代替
        * 类不存在变量提升（hoist），这一点与 ES5 完全不同
        * class实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层
          ```
            class Foo {
              _a = 1;//实例属性
              constructor() {
                this.b = 2;//实例属性
              }
              c = ()=>3;//实例属性
              d() {//原型属性(方法)
                //...
              }
            }
          ```
        * 子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例
        * 继承
          ```
            class A {
            }

            class B extends A {
            }

            B.__proto__ === A // true
            B.prototype.__proto__ === A.prototype // true
            
          ```
        * ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承，而
          ES5 是先新建子类的实例对象this，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数  
     2. module
         * import命令具有提升效果，会提升到整个模块的头部，首先执行
         * 导出模块为对象时，其属性可以改写，并且其他模块也能读到改写后的值
         * 多次重复执行同一句import语句，那么只会执行一次，而不会执行多次
         * export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例
         * CommonJS 模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值


### 2. **webpack**
   
   - webpack优化建议  
   [打包性能优化](http://www.cnblogs.com/powertoolsteam/p/Webpack.html)  
   [缩小js包体积](https://blog.csdn.net/code_for_free/article/details/51583737)  
   [React Code-Splitting](https://www.jianshu.com/p/5bb70b2c52c3)


### 3. **web网络**

   - http协议  
    [简介](https://www.cnblogs.com/ranyonsue/p/5984001.html)  
    [发展](./http_history.md)  
    [https](https://mp.weixin.qq.com/s/geepUXBRFXK6X8Xocp3YPw)

   - web缓存  
   [参考](../imgs/web_cache.jpg)

   - 互联网网络传输协议  
   <a href='http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html' target='_blank'>参考</a>
   
   - 页面输入url后发生什么  
   <a href='https://www.cnblogs.com/jesse131/p/6215961.html' target="_blank">参考<a>  

   - Web 实时推送技术的总结  
    [参考](https://mp.weixin.qq.com/s/23unZJrMP9sVe5PTCApzGQ)  

   - Web安全  
    [xss csrf](https://mp.weixin.qq.com/s/Rf4dag7Z1rFNl4LxbAjyqw)  

## back-end

### 1. **nodejs**   
   - 版本管理  
     [跨平台的nvs](https://github.com/jasongin/nvs)  

   - 参考书籍  
     [koa与nodejs开发实战](https://download.csdn.net/download/easyprogramming/10981415)

   - nodejs常见基础问题  
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

   - koa2  
     [koa2中间件机制](https://blog.csdn.net/u011392772/article/details/81153795)  

### 2. **database** 

   - mongo & redis   
     [mongo](http://www.runoob.com/mongodb/mongodb-tutorial.html)   
     [redis](http://www.runoob.com/redis/redis-tutorial.html)
     
    
### 3. **linux**   
      
   - 基础
     [常用命令](./docs/linux常用命令.docx)  
     [CentOS6.5将shell脚本设置为服务和开机启动的方法](https://blog.csdn.net/e_wsq/article/details/79885180)

### 4. **git**   
      
   - 基础  
     [常用命令](./docs/git_useages.md)  
     [git merge 与 git rebase的区别1](https://blog.csdn.net/liuxiaoheng1992/article/details/79108233)  
     [git merge 与 git rebase的区别2](https://blog.csdn.net/jfkidear/article/details/84189098)  