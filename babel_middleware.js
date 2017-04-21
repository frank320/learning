/**
 * Created by wikeLi on 2017/1/9.
 * babel-register的使用
 */
//转码es6
// 需要注意的是，babel-register只会对require命令加载的文件转码，而不会对当前文件转码。
// 另外，由于它是实时转码，所以只适合在开发环境使用
require('babel-register')
//app入口
require('./rest')