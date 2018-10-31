<!-- [react实现局部热更新](https://blog.csdn.net/fay462298322/article/details/75029023) -->

<a href="https://blog.csdn.net/fay462298322/article/details/75029023" target="_blank">react实现局部热更新</a>

* win10搜索功能失效 解决办法
```
管理员方式 进入 powershell 输入一下命令

Get-AppXPackage -Name Microsoft.Windows.Cortana | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}

```
