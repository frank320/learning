<!--
 * @Author: zhangshipeng
 * @Description: 
 * @Date: 2021-01-04 13:53:08
 * @LastEditTime: 2021-01-15 11:50:18
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

+ plantUML(画图工具)

  [参考链接](https://ephen.me/2017/VSCode_PlantUML/)

+ eslint  
  [use eslint in ts](https://segmentfault.com/a/1190000019661168)

+ Cloudflare
今天给大家介绍一下【CloudFlare的Worker免费部署代理服务】

CloudFlare是什么？

Cloudflare是一家美国的跨国科技企业，总部位于旧金山，在英国伦敦亦设有办事处。Cloudflare以向客户提供网站安全管理、性能优化及相关的技术支持为主要业务。通过基于反向代理的内容分发网络(CDN, Content Delivery Network)、任播(Anycast)技术  、基于nginx+lua架构的Web应用防火墙(WAF, Web Application Firewall)  及分布式域名解析服务(Distributed Domain Name Server)等技术，Cloudflare可以帮助受保护站点抵御包括分布式拒绝服务攻击(DDoS, Distributed Denial of Service)在内的大多数网络攻击，确保该网站长期在线，同时提升网站的性能、访问速度以改善访客体验。

CloudFlare的Worker是什么？

在边缘运行代码，提供强大的 Web 可扩展性
在边缘应用自定义安全规则和过滤逻辑来检测恶意 Bots 病毒并防止它们消耗资源，从而提高安全性。
将更多个性化和交互性纳入静态 HTML 页面，并在边缘运行动态请求，从而改善用户体验。
将更多操作流程和请求处理转移到边缘，以提高缓存命中率并降低带宽成本，从而降低运营成本。
————————————————
版权声明：本文为CSDN博主「Jum朱」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_22903531/article/details/109544730