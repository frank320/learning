// gulp的任务是控制执行流程，webpack的任务是处理复杂引用的依赖

var gulp = require('gulp');
// 删除文件和目录
var del = require('del');
// 按顺序执行
var gulpSequence = require('gulp-sequence');
// 引入webpack的本地模块
var webpack = require("webpack");
// 引入webpack的配置文件
var webpackConfig = require("./webpack.publish.config.js");

gulp.task('default',['sequence'], function() {
    console.log("项目构建成功");
});

// 流程控制
gulp.task('sequence', gulpSequence('clean','webpack'));

// 删除文件和文件夹
gulp.task('clean', function(cb) {
    //del('dist);// 如果直接给dist的目录，项目启动的顺序还有清除结果会报错，所以要写的更详细一些
    del(['dist/**/*.*']);
    setTimeout(function(){
        return cb();
    },2000)

});

gulp.task('webpack',[], function(cb) {
    setTimeout(function(){
        // 执行webpack的构建任务
        webpack(webpackConfig, function (err, stats) {

            if (err){
                console.log("构建任务失败");
            }else{
                cb();
            }

        });
    },1000)

});