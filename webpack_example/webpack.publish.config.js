var path = require('path');
var webpack = require('webpack');
// 删除文件夹插件
var CleanPlugin = require('clean-webpack-plugin');
// 抽取css文件的插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 自动生成html页面的插件
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
  // 指定打包的入口文件，entry可以是个字符串、数组、对象。一个键值对，就是一个入口文件
  entry: {
    app: path.resolve(__dirname, 'src/js/app'),
    // 分离第三方引用，比如var react= require('react')
    vendors: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[name]_[chunkhash:8]_chunk.js', //分离代码块
  },
  module: {
    loaders: [
      {
        // babel-loader的作用就是处理ES6语法和jsx语法的，会把他们变为es5的语法
        test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
        query: {
          presets: ['es2015', 'react', 'stage-0', 'stage-1', 'stage-2', 'stage-3']
        }
      },
      {
        // 处理css文件的
        test: /\.css$/, // 匹配我们的css文件
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        //loader: 'style!css' // 同时运行两个loader，中间用！连接，同时用了多个loader的执行顺序是从右往左
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        //loader: 'style!css!sass'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000&name=img/[name].[ext]' //1b=8bit    1kb=1024b  ~3kb
      }
    ]
  },
  resolve: {
    // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    // 注意一下, extensions 第一个是空字符串! 对应不需要后缀的情况.
    extensions: ['', '.js', '.json', '.scss', '.jsx'],
    // 模块别名定义，方便后续直接引用别名，无须多写长长的地址。后续直接 require('AppStore') 即可
    //alias: {
    //    AppStore: 'js/stores/AppStores.js',
    //    ActionType: 'js/actions/ActionType.js',
    //    AppAction: 'js/actions/AppAction.js'
    //}
  },

  // 在这个属性里面定义的包是不会被打包进bundle.js文件中  类似于分离第三方应用vendors
  // 如果你要用这个属性，别忘了在index.html中引入cdn
  //externals: {
  //    // 前边这个名称是在项目中引用用的，相当于import React from  ‘react1’中的react，
  //    //'react1':"react",
  //    'react':"react",
  //    'react-dom':"react-dom",
  //     '$1':"jQuery"
  //},
  plugins: [
    // 分离第三方应用插件,可以用很多次
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),
    // 压缩js文件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    //抽离css文件
    new ExtractTextPlugin("app.css"),
    //生成index.html文件
    new HtmlWebpackPlugin({
      template: './src/template.html',
      htmlWebpackPlugin: {
        "files": {
          "css": ["app.css"],
          "js": ["bundle.js", "vendors.js"]
        }
      },
      //效果不大，情怀至上
      //minify: {
      //  removeComments: true,
      //  collapseWhitespace: true,
      //  removeAttributeQuotes: true
      //}
    }),

    //以下插件用的比较少
    // 帮我们定义生产环境
    new webpack.DefinePlugin({
      //去掉react中的警告，react会自己判断
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // 允许错误不打断程序.报错但不退出webpack进程
    new webpack.NoErrorsPlugin()
    // 把指定文件夹xia的文件复制到指定的目录
    //new TransferWebpackPlugin([
    //    {from: 'www'}
    //], path.resolve(__dirname,"src"))
  ]
}





//// 动态添加插件
//// 丑化压缩文件插件,相当于-p  压缩js文件的插件
//webpackConfig.plugins.push(
//  new webpack.optimize.UglifyJsPlugin({
//    compress: {
//      warnings: false
//    }
//  })
//);
//
//webpackConfig.plugins.concat([
//  // Cleanup the builds/ folder before
//  // compiling our final assets
//  //new CleanPlugin('dist'),
//
//  // This plugin looks for similar chunks and files
//  // and merges them for better caching by the user
//  new webpack.optimize.DedupePlugin(),
//
//  // This plugins optimizes chunks and modules by
//  // how much they are used in your app
//  new webpack.optimize.OccurenceOrderPlugin(),
//
//  // This plugin prevents Webpack from creating chunks
//  // that would be too small to be worth loading separately
//  new webpack.optimize.MinChunkSizePlugin({
//    minChunkSize: 51200, // ~50kb
//  })
//]);


// 最后要把对象导出去
module.exports = webpackConfig
