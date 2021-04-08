# docs for learning IT

some topics you should know  as a full-stack enginner !

## front-end

### 1. **html js css && react/vue**

   - react官方  
     [hooks](https://zh-hans.reactjs.org/docs/hooks-effect.html)
     [v17新特性](https://juejin.cn/post/6885881513741647886)

   - react组件生命周期  
     [周期总结 v16.3之前](https://www.jianshu.com/p/4784216b8194)  
     [周期总结 v16.3之后](https://mp.weixin.qq.com/s/Lp-pXHdg48d-TV0QsJOcwA)  
     [React.createElement 与 JSX](https://www.jianshu.com/p/42a3ec621e94)  
     [基本概念](https://mp.weixin.qq.com/s/Q4tVWxACmw1Rd8fQHfC-ow)
     
   - react组件间通信  
     [参考](https://www.jianshu.com/p/fb915d9c99c4)
   - react diff算法浅析  
     [参考](https://zhuanlan.zhihu.com/p/20346379)
  
   - react中setState方法是异步执行
   > setState方法与包含在其中的执行是一个很复杂的过程，这段程式码从React最初的版本到现在，也有无数次的修改。它的工作除了要更动this.state之外，还要负责触发重新渲染(render)，这里面要经过React核心中diff演算法，最终才能决定是否要进行重渲染，以及如何渲染。而且为了批次与效能的理由，多个setState呼叫有可能在执行过程中还需要被合并，所以它被设计以异步的或延时的来进行执行是相当合理的。
   
   - setState以同步方式执行
   > 在React库控制之外时，它就会以同步的方式来执行  
     [demo](https://www.bennadel.com/blog/2893-setstate-state-mutation-operation-may-be-synchronous-in-reactjs.htm)

   - react源码分析    
     [小结](https://www.jianshu.com/p/8af5be333b5f)  
     [全面分析](https://juejin.im/post/5a84682ef265da4e83266cc4)  
     [setState源码分析](https://juejin.im/post/5aa25967518825558251f61f#heading-0)  
     [React Fiber理解](https://juejin.im/entry/5b9885496fb9a05cf3711471)  
     [react fiber架构](http://www.sohu.com/a/295391278_463970)  
     [react hooks使用](https://zh-hans.reactjs.org/docs/hooks-intro.html)   
     [react hook源码浅析](https://blog.csdn.net/sinat_17775997/article/details/94451690) 


   - react性能优化  
     [v16加载优化](https://blog.csdn.net/xiaoguang44/article/details/80436952)  
     [常见优化项](https://mp.weixin.qq.com/s/PSYm43GkIR9tZVWpAEWrNA)  
     [react按需加载原理](https://ccbeango.github.io/React/React%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD%EF%BC%88%E4%B8%8B%EF%BC%89/)  
     [React.memo()](https://www.jianshu.com/p/b3d07860b778)  
  
   - redux  
     [Redux中间件与异步action](https://blog.csdn.net/awaw00/article/details/55668558)  
     [Connect源码分析](https://www.jianshu.com/p/e3cdce986ee2)  
     [源码解析](https://www.jianshu.com/p/728dbb1de25e)  
     [redux-starter-kit](https://github.com/reduxjs/redux-starter-kit)  
   
   - reselect  
     [简介](https://www.jianshu.com/p/b9153e4952bb)  
     [为什么我们需要reselect](https://segmentfault.com/a/1190000011936772)
     
   - Express, Koa, Redux中间件的区别  
     [参考](https://www.jianshu.com/p/70fb2405b281)

   - Immutable Data(immutable.js,immer模块)  
     [immer简介及源码解析](https://segmentfault.com/a/1190000013088373)  
     [immer实战讲解](https://blog.csdn.net/qq_30552845/article/details/84989438)
   
   - vue  
     [简史](https://juejin.im/post/5c7c97f6f265da2de7136c59#heading-6)

   - H5  
     [移动端性能优化介绍](https://mp.weixin.qq.com/s/pSD463u7SM_066PA5Z4n4g)  
    
     
   - Web渲染  
    [渲染过程](https://github.com/laoqiren/web-performance/blob/master/%E7%BD%91%E9%A1%B5%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B.md)  
    [资源加载顺序](https://github.com/laoqiren/web-performance/blob/master/%E7%BD%91%E9%A1%B5%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/%E8%B5%84%E6%BA%90%E5%8A%A0%E8%BD%BD%E9%A1%BA%E5%BA%8F.md)  
    
   - web网站性能优化  
    [参考](https://www.zhihu.com/question/21658448)  
    [页面性能优化](https://mp.weixin.qq.com/s/DapiwE-AhML-Mm4r0b_sWg)
    
   - css   
    [性能优化](https://www.zhihu.com/question/19886806)  
    [BFC](https://www.cnblogs.com/chen-cong/p/7862832.html)  
    [水平垂直居中](https://www.cnblogs.com/cme-kai/p/6192544.html)  
    [清除浮动几种方式](https://www.cnblogs.com/nxl0908/p/7245460.html)  
    [rem适配](https://segmentfault.com/a/1190000012225828)  
    
   - js中判断数组的几种方式  
    [参考](https://www.cnblogs.com/heshan1992/p/6927690.html)
    
   - call apply bind区别  
     [参考](https://www.cnblogs.com/Jade-Liu18831/p/9580410.html)

   - mobx基础    
     [参考](https://www.jianshu.com/p/505d9d9fe36a)  
     [redux mobx对比](https://www.jianshu.com/p/c7e06cee4ea6)

   - js执行过程  
     [js引擎执行过程](http://www.cnblogs.com/chengxs/p/10240163.html)
     + 函数提升优先级比变量提升要高，且不会被变量声明覆盖，但是会被变量赋值覆盖;在编译阶段，后面的变量声明遇到前面有冲突的变量声明或者函数声明，都会忽略;
   
   - Promise实现  
     [用法](http://es6.ruanyifeng.com/#docs/promise)  
     [源码实现](https://segmentfault.com/a/1190000018769632?utm_source=tag-newest)

   - ES6  
     [总结](./docs/es6.md)  
     [es6入门](http://es6.ruanyifeng.com/#docs/intro)  

   - 算法相关  
     [知识点](./docs/算法相关.md)

   - webassembly  
     [WebAssembly实战](https://segmentfault.com/a/1190000008402872)
     
   - 微前端  
    [EMP微前端解决方案](https://mp.weixin.qq.com/s/l0-uCLFRcBBrs4yTiAvryg)  
    [微前端调研及简析SPA实现原理](https://zhuanlan.zhihu.com/p/144545551)  
    [qiankun](https://qiankun.umijs.org/zh/guide/getting-started)  

   - react native  
    [ReactNative原理浅析](https://zhuanlan.zhihu.com/p/81000495)
    

### 2. **webpack**
   
   - webpack优化建议  
   [打包性能优化](http://www.cnblogs.com/powertoolsteam/p/Webpack.html)  
   [缩小js包体积](https://blog.csdn.net/code_for_free/article/details/51583737)  
   [React Code-Splitting](https://www.jianshu.com/p/5bb70b2c52c3)

   - webpack学习
   [webpack插件原理分析及编写示例](https://mp.weixin.qq.com/s/E1bjaJMC4DAmxfTGyGtXbw)  
   [webpack5新特性](https://www.jb51.net/article/197239.htm)  
   [联邦模块-示例](https://zhuanlan.zhihu.com/p/148869581)  
   [联邦模块-更多示例参考](https://github.com/module-federation/module-federation-examples)


### 3. **web网络基础**

   - http协议  
    [简介](https://www.cnblogs.com/ranyonsue/p/5984001.html)  
    [发展](./docs/http_history.md)  
    [https](https://mp.weixin.qq.com/s/geepUXBRFXK6X8Xocp3YPw)

   - web缓存  
   [参考](./imgs/web_cache.jpg)

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

   - 参考书籍  
     [koa与nodejs开发实战](https://download.csdn.net/download/easyprogramming/10981415)

   - nodejs常见基础问题  
    [参考](https://github.com/jimuyouyou/node-interview-questions)
    
   - nodejs中的stream  
     [参考](http://blog.csdn.net/weixin_39573030/article/details/79345305)
    
   - nodejs集群部署、负载均衡
     1. 单机集群 pm2模块负载均衡
     2. 多机集群 
     > http-proxy/nginx反向代理  
     [参考](http://blog.csdn.net/future_challenger/article/details/47087123)  
     
     > nginx配置静态资源服务器  
     [参考](http://blog.csdn.net/zzq900503/article/details/72821081)
     
     > docker部署  
     [参考](http://blog.csdn.net/qq_36892341/article/details/73918672)  
     [参考](https://www.jianshu.com/p/ab76ba86eafc)

  -  nodejs监控预警  
     > Easy-Monitor模块(函数性能监控)  
     [参考](https://cnodejs.org/topic/58d0dd8b17f61387400b7de5)  
     > alinode平台  
     [参考](https://help.aliyun.com/document_detail/60338.html?spm=a2c4g.11186623.6.545.VJaKGB)  
      
   - nodejs中处理大量数据时如何防止栈溢出
     1. 递归实现(尾调用优化)
     2. 数据分段处理

   - koa2  
     [koa2中间件机制](https://blog.csdn.net/u011392772/article/details/81153795)  
     [koa2开发目录结构](https://github.com/ikcamp/koa2-tutorial/tree/master/code)

   - 命令行工具  
     [参考文档1](https://www.jianshu.com/p/5eb17a9e8ddc)  
     [参考文档2](https://www.sohu.com/a/275486462_495695)

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


## 大前端基础建设
   
  1. [基础建设方向](https://juejin.im/post/5e644a65518825495d69bca6)  
  2. [大前端趋势](https://mp.weixin.qq.com/s/slghkDUyng7tOha3JFzeCQ)

## 面试
  + [总结](https://juejin.cn/post/6844904080142237703#heading-4)  

## 其他  
+ 工具网站  
+ [流程图](https://www.processon.com/)  
+ [时序图](https://sequencediagram.org/index.html#initialData=sequenceDiagram%0Atitle%20%E9%A6%96%E9%A1%B5%EF%BC%8C%E4%B8%AA%E4%BA%BA%E9%A1%B5%E6%97%B6%E5%BA%8F%E5%9B%BE%0A%20%20%20%20actor%20user%0A%20%20%20%20participant%20frontEndHomepage%20%0A%20%20%20%20participant%20frontEndProfilePage%0A%20%20%20%20participant%20backend%0A%0Aactivate%20user%0Auser-%3EfrontEndHomepage%3A%E7%94%A8%E6%88%B7%E8%AE%BF%E9%97%AE%E9%B1%BC%E5%90%A7%E9%A6%96%E9%A1%B5%0Aactivate%20frontEndHomepage%0AfrontEndHomepage-%3Ebackend%3A%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E4%BF%A1%E6%81%AF%0Aactivate%20backend%0Abackend--%3E%3EfrontEndHomepage%3A%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%EF%BC%88%E5%8C%85%E5%90%ABuid)