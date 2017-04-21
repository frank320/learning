/**
 * Created by frank on 2016/12/15.
 * nodejs中充分运用多核cpu的cluster核心模块
 * 现在可以使用第三方包 pm2 来解决
 */
const os = require('os')
const cluster = require('cluster')
const http = require('http')

let workers = {}
if (cluster.isMaster) {
  //主进程分支监听  当一个工作进程结束时 重启一个工作进程
  cluster.on('death', worker=> {
    delete workers[worker.pid]
    worker = cluster.fork()
    workers[worker.pid] = worker
  })

  //初始时 根据cup数量 开启数量相同的工作进程
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork()
  }
} else {
  //工作进程分支 启动服务器
  const app = require('./test_cluster')
  const server = app.listen(3000, function (err) {
    if (!err) console.log(`server is running at localhost:${server.address().port}`)
  })
}

//当主进程被终止时 关闭所有工作进程
process.on('SIGTERM', function () {
  for (var pid in workers) {
    process.kill(pid);
  }
  process.exit(0);
});