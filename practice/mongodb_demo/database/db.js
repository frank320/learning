/**
 * Created by frank on 2016/11/30.
 * 数据库模型
 */
const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://localhost/hicamp')//连接数据库hicamp
const Schema = mongoose.Schema//创建模型
const userSchema = new Schema({
  name: String,
  password: String
})//定义一个模型 但未与users集合关联
const user = db.model('users', userSchema)//与users集合相关联 如果没有该集合 则会创建该集合
//初始化users集合中的数据 (添加两条 需写成数组的形式)
//user.create([{
//  name: 'jim',
//  password: '456'
//}, {
//  name: 'zsp',
//  password: "520"
//}], err=> {
//  if (!err) console.log('creste one document successfully')
//})

module.exports = user

