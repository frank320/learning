### 背景
1. 多个开发者之间无法查看彼此本地开发页面
2. 本地不能方便调用各个环境服务端接口
3.  难以在线上(web直播间、app端等)直接调试本地代码和定位问题

### 解决方案
1. 关闭网络防火墙，webpack-devServer设置host: '0.0.0.0',  publicPath使用本机内网ip
2. 在 webpack-devServer中设置proxy ,其中target为各个环境的api域名(node启动app时设置api环境变量或手动修改)
3. 使用fiddler设置代理，线上页面url代理为本地开发的url (注意：publicPath需要使用本机内网ip)