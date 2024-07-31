# docs for learning IT

some topics you should know  as a full-stack enginner !

## front-end

### 1. **html js css && react/vue**

   - react官方  
     [hooks](https://zh-hans.reactjs.org/docs/hooks-effect.html)
     [v17新特性](https://juejin.cn/post/6885881513741647886)  
     [v18概览](https://mp.weixin.qq.com/s/QRlZrHMT5Sscn58N5uN_xw)

   - react组件生命周期  
     [周期总结 v16.3之前](https://www.jianshu.com/p/4784216b8194)  
     [周期总结 v16.3之后](https://mp.weixin.qq.com/s/Lp-pXHdg48d-TV0QsJOcwA)  
     [React.createElement 与 JSX](https://www.jianshu.com/p/42a3ec621e94)  
     [基本概念](https://mp.weixin.qq.com/s/Q4tVWxACmw1Rd8fQHfC-ow)  
     
   - react组件间通信  
     [参考](https://www.jianshu.com/p/fb915d9c99c4)
   - react diff算法浅析  
     [参考](https://zhuanlan.zhihu.com/p/20346379)  
     [react对比vue](https://blog.csdn.net/sinat_41696687/article/details/123311438)  
     ```
     vue会遍历data数据对象，使用Object.definedProperty()将每个属性都转换为getter和setter，每个Vue组件实例都有一个对应的watcher实例，在组件初次渲染的时候会记录组件用到了那些数据，当数据发生改变的时候，会触发setter方法，并通知所有依赖这个数据的watcher实例调用update方法去触发组件的compile渲染方法，进行渲染数据。

     ```
 


   - react源码分析    
     [小结](https://www.jianshu.com/p/8af5be333b5f)  
     [全面分析](https://juejin.im/post/5a84682ef265da4e83266cc4)
     [合成事件](https://juejin.cn/post/6994355922399297549)  
     [setState源码分析](https://juejin.im/post/5aa25967518825558251f61f#heading-0)  
     [React Fiber理解](https://juejin.im/entry/5b9885496fb9a05cf3711471)  
     [react hooks使用](https://zh-hans.reactjs.org/docs/hooks-intro.html)  
     [hook使用示例](https://juejin.cn/post/6948748617817522206#heading-3) 
     [useCallback和useMemo的区别](https://juejin.cn/post/6844904032113278990)
     [react hooks原理](https://zhuanlan.zhihu.com/p/443264124)  
     [react单元测试 jest +  @testing-library/react](https://www.jianshu.com/p/56196ca98c5d)  
     [react单元测试](https://zhuanlan.zhihu.com/p/459698860)


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
   - react服务端渲染  
     [详解React服务端渲染ssr](https://www.jb51.net/article/158625.htm)

   - Express, Koa, Redux中间件的区别  
     [参考](https://www.jianshu.com/p/70fb2405b281)

   - Immutable Data(immutable.js,immer模块)  
     [immer简介及源码解析](https://segmentfault.com/a/1190000013088373)  
     [immer实战讲解](https://blog.csdn.net/qq_30552845/article/details/84989438)
   
   - vue  
     [简史](https://juejin.im/post/5c7c97f6f265da2de7136c59#heading-6)  
     [vue通信](https://blog.csdn.net/jiangjunyuan168/article/details/122640925)  
     [vue3组件通信](https://blog.csdn.net/snsHL9db69ccu1aIKl9r/article/details/124506851)
     [defineProperty Proxy](https://wenku.baidu.com/view/feb5c51740323968011ca300a6c30c225901f03b.html)

   - H5  
     [移动端性能优化介绍](https://mp.weixin.qq.com/s/pSD463u7SM_066PA5Z4n4g)  
    
  
   - Web渲染  
    [渲染过程](https://github.com/laoqiren/web-performance/blob/master/%E7%BD%91%E9%A1%B5%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B.md)  
    [资源加载顺序](https://github.com/laoqiren/web-performance/blob/master/%E7%BD%91%E9%A1%B5%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/%E8%B5%84%E6%BA%90%E5%8A%A0%E8%BD%BD%E9%A1%BA%E5%BA%8F.md)  
    
   - web网站性能优化  
    [页面性能优化](https://mp.weixin.qq.com/s/DapiwE-AhML-Mm4r0b_sWg)  
    [web常见性能优化](https://www.jianshu.com/p/3d06fd263be3)
   - css   
    [性能优化](https://www.zhihu.com/question/19886806)  
    [BFC](https://www.cnblogs.com/chen-cong/p/7862832.html)  
    [水平垂直居中](https://www.cnblogs.com/cme-kai/p/6192544.html)  
    [清除浮动几种方式](https://www.cnblogs.com/nxl0908/p/7245460.html)  
    [rem适配](https://segmentfault.com/a/1190000012225828)  
    
   - js中判断数组的几种方式  
    [参考](https://www.cnblogs.com/heshan1992/p/6927690.html)

   - 发布/订阅  
    [手写发布订阅](https://blog.csdn.net/qq_39953537/article/details/102685328) 

   - call apply bind区别  
     [参考](https://www.cnblogs.com/Jade-Liu18831/p/9580410.html)

   - mobx基础    
     [参考](https://www.jianshu.com/p/505d9d9fe36a)  
     [redux mobx对比](https://blog.csdn.net/weixin_44369568/article/details/90713881)

   - js相关   
     + [js引擎执行过程](http://www.cnblogs.com/chengxs/p/10240163.html)
     + 函数提升优先级比变量提升要高，且不会被变量声明覆盖，但是会被变量赋值覆盖;在编译阶段，后面的变量声明遇到前面有冲突的变量声明或者函数声明，都会忽略;  
     + [闭包理解](https://mp.weixin.qq.com/s/tGEebLD4UncxEyn3YkK8Xw)  
     + [JavaScript中AST详解](https://www.jianshu.com/p/d37d540ea0d9)  
     + [设计模式](https://www.jianshu.com/p/19a8c1d76257)  
     + [mvvm理解](https://blog.csdn.net/jslyty/article/details/109482723)  
     + [正则语法](https://blog.csdn.net/qq_41580536/article/details/118565378)  
     + [js垃圾回收](https://zhuanlan.zhihu.com/p/23992332)  
     + [jsbridge原理](https://blog.csdn.net/yuzhengfei7/article/details/93468914)  
     + [web大文件上传](https://blog.csdn.net/u014609111/article/details/118336703)
     + [前端工程化](https://www.cnblogs.com/aloneindefeat/p/13279328.html)
     + [npm yarn区别](https://www.csdn.net/tags/MtTaMg5sMjkzMzktYmxvZwO0O0OO0O0O.html)
     + [实现new运算符](https://blog.csdn.net/MFWSCQ/article/details/106134901)
     + [js继承](https://www.jianshu.com/p/5bae725b9902)
     + [纯函数理解](https://blog.csdn.net/qq_40413670/article/details/112720224)
     + [ts基础](https://mp.weixin.qq.com/s/Bo3Z8vzFkCvfDJDoKzxr8w)
     + [ts高级技巧](https://www.jianshu.com/p/0543bd031166)
     + [react中ts技巧](https://mp.weixin.qq.com/s/MLZQfsdGASCE_QivWn47rg)
  
   - Promise实现  
     [用法](http://es6.ruanyifeng.com/#docs/promise)  
     [源码实现](https://segmentfault.com/a/1190000018769632?utm_source=tag-newest)

   - ES6  
     [总结](./docs/es6.md)  
     [es6入门](http://es6.ruanyifeng.com/#docs/intro)  
   
   - 算法相关  
     [知识点](./docs/算法相关.md)

   - webassembly  
     [WebAssembly简介](https://blog.csdn.net/Cool2Feel/article/details/109257000)
     
   - 微前端  
    [EMP微前端解决方案](https://mp.weixin.qq.com/s/l0-uCLFRcBBrs4yTiAvryg)  
    [微前端理解](https://mp.weixin.qq.com/s/UteaepIALm6h7Iv5Kng0zg)  

   - react native  
    [跨平台RN](https://zhuanlan.zhihu.com/p/441221144)
    
   - web worker  
    [基础](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)  

  + [webRtc简介](https://zhuanlan.zhihu.com/p/421503695)

  + [gatsby框架简介](https://zhuanlan.zhihu.com/p/364018994)
  + [antd按需加载](https://blog.csdn.net/weixin_34192993/article/details/91425627)
  + [webGL学习](http://www.hewebgl.com/article/articledir/1)
  + [three.js学习](http://www.webgl3d.cn/links/videoTutorial.html)
  + [three.js入门](https://www.jianshu.com/p/ceb2b688b0f2)
  + [next.js入门](https://blog.csdn.net/weixin_44283145/article/details/109288765)
  + [web性能监控](https://blog.csdn.net/snsHL9db69ccu1aIKl9r/article/details/124506851)
### 2. **webpack**
   
   - webpack优化建议  
   [打包性能优化](http://www.cnblogs.com/powertoolsteam/p/Webpack.html)  
   [缩小js包体积](https://blog.csdn.net/code_for_free/article/details/51583737)  
   [React Code-Splitting](https://www.jianshu.com/p/5bb70b2c52c3)

   - webpack学习  
   [webpack执行过程](https://mp.weixin.qq.com/s/pvtrqnRzHyBFOydwnN_4ew)
   [webpack插件原理分析及编写示例](https://mp.weixin.qq.com/s/E1bjaJMC4DAmxfTGyGtXbw)  
   [webpack5新特性](https://www.jb51.net/article/197239.htm)  
   [联邦模块-示例](https://zhuanlan.zhihu.com/p/148869581)  
   [联邦模块-更多示例参考](https://github.com/module-federation/module-federation-examples)


### 3. **web网络基础**

   - http协议  
    [简介](https://www.cnblogs.com/ranyonsue/p/5984001.html)  
    [发展](./docs/http_history.md)  
    [https](https://mp.weixin.qq.com/s/geepUXBRFXK6X8Xocp3YPw)

   - auth
    [auth基础](https://docs.authing.cn/v2/concepts/authentication-vs-authorization.html)

   - web缓存  
   [参考](./imgs/web_cache.jpg)

   - 互联网网络传输协议  
   <a href='http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html' target='_blank'>参考</a>
   
   - 页面输入url后发生什么  
   <a href='https://www.cnblogs.com/jesse131/p/6215961.html' target="_blank">参考<a>  

   - Web 实时推送技术的总结  
    [参考](https://mp.weixin.qq.com/s/23unZJrMP9sVe5PTCApzGQ)  
    [SSE](http://www.ruanyifeng.com/blog/2017/05/server-sent_events.html)

   - Web安全  
    [xss csrf](https://mp.weixin.qq.com/s/Rf4dag7Z1rFNl4LxbAjyqw)  

## back-end

### 1. **nodejs**   

   - 参考书籍  
     [koa与nodejs开发实战](https://download.csdn.net/download/easyprogramming/10981415)

   - nodejs常见基础问题  
    [参考](https://github.com/jimuyouyou/node-interview-questions)  
    [nodejs事件循环](http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html)  
    [cluster多进程监听同一端口号](https://cnodejs.org/topic/56e84480833b7c8a0492e20c)
    
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
     [参考文档](https://www.sohu.com/a/275486462_495695)  

   + [graphQL](https://blog.csdn.net/feiyingwang/article/details/113945807)
   + [graphQL简介学习](https://blog.csdn.net/cunjie3951/article/details/106918584?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-106918584-blog-113945807.pc_relevant_multi_platform_whitelistv1&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-106918584-blog-113945807.pc_relevant_multi_platform_whitelistv1&utm_relevant_index=1)

   + [TCP UDP 握手和挥手](https://blog.csdn.net/weixin_44828588/article/details/114886852)

   + [cors](https://blog.csdn.net/faith_girl/article/details/122704621)
   + [commonjs 和 es module区别](https://m.php.cn/article/489621.html)
   + [rxjs入门](https://www.jianshu.com/p/e83973caada2)

### 2. **database** 

   - mongo & redis   
     [mongo](http://www.runoob.com/mongodb/mongodb-tutorial.html)   
     [redis](http://www.runoob.com/redis/redis-tutorial.html)
     
    
### 3. **linux**   
      
   - 基础  
     [常用命令](./docs/linux常用命令.docx)  

### 4. **git**   
      
   - 基础  
     [常用命令](./docs/git_useages.md)  
     [git merge 与 git rebase的区别](https://www.jianshu.com/p/6960811ac89c)  


## 大前端基础建设
   
  1. [基础建设方向](https://juejin.im/post/5e644a65518825495d69bca6)  
  2. [大前端趋势](https://mp.weixin.qq.com/s/slghkDUyng7tOha3JFzeCQ)

## 面试
  + [总结](https://juejin.cn/post/6844904080142237703#heading-4)  
  + [百度面试题](https://zhuanlan.zhihu.com/p/496562294)

## 其他  
+ 工具网站  
+ [流程图](https://www.processon.com/)  
+ [时序图](https://sequencediagram.org/index.html#initialData=sequenceDiagram%0Atitle%20%E9%A6%96%E9%A1%B5%EF%BC%8C%E4%B8%AA%E4%BA%BA%E9%A1%B5%E6%97%B6%E5%BA%8F%E5%9B%BE%0A%20%20%20%20actor%20user%0A%20%20%20%20participant%20frontEndHomepage%20%0A%20%20%20%20participant%20frontEndProfilePage%0A%20%20%20%20participant%20backend%0A%0Aactivate%20user%0Auser-%3EfrontEndHomepage%3A%E7%94%A8%E6%88%B7%E8%AE%BF%E9%97%AE%E9%B1%BC%E5%90%A7%E9%A6%96%E9%A1%B5%0Aactivate%20frontEndHomepage%0AfrontEndHomepage-%3Ebackend%3A%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E4%BF%A1%E6%81%AF%0Aactivate%20backend%0Abackend--%3E%3EfrontEndHomepage%3A%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%EF%BC%88%E5%8C%85%E5%90%ABuid)`
