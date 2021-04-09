/*
 * @Author: zhangshipeng
 * @Description: webpack插件
 * @Date: 2021-01-04 16:59:07
 * @LastEditTime: 2021-01-04 17:51:22
 */

// class MyWebpackPlugin {
//   constructor(options) {
//     this.options = options;
//   }
//   apply(compiler) {
//     compiler.hooks.done.tap("MYWebpackPlugin", () => {
//       console.log(this.options);
//     });
//   }
// }

/**
 * @name: FileListPlugin
 * @description: 生成打包后文件的清单
 * @param {*}
 * @return {*}
 */
 class FileListPlugin {
  constructor(options) {
    // 获取插件配置项
    this.filename =
      options && options.filename ? options.filename : "FILELIST.md";
  }

  apply(compiler) {
    console.log(compiler);
    //compiler 上暴露的一些常用的钩子：
    compiler.hooks.run.tap("run", () => {
      console.log("开始编译...");
    });

    compiler.hooks.compile.tap("compile", () => {
      console.log("compile");
    });

    compiler.hooks.done.tap("compilation", () => {
      console.log("compilation");
    });

    // 注册 compiler 上的 emit 钩子
    compiler.hooks.emit.tapAsync("FileListPlugin", (compilation, cb) => {
      // 通过 compilation.assets 获取文件数量
      const len = Object.keys(compilation.assets).length;

      // 添加统计信息
      let content = `# ${len} file${len > 1 ? "s" : ""} emitted by webpack\n\n`;

      // 通过 compilation.assets 获取文件名列表
      for (const filename in compilation.assets) {
        content += `- ${filename}\n`;
      }

      // 往 compilation.assets 中添加清单文件
      compilation.assets[this.filename] = {
        // 写入新文件的内容
        source: function() {
          return content;
        },
        // 新文件大小（给 webapck 输出展示用）
        size: function() {
          return content.length;
        }
      };

      // 执行回调，让 webpack 继续执行
      cb();
    });
  }
}

/**
 * @name: RemoveCommentPlugin
 * @description: 去掉注释
 * @param {*}
 * @return {*}
 */
// class RemoveCommentPlugin {
//   constructor(options) {
//     this.options = options;
//   }
//   apply(compiler) {
//     // 去除注释正则
//     const reg = /("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n))|(\/\*(\n|.)*?\*\/)|(\/\*\*\*\*\*\*\/)/g;

//     compiler.hooks.emit.tap("RemoveComment", compilation => {
//       // 遍历构建产物，.assets中包含构建产物的文件名
//       Object.keys(compilation.assets).forEach(item => {
//         // .source()是获取构建产物的文本
//         let content = compilation.assets[item].source();
//         content = content.replace(reg, word => {
//           // 去除注释后的文本
//           return /^\/{2,}/.test(word) ||
//             /^\/\*!/.test(word) ||
//             /^\/\*{3,}\//.test(word)
//             ? ""
//             : word;
//         });
//         // 更新构建产物对象
//         compilation.assets[item] = {
//           source: () => content,
//           size: () => content.length
//         };
//       });
//     });
//   }
// }

module.exports = FileListPlugin;
