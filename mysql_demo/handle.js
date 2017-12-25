const connection = require('./app')
//创建表
// const table_name = 'log'
// const sql = `CREATE TABLE IF NOT EXISTS ${table_name}(
//     log_id INT UNSIGNED AUTO_INCREMENT,
//     data VARCHAR(100) NOT NULL,
//     PRIMARY KEY (log_id)
//     )ENGINE=InnoDB DEFAULT CHARSET=utf8`
// connection.query(sql, function (error, results, fields) {
//   if (error) throw error
//   console.log('创建表成功')
//   // ...
// })

//删除表
// connection.query('DROP TABLE post', function (error, results, fields) {
//   if (error) throw error;
//   console.log('删除表成功')
//   // ...
// })

//插入数据
// const post = {title: 'Hello redis'}
// connection.query('INSERT INTO post SET ?', post, function (error, results, fields) {
//   if (error) throw error
//   console.log('数据插入成功')
// })

//更新数据
// connection.query('UPDATE post SET title = ? WHERE id = ?', ['mongo', 2], function (error, results, fields) {
//   if (error) throw error;
//   console.log('修改数据成功')
//   // ...
// })

//查询数据
// connection.query('SELECT * FROM post WHERE id = ?', [3], function (error, results, fields) {
//   if (error) throw error;
//   //console.log(results[0].title)
//   // ...
// });

// var userId = 1;
// var columns = ['title'];
// var query = connection.query('SELECT ?? FROM ?? WHERE id = ?', [columns, 'post', userId], function (error, results, fields) {
//   if (error) throw error;
//   console.log(results)
//   // ...
// });
//console.log(query.sql); // SELECT `username`, `email` FROM `users` WHERE id = 1

//删除数据
// connection.query('DELETE FROM post WHERE id = ?', [3], function (error, results, fields) {
//   if (error) throw error;
//   console.log('删除成功')
//   // ...
// });

//事务
const title = 'Hello tom'
connection.beginTransaction(function (err) {
  if (err) { throw err }
  connection.query('INSERT INTO post SET title=?', title, function (error, results, fields) {
    if (error) {
      return connection.rollback(function () {
        throw error
      })
    }

    var log = 'Post ' + results.insertId + ' added'

    connection.query('INSERT INTO log SET data=?', log, function (error, results, fields) {
      if (error) {
        return connection.rollback(function () {
          throw error
        })
      }
      connection.commit(function (err) {
        if (err) {
          return connection.rollback(function () {
            throw err
          })
        }
        console.log('success!')
      })
    })
  })
})
//connection.end()