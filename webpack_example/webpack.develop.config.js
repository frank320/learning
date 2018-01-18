var path = require('path')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports = {
  // entry: [
  //   'webpack/hot/dev-server',
  //   'webpack-dev-server/client?http://localhost:8081',
  //   path.resolve(__dirname, 'src/js/app.js')
  // ],
  entry:path.resolve(__dirname,'src/js/app.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //使用webpack-dev-server构建时　不会在dist目录下生成该文件  生成的bundle.js在内存中
  },
  module: {
    //noParse: [pathToReact, pathToReactDom,pathToReactRouter],
    loaders: [
      {
        // babel-loader的作用就是处理ES6语法和jsx语法的，会把他们变为es5的语法
        test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
        exclude: ['node_modules/'],// 匹配到的文件夹目录不走这个babel-loader
        query: {
          presets: ['es2015', 'react', 'stage-0', 'stage-1', 'stage-2', 'stage-3']
        }
      },
      {
        // 处理css文件的
        test: /\.css$/, // 匹配我们的css文件
        loader: 'style!css' // 同时运行两个loader，中间用！连接，同时用了多个loader的执行顺序是从右往左
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000' //1b=8bit    1kb=1024b  ~3kb
      }
    ]
  },
  resolve: {
    // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    // 注意一下, extensions 第一个是空字符串! 对应不需要后缀的情况.
    extensions: ['', '.js', '.json', '.scss', '.jsx'],
    // 模块别名定义，方便后续直接引用别名，无须多写长长的地址。后续直接 require('AppStore') 即可  很少用
    //alias: {
    //  AppStore: 'js/stores/AppStores.js',
    //  ActionType: 'js/actions/ActionType.js',
    //  AppAction: 'js/actions/AppAction.js'
    //}
  },
  //自动在浏览器中启动引用
  plugins: [
    new OpenBrowserPlugin({url: 'http://localhost:8079/', browser: 'chrome'})
  ]

}
