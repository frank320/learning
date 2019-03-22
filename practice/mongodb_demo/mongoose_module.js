/**
 * Created by frank on 2016/11/30.
 * mongodb demo
 */
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
const user = require('./database/db')

//模板初始化设置 默认使用根目录中views文件下的html文件作为模板 模板使用原生语法写 <%=  %>
app.set('views', __dirname + '/www') //设置模板路径

// 默认模板路径为 app.set('views',__dirname + '/views')
//默认模板为 app.set('view engine', 'ejs')

//设置以html文件作为模板文件
app.set('view engine', 'html')
app.engine('.html', ejs.__express)

//ejs相关知识点
//1.页面布局
//默认
// app.set('view options', {
//  layout: false//默认true
//});
//自定义
// function(req, res) {
//res.render('userlist', {
//  title: '用户列表后台管理系统',
//  layout: 'admin'//设置布局页面
//});
//};

//2.片段视图
//app.get('/list', function(req, res) {
//  res.render('list', {
//    title: 'List',
//    items: [1991, 'byvoid', 'express', 'Node.js']
//  });
//});
//在 views 目录下新建 list.ejs，内容是：
//<ul><%- include('listitem', items) %></ul>
//同时新建 listitem.ejs，内容是：
//<li><%= listitem %></li>
//3.视图助手
//视图助手的本质其实就是给所有视图注册了 全局变量 ，因此无需每次在调用模板引擎时传递数据对象
//静态视图助手可以通过 app.helpers() 函数注册，它接受一个对象，对象的每个属性名
//称为视图助手的名称，属性值对应视图助手的值。动态视图助手则通过 app.dynamicHelpers()
//注册，方法与静态视图助手相同，但每个属性的值必须为一个函数，该函数提供 req 和 res，
//参见下面这个示例：
//app.helpers({
//  inspect: function(obj) {
//    return util.inspect(obj, true);//以字符串的形式输出对象
//  }
//});
//app.dynamicHelpers({
//  headers: function(req, res) {
//    return req.headers;
//  }
//});


//载入处理请求体的中间件
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//处理请求
app.get('/', (req, res)=> {
  res.render('index', {title: '首页', name: 'frank'})
})
app.get('/login', (req, res)=> {
  res.render('login', {title: 'login'})
})
app.post('/ucenter', (req, res)=> {
  const query = {name: req.body.name, password: req.body.password};
  (function () {
    user.count(query, function (err, doc) {    //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
      console.log('doc', doc)
      if (doc > 0) {
        console.log(query.name + ": 登陆成功 " + new Date());
        res.render('ucenter', {title: 'ucenter'})
      } else {
        console.log(query.name + ": 登陆失败 " + new Date());
        res.redirect('/')
      }
    })
  })(query)
})


//监听80端口
app.listen(80, err=> {
  if (!err) console.log('server is running at localhost:80')
})
