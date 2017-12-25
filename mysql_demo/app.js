const mysql = require('mysql')
const config = require('./config')

const connection = mysql.createConnection({
  host: config.mysql_host,
  port: config.mysql_port,
  user: 'root',
  password: 'sql_test',
  database: 'frank'
})

connection.connect(err => {
  if (err) throw err
  console.log('connect mysql success, the threadId  is --> ' + connection.threadId)
})
module.exports = connection
