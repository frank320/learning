<!--
 * @Author: zhangshipeng
 * @Description: 
 * @Date: 2021-01-04 13:53:08
 * @LastEditTime: 2021-01-04 15:04:00
-->
<!-- [react实现局部热更新](https://blog.csdn.net/fay462298322/article/details/75029023) -->

<a href="https://blog.csdn.net/fay462298322/article/details/75029023" target="_blank">react实现局部热更新</a>

* win10搜索功能失效 解决办法
```
管理员方式 进入 powershell 输入一下命令

Get-AppXPackage -Name Microsoft.Windows.Cortana | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}

```
<a href="http://www.xitongcheng.com/jiaocheng/win10_article_44841.html" target="_blank">win10企业版激活成功后变成教育版如何恢复</a>

+ git bash ‘node‘ 不是内部或外部命令，也不是可运行的程序 或批处理文件 解决方案

```
  C:\Program Files\nodejs>set path=%PATH%;
  C:\Program Files\nodejs>setx path “%PATH%”
```