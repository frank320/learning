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



//一个分支完全替换另一个分支
git push origin develop:master -f
把本地的 develop 分支强制(-f)推送到远程 master

但是上面操作，本地的 master 分支还是旧的，通常来说应该在本地做好修改再去 push 到远端，所以我推荐如下操作
git checkout master // 切换到旧的分支
git reset --hard develop  // 将本地的旧分支 master 重置成 develop
git push origin master --force // 再推送到远程仓库


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





