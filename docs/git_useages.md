<!--
 * @Author: zhangshipeng
 * @Description: 
 * @Date: 2021-01-04 13:53:08
 * @LastEditTime: 2021-01-07 12:09:53
-->
git pull origin 分支名  拉取远程服务器代码到本地

git log 查看提交历史(包括各个版本号)

git clone --depth=1 地址  克隆最后一次提交的代码到本地

git clone branch [分支名] 地址  克隆指定分支到本地

git branch 分支名  创建分支

git checkout 分支名  切换到指定分支

git branch -d 分支名  删除指定分支名

git checkout -b 分支名  创建并切换到指定分支


git reset --hard [版本号]  回滚到指定版本


git push origin 分支名 -f   强行覆盖远程服务器代码


git fetch --all
git reset --hard origin/分支名   强行覆盖本地代码


git rebase master 在旁路分支上导入主分支最新代码 

git merge 分支名  在主分支上合并旁路分支代码

+ [Git打Tag相关操作](https://www.jianshu.com/p/dab7da2a0721)


//一个分支完全替换另一个分支
git push origin develop:master -f
把本地的 develop 分支强制(-f)推送到远程 master

但是上面操作，本地的 master 分支还是旧的，通常来说应该在本地做好修改再去 push 到远端，所以我推荐如下操作
git checkout master // 切换到旧的分支
git reset --hard develop  // 将本地的旧分支 master 重置成 develop
git push origin master --force // 再推送到远程仓库

//创建分支和远程关联
1.如果本地新建了一个分支branch_name，但是在远程没有，这时候push和pull指令就无法确定该跟踪谁,一般来说我们都会使其跟踪远程同名分支，所以可以利用git push --set-upstream origin branch_name，这样就可以自动在远程创建一个branch_name分支，然后本地分支会track该分支。后面再对该分支使用push和pull就自动同步。无需再指定分支。

2.跟踪远程分支
1）如果远程新建了一个分支，本地没有该分支，可以用git checkout --track origin/branch_name，这时候本地会新建一个分支名叫branch_name，会自动跟踪远程的同名分支branch_name。

3. git branch --set-upstream debug origin/test 使用命令git branch –set-upstream ; test为创建的分支

//克隆远程所有分支到本地
1.git clone http://myrepo.xxx.com/project/.git 
2. cd project
   git branch
   *master  只显示master分支
3. git branch -a，列出所有远程分支名称如下：
remotes/origin/dev
4. git checkout -b dev origin/dev，作用是checkout远程的dev分支，在本地起名为dev分支，并切换到本地的dev分支
或者
git fetch origin develop:develop(remote branch)  在本地创建一个develop分支，并且把它和远程develop关联起来。

# mac上bash
+ [补全命令](https://segmentfault.com/a/1190000022075532)
+ [显示分支](https://www.jianshu.com/p/bb2f9df51778)






