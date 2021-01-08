<!--
 * @Author: zhangshipeng
 * @Description: 
 * @Date: 2021-01-04 13:53:08
 * @LastEditTime: 2021-01-08 11:57:21
-->


+ win10搜索功能失效 解决办法
```
管理员方式 进入 powershell 输入一下命令

Get-AppXPackage -Name Microsoft.Windows.Cortana | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}

```
+ win10激活专业版

```
  # 管理员身份打开cmd 输入以下3条命令
  
  slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX

  slmgr /skms zh.us.to

  slmgr /ato
```

+ git bash ‘node‘ 不是内部或外部命令，也不是可运行的程序 或批处理文件 解决方案

   [参考](https://blog.csdn.net/m0_37613019/article/details/108316113)
   
```
  C:\Program Files\nodejs>set path=%PATH%;
  C:\Program Files\nodejs>setx path “%PATH%”

```

+ vscode常用设置及快捷键使用

 - [vscode常用命令](https://blog.csdn.net/lhq186/article/details/78472081)

```
 
{
    "editor.fontSize": 18,
    "git.ignoreLegacyWarning": true,
    "workbench.colorTheme": "Monokai",
    "files.autoSave": "onFocusChange",
    "files.eol": "\n",
    "editor.formatOnType": true,
    "eslint.autoFixOnSave": true,
    "window.zoomLevel": 0,
    "editor.tabSize": 2,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ],
}


```

+ eslint  

  [关于eslint使用规则，和各种报错对应规则](https://www.jianshu.com/p/421c66111c06)